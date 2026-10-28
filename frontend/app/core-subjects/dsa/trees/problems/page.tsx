import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Problem Solving.",
  "subtitle": "Solve placement-oriented tree problems using traversals, recursion and binary search tree logic.",
  "tags": [
    "Placement",
    "Logic",
    "Problems",
    "Practice"
  ],
  "learn": [
    "Identify base cases",
    "Trace recursive calls",
    "Apply traversal patterns",
    "Analyze complexity"
  ],
  "sections": [
    {
      "id": "approach",
      "label": "PROBLEM SOLVING",
      "title": "How to Approach Tree Problems",
      "body": "Most tree problems can be structured around a base case and results from child subtrees.",
      "bullets": [
        "Identify what each recursive call returns.",
        "Handle nullptr before accessing node data.",
        "Decide whether to process the root before, between or after children.",
        "Test empty, single-node and skewed trees."
      ]
    },
    {
      "id": "patterns",
      "label": "COMMON PATTERNS",
      "title": "Frequently Used Patterns",
      "body": "Recognizing patterns makes tree questions easier to solve.",
      "bullets": [
        "Traversal: visit every node.",
        "Aggregation: combine values from left and right subtrees.",
        "Search: check node and continue into subtrees.",
        "BST pattern: use key ordering to choose one side."
      ]
    },
    {
      "id": "code",
      "label": "C++ PRACTICE",
      "title": "Example: Count Nodes",
      "body": "This common recursive pattern counts every node exactly once.",
      "bullets": [
        "Base case returns zero for an empty subtree.",
        "Each non-empty node contributes one.",
        "The two recursive results are added."
      ],
      "code": "int countNodes(Node* root) {\n    if (root == nullptr) return 0;\n    return 1 + countNodes(root->left) + countNodes(root->right);\n}",
      "note": "Time complexity is O(n), because every node is visited once."
    },
    {
      "id": "edgecases",
      "label": "TESTING",
      "title": "Important Edge Cases",
      "body": "Correct tree code should work on different shapes, not only a balanced example.",
      "bullets": [
        "Empty tree.",
        "Single node.",
        "Only left children or only right children.",
        "Duplicate values, if the problem permits them.",
        "Very deep tree and recursion-stack limits."
      ]
    },
    {
      "id": "practice",
      "label": "PRACTICE SET",
      "title": "Practice Problems",
      "body": "Practice these common questions and trace the tree before coding.",
      "bullets": [
        "Find the maximum value in a binary tree.",
        "Count leaf nodes.",
        "Calculate height and diameter.",
        "Print all nodes at a given level.",
        "Check whether two trees are identical.",
        "Validate whether a tree is a BST."
      ]
    }
  ],
  "questions": [
    "Explain how to approach tree problems.",
    "Explain frequently used patterns.",
    "Explain example: count nodes.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
