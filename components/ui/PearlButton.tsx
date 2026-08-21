"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { ReactNode } from "react";

type PearlButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
  icon?: "arrow" | "download" | "none";
  external?: boolean;
};

export default function PearlButton({
  href,
  children,
  variant = "dark",
  icon = "arrow",
  external = false,
}: PearlButtonProps) {
  const classes =
    variant === "light"
      ? `
        group relative inline-flex min-h-[48px] items-center justify-center gap-4
        overflow-hidden rounded-full border border-white/60
        bg-white px-7 text-[9px] font-semibold uppercase tracking-[0.14em]
        text-black shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_12px_35px_rgba(0,0,0,.16)]
        transition-all duration-500
        hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.95),0_18px_45px_rgba(0,0,0,.25)]
      `
      : `
        group relative inline-flex min-h-[48px] items-center justify-center gap-4
        overflow-hidden rounded-full border border-white/[0.14]
        bg-[linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.018))]
        px-7 text-[9px] font-semibold uppercase tracking-[0.14em]
        text-white/70
        shadow-[inset_0_1px_0_rgba(255,255,255,.13),inset_0_-12px_24px_rgba(0,0,0,.2),0_16px_40px_rgba(0,0,0,.2)]
        backdrop-blur-md transition-all duration-500
        hover:-translate-y-[2px] hover:border-white/30 hover:text-white
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,.2),0_22px_52px_rgba(0,0,0,.32)]
      `;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-[10%] top-[1px] h-[45%]
          rounded-[999px]
          bg-gradient-to-b from-white/[0.10] to-transparent
          opacity-80
        "
      />

      <span className="relative z-10">{children}</span>

      {icon === "arrow" && (
        <ArrowUpRight
          size={14}
          className="
            relative z-10 opacity-60 transition-transform duration-300
            group-hover:-translate-y-0.5 group-hover:translate-x-0.5
          "
        />
      )}

      {icon === "download" && (
        <Download
          size={14}
          className="
            relative z-10 opacity-60 transition-transform duration-300
            group-hover:translate-y-0.5
          "
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
