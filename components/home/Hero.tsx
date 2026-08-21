"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0a0b0d] pt-20">
      {/* ambient */}
      <div className="pointer-events-none absolute left-[55%] top-[20%] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-14 sm:px-7 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-0">
          {/* LEFT */}
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="text-[9px] uppercase tracking-[0.24em] text-white/28"
            >
              IT Infrastructure · Systems · Operations
            </motion.div>

            <div className="mt-7 overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease }}
                className="max-w-[980px] font-heading text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.78] tracking-[-0.078em]"
              >
                YUDHA
              </motion.h1>
            </div>

            <div className="-mt-[0.03em] overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: 0.08,
                  ease,
                }}
                className="font-heading text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.78] tracking-[-0.078em] text-white/25"
              >
                PERWIRA
              </motion.div>
            </div>

            <div className="-mt-[0.03em] overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: 0.16,
                  ease,
                }}
                className="font-heading text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.78] tracking-[-0.078em]"
              >
                NUSANTARA
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end lg:max-w-[900px]"
            >
              <p className="max-w-[620px] text-[13px] leading-7 text-white/42 sm:text-sm">
                Building and supporting the infrastructure behind daily
                operations — from enterprise systems and branch connectivity to
                warehouse technology and user-facing IT services.
              </p>

              <div className="flex gap-3">
                <Link
                  href="/work"
                  className="group inline-flex min-h-[52px] items-center gap-5 bg-white px-5 text-[9px] font-semibold uppercase tracking-[0.13em] text-black transition-transform duration-300 hover:-translate-y-1"
                >
                  Selected Work
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

                <a
                  href="/resume/Yudha_Perwira_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-4 border-b border-white/18 px-2 text-[9px] uppercase tracking-[0.13em] text-white/45 transition-colors hover:text-white"
                >
                  Resume
                  <span>↓</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* PORTRAIT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              rotate: 1.2,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: -1.5,
            }}
            transition={{
              duration: 1,
              delay: 0.18,
              ease,
            }}
            className="relative mx-auto w-[82%] max-w-[430px] lg:-ml-8 lg:mb-4 lg:w-full"
          >
            <Link href="/about" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/profile/profile.jpg"
                  alt="Professional portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="mt-3 flex justify-between text-[7px] uppercase tracking-[0.15em] text-white/20">
                <span>Infrastructure / Operations</span>
                <span>Portrait 01</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
