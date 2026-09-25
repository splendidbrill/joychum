"use client";

import { useEffect, useState } from "react";

const PROMPTS = [
  "Walk to the fridge. Name three things inside.",
  "Stand on one leg. Count back from 20 in threes.",
  "Step to the window. Spell your street backwards.",
  "Walk slowly. Name a fruit for every step.",
];

/** Every fifth bar takes the tan, so the wave reads as a voice, not a meter. */
const BARS = Array.from({ length: 22 }, (_, k) => ({
  brand: k % 5 === 2,
  scale: 0.3 + 0.7 * Math.abs(Math.sin(k * 1.3)),
  duration: 0.9 + (k % 4) * 0.18,
  delay: k * 0.05,
}));

/**
 * The glass card over the hero photo: a live waveform and the coach's
 * current instruction, cycling every 3.6 seconds.
 *
 * The prompt is keyed by index so React remounts it on each change and the
 * fade animation re-runs; aria-live announces it once per change.
 */
export default function VoiceCoachCard({ motion = true }: { motion?: boolean }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setI((n) => (n + 1) % PROMPTS.length), 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: -24,
        right: 32,
        bottom: 0,
        padding: "18px 20px",
        borderRadius: 20,
        background: "var(--bg-raised)",
        border: "1px solid var(--glass-edge)",
        boxShadow: "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 12,
              background: "var(--brand-surface)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <i
              className="ti ti-volume"
              style={{ fontSize: 17, color: "var(--ink)" }}
              aria-hidden="true"
            />
          </span>
          Coach, speaking
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 3, height: 24 }} aria-hidden="true">
          {BARS.map((b, k) => (
            <span
              key={k}
              style={{
                width: 3,
                height: 24,
                borderRadius: 2,
                background: b.brand ? "var(--brand-highlight)" : "var(--ink)",
                transformOrigin: "center",
                transform: `scaleY(${b.scale})`,
                animation: motion
                  ? `jcWave ${b.duration}s ease-in-out ${b.delay}s infinite`
                  : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          minHeight: 52,
          fontSize: 19,
          lineHeight: 1.35,
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
        aria-live="polite"
      >
        <div
          key={i}
          style={{ animation: motion ? "jcFade .6s cubic-bezier(0.19,1,0.22,1)" : "none" }}
        >
          {`“${PROMPTS[i]}”`}
        </div>
      </div>
    </div>
  );
}
