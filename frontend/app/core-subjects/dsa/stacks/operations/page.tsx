import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Operations",
  "eyebrow": "STACK OPERATIONS",
  "title": "Master Stack Operations.",
  "subtitle": "Learn push, pop, peek, display, overflow and underflow with algorithms and C++ implementation.",
  "tags": [
    "Push",
    "Pop",
    "Peek",
    "Display"
  ],
  "learn": [
    "Push and pop algorithms",
    "Handle overflow",
    "Handle underflow",
    "Analyze complexity"
  ],
  "questions": [
    "Write the algorithm for push and pop.",
    "What condition indicates an empty array stack?",
    "Why must overflow be checked before push?",
    "Does peek remove an element?",
    "What is the complexity of displaying all elements?"
  ],
  "sections": [
    {
      "id": "push",
      "label": "INSERTION",
      "title": "Push Operation",
      "body": "Push inserts a new element at the top of the stack. For an array implementation, check capacity before incrementing top and storing the element.",
      "bullets": [
        "Check whether top == capacity - 1.",
        "If full, report overflow.",
        "Otherwise increment top.",
        "Store the value at stack[top]."
      ],
      "code": "void push(int x) {\n    if (top == capacity - 1) {\n        cout << \"Overflow\";\n        return;\n    }\n    stack[++top] = x;\n}"
    },
    {
      "id": "pop",
      "label": "DELETION",
      "title": "Pop Operation",
      "body": "Pop removes the element currently at the top. Always check for an empty stack before reading stack[top].",
      "bullets": [
        "If top == -1, report underflow.",
        "Save stack[top] if you need the removed value.",
        "Decrement top.",
        "Return the saved value."
      ],
      "code": "int pop() {\n    if (top == -1) {\n        cout << \"Underflow\";\n        return -1;\n    }\n    return stack[top--];\n}"
    },
    {
      "id": "peek",
      "label": "ACCESS",
      "title": "Peek / Top Operation",
      "body": "Peek returns the current top value without modifying the stack. It is useful when an algorithm needs to inspect the next value to process.",
      "bullets": [
        "Empty stack: no top value exists.",
        "Non-empty stack: return stack[top].",
        "Peek does not change top."
      ],
      "code": "int peek() {\n    if (top == -1) return -1;\n    return stack[top];\n}"
    },
    {
      "id": "display",
      "label": "TRAVERSAL",
      "title": "Display Stack Elements",
      "body": "For an array stack, display from top down to index 0 to show the same order in which items would be popped.",
      "bullets": [
        "Start loop at top.",
        "Print each element while index >= 0.",
        "Do not change top while displaying."
      ],
      "code": "void display() {\n    for (int i = top; i >= 0; --i) {\n        cout << stack[i] << \" \";\n    }\n}"
    },
    {
      "id": "errors",
      "label": "ERROR HANDLING",
      "title": "Overflow and Underflow",
      "body": "Overflow means pushing into a full fixed-capacity stack. Underflow means attempting to pop or peek when the stack is empty.",
      "bullets": [
        "Array overflow: top == capacity - 1.",
        "Empty stack: top == -1.",
        "Check conditions before accessing the array.",
        "For dynamic linked-list stacks, memory allocation failure is a separate concern."
      ],
      "note": "Do not decrement top before checking that the stack is not empty."
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Operation Complexity",
      "body": "Push, pop and peek are O(1); displaying n elements is O(n).",
      "bullets": [
        "Push: O(1)",
        "Pop: O(1)",
        "Peek: O(1)",
        "Display: O(n)"
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
