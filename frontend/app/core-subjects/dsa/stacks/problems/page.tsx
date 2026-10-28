import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Stack Problem Solving",
  "eyebrow": "PLACEMENT PRACTICE",
  "title": "Solve Stack Problems.",
  "subtitle": "Practise placement-oriented stack problems, common patterns, edge cases and complexity analysis.",
  "tags": [
    "Placement",
    "Logic",
    "Problems",
    "Practice"
  ],
  "learn": [
    "Recognize stack patterns",
    "Trace operations",
    "Solve bracket problems",
    "Analyze complexity"
  ],
  "questions": [
    "Check if parentheses are balanced.",
    "Find the next greater element for each array item.",
    "Design a stack with getMin in O(1).",
    "Reverse a string using a stack.",
    "Explain why monotonic stack algorithms can be O(n)."
  ],
  "sections": [
    {
      "id": "patterns",
      "label": "PATTERNS",
      "title": "Common Stack Patterns",
      "body": "Stack problems often involve reversing order, matching pairs, tracking the next greater element, or processing nested structure.",
      "bullets": [
        "Balanced brackets: match opening and closing symbols.",
        "Next greater element: maintain a monotonic stack.",
        "Reverse data: push then pop.",
        "Expression problems: use operators and operands stacks."
      ]
    },
    {
      "id": "brackets",
      "label": "PROBLEM 01",
      "title": "Valid Parentheses",
      "body": "Given a string containing brackets, determine whether every opening bracket is closed by the correct type in the correct order.",
      "bullets": [
        "Push opening brackets.",
        "For a closing bracket, stack must be non-empty and top must match.",
        "At the end, stack must be empty.",
        "Time O(n), space O(n)."
      ]
    },
    {
      "id": "next-greater",
      "label": "PROBLEM 02",
      "title": "Next Greater Element",
      "body": "For each array value, find the first greater value to its right. A monotonic decreasing stack stores unresolved indices or values.",
      "bullets": [
        "Traverse from left to right.",
        "While current value exceeds the value at the stack top, resolve that item.",
        "Push current index.",
        "Time O(n) amortized."
      ]
    },
    {
      "id": "min-stack",
      "label": "PROBLEM 03",
      "title": "Min Stack",
      "body": "Design a stack supporting push, pop, top and retrieving the minimum element in O(1) time. One approach stores pairs of value and minimum-so-far.",
      "bullets": [
        "On push, store min(value, previous minimum).",
        "On pop, the stored minimum for the new top is available.",
        "Each operation is O(1)."
      ],
      "code": "stack<pair<int,int>> st;\nvoid push(int x) {\n    int mn = st.empty() ? x : min(x, st.top().second);\n    st.push({x, mn});\n}\nint getMin() { return st.top().second; }"
    },
    {
      "id": "checklist",
      "label": "TESTING",
      "title": "Edge Cases Checklist",
      "body": "Test empty input, one element, repeated values, mismatched brackets, and cases where no answer exists.",
      "bullets": [
        "Empty stack operations.",
        "Single element push/pop.",
        "Input with unmatched closing bracket.",
        "Input with unmatched opening bracket.",
        "Strictly increasing and decreasing sequences."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
