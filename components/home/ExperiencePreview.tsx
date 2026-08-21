"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const experience = [
  {
    period: "2023 — Present",
    role: "IT & QC Support",
    company: "PT Bi-Chain Science & Technology",
  },
  {
    period: "2016 — 2023",
    role: "IT & Technology / Banking Operations",
    company: "PT Bank Negara Indonesia (Persero) Tbk.",
  },
  {
    period: "2014 — 2016",
    role: "Banking Operations",
    company: "PT Bank Maybank Indonesia Tbk.",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="bg-[#0a0b0d] py-24 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-white/22">
              Career
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              className="mt-7 font-heading text-[clamp(3.3rem,6vw,6.8rem)] font-semibold leading-[0.86] tracking-[-0.065em]"
            >
              Built across
              <span className="block text-white/22">
                different environments.
              </span>
            </motion.h2>

            <Link
              href="/experience"
              className="group mt-9 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.14em] text-white/35 transition hover:text-white"
            >
              Full experience
              <span className="h-px w-8 bg-white/20 transition-all group-hover:w-14" />
              ↗
            </Link>
          </div>

          <div className="pt-4 lg:pt-24">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease,
                }}
                className={`group relative py-9 ${
                  index !== experience.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                }`}
              >
                <div className="grid gap-5 md:grid-cols-[150px_1fr]">
                  <div className="text-[8px] uppercase tracking-[0.13em] text-white/20">
                    {item.period}
                  </div>

                  <div>
                    <div className="text-[8px] uppercase tracking-[0.14em] text-white/22">
                      {item.role}
                    </div>

                    <h3 className="mt-3 max-w-[780px] font-heading text-[clamp(1.8rem,3.5vw,3.4rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-white/72 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                      {item.company}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
