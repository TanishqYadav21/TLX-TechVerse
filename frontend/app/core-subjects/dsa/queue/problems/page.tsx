import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Queue Problem Solving",
  "title": "Master Queue Problem Solving.",
  "subtitle": "Practice queue traces, implementation questions and placement-oriented algorithms.",
  "tags": [
    "Placement",
    "Logic",
    "Problems",
    "Practice"
  ],
  "learn": [
    "Trace operations",
    "Write algorithms",
    "Handle edge cases",
    "Analyze complexity"
  ],
  "sections": [
    {
      "id": "trace",
      "label": "DRY RUN",
      "title": "Trace Enqueue and Dequeue",
      "body": "Start with an empty queue and apply operations in order. Track front-to-rear order after every operation.",
      "bullets": [
        "Enqueue 10 → [10].",
        "Enqueue 20 → [10, 20].",
        "Dequeue removes 10 → [20].",
        "Enqueue 30 → [20, 30]."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "reverse",
      "label": "ALGORITHM",
      "title": "Reverse a Queue Using a Stack",
      "body": "A stack reverses order because it is LIFO. Move all queue elements into a stack, then move them back.",
      "bullets": [
        "Dequeue each item and push it onto a stack.",
        "Pop each item and enqueue it back.",
        "The queue order is reversed."
      ],
      "code": "stack<int> st;\nwhile (!q.empty()) { st.push(q.front()); q.pop(); }\nwhile (!st.empty()) { q.push(st.top()); st.pop(); }",
      "note": null
    },
    {
      "id": "first-nonrepeat",
      "label": "APPLICATION",
      "title": "First Non-Repeating Character",
      "body": "A queue can preserve the order of candidate characters while a frequency table tracks repetitions.",
      "bullets": [
        "Increase frequency for each incoming character.",
        "Enqueue the character.",
        "Remove queue-front characters while their frequency exceeds one.",
        "The front is the current first non-repeating character."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "edgecases",
      "label": "EDGE CASES",
      "title": "Edge Cases to Test",
      "body": "Queue code should be tested with empty, single-item, full-capacity and wrap-around cases.",
      "bullets": [
        "Dequeue from empty queue.",
        "Enqueue into full queue.",
        "Remove the last item.",
        "Circular queue wraps from last index to zero."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Analyze Your Solution",
      "body": "Use the chosen representation to determine complexity; a queue operation should usually avoid shifting every element.",
      "bullets": [
        "Enqueue/dequeue with indices: O(1).",
        "Display all items: O(n).",
        "Reversing n items: O(n) time and O(n) extra space."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Reverse a queue using a stack.",
    "Implement a queue using two stacks.",
    "Find the first non-repeating character in a stream.",
    "Implement a circular queue.",
    "What are the edge cases for dequeue?"
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
