"use client";

import type { CSSProperties, ReactNode } from "react";
import Button from "./Button";

type ActionButtonProps = {
  children?: ReactNode;
  /** Smooth-scrolls to this element id, clearing the sticky nav. */
  scrollTo?: string;
  /** Opens a mail composer instead of scrolling. */
  mailto?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconRight?: string;
  style?: CSSProperties;
};

/** The sticky nav is ~74px tall; 90px leaves it clear of the heading. */
const NAV_OFFSET = 90;

/**
 * Carries the two click behaviours from the design's script. It exists as its
 * own client component so the page can stay a server component — a server
 * component can hand over strings, but not an onClick.
 */
export default function ActionButton({
  children,
  scrollTo,
  mailto,
  variant,
  size,
  icon,
  iconRight,
  style,
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      icon={icon}
      iconRight={iconRight}
      style={style}
      onClick={() => {
        if (mailto) {
          window.location.href = mailto;
          return;
        }
        if (!scrollTo) return;
        const el = document.getElementById(scrollTo);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
            behavior: "smooth",
          });
        }
      }}
    >
      {children}
    </Button>
  );
}
