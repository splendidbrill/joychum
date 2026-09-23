type ImageSlotProps = {
  /** Drop a photo in by passing a URL; until then the slot renders its hint. */
  src?: string;
  alt?: string;
  /** Shown in the empty state so the page reads as a brief, not a gap. */
  hint?: string;
};

/**
 * A photo placeholder. The original design shipped these empty so a
 * photograph could be dropped in later — the figcaptions say what each one
 * wants. Give it a `src` and the surrounding `.cmyk .print` filter takes over.
 */
export default function ImageSlot({ src, alt = "", hint }: ImageSlotProps) {
  if (!src) {
    return (
      <div className="image-slot image-slot--empty" role="img" aria-label={hint ?? alt}>
        {hint ? <span>{hint}</span> : null}
      </div>
    );
  }
  // Plain <img>: these are art-directed slots inside aspect-ratio boxes, and
  // next/image's wrapper fights the CMYK filter stack.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="image-slot" src={src} alt={alt} />;
}
