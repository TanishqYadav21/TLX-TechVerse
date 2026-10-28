import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Binary Trees.",
  "subtitle": "Learn binary-tree properties, structural types, representation and common operations.",
  "tags": [
    "Binary Tree",
    "Full",
    "Complete",
    "Skewed"
  ],
  "learn": [
    "Understand binary tree rules",
    "Compare structural types",
    "Learn node representation",
    "Calculate basic properties"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "CORE CONCEPT",
      "title": "What is a Binary Tree?",
      "body": "A binary tree is a tree in which each node can have at most two children, called the left child and right child.",
      "bullets": [
        "A node may have no child, one child or two children.",
        "Left and right child positions are distinct.",
        "The tree may be empty."
      ]
    },
    {
      "id": "types",
      "label": "TREE TYPES",
      "title": "Types of Binary Trees",
      "body": "Different structural forms have different properties and use cases.",
      "bullets": [
        "Full: every node has either zero or two children.",
        "Complete: all levels except possibly the last are full; the last fills left to right.",
        "Perfect: all internal nodes have two children and all leaves are at the same level.",
        "Skewed: nodes extend mainly to one side.",
        "Balanced: subtree heights remain within a defined bound."
      ]
    },
    {
      "id": "properties",
      "label": "PROPERTIES",
      "title": "Binary Tree Properties",
      "body": "For a binary tree, each level has a bounded number of nodes.",
      "bullets": [
        "At level i, with root level 0, there can be at most 2^i nodes.",
        "A binary tree of height h has at most 2^(h+1) − 1 nodes.",
        "A tree with n nodes has at least ceil(log2(n+1)) − 1 height when optimally filled, using edge-height convention."
      ],
      "note": "Always state whether height counts edges or nodes before using a formula."
    },
    {
      "id": "representation",
      "label": "IMPLEMENTATION",
      "title": "Linked Representation",
      "body": "Each node stores its value and pointers to its left and right child.",
      "bullets": [
        "A null pointer means that child does not exist.",
        "The root pointer identifies the tree entry point.",
        "Recursive functions naturally follow left and right pointers."
      ],
      "code": "struct Node {\n    int data;\n    Node* left;\n    Node* right;\n};"
    },
    {
      "id": "applications",
      "label": "APPLICATIONS",
      "title": "Where Binary Trees Are Used",
      "body": "Binary trees form the basis of many search, sorting and expression algorithms.",
      "bullets": [
        "Binary search trees for ordered data.",
        "Heaps for priority queues.",
        "Expression trees for evaluating expressions.",
        "Decision trees for step-by-step choices."
      ]
    }
  ],
  "questions": [
    "Explain what is a binary tree?.",
    "Explain types of binary trees.",
    "Explain binary tree properties.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
