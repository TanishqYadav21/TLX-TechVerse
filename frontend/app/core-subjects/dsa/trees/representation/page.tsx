import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Representation.",
  "subtitle": "Represent trees with linked nodes and arrays, and understand when each approach is useful.",
  "tags": [
    "Pointers",
    "Array",
    "Linked Nodes",
    "C++"
  ],
  "learn": [
    "Understand node pointers",
    "Build linked nodes",
    "Compare array representation",
    "Trace child relationships"
  ],
  "sections": [
    {
      "id": "linked",
      "label": "LINKED REPRESENTATION",
      "title": "Linked Node Representation",
      "body": "A linked binary-tree node stores data and pointers to its left and right children.",
      "bullets": [
        "The root pointer refers to the first node.",
        "A missing child is represented by nullptr.",
        "Nodes need not occupy contiguous memory."
      ],
      "code": "struct Node {\n    int data;\n    Node* left;\n    Node* right;\n\n    Node(int value) {\n        data = value;\n        left = right = nullptr;\n    }\n};"
    },
    {
      "id": "array",
      "label": "ARRAY REPRESENTATION",
      "title": "Array Representation",
      "body": "Array representation is especially convenient for complete binary trees and heaps.",
      "bullets": [
        "Using zero-based indexing: left child = 2*i + 1.",
        "Right child = 2*i + 2.",
        "Parent index = (i - 1) / 2 for i > 0.",
        "Sparse or skewed trees can waste array space."
      ],
      "note": "These formulas assume zero-based array indexing."
    },
    {
      "id": "compare",
      "label": "COMPARISON",
      "title": "Array vs Linked Representation",
      "body": "Choose the representation based on tree shape and required operations.",
      "bullets": [
        "Array: simple indexing and good locality for complete trees.",
        "Linked: flexible growth and no fixed capacity requirement.",
        "Linked nodes require pointer memory.",
        "Array storage can leave unused positions for sparse trees."
      ]
    },
    {
      "id": "create",
      "label": "C++ IMPLEMENTATION",
      "title": "Creating Nodes",
      "body": "Create nodes and connect child pointers to build a small tree.",
      "bullets": [
        "Allocate a node for each value.",
        "Assign child pointers to connect nodes.",
        "Keep the root pointer so the structure remains reachable."
      ],
      "code": "Node* root = new Node(10);\nroot->left = new Node(5);\nroot->right = new Node(15);\nroot->left->left = new Node(2);"
    },
    {
      "id": "memory",
      "label": "MEMORY SAFETY",
      "title": "Memory and Pointer Safety",
      "body": "Tree pointers must be initialized and accessed safely.",
      "bullets": [
        "Initialize child pointers to nullptr.",
        "Check for nullptr before dereferencing.",
        "In production C++, consider smart pointers for ownership.",
        "Release dynamically allocated memory when appropriate."
      ]
    }
  ],
  "questions": [
    "Explain linked node representation.",
    "Explain array representation.",
    "Explain array vs linked representation.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
