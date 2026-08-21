import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0c0e] pt-16 text-white">
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-[1500px] gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-10 lg:py-16">
        <div className="hero-copy relative z-10">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/30 sm:text-[10px]">
            IT Infrastructure & Operations
          </div>

          <h1 className="mt-6 max-w-[850px] text-[clamp(3.35rem,16vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
            <span className="block">YUDHA</span>
            <span className="block text-white/28">PERWIRA</span>
            <span className="block">NUSANTARA</span>
          </h1>

          <p className="mt-7 max-w-[650px] text-[13px] leading-6 text-white/45 sm:text-sm sm:leading-7">
            Enterprise Infrastructure / Systems Administration / Network
            Operations / IT Operations
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Link
              href="/work"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-white px-4 text-center text-[9px] font-semibold uppercase tracking-[0.11em] text-black transition-all duration-300 hover:-translate-y-1 sm:px-5 sm:text-[10px]"
            >
              Selected Work
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>

            <a
              href="/resume/Yudha_Perwira_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/15 px-4 text-[9px] font-semibold uppercase tracking-[0.11em] text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white sm:px-5 sm:text-[10px]"
            >
              Resume
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait relative mx-auto w-full max-w-[430px]">
          <div className="pointer-events-none absolute -inset-12 rounded-full bg-white/[0.035] blur-3xl" />

          <Link
            href="/about"
            aria-label="View profile"
            className="group relative block aspect-[4/4.75] overflow-hidden border border-white/10 bg-[#141519] sm:aspect-[4/5]"
          >
            <Image
              src="/profile/profile.jpg"
              alt="Professional portrait"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 430px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-3 border border-white/[0.08] sm:inset-4" />

            <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-white/20 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          <div className="mt-3 flex items-center justify-between text-[7px] uppercase tracking-[0.14em] text-white/20 sm:text-[8px]">
            <span>Infrastructure / Systems</span>
            <span>01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
