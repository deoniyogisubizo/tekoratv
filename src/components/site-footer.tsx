import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { project } from "@/lib/project";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export async function SiteFooter() {
  "use cache";
  cacheLife("max");

  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="flex items-center justify-between border-b border-white/15 pb-8 text-[11px] uppercase tracking-[0.3em] text-white/55">
          <span>
            {site.name} — An {site.parent} Project
          </span>
          <span className="text-signal">On Air / 24-7</span>
        </div>

        <Reveal>
          <p className="mt-16 max-w-4xl text-[clamp(1.6rem,4vw,3.4rem)] font-light leading-[1.06] tracking-[-0.03em] text-white">
            {project.quote}
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-y-12 border-t border-white/15 pt-12 md:grid-cols-12 md:gap-x-8">
          <div className="col-span-2 md:col-span-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-signal" aria-hidden />
              <span className="text-[13px] font-semibold uppercase tracking-[0.34em]">
                {site.name}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm font-medium leading-relaxed text-white/55">
              {site.description}
            </p>
          </div>

          {site.footer.map((column) => (
            <nav
              key={column.heading}
              aria-label={column.heading}
              className="md:col-span-2"
            >
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                {column.heading}
              </h3>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/80 transition-colors hover:text-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Image
          src="/logo/Futuristic%20TEKORA%20Cyborg%20TV%20Logo.png"
          alt={site.name}
          width={1998}
          height={787}
          className="mx-auto mt-24 block h-40 w-auto"
        />

        <p className="mt-6 max-w-3xl text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
          {site.meaning.word} — {site.meaning.expansion.join(" · ")}
        </p>

        <div className="flex flex-col gap-4 border-t border-white/15 py-8 text-[11px] uppercase tracking-[0.28em] text-white/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name}. An {site.parent} project.
          </span>
          <span>{project.rtgroup.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
