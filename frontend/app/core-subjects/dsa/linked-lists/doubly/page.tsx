"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  BookOpen, CheckCircle2, Code2, GitBranch, Lightbulb, Link2, List,
  MemoryStick, Sparkles, Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "structure", number: "02", title: "Node Structure" },
  { id: "representation", number: "03", title: "Memory Representation" },
  { id: "creation", number: "04", title: "Creating a Linked List" },
  { id: "traversal", number: "05", title: "Forward & Backward Traversal" },
  { id: "insertion", number: "06", title: "Insertion" },
  { id: "deletion", number: "07", title: "Deletion" },
  { id: "searching", number: "08", title: "Searching" },
  { id: "complexity", number: "09", title: "Time Complexity" },
  { id: "advantages", number: "10", title: "Advantages & Limitations" },
  { id: "applications", number: "11", title: "Applications" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

export default function DoublyLinkedListPage() {
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
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Master<span className="block text-slate-300">Doubly Linked Lists.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Learn node structure, prev and next pointers, memory representation, bidirectional traversal, insertion, deletion and searching in a doubly linked list using C++.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["Prev & Next", "Bidirectional", "Operations", "C / C++"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">{tag}</span>)}</div>
              </div>
              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">WHAT YOU&apos;LL LEARN</p>
                <div className="mt-5 space-y-3">{["Doubly linked list structure", "Prev and next connections", "Insertion and deletion", "Forward and backward traversal"].map((item, index) => <div key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</span><span className="text-xs font-medium text-slate-300">{item}</span></div>)}</div>
                <div className="mt-5 border-t border-white/10 pt-4"><div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Complete Topic Guide</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10"><div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><BookOpen size={21} /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">COMPLETE LEARNING PATH</p><h2 className="mt-1 text-xl font-bold text-slate-900">Doubly Linked List — Complete Guide</h2></div></div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{sections.map((section) => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{section.number}</span><span className="text-xs font-semibold text-slate-700">{section.title}</span></a>)}</div>
          </div>

          <Section id="definition" number="01" label="FUNDAMENTALS" title="What is a Doubly Linked List?" icon={<BookOpen size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A <strong>doubly linked list</strong> is a linear data structure made up of nodes. Each node stores data, a pointer to the previous node (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-blue-600">prev</code>) and a pointer to the next node (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-blue-600">next</code>). The first node has prev as nullptr and the last node has next as nullptr.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[560px] items-center justify-center gap-3"><NodeBox data="10" prev="NULL" next="450" /><span className="text-xl font-bold text-blue-500">⇄</span><NodeBox data="20" prev="100" next="220" /><span className="text-xl font-bold text-blue-500">⇄</span><NodeBox data="30" prev="450" next="NULL" /></div><p className="mt-5 text-center text-xs text-slate-500">Each node links to both its previous and next node.</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard title="Previous Link" value="prev" description="Stores the address of the previous node." /><InfoCard title="Starting Point" value="head" description="Points to the first node in the list." /><InfoCard title="Next Link" value="next" description="Stores the address of the next node." /></div>
          </Section>

          <Section id="structure" number="02" label="NODE STRUCTURE" title="Structure of a Node" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A doubly linked list node contains three fields: data, prev and next. Both pointers store addresses of other nodes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard title="First Field" value="prev" description="Points to the previous node or nullptr." /><InfoCard title="Second Field" value="data" description="Contains the actual value, such as 10 or 20." /><InfoCard title="Third Field" value="next" description="Points to the next node or nullptr." /></div>
            <CodeCard title="C++ Node Structure" code={`struct Node {
    int data;
    Node* prev;
    Node* next;

    Node(int value) {
        data = value;
        prev = nullptr;
        next = nullptr;
    }
};`} />
            <div className="mt-5 space-y-3"><DefinitionRow term="struct Node" definition="Defines the structure of a doubly linked list node." /><DefinitionRow term="Node* prev" definition="A pointer to the previous node." /><DefinitionRow term="int data" definition="Stores the value in the node." /><DefinitionRow term="Node* next" definition="A pointer to the next node." /></div>
          </Section>

          <Section id="representation" number="03" label="MEMORY" title="Memory Representation" icon={<MemoryStick size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Doubly linked list nodes do not need contiguous memory. The prev and next pointers connect nodes in both directions, regardless of their physical memory locations.</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[570px] items-center justify-center gap-3"><div className="rounded-xl border border-blue-200 bg-white p-4 text-center"><p className="text-[10px] font-bold text-slate-400">HEAD</p><p className="mt-2 font-mono text-xs font-bold text-blue-600">100</p></div><span className="text-xl font-bold text-blue-500">→</span><MemoryNode address="100" data="10" prev="NULL" next="450" /><span className="text-xl font-bold text-blue-500">⇄</span><MemoryNode address="450" data="20" prev="100" next="220" /><span className="text-xl font-bold text-blue-500">⇄</span><MemoryNode address="220" data="30" prev="450" next="NULL" /></div><p className="mt-5 text-center text-xs leading-5 text-slate-500">Example memory addresses are illustrative, not actual addresses.</p></div>
          </Section>

          <Section id="creation" number="04" label="IMPLEMENTATION" title="Creating a Doubly Linked List" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Create nodes and set both pointers correctly. For every connection from one node to the next, the next node's prev pointer should point back to the first node.</p>
            <CodeCard title="Create and Connect Three Nodes" code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;

    Node(int value) {
        data = value;
        prev = nullptr;
        next = nullptr;
    }
};

int main() {
    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);

    head->next = second;
    second->prev = head;
    second->next = third;
    third->prev = second;

    Node* current = head;
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }

    current = head;
    while (current != nullptr) {
        Node* temp = current;
        current = current->next;
        delete temp;
    }
    return 0;
}`} />
            <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Output</p><p className="mt-2 font-mono text-sm font-bold text-slate-700">10 20 30</p></div>
          </Section>

          <Section id="traversal" number="05" label="TRAVERSAL" title="Forward and Backward Traversal" icon={<List size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Forward traversal follows next pointers. Backward traversal starts at the last node and follows prev pointers.</p>
            <h3 className="mt-6 font-bold text-slate-900">A. Forward Traversal</h3>
            <CodeCard title="Forward Traversal Code" code={`Node* current = head;
while (current != nullptr) {
    cout << current->data << " ";
    current = current->next;
}`} />
            <h3 className="mt-7 font-bold text-slate-900">B. Backward Traversal</h3>
            <CodeCard title="Backward Traversal Code" code={`Node* current = head;
if (current != nullptr) {
    while (current->next != nullptr) {
        current = current->next;
    }
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->prev;
    }
}`} />
            <div className="mt-5 grid gap-3 md:grid-cols-3"><StepCard number="01" title="Start" description="Forward traversal starts at head." /><StepCard number="02" title="Move" description="Use next to move forward or prev to move backward." /><StepCard number="03" title="Stop" description="Traversal ends when current becomes nullptr." /></div>
            <InfoCard title="Time Complexity" value="O(n)" description="Each node is visited at most once in either direction." />
          </Section>

          <Section id="insertion" number="06" label="INSERTION" title="Insertion in a Doubly Linked List" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Insertion can happen at the beginning, at the end, or after a particular node. Always update both prev and next links.</p>
            <h3 className="mt-6 font-bold text-slate-900">A. Insert at the Beginning</h3>
            <CodeCard title="Insert at Head" code={`Node* newNode = new Node(value);
newNode->next = head;
if (head != nullptr) {
    head->prev = newNode;
}
head = newNode;`} />
            <p className="mt-3 text-sm leading-6 text-slate-500">Connect the new node to the old head, update the old head's prev pointer, and then update head.</p>
            <h3 className="mt-7 font-bold text-slate-900">B. Insert at the End</h3>
            <CodeCard title="Append a Node" code={`Node* newNode = new Node(value);
if (head == nullptr) {
    head = newNode;
} else {
    Node* current = head;
    while (current->next != nullptr) {
        current = current->next;
    }
    current->next = newNode;
    newNode->prev = current;
}`} />
            <h3 className="mt-7 font-bold text-slate-900">C. Insert After a Given Node</h3>
            <CodeCard title="Insert After Current Node" code={`Node* newNode = new Node(value);
newNode->next = current->next;
newNode->prev = current;
if (current->next != nullptr) {
    current->next->prev = newNode;
}
current->next = newNode;`} />
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5"><p className="text-xs font-bold uppercase tracking-wider text-blue-600">Important</p><p className="mt-2 text-sm leading-6 text-slate-600">Insertion at the head takes O(1) time. Insertion at the end takes O(n) if there is no tail pointer.</p></div>
          </Section>

          <Section id="deletion" number="07" label="DELETION" title="Deletion in a Doubly Linked List" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Deletion removes a node. Update both neighbouring links where they exist, handle head correctly, and release the removed node's memory.</p>
            <h3 className="mt-6 font-bold text-slate-900">A. Delete the First Node</h3>
            <CodeCard title="Delete at Head" code={`if (head != nullptr) {
    Node* temp = head;
    head = head->next;
    if (head != nullptr) {
        head->prev = nullptr;
    }
    delete temp;
}`} />
            <h3 className="mt-7 font-bold text-slate-900">B. Delete a Node by Value</h3>
            <CodeCard title="Delete by Value" code={`Node* current = head;
while (current != nullptr && current->data != value) {
    current = current->next;
}

if (current != nullptr) {
    if (current->prev != nullptr) {
        current->prev->next = current->next;
    } else {
        head = current->next;
    }
    if (current->next != nullptr) {
        current->next->prev = current->prev;
    }
    delete current;
}`} />
            <p className="mt-4 text-sm leading-6 text-slate-500">This deletes only the first matching value. If the value is not found, the list remains unchanged.</p>
          </Section>

          <Section id="searching" number="08" label="SEARCHING" title="Searching in a Doubly Linked List" icon={<Target size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Searching compares each node's data with the target. Although the list supports backward traversal, a standard search still takes linear time.</p>
            <CodeCard title="Search for a Value" code={`bool search(Node* head, int target) {
    Node* current = head;
    while (current != nullptr) {
        if (current->data == target) {
            return true;
        }
        current = current->next;
    }
    return false;
}`} />
            <div className="mt-5 grid gap-4 md:grid-cols-2"><InfoCard title="Best Case" value="O(1)" description="The target is in the first node checked." /><InfoCard title="Worst Case" value="O(n)" description="The target is at the end or is absent." /></div>
          </Section>

          <Section id="complexity" number="09" label="COMPLEXITY" title="Time Complexity" icon={<MemoryStick size={21} />}>
            <div className="overflow-x-auto rounded-xl border border-slate-200"><table className="w-full min-w-[550px] border-collapse"><thead><tr className="bg-[#071025] text-left text-xs text-white"><th className="px-5 py-4">Operation</th><th className="px-5 py-4">Time</th><th className="px-5 py-4">Reason</th></tr></thead><tbody>{[["Traversal", "O(n)", "Visits nodes one by one."], ["Search", "O(n)", "May inspect all nodes."], ["Access by position", "O(n)", "Requires traversal."], ["Insert at head", "O(1)", "Updates a constant number of links."], ["Delete at head", "O(1)", "Updates head and the new head's prev."], ["Insert at end", "O(n)*", "Traverses to the last node."], ["Delete by value", "O(n)", "May need to find the target." ]].map(([operation, time, reason]) => <tr key={operation} className="border-b border-slate-100 text-sm last:border-0"><td className="px-5 py-4 font-semibold text-slate-800">{operation}</td><td className="px-5 py-4 font-mono font-bold text-blue-600">{time}</td><td className="px-5 py-4 text-slate-500">{reason}</td></tr>)}</tbody></table></div>
            <p className="mt-4 text-xs leading-5 text-slate-500">*Insertion at the end can be O(1) if a tail pointer is maintained.</p>
          </Section>

          <Section id="advantages" number="10" label="REVISION" title="Advantages & Limitations" icon={<Lightbulb size={21} />}>
            <div className="grid gap-5 lg:grid-cols-2"><FeatureCard title="Advantages" color="emerald" points={["Supports forward and backward traversal.", "Deletion of a known node is convenient.", "Can grow or shrink dynamically.", "Useful for deques and navigation history."]} /><FeatureCard title="Limitations" color="red" points={["Requires extra memory for prev pointers.", "Pointer updates are more complex.", "No direct random access by index.", "Searching still requires traversal."]} /></div>
          </Section>

          <Section id="applications" number="11" label="PRACTICAL USE" title="Applications of Doubly Linked Lists" icon={<Target size={21} />}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><ApplicationCard title="Browser Navigation" description="Move between previously visited and next pages." /><ApplicationCard title="Undo and Redo" description="Navigate backward and forward through editing states." /><ApplicationCard title="Deque" description="Support insertion and deletion at both ends." /><ApplicationCard title="Music Playlists" description="Move to the previous or next track." /><ApplicationCard title="LRU Cache" description="Track recency order alongside a hash map." /><ApplicationCard title="Image Viewer" description="Navigate to previous and next images." /></div>
          </Section>

          <Section id="interview" number="12" label="PLACEMENT PREP" title="Doubly Linked List Interview Questions" icon={<Target size={21} />}>
            <div className="grid gap-3 md:grid-cols-2">{["What is a doubly linked list?", "What are the fields of a node?", "What is the role of prev?", "What is the role of next?", "How is a DLL stored in memory?", "How do you traverse backwards?", "What is the complexity of searching?", "How do you insert a node at the head?", "How do you delete the first node?", "What is the difference between singly and doubly linked lists?", "What is the main disadvantage of a DLL?", "How do you delete a known node?", "What happens when head is nullptr?", "Where are doubly linked lists used?", "Why must both pointers be updated?"] .map((question, index) => <div key={question} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-medium leading-6 text-slate-700">{question}</p></div>)}</div>
          </Section>

          <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white"><CheckCircle2 size={20} /></div><div className="flex-1"><h2 className="font-bold text-slate-900">Doubly Linked List Revision Checklist</h2><p className="mt-2 text-sm leading-6 text-slate-600">Revise each concept and practise writing the C++ code without looking at the examples.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Node structure: prev, data, next", "Head and tail concepts", "Memory representation", "Creating and connecting nodes", "Forward traversal", "Backward traversal", "Insertion at head", "Insertion at end", "Insertion after a node", "Deletion at head", "Deletion by value", "Searching", "Time complexity", "Advantages and limitations", "Applications"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 size={16} className="shrink-0 text-blue-600" />{item}</div>)}</div></div></div></div>
        </div></section>
      </main>
    </>
  )
}

/* REUSABLE COMPONENTS */

function Section({
  id,
  number,
  label,
  title,
  icon,
  children,
}: {
  id: string
  number: string
  label: string
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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

      <div className="mt-6">{children}</div>
    </section>
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
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
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
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
      <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
        <p className="text-xs font-bold text-slate-700">{title}</p>
      </div>
      <div className="overflow-x-auto bg-[#071025] p-5">
        <pre className="text-sm leading-7 text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

function DefinitionRow({
  term,
  definition,
}: {
  term: string
  definition: string
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:gap-5">
      <span className="min-w-32 font-mono text-sm font-bold text-blue-600">
        {term}
      </span>
      <span className="text-sm leading-6 text-slate-600">{definition}</span>
    </div>
  )
}

function NodeBox({ data, prev, next }: { data: string; prev: string; next: string }) {
  return (
    <div className="min-w-[120px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-3">
        <div className="border-r border-slate-100 px-2 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">PREV</p><p className="mt-1 text-[10px] font-bold text-slate-600">{prev}</p></div>
        <div className="border-r border-slate-100 px-2 py-3 text-center"><p className="text-[9px] font-bold text-blue-600">DATA</p><p className="mt-1 text-xs font-bold text-slate-800">{data}</p></div>
        <div className="px-2 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">NEXT</p><p className="mt-1 text-[10px] font-bold text-slate-600">{next}</p></div>
      </div>
    </div>
  )
}

function MemoryNode({ address, data, prev, next }: { address: string; data: string; prev: string; next: string }) {
  return (
    <div className="min-w-[120px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-100 px-2 py-2 text-center text-[9px] font-bold text-slate-500">{address}</div>
      <div className="grid grid-cols-3">
        <div className="border-r border-slate-100 px-2 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">PREV</p><p className="mt-1 text-[10px] font-bold text-slate-600">{prev}</p></div>
        <div className="border-r border-slate-100 px-2 py-3 text-center"><p className="text-[9px] font-bold text-blue-600">DATA</p><p className="mt-1 text-xs font-bold text-slate-800">{data}</p></div>
        <div className="px-2 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">NEXT</p><p className="mt-1 text-[10px] font-bold text-slate-600">{next}</p></div>
      </div>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
        {number}
      </span>
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  )
}

function FeatureCard({
  title,
  points,
  color,
}: {
  title: string
  points: string[]
  color: "emerald" | "red"
}) {
  const styles = {
    emerald: "border-emerald-100 bg-emerald-50",
    red: "border-red-100 bg-red-50",
  }

  return (
    <div className={`rounded-2xl border p-6 ${styles[color]}`}>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-2 text-sm leading-6 text-slate-600"
          >
            <CheckCircle2
              size={16}
              className="mt-1 shrink-0 text-emerald-600"
            />
            {point}
          </div>
        ))}
      </div>
    </div>
  )
}

function ApplicationCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
        <Link2 size={18} />
      </div>
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  )
}