import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Double-Ended Queue",
  "title": "Master Deques.",
  "subtitle": "Understand insertion and deletion at both ends, deque variants and implementation trade-offs.",
  "tags": [
    "Insert Front",
    "Insert Rear",
    "Delete Front",
    "Delete Rear"
  ],
  "learn": [
    "Operate at both ends",
    "Learn deque variants",
    "Handle boundary cases",
    "Compare implementations"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "FUNDAMENTALS",
      "title": "What is a Deque?",
      "body": "A deque is a double-ended queue in which insertion and deletion can be performed at both the front and rear.",
      "bullets": [
        "Insert front.",
        "Insert rear.",
        "Delete front.",
        "Delete rear."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "variants",
      "label": "TYPES",
      "title": "Deque Variants",
      "body": "An input-restricted deque limits insertion to one end but permits deletion at both ends. An output-restricted deque permits insertion at both ends but limits deletion to one end.",
      "bullets": [
        "Input-restricted: insertion at one end.",
        "Output-restricted: deletion at one end.",
        "Exact restricted end depends on the convention used."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "array",
      "label": "IMPLEMENTATION",
      "title": "Circular Array Implementation",
      "body": "A circular array is commonly used to implement a deque efficiently because both ends can wrap around.",
      "bullets": [
        "Move front backward with (front - 1 + N) % N.",
        "Move rear forward with (rear + 1) % N.",
        "Check full and empty before updates."
      ],
      "code": "front = (front - 1 + capacity) % capacity;",
      "note": null
    },
    {
      "id": "operations",
      "label": "OPERATIONS",
      "title": "Core Deque Operations",
      "body": "Each endpoint operation can be O(1) in a suitable circular-array or doubly linked-list implementation.",
      "bullets": [
        "insertFront(x)",
        "insertRear(x)",
        "deleteFront()",
        "deleteRear()"
      ],
      "code": null,
      "note": null
    },
    {
      "id": "uses",
      "label": "APPLICATIONS",
      "title": "Applications of Deques",
      "body": "Deques are useful when both ends need efficient access.",
      "bullets": [
        "Sliding window maximum/minimum.",
        "Palindrome checking.",
        "Task scheduling.",
        "Implementing both stack-like and queue-like behavior."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Define a deque.",
    "Differentiate input-restricted and output-restricted deque.",
    "Why is a circular array suitable for deque?",
    "Give two applications of a deque.",
    "What is the time complexity of insertion at an end in a suitable implementation?"
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
