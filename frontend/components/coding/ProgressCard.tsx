"use client";

import {
  Flame,
  Target,
  TrendingUp,
  Code2,
} from "lucide-react";

export default function ProgressCard() {
  const solved = 154;
  const total = 800;
  const progress = Math.round(
    (solved / total) * 100
  );

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-blue-500/10
        dark:border-white/10
        dark:bg-white/[0.035]
        dark:hover:border-blue-500/20
        dark:hover:shadow-blue-500/10
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-blue-500/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      <div className="relative">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
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
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Your Progress
              </p>

              <h2 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                Coding Journey
              </h2>
            </div>
          </div>

          <div
            className="
              flex
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
            <TrendingUp size={13} />
            Active
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                Questions Solved
              </p>

              <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {solved}
                <span className="text-lg font-medium text-slate-400">
                  {" "}
                  / {total}
                </span>
              </h3>
            </div>

            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {progress}%
            </span>
          </div>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.07]">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-violet-500
                shadow-[0_0_15px_rgba(99,102,241,0.35)]
                transition-all
                duration-700
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-7 grid gap-3">

          {/* Accuracy */}
          <div
            className="
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              p-4
              dark:border-white/10
              dark:bg-white/[0.025]
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <Code2 size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Accuracy
                  </p>

                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    89%
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Excellent
              </span>
            </div>
          </div>

          {/* Streak */}
          <div
            className="
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              p-4
              dark:border-white/10
              dark:bg-white/[0.025]
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-50
                    text-orange-500
                    dark:bg-orange-500/10
                    dark:text-orange-400
                  "
                >
                  <Flame size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Daily Streak
                  </p>

                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    15 Days
                  </p>
                </div>
              </div>

              <span className="text-lg">
                🔥
              </span>
            </div>
          </div>

        </div>

        {/* Motivation */}
        <div
          className="
            mt-5
            rounded-2xl
            border
            border-blue-100
            bg-blue-50/70
            px-4
            py-3
            text-sm
            leading-5
            text-blue-700
            dark:border-blue-500/10
            dark:bg-blue-500/[0.06]
            dark:text-blue-300
          "
        >
          Keep your streak alive. Solve at least one
          problem today 🚀
        </div>

      </div>
    </div>
  );
}