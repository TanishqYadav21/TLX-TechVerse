"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  Grid2X2,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "need", number: "02", title: "Why Sparse Arrays" },
  { id: "sparse-matrix", number: "03", title: "Sparse Matrix" },
  { id: "representation", number: "04", title: "Representation" },
  { id: "triplet", number: "05", title: "Triplet Representation" },
  { id: "example", number: "06", title: "Worked Example" },
  { id: "conversion", number: "07", title: "Conversion" },
  { id: "advantages", number: "08", title: "Advantages" },
  { id: "applications", number: "09", title: "Applications" },
  { id: "implementation", number: "10", title: "C++ Implementation" },
  { id: "important", number: "11", title: "Important Points" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

const interviewQuestions = [
  "What is a sparse array?",
  "What is a sparse matrix?",
  "Why is sparse representation used?",
  "What is the difference between dense and sparse representation?",
  "How do you identify a sparse matrix?",
  "What is triplet representation?",
  "What information is stored in a triplet?",
  "How do you convert a normal matrix into sparse form?",
  "What are the advantages of sparse representation?",
  "What are the limitations of sparse representation?",
  "Where are sparse matrices used?",
  "How much memory can sparse representation save?",
  "What is the difference between zero and non-zero elements?",
  "Write a C++ program to represent a sparse matrix.",
  "When should sparse representation not be used?",
]

export default function SparseArraysPage() {
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
                  DSA • SPARSE ARRAYS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Sparse Arrays.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Understand sparse arrays and sparse matrices from
                  fundamentals to advanced representation, including
                  triplet representation, memory optimization and
                  practical implementation.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Sparse Matrix
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Triplet
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
                    "Sparse array fundamentals",
                    "Sparse matrix representation",
                    "Triplet representation",
                    "C++ implementation",
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
                    Sparse Arrays — Complete Guide
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
                title="What is a Sparse Array?"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A sparse array is an array in which most of the elements
                contain zero or a default value, while only a small number
                of elements contain meaningful data.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Instead of storing every element, sparse representation
                stores only the useful elements along with their positions.
                This helps reduce unnecessary memory consumption.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Simple Definition
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  An array or matrix having a large number of zero/default
                  values and comparatively fewer non-zero values is called
                  sparse.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Main Property"
                  value="Many Zeros"
                  description="Most elements contain zero or default values."
                />

                <InfoCard
                  title="Stored Data"
                  value="Non-Zero"
                  description="Useful values are stored with their positions."
                />

                <InfoCard
                  title="Main Benefit"
                  value="Memory"
                  description="Unnecessary zero values can be avoided."
                />

              </div>
            </div>

            {/* ================= 02 NEED ================= */}
            <div
              id="need"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="CONCEPT"
                title="Why Do We Need Sparse Arrays?"
                icon={<Lightbulb size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A normal array stores every element even when most of those
                elements are zero. For large matrices, this can result in
                considerable memory wastage.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Sparse representation solves this problem by storing only
                meaningful non-zero elements and information about their
                positions.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {[
                  [
                    "Memory Saving",
                    "Avoid storing large numbers of unnecessary zero values.",
                  ],
                  [
                    "Large Matrices",
                    "Useful when matrices contain very few non-zero values.",
                  ],
                  [
                    "Efficient Storage",
                    "Only useful data and its position are maintained.",
                  ],
                  [
                    "Real Applications",
                    "Useful in graphs, ML, scientific computing and search.",
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

            {/* ================= 03 SPARSE MATRIX ================= */}
            <div
              id="sparse-matrix"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="SPARSE MATRIX"
                title="Sparse Matrix"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A sparse matrix is a matrix in which most of the elements
                are zero and only a small number of elements are non-zero.
              </p>

              <CodeCard
                title="Example Sparse Matrix"
                code={`0   0   0   7
0   0   0   0
0   5   0   0
0   0   0   9`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Rows"
                  value="4"
                  description="The matrix contains four rows."
                />

                <InfoCard
                  title="Columns"
                  value="4"
                  description="The matrix contains four columns."
                />

                <InfoCard
                  title="Non-Zero"
                  value="3"
                  description="Only three positions contain useful values."
                />

              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Here, 13 out of 16 elements are zero. Therefore,
                  storing the complete matrix can waste memory.
                </p>
              </div>
            </div>

            {/* ================= 04 REPRESENTATION ================= */}
            <div
              id="representation"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="REPRESENTATION"
                title="Sparse Matrix Representation"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Sparse matrices can be represented in different ways
                depending on the requirement. The common idea is to avoid
                storing unnecessary zero values.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Normal"
                  value="m × n"
                  description="Every element of the matrix is stored."
                />

                <InfoCard
                  title="Sparse"
                  value="Non-Zero"
                  description="Only useful elements are stored."
                />

                <InfoCard
                  title="Position"
                  value="Row + Col"
                  description="Position of each non-zero element is stored."
                />

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Triplet Representation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Stores row, column and value for every non-zero element.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Compressed Representation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Uses compact structures to store non-zero data.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Linked Representation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Uses linked nodes to store values and their positions.
                  </p>
                </div>

              </div>
            </div>

            {/* ================= 05 TRIPLET ================= */}
            <div
              id="triplet"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="TRIPLET"
                title="Triplet Representation"
                icon={<Database size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Triplet representation is one of the simplest methods
                used to represent a sparse matrix. Each non-zero element
                is represented using three pieces of information.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="First"
                  value="Row"
                  description="Row index of the non-zero element."
                />

                <InfoCard
                  title="Second"
                  value="Column"
                  description="Column index of the non-zero element."
                />

                <InfoCard
                  title="Third"
                  value="Value"
                  description="Actual value stored at that position."
                />

              </div>

              <CodeCard
                title="Triplet Format"
                code={`Row     Column     Value
 i         j        value`}
              />

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  The first row of a triplet table can store the total
                  number of rows, total number of columns and total number
                  of non-zero elements.
                </p>
              </div>
            </div>

            {/* ================= 06 EXAMPLE ================= */}
            <div
              id="example"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="EXAMPLE"
                title="Worked Example"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Consider the following sparse matrix:
              </p>

              <CodeCard
                title="Original Matrix"
                code={`0   0   3
0   0   0
4   0   0`}
              />

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Non-Zero Elements
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">

                  <div className="rounded-xl bg-white p-4">
                    <p className="font-mono text-sm font-bold text-blue-600">
                      matrix[0][2] = 3
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      Row 0, Column 2
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="font-mono text-sm font-bold text-blue-600">
                      matrix[2][0] = 4
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      Row 2, Column 0
                    </p>
                  </div>

                </div>
              </div>

              <CodeCard
                title="Triplet Representation"
                code={`Row     Column     Value
 3         3          2
 0         2          3
 2         0          4`}
              />
            </div>

            {/* ================= 07 CONVERSION ================= */}
            <div
              id="conversion"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="CONVERSION"
                title="Converting Matrix into Sparse Form"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                To convert a normal matrix into sparse representation,
                scan every element and store only those elements whose
                value is not zero.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {[
                  ["01", "Read Matrix", "Find rows and columns."],
                  ["02", "Scan Elements", "Visit every matrix element."],
                  ["03", "Check Value", "Check whether value is non-zero."],
                  ["04", "Store Data", "Store row, column and value."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
                      {number}
                    </span>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl bg-[#071025] p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Basic Logic
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-300">
                  Scan every element
                  <br />
                  ↓
                  <br />
                  Check matrix[i][j] != 0
                  <br />
                  ↓
                  <br />
                  Store i, j and matrix[i][j]
                </p>

              </div>
            </div>

            {/* ================= 08 ADVANTAGES ================= */}
            <div
              id="advantages"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
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
                      "Reduces memory usage.",
                      "Avoids storing unnecessary zero values.",
                      "Useful for very large matrices.",
                      "Improves storage efficiency.",
                      "Useful for sparse real-world datasets.",
                      "Can improve processing for suitable algorithms.",
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
                      "Representation can be more complex.",
                      "Direct access may become harder.",
                      "Position information requires extra storage.",
                      "Not useful when most elements are non-zero.",
                      "Operations can require specialized algorithms.",
                      "Implementation can be more difficult than normal arrays.",
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

            {/* ================= 09 APPLICATIONS ================= */}
            <div
              id="applications"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="PRACTICAL"
                title="Applications of Sparse Arrays"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {[
                  [
                    "Graph Algorithms",
                    "Large graphs can contain many absent connections represented by zeros.",
                  ],
                  [
                    "Machine Learning",
                    "Feature matrices often contain a large number of zero values.",
                  ],
                  [
                    "Scientific Computing",
                    "Large mathematical and simulation matrices can be sparse.",
                  ],
                  [
                    "Image Processing",
                    "Some image representations contain many zero or empty values.",
                  ],
                  [
                    "Search Systems",
                    "Sparse feature vectors are useful in information retrieval.",
                  ],
                  [
                    "Engineering",
                    "Large engineering simulations may use sparse matrices.",
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

            {/* ================= 10 IMPLEMENTATION ================= */}
            <div
              id="implementation"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="IMPLEMENTATION"
                title="Sparse Matrix in C++"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                The following approach scans the matrix and prints only
                non-zero elements along with their row and column positions.
              </p>

              <div className="mt-6">
                <CodeCard
                  title="C++ Implementation"
                  code={`#include <iostream>
using namespace std;

int main() {

    int matrix[3][3] = {
        {0, 0, 3},
        {0, 0, 0},
        {4, 0, 0}
    };

    int rows = 3;
    int cols = 3;

    cout << "Row  Column  Value" << endl;

    for (int i = 0; i < rows; i++) {

        for (int j = 0; j < cols; j++) {

            if (matrix[i][j] != 0) {
                cout << i << "     "
                     << j << "       "
                     << matrix[i][j] << endl;
            }
        }
    }

    return 0;
}`}
                />
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  The condition{" "}
                  <strong>matrix[i][j] != 0</strong> ensures that only
                  non-zero elements are processed.
                </p>
              </div>
            </div>

            {/* ================= 11 IMPORTANT ================= */}
            <div
              id="important"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="11"
                label="QUICK REVISION"
                title="Important Points"
                icon={<BookOpen size={21} />}
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {[
                  "Sparse array contains many zero/default values.",
                  "Sparse matrix contains mostly zero elements.",
                  "Sparse representation saves memory.",
                  "Only non-zero elements need to be stored.",
                  "Triplet stores row, column and value.",
                  "The first triplet row can store matrix information.",
                  "Sparse representation is useful for large datasets.",
                  "Dense matrices are better when most values are non-zero.",
                  "Nested loops can be used to scan a matrix.",
                  "C++ uses zero-based indexing.",
                  "Applications include graphs and scientific computing.",
                  "Sparse structures require specialized handling.",
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

            {/* ================= 12 INTERVIEW ================= */}
            <div
              id="interview"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="12"
                label="PLACEMENT"
                title="Sparse Array Interview Questions"
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
                    Sparse Arrays Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Make sure you can explain and write these concepts
                    without looking at your notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      "Definition",
                      "Need for sparse arrays",
                      "Sparse matrix",
                      "Dense vs sparse",
                      "Representation",
                      "Triplet representation",
                      "Worked example",
                      "Conversion",
                      "C++ implementation",
                      "Memory optimization",
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