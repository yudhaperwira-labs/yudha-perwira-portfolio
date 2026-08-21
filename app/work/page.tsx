import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "Banking Transformation",
    title: "BNI Transformation 4.0",
    description:
      "Regional implementation and technical support for customer-facing banking transformation initiatives.",
    image: "/projects/bni-transformation.jpeg",
    tags: ["Biometric", "SONIC", "Online Queue"],
  },
  {
    number: "02",
    category: "Enterprise Infrastructure",
    title: "Enterprise Event IT",
    description:
      "Technical infrastructure and operational support for enterprise events and business collaboration environments.",
    image: "/projects/enterprise-event.jpeg",
    tags: ["IT Support", "Infrastructure", "Operations"],
  },
  {
    number: "03",
    category: "Connectivity Operations",
    title: "SD-WAN & Branch Network",
    description:
      "Supporting network modernization and connectivity implementation across branch environments.",
    image: "/projects/sdwan-network.jpeg",
    tags: ["SD-WAN", "Network", "Branch Operations"],
  },
  {
    number: "04",
    category: "Infrastructure",
    title: "Network & Infrastructure Operations",
    description:
      "Supporting enterprise network infrastructure, managed switches, systems, and day-to-day IT operations.",
    image: "/projects/network-infrastructure.jpeg",
    tags: ["Network", "Infrastructure", "Systems"],
  },
  {
    number: "05",
    category: "Operational Technology",
    title: "Warehouse Systems",
    description:
      "IT infrastructure and operational technology support for warehouse environments and supply-chain systems.",
    image: "/projects/warehouse-systems.jpg",
    tags: ["SCM", "WMS", "Warehouse IT"],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0e11] text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/30">
            Work
          </div>

          <h1 className="mt-7 max-w-[1100px] text-[clamp(3rem,12vw,8rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
            Systems,
            <span className="block">networks &</span>
            <span className="block text-white/28">real environments.</span>
          </h1>

          <p className="mt-8 max-w-[650px] text-[13px] leading-7 text-white/42 sm:mt-10 sm:text-sm">
            Selected implementations across banking technology, enterprise
            connectivity, infrastructure operations, events, and warehouse
            systems.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-20"
            >
              {/* TEXT */}
              <div className="min-w-0">
                <div className="text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px]">
                  {project.number} / {project.category}
                </div>

                <h2 className="mt-5 max-w-[700px] text-[clamp(2.2rem,7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
                  {project.title}
                </h2>

                <p className="mt-6 max-w-[570px] text-[12px] leading-6 text-white/40 sm:text-sm sm:leading-7">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div className="min-w-0">
                <div className="group relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#15161a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div className="pointer-events-none absolute inset-3 border border-white/[0.07] sm:inset-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Next
          </div>

          <a
            href="/experience"
            className="group mt-5 flex items-end justify-between gap-5"
          >
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Experience
            </h2>

            <span className="mb-1 text-xl text-white/35 transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
