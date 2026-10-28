import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Types of Queues",
  "title": "Explore Queue Types.",
  "subtitle": "Compare simple queues, circular queues, deques and priority queues with their operations and use cases.",
  "tags": [
    "Simple Queue",
    "Circular Queue",
    "Deque",
    "Priority Queue"
  ],
  "learn": [
    "Compare queue types",
    "Understand restrictions",
    "Choose the right structure",
    "Learn common use cases"
  ],
  "sections": [
    {
      "id": "simple",
      "label": "QUEUE TYPE",
      "title": "Simple Queue",
      "body": "A simple queue follows FIFO: insert at rear and remove from front. A linear array implementation may not reuse freed slots automatically.",
      "bullets": [
        "Enqueue at rear.",
        "Dequeue at front.",
        "Simple to implement."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "circular",
      "label": "QUEUE TYPE",
      "title": "Circular Queue",
      "body": "A circular queue treats the array as if its end connects to its beginning. Modulo arithmetic wraps an index back to zero.",
      "bullets": [
        "Next rear = (rear + 1) % capacity.",
        "Reuses empty slots.",
        "Full and empty conditions must be distinguished."
      ],
      "code": "rear = (rear + 1) % capacity;",
      "note": null
    },
    {
      "id": "deque",
      "label": "DOUBLE-ENDED QUEUE",
      "title": "Deque",
      "body": "A deque (double-ended queue) allows insertion and deletion at both front and rear.",
      "bullets": [
        "Insert front and rear.",
        "Delete front and rear.",
        "Can model both queue-like and stack-like behavior."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "priority",
      "label": "PRIORITY QUEUE",
      "title": "Priority Queue",
      "body": "A priority queue removes an item according to priority rather than strictly by arrival order. Ties may be handled FIFO depending on the design.",
      "bullets": [
        "Higher priority may be removed first.",
        "Can be implemented using arrays, linked lists or heaps.",
        "A heap commonly supports efficient priority operations."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "comparison",
      "label": "COMPARISON",
      "title": "Choosing a Queue Type",
      "body": "Choose the structure based on the order and endpoints required by the task.",
      "bullets": [
        "FIFO processing: simple queue.",
        "Fixed array space reuse: circular queue.",
        "Operations at both ends: deque.",
        "Priority-based selection: priority queue."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Differentiate simple and circular queues.",
    "What is a deque?",
    "How does a priority queue differ from FIFO queue?",
    "Give two applications of circular queues.",
    "Which data structure is commonly used to implement a priority queue efficiently?"
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
