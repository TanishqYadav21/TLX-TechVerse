"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { questions } from "@/data/questions";
import CodeEditor from "@/components/coding/CodeEditor";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Share2,
  Sparkles,
} from "lucide-react";

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter();

  const questionId = Number(params.id);

  // Remove any accidental undefined/null entries
  const validQuestions = useMemo(
    () => questions.filter(Boolean),
    []
  );

  const question = validQuestions.find(
    (q) => q.id === questionId
  );

  const currentIndex = validQuestions.findIndex(
    (q) => q.id === questionId
  );

  const previousQuestion =
    currentIndex > 0
      ? validQuestions[currentIndex - 1]
      : null;

  const nextQuestion =
    currentIndex >= 0 &&
    currentIndex < validQuestions.length - 1
      ? validQuestions[currentIndex + 1]
      : null;

  const [solved, setSolved] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Load saved state
  useEffect(() => {
    if (!question) return;

    try {
      const savedSolved = JSON.parse(
        localStorage.getItem("solved") || "[]"
      );

      const savedBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );

      setSolved(savedSolved.includes(question.id));
      setBookmarked(savedBookmarks.includes(question.id));
    } catch (error) {
      console.error("Unable to load saved question state:", error);
    }
  }, [question]);

  // Mark solved
  const handleSolved = () => {
    if (!question) return;

    try {
      let saved = JSON.parse(
        localStorage.getItem("solved") || "[]"
      );

      if (!Array.isArray(saved)) {
        saved = [];
      }

      if (saved.includes(question.id)) {
        saved = saved.filter(
          (item: number) => item !== question.id
        );

        setSolved(false);
      } else {
        saved.push(question.id);

        setSolved(true);
      }

      localStorage.setItem(
        "solved",
        JSON.stringify(saved)
      );
    } catch (error) {
      console.error("Unable to update solved state:", error);
    }
  };

  // Bookmark
  const handleBookmark = () => {
    if (!question) return;

    try {
      let saved = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );

      if (!Array.isArray(saved)) {
        saved = [];
      }

      if (saved.includes(question.id)) {
        saved = saved.filter(
          (item: number) => item !== question.id
        );

        setBookmarked(false);
      } else {
        saved.push(question.id);

        setBookmarked(true);
      }

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(saved)
      );
    } catch (error) {
      console.error(
        "Unable to update bookmark:",
        error
      );
    }
  };

  // Share
  const handleShare = async () => {
    if (!question) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: question.title,
          text: `Check out this coding problem: ${question.title}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Question link copied!");
      }
    } catch (error) {
      console.error("Unable to share:", error);
    }
  };

  // Invalid question
  if (!question) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6 dark:bg-[#080d1a]">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-2xl dark:bg-red-500/10">
            ❌
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-800 dark:text-white">
            Question Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            The question you're looking for doesn't exist.
          </p>

          <button
            onClick={() => router.push("/coding")}
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Back to Coding
          </button>
        </div>
      </div>
    );
  }

  const examples = Array.isArray(question.examples)
    ? question.examples
    : [];

  const constraints = Array.isArray(question.constraints)
    ? question.constraints
    : [];

  const hints = Array.isArray(question.hints)
    ? question.hints
    : [];

  return (
    <div className="min-h-screen bg-slate-100 p-6 dark:bg-[#080d1a]">
      <div className="mx-auto grid max-w-[1700px] gap-6 lg:grid-cols-[minmax(0,1fr)_650px]">

        {/* LEFT PANEL */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[#0d1424]">

          {/* Header */}
          <div className="flex items-start justify-between gap-6">

            <div className="min-w-0">

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Problem #{question.id}</span>

                <span>•</span>

                <span>{question.topic}</span>
              </div>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white lg:text-4xl">
                {question.title}
              </h1>

              {/* Difficulty + Topic */}
              <div className="mt-4 flex flex-wrap gap-3">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    question.difficulty === "Easy"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                      : question.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                      : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  }`}
                >
                  {question.difficulty}
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                  {question.topic}
                </span>

              </div>

              {/* Solved */}
              <div className="mt-6">

                <button
                  onClick={handleSolved}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 ${
                    solved
                      ? "bg-green-600 shadow-green-500/20 hover:bg-green-700"
                      : "bg-blue-600 shadow-blue-500/20 hover:bg-blue-700"
                  }`}
                >
                  {solved ? (
                    <>
                      <CheckCircle2 size={18} />
                      Solved
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={18} />
                      Mark as Solved
                    </>
                  )}
                </button>

              </div>

            </div>

            {/* Actions */}
            <div className="flex shrink-0 gap-3">

              <button
                type="button"
                onClick={handleBookmark}
                title={
                  bookmarked
                    ? "Remove bookmark"
                    : "Bookmark question"
                }
                className={`rounded-xl border p-3 transition-all ${
                  bookmarked
                    ? "border-yellow-300 bg-yellow-50 text-yellow-600 dark:border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-400"
                    : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-blue-500/10"
                }`}
              >
                <Bookmark
                  size={20}
                  fill={
                    bookmarked
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>

              <button
                type="button"
                onClick={handleShare}
                title="Share question"
                className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-blue-500/10"
              >
                <Share2 size={20} />
              </button>

            </div>

          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-8 overflow-x-auto border-b border-slate-200 dark:border-white/10">

            <button className="shrink-0 border-b-2 border-blue-600 pb-3 font-semibold text-blue-600">
              Description
            </button>

            <button className="shrink-0 pb-3 text-slate-500 transition hover:text-blue-600">
              Editorial
            </button>

            <button className="shrink-0 pb-3 text-slate-500 transition hover:text-blue-600">
              Solutions
            </button>

            <button className="shrink-0 pb-3 text-slate-500 transition hover:text-blue-600">
              Submissions
            </button>

          </div>

          {/* Description */}
          <section className="mt-10">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Problem Description
            </h2>

            <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
              {question.description}
            </p>

          </section>

          {/* Examples */}
          <section className="mt-10">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Examples
            </h2>

            {examples.length > 0 ? (
              <div className="mt-5 space-y-5">
                {examples.map((example, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg"
                  >
                    <div className="border-b border-slate-700 px-5 py-3 text-sm font-semibold text-white">
                      Example {index + 1}
                    </div>

                    <div className="p-6 font-mono text-sm">

                      <p className="text-slate-400">
                        Input
                      </p>

                      <p className="mt-2 break-words text-green-400">
                        {example.input}
                      </p>

                      <div className="my-5 border-t border-slate-700" />

                      <p className="text-slate-400">
                        Output
                      </p>

                      <p className="mt-2 break-words text-green-400">
                        {example.output}
                      </p>

                      {example.explanation && (
                        <>
                          <div className="my-5 border-t border-slate-700" />

                          <p className="text-slate-400">
                            Explanation
                          </p>

                          <p className="mt-2 leading-7 text-slate-300">
                            {example.explanation}
                          </p>
                        </>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-5 text-slate-500">
                No examples available.
              </p>
            )}

          </section>

          {/* Constraints */}
          <section className="mt-10">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Constraints
            </h2>

            {constraints.length > 0 ? (
              <div className="mt-5 space-y-3">

                {constraints.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>
            ) : (
              <p className="mt-5 text-slate-500">
                No constraints available.
              </p>
            )}

          </section>

          {/* AI Explain */}
          <section className="mt-10">

            <button className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">

              <Sparkles
                size={20}
                className="transition-transform group-hover:rotate-12"
              />

              AI Explain Problem

            </button>

          </section>

          {/* Hints */}
          <section className="mt-10">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Hints
            </h2>

            {hints.length > 0 ? (
              <div className="mt-5 space-y-3">

                {hints.map((hint, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-500/20 dark:bg-yellow-500/5 dark:text-yellow-300"
                  >
                    💡 {hint}
                  </div>
                ))}

              </div>
            ) : (
              <p className="mt-5 text-slate-500">
                No hints available.
              </p>
            )}

          </section>

          {/* Companies */}
          <section className="mt-10">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Companies
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">

              {Array.isArray(question.companies) &&
                question.companies.map((company) => (
                  <span
                    key={company}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    {company}
                  </span>
                ))}

            </div>

          </section>

          {/* Previous / Next */}
          <div className="mt-14 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-white/10">

            <button
              type="button"
              disabled={!previousQuestion}
              onClick={() => {
                if (previousQuestion) {
                  router.push(
                    `/coding/${previousQuestion.id}`
                  );
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/[0.05]"
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            <span className="text-sm text-slate-400">
              {currentIndex + 1} / {validQuestions.length}
            </span>

            <button
              type="button"
              disabled={!nextQuestion}
              onClick={() => {
                if (nextQuestion) {
                  router.push(
                    `/coding/${nextQuestion.id}`
                  );
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="sticky top-6 self-start">
           <CodeEditor question={question} />
        </div>

      </div>
    </div>
  );
}