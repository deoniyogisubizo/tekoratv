"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function KnowMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center border-t border-ink/10 bg-paper px-6 py-16 md:px-10">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="inline-flex h-12 items-center gap-3 bg-signal px-8 text-[12px] font-semibold uppercase tracking-normal text-ink transition-colors hover:bg-ink hover:text-white"
        >
          {open ? "Show less" : "Know more"}
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 fill-none stroke-current stroke-[1.75] transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <title>Toggle</title>
            <path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="know-more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
