import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Applications",
  "eyebrow": "STACK APPLICATIONS",
  "title": "Explore Stack Applications.",
  "subtitle": "See how stacks solve recursion, undo/redo, browser history, delimiter matching and backtracking problems.",
  "tags": [
    "Recursion",
    "Undo / Redo",
    "Browser History",
    "Backtracking"
  ],
  "learn": [
    "Function call stack",
    "Balanced symbols",
    "Undo workflows",
    "Backtracking"
  ],
  "questions": [
    "Why does recursion use a stack?",
    "How does a stack check balanced brackets?",
    "Explain undo and redo using stacks.",
    "How can stacks support depth-first search?",
    "What is stack overflow in recursive programs?"
  ],
  "sections": [
    {
      "id": "calls",
      "label": "RECURSION",
      "title": "Function Calls and Recursion",
      "body": "When a function calls another function, the runtime stores return addresses, parameters and local state in a call stack. The most recent call finishes first.",
      "bullets": [
        "Each call creates a stack frame.",
        "Returning removes the current frame.",
        "Deep recursion may cause stack overflow."
      ]
    },
    {
      "id": "symbols",
      "label": "PARSING",
      "title": "Balanced Parentheses",
      "body": "Push opening brackets onto the stack and match every closing bracket with the top element.",
      "bullets": [
        "Push opening brackets.",
        "For each closing bracket, require a matching top.",
        "At the end, the stack must be empty."
      ]
    },
    {
      "id": "undo",
      "label": "APPLICATION",
      "title": "Undo and Redo",
      "body": "Editors can store recent actions in a stack. Undo moves the latest action to a redo stack; performing a new action typically clears redo history.",
      "bullets": [
        "Undo uses last action first.",
        "Redo restores an undone action.",
        "Separate stacks can track undo and redo state."
      ]
    },
    {
      "id": "history",
      "label": "NAVIGATION",
      "title": "Browser History",
      "body": "Back navigation can be modelled using a stack of previously visited pages. A forward stack can track pages left when the user goes back.",
      "bullets": [
        "Back moves the current page to forward history.",
        "Forward moves a page back to the current history.",
        "Real browsers may use more detailed history models."
      ]
    },
    {
      "id": "backtracking",
      "label": "ALGORITHMS",
      "title": "Backtracking and DFS",
      "body": "Depth-first search and backtracking explore one path, then return to a previous state when that path cannot continue. Explicit stacks can replace recursive calls.",
      "bullets": [
        "Maze solving and path search.",
        "Depth-first graph traversal.",
        "State exploration and puzzle solving."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
