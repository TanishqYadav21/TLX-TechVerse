"use client";

import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  company: string;
  solved?: boolean;
}

export default function QuestionCard({
  id,
  title,
  difficulty,
  company,
  solved,
}: Props) {
  const [bookmarked, setBookmarked] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  // Check solved questions
  useEffect(() => {
    const savedSolved = JSON.parse(
      localStorage.getItem("solved") || "[]"
    );

    setIsSolved(savedSolved.includes(id));
  }, [id]);

  // Check bookmarks
  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    setBookmarked(savedBookmarks.includes(id));
  }, [id]);

  // Bookmark handler
  const handleBookmark = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    let saved = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    if (saved.includes(id)) {
      saved = saved.filter(
        (item: number) => item !== id
      );

      setBookmarked(false);
    } else {
      saved.push(id);
      setBookmarked(true);
    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(saved)
    );
  };

  // Difficulty styling
  const difficultyStyles =
    difficulty === "Easy"
      ? {
          badge:
            "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400",
          dot: "bg-emerald-500",
        }
      : difficulty === "Medium"
      ? {
          badge:
            "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400",
          dot: "bg-amber-500",
        }
      : {
          badge:
            "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400",
          dot: "bg-red-500",
        };

  const questionSolved = isSolved || solved;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_15px_40px_rgba(37,99,235,0.10)]

        dark:border-white/10
        dark:bg-white/[0.035]
        dark:hover:border-blue-500/30
        dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Bottom Hover Line */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      <div className="relative flex items-center">

        {/* Question */}
        <Link
          href={`/coding/${id}`}
          className="
            min-w-0
            flex-1
            p-5
            pr-3
            outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-inset
          "
        >
          <div className="flex items-start gap-4">

            {/* Question Number */}
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-500
                transition-all
                duration-300
                group-hover:bg-blue-50
                group-hover:text-blue-600
                dark:bg-white/[0.06]
                dark:text-slate-400
                dark:group-hover:bg-blue-500/10
                dark:group-hover:text-blue-400
              "
            >
              <span className="text-sm font-bold">
                {id}
              </span>
            </div>

            {/* Question Content */}
            <div className="min-w-0 flex-1">

              {/* Title */}
              <div className="flex items-start gap-3">
                <h3
                  className="
                    line-clamp-2
                    text-base
                    font-bold
                    leading-6
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-blue-600
                    sm:text-lg
                    dark:text-white
                    dark:group-hover:text-blue-400
                  "
                >
                  {title}
                </h3>

                <ArrowUpRight
                  size={17}
                  className="
                    mt-1
                    shrink-0
                    text-slate-300
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:text-blue-500
                    group-hover:opacity-100
                    dark:text-slate-600
                    dark:group-hover:text-blue-400
                  "
                />
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap items-center gap-2">

                {/* Difficulty */}
                <span
                  className={`
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    px-2.5
                    py-1
                    text-xs
                    font-semibold
                    ${difficultyStyles.badge}
                  `}
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${difficultyStyles.dot}
                    `}
                  />

                  {difficulty}
                </span>

                {/* Company */}
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-blue-100
                    bg-blue-50
                    px-2.5
                    py-1
                    text-xs
                    font-medium
                    text-blue-600
                    dark:border-blue-500/20
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <Building2 size={12} />
                  {company}
                </span>

                {/* Solved */}
                {questionSolved && (
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-emerald-200
                      bg-emerald-50
                      px-2.5
                      py-1
                      text-xs
                      font-semibold
                      text-emerald-600
                      dark:border-emerald-500/20
                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    <CheckCircle2 size={13} />
                    Solved
                  </span>
                )}

              </div>
            </div>
          </div>
        </Link>

        {/* Bookmark */}
        <div className="shrink-0 pr-5">
          <button
            type="button"
            onClick={handleBookmark}
            aria-label={
              bookmarked
                ? "Remove bookmark"
                : "Bookmark question"
            }
            title={
              bookmarked
                ? "Remove bookmark"
                : "Bookmark question"
            }
            className={`
              group/bookmark
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              transition-all
              duration-300

              ${
                bookmarked
                  ? `
                    border-amber-200
                    bg-amber-50
                    text-amber-500
                    shadow-[0_0_18px_rgba(245,158,11,0.15)]
                    dark:border-amber-500/20
                    dark:bg-amber-500/10
                    dark:text-amber-400
                  `
                  : `
                    border-slate-200
                    bg-slate-50
                    text-slate-400
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:text-blue-600
                    hover:shadow-[0_0_18px_rgba(59,130,246,0.12)]
                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-slate-500
                    dark:hover:border-blue-500/30
                    dark:hover:bg-blue-500/10
                    dark:hover:text-blue-400
                  `
              }
            `}
          >
            <Bookmark
              size={19}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover/bookmark:scale-110
              "
              fill={
                bookmarked
                  ? "currentColor"
                  : "none"
              }
            />

            {/* Bookmark Glow */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-blue-500/10
                opacity-0
                blur-md
                transition-opacity
                duration-300
                group-hover/bookmark:opacity-100
              "
            />
          </button>
        </div>

      </div>
    </div>
  );
}