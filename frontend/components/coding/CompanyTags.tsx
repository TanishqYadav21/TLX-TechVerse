"use client";

import {
  Building2,
  Globe,
  BriefcaseBusiness,
  Database,
  Check,
} from "lucide-react";

const companies = [
  {
    name: "Amazon",
    icon: Building2,
    style: "text-orange-500",
  },
  {
    name: "Google",
    icon: Globe,
    style: "text-blue-500",
  },
  {
    name: "Microsoft",
    icon: Building2,
    style: "text-blue-600",
  },
  {
    name: "Adobe",
    icon: BriefcaseBusiness,
    style: "text-red-500",
  },
  {
    name: "Flipkart",
    icon: Building2,
    style: "text-blue-500",
  },
  {
    name: "Walmart",
    icon: Building2,
    style: "text-blue-600",
  },
  {
    name: "TCS",
    icon: Building2,
    style: "text-blue-600",
  },
  {
    name: "Infosys",
    icon: Globe,
    style: "text-green-600",
  },
  {
    name: "Accenture",
    icon: BriefcaseBusiness,
    style: "text-purple-600",
  },
  {
    name: "Oracle",
    icon: Database,
    style: "text-red-600",
  },
  {
    name: "Deloitte",
    icon: Check,
    style: "text-green-600",
  },
];

export default function CompanyTags() {
  return (
    <div>
      {/* Section Heading */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          Hiring Partners
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">
          Top Companies
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Prepare for opportunities from leading companies.
        </p>
      </div>

      {/* Companies */}
      <div className="flex flex-wrap gap-3">
        {companies.map((company) => {
          const Icon = company.icon;

          return (
            <div
              key={company.name}
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:bg-blue-50
                hover:shadow-lg
                hover:shadow-blue-500/10
                dark:border-white/10
                dark:bg-white/[0.035]
                dark:hover:border-blue-500/30
                dark:hover:bg-blue-500/10
              "
            >
              {/* Company Icon */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-100
                  transition-all
                  duration-300
                  group-hover:scale-110
                  dark:bg-white/[0.06]
                "
              >
                <Icon
                  size={18}
                  className={company.style}
                />
              </div>

              {/* Company Name */}
              <span
                className="
                  whitespace-nowrap
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                  dark:text-slate-300
                  dark:group-hover:text-blue-400
                "
              >
                {company.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}