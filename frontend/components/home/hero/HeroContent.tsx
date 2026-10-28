"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
     className="max-w-[540px]"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl">
        ✨ AI Powered Placement Platform
      </span>

      <h1 className="
mt-6
text-[58px]
font-extrabold
leading-[0.95]
tracking-[-3px]
text-white
lg:text-[64px]
">
        Crack Your
        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          Dream Placement
        </span>
      </h1>

      <p className="
mt-5
max-w-[460px]
text-[17px]
leading-7
text-slate-400
">
        Practice Coding, Aptitude, Resume Building and AI Interviews
        in one modern placement preparation platform.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
  href="/signup"
  className="group flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Get Started

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

        <Link
          href="/dashboard"
          className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          Explore Platform
        </Link>
      </div>

      <div className="mt-8 flex items-center gap-8">
        <div>
         <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">10K+</h2>
          <p className="text-sm
text-slate-400">Students</p>
        </div>

        <div>
         <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">500+</h2>
          <p className="text-sm
text-slate-400">Companies</p>
        </div>

        <div>
         <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">95%</h2>
          <p className="text-sm
text-slate-400">Success</p>
        </div>
  
      </div>
            <div className="mt-10 flex -space-x-3">

  {[
  "/avatars/student-1.jpg",
  "/avatars/student-2.jpg",
  "/avatars/student-3.jpg",
  "/avatars/student-4.jpg",
  "/avatars/student-5.jpg",
].map((avatar, index) => (
  <div
    key={index}
    className="
      relative
      h-11
      w-11
      overflow-hidden
      rounded-full
      border-2
      border-[#0B1220]
      ring-2
      ring-blue-500/20
      transition-transform
      duration-300
      hover:z-20
      hover:scale-110
    "
  >
    <Image
      src={avatar}
      alt={`Student ${index + 1}`}
      fill
      className="object-cover"
      sizes="44px"
    />
  </div>
))}

  <div className="
ml-4
flex
h-11
items-center
rounded-full
border
border-white/10
bg-white/5
px-5
text-sm
font-medium
text-slate-300
backdrop-blur-xl
">

    +10K placed students

  </div>

</div>
    </motion.div>
  );
}