import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="border-t border-white/10 bg-[#101114]">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Contact
          </div>

          <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Start a useful
            <span className="block text-white/28">conversation.</span>
          </h2>
        </div>

        <div className="self-end">
          <p className="max-w-[520px] text-sm leading-7 text-white/40">
            For infrastructure roles, IT operations opportunities, technical
            projects, or professional collaboration.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:yudha.perwira92@gmail.com"
              className="border border-white/15 px-5 py-4 text-[9px] uppercase tracking-[0.12em] text-white/60 transition hover:bg-white hover:text-black"
            >
              Email Me
            </a>

            <Link
              href="/contact"
              className="border border-white/10 px-5 py-4 text-[9px] uppercase tracking-[0.12em] text-white/40 transition hover:border-white/25 hover:text-white"
            >
              Full Contact Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
