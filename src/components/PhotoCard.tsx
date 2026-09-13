import Image from "next/image";
import type { Photo } from "@/lib/photos";

function Caption({ photo }: { photo: Photo }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border py-4 text-sm">
      <span>
        <span className="mr-3 text-muted-foreground">{photo.index}</span>
        {photo.title}
      </span>
      <span className="text-muted-foreground">{photo.category}</span>
    </div>
  );
}

export function FeaturePhoto({
  photo,
  overlayTitle,
  overlayCta,
}: {
  photo: Photo;
  overlayTitle?: string;
  overlayCta?: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:aspect-[21/9]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {(overlayTitle || overlayCta) && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
              {overlayTitle && (
                <p className="font-accent text-2xl italic text-white sm:text-3xl">
                  {overlayTitle}
                </p>
              )}
              {overlayCta && (
                <p className="flex items-center gap-1 text-sm text-white">
                  {overlayCta} <span aria-hidden>↗</span>
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <Caption photo={photo} />
    </figure>
  );
}

export function GridPhoto({ photo }: { photo: Photo }) {
  return (
    <figure>
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <Caption photo={photo} />
    </figure>
  );
}

export function PolaroidPhoto({ photo }: { photo: Photo }) {
  return (
    <figure className="flex flex-col sm:mt-16">
      <div className="border border-border bg-background p-3 shadow-sm sm:p-4">
        <div className="relative w-full" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <Caption photo={photo} />
    </figure>
  );
}
