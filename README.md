# JOYchum

The JOYchum investor page, as a Next.js app.

Ported from `web/JOYchum Website v2 (3).html` — a
self-extracting bundle that packed the page, the Journex design system, three
photos and an icon font into one file. This repo is that bundle unpacked into
real source.

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
  page.tsx                 the investor page (server component)
  layout.tsx               document shell, metadata, no-JS reveal fallback
  config.ts                motion / contact email
  components/
    Button.tsx             the Journex button — primary, secondary, tertiary
    ActionButton.tsx       Button plus the scroll-to and mailto behaviours
    Reveal.tsx             scroll-in fade-up, and the shared useInView hook
    CountUpStat.tsx        market stats that count up on scroll-in
    MergeDiagram.tsx       Body + Mind circles merging into the brand mark
    DualTaskChart.tsx      the progress line, drawn on as it scrolls in
    RoadmapTrack.tsx       the timeline rail that fills across
    FundBars.tsx           use-of-funds bar + legend, grown on scroll-in
    VoiceCoachCard.tsx     hero overlay: waveform + rotating coach prompt
  styles/journex.css       the whole design system: tokens, icons, base
  globals.css              imports journex.css
public/fonts/              Tabler Icons, subset to the 11 glyphs in use
public/images/             the three photos from the bundle
web/                       the original bundled HTML, kept for reference
design/                    the earlier JoyCare Club bundle (superseded)
```

## Things worth knowing

**One warm palette, no theme switch.** Ink on beige, with a single muted tan
for emphasis and one sage reserved for progress. The roadmap band inverts to
ink. All of it lives in `:root` in `journex.css` — the v1 dark theme and its
`.theme-light` counterpart are gone.

**`motion: false` turns off every animation.** The reveals, the circle merge,
the chart draw, the stat count-ups, the bar fills and the waveform all take it
as a prop and render their final state instead. `prefers-reduced-motion` is
honoured separately in CSS.

**The seven sections are numbered.** 01 problem, 02 gap, 03 product, 04
business model, 05 roadmap, 06 team, 07 the ask — the eyebrow labels are part
of the design, so keep them in step if you reorder anything.

**Only the interactive parts are client-side.** The page itself is a server
component; anything with an observer, a timer or a click handler is marked
`"use client"`. `ActionButton` exists because a server component can pass
strings to a client component but not an `onClick`.

**The icon font is subset, not trimmed.** The bundle shipped 5,717 Tabler
icons at 864KB; `public/fonts/tabler-icons-subset.woff2` holds the 11 this
page uses, at under 3KB. To add an icon, re-subset from the original woff2
inside `web/JOYchum Website v2 (3).html` and add its `content` rule to `journex.css`.
Note the source's own woff2 has a malformed GSUB table — subset from the TTF
and drop the layout tables.

**SF Pro is not bundled.** The design calls for it, but it isn't
redistributable, so the `@font-face` rules resolve it via `local()`: real SF on
Apple devices, the system-ui stack elsewhere. Drop licensed woff2 files into
`public/fonts` and swap the `local()` sources for `url()` ones to change that.

**The nav wraps below 560px.** The source design was drawn at desktop width,
where the bar is one row; on a phone that row overflowed and the page wrapper's
links crowded the "For investors" button off the edge. The `.jx-nav` rules
in `journex.css` let it wrap instead. Desktop is unchanged.

**The merge diagram is clipped on purpose.** Its circles are fixed at 250px
and offset ±215px, and they rest a further 90px apart before the animation
runs — wider than a phone. `.jx-merge` clips that resting state so it cannot
widen the page, and scales the figure below 520px. The merged state fits, so
nothing is cut once the animation has played.

**There is no backend.** The CTAs scroll to `#product`/`#invest`, and "Request
the deck" and "Become a pilot partner" open a mail composer to the address in
`app/config.ts`. Privacy and Imprint are placeholder links back to the top.

**The market figures are approximations.** The stats carry a "Sources:
Eurostat, WHO Europe (approx.)" note and the Dual-Task Cost chart is labelled
"Illustrative", both straight from the design. Check them before this goes in
front of investors.
