export type AptitudeDifficulty = "Easy" | "Medium" | "Hard";

export type AptitudeQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty: AptitudeDifficulty;
};

import { percentageQuestions } from "./percentage";
import { profitLossQuestions } from "./profitLoss";
import { simpleCompoundInterestQuestions } from "./simpleCompoundInterest";
import { ratioQuestions } from "./ratio";
import { averageQuestions } from "./average";
import { timeWorkQuestions } from "./timeWork";
import { speedDistanceQuestions } from "./speedDistance";
import { permutationCombinationQuestions } from "./permutationCombination";
import { probabilityQuestions } from "./probability";
import { dataInterpretationQuestions } from "./dataInterpretation";
import { algebraQuestions } from "./algebra";

const numericOptions = (answer: number) => [
  String(answer + 2), String(answer), String(answer + 1), String(answer + 3),
];

const makeQuestion = (
  question: string,
  answer: number,
  difficulty: AptitudeDifficulty,
  explanation: string,
  options = numericOptions(answer),
): Omit<AptitudeQuestion, "id"> => ({
  question,
  options,
  answer: options.indexOf(String(answer)),
  explanation,
  difficulty,
});

const gcd = (first: number, second: number) => {
  let a = first;
  let b = second;
  while (b) [a, b] = [b, a % b];
  return a;
};

const easyRemainders = [
  [725, 8], [938, 7], [1247, 9], [581, 6], [1462, 11],
  [875, 12], [2315, 13], [4096, 15], [777, 16], [1523, 10],
].map(([number, divisor]) => makeQuestion(
  `What is the remainder when ${number} is divided by ${divisor}?`,
  number % divisor, "Easy",
  `${number} = ${Math.floor(number / divisor)} x ${divisor} + ${number % divisor}, so the remainder is ${number % divisor}.`,
));

const easyDivisibility = [
  [234, 9], [572, 4], [735, 5], [1188, 11], [1456, 8],
  [2079, 3], [3402, 6], [6250, 10], [891, 9], [1232, 7],
].map(([number, divisor]) => makeQuestion(
  `What remainder does ${number} leave when divided by ${divisor}?`,
  number % divisor, "Easy",
  `${number} divided by ${divisor} leaves a remainder of ${number % divisor}.`,
));

const easyHcf = [
  [36, 48], [54, 72], [84, 126], [96, 144], [105, 175],
  [128, 160], [132, 198], [150, 225], [168, 252], [196, 294],
].map(([first, second]) => {
  const answer = gcd(first, second);
  return makeQuestion(`What is the HCF of ${first} and ${second}?`, answer, "Easy", `The greatest common factor of ${first} and ${second} is ${answer}.`);
});

const easyLcm = [
  [6, 8], [9, 12], [14, 21], [16, 24], [18, 30],
  [15, 20], [22, 33], [25, 40], [27, 36], [32, 48],
].map(([first, second]) => {
  const answer = (first * second) / gcd(first, second);
  return makeQuestion(`What is the LCM of ${first} and ${second}?`, answer, "Easy", `LCM x HCF = ${first} x ${second}; therefore the LCM is ${answer}.`);
});

const mediumFactors = [
  [72, 12], [120, 16], [144, 15], [180, 18], [225, 9],
  [240, 20], [288, 18], [360, 24], [400, 15], [504, 24],
].map(([number, answer]) => makeQuestion(`How many positive factors does ${number} have?`, answer, "Medium", `Counting every positive divisor of ${number} gives ${answer} factors.`));

const mediumAdditions = [
  [563, 7], [1249, 11], [2345, 13], [6789, 17], [9012, 19],
  [4321, 23], [7654, 29], [8888, 31], [5432, 37], [9991, 41],
].map(([number, divisor]) => {
  const answer = (divisor - (number % divisor)) % divisor;
  return makeQuestion(`What is the smallest number to add to ${number} to make it divisible by ${divisor}?`, answer, "Medium", `${number} leaves remainder ${number % divisor}; adding ${answer} reaches the next multiple of ${divisor}.`);
});

const mediumSubtractions = [
  [1000, 7], [2345, 9], [5001, 11], [7890, 13], [4321, 17],
  [9999, 19], [6782, 23], [2468, 29], [7777, 31], [13579, 41],
].map(([number, divisor]) => {
  const answer = number % divisor;
  return makeQuestion(`What is the smallest number to subtract from ${number} to make it divisible by ${divisor}?`, answer, "Medium", `The remainder of ${number} on division by ${divisor} is ${answer}, so subtracting it gives a multiple.`);
});

const mediumTrailingZeros = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60].map((number) => {
  let value = number;
  let answer = 0;
  while (value >= 5) { value = Math.floor(value / 5); answer += value; }
  return makeQuestion(`How many trailing zeroes does ${number}! have?`, answer, "Medium", `The exponent of 5 in ${number}! is ${answer}; therefore it has ${answer} trailing zeroes.`);
});

const hardPowers = [
  [2, 17, 2], [3, 14, 9], [7, 25, 7], [8, 19, 8], [9, 23, 9],
  [11, 18, 1], [12, 15, 8], [13, 22, 9], [17, 21, 7], [19, 16, 1],
].map(([base, power, answer]) => makeQuestion(`What is the unit digit of ${base}^${power}?`, answer, "Hard", `The unit digits of powers of ${base} repeat cyclically; at exponent ${power}, the unit digit is ${answer}.`));

const hardDigitRoots = [
  [123456, 3], [987654, 3], [246813, 6], [135792, 9], [864209, 2],
  [314159, 5], [271828, 1], [999998, 8], [456789, 3], [102938, 5],
].map(([number, answer]) => makeQuestion(`What is the digital root of ${number}?`, answer, "Hard", `Repeatedly adding the digits of ${number} reduces it to the digital root ${answer}.`));

const hardCoprimePairs = [
  [35, 64], [48, 77], [81, 125], [98, 135], [119, 144],
  [143, 200], [169, 234], [187, 250], [221, 256], [299, 360],
].map(([first, second]) => makeQuestion(`What is the HCF of ${first} and ${second}?`, 1, "Hard", `${first} and ${second} share no prime factor, so their HCF is 1.`));

const hardDivisorCounts = [
  [840, 32], [900, 27], [960, 28], [1024, 11], [1080, 32],
  [1152, 24], [1225, 9], [1296, 25], [1365, 16], [1440, 36],
].map(([number, answer]) => makeQuestion(`How many positive divisors does ${number} have?`, answer, "Hard", `Prime factorising ${number} and applying the divisor-count formula gives ${answer} positive divisors.`));

const questionGroups = [
  easyRemainders, easyDivisibility, easyHcf, easyLcm,
  mediumFactors, mediumAdditions, mediumSubtractions, mediumTrailingZeros,
  hardPowers, hardDigitRoots, hardCoprimePairs, hardDivisorCounts,
];

export const numberSystemQuestions: AptitudeQuestion[] = questionGroups
  .flat()
  .map((question, index) => ({ ...question, id: index + 1 }));

export const aptitudeQuestions = {
  "Number System": numberSystemQuestions,
  Percentage: percentageQuestions,
  "Profit & Loss": profitLossQuestions,
  "Simple & Compound Interest": simpleCompoundInterestQuestions,
  "Ratio & Proportion": ratioQuestions,
  Average: averageQuestions,
  "Time & Work": timeWorkQuestions,
  "Time, Speed & Distance": speedDistanceQuestions,
  "Permutation & Combination": permutationCombinationQuestions,
  Probability: probabilityQuestions,
  "Data Interpretation": dataInterpretationQuestions,
  Algebra: algebraQuestions,
};
