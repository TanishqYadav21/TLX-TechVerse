"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"

import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  Database,
  Network,
  Cpu,
  Layers,
  Server,
  Terminal,
  Trophy,
  Sparkles,
} from "lucide-react"

const subjects = [
  {
    area: "AREA 01",
    code: "DSA",
    title: "Data Structures & Algorithms",
    description:
      "Master the fundamentals of data structures and algorithms required for technical interviews and coding rounds.",
    icon: Code2,
    gradient: "from-blue-600 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    tags: ["Arrays", "Linked Lists", "Stacks", "Trees"],
    topics: 12,
    href: "/core-subjects/dsa",
  },
  {
    area: "AREA 02",
    code: "DBMS",
    title: "Database Management System",
    description:
      "Learn SQL, database design, normalization, transactions, indexing and important DBMS interview concepts.",
    icon: Database,
    gradient: "from-violet-600 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    tags: ["SQL", "Normalization", "Transactions", "ER Model"],
    topics: 10,
    href: "/core-subjects/dbms",
  },
  {
    area: "AREA 03",
    code: "OS",
    title: "Operating System",
    description:
      "Understand processes, threads, scheduling, memory management, deadlocks and file system concepts.",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    tags: ["Processes", "Threads", "Scheduling", "Deadlocks"],
    topics: 10,
    href: "/core-subjects/os",
  },
  {
    area: "AREA 04",
    code: "CN",
    title: "Computer Networks",
    description:
      "Build strong networking fundamentals including OSI, TCP/IP, routing, switching and network protocols.",
    icon: Network,
    gradient: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    tags: ["OSI Model", "TCP/IP", "Routing", "Protocols"],
    topics: 10,
    href: "/core-subjects/computer-networks",
  },
  {
    area: "AREA 05",
    code: "OOP",
    title: "Object Oriented Programming",
    description:
      "Master classes, objects, inheritance, polymorphism, abstraction and encapsulation for interviews.",
    icon: Layers,
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    tags: ["Classes", "Inheritance", "Polymorphism", "Abstraction"],
    topics: 9,
    href: "/core-subjects/oop",
  },
  {
    area: "AREA 06",
    code: "COA",
    title: "Computer Organization",
    description:
      "Study CPU architecture, memory, registers, instruction cycle, cache and computer organization.",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    tags: ["CPU", "Memory", "Registers", "Cache"],
    topics: 9,
    href: "/core-subjects/coa",
  },
  {
    area: "AREA 07",
    code: "SE",
    title: "Software Engineering",
    description:
      "Learn SDLC, software models, Agile, testing, requirements engineering and software design.",
    icon: Brain,
    gradient: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    tags: ["SDLC", "Agile", "Testing", "Design"],
    topics: 8,
    href: "/core-subjects/software-engineering",
  },
 {
  area: "AREA 08",
  code: "CF",
  title: "Computer Fundamentals",
  description:
    "Build strong fundamentals of computers including hardware, software, memory, operating systems and basic IT concepts.",
  icon: Cpu,
  gradient: "from-red-500 to-orange-500",
  iconBg: "bg-red-50",
  iconColor: "text-red-600",
  tags: ["Hardware", "Software", "Memory", "IT Basics"],
  topics: 10,
  href: "/core-subjects/computer-fundamentals",
},
]

export default function CoreSubjectsPage() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10 md:py-11">
            {/* Grid Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative">

              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-blue-300">
                    <Sparkles size={14} />
                    CORE SUBJECTS
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Build your
                    <span className="block text-slate-300">
                      Technical Foundation.
                    </span>
                  </h1>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                    Master the core technical subjects that matter in
                    placements, coding interviews and technical rounds.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                      08 Subjects
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                      78+ Topics
                    </span>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                      Placement Ready
                    </span>
                  </div>
                </div>

                {/* Today's Focus */}
                <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    TODAY'S FOCUS
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                      <BookOpen size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Choose one subject
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
                        SUBJECTS
                      </p>
                    </div>

                    <div className="rounded-xl bg-black/20 px-4 py-3">
                      <p className="text-xl font-bold">78+</p>
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        TOPICS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREA */}
        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                  <BookOpen size={14} />
                  Practice Areas
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

            {/* Cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {subjects.map((subject) => {
                const Icon = subject.icon

                return (
                  <Link
                    key={`${subject.code}-${subject.area}`}
                    href={subject.href}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Left Accent */}
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b ${subject.gradient}`}
                    />

                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${subject.iconBg} ${subject.iconColor} shadow-sm ring-1 ring-black/[0.03]`}
                        >
                          <Icon size={25} />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            {subject.area}
                          </p>

                          <p
                            className={`mt-1 text-[11px] font-bold uppercase tracking-[0.15em] ${subject.iconColor}`}
                          >
                            {subject.code}
                          </p>
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900">
                      {subject.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {subject.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {subject.tags.map((tag) => (
                        <span
                          key={`${subject.code}-${tag}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Practice
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