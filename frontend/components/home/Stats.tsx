"use client";

import { motion, useInView } from "framer-motion";
import {
  Users,
  Building2,
  Award,
  BookOpen,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 10000,
    display: "10K+",
    label: "Active Students",
  },
  {
    icon: Building2,
    value: 500,
    display: "500+",
    label: "Hiring Companies",
  },
  {
    icon: Award,
    value: 95,
    display: "95%",
    label: "Placement Success",
  },
  {
    icon: BookOpen,
    value: 50000,
    display: "50K+",
    label: "Practice Questions",
  },
];

function Counter({
  value,
  display,
  start,
}: {
  value: number;
  display: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(value * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  const formatted =
    value >= 1000
      ? `${Math.floor(count / 1000)}K`
      : `${count}`;

  const suffix = display.includes("%")
    ? "%"
    : display.includes("+")
      ? "+"
      : "";

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-20
        lg:py-24
      "
    >
      {/* Center Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/[0.05]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.08]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500/[0.06]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Stats Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  min-h-[220px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.06]
                  to-white/[0.02]
                  p-6
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:border-blue-500/30
                  hover:bg-white/[0.07]
                  hover:shadow-[0_20px_70px_rgba(59,130,246,.14)]
                "
              >

                {/* Hover Background */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-px
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-500/[0.07]
                    via-transparent
                    to-violet-500/[0.08]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Right Side Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    bg-blue-500/15
                    blur-[75px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-400/20
                    bg-gradient-to-br
                    from-blue-500/15
                    to-violet-500/15
                    text-blue-400
                    shadow-[0_0_30px_rgba(59,130,246,.12)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-blue-400/40
                    group-hover:text-cyan-300
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-500
                      group-hover:rotate-3
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h2
                    className="
                      text-4xl
                      font-extrabold
                      leading-none
                      tracking-[-1.5px]
                      text-white
                      sm:text-5xl
                    "
                  >
                    <Counter
                      value={stat.value}
                      display={stat.display}
                      start={isInView}
                    />
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      leading-6
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-slate-300
                    "
                  >
                    {stat.label}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}