"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Aptitude", href: "/aptitude" },
  { name: "Coding", href: "/coding" },
  { name: "Interview", href: "/interview" },
  { name: "Resume", href: "/resume" },
  { name: "Placements", href: "/placements" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            TLX
          </div>

          <div>
            <h1 className="text-lg font-bold">TLX TechVerse</h1>
            <p className="text-xs text-muted-foreground">
              Placement Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Link
  href="/login"
  className="rounded-lg border px-4 py-2 hover:bg-gray-100"
>
  Login
</Link>

<Link
  href="/signup"
  className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
>
  Sign Up
</Link>

          <button className="md:hidden">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}