"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["Home", "/"],
  ["Work", "/work"],
  ["Experience", "/experience"],
  ["Expertise", "/expertise"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0c0e]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.03em] text-white"
          onClick={() => setOpen(false)}
        >
          YPN
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map(([label, href]) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-[10px] uppercase tracking-[0.12em] transition ${
                  active ? "text-white" : "text-white/35 hover:text-white"
                }`}
              >
                {label}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume/Yudha_Perwira_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden border border-white/15 px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0c0e] md:hidden">
          <nav className="mx-auto max-w-[1500px] px-6 py-5">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm uppercase tracking-[0.1em] text-white/65"
              >
                {label}
                <span className="text-white/25">↗</span>
              </Link>
            ))}

            <a
              href="/resume/Yudha_Perwira_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex border border-white/15 px-4 py-4 text-[10px] uppercase tracking-[0.12em] text-white/65"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
