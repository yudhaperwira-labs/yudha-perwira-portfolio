"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export type ExperienceTimelineItem = {
  title: string;
  content: ReactNode;
};

export default function ExperienceTimeline({
  data,
}: {
  data: ExperienceTimelineItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    setHeight(contentRef.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 70%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);

  const opacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div ref={contentRef} className="relative mx-auto max-w-[1400px]">
        {data.map((entry, index) => (
          <div
            key={`${entry.title}-${index}`}
            className="
              relative flex justify-start
              pt-14 md:gap-10 md:pt-28
            "
          >
            {/* YEAR / PERIOD */}
            <div
              className="
                sticky top-28 z-30
                hidden h-fit
                w-[320px] shrink-0
                items-center md:flex
              "
            >
              <div
                className="
                  absolute left-[11px]
                  flex h-9 w-9 items-center justify-center
                  rounded-full bg-[#0e0f11]
                "
              >
                <div
                  className="
                    h-3 w-3 rounded-full
                    border border-white/15
                    bg-[#191b1e]
                  "
                />
              </div>

              <h3
                className="
                  pl-20 font-heading
                  text-[clamp(2rem,4vw,4.2rem)]
                  font-semibold
                  tracking-[-0.045em]
                  text-white/30
                "
              >
                {entry.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="relative w-full pl-14 md:pl-4">
              <h3
                className="
                  mb-6 font-heading text-3xl
                  font-semibold tracking-[-0.04em]
                  text-white/35 md:hidden
                "
              >
                {entry.title}
              </h3>

              {entry.content}
            </div>
          </div>
        ))}

        {/* BASE LINE */}
        <div
          style={{ height }}
          className="
            absolute left-[16px] top-0
            w-px overflow-hidden
            bg-white/[0.08]
            md:left-[16px]
          "
        >
          <motion.div
            style={{
              height: lineHeight,
              opacity,
            }}
            className="
              absolute inset-x-0 top-0 w-px
              bg-gradient-to-b
              from-white/10
              via-white/70
              to-white/10
            "
          />
        </div>
      </div>
    </div>
  );
}
