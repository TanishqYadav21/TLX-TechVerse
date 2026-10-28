"use client"

import Sidebar from "@/components/dashboard/Sidebar"

import {
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Grid2X2,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "need", number: "02", title: "Why Multidimensional Arrays" },
  { id: "two-dimensional", number: "03", title: "2D Arrays" },
  { id: "declaration", number: "04", title: "Declaration" },
  { id: "initialization", number: "05", title: "Initialization" },
  { id: "access", number: "06", title: "Accessing Elements" },
  { id: "input-output", number: "07", title: "Input & Output" },
  { id: "three-dimensional", number: "08", title: "3D Arrays" },
  { id: "higher-dimension", number: "09", title: "Higher Dimensions" },
  { id: "memory", number: "10", title: "Memory Layout" },
  { id: "advantages", number: "11", title: "Advantages & Limitations" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

const dimensions = [
  {
    dimension: "1D",
    structure: "Linear",
    example: "int arr[5]",
    use: "List of values",
  },
  {
    dimension: "2D",
    structure: "Rows × Columns",
    example: "int arr[3][4]",
    use: "Matrix / Table",
  },
  {
    dimension: "3D",
    structure: "Blocks × Rows × Columns",
    example: "int arr[2][3][4]",
    use: "Multiple matrices",
  },
  {
    dimension: "4D+",
    structure: "Multiple dimensions",
    example: "int arr[2][3][4][5]",
    use: "Complex datasets",
  },
]

const interviewQuestions = [
  "What is a multidimensional array?",
  "Why is a 2D array called an array of arrays?",
  "How do you declare a 2D array in C++?",
  "How do you initialize a 2D array?",
  "How are rows and columns represented?",
  "How do you access an element of a 2D array?",
  "How do you traverse a 2D array?",
  "What is a 3D array?",
  "How many elements are present in int arr[2][3][4]?",
  "How do you calculate the total elements of a multidimensional array?",
  "How is a multidimensional array stored in memory?",
  "What is row-major order?",
  "Can a multidimensional array have different data types?",
  "What happens if an index goes outside the declared range?",
  "Where are multidimensional arrays used in real-world applications?",
]

export default function MultidimensionalArrayPage() {
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
                  DSA • MULTIDIMENSIONAL ARRAY
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Multidimensional Arrays.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Understand multidimensional arrays from fundamentals to
                  advanced dimensions, including structure, declaration,
                  initialization, indexing, traversal and practical usage.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    2D Arrays
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    3D Arrays
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
                    "2D array fundamentals",
                    "Declaration & initialization",
                    "Indexing & traversal",
                    "3D & higher dimensions",
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
                    Multidimensional Array — Complete Guide
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
                title="What is a Multidimensional Array?"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A multidimensional array is an array that contains more than
                one index or dimension. It is used to organize data in a
                structured form such as rows and columns, multiple matrices,
                layers, blocks or higher-dimensional datasets.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                In C and C++, a multidimensional array can be understood as an
                array whose elements are themselves arrays. For example,
                <strong> int arr[3][4]</strong> represents 3 rows, where each
                row contains 4 integer elements.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Simple Definition
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  An array having two or more dimensions is called a
                  multidimensional array.
                </p>
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
                title="Why Do We Need Multidimensional Arrays?"
                icon={<Lightbulb size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A one-dimensional array is useful for storing a simple
                sequence. But many real-world problems naturally contain
                multiple dimensions. Multidimensional arrays allow related
                values to be grouped according to their structure.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  [
                    "Matrix",
                    "Store mathematical matrices using rows and columns.",
                  ],
                  [
                    "Table",
                    "Represent data arranged in rows and columns.",
                  ],
                  [
                    "Multiple Matrices",
                    "Store several 2D matrices inside a 3D structure.",
                  ],
                  [
                    "Complex Data",
                    "Represent datasets requiring several dimensions.",
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

            {/* ================= 03 2D ================= */}
            <div
              id="two-dimensional"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="2D ARRAY"
                title="Two-Dimensional Array"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A two-dimensional array contains rows and columns. It is the
                most commonly used multidimensional array and is frequently
                used for matrices, tables and grid-based problems.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Example
                  </p>

                  <div className="mt-4 grid grid-cols-4 gap-1">
                    {[
                      "10",
                      "20",
                      "30",
                      "40",
                      "50",
                      "60",
                      "70",
                      "80",
                    ].map((value, index) => (
                      <div
                        key={`${value}-${index}`}
                        className="flex h-16 items-center justify-center border border-slate-200 bg-slate-50"
                      >
                        <div className="text-center">
                          <p className="text-sm font-bold text-slate-800">
                            {value}
                          </p>

                          <p className="mt-1 font-mono text-[9px] text-slate-400">
                            [{Math.floor(index / 4)}][{index % 4}]
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <CodeCard
                  title="2D Array"
                  code={`int arr[2][4] = {
    {10, 20, 30, 40},
    {50, 60, 70, 80}
};`}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Rows"
                  value="2"
                  description="The first dimension represents rows."
                />

                <InfoCard
                  title="Columns"
                  value="4"
                  description="The second dimension represents columns."
                />

                <InfoCard
                  title="Elements"
                  value="8"
                  description="2 × 4 gives the total number of elements."
                />
              </div>
            </div>

            {/* ================= 04 DECLARATION ================= */}
            <div
              id="declaration"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="SYNTAX"
                title="Declaration of Multidimensional Arrays"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                The declaration specifies the data type, array name and size
                of every dimension.
              </p>

              <CodeCard
                title="General Syntax"
                code={`dataType arrayName[size1][size2]...[sizeN];`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <CodeCard
                  title="2D Declaration"
                  code={`int matrix[3][4];`}
                />

                <CodeCard
                  title="3D Declaration"
                  code={`int cube[2][3][4];`}
                />

                <CodeCard
                  title="4D Declaration"
                  code={`int data[2][3][4][5];`}
                />

                <CodeCard
                  title="Character 2D Array"
                  code={`char names[5][20];`}
                />
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Every dimension must have a valid size when declaring a
                  built-in fixed-size multidimensional array.
                </p>
              </div>
            </div>

            {/* ================= 05 INITIALIZATION ================= */}
            <div
              id="initialization"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="INITIALIZATION"
                title="Initializing Multidimensional Arrays"
                icon={<Layers size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Row-wise Initialization"
                  code={`int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};`}
                />

                <CodeCard
                  title="Flat Initialization"
                  code={`int matrix[2][3] = {
    1, 2, 3,
    4, 5, 6
};`}
                />

                <CodeCard
                  title="Partial Initialization"
                  code={`int matrix[2][3] = {
    {1, 2},
    {4}
};

// Remaining elements
// are initialized to 0.`}
                />

                <CodeCard
                  title="All Zero"
                  code={`int matrix[3][4] = {0};`}
                />
              </div>

              <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    When fewer initializers are provided than the total
                    elements, the remaining elements are initialized to zero
                    for aggregate initialization.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 06 ACCESS ================= */}
            <div
              id="access"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="INDEXING"
                title="Accessing Elements"
                icon={<Target size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                An element of a multidimensional array is accessed by
                providing one index for each dimension.
              </p>

              <CodeCard
                title="2D Access"
                code={`int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};

cout << matrix[0][0]; // 10
cout << matrix[0][2]; // 30
cout << matrix[1][1]; // 50
cout << matrix[1][2]; // 60`}
              />

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Index Structure
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {[
                    ["matrix[0][0]", "Row 0, Column 0"],
                    ["matrix[1][2]", "Row 1, Column 2"],
                    ["matrix[2][3]", "Row 2, Column 3"],
                  ].map(([code, meaning]) => (
                    <div
                      key={code}
                      className="rounded-xl bg-white p-4"
                    >
                      <p className="font-mono text-sm font-bold text-blue-600">
                        {code}
                      </p>

                      <p className="mt-2 text-xs text-slate-500">
                        {meaning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  C and C++ use <strong>zero-based indexing</strong>. For an
                  array declared as <strong>arr[3][4]</strong>, valid row
                  indexes are 0–2 and valid column indexes are 0–3.
                </p>
              </div>
            </div>

            {/* ================= 07 INPUT OUTPUT ================= */}
            <div
              id="input-output"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="PRACTICAL"
                title="Input and Output of 2D Arrays"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Nested loops are normally used to read and display all
                elements of a multidimensional array. The outer loop handles
                one dimension and the inner loop handles the next dimension.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Input"
                  code={`int rows = 3;
int cols = 4;

for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        cin >> arr[i][j];
    }
}`}
                />

                <CodeCard
                  title="Output"
                  code={`for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        cout << arr[i][j] << " ";
    }

    cout << endl;
}`}
                />
              </div>

              <div className="mt-6 rounded-xl bg-[#071025] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Loop Relationship
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-300">
                  Outer Loop → Rows
                  <br />
                  Inner Loop → Columns
                </p>
              </div>
            </div>

            {/* ================= 08 3D ================= */}
            <div
              id="three-dimensional"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="3D ARRAY"
                title="Three-Dimensional Array"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A three-dimensional array adds one more dimension to the
                normal row-and-column structure. It can be visualized as
                multiple 2D arrays or matrices grouped together.
              </p>

              <CodeCard
                title="Declaration"
                code={`int cube[2][3][4];`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Dimension 1"
                  value="2"
                  description="Two blocks or groups."
                />

                <InfoCard
                  title="Dimension 2"
                  value="3"
                  description="Three rows in each block."
                />

                <InfoCard
                  title="Dimension 3"
                  value="4"
                  description="Four columns in each row."
                />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Elements
                </p>

                <p className="mt-4 font-mono text-xl font-bold text-blue-600">
                  2 × 3 × 4 = 24
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Therefore, the array contains 24 integer elements.
                </p>
              </div>

              <CodeCard
                title="Accessing a 3D Element"
                code={`cube[0][1][2];

cube[1][2][3];

// Format:
// cube[block][row][column]`}
              />
            </div>

            {/* ================= 09 HIGHER ================= */}
            <div
              id="higher-dimension"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="ADVANCED"
                title="Four-Dimensional and Higher Arrays"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                C and C++ allow arrays with more than three dimensions.
                Although they are less common in basic DSA problems, they are
                useful when data naturally requires several dimensions.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <CodeCard
                  title="4D Array"
                  code={`int data[2][3][4][5];

// Total elements:
// 2 × 3 × 4 × 5
// = 120`}
                />

                <CodeCard
                  title="5D Array"
                  code={`int data[2][2][3][4][5];

// Total elements:
// 2 × 2 × 3 × 4 × 5
// = 240`}
                />
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Dimensions</th>
                      <th className="px-5 py-4">Example</th>
                      <th className="px-5 py-4">Total Elements</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["2D", "int a[3][4]", "12"],
                      ["3D", "int a[2][3][4]", "24"],
                      ["4D", "int a[2][3][4][5]", "120"],
                      ["5D", "int a[2][2][3][4][5]", "240"],
                    ].map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {row[0]}
                        </td>

                        <td className="px-5 py-4 font-mono text-blue-600">
                          {row[1]}
                        </td>

                        <td className="px-5 py-4 font-semibold text-slate-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ================= 10 MEMORY ================= */}
            <div
              id="memory"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="STORAGE"
                title="How Multidimensional Arrays Are Stored"
                icon={<Cpu size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Although a multidimensional array looks like a collection of
                tables or blocks, its elements are ultimately stored in a
                linear sequence of memory locations.
              </p>

              <div className="mt-6 rounded-2xl bg-[#071025] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Example
                </p>

                <p className="mt-4 font-mono text-sm leading-8 text-slate-300">
                  int arr[2][3] = {"{"}
                  <br />
                  &nbsp;&nbsp;{"{1, 2, 3},"}
                  <br />
                  &nbsp;&nbsp;{"{4, 5, 6}"}
                  <br />
                  {"}"};
                </p>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs text-slate-500">
                    Logical arrangement
                  </p>

                  <p className="mt-3 font-mono text-sm text-blue-300">
                    1 → 2 → 3 → 4 → 5 → 6
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  In C and C++, built-in multidimensional arrays use{" "}
                  <strong>row-major order</strong>, meaning the elements of a
                  row are stored together before the next row.
                </p>
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
                      "Naturally represents matrix and tabular data.",
                      "Easy to access elements using multiple indexes.",
                      "Useful for grid and matrix-based algorithms.",
                      "Provides structured organization of related data.",
                      "Supports multiple dimensions.",
                      "Simple and predictable indexing.",
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
                      "Higher dimensions can become difficult to visualize.",
                      "Large dimensions can require significant memory.",
                      "Fixed-size built-in arrays cannot resize automatically.",
                      "Incorrect indexing can cause out-of-bounds access.",
                      "Very high-dimensional structures can become complex to manage.",
                      "Nested loops become more complicated as dimensions increase.",
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

            {/* ================= DIMENSION TABLE ================= */}
            <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    QUICK REVISION
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Dimensions at a Glance
                  </h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Dimension</th>
                      <th className="px-5 py-4">Structure</th>
                      <th className="px-5 py-4">Example</th>
                      <th className="px-5 py-4">Typical Use</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dimensions.map((item) => (
                      <tr
                        key={item.dimension}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="px-5 py-4 font-bold text-slate-800">
                          {item.dimension}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {item.structure}
                        </td>

                        <td className="px-5 py-4 font-mono text-blue-600">
                          {item.example}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {item.use}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                title="Multidimensional Array Interview Questions"
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
                    Multidimensional Array Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Make sure you can explain and write these concepts
                    without looking at your notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Definition",
                      "Need for multidimensional arrays",
                      "2D arrays",
                      "Declaration",
                      "Initialization",
                      "Indexing",
                      "Input and output",
                      "3D arrays",
                      "Higher dimensions",
                      "Total elements",
                      "Memory layout",
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