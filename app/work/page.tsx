import fs from "fs";
import path from "path";

import ProjectArchive, {
  WorkMedia,
  WorkProject,
} from "@/components/work/ProjectArchive";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getMediaFiles(folderName: string): WorkMedia[] {
  const root = path.join(process.cwd(), "public", "projects", folderName);

  if (!fs.existsSync(root)) {
    return [];
  }

  function walk(directory: string): string[] {
    const entries = fs.readdirSync(directory, {
      withFileTypes: true,
    });

    return entries.flatMap((entry) => {
      const absolute = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return walk(absolute);
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!imageExtensions.has(extension)) {
        return [];
      }

      return [absolute];
    });
  }

  return walk(root)
    .sort((a, b) => a.localeCompare(b))
    .map((absolute) => {
      const relative = path
        .relative(path.join(process.cwd(), "public"), absolute)
        .split(path.sep)
        .join("/");

      return {
        src: `/${relative}`,
        name: path.basename(absolute, path.extname(absolute)),
      };
    });
}

export default function WorkPage() {
  const projects: WorkProject[] = [
    {
      id: "01",

      title: "BNI Transformation 4.0",

      year: "2016 — 2023",

      category: "Banking Transformation",

      summary:
        "Regional implementation and technical support for customer-facing banking transformation initiatives including biometric verification, DigiCS, online queue systems, and supporting branch technology.",

      scope:
        "Implementation support, technical validation, troubleshooting, field coordination, operational readiness, and regional technical assistance.",

      scale: "144 Branch Offices",

      thumbnail: "/projects/bni-transformation.jpeg",

      media: getMediaFiles("BNI-Transformation-4.0"),
    },

    {
      id: "02",

      title: "Enterprise Event IT Infrastructure",

      year: "2016 — 2023",

      category: "Event Infrastructure",

      summary:
        "Temporary but business-critical IT infrastructure supporting corporate events, customer-facing services, connectivity, and enterprise operational requirements.",

      scope:
        "Connectivity preparation, banking equipment readiness, field infrastructure support, monitoring, and technical troubleshooting.",

      scale: "Corporate · Executive · Event",

      thumbnail: "/projects/enterprise-event.jpeg",

      media: getMediaFiles("Enterprise-Event-IT-Infrastructure"),
    },

    {
      id: "03",

      title: "SD-WAN & Branch Network Operations",

      year: "2016 — 2023",

      category: "Network Operations",

      summary:
        "Branch connectivity and enterprise network support including SD-WAN rollout, network appliance implementation, validation, and troubleshooting.",

      scope:
        "Network rollout support, appliance implementation, connectivity validation, troubleshooting, and escalation.",

      scale: "Enterprise Branch Connectivity",

      thumbnail: "/projects/sdwan-network.jpeg",

      media: getMediaFiles("sdwan-operations"),
    },

    {
      id: "04",

      title: "SCM–CCTV System Integration",

      year: "2023 — Present",

      category: "Warehouse Systems",

      summary:
        "Warehouse operational technology support involving SCM applications, CCTV systems, operational validation, incident handling, and technical coordination.",

      scope:
        "SCM support, CCTV validation, operational troubleshooting, system checks, and coordination with technical teams.",

      scale: "3 Warehouse Sites",

      thumbnail: "/projects/warehouse-systems.jpg",

      media: getMediaFiles("warehouse-scm"),
    },

    {
      id: "05",

      title: "IT Infrastructure & Network Operations",

      year: "2016 — Present",

      category: "Infrastructure",

      summary:
        "Hands-on infrastructure operations across servers, endpoints, managed switching, wireless networking, branch environments, and warehouse systems.",

      scope:
        "Infrastructure support, network operations, systems troubleshooting, endpoint support, managed switching, wireless access, and technical documentation.",

      scale: "Banking · Logistics · Warehouse",

      thumbnail: "/projects/network-infrastructure.jpeg",

      media: getMediaFiles("network-infrastructure"),
    },
  ];

  return <ProjectArchive projects={projects} />;
}
