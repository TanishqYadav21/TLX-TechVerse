"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  Lightbulb,
  List,
  MemoryStick,
  Search,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "linear", number: "02", title: "Linear Search" },
  { id: "algorithm", number: "03", title: "Algorithm" },
  { id: "code", number: "04", title: "C++ Implementation" },
  { id: "trace", number: "05", title: "Dry Run" },
  { id: "sorted", number: "06", title: "Search in Sorted List" },
  { id: "edgecases", number: "07", title: "Edge Cases" },
  { id: "complexity", number: "08", title: "Time Complexity" },
  { id: "comparison", number: "09", title: "Array vs Linked List" },
  { id: "practice", number: "10", title: "Practice Questions" },
  { id: "interview", number: "11", title: "Interview Questions" },
]

export default function LinkedListSearchingPage() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10 md:py-11">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
               
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300"><Sparkles size={14} /> DATA STRUCTURES & ALGORITHMS</div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Master<span className="block text-slate-300">Linked List Searching.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Learn how to search for an element in a linked list using linear search, follow the algorithm step by step, and analyze its time complexity with C++ examples.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["Linear Search", "Traversal", "C++ Examples", "O(n) Complexity"].map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">{tag}</span>)}</div>
              </div>
              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">WHAT YOU'LL LEARN</p>
                <div className="mt-5 space-y-3">{["Search by comparing node values", "Move through next pointers", "Handle missing values safely", "Understand complexity"].map((item, index) => <div key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</span><span className="text-xs font-medium text-slate-300">{item}</span></div>)}</div>
                <div className="mt-5 border-t border-white/10 pt-4"><div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Complete Topic Guide</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10"><div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><BookOpen size={21} /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">COMPLETE LEARNING PATH</p><h2 className="mt-1 text-xl font-bold text-slate-900">Linked List Searching — Complete Guide</h2></div></div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{section.number}</span><span className="text-xs font-semibold text-slate-700">{section.title}</span></a>)}</div>
          </div>

          <Section id="definition" number="01" label="FUNDAMENTALS" title="What is Searching in a Linked List?" icon={<Search size={21} />}>
            <p className="text-sm leading-7 text-slate-600"><strong>Searching</strong> is the process of finding whether a particular value exists in a linked list. We start from the head node, compare each node's data with the target value, and move to the next node until the value is found or the list ends.</p>
            <Diagram values={["10", "25", "35", "50"]} />
            <div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard title="Starting Point" value="head" description="Searching begins at the first node." /><InfoCard title="Comparison" value="data == key" description="Compare each node's value with the target." /><InfoCard title="Not Found" value="nullptr" description="If traversal reaches nullptr, the value is absent." /></div>
          </Section>

          <Section id="linear" number="02" label="CORE CONCEPT" title="Linear Search in a Linked List" icon={<List size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A linked list generally uses <strong>linear search</strong>. Nodes are checked one by one because linked lists do not provide direct index-based access like arrays.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><StepCard number="01" title="Start at head" description="Set a current pointer to the first node." /><StepCard number="02" title="Compare data" description="Check whether current->data equals the target key." /><StepCard number="03" title="Move forward" description="If it does not match, move current to current->next." /><StepCard number="04" title="Finish" description="Return the node if found; otherwise return nullptr." /></div>
            <InfoCard title="Key point" value="O(n)" description="In the worst case, every node must be visited." />
          </Section>

          <Section id="algorithm" number="03" label="ALGORITHM" title="Searching Algorithm" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Use the following steps to search for a key in a singly linked list.</p>
            <div className="mt-5 space-y-3">{["Set current = head.", "If current is nullptr, the list is empty and the key is not found.", "Compare current->data with the target key.", "If they match, return the current node or its position.", "Otherwise, move current = current->next and repeat.", "If current becomes nullptr, report that the key was not found."].map((step, index) => <div key={step} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-blue-600 shadow-sm">{index + 1}</span><p className="text-sm leading-6 text-slate-600">{step}</p></div>)}</div>
          </Section>

          <Section id="code" number="04" label="IMPLEMENTATION" title="C++ Searching Function" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">This function returns a pointer to the node containing the target value. If the value is not present, it returns nullptr.</p>
            <CodeCard title="Linear Search in a Singly Linked List" code={`Node* search(Node* head, int key) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == key) {
            return current;
        }

        current = current->next;
    }

    return nullptr;
}`} />
            <CodeCard title="Calling the Function" code={`Node* result = search(head, 35);

if (result != nullptr) {
    cout << "Value found: " << result->data;
} else {
    cout << "Value not found";
}`} />
            <InfoCard title="Important" description="The Node structure must be defined before this function, and the program should include <iostream> when using cout." />
          </Section>

          <Section id="trace" number="05" label="DRY RUN" title="Searching Step by Step" icon={<Target size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Suppose the list is 10 → 25 → 35 → 50 and the target key is 35.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[420px] items-center justify-center gap-3">{["10", "25", "35", "50"].map((value, index) => <div key={value} className="flex items-center gap-3"><div className={`rounded-xl border-2 px-5 py-4 text-center ${value === "35" ? "border-emerald-400 bg-emerald-50" : "border-slate-200 bg-white"}`}><p className="text-[9px] font-bold text-slate-400">NODE {index + 1}</p><p className={`mt-1 text-lg font-bold ${value === "35" ? "text-emerald-700" : "text-slate-800"}`}>{value}</p><p className="mt-1 text-[10px] font-semibold text-slate-500">{index < 2 ? "Compare" : value === "35" ? "Found!" : "Not checked"}</p></div>{index < 3 && <span className="text-xl font-bold text-blue-500">→</span>}</div>)}</div><p className="mt-5 text-center text-xs text-slate-500">The search stops as soon as the target value 35 is found.</p></div>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[420px] border-collapse text-left text-sm"><thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3">Step</th><th className="border border-slate-200 px-4 py-3">Current data</th><th className="border border-slate-200 px-4 py-3">Result</th></tr></thead><tbody>{[["1", "10", "Not equal to 35"], ["2", "25", "Not equal to 35"], ["3", "35", "Match found; stop"]].map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`} className="border border-slate-200 px-4 py-3 text-slate-600">{cell}</td>)}</tr>)}</tbody></table></div>
            <Output>Value found: 35</Output>
          </Section>

          <Section id="sorted" number="06" label="IMPORTANT NOTE" title="Searching in a Sorted Linked List" icon={<Lightbulb size={21} />}>
            <p className="text-sm leading-7 text-slate-600">If the list is sorted in ascending order, searching can stop early when the current node's value becomes greater than the target key. This shortcut is only valid when the list is sorted and the values are compared in ascending order.</p>
            <CodeCard title="Early Stop for an Ascending List" code={`Node* searchSorted(Node* head, int key) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == key) {
            return current;
        }

        if (current->data > key) {
            return nullptr;
        }

        current = current->next;
    }

    return nullptr;
}`} />
            <InfoCard title="Remember" description="For an unsorted linked list, do not stop just because a value is greater than the key. Continue until the key is found or nullptr is reached." />
          </Section>

          <Section id="edgecases" number="07" label="SPECIAL CASES" title="Edge Cases to Handle" icon={<CheckCircle2 size={21} />}>
            <div className="grid gap-4 md:grid-cols-2"><FeatureCard title="Cases to check" color="emerald" points={["Empty list: head is nullptr.", "Target is at the first node.", "Target is at the last node.", "Target appears more than once."]} /><FeatureCard title="Common mistakes" color="red" points={["Forgetting to advance current.", "Dereferencing a nullptr pointer.", "Returning not found before checking all nodes.", "Assuming every linked list is sorted."]} /></div>
          </Section>

          <Section id="complexity" number="08" label="COMPLEXITY ANALYSIS" title="Time and Space Complexity" icon={<MemoryStick size={21} />}>
            <div className="grid gap-4 md:grid-cols-3"><InfoCard title="Best Case" value="O(1)" description="The target is at the head node." /><InfoCard title="Average Case" value="O(n)" description="A number of nodes may need to be checked." /><InfoCard title="Worst Case" value="O(n)" description="The target is last or not present." /></div>
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5"><p className="text-sm leading-7 text-slate-600"><strong className="text-slate-900">Auxiliary space: O(1).</strong> The iterative algorithm uses only a constant number of pointer variables, regardless of the number of nodes.</p></div>
          </Section>

          <Section id="comparison" number="09" label="COMPARISON" title="Searching in an Array vs Linked List" icon={<List size={21} />}>
            <div className="overflow-x-auto rounded-xl border border-slate-100"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><thead><tr className="bg-slate-50"><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Feature</th><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Array</th><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Linked List</th></tr></thead><tbody>{[["Access to next element", "By index", "Using next pointer"], ["Unsorted linear search", "O(n)", "O(n)"], ["Direct access by index", "O(1)", "O(n) to reach a position"], ["Binary search", "Practical on sorted arrays", "Not efficient without random access"]].map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`} className="border-b border-slate-100 px-4 py-3 text-slate-600">{cell}</td>)}</tr>)}</tbody></table></div>
          </Section>

          <Section id="practice" number="10" label="PRACTICE" title="Practice Questions" icon={<Target size={21} />}>
            <div className="space-y-3">{["Write a function that returns the position of a target value in a linked list.", "Modify the search function to count how many nodes were checked.", "Return the last occurrence of a target value instead of the first.", "Search for a value in a sorted linked list and stop early when possible."].map((question, index) => <div key={question} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-blue-600 shadow-sm">{index + 1}</span><p className="text-sm leading-6 text-slate-600">{question}</p></div>)}</div>
          </Section>

          <Section id="interview" number="11" label="REVISION" title="Interview Questions" icon={<Lightbulb size={21} />}>
            <div className="space-y-4">{[["Which searching method is commonly used in a linked list?", "Linear search, because nodes are visited sequentially using pointers."], ["What is the worst-case time complexity?", "O(n), because all nodes may need to be checked."], ["What is the space complexity of iterative search?", "O(1), because it uses a constant amount of extra space."], ["Can binary search be efficiently applied to a normal linked list?", "Usually no. A linked list does not provide constant-time random access to the middle element."], ["How do you know the value was not found?", "Traversal reaches nullptr without matching the target."], ["When can searching stop early in a sorted list?", "In an ascending list, when the current value exceeds the target key."]].map(([question, answer]) => <div key={question} className="rounded-xl border border-slate-100 bg-slate-50 p-5"><h3 className="font-bold text-slate-900">{question}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{answer}</p></div>)}</div>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"><div className="flex items-center gap-2 text-sm font-bold text-emerald-800"><CheckCircle2 size={18} /> Quick Revision</div><div className="mt-4 grid gap-3 sm:grid-cols-2">{["Start from head", "Compare data with key", "Move using next", "Stop when found", "nullptr means not found", "Worst case O(n)", "Iterative space O(1)", "Sorted lists may stop early"].map(item => <div key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={15} className="shrink-0 text-emerald-600" />{item}</div>)}</div></div>
          </Section>
        </div></section>
      </main>
    </>
  )
}

function Section({ id, number, label, title, icon, children }: { id: string; number: string; label: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <section id={id} className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{icon}</div><div><div className="flex items-center gap-2"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">{label}</span><span className="text-[10px] font-bold text-slate-300">{number}</span></div><h2 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">{title}</h2></div></div><div className="mt-6">{children}</div></section>
}
function InfoCard({ title, value, description }: { title: string; value?: string; description: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>{value && <p className="mt-3 font-mono text-2xl font-bold text-blue-600">{value}</p>}<p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>
}
function CodeCard({ title, code }: { title: string; code: string }) {
  return <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100"><div className="border-b border-slate-100 bg-slate-50 px-5 py-3"><p className="text-xs font-bold text-slate-700">{title}</p></div><div className="overflow-x-auto bg-[#071025] p-5"><pre className="text-sm leading-7 text-slate-300"><code>{code}</code></pre></div></div>
}
function DefinitionRow({ term, definition }: { term: string; definition: string }) {
  return <div className="mt-3 flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:gap-5"><span className="min-w-32 font-mono text-sm font-bold text-blue-600">{term}</span><span className="text-sm leading-6 text-slate-600">{definition}</span></div>
}
function Diagram({ values }: { values: string[] }) {
  return <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[420px] items-center justify-center gap-3">{values.map((value, index) => <div key={value + index} className="flex items-center gap-3"><div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="grid grid-cols-2"><div className="border-r border-slate-100 px-3 py-3 text-center"><p className="text-[9px] font-bold text-blue-600">DATA</p><p className="mt-1 text-xs font-bold text-slate-800">{value}</p></div><div className="px-3 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">NEXT</p><p className="mt-1 text-[10px] font-bold text-slate-600">{index === values.length - 1 ? "NULL" : "NEXT"}</p></div></div></div>{index < values.length - 1 && <span className="text-xl font-bold text-blue-500">→</span>}</div>)}</div><p className="mt-5 text-center text-xs text-slate-500">Follow each next pointer until the target is found or the list ends.</p></div>
}
function Output({ children }: { children: React.ReactNode }) {
  return <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Output</p><p className="mt-2 font-mono text-sm font-bold text-slate-700">{children}</p></div>
}
function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{number}</span><h3 className="mt-4 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>
}
function FeatureCard({ title, points, color }: { title: string; points: string[]; color: "emerald" | "red" }) {
  const styles = { emerald: "border-emerald-100 bg-emerald-50", red: "border-red-100 bg-red-50" }
  return <div className={`rounded-2xl border p-6 ${styles[color]}`}><h3 className="font-bold text-slate-900">{title}</h3><div className="mt-5 space-y-3">{points.map(point => <div key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-600" />{point}</div>)}</div></div>
}
