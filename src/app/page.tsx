import { Suspense } from "react";
import { AccordionList } from "@/components/accordion-list";
import { BulletGrid } from "@/components/bullet-grid";
import { ContactCta } from "@/components/contact-cta";
import { FlowSteps } from "@/components/flow-steps";
import { Hero } from "@/components/hero";
import { KnowMore } from "@/components/know-more";
import { LetterCards } from "@/components/letter-cards";
import { PartnerMarquee } from "@/components/partner-marquee";
import { ProjectSection } from "@/components/project-section";
import {
  ScheduleSection,
  ScheduleSkeleton,
} from "@/components/schedule-section";
import { TermList } from "@/components/term-list";
import { project } from "@/lib/project";

export default function Home() {
  return (
    <>
      <Hero />
      <LetterCards />

      <ProjectSection
        id="project"
        index="01"
        eyebrow="About the platform"
        description={project.what.intro}
        tone="paper"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite">
          {project.what.subheading}
        </p>
        <div className="mt-8">
          <BulletGrid items={project.what.offerings} columns={2} />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-ink/10 pt-10 md:grid-cols-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-graphite md:col-span-3">
            {project.what.goalLabel}
          </span>
          <p className="max-w-3xl text-[clamp(1.4rem,2.6vw,2.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink md:col-span-9">
            {project.what.goal}
          </p>
        </div>
      </ProjectSection>

      <ProjectSection
        id="problem"
        index="02"
        eyebrow="The gap"
        description={project.problem.intro}
        tone="smoke"
      >
        <TermList items={project.problem.items} tone="smoke" />
        <p className="mt-12 max-w-3xl text-[clamp(1.5rem,3vw,2.6rem)] font-light leading-[1.08] tracking-[-0.03em] text-ink">
          {project.problem.closing}
        </p>
      </ProjectSection>

      <ProjectSection
        id="solution"
        index="03"
        eyebrow="The journey"
        description={project.solution.intro}
        tone="ink"
      >
        <FlowSteps steps={project.solution.journey} tone="ink" size="lg" />
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/15 pt-12 md:grid-cols-2">
          {project.solution.quotes.map((quote) => (
            <p
              key={quote}
              className="text-[clamp(1.3rem,2.4vw,2.2rem)] font-light leading-[1.14] tracking-[-0.02em] text-white"
            >
              {quote}
            </p>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection
        id="programs"
        index="04"
        eyebrow="Programming"
        tone="paper"
      >
        <TermList items={project.programs} columns={2} tone="paper" />
      </ProjectSection>

      <Suspense fallback={<ScheduleSkeleton />}>
        <ScheduleSection />
      </Suspense>

      <KnowMore>
        <ProjectSection
          id="audience"
          index="05"
          eyebrow="Audience"
          tone="paper"
        >
          <TermList items={project.audience} columns={2} tone="paper" />
        </ProjectSection>

        <ProjectSection
          id="rtgroup"
          index="06"
          eyebrow="Foundation"
          description={project.rtgroup.intro}
          tone="smoke"
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
          id="companies"
          index="07"
          eyebrow="Value for partners"
          description={project.companies.intro}
          tone="smoke"
        >
          <AccordionList
            items={project.companies.items}
            columns={2}
            tone="smoke"
          />
        </ProjectSection>
      </KnowMore>

      <ProjectSection
        id="investors"
        index="08"
        eyebrow="Investment"
        description={project.investors.intro}
        tone="ink"
      >
        <FlowSteps steps={project.investors.flow} tone="ink" />
        <p className="mt-14 max-w-3xl text-[clamp(1.4rem,2.6vw,2.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-white">
          {project.investors.brings}
        </p>
      </ProjectSection>

      <ProjectSection
        id="partners"
        index="09"
        eyebrow="Partnership"
        tone="paper"
      >
        <PartnerMarquee />
      </ProjectSection>

      <ProjectSection
        id="ecosystem"
        index="10"
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
