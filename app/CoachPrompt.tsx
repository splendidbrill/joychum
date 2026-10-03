"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const motionAllowed = () => !window.matchMedia(REDUCED).matches;

const PROMPTS = [
  "Walk to the fridge. Name three things inside.",
  "Stand on one leg. Count back from 20 in threes.",
  "Step to the window. Spell your street backwards.",
  "Walk slowly. Name a fruit for every step.",
];

/** Example coach prompts rotate like a spoken sequence; the button pauses them. */
export default function CoachPrompt() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const canAnimate = useSyncExternalStore(subscribeMotion, motionAllowed, () => false);

  useEffect(() => {
    if (!canAnimate || paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % PROMPTS.length), 3600);
    return () => clearInterval(t);
  }, [canAnimate, paused]);

  return (
    <div className="glass-float glass-float--prompt">
      <div className="coach__top">
        <p className="caption">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
          </svg>
          Coach, speaking
        </p>
        {canAnimate && (
          <button
            className="btn btn--secondary btn--icon"
            type="button"
            aria-label={paused ? "Play example prompts" : "Pause example prompts"}
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          </button>
        )}
      </div>
      <p className="heading">“{PROMPTS[i]}”</p>
    </div>
  );
}
