"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".hero__grid > div > *",
  ".hero__visual",
  ".band .container > :not(.split):not(ul):not(ol)",
  ".split > *",
  ".cards > li",
  ".features > li",
  ".section-head > *",
].join(",");

/**
 * Scroll-reveal for the page. Elements already on screen at load are left
 * alone so the hero never flashes; everything below the fold fades in once.
 * Renders nothing: the markup stays server-rendered.
 */
export default function PageEffects() {
  useEffect(() => {
    const root = document.documentElement;
    if (typeof IntersectionObserver === "undefined") return;

    const all = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    // Keep only outermost matches so nested elements don't animate twice.
    const outer = all.filter((el) => !all.some((o) => o !== el && o.contains(el)));
    const below = outer.filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    below.forEach((el) => {
      const sibs = Array.from(el.parentElement?.children ?? []).filter((c) =>
        below.includes(c as HTMLElement),
      );
      el.style.setProperty("--i", String(Math.min(sibs.indexOf(el), 4)));
      el.classList.add("reveal");
    });
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    below.forEach((el) => io.observe(el));

    // Print shows everything.
    const showAll = () => below.forEach((el) => el.classList.add("is-in"));
    window.addEventListener("beforeprint", showAll);

    return () => {
      io.disconnect();
      window.removeEventListener("beforeprint", showAll);
      below.forEach((el) => el.classList.remove("reveal", "is-in"));
      root.classList.remove("js");
    };
  }, []);

  return null;
}
