import { project } from "@/lib/project";
import { site } from "@/lib/site";
import { Reveal, RevealText } from "./reveal";

export function ContactCta() {
  const { contact } = site;

  return (
    <section id="contact" className="scroll-mt-16 bg-signal text-ink">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal y={16}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em]">
            12 — Let&apos;s build TEKORA TV together
          </span>
        </Reveal>

        <h2 className="mt-8 max-w-5xl text-[clamp(2.4rem,7vw,6.5rem)] font-light leading-[0.94] tracking-[-0.05em]">
          <RevealText text={project.closing.quote} />
        </h2>

        <div className="mt-14 overflow-hidden bg-ink">
          <video
            className="aspect-video h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="/section/People_standing_in_line_1080p_20261014135333.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-ink/20 pt-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-xl text-base font-medium leading-relaxed text-ink/75 md:text-lg">
              {project.closing.intro}
            </p>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-ink/75">
              {project.closing.vision}
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-[clamp(1.2rem,2.4vw,2rem)] font-light tracking-tight">
              {project.closing.connect.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/60">
              Contact
            </span>
            <dl className="mt-6 space-y-6 border-t border-ink/20 pt-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Organisation
                </dt>
                <dd className="mt-2 text-xl font-light">
                  {contact.organisation}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Contact person
                </dt>
                <dd className="mt-2 text-xl font-light">{contact.person}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Telephone
                </dt>
                <dd className="mt-2">
                  <a
                    href={contact.phoneHref}
                    className="border-b border-ink pb-1 text-xl font-light transition-opacity hover:opacity-70"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={contact.emailHref}
                    className="border-b border-ink pb-1 text-xl font-light transition-opacity hover:opacity-70"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
