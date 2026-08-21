const timeline = [
  {
    id: "01",
    period: "2023 — Present",
    role: "IT & QC Support",
    company: "PT Bi-Chain Science & Technology",
    description:
      "Warehouse IT operations supporting endpoints, systems, operational technology, WMS and SCM environments, and multi-site technical activities.",
  },
  {
    id: "02",
    period: "2016 — 2023",
    role: "IT & Technology / Banking Operations",
    company: "PT Bank Negara Indonesia (Persero) Tbk.",
    description:
      "Enterprise infrastructure and technology support across regional banking environments, branch operations, and transformation initiatives.",
  },
  {
    id: "03",
    period: "2014 — 2016",
    role: "Banking Operations",
    company: "PT Bank Maybank Indonesia Tbk.",
    description:
      "Customer-facing banking operations, transaction services, and operational support.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Experience
          </div>

          <h1 className="mt-7 max-w-[1100px] text-[clamp(3rem,12vw,8rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
            Experience shaped by
            <span className="block text-white/28">
              operational responsibility.
            </span>
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
          {timeline.map((item) => (
            <article
              key={item.id}
              className="grid gap-5 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[180px_1fr] lg:gap-12 lg:py-16"
            >
              <div>
                <div className="text-[8px] uppercase tracking-[0.14em] text-white/20">
                  {item.id}
                </div>

                <div className="mt-3 text-[9px] uppercase tracking-[0.12em] text-white/30">
                  {item.period}
                </div>
              </div>

              <div className="min-w-0">
                <div className="text-[8px] uppercase tracking-[0.14em] text-white/25">
                  {item.role}
                </div>

                <h2 className="mt-3 text-[clamp(2rem,7vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                  {item.company}
                </h2>

                <p className="mt-5 max-w-[720px] text-[12px] leading-6 text-white/40 sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
