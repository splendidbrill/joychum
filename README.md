# JOYchum

The JOYchum homepage, as a Next.js app.

Ported from `web/JOYchum Website.html` — a self-extracting bundle that packed
the page, the Journex design system, three photos and an icon font into one
file. This repo is that bundle unpacked into real source.

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
  page.tsx                 the homepage (server component)
  layout.tsx               document shell, metadata, no-JS reveal fallback
  config.ts                theme / motion / contact email
  components/
    Button.tsx             the Journex button — primary, secondary, tertiary
    ActionButton.tsx       Button plus the scroll-to and mailto behaviours
    Reveal.tsx             scroll-in fade-up, and the shared useInView hook
    MergeDiagram.tsx       Body + Mind circles merging into "Dual-task"
    DualTaskChart.tsx      the progress line, drawn on as it scrolls in
    VoiceCoachCard.tsx     hero overlay: waveform + rotating coach prompt
  styles/journex.css       the whole design system: tokens, icons, base
  globals.css              imports journex.css
public/fonts/              Tabler Icons, subset to the 16 glyphs in use
public/images/             the three photos from the bundle
web/                       the original bundled HTML, kept for reference
design/                    the earlier JoyCare Club bundle (superseded)
```

## Things worth knowing

**Dark mode is the design.** The signature look lives on bare `:root`;
`.theme-light` re-points the semantic aliases. Flip `theme` in `app/config.ts`
to swap — the page applies `.theme-light` to its own wrapper.

**`motion: false` turns off every animation.** The reveals, the circle merge,
the chart draw and the waveform all take it as a prop and render their final
state instead. `prefers-reduced-motion` is honoured separately in CSS.

**Only the interactive parts are client-side.** The page itself is a server
component; anything with an observer, a timer or a click handler is marked
`"use client"`. `ActionButton` exists because a server component can pass
strings to a client component but not an `onClick`.

**The icon font is subset, not trimmed.** The bundle shipped 5,717 Tabler
icons at 864KB; `public/fonts/tabler-icons-subset.woff2` holds the 16 this
page uses, at under 4KB. To add an icon, re-subset from the original woff2
inside `web/JOYchum Website.html` and add its `content` rule to `journex.css`.
Note the source's own woff2 has a malformed GSUB table — subset from the TTF
and drop the layout tables.

**SF Pro is not bundled.** The design calls for it, but it isn't
redistributable, so the `@font-face` rules resolve it via `local()`: real SF on
Apple devices, the system-ui stack elsewhere. Drop licensed woff2 files into
`public/fonts` and swap the `local()` sources for `url()` ones to change that.

**The nav wraps below 560px.** The source design was drawn at desktop width,
where the bar is one row; on a phone that row overflowed and the page wrapper's
`overflow: hidden` clipped the "Join the pilot" button out of reach. The
`.jx-nav` rules in `journex.css` let it wrap instead. Desktop is unchanged.

**There is no backend.** "Join the pilot" scrolls to the pilot section and
"Become a pilot partner" opens a mail composer to the address in
`app/config.ts`. Privacy and Imprint are placeholder links back to the top.
