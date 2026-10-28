import {
  Code2,
  SearchX,
} from "lucide-react";

import QuestionCard from "./QuestionCard";

interface Question {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  companies: string[];
}

interface QuestionListProps {
  questions: Question[];
}

export default function QuestionList({
  questions,
}: QuestionListProps) {
  if (questions.length === 0) {
    return (
      <div
        className="
          flex
          min-h-[360px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white/80
          px-6
          py-12
          text-center
          dark:border-white/10
          dark:bg-white/[0.025]
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-slate-100
            text-slate-400
            dark:bg-white/[0.06]
            dark:text-slate-500
          "
        >
          <SearchX size={28} />
        </div>

        <h2
          className="
            mt-5
            text-xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          No Questions Found
        </h2>

        <p
          className="
            mt-2
            max-w-sm
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-500
          "
        >
          We couldn't find any questions matching
          your current search or filters.
        </p>

        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-3
            py-1.5
            text-xs
            font-semibold
            text-blue-600
            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          <Code2 size={13} />
          Try another challenge
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-1">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="
            animate-[fadeIn_0.4s_ease-out]
          "
          style={{
            animationDelay: `${Math.min(
              index * 50,
              300
            )}ms`,
          }}
        >
          <QuestionCard
            id={question.id}
            title={question.title}
            difficulty={question.difficulty}
            company={question.companies[0]}
          />
        </div>
      ))}
    </div>
  );
}