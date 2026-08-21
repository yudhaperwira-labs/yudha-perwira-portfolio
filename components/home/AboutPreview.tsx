"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutPreview() {
  return (
    <section className="relative bg-[#0a0b0d] py-24 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="text-[9px] uppercase tracking-[0.22em] text-white/24">
              About
            </div>

            <div className="mt-6 h-px w-12 bg-white/20" />
          </motion.div>

          <div className="lg:col-span-9">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.95, ease }}
                className="max-w-[1050px] font-heading text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.065em]"
              >
                Technology that stays
                <span className="block text-white/24">out of the way —</span>
                until it matters.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                delay: 0.12,
                ease,
              }}
              className="mt-12 ml-auto max-w-[620px]"
            >
              <p className="text-[14px] leading-8 text-white/42">
                My work sits behind everyday operations: keeping users
                connected, systems available, infrastructure documented, and
                technical problems from becoming operational problems.
              </p>

              <p className="mt-5 text-[13px] leading-7 text-white/27">
                Banking, enterprise branches, warehouse environments, network
                rollouts, and operational support have shaped a practical,
                reliability-first approach to IT.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.14em] text-white/42 transition hover:text-white"
              >
                More about me
                <span className="h-px w-8 bg-white/25 transition-all duration-500 group-hover:w-14" />
                ↗
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
