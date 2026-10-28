"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Check, CheckCircle2, ChevronDown, Lightbulb, Layers3, Sparkles, Target } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { aptitudeQuestions } from "@/data/aptitude/numberSystem";

const difficultyStyles = {
  Easy: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Medium: "bg-amber-50 text-amber-700 ring-amber-200",
  Hard: "bg-rose-50 text-rose-700 ring-rose-200",
};

export default function TopicPage() {
  const params = useParams();
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const topic = decodeURIComponent(params.topic as string);
  const questions = aptitudeQuestions[topic as keyof typeof aptitudeQuestions] ?? [];
  const isPercentage = topic === "Percentage";
  const isProfitLoss = topic === "Profit & Loss";
  const easyCount = questions.filter((question) => question.difficulty === "Easy").length;
  const mediumCount = questions.filter((question) => question.difficulty === "Medium").length;
  const hardCount = questions.filter((question) => question.difficulty === "Hard").length;

  if (!questions.length) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-6">
        <div className="max-w-md text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Topic unavailable</p>
          <h1 className="mt-3 text-3xl font-black text-slate-950">We could not find that practice set.</h1>
          <Link href="/aptitude/quant" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white">Choose another topic</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#f5f7fb_52%,#eef4ff_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 px-5 py-6 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.65)] sm:rounded-[30px] sm:px-10 sm:py-9">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300"><span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/15 px-3 py-1.5"><Sparkles size={12} /> Quant practice</span><span className="text-slate-500">Self-paced learning</span></div>
              <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">{topic}</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">{isPercentage ? "Master percentage calculations with carefully sequenced questions, instant answers, and clear explanations." : isProfitLoss ? "Build confidence with profit, loss, discount, and marked-price questions explained step by step." : "Strengthen your number sense with carefully sequenced questions, instant answers, and clear explanations."}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:min-w-[330px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-lg font-black text-emerald-300 sm:text-2xl">{easyCount}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Easy</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-lg font-black text-amber-300 sm:text-2xl">{mediumCount}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Medium</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"><p className="text-lg font-black text-rose-300 sm:text-2xl">{hardCount}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Hard</p></div>
            </div>
          </div>
        </section>

        <div className="mt-7 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600"><Target size={14} /> Practice library</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Choose your next challenge</h2><p className="mt-1 text-sm text-slate-500">Tap any question to reveal its answer and reasoning.</p></div><Link href={`/aptitude/question/${encodeURIComponent(topic)}/1`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Start practice <ArrowRight size={16} /></Link></div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {questions.map((question) => {
            const isOpen = openQuestionId === question.id;
            return (
              <article key={question.id} className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_10px_25px_-22px_rgba(15,23,42,0.45)] transition-all ${isOpen ? "border-blue-300 shadow-[0_18px_35px_-20px_rgba(37,99,235,0.35)] sm:col-span-2" : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"}`}>
                <div className={`absolute inset-y-0 left-0 w-1 ${question.difficulty === "Easy" ? "bg-emerald-400" : question.difficulty === "Medium" ? "bg-amber-400" : "bg-rose-400"}`} />
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestionId(isOpen ? null : question.id)} className="group w-full p-4 pl-5 text-left sm:p-5 sm:pl-6">
                  <div className="flex items-start justify-between gap-3"><span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400"><span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs text-slate-700 ${isOpen ? "bg-blue-100 text-blue-700" : "bg-slate-100"}`}>{String(question.id).padStart(2, "0")}</span> Question</span><span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black ring-1 ${difficultyStyles[question.difficulty]}`}>{question.difficulty}</span></div>
                  <div className="mt-4 flex items-start justify-between gap-4"><p className="text-sm font-bold leading-6 text-slate-800">{question.question}</p><ChevronDown size={18} className={`mt-1 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-blue-600" : "group-hover:text-blue-600"}`} /></div>
                  <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-400"><span className="inline-flex items-center gap-1"><BookOpen size={14} /> 4 options</span><span className="inline-flex items-center gap-1"><CheckCircle2 size={14} /> Click to reveal</span></div>
                </button>
                {isOpen && <div className="border-t border-blue-100 bg-blue-50/40 px-5 pb-5 pt-4"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">Answer</p><div className="mt-3 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-800"><Check size={17} /> {question.options[question.answer]}</div><div className="mt-4 flex gap-3 rounded-xl bg-white p-4"><Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-500" /><p className="text-sm leading-6 text-slate-600"><span className="font-black text-slate-900">Explanation: </span>{question.explanation}</p></div></div>}
              </article>
            );
          })}
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400"><Layers3 size={15} /> {questions.length} unique questions in this set</div>
      </div>
    </main>
  );
}
