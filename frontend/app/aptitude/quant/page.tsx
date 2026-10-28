import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpen, Layers3, Sparkles, Target } from "lucide-react";
import { aptitudeQuestions } from "@/data/aptitude/numberSystem";

const topics = [
  { name: "Number System", difficulty: "Easy", icon: "01", accent: "from-blue-500 to-cyan-400", tint: "bg-blue-50 text-blue-700", glow: "bg-blue-100/70" },
  { name: "Percentage", difficulty: "Easy", icon: "%", accent: "from-indigo-500 to-violet-500", tint: "bg-indigo-50 text-indigo-700", glow: "bg-indigo-100/70" },
  { name: "Profit & Loss", difficulty: "Medium", icon: "₹", accent: "from-emerald-500 to-teal-400", tint: "bg-emerald-50 text-emerald-700", glow: "bg-emerald-100/70" },
  { name: "Simple & Compound Interest", difficulty: "Medium", icon: "SI", accent: "from-teal-500 to-cyan-400", tint: "bg-teal-50 text-teal-700", glow: "bg-teal-100/70" },
  { name: "Ratio & Proportion", difficulty: "Easy", icon: "∶", accent: "from-sky-500 to-blue-500", tint: "bg-sky-50 text-sky-700", glow: "bg-sky-100/70" },
  { name: "Average", questions: 110, difficulty: "Easy", icon: "x̄", accent: "from-cyan-500 to-blue-400", tint: "bg-cyan-50 text-cyan-700", glow: "bg-cyan-100/70" },
  { name: "Time & Work", questions: 145, difficulty: "Medium", icon: "T", accent: "from-violet-500 to-purple-500", tint: "bg-violet-50 text-violet-700", glow: "bg-violet-100/70" },
  { name: "Time, Speed & Distance", questions: 170, difficulty: "Medium", icon: "→", accent: "from-purple-500 to-fuchsia-500", tint: "bg-purple-50 text-purple-700", glow: "bg-purple-100/70" },
  { name: "Permutation & Combination", questions: 90, difficulty: "Hard", icon: "n!", accent: "from-orange-500 to-rose-500", tint: "bg-orange-50 text-orange-700", glow: "bg-orange-100/70" },
  { name: "Probability", questions: 100, difficulty: "Hard", icon: "P", accent: "from-rose-500 to-pink-500", tint: "bg-rose-50 text-rose-700", glow: "bg-rose-100/70" },
  { name: "Data Interpretation", questions: 200, difficulty: "Hard", icon: "▥", accent: "from-amber-500 to-orange-500", tint: "bg-amber-50 text-amber-700", glow: "bg-amber-100/70" },
  { name: "Algebra", questions: 140, difficulty: "Medium", icon: "x²", accent: "from-slate-600 to-slate-800", tint: "bg-slate-100 text-slate-700", glow: "bg-slate-200/70" },
];

const topicsWithCounts = topics.map((topic) => ({
  ...topic,
  questions: aptitudeQuestions[topic.name as keyof typeof aptitudeQuestions]?.length ?? 0,
}));

const availableTopics = topicsWithCounts.filter((topic) => topic.questions > 0);
const availableQuestionCount = availableTopics.reduce((sum, topic) => sum + topic.questions, 0);

const difficultyStyles = {
  Easy: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Hard: "border-rose-200 bg-rose-50 text-rose-700",
};

export default function QuantPage() {
  const totalQuestions = topicsWithCounts.reduce((sum, topic) => sum + topic.questions, 0);
  const difficultyTotals = {
    Easy: availableTopics.filter((topic) => topic.difficulty === "Easy").length,
    Medium: availableTopics.filter((topic) => topic.difficulty === "Medium").length,
    Hard: availableTopics.filter((topic) => topic.difficulty === "Hard").length,
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0edff_0%,#f7f9fc_38%,#eef3fb_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <section className="relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950 px-5 py-7 text-white shadow-[0_28px_70px_-35px_rgba(15,23,42,0.7)] sm:px-9 sm:py-9">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:30px_30px]" />
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300"><Sparkles size={13} /> Aptitude / Quant</p>
              <h1 className="mt-5 max-w-2xl text-3xl font-black tracking-[-0.045em] sm:text-5xl">Quantitative Aptitude</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">A focused practice library for building speed, accuracy, and placement-ready problem solving.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-300"><span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2">{availableTopics.length} live topics</span><span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2">{availableQuestionCount.toLocaleString()} questions</span><span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2">Self-paced</span></div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:min-w-[330px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-xl font-black text-emerald-300 sm:text-2xl">{difficultyTotals.Easy}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Easy topics</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-xl font-black text-amber-300 sm:text-2xl">{difficultyTotals.Medium}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Medium topics</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-xl font-black text-rose-300 sm:text-2xl">{difficultyTotals.Hard}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Hard topics</p></div>
            </div>
          </div>
        </section>

        <div className="mt-7 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600"><Target size={14} /> Practice library</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Choose your next challenge</h2></div><div className="flex items-center gap-2 text-xs font-semibold text-slate-500"><BarChart3 size={15} className="text-blue-600" /> Progress starts with one topic</div></div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {topicsWithCounts.map((topic, index) => {
            const isAvailable = topic.questions > 0;
            const card = (
              <article className={`relative h-full min-h-[205px] overflow-hidden rounded-[24px] border bg-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)] transition-all duration-300 ${isAvailable ? "border-slate-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_50px_-22px_rgba(15,23,42,0.3)]" : "border-dashed border-slate-200 opacity-75"}`}>
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${topic.accent}`} />
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${topic.glow}`} />

                <div className="relative flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-[15px] text-sm font-black ring-1 ring-inset ring-black/[0.04] shadow-sm ${topic.tint}`}>
                      {topic.icon}
                    </div>
                    <span className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${difficultyStyles[topic.difficulty as keyof typeof difficultyStyles]}`}>
                      {topic.difficulty}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400"><span>{String(index + 1).padStart(2, "0")}</span><span className="h-1 w-1 rounded-full bg-slate-300" /><span>{isAvailable ? "Practice set" : "Coming soon"}</span></div>
                    <h2 className="text-[18px] font-black leading-6 tracking-tight text-slate-950">{topic.name}</h2>
                    <p className="mt-1 text-[11px] font-medium text-slate-400">{isAvailable ? `${topic.questions} practice questions` : "Question bank in preparation"}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 transition-colors group-hover:text-slate-700">{isAvailable ? <><BookOpen size={13} /> Open practice</> : <><Layers3 size={13} /> Coming soon</>}</span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${topic.accent} text-xs font-black text-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-md`}>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            );
            return isAvailable ? <Link key={topic.name} href={`/aptitude/quant/${encodeURIComponent(topic.name)}`} className="group block">{card}</Link> : <div key={topic.name} className="group block">{card}</div>;
          })}
        </div>
      </div>
    </main>
  );
}
