import Link from "next/link";

const items = [
  {
    period: "2023 — Present",
    company: "PT Bi-Chain Science & Technology",
    role: "IT & QC Support",
  },
  {
    period: "2016 — 2023",
    company: "PT Bank Negara Indonesia (Persero) Tbk.",
    role: "IT & Technology / Banking Operations",
  },
  {
    period: "2014 — 2016",
    company: "PT Bank Maybank Indonesia Tbk.",
    role: "Banking Operations",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="border-t border-white/10 bg-[#0c0d0f]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
              Experience
            </div>

            <h2 className="mt-4 max-w-[560px] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Built across
              <span className="block text-white/28">
                different environments.
              </span>
            </h2>

            <Link
              href="/experience"
              className="mt-8 inline-flex border-b border-white/15 pb-2 text-[9px] uppercase tracking-[0.12em] text-white/40 transition hover:text-white"
            >
              Full Experience →
            </Link>
          </div>

          <div className="border-t border-white/10">
            {items.map((item, index) => (
              <div
                key={item.company}
                className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[120px_1fr]"
              >
                <div className="text-[9px] uppercase tracking-[0.12em] text-white/20">
                  {item.period}
                </div>

                <div>
                  <div className="text-[9px] uppercase tracking-[0.12em] text-white/25">
                    {item.role}
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.company}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
