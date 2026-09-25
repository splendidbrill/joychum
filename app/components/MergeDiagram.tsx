"use client";

import type { CSSProperties } from "react";
import { useInView } from "./Reveal";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

const circle: CSSProperties = {
  position: "absolute",
  top: 10,
  left: "50%",
  width: 240,
  height: 240,
  borderRadius: "50%",
  background: "var(--glass-surface)",
  border: "1px solid var(--glass-edge)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxSizing: "border-box",
  gap: 6,
};

/**
 * Body and Mind drift in from either side and resolve into "Dual-task".
 * The two circles start pushed 90px apart and slide together; the centre
 * pill fades up 0.7s later, once they overlap.
 */
export default function MergeDiagram({ motion = true }: { motion?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(motion);
  const merged = !motion || inView;

  const side = (dir: -1 | 1): CSSProperties =>
    motion
      ? {
          transition: `transform 1.4s ${EASE}`,
          transform: merged ? "none" : `translateX(${dir * 90}px)`,
        }
      : {};

  return (
    <div
      ref={ref}
      data-merge-wrap=""
      style={{ position: "relative", width: "100%", maxWidth: 560, height: 260 }}
    >
      <div
        data-merge="left"
        style={{ ...circle, marginLeft: -210, alignItems: "flex-start", paddingLeft: 44, ...side(-1) }}
      >
        <i
          className="ti ti-walk"
          style={{ fontSize: 26, color: "var(--brand-highlight)" }}
          aria-hidden="true"
        />
        <span style={{ fontSize: 17, fontWeight: 500 }}>Body</span>
      </div>

      <div
        data-merge="right"
        style={{ ...circle, marginLeft: -30, alignItems: "flex-end", paddingRight: 44, ...side(1) }}
      >
        <i
          className="ti ti-brain"
          style={{ fontSize: 26, color: "var(--brand-highlight)" }}
          aria-hidden="true"
        />
        <span style={{ fontSize: 17, fontWeight: 500 }}>Mind</span>
      </div>

      <div
        data-merge="center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          ...(motion
            ? {
                opacity: merged ? 1 : 0,
                transform: merged
                  ? "translate(-50%,-50%) scale(1)"
                  : "translate(-50%,-50%) scale(.8)",
                transition: `opacity .6s ease .7s, transform 1s ${EASE} .7s`,
              }
            : { transform: "translate(-50%,-50%)" }),
        }}
      >
        <span
          style={{
            padding: "8px 14px",
            borderRadius: 999,
            background: "var(--brand)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            boxShadow: "var(--shadow-cta)",
            whiteSpace: "nowrap",
          }}
        >
          Dual-task
        </span>
      </div>
    </div>
  );
}
