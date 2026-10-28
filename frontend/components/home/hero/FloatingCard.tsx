"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
  className?: string;
}

export default function FloatingCard({
  title,
  value,
  icon: Icon,
  iconColor,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute z-30 w-44 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </h3>

        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconColor}`}
        >
          <Icon size={20} className="text-white" />
        </div>

      </div>
    </motion.div>
  );
}