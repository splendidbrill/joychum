"use client";

import { useInView } from "./Reveal";

const EASE = "cubic-bezier(0.19,1,0.22,1)";

export type Fund = { label: string; pct: number; color: string };

/**
 * Use of funds: one stacked bar whose segments grow out from zero as the
 * section scrolls in, with a legend listing each slice underneath.
 */
export default function FundBars({ funds, motion = true }: { funds: Fund[]; motion?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(motion);
  const grown = !motion || inView;

  return (
    <>
      <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>Use of funds</span>

      <div
        ref={ref}
        style={{
          display: "flex",
          height: 14,
          borderRadius: 999,
          overflow: "hidden",
          background: "#D6CFC4",
          gap: 2,
        }}
        aria-hidden="true"
      >
        {funds.map((f) => (
          <div
            key={f.label}
            data-grow={f.pct}
            style={{
              width: grown ? `${f.pct}%` : 0,
              background: f.color,
              transition: motion ? `width 1.4s ${EASE}` : undefined,
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--rule)" }}>
        {funds.map((f) => (
          <div
            key={f.label}
            style={{
              display: "grid",
              gridTemplateColumns: "12px minmax(0,1fr) auto",
              gap: 12,
              alignItems: "center",
              padding: "12px 0",
              borderBottom: "1px solid var(--rule)",
              fontSize: 15,
            }}
          >
            <span
              style={{ width: 10, height: 10, borderRadius: 3, background: f.color }}
              aria-hidden="true"
            />
            <span>{f.label}</span>
            <span style={{ fontWeight: 500 }}>{f.pct}%</span>
          </div>
        ))}
      </div>
    </>
  );
}
