"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Brain, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            🚀 AI Powered Placement Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Ace Your
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Placement Journey
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Practice Coding, Aptitude, AI Interviews, Resume Building and
            everything you need to crack placements — all in one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/features"
              className="rounded-xl border px-6 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-500">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="text-gray-500">Success</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg"
        >
          <div className="rounded-3xl border bg-white/70 p-8 shadow-2xl backdrop-blur dark:bg-slate-900/70">

            <h3 className="mb-8 text-2xl font-bold">
              Student Dashboard
            </h3>

            <div className="space-y-5">

              <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <Code2 className="text-blue-600" />
                  <span>Coding Progress</span>
                </div>

                <strong>154 Qs</strong>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-green-50 p-4 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <Brain className="text-green-600" />
                  <span>Aptitude</span>
                </div>

                <strong>82%</strong>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <FileText className="text-orange-600" />
                  <span>Resume Score</span>
                </div>

                <strong>91/100</strong>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}