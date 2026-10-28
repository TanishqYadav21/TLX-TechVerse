import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Expression Evaluation",
  "eyebrow": "POSTFIX & PREFIX EVALUATION",
  "title": "Master Expression Evaluation.",
  "subtitle": "Evaluate postfix and prefix expressions using stacks, with step-by-step algorithms and numerical examples.",
  "tags": [
    "Postfix",
    "Prefix",
    "Operands",
    "Operators"
  ],
  "learn": [
    "Evaluate postfix",
    "Evaluate prefix",
    "Trace stack states",
    "Avoid operand-order errors"
  ],
  "questions": [
    "Evaluate postfix 5 2 + 3 *.",
    "Why is postfix evaluation scanned left to right?",
    "Why is prefix evaluation scanned right to left?",
    "What is the correct pop order for subtraction?",
    "What should a valid expression leave on the stack?"
  ],
  "sections": [
    {
      "id": "postfix",
      "label": "POSTFIX",
      "title": "Postfix Evaluation Algorithm",
      "body": "Scan postfix tokens from left to right. Push operands. When an operator appears, pop the required operands, apply the operator, and push the result.",
      "bullets": [
        "Operand: push it.",
        "Binary operator: pop right operand first, then left operand.",
        "Compute left operator right.",
        "Final stack should contain one result."
      ],
      "code": "// Postfix: 2 3 4 * +\n// 3 * 4 = 12, then 2 + 12 = 14\n// Result: 14"
    },
    {
      "id": "trace",
      "label": "DRY RUN",
      "title": "Postfix Example: 2 3 4 * +",
      "body": "Process the tokens in order: push 2, push 3, push 4, apply multiplication to 3 and 4, then add the result to 2.",
      "bullets": [
        "Read 2 → stack [2]",
        "Read 3 → stack [2, 3]",
        "Read 4 → stack [2, 3, 4]",
        "Read * → pop 4 and 3; push 12 → [2, 12]",
        "Read + → pop 12 and 2; push 14 → [14]"
      ],
      "note": "For subtraction and division, operand order is important: second popped is the left operand."
    },
    {
      "id": "prefix",
      "label": "PREFIX",
      "title": "Prefix Evaluation Algorithm",
      "body": "Scan prefix tokens from right to left. Push operands. When an operator appears, pop the left operand first and then the right operand, compute the expression and push the result.",
      "bullets": [
        "Scan right to left.",
        "Operand: push it.",
        "Operator: pop left, then right.",
        "Push the result."
      ],
      "code": "// Prefix: + 2 * 3 4\n// 3 * 4 = 12, then 2 + 12 = 14\n// Result: 14"
    },
    {
      "id": "code",
      "label": "IMPLEMENTATION",
      "title": "C++ Postfix Evaluation Pattern",
      "body": "For a numeric postfix expression with single-digit operands, a stack of integers can evaluate each token. Production code should tokenize multi-digit numbers and validate malformed expressions.",
      "bullets": [
        "Check stack size before popping operands.",
        "Handle division by zero.",
        "Reject extra operands or missing operators."
      ],
      "code": "int evalPostfix(string s) {\n    stack<int> st;\n    for (char c : s) {\n        if (isdigit(c)) st.push(c - '0');\n        else {\n            int right = st.top(); st.pop();\n            int left = st.top(); st.pop();\n            if (c == '+') st.push(left + right);\n            else if (c == '-') st.push(left - right);\n            else if (c == '*') st.push(left * right);\n            else if (c == '/') st.push(left / right);\n        }\n    }\n    return st.top();\n}"
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Time and Space Complexity",
      "body": "Each token is processed once, so evaluation is linear in the number of tokens. The stack may hold O(n) operands in the worst case.",
      "bullets": [
        "Time: O(n).",
        "Auxiliary space: O(n).",
        "n is the number of tokens."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
