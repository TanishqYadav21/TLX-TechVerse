"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  Lightbulb,
  Link2,
  List,
  MemoryStick,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "definition", number: "01", title: "Definition" },
  { id: "need", number: "02", title: "Why Linked Lists?" },
  { id: "structure", number: "03", title: "Node Structure" },
  { id: "memory", number: "04", title: "Memory Representation" },
  { id: "types", number: "05", title: "Types of Linked Lists" },
  { id: "working", number: "06", title: "How It Works" },
  { id: "operations", number: "07", title: "Basic Operations" },
  { id: "complexity", number: "08", title: "Time Complexity" },
  { id: "array-difference", number: "09", title: "Array vs Linked List" },
  { id: "advantages", number: "10", title: "Advantages & Limitations" },
  { id: "applications", number: "11", title: "Applications" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

export default function LinkedListFundamentalsPage() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-5 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#05091b] px-8 py-10 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] md:px-10 md:py-11">

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

              <div className="max-w-2xl">

                

                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300">
                  <Sparkles size={14} />
                  DATA STRUCTURES & ALGORITHMS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Linked List Fundamentals.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  Learn linked list definitions, nodes, pointers, dynamic
                  memory representation and the fundamental concepts needed
                  to understand linked list operations.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Nodes", "Pointers", "Memory", "C / C++"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  WHAT YOU&apos;LL LEARN
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Linked list definition",
                    "Node and pointer structure",
                    "Dynamic memory allocation",
                    "Types and applications",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">
                        {String(index + 1).padStart(2, "0")}
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

        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            {/* LEARNING PATH */}
            <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    COMPLETE LEARNING PATH
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Linked List Fundamentals — Complete Guide
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

            {/* 01 DEFINITION */}
            <Section id="definition" number="01" label="FUNDAMENTAL" title="What is a Linked List?" icon={<BookOpen size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                A <strong>linked list</strong> is a linear data structure
                consisting of nodes. Each node stores data and one or more
                links (pointers) that connect it to other nodes.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Unlike arrays, linked list nodes do not need to occupy
                consecutive memory locations. Nodes are connected through
                pointers, allowing the list to grow or shrink dynamically.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Simple Definition
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  A linked list is a collection of nodes connected using
                  pointers, where each node stores data and a link to another
                  node.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoCard title="Structure" value="Nodes" description="Each node contains data and link information." />
                <InfoCard title="Connection" value="Pointers" description="Pointers connect one node to another." />
                <InfoCard title="Memory" value="Dynamic" description="Nodes can be allocated as needed." />
              </div>
            </Section>

            {/* 02 WHY LINKED LIST */}
            <Section id="need" number="02" label="CONCEPT" title="Why Do We Need Linked Lists?" icon={<Lightbulb size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Arrays generally store elements in contiguous memory locations
                and often have a fixed capacity when declared as ordinary
                fixed-size arrays. Inserting or deleting elements in the
                middle may require shifting other elements.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Linked lists provide a different approach. Nodes can be
                allocated dynamically, and insertion or deletion can be
                efficient when the required node or position is already known.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <FeatureCard
                  title="Array"
                  points={[
                    "Elements are typically stored contiguously.",
                    "Index-based access is efficient: O(1).",
                    "Middle insertion or deletion may require shifting.",
                    "Ordinary fixed-size arrays have fixed capacity.",
                  ]}
                  color="blue"
                />

                <FeatureCard
                  title="Linked List"
                  points={[
                    "Nodes need not be stored contiguously.",
                    "Sequential traversal is required to reach a position.",
                    "Pointer updates can insert or delete nodes efficiently.",
                    "Nodes can be allocated dynamically.",
                  ]}
                  color="violet"
                />
              </div>
            </Section>

            {/* 03 NODE STRUCTURE */}
            <Section id="structure" number="03" label="NODE STRUCTURE" title="Structure of a Node" icon={<Code2 size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                In a singly linked list, every node contains two main parts:
                a data field and a pointer to the next node.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mx-auto flex min-w-[300px] max-w-lg items-center justify-center gap-3">
                  <div className="flex-1 overflow-hidden rounded-xl border-2 border-blue-200 bg-white">
                    <div className="bg-blue-50 px-4 py-3 text-center text-xs font-bold text-blue-700">
                      DATA
                    </div>
                    <div className="p-3 text-center text-xs text-slate-500">
                      Value
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden rounded-xl border-2 border-violet-200 bg-white">
                    <div className="bg-violet-50 px-4 py-3 text-center text-xs font-bold text-violet-700">
                      NEXT
                    </div>
                    <div className="p-3 text-center text-xs text-slate-500">
                      Address
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-center text-xs text-slate-500">
                  Node = Data + Pointer to the next node
                </p>
              </div>

              <CodeCard
                title="C++ Node Declaration"
                code={`struct Node {
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};`}
              />

              <div className="mt-5 space-y-3">
                <DefinitionRow term="data" definition="Stores the actual value of the node." />
                <DefinitionRow term="next" definition="Stores the address of the next node." />
                <DefinitionRow term="nullptr" definition="Indicates that the pointer does not point to a node." />
                <DefinitionRow term="head" definition="Pointer that identifies the first node of the list." />
              </div>
            </Section>

            {/* 04 MEMORY */}
            <Section id="memory" number="04" label="MEMORY" title="Memory Representation" icon={<MemoryStick size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Linked list nodes may be stored at different memory addresses.
                The next pointer maintains the logical order by storing the
                address of the next node.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex min-w-[520px] items-center justify-center gap-2">

                  <div className="rounded-xl border border-blue-200 bg-white p-4 text-center">
                    <p className="text-[10px] font-bold text-slate-400">HEAD</p>
                    <p className="mt-2 font-mono text-xs font-bold text-blue-600">
                      100
                    </p>
                  </div>

                  <ArrowUpRight className="rotate-45 text-slate-400" size={20} />

                  <NodeBox address="100" data="10" next="450" />

                  <ArrowUpRight className="rotate-45 text-slate-400" size={20} />

                  <NodeBox address="450" data="20" next="220" />

                  <ArrowUpRight className="rotate-45 text-slate-400" size={20} />

                  <NodeBox address="220" data="30" next="NULL" />

                </div>

                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  Example addresses are illustrative. Nodes can be located
                  at non-consecutive memory addresses.
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoCard title="First Node" value="head" description="Provides the entry point to the list." />
                <InfoCard title="Last Node" value="NULL" description="In a standard singly linked list, the last node's next pointer is null." />
              </div>
            </Section>

            {/* 05 TYPES */}
            <Section id="types" number="05" label="CLASSIFICATION" title="Types of Linked Lists" icon={<GitBranch size={21} />}>
              <div className="grid gap-4 md:grid-cols-2">
                <TypeCard
                  number="01"
                  title="Singly Linked List"
                  description="Each node points to the next node. Traversal normally moves forward."
                  diagram="DATA → NEXT"
                  color="blue"
                />
                <TypeCard
                  number="02"
                  title="Doubly Linked List"
                  description="Each node has previous and next pointers, supporting traversal in both directions."
                  diagram="PREV ↔ DATA ↔ NEXT"
                  color="violet"
                />
                <TypeCard
                  number="03"
                  title="Circular Singly Linked List"
                  description="The last node points back to the first node instead of storing null."
                  diagram="LAST → HEAD"
                  color="emerald"
                />
                <TypeCard
                  number="04"
                  title="Circular Doubly Linked List"
                  description="Nodes have previous and next pointers, and the first and last nodes are connected circularly."
                  diagram="HEAD ↔ ... ↔ LAST"
                  color="orange"
                />
              </div>
            </Section>

            {/* 06 WORKING */}
            <Section id="working" number="06" label="HOW IT WORKS" title="How Does a Linked List Work?" icon={<Link2 size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Consider a linked list containing three values: 10, 20 and 30.
                The head pointer stores the address of the first node. Each
                node points to the next one, and the last node points to null.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex min-w-[400px] items-center justify-center gap-3">
                  <NodeBox address="Node 1" data="10" next="next" />
                  <span className="text-xl font-bold text-blue-500">→</span>
                  <NodeBox address="Node 2" data="20" next="next" />
                  <span className="text-xl font-bold text-blue-500">→</span>
                  <NodeBox address="Node 3" data="30" next="NULL" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StepCard number="01" title="Start at head" description="Access the first node using the head pointer." />
                <StepCard number="02" title="Read the data" description="Process the value stored in the current node." />
                <StepCard number="03" title="Follow next" description="Move to the next node until nullptr is reached." />
              </div>

              <CodeCard
                title="Traversal in C++"
                code={`Node* current = head;

while (current != nullptr) {
    cout << current->data << " ";
    current = current->next;
}`}
              />
            </Section>

            {/* 07 OPERATIONS */}
            <Section id="operations" number="07" label="CORE OPERATIONS" title="Basic Linked List Operations" icon={<Layers size={21} />}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <OperationCard title="Traversal" description="Visit nodes one by one from the head." complexity="O(n)" />
                <OperationCard title="Searching" description="Compare each node's data with the target." complexity="O(n)" />
                <OperationCard title="Insertion at Head" description="Create a node and connect it before the current head." complexity="O(1)" />
                <OperationCard title="Insertion at End" description="Reach the last node and connect the new node." complexity="O(n)*" />
                <OperationCard title="Deletion at Head" description="Move head to the second node and release the old node." complexity="O(1)" />
                <OperationCard title="Access by Position" description="Traverse nodes until the required position is reached." complexity="O(n)" />
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                *Appending can be O(1) when a tail pointer is maintained.
                Complexity assumes a standard singly linked list.
              </p>
            </Section>

            {/* 08 COMPLEXITY */}
            <Section id="complexity" number="08" label="COMPLEXITY" title="Time Complexity" icon={<Cpu size={21} />}>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Operation</th>
                      <th className="px-5 py-4">Time Complexity</th>
                      <th className="px-5 py-4">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Access by index", "O(n)", "Nodes must be traversed."],
                      ["Search", "O(n)", "May inspect every node."],
                      ["Insert at head", "O(1)", "Only a few pointers change."],
                      ["Delete at head", "O(1)", "Head moves to the next node."],
                      ["Insert at end", "O(n)*", "Must find the last node without a tail pointer."],
                      ["Traverse entire list", "O(n)", "Each node is visited once."],
                    ].map(([operation, time, reason]) => (
                      <tr key={operation} className="border-b border-slate-100 text-sm last:border-0">
                        <td className="px-5 py-4 font-semibold text-slate-800">{operation}</td>
                        <td className="px-5 py-4 font-mono font-bold text-blue-600">{time}</td>
                        <td className="px-5 py-4 text-slate-500">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 09 ARRAY VS LIST */}
            <Section id="array-difference" number="09" label="COMPARISON" title="Array vs Linked List" icon={<BookOpen size={21} />}>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[650px] border-collapse">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Feature</th>
                      <th className="px-5 py-4">Array</th>
                      <th className="px-5 py-4">Linked List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Memory", "Usually contiguous", "Nodes may be non-contiguous"],
                      ["Size", "Fixed for ordinary fixed-size arrays", "Can grow or shrink dynamically"],
                      ["Access by index", "O(1)", "O(n)"],
                      ["Extra memory", "Usually no per-element pointer", "Pointer storage per node"],
                      ["Insert at beginning", "O(n) due to shifting", "O(1)"],
                      ["Cache locality", "Usually better", "Usually poorer"],
                      ["Binary search", "Suitable on sorted arrays", "Not efficient with ordinary linked-list traversal"],
                    ].map(([feature, array, list]) => (
                      <tr key={feature} className="border-b border-slate-100 text-sm last:border-0">
                        <td className="px-5 py-4 font-semibold text-slate-800">{feature}</td>
                        <td className="px-5 py-4 text-slate-600">{array}</td>
                        <td className="px-5 py-4 text-blue-600">{list}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 10 ADVANTAGES */}
            <Section id="advantages" number="10" label="REVISION" title="Advantages & Limitations" icon={<Lightbulb size={21} />}>
              <div className="grid gap-5 lg:grid-cols-2">
                <FeatureCard
                  title="Advantages"
                  color="emerald"
                  points={[
                    "Dynamic size; nodes can be allocated as needed.",
                    "Efficient insertion at the head.",
                    "No requirement for contiguous node storage.",
                    "Useful for implementing stacks and queues.",
                    "Can support different traversal patterns depending on the type.",
                  ]}
                />

                <FeatureCard
                  title="Limitations"
                  color="red"
                  points={[
                    "No direct index-based access.",
                    "Traversal is needed to reach a position.",
                    "Extra memory is required for pointers.",
                    "Pointer errors can cause bugs.",
                    "Poorer cache locality than arrays in many workloads.",
                  ]}
                />
              </div>
            </Section>

            {/* 11 APPLICATIONS */}
            <Section id="applications" number="11" label="PRACTICAL USE" title="Applications of Linked Lists" icon={<Target size={21} />}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <ApplicationCard title="Stacks & Queues" description="Linked lists can implement dynamic stacks and queues." />
                <ApplicationCard title="Browser Navigation" description="Doubly linked structures can model backward and forward navigation." />
                <ApplicationCard title="Music Playlists" description="Nodes can connect tracks for sequential or circular playback." />
                <ApplicationCard title="Undo & Redo" description="Linked structures can help represent sequences of actions." />
                <ApplicationCard title="Hash Tables" description="Separate chaining can use linked lists to handle collisions." />
                <ApplicationCard title="Graph Adjacency Lists" description="Linked structures can represent neighbors in graph implementations." />
              </div>
            </Section>

            {/* 12 INTERVIEW */}
            <Section id="interview" number="12" label="PLACEMENT PREP" title="Linked List Interview Questions" icon={<Target size={21} />}>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "What is a linked list?",
                  "What is a node?",
                  "What is the role of the head pointer?",
                  "How is a linked list stored in memory?",
                  "What is the difference between an array and a linked list?",
                  "What is a null pointer in a linked list?",
                  "What are the different types of linked lists?",
                  "What are the advantages of linked lists?",
                  "Why is random access inefficient in linked lists?",
                  "What is the time complexity of searching a linked list?",
                  "How can a node be inserted at the beginning?",
                  "What is the difference between singly and doubly linked lists?",
                  "What is a circular linked list?",
                  "What happens when head is nullptr?",
                  "How can a linked list be traversed?",
                ].map((question, index) => (
                  <div key={question} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-blue-600 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* REVISION CHECKLIST */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <CheckCircle2 size={20} />
                </div>

                <div className="flex-1">
                  <h2 className="font-bold text-slate-900">
                    Fundamentals Revision Checklist
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Revise these concepts before moving to singly linked list
                    implementation.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Definition of linked list",
                      "Node structure",
                      "Data and next pointer",
                      "Head pointer",
                      "Null pointer",
                      "Dynamic memory",
                      "Memory representation",
                      "Types of linked lists",
                      "Traversal",
                      "Basic operations",
                      "Time complexity",
                      "Array vs linked list",
                      "Advantages and limitations",
                      "Real-world applications",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <CheckCircle2 size={16} className="shrink-0 text-blue-600" />
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
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
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
      <span className="min-w-28 font-mono text-sm font-bold text-blue-600">
        {term}
      </span>
      <span className="text-sm leading-6 text-slate-600">
        {definition}
      </span>
    </div>
  )
}

function NodeBox({
  address,
  data,
  next,
}: {
  address: string
  data: string
  next: string
}) {
  return (
    <div className="min-w-[92px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-100 px-3 py-2 text-center text-[9px] font-bold text-slate-500">
        {address}
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r border-slate-100 px-2 py-3 text-center">
          <p className="text-[9px] font-bold text-blue-600">DATA</p>
          <p className="mt-1 text-xs font-bold text-slate-800">{data}</p>
        </div>
        <div className="px-2 py-3 text-center">
          <p className="text-[9px] font-bold text-violet-600">NEXT</p>
          <p className="mt-1 text-[10px] font-bold text-slate-600">{next}</p>
        </div>
      </div>
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
  color: "blue" | "violet" | "emerald" | "red"
}) {
  const styles = {
    blue: "border-blue-100 bg-blue-50 text-blue-700",
    violet: "border-violet-100 bg-violet-50 text-violet-700",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
    red: "border-red-100 bg-red-50 text-red-700",
  }

  return (
    <div className={`rounded-2xl border p-6 ${styles[color]}`}>
      <h3 className="font-bold">{title}</h3>
      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-600" />
            {point}
          </div>
        ))}
      </div>
    </div>
  )
}

function TypeCard({
  number,
  title,
  description,
  diagram,
  color,
}: {
  number: string
  title: string
  description: string
  diagram: string
  color: "blue" | "violet" | "emerald" | "orange"
}) {
  const styles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    violet: "bg-violet-50 text-violet-600 border-violet-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg border text-[10px] font-bold ${styles[color]}`}>
          {number}
        </span>
        <GitBranch size={18} className="text-slate-300" />
      </div>
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className={`mt-4 rounded-xl border bg-white px-3 py-4 text-center font-mono text-xs font-bold ${styles[color]}`}>
        {diagram}
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

function OperationCard({
  title,
  description,
  complexity,
}: {
  title: string
  description: string
  complexity: string
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
        <span className="text-xs text-slate-500">Time Complexity</span>
        <span className="font-mono text-xs font-bold text-blue-600">{complexity}</span>
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