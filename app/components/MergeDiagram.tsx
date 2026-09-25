"use client";

import type { CSSProperties } from "react";
import { useInView } from "./Reveal";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

const circle: CSSProperties = {
  position: "absolute",
  top: 20,
  left: "50%",
  width: 250,
  height: 250,
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxSizing: "border-box",
  gap: 6,
};

/**
 * Body and Mind drift in from either side and resolve into the brand mark.
 * The two circles start pushed 90px apart and slide together; the centre
 * pill fades up 0.7s later, once they overlap. Outlined, not filled — the
 * overlap has to stay readable where the two rings cross.
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
      className="jx-merge"
      data-merge-wrap=""
      style={{
        position: "relative",
        height: 300,
        maxWidth: 520,
        width: "100%",
        justifySelf: "center",
      }}
    >
      <div
        data-merge="left"
        style={{
          ...circle,
          marginLeft: -215,
          border: "1.5px solid var(--ink)",
          alignItems: "flex-start",
          paddingLeft: 46,
          ...side(-1),
        }}
      >
        <i
          className="ti ti-walk"
          style={{ fontSize: 26, color: "var(--ink)" }}
          aria-hidden="true"
        />
        <span style={{ fontSize: 17, fontWeight: 500 }}>Body</span>
      </div>

      <div
        data-merge="right"
        style={{
          ...circle,
          marginLeft: -35,
          border: "1.5px solid var(--brand-highlight)",
          alignItems: "flex-end",
          paddingRight: 46,
          ...side(1),
        }}
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
            background: "var(--ink)",
            color: "var(--bg-raised)",
            fontSize: 14,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          JOYchum
        </span>
      </div>
    </div>
  );
}
