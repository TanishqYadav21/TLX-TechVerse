export type ReasoningSection = "Puzzles" | "Coding-Decoding" | "Relations" | "Arrangements";

export type ReasoningQuestion = {
  id: number;
  section: ReasoningSection;
  question: string;
  answer: string;
  explanation: string;
};

export const reasoningQuestions: ReasoningQuestion[] = [
  { id: 1, section: "Puzzles", question: "Five people sit in a row. A sits to the left of B, C sits to the right of B, and D sits at the extreme left. Who sits between A and C?", answer: "B", explanation: "The order is D-A-B-C-E, so B is between A and C." },
  { id: 2, section: "Puzzles", question: "A is taller than B but shorter than C. D is shorter than B. Who is the tallest?", answer: "C", explanation: "The order from tallest to shortest is C-A-B-D." },
  { id: 3, section: "Puzzles", question: "A meeting is held on the third day after Monday. Which day is it?", answer: "Thursday", explanation: "Tuesday is day one, Wednesday day two, and Thursday day three after Monday." },
  { id: 4, section: "Puzzles", question: "In a queue, Riya is 8th from the front and 12th from the back. How many people are in the queue?", answer: "19", explanation: "Total = front position + back position - 1 = 8 + 12 - 1 = 19." },
  { id: 5, section: "Puzzles", question: "If all squares are rectangles and some rectangles are blue, which conclusion is certain?", answer: "All squares are rectangles", explanation: "This is directly stated; the colour information does not imply anything about every square." },
  { id: 6, section: "Puzzles", question: "A clock shows 3:00. What is the angle between its hands?", answer: "90 degrees", explanation: "At 3:00, the hour and minute hands are perpendicular." },
  { id: 7, section: "Puzzles", question: "A man walks 5 km north, then 3 km east. In which direction is he from his starting point?", answer: "North-east", explanation: "He has moved both north and east, so his final direction is north-east." },
  { id: 8, section: "Puzzles", question: "A family has two parents, two sons, and one grandson. What is the minimum number of people?", answer: "5", explanation: "There can be a grandfather, father, mother, son, and grandson." },
  { id: 9, section: "Puzzles", question: "If yesterday was Wednesday, what day will it be two days after tomorrow?", answer: "Sunday", explanation: "Today is Thursday, tomorrow Friday, and two days after tomorrow is Sunday." },
  { id: 10, section: "Puzzles", question: "A paper is folded once and punched. How many holes appear when fully opened?", answer: "2", explanation: "One fold creates two layers, so one punch makes two holes when opened." },
  { id: 11, section: "Coding-Decoding", question: "If CAT is coded as DBU, how is DOG coded?", answer: "EPH", explanation: "Each letter moves one step forward: D-E, O-P, G-H." },
  { id: 12, section: "Coding-Decoding", question: "If ROAD is written as URDG, what is the coding rule?", answer: "Each letter moves three places forward", explanation: "R-U, O-R, A-D, and D-G are all shifts of three." },
  { id: 13, section: "Coding-Decoding", question: "If BLUE is coded as 2-12-21-5, what does GREEN become?", answer: "7-18-5-5-14", explanation: "Use each letter's alphabetical position." },
  { id: 14, section: "Coding-Decoding", question: "If TABLE is coded as ELBAT, how is CHAIR coded?", answer: "RIAHC", explanation: "The letters are written in reverse order." },
  { id: 15, section: "Coding-Decoding", question: "If A=1, B=2 and so on, what is the value of CODE?", answer: "27", explanation: "C+O+D+E = 3+15+4+5 = 27." },
  { id: 16, section: "Coding-Decoding", question: "If MONDAY is coded as 123456, which digit represents D?", answer: "4", explanation: "M=1, O=2, N=3, D=4, A=5, Y=6." },
  { id: 17, section: "Coding-Decoding", question: "If PEN is written as QFO, how is MAP written?", answer: "NBQ", explanation: "Every letter is replaced by the next alphabet letter." },
  { id: 18, section: "Coding-Decoding", question: "If 123 means red big ball and 345 means big round box, which digit means big?", answer: "3", explanation: "The common word is big and the common digit is 3." },
  { id: 19, section: "Coding-Decoding", question: "If STAR is coded as 19-20-1-18, what is the code for SUN?", answer: "19-21-14", explanation: "Use alphabetical positions S=19, U=21, N=14." },
  { id: 20, section: "Coding-Decoding", question: "If every vowel is replaced by the next vowel, what does CODE become?", answer: "CUDI", explanation: "O becomes U and E becomes I; consonants stay unchanged." },
  { id: 21, section: "Relations", question: "Pointing to a woman, Raj says, 'She is the daughter of my mother's only son.' Who is she to Raj?", answer: "Daughter", explanation: "Raj is his mother's only son, so the woman is Raj's daughter." },
  { id: 22, section: "Relations", question: "A is the brother of B. B is the mother of C. How is A related to C?", answer: "Maternal uncle", explanation: "A is the brother of C's mother." },
  { id: 23, section: "Relations", question: "P is the father of Q, and Q is the sister of R. How is P related to R?", answer: "Father", explanation: "Q and R are siblings, so Q's father is also R's father." },
  { id: 24, section: "Relations", question: "M is the wife of N. O is the son of M. How is N related to O?", answer: "Father", explanation: "N is O's mother's husband and therefore his father." },
  { id: 25, section: "Relations", question: "T is the sister of U. U is the father of V. How is T related to V?", answer: "Paternal aunt", explanation: "T is the sister of V's father." },
  { id: 26, section: "Relations", question: "A's mother's brother is B. How is B related to A?", answer: "Maternal uncle", explanation: "The mother's brother is the maternal uncle." },
  { id: 27, section: "Relations", question: "X is the daughter of Y's son. How is X related to Y?", answer: "Granddaughter", explanation: "Y's son is X's father, making X Y's granddaughter." },
  { id: 28, section: "Relations", question: "K is married to L. L's brother is M. How is M related to K?", answer: "Brother-in-law", explanation: "M is the brother of K's spouse." },
  { id: 29, section: "Relations", question: "S is the father of T and T is the father of U. How is S related to U?", answer: "Grandfather", explanation: "S is U's father's father." },
  { id: 30, section: "Relations", question: "R is the daughter of P's sister. How is R related to P?", answer: "Niece", explanation: "The daughter of one's sister is one's niece." },
  { id: 31, section: "Arrangements", question: "Four people P, Q, R, S sit in a row. P is left of Q and R is right of Q. Which order is possible?", answer: "P-Q-R-S", explanation: "This order satisfies P left of Q and R right of Q." },
  { id: 32, section: "Arrangements", question: "In a row of six, A is second, B is immediately before C, and D is last. Which position can B occupy?", answer: "Third", explanation: "B can be third and C fourth while A remains second and D sixth." },
  { id: 33, section: "Arrangements", question: "Five books A, B, C, D, E are arranged. C is at the centre and A is left of C. Which book cannot be at the first position?", answer: "D", explanation: "D has no restriction to the first position in the remaining slots, while C is fixed at centre; the stated constraints make the valid first-position choice dependent on the arrangement." },
  { id: 34, section: "Arrangements", question: "Seven students stand in a line. Ravi is fourth from the left. What is his position from the right?", answer: "Fourth", explanation: "Position from right = 7 - 4 + 1 = 4." },
  { id: 35, section: "Arrangements", question: "A, B, C, D sit around a square table. A sits opposite C. Who sits opposite B?", answer: "D", explanation: "The remaining opposite pair is B and D." },
  { id: 36, section: "Arrangements", question: "In a row, M is between N and O, and P is immediately right of O. Which sequence is valid?", answer: "N-M-O-P", explanation: "M is between N and O and P follows O immediately." },
  { id: 37, section: "Arrangements", question: "Eight runners finish a race. Anu is third and Beena is two places behind Anu. What is Beena's position?", answer: "Fifth", explanation: "Two places after third is fifth." },
  { id: 38, section: "Arrangements", question: "Six chairs are numbered 1 to 6. If chair 2 is occupied and chair 5 is empty, which chairs remain available?", answer: "1, 3, 4, 6", explanation: "Remove chairs 2 and 5 from the six numbered chairs." },
  { id: 39, section: "Arrangements", question: "A queue has P before Q, Q before R, and R before S. Who must be first among them?", answer: "P", explanation: "P precedes the entire chain P-Q-R-S." },
  { id: 40, section: "Arrangements", question: "In a circular arrangement, A sits between B and C. Who are A's immediate neighbours?", answer: "B and C", explanation: "The phrase between directly identifies A's two neighbours." },
];
