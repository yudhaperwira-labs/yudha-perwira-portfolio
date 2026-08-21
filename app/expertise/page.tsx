"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  Activity,
  Boxes,
  Cable,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    title: "Enterprise Infrastructure",
    icon: Server,
    text: "Windows infrastructure, endpoints, shared services, assets, and multi-site IT environments.",
  },
  {
    title: "Network Operations",
    icon: Network,
    text: "LAN/WAN, managed switching, branch connectivity, VLAN, wireless, and troubleshooting.",
  },
  {
    title: "Systems Administration",
    icon: MonitorCog,
    text: "Windows Server, Active Directory, shared folders, drives, services, and user administration.",
  },
  {
    title: "IT Operations",
    icon: Activity,
    text: "Incident handling, RCA, documentation, problem management, continuity, and escalation.",
  },
  {
    title: "Infrastructure Deployment",
    icon: Cable,
    text: "Branch rollout, SD-WAN implementation support, appliances, endpoints, and technical validation.",
  },
  {
    title: "Warehouse Technology",
    icon: Boxes,
    text: "SCM/WMS, warehouse endpoints, CCTV validation, and multi-site operational systems.",
  },
  {
    title: "Enterprise User Support",
    icon: Users,
    text: "Workstations, operating systems, printers, connectivity, applications, and enterprise users.",
  },
  {
    title: "Operational Reliability",
    icon: ShieldCheck,
    text: "Availability, proactive checks, technical validation, documentation, and risk reduction.",
  },
];

export default function ExpertisePage() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <main
      className="
        min-h-screen
        bg-[#0f1012]
        pt-24
        text-white
        lg:pt-28
      "
    >
      <section>
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-6
            py-12
            md:px-10
            lg:px-14
            lg:py-14
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-end
            "
          >
            <div>
              <div
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                Expertise
              </div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="
                  mt-5
                  text-[clamp(2.8rem,4.6vw,5.3rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.06em]
                "
              >
                Infrastructure.
                <span className="block text-white/25">Systems. Networks.</span>
              </motion.h1>
            </div>

            <p
              className="
                max-w-[620px]
                text-[12px]
                leading-7
                text-white/36
              "
            >
              Core technical capabilities developed through enterprise banking,
              branch infrastructure, warehouse technology, and day-to-day IT
              operations.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.075]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.035,
                    ease,
                  }}
                  className="
                      group
                      min-h-[190px]
                      border-b
                      border-r
                      border-white/[0.07]
                      p-6
                      transition
                      duration-400
                      hover:bg-white/[0.025]
                    "
                >
                  <div
                    className="
                        flex
                        items-center
                        justify-between
                      "
                  >
                    <span
                      className="
                          font-mono
                          text-[7px]
                          text-white/16
                        "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      size={15}
                      strokeWidth={1.3}
                      className="
                          text-white/22
                          transition
                          group-hover:text-white/50
                        "
                    />
                  </div>

                  <h2
                    className="
                        mt-9
                        text-[clamp(1.1rem,1.5vw,1.5rem)]
                        font-medium
                        tracking-[-0.035em]
                      "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                        mt-3
                        text-[10px]
                        leading-5
                        text-white/29
                      "
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
