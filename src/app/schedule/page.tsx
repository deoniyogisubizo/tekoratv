import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import {
  ScheduleSection,
  ScheduleSkeleton,
} from "@/components/schedule-section";

export const metadata = {
  title: "Schedule",
  description:
    "The Tekora TV broadcast schedule, synced live from the network database.",
};

export default function SchedulePage() {
  return (
    <>
      <PageIntro
        eyebrow="Schedule / Live Grid"
        title="TEKORA programming, on the record."
        description="News, interviews, practical builds, business, innovation, education, and opportunities — read directly from the network and cached at the edge. Times are shown in UTC."
      />

      <Suspense fallback={<ScheduleSkeleton />}>
        <ScheduleSection />
      </Suspense>
    </>
  );
}
