import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Interview Preparation",
  "eyebrow": "INTERVIEW & REVISION",
  "title": "Prepare Stack Interview Questions.",
  "subtitle": "Revise core stack concepts, algorithms, complexity and frequently asked placement interview questions.",
  "tags": [
    "Interview",
    "Algorithms",
    "Complexity",
    "Revision"
  ],
  "learn": [
    "Revise core definitions",
    "Explain operations",
    "Know key algorithms",
    "Practise interview questions"
  ],
  "questions": [
    "What is a stack? Explain LIFO.",
    "What is the difference between stack and queue?",
    "Explain overflow and underflow.",
    "Convert A+B*C to postfix.",
    "Evaluate postfix 2 3 4 * +.",
    "How do you check balanced parentheses?",
    "What is a monotonic stack?",
    "Compare array and linked-list stack implementations."
  ],
  "sections": [
    {
      "id": "basics",
      "label": "CORE CONCEPTS",
      "title": "Must-Know Stack Concepts",
      "body": "Be ready to explain the LIFO rule, TOP, push, pop, peek, overflow and underflow without relying only on memorized definitions.",
      "bullets": [
        "Stack is a linear data structure.",
        "Insertion and deletion occur at TOP.",
        "LIFO means last in, first out.",
        "Push/pop/peek are O(1) in standard implementations."
      ]
    },
    {
      "id": "algorithms",
      "label": "ALGORITHMS",
      "title": "Important Algorithms",
      "body": "Stack algorithms frequently appear in expression processing, bracket matching, DFS, next greater element and minimum-stack problems.",
      "bullets": [
        "Infix to postfix conversion.",
        "Postfix and prefix evaluation.",
        "Balanced parentheses.",
        "Monotonic stack / next greater element."
      ]
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Complexity Quick Revision",
      "body": "Most basic stack operations are constant time. Algorithms that process every input item once are commonly linear time.",
      "bullets": [
        "Push: O(1).",
        "Pop: O(1).",
        "Peek: O(1).",
        "Search/display: O(n).",
        "Expression conversion/evaluation: usually O(n)."
      ]
    },
    {
      "id": "mistakes",
      "label": "INTERVIEW TIPS",
      "title": "Common Mistakes",
      "body": "Interviewers often check boundary conditions and whether the candidate can explain why the algorithm works, not just write code.",
      "bullets": [
        "Check empty before pop/top.",
        "For postfix subtraction, pop right then left.",
        "For prefix evaluation, scan right to left.",
        "State both time and auxiliary-space complexity."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
