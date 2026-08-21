"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  ["8+", "Years in IT"],
  ["700+", "Users Supported"],
  ["144", "Branch Offices"],
  ["3", "Warehouse Sites"],
];

export default function AboutPreview() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section id="about" className="border-b border-white/[0.07] bg-[#0f1012]">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
          About
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* COPY */}
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: reduced ? 0 : "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduced ? 0.01 : 0.85,
                  ease,
                }}
                className="
                  max-w-[670px] font-heading
                  text-[clamp(2.9rem,5vw,5.4rem)]
                  font-semibold leading-[0.9]
                  tracking-[-0.06em] text-white
                "
              >
                Technology
                <span className="block text-white/27">behind operations.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduced ? 0.01 : 0.65,
                delay: 0.08,
                ease,
              }}
              className="
                mt-8 max-w-[620px]
                text-[14px] leading-7 text-white/40
              "
            >
              Supporting enterprise systems, networks, users, and operational
              technology across banking, logistics, warehouse environments, and
              multi-site operations.
            </motion.p>

            <Link
              href="/about"
              className="
                group mt-9 inline-flex items-center gap-4
                text-[9px] font-semibold uppercase tracking-[0.14em]
                text-white/42 transition-colors hover:text-white
              "
            >
              More About Me
              <span className="h-px w-9 bg-white/20 transition-all group-hover:w-14" />
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* METRICS — NOT BOXES */}
          <div className="flex flex-col justify-end">
            <div className="border-t border-white/[0.08]">
              {metrics.map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    x: reduced ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduced ? 0.01 : 0.6,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="
                    grid grid-cols-[120px_1fr]
                    items-baseline gap-6
                    border-b border-white/[0.08]
                    py-6 sm:grid-cols-[180px_1fr]
                  "
                >
                  <div
                    className="
                      font-heading text-[clamp(2.2rem,4vw,4.4rem)]
                      font-semibold leading-none tracking-[-0.06em]
                      text-white
                    "
                  >
                    {value}
                  </div>

                  <div
                    className="
                      text-[8px] font-semibold uppercase
                      tracking-[0.14em] text-white/24
                    "
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
