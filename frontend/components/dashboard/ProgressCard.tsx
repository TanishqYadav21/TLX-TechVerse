"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Bookmark,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ProgressCard() {
  const [bookmarks, setBookmarks] = useState(0);
  const [solved, setSolved] = useState(0);

  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    const solvedQuestions = JSON.parse(
      localStorage.getItem("solved") || "[]"
    );

    setBookmarks(savedBookmarks.length);
    setSolved(solvedQuestions.length);
  }, []);

  const totalActivity = bookmarks + solved;
  const progress =
    totalActivity === 0
      ? 0
      : Math.round((solved / totalActivity) * 100);

  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_55px_rgba(37,99,235,0.12)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-600 ring-1 ring-blue-100">
              <Target size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Preparation Overview
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Your Progress
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          <TrendingUp size={14} />
          Keep improving
        </div>
      </div>

      <div className="relative mt-7">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">
            Overall activity
          </span>

          <span className="text-sm font-bold text-slate-800">
            {progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/60">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-[0_0_16px_rgba(99,102,241,0.35)] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 md:grid-cols-3">
        <ProgressItem
          icon={CheckCircle2}
          value={solved}
          label="Questions Solved"
          bg="bg-blue-50"
          text="text-blue-600"
        />

        <ProgressItem
          icon={Bookmark}
          value={bookmarks}
          label="Bookmarked"
          bg="bg-amber-50"
          text="text-amber-600"
        />

        <ProgressItem
          icon={Target}
          value={`${progress}%`}
          label="Completion"
          bg="bg-emerald-50"
          text="text-emerald-600"
        />
      </div>
    </section>
  );
}

function ProgressItem({
  icon: Icon,
  value,
  label,
  bg,
  text,
}: {
  icon: any;
  value: string | number;
  label: string;
  bg: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)]">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg} ${text} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={20} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>

          <p className="mt-0.5 text-xs font-medium text-slate-400">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}