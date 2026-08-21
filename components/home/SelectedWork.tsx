"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "BNI Transformation 4.0",
    category: "Banking Transformation",
    image: "/projects/bni-transformation.jpeg",
  },
  {
    id: "02",
    title: "Enterprise Event IT",
    category: "Enterprise Infrastructure",
    image: "/projects/enterprise-event.jpeg",
  },
  {
    id: "03",
    title: "SD-WAN & Branch Network",
    category: "Connectivity Operations",
    image: "/projects/sdwan-network.jpeg",
  },
  {
    id: "04",
    title: "Network & Infrastructure Operations",
    category: "Infrastructure",
    image: "/projects/network-infrastructure.jpeg",
  },
  {
    id: "05",
    title: "Warehouse Systems",
    category: "Operational Technology",
    image: "/projects/warehouse-systems.jpg",
  },
];

const previewPositions = ["8%", "26%", "44%", "62%", "78%"];

export default function SelectedWork() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#0c0d0f] text-white"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Selected Work
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Systems,
              <span className="block text-white/28">
                networks & real environments.
              </span>
            </h2>

            <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/38">
              Selected work across banking technology, enterprise
              infrastructure, network operations, events, and warehouse systems.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP
        ====================================================== */}
        <div className="relative mt-20 hidden lg:block">
          {/* LIST */}
          <div className="w-[72%] border-t border-white/[0.09]">
            {projects.map((project, index) => {
              const isActive = index === active;

              return (
                <Link
                  key={project.id}
                  href="/work"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group relative block border-b border-white/[0.08]"
                >
                  <motion.div
                    animate={{
                      x: isActive ? 14 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid min-h-[128px] grid-cols-[55px_1fr_24px] items-center gap-4"
                  >
                    <span
                      className={`text-[9px] tracking-[0.14em] transition-colors duration-500 ${
                        isActive ? "text-white/45" : "text-white/18"
                      }`}
                    >
                      {project.id}
                    </span>

                    <div>
                      <div
                        className={`text-[clamp(2.2rem,4vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.055em] transition-colors duration-500 ${
                          isActive ? "text-white" : "text-white/24"
                        }`}
                      >
                        {project.title}
                      </div>

                      <div
                        className={`mt-3 text-[8px] uppercase tracking-[0.15em] transition-colors duration-500 ${
                          isActive ? "text-white/38" : "text-white/15"
                        }`}
                      >
                        {project.category}
                      </div>
                    </div>

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        x: isActive ? 0 : -6,
                      }}
                      className="text-lg text-white/55"
                    >
                      ↗
                    </motion.span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* FLOATING PREVIEW */}
          <motion.div
            animate={{
              top: previewPositions[active],
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute right-0 z-20 w-[360px] -translate-y-1/2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/10 bg-[#15161a] shadow-[0_35px_90px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[active].image}
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projects[active].image}
                    alt={projects[active].title}
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[8px] uppercase tracking-[0.15em] text-white/45">
                  {projects[active].category}
                </div>

                <div className="mt-2 text-lg font-semibold tracking-[-0.035em] text-white">
                  {projects[active].title}
                </div>
              </div>
            </div>

            {/* small pointer */}
            <div className="absolute left-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-b border-l border-white/10 bg-[#15161a]" />
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}
        <div className="mt-12 space-y-4 lg:hidden">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/work"
              className="group block overflow-hidden border border-white/10 bg-[#111216]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-active:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 text-[8px] tracking-[0.14em] text-white/55">
                  {project.id}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[8px] uppercase tracking-[0.14em] text-white/45">
                    {project.category}
                  </div>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="max-w-[85%] text-[clamp(1.5rem,6vw,2.2rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                      {project.title}
                    </h3>

                    <span className="text-white/55">↗</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Link
            href="/work"
            className="inline-flex border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.13em] text-white/45"
          >
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
