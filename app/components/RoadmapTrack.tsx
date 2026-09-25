"use client";

import type { ReactNode } from "react";
import { useInView } from "./Reveal";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

/**
 * The roadmap's horizontal rail: a dim track with a light line that draws
 * across it as the section scrolls in, with the milestone columns on top.
 */
export default function RoadmapTrack({
  children,
  motion = true,
}: {
  children: ReactNode;
  motion?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(motion);
  const filled = !motion || inView;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div
        style={{ position: "absolute", top: 7, left: 0, right: 0, height: 2, background: "#57534D" }}
        aria-hidden="true"
      />
      <div
        data-fill=""
        style={{
          position: "absolute",
          top: 7,
          left: 0,
          height: 2,
          background: "var(--ink-on-dark-muted)",
          width: filled ? "100%" : 0,
          transition: motion ? `width 2.2s ${EASE}` : undefined,
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
          gap: "28px 20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
