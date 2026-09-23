"use client";

import { useState } from "react";

/**
 * The only interactive piece on the page, so it's the only client component.
 * Submitting just flips the note — there's no endpoint behind it yet.
 */
export default function WaitlistForm({ ctaLabel }: { ctaLabel: string }) {
  const [joined, setJoined] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setJoined(true);
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          maxWidth: "34em",
          marginTop: "var(--space-4)",
        }}
      >
        <label
          htmlFor="v2-email"
          style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}
        >
          Email address
        </label>
        <input
          id="v2-email"
          name="email"
          type="email"
          required
          className="input"
          placeholder="your@email.com"
          style={{
            flex: "1 1 240px",
            minHeight: 56,
            fontSize: 18,
            borderRadius: 999,
            paddingInline: "var(--space-4)",
            background: "var(--color-bg)",
          }}
        />
        <button type="submit" className="btn btn-primary big-btn">
          {ctaLabel}
        </button>
      </form>
      <p style={{ fontSize: 16, marginTop: "var(--space-3)" }} className="text-muted" aria-live="polite">
        {joined
          ? "Thank you — you're on the list. We'll write once, when it opens."
          : "We'll email you once, when the app opens. No newsletter."}
      </p>
    </>
  );
}
