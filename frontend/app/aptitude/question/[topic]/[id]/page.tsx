"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Bookmark, Check, Lightbulb, RotateCcw } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { aptitudeQuestions } from "@/data/aptitude/numberSystem";

const difficultyStyles = { Easy: "bg-emerald-50 text-emerald-700", Medium: "bg-amber-50 text-amber-700", Hard: "bg-rose-50 text-rose-700" };

export default function QuestionPage() {
  const params = useParams();
  const topic = decodeURIComponent(params.topic as string);
  const id = Number(params.id);
  const questions = aptitudeQuestions[topic as keyof typeof aptitudeQuestions] ?? [];
  const currentIndex = questions.findIndex((question) => question.id === id);
  const question = questions[currentIndex];
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (!question) return;
    const saved = JSON.parse(localStorage.getItem("aptitudeBookmarks") || "[]");
    setBookmarked(saved.some((item: { topic: string; id: number }) => item.topic === topic && item.id === question.id));
  }, [question, topic]);

  if (!question) return <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] text-xl font-black text-slate-900">Question not found</div>;

  const previousQuestion = questions[currentIndex - 1];
  const nextQuestion = questions[currentIndex + 1];
  const correct = selected === question.answer;

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("aptitudeBookmarks") || "[]");
    const exists = saved.some((item: { topic: string; id: number }) => item.topic === topic && item.id === question.id);
    const updated = exists ? saved.filter((item: { topic: string; id: number }) => !(item.topic === topic && item.id === question.id)) : [...saved, { topic, id: question.id }];
    localStorage.setItem("aptitudeBookmarks", JSON.stringify(updated));
    setBookmarked(!exists);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#e8f1ff_0,#f5f7fb_38%,#f5f7fb_100%)] px-4 py-7 text-slate-900 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <section className="overflow-hidden rounded-[30px] border border-white/80 bg-white/95 shadow-[0_25px_70px_-35px_rgba(30,64,175,0.35)] backdrop-blur">
          <div className="border-b border-slate-100 bg-slate-950 px-5 py-5 text-white sm:px-9"><div className="flex items-center justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">Focused practice</p><div className="mt-2 flex flex-wrap items-center gap-3"><h1 className="text-xl font-black sm:text-2xl">{topic}</h1><span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${difficultyStyles[question.difficulty]}`}>{question.difficulty}</span></div></div><button aria-label="Bookmark question" onClick={toggleBookmark} className={`rounded-xl p-3 transition ${bookmarked ? "bg-amber-400 text-white" : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`}><Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} /></button></div><div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-blue-400" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div><p className="mt-2 text-xs font-semibold text-slate-400">Practice question {currentIndex + 1} of {questions.length}</p></div>
          <div className="px-5 py-7 sm:px-9 sm:py-10"><div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-700">{String(question.id).padStart(2, "0")}</span><p className="text-xl font-black leading-8 text-slate-950 sm:text-2xl sm:leading-9">{question.question}</p></div><div className="mt-8 grid gap-3">{question.options.map((option, index) => <button key={option} disabled={submitted} onClick={() => setSelected(index)} className={`flex min-h-14 items-center gap-4 rounded-2xl border p-4 text-left text-sm font-bold transition ${selected === index ? submitted ? correct ? "border-emerald-400 bg-emerald-50 text-emerald-900" : "border-rose-300 bg-rose-50 text-rose-900" : "border-blue-500 bg-blue-50 text-blue-900 shadow-sm shadow-blue-500/10" : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"}`}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-500">{String.fromCharCode(65 + index)}</span>{option}{submitted && index === question.answer && <Check className="ml-auto text-emerald-600" size={18} />}</button>)}</div>{!submitted ? <button disabled={selected === null} onClick={() => setSubmitted(true)} className="mt-8 w-full rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400">Check answer</button> : <div className={`mt-8 rounded-2xl border p-5 ${correct ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}><div className="flex items-center justify-between gap-3"><p className={`font-black ${correct ? "text-emerald-800" : "text-rose-800"}`}>{correct ? "Correct answer" : "Keep practising"}</p><button onClick={() => { setSelected(null); setSubmitted(false); }} className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900"><RotateCcw size={13} /> Try again</button></div><div className="mt-4 flex gap-3 border-t border-black/5 pt-4"><Lightbulb className="mt-0.5 shrink-0 text-amber-500" size={18} /><p className="text-sm leading-6 text-slate-700"><span className="font-black text-slate-900">Explanation: </span>{question.explanation}</p></div></div>}
            <div className="mt-9 flex items-center justify-between gap-3 border-t border-slate-100 pt-6">{previousQuestion ? <Link href={`/aptitude/question/${encodeURIComponent(topic)}/${previousQuestion.id}`} className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-blue-600"><ArrowLeft size={16} /> Previous</Link> : <span />}{nextQuestion ? <Link href={`/aptitude/question/${encodeURIComponent(topic)}/${nextQuestion.id}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700">Next question <ArrowRight size={16} /></Link> : <Link href={`/aptitude/quant/${encodeURIComponent(topic)}`} className="text-sm font-bold text-emerald-700">Finish practice</Link>}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
