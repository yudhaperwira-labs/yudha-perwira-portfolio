"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, GraduationCap, Server, Network, Users } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  {
    value: "8+",
    label: "Years in IT",
  },
  {
    value: "700+",
    label: "Users Supported",
  },
  {
    value: "144",
    label: "Branch Offices",
  },
  {
    value: "3",
    label: "Warehouse Sites",
  },
];

export default function AboutPage() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <main className="bg-[#0f1012] text-white">
      {/* HERO */}
      <section className="border-b border-white/[0.07]">
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-6
            pb-20
            pt-28
            md:px-10
            lg:px-14
            lg:pb-24
            lg:pt-36
          "
        >
          <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">
            About
          </div>

          <div
            className="
              mt-12
              grid
              gap-14
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-end
            "
          >
            <div>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease,
                }}
                className="
                  text-[clamp(3.4rem,6vw,6.8rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]
                "
              >
                Technology
                <span className="block text-white/27">behind operations.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.7,
                delay: 0.12,
                ease,
              }}
              className="max-w-[660px]"
            >
              <p className="text-[15px] leading-8 text-white/48">
                My work sits behind everyday operations: keeping users
                connected, systems available, infrastructure documented, and
                technical problems from becoming operational problems.
              </p>

              <p className="mt-5 text-[13px] leading-7 text-white/33">
                Banking environments, enterprise branches, warehouses,
                connectivity rollouts, infrastructure operations, and
                user-facing technical support have shaped a practical,
                reliability-first approach to IT.
              </p>

              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/28
                "
              >
                <MapPin size={13} strokeWidth={1.5} />
                Surabaya / Sidoarjo, Indonesia
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14">
          <div className="grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  min-h-[210px]
                  border-b
                  border-r
                  border-white/[0.08]
                  p-7
                  md:p-8
                "
              >
                <div
                  className="
                    text-[clamp(3.4rem,5vw,5.5rem)]
                    font-medium
                    tracking-[-0.06em]
                  "
                >
                  {metric.value}
                </div>

                <div className="mt-10 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/23">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING APPROACH */}
      <section className="border-b border-white/[0.07]">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12
            px-6
            py-20
            md:px-10
            lg:grid-cols-[0.65fr_1.35fr]
            lg:px-14
            lg:py-24
          "
        >
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Operating Approach
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <AboutCard
              icon={<Server size={18} />}
              title="Systems"
              body="Keep critical systems available, documented, recoverable, and usable by operational teams."
            />

            <AboutCard
              icon={<Network size={18} />}
              title="Connectivity"
              body="Support stable network access across branch, office, and warehouse environments."
            />

            <AboutCard
              icon={<Users size={18} />}
              title="Users"
              body="Translate infrastructure and technical issues into practical resolutions that keep work moving."
            />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-b border-white/[0.07]">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-12
            px-6
            py-20
            md:px-10
            lg:grid-cols-[0.65fr_1.35fr]
            lg:px-14
            lg:py-24
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap
                size={15}
                strokeWidth={1.4}
                className="text-white/30"
              />

              <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Education
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-8">
            <div className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/24">
              Informatics Engineering
            </div>

            <h2
              className="
                mt-4
                max-w-[800px]
                text-[clamp(2rem,4vw,4rem)]
                font-medium
                leading-[0.95]
                tracking-[-0.05em]
              "
            >
              Universitas Wijaya Kusuma Surabaya
            </h2>

            <p className="mt-7 max-w-[720px] text-[13px] leading-7 text-white/38">
              Academic foundation in computing, information technology, systems,
              and structured problem solving that later developed into hands-on
              professional work across IT infrastructure, enterprise networks,
              banking technology, and operational systems.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-7
                gap-y-3
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white/22
              "
            >
              <span>Engineering</span>
              <span>/</span>
              <span>Information Technology</span>
              <span>/</span>
              <span>Systems</span>
              <span>/</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div
      className="
        min-h-[230px]
        rounded-[26px]
        border
        border-white/[0.08]
        bg-white/[0.015]
        p-7
        transition
        duration-500
        hover:-translate-y-1
        hover:border-white/[0.15]
        hover:bg-white/[0.025]
      "
    >
      <div className="text-white/30">{icon}</div>

      <h3 className="mt-10 text-xl font-medium tracking-[-0.035em]">{title}</h3>

      <p className="mt-4 text-[12px] leading-6 text-white/34">{body}</p>
    </div>
  );
}
