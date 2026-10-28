"use client";

import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;

  difficulty: string;
  setDifficulty: (value: string) => void;

  company: string;
  setCompany: (value: string) => void;
}

const companies = [
  "All",
  "Amazon",
  "Google",
  "Microsoft",
  "Adobe",
  "Flipkart",
  "Walmart",
  "TCS",
  "Infosys",
  "Accenture",
  "Oracle",
  "Deloitte",
];

export default function Filters({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  company,
  setCompany,
}: FiltersProps) {
  const hasFilters =
    search !== "" ||
    difficulty !== "All" ||
    company !== "All";

  const clearFilters = () => {
    setSearch("");
    setDifficulty("All");
    setCompany("All");
  };

  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
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
              <SlidersHorizontal size={19} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                Practice Filters
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-500">
                Find the right challenge
              </p>
            </div>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-500
                transition-all
                hover:bg-red-50
                hover:text-red-500
                dark:text-slate-400
                dark:hover:bg-red-500/10
                dark:hover:text-red-400
              "
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                dark:text-slate-500
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                pl-11
                pr-4
                text-sm
                text-slate-800
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-400
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-500/10
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:text-white
                dark:placeholder:text-slate-600
                dark:focus:border-blue-500/50
                dark:focus:bg-white/[0.06]
              "
            />
          </div>

          {/* Difficulty */}
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="
              h-12
              w-full
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              text-sm
              font-medium
              text-slate-700
              outline-none
              transition-all
              duration-300
              hover:border-blue-300
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-slate-200
              dark:hover:border-blue-500/30
              dark:focus:border-blue-500/50
            "
          >
            <option value="All">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Company */}
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="
              h-12
              w-full
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              text-sm
              font-medium
              text-slate-700
              outline-none
              transition-all
              duration-300
              hover:border-blue-300
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-slate-200
              dark:hover:border-blue-500/30
              dark:focus:border-blue-500/50
            "
          >
            {companies.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Companies" : item}
              </option>
            ))}
          </select>

        </div>
      </div>
    </div>
  );
}