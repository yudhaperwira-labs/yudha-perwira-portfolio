"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ProjectShowcase,
  ShowcaseProject,
} from "@/components/ui/project-showcase";

const projects: ShowcaseProject[] = [
  {
    title: "BNI Transformation 4.0",
    description:
      "Regional support for biometric verification, DigiCS, online queue systems, and customer-facing banking technology.",
    year: "2016–23",
    href: "/work#bni-transformation",
    image: "/projects/bni-transformation.jpeg",
    category: "Banking Transformation",
  },
  {
    title: "Enterprise Event IT Infrastructure",
    description:
      "Field infrastructure and connectivity supporting business-critical enterprise and banking events.",
    year: "2016–23",
    href: "/work#enterprise-event",
    image: "/projects/enterprise-event.jpeg",
    category: "Enterprise Infrastructure",
  },
  {
    title: "SD-WAN & Branch Network Operations",
    description:
      "Branch connectivity, appliance implementation, deployment validation, and operational troubleshooting.",
    year: "2016–23",
    href: "/work#sdwan-network",
    image: "/projects/sdwan-network.jpeg",
    category: "Network Operations",
  },
  {
    title: "SCM–CCTV System Integration",
    description:
      "Warehouse operational systems, SCM support, CCTV validation, and multi-site technical operations.",
    year: "2023–Now",
    href: "/work#warehouse-systems",
    image: "/projects/warehouse-systems.jpg",
    category: "Warehouse Technology",
  },
  {
    title: "IT Infrastructure & Network Operations",
    description:
      "Servers, enterprise endpoints, managed switching, wireless access, and technical operations across multiple environments.",
    year: "2016–Now",
    href: "/work#infrastructure",
    image: "/projects/network-infrastructure.jpeg",
    category: "Infrastructure",
  },
];

export default function SelectedWork() {
  return (
    <section
      className="
        border-y
        border-white/[0.07]
        bg-[#0f1012]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]
          px-6
          py-20
          md:px-10
          lg:px-14
          lg:py-24
        "
      >
        <div
          className="
            mb-14
            grid
            gap-8
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          <div>
            <h2
              className="
                max-w-[440px]
                text-[clamp(2.6rem,4vw,4.5rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              Work that supports
              <span className="block text-white/24">real operations.</span>
            </h2>
          </div>

          <div className="max-w-[630px] lg:pt-2">
            <p
              className="
                text-[13px]
                leading-7
                text-white/37
              "
            >
              A focused selection of enterprise infrastructure, banking
              technology, network operations, and warehouse systems I have
              supported throughout my professional experience.
            </p>

            <Link
              href="/work"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/30
                transition
                hover:text-white
              "
            >
              View Project Archive
              <span
                className="
                  h-px
                  w-8
                  bg-white/15
                  transition-all
                  group-hover:w-12
                "
              />
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        <ProjectShowcase projects={projects} />
      </div>
    </section>
  );
}
