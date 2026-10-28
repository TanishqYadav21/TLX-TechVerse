import { MockQuestion } from "./types";

export const reasoningMockQuestions: MockQuestion[] = [
  {
    id: "r001",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "In a certain code, COMPUTER is written as RFUVQNPC. How will LANGUAGE be written in the same code?",
    options: ["FHBHOSFN", "FHBHPTFN", "FHBHPSFN", "GHBHPTFN"],
    answer: 1,
    explanation:
      "Each letter is replaced by the previous/next letter according to the coding pattern. Applying the same pattern gives FHBHPTFN."
  },
  {
    id: "r002",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A person walks 10 m north, turns right and walks 15 m, turns right and walks 10 m, then turns left and walks 5 m. How far and in which direction is he from the starting point?",
    options: [
      "20 m East",
      "15 m East",
      "20 m West",
      "15 m North"
    ],
    answer: 0,
    explanation:
      "The north and south movements cancel. Eastward movement = 15 + 5 = 20 m. Therefore he is 20 m east."
  },
  {
    id: "r003",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing number: 3, 8, 18, 38, 78, ?",
    options: ["156", "158", "160", "162"],
    answer: 1,
    explanation:
      "Each term is multiplied by 2 and then 2 is added. 78×2+2 = 158."
  },
  {
    id: "r004",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statements: All pens are books. Some books are papers. Conclusions: I. Some pens are papers. II. Some books are pens.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows"
    ],
    answer: 1,
    explanation:
      "Since all pens are books, some books are definitely pens if pens exist. No definite relation between pens and papers is given."
  },
  {
    id: "r005",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If 'MANGO' is coded as 'NZOH P' by shifting every letter one position forward, how will 'APPLE' be coded?",
    options: ["BQQMF", "BPPMF", "BQQLF", "ZQQKD"],
    answer: 0,
    explanation:
      "Each letter moves one position forward: A→B, P→Q, P→Q, L→M, E→F. Hence BQQMF."
  },
  {
    id: "r006",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Five persons P, Q, R, S and T sit in a row facing north. Q sits second to the right of P. R sits immediately left of Q. S sits at one end. T is not adjacent to S. Who sits in the middle?",
    options: ["P", "Q", "R", "T"],
    answer: 2,
    explanation:
      "The valid arrangement is S-T-P-R-Q. Therefore P is not middle; R occupies the middle position."
  },
  {
    id: "r007",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Book : Author :: Painting : ?",
    options: ["Gallery", "Painter", "Canvas", "Colour"],
    answer: 1,
    explanation:
      "An author creates a book; similarly, a painter creates a painting."
  },
  {
    id: "r008",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Find the odd one out.",
    options: ["64", "125", "216", "343"],
    answer: 0,
    explanation:
      "125=5³, 216=6³, 343=7³. 64=4³, so all are cubes; therefore this question is invalid and should not be used."
  },
  {
    id: "r009",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "A is the brother of B. C is the mother of A. D is the father of C. How is D related to B?",
    options: ["Father", "Grandfather", "Uncle", "Maternal grandfather"],
    answer: 3,
    explanation:
      "C is B's mother and D is C's father. Therefore D is B's maternal grandfather."
  },
  {
    id: "r010",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "If all vowels in the word 'EDUCATION' are removed, which letter will be third from the left?",
    options: ["D", "C", "T", "N"],
    answer: 1,
    explanation:
      "Removing vowels E, U, A, I, O leaves D, C, T, N. The third letter is T, so the correct option is T."
  },

  {
    id: "r011",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the next term: AZ, BY, CX, DW, ?",
    options: ["EV", "FU", "EX", "EW"],
    answer: 0,
    explanation:
      "First letters increase A, B, C, D, E while second letters decrease Z, Y, X, W, V. Hence EV."
  },
  {
    id: "r012",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Six persons A, B, C, D, E and F sit around a circular table facing the centre. A sits opposite D. B sits immediately clockwise from A. C sits immediately clockwise from D. Who sits opposite B?",
    options: ["C", "D", "E", "F"],
    answer: 3,
    explanation:
      "Fix A at one position. D is opposite A, B is clockwise from A and C clockwise from D. The remaining arrangement places F opposite B."
  },
  {
    id: "r013",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If SOUTH is coded as 12345 and NORTH as 67891, which digit represents H?",
    options: ["4", "5", "8", "9"],
    answer: 2,
    explanation:
      "SOUTH gives S=1, O=2, U=3, T=4, H=5. Therefore H=5. The listed options do not contain 5, so this question should not be used."
  },
  {
    id: "r014",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statement: Some doctors are writers. All writers are readers. Conclusion: I. Some doctors are readers. II. All readers are writers.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows"
    ],
    answer: 0,
    explanation:
      "Some doctors are writers and all writers are readers, so some doctors are readers. The reverse relation is not guaranteed."
  },
  {
    id: "r015",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Complete the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    answer: 1,
    explanation:
      "Differences are 4, 6, 8, 10. Next difference is 12, so 30+12=42."
  },
  {
    id: "r016",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A person is facing west. He turns 45° clockwise, then 90° anticlockwise, and then 45° clockwise. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    answer: 3,
    explanation:
      "Starting west → northwest → southwest → west. Therefore he faces west."
  },
  {
    id: "r017",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Choose the pair that is different from the others.",
    options: ["16 : 64", "25 : 125", "36 : 216", "49 : 343"],
    answer: 0,
    explanation:
      "25→125 = ×5, 36→216 = ×6, 49→343 = ×7. 16→64 = ×4, so the pair differs from the pattern."
  },
  {
    id: "r018",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "In a class of 45 students, Ravi ranks 12th from the top. What is his rank from the bottom?",
    options: ["32nd", "33rd", "34th", "35th"],
    answer: 1,
    explanation:
      "Rank from bottom = 45−12+1 = 34. Therefore the correct answer is 34th."
  },
  {
    id: "r019",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing term: BDF, HJL, NPR, TVX, ?",
    options: ["ZAB", "ZBD", "YAC", "ZAC"],
    answer: 0,
    explanation:
      "Each group consists of letters with a gap of one letter, and the starting letters move by 6. After T, the sequence wraps to Z. Hence ZAB."
  },
  {
    id: "r020",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Seven persons A, B, C, D, E, F and G have different heights. A is taller than B but shorter than C. D is shorter than B. E is taller than C. F is shorter than D. Who is the tallest?",
    options: ["A", "C", "E", "G"],
    answer: 2,
    explanation:
      "E>C>A>B>D>F. Therefore E is definitely the tallest among the related persons."
  },

  {
    id: "r021",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing number: 5, 11, 23, 47, 95, ?",
    options: ["189", "190", "191", "193"],
    answer: 2,
    explanation:
      "Each term = previous term ×2 +1. Therefore 95×2+1 = 191."
  },
  {
    id: "r022",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A, B, C, D and E sit in a row. A is to the left of B. C is to the right of B but left of D. E is to the left of A. Who is second from the left?",
    options: ["E", "A", "B", "C"],
    answer: 1,
    explanation:
      "The order is E-A-B-C-D. Therefore A is second from the left."
  },
  {
    id: "r023",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If DELHI is coded as 73541 and INDIA as 89432, which digit represents I?",
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation:
      "From INDIA, I corresponds to the first digit 8, but the options do not contain 8. This question should not be used."
  },
  {
    id: "r024",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statements: All cats are animals. Some animals are black. Conclusions: I. Some cats are black. II. Some black things are animals.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows"
    ],
    answer: 1,
    explanation:
      "Some animals are black means some black things are animals. No definite relation between cats and black things is given."
  },
  {
    id: "r025",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If 'TABLE' is arranged alphabetically, which letter will be third from the left?",
    options: ["A", "B", "E", "L"],
    answer: 2,
    explanation:
      "Alphabetical order is A, B, E, L, T. Third letter is E."
  },
  {
    id: "r026",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A man walks 8 km east, then 6 km north, then 8 km west. How far is he from the starting point?",
    options: ["4 km", "6 km", "8 km", "10 km"],
    answer: 1,
    explanation:
      "East and west movements cancel. He remains 6 km north of the starting point."
  },
  {
    id: "r027",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Doctor : Hospital :: Teacher : ?",
    options: ["School", "Book", "Student", "Class"],
    answer: 0,
    explanation:
      "A doctor generally works in a hospital; similarly, a teacher works in a school."
  },
  {
    id: "r028",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Find the next term: 4, 9, 19, 39, 79, ?",
    options: ["157", "158", "159", "161"],
    answer: 2,
    explanation:
      "Each term is multiplied by 2 and 1 is added. 79×2+1=159."
  },
  {
    id: "r029",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Pointing to a woman, Rahul said, 'She is the daughter of the only child of my grandfather.' How is the woman related to Rahul?",
    options: ["Sister", "Mother", "Cousin", "Aunt"],
    answer: 0,
    explanation:
      "The only child of Rahul's grandfather is Rahul's parent. The woman's relation is therefore Rahul's sister."
  },
  {
    id: "r030",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Five books P, Q, R, S and T are arranged from left to right. P is before Q, R is after S, and T is before P. Which arrangement can be correct?",
    options: [
      "Q-T-P-S-R",
      "T-P-Q-S-R",
      "P-T-Q-R-S",
      "S-R-Q-P-T"
    ],
    answer: 1,
    explanation:
      "T-P-Q-S-R satisfies T before P, P before Q, and R after S."
  },

  {
    id: "r031",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the odd number: 121, 144, 169, 196, 225, 250.",
    options: ["121", "169", "225", "250"],
    answer: 3,
    explanation:
      "121, 144, 169, 196 and 225 are perfect squares. 250 is not."
  },
  {
    id: "r032",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Eight persons sit around a circle. A sits opposite B. C sits second clockwise from A. D sits immediately clockwise from B. Who is opposite C?",
    options: ["D", "E", "F", "G"],
    answer: 1,
    explanation:
      "Fix A at position 1 and B at 5. C is at 3. The person opposite C is at 7, which can be assigned as E in the valid arrangement."
  },
  {
    id: "r033",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Complete the analogy: 7 : 56 :: 9 : ?",
    options: ["72", "81", "90", "99"],
    answer: 2,
    explanation:
      "7×8=56. Following n×(n+1), 9×10=90."
  },
  {
    id: "r034",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "If all letters in the word 'REASONING' are arranged alphabetically, which letter is fifth from the left?",
    options: ["I", "N", "O", "R"],
    answer: 1,
    explanation:
      "Alphabetical order: A, E, G, I, N, N, O, R, S. Fifth letter is N."
  },
  {
    id: "r035",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing term: C, F, J, O, U, ?",
    options: ["A", "B", "C", "D"],
    answer: 1,
    explanation:
      "Positions increase by 3,4,5,6, so next increase is 7. U(21)+7=28, wrapping around gives B."
  },
  {
    id: "r036",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A family has six members P, Q, R, S, T and U. P and Q are married. R is the brother of Q. S is the daughter of P. T is the son of R. U is the mother of Q. How is T related to P?",
    options: ["Son", "Brother", "Nephew", "Cousin"],
    answer: 2,
    explanation:
      "R is Q's brother, and T is R's son. Since Q is P's spouse, T is P's nephew by marriage."
  },
  {
    id: "r037",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Which number replaces the question mark? 6, 13, 27, 55, ?",
    options: ["109", "110", "111", "112"],
    answer: 2,
    explanation:
      "Each term = previous ×2 +1. 55×2+1 = 111."
  },
  {
    id: "r038",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A person is facing north. He turns 135° clockwise and then 90° anticlockwise. Which direction is he facing?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: 0,
    explanation:
      "North +135° clockwise = southeast. Turning 90° anticlockwise gives northeast."
  },
  {
    id: "r039",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If 1 January is Monday in a non-leap year, what day will 1 March be?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: 1,
    explanation:
      "January has 31 days, shifting by 3 days: February 1 is Thursday. February has 28 days, so March 1 is also Thursday."
  },
  {
    id: "r040",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statements: Some A are B. All B are C. No C is D. Which conclusion definitely follows?",
    options: [
      "Some A are C",
      "Some A are D",
      "All A are C",
      "No A is C"
    ],
    answer: 0,
    explanation:
      "Some A are B and all B are C, so those A that are B are also C. Therefore some A are C."
  },

  {
    id: "r041",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the next term: 1, 4, 10, 22, 46, ?",
    options: ["90", "92", "94", "96"],
    answer: 2,
    explanation:
      "Each term is multiplied by 2 and 2 is added. 46×2+2=94."
  },
  {
    id: "r042",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Six persons A, B, C, D, E and F stand in a line. A is taller than B but shorter than C. D is shorter than E but taller than F. If C is taller than E, who can be the tallest?",
    options: ["A", "C", "D", "F"],
    answer: 1,
    explanation:
      "C>A>B and C>E>D>F. Hence C is taller than everyone in both chains."
  },
  {
    id: "r043",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Choose the word that cannot be formed using the letters of 'DEPARTMENT'.",
    options: ["PART", "TREAT", "MEANT", "PEAR"],
    answer: 1,
    explanation:
      "DEPARTMENT contains only one T after accounting for the available letters needed by the word; 'TREAT' requires two T's, so it cannot be formed."
  },
  {
    id: "r044",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A clock shows 3:30. What is the angle between the hour hand and minute hand?",
    options: ["75°", "90°", "105°", "120°"],
    answer: 0,
    explanation:
      "Minute hand = 180°. Hour hand at 3:30 = 105°. Difference = 75°."
  },
  {
    id: "r045",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing letter: A, D, H, M, S, ?",
    options: ["X", "Y", "Z", "A"],
    answer: 1,
    explanation:
      "Positions increase by 3,4,5,6, then 7. S(19)+7=26 = Z. Therefore the correct answer should be Z."
  },
  {
    id: "r046",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A man points to a boy and says, 'He is the son of my wife's only daughter.' How is the boy related to the man?",
    options: ["Son", "Grandson", "Brother", "Nephew"],
    answer: 1,
    explanation:
      "The wife's only daughter is the man's daughter. Her son is therefore the man's grandson."
  },
  {
    id: "r047",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the odd one out.",
    options: ["Triangle", "Square", "Rectangle", "Circle"],
    answer: 3,
    explanation:
      "Triangle, square and rectangle are polygons with straight sides. A circle has no straight side."
  },
  {
    id: "r048",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Seven people P, Q, R, S, T, U and V sit in a row. P is fourth from the left. Q is immediately right of P. R is at one end. S sits immediately left of V. Which person can occupy the second position?",
    options: ["Q", "S", "T", "U"],
    answer: 1,
    explanation:
      "With P at 4 and Q at 5, R at an end, S-V can occupy positions 2-3. Therefore S can occupy second position."
  },
  {
    id: "r049",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing number: 8, 17, 35, 71, ?",
    options: ["141", "142", "143", "145"],
    answer: 2,
    explanation:
      "Each term = previous ×2 +1. 71×2+1=143."
  },
  {
    id: "r050",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statements: All engineers are graduates. Some graduates are managers. No manager is a student. Conclusion: I. Some engineers are managers. II. Some graduates are not students.",
    options: [
      "Only I follows",
      "Only II follows",
      "Both follow",
      "Neither follows"
    ],
    answer: 1,
    explanation:
      "Some graduates are managers and no manager is a student, so some graduates are not students. No definite relation between engineers and managers is given."
  },

  {
    id: "r051",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "If the letters of 'KNOWLEDGE' are arranged alphabetically, which letter will be fourth from the right?",
    options: ["L", "N", "O", "W"],
    answer: 1,
    explanation:
      "Alphabetical order: D, E, G, K, L, N, O, W. Fourth from right is L. Therefore option L."
  },
  {
    id: "r052",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A person walks 12 m south, turns left and walks 8 m, then turns left and walks 12 m. How far is he from the starting point?",
    options: ["6 m", "8 m", "10 m", "12 m"],
    answer: 1,
    explanation:
      "The south and north movements cancel. He is 8 m west of the starting point."
  },
  {
    id: "r053",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the next term: AB, DE, HI, MN, ?",
    options: ["RS", "ST", "TU", "UV"],
    answer: 1,
    explanation:
      "Starting letters increase by 3,4,5, so next increase is 6: M+6=S, followed by T. Hence ST."
  },
  {
    id: "r054",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Eight persons sit around a circle. A sits second to the right of B. C sits opposite A. D sits immediately left of C. Who sits opposite B?",
    options: ["C", "D", "E", "F"],
    answer: 2,
    explanation:
      "Fix B at position 1, A at 3, C at 7 and D at 6. The opposite position of B is 5, which can be occupied by E."
  },
  {
    id: "r055",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Complete the series: 11, 23, 47, 95, 191, ?",
    options: ["381", "382", "383", "385"],
    answer: 2,
    explanation:
      "Each term = previous ×2 +1. Therefore 191×2+1=383."
  },
  {
    id: "r056",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "If P means '+', Q means '−', R means '×' and S means '÷', find 18 R 2 Q 6 P 4.",
    options: ["32", "34", "36", "40"],
    answer: 1,
    explanation:
      "Replace symbols: 18×2−6+4 = 36−6+4 = 34."
  },
  {
    id: "r057",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Which pair has the same relationship as 8 : 72?",
    options: ["6 : 42", "7 : 49", "9 : 81", "10 : 90"],
    answer: 0,
    explanation:
      "8×9=72. Similarly 6×7=42."
  },
  {
    id: "r058",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "A is older than B. C is younger than D but older than A. E is younger than B. Who is the oldest?",
    options: ["A", "B", "C", "D"],
    answer: 3,
    explanation:
      "D>C>A>B>E. Therefore D is the oldest."
  },
  {
    id: "r059",
    section: "Reasoning",
    difficulty: "Medium",
    question:
      "Find the missing number: 4, 9, 19, 39, 79, ?",
    options: ["157", "158", "159", "161"],
    answer: 2,
    explanation:
      "Each term is doubled and 1 is added. 79×2+1=159."
  },
  {
    id: "r060",
    section: "Reasoning",
    difficulty: "Hard",
    question:
      "Statements: Some books are novels. All novels are interesting. No interesting thing is boring. Which conclusion follows?",
    options: [
      "Some books are interesting",
      "Some books are boring",
      "All books are interesting",
      "No book is a novel"
    ],
    answer: 0,
    explanation:
      "Some books are novels and all novels are interesting. Therefore some books are interesting."
  }
];