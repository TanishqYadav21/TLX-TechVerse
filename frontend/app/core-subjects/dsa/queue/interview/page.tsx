import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Queue Interview Prep",
  "title": "Master Queue Interview Prep.",
  "subtitle": "Revise FIFO, queue variants, implementations, complexity and common interview questions.",
  "tags": [
    "Interview",
    "Algorithms",
    "Complexity",
    "Revision"
  ],
  "learn": [
    "Revise core definitions",
    "Compare queue variants",
    "Explain complexity",
    "Practice common questions"
  ],
  "sections": [
    {
      "id": "fundamentals",
      "label": "CORE QUESTIONS",
      "title": "Queue Fundamentals",
      "body": "Be ready to define queue and explain the FIFO rule with an example.",
      "bullets": [
        "Insertion is at rear.",
        "Deletion is at front.",
        "Front and rear track endpoints."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "variants",
      "label": "COMPARISON",
      "title": "Queue Variants",
      "body": "Know when to use a simple queue, circular queue, deque or priority queue.",
      "bullets": [
        "Circular queue reuses array slots.",
        "Deque supports both ends.",
        "Priority queue removes by priority."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "implementation",
      "label": "IMPLEMENTATION",
      "title": "Implementation Choices",
      "body": "Explain array and linked-list queue trade-offs.",
      "bullets": [
        "Array implementation can have fixed capacity.",
        "Linked-list implementation can grow dynamically.",
        "A circular array avoids shifting items."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Complexity Quick Revision",
      "body": "State complexity in terms of the selected implementation.",
      "bullets": [
        "Enqueue/dequeue: O(1) with correct pointers.",
        "Search/display: O(n).",
        "Heap priority queue insertion/removal: O(log n)."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "mistakes",
      "label": "COMMON MISTAKES",
      "title": "Common Interview Pitfalls",
      "body": "Discuss boundary conditions and state conventions clearly.",
      "bullets": [
        "Do not dequeue an empty queue.",
        "Reset or update indices after last item removal.",
        "Distinguish full and empty circular queue states.",
        "State whether a priority queue is min-priority or max-priority."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Explain FIFO with an example.",
    "Why is a circular queue better than a simple array queue in some cases?",
    "What is a deque?",
    "What is the complexity of enqueue and dequeue?",
    "How can a queue be implemented using two stacks?",
    "How does a priority queue differ from a normal queue?"
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
