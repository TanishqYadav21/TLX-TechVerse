"use client";

import DashboardTilt from "./DashboardTilt";
import {
  Brain,
  Code2,
  FileText,
  Flame,
  Trophy,
  Target,
  ChevronUp,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HeroDashboard() {
  const weeklyData = [45, 70, 58, 90, 62, 80, 72];

  return (
    <DashboardTilt className="w-full max-w-[720px] xl:max-w-[760px]">
      <div className="relative">

        {/* Aurora Glow */}

        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-blue-500/25 blur-[120px]" />

        <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-violet-500/25 blur-[120px]" />

        {/* Browser Window */}

        <motion.div
          initial={{ opacity: 0, y: 40, scale: .95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: .8,
            ease: "easeOut"
          }}
          className="
relative
overflow-hidden
h-[470px]
rounded-[28px]
border
border-white/10
bg-[#0B1220]/90
backdrop-blur-3xl
shadow-[0_30px_120px_rgba(0,0,0,.55)]
"
        >

          {/* Gradient Border */}

          <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-br from-blue-500/40 via-white/10 to-violet-500/40">

            <div className="h-full w-full rounded-[32px] bg-[#081018]/95" />

          </div>

          <div className="relative z-10">

            {/* Browser Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-2.5">

              <div className="flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-emerald-500" />

              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">

                <span className="text-xs tracking-wide text-slate-400">

                  tlxtechverse.ai/dashboard

                </span>

              </div>

              <div className="w-16" />

            </div>

            {/* Dashboard */}

            <div className="flex">

              {/* Sidebar */}

              <aside className="w-[64px] border-r border-white/10 bg-white/[0.02]">

                <div className="flex flex-col items-center gap-4 py-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg">

                    <Brain className="text-white" size={22} />

                  </div>

                  {[
                    Code2,
                    Target,
                    FileText,
                    Trophy,
                    Flame,
                  ].map((Icon, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.12,
                        y: -2,
                      }}
                      className="
                      flex
                      h-10
                      w-10
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      transition-all
                    "
                    >
                      <Icon
                        size={20}
                        className="text-slate-300"
                      />
                    </motion.div>

                  ))}

                </div>

              </aside>

              {/* Main Content */}

              <div className="flex-1 p-4">

                {/* Welcome */}

                <div className="flex items-start justify-between">

                  <div>

                    <span
                      className="
                      inline-flex
                      rounded-full
                      border
                      border-blue-500/30
                      bg-blue-500/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-blue-300
                    "
                    >
                      AI Powered Dashboard
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-white">

                      Welcome Back 👋

                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">

                      Monitor coding, aptitude, ATS,
                      interview preparation and
                      placement progress from one place.

                    </p>

                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">

                    <div className="flex items-center gap-2">

                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

                      <span className="text-sm font-semibold text-emerald-300">

                        Live

                      </span>

                    </div>

                  </div>

                </div>

                {/* Continue in Part 2 */}
                {/* ========================= */}
                {/* Premium Analytics Cards */}
                {/* ========================= */}

                <div className="mt-5 grid grid-cols-3 gap-4">

                  {/* Coding */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                   p-4
                    backdrop-blur-xl
                  "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                    <div className="relative flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">

                        <Code2
                          size={22}
                          className="text-blue-400"
                        />

                      </div>

                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">

                        +12 Today

                      </span>

                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white">

                      154

                    </h3>

                    <p className="mt-1 text-sm text-slate-400">

                      Problems Solved

                    </p>

                  </motion.div>

                  {/* ATS */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="
                    relative
                    overflow-hidden
                   rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/20">

                        <FileText
                          size={22}
                          className="text-violet-300"
                        />

                      </div>

                      <span className="rounded-full bg-violet-500/15 px-2 py-1 text-xs font-semibold text-violet-300">

                        Excellent

                      </span>

                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white">

                      91

                    </h3>

                    <p className="mt-1 text-sm text-slate-400">

                      ATS Score

                    </p>

                  </motion.div>

                  {/* Accuracy */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20">

                        <Brain
                          size={22}
                          className="text-emerald-300"
                        />

                      </div>

                      <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-300">

                        +4%

                      </span>

                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white">

                      82%

                    </h3>

                    <p className="mt-1 text-sm text-slate-400">

                      Accuracy

                    </p>

                  </motion.div>

                </div>

                {/* ========================= */}
                {/* Progress + Goal */}
                {/* ========================= */}

                <div className="mt-5 grid grid-cols-[1.35fr_.85fr] gap-4">

                  {/* Circular Progress */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-lg font-semibold text-white">

                          Daily Progress

                        </h3>

                        <p className="mt-1 text-sm text-slate-400">

                          Keep your streak alive

                        </p>

                      </div>

                      <ChevronUp
                        className="text-emerald-400"
                        size={18}
                      />

                    </div>

                    <div className="mt-6 flex items-center justify-between">

                      <div className="relative h-24 w-24">

                        <svg
                          viewBox="0 0 120 120"
                          className="h-24 w-24 -rotate-90"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="rgba(255,255,255,.08)"
                            strokeWidth="10"
                          />

                          <motion.circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray="314"
                            initial={{
                              strokeDashoffset:314,
                            }}
                            animate={{
                              strokeDashoffset:63,
                            }}
                            transition={{
                              duration:1.4,
                            }}
                          />

                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center">

                          <span className="text-2xl font-bold text-white">

                            80%

                          </span>

                          <span className="text-xs text-slate-400">

                            Completed

                          </span>

                        </div>

                      </div>

                      <div className="space-y-3">

                        <div>

                          <p className="text-xs text-slate-500">

                            Coding

                          </p>

                          <h4 className="font-semibold text-white">

                            5 / 5

                          </h4>

                        </div>

                        <div>

                          <p className="text-xs text-slate-500">

                            Aptitude

                          </p>

                          <h4 className="font-semibold text-white">

                            15 / 20

                          </h4>

                        </div>

                        <div>

                          <p className="text-xs text-slate-500">

                            Interview

                          </p>

                          <h4 className="font-semibold text-amber-300">

                            Pending

                          </h4>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                  {/* Continue in Part 3 */}
                                    <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-blue-500/10
                    via-violet-500/5
                    to-white/[0.03]
                   p-4
                  "
                  >

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_45%)]" />

                    <div className="relative">

                      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">

                        AI Recommendation

                      </span>

                      <h3 className="mt-5 text-xl font-bold text-white">

                        Today's Goal

                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">

                        Complete today's coding challenge,
                        aptitude practice and improve ATS
                        score to stay placement ready.

                      </p>

                      <div className="mt-6">

                        <div className="mb-2 flex items-center justify-between text-sm">

                          <span className="text-slate-400">

                            Progress

                          </span>

                          <span className="font-semibold text-white">

                            4 / 5 Tasks

                          </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-white/10">

                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{
                              duration: 1.2,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500"
                          />

                        </div>

                      </div>

                      <button
                        className="
                       mt-5
                        w-full
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-500
                        to-violet-500
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-500/20
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-blue-500/40
                      "
                      >
                        Continue Practice →
                      </button>

                    </div>

                  </motion.div>

                </div>

                

                

              </div>

            </div>

          </div>

          {/* Glass Reflection */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.08]
            via-transparent
            to-transparent
          "
          />

          {/* Noise Texture */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-soft-light
            [background-image:url('/noise.png')]
          "
          />

        </motion.div>

      </div>

    </DashboardTilt>
  );
}