"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = pathname === "/";
  const light = overHero && !scrolled && !open;
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        solid
          ? "border-ink/10 bg-white/75 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between px-6 transition-colors duration-500 md:px-10 ${
          light ? "text-white" : "text-ink"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className={`flex self-start transition-transform duration-500 ${
            scrolled ? "translate-y-0" : "translate-y-2"
          }`}
        >
          <Image
            src="/logo/Futuristic%20TEKORA%20Cyborg%20TV%20Logo.png"
            alt={site.name}
            width={1998}
            height={787}
            priority
            className={`w-auto transition-[height] duration-500 ${
              scrolled ? "h-9" : "h-20"
            }`}
          />
        </Link>

        <nav
          className={`hidden items-center gap-7 transition-[margin] duration-500 md:flex ${
            scrolled ? "mt-0" : "mt-16"
          }`}
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-transparent px-2.5 py-1 text-sm font-normal tracking-normal opacity-75 transition-[opacity,border-color] duration-300 hover:border-current hover:opacity-100 md:text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.cta.href}
            className={`hidden h-10 items-center rounded-full bg-signal px-6 text-sm font-bold tracking-normal text-ink transition-[margin,background-color,color] hover:bg-ink hover:text-white sm:inline-flex ${
              scrolled ? "mt-0" : "mt-16"
            }`}
          >
            {site.cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-ink/10 bg-smoke md:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 text-2xl font-light tracking-tight text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={site.cta.href}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex h-11 items-center justify-center bg-signal text-[12px] font-semibold uppercase tracking-normal text-ink"
              >
                {site.cta.label}
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
