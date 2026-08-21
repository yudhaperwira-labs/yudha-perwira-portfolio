"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Network,
  Server,
  MonitorCog,
  Workflow,
  ChartNoAxesColumnIncreasing,
  UsersRound,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Windows Server, Active Directory, endpoints, shared services and enterprise infrastructure support.",
  },
  {
    number: "02",
    icon: Network,
    title: "Network Operations",
    description:
      "LAN/WAN, TCP/IP, DNS, DHCP, VLAN, managed switching, VPN and wireless connectivity.",
  },
  {
    number: "03",
    icon: MonitorCog,
    title: "Systems Administration",
    description:
      "Windows environments, account administration, shared services, troubleshooting and endpoint operations.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "IT Operations",
    description:
      "Incident handling, operational continuity, WMS/SCM support and technical documentation.",
  },
  {
    number: "05",
    icon: ChartNoAxesColumnIncreasing,
    title: "Service Management",
    description:
      "Incident management, problem analysis, RCA, SLA documentation and operational follow-through.",
  },
  {
    number: "06",
    icon: UsersRound,
    title: "Project & Vendor Coordination",
    description:
      "Implementation coordination across internal teams, vendors, branches and operational sites.",
  },
];

export default function ExpertisePreview() {
  return (
    <section className="border-b border-white/[0.07] bg-[#101114]">
      <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[940px] text-center">
          <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
            Expertise
          </div>

          <h2 className="mt-5 font-heading text-[clamp(2.6rem,4vw,4.5rem)] font-semibold tracking-[-0.055em] text-white">
            Core capabilities.
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-white/34">
            Technical capability built through practical enterprise, banking and
            warehouse operations.
          </p>
        </div>

        <div
          className="
            mx-auto mt-12
            grid max-w-[1100px]
            border-l border-t border-white/[0.08]
            md:grid-cols-2 lg:grid-cols-3
          "
        >
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href="/expertise"
                key={item.number}
                className="
                  group min-h-[210px]
                  border-b border-r border-white/[0.08]
                  p-6 transition-colors duration-400
                  hover:bg-white/[0.018]
                "
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} strokeWidth={1.4} className="text-white/46" />

                  <span className="text-[8px] tracking-[0.14em] text-white/18">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 text-[18px] font-medium tracking-[-0.025em] text-white/82">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-white/27">
                  {item.description}
                </p>

                <ArrowUpRight
                  size={13}
                  className="
                    mt-5 text-white/14
                    transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-white/55
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
