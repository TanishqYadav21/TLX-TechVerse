import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Implementation",
  "eyebrow": "C++ IMPLEMENTATION",
  "title": "Implement Stack in C++.",
  "subtitle": "Build array-based and linked-list-based stacks with safe push, pop, peek and empty checks.",
  "tags": [
    "Array Stack",
    "Linked Stack",
    "C++",
    "Complexity"
  ],
  "learn": [
    "Array implementation",
    "Linked-list implementation",
    "Error handling",
    "Compare trade-offs"
  ],
  "questions": [
    "Implement push and pop using an array.",
    "Implement push and pop using a linked list.",
    "Compare array and linked-list stacks.",
    "Why is top initialized to -1 in an array stack?",
    "How can an API report underflow safely?"
  ],
  "sections": [
    {
      "id": "array",
      "label": "ARRAY",
      "title": "Array-Based Stack",
      "body": "A fixed-size array stack stores values in an array and tracks the top index. It is simple and cache-friendly, but has a fixed capacity unless a dynamic array is used.",
      "bullets": [
        "Initial top = -1.",
        "Push increments top before assignment.",
        "Pop returns stack[top] then decrements top.",
        "Check full and empty conditions."
      ],
      "code": "const int CAP = 100;\nint st[CAP], top = -1;\n\nvoid push(int x) {\n    if (top == CAP - 1) throw runtime_error(\"Overflow\");\n    st[++top] = x;\n}\n\nint pop() {\n    if (top == -1) throw runtime_error(\"Underflow\");\n    return st[top--];\n}"
    },
    {
      "id": "linked",
      "label": "LINKED LIST",
      "title": "Linked-List Stack",
      "body": "A linked stack inserts and removes at the head node. It grows dynamically until memory allocation fails and does not need a preselected array capacity.",
      "bullets": [
        "Push creates a node and links it to old top.",
        "Pop removes the top node.",
        "Push and pop are O(1).",
        "Remember to release removed nodes in manual-memory languages."
      ],
      "code": "struct Node { int data; Node* next; };\nNode* topNode = nullptr;\n\nvoid push(int x) {\n    Node* n = new Node{x, topNode};\n    topNode = n;\n}\n\nint pop() {\n    if (topNode == nullptr) throw runtime_error(\"Underflow\");\n    Node* old = topNode;\n    int value = old->data;\n    topNode = old->next;\n    delete old;\n    return value;\n}"
    },
    {
      "id": "compare",
      "label": "COMPARISON",
      "title": "Array vs Linked Stack",
      "body": "Both implementations can provide O(1) push and pop. Choose based on capacity requirements, memory overhead and implementation constraints.",
      "bullets": [
        "Array: low per-item overhead, possible fixed capacity.",
        "Linked list: dynamic size, extra pointer per node.",
        "Both: O(1) push/pop with correct implementation.",
        "Either can overflow due to capacity or available memory limits."
      ]
    },
    {
      "id": "safety",
      "label": "ERROR HANDLING",
      "title": "Safe Stack Design",
      "body": "Avoid returning a magic value such as -1 when -1 could be valid data. Prefer exceptions, optional values, or a boolean result with an output parameter.",
      "bullets": [
        "Check empty before pop or peek.",
        "Check bounds before array writes.",
        "Avoid memory leaks in linked stacks.",
        "Validate user input where needed."
      ],
      "note": "A robust implementation makes error states explicit rather than confusing them with valid stack values."
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
