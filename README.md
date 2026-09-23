# JoyCare Club

The JoyCare Club landing page, as a Next.js app.

Ported from `design/joycare-club-landing.html` — a self-extracting bundle that
packed the page, its design system, and its fonts into one file. This repo is
that bundle unpacked into real source.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Layout

```
app/
  page.tsx                 the landing page (server component)
  layout.tsx               document shell, metadata, print-plate defs
  config.ts                ctaLabel / showOrgs / showTeam
  components/
    WaitlistForm.tsx       the only client component — the email form
    ImageSlot.tsx          photo placeholder; pass `src` to fill one
    PrintPlates.tsx        SVG CMYK separation filters
  styles/
    broadsheet.css         the design system: tokens, components, print treatments
    phosphor.css           icon font, trimmed to the six icons in use
    landing.css            page-level styles, layered over the system
  globals.css              imports the three above, in that order
public/fonts/              Source Serif 4 subsets + Phosphor Duotone (woff2)
design/                    the original bundled HTML, kept for reference
```

## Things worth knowing

**The three toggles.** The original design exposed `ctaLabel`, `showOrgs` and
`showTeam` as editable props. They live in `app/config.ts` now; the "For care
organisations" and "Team" sections render conditionally on the last two.

**Image slots are empty on purpose.** Four `<ImageSlot>`s sit in the hero, the
"how it works" section, and the families section. Each figcaption says what
photo belongs there. Pass a `src` and the surrounding `.cmyk .print` filter
applies the CMYK separation — until then they render as labelled placeholders.

**Stylesheet order matters.** `landing.css` deliberately overrides Broadsheet
defaults (body font size, `.soft` radius, the `details`/`summary` treatment).
Keep it last in `globals.css`.

**The icon font is trimmed.** `phosphor.css` carries only the six duotone icons
the page uses, down from ~12,000 lines of the full set. Adding an icon means
copying its `:before`/`:after` rules out of the original bundle in `design/`.

**Fonts are weight-agnostic by filename.** Source Serif 4 is variable, so the
same six normal-style files serve both the 400 and 600 faces. That's why they're
named by style and subset rather than by weight.

**The waitlist form has no backend.** Submitting flips the note below it and
nothing else. Wire it to an endpoint before launch.
