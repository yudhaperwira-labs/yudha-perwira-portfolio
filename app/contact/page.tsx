export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-white">
      <section>
        <div className="mx-auto max-w-[1500px] px-5 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Contact
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="max-w-[900px] text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
              Start a useful
              <span className="block text-white/28">conversation.</span>
            </h1>

            <div>
              <p className="max-w-[540px] text-[13px] leading-7 text-white/42 sm:text-sm">
                For IT infrastructure roles, IT operations opportunities,
                technical projects, or professional collaboration.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:yudha.perwira92@gmail.com"
                  className="flex min-h-[54px] items-center justify-between border border-white/15 px-5 text-[9px] uppercase tracking-[0.12em] text-white/60 transition hover:bg-white hover:text-black"
                >
                  Email Me
                  <span>↗</span>
                </a>

                <a
                  href="/resume/Yudha_Perwira_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[54px] items-center justify-between border border-white/10 px-5 text-[9px] uppercase tracking-[0.12em] text-white/42 transition hover:border-white/25 hover:text-white"
                >
                  Resume
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
