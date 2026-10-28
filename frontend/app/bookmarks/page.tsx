"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import QuestionList from "@/components/coding/QuestionList";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    setBookmarks(saved);
  }, []);

  const bookmarkedQuestions = questions.filter((q) =>
    bookmarks.includes(q.id)
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            ⭐ Bookmarked Questions
          </h1>

          <p className="mt-2 text-slate-500">
            {bookmarkedQuestions.length} Saved Questions
          </p>

        </div>

      </div>

      <div className="mt-8">

        {bookmarkedQuestions.length > 0 ? (
          <QuestionList
            questions={bookmarkedQuestions}
          />
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center shadow">

            <h2 className="text-2xl font-bold">
              No Bookmarks Yet
            </h2>

            <p className="mt-3 text-slate-500">
              Save your favourite coding questions
              to revise them later.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}