import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Binary Search Tree.",
  "subtitle": "Understand BST ordering and implement searching, insertion and deletion with C++ examples.",
  "tags": [
    "BST",
    "Search",
    "Insert",
    "Delete"
  ],
  "learn": [
    "Learn BST ordering",
    "Search efficiently",
    "Insert new keys",
    "Handle deletion cases"
  ],
  "sections": [
    {
      "id": "definition",
      "label": "BST BASICS",
      "title": "What is a Binary Search Tree?",
      "body": "A binary search tree is a binary tree where keys in the left subtree are smaller than the node key and keys in the right subtree are larger, assuming unique keys.",
      "bullets": [
        "Every left-subtree key is less than the node key.",
        "Every right-subtree key is greater than the node key.",
        "Both subtrees must also satisfy the BST property.",
        "Inorder traversal returns keys in sorted order."
      ]
    },
    {
      "id": "search",
      "label": "SEARCH",
      "title": "Searching in a BST",
      "body": "Compare the target with the current node and choose the left or right subtree.",
      "bullets": [
        "If equal, the key is found.",
        "If target is smaller, move left.",
        "If target is larger, move right.",
        "Stop when found or nullptr is reached."
      ],
      "code": "bool search(Node* root, int key) {\n    if (root == nullptr || root->data == key)\n        return root != nullptr;\n    if (key < root->data) return search(root->left, key);\n    return search(root->right, key);\n}"
    },
    {
      "id": "insert",
      "label": "INSERTION",
      "title": "Insertion in a BST",
      "body": "Insertion follows the search path until a null child position is found.",
      "bullets": [
        "Create a new node at the null position.",
        "Keep the BST ordering property.",
        "Duplicate-key handling depends on the chosen convention."
      ],
      "code": "Node* insert(Node* root, int key) {\n    if (root == nullptr) return new Node(key);\n    if (key < root->data) root->left = insert(root->left, key);\n    else if (key > root->data) root->right = insert(root->right, key);\n    return root;\n}"
    },
    {
      "id": "deletion",
      "label": "DELETION",
      "title": "Deletion Cases",
      "body": "BST deletion has three standard structural cases.",
      "bullets": [
        "Leaf node: remove it directly.",
        "One child: replace the node with its child.",
        "Two children: replace with inorder successor or predecessor, then delete that replacement node."
      ]
    },
    {
      "id": "complexity",
      "label": "COMPLEXITY",
      "title": "BST Time Complexity",
      "body": "BST performance depends on tree height.",
      "bullets": [
        "Search, insertion and deletion take O(h), where h is tree height.",
        "Average balanced-like shape: O(log n).",
        "Worst-case skewed tree: O(n).",
        "Self-balancing BSTs help keep height logarithmic."
      ]
    }
  ],
  "questions": [
    "Explain what is a binary search tree?.",
    "Explain searching in a bst.",
    "Explain insertion in a bst.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
