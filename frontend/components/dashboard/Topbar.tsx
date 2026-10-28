"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Profile photo
  const [profilePhoto, setProfilePhoto] =
    useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(false);
      }
    }
  }, []);

  // Load profile photo and update it instantly
  useEffect(() => {
    const loadProfilePhoto = () => {
      setProfilePhoto(
        localStorage.getItem(
          "tlx-profile-photo"
        )
      );
    };

    loadProfilePhoto();

    window.addEventListener(
      "tlx-profile-photo-changed",
      loadProfilePhoto
    );

    return () => {
      window.removeEventListener(
        "tlx-profile-photo-changed",
        loadProfilePhoto
      );
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className="
        sticky
        top-0
        z-40
        ml-64
        flex
        h-20
        shrink-0
        items-center
        justify-between
        gap-6
        border-b
        border-slate-200/70
        bg-white/90
        px-8
        backdrop-blur-xl
        transition-all
        duration-300

        dark:border-white/[0.08]
        dark:bg-[#080d1a]/90
      "
    >
      {/* ================= SEARCH ================= */}
      <div className="min-w-0 flex-1">
        <div className="relative w-full max-w-[420px]">
          <Search
            size={18}
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              transition-colors
              duration-300
              dark:text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50/80
              pl-11
              pr-4
              text-sm
              text-slate-800
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400

              hover:border-slate-300

              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-500/10

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-white
              dark:placeholder:text-slate-600
              dark:hover:border-white/20
              dark:focus:border-blue-500/50
              dark:focus:bg-white/[0.06]
              dark:focus:ring-blue-500/10
            "
          />
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex shrink-0 items-center gap-3">

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="
            group
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-500
            shadow-sm
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            hover:shadow-lg
            hover:shadow-blue-500/10

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-slate-400
            dark:hover:border-blue-500/30
            dark:hover:bg-blue-500/10
            dark:hover:text-blue-400
            dark:hover:shadow-blue-500/10
          "
        >
          <Bell
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          />

          {/* Notification dot */}
          <span
            className="
              absolute
              right-2.5
              top-2.5
              h-1.5
              w-1.5
              rounded-full
              bg-blue-500
              shadow-[0_0_8px_rgba(59,130,246,0.8)]
            "
          />
        </button>

        {/* Theme */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-500
            shadow-sm
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            hover:shadow-lg
            hover:shadow-blue-500/10

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:text-slate-400
            dark:hover:border-violet-500/30
            dark:hover:bg-violet-500/10
            dark:hover:text-violet-300
            dark:hover:shadow-violet-500/10
          "
        >
          {darkMode ? (
            <Sun
              size={20}
              className="
                text-amber-400
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />
          ) : (
            <Moon
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />
          )}
        </button>

        {/* Divider */}
        <div
          className="
            mx-1
            hidden
            h-8
            w-px
            bg-slate-200
            md:block
            dark:bg-white/10
          "
        />

        {/* User Info */}
        <div className="hidden text-right md:block">
          <h3
            className="
              text-sm
              font-semibold
              leading-5
              text-slate-800
              dark:text-white
            "
          >
            Student
          </h3>

          <p
            className="
              text-xs
              leading-5
              text-slate-500
              dark:text-slate-500
            "
          >
            Placement Ready 🚀
          </p>
        </div>

        {/* Avatar */}
        <button
          type="button"
          aria-label="Student profile"
          className="
            group
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-violet-600
            font-bold
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300

            hover:scale-105
            hover:shadow-blue-500/40
          "
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile"
              className="
                relative
                z-10
                h-full
                w-full
                rounded-full
                object-cover
              "
            />
          ) : (
            <span className="relative z-10">
              T
            </span>
          )}

          {/* Online indicator */}
          <span
            className="
              absolute
              bottom-0
              right-0
              z-20
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-emerald-400
              dark:border-[#080d1a]
            "
          />
        </button>
      </div>
    </header>
  );
}