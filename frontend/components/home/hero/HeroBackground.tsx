"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#030712]" />

      {/* Aurora */}

      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px] animate-pulse" />

      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[220px] animate-pulse" />

      <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      {/* Extra Glow */}

      <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="absolute right-1/4 bottom-20 h-60 w-60 rounded-full bg-sky-500/10 blur-[140px]" />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Premium Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />

      {/* Top Fade */}

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712]/80 to-transparent" />
    </>
  );
}