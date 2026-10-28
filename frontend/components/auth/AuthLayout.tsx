import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Glow - Left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[140px]
        "
      />

      {/* Background Glow - Right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/[0.07]
          blur-[140px]
        "
      />

      {/* Main */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-10
          sm:px-6
        "
      >

        {/* Login Card */}
        <div
  className="
    w-full
    max-w-xl
    overflow-hidden
    rounded-[2rem]
    border
    border-white/10
    bg-[#080b17]/90
    px-6
    py-7
    shadow-[0_30px_100px_rgba(0,0,0,.45)]
    backdrop-blur-2xl
    sm:px-10
    sm:py-8
    lg:px-12
    lg:py-9
  "
>

          {/* Top Brand */}
          <div className="mb-6 text-center">

            <div
              className="
                mx-auto
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-400/20
                bg-gradient-to-br
                from-blue-500/15
                to-violet-500/15
                text-blue-300
                shadow-[0_0_30px_rgba(59,130,246,.10)]
              "
            >
              <Sparkles size={21} />
            </div>

            <div
              className="
                text-xl
                font-extrabold
                tracking-tight
              "
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                TLX TechVerse
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              AI Powered Placement Platform
            </p>

          </div>

          {/* Divider */}
          <div className="mb-8 h-px bg-white/[0.06]" />

          {/* Heading */}
          <div className="text-center">

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/[0.06]
                px-3
                py-1.5
                text-xs
                font-medium
                text-blue-300
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,.7)]
                "
              />
              Welcome back
            </div>

            <h1
              className="
                text-4xl
                font-extrabold
                tracking-[-1.5px]
                text-white
                sm:text-5xl
              "
            >
              {title}
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              {subtitle}
            </p>

          </div>

          {/* Form */}
          <div className="mt-7">
            {children}
          </div>

          {/* Bottom */}
          <div className="mt-7 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[11px] text-slate-600">
              TLX TechVerse
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />

          </div>

        </div>
      </div>
    </div>
  );
}