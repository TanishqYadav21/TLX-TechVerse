"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowLeft, ArrowRight, Brain, BookOpen, CheckCircle2, Code2, GitBranch,
  Lightbulb, Link2, ListChecks, Target, Trophy, Clock3, Layers, MessageSquare,
} from "lucide-react"

const sections = [
  { id: "fundamentals", number: "01", title: "Core Concepts" },
  { id: "complexity", number: "02", title: "Time & Space Complexity" },
  { id: "patterns", number: "03", title: "Important Patterns" },
  { id: "questions", number: "04", title: "Top Interview Questions" },
  { id: "coding", number: "05", title: "Coding Questions with C++" },
  { id: "mistakes", number: "06", title: "Common Mistakes" },
  { id: "revision", number: "07", title: "Quick Revision Checklist" },
]

export default function LinkedListInterviewPage() {
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
                
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-violet-300"><Brain size={14} /> DATA STRUCTURES & ALGORITHMS</div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Ace Your<span className="block text-slate-300">Linked List Interview.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Revise essential linked list concepts, understand complexity, and practise the questions most commonly asked in technical interviews.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["Interview Prep", "Algorithms", "Complexity", "Revision"].map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">{tag}</span>)}</div>
              </div>
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><BookOpen size={17} className="text-violet-300" /> What You’ll Learn</div>
                {[
                  "Explain linked list fundamentals confidently",
                  "Analyse time and space complexity",
                  "Recognise common problem-solving patterns",
                  "Practise interview-style coding questions",
                ].map(item => <div key={item} className="mb-3 flex items-start gap-2 text-sm leading-6 text-slate-300 last:mb-0"><CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-400" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-10">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900"><ListChecks size={17} className="text-violet-600" /> Learning Path</div>
            <div className="space-y-1">{sections.map(s => <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-violet-50 hover:text-violet-700"><span className="font-mono text-[11px] text-slate-400">{s.number}</span><span>{s.title}</span></a>)}</div>
            <div className="mt-5 rounded-xl bg-violet-50 p-4"><div className="flex items-center gap-2 text-xs font-bold text-violet-800"><Target size={15} /> Interview Goal</div><p className="mt-2 text-xs leading-5 text-violet-700">Explain your approach first, then discuss complexity and edge cases.</p></div>
          </aside>

          <div className="min-w-0 space-y-6">
            <Section id="fundamentals" number="01" label="FOUNDATION" title="Core Linked List Concepts" icon={<GitBranch size={19} />}>
              <p className="text-sm leading-7 text-slate-600">A linked list is a linear data structure made of nodes. Each node stores data and a link to the next node. Unlike arrays, nodes do not need to occupy contiguous memory locations.</p>
              <div className="grid gap-4 md:grid-cols-2"><InfoCard title="Singly Linked List" text="Each node contains data and a next pointer. Traversal normally moves forward only." /><InfoCard title="Doubly Linked List" text="Each node has previous and next pointers, allowing traversal in both directions." /><InfoCard title="Circular Linked List" text="The last node points back to the first node instead of storing NULL as its next pointer." /><InfoCard title="Head Pointer" text="The head stores the address of the first node. An empty list has head = nullptr." /></div>
              <CodeCard title="Typical C++ Node" code={`struct Node {\n    int data;\n    Node* next;\n\n    Node(int value) {\n        data = value;\n        next = nullptr;\n    }\n};`} />
            </Section>

            <Section id="complexity" number="02" label="ANALYSIS" title="Time & Space Complexity" icon={<Clock3 size={19} />}>
              <p className="text-sm leading-7 text-slate-600">In interviews, always state the complexity of your solution and clarify whether the analysis assumes a pointer to the required node is already available.</p>
              <div className="overflow-x-auto rounded-xl border border-slate-200"><table className="w-full min-w-[480px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Operation</th><th className="px-4 py-3">Time</th><th className="px-4 py-3">Reason</th></tr></thead><tbody className="divide-y divide-slate-100 text-slate-700">{[["Access by position","O(n)","Traverse from head"],["Search by value","O(n)","May inspect every node"],["Insert at head","O(1)","Update a few pointers"],["Delete head","O(1)","Move head to next node"],["Insert at tail","O(n)*","Without a tail pointer"],["Reverse list","O(n)","Visit each node once"]].map(([op, time, reason], i) => <tr key={`${op}-${i}`}><td className="px-4 py-3 font-semibold">{op}</td><td className="px-4 py-3 font-mono font-bold text-violet-700">{time}</td><td className="px-4 py-3">{reason}</td></tr>)}</tbody></table></div>
              <p className="mt-3 text-xs leading-5 text-slate-500">* Tail insertion is O(1) if the list maintains a valid tail pointer.</p>
            </Section>

            <Section id="patterns" number="03" label="PROBLEM SOLVING" title="Important Interview Patterns" icon={<Layers size={19} />}>
              <div className="space-y-3"><FeatureCard title="Two Pointers" text="Use slow and fast pointers to find the middle node or detect a cycle." /><FeatureCard title="Pointer Reversal" text="Keep previous, current, and next pointers to reverse links safely in one pass." /><FeatureCard title="Dummy Node" text="Use a temporary node before the head to simplify insertions, deletions, and merging." /><FeatureCard title="Hash Set" text="Store visited node addresses to detect repeated nodes or a cycle in O(n) extra space." /></div>
            </Section>

            <Section id="questions" number="04" label="POPULAR QUESTIONS" title="Top Interview Questions" icon={<MessageSquare size={19} />}>
              <div className="space-y-3">{[
                ["What is a linked list?", "A dynamic linear structure where nodes connect using pointers."],
                ["Array vs linked list?", "Arrays support O(1) indexed access; linked lists generally require O(n) traversal."],
                ["How do you find the middle node?", "Advance slow by one node and fast by two nodes until fast reaches the end."],
                ["How do you detect a cycle?", "Use Floyd’s slow-and-fast pointer algorithm."],
                ["Can a linked list be reversed without extra space?", "Yes. Iteratively reverse pointers in O(n) time and O(1) auxiliary space."],
                ["How do you find the nth node from the end?", "Keep two pointers n nodes apart, then move both until the lead pointer reaches the end."],
                ["How do you merge two sorted lists?", "Compare the current nodes and link the smaller one to the result list."],
                ["Why use a dummy node?", "It reduces special cases when the head may change."],
                ["How can you check a palindrome list?", "Find the middle, reverse the second half, then compare both halves."],
                ["What causes a dangling pointer?", "A pointer that refers to memory that has been freed or is no longer valid."]
              ].map(([q, a], i) => <div key={`question-${i}`} className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-700">{i + 1}</span><div><h3 className="text-sm font-bold text-slate-900">{q}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{a}</p></div></div></div>)}</div>
            </Section>

            <Section id="coding" number="05" label="C++ PRACTICE" title="Coding Questions with C++" icon={<Code2 size={19} />}>
              <h3 className="mb-3 text-base font-bold text-slate-900">Reverse a Singly Linked List</h3>
              <p className="mb-4 text-sm leading-6 text-slate-600">Maintain three pointers: previous, current, and next. Save the next node before changing the current node’s link.</p>
              <CodeCard title="Iterative Solution" code={`Node* reverseList(Node* head) {\n    Node* prev = nullptr;\n    Node* curr = head;\n\n    while (curr != nullptr) {\n        Node* nextNode = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextNode;\n    }\n\n    return prev;\n}`} />
              <Output text="Time: O(n)   |   Auxiliary Space: O(1)" />
              <h3 className="mb-3 mt-6 text-base font-bold text-slate-900">Detect a Cycle (Floyd’s Algorithm)</h3>
              <CodeCard title="Cycle Detection" code={`bool hasCycle(Node* head) {\n    Node* slow = head;\n    Node* fast = head;\n\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n\n        if (slow == fast) return true;\n    }\n    return false;\n}`} />
              <Output text="Time: O(n)   |   Auxiliary Space: O(1)" />
            </Section>

            <Section id="mistakes" number="06" label="WATCH OUT" title="Common Interview Mistakes" icon={<Lightbulb size={19} />}>
              <div className="space-y-3">{["Forgetting to handle an empty list (head == nullptr).", "Dereferencing a pointer before checking it is not nullptr.", "Losing the remaining list by changing next before saving it.", "Not updating head when deleting or inserting at the beginning.", "Ignoring one-node lists and cases where the target is absent.", "Giving complexity without explaining the traversal or extra memory."].map((item, i) => <div key={`mistake-${i}`} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-3 text-sm leading-6 text-slate-700"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">!</span>{item}</div>)}</div>
            </Section>

            <Section id="revision" number="07" label="BEFORE THE INTERVIEW" title="Quick Revision Checklist" icon={<CheckCircle2 size={19} />}>
              <div className="grid gap-3 sm:grid-cols-2">{["Explain node, head, and nullptr", "Compare arrays and linked lists", "Know insert and delete operations", "Reverse a list iteratively", "Find middle and nth node from end", "Detect and remove a cycle", "Merge sorted linked lists", "Explain time and space complexity", "Test empty and single-node lists", "Walk through code with a dry run"].map((item, i) => <div key={`revision-${i}`} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />{item}</div>)}</div>
              <div className="mt-5 rounded-2xl bg-[#080d22] p-5 text-white"><div className="flex items-center gap-2 text-sm font-bold"><Trophy size={17} className="text-violet-300" /> Interview Tip</div><p className="mt-2 text-sm leading-6 text-slate-300">Before coding, clarify assumptions, explain the approach, discuss edge cases, and then state complexity. A clear explanation is as important as a working solution.</p></div>
            </Section>
          </div>
        </div>
      </main>
    </>
  )
}

function Section({ id, number, label, title, icon, children }: { id: string; number: string; label: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.035)] md:p-8"><div className="mb-5 flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">{icon}</div><div className="min-w-0"><div className="mb-1 text-[10px] font-bold tracking-[0.16em] text-violet-600">{number} · {label}</div><h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">{title}</h2></div></div><div className="space-y-4">{children}</div></section>
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"><h3 className="text-sm font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return <div className="flex gap-3 rounded-xl border border-slate-200 p-4"><div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><CheckCircle2 size={16} /></div><div><h3 className="text-sm font-bold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div></div>
}

function CodeCard({ title, code }: { title: string; code: string }) {
  return <div className="overflow-hidden rounded-xl border border-slate-200"><div className="flex items-center gap-2 border-b border-slate-800 bg-[#111827] px-4 py-3"><Code2 size={15} className="text-violet-300" /><span className="text-xs font-semibold text-slate-200">{title}</span><span className="ml-auto rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">C++</span></div><pre className="overflow-x-auto bg-[#080d1a] p-4 text-[12px] leading-6 text-slate-200 md:text-[13px]"><code>{code}</code></pre></div>
}

function Output({ text }: { text: string }) {
  return <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800"><CheckCircle2 size={15} />{text}</div>
}
