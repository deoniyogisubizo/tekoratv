"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: RevealTextProps) {
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: words are static content
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.9,
              delay: delay + index * stagger,
              ease: EASE,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
