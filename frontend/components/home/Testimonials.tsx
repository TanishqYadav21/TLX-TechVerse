"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ TCS",
    review:
      "TLX TechVerse helped me improve my coding and aptitude. The mock interviews boosted my confidence.",
  },
  {
    name: "Priya Verma",
    role: "SDE Intern @ Infosys",
    review:
      "The resume builder and placement tracking features saved me a lot of time during placements.",
  },
  {
    name: "Aman Gupta",
    role: "Graduate Engineer @ Wipro",
    review:
      "One platform for everything. Coding, aptitude and interview preparation made placement easy.",
  },
  {
    name: "Sneha Singh",
    role: "Software Developer @ Accenture",
    review:
      "The structured practice helped me stay consistent and prepare better for technical interviews.",
  },
  {
    name: "Arjun Mehta",
    role: "Frontend Developer @ Adobe",
    review:
      "I really liked having coding, aptitude and resume preparation together in one platform.",
  },
  {
    name: "Neha Verma",
    role: "Associate Engineer @ Amazon",
    review:
      "The interview practice and progress tracking gave me a much clearer idea of what I needed to improve.",
  },
];

export default function Testimonials() {
  const cards = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 lg:py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="relative z-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl px-6 text-center">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-300
            "
          >
            ❤️ Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mt-6
              text-4xl
              font-extrabold
              tracking-[-2px]
              text-white
              sm:text-5xl
            "
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Students Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              md:text-lg
            "
          >
            Thousands of students trust TLX TechVerse for placement preparation.
          </motion.p>

        </div>

        {/* Auto Scrolling Cards */}
        <div className="mt-14 overflow-hidden">

          <motion.div
            className="flex w-max gap-5"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {cards.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  group
                  relative
                  min-h-[300px]
                  w-[340px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.06]
                  to-white/[0.02]
                  p-6
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/30
                  hover:shadow-[0_20px_70px_rgba(59,130,246,.14)]
                  sm:w-[400px]
                  lg:w-[430px]
                "
              >

                {/* Hover Background */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-500/[0.07]
                    via-transparent
                    to-violet-500/[0.08]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Right Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-blue-500/15
                    blur-[70px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Stars */}
                <div className="relative z-10 mb-6 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="
                    relative
                    z-10
                    min-h-[112px]
                    text-[15px]
                    leading-7
                    text-slate-400
                  "
                >
                  “{item.review}”
                </p>

                {/* Divider */}
                <div className="relative z-10 my-5 h-px bg-white/[0.06]" />

                {/* Student Info */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.role}
                  </p>
                </div>

                {/* Bottom Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />

              </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}