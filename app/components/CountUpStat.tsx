"use client";

import { useEffect, useRef } from "react";
import { useInView } from "./Reveal";

type CountUpStatProps = {
  /** Target value to count to. */
  n: number;
  /** Appended to the number, e.g. "M+" or "%". */
  suffix?: string;
  /** The exact figure, e.g. "90M+" — what shows before and after the count. */
  label: string;
  motion?: boolean;
};

const DURATION = 1400;

/**
 * A market stat that counts up the first time it scrolls into view, easing
 * out over 1.4s the way the source design did.
 *
 * The tick writes straight to the node rather than through state: it runs
 * every frame, and re-rendering for each one would be wasteful. The server
 * renders the real figure, so the number is correct before hydration and
 * stays correct with JS off.
 */
export default function CountUpStat({ n, suffix = "", label, motion = true }: CountUpStatProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(motion);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!motion || !inView || ranRef.current) return;
    const el = nodeRef.current;
    if (!el) return;
    ranRef.current = true;

    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / DURATION);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(n * eased) + suffix;
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [motion, inView, n, suffix]);

  return (
    <span
      ref={(node) => {
        ref.current = node;
        nodeRef.current = node;
      }}
      data-count={n}
      style={{
        fontSize: "clamp(48px, 5.4vw, 72px)",
        fontWeight: 500,
        letterSpacing: "-0.04em",
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
}
