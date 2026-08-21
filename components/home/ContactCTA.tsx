"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const contactItems = [
  {
    id: "01",
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/6287782662123",
    external: true,
  },
  {
    id: "02",
    label: "Phone",
    value: "Call directly",
    href: "tel:+6287782662123",
    external: false,
  },
  {
    id: "03",
    label: "LinkedIn",
    value: "Professional profile",
    href: "https://www.linkedin.com/in/yudhaperwira/",
    external: true,
  },
  {
    id: "04",
    label: "Email",
    value: "Professional inquiry",
    href: "mailto:yudha.perwira92@gmail.com",
    external: false,
  },
];

export default function ContactCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const subject = encodeURIComponent(
      "Portfolio Inquiry — IT Infrastructure & Operations",
    );

    const body = encodeURIComponent(
      `Hello Yudha,\n\nI found your portfolio and would like to connect.\n\nMy email: ${cleanEmail}\n\nMessage:\n`,
    );

    window.location.href = `mailto:yudha.perwira92@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] py-28 sm:py-32 lg:py-44">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-[20%] top-[5%] h-[650px] w-[650px] rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="text-[9px] uppercase tracking-[0.22em] text-white/22">
              Contact
            </div>

            <div className="mt-6 h-px w-12 bg-white/18" />
          </div>

          <div className="lg:col-span-9">
            <div className="overflow-hidden">
              <motion.h2
                initial={{
                  y: "105%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.95,
                  ease,
                }}
                className="max-w-[1100px] font-heading text-[clamp(4rem,8vw,8.8rem)] font-semibold leading-[0.8] tracking-[-0.075em]"
              >
                Start a useful
                <span className="block text-white/22">conversation.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease,
              }}
              className="mt-9 max-w-[610px] text-[13px] leading-7 text-white/36 sm:text-sm"
            >
              For IT infrastructure roles, IT operations opportunities,
              enterprise projects, technical collaboration, or professional
              discussions.
            </motion.p>
          </div>
        </div>

        {/* =====================================================
            CONTACT CHANNELS
        ====================================================== */}

        <div className="mt-20 lg:ml-[25%]">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease,
              }}
              className="group relative block py-7 sm:py-8"
            >
              <div className="grid gap-3 sm:grid-cols-[45px_190px_1fr_auto] sm:items-center">
                <span className="text-[8px] tracking-[0.14em] text-white/16">
                  {item.id}
                </span>

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                  {item.label}
                </span>

                <span className="font-heading text-[clamp(1.7rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-white/38 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white">
                  {item.value}
                </span>

                <span className="hidden text-white/18 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70 sm:block">
                  ↗
                </span>
              </div>

              <div className="absolute bottom-0 left-[45px] right-0 h-px bg-white/[0.07]" />
            </motion.a>
          ))}
        </div>

        {/* =====================================================
            EMAIL STARTER
        ====================================================== */}

        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <div className="text-[8px] uppercase tracking-[0.16em] text-white/20">
              Prefer Email?
            </div>

            <h3 className="mt-4 max-w-[390px] font-heading text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              Leave your email.
              <span className="block text-white/22">
                I’ll know where to reply.
              </span>
            </h3>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit}>
              <div className="group relative">
                <div className="flex items-end gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);

                      if (error) {
                        setError("");
                      }
                    }}
                    placeholder="yourname@company.com"
                    autoComplete="email"
                    aria-label="Your email address"
                    className="
                      min-w-0
                      flex-1
                      border-0
                      border-b
                      border-white/15
                      bg-transparent
                      px-0
                      py-5
                      font-heading
                      text-[clamp(1.5rem,3vw,2.7rem)]
                      tracking-[-0.035em]
                      text-white
                      outline-none
                      transition-colors
                      placeholder:text-white/13
                      focus:border-white/50
                    "
                  />

                  <button
                    type="submit"
                    className="
                      group/button
                      mb-3
                      inline-flex
                      shrink-0
                      items-center
                      gap-3
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/42
                      transition-colors
                      hover:text-white
                    "
                  >
                    Continue
                    <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                      →
                    </span>
                  </button>
                </div>

                {error && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-3 text-[9px] tracking-[0.05em] text-red-300/70"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            </form>

            <p className="mt-4 max-w-[620px] text-[8px] uppercase leading-5 tracking-[0.1em] text-white/15">
              Entering your email opens your default mail application with a
              prepared professional inquiry.
            </p>
          </div>
        </div>

        {/* =====================================================
            END
        ====================================================== */}

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 text-[8px] uppercase tracking-[0.13em] text-white/16">
          <span>Infrastructure · Systems · Network Operations</span>

          <Link
            href="/contact"
            className="transition-colors hover:text-white/60"
          >
            Full contact page ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
