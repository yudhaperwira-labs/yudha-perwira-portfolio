"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const areas = [
  {
    number: "01",
    title: "Enterprise Infrastructure",
    detail: "Windows · Endpoints · Shared Services · Multi-site IT",
  },
  {
    number: "02",
    title: "Network Operations",
    detail: "LAN/WAN · Managed Switching · Branch Connectivity",
  },
  {
    number: "03",
    title: "Systems Administration",
    detail: "Active Directory · Windows Server · User Administration",
  },
  {
    number: "04",
    title: "IT Operations",
    detail: "Incident Handling · RCA · Documentation · Coordination",
  },
];

export default function ExpertisePreview() {
  return (
    <section className="bg-[#101114] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-white/22">
              Expertise
            </div>

            <h2 className="mt-7 font-heading text-[clamp(3.5rem,6vw,6.8rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              What I<span className="block text-white/22">work with.</span>
            </h2>

            <Link
              href="/expertise"
              className="mt-9 inline-flex text-[9px] uppercase tracking-[0.14em] text-white/35"
            >
              Full capability →
            </Link>
          </div>

          <div>
            {areas.map((area, index) => (
              <motion.div
                key={area.number}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group relative py-8"
              >
                <div className="grid gap-4 sm:grid-cols-[48px_1fr_auto] sm:items-center">
                  <div className="text-[8px] text-white/18">{area.number}</div>

                  <div>
                    <h3 className="font-heading text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white/28 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-white/18 transition group-hover:text-white/32">
                      {area.detail}
                    </p>
                  </div>

                  <div className="hidden text-white/15 transition group-hover:text-white/50 sm:block">
                    ↗
                  </div>
                </div>

                <div className="absolute bottom-0 left-12 right-0 h-px bg-white/[0.07]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
