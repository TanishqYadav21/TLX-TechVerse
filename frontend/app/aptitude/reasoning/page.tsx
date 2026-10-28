"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Compass,
  Eye,
  Lightbulb,
  ListOrdered,
  MessageSquareText,
  Puzzle,
  Scale,
  Shapes,
  Table2,
  Users,
  Waypoints,
} from "lucide-react";

const sections = [
  {
    name: "Puzzles",
    icon: Puzzle,
    tone: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50 text-blue-600",
    glow: "bg-blue-100/70",
    description: "Sequences, directions, queues and logic grids.",
  },
  {
    name: "Coding-Decoding",
    icon: Waypoints,
    tone: "from-violet-500 to-fuchsia-500",
    iconBg: "bg-violet-50 text-violet-600",
    glow: "bg-violet-100/70",
    description: "Patterns, symbols and hidden alphabet rules.",
  },
  {
    name: "Relations",
    icon: Users,
    tone: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-100/70",
    description: "Decode family trees and relationship chains.",
  },
  {
    name: "Arrangements",
    icon: Brain,
    tone: "from-orange-500 to-rose-500",
    iconBg: "bg-orange-50 text-orange-600",
    glow: "bg-orange-100/70",
    description: "Ordering, positions and seating logic.",
  },
  {
    name: "Analogy",
    icon: Shapes,
    tone: "from-sky-500 to-blue-500",
    iconBg: "bg-sky-50 text-sky-600",
    glow: "bg-sky-100/70",
    description:
      "Discover the connection between words, numbers and figures.",
  },
  {
    name: "Number & Letter Series",
    icon: ListOrdered,
    tone: "from-indigo-500 to-blue-500",
    iconBg: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-100/70",
    description: "Spot the hidden rule and predict the next term.",
  },
  {
    name: "Classification",
    icon: Eye,
    tone: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-50 text-pink-600",
    glow: "bg-pink-100/70",
    description: "Find the item that does not belong to the group.",
  },
  {
    name: "Direction Sense",
    icon: Compass,
    tone: "from-teal-500 to-emerald-500",
    iconBg: "bg-teal-50 text-teal-600",
    glow: "bg-teal-100/70",
    description: "Track movement, distance and final directions.",
  },
  {
    name: "Syllogism",
    icon: Scale,
    tone: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 text-amber-600",
    glow: "bg-amber-100/70",
    description:
      "Test conclusions using statements and logical sets.",
  },
  {
    name: "Statement & Conclusion",
    icon: MessageSquareText,
    tone: "from-purple-500 to-violet-500",
    iconBg: "bg-purple-50 text-purple-600",
    glow: "bg-purple-100/70",
    description:
      "Separate valid conclusions from assumptions.",
  },
  {
    name: "Data Sufficiency",
    icon: Table2,
    tone: "from-cyan-500 to-sky-500",
    iconBg: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-100/70",
    description:
      "Decide whether the given information is enough.",
  },
  {
    name: "Non-Verbal Reasoning",
    icon: Lightbulb,
    tone: "from-red-500 to-orange-500",
    iconBg: "bg-red-50 text-red-600",
    glow: "bg-red-100/70",
    description:
      "Solve visual patterns, figures, mirrors and paper folds.",
  },
];

export default function ReasoningPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-5 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <section className="relative mb-6 overflow-hidden rounded-[28px] bg-[#050b1d] px-6 py-7 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.55)] sm:px-9 sm:py-8">

          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                <Brain size={13} />
                Aptitude / Reasoning
              </div>

              <h1 className="max-w-3xl text-3xl font-black tracking-[-0.045em] text-white sm:text-5xl">
                Logical Reasoning
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Build structured thinking through patterns, puzzles, relations,
                codes, series and visual logic.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold text-slate-300">
                  12 live topics
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold text-slate-300">
                  Practice library
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold text-slate-300">
                  Self-paced
                </span>
              </div>
            </div>

            <div className="hidden min-w-[190px] rounded-[22px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                Topic library
              </p>

              <p className="mt-3 text-4xl font-black text-white">
                12
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-400">
                reasoning topics
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION TITLE ================= */}
        <div className="mb-4 flex items-end justify-between gap-4 px-1">

          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                Practice Library
              </p>
            </div>

            <h2 className="text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">
              Choose your next challenge
            </h2>
          </div>

          <div className="hidden items-center gap-2 pb-1 text-xs font-bold text-slate-400 sm:flex">
            <Brain size={14} className="text-blue-500" />
            Progress starts with one topic
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

          {sections.map(
            ({ name, icon: Icon, tone, iconBg, glow, description }, index) => (
              <Link
                key={name}
                href={`/aptitude/reasoning/${encodeURIComponent(name)}`}
                className="group block"
              >
                <article className="relative min-h-[205px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_45px_-22px_rgba(15,23,42,0.24)]">

                  {/* Top gradient */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${tone}`}
                  />

                  {/* Soft glow */}
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${glow}`}
                  />

                  <div className="relative flex h-full flex-col p-5">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-[15px] shadow-sm ring-1 ring-inset ring-black/[0.035] ${iconBg}`}
                      >
                        <Icon size={21} strokeWidth={2.2} />
                      </div>

                      <span className="text-[10px] font-black tracking-[0.18em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Topic */}
                    <div className="mt-4">

                      <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                        {String(index + 1).padStart(2, "0")}{" "}
                        <span className="mx-1 text-slate-300">•</span>{" "}
                        Practice Set
                      </p>

                      <h3 className="text-[18px] font-black leading-6 tracking-tight text-slate-950">
                        {name}
                      </h3>

                      <p className="mt-2 max-w-[92%] text-[11px] font-medium leading-5 text-slate-400">
                        {description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 transition-colors group-hover:text-slate-700">
                        <span className="flex h-4 w-4 items-center justify-center rounded-md border border-slate-200 text-[8px]">
                          □
                        </span>
                        Open practice
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md`}
                      >
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          )}

        </div>
      </div>
    </main>
  );
}