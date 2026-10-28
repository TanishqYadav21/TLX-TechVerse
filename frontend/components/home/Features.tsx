"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  FileText,
  Briefcase,
  BarChart3,
  Bot,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Coding Practice",
    description:
      "Solve DSA questions with company-wise and topic-wise practice.",
  },
  {
    icon: Brain,
    title: "Aptitude",
    description:
      "Quant, Reasoning and English with mock tests and analytics.",
  },
  {
    icon: Bot,
    title: "AI Interview",
    description:
      "Practice HR & Technical interviews with AI feedback.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create ATS-friendly resumes with live preview.",
  },
  {
    icon: Briefcase,
    title: "Placement Hub",
    description:
      "Track internships, jobs and campus placement drives.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Monitor your progress with detailed performance reports.",
  },
];

export default function Features() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-24
        lg:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.07]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-600/[0.05]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mb-5
              inline-flex
              items-center
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-300
              backdrop-blur-xl
            "
          >
            Everything You Need
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-2px]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Everything You Need to{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Crack Placements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              md:text-lg
            "
          >
            One platform for coding, aptitude, interviews, resumes and
            placement preparation.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
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
                {/* Card Gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-px
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-500/[0.08]
                    via-transparent
                    to-violet-500/[0.08]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-blue-500/10
                    blur-[70px]
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
                    mb-5
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
                    size={26}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-500
                      group-hover:rotate-3
                    "
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col">
                  <div className="flex min-h-[32px] items-center justify-between gap-4">
                    <h3
                      className="
                        text-xl
                        font-semibold
                        leading-tight
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-blue-100
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* Arrow */}
                    <div
                      className="
                        mt-0.5
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-slate-500
                        opacity-0
                        translate-x-1
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                        group-hover:text-blue-300
                      "
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  <p
                    className="
                      mt-2
                      max-w-[360px]
                      text-[15px]
                      leading-7
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-slate-300
                    "
                  >
                    {feature.description}
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