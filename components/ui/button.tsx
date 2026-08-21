"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

type PearlButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
  icon?: "arrow" | "download" | "none";
  download?: boolean;
  external?: boolean;
};

export default function PearlButton({
  href,
  children,
  variant = "light",
  icon = "arrow",
  download = false,
  external = false,
}: PearlButtonProps) {
  const dark = variant === "dark";

  const classes = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-full
    border
    px-7
    py-4
    text-[10px]
    font-semibold
    uppercase
    tracking-[0.14em]
    transition-all
    duration-500
    ${
      dark
        ? "border-white/[0.12] bg-white/[0.025] text-white/65 hover:border-white/25 hover:text-white"
        : "border-white/25 bg-white text-black hover:bg-white/90"
    }
  `;

  const content = (
    <>
      {/* PEARL GLOW */}
      <span
        className={`
          pointer-events-none
          absolute
          inset-x-[10%]
          top-0
          h-[42%]
          rounded-[100%]
          blur-[12px]
          transition-opacity
          duration-500
          ${dark ? "bg-white/[0.09]" : "bg-white/80"}
        `}
      />

      <span className="relative z-10">{children}</span>

      {icon === "arrow" && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="
            relative
            z-10
            transition-transform
            duration-500
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      )}

      {icon === "download" && (
        <Download
          size={14}
          strokeWidth={1.5}
          className="
            relative
            z-10
            transition-transform
            duration-500
            group-hover:translate-y-0.5
          "
        />
      )}
    </>
  );

  if (download) {
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        download
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  if (external) {
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.97 }}>
      <Link href={href} className={classes}>
        {content}
      </Link>
    </motion.div>
  );
}
