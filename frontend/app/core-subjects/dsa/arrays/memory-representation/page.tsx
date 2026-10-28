"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"

import {
  BookOpen,
  Calculator,
  CheckCircle2,
  Code2,
  Cpu,
  Grid2X2,
  Info,
  Layers,
  Lightbulb,
  Map,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "memory-basics", number: "01", title: "Memory Basics" },
  { id: "contiguous", number: "02", title: "Contiguous Memory" },
  { id: "one-dimensional", number: "03", title: "1D Array" },
  { id: "address-formula", number: "04", title: "Address Formula" },
  { id: "two-dimensional", number: "05", title: "2D Array" },
  { id: "row-major", number: "06", title: "Row-Major Order" },
  { id: "column-major", number: "07", title: "Column-Major Order" },
  { id: "multidimensional", number: "08", title: "Multidimensional Array" },
  { id: "dynamic", number: "09", title: "Dynamic Memory" },
  { id: "sparse", number: "10", title: "Sparse Arrays" },
  { id: "comparison", number: "11", title: "Memory Comparison" },
  { id: "interview", number: "12", title: "Interview Points" },
]

const memoryFacts = [
  {
    title: "Contiguous Storage",
    description:
      "Array elements are normally stored in consecutive memory locations.",
  },
  {
    title: "Fixed Element Size",
    description:
      "For a given array type, every element occupies the same number of bytes.",
  },
  {
    title: "Base Address",
    description:
      "The base address represents the memory address of the first element.",
  },
  {
    title: "Index Based",
    description:
      "The index helps calculate the address of any element directly.",
  },
  {
    title: "Direct Access",
    description:
      "Because addresses can be calculated mathematically, random access is O(1).",
  },
  {
    title: "Memory Efficiency",
    description:
      "Arrays have low structural overhead compared with pointer-based structures.",
  },
]

export default function ArrayMemoryRepresentationPage() {
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
                  DSA • ARRAY MEMORY
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Understand Array
                  <span className="block text-slate-300">
                    Memory Representation.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Learn exactly how array elements are stored in memory,
                  how addresses are calculated, and how 1D, 2D and
                  multidimensional arrays are represented.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Memory Representation
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
                    "Contiguous memory",
                    "Address calculation",
                    "1D & 2D representation",
                    "Row & column major",
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
                    Complete Memory Guide
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
                    Array Memory Representation — Complete Guide
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

            {/* ================= 01 MEMORY BASICS ================= */}
            <div
              id="memory-basics"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="01"
                label="FUNDAMENTAL"
                title="How Arrays Use Memory"
                icon={<Cpu size={21} />}
              />

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
                <div>
                  <p className="text-sm leading-7 text-slate-600">
                    When an array is created, memory is reserved for all of
                    its elements. For a normal array, these elements are
                    stored in consecutive memory locations.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Suppose an integer array contains five elements and one
                    integer occupies 4 bytes. If the first element starts at
                    address 1000, the next elements will normally be located
                    at 1004, 1008, 1012 and 1016.
                  </p>

                  <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Core Idea
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      Base Address + Index × Element Size = Address of an
                      Array Element
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Memory View
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      ["1000", "arr[0]", "10"],
                      ["1004", "arr[1]", "20"],
                      ["1008", "arr[2]", "30"],
                      ["1012", "arr[3]", "40"],
                      ["1016", "arr[4]", "50"],
                    ].map(([address, index, value]) => (
                      <div
                        key={address}
                        className="grid grid-cols-3 items-center rounded-lg border border-slate-200 bg-white px-3 py-2"
                      >
                        <span className="font-mono text-[11px] text-blue-600">
                          {address}
                        </span>

                        <span className="text-center text-[11px] font-semibold text-slate-500">
                          {index}
                        </span>

                        <span className="text-right text-xs font-bold text-slate-800">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= 02 CONTIGUOUS ================= */}
            <div
              id="contiguous"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="MEMORY"
                title="Contiguous Memory Allocation"
                icon={<Map size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Contiguous means that array elements are placed next to each
                other in memory. There are no gaps between the elements
                caused by the array structure itself.
              </p>

              <div className="mt-6 overflow-x-auto">
                <div className="flex min-w-[650px]">
                  {[
                    ["1000", "A[0]", "10"],
                    ["1004", "A[1]", "20"],
                    ["1008", "A[2]", "30"],
                    ["1012", "A[3]", "40"],
                    ["1016", "A[4]", "50"],
                  ].map(([address, index, value]) => (
                    <div
                      key={address}
                      className="flex-1 border-r border-slate-200 last:border-r-0"
                    >
                      <div className="bg-[#071025] px-3 py-3 text-center text-[10px] font-bold text-blue-300">
                        {address}
                      </div>

                      <div className="border-b border-slate-200 bg-slate-50 px-3 py-5 text-center">
                        <p className="font-mono text-sm font-bold text-slate-800">
                          {value}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-400">
                          {index}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <FactCard
                  title="Sequential"
                  description="Elements follow one another in memory."
                />

                <FactCard
                  title="Predictable"
                  description="Address of an element can be calculated."
                />

                <FactCard
                  title="Fast Access"
                  description="Direct address calculation enables O(1) access."
                />
              </div>
            </div>

            {/* ================= 03 1D ================= */}
            <div
              id="one-dimensional"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="ONE DIMENSION"
                title="Memory Representation of 1D Array"
                icon={<Layers size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="C++ Array"
                  code={`int arr[5] = {
    10, 20, 30, 40, 50
};

// Assume:
// Base address = 1000
// sizeof(int) = 4 bytes`}
                />

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Representation
                  </p>

                  <div className="mt-4 space-y-2">
                    {[
                      ["arr[0]", "1000"],
                      ["arr[1]", "1004"],
                      ["arr[2]", "1008"],
                      ["arr[3]", "1012"],
                      ["arr[4]", "1016"],
                    ].map(([index, address]) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-white px-4 py-3"
                      >
                        <span className="font-mono text-xs font-bold text-slate-700">
                          {index}
                        </span>

                        <span className="font-mono text-xs text-blue-600">
                          {address}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#071025] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  General Formula
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-300">
                  LOC(A[i]) = Base(A) + (i × w)
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Where <strong>i</strong> is the index and <strong>w</strong>{" "}
                  is the size of each element in bytes.
                </p>
              </div>
            </div>

            {/* ================= 04 ADDRESS FORMULA ================= */}
            <div
              id="address-formula"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="ADDRESS CALCULATION"
                title="Address Formula in Detail"
                icon={<Calculator size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                The address of any element can be calculated when we know the
                base address, index and size of each element.
              </p>

              <div className="mt-6 rounded-2xl bg-[#071025] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Formula
                </p>

                <p className="mt-4 font-mono text-base text-slate-200">
                  Address(A[i]) = Base Address + (i × W)
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-[10px] text-slate-500">
                      BASE ADDRESS
                    </p>

                    <p className="mt-2 font-mono text-sm text-blue-300">
                      Address of A[0]
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-[10px] text-slate-500">
                      INDEX
                    </p>

                    <p className="mt-2 font-mono text-sm text-blue-300">
                      i
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-[10px] text-slate-500">
                      ELEMENT SIZE
                    </p>

                    <p className="mt-2 font-mono text-sm text-blue-300">
                      W bytes
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Numerical Example
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Suppose:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Base address = 1000</li>
                  <li>• Required index = 4</li>
                  <li>• Size of integer = 4 bytes</li>
                </ul>

                <div className="mt-5 rounded-xl bg-white p-5 font-mono text-sm text-blue-700 shadow-sm">
                  Address(A[4]) = 1000 + (4 × 4)
                  <br />
                  Address(A[4]) = 1016
                </div>
              </div>
            </div>

            {/* ================= 05 2D ================= */}
            <div
              id="two-dimensional"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="TWO DIMENSION"
                title="Memory Representation of 2D Array"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A two-dimensional array is logically represented as rows and
                columns. Although it looks like a table, its elements still
                have to be arranged in linear memory.
              </p>

              <div className="mt-6 overflow-x-auto">
                <div className="min-w-[500px]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Logical Representation
                  </p>

                  <div className="grid grid-cols-3 gap-1">
                    {[
                      ["A[0][0]", "10"],
                      ["A[0][1]", "20"],
                      ["A[0][2]", "30"],
                      ["A[1][0]", "40"],
                      ["A[1][1]", "50"],
                      ["A[1][2]", "60"],
                    ].map(([index, value]) => (
                      <div
                        key={index}
                        className="border border-slate-200 bg-slate-50 p-5 text-center"
                      >
                        <p className="font-mono text-xs font-bold text-blue-600">
                          {index}
                        </p>

                        <p className="mt-2 text-sm font-bold text-slate-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-violet-100 bg-violet-50 p-5">
                <div className="flex gap-3">
                  <Info
                    size={19}
                    className="mt-0.5 shrink-0 text-violet-600"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    A 2D array has two indexes: one for the row and one for
                    the column. In C/C++, a 2D array is stored in{" "}
                    <strong>row-major order</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 06 ROW MAJOR ================= */}
            <div
              id="row-major"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="C / C++"
                title="Row-Major Representation"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                In row-major order, all elements of the first row are stored
                first, followed by all elements of the second row, and so on.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Matrix
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-1">
                    {["1", "2", "3", "4", "5", "6"].map((value) => (
                      <div
                        key={value}
                        className="flex h-14 items-center justify-center border border-slate-200 bg-white text-sm font-bold text-slate-800"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#071025] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Memory Order
                  </p>

                  <p className="mt-5 font-mono text-sm leading-8 text-slate-300">
                    1 → 2 → 3 → 4 → 5 → 6
                  </p>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    First row completely, then second row.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-blue-50 p-5">
                <p className="text-sm font-semibold text-slate-700">
                  Row-major order is the representation used by C and C++
                  for built-in multidimensional arrays.
                </p>
              </div>
            </div>

            {/* ================= 07 COLUMN MAJOR ================= */}
            <div
              id="column-major"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="COMPARISON"
                title="Column-Major Representation"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                In column-major order, elements are stored column by column.
                The first column is stored completely before moving to the
                second column.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Logical Matrix
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-1">
                    {["1", "2", "3", "4", "5", "6"].map((value) => (
                      <div
                        key={value}
                        className="flex h-14 items-center justify-center border border-slate-200 bg-white text-sm font-bold text-slate-800"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#071025] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Memory Order
                  </p>

                  <p className="mt-5 font-mono text-sm leading-8 text-slate-300">
                    1 → 4 → 2 → 5 → 3 → 6
                  </p>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    First column completely, then second column, then third.
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Feature</th>
                      <th className="px-5 py-4">Row-Major</th>
                      <th className="px-5 py-4">Column-Major</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Storage", "Row by row", "Column by column"],
                      ["C/C++", "Used", "Not used for built-in arrays"],
                      ["First sequence", "First row", "First column"],
                      ["Example", "1,2,3,4,5,6", "1,4,2,5,3,6"],
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

            {/* ================= 08 MULTIDIMENSIONAL ================= */}
            <div
              id="multidimensional"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="MULTIDIMENSIONAL"
                title="Multidimensional Array Memory"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A multidimensional array has more than two dimensions. A 3D
                array can be visualized as multiple 2D matrices placed
                together. In memory, however, all elements are still arranged
                linearly.
              </p>

              <CodeCard
                title="3D Array Declaration"
                code={`int cube[2][3][4];

// Dimensions:
// 2 blocks
// 3 rows
// 4 columns

// Total elements:
// 2 × 3 × 4 = 24`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <FactCard
                  title="Dimension 1"
                  description="Number of blocks or outer groups."
                />

                <FactCard
                  title="Dimension 2"
                  description="Number of rows inside each block."
                />

                <FactCard
                  title="Dimension 3"
                  description="Number of columns inside each row."
                />
              </div>

              <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Total number of elements in a multidimensional array is the
                  product of all dimension sizes.
                </p>

                <p className="mt-3 font-mono text-sm font-bold text-indigo-700">
                  Total = D₁ × D₂ × D₃ × ... × Dₙ
                </p>
              </div>
            </div>

            {/* ================= 09 DYNAMIC ================= */}
            <div
              id="dynamic"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="MEMORY MANAGEMENT"
                title="Static vs Dynamic Array Memory"
                icon={<Cpu size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">
                    Static Array
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The size is determined as part of the array declaration
                    and a built-in array does not automatically resize itself.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#071025] p-4">
                    <pre className="text-xs leading-6 text-slate-300">
{`int arr[5];

arr[0] = 10;
arr[1] = 20;`}
                    </pre>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900">
                    Dynamically Allocated Array
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Memory can be requested dynamically at runtime. In modern
                    C++, containers such as vector are generally preferred for
                    resizable sequences.
                  </p>

                  <div className="mt-5 rounded-xl bg-[#071025] p-4">
                    <pre className="text-xs leading-6 text-slate-300">
{`int n = 5;

int* arr = new int[n];

delete[] arr;`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    For modern C++, prefer{" "}
                    <strong>std::vector</strong> when you need a resizable
                    array-like structure instead of manually managing dynamic
                    memory.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 10 SPARSE ================= */}
            <div
              id="sparse"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="SPECIAL CASE"
                title="Sparse Arrays & Sparse Matrices"
                icon={<Grid2X2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                A sparse structure contains a large number of zero or empty
                values compared with its total size. Storing every zero
                explicitly may waste memory.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Normal Matrix
                  </p>

                  <div className="mt-4 grid grid-cols-5 gap-1">
                    {[
                      "0",
                      "0",
                      "7",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "5",
                      "0",
                      "0",
                      "0",
                      "0",
                    ].map((value, index) => (
                      <div
                        key={`${value}-${index}`}
                        className="flex h-11 items-center justify-center border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Store Non-Zero Values
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#071025] text-white">
                          <th className="px-3 py-3 text-left">Row</th>
                          <th className="px-3 py-3 text-left">Column</th>
                          <th className="px-3 py-3 text-left">Value</th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["0", "2", "7"],
                          ["2", "0", "5"],
                        ].map((row) => (
                          <tr
                            key={`${row[0]}-${row[1]}`}
                            className="border-b border-slate-100"
                          >
                            <td className="px-3 py-3">{row[0]}</td>
                            <td className="px-3 py-3">{row[1]}</td>
                            <td className="px-3 py-3 font-bold text-blue-600">
                              {row[2]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <Info
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    Sparse matrix representation is especially useful when
                    most matrix entries are zero. Common representations
                    include storing only non-zero values along with their
                    row and column information.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= 11 COMPARISON ================= */}
            <div
              id="comparison"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="11"
                label="REVISION"
                title="Complete Memory Comparison"
                icon={<Target size={21} />}
              />

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[750px] border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Concept</th>
                      <th className="px-5 py-4">Key Point</th>
                      <th className="px-5 py-4">Important For</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "Contiguous Memory",
                        "Elements stored consecutively",
                        "Random access",
                      ],
                      [
                        "Base Address",
                        "Address of first element",
                        "Address calculation",
                      ],
                      [
                        "Element Size",
                        "Bytes occupied by each element",
                        "Address calculation",
                      ],
                      [
                        "1D Array",
                        "Single linear sequence",
                        "Basic DSA",
                      ],
                      [
                        "2D Array",
                        "Rows and columns",
                        "Matrix problems",
                      ],
                      [
                        "Row-Major",
                        "Row by row",
                        "C / C++ arrays",
                      ],
                      [
                        "Column-Major",
                        "Column by column",
                        "Language comparison",
                      ],
                      [
                        "Sparse Matrix",
                        "Store useful/non-zero data efficiently",
                        "Memory optimization",
                      ],
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

                        <td className="px-5 py-4 text-blue-600">
                          {row[2]}
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
                title="Important Interview Questions"
                icon={<Lightbulb size={21} />}
              />

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "What is contiguous memory allocation?",
                  "Why is array access O(1)?",
                  "What is the base address of an array?",
                  "How is the address of A[i] calculated?",
                  "What is the difference between logical index and memory address?",
                  "How are 2D arrays stored in C/C++?",
                  "What is row-major order?",
                  "What is column-major order?",
                  "Why does C++ use row-major order?",
                  "How is a 3D array represented in memory?",
                  "What is the difference between static and dynamic arrays?",
                  "What is a sparse matrix?",
                  "How can sparse matrix storage save memory?",
                  "How many elements are present in a 3D array?",
                  "Why does an array provide better cache locality?",
                ].map((question, index) => (
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
                    Memory Representation Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    In placement interviews and exams, these are the concepts
                    you should be able to explain without notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Contiguous memory",
                      "Base address",
                      "Element size",
                      "Address formula",
                      "1D representation",
                      "2D representation",
                      "Row-major order",
                      "Column-major order",
                      "Multidimensional arrays",
                      "Static memory",
                      "Dynamic memory",
                      "Sparse matrix",
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

function FactCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  )
}