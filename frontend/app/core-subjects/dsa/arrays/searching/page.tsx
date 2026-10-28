"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen,
  CheckCircle2,
  Code2,
  Grid2X2,
  Layers,
  Lightbulb,
  Search,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "linear", number: "02", title: "Linear Search" },
  { id: "algorithm", number: "03", title: "Linear Algorithm" },
  { id: "binary", number: "04", title: "Binary Search" },
  { id: "binary-algorithm", number: "05", title: "Binary Algorithm" },
  { id: "example", number: "06", title: "Worked Examples" },
  { id: "comparison", number: "07", title: "Comparison" },
  { id: "complexity", number: "08", title: "Time Complexity" },
  { id: "implementation", number: "09", title: "C++ Implementation" },
  { id: "applications", number: "10", title: "Applications" },
  { id: "advantages", number: "11", title: "Advantages & Limitations" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

const interviewQuestions = [
  "What is searching in an array?",
  "What is linear search?",
  "What is binary search?",
  "What is the difference between linear and binary search?",
  "Does binary search require a sorted array?",
  "What is the best-case complexity of linear search?",
  "What is the worst-case complexity of linear search?",
  "What is the best-case complexity of binary search?",
  "What is the worst-case complexity of binary search?",
  "Why is binary search faster than linear search?",
  "Can binary search be applied to an unsorted array?",
  "What is the role of low, high and mid in binary search?",
  "What happens when the element is not found?",
  "Write a C++ program for linear search.",
  "Write a C++ program for binary search.",
]

export default function SearchingPage() {
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
                  <Search size={14} />
                  DSA • ARRAY SEARCHING
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Searching in Arrays.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Understand array searching from fundamentals to efficient
                  searching techniques, including linear search, binary
                  search, algorithms, complexity and C++ implementation.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Linear Search
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Binary Search
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
                    "Searching fundamentals",
                    "Linear search",
                    "Binary search",
                    "Complexity & implementation",
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
                    Searching in Arrays — Complete Guide
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
                title="What is Searching in an Array?"
                icon={<Search size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Searching is the process of finding whether a particular
                element exists in an array and, if it exists, determining
                its position or index.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The value that we want to find is called the{" "}
                <strong>search key</strong> or target element.
                Depending on the structure of the array, different
                searching techniques can be used.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Simple Definition
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  Searching means locating a required element in a collection
                  of elements.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Input"
                  value="Array"
                  description="A collection of elements in which searching is performed."
                />

                <InfoCard
                  title="Target"
                  value="Key"
                  description="The element whose position we want to find."
                />

                <InfoCard
                  title="Output"
                  value="Index"
                  description="Position of the element or an indication that it was not found."
                />

              </div>
            </div>

            {/* ================= 02 LINEAR ================= */}
            <div
              id="linear"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="SEARCH TECHNIQUE"
                title="Linear Search"
                icon={<Search size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Linear search is the simplest searching technique. It checks
                every element of the array one by one from the beginning
                until the target element is found or the array ends.
              </p>

              <CodeCard
                title="Example"
                code={`Array:   10   25   30   45   60
Index:    0    1    2    3    4

Target = 45

10 → Not Match
25 → Not Match
30 → Not Match
45 → Match

Answer = Index 3`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Sorted?"
                  value="Not Required"
                  description="Linear search works on both sorted and unsorted arrays."
                />

                <InfoCard
                  title="Approach"
                  value="Sequential"
                  description="Elements are checked one after another."
                />

                <InfoCard
                  title="Worst Case"
                  value="O(n)"
                  description="The entire array may need to be checked."
                />

              </div>
            </div>

            {/* ================= 03 LINEAR ALGORITHM ================= */}
            <div
              id="algorithm"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="ALGORITHM"
                title="Linear Search Algorithm"
                icon={<Code2 size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {[
                  ["01", "Start", "Begin from the first element."],
                  ["02", "Compare", "Compare current element with target."],
                  ["03", "Move", "If not equal, move to next element."],
                  ["04", "Return", "Return index if found, otherwise not found."],
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

              <CodeCard
                title="Pseudocode"
                code={`LinearSearch(array, n, key)

for i = 0 to n - 1

    if array[i] == key
        return i

return -1`}
              />
            </div>

            {/* ================= 04 BINARY ================= */}
            <div
              id="binary"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="SEARCH TECHNIQUE"
                title="Binary Search"
                icon={<Search size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Binary search is an efficient searching technique that
                repeatedly divides a sorted array into two halves and
                determines which half can contain the target element.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Most Important Condition
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  Binary search requires the array to be sorted.
                </p>
              </div>

              <CodeCard
                title="Example"
                code={`Array:   10   20   30   40   50   60   70
Index:    0    1    2    3    4    5    6

Target = 60

low = 0
high = 6
mid = 3

array[3] = 40

60 > 40
Search right half

low = 4
high = 6
mid = 5

array[5] = 60

Match Found → Index 5`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoCard
                  title="Requirement"
                  value="Sorted"
                  description="The array must be sorted for binary search."
                />

                <InfoCard
                  title="Approach"
                  value="Divide"
                  description="The search space is divided into two halves."
                />

                <InfoCard
                  title="Worst Case"
                  value="O(log n)"
                  description="The search space is halved after each comparison."
                />

              </div>
            </div>

            {/* ================= 05 BINARY ALGORITHM ================= */}
            <div
              id="binary-algorithm"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="ALGORITHM"
                title="Binary Search Algorithm"
                icon={<Code2 size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {[
                  ["01", "Set Bounds", "Set low = 0 and high = n - 1."],
                  ["02", "Find Mid", "Calculate mid between low and high."],
                  ["03", "Compare", "Compare array[mid] with target."],
                  ["04", "Reduce", "Discard the half that cannot contain target."],
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

              <CodeCard
                title="Pseudocode"
                code={`BinarySearch(array, n, key)

low = 0
high = n - 1

while low <= high

    mid = low + (high - low) / 2

    if array[mid] == key
        return mid

    else if array[mid] < key
        low = mid + 1

    else
        high = mid - 1

return -1`}
              />
            </div>

            {/* ================= 06 EXAMPLES ================= */}
            <div
              id="example"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="EXAMPLE"
                title="Worked Examples"
                icon={<Grid2X2 size={21} />}
              />

              <div className="grid gap-5 lg:grid-cols-2">

                <CodeCard
                  title="Linear Search"
                  code={`Array = [15, 8, 23, 42, 7]

Target = 42

15 → No
8  → No
23 → No
42 → Yes

Answer = Index 3`}
                />

                <CodeCard
                  title="Binary Search"
                  code={`Array = [10, 20, 30, 40, 50, 60]

Target = 50

mid = 2
30 < 50

Search right half

mid = 4
50 == 50

Answer = Index 4`}
                />

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Linear Search
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Checks elements sequentially until the target is found.
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    Binary Search
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Repeatedly divides a sorted search range into halves.
                  </p>
                </div>

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
                title="Linear Search vs Binary Search"
                icon={<BookOpen size={21} />}
              />

              <div className="mt-6 overflow-x-auto">

                <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-xl">

                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Feature</th>
                      <th className="px-5 py-4">Linear Search</th>
                      <th className="px-5 py-4">Binary Search</th>
                    </tr>
                  </thead>

                  <tbody>

                    {[
                      ["Array Sorted?", "Not Required", "Required"],
                      ["Approach", "Sequential", "Divide & Conquer"],
                      ["Best Case", "O(1)", "O(1)"],
                      ["Average Case", "O(n)", "O(log n)"],
                      ["Worst Case", "O(n)", "O(log n)"],
                      ["Easy to Implement", "Yes", "Yes"],
                      ["Works on Unsorted Data", "Yes", "No"],
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

                        <td className="px-5 py-4 text-blue-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>

            {/* ================= 08 COMPLEXITY ================= */}
            <div
              id="complexity"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="COMPLEXITY"
                title="Time & Space Complexity"
                icon={<Layers size={21} />}
              />

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

                  <h3 className="font-bold text-blue-900">
                    Linear Search
                  </h3>

                  <div className="mt-5 space-y-4">

                    <ComplexityRow
                      label="Best Case"
                      value="O(1)"
                    />

                    <ComplexityRow
                      label="Average Case"
                      value="O(n)"
                    />

                    <ComplexityRow
                      label="Worst Case"
                      value="O(n)"
                    />

                    <ComplexityRow
                      label="Space"
                      value="O(1)"
                    />

                  </div>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">

                  <h3 className="font-bold text-violet-900">
                    Binary Search
                  </h3>

                  <div className="mt-5 space-y-4">

                    <ComplexityRow
                      label="Best Case"
                      value="O(1)"
                    />

                    <ComplexityRow
                      label="Average Case"
                      value="O(log n)"
                    />

                    <ComplexityRow
                      label="Worst Case"
                      value="O(log n)"
                    />

                    <ComplexityRow
                      label="Space"
                      value="O(1)"
                    />

                  </div>
                </div>

              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Binary search is significantly faster for large sorted
                  arrays because each comparison eliminates approximately
                  half of the remaining search space.
                </p>
              </div>
            </div>

            {/* ================= 09 IMPLEMENTATION ================= */}
            <div
              id="implementation"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="IMPLEMENTATION"
                title="Searching in C++"
                icon={<Code2 size={21} />}
              />

              <div className="grid gap-6 lg:grid-cols-2">

                <CodeCard
                  title="Linear Search"
                  code={`#include <iostream>
using namespace std;

int main() {

    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int key = 40;

    for (int i = 0; i < n; i++) {

        if (arr[i] == key) {
            cout << "Found at index "
                 << i;
            return 0;
        }
    }

    cout << "Not Found";

    return 0;
}`}
                />

                <CodeCard
                  title="Binary Search"
                  code={`#include <iostream>
using namespace std;

int main() {

    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int key = 40;

    int low = 0;
    int high = n - 1;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        if (arr[mid] == key) {
            cout << "Found at index "
                 << mid;
            return 0;
        }

        if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    cout << "Not Found";

    return 0;
}`}
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
                title="Applications of Array Searching"
                icon={<Target size={21} />}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {[
                  [
                    "Database Systems",
                    "Searching helps locate records matching a particular key.",
                  ],
                  [
                    "Student Records",
                    "Student roll numbers or IDs can be searched in arrays.",
                  ],
                  [
                    "E-Commerce",
                    "Product IDs and prices can be searched efficiently.",
                  ],
                  [
                    "Contact Lists",
                    "Names, phone numbers and IDs can be searched.",
                  ],
                  [
                    "Competitive Programming",
                    "Searching techniques are fundamental algorithmic tools.",
                  ],
                  [
                    "Operating Systems",
                    "Searching is used while locating entries in different data structures.",
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
                      "Linear search is simple to understand.",
                      "Linear search works on unsorted arrays.",
                      "Binary search is very efficient.",
                      "Binary search reduces the search space by half.",
                      "Both algorithms are easy to implement.",
                      "Searching is a fundamental operation in DSA.",
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
                      "Linear search can be slow for large arrays.",
                      "Linear search may check every element.",
                      "Binary search requires sorted data.",
                      "Maintaining sorted data can require extra work.",
                      "Binary search is not directly suitable for unsorted arrays.",
                      "Incorrect boundary handling can cause binary search errors.",
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
                title="Array Searching Interview Questions"
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
                    Searching in Arrays Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Make sure you can explain and implement these concepts
                    without looking at your notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      "Searching definition",
                      "Search key",
                      "Linear search",
                      "Linear search algorithm",
                      "Binary search",
                      "Sorted array requirement",
                      "Binary search algorithm",
                      "Low, high and mid",
                      "Worked examples",
                      "Time complexity",
                      "C++ implementation",
                      "Linear vs binary search",
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

function ComplexityRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200/70 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-slate-600">
        {label}
      </span>

      <span className="font-mono text-sm font-bold text-blue-600">
        {value}
      </span>
    </div>
  )
}