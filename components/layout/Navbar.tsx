"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { useRef, useState } from "react";

import PearlButton from "@/components/ui/PearlButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(true);

  const { scrollY } = useScroll();

  const lastScroll = useRef(0);
  const collapsePoint = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScroll.current;

    if (expanded && latest > previous && latest > 150) {
      setExpanded(false);
      collapsePoint.current = latest;
    }

    if (!expanded && latest < previous && collapsePoint.current - latest > 70) {
      setExpanded(true);
    }

    lastScroll.current = latest;
  });

  return (
    <>
      <div className="fixed left-1/2 top-5 z-[100] hidden -translate-x-1/2 lg:block">
        <motion.nav
          initial={{
            y: -70,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            width: expanded ? "auto" : 52,
          }}
          transition={{
            duration: 0.45,
            ease,
          }}
          onClick={() => {
            if (!expanded) {
              setExpanded(true);
            }
          }}
          className="
            relative
            flex
            h-[52px]
            items-center
            overflow-hidden
            rounded-full
            border
            border-white/[0.09]
            bg-[#0c0e10]/80
            px-2
            shadow-[0_15px_50px_rgba(0,0,0,.35)]
            backdrop-blur-xl
          "
        >
          {expanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="
                  flex
                  h-9
                  items-center
                  rounded-full
                  px-4
                  text-[11px]
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                  transition
                  hover:bg-white/[0.06]
                "
              >
                YPN
              </Link>

              <div className="mx-1 h-4 w-px bg-white/10" />

              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        relative
                        rounded-full
                        px-3
                        py-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        transition-all
                        duration-300
                        ${
                          active
                            ? "text-white"
                            : "text-white/35 hover:text-white/75"
                        }
                      `}
                    >
                      {item.label}

                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="
                            absolute
                            inset-x-3
                            -bottom-[1px]
                            h-px
                            bg-white/80
                          "
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="ml-3">
                <PearlButton
                  href="/resume/Yudha_Perwira_Resume.pdf"
                  variant="dark"
                  icon="download"
                  download
                >
                  Resume
                </PearlButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                absolute
                inset-0
                flex
                cursor-pointer
                items-center
                justify-center
              "
            >
              <Menu size={17} strokeWidth={1.5} className="text-white/70" />
            </motion.div>
          )}
        </motion.nav>
      </div>

      <div
        className="
          fixed
          left-4
          right-4
          top-4
          z-[100]
          flex
          h-14
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.09]
          bg-[#0c0e10]/85
          px-5
          backdrop-blur-xl
          lg:hidden
        "
      >
        <Link href="/" className="text-sm font-semibold text-white">
          YPN
        </Link>

        <Link
          href="/contact"
          className="
            rounded-full
            border
            border-white/10
            px-4
            py-2
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-white/60
          "
        >
          Contact
        </Link>
      </div>
    </>
  );
}
