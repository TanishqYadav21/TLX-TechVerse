"use client";

import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  FileText,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Upload,
  X,
  XCircle,
} from "lucide-react";

type SectionResult = {
  name: string;
  found: boolean;
  weight: number;
};

type AnalysisResult = {
  score: number;
  label: string;
  sections: SectionResult[];
  matchedKeywords: string[];
  suggestedKeywords: string[];
  suggestions: string[];
  wordCount: number;
  pageCount: number;
  contactScore: number;
  contentScore: number;
  keywordScore: number;
  structureScore: number;
};

const KEYWORDS = [
  "javascript",
  "typescript",
  "react",
  "next.js",
  "node.js",
  "express",
  "mongodb",
  "sql",
  "html",
  "css",
  "git",
  "github",
  "java",
  "c++",
  "python",
  "api",
  "rest api",
  "full stack",
  "frontend",
  "backend",
  "database",
  "problem solving",
  "data structures",
  "algorithms",
  "communication",
  "teamwork",
  "leadership",
];

const SECTION_RULES = [
  {
    name: "Professional Summary",
    aliases: [
      "professional summary",
      "summary",
      "profile",
      "objective",
    ],
    weight: 10,
  },
  {
    name: "Technical Skills",
    aliases: [
      "technical skills",
      "skills",
      "core skills",
      "technical skill",
    ],
    weight: 15,
  },
  {
    name: "Experience",
    aliases: [
      "professional experience",
      "work experience",
      "experience",
      "internship",
    ],
    weight: 15,
  },
  {
    name: "Projects",
    aliases: [
      "projects",
      "project experience",
    ],
    weight: 15,
  },
  {
    name: "Education",
    aliases: [
      "education",
      "academic background",
    ],
    weight: 15,
  },
  {
    name: "Certifications",
    aliases: [
      "certifications",
      "certificates",
      "certification",
    ],
    weight: 8,
  },
  {
    name: "Achievements",
    aliases: [
      "achievements",
      "awards",
      "honors",
    ],
    weight: 5,
  },
];

function normalizeText(value: string) {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();
}

function containsAny(
  text: string,
  aliases: string[]
) {
  return aliases.some((alias) =>
    text.includes(alias)
  );
}

function scoreLabel(score: number) {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Strong";
  if (score >= 55) return "Good";
  if (score >= 40) return "Needs Improvement";
  return "Weak";
}

/*
=====================================================
PDF EXTRACTION
=====================================================

IMPORTANT:
Do NOT import pdfjs-dist at the top of this file.

PDF.js is loaded only when the user analyzes a PDF.
This avoids the DOMMatrix module-evaluation issue.
*/

async function extractPdf(file: File) {
  if (typeof window === "undefined") {
    throw new Error(
      "PDF analysis is only available in the browser."
    );
  }

  /*
   * PDF.js is loaded only when a PDF is analyzed.
   * Do NOT move this import to the top of the file.
   */
  const pdfjsLib = await import(
    "pdfjs-dist/legacy/build/pdf.mjs"
  );

  /*
   * PDF.js 6 requires an explicit worker source.
   * Keep this before getDocument().
   */
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

  const buffer = await file.arrayBuffer();

  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(buffer),
  });

  const pdf = await loadingTask.promise;

  let text = "";

  for (
    let pageNumber = 1;
    pageNumber <= pdf.numPages;
    pageNumber++
  ) {
    const page = await pdf.getPage(pageNumber);

    const content =
      await page.getTextContent();

    let pageText = "";
    let previousY: number | null = null;

    for (
      const item of content.items as any[]
    ) {
      if (!("str" in item)) {
        continue;
      }

      const value = String(
        item.str ?? ""
      ).trim();

      if (!value) {
        continue;
      }

      const currentY =
        Array.isArray(item.transform)
          ? Number(item.transform[5])
          : null;

      if (
        previousY !== null &&
        currentY !== null &&
        Math.abs(previousY - currentY) > 3
      ) {
        pageText += "\n";
      } else if (
        pageText &&
        !pageText.endsWith("\n") &&
        !pageText.endsWith(" ")
      ) {
        pageText += " ";
      }

      pageText += value;

      if (item.hasEOL) {
        pageText += "\n";
      }

      if (currentY !== null) {
        previousY = currentY;
      }
    }

    text += pageText + "\n";
  }

  let cleanedText = normalizeText(text);

  /*
   * Fallback extraction pass.
   * Some PDFs expose their text items without useful line-position data.
   */
  if (cleanedText.length < 30) {
    let fallbackText = "";

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {
      const page =
        await pdf.getPage(pageNumber);

      const content =
        await page.getTextContent();

      const fallbackPageText =
        content.items
          .map((item: any) =>
            "str" in item
              ? String(item.str ?? "")
              : ""
          )
          .filter(Boolean)
          .join(" ");

      fallbackText +=
        fallbackPageText + "\n";
    }

    cleanedText =
      normalizeText(fallbackText);
  }

  return {
    text: cleanedText,
    pageCount: pdf.numPages,
  };
}

/*
=====================================================
TEXT ANALYSIS
=====================================================
*/

function analyzeText(
  text: string,
  pageCount: number
): AnalysisResult {
  const normalized =
    normalizeText(text).toLowerCase();

  const words = normalized
    ? normalized
        .split(/\s+/)
        .filter(Boolean)
    : [];

  const wordCount = words.length;

  const sections: SectionResult[] =
    SECTION_RULES.map((rule) => ({
      name: rule.name,
      found: containsAny(
        normalized,
        rule.aliases
      ),
      weight: rule.weight,
    }));

  const matchedKeywords =
    KEYWORDS.filter((keyword) =>
      normalized.includes(
        keyword.toLowerCase()
      )
    );

  const suggestedKeywords =
    KEYWORDS.filter(
      (keyword) =>
        !normalized.includes(
          keyword.toLowerCase()
        )
    ).slice(0, 12);

  /*
   * Contact score
   */
  let contactScore = 0;

  if (/@/.test(normalized)) {
    contactScore += 5;
  }

  const digitsOnly =
    normalized.replace(/\D/g, "");

  if (/\d{10}/.test(digitsOnly)) {
    contactScore += 5;
  }

  if (
    normalized.includes("linkedin") ||
    normalized.includes("github")
  ) {
    contactScore += 3;
  }

  contactScore = Math.min(
    contactScore,
    13
  );

  /*
   * Section score
   */
  const sectionPoints =
    sections.reduce(
      (sum, section) =>
        sum +
        (section.found
          ? section.weight
          : 0),
      0
    );

  /*
   * Keyword score
   */
  const keywordScore =
    Math.min(
      15,
      Math.round(
        (matchedKeywords.length / 10) *
          15
      )
    );

  /*
   * Resume length score
   */
  let lengthScore = 0;

  if (
    wordCount >= 300 &&
    wordCount <= 850
  ) {
    lengthScore = 8;
  } else if (
    wordCount >= 180 &&
    wordCount < 300
  ) {
    lengthScore = 5;
  } else if (
    wordCount > 850 &&
    wordCount <= 1100
  ) {
    lengthScore = 5;
  } else if (wordCount > 100) {
    lengthScore = 2;
  }

  /*
   * Content score
   */
  const contentScore =
    Math.min(
      25,
      Math.round(
        sectionPoints * 0.18
      ) + lengthScore
    );

  /*
   * Structure score
   */
  const structureScore =
    Math.min(
      32,
      Math.round(
        sectionPoints * 0.28
      ) +
        (pageCount <= 2 ? 4 : 1)
    );

  /*
   * Final score
   */
  let score =
    contactScore +
    contentScore +
    keywordScore +
    structureScore;

  score = Math.max(
    0,
    Math.min(100, score)
  );

  /*
   * Suggestions
   */
  const suggestions: string[] = [];

  if (!sections[0].found) {
    suggestions.push(
      "Add a concise Professional Summary tailored to the target role."
    );
  }

  if (!sections[1].found) {
    suggestions.push(
      "Create a dedicated Technical Skills section with role-relevant technologies."
    );
  }

  if (!sections[2].found) {
    suggestions.push(
      "Add relevant experience, internships, training, or practical work where applicable."
    );
  }

  if (!sections[3].found) {
    suggestions.push(
      "Add 2–3 strong projects with technologies, responsibilities, and measurable outcomes."
    );
  }

  if (!sections[4].found) {
    suggestions.push(
      "Add your Education section with degree, institution, and dates."
    );
  }

  if (matchedKeywords.length < 8) {
    suggestions.push(
      "Tailor technical keywords to each job description instead of using a generic keyword list."
    );
  }

  if (wordCount < 250) {
    suggestions.push(
      "The resume is quite short. Add relevant achievements, project details, or experience."
    );
  }

  if (wordCount > 1000) {
    suggestions.push(
      "Consider removing repetitive content and keeping the resume focused on relevant information."
    );
  }

  if (!/@/.test(normalized)) {
    suggestions.push(
      "Add a professional email address so recruiters can contact you."
    );
  }

  if (
    !normalized.includes("linkedin") &&
    !normalized.includes("github")
  ) {
    suggestions.push(
      "Consider adding LinkedIn and GitHub links when relevant to your target role."
    );
  }

  if (suggestions.length === 0) {
    suggestions.push(
      "Strong overall structure. Keep tailoring keywords and achievements for each application."
    );
  }

  return {
    score,
    label: scoreLabel(score),
    sections,
    matchedKeywords,
    suggestedKeywords,
    suggestions:
      suggestions.slice(0, 6),
    wordCount,
    pageCount,
    contactScore,
    contentScore,
    keywordScore,
    structureScore,
  };
}

/*
=====================================================
PAGE
=====================================================
*/

export default function ATSAnalyzerPage() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [file, setFile] =
    useState<File | null>(null);

  const [dragging, setDragging] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<AnalysisResult | null>(
      null
    );

  const [error, setError] =
    useState("");

  const scoreColor = useMemo(() => {
    if (!result) {
      return "text-blue-600";
    }

    if (result.score >= 85) {
      return "text-emerald-600";
    }

    if (result.score >= 70) {
      return "text-blue-600";
    }

    if (result.score >= 55) {
      return "text-amber-600";
    }

    return "text-red-600";
  }, [result]);

  /*
   * FILE SELECTION
   */
  const chooseFile = (
    selected: File | undefined
  ) => {
    if (!selected) return;

    setError("");
    setResult(null);

    const isPdf =
      selected.type ===
        "application/pdf" ||
      selected.name
        .toLowerCase()
        .endsWith(".pdf");

    const isTxt =
      selected.type ===
        "text/plain" ||
      selected.name
        .toLowerCase()
        .endsWith(".txt");

    if (!isPdf && !isTxt) {
      setFile(null);
      setError(
        "Please upload a PDF or TXT resume."
      );
      return;
    }

    if (
      selected.size >
      5 * 1024 * 1024
    ) {
      setFile(null);
      setError(
        "File size must be 5 MB or less."
      );
      return;
    }

    setFile(selected);
  };

  /*
   * ANALYZE RESUME
   */
  const analyzeResume = async () => {
    if (!file) {
      setError(
        "Please select a resume first."
      );
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      let text = "";
      let pageCount = 1;

      if (
        file.type ===
          "application/pdf" ||
        file.name
          .toLowerCase()
          .endsWith(".pdf")
      ) {
        const extracted =
          await extractPdf(file);

        text = extracted.text;
        pageCount =
          extracted.pageCount;
      } else {
        text = await file.text();
      }

      const extractedText =
        normalizeText(text);

      if (extractedText.length < 20) {
        throw new Error(
          "This PDF does not contain readable text. Please upload a text-based PDF or export the resume again using Print → Save as PDF."
        );
      }

      setResult(
        analyzeText(
          extractedText,
          pageCount
        )
      );
    } catch (err: any) {
      console.error(
        "ATS Analyzer Error:",
        err
      );

      setError(
        err?.message ||
          "Unable to analyze this resume. Please try another file."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
   * RESET
   */
  const reset = () => {
    setFile(null);
    setResult(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff,transparent_38%),#f8fafc] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <header className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
              <Sparkles size={14} />
              Resume Intelligence
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              ATS Resume Analyzer
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Upload your resume and get an estimated ATS compatibility score,
              section analysis, keyword coverage, and practical improvements.
            </p>

          </div>
        </header>

        {!result ? (

          <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

            <div className="p-5 sm:p-8 lg:p-10">

              {/* UPLOAD AREA */}

              <div
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() =>
                  setDragging(false)
                }
                onDrop={(event) => {
                  event.preventDefault();
                  setDragging(false);

                  chooseFile(
                    event.dataTransfer.files?.[0]
                  );
                }}
                className={`relative flex min-h-[340px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed px-6 text-center transition ${
                  dragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >

                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                  <Upload size={32} />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold">
                  Drop your resume here
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                  Drag and drop your PDF or TXT resume, or choose a file from
                  your computer.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    inputRef.current?.click()
                  }
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <FileText size={18} />
                  Choose Resume
                </button>

                <input
                  ref={inputRef}
                  type="file"
                  accept=".pdf,.txt,application/pdf,text/plain"
                  className="hidden"
                  onChange={(event) =>
                    chooseFile(
                      event.target.files?.[0]
                    )
                  }
                />

                <div className="mt-5 flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-slate-400">

                  <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                    PDF
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                    TXT
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                    Max 5 MB
                  </span>

                </div>
              </div>

              {/* SELECTED FILE */}

              {file && (
                <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FileText size={20} />
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-bold text-slate-800">
                        {file.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {(
                          file.size /
                          1024 /
                          1024
                        ).toFixed(2)}{" "}
                        MB
                      </p>

                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50"
                  >
                    <X size={15} />
                    Remove
                  </button>

                </div>
              )}

              {/* ERROR */}

              {error && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">

                  <XCircle
                    className="mt-0.5 shrink-0"
                    size={19}
                  />

                  <span className="leading-6">
                    {error}
                  </span>

                </div>
              )}

              {/* ANALYZE BUTTON */}

              <button
                type="button"
                disabled={!file || loading}
                onClick={analyzeResume}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              >

                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Analyzing your resume...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Analyze Resume
                  </>
                )}

              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
                This is an estimated ATS compatibility score, not a guarantee
                of how a specific employer's ATS will rank your resume.
              </p>

            </div>

          </section>

        ) : (

          <div className="space-y-6">

            {/* RESULT HEADER */}

            <section className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <FileText size={22} />
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-bold">
                    {file?.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Analysis complete ·{" "}
                    {result.pageCount} page
                    {result.pageCount !== 1
                      ? "s"
                      : ""}
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                <RotateCcw size={16} />
                New Analysis
              </button>

            </section>

            {/* SCORE */}

            <section className="grid gap-6 lg:grid-cols-[360px_1fr]">

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  ATS Compatibility
                </p>

                <div
                  className="mx-auto mt-6 flex h-56 w-56 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(#2563eb ${
                      result.score * 3.6
                    }deg, #dbeafe ${
                      result.score * 3.6
                    }deg)`,
                  }}
                >

                  <div className="flex h-[188px] w-[188px] flex-col items-center justify-center rounded-full bg-white">

                    <span
                      className={`text-6xl font-black ${scoreColor}`}
                    >
                      {result.score}
                    </span>

                    <span className="mt-1 text-sm font-bold text-slate-400">
                      / 100
                    </span>

                  </div>

                </div>

                <div className="mt-6 text-center">

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${
                      result.score >= 70
                        ? "bg-emerald-50 text-emerald-700"
                        : result.score >= 55
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                    }`}
                  >
                    {result.label}
                  </span>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                    Based on structure, contact information, content coverage,
                    keywords, and resume organization.
                  </p>

                </div>

              </div>

              {/* BREAKDOWN */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Score Breakdown
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    What is driving your score?
                  </h2>

                </div>

                <div className="mt-7 space-y-5">

                  <ScoreBar
                    label="Contact Information"
                    score={
                      result.contactScore
                    }
                    max={13}
                  />

                  <ScoreBar
                    label="Resume Content"
                    score={
                      result.contentScore
                    }
                    max={25}
                  />

                  <ScoreBar
                    label="Keywords"
                    score={
                      result.keywordScore
                    }
                    max={15}
                  />

                  <ScoreBar
                    label="Structure & Sections"
                    score={
                      result.structureScore
                    }
                    max={32}
                  />

                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  <MiniStat
                    label="Words"
                    value={
                      result.wordCount
                    }
                  />

                  <MiniStat
                    label="Pages"
                    value={
                      result.pageCount
                    }
                  />

                  <MiniStat
                    label="Keywords"
                    value={
                      result
                        .matchedKeywords
                        .length
                    }
                  />

                </div>

              </div>

            </section>

            {/* SECTION CHECK */}

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="flex items-end justify-between gap-4">

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Resume Structure
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    Section Check
                  </h2>

                </div>

                <span className="text-xs font-bold text-slate-400">
                  {
                    result.sections.filter(
                      (item) =>
                        item.found
                    ).length
                  }
                  /
                  {result.sections.length}{" "}
                  detected
                </span>

              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {result.sections.map(
                  (section) => (
                    <div
                      key={
                        section.name
                      }
                      className={`flex items-center gap-3 rounded-2xl border p-4 ${
                        section.found
                          ? "border-emerald-100 bg-emerald-50/70"
                          : "border-amber-100 bg-amber-50/70"
                      }`}
                    >

                      {section.found ? (
                        <CheckCircle2
                          size={19}
                          className="shrink-0 text-emerald-600"
                        />
                      ) : (
                        <AlertTriangle
                          size={19}
                          className="shrink-0 text-amber-600"
                        />
                      )}

                      <div>

                        <p className="text-sm font-bold">
                          {section.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {section.found
                            ? "Detected"
                            : "Not detected"}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* KEYWORDS */}

            <section className="grid gap-6 lg:grid-cols-2">

              <KeywordCard
                title="Keywords Detected"
                subtitle={`${result.matchedKeywords.length} relevant terms found`}
                items={
                  result.matchedKeywords
                }
                positive
              />

              <KeywordCard
                title="Potential Keywords"
                subtitle="Consider these only when they match your target role"
                items={
                  result.suggestedKeywords
                }
              />

            </section>

            {/* SUGGESTIONS */}

            <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm sm:p-7">

              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <Lightbulb size={21} />
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Action Plan
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    Improve your resume
                  </h2>

                </div>

              </div>

              <div className="mt-6 grid gap-3">

                {result.suggestions.map(
                  (
                    suggestion,
                    index
                  ) => (
                    <div
                      key={
                        suggestion
                      }
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-700">
                        {suggestion}
                      </p>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* FOOTER NOTE */}

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">

              <Check
                size={16}
                className="mt-0.5 shrink-0 text-emerald-600"
              />

              <p>
                Tip: ATS compatibility improves when your resume is tailored
                to the specific job description. Do not add keywords that do
                not genuinely match your skills or experience.
              </p>

            </div>

          </div>

        )}

      </div>
    </main>
  );
}

/*
=====================================================
SCORE BAR
=====================================================
*/

function ScoreBar({
  label,
  score,
  max,
}: {
  label: string;
  score: number;
  max: number;
}) {
  const percent =
    Math.min(
      100,
      Math.round(
        (score / max) * 100
      )
    );

  return (
    <div>

      <div className="mb-2 flex items-center justify-between gap-4">

        <span className="text-sm font-bold text-slate-700">
          {label}
        </span>

        <span className="text-xs font-extrabold text-slate-500">
          {score}/{max}
        </span>

      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>
  );
}

/*
=====================================================
MINI STAT
=====================================================
*/

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xl font-black text-slate-900">
        {value}
      </p>

    </div>
  );
}

/*
=====================================================
KEYWORD CARD
=====================================================
*/

function KeywordCard({
  title,
  subtitle,
  items,
  positive = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

      <div className="flex items-start gap-3">

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {positive ? (
            <CheckCircle2 size={19} />
          ) : (
            <AlertTriangle size={19} />
          )}
        </div>

        <div>

          <h2 className="font-black">
            {title}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {subtitle}
          </p>

        </div>

      </div>

      <div className="mt-5 flex max-h-52 flex-wrap gap-2 overflow-auto pr-1">

        {items.length ? (
          items.map((item) => (
            <span
              key={item}
              className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                positive
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-sm text-slate-400">
            Nothing to show yet.
          </span>
        )}

      </div>

    </section>
  );
}