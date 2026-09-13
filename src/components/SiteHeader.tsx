import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1400px] items-start justify-between gap-6 px-6 py-8 sm:px-10">
      <Link href="#top" className="flex items-baseline gap-3">
        <span className="text-2xl font-medium tracking-tight">yl.</span>
        <span className="text-sm leading-tight text-muted-foreground">
          Independent
          <br />
          photography
        </span>
      </Link>

      <nav className="flex items-center gap-6 pt-1 text-sm sm:gap-10">
        <Link href="#work" className="hidden items-center gap-1 hover:opacity-70 sm:flex">
          Selected work <span aria-hidden>↘</span>
        </Link>
        <Link href="#about" className="hover:opacity-70">
          About
        </Link>
        <Link
          href="mailto:yelamlawoti@gmail.com"
          className="flex items-center gap-1 border-b border-foreground pb-0.5 hover:opacity-70"
        >
          Get in touch <span aria-hidden>↗</span>
        </Link>
      </nav>
    </header>
  );
}
