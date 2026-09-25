"use client";

import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Tabler icon name, e.g. "sparkles" → <i class="ti ti-sparkles"> */
  icon?: string;
  iconRight?: string;
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  "aria-label"?: string;
};

const sizes: Record<Size, { fontSize: number; padding: string; minHeight: number; gap: number }> = {
  sm: { fontSize: 13, padding: "8px 14px", minHeight: 36, gap: 6 },
  md: { fontSize: 14, padding: "11px 18px", minHeight: 44, gap: 8 },
  lg: { fontSize: 15, padding: "14px 22px", minHeight: 52, gap: 8 },
};

/**
 * Journex Button — one filled violet CTA per screen; glass secondary;
 * text tertiary. Styling comes entirely from design-system tokens.
 *
 * The press feedback writes a transform straight onto the node rather than
 * going through state, matching the source component: it has to settle back
 * even when the pointer leaves mid-press.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  onClick,
  type = "button",
  style,
  ...rest
}: ButtonProps) {
  const s = sizes[size];

  const variants: Record<Variant, CSSProperties> = {
    primary: {
      background: "var(--brand)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-cta)",
    },
    secondary: {
      background: "var(--glass-surface)",
      color: "var(--text-primary)",
      border: "1px solid var(--glass-edge)",
      backdropFilter: "blur(var(--glass-blur))",
      WebkitBackdropFilter: "blur(var(--glass-blur))",
    },
    tertiary: {
      background: "transparent",
      color: "var(--brand-highlight)",
      border: "1px solid transparent",
      boxShadow: "none",
      minHeight: 0,
      padding: size === "sm" ? "4px 6px" : "6px 8px",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onPointerDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
      }}
      onPointerUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
        fontSize: s.fontSize,
        lineHeight: 1,
        minHeight: s.minHeight,
        padding: s.padding,
        width: full ? "100%" : "auto",
        borderRadius: "var(--radius-button)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition:
          "transform var(--duration-fast) var(--ease-ios), opacity var(--duration-fast) var(--ease-ios), background var(--duration-fast) var(--ease-ios)",
        WebkitTapHighlightColor: "transparent",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon && <i className={`ti ti-${icon}`} style={{ fontSize: "1.25em" }} aria-hidden="true" />}
      {children}
      {iconRight && (
        <i className={`ti ti-${iconRight}`} style={{ fontSize: "1.25em" }} aria-hidden="true" />
      )}
    </button>
  );
}
