import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Circular Queue",
  "title": "Master Circular Queues.",
  "subtitle": "Learn wrap-around indexing, full and empty conditions, enqueue and dequeue algorithms.",
  "tags": [
    "Modulo",
    "Wrap-around",
    "Front",
    "Rear"
  ],
  "learn": [
    "Reuse array slots",
    "Apply modulo arithmetic",
    "Check full and empty",
    "Trace operations"
  ],
  "sections": [
    {
      "id": "concept",
      "label": "FUNDAMENTALS",
      "title": "What is a Circular Queue?",
      "body": "A circular queue connects the final array position back to index 0 logically, allowing freed positions to be reused.",
      "bullets": [
        "Indices wrap around using modulo.",
        "Capacity remains fixed for a fixed array.",
        "Front and rear move circularly."
      ],
      "code": null,
      "note": null
    },
    {
      "id": "index",
      "label": "INDEXING",
      "title": "Wrap-around Formula",
      "body": "For capacity N, the next index after i is (i + 1) % N. This maps N - 1 back to 0.",
      "bullets": [
        "Next index: (i + 1) % N.",
        "Previous index: (i - 1 + N) % N.",
        "Modulo prevents index from moving beyond the array."
      ],
      "code": "int next = (rear + 1) % capacity;",
      "note": null
    },
    {
      "id": "conditions",
      "label": "CONDITIONS",
      "title": "Full and Empty Conditions",
      "body": "A common implementation tracks the number of stored items. It is empty when count == 0 and full when count == capacity.",
      "bullets": [
        "Empty: count == 0.",
        "Full: count == capacity.",
        "Alternative implementations reserve one slot or maintain a separate flag."
      ],
      "code": null,
      "note": "Use one consistent convention for both enqueue and dequeue."
    },
    {
      "id": "enqueue",
      "label": "INSERTION",
      "title": "Circular Enqueue",
      "body": "Insert at rear and advance rear with modulo. Increase count after storing the value.",
      "bullets": [
        "Reject enqueue when full.",
        "Set rear = (rear + 1) % capacity.",
        "Store the item and increment count."
      ],
      "code": "rear = (rear + 1) % capacity;\nq[rear] = value;\ncount++;",
      "note": null
    },
    {
      "id": "dequeue",
      "label": "DELETION",
      "title": "Circular Dequeue",
      "body": "Remove the front item and advance front circularly. Decrease count after removal.",
      "bullets": [
        "Reject dequeue when empty.",
        "Read q[front].",
        "Set front = (front + 1) % capacity.",
        "Decrement count."
      ],
      "code": "int value = q[front];\nfront = (front + 1) % capacity;\ncount--;",
      "note": null
    },
    {
      "id": "uses",
      "label": "APPLICATIONS",
      "title": "Applications",
      "body": "Circular queues are useful for bounded buffers and cyclic processing.",
      "bullets": [
        "Round-robin scheduling.",
        "Keyboard or network buffers.",
        "Streaming data buffers.",
        "Repeated cyclic tasks."
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "What problem does a circular queue solve?",
    "Write the wrap-around formula.",
    "State full and empty conditions using count.",
    "Trace rear movement for capacity 5.",
    "Give two applications of circular queues."
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
