"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is TLX TechVerse free to use?",
    answer:
      "Yes. You can access core placement preparation features for free.",
  },
  {
    question: "Can I practice coding and aptitude together?",
    answer:
      "Yes. TLX TechVerse provides Coding, Aptitude, AI Interviews and Resume Builder in one platform.",
  },
  {
    question: "Does it include mock interviews?",
    answer:
      "Yes. AI-powered HR and Technical mock interviews are included.",
  },
  {
    question: "Can I download my resume?",
    answer:
      "Yes. You can generate and download ATS-friendly resumes in PDF format.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-24
        lg:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/3
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              inline-flex
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-300
            "
          >
            ❓ FAQ
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mt-6
              text-4xl
              font-extrabold
              tracking-[-1.5px]
              text-white
              sm:text-5xl
            "
          >
            Frequently Asked{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mt-5
              text-base
              leading-7
              text-slate-400
              md:text-lg
            "
          >
            Everything you need to know about TLX TechVerse.
          </motion.p>

        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-gradient-to-b
                  from-white/[0.06]
                  to-white/[0.02]
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-blue-500/30 shadow-[0_15px_50px_rgba(59,130,246,.08)]"
                      : "border-white/10 hover:border-blue-500/20"
                  }
                `}
              >

                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-blue-500/10
                    blur-[65px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Question Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-6
                    text-left
                    sm:px-7
                  "
                >
                  <span
                    className={`
                      text-base
                      font-semibold
                      leading-7
                      transition-colors
                      duration-300
                      sm:text-lg
                      ${
                        isOpen
                          ? "text-white"
                          : "text-slate-200 group-hover:text-white"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-blue-400/40 bg-blue-500/10 text-blue-300"
                          : "border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-blue-400/30 group-hover:text-blue-300"
                      }
                    `}
                  >
                    <ChevronDown
                      size={18}
                      className={`
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          relative
                          z-10
                          border-t
                          border-white/[0.06]
                          px-6
                          pb-6
                          pt-5
                          sm:px-7
                        "
                      >
                        <p
                          className="
                            max-w-3xl
                            text-sm
                            leading-7
                            text-slate-400
                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}