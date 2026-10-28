"use client";

import { useState } from "react";
import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  description?: string;
  trend?: "up" | "down";
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  description,
  trend,
}: StatCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.14)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at ${spotlight.x}px ${spotlight.y}px, rgba(59,130,246,0.12), transparent 70%)`,
        }}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>
        </div>

        <div
          className={`${color} flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-2`}
        >
          <Icon size={23} />
        </div>
      </div>

      {description && (
        <div className="relative mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
          {trend === "up" && (
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <TrendingUp size={14} />
              {description}
            </span>
          )}

          {!trend && (
            <span className="text-xs font-medium text-slate-400">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
}