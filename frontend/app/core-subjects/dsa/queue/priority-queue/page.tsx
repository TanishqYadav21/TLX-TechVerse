import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Priority Queue",
  "title": "Master Priority Queues.",
  "subtitle": "Learn priority-based removal, array and heap implementations, operations and complexity.",
  "tags": [
    "Priority",
    "Heap",
    "Ordering",
    "Applications"
  ],
  "learn": [
    "Understand priority order",
    "Compare implementations",
    "Learn heap basics",
    "Analyze complexity"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "FUNDAMENTALS",
      "title": "What is a Priority Queue?",
      "body": "A priority queue associates a priority with each item and removes the item with the highest or lowest priority according to its defined rule.",
      "bullets": [
        "Removal order depends on priority.",
        "Tie handling depends on implementation.",
        "It is not necessarily FIFO."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "types",
      "label": "PRIORITY RULES",
      "title": "Min-Priority and Max-Priority",
      "body": "A min-priority queue removes the smallest priority value first; a max-priority queue removes the largest priority value first.",
      "bullets": [
        "Define whether smaller or larger value means higher priority.",
        "Use consistent comparison rules.",
        "Document how equal priorities are handled."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "array",
      "label": "IMPLEMENTATION",
      "title": "Array Implementation",
      "body": "An unsorted array makes insertion simple but requires scanning to find the next highest-priority item.",
      "bullets": [
        "Insertion can be O(1) at an available position.",
        "Removal of best-priority item can be O(n).",
        "A sorted array reverses this trade-off."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "heap",
      "label": "HEAP IMPLEMENTATION",
      "title": "Priority Queue Using a Heap",
      "body": "A binary heap supports efficient priority queue operations. Insertion and removal of the root generally take O(log n).",
      "bullets": [
        "Peek at root: O(1).",
        "Insert: O(log n).",
        "Remove highest/lowest priority: O(log n)."
      ],
      "code": "priority_queue<int> pq;\npq.push(30);\npq.push(10);\npq.push(20);\ncout << pq.top(); // 30 in max-heap",
      "note": "C++ priority_queue is a max-heap by default for ordinary numeric values."
    },
    {
      "id": "applications",
      "label": "APPLICATIONS",
      "title": "Where Priority Queues Are Used",
      "body": "Priority queues process the most urgent or best-ranked item first.",
      "bullets": [
        "CPU and job scheduling.",
        "Dijkstra shortest-path algorithm.",
        "Event simulation.",
        "Selecting top-k elements."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "How does a priority queue differ from a normal queue?",
    "What is the default behavior of C++ priority_queue?",
    "What is the time complexity of heap insertion?",
    "Compare unsorted and sorted array implementations.",
    "Name two algorithms that use priority queues."
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
