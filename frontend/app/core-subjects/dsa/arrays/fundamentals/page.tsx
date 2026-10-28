"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Grid2X2,
  Info,
  Layers,
  Lightbulb,
  PlayCircle,
  Search,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  {
    id: "definition",
    number: "01",
    title: "What is an Array?",
  },
  {
    id: "characteristics",
    number: "02",
    title: "Characteristics",
  },
  {
    id: "types",
    number: "03",
    title: "Types of Arrays",
  },
  {
    id: "declaration",
    number: "04",
    title: "Declaration & Initialization",
  },
  {
    id: "memory",
    number: "05",
    title: "Memory Representation",
  },
  {
    id: "operations",
    number: "06",
    title: "Basic Operations",
  },
  {
    id: "access",
    number: "07",
    title: "Access & Traversal",
  },
  {
    id: "update",
    number: "08",
    title: "Updating Elements",
  },
  {
    id: "search",
    number: "09",
    title: "Searching",
  },
  {
    id: "insert",
    number: "10",
    title: "Insertion",
  },
  {
    id: "delete",
    number: "11",
    title: "Deletion",
  },
  {
    id: "complexity",
    number: "12",
    title: "Time Complexity",
  },
  {
    id: "advantages",
    number: "13",
    title: "Advantages & Limitations",
  },
  {
    id: "interview",
    number: "14",
    title: "Interview Points",
  },
]

const characteristics = [
  {
    title: "Homogeneous",
    description:
      "A normal array stores elements of the same data type. For example, an int array stores integer values.",
  },
  {
    title: "Contiguous Memory",
    description:
      "Elements are normally stored in consecutive memory locations, which enables efficient direct access.",
  },
  {
    title: "Indexed",
    description:
      "Each element is identified by an index. In C and C++, indexing normally starts from 0.",
  },
  {
    title: "Fixed Size",
    description:
      "A static array has a fixed capacity decided when it is declared and cannot be directly resized.",
  },
  {
    title: "Random Access",
    description:
      "Any element can be accessed directly using its index without traversing previous elements.",
  },
  {
    title: "Linear Structure",
    description:
      "Elements are arranged sequentially in a logical linear order.",
  },
]

const operations = [
  {
    name: "Access",
    complexity: "O(1)",
    description: "Access an element directly using its index.",
  },
  {
    name: "Update",
    complexity: "O(1)",
    description: "Replace an existing element at a known index.",
  },
  {
    name: "Traversal",
    complexity: "O(n)",
    description: "Visit every element once.",
  },
  {
    name: "Linear Search",
    complexity: "O(n)",
    description: "Check elements one by one until the target is found.",
  },
  {
    name: "Binary Search",
    complexity: "O(log n)",
    description: "Possible on a sorted array by repeatedly dividing the search range.",
  },
  {
    name: "Insertion",
    complexity: "O(n)",
    description: "Insertion may require shifting existing elements.",
  },
  {
    name: "Deletion",
    complexity: "O(n)",
    description: "Deletion may require shifting elements to fill the gap.",
  },
]

const interviewPoints = [
  "Why does array indexing start from 0 in C/C++?",
  "Why is array access O(1)?",
  "What is contiguous memory allocation?",
  "What happens when an element is inserted at the beginning?",
  "Why is insertion expensive in an array?",
  "Why is deletion expensive in an array?",
  "Difference between static and dynamic arrays.",
  "Difference between array and linked list.",
  "What is the difference between array size and array capacity?",
  "What is row-major and column-major representation?",
  "How is the address of an array element calculated?",
  "What is a sparse array or sparse matrix?",
]

export default function ArrayFundamentalsPage() {
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

            <div className="relative">

              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-3xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300">
                    <Sparkles size={14} />
                    DSA • ARRAY FUNDAMENTALS
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Master Arrays.
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                    A complete guide to arrays covering fundamentals,
                    representation, memory, indexing, operations, searching,
                    insertion, deletion, complexity and interview concepts.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                      Complete Fundamentals
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                      C / C++
                    </span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                      Placement Ready
                    </span>
                  </div>
                </div>

                <div className="w-full max-w-[290px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
    WHAT YOU&apos;LL LEARN
  </p>

  <div className="mt-5 space-y-3">
    {[
      "Array structure & indexing",
      "Memory representation",
      "Array operations",
      "Searching & complexity",
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
      Complete Fundamentals
    </div>
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
                    Array Fundamentals — Complete Guide
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
                title="What is an Array?"
                icon={<Layers size={21} />}
              />

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_330px]">
                <div>
                  <p className="text-sm leading-7 text-slate-600">
                    An <strong>array</strong> is a linear data structure that
                    stores a fixed number of elements of the same data type in
                    a logically sequential manner. In languages such as C and
                    C++, a normal array occupies contiguous memory locations.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Each element is identified by an integer index. Because
                    the elements are stored in contiguous memory, the address
                    of any element can be calculated directly from the base
                    address and its index.
                  </p>

                  <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Simple Definition
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      Array = Collection of similar elements stored in
                      contiguous memory locations and accessed using indexes.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Example
                  </p>

                  <div className="mt-5 flex flex-wrap">
                    {["10", "20", "30", "40", "50"].map((value, index) => (
                      <div key={value} className="text-center">
                        <div className="flex h-12 w-14 items-center justify-center border border-slate-200 bg-white text-sm font-bold text-slate-800">
                          {value}
                        </div>

                        <p className="mt-1 text-[10px] font-semibold text-slate-400">
                          [{index}]
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    Here, <strong>arr[0]</strong> is 10 and{" "}
                    <strong>arr[4]</strong> is 50.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 02 CHARACTERISTICS ================= */}
            <div
              id="characteristics"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="CORE CONCEPT"
                title="Characteristics of Arrays"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {characteristics.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-bold text-blue-600 shadow-sm">
                        0{index + 1}
                      </span>

                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= 03 TYPES ================= */}
            <div
              id="types"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="CLASSIFICATION"
                title="Types of Arrays"
                icon={<Grid2X2 size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <ConceptCard
                  title="One-Dimensional Array"
                  description="A simple linear array where elements are arranged in a single sequence."
                  example={`int arr[5] = {10, 20, 30, 40, 50};`}
                />

                <ConceptCard
                  title="Two-Dimensional Array"
                  description="An array arranged in rows and columns, commonly used to represent matrices."
                  example={`int matrix[2][3] = {
  {1, 2, 3},
  {4, 5, 6}
};`}
                />

                <ConceptCard
                  title="Multidimensional Array"
                  description="An array having more than two dimensions, such as a 3D array."
                  example={`int cube[2][3][4];`}
                />
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <Info className="mt-0.5 shrink-0 text-amber-600" size={19} />

                  <p className="text-sm leading-6 text-slate-600">
                    <strong>Important:</strong> Static arrays and dynamic
                    arrays are also commonly discussed based on how their
                    memory size is managed. In C++, dynamic storage can be
                    handled using dynamically allocated memory or containers
                    such as <strong>vector</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 04 DECLARATION ================= */}
            <div
              id="declaration"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="C / C++"
                title="Declaration & Initialization"
                icon={<Code2 size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Declaration"
                  code={`int arr[5];

float marks[10];

char name[20];`}
                />

                <CodeCard
                  title="Initialization"
                  code={`int arr[5] = {
    10, 20, 30, 40, 50
};

int nums[] = {
    5, 10, 15
};`}
                />

                <CodeCard
                  title="Partial Initialization"
                  code={`int arr[5] = {
    10, 20
};`}
                />

                <CodeCard
                  title="All Zero Initialization"
                  code={`int arr[5] = {0};`}
                />
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  What happens with partial initialization?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  When fewer initializers are supplied for an array, the
                  remaining elements are initialized to zero for aggregate
                  initialization in this form.
                </p>
              </div>
            </div>

            {/* ================= 05 MEMORY ================= */}
            <div
              id="memory"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="MEMORY"
                title="Memory Representation"
                icon={<Cpu size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                One of the most important properties of an array is its
                contiguous memory representation. Suppose an integer array
                starts at address <strong>1000</strong> and each integer
                occupies <strong>4 bytes</strong>.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Index</th>
                      <th className="px-5 py-4">Element</th>
                      <th className="px-5 py-4">Address</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["0", "10", "1000"],
                      ["1", "20", "1004"],
                      ["2", "30", "1008"],
                      ["3", "40", "1012"],
                      ["4", "50", "1016"],
                    ].map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-700">
                          {row[0]}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row[1]}
                        </td>
                        <td className="px-5 py-4 font-mono font-semibold text-blue-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-xl bg-[#071025] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Address Formula
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-300 md:text-base">
                  Address(A[i]) = Base Address + (i × Size of Each Element)
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  For example, if base address = 1000, index = 3 and element
                  size = 4 bytes:
                </p>

                <p className="mt-2 font-mono text-sm text-emerald-300">
                  Address(A[3]) = 1000 + (3 × 4) = 1012
                </p>
              </div>
            </div>

            {/* ================= 2D MEMORY ================= */}
            <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <Grid2X2 className="text-violet-600" size={21} />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-600">
                    MULTIDIMENSIONAL ARRAYS
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Row-Major & Column-Major Representation
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Row-Major Order
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Elements are stored row by row. C and C++ use
                    row-major order for multidimensional arrays.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#071025] p-4 font-mono text-xs leading-7 text-slate-300">
                    {`1  2  3
4  5  6

Memory:
1 → 2 → 3 → 4 → 5 → 6`}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Column-Major Order
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Elements are stored column by column. Languages and
                    systems may use this representation differently.
                  </p>

                  <div className="mt-4 rounded-xl bg-[#071025] p-4 font-mono text-xs leading-7 text-slate-300">
                    {`1  2  3
4  5  6

Memory:
1 → 4 → 2 → 5 → 3 → 6`}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= 06 OPERATIONS ================= */}
            <div
              id="operations"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="OPERATIONS"
                title="Basic Array Operations"
                icon={<Layers size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ["Traversal", "Visit every element."],
                  ["Access", "Read an element using its index."],
                  ["Update", "Change an existing value."],
                  ["Insertion", "Add an element at a position."],
                  ["Deletion", "Remove an element."],
                  ["Searching", "Find a target element."],
                  ["Sorting", "Arrange elements in order."],
                  ["Merging", "Combine arrays or sequences."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <h3 className="font-bold text-slate-900">{title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= 07 ACCESS ================= */}
            <div
              id="access"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="ACCESS"
                title="Access & Traversal"
                icon={<Search size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Direct Access"
                  code={`int arr[5] = {
    10, 20, 30, 40, 50
};

cout << arr[2];

// Output:
// 30`}
                />

                <CodeCard
                  title="Traversal"
                  code={`for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}

// 10 20 30 40 50`}
                />
              </div>

              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong>Why is access O(1)?</strong> The address of an
                  element can be calculated directly using the base address,
                  index and element size. We do not need to visit previous
                  elements.
                </p>
              </div>
            </div>

            {/* ================= 08 UPDATE ================= */}
            <div
              id="update"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="UPDATE"
                title="Updating Array Elements"
                icon={<Code2 size={21} />}
              />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Updating means replacing the value stored at an existing
                index. Since the location is directly accessible, updating a
                known element takes constant time.
              </p>

              <div className="mt-5 rounded-xl bg-[#071025] p-6">
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`int arr[5] = {10, 20, 30, 40, 50};

// Update index 2
arr[2] = 100;

// Array becomes:
// 10 20 100 40 50`}
                </pre>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-blue-50 p-5">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-blue-600"
                  size={19}
                />

                <p className="text-sm leading-6 text-slate-600">
                  Updating an element does not require shifting other elements.
                  Therefore, updating a known index is generally{" "}
                  <strong>O(1)</strong>.
                </p>
              </div>
            </div>

            {/* ================= 09 SEARCH ================= */}
            <div
              id="search"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="SEARCHING"
                title="Searching in Arrays"
                icon={<Search size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Linear Search"
                  code={`int target = 30;

for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        cout << i;
        break;
    }
}`}
                />

                <CodeCard
                  title="Binary Search"
                  code={`int low = 0;
int high = n - 1;

while (low <= high) {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target)
        break;
}`}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Linear Search
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Works on sorted or unsorted arrays. Worst-case complexity
                    is O(n).
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Binary Search
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Requires a sorted array and repeatedly divides the search
                    range. Complexity is O(log n).
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 10 INSERTION ================= */}
            <div
              id="insert"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="INSERTION"
                title="Insertion in an Array"
                icon={<ArrowRight size={21} />}
              />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Inserting an element means adding a new value at a particular
                position. If the insertion is not at the end, existing
                elements generally need to be shifted to the right.
              </p>

              <div className="mt-6 rounded-xl bg-[#071025] p-6">
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`// Insert 25 at index 2

for (int i = n; i > 2; i--) {
    arr[i] = arr[i - 1];
}

arr[2] = 25;
n++;`}
                </pre>
              </div>

              <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong>Important:</strong> Insertion at the beginning can
                  require shifting almost every element, making the worst-case
                  complexity <strong>O(n)</strong>.
                </p>
              </div>
            </div>

            {/* ================= 11 DELETION ================= */}
            <div
              id="delete"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="11"
                label="DELETION"
                title="Deletion from an Array"
                icon={<ArrowLeft size={21} />}
              />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Deletion removes an element from a particular position. After
                removing an element from the middle or beginning, later
                elements are generally shifted to the left.
              </p>

              <div className="mt-6 rounded-xl bg-[#071025] p-6">
                <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`// Delete element at index 2

for (int i = 2; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}

n--;`}
                </pre>
              </div>

              <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong>Important:</strong> Deleting from the beginning or
                  middle usually requires shifting elements, so the worst-case
                  complexity is <strong>O(n)</strong>.
                </p>
              </div>
            </div>

            {/* ================= 12 COMPLEXITY ================= */}
            <div
              id="complexity"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="12"
                label="BIG-O"
                title="Array Time Complexity"
                icon={<Target size={21} />}
              />

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Operation</th>
                      <th className="px-5 py-4">Best</th>
                      <th className="px-5 py-4">Average</th>
                      <th className="px-5 py-4">Worst</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Access", "O(1)", "O(1)", "O(1)"],
                      ["Update", "O(1)", "O(1)", "O(1)"],
                      ["Traversal", "O(n)", "O(n)", "O(n)"],
                      ["Linear Search", "O(1)", "O(n)", "O(n)"],
                      ["Binary Search", "O(1)", "O(log n)", "O(log n)"],
                      ["Insertion", "O(1)*", "O(n)", "O(n)"],
                      ["Deletion", "O(1)*", "O(n)", "O(n)"],
                    ].map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 text-sm"
                      >
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`px-5 py-4 ${
                              index === 0
                                ? "font-semibold text-slate-800"
                                : "font-mono text-blue-600"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                * O(1) is possible in specific cases such as insertion or
                deletion at the end when capacity and conditions allow it.
              </p>
            </div>

            {/* ================= 13 ADVANTAGES ================= */}
            <div
              id="advantages"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="13"
                label="ANALYSIS"
                title="Advantages & Limitations"
                icon={<Info size={21} />}
              />

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                  <h3 className="font-bold text-emerald-700">
                    Advantages
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {[
                      "Fast random access",
                      "Simple and easy to understand",
                      "Good cache locality due to contiguous storage",
                      "Low per-element overhead",
                      "Useful for storing homogeneous data",
                      "Efficient for iteration",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                  <h3 className="font-bold text-red-700">
                    Limitations
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {[
                      "Static arrays have fixed size",
                      "Insertion can require shifting",
                      "Deletion can require shifting",
                      "Requires suitable contiguous storage",
                      "May waste allocated capacity",
                      "Normal arrays do not automatically grow",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= ARRAY VS LINKED LIST ================= */}
            <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <Layers className="text-indigo-600" size={21} />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600">
                    INTERVIEW CONCEPT
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Array vs Linked List
                  </h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Feature</th>
                      <th className="px-5 py-4">Array</th>
                      <th className="px-5 py-4">Linked List</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Memory", "Usually contiguous", "Usually non-contiguous"],
                      ["Access", "O(1)", "O(n)"],
                      ["Insertion", "Usually O(n)", "Can be O(1) with known node/position"],
                      ["Deletion", "Usually O(n)", "Can be O(1) with known node"],
                      ["Size", "Static array has fixed size", "Can grow/shrink dynamically"],
                      ["Extra Memory", "Low overhead", "Pointers/references require extra memory"],
                    ].map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {row[0]}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {row[1]}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ================= 14 INTERVIEW ================= */}
            <div
              id="interview"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="14"
                label="PLACEMENT"
                title="Important Interview Questions"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {interviewPoints.map((question, index) => (
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

            {/* ================= IMPORTANT NOTES ================= */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Lightbulb size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Placement Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Before moving ahead, make sure you can explain every point
                    below without looking at your notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Array definition",
                      "Indexing",
                      "Contiguous memory",
                      "Address calculation",
                      "1D and 2D arrays",
                      "Row-major representation",
                      "Traversal",
                      "Access and update",
                      "Insertion",
                      "Deletion",
                      "Linear search",
                      "Binary search",
                      "Time complexity",
                      "Array vs linked list",
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
        <p className="text-xs font-bold text-slate-700">{title}</p>
      </div>

      <div className="bg-[#071025] p-5">
        <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
          {code}
        </pre>
      </div>
    </div>
  )
}

function ConceptCard({
  title,
  description,
  example,
}: {
  title: string
  description: string
  example: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-4 rounded-xl bg-[#071025] p-4">
        <pre className="overflow-x-auto text-xs leading-6 text-slate-300">
          {example}
        </pre>
      </div>
    </div>
  )
}