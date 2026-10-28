"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  Layers3,
  Lightbulb,
  List,
  Sparkles,
  Target,
  Trophy,
  Link2,
} from "lucide-react"

const topics = [
  {
    area: "TOPIC 01",
    code: "STACK FUNDAMENTALS",
    title: "Stack Fundamentals",
    description: "Understand stacks, nodes of operation, the LIFO principle, TOP pointer and memory representation.",
    icon: Layers3,
    tags: ["LIFO", "TOP", "Basics", "Memory"],
    questions: 20,
    href: "/core-subjects/dsa/stacks/fundamentals",
    color: "emerald",
  },
  {
    area: "TOPIC 02",
    code: "STACK OPERATIONS",
    title: "Stack Operations",
    description: "Learn push, pop, peek, display, overflow and underflow with algorithms and C++ examples.",
    icon: List,
    tags: ["Push", "Pop", "Peek", "Display"],
    questions: 25,
    href: "/core-subjects/dsa/stacks/operations",
    color: "blue",
  },
  {
    area: "TOPIC 03",
    code: "STACK APPLICATIONS",
    title: "Stack Applications",
    description: "Explore recursion, balanced parentheses, browser history, undo/redo, DFS and backtracking.",
    icon: Brain,
    tags: ["Recursion", "Undo", "DFS", "Parsing"],
    questions: 25,
    href: "/core-subjects/dsa/stacks/applications",
    color: "violet",
  },
  {
    area: "TOPIC 04",
    code: "EXPRESSION CONVERSION",
    title: "Infix, Prefix & Postfix",
    description: "Convert expressions using precedence, associativity, parentheses and stack-based algorithms.",
    icon: List,
    tags: ["Infix", "Prefix", "Postfix", "Rules"],
    questions: 30,
    href: "/core-subjects/dsa/stacks/expression-conversion",
    color: "orange",
  },
  {
    area: "TOPIC 05",
    code: "EXPRESSION EVALUATION",
    title: "Postfix & Prefix Evaluation",
    description: "Evaluate postfix and prefix expressions with dry runs, stack traces and C++ examples.",
    icon: Target,
    tags: ["Evaluate", "Dry Run", "Operands", "Operators"],
    questions: 25,
    href: "/core-subjects/dsa/stacks/evaluation",
    color: "pink",
  },
  {
    area: "TOPIC 06",
    code: "C++ IMPLEMENTATION",
    title: "Stack Implementation in C++",
    description: "Build array-based and linked-list-based stacks with safe operations and complexity analysis.",
    icon: Code2,
    tags: ["Array", "Linked List", "C++", "Complexity"],
    questions: 25,
    href: "/core-subjects/dsa/stacks/implementation",
    color: "cyan",
  },
  {
    area: "TOPIC 07",
    code: "PROBLEMS",
    title: "Stack Problem Solving",
    description: "Solve placement-oriented stack problems and strengthen your problem-solving approach.",
    icon: Trophy,
    tags: ["Placement", "Logic", "Problems", "Practice"],
    questions: 30,
    href: "/core-subjects/dsa/stacks/problems",
    color: "red",
  },
  {
    area: "TOPIC 08",
    code: "INTERVIEW",
    title: "Stack Interview Prep",
    description: "Prepare important stack concepts, algorithms, complexity questions and interview problems.",
    icon: Lightbulb,
    tags: ["Interview", "Algorithms", "Complexity", "Revision"],
    questions: 25,
    href: "/core-subjects/dsa/stacks/interview",
    color: "indigo",
  },
]

const accents: Record<string, { line: string; iconBg: string; icon: string; label: string; dot: string }> = {
  emerald: { line: "from-emerald-400 to-teal-500", iconBg: "bg-emerald-50", icon: "text-emerald-600", label: "text-emerald-700", dot: "bg-emerald-400" },
  blue: { line: "from-blue-500 to-cyan-500", iconBg: "bg-blue-50", icon: "text-blue-600", label: "text-blue-700", dot: "bg-blue-400" },
  violet: { line: "from-violet-500 to-purple-500", iconBg: "bg-violet-50", icon: "text-violet-600", label: "text-violet-700", dot: "bg-violet-400" },
  orange: { line: "from-orange-400 to-amber-500", iconBg: "bg-orange-50", icon: "text-orange-600", label: "text-orange-700", dot: "bg-orange-400" },
  pink: { line: "from-pink-500 to-rose-500", iconBg: "bg-pink-50", icon: "text-pink-600", label: "text-pink-700", dot: "bg-pink-400" },
  cyan: { line: "from-cyan-500 to-sky-500", iconBg: "bg-cyan-50", icon: "text-cyan-600", label: "text-cyan-700", dot: "bg-cyan-400" },
  red: { line: "from-red-500 to-orange-500", iconBg: "bg-red-50", icon: "text-red-600", label: "text-red-700", dot: "bg-emerald-400" },
  indigo: { line: "from-indigo-500 to-violet-500", iconBg: "bg-indigo-50", icon: "text-indigo-600", label: "text-indigo-700", dot: "bg-emerald-400" },
}

export default function StacksPage() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10 md:py-11">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-emerald-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300">
                  <Sparkles size={14} /> DATA STRUCTURES &amp; ALGORITHMS
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Master<span className="block text-slate-300">Stacks.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Build a strong foundation in stacks, LIFO operations, expression conversion and evaluation, implementation and placement-oriented problem solving.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["08 Topics", "200+ Questions", "Placement Ready"].map((tag) => (
                    <span key={tag} className={`rounded-full border px-4 py-2 text-xs font-semibold ${tag === "Placement Ready" ? "border-cyan-400/20 bg-cyan-500/10 text-cyan-300" : "border-white/10 bg-white/[0.05] text-slate-300"}`}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">TODAY&apos;S FOCUS</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300"><Link2 size={20} /></span>
                  <div><p className="text-xs font-bold text-white">Choose one topic</p><p className="mt-1 text-xs text-slate-400">Start with a focused set</p></div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-black/25 p-4"><p className="text-2xl font-bold">08</p><p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">Topics</p></div>
                  <div className="rounded-2xl bg-black/25 p-4"><p className="text-2xl font-bold">200+</p><p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">Questions</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600"><BookOpen size={14} /> STACK TOPICS</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">Where do you want to sharpen up?</h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400"><Trophy size={15} className="text-amber-500" /> Consistency compounds</div>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {topics.map((topic) => {
                const Icon = topic.icon
                const accent = accents[topic.color]
                return (
                  <Link key={topic.href} href={topic.href} className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_2px_3px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${accent.line}`} />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[19px] border border-slate-100 ${accent.iconBg} ${accent.icon} shadow-sm`}><Icon size={25} /></div>
                        <div className="pt-1">
                          <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400">{topic.area}</p>
                          <p className={`mt-1 text-xs font-bold tracking-[0.12em] ${accent.label}`}>{topic.code}</p>
                        </div>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 text-slate-400 transition group-hover:border-blue-200 group-hover:text-blue-600"><ArrowUpRight size={19} /></span>
                    </div>
                    <div className="mt-7">
                      <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">{topic.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">{topic.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600">{tag}</span>)}</div>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="flex items-center gap-2 text-xs font-bold text-emerald-600"><span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />{topic.questions} Practice Questions</span>
                      <span className="flex items-center gap-2 text-xs font-bold text-slate-600 transition group-hover:text-blue-700">Explore <ArrowUpRight size={15} /></span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
