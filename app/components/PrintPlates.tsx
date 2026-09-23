/**
 * The Broadsheet separation filters, ported from the design system's
 * print-plates.js. Each filter pulls one process plate out of a photograph
 * and renders it as that ink: cyan from R, magenta from G, yellow from B,
 * and a 60%-strength luminance K in the text ink.
 *
 * `#sep-all` chains all four into a single compound filter — that's the one
 * `.cmyk .print` uses, so one swappable image gets the full separation with
 * the plates slightly misregistered, the way a real press would.
 *
 * Rendered once, near the root. Inert until something references it.
 */
export default function PrintPlates() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="sep-c" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0.467 0 0 0 0.533  0.310 0 0 0 0.690  0 0 0 0 1" />
        </filter>
        <filter id="sep-m" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0.161 0 0 0.839  0 1 0 0 0  0 0.576 0 0 0.424  0 0 0 0 1" />
        </filter>
        <filter id="sep-y" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0.071 0 0.929  0 0 0.267 0 0.733  0 0 1 0 0  0 0 0 0 1" />
        </filter>
        <filter id="sep-k" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.112 0.375 0.038 0 0.475  0.113 0.379 0.038 0 0.471  0.113 0.380 0.038 0 0.468  0 0 0 0 1" />
        </filter>
        <filter id="sep-all" colorInterpolationFilters="sRGB">
          <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0.467 0 0 0 0.533  0.310 0 0 0 0.690  0 0 0 0 1" result="c0" />
          <feComposite in="c0" in2="SourceAlpha" operator="in" result="c" />
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0.161 0 0 0.839  0 1 0 0 0  0 0.576 0 0 0.424  0 0 0 0 1" result="m0" />
          <feComposite in="m0" in2="SourceAlpha" operator="in" result="m1" />
          <feOffset in="m1" dx="5" dy="3" result="m" />
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0.071 0 0.929  0 0 0.267 0 0.733  0 0 1 0 0  0 0 0 0 1" result="y0" />
          <feComposite in="y0" in2="SourceAlpha" operator="in" result="y1" />
          <feOffset in="y1" dx="-5" dy="-3" result="y" />
          <feColorMatrix in="SourceGraphic" type="matrix" values="0.112 0.375 0.038 0 0.475  0.113 0.379 0.038 0 0.471  0.113 0.380 0.038 0 0.468  0 0 0 0 1" result="k0" />
          <feComposite in="k0" in2="SourceAlpha" operator="in" result="k1" />
          <feOffset in="k1" dx="3" dy="6" result="k" />
          <feBlend in="m" in2="c" mode="multiply" result="s1" />
          <feBlend in="y" in2="s1" mode="multiply" result="s2" />
          <feBlend in="k" in2="s2" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}
