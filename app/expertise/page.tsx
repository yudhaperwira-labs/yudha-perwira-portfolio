const capabilities = [
  {
    id: "01",
    title: "Enterprise Infrastructure",
    description:
      "Enterprise endpoints, Windows infrastructure, operational systems, shared services, and multi-site IT environments.",
  },
  {
    id: "02",
    title: "Network Operations",
    description:
      "LAN/WAN operations, managed switching, branch connectivity, VLAN implementation, wireless access, and network troubleshooting.",
  },
  {
    id: "03",
    title: "Systems Administration",
    description:
      "Active Directory, Windows Server, user administration, shared folders, mapped network drives, and service support.",
  },
  {
    id: "04",
    title: "IT Operations",
    description:
      "Incident handling, root cause analysis, documentation, operational coordination, and service continuity.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Expertise
          </div>

          <h1 className="mt-7 max-w-[1100px] text-[clamp(3rem,12vw,8rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
            Infrastructure.
            <span className="block text-white/28">Systems. Networks.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1500px] border-l border-white/10 px-5 sm:px-6 md:grid-cols-2 lg:px-10">
          {capabilities.map((item) => (
            <article
              key={item.id}
              className="min-h-[220px] border-b border-r border-white/10 p-6 sm:min-h-[260px] sm:p-8"
            >
              <div className="text-[8px] uppercase tracking-[0.14em] text-white/20">
                {item.id}
              </div>

              <h2 className="mt-8 text-[clamp(1.8rem,6vw,3rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                {item.title}
              </h2>

              <p className="mt-5 max-w-[520px] text-[12px] leading-6 text-white/40 sm:text-sm sm:leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
