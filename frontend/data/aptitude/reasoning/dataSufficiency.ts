import type { ReasoningQuestion } from "./types";

export const dataSufficiencyQuestions: ReasoningQuestion[] = [
  {
    id: 1,
    difficulty: "Easy",
    question:
      "What is the age of Rohan? Statements: I. Rohan is 5 years older than Amit. II. Amit is 20 years old.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "I gives the relation between their ages and II gives Amit's age. Together, Rohan's age is 25.",
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      "Is Ravi taller than Mohan? Statements: I. Ravi is 175 cm tall. II. Mohan is 168 cm tall.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both heights are required to compare them.",
  },
  {
    id: 3,
    difficulty: "Easy",
    question:
      "What is the value of x? Statements: I. x + 5 = 12. II. x is a positive integer.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly gives x = 7.",
  },
  {
    id: 4,
    difficulty: "Easy",
    question:
      "Is the number N even? Statements: I. N is divisible by 2. II. N is greater than 10.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Divisibility by 2 directly establishes that N is even.",
  },
  {
    id: 5,
    difficulty: "Easy",
    question:
      "What is the total number of students in a class? Statements: I. There are 18 boys. II. There are 12 girls.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Adding 18 boys and 12 girls gives a total of 30 students.",
  },
  {
    id: 6,
    difficulty: "Easy",
    question:
      "Is P older than Q? Statements: I. P is 25 years old. II. Q is 22 years old.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both ages are needed to compare P and Q.",
  },
  {
    id: 7,
    difficulty: "Easy",
    question:
      "What is the length of a rectangle? Statements: I. Its area is 60 cm². II. Its breadth is 5 cm.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Length = area ÷ breadth = 60 ÷ 5 = 12 cm.",
  },
  {
    id: 8,
    difficulty: "Easy",
    question:
      "Is the number 45 divisible by 5? Statements: I. The number ends in 5. II. The number is less than 50.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "A number ending in 5 is divisible by 5.",
  },
  {
    id: 9,
    difficulty: "Easy",
    question:
      "What is the cost of one pen? Statements: I. Five pens cost ₹100. II. All pens have the same price.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Together, the statements show that each pen costs ₹20.",
  },
  {
    id: 10,
    difficulty: "Easy",
    question:
      "Is A north of B? Statements: I. A is north of C. II. C is north of B.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "A is north of C and C is north of B, so A is north of B.",
  },
  {
    id: 11,
    difficulty: "Easy",
    question:
      "What is the average of two numbers? Statements: I. Their sum is 40. II. There are exactly two numbers.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Average = sum ÷ number of values = 40 ÷ 2 = 20.",
  },
  {
    id: 12,
    difficulty: "Easy",
    question:
      "Is Rahul's score higher than 50? Statements: I. Rahul scored 65 marks. II. Rahul passed the examination.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly establishes that Rahul scored more than 50.",
  },
  {
    id: 13,
    difficulty: "Easy",
    question:
      "What is the perimeter of a square? Statements: I. Each side is 8 cm. II. The figure has four equal sides.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Knowing one side of a square is enough. Perimeter = 4 × 8 = 32 cm.",
  },
  {
    id: 14,
    difficulty: "Easy",
    question:
      "Is X greater than Y? Statements: I. X − Y = 7. II. Y = 10.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "X − Y = 7 directly proves X is greater than Y.",
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "What is the distance travelled? Statements: I. A car travels at 60 km/h. II. It travels for 2 hours.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Distance = speed × time = 60 × 2 = 120 km.",
  },
  {
    id: 16,
    difficulty: "Easy",
    question:
      "Is the box empty? Statements: I. The box contains no objects. II. The box is made of cardboard.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly says that the box contains nothing.",
  },
  {
    id: 17,
    difficulty: "Easy",
    question:
      "What is the value of y? Statements: I. 2y = 18. II. y is an integer.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly gives y = 9.",
  },
  {
    id: 18,
    difficulty: "Easy",
    question:
      "Who is heavier, A or B? Statements: I. A weighs 70 kg. II. B weighs 65 kg.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both weights are required for comparison.",
  },
  {
    id: 19,
    difficulty: "Easy",
    question:
      "Is the shop open today? Statements: I. The shop is open from Monday to Saturday. II. Today is Wednesday.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Together they establish that today is a working day for the shop.",
  },
  {
    id: 20,
    difficulty: "Easy",
    question:
      "What is the sum of A and B? Statements: I. A = 15. II. B = 25.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both values are required. A + B = 40.",
  },

  {
    id: 21,
    difficulty: "Medium",
    question:
      "Is n a prime number? Statements: I. n has exactly two positive factors. II. n is greater than 10.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "A number with exactly two positive factors is prime.",
  },
  {
    id: 22,
    difficulty: "Medium",
    question:
      "What is the average age of A, B and C? Statements: I. Their total age is 72 years. II. There are three persons.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Average = 72 ÷ 3 = 24 years.",
  },
  {
    id: 23,
    difficulty: "Medium",
    question:
      "Can a student pass the test? Statements: I. The passing mark is 40. II. The student scored 45 marks.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both the passing requirement and the student's score are needed.",
  },
  {
    id: 24,
    difficulty: "Medium",
    question:
      "What is the ratio of A to B? Statements: I. A = 30. II. B = 15.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both values are needed. The ratio is 30:15 = 2:1.",
  },
  {
    id: 25,
    difficulty: "Medium",
    question:
      "Is x positive? Statements: I. x² = 25. II. x > 0.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 1,
    explanation:
      "Statement II directly establishes that x is positive. Statement I alone allows x = 5 or −5.",
  },
  {
    id: 26,
    difficulty: "Medium",
    question:
      "What is the speed of a train? Statements: I. It covers 300 km. II. It takes 5 hours to cover the distance.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Speed = distance ÷ time = 300 ÷ 5 = 60 km/h.",
  },
  {
    id: 27,
    difficulty: "Medium",
    question:
      "Is the rectangle a square? Statements: I. Its length is 10 cm. II. Its breadth is 10 cm.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "A rectangle with equal length and breadth is a square.",
  },
  {
    id: 28,
    difficulty: "Medium",
    question:
      "What is the profit percentage? Statements: I. Cost price is ₹500. II. Selling price is ₹600.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Profit = 600 − 500 = ₹100, so profit percentage = 100/500 × 100 = 20%.",
  },
  {
    id: 29,
    difficulty: "Medium",
    question:
      "Is A the oldest among A, B and C? Statements: I. A is older than B. II. A is older than C.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "A must be older than both B and C, so A is the oldest.",
  },
  {
    id: 30,
    difficulty: "Medium",
    question:
      "What is the value of x? Statements: I. x + y = 20. II. y = 8.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Together, x + 8 = 20, so x = 12.",
  },
  {
    id: 31,
    difficulty: "Medium",
    question:
      "Is the distance between P and Q greater than 10 km? Statements: I. P is 6 km east of R. II. Q is 8 km north of R.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "P and Q form perpendicular distances of 6 km and 8 km from R. PQ = √(36 + 64) = 10 km, so it is not greater than 10 km.",
  },
  {
    id: 32,
    difficulty: "Medium",
    question:
      "What is the number of students who passed? Statements: I. 80% of 50 students passed. II. The class has 50 students.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "The percentage and total number together give 80% of 50 = 40 students.",
  },
  {
    id: 33,
    difficulty: "Medium",
    question:
      "Is n divisible by 6? Statements: I. n is divisible by 2. II. n is divisible by 3.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "A number divisible by both 2 and 3 is divisible by 6.",
  },
  {
    id: 34,
    difficulty: "Medium",
    question:
      "What is the area of a triangle? Statements: I. Its base is 12 cm. II. Its height is 8 cm.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Area = 1/2 × base × height = 1/2 × 12 × 8 = 48 cm².",
  },
  {
    id: 35,
    difficulty: "Medium",
    question:
      "Is P south of Q? Statements: I. P is south of R. II. R is south of Q.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "If P is south of R and R is south of Q, P is south of Q.",
  },
  {
    id: 36,
    difficulty: "Medium",
    question:
      "What is the final amount after a 10% discount on ₹800? Statements: I. The marked price is ₹800. II. The discount rate is 10%.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both are needed. Discount = ₹80, so final amount = ₹720.",
  },
  {
    id: 37,
    difficulty: "Medium",
    question:
      "Is A heavier than B? Statements: I. A is 20% heavier than C. II. B is 10% heavier than C.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Relative to the same C, A is 120% of C and B is 110% of C, so A is heavier than B.",
  },
  {
    id: 38,
    difficulty: "Medium",
    question:
      "What is the missing number in the sequence 5, 10, 15, __? Statements: I. Each term increases by 5. II. The fourth term is greater than 15.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly gives the next term as 20.",
  },
  {
    id: 39,
    difficulty: "Medium",
    question:
      "Is the average of A and B greater than 50? Statements: I. A = 70. II. B = 40.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Average = (70 + 40) ÷ 2 = 55, which is greater than 50.",
  },
  {
    id: 40,
    difficulty: "Medium",
    question:
      "Can a square have a perimeter of 40 cm? Statements: I. Each side of the square is 10 cm. II. A square has four equal sides.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Knowing the side is 10 cm is enough. Perimeter = 4 × 10 = 40 cm.",
  },

  {
    id: 41,
    difficulty: "Hard",
    question:
      "Is x greater than y? Statements: I. x² > y². II. x and y are both positive.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Statement I alone is insufficient because signs are unknown. With both positive, x² > y² implies x > y.",
  },
  {
    id: 42,
    difficulty: "Hard",
    question:
      "Is integer n divisible by 12? Statements: I. n is divisible by 3. II. n is divisible by 4.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "A number divisible by both 3 and 4 is divisible by their LCM, 12.",
  },
  {
    id: 43,
    difficulty: "Hard",
    question:
      "What is the value of x? Statements: I. x + y = 15. II. x − y = 5.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Adding the equations gives 2x = 20, so x = 10.",
  },
  {
    id: 44,
    difficulty: "Hard",
    question:
      "Is triangle ABC right-angled? Statements: I. Its sides are 3 cm, 4 cm and 5 cm. II. The square of the longest side equals the sum of the squares of the other two sides.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 3,
    explanation:
      "Each statement individually is sufficient to establish a right triangle, so the correct standard choice is 'Either statement alone is sufficient'. Since that option is not listed, neither of the listed combination choices exactly matches the standard data-sufficiency format.",
  },
  {
    id: 45,
    difficulty: "Hard",
    question:
      "What is the value of a/b? Statements: I. a + b = 20. II. a − b = 4.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Together, a = 12 and b = 8, so a/b = 3/2.",
  },
  {
    id: 46,
    difficulty: "Hard",
    question:
      "Is n an even number? Statements: I. n² is even. II. n is a positive integer.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "If n² is even, n itself must be even.",
  },
  {
    id: 47,
    difficulty: "Hard",
    question:
      "What is the value of x/y? Statements: I. x = 3y. II. x + y = 20.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Statement I directly gives x/y = 3, so statement II is unnecessary.",
  },
  {
    id: 48,
    difficulty: "Hard",
    question:
      "Is the average of five numbers greater than 20? Statements: I. Their sum is 110. II. The numbers are all positive.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 0,
    explanation:
      "Average = 110 ÷ 5 = 22, so statement I alone is sufficient.",
  },
  {
    id: 49,
    difficulty: "Hard",
    question:
      "Is x divisible by 18? Statements: I. x is divisible by 6. II. x is divisible by 9.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Divisibility by both 6 and 9 guarantees divisibility by LCM(6,9) = 18.",
  },
  {
    id: 50,
    difficulty: "Hard",
    question:
      "What is the smaller root of x² − 5x + 6 = 0? Statements: I. The roots are positive integers. II. The product of the roots is 6.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 3,
    explanation:
      "The original equation itself determines the roots as 2 and 3, so neither listed statement is needed. Therefore, the information in the statements is not required to solve it.",
  },
  {
    id: 51,
    difficulty: "Hard",
    question:
      "Is P older than Q? Statements: I. P is twice as old as R. II. Q is 10 years older than R.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Let R = r. Then P = 2r and Q = r + 10. Comparing them requires knowing r, so the two statements alone do not always determine the answer.",
  },
  {
    id: 52,
    difficulty: "Hard",
    question:
      "Is the integer n greater than 10? Statements: I. n² > 100. II. n is positive.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "n² > 100 gives n > 10 or n < −10. Since n is positive, n must be greater than 10.",
  },
  {
    id: 53,
    difficulty: "Hard",
    question:
      "What is the area of a circle? Statements: I. Its radius is 7 cm. II. Its diameter is 14 cm.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 3,
    explanation:
      "Either the radius or the diameter alone determines the area.",
  },
  {
    id: 54,
    difficulty: "Hard",
    question:
      "Is A's score higher than B's? Statements: I. A scored 20% more than C. II. B scored 10% more than C.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Both statements compare A and B with the same reference score C. A is 120% of C while B is 110% of C.",
  },
  {
    id: 55,
    difficulty: "Hard",
    question:
      "Is x/y greater than 1? Statements: I. x > y. II. y is positive.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "If y is positive and x > y, then x/y > 1.",
  },
  {
    id: 56,
    difficulty: "Hard",
    question:
      "What is the percentage increase from A to B? Statements: I. A = 200. II. B = 250.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Percentage increase = (250 − 200) / 200 × 100 = 25%.",
  },
  {
    id: 57,
    difficulty: "Hard",
    question:
      "Is the quadrilateral a rectangle? Statements: I. Its opposite sides are equal. II. Each angle is 90 degrees.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 1,
    explanation:
      "A quadrilateral with all four right angles is a rectangle, so statement II alone is sufficient.",
  },
  {
    id: 58,
    difficulty: "Hard",
    question:
      "What is the value of x? Statements: I. x is a positive integer. II. x² = 49.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "x² = 49 gives x = ±7. The positive condition selects x = 7.",
  },
  {
    id: 59,
    difficulty: "Hard",
    question:
      "Is the distance between A and B exactly 13 km? Statements: I. A is 5 km east of C. II. B is 12 km north of C.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "Together the positions form a right triangle. AB = √(5² + 12²) = 13 km.",
  },
  {
    id: 60,
    difficulty: "Hard",
    question:
      "Is x greater than 5? Statements: I. x² > 25. II. x is positive.",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both statements together are sufficient",
      "Either statement alone is sufficient",
    ],
    answer: 2,
    explanation:
      "x² > 25 gives x > 5 or x < −5. Since x is positive, x must be greater than 5.",
  },
];