"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

/* =========================================================
   CUSTOM LINKEDIN ICON
   Dibuat manual supaya tidak bergantung pada export Lucide
========================================================= */

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8 10V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M8 7.5V7.51"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M12 10V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 13.5C12.4 11.8 15.2 11.2 16.2 12.8C16.6 13.5 16.5 14.4 16.5 15.2V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   TYPES
========================================================= */

type ContactMethod = "email" | "whatsapp" | "phone" | "linkedin";

/* =========================================================
   DATE HELPERS
========================================================= */

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function startOfDay(date: Date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ContactPage() {
  const today = useMemo(() => startOfDay(new Date()), []);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedMethod, setSelectedMethod] = useState<ContactMethod | null>(
    null,
  );

  const [showCalendar, setShowCalendar] = useState(false);

  /* =======================================================
     CALENDAR DATA
  ======================================================= */

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const firstWeekday = firstDay.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const previousMonthDays = new Date(year, month, 0).getDate();

    const cells: {
      date: Date;
      currentMonth: boolean;
    }[] = [];

    for (let i = firstWeekday - 1; i >= 0; i--) {
      cells.push({
        date: new Date(year, month - 1, previousMonthDays - i),
        currentMonth: false,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        date: new Date(year, month, day),
        currentMonth: true,
      });
    }

    let nextDay = 1;

    while (cells.length < 42) {
      cells.push({
        date: new Date(year, month + 1, nextDay),
        currentMonth: false,
      });

      nextDay++;
    }

    return cells;
  }, [currentMonth]);

  /* =======================================================
     MONTH NAVIGATION
  ======================================================= */

  const previousMonth = () => {
    const previous = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1,
    );

    const minimumMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    if (previous >= minimumMonth) {
      setCurrentMonth(previous);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  /* =======================================================
     CONTACT METHOD
  ======================================================= */

  const handleContact = (method: ContactMethod) => {
    if (!selectedDate) return;

    setSelectedMethod(method);

    const date = formatDate(selectedDate);

    const message = encodeURIComponent(
      `Hello Yudha,

I would like to contact you regarding a professional opportunity.

Preferred contact date:
${date}

Company:
Position / Opportunity:
Additional information:

Best regards`,
    );

    const subject = encodeURIComponent(
      "Recruitment / Professional Opportunity",
    );

    /*
      GANTI data di bawah sesuai milikmu jika diperlukan.
    */

    if (method === "email") {
      window.location.href = `mailto:yudha.perwira92@gmail.com?subject=${subject}&body=${message}`;
    }

    if (method === "whatsapp") {
      window.open(
        `https://wa.me/6287782662123?text=${message}`,
        "_blank",
        "noopener,noreferrer",
      );
    }

    if (method === "phone") {
      window.location.href = "tel:+6287782662123";
    }

    if (method === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/yudhaperwira/",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white overflow-hidden">
      {/* ===================================================
          HERO CONTACT
      =================================================== */}

      <section className="relative min-h-[82vh] border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 pt-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[11px] tracking-[0.28em] text-white/35 font-semibold">
              CONTACT
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 mt-24 md:mt-32">
            {/* LEFT SIDE */}

            <div className="lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[clamp(3.5rem,7vw,8rem)]
                  leading-[0.88]
                  tracking-[-0.055em]
                  font-medium
                "
              >
                Let&apos;s talk
                <br />
                <span className="text-white/25">infrastructure.</span>
              </motion.h1>
            </div>

            {/* RIGHT SIDE */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                lg:col-span-5
                lg:col-start-8
                flex
                flex-col
                justify-end
                pb-8
              "
            >
              <p className="text-lg md:text-xl leading-relaxed text-white/55 max-w-xl">
                For IT Infrastructure, System Administration, IT Operations,
                technical projects, or professional collaboration.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-white/35 max-w-lg">
                Recruiters, hiring managers, and business leaders can contact me
                directly or schedule a preferred date for a conversation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowCalendar(true)}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-7
                    py-4
                    text-[11px]
                    font-semibold
                    tracking-[0.18em]
                    transition-all
                    duration-500
                    hover:bg-white
                    hover:text-black
                    hover:border-white
                  "
                >
                  <CalendarDays size={17} strokeWidth={1.5} />
                  SCHEDULE CONTACT
                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </button>

                <a
                  href="#direct-contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    px-6
                    py-4
                    text-[11px]
                    font-semibold
                    tracking-[0.18em]
                    text-white/50
                    transition-colors
                    hover:text-white
                  "
                >
                  DIRECT CONTACT
                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================
          DIRECT CONTACT
      =================================================== */}

      <section id="direct-contact" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <span className="text-[11px] tracking-[0.28em] text-white/35 font-semibold">
            DIRECT CONTACT
          </span>

          <div className="grid lg:grid-cols-12 gap-12 mt-16">
            <div className="lg:col-span-5">
              <h2
                className="
                  text-4xl
                  md:text-6xl
                  tracking-[-0.045em]
                  leading-[0.95]
                  font-medium
                "
              >
                Choose how
                <br />
                <span className="text-white/25">we connect.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-2">
                <DirectContactRow
                  icon={<Mail size={20} />}
                  title="Email"
                  description="Recruitment & professional inquiries"
                  href="mailto:YOUR_EMAIL@example.com"
                />

                <DirectContactRow
                  icon={<MessageCircle size={20} />}
                  title="WhatsApp"
                  description="Direct professional communication"
                  href="https://wa.me/628XXXXXXXXXX"
                />

                <DirectContactRow
                  icon={<Phone size={20} />}
                  title="Phone"
                  description="Voice call for scheduled discussions"
                  href="tel:+628XXXXXXXXXX"
                />

                <DirectContactRow
                  icon={<LinkedInIcon size={20} />}
                  title="LinkedIn"
                  description="Professional profile & networking"
                  href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CALENDAR MODAL
      =================================================== */}

      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowCalendar(false)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-xl
              p-4
              md:p-8
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 15,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[92vh]
                overflow-y-auto
                rounded-[28px]
                border
                border-white/10
                bg-[#0c0e10]
                p-6
                md:p-10
                shadow-2xl
              "
            >
              {/* MODAL HEADER */}

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  justify-between
                  gap-6
                  mb-8
                "
              >
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-white/30">
                    SCHEDULE CONTACT
                  </span>

                  <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                    Select a preferred date.
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    Past dates are unavailable.
                  </p>
                </div>

                <button
                  onClick={() => setShowCalendar(false)}
                  className="
                    self-start
                    md:self-auto
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-2.5
                    text-[10px]
                    tracking-[0.18em]
                    text-white/50
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  CLOSE
                </button>
              </div>

              {/* CALENDAR HEADER */}

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xl font-medium">
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </div>

                  <div className="text-xs text-white/35 mt-1">
                    {selectedDate
                      ? formatDate(selectedDate)
                      : "No date selected"}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={previousMonth}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/50
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(today.getFullYear(), today.getMonth(), 1),
                      )
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-5
                      py-3
                      text-[10px]
                      tracking-[0.16em]
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    TODAY
                  </button>

                  <button
                    onClick={nextMonth}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/50
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* DAYS */}

              <div className="grid grid-cols-7 border-l border-t border-white/[0.08]">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="
                      border-r
                      border-b
                      border-white/[0.08]
                      py-4
                      text-center
                      text-[9px]
                      font-semibold
                      tracking-[0.16em]
                      text-white/35
                    "
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((item, index) => {
                  const disabled = item.date < today;

                  const selected =
                    selectedDate && sameDay(item.date, selectedDate);

                  const isToday = sameDay(item.date, today);

                  return (
                    <button
                      key={index}
                      disabled={disabled}
                      onClick={() => {
                        if (!disabled) {
                          setSelectedDate(item.date);
                          setSelectedMethod(null);
                        }
                      }}
                      className={`
                        relative
                        min-h-[72px]
                        md:min-h-[92px]
                        border-r
                        border-b
                        border-white/[0.08]
                        p-3
                        text-left
                        transition-all
                        duration-300

                        ${
                          disabled
                            ? "cursor-not-allowed text-white/10"
                            : "hover:bg-white/[0.05]"
                        }

                        ${item.currentMonth ? "" : "text-white/20"}
                      `}
                    >
                      <span
                        className={`
                          inline-flex
                          h-8
                          min-w-8
                          items-center
                          justify-center
                          rounded-full
                          text-xs

                          ${
                            selected
                              ? "bg-white text-black"
                              : isToday
                                ? "border border-white/30 text-white"
                                : ""
                          }
                        `}
                      >
                        {item.date.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* CONTACT METHOD AFTER DATE */}

              <AnimatePresence>
                {selectedDate && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8">
                      <div className="border-t border-white/10 pt-8">
                        <span className="text-[10px] tracking-[0.22em] text-white/30">
                          SELECT CONTACT METHOD
                        </span>

                        <h4 className="mt-3 text-xl md:text-2xl">
                          {formatDate(selectedDate)}
                        </h4>

                        <p className="mt-2 text-sm text-white/40">
                          Choose your preferred communication channel.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-7">
                          <ContactMethodButton
                            icon={<Mail size={18} />}
                            label="EMAIL"
                            active={selectedMethod === "email"}
                            onClick={() => handleContact("email")}
                          />

                          <ContactMethodButton
                            icon={<MessageCircle size={18} />}
                            label="WHATSAPP"
                            active={selectedMethod === "whatsapp"}
                            onClick={() => handleContact("whatsapp")}
                          />

                          <ContactMethodButton
                            icon={<Phone size={18} />}
                            label="PHONE"
                            active={selectedMethod === "phone"}
                            onClick={() => handleContact("phone")}
                          />

                          <ContactMethodButton
                            icon={<LinkedInIcon size={18} />}
                            label="LINKEDIN"
                            active={selectedMethod === "linkedin"}
                            onClick={() => handleContact("linkedin")}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* =========================================================
   DIRECT CONTACT ROW
========================================================= */

function DirectContactRow({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ x: 5 }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-white/10
        py-7
        transition-colors
        duration-300
        hover:border-white/30
      "
    >
      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white/45
            transition-all
            duration-300
            group-hover:bg-white
            group-hover:text-black
          "
        >
          {icon}
        </div>

        <div>
          <div className="text-base font-medium">{title}</div>

          <div className="mt-1 text-xs text-white/35">{description}</div>
        </div>
      </div>

      <ArrowRight
        size={17}
        className="
          text-white/30
          transition-all
          duration-300
          group-hover:text-white
          group-hover:translate-x-1
        "
      />
    </motion.a>
  );
}

/* =========================================================
   CONTACT METHOD BUTTON
========================================================= */

function ContactMethodButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`
        group
        flex
        items-center
        justify-between
        rounded-full
        border
        px-5
        py-4
        text-[10px]
        font-semibold
        tracking-[0.16em]
        transition-all
        duration-300

        ${
          active
            ? "border-white bg-white text-black"
            : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/30 hover:text-white"
        }
      `}
    >
      <span className="flex items-center gap-3">
        {active ? <Check size={16} /> : icon}

        {label}
      </span>

      <ArrowRight
        size={14}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </motion.button>
  );
}
