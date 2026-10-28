import QueueTopicPage from "../QueueTopicPage"

const data = {
  "topic": "Queue Operations",
  "title": "Master Queue Operations.",
  "subtitle": "Learn enqueue, dequeue, peek, display and safe handling of overflow and underflow.",
  "tags": [
    "Enqueue",
    "Dequeue",
    "Peek",
    "Display"
  ],
  "learn": [
    "Insert an element",
    "Remove the front element",
    "Inspect queue front",
    "Handle edge cases"
  ],
  "sections": [
    {
      "id": "enqueue",
      "label": "INSERTION",
      "title": "Enqueue Operation",
      "body": "Enqueue inserts a new element at the rear. In a fixed-size linear array queue, check overflow before inserting.",
      "bullets": [
        "If the queue is full, report overflow.",
        "For the first item, initialize front to 0.",
        "Increment rear and store the value."
      ],
      "code": "if (rear == MAX - 1) {\n    cout << \"Overflow\";\n} else {\n    if (front == -1) front = 0;\n    q[++rear] = value;\n}",
      "note": null
    },
    {
      "id": "dequeue",
      "label": "DELETION",
      "title": "Dequeue Operation",
      "body": "Dequeue removes the element at the front. Always check whether the queue is empty before accessing q[front].",
      "bullets": [
        "If front == -1 or front > rear, the queue is empty.",
        "Read q[front] as the removed value.",
        "Advance front.",
        "Reset front and rear when the queue becomes empty."
      ],
      "code": "if (front == -1 || front > rear) {\n    cout << \"Underflow\";\n} else {\n    int value = q[front++];\n    if (front > rear) front = rear = -1;\n}",
      "note": null
    },
    {
      "id": "peek",
      "label": "INSPECTION",
      "title": "Peek / Front",
      "body": "Peek returns the front element without removing it. It is an O(1) operation when the queue is represented with a front index.",
      "bullets": [
        "Check the queue is not empty.",
        "Return q[front].",
        "Do not change front or rear."
      ],
      "code": "if (front != -1) {\n    cout << q[front];\n}",
      "note": null
    },
    {
      "id": "display",
      "label": "TRAVERSAL",
      "title": "Display Queue Elements",
      "body": "To display a linear array queue, traverse from front to rear inclusive.",
      "bullets": [
        "Handle the empty queue first.",
        "Loop from front through rear.",
        "Do not start from index 0 unless it is the front."
      ],
      "code": "for (int i = front; i <= rear; i++) {\n    cout << q[i] << \" \";\n}",
      "note": null
    },
    {
      "id": "errors",
      "label": "EDGE CASES",
      "title": "Overflow and Underflow",
      "body": "Overflow occurs when insertion is attempted into a full fixed-capacity queue. Underflow occurs when deletion is attempted on an empty queue.",
      "bullets": [
        "Check full before enqueue.",
        "Check empty before dequeue or peek.",
        "Be careful when the last element is removed.",
        "In circular queues, use the circular full condition."
      ],
      "code": null,
      "note": "Correct boundary checks prevent invalid array access."
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Operation Complexity",
      "body": "Enqueue, dequeue and peek can all be O(1) with properly maintained indices.",
      "bullets": [
        "Enqueue: O(1)",
        "Dequeue: O(1)",
        "Peek: O(1)",
        "Display: O(n)"
      ],
      "code": null,
      "note": null
    }
  ],
  "questions": [
    "Write the algorithm for enqueue.",
    "Write the algorithm for dequeue.",
    "Why is an empty check needed before dequeue?",
    "What should happen after the last element is removed?",
    "Compare peek and dequeue."
  ]
}

export default function Page() {
  return <QueueTopicPage data={data} />
}
