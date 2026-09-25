"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./Reveal";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

/**
 * The falling Dual-Task Cost line, drawn on as it scrolls into view, with
 * the end dot fading in behind it.
 *
 * The dash length has to come from the live path (getTotalLength), so the
 * stroke stays hidden until that measurement lands — otherwise the whole
 * line would flash in before the draw starts.
 */
export default function DualTaskChart({ motion = true }: { motion?: boolean }) {
  const { ref, inView } = useInView<SVGSVGElement>(motion);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [len, setLen] = useState<number | null>(null);

  useEffect(() => {
    if (!motion) return;
    const p = pathRef.current;
    if (p) setLen(p.getTotalLength());
  }, [motion]);

  const drawn = !motion || (inView && len !== null);

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 140"
      preserveAspectRatio="none"
      style={{ width: "100%", flex: 1, minHeight: 100, overflow: "visible" }}
      role="img"
      aria-label="Dual-Task Cost falling from week 1 to week 8"
    >
      <line x1="0" y1="139" x2="300" y2="139" stroke="var(--track)" strokeWidth="1" />
      <path
        ref={pathRef}
        data-draw=""
        d="M0 20 C 40 24, 60 40, 90 46 S 150 70, 180 82 S 250 104, 300 112"
        fill="none"
        stroke="var(--success)"
        strokeWidth="3"
        strokeLinecap="round"
        style={
          motion && len !== null
            ? {
                strokeDasharray: len,
                strokeDashoffset: drawn ? 0 : len,
                transition: `stroke-dashoffset 1.8s ${EASE}`,
              }
            : motion
              ? { visibility: "hidden" }
              : undefined
        }
      />
      <circle
        data-dot=""
        cx="300"
        cy="112"
        r="6"
        fill="var(--success)"
        style={motion ? { opacity: drawn ? 1 : 0, transition: "opacity .4s ease 1.4s" } : undefined}
      />
    </svg>
  );
}
