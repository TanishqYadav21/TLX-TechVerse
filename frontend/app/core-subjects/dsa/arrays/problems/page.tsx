"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Lightbulb,
  Sparkles,
  Trophy,
} from "lucide-react"

const problems = [
  {
    no: "01",
    title: "Find Maximum and Minimum",
    difficulty: "Easy",
    description: "Find the largest and smallest element present in an array.",
    approach: "Traverse the array once and maintain minimum and maximum values.",
    code: `int mn = arr[0];
int mx = arr[0];

for (int i = 1; i < n; i++) {
    mn = min(mn, arr[i]);
    mx = max(mx, arr[i]);
}`,
    complexity: "O(n)",
  },
  {
    no: "02",
    title: "Find Second Largest Element",
    difficulty: "Easy",
    description: "Find the second largest distinct element of an array.",
    approach: "Maintain largest and second largest values during one traversal.",
    code: `int largest = INT_MIN;
int second = INT_MIN;

for (int x : arr) {
    if (x > largest) {
        second = largest;
        largest = x;
    }
    else if (x > second && x != largest) {
        second = x;
    }
}`,
    complexity: "O(n)",
  },
  {
    no: "03",
    title: "Reverse an Array",
    difficulty: "Easy",
    description: "Reverse the elements of an array in-place.",
    approach: "Use two pointers from both ends and swap elements.",
    code: `int left = 0;
int right = n - 1;

while (left < right) {
    swap(arr[left], arr[right]);
    left++;
    right--;
}`,
    complexity: "O(n)",
  },
  {
    no: "04",
    title: "Remove Duplicates",
    difficulty: "Easy",
    description: "Remove duplicate values from an array.",
    approach: "For a sorted array, keep a pointer for the next unique element.",
    code: `int j = 0;

for (int i = 1; i < n; i++) {
    if (arr[i] != arr[j]) {
        arr[++j] = arr[i];
    }
}

int newSize = j + 1;`,
    complexity: "O(n)",
  },
  {
    no: "05",
    title: "Find Duplicate Element",
    difficulty: "Easy",
    description: "Find the repeated element in an array containing a duplicate.",
    approach: "Use a frequency structure or an appropriate mathematical technique based on constraints.",
    code: `for (int i = 0; i < n; i++) {
    freq[arr[i]]++;
}

for (auto x : freq) {
    if (x.second > 1) {
        cout << x.first;
        break;
    }
}`,
    complexity: "O(n)",
  },
  {
    no: "06",
    title: "Find Missing Number",
    difficulty: "Easy",
    description: "Find the missing number from values ranging from 1 to n.",
    approach: "Compare the expected sum with the actual array sum.",
    code: `long long expected = 1LL * n * (n + 1) / 2;
long long actual = 0;

for (int x : arr)
    actual += x;

cout << expected - actual;`,
    complexity: "O(n)",
  },
  {
    no: "07",
    title: "Count Frequency of Elements",
    difficulty: "Easy",
    description: "Count how many times every element occurs.",
    approach: "Use a map or frequency array.",
    code: `map<int, int> freq;

for (int x : arr) {
    freq[x]++;
}

for (auto p : freq) {
    cout << p.first << " "
         << p.second << endl;
}`,
    complexity: "O(n log n)",
  },
  {
    no: "08",
    title: "Find Pair with Given Sum",
    difficulty: "Easy",
    description: "Find whether two elements exist whose sum equals a target.",
    approach: "Store previously seen values and check target - current value.",
    code: `unordered_set<int> seen;

for (int x : arr) {
    int need = target - x;

    if (seen.count(need)) {
        cout << "Pair Found";
        return 0;
    }

    seen.insert(x);
}

cout << "Pair Not Found";`,
    complexity: "O(n) average",
  },
  {
    no: "09",
    title: "Move All Zeros to End",
    difficulty: "Easy",
    description: "Move every zero to the end while maintaining the order of non-zero elements.",
    approach: "Place non-zero elements from the beginning and fill remaining positions with zero.",
    code: `int j = 0;

for (int i = 0; i < n; i++) {
    if (arr[i] != 0) {
        arr[j++] = arr[i];
    }
}

while (j < n) {
    arr[j++] = 0;
}`,
    complexity: "O(n)",
  },
  {
    no: "10",
    title: "Separate Even and Odd Elements",
    difficulty: "Easy",
    description: "Arrange the array so that even and odd elements are separated.",
    approach: "Use two pointers and swap elements when they are on the wrong side.",
    code: `int left = 0;
int right = n - 1;

while (left < right) {
    while (left < right && arr[left] % 2 == 0)
        left++;

    while (left < right && arr[right] % 2 != 0)
        right--;

    if (left < right)
        swap(arr[left], arr[right]);
}`,
    complexity: "O(n)",
  },
  {
    no: "11",
    title: "Left Rotate an Array",
    difficulty: "Easy",
    description: "Rotate the elements of an array to the left by one position.",
    approach: "Save the first element and shift remaining elements left.",
    code: `int first = arr[0];

for (int i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}

arr[n - 1] = first;`,
    complexity: "O(n)",
  },
  {
    no: "12",
    title: "Right Rotate an Array",
    difficulty: "Easy",
    description: "Rotate the elements of an array to the right by one position.",
    approach: "Save the last element and shift remaining elements right.",
    code: `int last = arr[n - 1];

for (int i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = last;`,
    complexity: "O(n)",
  },
  {
    no: "13",
    title: "Merge Two Arrays",
    difficulty: "Easy",
    description: "Combine the elements of two arrays into a single array.",
    approach: "Copy the first array followed by the second array.",
    code: `vector<int> result;

for (int x : a)
    result.push_back(x);

for (int x : b)
    result.push_back(x);`,
    complexity: "O(n + m)",
  },
  {
    no: "14",
    title: "Merge Two Sorted Arrays",
    difficulty: "Medium",
    description: "Merge two sorted arrays into one sorted array.",
    approach: "Use two pointers and always select the smaller current element.",
    code: `int i = 0, j = 0;

while (i < n && j < m) {
    if (a[i] <= b[j])
        result.push_back(a[i++]);
    else
        result.push_back(b[j++]);
}

while (i < n)
    result.push_back(a[i++]);

while (j < m)
    result.push_back(b[j++]);`,
    complexity: "O(n + m)",
  },
  {
    no: "15",
    title: "Find Common Elements",
    difficulty: "Easy",
    description: "Find elements that occur in both arrays.",
    approach: "Use a set or frequency structure to identify common values.",
    code: `unordered_set<int> s;

for (int x : a)
    s.insert(x);

for (int x : b) {
    if (s.count(x)) {
        cout << x << " ";
    }
}`,
    complexity: "O(n + m) average",
  },
  {
    no: "16",
    title: "Intersection of Two Arrays",
    difficulty: "Medium",
    description: "Find the intersection of two arrays.",
    approach: "Use sets or two pointers after sorting both arrays.",
    code: `sort(a.begin(), a.end());
sort(b.begin(), b.end());

int i = 0, j = 0;

while (i < a.size() && j < b.size()) {

    if (a[i] == b[j]) {
        cout << a[i] << " ";
        i++;
        j++;
    }
    else if (a[i] < b[j])
        i++;
    else
        j++;
}`,
    complexity: "O(n log n + m log m)",
  },
  {
    no: "17",
    title: "Union of Two Arrays",
    difficulty: "Medium",
    description: "Find all distinct elements present in either of two arrays.",
    approach: "Insert elements from both arrays into a set.",
    code: `set<int> result;

for (int x : a)
    result.insert(x);

for (int x : b)
    result.insert(x);

for (int x : result)
    cout << x << " ";`,
    complexity: "O((n + m) log(n + m))",
  },
  {
    no: "18",
    title: "Largest Difference",
    difficulty: "Medium",
    description: "Find the maximum difference between two elements where the larger value occurs after the smaller value.",
    approach: "Maintain the minimum value seen so far and maximize the difference.",
    code: `int mn = arr[0];
int answer = INT_MIN;

for (int i = 1; i < n; i++) {
    answer = max(answer, arr[i] - mn);
    mn = min(mn, arr[i]);
}`,
    complexity: "O(n)",
  },
  {
    no: "19",
    title: "Majority Element",
    difficulty: "Medium",
    description: "Find an element that occurs more than n/2 times.",
    approach: "Use Moore's Voting Algorithm.",
    code: `int candidate = 0;
int count = 0;

for (int x : arr) {

    if (count == 0)
        candidate = x;

    if (x == candidate)
        count++;
    else
        count--;
}

cout << candidate;`,
    complexity: "O(n)",
  },
  {
    no: "20",
    title: "Check if Array is Sorted",
    difficulty: "Easy",
    description: "Determine whether the array is sorted in non-decreasing order.",
    approach: "Compare every element with the next element.",
    code: `bool sorted = true;

for (int i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
        sorted = false;
        break;
    }
}

cout << (sorted ? "Sorted" : "Not Sorted");`,
    complexity: "O(n)",
  },
  {
    no: "21",
    title: "Leaders in an Array",
    difficulty: "Medium",
    description: "Find elements that are greater than all elements to their right.",
    approach: "Traverse from right to left while maintaining the maximum value.",
    code: `int mx = arr[n - 1];

cout << mx << " ";

for (int i = n - 2; i >= 0; i--) {

    if (arr[i] > mx) {
        mx = arr[i];
        cout << mx << " ";
    }
}`,
    complexity: "O(n)",
  },
  {
    no: "22",
    title: "Maximum Subarray Sum",
    difficulty: "Medium",
    description: "Find the maximum possible sum of a contiguous subarray.",
    approach: "Use Kadane's Algorithm.",
    code: `int current = arr[0];
int best = arr[0];

for (int i = 1; i < n; i++) {
    current = max(arr[i], current + arr[i]);
    best = max(best, current);
}

cout << best;`,
    complexity: "O(n)",
  },
  {
    no: "23",
    title: "Subarray with Given Sum",
    difficulty: "Medium",
    description: "Find whether a contiguous subarray has a required sum.",
    approach: "For positive values, maintain a sliding window.",
    code: `int left = 0;
int sum = 0;

for (int right = 0; right < n; right++) {

    sum += arr[right];

    while (sum > target && left <= right)
        sum -= arr[left++];

    if (sum == target) {
        cout << "Found";
        return 0;
    }
}

cout << "Not Found";`,
    complexity: "O(n)",
  },
  {
    no: "24",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Find two elements whose sum equals the target value.",
    approach: "Store values already seen and search for the required complement.",
    code: `unordered_map<int, int> mp;

for (int i = 0; i < n; i++) {

    int need = target - arr[i];

    if (mp.count(need)) {
        cout << mp[need] << " " << i;
        return 0;
    }

    mp[arr[i]] = i;
}`,
    complexity: "O(n) average",
  },
  {
    no: "25",
    title: "Sort 0s, 1s and 2s",
    difficulty: "Medium",
    description: "Sort an array containing only 0, 1 and 2.",
    approach: "Use the Dutch National Flag algorithm.",
    code: `int low = 0;
int mid = 0;
int high = n - 1;

while (mid <= high) {

    if (arr[mid] == 0)
        swap(arr[low++], arr[mid++]);

    else if (arr[mid] == 1)
        mid++;

    else
        swap(arr[mid], arr[high--]);
}`,
    complexity: "O(n)",
  },
  {
    no: "26",
    title: "Equilibrium Index",
    difficulty: "Medium",
    description: "Find an index where the sum of elements on both sides is equal.",
    approach: "Calculate total sum and maintain left sum while traversing.",
    code: `long long total = 0;

for (int x : arr)
    total += x;

long long leftSum = 0;

for (int i = 0; i < n; i++) {

    total -= arr[i];

    if (leftSum == total) {
        cout << i;
        return 0;
    }

    leftSum += arr[i];
}`,
    complexity: "O(n)",
  },
  {
    no: "27",
    title: "Find Peak Element",
    difficulty: "Medium",
    description: "Find an element that is greater than its neighboring elements.",
    approach: "Binary search can be used to locate a peak efficiently.",
    code: `int low = 0;
int high = n - 1;

while (low < high) {

    int mid = low + (high - low) / 2;

    if (arr[mid] < arr[mid + 1])
        low = mid + 1;
    else
        high = mid;
}

cout << low;`,
    complexity: "O(log n)",
  },
  {
    no: "28",
    title: "Kth Largest Element",
    difficulty: "Medium",
    description: "Find the kth largest element in an array.",
    approach: "A min-heap of size k can maintain the k largest elements.",
    code: `priority_queue<int, vector<int>, greater<int>> pq;

for (int x : arr) {

    pq.push(x);

    if (pq.size() > k)
        pq.pop();
}

cout << pq.top();`,
    complexity: "O(n log k)",
  },
  {
    no: "29",
    title: "Rearrange Positive and Negative",
    difficulty: "Medium",
    description: "Rearrange an array so positive and negative values are placed alternately when possible.",
    approach: "Separate positive and negative values and place them alternately.",
    code: `vector<int> pos, neg;

for (int x : arr) {
    if (x >= 0)
        pos.push_back(x);
    else
        neg.push_back(x);
}

int i = 0, p = 0, q = 0;

while (p < pos.size() && q < neg.size()) {
    arr[i++] = pos[p++];
    arr[i++] = neg[q++];
}`,
    complexity: "O(n)",
  },
  {
    no: "30",
    title: "Maximum Profit from Stock Prices",
    difficulty: "Medium",
    description: "Find the maximum profit possible by buying once and selling later.",
    approach: "Track the minimum price seen so far and maximize the current profit.",
    code: `int minPrice = arr[0];
int profit = 0;

for (int i = 1; i < n; i++) {

    profit = max(
        profit,
        arr[i] - minPrice
    );

    minPrice = min(
        minPrice,
        arr[i]
    );
}

cout << profit;`,
    complexity: "O(n)",
  },
]

export default function ArrayProblemsPage() {
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

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-3xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-red-300">
                  <Trophy size={14} />
                  DSA • ARRAY PROBLEMS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Array Problem Solving.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                  Solve placement-oriented array problems and strengthen
                  your problem-solving approach through patterns, algorithms,
                  complexity analysis and C++ implementation.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Placement
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Logic
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Problem Solving
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">
                    Practice
                  </span>

                </div>
              </div>

              <div className="w-full max-w-[290px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
                  WHAT YOU&apos;LL PRACTICE
                </p>

                <div className="mt-5 space-y-3">

                  {[
                    "Basic array problems",
                    "Searching & sorting",
                    "Subarray problems",
                    "Placement patterns",
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
                    30 Practice Questions
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
                    COMPLETE PRACTICE PATH
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Array Problem Solving — 30 Problems
                  </h2>
                </div>

              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  ["01", "Basic Problems", "basic"],
                  ["02", "Searching", "searching"],
                  ["03", "Array Manipulation", "manipulation"],
                  ["04", "Subarray Problems", "subarray"],
                  ["05", "Two Pointer", "twopointer"],
                  ["06", "Hashing", "hashing"],
                  ["07", "Greedy", "greedy"],
                  ["08", "Advanced Problems", "advanced"],
                ].map(([number, title, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
                      {number}
                    </span>

                    <span className="text-xs font-semibold text-slate-700">
                      {title}
                    </span>
                  </a>
                ))}

              </div>
            </div>

            {/* ================= PROBLEM LIST ================= */}
            <div className="mt-6 space-y-6">

              {problems.map((problem, index) => {

                const sectionId =
                  index < 5
                    ? "basic"
                    : index < 12
                    ? "manipulation"
                    : index < 17
                    ? "searching"
                    : index < 21
                    ? "hashing"
                    : index < 24
                    ? "subarray"
                    : index < 28
                    ? "advanced"
                    : "greedy"

                return (
                  <div
                    key={problem.no}
                    id={problem.no === "01" ? sectionId : undefined}
                    className="scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >

                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Code2 size={21} />
                        </div>

                        <div>

                          <div className="flex flex-wrap items-center gap-2">

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                              PROBLEM {problem.no}
                            </span>

                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                                problem.difficulty === "Easy"
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "bg-amber-50 text-amber-600"
                              }`}
                            >
                              {problem.difficulty}
                            </span>

                          </div>

                          <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                            {problem.title}
                          </h2>

                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2">

                        <span className="text-xs font-semibold text-slate-500">
                          Complexity
                        </span>

                        <span className="font-mono text-xs font-bold text-blue-600">
                          {problem.complexity}
                        </span>

                      </div>

                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-600">
                      {problem.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">

                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                        APPROACH
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {problem.approach}
                      </p>

                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">

                      <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
                        <p className="text-xs font-bold text-slate-700">
                          C++ Solution
                        </p>
                      </div>

                      <div className="bg-[#071025] p-5">

                        <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
                          <code>{problem.code}</code>
                        </pre>

                      </div>
                    </div>

                  </div>
                )
              })}

            </div>

            {/* ================= FINAL CHECKLIST ================= */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Lightbulb size={20} />
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    Array Problem Solving Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Complete these 30 problems and make sure you understand
                    the approach behind every solution.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      "Maximum & Minimum",
                      "Second Largest",
                      "Reverse Array",
                      "Remove Duplicates",
                      "Missing Number",
                      "Frequency",
                      "Pair Sum",
                      "Move Zeros",
                      "Array Rotation",
                      "Merge Arrays",
                      "Intersection & Union",
                      "Majority Element",
                      "Leaders",
                      "Maximum Subarray",
                      "Subarray Sum",
                      "Two Sum",
                      "Sort 0, 1, 2",
                      "Equilibrium Index",
                      "Peak Element",
                      "Kth Largest",
                      "Stock Profit",
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

            <div className="flex justify-center py-8">

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Trophy size={17} className="text-amber-500" />
                30 Problems • Placement Focused • C++
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}