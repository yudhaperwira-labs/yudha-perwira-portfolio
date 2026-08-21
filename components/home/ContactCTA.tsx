"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const areas = [
  "IT Infrastructure",
  "IT Operations",
  "System Administration",
  "Network Operations",
  "Technical Projects",
];

export default function ContactCTA() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[#101114]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-5
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
        "
      >
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-24
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Contact
            </div>

            <div className="mt-12 overflow-hidden">
              <motion.h2
                initial={{
                  y: reduced ? 0 : "106%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: reduced ? 0.01 : 0.88,
                  ease,
                }}
                className="
                  max-w-[650px]
                  font-heading
                  text-[clamp(3rem,5vw,5.4rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-white
                "
              >
                Open to the right
                <span className="block text-white/27">conversation.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduced ? 0.01 : 0.6,
                delay: reduced ? 0 : 0.08,
              }}
              className="
                mt-9
                flex
                max-w-[560px]
                flex-wrap
                gap-x-5
                gap-y-3
              "
            >
              {areas.map((area) => (
                <span
                  key={area}
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white/22
                  "
                >
                  {area}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              justify-end
              lg:min-h-[430px]
            "
          >
            <motion.p
              initial={{
                opacity: 0,
                y: reduced ? 0 : 14,
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
                duration: reduced ? 0.01 : 0.65,
                ease,
              }}
              className="
                max-w-[620px]
                text-[15px]
                leading-8
                text-white/40
              "
            >
              For recruitment opportunities, infrastructure roles, IT
              operations, technical projects, or professional collaboration,
              choose the most convenient way to start.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: reduced ? 0 : 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduced ? 0.01 : 0.65,
                delay: reduced ? 0 : 0.08,
                ease,
              }}
              className="
                mt-10
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              {/* EMAIL — INTERNAL PAGE, NOT MAILTO */}
              <Link
                href="/contact?mode=email"
                className="
                  group
                  inline-flex
                  min-h-[62px]
                  items-center
                  justify-between
                  gap-8
                  border
                  border-white/12
                  px-6
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white
                  hover:text-black
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Mail size={15} />
                  Email Me
                </span>

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* SCHEDULE */}
              <Link
                href="/contact?mode=schedule"
                className="
                  group
                  inline-flex
                  min-h-[62px]
                  items-center
                  justify-between
                  gap-8
                  border
                  border-white/12
                  px-6
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <CalendarDays size={15} />
                  Schedule Contact
                </span>

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduced ? 0.01 : 0.55,
                delay: reduced ? 0 : 0.18,
              }}
              className="
                mt-6
                text-[8px]
                uppercase
                tracking-[0.12em]
                text-white/17
              "
            >
              Recruitment · Project Discussion · Professional Collaboration
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
