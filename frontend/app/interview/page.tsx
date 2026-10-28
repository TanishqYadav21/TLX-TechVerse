"use client";
import {
  startRealInterview,
  submitRealInterviewAnswer,
  getRealInterviewReport,
} from "../../lib/interview-api";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  Upload,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

type Mode = "upload" | "choice" | "practice" | "interview" | "result";
type InterviewType = "practice" | "live";

type PracticeQuestion = {
  question: string;
  category: string;
  difficulty: string;
  sampleAnswer: string;
  answerStrategy: string;
  followUps: string[];
};

type Question = {
  text: string;
  category:
    | "Technical"
    | "HR"
    | "Project"
    | "General"
    | "Behavioral";
  difficulty?: "Easy" | "Medium" | "Hard";
  followUp?: boolean;
  reason?: string;
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult:
    | ((event: any) => void)
    | null;
  onstart:
    | (() => void)
    | null;
  onend:
    | (() => void)
    | null;
  onerror:
    | (() => void)
    | null;
};

const generalQuestions: Question[] = [
  {
    text: "Tell me about yourself.",
    category: "General",
  },
  {
    text: "Why are you interested in this role?",
    category: "HR",
  },
  {
    text: "What are your strengths?",
    category: "HR",
  },
  {
    text: "What is one area you are currently trying to improve?",
    category: "HR",
  },
  {
    text: "Tell me about a technical problem you faced and how you solved it.",
    category: "General",
  },
  {
    text: "How do you approach learning a new technology?",
    category: "General",
  },
  {
    text: "Why should we hire you?",
    category: "HR",
  },
  {
    text: "Where do you see yourself growing professionally?",
    category: "HR",
  },
];

const skillQuestions: Record<
  string,
  string[]
> = {
  javascript: [
    "Explain the difference between let, const and var in JavaScript.",
    "What is the difference between synchronous and asynchronous JavaScript?",
    "What are promises and how do you handle them?",
  ],

  typescript: [
    "Why would you use TypeScript instead of plain JavaScript?",
    "What are interfaces and types in TypeScript?",
  ],

  react: [
    "What problem does React solve?",
    "Explain props and state in React.",
    "How would you optimize a React application that is becoming slow?",
  ],

  node: [
    "Why would you use Node.js for a backend application?",
    "How does asynchronous processing work in Node.js?",
    "How would you handle errors in a Node.js API?",
  ],

  "node.js": [
    "Why would you use Node.js for a backend application?",
    "How does asynchronous processing work in Node.js?",
    "How would you handle errors in a Node.js API?",
  ],

  express: [
    "What is Express.js and why is it commonly used with Node.js?",
    "How would you structure routes and middleware in an Express application?",
  ],

  mongodb: [
    "Why would you choose MongoDB for an application?",
    "What is the difference between a document database and a relational database?",
    "How would you improve the performance of a MongoDB query?",
  ],

  sql: [
    "What is the difference between SQL and NoSQL databases?",
    "What is a primary key and why is it important?",
    "How would you optimize a slow SQL query?",
  ],

  mysql: [
    "What is the difference between SQL and NoSQL databases?",
    "How would you optimize a slow MySQL query?",
  ],

  java: [
    "Explain the main principles of object-oriented programming in Java.",
    "What is the difference between an interface and an abstract class in Java?",
    "How does exception handling work in Java?",
  ],

  python: [
    "Why is Python commonly used for development and data-related applications?",
    "What is the difference between a list, tuple and set in Python?",
  ],

  html: [
    "What is semantic HTML and why is it important?",
    "How do HTML forms work?",
  ],

  css: [
    "Explain the difference between Flexbox and CSS Grid.",
    "How would you make a web page responsive?",
  ],

  git: [
    "Why is Git useful in software development?",
    "Explain the difference between git merge and git rebase.",
  ],

  github: [
    "How do you normally use GitHub in a development project?",
    "How would you handle a merge conflict?",
  ],

  "c++": [
    "Explain the main principles of object-oriented programming in C++.",
    "What is the difference between a pointer and a reference in C++?",
  ],

  "data structures": [
    "Which data structure would you choose when you need fast lookup by key, and why?",
    "Explain the difference between a stack and a queue.",
  ],

  dsa: [
    "How would you choose a suitable data structure for a given problem?",
    "What is the time complexity of binary search?",
  ],

  powerbi: [
    "How have you used Power BI in your projects?",
    "What is the difference between a calculated column and a measure in Power BI?",
  ],

  excel: [
    "Which Excel functions or features have you used for data analysis?",
    "How would you clean and analyze a large dataset in Excel?",
  ],

  "power bi": [
    "How have you used Power BI in your projects?",
    "What is the difference between a calculated column and a measure in Power BI?",
  ],
};

export default function InterviewPage() {
  const [mode, setMode] =
    useState<Mode>("choice");

  const [interviewType, setInterviewType] =
    useState<InterviewType>("live");

  const [resumeFile, setResumeFile] =
    useState<File | null>(null);

  const [resumeText, setResumeText] =
    useState("");

  const [isReading, setIsReading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [questions, setQuestions] =
    useState<Question[]>([]);

  const [fallbackQuestions, setFallbackQuestions] =
    useState<Question[]>([]);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [answer, setAnswer] =
    useState("");

  const [answers, setAnswers] =
    useState<string[]>([]);

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [isListening, setIsListening] =
    useState(false);

  const [voiceEnabled, setVoiceEnabled] =
    useState(true);

  const [timer, setTimer] =
    useState(0);

  const [practiceFeedback, setPracticeFeedback] =
    useState("");

  const [aiLoading, setAiLoading] = useState(false);
  const [aiReport, setAiReport] = useState<any>(null);

  const [realSessionId, setRealSessionId] = useState("");

  const [practiceQuestions, setPracticeQuestions] =
    useState<PracticeQuestion[]>([]);

  const [practiceOpen, setPracticeOpen] =
    useState<number | null>(null);
  const [interviewHistory, setInterviewHistory] = useState<
    Array<{ question: string; answer: string; category?: string }>
  >([]);

  const recognitionRef =
    useRef<SpeechRecognitionInstance | null>(
      null
    );

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const currentQuestion =
    questions[questionIndex];

  const progress =
    mode === "interview"
      ? Math.min(95, 12 + questionIndex * 7)
      : 0;

  /* =====================================================
     TIMER
  ===================================================== */

  useEffect(() => {
    if (mode !== "interview") {
      return;
    }

    const timerId =
      window.setInterval(() => {
        setTimer(
          (value) => value + 1
        );
      }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [mode]);

  /* =====================================================
     SPEECH RECOGNITION
  ===================================================== */

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

    const SpeechRecognition =
      (window as any)
        .SpeechRecognition ||
      (window as any)
        .webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onresult = (
      event: any
    ) => {
      let finalText = "";
      let interimText = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        const transcript =
          event.results[i][0]
            .transcript;

        if (
          event.results[i]
            .isFinal
        ) {
          finalText += transcript;
        } else {
          interimText += transcript;
        }
      }

      if (finalText) {
        setAnswer(
          (previous) =>
            `${previous} ${finalText}`.trim()
        );
      }

      if (interimText) {
        setPracticeFeedback(
          `Listening: ${interimText}`
        );
      } else if (!finalText) {
        setPracticeFeedback("");
      }
    };

    recognitionRef.current =
      recognition;

    return () => {
      try {
        recognition.stop();
      } catch {}

      window.speechSynthesis.cancel();
    };
  }, []);

  /* =====================================================
     CLEANUP
  ===================================================== */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  /* =====================================================
     TIMER FORMAT
  ===================================================== */

  const formattedTimer =
    useMemo(() => {
      const minutes =
        Math.floor(timer / 60)
          .toString()
          .padStart(2, "0");

      const seconds =
        (timer % 60)
          .toString()
          .padStart(2, "0");

      return `${minutes}:${seconds}`;
    }, [timer]);

  /* =====================================================
     PDF EXTRACTION
     No ATS Analyzer dependency.
     Dynamic import prevents browser-only PDF.js
     modules from running during SSR.
  ===================================================== */

  const extractPdfText = async (
    file: File
  ) => {
    const pdfjsLib =
      await import(
        "pdfjs-dist/legacy/build/pdf.mjs"
      );

    /*
      PDF.js 6 uses the .mjs worker.
      Worker is configured only after the
      browser dynamically loads PDF.js.
    */
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

    const buffer =
      await file.arrayBuffer();

    const loadingTask =
      pdfjsLib.getDocument({
        data: new Uint8Array(buffer),
      });

    const pdf =
      await loadingTask.promise;

    let text = "";

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {
      const page =
        await pdf.getPage(
          pageNumber
        );

      const content =
        await page.getTextContent();

      const pageText =
        content.items
          .map(
            (item: any) =>
              "str" in item
                ? item.str
                : ""
          )
          .join(" ");

      text +=
        pageText + "\n";
    }

    return text
      .replace(/\s+/g, " ")
      .trim();
  };

  /* =====================================================
     RESUME UPLOAD
  ===================================================== */

  const handleResumeUpload =
    async (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file =
        event.target.files?.[0];

      if (!file) {
        return;
      }

      setError("");
      setIsReading(true);

      try {
        const isPdf =
          file.type ===
            "application/pdf" ||
          file.name
            .toLowerCase()
            .endsWith(".pdf");

        if (!isPdf) {
          throw new Error(
            "Please upload your resume as a PDF file."
          );
        }

        if (
          file.size >
          10 * 1024 * 1024
        ) {
          throw new Error(
            "Resume PDF must be smaller than 10 MB."
          );
        }

        const text =
          await extractPdfText(
            file
          );

        if (text.length < 80) {
          throw new Error(
            "Could not read enough text from this PDF. Please upload a text-based resume PDF."
          );
        }

        setResumeFile(file);
        setResumeText(text);

        setMode("choice");
      } catch (err: any) {
        console.error(
          "Resume extraction error:",
          err
        );

        setError(
          err?.message ||
            "Unable to read this resume."
        );
      } finally {
        setIsReading(false);

        if (fileInputRef.current) {
          fileInputRef.current.value =
            "";
        }
      }
    };

  /* =====================================================
     QUESTION GENERATOR
  ===================================================== */

  const createQuestions = (text: string) => {
    const lower = text.toLowerCase();
    const generated: Question[] = [];

    const add = (
      question: string,
      category: Question["category"],
      difficulty: Question["difficulty"] = "Medium",
      followUp = false
    ) => {
      if (!generated.some((item) => item.text === question)) {
        generated.push({
          text: question,
          category,
          difficulty,
          followUp,
        });
      }
    };

    // 1. Natural opening
    add(
      "Good morning. Please introduce yourself.",
      "General",
      "Easy"
    );

    // 2. Education/background
    add(
      "Can you briefly tell me about your education and career goals?",
      "HR",
      "Easy"
    );

    // 3. Resume walkthrough
    add(
      "Can you briefly walk me through your resume?",
      "General",
      "Easy"
    );

    // 4. Strongest skill
    const detectedSkills = Object.keys(skillQuestions)
      .filter((skill) => lower.includes(skill))
      .filter((skill, index, arr) => arr.indexOf(skill) === index);

    const primarySkill = detectedSkills[0];

    if (primarySkill) {
      add(
        `I see ${primarySkill} on your resume. How have you used it?`,
        "Technical",
        "Easy"
      );
    } else {
      add(
        "Which technical skill on your resume are you most confident in?",
        "Technical",
        "Easy"
      );
    }

    // 5. Project introduction
    add(
      "Tell me about the project you are most confident discussing.",
      "Project",
      "Medium"
    );

    // 6. Project role
    add(
      "What exactly was your role in that project?",
      "Project",
      "Medium",
      true
    );

    // 7. Project challenge
    add(
      "What was the biggest technical challenge you faced in that project?",
      "Project",
      "Medium",
      true
    );

    // 8. Technical depth
    if (primarySkill && skillQuestions[primarySkill]?.[0]) {
      add(
        skillQuestions[primarySkill][0],
        "Technical",
        "Medium"
      );
    } else {
      add(
        "Explain one technical concept from your resume that you understand well.",
        "Technical",
        "Medium"
      );
    }

    // 9. Answer-based technical fallback
    add(
      "How would you improve one technical part of your project?",
      "Technical",
      "Hard",
      true
    );

    // 10. Problem solving
    add(
      "Tell me about a technical problem you faced and how you solved it.",
      "Technical",
      "Medium"
    );

    // 11. Behavioral
    add(
      "Tell me about a time you had to learn something quickly.",
      "Behavioral",
      "Medium"
    );

    // 12. Closing HR
    add(
      "Why should we consider you for this role?",
      "HR",
      "Medium"
    );

    return generated;
  };


  /* =====================================================
     START INTERVIEW
  ===================================================== */

  /* =====================================================
     START INTERVIEW
  ===================================================== */

  const startInterview = async (type: InterviewType) => {
    if (!resumeText.trim()) {
      setError("Please upload a resume first.");
      setMode("choice");
      return;
    }

    setError("");
    setAiLoading(true);
    setInterviewType(type);
    setQuestions([]);
    setFallbackQuestions([]);
    setQuestionIndex(0);
    setAnswers([]);
    setAnswer("");
    setInterviewHistory([]);
    setAiReport(null);
    setPracticeQuestions([]);
    setPracticeOpen(null);
    setTimer(0);
    setPracticeFeedback("");

    /* PRACTICE: keep this as study mode. */
    if (type === "practice") {
      try {
        const data = await fetch("/api/interview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "practice",
            resumeText,
            interviewType: "practice",
          }),
        }).then(async (response) => {
          const body = await response.json();
          if (!response.ok) throw new Error(body?.error || "Practice request failed.");
          return body;
        });

        const remote = Array.isArray(data?.questions) ? data.questions : [];
        const local = createQuestions(resumeText).map((q) => ({
          question: q.text,
          category: q.category,
          difficulty: q.difficulty || "Medium",
          sampleAnswer:
            "Build your answer from your actual resume: explain what you did, why you chose that approach, the result, and one specific example.",
          answerStrategy:
            "Answer directly, then support your answer with a real example from your uploaded resume.",
          followUps: [],
        }));

        const merged = [...remote, ...local].filter(
          (item, index, arr) =>
            item?.question &&
            arr.findIndex(
              (x) => x.question?.trim().toLowerCase() === item.question.trim().toLowerCase()
            ) === index
        );

        if (!merged.length) throw new Error("No practice questions could be created from this resume.");
        setPracticeQuestions(merged.slice(0, 30));
        setMode("practice");
      } catch (err) {
        console.warn("Practice AI unavailable. Using resume-based study questions.", err);
        const fallback = createQuestions(resumeText).map((q) => ({
          question: q.text,
          category: q.category,
          difficulty: q.difficulty || "Medium",
          sampleAnswer:
            "Answer using your real experience from the uploaded resume. Cover what you did, why you did it, and the result.",
          answerStrategy:
            "Keep the answer structured and use a specific example from your resume.",
          followUps: [],
        }));
        setPracticeQuestions(fallback);
        setMode("practice");
      } finally {
        setAiLoading(false);
      }
      return;
    }

    /* LIVE INTERVIEW: Python + local AI. */
    try {
      const data = await startRealInterview(resumeText);

      if (!data?.session_id || !data?.question) {
        throw new Error("The local AI interview server did not return a valid session.");
      }

      setRealSessionId(data.session_id);
      sessionStorage.setItem("real_interview_session", data.session_id);

      const firstQuestion: Question = {
        text: data.question,
        category: "General",
        difficulty:
          data.difficulty >= 4 ? "Hard" : data.difficulty >= 3 ? "Medium" : "Easy",
        followUp: false,
      };

      setQuestions([firstQuestion]);
      setQuestionIndex(0);
      setMode("interview");

      window.setTimeout(() => speak(firstQuestion.text), 450);
    } catch (err: any) {
      console.error("Local AI interview start failed:", err);
      setError(
        err?.message ||
          "Unable to start the local AI interview. Make sure Ollama and the Python server are running."
      );
      setMode("choice");
    } finally {
      setAiLoading(false);
    }
  };


  /* =====================================================
     SPEECH
  ===================================================== */

  const speak = (text: string) => {
    if (typeof window === "undefined" || !text.trim()) {
      return;
    }

    if (!voiceEnabled) {
      return;
    }

    const speech = window.speechSynthesis;

    // Stop any previous question before speaking the new one.
    speech.cancel();

    const utterance = new SpeechSynthesisUtterance(text.trim());
    const voices = speech.getVoices();

    /*
      Prefer a natural-sounding MALE English voice.
      Voice names depend on Windows/Edge/Chrome, so we use a
      priority list and then fall back gracefully.

      Preferred order:
      1. Indian male voices (best fit for an Indian placement interview)
      2. Microsoft natural male voices
      3. Google male voices
      4. Any English male-looking voice
      5. Any English voice
    */
    const maleVoicePatterns = [
      /ravi/i,
      /prabhat/i,
      /arjun/i,
      /madhur/i,
      /guy/i,
      /david/i,
      /mark/i,
      /ryan/i,
      /george/i,
      /daniel/i,
      /alex/i,
      /google.*male/i,
      /male/i,
    ];

    const indianMaleVoice = voices.find(
      (voice) =>
        /en-IN/i.test(voice.lang) &&
        maleVoicePatterns.some((pattern) => pattern.test(voice.name))
    );

    const microsoftNaturalMale = voices.find(
      (voice) =>
        /en-(IN|US|GB)/i.test(voice.lang) &&
        /microsoft/i.test(voice.name) &&
        /(natural|online|guy|david|mark|ryan)/i.test(voice.name)
    );

    const googleMaleVoice = voices.find(
      (voice) =>
        /en-(IN|US|GB)/i.test(voice.lang) &&
        /google/i.test(voice.name) &&
        maleVoicePatterns.some((pattern) => pattern.test(voice.name))
    );

    const anyEnglishMale = voices.find(
      (voice) =>
        /^en/i.test(voice.lang) &&
        maleVoicePatterns.some((pattern) => pattern.test(voice.name))
    );

    const preferredVoice =
      indianMaleVoice ||
      microsoftNaturalMale ||
      googleMaleVoice ||
      anyEnglishMale ||
      voices.find((voice) => /en-IN/i.test(voice.lang)) ||
      voices.find((voice) => /en-US/i.test(voice.lang)) ||
      voices.find((voice) => /^en/i.test(voice.lang));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = "en-US";
    }

    // Calm, professional male interviewer style.
    utterance.rate = 0.88;
    utterance.pitch = 0.82;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    speech.speak(utterance);
  };

  /* =====================================================
     MICROPHONE
  ===================================================== */

  const startListening =
    () => {
      if (
        !recognitionRef.current
      ) {
        setPracticeFeedback(
          "Voice input is not supported in this browser. Please use Chrome or Edge."
        );

        return;
      }

      setPracticeFeedback("");

      try {
        recognitionRef.current.start();
      } catch {}
    };

  const stopListening =
    () => {
      try {
        recognitionRef.current?.stop();
      } catch {}

      setIsListening(false);
    };

  /* =====================================================
     SUBMIT ANSWER
  ===================================================== */

  const submitAnswer = async () => {
    const cleanAnswer = answer.trim();

    if (!cleanAnswer || !currentQuestion) {
      setPracticeFeedback("Please answer the question before continuing.");
      return;
    }

    const sessionId = realSessionId || sessionStorage.getItem("real_interview_session");
    if (!sessionId) {
      setError("Interview session is missing. Please start a new Live Interview.");
      return;
    }

    stopListening();
    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const updatedHistory = [
      ...interviewHistory,
      {
        question: currentQuestion.text,
        answer: cleanAnswer,
        category: currentQuestion.category,
      },
    ];

    setAnswers((previous) => [...previous, cleanAnswer]);
    setInterviewHistory(updatedHistory);
    setAnswer("");
    setPracticeFeedback("");
    setAiLoading(true);
    setError("");

    try {
      const data = await submitRealInterviewAnswer(sessionId, cleanAnswer);

      if (!data?.question) {
        throw new Error("The local AI did not return the next question.");
      }

      if (data.action === "finish" || data.stage === "closing" && /concludes the interview/i.test(data.question)) {
        await finishInterviewWithHistory(updatedHistory);
        return;
      }

      const nextQuestion: Question = {
        text: data.question,
        category:
          data.stage?.includes("project") ? "Project" :
          data.stage?.includes("technical") ? "Technical" :
          data.stage === "behavioral" ? "Behavioral" :
          data.stage === "background" || data.stage === "resume" || data.stage === "closing" ? "HR" :
          "General",
        difficulty:
          data.difficulty >= 4 ? "Hard" : data.difficulty >= 3 ? "Medium" : "Easy",
        followUp: data.action === "follow_up" || data.action === "deep_dive",
        reason: data.action === "deep_dive"
          ? "The candidate demonstrated enough understanding for a deeper question."
          : undefined,
      };

      setQuestions((previous) => [...previous, nextQuestion]);
      setQuestionIndex((previous) => previous + 1);

      setPracticeFeedback(
        nextQuestion.followUp
          ? "Good. The interviewer is going deeper based on your answer."
          : "Thank you. Let's continue."
      );

      window.setTimeout(() => speak(nextQuestion.text), 450);
    } catch (err: any) {
      console.error("Local AI next question failed:", err);
      setError(
        err?.message ||
          "The local AI interview server could not generate the next question."
      );
      setAnswer(cleanAnswer);
    } finally {
      setAiLoading(false);
    }
  };

  const finishInterviewWithHistory = async (
    history: Array<{
      question: string;
      answer: string;
      category?: string;
    }>
  ) => {
    if (!history.length) {
      setError(
        "Please answer at least one question before finishing."
      );
      return;
    }

    stopListening();
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setAiLoading(true);
    setError("");

    try {
      const sessionId = realSessionId || sessionStorage.getItem("real_interview_session");
      if (!sessionId) {
        throw new Error("Interview session is missing.");
      }

      const report = await getRealInterviewReport(sessionId);

      const normalizedReport = {
        overallScore: Number(report?.overallScore) || 0,
        recommendation: report?.recommendation || "Interview evaluated",
        summary: report?.summary || "The AI evaluated your actual interview answers.",
        scores: {
          technical: Number(report?.technical) || 0,
          projects: Number(report?.projectUnderstanding) || 0,
          communication: Number(report?.communication) || 0,
          problemSolving: Number(report?.problemSolving) || 0,
          hrBehavioral: Number(report?.behavioral) || 0,
        },
        strengths: Array.isArray(report?.strengths) ? report.strengths : [],
        improvements: Array.isArray(report?.improvements) ? report.improvements : [],
        weakAnswers: [],
        recommendedTopics: [],
        finalFeedback: report?.summary || "Review the improvement areas and practice again.",
      };

      setAiReport(normalizedReport);
      setMode("result");
    } catch (err: any) {
      console.warn(
        "AI report unavailable. Showing a local interview summary.",
        err
      );

      const answered =
        history.filter(
          (item) =>
            item.answer.trim().length > 20
        ).length;

      const score = Math.min(
        100,
        Math.round(
          (answered /
            Math.max(history.length, 1)) *
            100
        )
      );

      setAiReport({
        overallScore: score,
        recommendation:
          score >= 80
            ? "Hire"
            : score >= 60
              ? "Consider"
              : "Needs Improvement",
        summary:
          "Your interview was completed. Review the improvement points and practice the questions again.",
        scores: {
          technical: score,
          projects: score,
          communication: score,
          problemSolving: score,
          hrBehavioral: score,
        },
        strengths: [
          "Completed the interview.",
          "Answered resume-based questions.",
        ],
        improvements: [
          "Give structured answers with clear examples.",
          "Be ready to explain every skill and project on your resume.",
        ],
        weakAnswers: [],
        recommendedTopics: [
          "Resume projects",
          "Technical fundamentals",
          "HR questions",
        ],
        finalFeedback:
          "Practice concise answers and be prepared for follow-up questions about your projects and technical skills.",
        fallback: true,
      });

      setMode("result");
    } finally {
      setAiLoading(false);
    }
  };


  const finishInterview = async () => {
    await finishInterviewWithHistory(
      interviewHistory
    );
  };


  /* =====================================================
     RESTART WITH FRESH QUESTIONS
  ===================================================== */

  const restartInterview = async () => {
    window.speechSynthesis.cancel();
    stopListening();
    setQuestions([]);
    setFallbackQuestions([]);
    setQuestionIndex(0);
    setAnswers([]);
    setAnswer("");
    setInterviewHistory([]);
    setAiReport(null);
    setRealSessionId("");
    sessionStorage.removeItem("real_interview_session");
    setTimer(0);
    setPracticeFeedback("");
    setError("");
    await startInterview(interviewType);
  };

  /* =====================================================
     REMOVE RESUME
  ===================================================== */

  const removeResume =
    () => {
      window.speechSynthesis.cancel();
      stopListening();

      setResumeFile(null);
      setResumeText("");
      setQuestions([]);
      setFallbackQuestions([]);
      setAnswer("");
      setAnswers([]);
      setRealSessionId("");
      sessionStorage.removeItem("real_interview_session");
      setError("");
      setMode("choice");
    };

  /* =====================================================
     UPLOAD SCREEN
  ===================================================== */

  if (mode === "upload") {
    return (
      <PageShell>
        <Topbar />

        <div className="mx-auto max-w-[950px] px-4 py-10 sm:px-6 lg:py-14">

          <div className="mx-auto max-w-[680px] text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-xl shadow-blue-500/20">
              <Bot size={42} />
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700">
              <Sparkles size={13} />
              AI Interview
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Your resume.
              <span className="text-blue-600">
                Your interview.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Upload your resume and the interviewer will ask questions based on your actual skills, projects and experience.
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-[760px]">

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={
                handleResumeUpload
              }
              className="hidden"
            />

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              disabled={isReading}
              className="group w-full rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8 text-center shadow-sm transition hover:border-blue-400 hover:bg-blue-50/20 sm:p-12"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-105">

                {isReading ? (
                  <div className="h-7 w-7 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
                ) : (
                  <Upload size={28} />
                )}

              </div>

              <h2 className="mt-5 text-lg font-bold">
                {isReading
                  ? "Reading your resume..."
                  : "Upload your resume"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {isReading
                  ? "Please wait while we extract the resume content."
                  : "Drop your PDF here or click to browse"}
              </p>

              <p className="mt-3 text-[11px] text-slate-400">
                PDF only · Maximum 10 MB
              </p>
            </button>

            {error && (
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <X
                  size={18}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  {error}
                </span>
              </div>
            )}
          </div>

          <div className="mx-auto mt-6 grid max-w-[760px] gap-3 sm:grid-cols-3">

            <MiniFeature
              icon={
                <FileText size={17} />
              }
              title="Resume based"
              text="Questions use your resume."
            />

            <MiniFeature
              icon={
                <Volume2 size={17} />
              }
              title="AI voice"
              text="Hear the interviewer."
            />

            <MiniFeature
              icon={
                <Mic size={17} />
              }
              title="Live answers"
              text="Answer with your voice."
            />

          </div>
        </div>
      </PageShell>
    );
  }

  /* =====================================================
     MODE CHOICE / INTERVIEW LANDING
  ===================================================== */

  if (mode === "choice") {
    return (
      <PageShell>
        <Topbar />

        <div className="mx-auto max-w-[1000px] px-4 py-10 sm:px-6 lg:py-14">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-xl shadow-blue-500/20">
              <Bot size={42} />
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700">
              <Sparkles size={13} />
              AI Interview
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Practice like a real interview.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Upload your resume once, then choose study mode or a live adaptive interview where the AI follows your answers and goes deeper when you demonstrate knowledge.
            </p>
          </div>

          {!resumeText ? (
            <div className="mx-auto mt-9 max-w-[760px]">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleResumeUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isReading}
                className="group w-full rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8 text-center shadow-sm transition hover:border-blue-400 hover:bg-blue-50/20 sm:p-12"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {isReading ? (
                    <div className="h-7 w-7 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
                  ) : (
                    <Upload size={28} />
                  )}
                </div>
                <h2 className="mt-5 text-lg font-bold">
                  {isReading ? "Reading your resume..." : "Upload resume to begin"}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  PDF only · Maximum 10 MB
                </p>
              </button>
              {error && <p className="mt-4 text-center text-xs font-semibold text-red-600">{error}</p>}
            </div>
          ) : (
            <>
              <div className="mx-auto mt-8 flex max-w-[900px] flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <FileText size={23} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Resume ready</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">{resumeFile?.name || "Uploaded resume"}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeResume}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  <X size={14} /> Change Resume
                </button>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <ModeCard
                  active={interviewType === "practice"}
                  icon={<Sparkles size={25} />}
                  title="Practice Mode"
                  description="Study resume-specific questions, answer guidance and possible follow-ups. No live interview pressure."
                  points={["Resume-specific questions", "Strong answer guidance", "Possible follow-ups"]}
                  onClick={() => setInterviewType("practice")}
                />
                <ModeCard
                  active={interviewType === "live"}
                  icon={<Bot size={25} />}
                  title="Live AI Interview"
                  description="A real interview flow: introduction, resume, project, technical depth, problem solving and behavioral questions."
                  points={["Adaptive cross-questions", "Deep dive on strong answers", "Final performance report"]}
                  onClick={() => setInterviewType("live")}
                />
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={() => startInterview(interviewType)}
                  disabled={aiLoading}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:opacity-60"
                >
                  {aiLoading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
                  {aiLoading ? "Preparing..." : interviewType === "live" ? "Start Live Interview" : "Open Practice"}
                  {!aiLoading && <ChevronRight size={17} />}
                </button>
              </div>

              {error && <p className="mt-4 text-center text-xs font-semibold text-red-600">{error}</p>}
            </>
          )}
        </div>
      </PageShell>
    );
  }

  /* =====================================================
     RESULT
  ===================================================== */

  if (mode === "practice") {
    return (
      <PageShell>
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Resume-based practice
              </p>
              <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">
                Interview Questions & Answers
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Study questions that can be asked from your uploaded resume. This mode does not start a live AI interview.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMode("choice")}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50"
            >
              Back
            </button>
          </div>

          <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
            <span className="font-bold">Resume:</span> {resumeFile?.name || "Uploaded resume"}
            <span className="mx-2 text-blue-300">•</span>
            <span>{practiceQuestions.length} questions</span>
          </div>

          <div className="space-y-4">
            {practiceQuestions.map((item, index) => {
              const open = practiceOpen === index;
              return (
                <div
                  key={`${item.question}-${index}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setPracticeOpen(open ? null : index)}
                    className="flex w-full items-start gap-4 p-5 text-left hover:bg-slate-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-blue-600">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                          {item.category}
                        </span>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
                          {item.difficulty}
                        </span>
                      </span>
                      <span className="block text-sm font-bold leading-6 text-slate-800">
                        {item.question}
                      </span>
                    </span>
                    <ChevronRight
                      size={18}
                      className={`mt-1 shrink-0 text-slate-400 transition-transform ${open ? "rotate-90" : ""}`}
                    />
                  </button>

                  {open && (
                    <div className="border-t border-slate-100 bg-slate-50/70 p-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                            Strong answer should cover
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.sampleAnswer}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-[10px] font-black uppercase tracking-wider text-blue-600">
                            Answer strategy
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.answerStrategy}
                          </p>
                        </div>
                      </div>

                      {item.followUps?.length > 0 && (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-[10px] font-black uppercase tracking-wider text-violet-600">
                            Possible follow-up questions
                          </p>
                          <div className="mt-3 space-y-2">
                            {item.followUps.map((follow, followIndex) => (
                              <p key={followIndex} className="text-sm text-slate-600">
                                • {follow}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </PageShell>
    );
  }

  if (mode === "result") {
    const answered = answers.filter((item) => item.trim()).length;
    const reportScore = Number(aiReport?.overallScore) || 0;

    return (
      <PageShell>
        <Topbar />

        <div className="mx-auto max-w-[980px] px-4 py-9 sm:px-6 lg:py-12">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={42} />
            </div>
            <h1 className="mt-5 text-3xl font-black">Interview Complete</h1>
            <p className="mt-2 text-sm text-slate-500">
              Your performance was evaluated from your actual interview answers.
            </p>
          </div>

          {aiReport ? (
            <>
              <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    AI interview score
                  </p>
                  <div className="mt-3">
                    <span className="text-7xl font-black text-blue-600">{reportScore}</span>
                    <span className="text-xl font-bold text-slate-400">/100</span>
                  </div>
                  <div className="mx-auto mt-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
                    {aiReport.recommendation || "Interview evaluated"}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    {aiReport.summary || "The AI evaluated your interview responses."}
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <ResultBox title="Questions" value={`${questions.length}`} />
                    <ResultBox title="Answered" value={`${answered}`} />
                    <ResultBox title="Duration" value={formattedTimer} />
                    <ResultBox
                      title="Follow-ups"
                      value={`${Math.max(0, interviewHistory.length - 1)}`}
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h2 className="text-lg font-bold">Performance breakdown</h2>
                  <div className="mt-5 space-y-4">
                    <ScoreBar label="Technical" value={aiReport.scores?.technical} />
                    <ScoreBar label="Projects" value={aiReport.scores?.projects} />
                    <ScoreBar label="Communication" value={aiReport.scores?.communication} />
                    <ScoreBar label="Problem solving" value={aiReport.scores?.problemSolving} />
                    <ScoreBar label="HR & behavioral" value={aiReport.scores?.hrBehavioral} />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <ReportList title="Your strengths" items={aiReport.strengths || []} />
                <ReportList title="What to improve" items={aiReport.improvements || []} />
              </div>

              {aiReport.weakAnswers?.length > 0 && (
                <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h2 className="text-lg font-bold">Answer improvement</h2>
                  <div className="mt-5 space-y-4">
                    {aiReport.weakAnswers.map((item: any, index: number) => (
                      <div key={`${item.question}-${index}`} className="rounded-2xl border border-slate-200 p-4">
                        <p className="text-sm font-bold text-slate-800">{item.question}</p>
                        <p className="mt-2 text-xs leading-5 text-red-600">{item.issue}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          <span className="font-bold text-slate-700">Better approach:</span>{" "}
                          {item.betterApproach}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-base font-bold text-blue-900">Final interviewer feedback</h2>
                <p className="mt-2 text-sm leading-6 text-blue-800">
                  {aiReport.finalFeedback || "Keep practicing with resume-based questions and cross-questions."}
                </p>
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm text-slate-500">AI report is not available.</p>
            </div>
          )}

          {error && <p className="mt-4 text-center text-xs font-semibold text-red-600">{error}</p>}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={restartInterview}
              disabled={aiLoading}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60"
            >
              <RotateCcw size={16} />
              New AI Interview
            </button>
            <button
              type="button"
              onClick={() => setMode("choice")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Change Mode
            </button>
          </div>
        </div>
      </PageShell>
    );
  }

  /* =====================================================
     INTERVIEW SCREEN
  ===================================================== */

  return (
    <PageShell>

      <Topbar
        interview
        timer={formattedTimer}
        question={`${questionIndex + 1} / ${questions.length}`}
      />

      <div className="h-1 bg-slate-200">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mx-auto max-w-[1050px] px-4 py-6 sm:px-6 lg:py-8">

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <div className="flex flex-col items-center">

            {/* ROBOT */}

            <div
              className={`relative flex h-32 w-32 items-center justify-center rounded-[36px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-2xl shadow-blue-500/25 transition-all duration-500 sm:h-36 sm:w-36 ${
                isSpeaking
                  ? "scale-105"
                  : ""
              }`}
            >

              {isSpeaking && (
                <>
                  <span className="absolute -inset-3 animate-pulse rounded-[42px] border border-blue-300/40" />

                  <span className="absolute -inset-6 rounded-[48px] border border-blue-200/20" />
                </>
              )}

              <Bot
                size={68}
                strokeWidth={1.4}
                className="relative z-10"
              />

            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-500">

              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isSpeaking
                    ? "animate-pulse bg-blue-500"
                    : isListening
                      ? "animate-pulse bg-emerald-500"
                      : "bg-slate-300"
                }`}
              />

              {isSpeaking
                ? "AI is speaking..."
                : isListening
                  ? "Listening to you..."
                  : "AI Interviewer"}

            </div>

            {/* QUESTION */}

            <div className="mt-6 w-full max-w-[780px] rounded-2xl bg-slate-50 p-5 text-center sm:p-7">

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">

                <Sparkles size={13} />

                {
                  currentQuestion?.category
                }

              </div>

              <p className="mt-3 text-lg font-bold leading-8 text-slate-800 sm:text-xl">
                {
                  currentQuestion?.text
                }
              </p>

              <div className="mt-5 flex h-8 items-center justify-center gap-1">

                {Array.from({
                  length: 11,
                }).map(
                  (_, index) => (
                    <span
                      key={index}
                      className="w-1 rounded-full bg-blue-500 transition-all"
                      style={{
                        height:
                          isSpeaking
                            ? `${
                                8 +
                                ((index *
                                  7) %
                                  22)
                              }px`
                            : "5px",
                      }}
                    />
                  )
                )}

              </div>
            </div>

            <div className="mt-4 flex gap-2">

              <button
                type="button"
                onClick={() => {
                  setVoiceEnabled(
                    (value) =>
                      !value
                  );

                  if (
                    voiceEnabled
                  ) {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(
                      false
                    );
                  }
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-50"
              >
                {voiceEnabled ? (
                  <Volume2
                    size={14}
                  />
                ) : (
                  <VolumeX
                    size={14}
                  />
                )}

                {voiceEnabled
                  ? "Voice"
                  : "Muted"}
              </button>

              <button
                type="button"
                onClick={() =>
                  speak(
                    currentQuestion.text
                  )
                }
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-50"
              >
                <Volume2
                  size={14}
                />

                Repeat
              </button>

            </div>
          </div>
        </div>

        {/* ANSWER */}

        <div className="mt-5 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-base font-bold">
                Your answer
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                {interviewType ===
                "live"
                  ? "Answer naturally. The interviewer is listening."
                  : "Practice your answer and submit when ready."}
              </p>

            </div>

            {isListening && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                Listening

              </span>
            )}
          </div>

          <textarea
            value={answer}
            onChange={(event) =>
              setAnswer(
                event.target.value
              )
            }
            placeholder="Your spoken answer will appear here..."
            className="mt-4 min-h-[150px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          {practiceFeedback && (
            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs leading-5 text-blue-700">
              {practiceFeedback}
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">

            <button
              type="button"
              onClick={
                isListening
                  ? stopListening
                  : startListening
              }
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold ${
                isListening
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              {isListening ? (
                <>
                  <MicOff
                    size={17}
                  />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic
                    size={17}
                  />
                  Start Answer
                </>
              )}
            </button>

            <button
              type="button"
              onClick={submitAnswer}
              disabled={aiLoading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {aiLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  AI thinking...
                </>
              ) : (
                <>
                  Submit Answer
                  <ChevronRight size={17} />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={finishInterview}
              disabled={aiLoading || interviewHistory.length === 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CheckCircle2 size={17} />
              Finish Interview
            </button>

          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1 text-[11px] text-slate-400">

          <span>
            {
              currentQuestion?.category
            }
          </span>

          <span>
            {progress}% complete
          </span>

        </div>
      </div>
    </PageShell>
  );
}

/* =====================================================
   TOPBAR
===================================================== */

function Topbar({
  interview = false,
  timer,
  question,
}: {
  interview?: boolean;
  timer?: string;
  question?: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-7 lg:px-8">

        {/* LEFT — BRAND */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
            <Bot size={21} strokeWidth={2.2} />
          </div>

          <div className="leading-none">
            <p className="text-[16px] font-bold tracking-tight text-slate-900">
              AI Interview
            </p>

            <p className="mt-1.5 text-[11px] font-medium text-slate-400">
              Practice & prepare for placements
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2.5">

          {interview ? (
            <>
              {/* LIVE STATUS */}
              <div className="hidden items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 sm:flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[11px] font-bold text-emerald-700">
                  Live Interview
                </span>
              </div>

              {/* TIMER */}
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Clock3
                  size={15}
                  className="text-slate-400"
                />

                <span className="text-xs font-bold tabular-nums text-slate-700">
                  {timer}
                </span>
              </div>

              {/* QUESTION */}
              <div className="rounded-xl bg-blue-600 px-3.5 py-2 text-[11px] font-bold text-white shadow-sm shadow-blue-600/20">
                {question}
              </div>
            </>
          ) : (
            /* READY STATUS */
            <div className="hidden items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3.5 py-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              <span className="text-[11px] font-bold text-blue-700">
                Ready to Interview
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* =====================================================
   PAGE SHELL
===================================================== */

function PageShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {children}
    </main>
  );
}

/* =====================================================
   MINI FEATURE
===================================================== */

function MiniFeature({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div>

          <p className="text-xs font-bold">
            {title}
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400">
            {text}
          </p>

        </div>

      </div>
    </div>
  );
}

/* =====================================================
   MODE CARD
===================================================== */

function ModeCard({
  active,
  icon,
  title,
  description,
  points,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-3xl border p-6 text-left transition ${
        active
          ? "border-blue-500 bg-blue-50/40 shadow-lg shadow-blue-500/10"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >

      {active && (
        <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
          <CheckCircle2
            size={16}
          />
        </span>
      )}

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 space-y-2">

        {points.map(
          (point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600"
            >
              <CheckCircle2
                size={14}
                className="text-emerald-500"
              />

              {point}
            </div>
          )
        )}

      </div>
    </button>
  );
}

/* =====================================================
   RESULT BOX
===================================================== */

function ResultBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 text-center">

      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-xl font-black">
        {value}
      </p>

    </div>
  );
}

/* =====================================================
   FEEDBACK ROW
===================================================== */

function FeedbackRow({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 p-4">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <CheckCircle2
          size={16}
        />
      </div>

      <div>

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {text}
        </p>

      </div>
    </div>
  );
}

/* =====================================================
   SCORE BAR
===================================================== */

function ScoreBar({
  label,
  value,
}: {
  label: string;
  value?: number;
}) {
  const score = typeof value === "number"
    ? Math.max(0, Math.min(100, value))
    : 0;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-600">{label}</span>
        <span className="text-xs font-bold text-slate-800">{score}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

/* =====================================================
   REPORT LIST
===================================================== */

function ReportList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.length ? items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
            <p className="text-xs leading-5 text-slate-600">{item}</p>
          </div>
        )) : (
          <p className="text-xs text-slate-400">No specific points were returned.</p>
        )}
      </div>
    </div>
  );
}

/* =====================================================
   PRACTICE FEEDBACK
===================================================== */

function getPracticeFeedback(
  answer: string
) {
  const length =
    answer
      .trim()
      .split(/\s+/)
      .length;

  if (length < 8) {
    return "Try giving a little more detail. Explain what you did, why you chose that approach and what the result was.";
  }

  if (length < 25) {
    return "Good start. Add a specific example from your project or experience to make the answer stronger.";
  }

  return "Good answer length. Keep your response structured and support important points with specific examples.";
}

/* =====================================================
   SHUFFLE
===================================================== */

function shuffle<T>(
  array: T[]
): T[] {
  const copy = [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [
      copy[i],
      copy[j],
    ] = [
      copy[j],
      copy[i],
    ];
  }

  return copy;
}