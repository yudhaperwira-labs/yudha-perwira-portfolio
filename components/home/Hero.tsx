"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import PearlButton from "@/components/ui/PearlButton";

const ease = [0.16, 1, 0.3, 1] as const;

const miniExperience = [
  {
    company: "PT Bi-Chain Science & Technology",
    period: "2023 — Present",
    role: "IT & QC Support",
  },
  {
    company: "Bank Negara Indonesia",
    period: "2016 — 2023",
    role: "IT Regional / Banking Operations",
  },
  {
    company: "Maybank Indonesia",
    period: "2014 — 2016",
    role: "Banking Operations",
  },
];

export default function Hero() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0d0f11]
        pt-20
        lg:pt-0
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-screen
          max-w-[1600px]
          items-center
          gap-12
          px-6
          py-16
          md:px-10
          lg:grid-cols-[1.18fr_0.82fr]
          lg:px-14
          lg:py-24
        "
      >
        <div className="relative z-20">
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.6,
              ease,
            }}
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/35
            "
          >
            IT Infrastructure & Operations
          </motion.div>

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{
                y: reducedMotion ? 0 : "105%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                ease,
              }}
              className="
                max-w-[970px]
                text-[clamp(4rem,8vw,8.5rem)]
                font-medium
                leading-[0.79]
                tracking-[-0.075em]
                text-white
              "
            >
              YUDHA
              <span className="block text-white/26">PERWIRA</span>
              <span className="block">NUSANTARA</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease,
            }}
            className="
              mt-8
              max-w-[700px]
              text-[13px]
              leading-7
              text-white/43
              md:text-[14px]
            "
          >
            Enterprise Infrastructure / Systems Administration / Network
            Operations / IT Operations
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.25,
              ease,
            }}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <PearlButton href="/work">Selected Work</PearlButton>

            <PearlButton
              href="/resume/Yudha_Perwira_Resume.pdf"
              variant="dark"
              icon="download"
              download
            >
              Resume
            </PearlButton>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease,
            }}
            className="
              mt-12
              max-w-[760px]
              border-t
              border-white/[0.07]
              pt-5
            "
          >
            <div
              className="
                grid
                gap-5
                sm:grid-cols-3
              "
            >
              {miniExperience.map((item) => (
                <Link
                  key={item.company}
                  href="/experience"
                  className="
                    group
                    pr-4
                    transition
                    duration-300
                  "
                >
                  <div
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/18
                    "
                  >
                    {item.period}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[11px]
                      font-medium
                      leading-5
                      text-white/42
                      transition
                      group-hover:text-white
                    "
                  >
                    {item.company}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.09em]
                      text-white/18
                    "
                  >
                    {item.role}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <Link
          href="/about"
          aria-label="View About Yudha Perwira"
          className="
            group
            relative
            mx-auto
            block
            w-full
            max-w-[510px]
            lg:mx-0
            lg:justify-self-end
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: reducedMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -6,
                    rotate: -0.3,
                  }
            }
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-[28px]
              bg-[#181b1f]
            "
          >
            <Image
              src="/profile/profile.jpg"
              alt="Yudha Perwira Nusantara"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="
                object-cover
                object-top
                transition-transform
                duration-[900ms]
                group-hover:scale-[1.025]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                text-[7px]
                uppercase
                tracking-[0.14em]
                text-white/45
              "
            >
              View profile / About ↗
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
