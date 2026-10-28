import TreeTopicPage from "../TreeTopicPage"

const data = {
  "title": "Master Tree Traversals.",
  "subtitle": "Master preorder, inorder, postorder and level-order traversal with examples and dry runs.",
  "tags": [
    "Preorder",
    "Inorder",
    "Postorder",
    "Level Order"
  ],
  "learn": [
    "Understand traversal orders",
    "Trace recursive calls",
    "Use a queue for level order",
    "Analyze complexity"
  ],
  "sections": [
    {
      "id": "overview",
      "label": "TRAVERSAL BASICS",
      "title": "What is Tree Traversal?",
      "body": "Traversal is the process of visiting every node of a tree in a defined order.",
      "bullets": [
        "Preorder: Root, Left, Right.",
        "Inorder: Left, Root, Right.",
        "Postorder: Left, Right, Root.",
        "Level order: visit nodes level by level using a queue."
      ]
    },
    {
      "id": "preorder",
      "label": "DEPTH FIRST",
      "title": "Preorder Traversal",
      "body": "Preorder visits the current node before traversing its left and right subtrees.",
      "bullets": [
        "Visit root.",
        "Traverse left subtree.",
        "Traverse right subtree."
      ],
      "code": "void preorder(Node* root) {\n    if (root == nullptr) return;\n    cout << root->data << \" \";\n    preorder(root->left);\n    preorder(root->right);\n}"
    },
    {
      "id": "inorder",
      "label": "DEPTH FIRST",
      "title": "Inorder Traversal",
      "body": "Inorder traverses the left subtree, visits the node, then traverses the right subtree.",
      "bullets": [
        "Traverse left subtree.",
        "Visit root.",
        "Traverse right subtree.",
        "Inorder traversal of a BST produces sorted order."
      ],
      "code": "void inorder(Node* root) {\n    if (root == nullptr) return;\n    inorder(root->left);\n    cout << root->data << \" \";\n    inorder(root->right);\n}"
    },
    {
      "id": "postorder",
      "label": "DEPTH FIRST",
      "title": "Postorder Traversal",
      "body": "Postorder processes both subtrees before visiting the current node.",
      "bullets": [
        "Traverse left subtree.",
        "Traverse right subtree.",
        "Visit root.",
        "Useful when deleting/freeing a tree from children upward."
      ],
      "code": "void postorder(Node* root) {\n    if (root == nullptr) return;\n    postorder(root->left);\n    postorder(root->right);\n    cout << root->data << \" \";\n}"
    },
    {
      "id": "levelorder",
      "label": "BREADTH FIRST",
      "title": "Level-Order Traversal",
      "body": "Level-order traversal uses a queue to visit nodes breadth-first.",
      "bullets": [
        "Push the root into a queue.",
        "Remove the front node and visit it.",
        "Push its non-null children.",
        "Repeat until the queue is empty."
      ],
      "code": "void levelOrder(Node* root) {\n    if (root == nullptr) return;\n    queue<Node*> q;\n    q.push(root);\n    while (!q.empty()) {\n        Node* cur = q.front(); q.pop();\n        cout << cur->data << \" \";\n        if (cur->left) q.push(cur->left);\n        if (cur->right) q.push(cur->right);\n    }\n}",
      "note": "All standard traversals visit n nodes, so time complexity is O(n)."
    }
  ],
  "questions": [
    "Explain what is tree traversal?.",
    "Explain preorder traversal.",
    "Explain inorder traversal.",
    "State the time and space complexity of the relevant operation.",
    "Trace the algorithm on an empty tree and a single-node tree."
  ]
}

export default function Page() { return <TreeTopicPage data={data} /> }
