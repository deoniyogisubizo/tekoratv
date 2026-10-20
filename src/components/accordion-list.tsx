"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { TermItem } from "@/types/project";

type Tone = "paper" | "smoke" | "ink" | "signal";

const TONE_BORDER: Record<Tone, string> = {
  paper: "border-ink/10",
  smoke: "border-ink/10",
  ink: "border-white/15",
  signal: "border-ink/15",
};

const TONE_TERM: Record<Tone, string> = {
  paper: "text-ink",
  smoke: "text-ink",
  ink: "text-white",
  signal: "text-ink",
};

const TONE_DETAIL: Record<Tone, string> = {
  paper: "text-graphite",
  smoke: "text-graphite",
  ink: "text-white/65",
  signal: "text-ink/70",
};

interface AccordionListProps {
  items: readonly TermItem[];
  tone?: Tone;
  columns?: 1 | 2;
}

export function AccordionList({
  items,
  tone = "paper",
  columns = 1,
}: AccordionListProps) {
  const [open, setOpen] = useState<number | null>(null);
  const border = TONE_BORDER[tone];

  const renderItem = (item: TermItem, index: number) => {
    const isOpen = open === index;
    const grid = columns === 2;
    return (
      <li
        key={item.term}
        className={`border-t ${border} ${
          grid ? "md:border-r md:even:border-r-0" : ""
        }`}
      >
        <h3>
          <button
            type="button"
            onClick={() => setOpen(isOpen ? null : index)}
            aria-expanded={isOpen}
            className={`flex w-full items-center justify-between gap-6 py-7 text-left ${
              grid ? "px-0 md:px-8" : ""
            }`}
          >
            <span className="flex items-baseline gap-4">
              <span
                className={`text-[11px] font-medium tabular-nums tracking-[0.2em] ${TONE_DETAIL[tone]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-xl font-light tracking-tight ${TONE_TERM[tone]} md:text-2xl`}
              >
                {item.term}
              </span>
            </span>
            <span
              aria-hidden
              className={`relative h-4 w-4 shrink-0 ${TONE_TERM[tone]}`}
            >
              <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
              <span
                className={`absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${
                  isOpen ? "rotate-0" : "rotate-90"
                }`}
              />
            </span>
          </button>
        </h3>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p
                className={`max-w-md pb-8 pl-9 text-sm font-medium leading-relaxed ${TONE_DETAIL[tone]} ${
                  grid ? "md:pr-8 md:pl-[4.25rem]" : ""
                }`}
              >
                {item.detail}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </li>
    );
  };

  if (columns === 2) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => renderItem(item, index))}
      </ul>
    );
  }

  return (
    <ul className={`border-b ${border}`}>
      {items.map((item, index) => renderItem(item, index))}
    </ul>
  );
}
