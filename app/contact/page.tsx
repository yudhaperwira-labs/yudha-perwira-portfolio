"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const channels = [
  {
    number: "01",
    name: "Email",
    description: "Professional inquiries",
    href: "mailto:yudha.perwira92@gmail.com",
    value: "Send an email",
  },
  {
    number: "02",
    name: "WhatsApp",
    description: "Direct conversation",
    href: "https://wa.me/6287782662123",
    value: "Start WhatsApp",
  },
  {
    number: "03",
    name: "Phone",
    description: "Direct contact",
    href: "tel:+6287782662123",
    value: "Call",
  },
  {
    number: "04",
    name: "LinkedIn",
    description: "Professional network",
    href: "https://www.linkedin.com/in/yudhaperwira/",
    value: "View LinkedIn",
  },
];

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!cleanEmail) {
      setError("Email address is required.");
      return;
    }

    if (!emailPattern.test(cleanEmail)) {
      setError("Please use a valid email address.");
      return;
    }

    if (!cleanMessage) {
      setError("Please write a short message.");
      return;
    }

    setError("");

    const subject = encodeURIComponent(
      "Portfolio Inquiry — IT Infrastructure & Operations",
    );

    const body = encodeURIComponent(
      `Hello Yudha,\n\n${cleanMessage}\n\nReply to: ${cleanEmail}`,
    );

    window.location.href = `mailto:yudha.perwira92@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0b0d] text-white">
      {/* HERO */}

      <section className="px-5 pb-20 pt-32 sm:px-7 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-[9px] uppercase tracking-[0.22em] text-white/22">
            Contact
          </div>

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{
                y: "105%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.95,
                ease,
              }}
              className="max-w-[1250px] font-heading text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.79] tracking-[-0.075em]"
            >
              Opportunities,
              <span className="block text-white/22">
                projects & conversations.
              </span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* CHANNELS */}

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="lg:ml-[25%]">
            {channels.map((channel, index) => (
              <motion.a
                key={channel.number}
                href={channel.href}
                target={
                  channel.name === "LinkedIn" || channel.name === "WhatsApp"
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
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
                className="group relative block py-8"
              >
                <div className="grid gap-3 sm:grid-cols-[50px_150px_1fr_auto] sm:items-center">
                  <span className="text-[8px] text-white/17">
                    {channel.number}
                  </span>

                  <div>
                    <div className="text-[9px] uppercase tracking-[0.14em] text-white/35">
                      {channel.name}
                    </div>

                    <div className="mt-1 text-[8px] text-white/18">
                      {channel.description}
                    </div>
                  </div>

                  <div className="font-heading text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-white/32 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white">
                    {channel.value}
                  </div>

                  <span className="hidden text-white/20 transition group-hover:text-white sm:block">
                    ↗
                  </span>
                </div>

                <div className="absolute bottom-0 left-[50px] right-0 h-px bg-white/[0.07]" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}

      <section className="px-5 py-24 sm:px-7 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                Send an Inquiry
              </div>

              <h2 className="mt-6 max-w-[500px] font-heading text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
                Tell me what
                <span className="block text-white/22">you’re working on.</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label className="text-[8px] uppercase tracking-[0.14em] text-white/24">
                  Your Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="name@company.com"
                  autoComplete="email"
                  className="mt-3 w-full border-0 border-b border-white/15 bg-transparent py-4 text-xl text-white outline-none transition focus:border-white/50 placeholder:text-white/12"
                />
              </div>

              <div>
                <label className="text-[8px] uppercase tracking-[0.14em] text-white/24">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    setError("");
                  }}
                  rows={5}
                  placeholder="Tell me briefly about the role, project, or opportunity..."
                  className="mt-3 w-full resize-none border-0 border-b border-white/15 bg-transparent py-4 text-base leading-7 text-white outline-none transition focus:border-white/50 placeholder:text-white/12"
                />
              </div>

              {error && <p className="text-[10px] text-red-300/70">{error}</p>}

              <button
                type="submit"
                className="group inline-flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45 transition hover:text-white"
              >
                Compose Email
                <span className="h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-16" />
                ↗
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
