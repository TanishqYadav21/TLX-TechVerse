"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  GitBranch,
  Layers3,
  Link2,
  List,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react"

const topics = [
  {
    area: "TOPIC 01",
    code: "LINKED LIST BASICS",
    title: "Linked List Fundamentals",
    description:
      "Understand linked lists, nodes, pointers, dynamic memory and how linked lists differ from arrays.",
    icon: Link2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Definition", "Nodes", "Pointers", "Memory"],
    questions: 20,
    href: "/core-subjects/dsa/linked-lists/fundamentals",
  },
  {
    area: "TOPIC 02",
    code: "SINGLY LINKED LIST",
    title: "Singly Linked List",
    description:
      "Learn node structure, head pointer, traversal and complete implementation of singly linked lists.",
    icon: List,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    gradient: "from-violet-600 to-purple-500",
    tags: ["Node", "Head", "Next", "Traversal"],
    questions: 25,
    href: "/core-subjects/dsa/linked-lists/singly",
  },
  {
    area: "TOPIC 03",
    code: "OPERATIONS",
    title: "Linked List Operations",
    description:
      "Master insertion, deletion, searching, updating and traversal operations on linked lists.",
    icon: Code2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Insertion", "Deletion", "Search", "Traversal"],
    questions: 30,
    href: "/core-subjects/dsa/linked-lists/operations",
  },
  {
    area: "TOPIC 04",
    code: "DOUBLY LINKED LIST",
    title: "Doubly Linked List",
    description:
      "Understand previous and next pointers, forward and backward traversal and doubly linked list operations.",
    icon: GitBranch,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-amber-500",
    tags: ["Prev", "Next", "Traversal", "Operations"],
    questions: 25,
    href: "/core-subjects/dsa/linked-lists/doubly",
  },
  {
    area: "TOPIC 05",
    code: "CIRCULAR",
    title: "Circular Linked List",
    description:
      "Learn circular linked list structure, traversal and insertion and deletion operations.",
    icon: Layers3,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    gradient: "from-pink-500 to-rose-500",
    tags: ["Circular", "Traversal", "Insertion", "Deletion"],
    questions: 25,
    href: "/core-subjects/dsa/linked-lists/circular",
  },
  {
    area: "TOPIC 06",
    code: "SEARCHING",
    title: "Searching & Traversal",
    description:
      "Practice traversing linked lists and efficiently searching for required elements.",
    icon: Search,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    gradient: "from-cyan-500 to-blue-500",
    tags: ["Traversal", "Search", "Linear", "Pointers"],
    questions: 20,
    href: "/core-subjects/dsa/linked-lists/searching",
  },
  {
    area: "TOPIC 07",
    code: "PROBLEMS",
    title: "Linked List Problem Solving",
    description:
      "Solve placement-oriented linked list problems and strengthen your problem-solving approach.",
    icon: Trophy,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    gradient: "from-red-500 to-orange-500",
    tags: ["Placement", "Logic", "Problems", "Practice"],
    questions: 30,
    href: "/core-subjects/dsa/linked-lists/problems",
  },
  {
    area: "TOPIC 08",
    code: "INTERVIEW",
    title: "Linked List Interview Prep",
    description:
      "Prepare important linked list concepts, algorithms, complexity questions and interview problems.",
    icon: Brain,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    gradient: "from-indigo-500 to-violet-500",
    tags: ["Interview", "Algorithms", "Complexity", "Revision"],
    questions: 25,
    href: "/core-subjects/dsa/linked-lists/interview",
  },
]

export default function LinkedListsPage() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10 md:py-11">

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-blue-300">
                  <Sparkles size={14} />
                  DATA STRUCTURES & ALGORITHMS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Linked Lists.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                  Build a strong foundation in linked lists, node structures,
                  operations and placement-oriented problem solving.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    08 Topics
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    200+ Questions
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                    Placement Ready
                  </span>

                </div>
              </div>

              {/* FOCUS */}
              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  TODAY&apos;S FOCUS
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                    <Link2 size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Choose one topic
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Start with a focused set
                    </p>
                  </div>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">

                  <div className="rounded-xl bg-black/20 px-4 py-3">
                    <p className="text-xl font-bold">08</p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      TOPICS
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/20 px-4 py-3">
                    <p className="text-xl font-bold">200+</p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      QUESTIONS
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-5 flex items-end justify-between border-b border-slate-200 pb-5">

              <div>

                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                  <BookOpen size={14} />
                  Linked List Topics
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Where do you want to sharpen up?
                </h2>

              </div>

              <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 md:flex">
                <Trophy size={15} className="text-amber-500" />
                Consistency compounds
              </div>

            </div>

            {/* CARDS */}
            <div className="grid gap-5 md:grid-cols-2">

              {topics.map((topic) => {
                const Icon = topic.icon

                return (
                  <Link
                    key={`${topic.code}-${topic.area}`}
                    href={topic.href}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b ${topic.gradient}`}
                    />

                    <div className="flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${topic.iconBg} ${topic.iconColor} shadow-sm ring-1 ring-black/[0.03]`}
                        >
                          <Icon size={25} />
                        </div>

                        <div>

                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            {topic.area}
                          </p>

                          <p
                            className={`mt-1 text-[11px] font-bold uppercase tracking-[0.15em] ${topic.iconColor}`}
                          >
                            {topic.code}
                          </p>

                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                        <ArrowUpRight size={18} />
                      </div>

                    </div>

                    <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900">
                      {topic.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {topic.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {topic.tags.map((tag) => (
                        <span
                          key={`${topic.code}-${tag}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {topic.questions} Practice Questions
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700 transition-all group-hover:text-blue-600">
                        Explore

                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>

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