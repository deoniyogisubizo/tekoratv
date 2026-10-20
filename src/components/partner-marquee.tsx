"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const LOGOS = [
  { src: "/parterner/hanga_pitchfest_logo.jpg", alt: "Hanga Pitchfest" },
  { src: "/parterner/images%20(1).jpg", alt: "Partner" },
  { src: "/parterner/images%20(2).jpg", alt: "Partner" },
  { src: "/parterner/images.jpg", alt: "Partner" },
  { src: "/parterner/images.png", alt: "Partner" },
  { src: "/parterner/kG7EjWBY_400x400.jpg", alt: "Partner" },
  { src: "/parterner/logo.webp", alt: "Partner" },
  { src: "/parterner/mqdefault.jpg", alt: "Partner" },
  { src: "/parterner/nyerekatech_logo.jpg", alt: "Nyereka Tech" },
] as const;

const SPEED = 40;

export function PartnerMarquee() {
  const x = useMotionValue(0);
  const paused = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (!half) return;
    let next = x.get() - (delta / 1000) * SPEED;
    if (next <= -half) next += half;
    x.set(next);
  });

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: marquee pauses on hover
    <div
      className="overflow-hidden py-4"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max items-center"
      >
        {[0, 1].map((track) => (
          <div
            key={track}
            className="flex items-center"
            aria-hidden={track === 1}
          >
            {LOGOS.map((logo) => (
              <div
                key={`${track}-${logo.src}`}
                className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center border border-ink/10 bg-white px-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={96}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
