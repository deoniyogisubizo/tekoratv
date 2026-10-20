import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { FlowSteps } from "@/components/flow-steps";
import { PageIntro } from "@/components/page-intro";
import { ProjectSection } from "@/components/project-section";
import { project } from "@/lib/project";

export const metadata: Metadata = {
  title: "About",
  description:
    "RTGroup is the technology company behind TEKORA TV, working across electronics, IT, embedded systems, IoT, AI, and practical technology training.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Parent company"
        title="About RTGroup"
        description={project.rtgroup.intro}
      />

      <ProjectSection
        id="foundation"
        index="01"
        eyebrow="Foundation"
        tone="paper"
      >
        <ul className="flex flex-wrap gap-3">
          {project.rtgroup.domains.map((domain) => (
            <li
              key={domain}
              className="border border-ink/15 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink"
            >
              {domain}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl text-[clamp(1.4rem,2.6vw,2.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
          {project.rtgroup.advantage}
        </p>
        <p className="mt-10 text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-ink">
          {project.rtgroup.tagline}
        </p>
      </ProjectSection>

      <ProjectSection
        id="ecosystem"
        index="02"
        eyebrow="Ecosystem"
        description={project.ecosystem.intro}
        tone="smoke"
      >
        <FlowSteps steps={project.ecosystem.chain} tone="smoke" size="sm" />
        <p className="mt-12 max-w-2xl text-base font-medium leading-relaxed text-graphite md:text-lg">
          {project.ecosystem.expansion}
        </p>
      </ProjectSection>

      <ContactCta />
    </>
  );
}
