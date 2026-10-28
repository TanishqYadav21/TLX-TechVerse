import Link from "next/link";

const topics = [
  {
    name: "Spotting Errors",
    questions: 60,
    difficulty: "Easy",
    icon: "01",
    iconClass: "bg-emerald-50 text-emerald-600",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    name: "Fill in the Blanks",
    questions: 60,
    difficulty: "Easy",
    icon: "A_",
    iconClass: "bg-blue-50 text-blue-600",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "Synonyms",
    questions: 60,
    difficulty: "Easy",
    icon: "S",
    iconClass: "bg-indigo-50 text-indigo-600",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    name: "Antonyms",
    questions: 60,
    difficulty: "Medium",
    icon: "↔",
    iconClass: "bg-teal-50 text-teal-600",
    accent: "from-teal-400 to-cyan-400",
  },
  {
    name: "One Word Substitution",
    questions: 60,
    difficulty: "Easy",
    icon: "1W",
    iconClass: "bg-blue-50 text-blue-600",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "Idioms & Phrases",
    questions: 60,
    difficulty: "Medium",
    icon: "❝",
    iconClass: "bg-purple-50 text-purple-600",
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    name: "Sentence Improvement",
    questions: 60,
    difficulty: "Medium",
    icon: "SI",
    iconClass: "bg-violet-50 text-violet-600",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    name: "Para Jumbles",
    questions: 60,
    difficulty: "Hard",
    icon: "PJ",
    iconClass: "bg-orange-50 text-orange-600",
    accent: "from-orange-400 to-rose-500",
  },
  {
    name: "Cloze Test",
    questions: 60,
    difficulty: "Medium",
    icon: "CT",
    iconClass: "bg-cyan-50 text-cyan-600",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    name: "Reading Comprehension",
    questions: 60,
    difficulty: "Hard",
    icon: "RC",
    iconClass: "bg-purple-50 text-purple-600",
    accent: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Active & Passive Voice",
    questions: 60,
    difficulty: "Hard",
    icon: "AP",
    iconClass: "bg-rose-50 text-rose-600",
    accent: "from-rose-500 to-orange-500",
  },
  {
    name: "Direct & Indirect Speech",
    questions: 60,
    difficulty: "Medium",
    icon: "D/I",
    iconClass: "bg-emerald-50 text-emerald-600",
    accent: "from-emerald-500 to-blue-500",
  },
];

const difficultyClass = {
  Easy: "border-emerald-200 bg-emerald-50 text-emerald-600",
  Medium: "border-amber-200 bg-amber-50 text-amber-600",
  Hard: "border-rose-200 bg-rose-50 text-rose-600",
};

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-900">
      {/* SAME OUTER WIDTH AS QUANT */}
      <div className="mx-auto w-full max-w-[1328px] px-0 py-5">

        {/* =====================================================
            HERO — QUANT STYLE
        ====================================================== */}

        <section className="relative h-[287px] overflow-hidden rounded-[32px] bg-[#050b22] px-[36px] shadow-[0_30px_65px_-25px_rgba(15,23,42,0.45)]">

          {/* GRID */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* HERO CONTENT */}
          <div className="relative z-10 flex h-full items-center justify-between">

            {/* LEFT */}
            <div className="w-[58%]">

              {/* BREADCRUMB */}
              <Link
                href="/aptitude"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-2 text-[11px] font-bold tracking-[0.15em] text-blue-300"
              >
                <span className="text-sm">✣</span>
                APTITUDE / ENGLISH
              </Link>

              {/* TITLE */}
              <h1 className="mt-5 font-serif text-[46px] font-bold leading-[1.05] tracking-[-0.035em] text-white">
                English Aptitude
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-[610px] font-serif text-[15px] leading-6 text-slate-300">
                A focused practice library for grammar, vocabulary,
                comprehension, and placement-ready verbal skills.
              </p>

              {/* PILLS */}
              <div className="mt-6 flex items-center gap-2">

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold text-slate-300">
                  12 live topics
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold text-slate-300">
                  720 questions
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold text-slate-300">
                  Self-paced
                </span>

              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="flex w-[395px] gap-3">

              {/* EASY */}
              <div className="h-[85px] w-[125px] rounded-[18px] border border-white/10 bg-white/[0.045] px-4 py-4">

                <div className="font-serif text-[23px] font-bold leading-none text-emerald-400">
                  4
                </div>

                <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Easy Topics
                </div>

              </div>

              {/* MEDIUM */}
              <div className="h-[85px] w-[125px] rounded-[18px] border border-white/10 bg-white/[0.045] px-4 py-4">

                <div className="font-serif text-[23px] font-bold leading-none text-yellow-400">
                  5
                </div>

                <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Medium Topics
                </div>

              </div>

              {/* HARD */}
              <div className="h-[85px] w-[125px] rounded-[18px] border border-white/10 bg-white/[0.045] px-4 py-4">

                <div className="font-serif text-[23px] font-bold leading-none text-rose-400">
                  3
                </div>

                <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Hard Topics
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            PRACTICE LIBRARY
        ====================================================== */}

        <section className="mt-7">

          <div className="flex items-end justify-between">

            <div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                <span className="text-sm">◎</span>
                Practice Library
              </div>

              <h2 className="mt-2 font-serif text-[30px] font-bold tracking-[-0.025em] text-slate-950">
                Choose your next challenge
              </h2>

            </div>

            <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold text-slate-400">
              <span className="text-blue-600">▥</span>
              Progress starts with one topic
            </div>

          </div>

        </section>

        {/* =====================================================
            CARDS
        ====================================================== */}

        <section className="mt-6 grid grid-cols-3 gap-[18px]">

          {topics.map((topic, index) => (

            <Link
              key={topic.name}
              href={`/aptitude/english/${encodeURIComponent(topic.name)}`}
              className="group block"
            >

              <article className="relative h-[232px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_25px_-18px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_-18px_rgba(15,23,42,0.3)]">

                {/* TOP COLOR */}
                <div
                  className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${topic.accent}`}
                />

                <div className="flex h-full flex-col p-6">

                  {/* TOP ROW */}
                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[11px] font-bold shadow-sm ring-1 ring-black/[0.03] ${topic.iconClass}`}
                    >
                      {topic.icon}
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${
                        difficultyClass[
                          topic.difficulty as keyof typeof difficultyClass
                        ]
                      }`}
                    >
                      {topic.difficulty}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">

                    <p className="font-serif text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, "0")} • PRACTICE SET
                    </p>

                    <h3 className="mt-2 font-serif text-[18px] font-bold leading-6 text-slate-900">
                      {topic.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-400">
                      {topic.questions} practice questions
                    </p>

                  </div>

                  {/* FOOTER */}
                  <div className="mt-auto">

                    <div className="h-px bg-slate-100" />

                    <div className="mt-4 flex items-center justify-between">

                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                        <span className="text-[11px]">
                          ▣
                        </span>
                        Open practice
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${topic.accent} text-sm font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-105`}
                      >
                        ↗
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </section>

      </div>
    </main>
  );
}