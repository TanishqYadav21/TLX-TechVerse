"use client";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  Download,
  Plus,
  Trash2,
  User,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  FolderGit2,
 Mail,
Phone,
MapPin,
Link2,
FileText,
Sparkles,
} from "lucide-react";

type Template =
  | "modern"
  | "professional"
  | "minimal"
  | "ats";

type Education = {
  degree: string;
  college: string;
  year: string;
  score: string;
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

type Project = {
  name: string;
  tech: string;
  description: string;
  link: string;
};

type ResumeData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
  achievements: string[];
};

const initialData: ResumeData = {
  name: "",
  role: "BCA Student | Full Stack Developer",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  summary:
    "Motivated computer applications student with a strong interest in software development, problem solving and modern web technologies. Looking for opportunities to apply technical skills and grow as a software professional.",
  skills:
    "C++, Java, HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub",
  education: [
    {
      degree: "Bachelor of Computer Applications",
      college: "",
      year: "2024 - 2027",
      score: "",
    },
  ],
  experience: [],
  projects: [
    {
      name: "Placement Preparation Portal",
      tech: "React, Node.js, Express.js, MongoDB",
      description:
        "Developed a placement preparation platform featuring coding practice, aptitude preparation, interview preparation and resume building.",
      link: "",
    },
  ],
  certifications: [],
  achievements: [],
};

const templates: {
  id: Template;
  name: string;
  description: string;
}[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Blue accent & stylish",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Corporate & formal",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean & elegant",
  },
  {
    id: "ats",
    name: "ATS Friendly",
    description: "Simple & recruiter-ready",
  },
];

export default function ResumePage() {
  const [data, setData] =
    useState<ResumeData>(initialData);

  const [template, setTemplate] =
    useState<Template>("modern");

  const [activeTab, setActiveTab] = useState<
    "personal" | "career" | "extra"
  >("personal");

  const [hydrated, setHydrated] =
    useState(false);

  /* LOAD SAVED DATA */

  useEffect(() => {
    try {
      const savedData =
        localStorage.getItem(
          "tlx-resume-data"
        );

      if (savedData) {
        const parsed = JSON.parse(
          savedData
        );

        setData({
          ...initialData,
          ...parsed,
        });
      }

      const savedTemplate =
        localStorage.getItem(
          "tlx-resume-template"
        );

      if (
        savedTemplate === "modern" ||
        savedTemplate === "professional" ||
        savedTemplate === "minimal" ||
        savedTemplate === "ats"
      ) {
        setTemplate(savedTemplate);
      }
    } catch (error) {
      console.error(
        "Resume loading error:",
        error
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  /* AUTO SAVE */

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "tlx-resume-data",
      JSON.stringify(data)
    );
  }, [data, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "tlx-resume-template",
      template
    );
  }, [template, hydrated]);

  /* ATS SCORE */

  const atsScore = useMemo(() => {
    let score = 40;

    if (data.name.trim()) score += 8;
    if (data.email.trim()) score += 6;
    if (data.phone.trim()) score += 5;
    if (data.location.trim()) score += 3;
    if (data.summary.trim()) score += 7;
    if (data.skills.trim()) score += 7;
    if (data.education.length) score += 5;
    if (data.projects.length) score += 5;
    if (data.experience.length) score += 7;

    return Math.min(score, 95);
  }, [data]);

  /* BASIC FIELD */

  const updateField = (
    field: keyof ResumeData,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* EDUCATION */

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          college: "",
          year: "",
          score: "",
        },
      ],
    }));
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map(
        (item, i) =>
          i === index
            ? {
                ...item,
                [field]: value,
              }
            : item
      ),
    }));
  };

  const removeEducation = (
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      education:
        prev.education.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* EXPERIENCE */

  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          role: "",
          company: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      experience:
        prev.experience.map(
          (item, i) =>
            i === index
              ? {
                  ...item,
                  [field]: value,
                }
              : item
        ),
    }));
  };

  const removeExperience = (
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      experience:
        prev.experience.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* PROJECTS */

  const addProject = () => {
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          tech: "",
          description: "",
          link: "",
        },
      ],
    }));
  };

  const updateProject = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      projects:
        prev.projects.map(
          (item, i) =>
            i === index
              ? {
                  ...item,
                  [field]: value,
                }
              : item
        ),
    }));
  };

  const removeProject = (
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      projects:
        prev.projects.filter(
          (_, i) => i !== index
        ),
    }));
  };

  /* LIST ITEMS */

  const addListItem = (
    field:
      | "certifications"
      | "achievements"
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: [
        ...prev[field],
        "",
      ],
    }));
  };

  const updateListItem = (
    field:
      | "certifications"
      | "achievements",
    index: number,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].map(
        (item, i) =>
          i === index
            ? value
            : item
      ),
    }));
  };

  const removeListItem = (
    field:
      | "certifications"
      | "achievements",
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].filter(
        (_, i) => i !== index
      ),
    }));
  };

  /* PRINT */

  const handlePrint = () => {
    window.print();
  };

  /* RESET */

  const handleReset = () => {
    if (
      !window.confirm(
        "Are you sure you want to clear your resume?"
      )
    ) {
      return;
    }

    setData(initialData);
    setTemplate("modern");

    localStorage.removeItem(
      "tlx-resume-data"
    );

    localStorage.removeItem(
      "tlx-resume-template"
    );
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff_0,#f8fafc_32%,#f1f5f9_100%)] text-slate-900">
      {/* HEADER */}

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl print:hidden">
        <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <FileText
                size={22}
                className="text-blue-600"
              />

              <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">
                Resume Builder
              </h1>
            </div>

            <p className="hidden text-xs text-slate-500 sm:block">
              Create a professional resume
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {hydrated
                ? "Auto-saved"
                : "Loading"}
            </div>
<Link
  href="/ats-analyzer"
  className="hidden rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-100 lg:block"
>
  ATS Analyzer
</Link>
            <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 lg:flex">
              <Sparkles size={15} />
              ATS {atsScore}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 sm:block"
            >
              Reset
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              <Download size={17} />
              <span className="hidden sm:inline">
                Download PDF
              </span>
              <span className="sm:hidden">
                PDF
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* APP */}

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 p-5 lg:h-[calc(100vh-64px)] lg:grid-cols-[500px_minmax(0,1fr)] lg:overflow-hidden lg:p-8">
        {/* EDITOR */}

        <section className="print:hidden lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pr-2">
          {/* TABS */}

          <div className="mb-5 grid grid-cols-3 gap-1.5 rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 shadow-sm shadow-slate-200/50 backdrop-blur">
            {[
              {
                id: "personal" as const,
                label: "Personal",
              },
              {
                id: "career" as const,
                label: "Career",
              },
              {
                id: "extra" as const,
                label: "Extra",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(
                    tab.id
                  )
                }
                className={`rounded-xl px-3 py-2.5 text-sm font-semibold ${
                  activeTab ===
                  tab.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TEMPLATE SELECTOR */}

          <div className="mb-5 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-sm shadow-slate-200/60 backdrop-blur">
            <div className="mb-4">
              <h2 className="font-bold">
                Choose Template
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Each template has a different visual structure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {templates.map(
                (item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setTemplate(
                        item.id
                      )
                    }
                    className={`group rounded-2xl border-2 p-3 text-left transition-all duration-200 ${
                      template ===
                      item.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* MINI PREVIEW */}

                    <div
                      className={`mb-3 h-20 rounded-lg border p-2 ${
                        item.id ===
                        "modern"
                          ? "bg-slate-50"
                          : item.id ===
                            "professional"
                          ? "bg-slate-900"
                          : item.id ===
                            "minimal"
                          ? "bg-white"
                          : "bg-white"
                      }`}
                    >
                      {item.id ===
                        "modern" && (
                        <>
                          <div className="mb-2 h-2 w-20 rounded bg-blue-600" />
                          <div className="h-1.5 w-full rounded bg-slate-300" />
                          <div className="mt-1 h-1.5 w-4/5 rounded bg-slate-200" />
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="h-7 rounded bg-blue-50" />
                            <div className="h-7 rounded bg-slate-100" />
                          </div>
                        </>
                      )}

                      {item.id ===
                        "professional" && (
                        <>
                          <div className="mb-2 h-2 w-24 rounded bg-white" />
                          <div className="h-px w-full bg-slate-500" />
                          <div className="mt-2 h-1.5 w-full rounded bg-slate-500" />
                          <div className="mt-1 h-1.5 w-3/4 rounded bg-slate-600" />
                        </>
                      )}

                      {item.id ===
                        "minimal" && (
                        <>
                          <div className="mb-3 h-2 w-16 bg-slate-900" />
                          <div className="h-px w-full bg-slate-300" />
                          <div className="mt-3 h-1.5 w-5/6 bg-slate-300" />
                          <div className="mt-1 h-1.5 w-2/3 bg-slate-200" />
                        </>
                      )}

                      {item.id ===
                        "ats" && (
                        <>
                          <div className="mb-2 h-2 w-24 bg-black" />
                          <div className="h-1.5 w-full bg-slate-300" />
                          <div className="mt-2 h-1.5 w-full bg-slate-300" />
                          <div className="mt-2 h-1.5 w-5/6 bg-slate-300" />
                          <div className="mt-2 h-1.5 w-4/6 bg-slate-300" />
                        </>
                      )}
                    </div>

                    <div className="text-xs font-extrabold tracking-tight">
                      {item.name}
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-slate-500">
                      {
                        item.description
                      }
                    </div>
                  </button>
                )
              )}
            </div>
          </div>

          {/* PERSONAL */}

          {activeTab ===
            "personal" && (
            <div className="space-y-5">
              <EditorCard
                icon={
                  <User
                    size={19}
                  />
                }
                title="Personal Information"
              >
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    value={data.name}
                    onChange={(v) =>
                      updateField(
                        "name",
                        v
                      )
                    }
                  />

                  <Input
                    label="Professional Title"
                    value={data.role}
                    onChange={(v) =>
                      updateField(
                        "role",
                        v
                      )
                    }
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Email"
                      value={
                        data.email
                      }
                      onChange={(v) =>
                        updateField(
                          "email",
                          v
                        )
                      }
                    />

                    <Input
                      label="Phone"
                      value={
                        data.phone
                      }
                      onChange={(v) =>
                        updateField(
                          "phone",
                          v
                        )
                      }
                    />
                  </div>

                  <Input
                    label="Location"
                    value={
                      data.location
                    }
                    onChange={(v) =>
                      updateField(
                        "location",
                        v
                      )
                    }
                  />

                  <Input
                    label="LinkedIn"
                    value={
                      data.linkedin
                    }
                    onChange={(v) =>
                      updateField(
                        "linkedin",
                        v
                      )
                    }
                  />

                  <Input
                    label="GitHub"
                    value={
                      data.github
                    }
                    onChange={(v) =>
                      updateField(
                        "github",
                        v
                      )
                    }
                  />
                </div>
              </EditorCard>

              <EditorCard
                icon={
                  <FileText
                    size={19}
                  />
                }
                title="Professional Summary"
              >
                <Textarea
                  label="Summary"
                  rows={7}
                  value={
                    data.summary
                  }
                  onChange={(v) =>
                    updateField(
                      "summary",
                      v
                    )
                  }
                />
              </EditorCard>
            </div>
          )}

          {/* CAREER */}

          {activeTab ===
            "career" && (
            <div className="space-y-5">
              <EditorCard
                icon={
                  <Code2
                    size={19}
                  />
                }
                title="Technical Skills"
              >
                <Textarea
                  label="Skills"
                  rows={5}
                  value={
                    data.skills
                  }
                  onChange={(v) =>
                    updateField(
                      "skills",
                      v
                    )
                  }
                />

                <p className="mt-2 text-xs text-slate-400">
                  Separate skills with commas.
                </p>
              </EditorCard>

              <EditorCard
                icon={
                  <GraduationCap
                    size={19}
                  />
                }
                title="Education"
                action={
                  <AddButton
                    onClick={
                      addEducation
                    }
                  />
                }
              >
                <div className="space-y-4">
                  {data.education.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mb-4 flex justify-between">
                          <span className="text-xs font-bold uppercase text-slate-400">
                            Education{" "}
                            {index +
                              1}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              removeEducation(
                                index
                              )
                            }
                            className="text-red-500"
                          >
                            <Trash2
                              size={
                                16
                              }
                            />
                          </button>
                        </div>

                        <div className="space-y-3">
                          <Input
                            label="Degree"
                            value={
                              item.degree
                            }
                            onChange={(
                              v
                            ) =>
                              updateEducation(
                                index,
                                "degree",
                                v
                              )
                            }
                          />

                          <Input
                            label="College / University"
                            value={
                              item.college
                            }
                            onChange={(
                              v
                            ) =>
                              updateEducation(
                                index,
                                "college",
                                v
                              )
                            }
                          />

                          <div className="grid gap-3 sm:grid-cols-2">
                            <Input
                              label="Year"
                              value={
                                item.year
                              }
                              onChange={(
                                v
                              ) =>
                                updateEducation(
                                  index,
                                  "year",
                                  v
                                )
                              }
                            />

                            <Input
                              label="CGPA / Percentage"
                              value={
                                item.score
                              }
                              onChange={(
                                v
                              ) =>
                                updateEducation(
                                  index,
                                  "score",
                                  v
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </EditorCard>

              <EditorCard
                icon={
                  <Briefcase
                    size={19}
                  />
                }
                title="Experience"
                action={
                  <AddButton
                    onClick={
                      addExperience
                    }
                  />
                }
              >
                {data.experience.length ===
                  0 && (
                  <EmptyText text="No experience added yet." />
                )}

                <div className="space-y-4">
                  {data.experience.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mb-4 flex justify-between">
                          <span className="text-xs font-bold uppercase text-slate-400">
                            Experience{" "}
                            {index +
                              1}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              removeExperience(
                                index
                              )
                            }
                            className="text-red-500"
                          >
                            <Trash2
                              size={
                                16
                              }
                            />
                          </button>
                        </div>

                        <div className="space-y-3">
                          <Input
                            label="Job Title"
                            value={
                              item.role
                            }
                            onChange={(
                              v
                            ) =>
                              updateExperience(
                                index,
                                "role",
                                v
                              )
                            }
                          />

                          <Input
                            label="Company"
                            value={
                              item.company
                            }
                            onChange={(
                              v
                            ) =>
                              updateExperience(
                                index,
                                "company",
                                v
                              )
                            }
                          />

                          <Input
                            label="Duration"
                            value={
                              item.duration
                            }
                            onChange={(
                              v
                            ) =>
                              updateExperience(
                                index,
                                "duration",
                                v
                              )
                            }
                          />

                          <Textarea
                            label="Description"
                            rows={5}
                            value={
                              item.description
                            }
                            onChange={(
                              v
                            ) =>
                              updateExperience(
                                index,
                                "description",
                                v
                              )
                            }
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </EditorCard>

              <EditorCard
                icon={
                  <FolderGit2
                    size={19}
                  />
                }
                title="Projects"
                action={
                  <AddButton
                    onClick={
                      addProject
                    }
                  />
                }
              >
                <div className="space-y-4">
                  {data.projects.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mb-4 flex justify-between">
                          <span className="text-xs font-bold uppercase text-slate-400">
                            Project{" "}
                            {index +
                              1}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              removeProject(
                                index
                              )
                            }
                            className="text-red-500"
                          >
                            <Trash2
                              size={
                                16
                              }
                            />
                          </button>
                        </div>

                        <div className="space-y-3">
                          <Input
                            label="Project Name"
                            value={
                              item.name
                            }
                            onChange={(
                              v
                            ) =>
                              updateProject(
                                index,
                                "name",
                                v
                              )
                            }
                          />

                          <Input
                            label="Technologies"
                            value={
                              item.tech
                            }
                            onChange={(
                              v
                            ) =>
                              updateProject(
                                index,
                                "tech",
                                v
                              )
                            }
                          />

                          <Textarea
                            label="Description"
                            rows={5}
                            value={
                              item.description
                            }
                            onChange={(
                              v
                            ) =>
                              updateProject(
                                index,
                                "description",
                                v
                              )
                            }
                          />

                          <Input
                            label="Project Link"
                            value={
                              item.link
                            }
                            onChange={(
                              v
                            ) =>
                              updateProject(
                                index,
                                "link",
                                v
                              )
                            }
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </EditorCard>
            </div>
          )}

          {/* EXTRA */}

          {activeTab ===
            "extra" && (
            <div className="space-y-5">
              <ListEditor
                icon={
                  <Award
                    size={19}
                  />
                }
                title="Certifications"
                items={
                  data.certifications
                }
                add={() =>
                  addListItem(
                    "certifications"
                  )
                }
                update={(
                  index,
                  value
                ) =>
                  updateListItem(
                    "certifications",
                    index,
                    value
                  )
                }
                remove={(index) =>
                  removeListItem(
                    "certifications",
                    index
                  )
                }
                placeholder="Certification name"
              />

              <ListEditor
                icon={
                  <Award
                    size={19}
                  />
                }
                title="Achievements"
                items={
                  data.achievements
                }
                add={() =>
                  addListItem(
                    "achievements"
                  )
                }
                update={(
                  index,
                  value
                ) =>
                  updateListItem(
                    "achievements",
                    index,
                    value
                  )
                }
                remove={(index) =>
                  removeListItem(
                    "achievements",
                    index
                  )
                }
                placeholder="Achievement"
              />
            </div>
          )}
        </section>

        {/* RESUME */}

       <section className="min-w-0 overflow-x-auto rounded-[28px] border border-slate-200/80 bg-white/45 p-3 shadow-inner shadow-slate-200/40 print:block print:border-0 print:bg-transparent print:p-0 print:shadow-none sm:p-5 lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain">
          <ResumePreview
            data={data}
            template={template}
          />
        </section>
      </div>

     {/* PRINT / A4 CSS */}

<style jsx global>{`
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
  @page {
    size: A4 portrait;
    margin: 0;
  }

  html,
  body {
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
    overflow: hidden !important;
  }

  body {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Hide everything except the resume */
  body * {
    visibility: hidden !important;
  }

  #resume-preview,
  #resume-preview * {
    visibility: visible !important;
  }

  #resume-preview {
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;

    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;

    margin: 0 !important;
    padding: 7mm 9mm !important;

    box-sizing: border-box !important;

    background: #ffffff !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;

    overflow: hidden !important;

   font-size: 11px !important;
line-height: 1.3 !important;
  }

  /* Name */
 #resume-preview h1 {
  font-size: 25px !important;
    line-height: 1.05 !important;
    margin: 0 0 2px !important;
  }

  /* Resume section headings */
  #resume-preview h2 {
  font-size: 11px !important;
  line-height: 1.2 !important;
  margin-top: 9px !important;
  margin-bottom: 4px !important;
}

  /* Job / project / education headings */
  #resume-preview h3 {
  font-size: 11px !important;
    line-height: 1.15 !important;
    margin-top: 6px !important;
margin-bottom: 2px !important;
  }

#resume-preview p {
  font-size: 10px !important;
  line-height: 1.3 !important;
    margin-top: 1px !important;
    margin-bottom: 2px !important;
  }

  #resume-preview ul {
    margin-top: 1px !important;
    margin-bottom: 3px !important;
    padding-left: 14px !important;
  }

 #resume-preview li {
  font-size: 9.7px !important;
  line-height: 1.28 !important;
  margin-bottom: 2px !important;
}

 #resume-preview section {
  margin-top: 7px !important;
  margin-bottom: 5px !important;

    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }

  #resume-preview a {
    color: inherit !important;
    text-decoration: none !important;
  }
}
`}</style>
    </main>
  );
}

/* =====================================================
   RESUME PREVIEW
===================================================== */

function ResumePreview({
  data,
  template,
}: {
  data: ResumeData;
  template: Template;
}) {
  const skills = data.skills
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const visibleCertifications = data.certifications.filter(Boolean);
  const visibleAchievements = data.achievements.filter(Boolean);

  /* -----------------------------------------------------
     MODERN — refreshed visual only
  ----------------------------------------------------- */
  if (template === "modern") {
    return (
      <div
        id="resume-preview"
        className="resume-paper min-h-[297mm] w-full min-w-[210mm] max-w-[210mm] overflow-hidden bg-white shadow-xl"
      >
        <div className="border-b-[5px] border-blue-600 bg-slate-950 px-10 py-7 text-white">
          <div className="flex items-start justify-between gap-8">
            <div className="min-w-0">
              <div className="mb-3 h-1.5 w-12 rounded-full bg-blue-500" />
              <h1 className="break-words text-4xl font-extrabold tracking-tight">
                {data.name || "Your Name"}
              </h1>
              <p className="mt-2 text-base font-medium text-blue-300">
                {data.role}
              </p>
            </div>
            
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px]">
            <ContactList data={data} dark />
          </div>
        </div>

        <div className="grid grid-cols-[34%_66%]">
          <aside className="border-r border-slate-200 bg-slate-50 px-7 py-8">
            {skills.length > 0 && (
              <ModernSidebarSection title="CORE SKILLS">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ModernSidebarSection>
            )}

            {data.education.length > 0 && (
              <ModernSidebarSection title="EDUCATION">
                <EducationList data={data} />
              </ModernSidebarSection>
            )}

            {visibleCertifications.length > 0 && (
              <ModernSidebarSection title="CERTIFICATIONS">
                <ul className="space-y-2 text-xs leading-5 text-slate-600">
                  {visibleCertifications.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ModernSidebarSection>
            )}
          </aside>

          <div className="px-9 py-8">
            {data.summary && (
              <ModernSection title="PROFILE">
                <p className="text-sm leading-6 text-slate-700">{data.summary}</p>
              </ModernSection>
            )}

            {data.experience.length > 0 && (
              <ModernSection title="EXPERIENCE">
                <ExperienceList data={data} />
              </ModernSection>
            )}

            {data.projects.length > 0 && (
              <ModernSection title="PROJECTS">
                <ProjectList data={data} />
              </ModernSection>
            )}

            {visibleAchievements.length > 0 && (
              <ModernSection title="ACHIEVEMENTS">
                <SimpleList items={visibleAchievements} />
              </ModernSection>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (
    template ===
    "professional"
  ) {
    return (
      <div
        id="resume-preview"
        className="resume-paper min-h-[297mm] w-full min-w-[210mm] max-w-[210mm] bg-white p-12 shadow-xl"
      >
        <div className="border-b-4 border-slate-900 pb-5">
          <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-950">
            {data.name ||
              "YOUR NAME"}
          </h1>

          <p className="mt-1 text-base font-semibold uppercase tracking-[0.12em] text-slate-600">
            {data.role}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
            <ContactList
              data={data}
            />
          </div>
        </div>

        {data.summary && (
          <ProfessionalSection title="PROFESSIONAL SUMMARY">
            <p className="text-sm leading-6 text-slate-700">
              {data.summary}
            </p>
          </ProfessionalSection>
        )}

        {data.experience.length >
          0 && (
          <ProfessionalSection title="PROFESSIONAL EXPERIENCE">
            <ExperienceList
              data={data}
              professional
            />
          </ProfessionalSection>
        )}

        {data.projects.length >
          0 && (
          <ProfessionalSection title="PROJECTS">
            <ProjectList
              data={data}
              professional
            />
          </ProfessionalSection>
        )}

        {data.education.length >
          0 && (
          <ProfessionalSection title="EDUCATION">
            <EducationList
              data={data}
              professional
            />
          </ProfessionalSection>
        )}

        {skills.length >
          0 && (
          <ProfessionalSection title="TECHNICAL SKILLS">
            <p className="text-sm leading-6 text-slate-700">
              {skills.join(
                "  •  "
              )}
            </p>
          </ProfessionalSection>
        )}

        {visibleCertifications.length >
          0 && (
          <ProfessionalSection title="CERTIFICATIONS">
            <SimpleList
              items={
                visibleCertifications
              }
            />
          </ProfessionalSection>
        )}

        {visibleAchievements.length >
          0 && (
          <ProfessionalSection title="ACHIEVEMENTS">
            <SimpleList
              items={
                visibleAchievements
              }
            />
          </ProfessionalSection>
        )}
      </div>
    );
  }

  /* -----------------------------------------------------
     MINIMAL — refreshed visual only
  ----------------------------------------------------- */
  if (template === "minimal") {
    return (
      <div
        id="resume-preview"
        className="resume-paper min-h-[297mm] w-full min-w-[210mm] max-w-[210mm] bg-white px-12 py-10 shadow-xl"
      >
        <header className="border-b border-slate-300 pb-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-slate-950">
                {data.name || "Your Name"}
              </h1>
              <p className="mt-2 text-sm font-medium text-slate-500">{data.role}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-slate-500">
            <ContactList data={data} minimal />
          </div>
        </header>

        <div className="grid grid-cols-[1.45fr_0.85fr] gap-9 pt-7">
          <div>
            {data.summary && (
              <MinimalSection title="PROFILE">
                <p className="text-sm leading-7 text-slate-700">{data.summary}</p>
              </MinimalSection>
            )}

            {data.experience.length > 0 && (
              <MinimalSection title="EXPERIENCE">
                <ExperienceList data={data} minimal />
              </MinimalSection>
            )}

            {data.projects.length > 0 && (
              <MinimalSection title="SELECTED PROJECTS">
                <ProjectList data={data} minimal />
              </MinimalSection>
            )}
          </div>

          <aside className="border-l border-slate-200 pl-7">
            {skills.length > 0 && (
              <MinimalSection title="SKILLS">
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="border-b border-slate-100 pb-2 text-xs text-slate-700">
                      {skill}
                    </div>
                  ))}
                </div>
              </MinimalSection>
            )}

            {data.education.length > 0 && (
              <MinimalSection title="EDUCATION">
                <EducationList data={data} minimal />
              </MinimalSection>
            )}

            {visibleCertifications.length > 0 && (
              <MinimalSection title="CERTIFICATIONS">
                <SimpleList items={visibleCertifications} />
              </MinimalSection>
            )}

            {visibleAchievements.length > 0 && (
              <MinimalSection title="ACHIEVEMENTS">
                <SimpleList items={visibleAchievements} />
              </MinimalSection>
            )}
          </aside>
        </div>
      </div>
    );
  }

  /* -----------------------------------------------------
     ATS FRIENDLY — single-column, recruiter-readable layout
  ----------------------------------------------------- */
  return (
    <div
      id="resume-preview"
      className="resume-paper min-h-[297mm] w-full min-w-[210mm] max-w-[210mm] bg-white px-12 py-10 shadow-xl"
    >
      <header className="border-b-2 border-black pb-5 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-black">
          {data.name || "YOUR NAME"}
        </h1>
        <p className="mt-1 text-sm font-semibold text-black">{data.role}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-black">
          <ContactList data={data} ats />
        </div>
      </header>

      {data.summary && (
        <ATSSection title="PROFESSIONAL SUMMARY">
          <p className="text-sm leading-6 text-black">{data.summary}</p>
        </ATSSection>
      )}

      {skills.length > 0 && (
        <ATSSection title="TECHNICAL SKILLS">
          <p className="text-sm leading-6 text-black">{skills.join(", ")}</p>
        </ATSSection>
      )}

      {data.experience.length > 0 && (
        <ATSSection title="PROFESSIONAL EXPERIENCE">
          <ExperienceList data={data} ats />
        </ATSSection>
      )}

      {data.projects.length > 0 && (
        <ATSSection title="PROJECTS">
          <ProjectList data={data} ats />
        </ATSSection>
      )}

      {data.education.length > 0 && (
        <ATSSection title="EDUCATION">
          <EducationList data={data} ats />
        </ATSSection>
      )}

      {visibleCertifications.length > 0 && (
        <ATSSection title="CERTIFICATIONS">
          <SimpleList items={visibleCertifications} />
        </ATSSection>
      )}

      {visibleAchievements.length > 0 && (
        <ATSSection title="ACHIEVEMENTS">
          <SimpleList items={visibleAchievements} />
        </ATSSection>
      )}
    </div>
  );
}

/* =====================================================
   CONTACT
===================================================== */

function ContactList({
  data,
  dark = false,
  minimal = false,
  ats = false,
}: {
  data: ResumeData;
  dark?: boolean;
  minimal?: boolean;
  ats?: boolean;
}) {
  const className = dark
    ? "text-slate-300"
    : ats
    ? "text-black"
    : minimal
    ? "text-slate-500"
    : "text-slate-600";

  return (
    <>
      {data.email && (
        <span
          className={`flex items-center gap-1.5 ${className}`}
        >
          <Mail size={12} />
          {data.email}
        </span>
      )}

      {data.phone && (
        <span
          className={`flex items-center gap-1.5 ${className}`}
        >
          <Phone size={12} />
          {data.phone}
        </span>
      )}

      {data.location && (
        <span
          className={`flex items-center gap-1.5 ${className}`}
        >
          <MapPin size={12} />
          {data.location}
        </span>
      )}

      {data.linkedin && (
  <span className={`flex items-center gap-1.5 ${className}`}>
    <Link2 size={12} />
    {data.linkedin}
  </span>
)}

      {data.github && (
  <span className={`flex items-center gap-1.5 ${className}`}>
    <Link2 size={12} />
    {data.github}
  </span>
)}
    </>
  );
}

/* =====================================================
   EXPERIENCE
===================================================== */

function ExperienceList({
  data,
  professional = false,
  minimal = false,
  ats = false,
}: {
  data: ResumeData;
  professional?: boolean;
  minimal?: boolean;
  ats?: boolean;
}) {
  return (
    <div className="space-y-5">
      {data.experience.map(
        (item, index) => (
          <div
            key={index}
            className="resume-entry"
          >
            <div className="flex justify-between gap-4">
              <div>
                <h3
                  className={`font-bold ${
                    ats
                      ? "text-black"
                      : "text-slate-900"
                  }`}
                >
                  {item.role ||
                    "Job Title"}
                </h3>

                <p
                  className={`text-sm ${
                    professional ||
                    minimal
                      ? "text-slate-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.company ||
                    "Company"}
                </p>
              </div>

              {item.duration && (
                <span className="shrink-0 text-xs text-slate-500">
                  {
                    item.duration
                  }
                </span>
              )}
            </div>

            {item.description && (
              <p
                className={`mt-2 whitespace-pre-line text-sm leading-6 ${
                  ats
                    ? "text-black"
                    : "text-slate-700"
                }`}
              >
                {
                  item.description
                }
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
}

/* =====================================================
   PROJECTS
===================================================== */

function ProjectList({
  data,
  professional = false,
  minimal = false,
  ats = false,
}: {
  data: ResumeData;
  professional?: boolean;
  minimal?: boolean;
  ats?: boolean;
}) {
  return (
    <div className="space-y-5">
      {data.projects.map(
        (item, index) => (
          <div
            key={index}
            className="resume-entry"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3
                className={`font-bold ${
                  ats
                    ? "text-black"
                    : "text-slate-900"
                }`}
              >
                {item.name ||
                  "Project Name"}
              </h3>

              {item.tech && (
                <span
                  className={`text-xs font-medium ${
                    professional ||
                    minimal ||
                    ats
                      ? "text-slate-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.tech}
                </span>
              )}
            </div>

            {item.description && (
              <p
                className={`mt-1 text-sm leading-6 ${
                  ats
                    ? "text-black"
                    : "text-slate-700"
                }`}
              >
                {
                  item.description
                }
              </p>
            )}

            {item.link && (
              <p className="mt-1 text-xs text-slate-500">
                {item.link}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
}

/* =====================================================
   EDUCATION
===================================================== */

function EducationList({
  data,
  professional = false,
  minimal = false,
  ats = false,
}: {
  data: ResumeData;
  professional?: boolean;
  minimal?: boolean;
  ats?: boolean;
}) {
  return (
    <div className="space-y-4">
      {data.education.map(
        (item, index) => (
          <div
            key={index}
            className="resume-entry"
          >
            <div className="flex justify-between gap-4">
              <div>
                <h3
                  className={`font-bold ${
                    ats
                      ? "text-black"
                      : "text-slate-900"
                  }`}
                >
                  {item.degree ||
                    "Degree"}
                </h3>

                <p className="text-sm text-slate-600">
                  {item.college ||
                    "College / University"}
                </p>
              </div>

              <div className="text-right text-xs text-slate-500">
                {item.year && (
                  <p>
                    {item.year}
                  </p>
                )}

                {item.score && (
                  <p>
                    {item.score}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

/* =====================================================
   SIMPLE LIST
===================================================== */

function SimpleList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-1 pl-5 text-sm text-slate-700">
      {items.map(
        (item, index) => (
          <li
            key={index}
            className="list-disc"
          >
            {item}
          </li>
        )
      )}
    </ul>
  );
}

/* =====================================================
   SECTION COMPONENTS
===================================================== */

function ModernSidebarSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-7">
      <h2 className="mb-3 border-b border-white/20 pb-2 text-[10px] font-bold tracking-[0.2em] text-blue-400">
        {title}
      </h2>

      {children}
    </section>
  );
}

function ModernSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-1 w-7 bg-blue-600" />

        <h2 className="text-xs font-bold tracking-[0.2em] text-slate-900">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function ProfessionalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 border-b border-slate-400 pb-1 text-xs font-bold tracking-[0.14em] text-slate-900">
        {title}
      </h2>

      {children}
    </section>
  );
}

function MinimalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 text-[10px] font-bold tracking-[0.25em] text-slate-500">
        {title}
      </h2>

      {children}
    </section>
  );
}

function ATSSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-wider text-black">
        {title}
      </h2>

      {children}
    </section>
  );
}

/* =====================================================
   EDITOR COMPONENTS
===================================================== */

function EditorCard({
  icon,
  title,
  action,
  children,
}: {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-sm shadow-slate-200/50 backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            {icon}
          </div>

          <h2 className="font-bold">
            {title}
          </h2>
        </div>

        {action}
      </div>

      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  rows = 5,
}: {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
  rows?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

function AddButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 transition hover:bg-blue-100"
    >
      <Plus size={14} />
      Add
    </button>
  );
}

function EmptyText({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 px-4 py-7 text-center text-sm text-slate-400">
      {text}
    </div>
  );
}

function ListEditor({
  icon,
  title,
  items,
  add,
  update,
  remove,
  placeholder,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  add: () => void;
  update: (
    index: number,
    value: string
  ) => void;
  remove: (
    index: number
  ) => void;
  placeholder: string;
}) {
  return (
    <EditorCard
      icon={icon}
      title={title}
      action={
        <AddButton
          onClick={add}
        />
      }
    >
      <div className="space-y-3">
        {items.length ===
          0 && (
          <EmptyText
            text={`No ${title.toLowerCase()} added yet.`}
          />
        )}

        {items.map(
          (item, index) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <input
                type="text"
                value={item}
                placeholder={
                  placeholder
                }
                onChange={(e) =>
                  update(
                    index,
                    e.target
                      .value
                  )
                }
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  remove(index)
                }
                className="rounded-xl px-3 text-red-500 hover:bg-red-50"
              >
                <Trash2
                  size={17}
                />
              </button>
            </div>
          )
        )}
      </div>
    </EditorCard>
  );
}