import { photos } from "@/lib/photos";
import { FeaturePhoto, GridPhoto, PolaroidPhoto } from "@/components/PhotoCard";
import PhotographyCredits from "@/components/PhotographyCredits";

export default function WorkSection() {
  const [p1, p2, p3, p4, p5, p6] = photos;

  return (
    <section id="work" className="mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-10">
      <div className="flex items-baseline justify-between border-b border-border pb-4 text-sm">
        <h2 className="text-base">Selected frames</h2>
        <p className="text-muted-foreground">Sample collection · 01—06</p>
      </div>

      <div className="mt-10 space-y-16">
        <FeaturePhoto photo={p1} overlayTitle="A moment, held." overlayCta="Explore the collection" />

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          <GridPhoto photo={p2} />
          <GridPhoto photo={p3} />
        </div>

        <FeaturePhoto photo={p4} />

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          <GridPhoto photo={p5} />
          <PolaroidPhoto photo={p6} />
        </div>
      </div>

      <div className="mt-16 grid gap-8 text-sm sm:grid-cols-2">
        <p className="text-muted-foreground">
          A sample collection for this portfolio. Photographs by the credited Unsplash artists;
          Yelam&rsquo;s own work will follow.
        </p>
        <PhotographyCredits />
      </div>
    </section>
  );
}
