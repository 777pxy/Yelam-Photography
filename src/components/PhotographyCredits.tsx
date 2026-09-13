import { photos } from "@/lib/photos";

export default function PhotographyCredits() {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-border pb-4 text-sm">
        Photography credits
        <span
          aria-hidden
          className="text-lg leading-none transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {photos.map((photo) => (
          <li key={photo.slug} className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span>{photo.title}</span>
            <a
              href={photo.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground hover:opacity-70"
            >
              {photo.credit.name} <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">
        Sample images used under the{" "}
        <a
          href="https://unsplash.com/license"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70"
        >
          Unsplash License ↗
        </a>
        .
      </p>
    </details>
  );
}
