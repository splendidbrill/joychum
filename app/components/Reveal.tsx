"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

/**
 * Fires once, the first time the element is at least 20% on screen — the
 * threshold and the one-shot unobserve both match the source design.
 */
export function useInView<T extends Element>(enabled = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!enabled);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (old browser, some test envs): reveal the node
    // directly rather than leave the page permanently blank. Written to the
    // DOM instead of through state — there is nothing to re-render for.
    if (typeof IntersectionObserver === "undefined") {
      const style = (el as unknown as HTMLElement).style;
      style.opacity = "1";
      style.transform = "none";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setInView(true);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** Staggers siblings in threes, as the source did: (index % 3) * 90ms. */
  index?: number;
  motion?: boolean;
  id?: string;
  style?: CSSProperties;
};

/**
 * The page's entrance animation: a 28px rise and fade, once, on scroll-in.
 *
 * With `motion` off it renders plainly and never observes anything. The
 * hidden state is inline rather than a CSS class so it cannot flash visible
 * before hydration; `app/layout.tsx` carries a <noscript> rule that forces
 * everything visible when JS never arrives.
 */
export default function Reveal({ children, index = 0, motion = true, id, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(motion);

  const animated: CSSProperties = motion
    ? {
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: `opacity .9s ${EASE}, transform .9s ${EASE}`,
        transitionDelay: `${(index % 3) * 90}ms`,
      }
    : {};

  return (
    <div ref={ref} id={id} data-reveal="" style={{ ...style, ...animated }}>
      {children}
    </div>
  );
}
