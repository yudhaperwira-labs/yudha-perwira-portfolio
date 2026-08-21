import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-white">
      <section>
        <div className="mx-auto max-w-[1500px] px-5 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            About
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-white/10 bg-[#15161a]">
              <Image
                src="/profile/profile.jpg"
                alt="Professional portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>

            <div className="min-w-0">
              <h1 className="max-w-[950px] text-[clamp(3rem,11vw,7rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
                Technology behind
                <span className="block text-white/28">
                  business operations.
                </span>
              </h1>

              <p className="mt-8 max-w-[720px] text-[13px] leading-7 text-white/45 sm:text-sm">
                IT Infrastructure and Operations professional supporting
                enterprise systems, networks, users, business applications, and
                operational technology across multi-site environments.
              </p>

              <p className="mt-5 max-w-[720px] text-[13px] leading-7 text-white/35 sm:text-sm">
                My approach is practical: keep systems reliable, support users,
                resolve incidents, improve operational readiness, and ensure
                technology continues supporting business activity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
