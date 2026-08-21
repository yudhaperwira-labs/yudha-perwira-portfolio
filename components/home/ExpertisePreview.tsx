import Link from "next/link";

const expertise = [
  "Enterprise Infrastructure",
  "Network Operations",
  "Systems Administration",
  "IT Operations",
];

export default function ExpertisePreview() {
  return (
    <section className="border-t border-white/10 bg-[#0b0c0e]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
              Expertise
            </div>

            <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              What I work with.
            </h2>
          </div>

          <Link
            href="/expertise"
            className="hidden border-b border-white/15 pb-2 text-[9px] uppercase tracking-[0.12em] text-white/35 transition hover:text-white md:inline-flex"
          >
            Full Expertise →
          </Link>
        </div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Link
              key={item}
              href="/expertise"
              className="group flex min-h-[150px] items-end justify-between border-b border-r border-white/10 p-6 transition hover:bg-white/[0.025]"
            >
              <div>
                <div className="text-[9px] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white/65 transition group-hover:text-white">
                  {item}
                </div>
              </div>

              <span className="text-white/20 transition group-hover:text-white/60">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
