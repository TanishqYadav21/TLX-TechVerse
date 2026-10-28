export const questions = [
  {
    "id": 1,
    "slug": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Amazon",
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "description": "Given an integer array nums and a target value, find the two different positions whose values add up exactly to target. Return their indices; do not reuse the same element.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "The values 2 and 7 are at indices 0 and 1, and 2 + 7 = 9."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Exactly one valid answer exists."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "class Solution {\n  public:\n      vector<int> twoSum(vector<int>& nums, int target) {\n  \n      }\n  };",
      "c": "#include<stdio.h>\n  \n  int main() {\n  \n      return 0;\n  }",
      "java": "class Solution {\n      public int[] twoSum(int[] nums, int target) {\n  \n      }\n  }",
      "python": "class Solution:\n      def twoSum(self, nums, target):\n          pass",
      "javascript": "var twoSum = function(nums, target) {\n  \n  };"
    },
    "testCases": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]"
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]"
      }
    ]
  },
  {
    "id": 2,
    "slug": "valid-parentheses",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "topic": "Stack",
    "companies": [
      "Microsoft",
      "Amazon",
      "Facebook"
    ],
    "description": "Given a string containing brackets (), {}, and [], determine whether every opening bracket is closed by the correct type in the correct order.",
    "examples": [
      {
        "input": "s = \"({[]})\"",
        "output": "true",
        "explanation": "Every opening bracket is matched in LIFO order with its corresponding closing bracket."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only: '(', ')', '{', '}', '[' and ']'."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "class Solution {\n  public:\n      bool isValid(string s) {\n  \n      }\n  };",
      "c": "#include<stdio.h>\n  \n  int main(){\n  \n  }",
      "java": "class Solution{\n      public boolean isValid(String s){\n  \n      }\n  }",
      "python": "class Solution:\n      def isValid(self, s):\n          pass",
      "javascript": "var isValid = function(s){\n  \n  };"
    },
    "testCases": [
      {
        "input": "s = \"({[]})\"",
        "output": "true"
      }
    ]
  },
  {
    "id": 3,
    "slug": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "topic": "Intervals",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "description": "Given a collection of intervals [start,end], merge every pair of overlapping intervals and return a set of non-overlapping intervals covering the same ranges.",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[9,12]]",
        "output": "[[1,6],[8,12]]",
        "explanation": "[1,3] overlaps [2,6], and [8,10] overlaps [9,12]."
      }
    ],
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    "hints": [
      "Look for the main intervals pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]"
      }
    ]
  },
  {
    "id": 4,
    "slug": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Hard",
    "topic": "Design",
    "companies": [
      "Adobe",
      "Amazon",
      "Oracle"
    ],
    "description": "Implement a fixed-capacity least-recently-used cache. get should return a value and mark the key as recently used; put should insert/update a value and evict the least recently used key when capacity is exceeded.",
    "examples": [
      {
        "input": "capacity=2; put(1,1); put(2,2); get(1); put(3,3)",
        "output": "get(1)=1; key 2 is evicted",
        "explanation": "After get(1), key 1 is newer than key 2, so inserting key 3 removes key 2."
      }
    ],
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "capacity=2; put(1,1); put(2,2); get(1); put(3,3)",
        "output": "get(1)=1; key 2 is evicted"
      }
    ]
  },
  {
    "id": 5,
    "slug": "binary-tree-level-order",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Flipkart",
      "Amazon",
      "Google"
    ],
    "description": "Given the root of a binary tree, visit its nodes level by level from left to right and return a list containing one array for each depth of the tree.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "The root is level 0, nodes 9 and 20 are level 1, and 15 and 7 are level 2."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]"
      }
    ]
  },
  {
    "id": 6,
    "slug": "contains-duplicate",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "Given an integer array, determine whether any value appears at least twice. Return true if a duplicate exists and false when every value is unique.",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": "The value 1 occurs at indices 0 and 3."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true"
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false"
      }
    ]
  },
  {
    "id": 7,
    "slug": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "Given daily stock prices, choose one day to buy and a later day to sell to maximize profit. If no profitable transaction exists, return 0.",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy at 1 and sell at 6, giving a profit of 5."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5"
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0"
      }
    ]
  },
  {
    "id": 8,
    "slug": "valid-anagram",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "topic": "Hashing",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "Given two strings, determine whether the second string is an anagram of the first: both must contain exactly the same characters with the same frequencies.",
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Both strings contain the same letters with identical frequencies."
      }
    ],
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main hashing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false"
      }
    ]
  },
  {
    "id": 9,
    "slug": "palindrome-number",
    "title": "Palindrome Number",
    "difficulty": "Easy",
    "topic": "Math",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Given an integer, determine whether its decimal representation reads the same from left to right and right to left. Negative numbers are not palindromes.",
    "examples": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 is unchanged when its digits are reversed."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main math pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "x = 121",
        "output": "true"
      }
    ]
  },
  {
    "id": 10,
    "slug": "reverse-string",
    "title": "Reverse String",
    "difficulty": "Easy",
    "topic": "Strings",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "Given an array of characters, reverse the array in place without creating another array for the result.",
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": "Swap characters from the two ends while moving toward the center."
      }
    ],
    "constraints": [
      "1 <= string length <= 10^5",
      "The input contains only characters allowed by the problem statement."
    ],
    "hints": [
      "Look for the main strings pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
      }
    ]
  },
  {
    "id": 11,
    "slug": "move-zeroes",
    "title": "Move Zeroes",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "Given an array, move every zero to the end while preserving the relative order of all non-zero elements. Perform the rearrangement in place when possible.",
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The non-zero values keep their original order and the two zeros are placed at the end."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]"
      }
    ]
  },
  {
    "id": 12,
    "slug": "intersection-of-two-arrays",
    "title": "Intersection of Two Arrays",
    "difficulty": "Easy",
    "topic": "Hashing",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Hashing problem \"Intersection of Two Arrays\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main hashing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 13,
    "slug": "majority-element",
    "title": "Majority Element",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "Given an array, find the value that appears more than floor(n/2) times. You may assume such an element always exists.",
    "examples": [
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2",
        "explanation": "2 appears four times, more than half of the seven elements."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2"
      }
    ]
  },
  {
    "id": 14,
    "slug": "missing-number",
    "title": "Missing Number",
    "difficulty": "Easy",
    "topic": "Arrays",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "Given n distinct numbers chosen from the range 0 through n, find the one number missing from the array.",
    "examples": [
      {
        "input": "nums = [3,0,1]",
        "output": "2",
        "explanation": "The complete range is 0,1,2,3, so 2 is missing."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [3,0,1]",
        "output": "2"
      }
    ]
  },
  {
    "id": 15,
    "slug": "single-number",
    "title": "Single Number",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "Given an integer array in which every value appears exactly twice except one value, find the value that appears only once.",
    "examples": [
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": "The pairs 1 and 2 cancel out, leaving 4."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main bit manipulation pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4"
      }
    ]
  },
  {
    "id": 16,
    "slug": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "topic": "Dynamic Programming",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are climbing a staircase with n steps. At each move you can climb either 1 or 2 steps. Count how many distinct ways can reach exactly the top.",
    "examples": [
      {
        "input": "n = 5",
        "output": "8",
        "explanation": "The number of ways follows the recurrence ways(n)=ways(n-1)+ways(n-2)."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "n = 2",
        "output": "2"
      },
      {
        "input": "n = 3",
        "output": "3"
      },
      {
        "input": "n = 5",
        "output": "8"
      }
    ]
  },
  {
    "id": 17,
    "slug": "linked-list-cycle",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "topic": "Linked List",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "Given the head of a singly linked list, determine whether following next pointers eventually revisits a node, which means the list contains a cycle.",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "The tail points back to the node containing 2, creating a cycle."
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "pos is -1 or a valid index in the linked list."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true"
      }
    ]
  },
  {
    "id": 18,
    "slug": "reverse-linked-list",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "topic": "Linked List",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "Given the head of a singly linked list, reverse the direction of every next pointer and return the new head.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "Each link is reversed so the original tail becomes the new head."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 5000",
      "-5000 <= Node.val <= 5000"
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]"
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]"
      }
    ]
  },
  {
    "id": 19,
    "slug": "binary-search",
    "title": "Binary Search",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "Given a sorted array and a target value, find the index of the target using binary search. Return -1 when the target is absent.",
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "9 is stored at index 4."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^4 <= nums[i] <= 10^4",
      "nums is sorted in ascending order.",
      "All elements in nums are unique.",
      "-10^4 <= target <= 10^4"
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4"
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1"
      }
    ]
  },
  {
    "id": 20,
    "slug": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "Given the root of a binary tree, return the number of nodes on the longest path from the root down to any leaf.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": "The longest root-to-leaf paths contain 3 nodes."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ]
  },
  {
    "id": 21,
    "slug": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "Given the root of a binary tree, swap the left and right child of every node and return the new root.",
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": "Every node has its left and right subtrees exchanged."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]"
      }
    ]
  },
  {
    "id": 22,
    "slug": "flood-fill",
    "title": "Flood Fill",
    "difficulty": "Easy",
    "topic": "Graphs",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given an image matrix, a starting pixel, and a replacement color, change the starting pixel and every 4-directionally connected pixel having the same original color.",
    "examples": [
      {
        "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        "output": "[[2,2,2],[2,2,0],[2,0,1]]",
        "explanation": "Only the connected region containing the starting pixel and having color 1 is recolored."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        "output": "[[2,2,2],[2,2,0],[2,0,1]]"
      }
    ]
  },
  {
    "id": 23,
    "slug": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Easy",
    "topic": "Graphs",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "Given a grid containing land (1) and water (0), count how many separate islands exist. Cells connect horizontally or vertically, not diagonally.",
    "examples": [
      {
        "input": "grid = [[1,1,0],[0,1,0],[0,0,1]]",
        "output": "2",
        "explanation": "The connected land cells form two separate islands."
      }
    ],
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "grid = [[1,1,0],[0,1,0],[0,0,1]]",
        "output": "2"
      }
    ]
  },
  {
    "id": 24,
    "slug": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "Given an integer array, find every unique triple of different indices whose three values sum to zero. Do not return duplicate triples.",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "Both triples add to zero; duplicate orderings are excluded."
      }
    ],
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "hints": [
      "Look for the main two pointers pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]"
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]"
      }
    ]
  },
  {
    "id": 25,
    "slug": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "topic": "Arrays",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "For each position, return the product of every array value except the value at that position. Do not use division and aim for linear time.",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": "For index 1, multiply 1, 3 and 4 to obtain 12."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30",
      "The product of any prefix or suffix of nums fits in a 32-bit integer."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]"
      },
      {
        "input": "nums = [-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]"
      }
    ]
  },
  {
    "id": 26,
    "slug": "maximum-subarray",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "Given an integer array, find the contiguous subarray with the largest possible sum and return that sum. The subarray must contain at least one element.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the maximum sum of 6."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6"
      }
    ]
  },
  {
    "id": 27,
    "slug": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "Given vertical lines represented by heights, choose two lines that together with the x-axis form a container holding the maximum possible amount of water.",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "Using heights 8 and 7 with width 7 gives area 49."
      }
    ],
    "constraints": [
      "2 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "hints": [
      "Look for the main two pointers pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49"
      }
    ]
  },
  {
    "id": 28,
    "slug": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "topic": "Hashing",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Hashing problem \"Longest Consecutive Sequence\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main hashing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 29,
    "slug": "group-anagrams",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "topic": "Hashing",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "Given a list of strings, group together strings that contain the same characters with the same frequencies. The order of groups does not matter.",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
        "explanation": "Sorting each word or counting its letters produces the same key for anagrams."
      }
    ],
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters."
    ],
    "hints": [
      "Look for the main hashing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
      }
    ]
  },
  {
    "id": 30,
    "slug": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "topic": "Heap",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "Given an integer array and an integer k, return the k values that occur most frequently. The result order may be arbitrary.",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "1 occurs three times and 2 occurs twice, making them the two most frequent values."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= number of distinct elements in nums."
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]"
      }
    ]
  },
  {
    "id": 31,
    "slug": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "Given a string, find the length of its longest contiguous substring in which every character appears at most once.",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "\"abc\" is the longest substring without repeated characters."
      }
    ],
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3"
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1"
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3"
      }
    ]
  },
  {
    "id": 32,
    "slug": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Sliding Window problem \"Longest Repeating Character Replacement\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of uppercase English letters.",
      "0 <= k <= s.length"
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 33,
    "slug": "permutation-in-string",
    "title": "Permutation in String",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Sliding Window problem \"Permutation in String\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= s1.length, s2.length <= 10^4",
      "s1 and s2 consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 34,
    "slug": "find-all-anagrams-in-a-string",
    "title": "Find All Anagrams in a String",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Sliding Window problem \"Find All Anagrams in a String\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= s.length, p.length <= 3 * 10^4",
      "s and p consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 35,
    "slug": "daily-temperatures",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "For each day, determine how many days you must wait until a warmer temperature occurs. If no warmer day exists, return 0 for that position.",
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "For 71, the next warmer temperature is 72 two days later."
      }
    ],
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100"
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]"
      }
    ]
  },
  {
    "id": 36,
    "slug": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "You are given an input for the Stack problem \"Evaluate Reverse Polish Notation\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 37,
    "slug": "car-fleet",
    "title": "Car Fleet",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Stack problem \"Car Fleet\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 38,
    "slug": "min-stack",
    "title": "Min Stack",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Stack problem \"Min Stack\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 39,
    "slug": "generate-parentheses",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "Given n pairs of parentheses, generate every valid sequence containing exactly n opening and n closing parentheses.",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": "Only sequences that never close more parentheses than have been opened are valid."
      }
    ],
    "constraints": [
      "1 <= n <= 8"
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      }
    ]
  },
  {
    "id": 40,
    "slug": "combination-sum",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given distinct positive candidate values and a target, return every unique combination whose values add to target. A candidate may be reused any number of times.",
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "2+2+3 and 7 are the only valid combinations."
      }
    ],
    "constraints": [
      "1 <= candidates.length <= 30",
      "2 <= candidates[i] <= 40",
      "1 <= target <= 40",
      "All elements of candidates are distinct."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]"
      }
    ]
  },
  {
    "id": 41,
    "slug": "subsets",
    "title": "Subsets",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "Given an array of distinct integers, return all possible subsets, including the empty subset and the complete set.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
        "explanation": "Every element can independently be included or excluded."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10",
      "-10 <= nums[i] <= 10",
      "All values of nums are unique."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]"
      }
    ]
  },
  {
    "id": 42,
    "slug": "permutations",
    "title": "Permutations",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "Given an array of distinct integers, return every possible ordering of all elements.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": "There are 3! = 6 possible permutations."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 6",
      "-10 <= nums[i] <= 10",
      "All values of nums are unique."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      }
    ]
  },
  {
    "id": 43,
    "slug": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Backtracking problem \"Letter Combinations of a Phone Number\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 44,
    "slug": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "A sorted array has been rotated at an unknown pivot. Find the index of target in O(log n) time, or return -1 if it is absent.",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "The rotation splits the sorted order, but one half is always normally sorted."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values of nums are unique.",
      "-10^4 <= target <= 10^4"
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      }
    ]
  },
  {
    "id": 45,
    "slug": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "Given a strictly increasing array rotated at an unknown pivot, find its minimum value in logarithmic time.",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "The rotation point before 1 contains the minimum value."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000",
      "-5000 <= nums[i] <= 5000",
      "All values of nums are unique.",
      "nums is sorted and rotated at an unknown pivot."
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1"
      }
    ]
  },
  {
    "id": 46,
    "slug": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "Given piles of bananas and h hours, find the minimum integer eating speed k such that all bananas can be eaten within h hours.",
    "examples": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4",
        "explanation": "At speed 4, the required hours are 1+2+2+3 = 8."
      }
    ],
    "constraints": [
      "1 <= piles.length <= 10^4",
      "1 <= piles[i] <= 10^9",
      "1 <= h <= 10^9"
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4"
      }
    ]
  },
  {
    "id": 47,
    "slug": "time-based-key-value-store",
    "title": "Time Based Key-Value Store",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Binary Search problem \"Time Based Key-Value Store\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "nums is sorted as required by the problem.",
      "Values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 48,
    "slug": "copy-list-with-random-pointer",
    "title": "Copy List with Random Pointer",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Linked List problem \"Copy List with Random Pointer\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 49,
    "slug": "add-two-numbers",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "Two non-empty linked lists represent non-negative integers in reverse digit order. Add the numbers and return the sum as a linked list in the same reversed format.",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807, represented as 7 -> 0 -> 8."
      }
    ],
    "constraints": [
      "1 <= number of nodes in each list <= 100",
      "0 <= Node.val <= 9",
      "The lists represent non-negative integers without leading zeroes except for the number 0."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]"
      }
    ]
  },
  {
    "id": 50,
    "slug": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "Given the head of a linked list, remove the node that is n positions from the end and return the updated head.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]",
        "explanation": "The second node from the end is 4, so it is removed."
      }
    ],
    "constraints": [
      "1 <= number of nodes <= 30",
      "0 <= Node.val <= 100",
      "1 <= n <= number of nodes"
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]"
      }
    ]
  },
  {
    "id": 51,
    "slug": "reorder-list",
    "title": "Reorder List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "Rearrange a linked list from L0→L1→...→Ln into L0→Ln→L1→Ln-1→... without changing node values.",
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": "Take nodes alternately from the front and back halves."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]"
      }
    ]
  },
  {
    "id": 52,
    "slug": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Linked List problem \"Merge Two Sorted Lists\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes in each list <= 50",
      "-100 <= Node.val <= 100",
      "Both lists are sorted in non-decreasing order."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 53,
    "slug": "swap-nodes-in-pairs",
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Linked List problem \"Swap Nodes in Pairs\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 54,
    "slug": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "Given a binary tree, determine whether it satisfies BST rules: every value in the left subtree is smaller and every value in the right subtree is larger than the node.",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": "1 is less than 2 and 3 is greater than 2, so the tree is a valid BST."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [2,1,3]",
        "output": "true"
      }
    ]
  },
  {
    "id": 55,
    "slug": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "Given a binary search tree and an integer k, return the value of the kth smallest node in sorted order.",
    "examples": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1",
        "explanation": "An inorder traversal visits the BST values in ascending order: 1,2,3,4."
      }
    ],
    "constraints": [
      "The number of nodes in the BST is n, where 1 <= n <= 10^4.",
      "1 <= Node.val <= 10^4",
      "1 <= k <= n"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1"
      }
    ]
  },
  {
    "id": 56,
    "slug": "lowest-common-ancestor-of-a-bst",
    "title": "Lowest Common Ancestor of a BST",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "Given a BST and two node values p and q, find their lowest common ancestor: the deepest node whose subtree contains both nodes.",
    "examples": [
      {
        "input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
        "output": "6",
        "explanation": "2 is in the left subtree of 6 and 8 is in the right subtree, so 6 is their first split point."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
        "output": "6"
      }
    ]
  },
  {
    "id": 57,
    "slug": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Trees problem \"Binary Tree Right Side View\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 58,
    "slug": "construct-binary-tree-from-preorder-and-inorder",
    "title": "Construct Binary Tree from Preorder and Inorder",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Trees problem \"Construct Binary Tree from Preorder and Inorder\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 59,
    "slug": "path-sum-ii",
    "title": "Path Sum II",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Trees problem \"Path Sum II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 60,
    "slug": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "You are given an input for the Trees problem \"Diameter of Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [1, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 61,
    "slug": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Trees problem \"Balanced Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "The number of nodes is in the range [0, 5000].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 62,
    "slug": "rotting-oranges",
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "In a grid, fresh oranges become rotten every minute when adjacent to a rotten orange in one of four directions. Return the minutes needed to rot all oranges, or -1 if some can never rot.",
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "Breadth-first propagation reaches the last fresh orange after four minutes."
      }
    ],
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 10",
      "grid[i][j] is 0, 1, or 2."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4"
      }
    ]
  },
  {
    "id": 63,
    "slug": "clone-graph",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "Given a reference to a node in a connected undirected graph, create a deep copy containing new nodes with the same values and adjacency relationships.",
    "examples": [
      {
        "input": "graph = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": "The cloned graph has the same structure but none of its nodes are shared with the original."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "graph = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ]
  },
  {
    "id": 64,
    "slug": "course-schedule",
    "title": "Course Schedule",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "There are courses with prerequisite pairs. Determine whether it is possible to finish all courses without violating prerequisites; a cycle makes completion impossible.",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "Course 0 can be completed before course 1, so no dependency cycle exists."
      }
    ],
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= ai, bi < numCourses"
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true"
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false"
      }
    ]
  },
  {
    "id": 65,
    "slug": "course-schedule-ii",
    "title": "Course Schedule II",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "Given courses and prerequisite pairs, return an ordering in which every prerequisite is completed before its dependent course. If no valid ordering exists because of a cycle, return an empty array.",
    "examples": [
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3]",
        "explanation": "Course 0 comes first; then 1 and 2; course 3 can be taken after both."
      }
    ],
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= ai, bi < numCourses"
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3]"
      }
    ]
  },
  {
    "id": 66,
    "slug": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Graphs problem \"Pacific Atlantic Water Flow\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 67,
    "slug": "surrounded-regions",
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Graphs problem \"Surrounded Regions\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 68,
    "slug": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Graphs problem \"Graph Valid Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 69,
    "slug": "number-of-connected-components",
    "title": "Number of Connected Components",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Graphs problem \"Number of Connected Components\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 70,
    "slug": "word-search",
    "title": "Word Search",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Backtracking problem \"Word Search\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 71,
    "slug": "combination-sum-ii",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Backtracking problem \"Combination Sum II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 72,
    "slug": "house-robber",
    "title": "House Robber",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "Given non-negative amounts of money in houses along a street, maximize the amount robbed without robbing two adjacent houses.",
    "examples": [
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob houses containing 2, 9 and 1 for a total of 12."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4"
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12"
      }
    ]
  },
  {
    "id": 73,
    "slug": "house-robber-ii",
    "title": "House Robber II",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"House Robber II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 10^4"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 74,
    "slug": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "Given coin denominations and a target amount, return the minimum number of coins needed to make exactly that amount. Each coin may be used repeatedly; return -1 if impossible.",
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 can be formed with 5+5+1, using three coins."
      }
    ],
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1"
      },
      {
        "input": "coins = [1], amount = 0",
        "output": "0"
      }
    ]
  },
  {
    "id": 75,
    "slug": "decode-ways",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Decode Ways\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= s.length <= 100",
      "s contains only digits."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 76,
    "slug": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "Given an integer array, find the length of the longest subsequence whose values are strictly increasing. The selected elements do not need to be contiguous.",
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "One longest increasing subsequence is [2,3,7,101]."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4"
      }
    ]
  },
  {
    "id": 77,
    "slug": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Partition Equal Subset Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 78,
    "slug": "unique-paths",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Unique Paths\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "m = 3, n = 7",
        "output": "28"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3"
      }
    ]
  },
  {
    "id": 79,
    "slug": "minimum-path-sum",
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Minimum Path Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= grid.length, grid[i].length <= 200",
      "0 <= grid[i][j] <= 200"
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 80,
    "slug": "word-break",
    "title": "Word Break",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given a string and a dictionary of words, determine whether the string can be segmented into one or more dictionary words. Words may be reused.",
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "The string can be split into \"leet\" + \"code\"."
      }
    ],
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "s and wordDict[i] consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true"
      }
    ]
  },
  {
    "id": 81,
    "slug": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Longest Common Subsequence\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of lowercase English characters."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 82,
    "slug": "edit-distance",
    "title": "Edit Distance",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "Given two strings, find the minimum number of insertions, deletions, and substitutions required to transform the first string into the second.",
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse → rorse → rose → ros uses three edits."
      }
    ],
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3"
      }
    ]
  },
  {
    "id": 83,
    "slug": "target-sum",
    "title": "Target Sum",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Target Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 84,
    "slug": "jump-game",
    "title": "Jump Game",
    "difficulty": "Medium",
    "topic": "Greedy",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "Given an array where each value is the maximum jump length from that position, determine whether the last index is reachable from the first index.",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "From index 0, jumps can reach index 1 and then the final index."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true"
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false"
      }
    ]
  },
  {
    "id": 85,
    "slug": "jump-game-ii",
    "title": "Jump Game II",
    "difficulty": "Medium",
    "topic": "Greedy",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "You are given an input for the Greedy problem \"Jump Game II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 1000",
      "You can always reach the last index."
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 86,
    "slug": "gas-station",
    "title": "Gas Station",
    "difficulty": "Medium",
    "topic": "Greedy",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "Given gas available and travel cost between circular stations, determine the starting station from which a car can complete the full circuit once, or return -1 if impossible.",
    "examples": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3",
        "explanation": "Starting at station 3 provides enough accumulated gas to complete the circle."
      }
    ],
    "constraints": [
      "n == gas.length == cost.length",
      "1 <= n <= 10^5",
      "0 <= gas[i], cost[i] <= 10^4",
      "A unique valid starting index exists if a solution exists."
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3"
      }
    ]
  },
  {
    "id": 87,
    "slug": "partition-labels",
    "title": "Partition Labels",
    "difficulty": "Medium",
    "topic": "Greedy",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Greedy problem \"Partition Labels\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 88,
    "slug": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "topic": "Intervals",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "Given a collection of intervals [start,end], merge every pair of overlapping intervals and return a set of non-overlapping intervals covering the same ranges.",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[9,12]]",
        "output": "[[1,6],[8,12]]",
        "explanation": "[1,3] overlaps [2,6], and [8,10] overlaps [9,12]."
      }
    ],
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    "hints": [
      "Look for the main intervals pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]"
      }
    ]
  },
  {
    "id": 89,
    "slug": "insert-interval",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "topic": "Intervals",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Intervals problem \"Insert Interval\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^5",
      "intervals are sorted by start time and non-overlapping."
    ],
    "hints": [
      "Look for the main intervals pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 90,
    "slug": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "difficulty": "Medium",
    "topic": "Intervals",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Intervals problem \"Non-overlapping Intervals\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= intervals.length <= 10^5",
      "intervals[i].length == 2",
      "-5 * 10^4 <= starti < endi <= 5 * 10^4"
    ],
    "hints": [
      "Look for the main intervals pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 91,
    "slug": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "difficulty": "Medium",
    "topic": "Intervals",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Intervals problem \"Meeting Rooms II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main intervals pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 92,
    "slug": "sort-colors",
    "title": "Sort Colors",
    "difficulty": "Medium",
    "topic": "Arrays",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Arrays problem \"Sort Colors\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 93,
    "slug": "rotate-array",
    "title": "Rotate Array",
    "difficulty": "Medium",
    "topic": "Arrays",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Arrays problem \"Rotate Array\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 94,
    "slug": "find-the-duplicate-number",
    "title": "Find the Duplicate Number",
    "difficulty": "Medium",
    "topic": "Arrays",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Arrays problem \"Find the Duplicate Number\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main arrays pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 95,
    "slug": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "topic": "Matrix",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Matrix problem \"Set Matrix Zeroes\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "m == matrix.length",
      "n == matrix[0].length",
      "1 <= m, n <= 200",
      "-2^31 <= matrix[i][j] <= 2^31 - 1"
    ],
    "hints": [
      "Look for the main matrix pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]"
      }
    ]
  },
  {
    "id": 96,
    "slug": "spiral-matrix",
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "topic": "Matrix",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "You are given an input for the Matrix problem \"Spiral Matrix\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 <= m, n <= 10"
    ],
    "hints": [
      "Look for the main matrix pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 97,
    "slug": "rotate-image",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "topic": "Matrix",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Matrix problem \"Rotate Image\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "n == matrix.length == matrix[i].length",
      "1 <= n <= 20",
      "-1000 <= matrix[i][j] <= 1000"
    ],
    "hints": [
      "Look for the main matrix pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]"
      }
    ]
  },
  {
    "id": 98,
    "slug": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "difficulty": "Medium",
    "topic": "Prefix Sum",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Prefix Sum problem \"Subarray Sum Equals K\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000",
      "-10^7 <= k <= 10^7"
    ],
    "hints": [
      "Look for the main prefix sum pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 99,
    "slug": "continuous-subarray-sum",
    "title": "Continuous Subarray Sum",
    "difficulty": "Medium",
    "topic": "Prefix Sum",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Prefix Sum problem \"Continuous Subarray Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main prefix sum pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 100,
    "slug": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "topic": "Design",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Implement a fixed-capacity least-recently-used cache. get should return a value and mark the key as recently used; put should insert/update a value and evict the least recently used key when capacity is exceeded.",
    "examples": [
      {
        "input": "capacity=2; put(1,1); put(2,2); get(1); put(3,3)",
        "output": "get(1)=1; key 2 is evicted",
        "explanation": "After get(1), key 1 is newer than key 2, so inserting key 3 removes key 2."
      }
    ],
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "capacity=2; put(1,1); put(2,2); get(1); put(3,3)",
        "output": "get(1)=1; key 2 is evicted"
      }
    ]
  },
  {
    "id": 101,
    "slug": "design-twitter",
    "title": "Design Twitter",
    "difficulty": "Medium",
    "topic": "Design",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Design problem \"Design Twitter\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 102,
    "slug": "implement-trie",
    "title": "Implement Trie",
    "difficulty": "Medium",
    "topic": "Trie",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "You are given an input for the Trie problem \"Implement Trie\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= word.length <= 2000",
      "word consists of lowercase English letters.",
      "At most 3 * 10^4 calls will be made to insert, search, and startsWith."
    ],
    "hints": [
      "Look for the main trie pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 103,
    "slug": "word-dictionary",
    "title": "Word Dictionary",
    "difficulty": "Medium",
    "topic": "Trie",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Trie problem \"Word Dictionary\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main trie pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 104,
    "slug": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "topic": "Heap",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "Given an unsorted integer array, return the kth largest value when the values are ordered from largest to smallest. Duplicate values count as separate positions.",
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": "The descending order is [6,5,4,3,2,1], so the second largest value is 5."
      }
    ],
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5"
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4"
      }
    ]
  },
  {
    "id": 105,
    "slug": "k-closest-points-to-origin",
    "title": "K Closest Points to Origin",
    "difficulty": "Medium",
    "topic": "Heap",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "Given points on a 2D plane, return the k points with the smallest Euclidean distance from the origin (0,0). The answer may be in any order.",
    "examples": [
      {
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]",
        "explanation": "The squared distance of [-2,2] is 8, smaller than the squared distance 10 of [1,3]."
      }
    ],
    "constraints": [
      "1 <= points.length <= 10^4",
      "-10^4 <= xi, yi <= 10^4",
      "1 <= k <= points.length"
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]"
      }
    ]
  },
  {
    "id": 106,
    "slug": "task-scheduler",
    "title": "Task Scheduler",
    "difficulty": "Medium",
    "topic": "Heap",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Heap problem \"Task Scheduler\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= tasks.length <= 10^4",
      "tasks[i] is an uppercase English letter.",
      "0 <= n <= 100"
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 107,
    "slug": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "difficulty": "Medium",
    "topic": "Heap",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Heap problem \"Find Median from Data Stream\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 108,
    "slug": "network-delay-time",
    "title": "Network Delay Time",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "Given directed travel times between network nodes, find how long it takes for a signal sent from a starting node to reach every node. Return -1 if some node is unreachable.",
    "examples": [
      {
        "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        "output": "2",
        "explanation": "The signal reaches node 1 at time 1, node 3 at 1, and node 4 at 2."
      }
    ],
    "constraints": [
      "1 <= k <= n <= 100",
      "1 <= times.length <= 6000",
      "1 <= ui, vi <= n",
      "1 <= wi <= 100"
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        "output": "2"
      }
    ]
  },
  {
    "id": 109,
    "slug": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Graphs problem \"Cheapest Flights Within K Stops\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 110,
    "slug": "minimum-height-trees",
    "title": "Minimum Height Trees",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Graphs problem \"Minimum Height Trees\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 111,
    "slug": "accounts-merge",
    "title": "Accounts Merge",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Graphs problem \"Accounts Merge\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 112,
    "slug": "binary-tree-zigzag-level-order-traversal",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Trees problem \"Binary Tree Zigzag Level Order Traversal\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 113,
    "slug": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Trees problem \"Serialize and Deserialize Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 114,
    "slug": "path-sum-iii",
    "title": "Path Sum III",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Trees problem \"Path Sum III\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 115,
    "slug": "house-robber-iii",
    "title": "House Robber III",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Trees problem \"House Robber III\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 116,
    "slug": "asteroid-collision",
    "title": "Asteroid Collision",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "You are given an input for the Stack problem \"Asteroid Collision\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 117,
    "slug": "decode-string",
    "title": "Decode String",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Stack problem \"Decode String\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 118,
    "slug": "online-stock-span",
    "title": "Online Stock Span",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Stack problem \"Online Stock Span\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 119,
    "slug": "next-greater-element-ii",
    "title": "Next Greater Element II",
    "difficulty": "Medium",
    "topic": "Stack",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Stack problem \"Next Greater Element II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 120,
    "slug": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Maximum Product Subarray\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 121,
    "slug": "palindromic-substrings",
    "title": "Palindromic Substrings",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Palindromic Substrings\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 122,
    "slug": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Longest Palindromic Substring\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 123,
    "slug": "sort-list",
    "title": "Sort List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Linked List problem \"Sort List\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 124,
    "slug": "intersection-of-two-linked-lists",
    "title": "Intersection of Two Linked Lists",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "You are given an input for the Linked List problem \"Intersection of Two Linked Lists\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 125,
    "slug": "flatten-a-multilevel-doubly-linked-list",
    "title": "Flatten a Multilevel Doubly Linked List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "You are given an input for the Linked List problem \"Flatten a Multilevel Doubly Linked List\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 126,
    "slug": "reverse-linked-list-ii",
    "title": "Reverse Linked List II",
    "difficulty": "Medium",
    "topic": "Linked List",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Linked List problem \"Reverse Linked List II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 127,
    "slug": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Trees problem \"Binary Tree Maximum Path Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 128,
    "slug": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Trees problem \"Count Good Nodes in Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 129,
    "slug": "all-nodes-distance-k-in-binary-tree",
    "title": "All Nodes Distance K in Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Trees problem \"All Nodes Distance K in Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 130,
    "slug": "populating-next-right-pointers",
    "title": "Populating Next Right Pointers",
    "difficulty": "Medium",
    "topic": "Trees",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Trees problem \"Populating Next Right Pointers\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 131,
    "slug": "word-ladder",
    "title": "Word Ladder",
    "difficulty": "Medium",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "Given a start word, an end word, and a dictionary, find the length of the shortest sequence of valid words where each adjacent pair differs by exactly one character.",
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "One shortest sequence is hit → hot → dot → dog → cog."
      }
    ],
    "constraints": [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "All words have the same length and consist of lowercase English letters."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5"
      }
    ]
  },
  {
    "id": 132,
    "slug": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "topic": "Two Pointers",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "Given non-negative bar heights, calculate how much water remains trapped between the bars after rainfall.",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The bars create several basins whose combined trapped water is 6 units."
      }
    ],
    "constraints": [
      "1 <= height.length <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "hints": [
      "Look for the main two pointers pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ]
  },
  {
    "id": 133,
    "slug": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "Given two sorted arrays, find the median of the combined sorted sequence without explicitly merging the arrays. The expected approach runs in logarithmic time.",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.0",
        "explanation": "The combined order is [1,2,3], whose middle value is 2."
      }
    ],
    "constraints": [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m, n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6"
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.0"
      }
    ]
  },
  {
    "id": 134,
    "slug": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "Given strings s and t, find the shortest substring of s containing every character of t with at least the required frequency. Return an empty string if no such window exists.",
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "BANC contains A, B and C and is the shortest valid window."
      }
    ],
    "constraints": [
      "m == s.length",
      "n == t.length",
      "1 <= m, n <= 10^5",
      "s and t consist of uppercase and lowercase English letters."
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\""
      }
    ]
  },
  {
    "id": 135,
    "slug": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "topic": "Deque",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Deque problem \"Sliding Window Maximum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main deque pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 136,
    "slug": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "topic": "Stack",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "Given bar heights in a histogram, find the largest rectangle that can be formed using consecutive bars.",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "Bars 5 and 6 form a rectangle of width 2 and height 5, giving area 10."
      }
    ],
    "constraints": [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^4"
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10"
      }
    ]
  },
  {
    "id": 137,
    "slug": "maximal-rectangle",
    "title": "Maximal Rectangle",
    "difficulty": "Hard",
    "topic": "Stack",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Stack problem \"Maximal Rectangle\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 138,
    "slug": "regular-expression-matching",
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Regular Expression Matching\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= s.length <= 20",
      "1 <= p.length <= 20",
      "s contains only lowercase English letters",
      "p contains lowercase English letters, '.', and '*'."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 139,
    "slug": "wildcard-matching",
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Wildcard Matching\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 140,
    "slug": "distinct-subsequences",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Distinct Subsequences\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 141,
    "slug": "interleaving-string",
    "title": "Interleaving String",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Interleaving String\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 142,
    "slug": "burst-balloons",
    "title": "Burst Balloons",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Burst Balloons\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 143,
    "slug": "palindrome-partitioning-ii",
    "title": "Palindrome Partitioning II",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Palindrome Partitioning II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 144,
    "slug": "word-break-ii",
    "title": "Word Break II",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Word Break II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 145,
    "slug": "longest-valid-parentheses",
    "title": "Longest Valid Parentheses",
    "difficulty": "Hard",
    "topic": "Stack",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Stack problem \"Longest Valid Parentheses\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 146,
    "slug": "basic-calculator",
    "title": "Basic Calculator",
    "difficulty": "Hard",
    "topic": "Stack",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Stack problem \"Basic Calculator\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main stack pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 147,
    "slug": "reverse-nodes-in-k-group",
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Hard",
    "topic": "Linked List",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Linked List problem \"Reverse Nodes in k-Group\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main linked list pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 148,
    "slug": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "topic": "Heap",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "Given k sorted linked lists, merge them into one sorted linked list.",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "The merged list contains every node from the input lists in ascending order."
      }
    ],
    "constraints": [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= lists[i].length <= 500",
      "-10^4 <= Node.val <= 10^4"
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]"
      }
    ]
  },
  {
    "id": 149,
    "slug": "lfu-cache",
    "title": "LFU Cache",
    "difficulty": "Hard",
    "topic": "Design",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Design problem \"LFU Cache\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= capacity <= 10^4",
      "0 <= key <= 10^5",
      "0 <= value <= 10^9",
      "At most 2 * 10^5 calls will be made."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 150,
    "slug": "all-o-one-data-structure",
    "title": "All O'one Data Structure",
    "difficulty": "Hard",
    "topic": "Design",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "You are given an input for the Design problem \"All O'one Data Structure\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 151,
    "slug": "design-in-memory-file-system",
    "title": "Design In-Memory File System",
    "difficulty": "Hard",
    "topic": "Design",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Design problem \"Design In-Memory File System\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main design pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 152,
    "slug": "recover-binary-search-tree",
    "title": "Recover Binary Search Tree",
    "difficulty": "Hard",
    "topic": "Trees",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "You are given an input for the Trees problem \"Recover Binary Search Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 153,
    "slug": "binary-tree-cameras",
    "title": "Binary Tree Cameras",
    "difficulty": "Hard",
    "topic": "Trees",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "You are given an input for the Trees problem \"Binary Tree Cameras\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 154,
    "slug": "vertical-order-traversal-of-a-binary-tree",
    "title": "Vertical Order Traversal of a Binary Tree",
    "difficulty": "Hard",
    "topic": "Trees",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Trees problem \"Vertical Order Traversal of a Binary Tree\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "0 <= number of nodes <= 10^4",
      "Node values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main trees pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 155,
    "slug": "word-ladder-ii",
    "title": "Word Ladder II",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Graphs problem \"Word Ladder II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 156,
    "slug": "critical-connections-in-a-network",
    "title": "Critical Connections in a Network",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Graphs problem \"Critical Connections in a Network\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 157,
    "slug": "alien-dictionary",
    "title": "Alien Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Graphs problem \"Alien Dictionary\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 158,
    "slug": "reconstruct-itinerary",
    "title": "Reconstruct Itinerary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Graphs problem \"Reconstruct Itinerary\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 159,
    "slug": "minimum-cost-to-connect-all-points",
    "title": "Minimum Cost to Connect All Points",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Graphs problem \"Minimum Cost to Connect All Points\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 160,
    "slug": "swim-in-rising-water",
    "title": "Swim in Rising Water",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Graphs problem \"Swim in Rising Water\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 161,
    "slug": "shortest-path-visiting-all-nodes",
    "title": "Shortest Path Visiting All Nodes",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Graphs problem \"Shortest Path Visiting All Nodes\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 162,
    "slug": "cherry-pickup",
    "title": "Cherry Pickup",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Cherry Pickup\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 163,
    "slug": "scramble-string",
    "title": "Scramble String",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Scramble String\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 164,
    "slug": "n-queens",
    "title": "N-Queens",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "Place n queens on an n×n chessboard so that no two queens share a row, column, or diagonal. Return all distinct valid board arrangements.",
    "examples": [
      {
        "input": "n = 4",
        "output": "[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"] plus the second valid arrangement",
        "explanation": "Each queen occupies a different row and column and no pair lies on the same diagonal."
      }
    ],
    "constraints": [
      "1 <= n <= 9"
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "n = 4",
        "output": "[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"] plus the second valid arrangement"
      }
    ]
  },
  {
    "id": 165,
    "slug": "n-queens-ii",
    "title": "N-Queens II",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Backtracking problem \"N-Queens II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 166,
    "slug": "sudoku-solver",
    "title": "Sudoku Solver",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "Given a partially filled 9×9 Sudoku board, fill every empty cell so each row, column and 3×3 box contains digits 1 through 9 exactly once.",
    "examples": [
      {
        "input": "board = a valid partially filled Sudoku grid",
        "output": "completed valid Sudoku board",
        "explanation": "Use backtracking to place legal digits and undo choices when a contradiction occurs."
      }
    ],
    "constraints": [
      "board.length == 9",
      "board[i].length == 9",
      "board[i][j] is a digit or '.'.",
      "The input board has exactly one solution."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "board = a valid partially filled Sudoku grid",
        "output": "completed valid Sudoku board"
      }
    ]
  },
  {
    "id": 167,
    "slug": "expression-add-operators",
    "title": "Expression Add Operators",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Backtracking problem \"Expression Add Operators\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 168,
    "slug": "remove-invalid-parentheses",
    "title": "Remove Invalid Parentheses",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "You are given an input for the Backtracking problem \"Remove Invalid Parentheses\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 169,
    "slug": "word-search-ii",
    "title": "Word Search II",
    "difficulty": "Hard",
    "topic": "Trie",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "Given a character board and a dictionary of words, return every dictionary word that can be formed by moving horizontally or vertically through adjacent cells without reusing a cell in one word.",
    "examples": [
      {
        "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"oath\",\"eat\"]",
        "explanation": "OATH and EAT can be traced through adjacent cells; PEA and RAIN cannot."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main trie pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"oath\",\"eat\"]"
      }
    ]
  },
  {
    "id": 170,
    "slug": "concatenated-words",
    "title": "Concatenated Words",
    "difficulty": "Hard",
    "topic": "Trie",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "You are given an input for the Trie problem \"Concatenated Words\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main trie pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 171,
    "slug": "maximum-xor-of-two-numbers",
    "title": "Maximum XOR of Two Numbers",
    "difficulty": "Hard",
    "topic": "Trie",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Trie problem \"Maximum XOR of Two Numbers\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main trie pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 172,
    "slug": "count-of-smaller-numbers-after-self",
    "title": "Count of Smaller Numbers After Self",
    "difficulty": "Hard",
    "topic": "Fenwick Tree",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "You are given an input for the Fenwick Tree problem \"Count of Smaller Numbers After Self\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main fenwick tree pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 173,
    "slug": "reverse-pairs",
    "title": "Reverse Pairs",
    "difficulty": "Hard",
    "topic": "Merge Sort",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "You are given an input for the Merge Sort problem \"Reverse Pairs\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main merge sort pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 174,
    "slug": "range-sum-query-mutable",
    "title": "Range Sum Query Mutable",
    "difficulty": "Hard",
    "topic": "Segment Tree",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Segment Tree problem \"Range Sum Query Mutable\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main segment tree pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 175,
    "slug": "falling-squares",
    "title": "Falling Squares",
    "difficulty": "Hard",
    "topic": "Segment Tree",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Segment Tree problem \"Falling Squares\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main segment tree pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 176,
    "slug": "the-skyline-problem",
    "title": "The Skyline Problem",
    "difficulty": "Hard",
    "topic": "Heap",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Heap problem \"The Skyline Problem\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 177,
    "slug": "sliding-window-median",
    "title": "Sliding Window Median",
    "difficulty": "Hard",
    "topic": "Heap",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Heap problem \"Sliding Window Median\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 178,
    "slug": "ipo",
    "title": "IPO",
    "difficulty": "Hard",
    "topic": "Heap",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Heap problem \"IPO\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main heap pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 179,
    "slug": "minimum-number-of-refueling-stops",
    "title": "Minimum Number of Refueling Stops",
    "difficulty": "Hard",
    "topic": "Greedy",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Greedy problem \"Minimum Number of Refueling Stops\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values fit within the 32-bit signed integer range."
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 180,
    "slug": "candy",
    "title": "Candy",
    "difficulty": "Hard",
    "topic": "Greedy",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "Given children ratings, distribute at least one candy to every child while ensuring a child with a higher rating than an adjacent child receives more candy. Minimize the total candies.",
    "examples": [
      {
        "input": "ratings = [1,0,2]",
        "output": "5",
        "explanation": "A valid minimum distribution is [2,1,2], totaling 5."
      }
    ],
    "constraints": [
      "n == ratings.length",
      "1 <= n <= 2 * 10^4",
      "0 <= ratings[i] <= 2 * 10^4"
    ],
    "hints": [
      "Look for the main greedy pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "ratings = [1,0,2]",
        "output": "5"
      }
    ]
  },
  {
    "id": 181,
    "slug": "jump-game-vi",
    "title": "Jump Game VI",
    "difficulty": "Hard",
    "topic": "Deque",
    "companies": [
      "Infosys",
      "Uber",
      "Amazon"
    ],
    "description": "You are given an input for the Deque problem \"Jump Game VI\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main deque pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 182,
    "slug": "minimum-cost-to-cut-a-stick",
    "title": "Minimum Cost to Cut a Stick",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Deloitte",
      "PayPal",
      "Adobe"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Minimum Cost to Cut a Stick\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 183,
    "slug": "optimal-account-balancing",
    "title": "Optimal Account Balancing",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "companies": [
      "Netflix",
      "Amazon",
      "TCS"
    ],
    "description": "You are given an input for the Backtracking problem \"Optimal Account Balancing\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 15",
      "The input satisfies the problem-specific validity conditions."
    ],
    "hints": [
      "Look for the main backtracking pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 184,
    "slug": "traveling-salesman-dp",
    "title": "Traveling Salesman DP",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Morgan Stanley",
      "Adobe",
      "Oracle"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Traveling Salesman DP\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 185,
    "slug": "longest-increasing-path-in-a-matrix",
    "title": "Longest Increasing Path in a Matrix",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Samsung",
      "TCS",
      "Apple"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Longest Increasing Path in a Matrix\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 186,
    "slug": "distinct-subsequences-ii",
    "title": "Distinct Subsequences II",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Microsoft",
      "Oracle",
      "Goldman Sachs"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Distinct Subsequences II\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 187,
    "slug": "minimum-difficulty-of-a-job-schedule",
    "title": "Minimum Difficulty of a Job Schedule",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Walmart",
      "Apple",
      "LinkedIn"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Minimum Difficulty of a Job Schedule\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 188,
    "slug": "shortest-common-supersequence",
    "title": "Shortest Common Supersequence",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Accenture",
      "Goldman Sachs",
      "Google"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Shortest Common Supersequence\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 189,
    "slug": "bus-routes",
    "title": "Bus Routes",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Meta",
      "LinkedIn",
      "Flipkart"
    ],
    "description": "You are given an input for the Graphs problem \"Bus Routes\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 190,
    "slug": "frog-position-after-t-seconds",
    "title": "Frog Position After T Seconds",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Uber",
      "Google",
      "Infosys"
    ],
    "description": "You are given an input for the Graphs problem \"Frog Position After T Seconds\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 191,
    "slug": "count-of-range-sum",
    "title": "Count of Range Sum",
    "difficulty": "Hard",
    "topic": "Merge Sort",
    "companies": [
      "PayPal",
      "Flipkart",
      "Deloitte"
    ],
    "description": "You are given an input for the Merge Sort problem \"Count of Range Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main merge sort pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 192,
    "slug": "text-justification",
    "title": "Text Justification",
    "difficulty": "Hard",
    "topic": "Strings",
    "companies": [
      "Amazon",
      "Infosys",
      "Netflix"
    ],
    "description": "You are given an input for the Strings problem \"Text Justification\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= words.length <= 300",
      "1 <= words[i].length <= 20",
      "1 <= maxWidth <= 100",
      "words[i] consists of English letters."
    ],
    "hints": [
      "Look for the main strings pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 193,
    "slug": "minimum-window-subsequence",
    "title": "Minimum Window Subsequence",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "companies": [
      "Adobe",
      "Deloitte",
      "Morgan Stanley"
    ],
    "description": "You are given an input for the Sliding Window problem \"Minimum Window Subsequence\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main sliding window pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 194,
    "slug": "integer-to-english-words",
    "title": "Integer to English Words",
    "difficulty": "Hard",
    "topic": "Math",
    "companies": [
      "TCS",
      "Netflix",
      "Samsung"
    ],
    "description": "You are given an input for the Math problem \"Integer to English Words\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Input values satisfy the validity conditions of the problem."
    ],
    "hints": [
      "Look for the main math pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 195,
    "slug": "basic-calculator-iv",
    "title": "Basic Calculator IV",
    "difficulty": "Hard",
    "topic": "Parsing",
    "companies": [
      "Oracle",
      "Morgan Stanley",
      "Microsoft"
    ],
    "description": "You are given an input for the Parsing problem \"Basic Calculator IV\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= string length <= 10^5",
      "The input contains only characters allowed by the problem statement."
    ],
    "hints": [
      "Look for the main parsing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 196,
    "slug": "palindrome-pairs",
    "title": "Palindrome Pairs",
    "difficulty": "Hard",
    "topic": "Hashing",
    "companies": [
      "Apple",
      "Samsung",
      "Walmart"
    ],
    "description": "You are given an input for the Hashing problem \"Palindrome Pairs\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^5",
      "Values fit within the 32-bit signed integer range.",
      "The input satisfies the conditions stated in the problem."
    ],
    "hints": [
      "Look for the main hashing pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 197,
    "slug": "split-array-largest-sum",
    "title": "Split Array Largest Sum",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "companies": [
      "Goldman Sachs",
      "Microsoft",
      "Accenture"
    ],
    "description": "You are given an input for the Binary Search problem \"Split Array Largest Sum\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 1000",
      "0 <= nums[i] <= 10^6",
      "1 <= k <= min(50, nums.length)"
    ],
    "hints": [
      "Look for the main binary search pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 198,
    "slug": "shortest-path-in-a-grid-with-obstacles-elimination",
    "title": "Shortest Path in a Grid with Obstacles Elimination",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "LinkedIn",
      "Walmart",
      "Meta"
    ],
    "description": "You are given an input for the Graphs problem \"Shortest Path in a Grid with Obstacles Elimination\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 199,
    "slug": "minimum-number-of-days-to-disconnect-island",
    "title": "Minimum Number of Days to Disconnect Island",
    "difficulty": "Hard",
    "topic": "Graphs",
    "companies": [
      "Google",
      "Accenture",
      "Uber"
    ],
    "description": "You are given an input for the Graphs problem \"Minimum Number of Days to Disconnect Island\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= number of vertices <= 10^4",
      "0 <= number of edges <= 2 * 10^4",
      "Vertex indices are valid for the given graph."
    ],
    "hints": [
      "Look for the main graphs pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  },
  {
    "id": 200,
    "slug": "maximum-profit-in-job-scheduling",
    "title": "Maximum Profit in Job Scheduling",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "companies": [
      "Flipkart",
      "Meta",
      "PayPal"
    ],
    "description": "You are given an input for the Dynamic Programming problem \"Maximum Profit in Job Scheduling\". Solve the problem by applying the required data-structure or algorithmic technique, and return the exact result requested by the problem. Handle boundary cases, repeated values, empty input where allowed, and the largest valid input efficiently. Your solution should satisfy the stated constraints rather than relying on brute force when a better approach is expected.",
    "examples": [
      {
        "input": "Use a valid sample input for this problem",
        "output": "Expected result for the sample input",
        "explanation": "Work through the input step by step using the required algorithm and verify the returned result."
      }
    ],
    "constraints": [
      "1 <= input size <= 10^3",
      "Input values satisfy the bounds stated in the problem."
    ],
    "hints": [
      "Look for the main dynamic programming pattern and avoid unnecessary repeated work.",
      "Write down the required output before coding and identify the key invariant.",
      "Check time and space complexity and test boundary cases."
    ],
    "starterCode": {
      "cpp": "",
      "c": "",
      "java": "",
      "python": "",
      "javascript": ""
    },
    "testCases": [
      {
        "input": "See the example input format in the problem statement.",
        "output": "See the expected output for a valid solution."
      }
    ]
  }
];
