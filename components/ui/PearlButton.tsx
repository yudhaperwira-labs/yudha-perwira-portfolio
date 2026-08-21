"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

type PearlButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "light" | "dark";
  icon?: "arrow" | "download" | "none";
  download?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function PearlButton({
  children,
  href,
  variant = "light",
  icon = "arrow",
  download = false,
  onClick,
  className = "",
}: PearlButtonProps) {
  const baseClass = `
    group
    relative
    inline-flex
    min-h-[52px]
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-full
    border
    px-6
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.14em]
    transition-all
    duration-500
    ease-out
  `;

  const variantClass =
    variant === "light"
      ? `
          border-white/80
          bg-white
          text-black
          shadow-[0_12px_45px_rgba(255,255,255,0.08)]
          hover:-translate-y-0.5
          hover:shadow-[0_18px_60px_rgba(255,255,255,0.16)]
        `
      : `
          border-white/[0.12]
          bg-white/[0.025]
          text-white/65
          shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
          backdrop-blur-xl
          hover:-translate-y-0.5
          hover:border-white/25
          hover:bg-white/[0.06]
          hover:text-white
        `;

  const content = (
    <>
      <span
        className="
          pointer-events-none
          absolute
          inset-x-[12%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          opacity-50
        "
      />

      <span className="relative z-10">{children}</span>

      {icon === "arrow" && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.6}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      )}

      {icon === "download" && (
        <Download
          size={14}
          strokeWidth={1.6}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-y-0.5
          "
        />
      )}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />
    </>
  );

  const classes = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} download={download} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
