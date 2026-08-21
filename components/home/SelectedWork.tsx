"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    id: "01",
    title: "BNI Transformation 4.0",
    category: "Banking Technology",
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

export default function SelectedWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#101114] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div className="text-[9px] uppercase tracking-[0.22em] text-white/22">
            Selected Work
          </div>

          <div>
            <h2 className="font-heading text-[clamp(3.6rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.068em]">
              Systems,
              <span className="block text-white/22">
                networks & real environments.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[13px] leading-7 text-white/34">
              Practical implementations across banking, connectivity,
              infrastructure operations, enterprise events, and warehouse
              systems.
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden min-h-[690px] lg:block">
          <div className="w-[72%]">
            {projects.map((project, index) => {
              const isActive = index === active;

              return (
                <Link
                  key={project.id}
                  href="/work"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group block"
                >
                  <motion.div
                    animate={{
                      x: isActive ? 18 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                    className="relative flex min-h-[132px] items-center gap-6"
                  >
                    <div className="w-[42px] text-[9px] tracking-[0.15em] text-white/18">
                      {project.id}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`font-heading text-[clamp(2.6rem,4.3vw,4.7rem)] font-semibold leading-[0.9] tracking-[-0.055em] transition-colors duration-500 ${
                          isActive ? "text-white" : "text-white/20"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <div
                        className={`mt-3 text-[8px] uppercase tracking-[0.14em] transition-colors ${
                          isActive ? "text-white/35" : "text-white/12"
                        }`}
                      >
                        {project.category}
                      </div>
                    </div>

                    <div
                      className={`text-xl transition ${
                        isActive ? "text-white/45" : "text-white/10"
                      }`}
                    >
                      ↗
                    </div>

                    <div className="absolute bottom-0 left-[68px] right-0 h-px bg-white/[0.07]" />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* FOLLOWING IMAGE */}
          <motion.div
            animate={{
              y: active * 122,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="pointer-events-none absolute right-0 top-6 w-[350px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[active].image}
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projects[active].image}
                    alt={projects[active].title}
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>

            <div className="mt-3 flex justify-between text-[7px] uppercase tracking-[0.14em] text-white/20">
              <span>{projects[active].category}</span>
              <span>{projects[active].id}</span>
            </div>
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="space-y-7 lg:hidden">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/work"
              className={`block ${index % 2 === 0 ? "mr-7" : "ml-7"}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[7px] uppercase tracking-[0.14em] text-white/42">
                    {project.id} · {project.category}
                  </div>

                  <h3 className="mt-2 font-heading text-[1.7rem] font-semibold leading-[0.95] tracking-[-0.045em]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
