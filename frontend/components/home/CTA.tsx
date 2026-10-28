"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 lg:py-28">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/[0.08]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-blue-400/20
            bg-gradient-to-br
            from-blue-600/20
            via-indigo-600/10
            to-violet-600/20
            px-6
            py-16
            text-center
            shadow-[0_30px_100px_rgba(59,130,246,.12)]
            backdrop-blur-2xl
            sm:px-10
            lg:px-16
            lg:py-20
          "
        >
          {/* Inner Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-blue-500/20
              blur-[100px]
              transition-opacity
              duration-500
              group-hover:opacity-80
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-80
              w-80
              rounded-full
              bg-violet-500/20
              blur-[100px]
            "
          />

          {/* Badge */}
          <div
            className="
              relative
              z-10
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-200
              backdrop-blur-xl
            "
          >
            <Sparkles size={14} />
            Start Your Journey
          </div>

          {/* Heading */}
          <h2
            className="
              relative
              z-10
              mx-auto
              max-w-4xl
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-2px]
              text-white
              sm:text-5xl
              lg:text-6xl
          "
          >
            Ready to Crack Your{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Dream Placement?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-300
              sm:text-lg
            "
          >
            Join thousands of students using TLX TechVerse to improve
            coding, aptitude, resumes and interview skills.
          </p>

          {/* Buttons */}
          <div
            className="
              relative
              z-10
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <Link
              href="/signup"
              className="
                group/button
                flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-7
                py-3.5
                font-semibold
                text-slate-900
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Get Started Free

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </Link>

            <Link
              href="/login"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/15
                bg-white/[0.05]
                px-7
                py-3.5
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/25
                hover:bg-white/[0.10]
              "
            >
              Login
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Bottom Accent */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-blue-400
              to-transparent
              opacity-50
            "
          />
        </motion.div>
      </div>
    </section>
  );
}