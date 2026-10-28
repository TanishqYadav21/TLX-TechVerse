import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Fundamentals",
  "eyebrow": "DATA STRUCTURES & ALGORITHMS",
  "title": "Master Stack Fundamentals.",
  "subtitle": "Understand the stack data structure, LIFO principle, memory behaviour, core operations and real-world use cases.",
  "tags": [
    "LIFO",
    "Top Pointer",
    "Push",
    "Pop"
  ],
  "learn": [
    "Understand LIFO",
    "Learn stack operations",
    "Compare implementations",
    "Explore applications"
  ],
  "questions": [
    "Define a stack and explain LIFO.",
    "What are overflow and underflow?",
    "Differentiate push, pop and peek.",
    "What is the time complexity of push and pop?",
    "Give four real-life or programming applications of stacks."
  ],
  "sections": [
    {
      "id": "definition",
      "label": "FUNDAMENTALS",
      "title": "What is a Stack?",
      "body": "A stack is a linear data structure in which insertion and deletion happen at one end called TOP. It follows LIFO: Last In, First Out.",
      "bullets": [
        "The last inserted element is removed first.",
        "TOP points to the current top element.",
        "Push inserts an item; pop removes the top item.",
        "Peek or top reads the top item without removing it."
      ],
      "note": "A stack is useful whenever the most recent item must be processed first."
    },
    {
      "id": "lifo",
      "label": "CORE CONCEPT",
      "title": "LIFO Principle",
      "body": "LIFO means the element added most recently is the first one removed. Think of a pile of plates: you place and remove plates from the top.",
      "bullets": [
        "Push A, then B, then C.",
        "The pop order is C, B, A.",
        "Only the top element is directly accessible."
      ]
    },
    {
      "id": "operations",
      "label": "OPERATIONS",
      "title": "Basic Stack Operations",
      "body": "A stack supports a small set of standard operations. Their efficiency depends on the implementation, but push and pop are normally O(1).",
      "bullets": [
        "push(x): add x to the top.",
        "pop(): remove and return the top element.",
        "peek(): read the top element.",
        "isEmpty(): check whether the stack has no items.",
        "isFull(): relevant to a fixed-size array stack."
      ]
    },
    {
      "id": "implementation",
      "label": "IMPLEMENTATION",
      "title": "Array Representation",
      "body": "An array stack stores elements in contiguous memory and uses an integer top index. Initially top = -1, which means the stack is empty.",
      "bullets": [
        "Push: increment top and assign the new value.",
        "Pop: read arr[top], then decrement top.",
        "Overflow occurs when capacity is reached.",
        "Underflow occurs when pop is attempted on an empty stack."
      ],
      "code": "int stack[100];\nint top = -1;\n\nvoid push(int x) {\n    if (top == 99) return; // overflow\n    stack[++top] = x;\n}\n\nint pop() {\n    if (top == -1) return -1; // underflow\n    return stack[top--];\n}"
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Time Complexity",
      "body": "Array-based and linked-list-based stacks can perform push, pop and peek in constant time when implemented correctly.",
      "bullets": [
        "Push: O(1)",
        "Pop: O(1)",
        "Peek: O(1)",
        "Search: O(n) in the general case."
      ]
    },
    {
      "id": "applications",
      "label": "APPLICATIONS",
      "title": "Where Are Stacks Used?",
      "body": "Stacks appear in compilers, browsers, recursion, expression processing and many undo/redo workflows.",
      "bullets": [
        "Function calls and recursion use the call stack.",
        "Undo operations restore the most recent action first.",
        "Browser back navigation can use stack-like history.",
        "Expression conversion and evaluation use stacks."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} showFooterLinks={false} />
}
