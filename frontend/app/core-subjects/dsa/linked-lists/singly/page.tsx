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
  { id: "representation", number: "03", title: "Memory Representation" },
  { id: "creation", number: "04", title: "Creating a Linked List" },
  { id: "traversal", number: "05", title: "Traversal" },
  { id: "insertion", number: "06", title: "Insertion" },
  { id: "deletion", number: "07", title: "Deletion" },
  { id: "searching", number: "08", title: "Searching" },
  { id: "complexity", number: "09", title: "Time Complexity" },
  { id: "advantages", number: "10", title: "Advantages & Limitations" },
  { id: "applications", number: "11", title: "Applications" },
  { id: "interview", number: "12", title: "Interview Questions" },
]

export default function SinglyLinkedListPage() {
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

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                

                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-300">
                  <Sparkles size={14} />
                  DATA STRUCTURES & ALGORITHMS
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Master
                  <span className="block text-slate-300">
                    Singly Linked Lists.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  Learn node creation, pointers, memory representation,
                  traversal, insertion, deletion and searching in a singly
                  linked list using C++.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Nodes", "Pointers", "Operations", "C / C++"].map((tag) => (
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
                    "Singly linked list structure",
                    "Node creation and connections",
                    "Insertion and deletion",
                    "Traversal and searching",
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
                    Singly Linked List — Complete Guide
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
            <Section
              id="definition"
              number="01"
              label="FUNDAMENTALS"
              title="What is a Singly Linked List?"
              icon={<BookOpen size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                A <strong>singly linked list</strong> is a linear data
                structure made up of nodes. Each node contains data and a
                pointer to the next node. The last node points to
                <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-blue-600">
                  nullptr
                </code>
                to indicate the end of the list.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex min-w-[360px] items-center justify-center gap-3">
                  <NodeBox data="10" next="next" />
                  <span className="text-xl font-bold text-blue-500">→</span>
                  <NodeBox data="20" next="next" />
                  <span className="text-xl font-bold text-blue-500">→</span>
                  <NodeBox data="30" next="NULL" />
                </div>
                <p className="mt-5 text-center text-xs text-slate-500">
                  Each node points only to the next node.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Node"
                  value="Data"
                  description="Stores the value and the next pointer."
                />
                <InfoCard
                  title="Starting Point"
                  value="head"
                  description="Points to the first node in the list."
                />
                <InfoCard
                  title="End Condition"
                  value="nullptr"
                  description="The last node has no next node."
                />
              </div>
            </Section>

            {/* 02 NODE STRUCTURE */}
            <Section
              id="structure"
              number="02"
              label="NODE STRUCTURE"
              title="Structure of a Node"
              icon={<Code2 size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                A node in a singly linked list contains two fields: the data
                field and the next pointer. The pointer stores the address of
                the next node.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="First Field"
                  value="data"
                  description="Contains the actual value, such as 10, 20 or 30."
                />
                <InfoCard
                  title="Second Field"
                  value="next"
                  description="Stores the address of the next node or nullptr."
                />
              </div>

              <CodeCard
                title="C++ Node Structure"
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
                <DefinitionRow
                  term="struct Node"
                  definition="Defines the structure of a linked list node."
                />
                <DefinitionRow
                  term="int data"
                  definition="Stores an integer value in the node."
                />
                <DefinitionRow
                  term="Node* next"
                  definition="A pointer to another Node."
                />
                <DefinitionRow
                  term="nullptr"
                  definition="Represents the absence of a next node."
                />
              </div>
            </Section>

            {/* 03 MEMORY REPRESENTATION */}
            <Section
              id="representation"
              number="03"
              label="MEMORY"
              title="Memory Representation"
              icon={<MemoryStick size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                Linked list nodes do not need to be stored next to each other
                in memory. The next pointer connects them in the required
                logical order.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex min-w-[470px] items-center justify-center gap-3">
                  <div className="rounded-xl border border-blue-200 bg-white p-4 text-center">
                    <p className="text-[10px] font-bold text-slate-400">
                      HEAD
                    </p>
                    <p className="mt-2 font-mono text-xs font-bold text-blue-600">
                      100
                    </p>
                  </div>

                  <span className="text-xl font-bold text-blue-500">→</span>

                  <MemoryNode address="100" data="10" next="450" />

                  <span className="text-xl font-bold text-blue-500">→</span>

                  <MemoryNode address="450" data="20" next="220" />

                  <span className="text-xl font-bold text-blue-500">→</span>

                  <MemoryNode address="220" data="30" next="NULL" />
                </div>
                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  Example memory addresses are illustrative, not actual
                  addresses.
                </p>
              </div>
            </Section>

            {/* 04 CREATION */}
            <Section
              id="creation"
              number="04"
              label="IMPLEMENTATION"
              title="Creating a Singly Linked List"
              icon={<GitBranch size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                To create a linked list, define a node structure, allocate
                nodes and connect their next pointers. The head pointer
                stores the address of the first node.
              </p>

              <CodeCard
                title="Create and Connect Three Nodes"
                code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

int main() {
    Node* head = new Node(10);
    head->next = new Node(20);
    head->next->next = new Node(30);

    Node* current = head;

    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }

    // Release allocated nodes
    current = head;
    while (current != nullptr) {
        Node* temp = current;
        current = current->next;
        delete temp;
    }

    return 0;
}`}
              />

              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Output
                </p>
                <p className="mt-2 font-mono text-sm font-bold text-slate-700">
                  10 20 30
                </p>
              </div>
            </Section>

            {/* 05 TRAVERSAL */}
            <Section
              id="traversal"
              number="05"
              label="TRAVERSAL"
              title="Traversing a Singly Linked List"
              icon={<List size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                Traversal means visiting each node, usually starting from
                head and following next pointers until nullptr is reached.
              </p>

              <CodeCard
                title="Traversal Code"
                code={`Node* current = head;

while (current != nullptr) {
    cout << current->data << " ";
    current = current->next;
}`}
              />

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <StepCard
                  number="01"
                  title="Start"
                  description="Set current to head."
                />
                <StepCard
                  number="02"
                  title="Process"
                  description="Read or print current->data."
                />
                <StepCard
                  number="03"
                  title="Move"
                  description="Set current to current->next until nullptr."
                />
              </div>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="Every node is visited at most once."
              />
            </Section>

            {/* 06 INSERTION */}
            <Section
              id="insertion"
              number="06"
              label="INSERTION"
              title="Insertion in a Singly Linked List"
              icon={<Code2 size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                Insertion adds a new node to the list. It can be performed
                at the beginning, at the end or after a particular node.
              </p>

              <h3 className="mt-6 font-bold text-slate-900">
                A. Insert at the Beginning
              </h3>
              <CodeCard
                title="Insert at Head"
                code={`Node* newNode = new Node(value);

newNode->next = head;
head = newNode;`}
              />
              <p className="mt-3 text-sm leading-6 text-slate-500">
                First, connect the new node to the current head. Then update
                head to point to the new node.
              </p>

              <h3 className="mt-7 font-bold text-slate-900">
                B. Insert at the End
              </h3>
              <CodeCard
                title="Append a Node"
                code={`Node* newNode = new Node(value);

if (head == nullptr) {
    head = newNode;
} else {
    Node* current = head;

    while (current->next != nullptr) {
        current = current->next;
    }

    current->next = newNode;
}`}
              />

              <h3 className="mt-7 font-bold text-slate-900">
                C. Insert After a Given Node
              </h3>
              <CodeCard
                title="Insert After Current Node"
                code={`Node* newNode = new Node(value);

newNode->next = current->next;
current->next = newNode;`}
              />

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Important
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Insertion at the head takes O(1) time. Insertion at the end
                  takes O(n) when the list has no tail pointer.
                </p>
              </div>
            </Section>

            {/* 07 DELETION */}
            <Section
              id="deletion"
              number="07"
              label="DELETION"
              title="Deletion in a Singly Linked List"
              icon={<GitBranch size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                Deletion removes a node from the list. Update the necessary
                pointers and release dynamically allocated memory when
                appropriate.
              </p>

              <h3 className="mt-6 font-bold text-slate-900">
                A. Delete the First Node
              </h3>
              <CodeCard
                title="Delete at Head"
                code={`if (head != nullptr) {
    Node* temp = head;
    head = head->next;
    delete temp;
}`}
              />

              <h3 className="mt-7 font-bold text-slate-900">
                B. Delete the First Node with a Given Value
              </h3>
              <CodeCard
                title="Delete by Value"
                code={`if (head != nullptr && head->data == value) {
    Node* temp = head;
    head = head->next;
    delete temp;
} else {
    Node* current = head;

    while (current != nullptr &&
           current->next != nullptr &&
           current->next->data != value) {
        current = current->next;
    }

    if (current != nullptr &&
        current->next != nullptr) {
        Node* temp = current->next;
        current->next = temp->next;
        delete temp;
    }
}`}
              />

              <p className="mt-4 text-sm leading-6 text-slate-500">
                This example deletes only the first matching value. If the
                value is not found, the list remains unchanged.
              </p>
            </Section>

            {/* 08 SEARCHING */}
            <Section
              id="searching"
              number="08"
              label="SEARCHING"
              title="Searching in a Singly Linked List"
              icon={<Target size={21} />}
            >
              <p className="text-sm leading-7 text-slate-600">
                Searching checks each node's data against a target value.
                Because nodes are linked sequentially, a standard singly
                linked list requires traversal to find an element.
              </p>

              <CodeCard
                title="Search for a Value"
                code={`bool search(Node* head, int target) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == target) {
            return true;
        }

        current = current->next;
    }

    return false;
}`}
              />

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="Best Case"
                  value="O(1)"
                  description="The target is in the first node."
                />
                <InfoCard
                  title="Worst Case"
                  value="O(n)"
                  description="The target is at the end or is absent."
                />
              </div>
            </Section>

            {/* 09 COMPLEXITY */}
            <Section
              id="complexity"
              number="09"
              label="COMPLEXITY"
              title="Time Complexity"
              icon={<MemoryStick size={21} />}
            >
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[550px] border-collapse">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Operation</th>
                      <th className="px-5 py-4">Time</th>
                      <th className="px-5 py-4">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Traversal", "O(n)", "Visits the nodes one by one."],
                      ["Search", "O(n)", "May inspect all nodes."],
                      ["Access by position", "O(n)", "Requires traversal."],
                      ["Insert at head", "O(1)", "Updates a constant number of pointers."],
                      ["Delete at head", "O(1)", "Updates head and frees the old node."],
                      ["Insert at end", "O(n)*", "Traverses to the last node."],
                      ["Delete by value", "O(n)", "May need to find the target and its predecessor."],
                    ].map(([operation, time, reason]) => (
                      <tr
                        key={operation}
                        className="border-b border-slate-100 text-sm last:border-0"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {operation}
                        </td>
                        <td className="px-5 py-4 font-mono font-bold text-blue-600">
                          {time}
                        </td>
                        <td className="px-5 py-4 text-slate-500">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                *Insertion at the end can be O(1) if a tail pointer is
                maintained.
              </p>
            </Section>

            {/* 10 ADVANTAGES */}
            <Section
              id="advantages"
              number="10"
              label="REVISION"
              title="Advantages & Limitations"
              icon={<Lightbulb size={21} />}
            >
              <div className="grid gap-5 lg:grid-cols-2">
                <FeatureCard
                  title="Advantages"
                  color="emerald"
                  points={[
                    "Can grow or shrink dynamically.",
                    "Efficient insertion at the beginning.",
                    "Nodes need not occupy contiguous memory.",
                    "Useful for implementing stacks and queues.",
                  ]}
                />

                <FeatureCard
                  title="Limitations"
                  color="red"
                  points={[
                    "No direct random access by index.",
                    "Extra memory is needed for pointers.",
                    "Searching requires sequential traversal.",
                    "Pointer mistakes can cause memory errors.",
                  ]}
                />
              </div>
            </Section>

            {/* 11 APPLICATIONS */}
            <Section
              id="applications"
              number="11"
              label="PRACTICAL USE"
              title="Applications of Singly Linked Lists"
              icon={<Target size={21} />}
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <ApplicationCard
                  title="Stacks"
                  description="Nodes can store stack elements with insertion and deletion at the head."
                />
                <ApplicationCard
                  title="Queues"
                  description="A head and tail pointer can support efficient queue operations."
                />
                <ApplicationCard
                  title="Graph Representation"
                  description="Linked structures can store adjacent vertices in an adjacency list."
                />
                <ApplicationCard
                  title="Hash Tables"
                  description="Linked lists can store entries in separate chaining."
                />
                <ApplicationCard
                  title="Dynamic Collections"
                  description="Elements can be added and removed without shifting an array."
                />
                <ApplicationCard
                  title="Polynomial Representation"
                  description="Nodes can store coefficients and exponents of polynomial terms."
                />
              </div>
            </Section>

            {/* 12 INTERVIEW */}
            <Section
              id="interview"
              number="12"
              label="PLACEMENT PREP"
              title="Singly Linked List Interview Questions"
              icon={<Target size={21} />}
            >
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "What is a singly linked list?",
                  "What are the fields of a node?",
                  "What is the role of head?",
                  "Why does the last node point to nullptr?",
                  "How is a linked list stored in memory?",
                  "How do you traverse a linked list?",
                  "What is the complexity of searching?",
                  "How do you insert a node at the head?",
                  "How do you delete the first node?",
                  "What is the difference between an array and a linked list?",
                  "Why is random access inefficient?",
                  "What happens when head is nullptr?",
                  "What is a dangling pointer?",
                  "How do you insert a node after a given node?",
                  "How can you detect the end of a linked list?",
                ].map((question, index) => (
                  <div
                    key={question}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
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
                    Singly Linked List Revision Checklist
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Revise each concept and practise writing the C++ code
                    without looking at the examples.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Definition and node structure",
                      "Head and next pointers",
                      "Memory representation",
                      "Creating nodes",
                      "Traversal",
                      "Insertion at head",
                      "Insertion at end",
                      "Insertion after a node",
                      "Deletion at head",
                      "Deletion by value",
                      "Searching",
                      "Time complexity",
                      "Advantages and limitations",
                      "Applications",
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

function NodeBox({
  data,
  next,
}: {
  data: string
  next: string
}) {
  return (
    <div className="min-w-[82px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
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

function MemoryNode({
  address,
  data,
  next,
}: {
  address: string
  data: string
  next: string
}) {
  return (
    <div className="min-w-[80px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-100 px-2 py-2 text-center text-[9px] font-bold text-slate-500">
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