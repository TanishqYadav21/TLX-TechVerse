"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { aptitudeQuestions } from "@/data/aptitude/numberSystem";

export default function TopicPage() {
  const params = useParams();

  const topic = decodeURIComponent(params.topic as string);

  const questions =
    aptitudeQuestions[
      topic as keyof typeof aptitudeQuestions
    ] || [];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold">
        {topic}
      </h1>

      <p className="mt-2 text-slate-500">
        {questions.length} Questions
      </p>

      <div className="mt-10 space-y-4">

        {questions.map((q) => (

          <Link
            key={q.id}
            href={`/aptitude/question/${encodeURIComponent(topic)}/${q.id}`}
          >

            <div className="flex cursor-pointer items-center justify-between rounded-xl bg-white p-5 shadow transition hover:shadow-lg">

              <div>

                <h2 className="font-bold">
                  Question {q.id}
                </h2>

                <p className="text-slate-500">
                  {q.question}
                </p>

              </div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                Solve →
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}