import Link from "next/link";
import { ArrowUpRight, BookOpen, Brain, BrainCircuit, Calculator, Flame, Gauge, Languages, Sparkles, Timer, Trophy } from "lucide-react";

const cards = [
  { title: "Quantitative Aptitude", label: "QUANT", description: "Master calculations and core mathematical concepts asked in placement assessments.", topics: ["Percentage", "Profit & Loss", "Ratio", "Algebra"], count: "Practice", href: "/aptitude/quant", icon: Calculator, iconClass: "bg-blue-50 text-blue-700 ring-blue-100", accent: "from-blue-600 via-indigo-600 to-violet-600", glow: "bg-blue-500/10" },
  { title: "Logical Reasoning", label: "REASONING", description: "Build sharper analytical thinking with patterns, puzzles and logical problems.", topics: ["Puzzles", "Coding-Decoding", "Relations", "Arrangements"], count: "Practice", href: "/aptitude/reasoning", icon: Brain, iconClass: "bg-violet-50 text-violet-700 ring-violet-100", accent: "from-violet-600 via-purple-600 to-fuchsia-600", glow: "bg-violet-500/10" },
  { title: "English & Verbal", label: "VERBAL", description: "Strengthen grammar, vocabulary and comprehension for placement assessments.", topics: ["Grammar", "Vocabulary", "Comprehension", "Verbal Ability"], count: "Practice", href: "/aptitude/english", icon: Languages, iconClass: "bg-emerald-50 text-emerald-700 ring-emerald-100", accent: "from-emerald-600 via-teal-600 to-cyan-600", glow: "bg-emerald-500/10" },
  { title: "Mock Tests", label: "TEST CENTER", description: "Practice mixed questions under realistic time pressure and review your performance.", topics: ["Timed Tests", "Mixed Questions", "Placement Pattern", "Analysis"], count: "Practice", href: "/aptitude/mock-test", icon: Timer, iconClass: "bg-orange-50 text-orange-700 ring-orange-100", accent: "from-orange-500 via-rose-500 to-pink-600", glow: "bg-orange-500/10" },
];

export default function AptitudePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f7f9fc_0%,#edf3fb_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <section className="relative overflow-hidden rounded-[30px] bg-slate-950 px-5 py-7 text-white shadow-[0_28px_65px_-32px_rgba(15,23,42,0.7)] sm:px-9 sm:py-9">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-indigo-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300"><Sparkles size={13} /> Placement prep studio</p>
              <h1 className="mt-5 max-w-xl text-3xl font-black tracking-[-0.045em] sm:text-5xl">Train your edge.</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Build the accuracy, speed, and reasoning habits that show up when placement tests get serious.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-300"><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2"><Flame size={14} className="text-orange-300" /> Daily practice</span><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2"><Gauge size={14} className="text-cyan-300" /> Build speed</span></div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-300">Today&apos;s focus</p><div className="mt-4 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-200"><BrainCircuit size={21} /></div><div><p className="font-black text-white">Choose one area</p><p className="mt-1 text-xs text-slate-400">Start with a focused set</p></div></div><div className="mt-5 grid grid-cols-2 gap-2"><div className="rounded-xl bg-black/20 p-3"><p className="text-lg font-black">04</p><p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Practice areas</p></div><div className="rounded-xl bg-black/20 p-3"><p className="text-lg font-black">∞</p><p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Ways to improve</p></div></div></div>
          </div>
        </section>

        <div className="mt-8 flex items-end justify-between gap-4 border-b border-slate-200 pb-5"><div><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600"><BookOpen size={14} /> Practice areas</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Where do you want to sharpen up?</h2></div><div className="hidden items-center gap-2 text-xs font-bold text-slate-400 sm:flex"><Trophy size={15} className="text-amber-500" /> Consistency compounds</div></div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <Link key={card.title} href={card.href} className="group block">
              {(() => { const CardIcon = card.icon; return (
              <article className="relative h-full min-h-[245px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_25px_45px_-22px_rgba(15,23,42,0.35)]">
                <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${card.accent}`} /><div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${card.glow}`} />
                <div className="relative flex h-full flex-col p-5 pl-6 sm:p-6 sm:pl-7">
                  <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${card.iconClass} shadow-sm`}><CardIcon size={25} strokeWidth={1.8} /></div><div><p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Area {String(index + 1).padStart(2, "0")}</p><p className="mt-1 text-[10px] font-bold text-slate-500">{card.label}</p></div></div><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white"><ArrowUpRight size={16} /></span></div>
                  <div className="mt-6"><h2 className="text-[21px] font-black tracking-[-0.02em] text-slate-950">{card.title}</h2><p className="mt-2 max-w-[560px] text-xs leading-5 text-slate-500 sm:text-[13px]">{card.description}</p></div>
                  <div className="mt-5 flex flex-wrap gap-2">{card.topics.map((topic) => <span key={topic} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[9px] font-bold text-slate-600 transition group-hover:border-slate-300 group-hover:bg-white">{topic}</span>)}</div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4"><span className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {card.count}</span><span className="inline-flex items-center gap-1.5 text-[11px] font-black text-slate-900">Explore <ArrowUpRight size={14} /></span></div>
                </div>
              </article>
              ); })()}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
