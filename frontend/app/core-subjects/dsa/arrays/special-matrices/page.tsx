"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen,
  CheckCircle2,
  Code2,
  Grid2X2,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "triangular", number: "02", title: "Triangular Matrices" },
  { id: "lower", number: "03", title: "Lower Triangular" },
  { id: "upper", number: "04", title: "Upper Triangular" },
  { id: "diagonal", number: "05", title: "Diagonal Matrix" },
  { id: "tridiagonal", number: "06", title: "Tridiagonal Matrix" },
  { id: "comparison", number: "07", title: "Comparison" },
  { id: "representation", number: "08", title: "Vector Representation" },
  { id: "example", number: "09", title: "Worked Examples" },
  { id: "applications", number: "10", title: "Applications" },
  { id: "advantages", number: "11", title: "Advantages" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

const interviewQuestions = [
  "What is a special matrix?",
  "What is a triangular matrix?",
  "What is a lower triangular matrix?",
  "What is an upper triangular matrix?",
  "What is a diagonal matrix?",
  "What is a tridiagonal matrix?",
  "What is the difference between upper and lower triangular matrices?",
  "How many non-zero elements can a triangular matrix contain?",
  "How is a triangular matrix represented using a vector?",
  "How many elements are stored in a lower triangular matrix?",
  "How many elements are stored in an upper triangular matrix?",
  "How many elements are stored in a tridiagonal matrix?",
  "Why are special matrices memory efficient?",
  "Where are special matrices used?",
  "How can a special matrix be stored using one-dimensional representation?",
]

export default function SpecialMatricesPage() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10">

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-3xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300">
                  <Sparkles size={14} />
                  DSA • SPECIAL MATRICES
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Special Matrices.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Understand special matrices including triangular,
                  diagonal and tridiagonal matrices, their structure,
                  properties, vector representation and practical usage.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Triangular
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Tridiagonal
                  </span>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    C / C++
                  </span>

                </div>
              </div>

              <div className="w-full max-w-[290px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
                  WHAT YOU&apos;LL LEARN
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Special matrix fundamentals",
                    "Triangular matrices",
                    "Tridiagonal matrix",
                    "Vector representation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Complete Topic Guide
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            {/* ================= QUICK NAV ================= */}
            <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Complete Learning Path
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Special Matrices — Complete Guide
                  </h2>
                </div>

              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
                      {section.number}
                    </span>

                    <span className="text-xs font-semibold text-slate-700">
                      {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ================= 01 DEFINITION ================= */}
            <div
              id="definition"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="01"
                label="FUNDAMENTAL"
                title="What is a Special Matrix?"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A special matrix is a matrix that follows a particular
                structural pattern. Because of this fixed pattern, many
                elements may be known to be zero and do not need to be
                stored explicitly.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Special matrices are important in Data Structures because
                they allow us to save memory by storing only the useful
                elements instead of storing the complete matrix.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Simple Definition
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  A matrix having a specific structural pattern that can be
                  represented efficiently is called a special matrix.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Structure"
                  value="Fixed"
                  description="Elements follow a predefined pattern."
                />

                <InfoCard
                  title="Zero Elements"
                  value="Many"
                  description="Many positions may always contain zero."
                />

                <InfoCard
                  title="Storage"
                  value="Compact"
                  description="Only required elements can be stored."
                />

              </div>
            </div>

            {/* ================= 02 TRIANGULAR ================= */}
            <div
              id="triangular"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="TRIANGULAR"
                title="Triangular Matrices"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A triangular matrix is a square matrix in which all elements
                on one side of the main diagonal are zero.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="font-bold text-blue-900">
                    Lower Triangular
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    All elements above the main diagonal are zero.
                  </p>

                  <CodeCard
                    title="Example"
                    code={`1  0  0
2  3  0
4  5  6`}
                  />
                </div>

                <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
                  <h3 className="font-bold text-violet-900">
                    Upper Triangular
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    All elements below the main diagonal are zero.
                  </p>

                  <CodeCard
                    title="Example"
                    code={`1  2  3
0  4  5
0  0  6`}
                  />
                </div>

              </div>
            </div>

            {/* ================= 03 LOWER ================= */}
            <div
              id="lower"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="LOWER TRIANGULAR"
                title="Lower Triangular Matrix"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A lower triangular matrix is a square matrix in which every
                element above the main diagonal is zero.
              </p>

              <CodeCard
                title="Lower Triangular Matrix"
                code={`a11   0    0    0
a21   a22  0    0
a31   a32  a33  0
a41   a42  a43  a44`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Zero Region"
                  value="Above"
                  description="All elements above the main diagonal are zero."
                />

                <InfoCard
                  title="Stored Elements"
                  value="n(n+1)/2"
                  description="Number of useful positions in an n × n matrix."
                />

                <InfoCard
                  title="Example"
                  value="4 × 4"
                  description="A 4 × 4 lower triangular matrix stores 10 values."
                />

              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Important Formula
                </p>

                <p className="mt-4 font-mono text-xl font-bold text-blue-600">
                  n(n + 1) / 2
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  For n = 4, the number of stored elements is
                  4 × 5 / 2 = 10.
                </p>
              </div>
            </div>

            {/* ================= 04 UPPER ================= */}
            <div
              id="upper"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="UPPER TRIANGULAR"
                title="Upper Triangular Matrix"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                An upper triangular matrix is a square matrix in which every
                element below the main diagonal is zero.
              </p>

              <CodeCard
                title="Upper Triangular Matrix"
                code={`a11   a12   a13   a14
0     a22   a23   a24
0     0     a33   a34
0     0     0     a44`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Zero Region"
                  value="Below"
                  description="All elements below the main diagonal are zero."
                />

                <InfoCard
                  title="Stored Elements"
                  value="n(n+1)/2"
                  description="Number of useful positions in an n × n matrix."
                />

                <InfoCard
                  title="Example"
                  value="4 × 4"
                  description="A 4 × 4 upper triangular matrix stores 10 values."
                />

              </div>
            </div>

            {/* ================= 05 DIAGONAL ================= */}
            <div
              id="diagonal"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="DIAGONAL"
                title="Diagonal Matrix"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A diagonal matrix is a square matrix in which all elements
                outside the main diagonal are zero.
              </p>

              <CodeCard
                title="Example"
                code={`5   0   0   0
0   8   0   0
0   0   3   0
0   0   0   9`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Non-Zero Region"
                  value="Diagonal"
                  description="Only the main diagonal can contain non-zero values."
                />

                <InfoCard
                  title="Stored Elements"
                  value="n"
                  description="Only n diagonal values are required."
                />

                <InfoCard
                  title="Memory"
                  value="O(n)"
                  description="Storage is much smaller than n²."
                />

              </div>
            </div>

            {/* ================= 06 TRIDIAGONAL ================= */}
            <div
              id="tridiagonal"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="TRIDIAGONAL"
                title="Tridiagonal Matrix"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A tridiagonal matrix is a square matrix in which non-zero
                elements can occur only on the main diagonal, the diagonal
                immediately above it and the diagonal immediately below it.
              </p>

              <CodeCard
                title="Example"
                code={`a11  a12   0    0    0
a21  a22  a23   0    0
0    a32  a33  a34   0
0     0   a43  a44  a45
0     0    0   a54  a55`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Diagonals"
                  value="3"
                  description="Main diagonal plus one diagonal on each side."
                />

                <InfoCard
                  title="Maximum Storage"
                  value="3n − 2"
                  description="For an n × n tridiagonal matrix."
                />

                <InfoCard
                  title="Pattern"
                  value="Band"
                  description="Non-zero elements remain close to the main diagonal."
                />

              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  For an n × n tridiagonal matrix, the maximum number of
                  non-zero elements is:
                </p>

                <p className="mt-3 font-mono text-xl font-bold text-blue-600">
                  3n − 2
                </p>
              </div>
            </div>

            {/* ================= 07 COMPARISON ================= */}
            <div
              id="comparison"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="COMPARISON"
                title="Special Matrices Comparison"
                icon={<BookOpen size={21} />}
              />

              <div className="mt-6 overflow-x-auto">

                <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-xl">

                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Matrix</th>
                      <th className="px-5 py-4">Zero Region</th>
                      <th className="px-5 py-4">Stored Elements</th>
                      <th className="px-5 py-4">Pattern</th>
                    </tr>
                  </thead>

                  <tbody>

                    {[
                      ["Lower Triangular", "Above diagonal", "n(n+1)/2", "Lower half"],
                      ["Upper Triangular", "Below diagonal", "n(n+1)/2", "Upper half"],
                      ["Diagonal", "Outside diagonal", "n", "Main diagonal"],
                      ["Tridiagonal", "Outside 3 diagonals", "3n−2", "Band"],
                    ].map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="px-5 py-4 font-bold text-slate-800">
                          {row[0]}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {row[1]}
                        </td>

                        <td className="px-5 py-4 font-mono text-blue-600">
                          {row[2]}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {row[3]}
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>

            {/* ================= 08 REPRESENTATION ================= */}
            <div
              id="representation"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="STORAGE"
                title="Vector Representation"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Since many positions in special matrices are always zero,
                only the useful elements can be stored in a one-dimensional
                vector.
              </p>

              <CodeCard
                title="Lower Triangular Matrix"
                code={`1  0  0
2  3  0
4  5  6`}
              />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Instead of storing all 9 elements, we can store only the
                lower triangular elements:
              </p>

              <div className="mt-5 rounded-2xl bg-[#071025] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  One-Dimensional Vector
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-300">
                  [1, 2, 3, 4, 5, 6]
                </p>

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Normal Storage"
                  value="n²"
                  description="Complete n × n matrix storage."
                />

                <InfoCard
                  title="Triangular"
                  value="n(n+1)/2"
                  description="Only triangular elements are stored."
                />

                <InfoCard
                  title="Diagonal"
                  value="n"
                  description="Only diagonal elements are stored."
                />

              </div>
            </div>

            {/* ================= 09 EXAMPLE ================= */}
            <div
              id="example"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="EXAMPLE"
                title="Worked Examples"
                icon={<Code2 size={21} />}
              />

              <div className="grid gap-5 lg:grid-cols-2">

                <CodeCard
                  title="Lower Triangular"
                  code={`1  0  0  0
2  3  0  0
4  5  6  0
7  8  9  10`}
                />

                <CodeCard
                  title="Upper Triangular"
                  code={`1  2  3  4
0  5  6  7
0  0  8  9
0  0  0  10`}
                />

                <CodeCard
                  title="Diagonal"
                  code={`5  0  0
0  8  0
0  0  3`}
                />

                <CodeCard
                  title="Tridiagonal"
                  code={`1  2  0  0
3  4  5  0
0  6  7  8
0  0  9  10`}
                />

              </div>
            </div>

            {/* ================= 10 APPLICATIONS ================= */}
            <div
              id="applications"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="PRACTICAL"
                title="Applications of Special Matrices"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {[
                  [
                    "Linear Algebra",
                    "Triangular and diagonal matrices are widely used in matrix operations.",
                  ],
                  [
                    "Numerical Methods",
                    "Special structures can make numerical calculations more efficient.",
                  ],
                  [
                    "Scientific Computing",
                    "Large mathematical systems often contain structured matrices.",
                  ],
                  [
                    "Engineering",
                    "Matrix structures are used in modelling and solving systems.",
                  ],
                  [
                    "Computer Graphics",
                    "Matrix operations are fundamental to transformations.",
                  ],
                  [
                    "Data Structures",
                    "Vector representation demonstrates memory-efficient storage.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <h3 className="font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* ================= 11 ADVANTAGES ================= */}
            <div
              id="advantages"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="11"
                label="REVISION"
                title="Advantages & Limitations"
                icon={<Lightbulb size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

                  <h3 className="font-bold text-emerald-700">
                    Advantages
                  </h3>

                  <div className="mt-5 space-y-3">

                    {[
                      "Saves memory by avoiding known zero values.",
                      "Provides compact representation.",
                      "Useful for large structured matrices.",
                      "Can make some operations more efficient.",
                      "Easy to identify structural properties.",
                      "Useful for vector representation.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-emerald-600"
                        />
                        {item}
                      </div>
                    ))}

                  </div>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">

                  <h3 className="font-bold text-red-700">
                    Limitations
                  </h3>

                  <div className="mt-5 space-y-3">

                    {[
                      "Representation logic can be more complex.",
                      "Direct indexing may require formulas.",
                      "Not useful when the matrix is dense.",
                      "Incorrect indexing can access the wrong element.",
                      "Conversion between representations requires extra logic.",
                      "Higher-level operations may require specialized algorithms.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {item}
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            </div>

            {/* ================= 12 INTERVIEW ================= */}
            <div
              id="interview"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="12"
                label="PLACEMENT"
                title="Special Matrix Interview Questions"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-3 md:grid-cols-2">

                {interviewQuestions.map((question, index) => (
                  <div
                    key={question}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
                      {index + 1}
                    </span>

                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {question}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* ================= REVISION ================= */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Lightbulb size={20} />
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    Special Matrices Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Make sure you can explain and write these concepts
                    without looking at your notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      "Special matrix definition",
                      "Triangular matrices",
                      "Lower triangular matrix",
                      "Upper triangular matrix",
                      "Diagonal matrix",
                      "Tridiagonal matrix",
                      "Number of stored elements",
                      "Vector representation",
                      "Memory optimization",
                      "Worked examples",
                      "Applications",
                      "Advantages & limitations",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-blue-600"
                        />

                        {item}
                      </div>
                    ))}

                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionHeader({
  number,
  label,
  title,
  icon,
}: {
  number: string
  label: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>

        <div className="flex items-center gap-2">

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {label}
          </span>

          <span className="text-[10px] font-bold text-slate-300">
            {number}
          </span>

        </div>

        <h2 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">
          {title}
        </h2>

      </div>
    </div>
  )
}

function CodeCard({
  title,
  code,
}: {
  title: string
  code: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100">

      <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>
      </div>

      <div className="bg-[#071025] p-5">
        <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
          {code}
        </pre>
      </div>

    </div>
  )
}

function InfoCard({
  title,
  value,
  description,
}: {
  title: string
  value: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <p className="mt-3 font-mono text-2xl font-bold text-blue-600">
        {value}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  )
}