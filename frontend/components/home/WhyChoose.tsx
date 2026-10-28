"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Bot,
  BarChart3,
  FileText,
  Code2,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "AI Career Mentor",
    desc: "Get personalized guidance and interview feedback powered by AI.",
  },
  {
    icon: Code2,
    title: "Company-wise Coding",
    desc: "Practice coding questions asked in top product & service companies.",
  },
  {
    icon: FileText,
    title: "ATS Resume Builder",
    desc: "Build professional resumes that pass ATS screening.",
  },
  {
    icon: Briefcase,
    title: "Placement Tracking",
    desc: "Track applications, interviews and placement progress.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Visualize your daily, weekly and monthly progress.",
  },
  {
    icon: CheckCircle2,
    title: "All-in-One Platform",
    desc: "Everything you need for placement preparation in one place.",
  },
];

export default function WhyChoose() {
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
          left-0
          top-1/3
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-600/[0.05]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-600/[0.05]
          blur-[130px]
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
              border-violet-400/20
              bg-violet-500/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-300
              backdrop-blur-xl
            "
          >
            ⭐ Why Choose Us
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
            Why Students Love{" "}
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
              TLX TechVerse
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
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
            One platform to learn, practice and get placed.
          </motion.p>

        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
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
                  min-h-[270px]
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
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[360px]
                      text-[15px]
                      leading-7
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-slate-300
                    "
                  >
                    {item.desc}
                  </p>

                </div>

                {/* Hover Arrow */}
                <div
                  className="
                    absolute
                    right-5
                    top-1/2
                    z-30
                    flex
                    h-10
                    w-8
                    -translate-y-1/2
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
                    group-hover:border-blue-400/40
                    group-hover:bg-blue-500/10
                    group-hover:text-blue-300
                    group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                  />
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