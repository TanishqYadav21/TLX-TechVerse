"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers,
  Lightbulb,
  Search,
  Sparkles,
  Target,
  Trash2,
} from "lucide-react"

const sections = [
  { id: "overview", number: "01", title: "Operations Overview" },
  { id: "traversal", number: "02", title: "Traversal" },
  { id: "access", number: "03", title: "Access" },
  { id: "update", number: "04", title: "Update" },
  { id: "insertion", number: "05", title: "Insertion" },
  { id: "deletion", number: "06", title: "Deletion" },
  { id: "searching", number: "07", title: "Searching" },
  { id: "sorting", number: "08", title: "Sorting" },
  { id: "merging", number: "09", title: "Merging" },
  { id: "complexity", number: "10", title: "Complexity" },
  { id: "edgecases", number: "11", title: "Edge Cases" },
  { id: "interview", number: "12", title: "Interview Points" },
]

const operations = [
  {
    name: "Traversal",
    complexity: "O(n)",
    description: "Visit each element of the array one by one.",
  },
  {
    name: "Access",
    complexity: "O(1)",
    description: "Read an element directly using its index.",
  },
  {
    name: "Update",
    complexity: "O(1)",
    description: "Replace the value at a known index.",
  },
  {
    name: "Insertion",
    complexity: "O(n)",
    description: "Add an element at a particular position.",
  },
  {
    name: "Deletion",
    complexity: "O(n)",
    description: "Remove an element and shift remaining elements.",
  },
  {
    name: "Linear Search",
    complexity: "O(n)",
    description: "Search elements sequentially.",
  },
  {
    name: "Binary Search",
    complexity: "O(log n)",
    description: "Search a sorted array by repeatedly dividing the range.",
  },
  {
    name: "Sorting",
    complexity: "Depends",
    description: "Arrange elements in ascending or descending order.",
  },
]

const interviewQuestions = [
  "Why is array access O(1)?",
  "Why does insertion at the beginning take O(n)?",
  "Why does deletion from the middle require shifting?",
  "How do you insert an element at a specific index?",
  "How do you delete an element from a specific index?",
  "Difference between insertion and update.",
  "Difference between linear search and binary search.",
  "Can binary search work on an unsorted array?",
  "What happens when an array becomes full?",
  "What is the complexity of traversing an array?",
  "What is the difference between logical size and physical capacity?",
  "How can array operations be optimized?",
]

export default function ArrayOperationsPage() {
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
                  DSA • ARRAY OPERATIONS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master Array
                  <span className="block text-slate-300">
                    Operations.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Learn traversal, access, update, insertion, deletion,
                  searching, sorting and merging with step-by-step logic,
                  examples and complexity analysis.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Complete Operations
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
                    "Traversal & direct access",
                    "Insertion & deletion",
                    "Searching techniques",
                    "Sorting & merging",
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
                    Complete Operations Guide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* QUICK NAV */}
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
                    Array Operations — Complete Guide
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

            {/* ================= OVERVIEW ================= */}
            <div
              id="overview"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="01"
                label="FUNDAMENTAL"
                title="Array Operations Overview"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Array operations are the basic actions performed on an array
                to read, modify, organize and manage its elements. The most
                important operations are traversal, access, update, insertion,
                deletion and searching. Sorting and merging are also common
                array-processing operations.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {operations.map((operation) => (
                  <div
                    key={operation.name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-slate-900">
                        {operation.name}
                      </h3>

                      <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                        {operation.complexity}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {operation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= TRAVERSAL ================= */}
            <div
              id="traversal"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="02"
                label="OPERATION"
                title="Array Traversal"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Traversal means visiting every element of an array exactly
                once or according to a required condition. It is commonly used
                for displaying elements, calculating sums, finding maximum or
                minimum values and processing every item.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Basic Traversal"
                  code={`int arr[] = {10, 20, 30, 40, 50};
int n = 5;

for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}

// Output:
// 10 20 30 40 50`}
                />

                <CodeCard
                  title="Reverse Traversal"
                  code={`for (int i = n - 1; i >= 0; i--) {
    cout << arr[i] << " ";
}

// Output:
// 50 40 30 20 10`}
                />
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong>Complexity:</strong> Traversing all n elements
                  requires <strong>O(n)</strong> time and generally{" "}
                  <strong>O(1)</strong> extra space when performed
                  iteratively.
                </p>
              </div>
            </div>

            {/* ================= ACCESS ================= */}
            <div
              id="access"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="03"
                label="OPERATION"
                title="Accessing Array Elements"
                icon={<Search size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Accessing means reading the value stored at a particular
                index. Since an array provides direct address calculation,
                accessing an element at a known index takes constant time.
              </p>

              <CodeCard
                title="Direct Access"
                code={`int arr[] = {10, 20, 30, 40, 50};

cout << arr[0];  // 10
cout << arr[2];  // 30
cout << arr[4];  // 50`}
              />

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ["First Element", "arr[0]", "O(1)"],
                  ["Middle Element", "arr[n/2]", "O(1)"],
                  ["Last Element", "arr[n-1]", "O(1)"],
                ].map(([title, code, complexity]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-slate-50 p-5"
                  >
                    <p className="text-xs font-bold text-slate-500">
                      {title}
                    </p>

                    <p className="mt-3 font-mono text-sm font-bold text-blue-600">
                      {code}
                    </p>

                    <span className="mt-3 inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                      {complexity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= UPDATE ================= */}
            <div
              id="update"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="04"
                label="MODIFICATION"
                title="Updating an Element"
                icon={<Code2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Updating means replacing an existing value with a new value.
                The index must be known because the new value is written
                directly to that memory location.
              </p>

              <CodeCard
                title="Update Example"
                code={`int arr[5] = {10, 20, 30, 40, 50};

// Update index 2
arr[2] = 100;

// Result:
// 10 20 100 40 50`}
              />

              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Updating a known index does not require shifting any other
                  element, so its time complexity is <strong>O(1)</strong>.
                </p>
              </div>
            </div>

            {/* ================= INSERTION ================= */}
            <div
              id="insertion"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="05"
                label="MODIFICATION"
                title="Insertion in an Array"
                icon={<ArrowRight size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Insertion means adding a new element at a particular position.
                In a normal fixed-size array, there must be available capacity.
                When inserting into the beginning or middle, existing elements
                have to be shifted towards the right.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Before Insertion
                </p>

                <div className="mt-4 flex flex-wrap">
                  {["10", "20", "30", "40"].map((value, index) => (
                    <div key={value} className="text-center">
                      <div className="flex h-12 w-16 items-center justify-center border border-slate-200 bg-white text-sm font-bold text-slate-800">
                        {value}
                      </div>

                      <p className="mt-1 text-[10px] text-slate-400">
                        [{index}]
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  Insert 25 at index 2
                </p>

                <div className="mt-4 flex flex-wrap">
                  {["10", "20", "25", "30", "40"].map((value, index) => (
                    <div key={`${value}-${index}`} className="text-center">
                      <div
                        className={`flex h-12 w-16 items-center justify-center border text-sm font-bold ${
                          value === "25"
                            ? "border-blue-300 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-white text-slate-800"
                        }`}
                      >
                        {value}
                      </div>

                      <p className="mt-1 text-[10px] text-slate-400">
                        [{index}]
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <CodeCard
                  title="Insertion Logic"
                  code={`int pos = 2;
int value = 25;

for (int i = n; i > pos; i--) {
    arr[i] = arr[i - 1];
}

arr[pos] = value;
n++;`}
                />

                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    What happens?
                  </h3>

                  <ol className="mt-4 space-y-3 text-sm text-slate-600">
                    <li>1. Select the insertion position.</li>
                    <li>2. Start from the last occupied element.</li>
                    <li>3. Shift elements one position right.</li>
                    <li>4. Place the new value.</li>
                    <li>5. Increase the logical size.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong>Complexity:</strong> Inserting at the end can be
                  O(1) when capacity is available. Inserting at the beginning
                  or middle can require shifting many elements, resulting in
                  <strong> O(n)</strong> worst-case time.
                </p>
              </div>
            </div>

            {/* ================= DELETION ================= */}
            <div
              id="deletion"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="06"
                label="MODIFICATION"
                title="Deletion from an Array"
                icon={<Trash2 size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Deletion removes an element from a particular position. To
                maintain the logical sequence, elements after the deleted
                position are shifted one position towards the left.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Delete element at index 2
                </p>

                <div className="mt-4 flex flex-wrap">
                  {["10", "20", "30", "40", "50"].map((value, index) => (
                    <div key={value} className="text-center">
                      <div
                        className={`flex h-12 w-16 items-center justify-center border text-sm font-bold ${
                          index === 2
                            ? "border-red-200 bg-red-50 text-red-500 line-through"
                            : "border-slate-200 bg-white text-slate-800"
                        }`}
                      >
                        {value}
                      </div>

                      <p className="mt-1 text-[10px] text-slate-400">
                        [{index}]
                      </p>
                    </div>
                  ))}
                </div>

                <div className="my-5 h-px bg-slate-200" />

                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  After Deletion
                </p>

                <div className="mt-4 flex flex-wrap">
                  {["10", "20", "40", "50"].map((value, index) => (
                    <div key={value} className="text-center">
                      <div className="flex h-12 w-16 items-center justify-center border border-slate-200 bg-white text-sm font-bold text-slate-800">
                        {value}
                      </div>

                      <p className="mt-1 text-[10px] text-slate-400">
                        [{index}]
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <CodeCard
                title="Deletion Logic"
                code={`int pos = 2;

for (int i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}

n--;`}
              />

              <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Deletion from the beginning or middle generally takes{" "}
                  <strong>O(n)</strong> because elements need to be shifted.
                </p>
              </div>
            </div>

            {/* ================= SEARCHING ================= */}
            <div
              id="searching"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="07"
                label="SEARCH"
                title="Searching in Arrays"
                icon={<Search size={21} />}
              />

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-bold text-slate-900">
                    Linear Search
                  </h3>

                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Linear search checks each element sequentially until the
                    target is found or the array ends.
                  </p>

                  <CodeCard
                    title="C++"
                    code={`int target = 30;

for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        cout << "Found at " << i;
        break;
    }
}`}
                  />
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-slate-900">
                    Binary Search
                  </h3>

                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Binary search repeatedly divides the search interval in
                    half. The array must be sorted.
                  </p>

                  <CodeCard
                    title="C++"
                    code={`int low = 0;
int high = n - 1;

while (low <= high) {
    int mid = low + (high - low) / 2;

    if (arr[mid] == target)
        break;

    if (arr[mid] < target)
        low = mid + 1;
    else
        high = mid - 1;
}`}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Linear Search
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Works on unsorted arrays. Worst-case: O(n).
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">
                    Binary Search
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Requires sorted data. Worst-case: O(log n).
                  </p>
                </div>
              </div>
            </div>

            {/* ================= SORTING ================= */}
            <div
              id="sorting"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="08"
                label="ORGANIZATION"
                title="Sorting an Array"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Sorting means arranging array elements in a particular order,
                commonly ascending or descending. Sorting is especially
                important because algorithms such as binary search require
                sorted data.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  ["Bubble Sort", "O(n²)", "Repeatedly swaps adjacent elements."],
                  ["Selection Sort", "O(n²)", "Selects the minimum element repeatedly."],
                  ["Insertion Sort", "O(n²)", "Builds a sorted portion one element at a time."],
                  ["Merge Sort", "O(n log n)", "Divide-and-conquer sorting algorithm."],
                  ["Quick Sort", "O(n log n)*", "Uses partitioning around a pivot."],
                  ["Heap Sort", "O(n log n)", "Uses heap structure for sorting."],
                ].map(([name, complexity, description]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900">{name}</h3>

                      <span className="rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
                        {complexity}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-slate-400">
                * Quick Sort has O(n log n) average complexity but O(n²)
                worst-case complexity with unfavorable partitions.
              </p>
            </div>

            {/* ================= MERGING ================= */}
            <div
              id="merging"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="09"
                label="PROCESSING"
                title="Merging Arrays"
                icon={<Layers size={21} />}
              />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Merging means combining elements from two or more arrays into
                another array. If both arrays are sorted, they can be merged
                efficiently using the two-pointer technique.
              </p>

              <CodeCard
                title="Merge Two Sorted Arrays"
                code={`int i = 0;
int j = 0;
int k = 0;

while (i < n && j < m) {
    if (a[i] < b[j])
        c[k++] = a[i++];
    else
        c[k++] = b[j++];
}

while (i < n)
    c[k++] = a[i++];

while (j < m)
    c[k++] = b[j++];`}
              />

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  Merging two already sorted arrays of sizes{" "}
                  <strong>n</strong> and <strong>m</strong> takes{" "}
                  <strong>O(n + m)</strong> time using the two-pointer
                  approach.
                </p>
              </div>
            </div>

            {/* ================= COMPLEXITY ================= */}
            <div
              id="complexity"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="10"
                label="BIG-O"
                title="Complete Complexity Table"
                icon={<Target size={21} />}
              />

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse overflow-hidden rounded-xl">
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

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 p-5">
                  <p className="text-xs font-bold text-emerald-600">
                    FAST
                  </p>
                  <p className="mt-2 font-mono text-lg font-bold text-slate-800">
                    O(1)
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Access / Update
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    LINEAR
                  </p>
                  <p className="mt-2 font-mono text-lg font-bold text-slate-800">
                    O(n)
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Traversal / Search
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-5">
                  <p className="text-xs font-bold text-violet-600">
                    LOGARITHMIC
                  </p>
                  <p className="mt-2 font-mono text-lg font-bold text-slate-800">
                    O(log n)
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Binary Search
                  </p>
                </div>
              </div>
            </div>

            {/* ================= EDGE CASES ================= */}
            <div
              id="edgecases"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="11"
                label="IMPORTANT"
                title="Edge Cases You Must Handle"
                icon={<Lightbulb size={21} />}
              />

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Array is empty.",
                  "Array contains only one element.",
                  "Insertion at the first position.",
                  "Insertion at the last position.",
                  "Insertion when the array is full.",
                  "Deletion of the first element.",
                  "Deletion of the last element.",
                  "Deletion of the only element.",
                  "Searching for a missing element.",
                  "Duplicate elements are present.",
                  "Array is already sorted.",
                  "Array is sorted in descending order.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= INTERVIEW ================= */}
            <div
              id="interview"
              className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <SectionHeader
                number="12"
                label="PLACEMENT"
                title="Important Interview Questions"
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
                    Operations Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Before moving to the next Array topic, make sure you can
                    write and explain each of these without looking at notes.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Traversal",
                      "Direct Access",
                      "Update",
                      "Insertion",
                      "Deletion",
                      "Linear Search",
                      "Binary Search",
                      "Sorting",
                      "Merging",
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

/* ================= REUSABLE COMPONENT ================= */

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