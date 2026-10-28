import StackTopicPage from "../StackTopicPage"

const data = {
  "topic": "Expression Conversion",
  "eyebrow": "INFIX, PREFIX & POSTFIX",
  "title": "Master Expression Conversion.",
  "subtitle": "Convert infix expressions to postfix and prefix, understand precedence and associativity, and practise stack-based algorithms.",
  "tags": [
    "Infix",
    "Prefix",
    "Postfix",
    "Precedence"
  ],
  "learn": [
    "Recognize expression forms",
    "Apply precedence rules",
    "Convert using stack",
    "Handle parentheses"
  ],
  "questions": [
    "Convert A+B*C to postfix.",
    "Convert (A+B)*C to postfix.",
    "Write prefix and postfix forms of A*(B+C).",
    "Why are stacks used for expression conversion?",
    "How does associativity affect conversion?"
  ],
  "sections": [
    {
      "id": "forms",
      "label": "FUNDAMENTALS",
      "title": "Infix, Prefix and Postfix",
      "body": "In infix, operators appear between operands; in prefix, before operands; in postfix, after operands. Prefix and postfix can avoid parentheses when token order is unambiguous.",
      "bullets": [
        "Infix: A + B",
        "Prefix: + A B",
        "Postfix: A B +"
      ]
    },
    {
      "id": "precedence",
      "label": "RULES",
      "title": "Precedence and Associativity",
      "body": "Higher-precedence operators are evaluated first. Parentheses override normal precedence. Operators with equal precedence follow their associativity rules.",
      "bullets": [
        "Parentheses first.",
        "Multiplication and division before addition and subtraction.",
        "Exponentiation is commonly right-associative.",
        "Use the exact rules of the language or syllabus when in doubt."
      ],
      "note": "When converting, do not pop an operator of equal precedence blindly; associativity matters."
    },
    {
      "id": "postfix",
      "label": "CONVERSION",
      "title": "Infix to Postfix",
      "body": "Scan tokens from left to right. Output operands immediately; push opening parentheses; pop operators according to precedence when a lower-precedence operator arrives.",
      "bullets": [
        "Operand: append to output.",
        "(: push to stack.",
        "): pop until the matching (.",
        "Operator: pop stronger operators, and equal-precedence operators when left-associative, then push current operator.",
        "At end, pop remaining operators."
      ],
      "code": "A + B * C  →  A B C * +"
    },
    {
      "id": "prefix",
      "label": "CONVERSION",
      "title": "Infix to Prefix",
      "body": "A common method reverses the infix expression, swaps parentheses, converts to postfix with adjusted associativity, and reverses the result. Carefully handle right-associative operators such as exponentiation.",
      "bullets": [
        "Reverse the token sequence.",
        "Swap ( with ) and ) with (.",
        "Convert using stack precedence rules.",
        "Reverse the postfix result to get prefix."
      ],
      "code": "A + B * C  →  + A * B C"
    },
    {
      "id": "examples",
      "label": "PRACTICE",
      "title": "Worked Conversions",
      "body": "For A + B * C, multiplication has higher precedence, so B*C is grouped first. For (A+B)*C, parentheses make addition happen first.",
      "bullets": [
        "A + B * C → A B C * +",
        "(A + B) * C → A B + C *",
        "A * B + C → A B * C +",
        "A + B - C → A B + C - (left associative)"
      ]
    },
    {
      "id": "mistakes",
      "label": "REVISION",
      "title": "Common Conversion Mistakes",
      "body": "Most errors come from mishandling parentheses, precedence or associativity, and from treating multi-character operands as individual characters.",
      "bullets": [
        "Do not output parentheses in postfix/prefix.",
        "Match every opening parenthesis.",
        "Tokenize identifiers and numbers correctly.",
        "Respect operator associativity."
      ]
    }
  ]
}

export default function Page() {
  return <StackTopicPage data={data} />
}
