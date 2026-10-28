"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-72px)]">

  <HeroBackground />

  <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 lg:flex-row xl:gap-16">

        <HeroContent />

        <HeroDashboard />

      </div>

    </section>
  );
}