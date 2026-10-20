import { Reveal } from "./reveal";

const LETTERS = [
  { letter: "T", word: "Technology" },
  { letter: "E", word: "Entertainment" },
  { letter: "K", word: "Knowledge" },
  { letter: "O", word: "Opportunity" },
  { letter: "R", word: "Research" },
  { letter: "A", word: "Advancement" },
] as const;

export function LetterCards() {
  return (
    <section className="border-y border-ink/10 bg-smoke">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 px-6 py-16 sm:grid-cols-3 md:gap-5 md:px-10 lg:grid-cols-6">
        {LETTERS.map(({ letter, word }, index) => (
          <Reveal
            key={letter}
            y={20}
            delay={Math.min(index * 0.05, 0.3)}
            className="h-full"
          >
            <article className="group relative flex h-full flex-col items-center justify-between gap-8 overflow-hidden rounded-[10px] bg-paper px-4 py-8 text-center">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-l from-signal to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-gradient-to-t from-transparent to-signal"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 h-3/4 w-3/4 bg-gradient-to-tr from-signal/70 via-signal/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative z-10 text-2xl font-extrabold tracking-[0.35em] text-ink">
                {letter}
              </span>
              <span className="relative z-10 text-lg font-bold text-ink">
                {word}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
