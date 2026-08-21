"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] py-28 sm:py-32 lg:py-44">
      <div className="pointer-events-none absolute right-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[130px]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <div className="text-[9px] uppercase tracking-[0.22em] text-white/20">
          Contact
        </div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
          }}
          className="mt-8 max-w-[1200px] font-heading text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.8] tracking-[-0.075em]"
        >
          Let’s keep
          <span className="block text-white/22">systems moving.</span>
        </motion.h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-[520px] text-[13px] leading-7 text-white/35">
            Infrastructure roles, IT operations, technical projects, or a
            conversation around improving the reliability of everyday
            technology.
          </p>

          <div className="flex flex-wrap gap-7">
            <a
              href="mailto:yudha.perwira92@gmail.com"
              className="group inline-flex items-center gap-5 text-[9px] uppercase tracking-[0.14em] text-white/55 transition hover:text-white"
            >
              Email me
              <span className="h-px w-9 bg-white/20 transition-all duration-500 group-hover:w-16" />
              ↗
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 text-[9px] uppercase tracking-[0.14em] text-white/32 transition hover:text-white"
            >
              Contact page
              <span className="h-px w-9 bg-white/15 transition-all duration-500 group-hover:w-16" />
              ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
