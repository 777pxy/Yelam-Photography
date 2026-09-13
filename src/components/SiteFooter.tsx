export default function SiteFooter() {
  return (
    <footer className="bg-ink-bg text-ink-fg">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-10">
        <p className="text-xs tracking-[0.2em] text-ink-muted uppercase">Start a conversation</p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-5xl leading-tight font-medium tracking-tight sm:text-7xl">
            Have a story
            <br />
            <span className="font-accent italic font-normal">in mind?</span>
          </h2>
          <span className="hidden text-accent-sage sm:block" aria-hidden>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path
                d="M20 60 L60 20 M60 20 H32 M60 20 V48"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
        </div>

        <a
          href="mailto:yelamlawoti@gmail.com"
          className="mt-8 inline-block w-fit border-b border-ink-fg/40 pb-1 text-lg hover:opacity-70"
        >
          yelamlawoti@gmail.com
        </a>

        <div className="mt-16 flex items-center justify-between border-t border-ink-fg/15 pt-6 text-sm text-ink-muted">
          <p>© 2026 Yelam Lawoti</p>
          <a href="#top" className="flex items-center gap-1 hover:opacity-70">
            Back to top <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
