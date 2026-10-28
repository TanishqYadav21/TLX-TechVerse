"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import type { EnglishQuestion } from "@/data/aptitude/english/types";

import { spottingErrorsQuestions } from "@/data/aptitude/english/spottingErrors";
import { fillInTheBlanksQuestions } from "@/data/aptitude/english/fillInTheBlanks";
import { synonymsQuestions } from "@/data/aptitude/english/synonyms";
import { antonymsQuestions } from "@/data/aptitude/english/antonyms";
import { oneWordSubstitutionQuestions } from "@/data/aptitude/english/oneWordSubstitution";
import { idiomsPhrasesQuestions } from "@/data/aptitude/english/idiomsPhrases";
import { sentenceImprovementQuestions } from "@/data/aptitude/english/sentenceImprovement";
import { paraJumblesQuestions } from "@/data/aptitude/english/paraJumbles";
import { clozeTestQuestions } from "@/data/aptitude/english/clozeTest";
import { readingComprehensionQuestions } from "@/data/aptitude/english/readingComprehension";
import { activePassiveVoiceQuestions } from "@/data/aptitude/english/activePassiveVoice";
import { directIndirectSpeechQuestions } from "@/data/aptitude/english/directIndirectSpeech";

const questionSets: Record<string, EnglishQuestion[]> = {
  "Spotting Errors": spottingErrorsQuestions,
  "Fill in the Blanks": fillInTheBlanksQuestions,
  Synonyms: synonymsQuestions,
  Antonyms: antonymsQuestions,
  "One Word Substitution": oneWordSubstitutionQuestions,
  "Idioms & Phrases": idiomsPhrasesQuestions,
  "Sentence Improvement": sentenceImprovementQuestions,
  "Para Jumbles": paraJumblesQuestions,
  "Cloze Test": clozeTestQuestions,
  "Reading Comprehension": readingComprehensionQuestions,
  "Active & Passive Voice": activePassiveVoiceQuestions,
  "Direct & Indirect Speech": directIndirectSpeechQuestions,
};

const difficultyStyles = {
  Easy: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Medium: "bg-amber-50 text-amber-700 ring-amber-200",
  Hard: "bg-rose-50 text-rose-700 ring-rose-200",
};

const letters = ["A", "B", "C", "D"];

export default function EnglishTopicPage() {
  const params = useParams();
  const router = useRouter();

  const topic =
    typeof params.topic === "string"
      ? decodeURIComponent(params.topic)
      : "Spotting Errors";

  const questions = questionSets[topic] ?? [];

  /* =========================================================
     LIBRARY STATE
  ========================================================= */

  const [openQuestionId, setOpenQuestionId] =
    useState<number | null>(null);

  const [bookmarkedQuestions, setBookmarkedQuestions] =
    useState<number[]>([]);

  const [practiceMode, setPracticeMode] =
    useState(false);

  const [practiceQuestion, setPracticeQuestion] =
    useState(0);

  const [selectedOption, setSelectedOption] =
    useState<number | null>(null);

  const [answerChecked, setAnswerChecked] =
    useState(false);

  const firstQuestionRef =
    useRef<HTMLDivElement | null>(null);

  /* =========================================================
     LOAD BOOKMARKS + PRACTICE MODE
  ========================================================= */

  useEffect(() => {
    const saved = localStorage.getItem(
      `english-${topic}-bookmarks`
    );

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        setBookmarkedQuestions(
          Array.isArray(parsed) ? parsed : []
        );
      } catch {
        setBookmarkedQuestions([]);
      }
    } else {
      setBookmarkedQuestions([]);
    }

    const params = new URLSearchParams(
      window.location.search
    );

    const isPractice =
      params.get("practice") === "true";

    setPracticeMode(isPractice);

    if (isPractice) {
      setPracticeQuestion(0);
      setSelectedOption(null);
      setAnswerChecked(false);
    }
  }, [topic]);

  /* =========================================================
     BOOKMARK
  ========================================================= */

  const toggleBookmark = (id: number) => {
    setBookmarkedQuestions((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      localStorage.setItem(
        `english-${topic}-bookmarks`,
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  /* =========================================================
     START PRACTICE
  ========================================================= */

  const startPractice = () => {
    if (!questions.length) return;

    setPracticeQuestion(0);
    setSelectedOption(null);
    setAnswerChecked(false);
    setOpenQuestionId(null);
    setPracticeMode(true);

    router.push(
      `/aptitude/english/${encodeURIComponent(
        topic
      )}?practice=true`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     EXIT PRACTICE
  ========================================================= */

  const exitPractice = () => {
    setPracticeMode(false);
    setPracticeQuestion(0);
    setSelectedOption(null);
    setAnswerChecked(false);

    router.push(
      `/aptitude/english/${encodeURIComponent(topic)}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     PRACTICE NAVIGATION
  ========================================================= */

  const goToNextQuestion = () => {
    if (practiceQuestion >= questions.length - 1) {
      return;
    }

    setPracticeQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setAnswerChecked(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPreviousQuestion = () => {
    if (practiceQuestion <= 0) {
      return;
    }

    setPracticeQuestion((prev) => prev - 1);
    setSelectedOption(null);
    setAnswerChecked(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;

    setAnswerChecked(true);
  };

  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (!questions.length) {
    return (
      <main className="min-h-screen bg-[#f5f7fb] px-4 py-6">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/aptitude/english"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-blue-600"
          >
            ← Back to English
          </Link>

          <div className="mt-5 rounded-[28px] bg-white p-8 shadow-sm">

            <h1 className="text-2xl font-black">
              Topic not found
            </h1>

          </div>

        </div>
      </main>
    );
  }

  /* =========================================================
     PRACTICE MODE
  ========================================================= */

  if (practiceMode) {
    const question =
      questions[practiceQuestion];

    const progress =
      ((practiceQuestion + 1) /
        questions.length) *
      100;

    const isCorrect =
      selectedOption === question.answer;

    const bookmarked =
      bookmarkedQuestions.includes(
        question.id
      );

    return (
      <main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#f5f7fb_55%,#eef4ff_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">

        <div className="mx-auto max-w-5xl">

          {/* =================================================
              PRACTICE HEADER
          ================================================= */}

          <section className="relative overflow-hidden rounded-[28px] bg-[#050b22] px-7 py-7 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.55)] sm:px-9 sm:py-8">

            {/* GRID */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative">

              {/* TOP */}

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                    Focused Practice
                  </p>

                  <div className="mt-4 flex items-center gap-3">

                    <h1 className="font-serif text-[28px] font-bold tracking-[-0.03em] text-white sm:text-[31px]">
                      {topic}
                    </h1>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold ring-1 ${
                        difficultyStyles[
                          question.difficulty
                        ]
                      }`}
                    >
                      {question.difficulty}
                    </span>

                  </div>

                </div>

                {/* BOOKMARK */}

                <button
                  type="button"
                  onClick={() =>
                    toggleBookmark(question.id)
                  }
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${
                    bookmarked
                      ? "bg-blue-600 text-white"
                      : "bg-white/[0.08] text-slate-300 hover:bg-white/[0.12] hover:text-white"
                  }`}
                  aria-label="Bookmark question"
                >

                  <Bookmark
                    size={19}
                    fill={
                      bookmarked
                        ? "currentColor"
                        : "none"
                    }
                  />

                </button>

              </div>


              {/* PROGRESS */}

              <div className="mt-7">

                <div className="h-[5px] overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

                <p className="mt-3 font-serif text-[11px] font-semibold text-slate-400">
                  Practice question{" "}
                  {practiceQuestion + 1} of{" "}
                  {questions.length}
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              QUESTION CARD
          ================================================= */}

          <section className="mt-4 rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_35px_-18px_rgba(15,23,42,0.25)]">

            <div className="p-6 sm:p-9">

              {/* QUESTION */}

              <div className="flex items-start gap-4">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[11px] font-black text-blue-600">

                  {String(
                    practiceQuestion + 1
                  ).padStart(2, "0")}

                </span>

                <h2 className="font-serif text-[18px] font-bold leading-[1.65] text-slate-900 sm:text-[21px]">

                  {question.question}

                </h2>

              </div>


              {/* OPTIONS */}

              <div className="mt-8 space-y-3">

                {question.options.map(
                  (option, optionIndex) => {

                    const selected =
                      selectedOption ===
                      optionIndex;

                    const correct =
                      question.answer ===
                      optionIndex;

                    let optionClass =
                      "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30";

                    if (
                      !answerChecked &&
                      selected
                    ) {
                      optionClass =
                        "border-blue-400 bg-blue-50 ring-2 ring-blue-100";
                    }

                    if (
                      answerChecked &&
                      correct
                    ) {
                      optionClass =
                        "border-emerald-300 bg-emerald-50";
                    }

                    if (
                      answerChecked &&
                      selected &&
                      !correct
                    ) {
                      optionClass =
                        "border-rose-300 bg-rose-50";
                    }

                    return (
                      <button
                        key={`${question.id}-${optionIndex}`}
                        type="button"
                        disabled={answerChecked}
                        onClick={() =>
                          setSelectedOption(
                            optionIndex
                          )
                        }
                        className={`flex min-h-[70px] w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${optionClass}`}
                      >

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-black ${
                            answerChecked &&
                            correct
                              ? "bg-emerald-500 text-white"
                              : answerChecked &&
                                  selected &&
                                  !correct
                              ? "bg-rose-500 text-white"
                              : selected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {letters[
                            optionIndex
                          ]}
                        </span>

                        <span className="font-serif text-[14px] font-bold text-slate-800">
                          {option}
                        </span>

                        {answerChecked &&
                          correct && (
                            <CheckCircle2
                              size={18}
                              className="ml-auto shrink-0 text-emerald-500"
                            />
                          )}

                      </button>
                    );
                  }
                )}

              </div>


              {/* CHECK ANSWER */}

              {!answerChecked ? (

                <button
                  type="button"
                  onClick={checkAnswer}
                  disabled={
                    selectedOption === null
                  }
                  className="mt-8 flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-slate-200 font-serif text-sm font-bold text-slate-400 transition disabled:cursor-not-allowed enabled:bg-blue-600 enabled:text-white enabled:hover:bg-blue-700"
                >
                  Check answer
                </button>

              ) : (

                /* RESULT */

                <div
                  className={`mt-8 rounded-2xl border p-5 ${
                    isCorrect
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-rose-200 bg-rose-50"
                  }`}
                >

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={18}
                      className={
                        isCorrect
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }
                    />

                    <p
                      className={`font-serif text-sm font-bold ${
                        isCorrect
                          ? "text-emerald-700"
                          : "text-rose-700"
                      }`}
                    >
                      {isCorrect
                        ? "Correct Answer"
                        : "Incorrect Answer"}
                    </p>

                  </div>

                  <p className="mt-3 font-serif text-sm font-bold text-slate-800">

                    Correct answer:{" "}

                    {letters[
                      question.answer
                    ]}
                    .{" "}
                    {question.options[
                      question.answer
                    ]}

                  </p>

                  <div className="mt-4 border-t border-black/5 pt-4">

                    <div className="flex items-start gap-3">

                      <Lightbulb
                        size={17}
                        className="mt-0.5 shrink-0 text-amber-500"
                      />

                      <div>

                        <p className="font-serif text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                          Explanation
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {question.explanation}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              )}


              {/* NAVIGATION */}

              <div className="mt-6 flex items-center justify-between gap-3">

                <button
                  type="button"
                  onClick={
                    goToPreviousQuestion
                  }
                  disabled={
                    practiceQuestion === 0
                  }
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-slate-100 px-5 font-serif text-xs font-bold text-slate-600 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                >

                  <ArrowLeft size={15} />

                  Previous

                </button>


                <span className="hidden font-serif text-[10px] font-bold text-slate-400 sm:block">
                  {practiceQuestion + 1} /{" "}
                  {questions.length}
                </span>


                <button
                  type="button"
                  onClick={
                    goToNextQuestion
                  }
                  disabled={
                    practiceQuestion ===
                    questions.length - 1
                  }
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-slate-950 px-5 font-serif text-xs font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >

                  Next

                  <ArrowRight size={15} />

                </button>

              </div>


              {/* BACK */}

              <button
                type="button"
                onClick={exitPractice}
                className="mx-auto mt-5 flex items-center gap-2 font-serif text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 transition hover:text-blue-600"
              >

                <ArrowLeft size={12} />

                Back to questions

              </button>

            </div>

          </section>

        </div>

      </main>
    );
  }

  /* =========================================================
     LIBRARY MODE
  ========================================================= */

  const easyCount = questions.filter(
    (q) => q.difficulty === "Easy"
  ).length;

  const mediumCount = questions.filter(
    (q) => q.difficulty === "Medium"
  ).length;

  const hardCount = questions.filter(
    (q) => q.difficulty === "Hard"
  ).length;

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#f5f7fb_55%,#eef4ff_100%)] px-3 py-4 text-slate-900 sm:px-6 sm:py-7 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 px-5 py-6 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.65)] sm:rounded-[30px] sm:px-10 sm:py-9">

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">

                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/15 px-3 py-1.5">

                  <Sparkles size={12} />

                  English Practice

                </span>

                <span className="text-slate-500">
                  Self-paced learning
                </span>

              </div>

              <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                {topic}
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Practice English aptitude with carefully sequenced
                questions, instant answers, and clear explanations.
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


        {/* =====================================================
            PRACTICE HEADER
        ====================================================== */}

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

          <button
            type="button"
            onClick={startPractice}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >

            Start practice

            <ArrowRight size={16} />

          </button>

        </div>


        {/* =====================================================
            QUESTION LIBRARY
            BOOKMARK REMOVED
        ====================================================== */}

        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          {questions.map((question, index) => {

            const isOpen =
              openQuestionId === question.id;

            return (

              <article
                key={question.id}
                className={`group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_8px_22px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 ${
                  isOpen
                    ? "border-blue-200 shadow-[0_14px_32px_-18px_rgba(15,23,42,0.3)]"
                    : "hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_14px_28px_-18px_rgba(15,23,42,0.3)]"
                }`}
              >

                {/* LEFT COLOR LINE */}

                <div
                  className={`absolute bottom-0 left-0 top-0 w-[4px] ${
                    question.difficulty === "Easy"
                      ? "bg-emerald-400"
                      : question.difficulty === "Medium"
                      ? "bg-amber-400"
                      : "bg-rose-400"
                  }`}
                />

                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenQuestionId(
                      isOpen ? null : question.id
                    )
                  }
                  className="w-full text-left"
                >

                  <div className="px-6 py-5">

                    {/* TOP */}

                    <div className="flex items-center justify-between gap-3">

                      <div className="flex min-w-0 items-center gap-3">

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[10px] font-black text-slate-600">

                          {String(
                            index + 1
                          ).padStart(2, "0")}

                        </span>

                        <span className="font-serif text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Question
                        </span>

                      </div>


                      {/* ONLY DIFFICULTY — BOOKMARK REMOVED */}

                      <span
                        className={`rounded-full px-3 py-1 text-[9px] font-bold ring-1 ${
                          difficultyStyles[
                            question.difficulty
                          ]
                        }`}
                      >
                        {question.difficulty}
                      </span>

                    </div>


                    {/* QUESTION TEXT */}

                    <div className="mt-4 flex items-start gap-4">

                      <p className="flex-1 font-serif text-[13px] font-bold leading-[1.65] text-slate-800 sm:text-[14px]">
                        {question.question}
                      </p>

                      <ChevronDown
                        size={17}
                        className={`mt-1 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-blue-500"
                            : ""
                        }`}
                      />

                    </div>


                    {/* FOOTER */}

                    <div className="mt-4 flex items-center gap-5">

                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">

                        <BookOpen size={13} />

                        {question.options.length} options

                      </span>

                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">

                        <CheckCircle2 size={13} />

                        {isOpen
                          ? "Answer revealed"
                          : "Click to reveal"}

                      </span>

                    </div>

                  </div>

                </button>


                {/* =================================================
                    REVEALED ANSWER
                ================================================= */}

                {isOpen && (

                  <div className="border-t border-slate-100 bg-slate-50/70 px-6 pb-6 pt-4">

                    <div className="space-y-2">

                      {question.options.map(
                        (option, optionIndex) => {

                          const correct =
                            optionIndex ===
                            question.answer;

                          return (

                            <div
                              key={`${question.id}-${optionIndex}`}
                              className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                                correct
                                  ? "border-emerald-200 bg-emerald-50"
                                  : "border-slate-200 bg-white"
                              }`}
                            >

                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-black ${
                                  correct
                                    ? "bg-emerald-500 text-white"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {letters[
                                  optionIndex
                                ]}
                              </span>

                              <span
                                className={`text-xs font-semibold ${
                                  correct
                                    ? "text-emerald-800"
                                    : "text-slate-600"
                                }`}
                              >
                                {option}
                              </span>

                              {correct && (
                                <span className="ml-auto text-[10px] font-black text-emerald-600">
                                  ✓ Correct
                                </span>
                              )}

                            </div>

                          );
                        }
                      )}

                    </div>


                    {/* ANSWER */}

                    <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">

                      <div className="flex items-center gap-2">

                        <CheckCircle2
                          size={16}
                          className="text-emerald-600"
                        />

                        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">
                          Correct Answer
                        </p>

                      </div>

                      <p className="mt-2 text-sm font-black text-emerald-900">

                        {letters[
                          question.answer
                        ]}
                        .{" "}
                        {question.options[
                          question.answer
                        ]}

                      </p>

                    </div>


                    {/* EXPLANATION */}

                    <div className="mt-3 rounded-xl border border-amber-100 bg-amber-50 p-4">

                      <div className="flex items-start gap-3">

                        <Lightbulb
                          size={16}
                          className="mt-0.5 shrink-0 text-amber-500"
                        />

                        <div>

                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-amber-700">
                            Explanation
                          </p>

                          <p className="mt-2 text-xs leading-6 text-slate-600">
                            {question.explanation}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </article>

            );
          })}

        </div>

      </div>

    </main>
  );
}