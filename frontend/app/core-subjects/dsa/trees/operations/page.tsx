import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Operations.",
  "subtitle": "Practice recursive height, node counting, searching and common tree operations.",
  "tags": [
    "Recursion",
    "Height",
    "Count",
    "Search"
  ],
  "learn": [
    "Traverse subtrees recursively",
    "Calculate height",
    "Count nodes and leaves",
    "Search a tree"
  ],
  "sections": [
    {
      "id": "recursion",
      "label": "RECURSION",
      "title": "Recursive Tree Operations",
      "body": "Recursive algorithms solve a tree problem by solving the same problem for its subtrees.",
      "bullets": [
        "Base case: an empty subtree (nullptr).",
        "Process the current node as needed.",
        "Recursively process left and right children."
      ]
    },
    {
      "id": "count",
      "label": "NODE COUNT",
      "title": "Count All Nodes",
      "body": "Count the current node plus the nodes in both subtrees.",
      "bullets": [
        "Empty tree has zero nodes.",
        "For a non-empty node: 1 + count(left) + count(right)."
      ],
      "code": "int countNodes(Node* root) {\n    if (root == nullptr) return 0;\n    return 1 + countNodes(root->left) + countNodes(root->right);\n}"
    },
    {
      "id": "height",
      "label": "HEIGHT",
      "title": "Calculate Tree Height",
      "body": "With edge-based height, an empty tree can be assigned -1 and a leaf has height 0.",
      "bullets": [
        "Calculate left subtree height.",
        "Calculate right subtree height.",
        "Return one plus the larger height."
      ],
      "code": "int height(Node* root) {\n    if (root == nullptr) return -1;\n    return 1 + max(height(root->left), height(root->right));\n}",
      "note": "If your course defines height by number of nodes, use 0 for empty and 1 for a leaf instead."
    },
    {
      "id": "leaves",
      "label": "LEAF COUNT",
      "title": "Count Leaf Nodes",
      "body": "A leaf is a node whose left and right children are both null.",
      "bullets": [
        "Return zero for an empty tree.",
        "Return one if both children are null.",
        "Otherwise sum the leaf counts of both subtrees."
      ],
      "code": "int countLeaves(Node* root) {\n    if (root == nullptr) return 0;\n    if (!root->left && !root->right) return 1;\n    return countLeaves(root->left) + countLeaves(root->right);\n}"
    },
    {
      "id": "search",
      "label": "SEARCH",
      "title": "Searching a General Binary Tree",
      "body": "Unlike a BST, a general binary tree has no ordering rule to guide the search.",
      "bullets": [
        "Check the current node.",
        "Search the left subtree if not found.",
        "Search the right subtree if still not found.",
        "Worst-case time is O(n)."
      ]
    }
  ],
  "questions": [
    "Explain recursive tree operations.",
    "Explain count all nodes.",
    "Explain calculate tree height.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
