"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  MockQuestion,
  MockSection,
} from "@/data/aptitude/mock-test/types";
import { quantitativeMockQuestions } from "@/data/aptitude/mock-test/quantitativeMock";
import { reasoningMockQuestions } from "@/data/aptitude/mock-test/reasoningMock";
import { englishMockQuestions } from "@/data/aptitude/mock-test/englishMock";

type TestType = "Full" | "Quantitative" | "Reasoning" | "English";

type AnswerMap = Record<string, number>;
type BooleanMap = Record<string, boolean>;

type Screen = "home" | "instructions" | "test" | "result";

type ActiveTestState = {
  testType: TestType;
  questions: MockQuestion[];
  answers: AnswerMap;
  marked: BooleanMap;
  visited: BooleanMap;
  current: number;
  endsAt: number;
};

const ACTIVE_TEST_KEY = "aptitude-mock-active-v2";

const TEST_CONFIG: Record<
  TestType,
  {
    title: string;
    description: string;
    questions: number;
    time: number;
  }
> = {
  Full: {
    title: "Full Mock Test",
    description: "Quantitative + Reasoning + English",
    questions: 40,
    time: 40 * 60,
  },
  Quantitative: {
    title: "Quantitative Aptitude",
    description: "Numerical ability and mathematical aptitude",
    questions: 30,
    time: 30 * 60,
  },
  Reasoning: {
    title: "Logical Reasoning",
    description: "Puzzles, series, coding and logical ability",
    questions: 30,
    time: 30 * 60,
  },
  English: {
    title: "English Aptitude",
    description: "Grammar, vocabulary and verbal ability",
    questions: 30,
    time: 30 * 60,
  },
};

const ALL_QUESTIONS: MockQuestion[] = [
  ...quantitativeMockQuestions,
  ...reasoningMockQuestions,
  ...englishMockQuestions,
];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function getUsedKey(type: TestType) {
  return `aptitude-mock-used-${type.toLowerCase()}`;
}

function getUsedIds(type: TestType): string[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem(getUsedKey(type));
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveUsedIds(type: TestType, ids: string[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    getUsedKey(type),
    JSON.stringify([...new Set(ids)])
  );
}

function selectFreshQuestions(
  pool: MockQuestion[],
  count: number,
  type: TestType
): MockQuestion[] {
  const mediumHard = pool.filter(
    (question) =>
      question.difficulty === "Medium" ||
      question.difficulty === "Hard"
  );

  if (mediumHard.length === 0) return [];

  let usedIds = getUsedIds(type);

  let available = mediumHard.filter(
    (question) => !usedIds.includes(question.id)
  );

  // Once the pool is exhausted, start a new cycle.
  if (available.length < count) {
    usedIds = [];
    available = mediumHard;
  }

  const selected = shuffle(available).slice(0, count);

  saveUsedIds(
    type,
    [...usedIds, ...selected.map((question) => question.id)]
  );

  return selected;
}

function buildFullMock(count: number): MockQuestion[] {
  const quant = quantitativeMockQuestions
  const reasoning = reasoningMockQuestions
  const english = englishMockQuestions

  const quantQuestions = selectFreshQuestions(
    quant,
    14,
    "Quantitative"
  )

  const reasoningQuestions = selectFreshQuestions(
    reasoning,
    13,
    "Reasoning"
  )

  const englishQuestions = selectFreshQuestions(
    english,
    13,
    "English"
  )

  const allQuestions = [
    ...quantQuestions,
    ...reasoningQuestions,
    ...englishQuestions
  ]

  return shuffle(allQuestions).slice(0, count)
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
    2,
    "0"
  )}`;
}

function getSectionLabel(section: MockSection) {
  if (section === "Quantitative") return "QUANT";
  if (section === "Reasoning") return "REASONING";
  return "ENGLISH";
}

export default function MockTestPage() {
  const [screen, setScreen] = useState<Screen>("home");
  const [testType, setTestType] = useState<TestType>("Full");

  const [testQuestions, setTestQuestions] = useState<MockQuestion[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [marked, setMarked] = useState<BooleanMap>({});
  const [visited, setVisited] = useState<BooleanMap>({});

  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const [showSubmit, setShowSubmit] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const [result, setResult] = useState<{
    correct: number;
    wrong: number;
    attempted: number;
    unattempted: number;
    accuracy: number;
    percentage: number;
  } | null>(null);

  const selectedTest = TEST_CONFIG[testType];

  const currentQuestion = testQuestions[current];

  const answeredCount = useMemo(
    () =>
      testQuestions.filter(
        (question) => answers[question.id] !== undefined
      ).length,
    [testQuestions, answers]
  );

  const markedCount = useMemo(
    () =>
      testQuestions.filter(
        (question) => marked[question.id]
      ).length,
    [testQuestions, marked]
  );

  const attemptedQuestions = useMemo(
    () =>
      testQuestions.filter(
        (question) => answers[question.id] !== undefined
      ),
    [testQuestions, answers]
  );

  const calculateResult = useCallback(
    (questions: MockQuestion[], answerMap: AnswerMap) => {
      const attempted = questions.filter(
        (question) => answerMap[question.id] !== undefined
      );

      const correct = attempted.filter(
        (question) => answerMap[question.id] === question.answer
      ).length;

      const wrong = attempted.length - correct;

      const unattempted = questions.length - attempted.length;

      const accuracy =
        attempted.length > 0
          ? Math.round((correct / attempted.length) * 100)
          : 0;

      const percentage =
        questions.length > 0
          ? Math.round((correct / questions.length) * 100)
          : 0;

      return {
        correct,
        wrong,
        attempted: attempted.length,
        unattempted,
        accuracy,
        percentage,
      };
    },
    []
  );

  const finishTest = useCallback(
    (questions = testQuestions, answerMap = answers) => {
      if (!questions.length) return;

      const finalResult = calculateResult(
        questions,
        answerMap
      );

      setResult(finalResult);
      setScreen("result");
      setShowSubmit(false);

      localStorage.removeItem(ACTIVE_TEST_KEY);

      window.history.replaceState(
        { mockTestResult: true },
        "",
        window.location.href
      );
    },
    [answers, calculateResult, testQuestions]
  );

  /*
    Restore test after refresh.
  */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_TEST_KEY);

      if (!saved) return;

      const state: ActiveTestState = JSON.parse(saved);

      if (
        !state ||
        !state.questions ||
        !Array.isArray(state.questions) ||
        !state.questions.length
      ) {
        localStorage.removeItem(ACTIVE_TEST_KEY);
        return;
      }

      const remaining = Math.max(
        0,
        Math.ceil((state.endsAt - Date.now()) / 1000)
      );

      if (remaining <= 0) {
        localStorage.removeItem(ACTIVE_TEST_KEY);

        const finalResult = calculateResult(
          state.questions,
          state.answers || {}
        );

        setTestType(state.testType);
        setTestQuestions(state.questions);
        setAnswers(state.answers || {});
        setMarked(state.marked || {});
        setVisited(state.visited || {});
        setCurrent(state.current || 0);
        setResult(finalResult);
        setScreen("result");

        return;
      }

      setTestType(state.testType);
      setTestQuestions(state.questions);
      setAnswers(state.answers || {});
      setMarked(state.marked || {});
      setVisited(state.visited || {});
      setCurrent(
        Math.min(
          state.current || 0,
          state.questions.length - 1
        )
      );
      setTimeLeft(remaining);
      setScreen("test");
    } catch {
      localStorage.removeItem(ACTIVE_TEST_KEY);
    }
  }, [calculateResult]);

  /*
    Save active test continuously.
  */
  useEffect(() => {
    if (screen !== "test" || !testQuestions.length) return;

    const state: ActiveTestState = {
      testType,
      questions: testQuestions,
      answers,
      marked,
      visited,
      current,
      endsAt: Date.now() + timeLeft * 1000,
    };

    localStorage.setItem(
      ACTIVE_TEST_KEY,
      JSON.stringify(state)
    );
  }, [
    screen,
    testType,
    testQuestions,
    answers,
    marked,
    visited,
    current,
    timeLeft,
  ]);

  /*
    Timer.
  */
  useEffect(() => {
    if (screen !== "test") return;

    const interval = window.setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          window.clearInterval(interval);

          setTimeout(() => {
            finishTest();
          }, 0);

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [screen, finishTest]);

  /*
    Browser BACK LOCK.
    User cannot leave active test until submit.
  */
  useEffect(() => {
    if (screen !== "test") return;

    const currentUrl = window.location.href;

    window.history.pushState(
      { mockTestLocked: true },
      "",
      currentUrl
    );

    const handlePopState = () => {
      window.history.pushState(
        { mockTestLocked: true },
        "",
        currentUrl
      );

      window.alert(
        "Test is in progress. Please submit the test before leaving."
      );
    };

    const handleBeforeUnload = (
      event: BeforeUnloadEvent
    ) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );

      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, [screen]);

  const startTest = () => {
    let questions: MockQuestion[] = [];

    if (testType === "Full") {
      questions = buildFullMock(40);
    }

    if (testType === "Quantitative") {
      questions = selectFreshQuestions(
        quantitativeMockQuestions,
        30,
        "Quantitative"
      );
    }

    if (testType === "Reasoning") {
      questions = selectFreshQuestions(
        reasoningMockQuestions,
        30,
        "Reasoning"
      );
    }

    if (testType === "English") {
      questions = selectFreshQuestions(
        englishMockQuestions,
        30,
        "English"
      );
    }

    /*
      Safety fallback:
      only Medium + Hard questions.
    */
    questions = questions.filter(
      (question) =>
        question.difficulty === "Medium" ||
        question.difficulty === "Hard"
    );

    if (questions.length < selectedTest.questions) {
      window.alert(
        `Question bank me abhi ${selectedTest.questions} unique questions available nahi hain.`
      );
      return;
    }

    const finalQuestions = questions.slice(
      0,
      selectedTest.questions
    );

    const initialVisited: BooleanMap = {};

    if (finalQuestions[0]) {
      initialVisited[finalQuestions[0].id] = true;
    }

    const endsAt =
      Date.now() + selectedTest.time * 1000;

    setTestQuestions(finalQuestions);
    setAnswers({});
    setMarked({});
    setVisited(initialVisited);
    setCurrent(0);
    setTimeLeft(selectedTest.time);
    setResult(null);
    setShowSubmit(false);

    localStorage.setItem(
      ACTIVE_TEST_KEY,
      JSON.stringify({
        testType,
        questions: finalQuestions,
        answers: {},
        marked: {},
        visited: initialVisited,
        current: 0,
        endsAt,
      })
    );

    setShowInstructions(false);
    setScreen("test");
  };

  const openInstructions = () => {
    setShowInstructions(true);
  };

  const selectAnswer = (optionIndex: number) => {
    if (!currentQuestion) return;

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const clearResponse = () => {
    if (!currentQuestion) return;

    setAnswers((previous) => {
      const next = { ...previous };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const toggleMark = () => {
    if (!currentQuestion) return;

    setMarked((previous) => ({
      ...previous,
      [currentQuestion.id]:
        !previous[currentQuestion.id],
    }));
  };

  const goToQuestion = (index: number) => {
    if (!testQuestions[index]) return;

    setCurrent(index);

    setVisited((previous) => ({
      ...previous,
      [testQuestions[index].id]: true,
    }));
  };

  const nextQuestion = () => {
    if (current < testQuestions.length - 1) {
      goToQuestion(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      goToQuestion(current - 1);
    }
  };

  const submitTest = () => {
    finishTest();
  };

  const retakeTest = () => {
    setResult(null);
    setAnswers({});
    setMarked({});
    setVisited({});
    setTestQuestions([]);
    setCurrent(0);
    setTimeLeft(0);
    setScreen("home");
  };

  const sectionStats = useMemo(() => {
    const sections: MockSection[] = [
      "Quantitative",
      "Reasoning",
      "English",
    ];

    return sections.map((section) => {
      const questions = testQuestions.filter(
        (question) => question.section === section
      );

      const attempted = questions.filter(
        (question) =>
          answers[question.id] !== undefined
      );

      const correct = attempted.filter(
        (question) =>
          answers[question.id] === question.answer
      ).length;

      return {
        section,
        total: questions.length,
        attempted: attempted.length,
        correct,
        wrong: attempted.length - correct,
      };
    });
  }, [testQuestions, answers]);

  if (screen === "home") {
    return (
      <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[28px] bg-[#071a33] px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 text-xs font-bold tracking-[0.22em] text-blue-300">
                APTITUDE / MOCK TEST
              </div>

              <div className="max-w-3xl">
                <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
                  Placement Mock Test
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Real exam-style practice with Quantitative,
                  Reasoning and English questions. Every attempt
                  gives you a fresh set of questions.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                  Medium + Hard
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                  Fresh Questions
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                  Timed Test
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold">
                  Instant Analysis
                </span>
              </div>
            </div>
          </section>

          {/* INSTRUCTIONS */}
          <section className="mt-7 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                  TEST RULES
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Before you begin
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  Choose a mock test according to the section
                  you want to practice.
                </p>
              </div>

              <button
                onClick={() => setShowInstructions(true)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                View Instructions
              </button>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                ["40", "Full Mock", "40 min"],
                ["30", "Quant", "30 min"],
                ["30", "Reasoning", "30 min"],
                ["30", "English", "30 min"],
              ].map(([number, title, time]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-3xl font-black text-[#071a33]">
                    {number}
                  </div>

                  <div className="mt-1 text-sm font-bold">
                    {title}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TEST SELECTION */}
          <section className="mt-7">
            <div className="mb-5">
              <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                SELECT TEST
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Choose your challenge
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-4">
              {(Object.keys(TEST_CONFIG) as TestType[]).map(
                (type) => {
                  const config = TEST_CONFIG[type];
                  const selected = type === testType;

                  return (
                    <button
                      key={type}
                      onClick={() => setTestType(type)}
                      className={`group rounded-[22px] border bg-white p-6 text-left shadow-sm transition ${
                        selected
                          ? "border-blue-500 ring-2 ring-blue-500/10"
                          : "border-slate-200 hover:-translate-y-1 hover:shadow-md"
                      }`}
                    >
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black ${
                          selected
                            ? "bg-[#071a33] text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {type === "Full"
                          ? "40"
                          : "30"}
                      </div>

                      <h3 className="text-lg font-black">
                        {config.title}
                      </h3>

                      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                        {config.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs font-bold text-slate-500">
                          {config.questions} Questions
                        </span>

                        <span className="text-xs font-bold text-blue-600">
                          {config.time / 60} Minutes
                        </span>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </section>

          {/* SELECTED TEST */}
          <section className="mt-7 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                  SELECTED MOCK
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {selectedTest.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {selectedTest.questions} questions ·{" "}
                  {selectedTest.time / 60} minutes ·
                  Medium + Hard only
                </p>
              </div>

              <button
                onClick={openInstructions}
                className="rounded-xl bg-[#071a33] px-7 py-4 text-sm font-black text-white shadow-lg transition hover:bg-[#0b2547]"
              >
                Start Test →
              </button>
            </div>
          </section>
        </div>

        {/* INSTRUCTIONS MODAL */}
        {showInstructions && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071a33]/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-[26px] bg-white p-7 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                    INSTRUCTIONS
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    {selectedTest.title}
                  </h2>
                </div>

                <button
                  onClick={() =>
                    setShowInstructions(false)
                  }
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  `${selectedTest.questions} questions`,
                  `${selectedTest.time / 60} minutes`,
                  "Only Medium and Hard questions",
                  "Every new attempt gets fresh questions",
                  "You can mark questions for review",
                  "Unattempted questions are not counted as wrong",
                  "Accuracy = Correct ÷ Attempted × 100",
                  "Browser back is locked during the test",
                  "Refreshing the page resumes the active test",
                  "Test auto-submits when the timer reaches zero",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm text-slate-600"
                  >
                    <span className="font-black text-blue-600">
                      {index + 1}.
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={startTest}
                className="mt-7 w-full rounded-xl bg-[#071a33] py-4 text-sm font-black text-white transition hover:bg-[#0b2547]"
              >
                Begin Test
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }

  if (screen === "test" && currentQuestion) {
    const selectedAnswer =
      answers[currentQuestion.id];

    return (
      <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
        {/* TOP BAR */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] text-blue-600">
                MOCK TEST
              </p>

              <h1 className="mt-1 text-sm font-black sm:text-lg">
                {selectedTest.title}
              </h1>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="rounded-xl bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
                Question{" "}
                <span className="text-slate-900">
                  {current + 1}
                </span>{" "}
                / {testQuestions.length}
              </div>

              <div
                className={`rounded-xl px-5 py-2.5 text-sm font-black ${
                  timeLeft <= 60
                    ? "bg-red-50 text-red-600"
                    : "bg-[#071a33] text-white"
                }`}
              >
                ⏱ {formatTime(timeLeft)}
              </div>
            </div>

            <button
              onClick={() => setShowSubmit(true)}
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-blue-700 sm:px-5"
            >
              Submit Test
            </button>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1500px] gap-5 p-4 lg:grid-cols-[minmax(0,1fr)_330px]">
          {/* QUESTION AREA */}
          <section className="min-w-0">
            <div className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-[10px] font-black text-blue-600">
                    {getSectionLabel(
                      currentQuestion.section
                    )}
                  </span>

                  <span
                    className={`rounded-lg px-3 py-1.5 text-[10px] font-black ${
                      currentQuestion.difficulty ===
                      "Hard"
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {currentQuestion.difficulty}
                  </span>
                </div>

                <button
                  onClick={toggleMark}
                  className={`rounded-xl border px-4 py-2 text-xs font-bold transition ${
                    marked[currentQuestion.id]
                      ? "border-amber-200 bg-amber-50 text-amber-600"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {marked[currentQuestion.id]
                    ? "★ Marked"
                    : "☆ Mark for Review"}
                </button>
              </div>

              <div className="mt-7">
                <div className="mb-4 text-xs font-black text-slate-400">
                  QUESTION {current + 1}
                </div>

                <h2 className="max-w-4xl text-lg font-black leading-8 text-slate-900 sm:text-xl">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="mt-7 space-y-3">
                {currentQuestion.options.map(
                  (option, index) => {
                    const selected =
                      selectedAnswer === index;

                    return (
                      <button
                        key={`${currentQuestion.id}-${index}`}
                        onClick={() =>
                          selectAnswer(index)
                        }
                        className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                          selected
                            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                            selected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        <span className="pt-1 text-sm font-semibold leading-6 text-slate-700">
                          {option}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                <button
                  onClick={clearResponse}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-xs font-black text-slate-500 transition hover:bg-slate-50"
                >
                  Clear Response
                </button>

                <div className="flex gap-3">
                  <button
                    disabled={current === 0}
                    onClick={previousQuestion}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-xs font-black text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={nextQuestion}
                    disabled={
                      current ===
                      testQuestions.length - 1
                    }
                    className="rounded-xl bg-[#071a33] px-6 py-3 text-xs font-black text-white transition hover:bg-[#0b2547] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Save & Next →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="h-fit space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black">
                  Question Palette
                </h3>

                <span className="text-xs font-bold text-slate-400">
                  {answeredCount}/{testQuestions.length}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-5 gap-2">
                {testQuestions.map(
                  (question, index) => {
                    const isCurrent =
                      index === current;
                    const isAnswered =
                      answers[question.id] !==
                      undefined;
                    const isMarked =
                      marked[question.id];

                    let className =
                      "border-slate-200 bg-white text-slate-500";

                    if (isAnswered) {
                      className =
                        "border-blue-600 bg-blue-600 text-white";
                    }

                    if (isMarked && !isAnswered) {
                      className =
                        "border-amber-400 bg-amber-50 text-amber-600";
                    }

                    if (isCurrent) {
                      className +=
                        " ring-2 ring-blue-300";
                    }

                    return (
                      <button
                        key={question.id}
                        onClick={() =>
                          goToQuestion(index)
                        }
                        className={`relative flex h-10 items-center justify-center rounded-lg border text-[11px] font-black ${className}`}
                      >
                        {index + 1}

                        {isMarked && (
                          <span className="absolute -right-1 -top-1 text-[9px] text-amber-500">
                            ★
                          </span>
                        )}
                      </button>
                    );
                  }
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5 text-[10px] font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-blue-600" />
                  Answered
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded border border-amber-400 bg-amber-50" />
                  Review
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded border border-slate-200 bg-white" />
                  Unanswered
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded border-2 border-blue-300 bg-white" />
                  Current
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#071a33] p-5 text-white shadow-sm">
              <p className="text-[10px] font-black tracking-[0.18em] text-blue-300">
                TEST PROGRESS
              </p>

              <div className="mt-4 flex items-end justify-between">
                <div className="text-3xl font-black">
                  {Math.round(
                    (answeredCount /
                      testQuestions.length) *
                      100
                  )}
                  %
                </div>

                <div className="text-xs font-bold text-slate-400">
                  {answeredCount} attempted
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all"
                  style={{
                    width: `${Math.round(
                      (answeredCount /
                        testQuestions.length) *
                        100
                    )}%`,
                  }}
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-lg font-black">
                    {markedCount}
                  </div>

                  <div className="mt-1 text-[10px] text-slate-400">
                    Marked
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-lg font-black">
                    {testQuestions.length -
                      answeredCount}
                  </div>

                  <div className="mt-1 text-[10px] text-slate-400">
                    Remaining
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* SUBMIT MODAL */}
        {showSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071a33]/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[26px] bg-white p-7 shadow-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  ✓
                </div>

                <h2 className="mt-5 text-2xl font-black">
                  Submit Test?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  You have attempted{" "}
                  <b>{answeredCount}</b> out of{" "}
                  <b>{testQuestions.length}</b>{" "}
                  questions.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <div className="text-lg font-black">
                    {answeredCount}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400">
                    Attempted
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <div className="text-lg font-black">
                    {testQuestions.length -
                      answeredCount}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400">
                    Unattempted
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <div className="text-lg font-black">
                    {markedCount}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400">
                    Review
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowSubmit(false)}
                  className="flex-1 rounded-xl border border-slate-200 py-3 text-xs font-black text-slate-600"
                >
                  Continue Test
                </button>

                <button
                  onClick={submitTest}
                  className="flex-1 rounded-xl bg-[#071a33] py-3 text-xs font-black text-white"
                >
                  Submit Test
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  if (screen === "result" && result) {
    return (
      <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* RESULT HERO */}
          <section className="relative overflow-hidden rounded-[28px] bg-[#071a33] px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-black tracking-[0.2em] text-blue-300">
                TEST COMPLETED
              </p>

              <h1 className="mt-3 text-3xl font-black sm:text-5xl">
                {selectedTest.title}
              </h1>

              <p className="mt-3 text-sm text-slate-300">
                Your performance analysis is ready.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black">
                    {result.correct}
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">
                    Correct
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black">
                    {result.wrong}
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">
                    Wrong
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black">
                    {result.unattempted}
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">
                    Unattempted
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black">
                    {result.accuracy}%
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">
                    Accuracy
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-3xl font-black">
                    {result.correct}/
                    {testQuestions.length}
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">
                    Score
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION ANALYSIS */}
          <section className="mt-7 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                SECTION ANALYSIS
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Performance by section
              </h2>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {sectionStats.map((item) => {
                const percentage =
                  item.total > 0
                    ? Math.round(
                        (item.correct /
                          item.total) *
                          100
                      )
                    : 0;

                return (
                  <div
                    key={item.section}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black">
                        {getSectionLabel(
                          item.section
                        )}
                      </h3>

                      <span className="text-sm font-black text-blue-600">
                        {percentage}%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-black">
                          {item.correct}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400">
                          Correct
                        </div>
                      </div>

                      <div>
                        <div className="text-lg font-black">
                          {item.wrong}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400">
                          Wrong
                        </div>
                      </div>

                      <div>
                        <div className="text-lg font-black">
                          {item.attempted}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400">
                          Attempted
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* QUESTION REVIEW */}
          <section className="mt-7 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-blue-600">
                QUESTION REVIEW
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Review your answers
              </h2>
            </div>

            <div className="mt-7 space-y-4">
              {testQuestions.map(
                (question, index) => {
                  const userAnswer =
                    answers[question.id];

                  const attempted =
                    userAnswer !== undefined;

                  const correct =
                    attempted &&
                    userAnswer ===
                      question.answer;

                  return (
                    <div
                      key={question.id}
                      className={`rounded-2xl border p-5 ${
                        correct
                          ? "border-emerald-200 bg-emerald-50/50"
                          : attempted
                          ? "border-red-200 bg-red-50/50"
                          : "border-slate-200 bg-slate-50/50"
                      }`}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="mb-2 text-[10px] font-black tracking-[0.15em] text-slate-400">
                            QUESTION {index + 1} ·{" "}
                            {getSectionLabel(
                              question.section
                            )}
                          </div>

                          <p className="text-sm font-bold leading-6 text-slate-800">
                            {question.question}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 rounded-lg px-3 py-1.5 text-[10px] font-black ${
                            correct
                              ? "bg-emerald-100 text-emerald-700"
                              : attempted
                              ? "bg-red-100 text-red-700"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {correct
                            ? "CORRECT"
                            : attempted
                            ? "WRONG"
                            : "UNATTEMPTED"}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {question.options.map(
                          (option, optionIndex) => {
                            const isCorrect =
                              optionIndex ===
                              question.answer;

                            const isSelected =
                              optionIndex ===
                              userAnswer;

                            return (
                              <div
                                key={option}
                                className={`rounded-xl border p-3 text-xs font-semibold ${
                                  isCorrect
                                    ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                                    : isSelected
                                    ? "border-red-300 bg-red-100 text-red-800"
                                    : "border-slate-200 bg-white text-slate-600"
                                }`}
                              >
                                <span className="mr-2 font-black">
                                  {String.fromCharCode(
                                    65 +
                                      optionIndex
                                  )}
                                  .
                                </span>

                                {option}

                                {isCorrect && (
                                  <span className="ml-2 font-black">
                                    ✓
                                  </span>
                                )}

                                {isSelected &&
                                  !isCorrect && (
                                    <span className="ml-2 font-black">
                                      Your answer
                                    </span>
                                  )}
                              </div>
                            );
                          }
                        )}
                      </div>

                      <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-slate-200">
                        <p className="text-[10px] font-black tracking-[0.15em] text-blue-600">
                          EXPLANATION
                        </p>

                        <p className="mt-2 text-xs leading-6 text-slate-600">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          <div className="mt-7 flex justify-center">
            <button
              onClick={retakeTest}
              className="rounded-xl bg-[#071a33] px-8 py-4 text-sm font-black text-white shadow-lg transition hover:bg-[#0b2547]"
            >
              Take Another Mock Test →
            </button>
          </div>
        </div>
      </main>
    );
  }

  return null;
}