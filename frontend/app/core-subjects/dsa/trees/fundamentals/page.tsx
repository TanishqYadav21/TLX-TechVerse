import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Fundamentals.",
  "subtitle": "Understand tree terminology, nodes, edges, root, leaves, levels, height and common tree types.",
  "tags": [
    "Root",
    "Node",
    "Leaf",
    "Height"
  ],
  "learn": [
    "Understand tree terminology",
    "Learn parent-child relationships",
    "Calculate depth and height",
    "Recognize common tree types"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "FUNDAMENTALS",
      "title": "What is a Tree?",
      "body": "A tree is a non-linear hierarchical data structure made of nodes connected by edges. It has a root node and contains no cycles.",
      "bullets": [
        "The root is the topmost node and has no parent.",
        "A parent can have one or more child nodes.",
        "A leaf node has no children.",
        "A subtree is a node together with all its descendants."
      ],
      "note": "A tree with n nodes has n − 1 edges when it is a connected tree."
    },
    {
      "id": "terminology",
      "label": "TERMINOLOGY",
      "title": "Important Tree Terms",
      "body": "Tree terminology helps describe the structure and relationships between nodes.",
      "bullets": [
        "Edge: connection between two nodes.",
        "Siblings: nodes that share the same parent.",
        "Ancestor: any node on the path from the root to a node.",
        "Depth: number of edges from the root to a node.",
        "Height: number of edges on the longest downward path to a leaf."
      ]
    },
    {
      "id": "types",
      "label": "TREE TYPES",
      "title": "Common Types of Trees",
      "body": "Trees can be classified by the number of children allowed and by structural properties.",
      "bullets": [
        "General tree: a node may have any number of children.",
        "Binary tree: each node has at most two children.",
        "Full binary tree: every node has either zero or two children.",
        "Complete binary tree: levels are filled from left to right, except possibly the last.",
        "Skewed tree: each internal node has only one child."
      ]
    },
    {
      "id": "representation",
      "label": "REPRESENTATION",
      "title": "How Trees Are Represented",
      "body": "A tree can be represented using linked nodes, arrays for suitable tree shapes, or parent/child relationships.",
      "bullets": [
        "Linked representation stores data and pointers to children.",
        "Array representation is convenient for complete binary trees.",
        "Root access provides the starting point for traversal."
      ],
      "code": "struct Node {\n    int data;\n    Node* left;\n    Node* right;\n};"
    },
    {
      "id": "applications",
      "label": "APPLICATIONS",
      "title": "Applications of Trees",
      "body": "Trees model hierarchical information and support efficient searching and decision-making.",
      "bullets": [
        "File-system directories and folders.",
        "Organization charts and XML/HTML DOM.",
        "Binary search trees and priority queues.",
        "Expression trees and decision trees."
      ]
    }
  ],
  "questions": [
    "Explain what is a tree?.",
    "Explain important tree terms.",
    "Explain common types of trees.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
