import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-t border-white/10 bg-[#0b0c0e]">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            About
          </div>

          <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Technology
            <span className="block text-white/28">behind operations.</span>
          </h2>
        </div>

        <div className="self-end">
          <p className="max-w-[580px] text-sm leading-7 text-white/42">
            IT Infrastructure and Operations professional supporting enterprise
            systems, networks, users, and business-critical environments across
            banking, logistics, warehouse technology, and multi-site operations.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.12em] text-white/45 transition hover:text-white"
          >
            More About Me
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
