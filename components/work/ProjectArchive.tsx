"use client";

import Image from "next/image";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

import { PointerEvent, useCallback, useEffect, useRef, useState } from "react";

export type WorkMedia = {
  src: string;
  name: string;
};

export type WorkProject = {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  scope: string;
  scale: string;
  thumbnail: string;
  media: WorkMedia[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectArchive({
  projects,
}: {
  projects: WorkProject[];
}) {
  const reducedMotion = Boolean(useReducedMotion());

  const [activeProject, setActiveProject] = useState<number | null>(null);

  const [activeMedia, setActiveMedia] = useState(0);

  const pointerStart = useRef<number | null>(null);

  const project = activeProject !== null ? projects[activeProject] : null;

  const media = project?.media[activeMedia] ?? null;

  const close = useCallback(() => {
    setActiveProject(null);
    setActiveMedia(0);
  }, []);

  const next = useCallback(() => {
    if (!project || project.media.length === 0) {
      return;
    }

    setActiveMedia((current) =>
      current === project.media.length - 1 ? 0 : current + 1,
    );
  }, [project]);

  const previous = useCallback(() => {
    if (!project || project.media.length === 0) {
      return;
    }

    setActiveMedia((current) =>
      current === 0 ? project.media.length - 1 : current - 1,
    );
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();

      if (event.key === "ArrowRight") next();

      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", keyboard);

    return () => {
      document.body.style.overflow = original;

      window.removeEventListener("keydown", keyboard);
    };
  }, [project, close, next, previous]);

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX;
  }

  function pointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;

    const distance = event.clientX - pointerStart.current;

    pointerStart.current = null;

    if (Math.abs(distance) < 55) return;

    if (distance < 0) {
      next();
    } else {
      previous();
    }
  }

  return (
    <>
      <main
        className="
          overflow-hidden
          bg-[#0f1012]
          text-white
        "
      >
        <section
          className="
            border-b
            border-white/[0.07]
          "
        >
          <div
            className="
              mx-auto
              max-w-[1500px]
              px-6
              pb-16
              pt-32
              md:px-10
              lg:px-14
              lg:pb-20
              lg:pt-36
            "
          >
            <div
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Selected Work
            </div>

            <div
              className="
                mt-10
                grid
                gap-10
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-end
              "
            >
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  ease,
                }}
                className="
                  text-[clamp(3.2rem,5.5vw,6rem)]
                  font-medium
                  leading-[0.89]
                  tracking-[-0.06em]
                "
              >
                Infrastructure in
                <span className="block text-white/25">
                  operational context.
                </span>
              </motion.h1>

              <p
                className="
                  max-w-[620px]
                  text-[13px]
                  leading-7
                  text-white/37
                "
              >
                Selected implementations and technical environments spanning
                banking transformation, enterprise connectivity, network
                operations, infrastructure, and warehouse technology.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div
            className="
              mx-auto
              max-w-[1500px]
              px-6
              py-16
              md:px-10
              lg:px-14
              lg:py-24
            "
          >
            <div className="space-y-20 lg:space-y-28">
              {projects.map((item, index) => {
                const reverse = index % 2 === 1;

                return (
                  <motion.article
                    key={item.id}
                    id={
                      index === 0
                        ? "bni-transformation"
                        : index === 1
                          ? "enterprise-event"
                          : index === 2
                            ? "sdwan-network"
                            : index === 3
                              ? "warehouse-systems"
                              : "infrastructure"
                    }
                    initial={{
                      opacity: 0,
                      y: reducedMotion ? 0 : 45,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.18,
                    }}
                    transition={{
                      duration: reducedMotion ? 0.01 : 0.8,
                      ease,
                    }}
                    className="
                        border-t
                        border-white/[0.075]
                        pt-9
                      "
                  >
                    <div
                      className="
                          grid
                          gap-10
                          lg:grid-cols-2
                          lg:items-center
                        "
                    >
                      <div
                        className={reverse ? "lg:order-2 lg:pl-10" : "lg:pr-10"}
                      >
                        <div
                          className="
                              flex
                              flex-wrap
                              items-center
                              gap-4
                            "
                        >
                          <span
                            className="
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.13em]
                                text-white/23
                              "
                          >
                            {item.category}
                          </span>

                          <span className="h-px w-7 bg-white/12" />

                          <span
                            className="
                                font-mono
                                text-[8px]
                                text-white/25
                              "
                          >
                            {item.year}
                          </span>
                        </div>

                        <h2
                          className="
                              mt-6
                              text-[clamp(2rem,4.2vw,4.7rem)]
                              font-medium
                              leading-[0.94]
                              tracking-[-0.055em]
                            "
                        >
                          {item.title}
                        </h2>

                        <p
                          className="
                              mt-6
                              max-w-[600px]
                              text-[12px]
                              leading-7
                              text-white/37
                            "
                        >
                          {item.summary}
                        </p>

                        <p
                          className="
                              mt-4
                              max-w-[600px]
                              text-[10px]
                              leading-6
                              text-white/22
                            "
                        >
                          {item.scope}
                        </p>

                        <div
                          className="
                              mt-7
                              flex
                              items-center
                              gap-3
                              text-[7px]
                              font-semibold
                              uppercase
                              tracking-[0.13em]
                              text-white/20
                            "
                        >
                          {item.scale}
                        </div>
                      </div>

                      <motion.button
                        whileHover={
                          reducedMotion
                            ? {}
                            : {
                                y: -5,
                              }
                        }
                        onClick={() => {
                          setActiveProject(index);

                          setActiveMedia(0);
                        }}
                        className={`
                            group
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/[0.08]
                            bg-[#181a1d]
                            text-left
                            ${reverse ? "lg:order-1" : ""}
                          `}
                      >
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            sizes="(max-width:1024px) 100vw, 50vw"
                            className="
                                object-cover
                                transition-transform
                                duration-[900ms]
                                group-hover:scale-[1.025]
                              "
                          />

                          <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                via-transparent
                                to-transparent
                              "
                          />

                          <div
                            className="
                                absolute
                                bottom-5
                                left-5
                                flex
                                items-center
                                gap-3
                                text-[8px]
                                uppercase
                                tracking-[0.12em]
                                text-white/55
                              "
                          >
                            <Images size={13} />
                            Open Documentation
                            {item.media.length > 0 && ` · ${item.media.length}`}
                          </div>
                        </div>
                      </motion.button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {project && media && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.25,
            }}
            onClick={close}
            className="
              fixed
              inset-0
              z-[250]
              flex
              items-center
              justify-center
              bg-black/[0.95]
              p-4
              backdrop-blur-xl
            "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              onPointerDown={pointerDown}
              onPointerUp={pointerUp}
              className="
                relative
                flex
                h-full
                w-full
                max-w-[1500px]
                touch-pan-y
                items-center
                justify-center
              "
            >
              <button
                onClick={close}
                className="
                  absolute
                  right-3
                  top-3
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/40
                  text-white/70
                  backdrop-blur
                  transition
                  hover:bg-white
                  hover:text-black
                "
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={media.src}
                  initial={{
                    opacity: 0,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.28,
                    ease,
                  }}
                  className="
                    relative
                    h-[80vh]
                    w-full
                  "
                >
                  <Image
                    src={media.src}
                    alt={media.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {project.media.length > 1 && (
                <>
                  <button
                    onClick={previous}
                    className="
                      absolute
                      left-3
                      top-1/2
                      z-30
                      hidden
                      h-12
                      w-12
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/40
                      text-white/70
                      backdrop-blur
                      transition
                      hover:bg-white
                      hover:text-black
                      md:flex
                    "
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={next}
                    className="
                      absolute
                      right-3
                      top-1/2
                      z-30
                      hidden
                      h-12
                      w-12
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/40
                      text-white/70
                      backdrop-blur
                      transition
                      hover:bg-white
                      hover:text-black
                      md:flex
                    "
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  z-30
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/10
                  bg-black/55
                  px-5
                  py-3
                  text-center
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    max-w-[500px]
                    truncate
                    text-[9px]
                    text-white/55
                  "
                >
                  {media.name}
                </div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    uppercase
                    tracking-[0.13em]
                    text-white/25
                  "
                >
                  {activeMedia + 1} / {project.media.length}
                  {" · "}← → Navigate · ESC Close
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
