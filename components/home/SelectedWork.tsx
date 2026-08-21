"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "BNI Transformation 4.0",
    subtitle: "Banking Transformation",
    image: "/projects/bni-transformation.jpeg",
  },
  {
    id: "02",
    title: "Enterprise Event IT",
    subtitle: "Enterprise Infrastructure",
    image: "/projects/enterprise-event.jpeg",
  },
  {
    id: "03",
    title: "SD-WAN & Branch Network",
    subtitle: "Connectivity Operations",
    image: "/projects/sdwan-network.jpeg",
  },
  {
    id: "04",
    title: "Network & Infrastructure Operations",
    subtitle: "Infrastructure",
    image: "/projects/network-infrastructure.jpeg",
  },
  {
    id: "05",
    title: "Warehouse Systems",
    subtitle: "Operational Technology",
    image: "/projects/warehouse-systems.jpg",
  },
];

export default function SelectedWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-white/10 bg-[#0d0e11]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        {/* HEADER */}
        <div className="mb-10 flex items-end justify-between gap-8 lg:mb-14">
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
              Selected Work
            </div>

            <h2 className="mt-4 max-w-[900px] text-[clamp(2.7rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Systems,
              <span className="block text-white/28">
                networks & real environments.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="hidden border-b border-white/15 pb-2 text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-white lg:inline-flex"
          >
            View All Work →
          </Link>
        </div>

        {/* =====================================================
            DESKTOP — PORSCHE-STYLE HOVER LIST
        ====================================================== */}
        <div className="relative hidden lg:block">
          <div className="pr-[390px]">
            {projects.map((project, index) => {
              const isActive = active === index;

              return (
                <Link
                  key={project.id}
                  href="/work"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group grid grid-cols-[60px_1fr_auto] items-center border-t border-white/10 py-7"
                >
                  <span
                    className={`text-[9px] transition-colors duration-300 ${
                      isActive ? "text-white/45" : "text-white/18"
                    }`}
                  >
                    {project.id}
                  </span>

                  <div>
                    <div
                      className={`text-[clamp(1.8rem,4vw,4rem)] font-medium tracking-[-0.05em] transition-all duration-500 ${
                        isActive
                          ? "translate-x-2 text-white"
                          : "translate-x-0 text-white/22"
                      }`}
                    >
                      {project.title}
                    </div>

                    <div
                      className={`mt-2 text-[9px] uppercase tracking-[0.13em] transition-colors duration-300 ${
                        isActive ? "text-white/38" : "text-white/14"
                      }`}
                    >
                      {project.subtitle}
                    </div>
                  </div>

                  <span
                    className={`text-lg transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-white/60"
                        : "-translate-x-1 text-white/15"
                    }`}
                  >
                    ↗
                  </span>
                </Link>
              );
            })}

            <div className="border-t border-white/10" />
          </div>

          {/* FLOATING DESKTOP PREVIEW */}
          <div className="pointer-events-none absolute right-0 top-1/2 w-[345px] -translate-y-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/10 bg-[#15161a] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              {projects.map((project, index) => (
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="345px"
                  className={`object-cover transition-all duration-700 ease-out ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "scale-[1.07] opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[8px] uppercase tracking-[0.15em] text-white/45">
                  {projects[active].subtitle}
                </div>

                <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                  {projects[active].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE + TABLET — COMPACT PROJECT CARDS
        ====================================================== */}
        <div className="space-y-4 lg:hidden">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/work"
              className="group block overflow-hidden border border-white/10 bg-[#111216]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#15161a]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-active:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 text-[8px] uppercase tracking-[0.14em] text-white/55">
                  {project.id}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[8px] uppercase tracking-[0.13em] text-white/45">
                    {project.subtitle}
                  </div>

                  <div className="mt-1 flex items-end justify-between gap-4">
                    <h3 className="max-w-[85%] text-xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <span className="text-white/55">↗</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Link
            href="/work"
            className="mt-6 inline-flex border-b border-white/15 pb-2 text-[9px] uppercase tracking-[0.12em] text-white/40"
          >
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
