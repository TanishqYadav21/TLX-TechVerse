"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Code2,
  Brain,
  Bot,
  FileText,
  BookOpen,
  Briefcase,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Coding",
    href: "/coding",
    icon: Code2,
  },
  {
    name: "Aptitude",
    href: "/aptitude",
    icon: Brain,
  },
  {
    name: "AI Interview",
    href: "/interview",
    icon: Bot,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    name: "Core Subjects",
    href: "/core-subjects",
    icon: BookOpen,
  },
  {
    name: "Placements",
    href: "/placements",
    icon: Briefcase,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-slate-800 bg-[#060a18] text-white lg:flex">
      {/* Brand */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
            <Sparkles size={20} />
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
              TLX TechVerse
            </h1>

            <p className="mt-0.5 text-xs text-slate-500">
              Student Portal
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-5">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
          Workspace
        </p>

        <div className="space-y-1.5">
          {menus.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute -left-4 h-7 w-1 rounded-r-full bg-cyan-400" />
                )}

                <Icon
                  size={19}
                  className={
                    active
                      ? "text-white"
                      : "text-slate-500 transition group-hover:text-blue-400"
                  }
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-4">
        <div className="mb-3 rounded-xl bg-white/[0.03] px-3 py-3">
          <p className="text-xs font-medium text-slate-500">
            PLACEMENT STATUS
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            <span className="text-xs font-semibold text-emerald-400">
              Preparation Active
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="flex w-full items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}