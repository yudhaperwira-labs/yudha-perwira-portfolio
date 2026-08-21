import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090a0c]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-[-0.03em] text-white"
          >
            YPN
          </Link>

          <div className="mt-2 text-[9px] uppercase tracking-[0.14em] text-white/25">
            Infrastructure · Systems · Network Operations
          </div>
        </div>

        <div className="flex items-center gap-5 text-[9px] uppercase tracking-[0.12em] text-white/25">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <a
            href="/resume/Yudha_Perwira_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Resume
          </a>

          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
