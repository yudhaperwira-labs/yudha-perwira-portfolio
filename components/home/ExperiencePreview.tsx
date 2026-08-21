"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const featuredExperience = [
  {
    period: "SEP 2023 — PRESENT",
    duration: "2Y 11M+",
    role: "QC & IT Support Specialist",
    company: "PT Bi-Chain Science & Technology",
    hook: "Maintained uninterrupted WMS operations across 3 warehouse sites for 700 users through proactive monitoring.",
  },
  {
    period: "AUG 2019 — MAR 2023",
    duration: "3Y 7M",
    role: "IT & Technology Analyst · Assistant Manager",
    company: "PT Bank Negara Indonesia (Persero) Tbk.",
    hook: "Contributed to BNI Transformation 4.0 through regional implementation of Biometric Verification, SONIC and Online Queue initiatives.",
  },
  {
    period: "SEP 2014 — FEB 2016",
    duration: "1Y 5M",
    role: "Teller & Customer Service",
    company: "PT Bank Maybank Indonesia Tbk.",
    hook: "Maintained zero major discrepancies throughout 1.5 years of banking operations while complying with OJK requirements.",
  },
];

export default function ExperiencePreview() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section className="border-b border-white/[0.07] bg-[#0f1012]">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Career
            </div>

            <h2
              className="
                mt-10 font-heading
                text-[clamp(3rem,5vw,5rem)]
                font-semibold leading-[0.9]
                tracking-[-0.06em] text-white
              "
            >
              Experience
              <span className="block text-white/26">
                with measurable responsibility.
              </span>
            </h2>

            <Link
              href="/experience"
              className="
                group mt-9 inline-flex items-center gap-4
                text-[9px] font-semibold uppercase
                tracking-[0.13em] text-white/42
                transition-colors hover:text-white
              "
            >
              Full Experience
              <span className="h-px w-9 bg-white/20 transition-all group-hover:w-14" />
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="border-t border-white/[0.08]">
            {featuredExperience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduced ? 0.01 : 0.62,
                  delay: index * 0.05,
                  ease,
                }}
              >
                <Link
                  href="/experience"
                  className="
                    group block border-b border-white/[0.08]
                    py-9 transition-colors
                    hover:bg-white/[0.012]
                  "
                >
                  <div className="grid gap-6 md:grid-cols-[145px_1fr_26px]">
                    <div>
                      <div className="text-[8px] uppercase tracking-[0.12em] text-white/24">
                        {item.period}
                      </div>

                      <div className="mt-2 text-[8px] uppercase tracking-[0.13em] text-white/50">
                        {item.duration}
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] uppercase tracking-[0.12em] text-white/23">
                        {item.role}
                      </div>

                      <h3
                        className="
                          mt-3 font-heading
                          text-[clamp(1.7rem,2.8vw,3rem)]
                          font-semibold leading-[0.98]
                          tracking-[-0.045em] text-white
                        "
                      >
                        {item.company}
                      </h3>

                      <p className="mt-5 max-w-[720px] text-[13px] leading-6 text-white/38">
                        {item.hook}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        hidden text-white/15 transition-all
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-white/55
                        md:block
                      "
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
