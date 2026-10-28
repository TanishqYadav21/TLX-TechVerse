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
  List,
  MemoryStick,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "structure", number: "02", title: "Node Structure" },
  { id: "working", number: "03", title: "How It Works" },
  { id: "creation", number: "04", title: "Creating a Circular List" },
  { id: "traversal", number: "05", title: "Traversal" },
  { id: "insertion", number: "06", title: "Insertion" },
  { id: "deletion", number: "07", title: "Deletion" },
  { id: "searching", number: "08", title: "Searching" },
  { id: "complexity", number: "09", title: "Time Complexity" },
  { id: "advantages", number: "10", title: "Advantages & Limitations" },
  { id: "applications", number: "11", title: "Applications" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

export default function CircularLinkedListPage() {
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
                <Link href="/core-subjects/dsa/linked-lists" className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white">← Back to Linked Lists</Link>
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300"><Sparkles size={14} /> DATA STRUCTURES & ALGORITHMS</div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Master<span className="block text-slate-300">Circular Linked Lists.</span></h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">Learn circular list structure, node connections, traversal, insertion, deletion and searching using C++ with practical examples.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["Circular Links", "Head & Tail", "Operations", "C / C++"].map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300">{tag}</span>)}</div>
              </div>
              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">WHAT YOU'LL LEARN</p>
                <div className="mt-5 space-y-3">{["Circular node connections", "Last node points to head", "Safe circular traversal", "Insertion and deletion"].map((item, index) => <div key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">{String(index + 1).padStart(2, "0")}</span><span className="text-xs font-medium text-slate-300">{item}</span></div>)}</div>
                <div className="mt-5 border-t border-white/10 pt-4"><div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Complete Topic Guide</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10"><div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><BookOpen size={21} /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">COMPLETE LEARNING PATH</p><h2 className="mt-1 text-xl font-bold text-slate-900">Circular Linked List — Complete Guide</h2></div></div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{section.number}</span><span className="text-xs font-semibold text-slate-700">{section.title}</span></a>)}</div>
          </div>

          <Section id="definition" number="01" label="FUNDAMENTALS" title="What is a Circular Linked List?" icon={<BookOpen size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A <strong>circular linked list</strong> is a linked list in which the last node points back to the first node instead of pointing to <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-blue-600">nullptr</code>. This creates a circle of connected nodes.</p>
            <Diagram values={["10", "20", "30"]} circular />
            <div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard title="Starting Point" value="head" description="Points to the first node." /><InfoCard title="Last Node" value="tail" description="Its next pointer points back to head." /><InfoCard title="End Condition" value="head again" description="Traversal stops when the current node returns to head." /></div>
          </Section>

          <Section id="structure" number="02" label="NODE STRUCTURE" title="Structure of a Node" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">In a circular singly linked list, each node contains data and a next pointer. The difference is in how the final node is connected.</p>
            <CodeCard title="C++ Node Structure" code={`struct Node {
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};`} />
            <DefinitionRow term="data" definition="Stores the value of the node." /><DefinitionRow term="next" definition="Stores the address of the next node." /><DefinitionRow term="Circular link" definition="The last node's next pointer refers to head." />
          </Section>

          <Section id="working" number="03" label="CORE CONCEPT" title="How Does a Circular Linked List Work?" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">For a list containing 10, 20 and 30, the next pointer of node 30 points back to node 10. There is no NULL link at the end of a non-empty circular list.</p>
            <CodeCard title="Connect the Last Node to Head" code={`Node* head = new Node(10);
head->next = new Node(20);
head->next->next = new Node(30);

// Make the list circular
head->next->next->next = head;`} />
            <InfoCard title="Important difference" value="last->next = head" description="A normal singly linked list ends with nullptr; a circular list loops back to the first node." />
          </Section>

          <Section id="creation" number="04" label="IMPLEMENTATION" title="Creating a Circular Linked List" icon={<MemoryStick size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Create nodes and connect them in order. Finally, connect the last node back to the head.</p>
            <CodeCard title="Create and Display a Circular List" code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int value) : data(value), next(nullptr) {}
};

int main() {
    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);

    head->next = second;
    second->next = third;
    third->next = head;

    Node* current = head;
    if (head != nullptr) {
        do {
            cout << current->data << " ";
            current = current->next;
        } while (current != head);
    }

    // Release nodes before exiting
    third->next = nullptr;
    delete head;
    delete second;
    delete third;
    return 0;
}`} />
            <Output>10 20 30</Output>
          </Section>

          <Section id="traversal" number="05" label="TRAVERSAL" title="Traversing a Circular Linked List" icon={<List size={21} />}>
            <p className="text-sm leading-7 text-slate-600">A normal while loop that checks for nullptr will not stop on a circular list. Use a do-while loop or stop when the pointer reaches head again.</p>
            <CodeCard title="Traversal Code" code={`void display(Node* head) {
    if (head == nullptr) return;

    Node* current = head;
    do {
        cout << current->data << " ";
        current = current->next;
    } while (current != head);
}`} />
            <div className="mt-5 grid gap-3 md:grid-cols-3"><StepCard number="01" title="Start" description="Set current to head." /><StepCard number="02" title="Process" description="Print or use current->data." /><StepCard number="03" title="Stop" description="Stop when current returns to head." /></div>
            <InfoCard title="Time Complexity" value="O(n)" description="Each node is visited once in one full traversal." />
          </Section>

          <Section id="insertion" number="06" label="INSERTION" title="Insertion in a Circular Linked List" icon={<Code2 size={21} />}>
            <p className="text-sm leading-7 text-slate-600">When inserting a node, preserve the circular connection. The empty-list case must be handled separately.</p>
            <h3 className="mt-6 font-bold text-slate-900">A. Insert at the Beginning</h3>
            <CodeCard title="Insert at Head" code={`void insertBeginning(Node*& head, int value) {
    Node* newNode = new Node(value);

    if (head == nullptr) {
        head = newNode;
        newNode->next = head;
        return;
    }

    Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    newNode->next = head;
    last->next = newNode;
    head = newNode;
}`} />
            <h3 className="mt-7 font-bold text-slate-900">B. Insert at the End</h3>
            <CodeCard title="Insert at End" code={`void insertEnd(Node*& head, int value) {
    Node* newNode = new Node(value);

    if (head == nullptr) {
        head = newNode;
        newNode->next = head;
        return;
    }

    Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    last->next = newNode;
    newNode->next = head;
}`} />
            <InfoCard title="Pointer rule" description="After insertion, the last node must still point to head. Otherwise the circular structure breaks." />
          </Section>

          <Section id="deletion" number="07" label="DELETION" title="Deletion in a Circular Linked List" icon={<GitBranch size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Deletion must account for an empty list, a list containing one node, and a list containing multiple nodes.</p>
            <h3 className="mt-6 font-bold text-slate-900">Delete the First Node</h3>
            <CodeCard title="Delete at Head" code={`void deleteBeginning(Node*& head) {
    if (head == nullptr) return;

    if (head->next == head) {
        delete head;
        head = nullptr;
        return;
    }

    Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    Node* temp = head;
    head = head->next;
    last->next = head;
    delete temp;
}`} />
            <h3 className="mt-7 font-bold text-slate-900">Delete a Node by Value</h3>
            <CodeCard title="Delete by Value" code={`void deleteValue(Node*& head, int value) {
    if (head == nullptr) return;

    Node* current = head;
    Node* previous = nullptr;

    do {
        if (current->data == value) break;
        previous = current;
        current = current->next;
    } while (current != head);

    if (current->data != value) return;

    if (current == head) {
        deleteBeginning(head);
        return;
    }

    previous->next = current->next;
    delete current;
}`} />
            <p className="mt-4 text-sm leading-6 text-slate-500">The delete-by-value example uses the deleteBeginning function shown above for head deletion.</p>
          </Section>

          <Section id="searching" number="08" label="SEARCHING" title="Searching in a Circular Linked List" icon={<Target size={21} />}>
            <p className="text-sm leading-7 text-slate-600">Compare each node's data with the target. Stop if the target is found or traversal returns to head.</p>
            <CodeCard title="Search for a Value" code={`bool search(Node* head, int target) {
    if (head == nullptr) return false;

    Node* current = head;
    do {
        if (current->data == target) return true;
        current = current->next;
    } while (current != head);

    return false;
}`} />
            <div className="mt-5 grid gap-4 md:grid-cols-2"><InfoCard title="Best Case" value="O(1)" description="Target is at the head." /><InfoCard title="Worst Case" value="O(n)" description="Target is at the end or absent." /></div>
          </Section>

          <Section id="complexity" number="09" label="COMPLEXITY" title="Time Complexity" icon={<MemoryStick size={21} />}>
            <div className="overflow-x-auto rounded-xl border border-slate-200"><table className="w-full min-w-[550px] border-collapse"><thead><tr className="bg-[#071025] text-left text-xs text-white"><th className="px-5 py-4">Operation</th><th className="px-5 py-4">Time</th><th className="px-5 py-4">Reason</th></tr></thead><tbody>{[["Traversal", "O(n)", "Visits every node once."], ["Search", "O(n)", "May inspect all nodes."], ["Insert at beginning", "O(n)*", "Find last node without a tail pointer."], ["Insert at end", "O(n)*", "Find last node without a tail pointer."], ["Delete at beginning", "O(n)*", "Find last node to reconnect head."], ["Delete by value", "O(n)", "May scan the full list."]].map(([operation, time, reason]) => <tr key={operation} className="border-b border-slate-100 text-sm last:border-0"><td className="px-5 py-4 font-semibold text-slate-800">{operation}</td><td className="px-5 py-4 font-mono font-bold text-blue-600">{time}</td><td className="px-5 py-4 text-slate-500">{reason}</td></tr>)}</tbody></table></div>
            <p className="mt-4 text-xs leading-5 text-slate-500">*Operations can be O(1) when a suitable tail pointer is maintained.</p>
          </Section>

          <Section id="advantages" number="10" label="REVISION" title="Advantages & Limitations" icon={<Lightbulb size={21} />}>
            <div className="grid gap-5 lg:grid-cols-2"><FeatureCard title="Advantages" color="emerald" points={["Traversal can continue from the last node to the first.", "Useful for repeated cyclic processing.", "No NULL next pointer at the end of a non-empty list.", "Can implement circular queues and round-robin scheduling."]} /><FeatureCard title="Limitations" color="red" points={["Traversal needs a careful stopping condition.", "An incorrect loop can run forever.", "Finding the last node takes O(n) without a tail pointer.", "Insertion and deletion must preserve the circular link."]} /></div>
          </Section>

          <Section id="applications" number="11" label="PRACTICAL USE" title="Applications of Circular Linked Lists" icon={<Target size={21} />}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><ApplicationCard title="Round-Robin Scheduling" description="Processes are visited in a repeating cycle." /><ApplicationCard title="Circular Queue" description="Elements can be managed in a cyclic order." /><ApplicationCard title="Multiplayer Games" description="Turns can move from the last player back to the first." /><ApplicationCard title="Music Playlists" description="Playback can continue from the last song to the first." /><ApplicationCard title="Token Ring" description="Devices can be represented in a circular sequence." /><ApplicationCard title="Repeated Tasks" description="A set of tasks can be processed continuously in order." /></div>
          </Section>

          <Section id="interview" number="12" label="PLACEMENT PREP" title="Circular Linked List Interview Questions" icon={<Target size={21} />}>
            <div className="grid gap-3 md:grid-cols-2">{["What is a circular linked list?", "How is it different from a singly linked list?", "Why does the last node point to head?", "Why can a normal nullptr loop run forever?", "How do you traverse a circular linked list?", "How do you insert a node at the beginning?", "How do you delete the only node?", "What is the complexity of searching?", "What is the role of a tail pointer?", "Where are circular linked lists used?", "How do you detect a full traversal?", "What is the main disadvantage of a circular list?"].map((question, index) => <div key={question} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-medium leading-6 text-slate-700">{question}</p></div>)}</div>
          </Section>

          <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white"><CheckCircle2 size={20} /></div><div className="flex-1"><h2 className="font-bold text-slate-900">Circular Linked List Revision Checklist</h2><p className="mt-2 text-sm leading-6 text-slate-600">Revise each concept and practise writing the C++ code without looking at the examples.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Definition and node structure", "Last node points to head", "Creating a circular list", "Traversal stopping condition", "Insertion at beginning", "Insertion at end", "Deletion of one-node list", "Deletion by value", "Searching", "Time complexity", "Advantages and limitations", "Applications"].map(item => <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 size={16} className="shrink-0 text-blue-600" />{item}</div>)}</div></div></div></div>
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
function Diagram({ values, circular = false }: { values: string[]; circular?: boolean }) {
  return <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6"><div className="flex min-w-[420px] items-center justify-center gap-3">{values.map((value, index) => <div key={value + index} className="flex items-center gap-3"><div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="grid grid-cols-2"><div className="border-r border-slate-100 px-3 py-3 text-center"><p className="text-[9px] font-bold text-blue-600">DATA</p><p className="mt-1 text-xs font-bold text-slate-800">{value}</p></div><div className="px-3 py-3 text-center"><p className="text-[9px] font-bold text-violet-600">NEXT</p><p className="mt-1 text-[10px] font-bold text-slate-600">{index === values.length - 1 ? (circular ? "HEAD" : "NULL") : "NEXT"}</p></div></div></div>{index < values.length - 1 && <span className="text-xl font-bold text-blue-500">→</span>}</div>)}{circular && <span className="ml-1 text-xl font-bold text-violet-600">↶</span>}</div><p className="mt-5 text-center text-xs text-slate-500">{circular ? "The last node links back to the first node." : "Each node stores data and a next pointer."}</p></div>
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
function ApplicationCard({ title, description }: { title: string; description: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm"><Link2 size={18} /></div><h3 className="mt-4 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>
}
