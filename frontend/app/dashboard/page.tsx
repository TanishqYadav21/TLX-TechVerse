"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import ProgressCard from "@/components/dashboard/ProgressCard";

import {
  Code2,
  Brain,
  Trophy,
  FileText,
  Flame,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Briefcase,
  Bot,
  CalendarDays,
  Award,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-slate-500">Loading dashboard...</div>
      </div>
    );
  }

  const weeklyActivity = [45, 70, 58, 90, 62, 80, 72];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.08),transparent_30%),linear-gradient(135deg,#f8fafc_0%,#eef4ff_48%,#f7f3ff_100%)]">
      {/* Ambient background lights */} 
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[18%] top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[35%] h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Sidebar />
        <Topbar />
      </div>

      <main className="relative z-10 ml-64 min-h-screen p-8">

        {/* ================= WELCOME ================= */}

        <div className="flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              AI Powered Dashboard
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Welcome back, {user.name} 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Let&apos;s continue your placement preparation.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md md:flex">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-sm font-semibold text-emerald-700">
              Placement Ready
            </span>
          </div>
        </div>

        {/* ================= PROGRESS ================= */}

        <div className="mt-6">
          <ProgressCard />
        </div>

        {/* ================= STATS ================= */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Coding Solved"
            value="154"
            icon={Code2}
            color="bg-blue-600"
          />

          <StatCard
            title="Aptitude Score"
            value="82%"
            icon={Brain}
            color="bg-green-600"
          />

          <StatCard
            title="Resume Score"
            value="91"
            icon={FileText}
            color="bg-orange-500"
          />

          <StatCard
            title="Leaderboard"
            value="#27"
            icon={Trophy}
            color="bg-purple-600"
          />
        </div>

        {/* =====================================================
            1. PLACEMENT READINESS
        ====================================================== */}

        <motion.section
          whileHover={{ y: -3 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr]">

            {/* Score */}
            <div className="flex items-center gap-6">
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 p-1 shadow-lg shadow-blue-500/20">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-3xl font-bold text-slate-900">
                    84%
                  </span>

                  <span className="text-[11px] font-medium text-slate-400">
                    READY
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Target
                    size={18}
                    className="text-blue-600"
                  />

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Placement Readiness
                  </p>
                </div>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  You&apos;re almost placement ready
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Your overall preparation is strong. Focus on interviews
                  to improve your readiness further.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ReadinessBar
                title="Coding"
                value={90}
                color="bg-blue-600"
              />

              <ReadinessBar
                title="Aptitude"
                value={82}
                color="bg-emerald-600"
              />

              <ReadinessBar
                title="Resume"
                value={91}
                color="bg-orange-500"
              />

              <ReadinessBar
                title="Interview"
                value={68}
                color="bg-violet-600"
              />
            </div>
          </div>
        </motion.section>

        {/* ================= DAILY GOAL + AI ================= */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Daily Goal */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md">
                    <Target size={14} />
                    Daily Challenge
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    Today&apos;s Goal
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Complete your coding, aptitude and interview practice
                    to stay placement ready.
                  </p>
                </div>

                <div className="hidden rounded-2xl bg-blue-50 p-4 sm:flex">
                  <Target
                    className="text-blue-600"
                    size={28}
                  />
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Today&apos;s progress
                  </span>

                  <span className="font-semibold text-slate-900">
                    4 / 5 Tasks
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">

                <TaskItem
                  icon={Code2}
                  title="Coding"
                  value="5 / 5"
                  bg="bg-blue-100"
                  text="text-blue-600"
                />

                <TaskItem
                  icon={Brain}
                  title="Aptitude"
                  value="15 / 20"
                  bg="bg-green-100"
                  text="text-green-600"
                />

                <TaskItem
                  icon={Clock3}
                  title="Interview"
                  value="Pending"
                  bg="bg-orange-100"
                  text="text-orange-600"
                />

              </div>
            </div>
          </motion.div>

          {/* AI Recommendation */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 p-7 text-white shadow-lg"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium">
                <Bot size={14} />
                AI Recommendation
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                Improve Your Weak Area
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Your coding performance is strong. Focus more on aptitude
                and mock interviews this week.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-sm">
                    Complete 10 aptitude questions
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-sm">
                    Attempt one AI mock interview
                  </span>
                </div>

              </div>

              <button
                onClick={() => {
                  window.location.href = "/aptitude";
                }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Continue Practice
                <ArrowUpRight size={18} />
              </button>

            </div>
          </motion.div>
        </div>

        {/* =====================================================
            2. UPCOMING TASKS
        ====================================================== */}

        <motion.section
          whileHover={{ y: -3 }}
          className="mt-8 rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
        >
          <div className="flex items-center justify-between">

            <div>
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={19}
                  className="text-blue-600"
                />

                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Your Schedule
                </p>
              </div>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Upcoming Tasks
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Stay consistent with your preparation schedule.
              </p>
            </div>

            <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 sm:block">
              4 Tasks
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <ScheduleCard
              icon={Code2}
              title="DSA Practice"
              subtitle="10 coding questions"
              time="30 min"
              color="blue"
            />

            <ScheduleCard
              icon={Brain}
              title="Aptitude Mock"
              subtitle="Quant + Reasoning"
              time="20 min"
              color="green"
            />

            <ScheduleCard
              icon={Bot}
              title="AI Interview"
              subtitle="Technical round"
              time="15 min"
              color="violet"
            />

            <ScheduleCard
              icon={FileText}
              title="Resume Review"
              subtitle="Improve ATS score"
              time="10 min"
              color="orange"
            />

          </div>
        </motion.section>

        {/* ================= WEEKLY ACTIVITY ================= */}

        <motion.section
          whileHover={{ y: -3 }}
          className="mt-8 rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
        >
          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Weekly Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your preparation activity over the last 7 days
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
              <TrendingUp size={15} />
              +14%
            </div>
          </div>

          <div className="mt-7 flex h-36 items-end justify-between gap-4">

            {weeklyActivity.map((value, index) => (
              <div
                key={index}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <div className="mb-2 text-xs font-medium text-slate-400">
                  {value}%
                </div>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="w-full max-w-10 rounded-t-xl bg-gradient-to-t from-blue-600 to-indigo-400"
                />

                <span className="mt-3 text-xs font-medium text-slate-500">
                  {days[index]}
                </span>
              </div>
            ))}

          </div>
        </motion.section>

        {/* =====================================================
            3. SKILL ANALYTICS
        ====================================================== */}

        <motion.section
          whileHover={{ y: -3 }}
          className="mt-8 rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
        >
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp
                size={19}
                className="text-blue-600"
              />

              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Performance
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Skill Analytics
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Understand where you are strong and where you need more
              practice.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">

            <SkillBar
              icon={Code2}
              title="Coding & DSA"
              value={90}
              color="bg-blue-600"
            />

            <SkillBar
              icon={Brain}
              title="Aptitude"
              value={82}
              color="bg-emerald-600"
            />

            <SkillBar
              icon={FileText}
              title="Resume"
              value={91}
              color="bg-orange-500"
            />

            <SkillBar
              icon={Bot}
              title="Interview"
              value={68}
              color="bg-violet-600"
            />

          </div>
        </motion.section>

        {/* =====================================================
            4. ACHIEVEMENTS + AI INSIGHTS
        ====================================================== */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Achievements */}
          <motion.section
            whileHover={{ y: -3 }}
            className="rounded-3xl border border-white/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]"
          >
            <div className="flex items-center justify-between">

              <div>
                <div className="flex items-center gap-2">
                  <Award
                    size={19}
                    className="text-orange-500"
                  />

                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                    Milestones
                  </p>
                </div>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Recent Achievements
                </h2>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                4 Earned
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <Achievement
                icon={Code2}
                title="50 Problems"
                subtitle="Coding milestone"
                color="blue"
              />

              <Achievement
                icon={Flame}
                title="10 Day Streak"
                subtitle="Consistency"
                color="orange"
              />

              <Achievement
                icon={Brain}
                title="80% Accuracy"
                subtitle="Aptitude"
                color="green"
              />

              <Achievement
                icon={FileText}
                title="90+ Resume"
                subtitle="ATS milestone"
                color="violet"
              />

            </div>
          </motion.section>

         {/* AI Insights */}
<motion.section
  whileHover={{ y: -3 }}
  className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.24),transparent_28%),linear-gradient(135deg,#0f172a_0%,#172554_48%,#312e81_100%)] p-7 text-white shadow-[0_20px_55px_rgba(30,41,59,0.22)] ring-1 ring-white/10"
>
  {/* Glow */}
  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
        <Bot
          size={21}
          className="text-blue-300"
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
          AI Career Mentor
        </p>

        <h2 className="mt-0.5 text-xl font-bold leading-tight text-white">
          Personalized Insight
        </h2>
      </div>
    </div>

    {/* Description */}
    <p className="mt-6 text-sm leading-6 text-slate-300">
      You are performing well in coding and resume preparation.
      Your biggest opportunity right now is interview confidence.
      Try at least two mock interviews this week.
    </p>

    {/* Readiness */}
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5">

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">
          Interview readiness
        </span>

        <span className="text-sm font-bold text-blue-300">
          68%
        </span>
      </div>

      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "68%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
        />
      </div>

    </div>

    {/* Action */}
    <button
      onClick={() => {
        window.location.href = "/interview";
      }}
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-all duration-200 hover:gap-3 hover:text-white"
    >
      Practice AI Interview

      <ArrowUpRight size={17} />
    </button>

  </div>
</motion.section>
</div>

        {/* =====================================================
            5. STREAK / RANK / PLACEMENT
        ====================================================== */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {/* Streak */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-orange-200/70 bg-gradient-to-br from-orange-50/90 via-white/90 to-white/70 p-6 shadow-[0_12px_35px_rgba(249,115,22,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(249,115,22,0.14)]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                <Flame
                  size={23}
                  className="text-orange-500"
                />
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                Active
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              12
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Day Streak
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Best
              </span>

              <span className="font-semibold text-orange-600">
                27 Days
              </span>
            </div>
          </motion.div>

          {/* Rank */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-50/90 via-white/90 to-white/70 p-6 shadow-[0_12px_35px_rgba(37,99,235,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.14)]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <Trophy
                  size={23}
                  className="text-blue-600"
                />
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                ▲ +12
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              #128
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Global Rank
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Percentile
              </span>

              <span className="font-semibold text-blue-600">
                Top 8%
              </span>
            </div>
          </motion.div>

          {/* Placement */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50/90 via-white/90 to-white/70 p-6 shadow-[0_12px_35px_rgba(124,58,237,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(124,58,237,0.14)]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                <Briefcase
                  size={23}
                  className="text-violet-600"
                />
              </div>

              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
                8 Active
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              3
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Applications
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Interviews
              </span>

              <span className="font-semibold text-violet-600">
                2 Upcoming
              </span>
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}

/* ============================================================
   HELPERS
============================================================ */

function ReadinessBar({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          {title}
        </span>

        <span className="text-sm font-bold text-slate-900">
          {value}%
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

function TaskItem({
  icon: Icon,
  title,
  value,
  bg,
  text,
}: {
  icon: any;
  title: string;
  value: string;
  bg: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur-sm">
      <div className={`rounded-xl p-2 ${bg}`}>
        <Icon size={18} className={text} />
      </div>

      <div>
        <p className="text-xs text-slate-400">
          {title}
        </p>

        <p className="font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function ScheduleCard({
  icon: Icon,
  title,
  subtitle,
  time,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  time: string;
  color: "blue" | "green" | "violet" | "orange";
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    violet: "bg-violet-50 text-violet-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="group rounded-2xl border border-slate-200/70 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.10)]">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles[color]}`}
        >
          <Icon size={19} />
        </div>

        <span className="text-xs font-semibold text-slate-400">
          {time}
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

function SkillBar({
  icon: Icon,
  title,
  value,
  color,
}: {
  icon: any;
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/65 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.09)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon size={19} className="text-slate-600" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">
              {title}
            </span>

            <span className="text-sm font-bold text-slate-900">
              {value}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`h-full rounded-full ${color}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Achievement({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: "blue" | "orange" | "green" | "violet";
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-100 hover:bg-white hover:shadow-[0_12px_30px_rgba(124,58,237,0.10)]">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles[color]}`}
      >
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}