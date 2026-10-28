"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { ReasoningQuestion } from "@/data/aptitude/reasoning/types";

import { puzzlesQuestions } from "@/data/aptitude/reasoning/puzzles";
import { codingDecodingQuestions } from "@/data/aptitude/reasoning/codingDecoding";
import { relationsQuestions } from "@/data/aptitude/reasoning/relations";
import { arrangementsQuestions } from "@/data/aptitude/reasoning/arrangements";
import { analogyQuestions } from "@/data/aptitude/reasoning/analogy";
import { numberLetterSeriesQuestions } from "@/data/aptitude/reasoning/numberLetterSeries";
import { classificationQuestions } from "@/data/aptitude/reasoning/classification";
import { directionSenseQuestions } from "@/data/aptitude/reasoning/directionSense";
import { syllogismQuestions } from "@/data/aptitude/reasoning/syllogism";
import { statementConclusionQuestions } from "@/data/aptitude/reasoning/statementConclusion";
import { dataSufficiencyQuestions } from "@/data/aptitude/reasoning/dataSufficiency";
import { nonVerbalReasoningQuestions } from "@/data/aptitude/reasoning/nonVerbalReasoning";



const difficultyStyles = {
  Easy: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Medium: "bg-amber-50 text-amber-700 ring-amber-200",
  Hard: "bg-rose-50 text-rose-700 ring-rose-200",
};

export default function TopicPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const topic =
    typeof params.topic === "string"
      ? decodeURIComponent(params.topic)
      : "Puzzles";
      const questionSets: Record<string, ReasoningQuestion[]> = {
  Puzzles: puzzlesQuestions,
  "Coding-Decoding": codingDecodingQuestions,
  Relations: relationsQuestions,
  Arrangements: arrangementsQuestions,
  Analogy: analogyQuestions,
  "Number & Letter Series": numberLetterSeriesQuestions,
  Classification: classificationQuestions,
  "Direction Sense": directionSenseQuestions,
  Syllogism: syllogismQuestions,
  "Statement & Conclusion": statementConclusionQuestions,
  "Data Sufficiency": dataSufficiencyQuestions,
  "Non-Verbal Reasoning": nonVerbalReasoningQuestions,
};

const questions = questionSets[topic] ?? [];

  const practiceMode = searchParams.get("practice") === "true";

  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<number[]>([]);

  useEffect(() => {
  const saved = localStorage.getItem(`reasoning-${topic}-bookmarks`);

  if (saved) {
    try {
      setBookmarkedQuestions(JSON.parse(saved));
    } catch {
      setBookmarkedQuestions([]);
    }
  }
}, [topic]);

  const toggleBookmark = (questionId: number) => {
    setBookmarkedQuestions((prev) => {
      const updated = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];

      localStorage.setItem(
  `reasoning-${topic}-bookmarks`,
  JSON.stringify(updated)
);

      return updated;
    });
  };

  const easyCount = questions.filter(
    (q) => q.difficulty === "Easy"
  ).length;

  const mediumCount = questions.filter(
    (q) => q.difficulty === "Medium"
  ).length;

  const hardCount = questions.filter(
    (q) => q.difficulty === "Hard"
  ).length;

  // =========================================================
  // PRACTICE / MOCK MODE
  // =========================================================

  if (practiceMode) {
    const question = questions[currentQuestion];

    return (
      <main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#f5f7fb_52%,#eef4ff_100%)] px-3 py-4 sm:px-6 sm:py-7">
        <div className="mx-auto max-w-3xl">

          {/* DARK PRACTICE HEADER */}
          <section className="relative overflow-hidden rounded-[26px] bg-[#030817] px-5 py-6 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.65)] sm:rounded-[30px] sm:px-9 sm:py-8">
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                    Focused Practice
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                      {topic}
                    </h1>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black ${
                        question.difficulty === "Easy"
                          ? "bg-emerald-100 text-emerald-700"
                          : question.difficulty === "Medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleBookmark(question.id)}
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                    bookmarkedQuestions.includes(question.id)
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
                  }`}
                  aria-label={
                    bookmarkedQuestions.includes(question.id)
                      ? "Remove bookmark"
                      : "Bookmark question"
                  }
                >
                  <Bookmark
                    size={19}
                    fill={
                      bookmarkedQuestions.includes(question.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>

              {/* PROGRESS */}
              <div className="mt-6">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / questions.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <p className="mt-3 text-xs font-semibold text-slate-400">
                  Practice question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>
          </section>

          {/* QUESTION BOX */}
          <section className="mt-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] sm:p-9">

            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-600">
                {String(question.id).padStart(2, "0")}
              </span>

              <h2 className="text-xl font-black leading-8 text-slate-950 sm:text-2xl">
                {question.question}
              </h2>
            </div>

            {/* OPTIONS */}
            <div className="mt-8 space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect =
                  showResult && index === question.answer;
                const isWrong =
                  showResult &&
                  isSelected &&
                  index !== question.answer;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={showResult}
                    onClick={() => setSelectedAnswer(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      isCorrect
                        ? "border-emerald-300 bg-emerald-50"
                        : isWrong
                        ? "border-rose-300 bg-rose-50"
                        : isSelected
                        ? "border-blue-400 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-700"
                          : isWrong
                          ? "bg-rose-100 text-rose-700"
                          : isSelected
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="text-sm font-bold text-slate-700">
                      {option}
                    </span>

                    {isCorrect && (
                      <Check
                        size={18}
                        className="ml-auto text-emerald-600"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CHECK ANSWER */}
            {!showResult && (
              <button
                type="button"
                disabled={selectedAnswer === null}
                onClick={() => setShowResult(true)}
                className={`mt-8 w-full rounded-2xl px-5 py-4 text-sm font-black transition ${
                  selectedAnswer === null
                    ? "cursor-not-allowed bg-slate-200 text-slate-400"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                }`}
              >
                Check answer
              </button>
            )}

            {/* RESULT */}
            {showResult && (
              <div className="mt-7 border-t border-slate-200 pt-6">

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                  Answer
                </p>

                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                  <Check
                    size={18}
                    className="text-emerald-600"
                  />

                  <span className="text-sm font-black text-emerald-800">
                    {String.fromCharCode(65 + question.answer)}.{" "}
                    {question.options[question.answer]}
                  </span>
                </div>

                <div className="mt-4 flex gap-3 rounded-2xl bg-slate-50 p-5">
                  <Lightbulb
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    <span className="font-black text-slate-900">
                      Explanation:{" "}
                    </span>
                    {question.explanation}
                  </p>
                </div>

                {/* NEXT */}
                <div className="mt-7 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={currentQuestion === 0}
                    onClick={() => {
                      setCurrentQuestion((prev) => prev - 1);
                      setSelectedAnswer(null);
                      setShowResult(false);
                    }}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition ${
                      currentQuestion === 0
                        ? "cursor-not-allowed bg-slate-100 text-slate-300"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Previous question
                  </button>

                  {currentQuestion < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentQuestion((prev) => prev + 1);
                        setSelectedAnswer(null);
                        setShowResult(false);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                    >
                      Next question
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <Link
                      href={`/aptitude/reasoning/${encodeURIComponent(topic)}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700"
                    >
                      Finish practice
                      <CheckCircle2 size={16} />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* NO TIMER */}
          <div className="mt-5 text-center text-xs font-semibold text-slate-400">
            No timer • Practice at your own pace
          </div>
        </div>
      </main>
    );
  }

  // =========================================================
  // QUESTION LIBRARY MODE
  // =========================================================

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#f5f7fb_52%,#eef4ff_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 px-5 py-6 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.65)] sm:rounded-[30px] sm:px-10 sm:py-9">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/15 px-3 py-1.5">
                  <Sparkles size={12} />
                  Reasoning practice
                </span>

                <span className="text-slate-500">
                  Self-paced learning
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                {topic}
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Master reasoning puzzles with carefully sequenced questions,
                instant answers, and clear explanations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:min-w-[330px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4">
                <p className="text-lg font-black text-emerald-300 sm:text-2xl">
                  {easyCount}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Easy
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4">
                <p className="text-lg font-black text-amber-300 sm:text-2xl">
                  {mediumCount}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Medium
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4">
                <p className="text-lg font-black text-rose-300 sm:text-2xl">
                  {hardCount}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Hard
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE HEADER */}
        <div className="mt-7 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
              <Target size={14} />
              Practice library
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Choose your next challenge
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Tap any question to reveal its answer and reasoning.
            </p>
          </div>

          {/* START PRACTICE */}
          <Link
            href={`/aptitude/reasoning/${encodeURIComponent(topic)}?practice=true`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start practice
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* QUESTION LIBRARY */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {questions.map((question) => {
            const isOpen = openQuestionId === question.id;

            return (
              <article
                key={question.id}
                className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_10px_25px_-22px_rgba(15,23,42,0.45)] transition-all ${
                  isOpen
                    ? "border-blue-300 shadow-[0_18px_35px_-20px_rgba(37,99,235,0.35)] sm:col-span-2"
                    : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                {/* DIFFICULTY LINE */}
                <div
                  className={`absolute inset-y-0 left-0 w-1 ${
                    question.difficulty === "Easy"
                      ? "bg-emerald-400"
                      : question.difficulty === "Medium"
                      ? "bg-amber-400"
                      : "bg-rose-400"
                  }`}
                />

                {/* QUESTION HEADER */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenQuestionId(
                      isOpen ? null : question.id
                    )
                  }
                  className="group w-full p-4 pl-5 text-left sm:p-5 sm:pl-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs ${
                          isOpen
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {String(question.id).padStart(2, "0")}
                      </span>

                      Question
                    </span>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black ring-1 ${
                        difficultyStyles[question.difficulty]
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <p className="text-sm font-bold leading-6 text-slate-800">
                      {question.question}
                    </p>

                    <ChevronDown
                      size={18}
                      className={`mt-1 shrink-0 text-slate-400 transition-transform ${
                        isOpen
                          ? "rotate-180 text-blue-600"
                          : "group-hover:text-blue-600"
                      }`}
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen size={14} />
                      4 options
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <CheckCircle2 size={14} />
                      Click to reveal
                    </span>
                  </div>
                </button>

                {/* REVEALED ANSWER */}
                {isOpen && (
                  <div className="border-t border-blue-100 bg-blue-50/40 px-5 pb-5 pt-4">

                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                      Answer
                    </p>

                    <div className="mt-3 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-800">
                      <Check size={17} />
                      {String.fromCharCode(65 + question.answer)}.{" "}
                      {question.options[question.answer]}
                    </div>

                    <div className="mt-4 flex gap-3 rounded-xl bg-white p-4">
                      <Lightbulb
                        size={18}
                        className="mt-0.5 shrink-0 text-amber-500"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        <span className="font-black text-slate-900">
                          Explanation:{" "}
                        </span>

                        {question.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-7 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          <Layers3 size={15} />
          {questions.length} unique questions in this set
        </div>
      </div>
    </main>
  );
}