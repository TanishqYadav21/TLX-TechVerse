"use client";

import { ArrowRight, Code2, Brain, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500"
        >
          🚀 India's Smart Placement Preparation Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Crack Your Dream
          <span className="text-blue-600"> Placement </span>
          with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground"
        >
          Practice Coding, Aptitude, Core Subjects, Resume Building and
          AI Mock Interviews — all in one platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="flex items-center gap-2 rounded-xl border px-7 py-3 hover:bg-accent transition">
            Explore
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border p-6 backdrop-blur">
            <Code2 className="mb-4 text-blue-600" size={40} />
            <h3 className="text-xl font-bold">Coding Practice</h3>
            <p className="mt-2 text-muted-foreground">
              Solve company-wise coding questions with an online compiler.
            </p>
          </div>

          <div className="rounded-2xl border p-6 backdrop-blur">
            <Brain className="mb-4 text-purple-600" size={40} />
            <h3 className="text-xl font-bold">AI Interview</h3>
            <p className="mt-2 text-muted-foreground">
              Practice HR & Technical interviews with AI feedback.
            </p>
          </div>

          <div className="rounded-2xl border p-6 backdrop-blur">
            <Briefcase className="mb-4 text-green-600" size={40} />
            <h3 className="text-xl font-bold">Placement Ready</h3>
            <p className="mt-2 text-muted-foreground">
              Aptitude, Resume Builder and Interview preparation in one place.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}