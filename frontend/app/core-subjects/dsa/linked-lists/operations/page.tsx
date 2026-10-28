"use client"

import Link from "next/link"
import Sidebar from "@/components/dashboard/Sidebar"
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  Lightbulb,
  Link2,
  List,
  Search,
  Sparkles,
  Target,
} from "lucide-react"

const sections = [
  { id: "traversal", number: "01", title: "Traversal" },
  { id: "insert-beginning", number: "02", title: "Insertion at Beginning" },
  { id: "insert-end", number: "03", title: "Insertion at End" },
  { id: "insert-position", number: "04", title: "Insertion at Position" },
  { id: "delete-beginning", number: "05", title: "Deletion at Beginning" },
  { id: "delete-end", number: "06", title: "Deletion at End" },
  { id: "delete-value", number: "07", title: "Deletion by Value" },
  { id: "search", number: "08", title: "Searching" },
  { id: "update", number: "09", title: "Updating a Node" },
  { id: "complexity", number: "10", title: "Time Complexity" },
  { id: "practice", number: "11", title: "Practice Questions" },
]

export default function LinkedListOperationsPage() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen bg-[#f5f7fb] lg:ml-64">
        {/* HERO */}
        <section className="px-6 pt-5 lg:px-10">
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
                    Linked List Operations.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  Learn how to traverse, insert, delete, search and update
                  nodes in a singly linked list with step-by-step C++ code.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Traversal", "Insertion", "Deletion", "Searching", "C++"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="w-full max-w-[280px] rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  OPERATIONS GUIDE
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Traverse the list",
                    "Insert nodes",
                    "Delete nodes",
                    "Search and update",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-bold text-blue-300">
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
                    C++ Implementation
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
                    Linked List Operations — Complete Guide
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

            {/* TRAVERSAL */}
            <Section id="traversal" number="01" title="Traversal of a Linked List" icon={<List size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Traversal means visiting every node from the head to the end
                of the list. Use a temporary pointer so that the head pointer
                remains unchanged.
              </p>

              <CodeCard
                title="C++ Traversal"
                code={`void display(Node* head) {
    Node* current = head;

    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
}`}
              />

              <Output>10 20 30</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="Each node is visited once."
              />
            </Section>

            {/* INSERT BEGINNING */}
            <Section id="insert-beginning" number="02" title="Insertion at the Beginning" icon={<Code2 size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Create a new node, connect its next pointer to the current
                head, and then update head to the new node.
              </p>

              <Diagram values={["5", "10", "20"]} />

              <CodeCard
                title="C++ Code"
                code={`void insertAtBeginning(Node*& head, int value) {
    Node* newNode = new Node(value);

    newNode->next = head;
    head = newNode;
}`}
              />

              <Output>Before: 10 → 20 → NULL{"\n"}After: 5 → 10 → 20 → NULL</Output>

              <InfoCard
                title="Time Complexity"
                value="O(1)"
                description="Only a constant number of pointer updates are needed."
              />
            </Section>

            {/* INSERT END */}
            <Section id="insert-end" number="03" title="Insertion at the End" icon={<GitBranch size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                If the list is empty, the new node becomes head. Otherwise,
                traverse to the last node and connect its next pointer to the
                new node.
              </p>

              <CodeCard
                title="C++ Code"
                code={`void insertAtEnd(Node*& head, int value) {
    Node* newNode = new Node(value);

    if (head == nullptr) {
        head = newNode;
        return;
    }

    Node* current = head;

    while (current->next != nullptr) {
        current = current->next;
    }

    current->next = newNode;
}`}
              />

              <Output>Before: 10 → 20 → NULL{"\n"}After: 10 → 20 → 30 → NULL</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="A traversal is needed to find the last node when no tail pointer is maintained."
              />
            </Section>

            {/* INSERT POSITION */}
            <Section id="insert-position" number="04" title="Insertion at a Given Position" icon={<Target size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                This example uses zero-based positions: position 0 means the
                beginning. Invalid positions are ignored.
              </p>

              <CodeCard
                title="C++ Code"
                code={`void insertAtPosition(Node*& head, int value, int position) {
    if (position < 0) return;

    if (position == 0) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
        return;
    }

    Node* current = head;

    for (int i = 0; current != nullptr && i < position - 1; i++) {
        current = current->next;
    }

    if (current == nullptr) return;

    Node* newNode = new Node(value);
    newNode->next = current->next;
    current->next = newNode;
}`}
              />

              <Output>List: 10 → 20 → 30{"\n"}Insert 25 at position 2{"\n"}Result: 10 → 20 → 25 → 30</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="The target position may require traversing the list."
              />
            </Section>

            {/* DELETE BEGINNING */}
            <Section id="delete-beginning" number="05" title="Deletion at the Beginning" icon={<GitBranch size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Store the current head in a temporary pointer, move head to
                the next node and delete the old first node. Check for an
                empty list before deleting.
              </p>

              <CodeCard
                title="C++ Code"
                code={`void deleteAtBeginning(Node*& head) {
    if (head == nullptr) return;

    Node* temp = head;
    head = head->next;

    delete temp;
}`}
              />

              <Output>Before: 10 → 20 → 30 → NULL{"\n"}After: 20 → 30 → NULL</Output>

              <InfoCard
                title="Time Complexity"
                value="O(1)"
                description="No traversal is required."
              />
            </Section>

            {/* DELETE END */}
            <Section id="delete-end" number="06" title="Deletion at the End" icon={<Code2 size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Handle an empty list and a single-node list separately.
                Otherwise, reach the second-last node, delete the last node
                and set the second-last node's next pointer to nullptr.
              </p>

              <CodeCard
                title="C++ Code"
                code={`void deleteAtEnd(Node*& head) {
    if (head == nullptr) return;

    if (head->next == nullptr) {
        delete head;
        head = nullptr;
        return;
    }

    Node* current = head;

    while (current->next->next != nullptr) {
        current = current->next;
    }

    delete current->next;
    current->next = nullptr;
}`}
              />

              <Output>Before: 10 → 20 → 30 → NULL{"\n"}After: 10 → 20 → NULL</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="Traversal is needed to reach the second-last node."
              />
            </Section>

            {/* DELETE VALUE */}
            <Section id="delete-value" number="07" title="Deletion by Value" icon={<GitBranch size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Search for the first node containing the given value. Update
                the previous node's next pointer to skip the target, then
                release the target node.
              </p>

              <CodeCard
                title="C++ Code"
                code={`void deleteByValue(Node*& head, int value) {
    if (head == nullptr) return;

    if (head->data == value) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return;
    }

    Node* current = head;

    while (current->next != nullptr &&
           current->next->data != value) {
        current = current->next;
    }

    if (current->next == nullptr) return;

    Node* temp = current->next;
    current->next = temp->next;
    delete temp;
}`}
              />

              <Output>Before: 10 → 20 → 30 → NULL{"\n"}Delete value: 20{"\n"}After: 10 → 30 → NULL</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="The target may be anywhere in the list."
              />
            </Section>

            {/* SEARCH */}
            <Section id="search" number="08" title="Searching in a Linked List" icon={<Search size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Compare each node's data with the target. Return true when
                found; if traversal reaches nullptr, the value is absent.
              </p>

              <CodeCard
                title="C++ Code"
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

              <Output>Search for 20 in 10 → 20 → 30{"\n"}Result: Found</Output>

              <InfoCard
                title="Time Complexity"
                value="O(n)"
                description="Worst case: the target is at the end or does not exist."
              />
            </Section>

            {/* UPDATE */}
            <Section id="update" number="09" title="Updating a Node" icon={<Lightbulb size={21} />}>
              <p className="text-sm leading-7 text-slate-600">
                Updating means changing the data stored in a node. Find the
                node first, then assign the new value.
              </p>

              <CodeCard
                title="C++ Code"
                code={`bool updateValue(Node* head, int oldValue, int newValue) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == oldValue) {
            current->data = newValue;
            return true;
        }

        current = current->next;
    }

    return false;
}`}
              />

              <Output>Before: 10 → 20 → 30{"\n"}Update 20 to 25{"\n"}After: 10 → 25 → 30</Output>
            </Section>

            {/* COMPLEXITY */}
            <Section id="complexity" number="10" title="Time Complexity Summary" icon={<BookOpen size={21} />}>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[500px] border-collapse">
                  <thead>
                    <tr className="bg-[#071025] text-left text-xs text-white">
                      <th className="px-5 py-4">Operation</th>
                      <th className="px-5 py-4">Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Traversal", "O(n)"],
                      ["Insertion at beginning", "O(1)"],
                      ["Insertion at end without tail", "O(n)"],
                      ["Insertion at a position", "O(n)"],
                      ["Deletion at beginning", "O(1)"],
                      ["Deletion at end", "O(n)"],
                      ["Deletion by value", "O(n)"],
                      ["Searching", "O(n)"],
                      ["Updating by value", "O(n)"],
                    ].map(([operation, complexity]) => (
                      <tr key={operation} className="border-b border-slate-100 text-sm last:border-0">
                        <td className="px-5 py-4 font-semibold text-slate-800">{operation}</td>
                        <td className="px-5 py-4 font-mono font-bold text-blue-600">{complexity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* PRACTICE */}
            <Section id="practice" number="11" title="Practice Questions" icon={<Target size={21} />}>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Write a function to display all nodes.",
                  "Insert a node at the beginning.",
                  "Insert a node at the end.",
                  "Insert a node at a given position.",
                  "Delete the first node.",
                  "Delete the last node.",
                  "Delete the first occurrence of a value.",
                  "Search for a given value.",
                  "Update a node's value.",
                  "Count the total number of nodes.",
                  "Handle deletion when the list is empty.",
                  "Handle a list containing only one node.",
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

            {/* REVISION */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Operations Revision Checklist
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Revise these operations before moving to doubly linked
                    lists.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "Traversal",
                      "Insertion at beginning",
                      "Insertion at end",
                      "Insertion at position",
                      "Deletion at beginning",
                      "Deletion at end",
                      "Deletion by value",
                      "Searching",
                      "Updating a node",
                      "Empty list handling",
                      "Single-node list handling",
                      "Time complexity",
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
  title,
  icon,
  children,
}: {
  id: string
  number: string
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mt-6 scroll-mt-6 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
            LINKED LIST OPERATIONS {number}
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function CodeCard({ title, code }: { title: string; code: string }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
      <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
        <p className="text-xs font-bold text-slate-700">{title}</p>
      </div>
      <div className="overflow-x-auto bg-[#071025] p-5">
        <pre className="text-sm leading-7 text-slate-300"><code>{code}</code></pre>
      </div>
    </div>
  )
}

function Output({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
        Example / Output
      </p>
      <pre className="mt-2 whitespace-pre-wrap font-mono text-sm leading-6 text-slate-700">
        {children}
      </pre>
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
    <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
      <p className="mt-3 font-mono text-2xl font-bold text-blue-600">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  )
}

function Diagram({ values }: { values: string[] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex min-w-[300px] items-center justify-center gap-3">
        {values.map((value, index) => (
          <div key={`${value}-${index}`} className="flex items-center gap-3">
            <div className="rounded-xl border border-blue-200 bg-white px-5 py-4 text-center">
              <p className="text-[9px] font-bold text-blue-600">DATA</p>
              <p className="mt-1 font-mono text-sm font-bold text-slate-800">{value}</p>
            </div>
            {index < values.length - 1 && (
              <span className="text-lg font-bold text-blue-500">→</span>
            )}
          </div>
        ))}
        <span className="text-xs font-bold text-slate-500">NULL</span>
      </div>
    </div>
  )
}