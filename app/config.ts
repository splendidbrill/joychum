/** The two knobs the source design exposed as editable props. */
export const siteConfig = {
  /** "dark" is the signature look; "light" applies .theme-light. */
  theme: "dark" as "dark" | "light",
  /** Off disables the reveal, merge, draw and waveform animations. */
  motion: true,
  contactEmail: "hello@joychum.eu",
} as const;
