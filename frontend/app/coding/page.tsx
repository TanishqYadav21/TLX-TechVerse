"use client";

import { useMemo, useState } from "react";
import {
  Code2,
  Sparkles,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

import Filters from "@/components/coding/Filters";
import CompanyTags from "@/components/coding/CompanyTags";
import QuestionList from "@/components/coding/QuestionList";
import ProgressCard from "@/components/coding/ProgressCard";

import { questions } from "@/data/questions";

export default function CodingPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [company, setCompany] = useState("All");

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const searchMatch =
        question.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        question.topic
          .toLowerCase()
          .includes(search.toLowerCase());

      const difficultyMatch =
        difficulty === "All" ||
        question.difficulty === difficulty;

      const companyMatch =
  company === "All" ||
  (Array.isArray(question.companies) &&
    question.companies.includes(company));

      return (
        searchMatch &&
        difficultyMatch &&
        companyMatch
      );
    });
  }, [search, difficulty, company]);

  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300
        dark:bg-[#070b16]
        dark:text-white
      "
    >
      <Sidebar />

      <Topbar />

      <main
        className="
          relative
          z-10
          ml-64
          min-h-screen
          overflow-hidden
          p-6
          lg:p-8
        "
      >
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -right-32
              top-10
              h-80
              w-80
              rounded-full
              bg-blue-500/10
              blur-3xl
              dark:bg-blue-500/10
            "
          />

          <div
            className="
              absolute
              -left-32
              top-[420px]
              h-72
              w-72
              rounded-full
              bg-violet-500/10
              blur-3xl
              dark:bg-violet-500/10
            "
          />
        </div>

        <div className="relative">

          {/* ================= HEADER ================= */}

          <section className="mb-7">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">

              <div>
                {/* Small badge */}
                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    text-blue-600
                    shadow-sm
                    dark:border-blue-500/20
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <Sparkles size={14} />

                  <span>
                    DSA CODING ARENA
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </div>

                <h1
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    dark:text-white
                  "
                >
                  Coding Practice
                </h1>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-base
                    dark:text-slate-400
                  "
                >
                  Master DSA with company-wise and
                  topic-wise questions. Build consistency,
                  improve your problem-solving skills and
                  get placement ready.
                </p>
              </div>

              {/* Quick status */}
              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  px-4
                  py-3
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Practice Library
                  </p>

                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    {questions.length} Questions
                  </p>
                </div>

                <ChevronRight
                  size={17}
                  className="ml-1 text-slate-400"
                />
              </div>
            </div>
          </section>

          {/* ================= MINI STATS ================= */}

          <section className="mb-7 grid gap-4 sm:grid-cols-3">

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-blue-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
                hover:shadow-blue-500/10
                dark:border-white/10
                dark:bg-white/[0.035]
                dark:hover:border-blue-500/30
                dark:hover:shadow-blue-500/10
              "
            >
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-blue-500/10
                  blur-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              <div className="relative flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <Target size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Available
                  </p>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {questions.length}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-violet-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-200
                hover:shadow-xl
                hover:shadow-violet-500/10
                dark:border-white/10
                dark:bg-white/[0.035]
                dark:hover:border-violet-500/30
                dark:hover:shadow-violet-500/10
              "
            >
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-violet-500/10
                  blur-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              <div className="relative flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-50
                    text-violet-600
                    dark:bg-violet-500/10
                    dark:text-violet-400
                  "
                >
                  <TrendingUp size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Current Filter
                  </p>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {filteredQuestions.length}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-emerald-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-200
                hover:shadow-xl
                hover:shadow-emerald-500/10
                dark:border-white/10
                dark:bg-white/[0.035]
                dark:hover:border-emerald-500/30
                dark:hover:shadow-emerald-500/10
              "
            >
              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  bg-emerald-500/10
                  blur-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              <div className="relative flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Selected Difficulty
                  </p>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {difficulty}
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* ================= FILTER PANEL ================= */}

          <section
            className="
              relative
              mb-7
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white/90
              p-5
              shadow-sm
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/[0.035]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-32
                w-32
                rounded-full
                bg-blue-500/5
                blur-3xl
              "
            />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-800 dark:text-white">
                    Find your next challenge
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                    Filter questions by topic, difficulty and company.
                  </p>
                </div>
              </div>

              <Filters
                search={search}
                setSearch={setSearch}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                company={company}
                setCompany={setCompany}
              />
            </div>
          </section>
          {/* ================= RESULT COUNT ================= */}

          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing{" "}
              <span className="font-bold text-slate-800 dark:text-white">
                {filteredQuestions.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold">
                {questions.length}
              </span>{" "}
              questions
            </p>

            {(search || difficulty !== "All" || company !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDifficulty("All");
                  setCompany("All");
                }}
                className="
                  rounded-lg
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-blue-600
                  transition-colors
                  hover:bg-blue-50
                  dark:text-blue-400
                  dark:hover:bg-blue-500/10
                "
              >
                Clear filters
              </button>
            )}
          </div>

          {/* ================= QUESTIONS + PROGRESS ================= */}

          <div className="grid gap-7 lg:grid-cols-3">

            {/* Questions */}
            <div className="min-w-0 lg:col-span-2">
              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  p-1
                  shadow-sm
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-white/[0.025]
                "
              >
                <QuestionList
                  questions={filteredQuestions}
                />
              </div>
            </div>

            {/* Progress */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <ProgressCard />
            </aside>

          </div>

          {/* ================= EMPTY STATE ================= */}

          {filteredQuestions.length === 0 && (
            <div
              className="
                mt-7
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-white/70
                px-6
                py-14
                text-center
                dark:border-white/10
                dark:bg-white/[0.025]
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                  dark:bg-blue-500/10
                  dark:text-blue-400
                "
              >
                <Code2 size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                No questions found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-500">
                Try changing your search, difficulty or company
                filter to discover more coding challenges.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDifficulty("All");
                  setCompany("All");
                }}
                className="
                  mt-5
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-blue-500/30
                "
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}