import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030610] text-white">

      {/* Top Gradient Border */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-500/50
          to-transparent
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-blue-600/[0.06]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-violet-600/[0.06]
          blur-[110px]
        "
      />

      {/* Main Footer */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-6
          py-16
          sm:grid-cols-2
          lg:grid-cols-4
          lg:px-8
          lg:py-20
        "
      >

        {/* Brand */}
        <div className="max-w-sm">

          <Link
            href="/"
            className="
              inline-block
              text-2xl
              font-extrabold
              tracking-tight
            "
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              TLX TechVerse
            </span>
          </Link>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-slate-500
            "
          >
            Your complete placement preparation platform for Coding,
            Aptitude, AI Interviews, Resume Building and Placements.
          </p>

          {/* Small Brand Badge */}
          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/10
              bg-cyan-400/[0.04]
              px-3
              py-1.5
              text-xs
              font-medium
              text-slate-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />
            Built for student success
          </div>

        </div>

        {/* Platform */}
        <div>

          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-200
            "
          >
            Platform
          </h3>

          <div className="space-y-3">

            <Link
              href="/coding"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-cyan-400
              "
            >
              Coding
            </Link>

            <Link
              href="/aptitude"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-cyan-400
              "
            >
              Aptitude
            </Link>

            <Link
              href="/interview"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-cyan-400
              "
            >
              AI Interview
            </Link>

            <Link
              href="/resume"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-cyan-400
              "
            >
              Resume Builder
            </Link>

          </div>
        </div>

        {/* Company */}
        <div>

          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-200
            "
          >
            Company
          </h3>

          <div className="space-y-3">

            <Link
              href="/"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-violet-400
              "
            >
              About
            </Link>

            <Link
              href="/"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-violet-400
              "
            >
              Contact
            </Link>

            <Link
              href="/"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-violet-400
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="
                block
                text-sm
                text-slate-500
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-violet-400
              "
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

        {/* Social */}
        <div>

          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-slate-200
            "
          >
            Connect With Us
          </h3>

          <p className="mb-5 max-w-xs text-sm leading-6 text-slate-500">
            Follow TLX TechVerse and stay connected with our placement
            community.
          </p>

          <div className="flex gap-3">

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:text-white
              "
            >
              <FaGithub size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/30
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              <FaLinkedin size={19} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-400/30
                hover:bg-pink-500/10
                hover:text-pink-400
              "
            >
              <FaInstagram size={19} />
            </a>

            {/* Email */}
            <a
              href="mailto:info@tlxtechverse.com"
              aria-label="Email"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <MdEmail size={21} />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.06]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-6
            py-6
            text-center
            sm:flex-row
            sm:text-left
            lg:px-8
          "
        >

          <p className="text-xs text-slate-600">
            © 2026 TLX TechVerse. All Rights Reserved.
          </p>

          <p className="text-xs text-slate-600">
            Built with{" "}
            <span className="text-blue-400">technology</span>{" "}
            for{" "}
            <span className="text-violet-400">students</span>.
          </p>

        </div>
      </div>

    </footer>
  );
}