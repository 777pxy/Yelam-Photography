export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1400px] scroll-mt-24 px-6 py-20 sm:px-10">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <p className="text-sm text-muted-foreground">Behind the lens</p>
          <h2 className="mt-4 text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            A little closer.
            <br />
            <span className="font-accent italic font-normal">A little longer.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-8 text-lg text-muted-foreground">
          <div className="space-y-4">
            <p>
              I&rsquo;m Yelam, an aspiring photographer drawn to people, places, and the moments
              that often go unnoticed.
            </p>
            <p>
              For portraits, collaborations, or a story you&rsquo;d like to tell, I&rsquo;d love
              to hear from you.
            </p>
          </div>
          <a
            href="mailto:yelamlawoti@gmail.com"
            className="flex w-fit items-center gap-1 border-b border-foreground pb-1 text-sm text-foreground hover:opacity-70"
          >
            Let&rsquo;s make something together <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
