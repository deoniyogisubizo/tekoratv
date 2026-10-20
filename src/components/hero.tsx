import Image from "next/image";
import Link from "next/link";
import { media } from "@/lib/site";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative flex h-[120svh] min-h-[720px] flex-col overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#1a2733_0%,#050505_72%)]"
      />

      {media.hero.video ? (
        <>
          <link
            rel="preload"
            as="video"
            type="video/mp4"
            href={media.hero.video}
            fetchPriority="high"
          />
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-70 brightness-[0.45]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={media.hero.poster || undefined}
          >
            <source src={media.hero.video} type="video/mp4" />
          </video>
        </>
      ) : media.hero.poster ? (
        <Image
          src={media.hero.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 brightness-[0.45]"
        />
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/85"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-6 text-center md:px-10">
        <Reveal y={16}>
          <p className="max-w-3xl text-xl font-bold leading-relaxed text-white/80 md:text-3xl">
            Technology, innovation, practical education, research, business, and
            opportunity — on one platform.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            href="/schedule"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-signal px-7 py-3.5 text-sm font-bold uppercase tracking-normal text-ink transition-colors hover:bg-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-signal transition-colors group-hover:bg-signal group-hover:text-ink">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                <title>Play</title>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Live
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
