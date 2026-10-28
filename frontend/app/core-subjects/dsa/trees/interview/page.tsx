import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Interview Prep.",
  "subtitle": "Revise tree terminology, traversal orders, BST operations and complexity for interviews.",
  "tags": [
    "Interview",
    "Algorithms",
    "Complexity",
    "Revision"
  ],
  "learn": [
    "Revise key definitions",
    "Recall traversal orders",
    "Explain BST operations",
    "State complexity accurately"
  ],
  "sections": [
    {
      "id": "basics",
      "label": "FUNDAMENTALS",
      "title": "Core Interview Concepts",
      "body": "Be ready to define a tree and explain its vocabulary with a small example.",
      "bullets": [
        "Root: node with no parent.",
        "Leaf: node with no children.",
        "Depth: distance from root to node.",
        "Height: longest downward path to a leaf."
      ]
    },
    {
      "id": "traversals",
      "label": "TRAVERSALS",
      "title": "Traversal Order Revision",
      "body": "Remember the visit order by where the root appears.",
      "bullets": [
        "Preorder: Root → Left → Right.",
        "Inorder: Left → Root → Right.",
        "Postorder: Left → Right → Root.",
        "Level order: breadth-first, usually using a queue."
      ]
    },
    {
      "id": "bst",
      "label": "BST",
      "title": "BST Questions",
      "body": "BST operations use the ordering property to reduce the search area.",
      "bullets": [
        "Inorder traversal of a BST gives sorted keys.",
        "Operation time is O(h).",
        "A skewed BST may degrade to O(n).",
        "Deletion has leaf, one-child and two-child cases."
      ]
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "Complexity Questions",
      "body": "Traversal and general tree operations typically inspect every node.",
      "bullets": [
        "Traversal: O(n) time.",
        "Recursive DFS auxiliary stack: O(h).",
        "BST operations: O(h), where h is height.",
        "Balanced BST height is O(log n); skewed height is O(n)."
      ]
    },
    {
      "id": "questions",
      "label": "MOCK INTERVIEW",
      "title": "Quick Questions to Answer",
      "body": "Try answering these without notes, then explain your reasoning.",
      "bullets": [
        "Differentiate full, complete and perfect binary trees.",
        "Why does inorder traversal of a BST produce sorted values?",
        "How can you find the height of a tree?",
        "What are the three BST deletion cases?",
        "Compare BFS and DFS traversal.",
        "What is the worst-case height of a skewed tree?"
      ]
    }
  ],
  "questions": [
    "Explain core interview concepts.",
    "Explain traversal order revision.",
    "Explain bst questions.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
