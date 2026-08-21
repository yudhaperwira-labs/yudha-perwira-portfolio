"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  Award,
  BookOpen,
  ExternalLink,
  GraduationCap,
  MapPin,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   CERTIFICATES

   Taruh file sertifikat di:

   public/certificates/

   Nama file:
   strategic-planning.jpg
   google-data-foundations.jpg

   Boleh JPG / PNG. Kalau namanya berbeda,
   cukup ganti path image di bawah.
========================================================= */

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
};

const certificates: Certificate[] = [
  {
    id: "strategic-planning",
    title: "How to Design Strategic Planning",
    issuer: "LinkedIn Learning",
    date: "January 2023",
    image: "/certificates/strategic-planning.jpg",
    description:
      "Professional development focused on strategic planning, structured decision making, and organizational direction.",
  },
  {
    id: "google-data-foundations",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    date: "July 2023",
    image: "/certificates/google-data-foundations.jpg",
    description:
      "Foundational training covering data concepts, analytical thinking, data ecosystems, and structured approaches to working with information.",
  },
];

const developmentFocus = [
  "Windows Server Administration",
  "Network Infrastructure",
  "IT Service Management",
  "Microsoft Cloud Fundamentals",
];

export default function AboutPage() {
  const reducedMotion = Boolean(useReducedMotion());

  const [activeCertificate, setActiveCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!activeCertificate) return;

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  return (
    <>
      <main className="overflow-hidden bg-[#0d0f11] text-white">
        {/* =====================================================
            01 — ABOUT HERO
        ====================================================== */}

        <section className="border-b border-white/[0.07]">
          <div
            className="
              mx-auto
              max-w-[1600px]
              px-6
              pb-20
              pt-32
              md:px-10
              lg:px-14
              lg:pb-24
              lg:pt-40
            "
          >
            <div
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/28
              "
            >
              About
            </div>

            <div
              className="
                mt-14
                grid
                gap-12
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-end
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 28,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease,
                }}
              >
                <h1
                  className="
                    text-[clamp(3.8rem,7vw,8rem)]
                    font-medium
                    leading-[0.81]
                    tracking-[-0.072em]
                  "
                >
                  Technology
                  <span className="block text-white/25">behind</span>
                  <span className="block text-white/25">operations.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.75,
                  delay: 0.12,
                  ease,
                }}
                className="
                  max-w-[720px]
                  lg:pb-4
                "
              >
                <p
                  className="
                    text-[14px]
                    leading-8
                    text-white/44
                    md:text-[15px]
                  "
                >
                  My work sits behind everyday operations: keeping users
                  connected, systems available, infrastructure documented, and
                  technical problems from becoming operational problems.
                </p>

                <p
                  className="
                    mt-6
                    text-[13px]
                    leading-8
                    text-white/31
                  "
                >
                  Banking environments, enterprise branches, warehouse
                  operations, connectivity rollouts, and user-facing technical
                  support have shaped a practical, reliability-first approach to
                  IT.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white/24
                  "
                >
                  <MapPin size={13} />
                  Surabaya / Sidoarjo, Indonesia
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            02 — EDUCATION
        ====================================================== */}

        <section className="border-b border-white/[0.07]">
          <div
            className="
              mx-auto
              max-w-[1600px]
              px-6
              py-24
              md:px-10
              lg:px-14
              lg:py-28
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-white/23
              "
            >
              <GraduationCap size={14} />
              Education
            </div>

            <div
              className="
                mt-16
                grid
                gap-10
                lg:grid-cols-[0.62fr_1.38fr]
              "
            >
              {/* LEFT RECORD */}

              <div
                className="
                  border-t
                  border-white/[0.08]
                  pt-6
                  lg:border-r
                  lg:pr-10
                "
              >
                <div
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/18
                  "
                >
                  Academic Record
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <div className="text-[7px] uppercase tracking-[0.13em] text-white/17">
                      Period
                    </div>

                    <div className="mt-2 text-[11px] text-white/48">
                      2010 — 2014
                    </div>
                  </div>

                  <div>
                    <div className="text-[7px] uppercase tracking-[0.13em] text-white/17">
                      Degree
                    </div>

                    <div
                      className="
                        mt-2
                        max-w-[280px]
                        text-[11px]
                        leading-6
                        text-white/48
                      "
                    >
                      Bachelor&apos;s Degree in Informatics Engineering (S.Kom)
                    </div>
                  </div>

                  <div>
                    <div className="text-[7px] uppercase tracking-[0.13em] text-white/17">
                      GPA
                    </div>

                    <div
                      className="
                        mt-2
                        text-[27px]
                        font-medium
                        tracking-[-0.04em]
                        text-white/78
                      "
                    >
                      3.29
                      <span className="text-white/24"> / 4.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT EDUCATION */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.75,
                  ease,
                }}
                className="
                  border-t
                  border-white/[0.08]
                  pt-6
                  lg:pl-3
                "
              >
                <div
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/18
                  "
                >
                  Institution
                </div>

                <h2
                  className="
                    mt-7
                    max-w-[760px]
                    text-[clamp(2.2rem,4vw,4.7rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.06em]
                  "
                >
                  Wijaya Kusuma University
                  <span className="block">Surabaya</span>
                </h2>

                <div
                  className="
                    mt-10
                    border-t
                    border-white/[0.07]
                    pt-5
                  "
                >
                  <div
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white/18
                    "
                  >
                    Academic Experience
                  </div>

                  <div className="mt-5">
                    <div
                      className="
                        grid
                        grid-cols-[28px_1fr]
                        gap-3
                        border-t
                        border-white/[0.06]
                        py-5
                      "
                    >
                      <span className="font-mono text-[7px] text-white/15">
                        01
                      </span>

                      <p
                        className="
                          text-[11px]
                          leading-6
                          text-white/38
                        "
                      >
                        Laboratory Assistant Coordinator, Computer Engineering
                        Laboratory
                      </p>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-[28px_1fr]
                        gap-3
                        border-y
                        border-white/[0.06]
                        py-5
                      "
                    >
                      <span className="font-mono text-[7px] text-white/15">
                        02
                      </span>

                      <p
                        className="
                          text-[11px]
                          leading-6
                          text-white/38
                        "
                      >
                        Project Instructor for a website-development program
                        under the Ministry of Development of Disadvantaged
                        Regions
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div
              className="
                mt-12
                border-t
                border-white/[0.07]
                pt-5
                text-[6px]
                uppercase
                tracking-[0.14em]
                text-white/14
              "
            >
              Academic background supporting a career developed through hands-on
              enterprise IT operations.
            </div>
          </div>
        </section>

        {/* =====================================================
            03 — PROFESSIONAL TRAINING
        ====================================================== */}

        <section className="border-b border-white/[0.07]">
          <div
            className="
              mx-auto
              max-w-[1600px]
              px-6
              py-24
              md:px-10
              lg:px-14
              lg:py-28
            "
          >
            <div
              className="
                grid
                gap-10
                lg:grid-cols-[0.65fr_1.35fr]
                lg:items-end
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-white/23
                  "
                >
                  <Award size={13} />
                  Credentials
                </div>
              </div>

              <p
                className="
                  max-w-[570px]
                  text-[11px]
                  leading-6
                  text-white/31
                "
              >
                Completed professional training and continuous development
                supporting infrastructure, systems, service reliability, and
                enterprise IT operations.
              </p>
            </div>

            <div
              className="
                mt-14
                border-t
                border-white/[0.08]
              "
            >
              <div
                className="
                  grid
                  grid-cols-[35px_1fr_auto]
                  gap-5
                  py-6
                "
              >
                <div
                  className="
                    font-mono
                    text-[7px]
                    text-white/16
                  "
                >
                  01
                </div>

                <h2
                  className="
                    text-[clamp(1.4rem,2vw,2.1rem)]
                    font-medium
                    tracking-[-0.04em]
                    text-white/80
                  "
                >
                  Professional Training & Certificates
                </h2>
              </div>

              {certificates.map((certificate, index) => (
                <button
                  key={certificate.id}
                  onClick={() => setActiveCertificate(certificate)}
                  className="
                      group
                      grid
                      w-full
                      grid-cols-[35px_1fr_auto]
                      gap-5
                      border-t
                      border-white/[0.07]
                      py-7
                      text-left
                      transition-all
                      duration-300
                      hover:bg-white/[0.018]
                      lg:px-0
                    "
                >
                  <div
                    className="
                        font-mono
                        text-[7px]
                        text-white/15
                      "
                  >
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <div>
                    <div
                      className="
                          inline-flex
                          items-center
                          gap-3
                        "
                    >
                      <h3
                        className="
                            text-[15px]
                            font-medium
                            tracking-[-0.025em]
                            text-white/54
                            transition
                            group-hover:text-white
                          "
                      >
                        {certificate.title}
                      </h3>

                      <ExternalLink
                        size={12}
                        className="
                            translate-y-1
                            text-white/0
                            transition-all
                            group-hover:translate-y-0
                            group-hover:text-white/45
                          "
                      />
                    </div>

                    <p
                      className="
                          mt-1
                          text-[8px]
                          uppercase
                          tracking-[0.1em]
                          text-white/20
                        "
                    >
                      {certificate.issuer}
                    </p>
                  </div>

                  <div
                    className="
                        pt-1
                        text-right
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-white/17
                        transition
                        group-hover:text-white/38
                      "
                  >
                    {certificate.date}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            04 — DEVELOPMENT FOCUS
        ====================================================== */}

        <section>
          <div
            className="
              mx-auto
              max-w-[1600px]
              px-6
              py-24
              md:px-10
              lg:px-14
              lg:py-28
            "
          >
            <div
              className="
                grid
                gap-14
                lg:grid-cols-[0.72fr_1.28fr]
              "
            >
              <div>
                <div
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/18
                  "
                >
                  02 / Development Focus
                </div>

                <h2
                  className="
                    mt-6
                    max-w-[390px]
                    text-[clamp(2.4rem,4vw,4.2rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.055em]
                  "
                >
                  Areas currently
                  <span className="block text-white/25">being developed.</span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[380px]
                    text-[10px]
                    leading-6
                    text-white/27
                  "
                >
                  Listed separately from completed training to keep professional
                  claims clear and accurate.
                </p>
              </div>

              <div className="border-t border-white/[0.08]">
                {developmentFocus.map((item, index) => (
                  <div
                    key={item}
                    className="
                        grid
                        grid-cols-[34px_1fr]
                        gap-4
                        border-b
                        border-white/[0.07]
                        py-6
                      "
                  >
                    <span
                      className="
                          font-mono
                          text-[7px]
                          text-white/14
                        "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                          text-[11px]
                          text-white/34
                        "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          CERTIFICATE LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.22,
            }}
            onClick={() => setActiveCertificate(null)}
            className="
              fixed
              inset-0
              z-[300]
              flex
              items-center
              justify-center
              bg-black/[0.92]
              p-4
              backdrop-blur-xl
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                grid
                max-h-[90vh]
                w-full
                max-w-[1100px]
                overflow-hidden
                rounded-[26px]
                border
                border-white/[0.1]
                bg-[#111315]
                shadow-[0_30px_120px_rgba(0,0,0,.7)]
                lg:grid-cols-[1.25fr_0.75fr]
              "
            >
              <button
                onClick={() => setActiveCertificate(null)}
                aria-label="Close certificate"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-white/60
                  backdrop-blur
                  transition
                  hover:bg-white
                  hover:text-black
                "
              >
                <X size={17} />
              </button>

              <div
                className="
                  relative
                  min-h-[360px]
                  bg-[#08090a]
                  lg:min-h-[620px]
                "
              >
                <Image
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 65vw"
                  className="
                    object-contain
                    p-5
                    md:p-8
                  "
                />
              </div>

              <div
                className="
                  flex
                  flex-col
                  justify-end
                  p-7
                  md:p-10
                "
              >
                <BookOpen
                  size={16}
                  strokeWidth={1.3}
                  className="text-white/27"
                />

                <div
                  className="
                    mt-8
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/22
                  "
                >
                  {activeCertificate.issuer}
                </div>

                <h2
                  className="
                    mt-4
                    text-[clamp(1.8rem,3vw,3rem)]
                    font-medium
                    leading-[0.95]
                    tracking-[-0.05em]
                  "
                >
                  {activeCertificate.title}
                </h2>

                <p
                  className="
                    mt-6
                    text-[11px]
                    leading-6
                    text-white/32
                  "
                >
                  {activeCertificate.description}
                </p>

                <div
                  className="
                    mt-9
                    border-t
                    border-white/[0.08]
                    pt-5
                    text-[7px]
                    uppercase
                    tracking-[0.12em]
                    text-white/18
                  "
                >
                  Completed {activeCertificate.date}
                </div>

                <div
                  className="
                    mt-3
                    text-[7px]
                    uppercase
                    tracking-[0.12em]
                    text-white/13
                  "
                >
                  ESC or click outside to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
