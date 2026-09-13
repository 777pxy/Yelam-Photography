export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 pb-10 sm:px-10">
      <div className="flex items-center justify-between border-b border-border pb-6 text-sm">
        <p className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-rust" aria-hidden />
          People. Places. A different perspective.
        </p>
        <p className="text-muted-foreground">Portfolio / 2026</p>
      </div>

      <h1 className="mt-6 flex flex-wrap items-end text-[clamp(2.75rem,11vw,11rem)] leading-[0.95] font-medium tracking-tighter">
        Yelam Lawoti
        <span className="ml-2 inline-block h-[0.18em] w-[0.18em] shrink-0 translate-y-[-0.1em] bg-accent-rust align-baseline" />
      </h1>
    </section>
  );
}
