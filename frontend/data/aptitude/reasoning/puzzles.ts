import type { ReasoningQuestion } from "./types";

export const puzzlesQuestions: ReasoningQuestion[] = [
  {
    id: 1,
    difficulty: "Easy",
    question:
      "Five people A, B, C, D and E sit in a row. A is between C and B, and D is to the right of B. Who sits between C and B?",
    options: ["A", "B", "C", "D"],
    answer: 0,
    explanation: "The relevant order is C-A-B-D, so A sits between C and B.",
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      "Six people P, Q, R, S, T and U stand in a line. T is before P, P before Q, Q before R, R before S and S before U. Who is first?",
    options: ["P", "Q", "T", "U"],
    answer: 2,
    explanation: "The complete order is T-P-Q-R-S-U, so T is first.",
  },
  {
    id: 3,
    difficulty: "Easy",
    question:
      "Ravi is taller than Mohan, Mohan taller than Sohan, and Sohan taller than Amit. Who is shortest?",
    options: ["Ravi", "Mohan", "Sohan", "Amit"],
    answer: 3,
    explanation: "Ravi > Mohan > Sohan > Amit, so Amit is shortest.",
  },
  {
    id: 4,
    difficulty: "Easy",
    question:
      "A person walks 5 km north and then 3 km east. In which direction is the person from the starting point?",
    options: ["North-East", "South-East", "North-West", "South-West"],
    answer: 0,
    explanation: "Moving north and then east places the person to the North-East.",
  },
  {
    id: 5,
    difficulty: "Easy",
    question:
      "Riya is 7th from the top and 14th from the bottom. How many students are in the class?",
    options: ["19", "20", "21", "22"],
    answer: 1,
    explanation: "Total = 7 + 14 - 1 = 20 students.",
  },
  {
    id: 6,
    difficulty: "Easy",
    question:
      "Four books W, X, Y and Z are arranged from left to right. X is immediately right of W and Y is immediately right of X. Which book is third?",
    options: ["W", "X", "Y", "Z"],
    answer: 2,
    explanation: "The order is W-X-Y-Z, so Y is third.",
  },
  {
    id: 7,
    difficulty: "Easy",
    question:
      "A is brother of B. B is sister of C. C is father of D. How is A related to D?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    answer: 2,
    explanation: "A is the brother of D's father C, so A is D's uncle.",
  },
  {
    id: 8,
    difficulty: "Easy",
    question:
      "A person faces East, turns left, then turns left again. Which direction is faced now?",
    options: ["East", "West", "North", "South"],
    answer: 1,
    explanation: "East → North → West.",
  },
  {
    id: 9,
    difficulty: "Easy",
    question:
      "A is above B, B is above C, and C is above D. Which person is lowest?",
    options: ["A", "B", "C", "D"],
    answer: 3,
    explanation: "The order from top to bottom is A-B-C-D.",
  },
  {
    id: 10,
    difficulty: "Easy",
    question:
      "P is ahead of Q, Q is ahead of R, and S is behind R. Who is immediately ahead of R?",
    options: ["P", "Q", "S", "T"],
    answer: 1,
    explanation: "The order around R is Q-R-S, so Q is immediately ahead of R.",
  },
  {
    id: 11,
    difficulty: "Easy",
    question:
      "Which is different from the others?",
    options: ["Apple", "Mango", "Potato", "Banana"],
    answer: 2,
    explanation: "Potato is not a fruit.",
  },
  {
    id: 12,
    difficulty: "Easy",
    question:
      "If CAT is coded as DBU by moving every letter one step forward, how is DOG coded?",
    options: ["EPH", "EOG", "DPH", "FPI"],
    answer: 0,
    explanation: "D→E, O→P and G→H, giving EPH.",
  },
  {
    id: 13,
    difficulty: "Easy",
    question:
      "If today is Monday, what day will it be after 10 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: 1,
    explanation: "10 days = 7 + 3 days. Monday + 3 days = Thursday.",
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "Find the next number: 3, 6, 12, 24, ?",
    options: ["36", "42", "48", "54"],
    answer: 2,
    explanation: "Each term is doubled, so 24 × 2 = 48.",
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "A person walks 4 km south and then 4 km east. What is the shortest distance from the starting point?",
    options: ["4 km", "6 km", "4√2 km", "8 km"],
    answer: 2,
    explanation: "Using Pythagoras: √(4² + 4²) = 4√2 km.",
  },
  {
    id: 16,
    difficulty: "Easy",
    question:
      "A scored more than B but less than C. D scored less than B. Who scored highest?",
    options: ["A", "B", "C", "D"],
    answer: 2,
    explanation: "C > A > B > D, so C scored highest.",
  },
  {
    id: 17,
    difficulty: "Easy",
    question:
      "If PEN is coded as QFO, how is BOOK coded?",
    options: ["CPPL", "CQQM", "APPL", "CPPM"],
    answer: 0,
    explanation: "Every letter moves one position forward: B→C, O→P, O→P, K→L.",
  },
  {
    id: 18,
    difficulty: "Easy",
    question:
      "At exactly 3:00, what is the angle between the clock hands?",
    options: ["60°", "90°", "120°", "180°"],
    answer: 1,
    explanation: "At 3:00 the hour and minute hands are perpendicular, making 90°.",
  },
  {
    id: 19,
    difficulty: "Easy",
    question:
      "X is at one end and Y at the other end of a row. Z sits somewhere between them. Who cannot occupy an end?",
    options: ["X", "Y", "Z", "Both X and Y"],
    answer: 2,
    explanation: "X and Y already occupy both ends, so Z cannot occupy an end.",
  },
  {
    id: 20,
    difficulty: "Easy",
    question:
      "A is older than B, C is older than A, and D is younger than B. Who is youngest?",
    options: ["A", "B", "C", "D"],
    answer: 3,
    explanation: "C > A > B > D, so D is youngest.",
  },

  {
    id: 21,
    difficulty: "Medium",
    question:
      "Which order is possible if P is before Q, R is after S, and T is before P?",
    options: ["P-Q-T-S-R", "T-P-Q-S-R", "Q-P-T-S-R", "S-R-Q-P-T"],
    answer: 1,
    explanation: "T-P-Q and S-R satisfy all the given conditions.",
  },
  {
    id: 22,
    difficulty: "Medium",
    question:
      "A, B, C, D and E occupy floors 1 to 5. D is on floor 5, E is above A, A is above C, and C is above B. Who is on floor 3?",
    options: ["A", "B", "C", "E"],
    answer: 0,
    explanation: "From bottom to top the order is B-C-A-E-D. Therefore A is on floor 3.",
  },
  {
    id: 23,
    difficulty: "Medium",
    question:
      "Six runners T, R, P, Q, S and U finish in that order according to T before R, R before P, P before Q, Q before S and S before U. Who finishes third?",
    options: ["R", "P", "Q", "S"],
    answer: 1,
    explanation: "The order is T-R-P-Q-S-U, so P finishes third.",
  },
  {
    id: 24,
    difficulty: "Medium",
    question:
      "Five people A-E sit in a row. B is immediately left of C, D is at the right end, A is not at an end, and E is not next to D. Who can be first?",
    options: ["A", "B", "C", "D"],
    answer: 1,
    explanation: "B-C can occupy positions 1 and 2 while D is at position 5.",
  },
  {
    id: 25,
    difficulty: "Medium",
    question:
      "P is mother of Q; Q is brother of R; R is mother of T. How is P related to T?",
    options: ["Mother", "Grandmother", "Aunt", "Sister"],
    answer: 1,
    explanation: "P is the mother of Q and R, while R is T's mother. Therefore P is T's grandmother.",
  },
  {
    id: 26,
    difficulty: "Medium",
    question:
      "Five tasks P, Q, R, S and T must be arranged. P is before Q, T is before P, and S is before R. Which task can be first?",
    options: ["Q", "R", "T", "P"],
    answer: 2,
    explanation: "T can be first without violating any condition.",
  },
  {
    id: 27,
    difficulty: "Medium",
    question:
      "Seven students A-G sit in a row. C is third, F is immediately after C, G is at the right end, and A is left of C. Which can be second?",
    options: ["A", "B", "G", "F"],
    answer: 0,
    explanation: "A can occupy position 2 while C is position 3 and F position 4.",
  },
  {
    id: 28,
    difficulty: "Medium",
    question:
      "A is older than B, C is younger than D but older than E, and F is older than A. Who is definitely older than A?",
    options: ["B", "C", "D", "F"],
    answer: 3,
    explanation: "F is explicitly stated to be older than A.",
  },
  {
    id: 29,
    difficulty: "Medium",
    question:
      "Five houses are numbered 1-5. Red is immediately left of Blue, Green is right of Blue, and Yellow is at house 1. Which can be at house 3?",
    options: ["Yellow", "Red", "Blue", "Green"],
    answer: 2,
    explanation: "Yellow-Red-Blue-Green is a valid arrangement, placing Blue at 3.",
  },
  {
    id: 30,
    difficulty: "Medium",
    question:
      "P is before Q; Q is before R; S is after R; and T is before P. Who must be before R?",
    options: ["P and Q", "S only", "T only", "P, Q and T"],
    answer: 3,
    explanation: "The order is T-P-Q-R-S, so T, P and Q are all before R.",
  },
  {
    id: 31,
    difficulty: "Medium",
    question:
      "Six boxes A-F are stacked. A is above B, B above C, D above E, and E above F. Which relation is certain?",
    options: ["A is above C", "F is above D", "C is above A", "E is above D"],
    answer: 0,
    explanation: "A is above B and B is above C, so A is definitely above C.",
  },
  {
    id: 32,
    difficulty: "Medium",
    question:
      "A meeting runs Monday-Friday. P is on Monday, Q is immediately after P, R is on Friday, and S is before R. Which day is Q?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    answer: 1,
    explanation: "Q is immediately after Monday, so Q is on Tuesday.",
  },
  {
    id: 33,
    difficulty: "Medium",
    question:
      "Four people W, X, Y and Z have different heights. W is taller than X, Y is taller than W, and Z is shorter than X. Who is tallest?",
    options: ["W", "X", "Y", "Z"],
    answer: 2,
    explanation: "Y > W > X > Z, so Y is tallest.",
  },
  {
    id: 34,
    difficulty: "Medium",
    question:
      "A queue has A before B, B before C, and D after C. Which statement must be true?",
    options: ["D before A", "A before C", "C before B", "B after D"],
    answer: 1,
    explanation: "The order A-B-C-D means A is definitely before C.",
  },
  {
    id: 35,
    difficulty: "Medium",
    question:
      "A person faces North, turns right, then right, then left. Which direction is faced now?",
    options: ["North", "South", "East", "West"],
    answer: 2,
    explanation: "North → East → South → East.",
  },
  {
    id: 36,
    difficulty: "Medium",
    question:
      "Five books A-E are arranged left to right. A is left of B, C is right of D, and E is at the extreme right. Which pair can be first and second?",
    options: ["A-B", "B-A", "C-D", "E-A"],
    answer: 0,
    explanation: "A-B satisfies A being to the left of B and can occupy the first two positions.",
  },
  {
    id: 37,
    difficulty: "Medium",
    question:
      "Seven people P-V: P is before Q, R before S, T after Q, U before R, and V after S. Which can be first?",
    options: ["P", "T", "V", "S"],
    answer: 0,
    explanation: "P can be first while all other conditions remain satisfied.",
  },
  {
    id: 38,
    difficulty: "Medium",
    question:
      "A is sister of B. B is father of C. How is A related to C?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    answer: 1,
    explanation: "A is the sister of C's father, so A is C's aunt.",
  },
  {
    id: 39,
    difficulty: "Medium",
    question:
      "Six floors are occupied by A-F. F is on top, A is above B, C is above D, and E is below B. Which person can be on the bottom floor?",
    options: ["A", "B", "C", "D"],
    answer: 3,
    explanation: "D can be below C and occupy the bottom floor.",
  },
  {
    id: 40,
    difficulty: "Medium",
    question:
      "Five students have different marks. P > Q, R > P, S < Q and T > R. Who has the highest marks?",
    options: ["P", "R", "S", "T"],
    answer: 3,
    explanation: "T > R > P > Q > S, so T has the highest marks.",
  },

  {
    id: 41,
    difficulty: "Hard",
    question:
      "Tasks A-F must be arranged. A is before B, B before C, D before E, and E before F. Which task can be first?",
    options: ["C", "F", "B", "A"],
    answer: 3,
    explanation: "A can start the sequence without violating any condition.",
  },
  {
    id: 42,
    difficulty: "Hard",
    question:
      "Four teams P, Q, R and S play matches. P beats Q and R beats S. Which result is not determined?",
    options: ["P-Q", "R-S", "P-R", "Q-S"],
    answer: 2,
    explanation: "The results P-Q and R-S are given; the result P-R is not specified.",
  },
  {
    id: 43,
    difficulty: "Hard",
    question:
      "Eight seats are in a row. A is in seat 3, B in seat 5, C in seat 8, and D is immediately before E. Which seat can D occupy?",
    options: ["1", "4", "6", "7"],
    answer: 0,
    explanation: "D-E can occupy seats 1-2 without conflicting with A, B or C.",
  },
  {
    id: 44,
    difficulty: "Hard",
    question:
      "Six friends A-F sit in a row. A is immediately before B, C is immediately after D, E is first and F is last. Which pair is consecutive?",
    options: ["A-B", "B-C", "C-E", "D-F"],
    answer: 0,
    explanation: "A is explicitly immediately before B.",
  },
  {
    id: 45,
    difficulty: "Hard",
    question:
      "Five lectures are scheduled. P is before Q, R is immediately after S, and T is after Q. If S is at 2 PM, when is R?",
    options: ["1 PM", "2 PM", "3 PM", "4 PM"],
    answer: 2,
    explanation: "R is immediately after S, so R is at 3 PM.",
  },
  {
    id: 46,
    difficulty: "Hard",
    question:
      "A is father of B, B is mother of C, and C is brother of D. How is A related to D?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    answer: 1,
    explanation: "A is B's father and B is D's mother, so A is D's grandfather.",
  },
  {
    id: 47,
    difficulty: "Hard",
    question:
      "Seven ranks are arranged with A above B, C above A, D below B, E above C, and F below D. Who is highest among A, B, C and E?",
    options: ["A", "C", "D", "E"],
    answer: 3,
    explanation: "E > C > A > B, so E is highest among the listed people.",
  },
  {
    id: 48,
    difficulty: "Hard",
    question:
      "A person walks 6 km east, 2 km north, and then 6 km west. Where is the person relative to the starting point?",
    options: ["2 km north", "2 km south", "6 km east", "At the starting point"],
    answer: 0,
    explanation: "The 6 km east and 6 km west movements cancel, leaving 2 km north.",
  },
  {
    id: 49,
    difficulty: "Hard",
    question:
      "Five people A-E sit around a circular table. A is clockwise of B, C is clockwise of A, and D is opposite B. Who occupies the remaining seat?",
    options: ["A", "B", "C", "E"],
    answer: 3,
    explanation: "A, B, C and D occupy four positions, leaving E for the remaining position.",
  },
  {
    id: 50,
    difficulty: "Hard",
    question:
      "Six tasks A-F must be completed. A is before C, B before D, C before E, and D before F. Which task can be first?",
    options: ["A", "C", "E", "F"],
    answer: 0,
    explanation: "A can be first while satisfying A-C-E and B-D-F.",
  },
  {
    id: 51,
    difficulty: "Hard",
    question:
      "H is above C, C above A, A above B, B above F, and F above G. D has no fixed relation. Who is highest among H, C, A and B?",
    options: ["H", "C", "A", "B"],
    answer: 0,
    explanation: "H > C > A > B, so H is highest.",
  },
  {
    id: 52,
    difficulty: "Hard",
    question:
      "A road connects P to Q, Q to S, and S to U. What is the minimum number of roads needed to travel from P to U?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "The shortest route is P-Q-S-U, which uses 3 roads.",
  },
  {
    id: 53,
    difficulty: "Hard",
    question:
      "E is immediately before A, A is before C, and D is before B. Who must be before A?",
    options: ["B", "C", "D", "E"],
    answer: 3,
    explanation: "E is immediately before A, so E must be before A.",
  },
  {
    id: 54,
    difficulty: "Hard",
    question:
      "A is first, B is second, C is third, and D and E occupy fourth and fifth. Who is definitely third?",
    options: ["A", "B", "C", "D"],
    answer: 2,
    explanation: "C is explicitly fixed in the third position.",
  },
  {
    id: 55,
    difficulty: "Hard",
    question:
      "P is before Q, Q before R, R before S, and T before P. Which person is definitely before S?",
    options: ["P and Q", "T only", "R only", "P, Q, R and T"],
    answer: 3,
    explanation: "The order is T-P-Q-R-S, so T, P, Q and R are all before S.",
  },
  {
    id: 56,
    difficulty: "Hard",
    question:
      "A is 5th from the left in a row of 9 people. What is A's position from the right?",
    options: ["4th", "5th", "6th", "7th"],
    answer: 1,
    explanation: "Position from right = 9 - 5 + 1 = 5th.",
  },
  {
    id: 57,
    difficulty: "Hard",
    question:
      "A, B, C, D, E and F sit in a row. A is third, B is fifth, C is sixth, and D is immediately before E. Who can be first?",
    options: ["D", "E", "F", "C"],
    answer: 0,
    explanation: "D-E can occupy positions 1-2, so D can be first.",
  },
  {
    id: 58,
    difficulty: "Hard",
    question:
      "P, Q, R, S, T and U sit in a row. P is before Q, R is immediately after S, T is before P, and U is after Q. Who can be last?",
    options: ["T", "P", "Q", "U"],
    answer: 3,
    explanation: "U can be placed last while satisfying all the conditions.",
  },
  {
    id: 59,
    difficulty: "Hard",
    question:
      "A is before B, B before C, C before D, and E before A. Which person is definitely first among A, B, C, D and E?",
    options: ["A", "B", "D", "E"],
    answer: 3,
    explanation: "E-A-B-C-D, so E is definitely first.",
  },
  {
    id: 60,
    difficulty: "Hard",
    question:
      "Six people P, Q, R, S, T and U stand in a line. T is before P, P before Q, S before R, and R before U. Which person can be first?",
    options: ["P", "Q", "T", "U"],
    answer: 2,
    explanation: "T can be first while T-P-Q and S-R-U remain valid.",
  },
];