"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  Lightbulb,
  Link2,
  ListChecks,
  Target,
  Trophy,
  Brain,
  Layers,
} from "lucide-react"

const sections = [
  { id: "approach", number: "01", title: "Problem-Solving Approach" },
  { id: "basics", number: "02", title: "Basic Problems" },
  { id: "middle", number: "03", title: "Middle of the List" },
  { id: "reverse", number: "04", title: "Reverse a Linked List" },
  { id: "duplicates", number: "05", title: "Remove Duplicates" },
  { id: "cycle", number: "06", title: "Detect a Cycle" },
  { id: "merge", number: "07", title: "Merge Two Lists" },
  { id: "palindrome", number: "08", title: "Palindrome List" },
  { id: "complexity", number: "09", title: "Complexity Analysis" },
  { id: "practice", number: "10", title: "Practice Questions" },
  { id: "interview", number: "11", title: "Interview Questions" },
]

export default function LinkedListProblemsPage() {
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
                
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300"><Trophy size={14} /> DATA STRUCTURES & ALGORITHMS</div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Solve<span className="block text-slate-300">Linked List Problems.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Solve placement-oriented linked list problems, practise common patterns, and strengthen your problem-solving approach with clear explanations and C++ examples.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["Placement", "Logic Building", "C++ Practice", "Interview Prep"].map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">{tag}</span>)}</div>
              </div>
              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">WHAT YOU'LL PRACTISE</p>
                <div className="mt-5 space-y-3">{["Build a clear approach", "Use pointers confidently", "Recognize common patterns", "Prepare for interviews"].map((item, index) => <div key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</span><span className="text-xs font-medium text-slate-300">{item}</span></div>)}</div>
                <div className="mt-5 border-t border-white/10 pt-4"><div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 30 Practice Questions</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10"><div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><BookOpen size={21} /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">COMPLETE LEARNING PATH</p><h2 className="mt-1 text-xl font-bold text-slate-900">Linked List Problem Solving — Complete Guide</h2></div></div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{section.number}</span><span className="text-xs font-semibold text-slate-700">{section.title}</span></a>)}</div>
          </div>

          <Section id="approach" number="01" label="PROBLEM-SOLVING" title="How to Approach Linked List Problems" icon={<Brain size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Before writing code, understand the input, expected output, and edge cases. Draw the nodes and arrows, decide how pointers should move, and then translate the steps into code.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard title="Step 1" value="Understand" description="Identify the task, constraints, and expected result." /><InfoCard title="Step 2" value="Trace" description="Draw a small list and track pointer changes." /><InfoCard title="Step 3" value="Test" description="Check empty, single-node, and normal lists." /></div>
          </Section>

          <Section id="basics" number="02" label="BEGINNER" title="Basic Linked List Problems" icon={<ListChecks size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Start with these problems to get comfortable with traversal and pointer handling.</p>
            <div className="mt-5 space-y-3">{[
              ["Count the nodes", "Traverse from head and increment a counter for every node."],
              ["Search for a value", "Compare each node's data with the target value."],
              ["Insert at the beginning", "Make the new node point to the current head, then update head."],
              ["Delete a node by value", "Find the previous node and connect it to the next node."],
              ["Find the last node", "Move forward until current->next becomes nullptr."],
            ].map(([title, description], index) => <div key={title} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-blue-600 shadow-sm">{index + 1}</span><div><h3 className="font-bold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{description}</p></div></div>)}</div>
          </Section>

          <Section id="middle" number="03" label="TWO POINTERS" title="Find the Middle Node" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Use slow and fast pointers. The slow pointer moves one node at a time, while the fast pointer moves two. When fast reaches the end, slow points to the middle.</p>
            <CodeCard title="C++ Function" code={`Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}`} />
            <InfoCard title="Complexity" value="O(n) time · O(1) space" description="Each pointer moves through the list without using an extra array." />
          </Section>

          <Section id="reverse" number="04" label="CLASSIC PROBLEM" title="Reverse a Singly Linked List" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Reverse the links so that the last node becomes the new head. Keep track of the previous node, current node, and next node to avoid losing the remaining list.</p>
            <CodeCard title="Iterative C++ Solution" code={`Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;

    while (current != nullptr) {
        Node* nextNode = current->next;
        current->next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}`} />
            <Diagram values={["10", "20", "30", "40"]} caption="Original order: 10 → 20 → 30 → 40. After reversal: 40 → 30 → 20 → 10." />
          </Section>

          <Section id="duplicates" number="05" label="LIST CLEANUP" title="Remove Duplicates from a Sorted List" icon={<Layers size={21} />}>
            <p className="text-sm leading-7 text-slate-600">In a sorted list, duplicate values are adjacent. Compare each node with its next node. If values match, skip the next node; otherwise, advance current.</p>
            <CodeCard title="C++ Solution" code={`Node* removeDuplicates(Node* head) {
    Node* current = head;

    while (current != nullptr && current->next != nullptr) {
        if (current->data == current->next->data) {
            Node* duplicate = current->next;
            current->next = duplicate->next;
            delete duplicate;
        } else {
            current = current->next;
        }
    }

    return head;
}`} />
            <InfoCard title="Important" description="This approach assumes the linked list is sorted. For an unsorted list, a different strategy is needed to find repeated values." />
          </Section>

          <Section id="cycle" number="06" label="FAST & SLOW POINTERS" title="Detect a Cycle in a Linked List" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Floyd's cycle detection algorithm uses slow and fast pointers. If the pointers meet, a cycle exists. If fast reaches nullptr, the list has no cycle.</p>
            <CodeCard title="C++ Solution" code={`bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            return true;
        }
    }

    return false;
}`} />
            <div className="mt-5 grid gap-4 md:grid-cols-2"><InfoCard title="Time Complexity" value="O(n)" description="The pointers move through the list until they meet or the end is reached." /><InfoCard title="Space Complexity" value="O(1)" description="Only two pointer variables are used." /></div>
          </Section>

          <Section id="merge" number="07" label="MERGING" title="Merge Two Sorted Linked Lists" icon={<Link2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Compare the first available nodes from both sorted lists and link the smaller one to the result. Continue until one list is exhausted, then attach the remaining nodes.</p>
            <CodeCard title="C++ Solution" code={`Node* mergeSorted(Node* a, Node* b) {
    Node dummy(0);
    Node* tail = &dummy;

    while (a != nullptr && b != nullptr) {
        if (a->data <= b->data) {
            tail->next = a;
            a = a->next;
        } else {
            tail->next = b;
            b = b->next;
        }
        tail = tail->next;
    }

    tail->next = (a != nullptr) ? a : b;
    return dummy.next;
}`} />
            <InfoCard title="Complexity" value="O(n + m)" description="Each node from the two lists is processed at most once." />
          </Section>

          <Section id="palindrome" number="08" label="INTERVIEW FAVOURITE" title="Check Whether a Linked List Is a Palindrome" icon={<CheckCircle2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A list is a palindrome when its values read the same forward and backward, for example 1 → 2 → 2 → 1. A common efficient method is to find the middle, reverse the second half, and compare both halves.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3"><StepCard number="01" title="Find middle" description="Use slow and fast pointers to reach the midpoint." /><StepCard number="02" title="Reverse half" description="Reverse the second half of the list in place." /><StepCard number="03" title="Compare" description="Compare corresponding values from both halves." /></div>
            <InfoCard title="Practice tip" description="Handle odd-length lists carefully; the middle element does not need a matching pair with itself." />
          </Section>

          <Section id="complexity" number="09" label="ANALYSIS" title="Understand Time and Space Complexity" icon={<Target size={21} />}>
            <div className="overflow-x-auto rounded-xl border border-slate-100"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><thead><tr className="bg-slate-50"><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Problem</th><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Time</th><th className="border-b border-slate-100 px-4 py-3 font-bold text-slate-700">Extra Space</th></tr></thead><tbody>{[["Count nodes", "O(n)", "O(1)"], ["Find middle", "O(n)", "O(1)"], ["Reverse list", "O(n)", "O(1) iterative"], ["Detect cycle", "O(n)", "O(1)"], ["Merge sorted lists", "O(n + m)", "O(1) auxiliary"]].map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="border-b border-slate-100 px-4 py-3 text-slate-600">{cell}</td>)}</tr>)}</tbody></table></div>
          </Section>

          <Section id="practice" number="10" label="30 PRACTICE QUESTIONS" title="Practice Questions" icon={<ListChecks size={21} />}>
            <div className="grid gap-3 md:grid-cols-2">{[
              "Count the number of nodes in a linked list.", "Search for a given key.", "Insert a node at the beginning.", "Insert a node at the end.", "Delete the first node.", "Delete a node by value.", "Find the middle node.", "Find the nth node from the end.", "Reverse a linked list iteratively.", "Reverse a linked list recursively.", "Detect a cycle in a list.", "Find the starting node of a cycle.", "Remove a cycle from a list.", "Merge two sorted linked lists.", "Remove duplicates from a sorted list.", "Remove duplicates from an unsorted list.", "Check whether a list is a palindrome.", "Find the intersection of two lists.", "Swap nodes in pairs.", "Rotate a list by k positions.", "Delete the nth node from the end.", "Sort a linked list.", "Add two numbers represented by lists.", "Partition a list around a value.", "Find the length of a cycle.", "Separate odd and even values.", "Reorder a linked list.", "Flatten a multilevel linked list.", "Clone a list with random pointers.", "Design an LRU cache using a doubly linked list.",
            ].map((question, index) => <div key={question} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-slate-600">{question}</p></div>)}</div>
          </Section>

          <Section id="interview" number="11" label="REVISION" title="Interview Questions" icon={<Lightbulb size={21} />}>
            <div className="space-y-4">{[
              ["How do you find the middle node in one traversal?", "Use slow and fast pointers; slow moves one step and fast moves two."],
              ["How can a linked list be reversed in O(1) extra space?", "Iteratively change each node's next pointer using prev, current, and nextNode."],
              ["How can a cycle be detected?", "Use Floyd's algorithm with slow and fast pointers."],
              ["Why use a dummy node when merging lists?", "It simplifies handling the first node and avoids special cases for the result head."],
              ["What is the time complexity of merging two sorted lists?", "O(n + m), where n and m are the lengths of the input lists."],
            ].map(([question, answer]) => <div key={question} className="rounded-xl border border-slate-100 bg-slate-50 p-5"><h3 className="font-bold text-slate-900">{question}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{answer}</p></div>)}</div>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"><div className="flex items-center gap-2 text-sm font-bold text-emerald-800"><CheckCircle2 size={18} /> Quick Revision</div><div className="mt-4 grid gap-3 sm:grid-cols-2">{["Draw the list before coding", "Track every pointer update", "Test empty and single-node lists", "Avoid dereferencing nullptr", "Use slow/fast pointers for middle and cycle", "State time and space complexity"].map(item => <div key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 size={15} className="shrink-0 text-emerald-600" />{item}</div>)}</div></div>
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
function Diagram({ values, caption }: { values: string[]; caption: string }) {
  return <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[420px] items-center justify-center gap-3">{values.map((value, index) => <div key={`${value}-${index}`} className="flex items-center gap-3"><div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="grid grid-cols-2"><div className="border-r border-slate-100 px-3 py-3 text-center"><p className="text-[9px] font-bold text-blue-600">DATA</p><p className="mt-1 text-xs font-bold text-slate-800">{value}</p></div><div className="px-3 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">NEXT</p><p className="mt-1 text-[10px] font-bold text-slate-600">{index === values.length - 1 ? "NULL" : "NEXT"}</p></div></div></div>{index < values.length - 1 && <span className="text-xl font-bold text-blue-500">→</span>}</div>)}</div><p className="mt-5 text-center text-xs text-slate-500">{caption}</p></div>
}
function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{number}</span><h3 className="mt-4 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>
}
