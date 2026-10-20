type Tone = "paper" | "smoke" | "ink" | "signal";

const TONE_STEP: Record<Tone, string> = {
  paper: "border-ink/15 text-ink",
  smoke: "border-ink/15 text-ink",
  ink: "border-white/25 text-white",
  signal: "border-ink/25 text-ink",
};

const TONE_INDEX: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/55",
  signal: "text-ink/60",
};

const TONE_SEP: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/40",
  signal: "text-ink/45",
};

interface FlowStepsProps {
  steps: readonly string[];
  tone?: Tone;
  size?: "lg" | "sm";
}

export function FlowSteps({
  steps,
  tone = "paper",
  size = "lg",
}: FlowStepsProps) {
  const stepClass =
    size === "lg"
      ? "text-[clamp(1.1rem,2vw,1.8rem)] font-light tracking-[-0.02em]"
      : "text-sm font-medium uppercase tracking-[0.2em]";

  return (
    <ol className="flex flex-wrap items-center gap-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span
            className={`flex items-baseline gap-2 border-b px-1 pb-1 ${TONE_STEP[tone]} ${stepClass}`}
          >
            <span
              className={`text-[10px] font-semibold tabular-nums tracking-[0.2em] ${TONE_INDEX[tone]}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className={`px-3 text-lg font-light ${TONE_SEP[tone]}`}
            >
              ›
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
