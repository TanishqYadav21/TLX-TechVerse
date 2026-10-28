import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Queue Fundamentals",
  "title": "Master Queue Fundamentals.",
  "subtitle": "Understand the FIFO principle, front and rear pointers, queue representation and where queues are used.",
  "tags": [
    "FIFO",
    "Front",
    "Rear",
    "Basics"
  ],
  "learn": [
    "Understand FIFO",
    "Learn front and rear",
    "Study queue operations",
    "Explore applications"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "FUNDAMENTALS",
      "title": "What is a Queue?",
      "body": "A queue is a linear data structure that follows FIFO: First In, First Out. The element inserted first is the first element removed.",
      "bullets": [
        "Insertion happens at the rear end.",
        "Deletion happens at the front end.",
        "Front identifies the next element to remove.",
        "Rear identifies the most recently inserted element."
      ],
      "code": null,
      "note": "A queue behaves like a line of people waiting for service."
    },
    {
      "id": "fifo",
      "label": "CORE CONCEPT",
      "title": "FIFO Principle",
      "body": "FIFO means the earliest inserted element leaves first. If A, B and C are enqueued in that order, dequeue removes A first.",
      "bullets": [
        "Enqueue A, then B, then C.",
        "The dequeue order is A, B, C.",
        "Elements are processed in arrival order."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "pointers",
      "label": "POINTERS",
      "title": "Front and Rear",
      "body": "Front tracks the next item to be removed, while rear tracks the newest item. Exact initial values depend on the implementation.",
      "bullets": [
        "An empty array queue may use front = rear = -1.",
        "Enqueue updates rear.",
        "Dequeue advances front.",
        "After removing the last element, reset both pointers if required."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "representation",
      "label": "REPRESENTATION",
      "title": "Array Representation",
      "body": "A simple array queue stores items in consecutive positions. A linear implementation may leave unused spaces at the beginning after repeated dequeues.",
      "bullets": [
        "Capacity is fixed unless dynamic storage is used.",
        "Front and rear indices control operations.",
        "A circular queue reuses freed array positions."
      ],
      "code": "int q[100];\nint front = -1, rear = -1;",
      "note": "A linear array queue can report overflow even when earlier positions have become free."
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Queue Complexity",
      "body": "Enqueue and dequeue are O(1) when front and rear are maintained correctly. Searching or traversing all items takes O(n).",
      "bullets": [
        "Enqueue: O(1)",
        "Dequeue: O(1)",
        "Front/peek: O(1)",
        "Display/search: O(n)"
      ],
      "code": null,
      "note": null
    },
    {
      "id": "applications",
      "label": "APPLICATIONS",
      "title": "Applications of Queues",
      "body": "Queues are useful whenever work should be handled in arrival order.",
      "bullets": [
        "Printer job scheduling.",
        "CPU and task scheduling.",
        "Breadth-first search (BFS).",
        "Network packet buffering.",
        "Customer service and request processing."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Define a queue and explain FIFO.",
    "What are front and rear pointers?",
    "What is queue overflow and underflow?",
    "Why can a simple array queue waste space?",
    "State the time complexity of enqueue and dequeue."
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
