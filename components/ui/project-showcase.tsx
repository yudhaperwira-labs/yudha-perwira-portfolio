"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export interface ShowcaseProject {
  title: string;
  description: string;
  year: string;
  href: string;
  image: string;
  category?: string;
}

type Props = {
  projects: ShowcaseProject[];
  heading?: string;
};

export function ProjectShowcase({
  projects,
  heading = "Selected Work",
}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [smoothPosition, setSmoothPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        mx-auto
        w-full
        max-w-[1100px]
      "
    >
      <div
        className="
          mb-8
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/27
        "
      >
        {heading}
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          hidden
          overflow-hidden
          rounded-[22px]
          border
          border-white/[0.08]
          bg-[#191b1e]
          shadow-[0_30px_100px_rgba(0,0,0,.55)]
          lg:block
        "
        style={{
          width: 300,
          height: 190,
          transform: `
            translate3d(
              ${smoothPosition.x + 32}px,
              ${smoothPosition.y - 95}px,
              0
            )
            scale(${isVisible ? 1 : 0.88})
          `,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 260ms ease, scale 260ms ease",
        }}
      >
        {projects.map((project, index) => (
          <Image
            key={project.title}
            src={project.image}
            alt={project.title}
            fill
            sizes="300px"
            className="
                object-cover
                transition-all
                duration-500
              "
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? "scale(1)" : "scale(1.08)",
              filter: hoveredIndex === index ? "blur(0)" : "blur(8px)",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div>
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
            className="group block"
          >
            <div
              className="
                  relative
                  border-t
                  border-white/[0.075]
                  py-6
                "
            >
              <div
                className={`
                    absolute
                    inset-0
                    -mx-4
                    rounded-[18px]
                    bg-white/[0.025]
                    transition-all
                    duration-300
                    ${
                      hoveredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-[0.98] opacity-0"
                    }
                  `}
              />

              <div
                className="
                    relative
                    flex
                    items-start
                    justify-between
                    gap-7
                    px-1
                  "
              >
                <div className="min-w-0 flex-1">
                  <div
                    className="
                        inline-flex
                        items-center
                        gap-3
                      "
                  >
                    <h3
                      className="
                          text-[clamp(1.5rem,2.8vw,2.7rem)]
                          font-medium
                          tracking-[-0.045em]
                          text-white/40
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                    >
                      <span className="relative">
                        {project.title}

                        <span
                          className={`
                              absolute
                              -bottom-1
                              left-0
                              h-px
                              bg-white
                              transition-all
                              duration-300
                              ${hoveredIndex === index ? "w-full" : "w-0"}
                            `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      size={14}
                      className={`
                          text-white/40
                          transition-all
                          duration-300
                          ${
                            hoveredIndex === index
                              ? "translate-x-0 -translate-y-0.5 opacity-100"
                              : "-translate-x-2 translate-y-2 opacity-0"
                          }
                        `}
                    />
                  </div>

                  <p
                    className="
                        mt-2
                        max-w-[620px]
                        text-[11px]
                        leading-6
                        text-white/27
                        transition
                        group-hover:text-white/42
                      "
                  >
                    {project.description}
                  </p>

                  {project.category && (
                    <div
                      className="
                          mt-3
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.13em]
                          text-white/18
                        "
                    >
                      {project.category}
                    </div>
                  )}
                </div>

                <span
                  className="
                      pt-2
                      font-mono
                      text-[8px]
                      text-white/20
                      transition
                      group-hover:text-white/55
                    "
                >
                  {project.year}
                </span>
              </div>
            </div>
          </Link>
        ))}

        <div className="border-t border-white/[0.075]" />
      </div>
    </section>
  );
}
