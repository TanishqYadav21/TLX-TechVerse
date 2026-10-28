import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type NumericQuestion = Omit<AptitudeQuestion, "id">;
const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
const optionsFor = (answer: number, suffix = "") => [answer, answer * 1.12, Math.max(0, answer * 0.88), answer + 25].map((value) => `${format(value)}${suffix}`);
const makeQuestion = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string, suffix = ""): NumericQuestion => ({ question, options: optionsFor(answer, suffix), answer: 0, explanation, difficulty });

const simpleInterest = [
  [1000, 5, 2], [1500, 6, 3], [2400, 8, 2], [3200, 5, 4], [4500, 10, 2], [5000, 7, 3], [6000, 9, 2], [7200, 5, 5], [8000, 6, 4], [9500, 8, 3],
  [12000, 4, 2], [1350, 12, 2], [2800, 7, 5], [3600, 10, 3], [4200, 6, 4], [5600, 9, 5], [6400, 5, 3], [7500, 8, 2], [8400, 12, 3], [9000, 7, 4],
].map(([principal, rate, time]) => makeQuestion(`Find the simple interest on ${principal} at ${rate}% per annum for ${time} years.`, principal * rate * time / 100, "Easy", `SI = P x R x T / 100 = ${principal} x ${rate} x ${time}/100 = ${format(principal * rate * time / 100)}.`));

const simpleAmount = [
  [800, 5, 2], [1200, 10, 3], [1800, 8, 2], [2500, 6, 4], [3000, 12, 2], [4200, 5, 3], [5000, 7, 2], [6400, 9, 3], [7500, 4, 5], [9000, 8, 2],
].map(([principal, rate, time]) => makeQuestion(`What amount will ${principal} become at ${rate}% simple interest in ${time} years?`, principal * (1 + rate * time / 100), "Easy", `Amount = P(1 + RT/100) = ${principal} x (1 + ${rate} x ${time}/100) = ${format(principal * (1 + rate * time / 100))}.`));

const findPrincipal = [
  [120, 5, 2], [270, 6, 3], [384, 8, 2], [640, 5, 4], [900, 10, 2], [1050, 7, 3], [1080, 9, 2], [1800, 5, 4], [1920, 6, 4], [2280, 8, 3],
  [960, 4, 2], [324, 12, 2], [980, 7, 2], [1080, 10, 3], [1008, 6, 4], [2520, 9, 5], [960, 5, 4], [1200, 8, 2], [2160, 12, 3], [2520, 7, 4],
].map(([interest, rate, time]) => makeQuestion(`What principal earns ${interest} simple interest at ${rate}% per annum in ${time} years?`, interest * 100 / (rate * time), "Easy", `P = SI x 100/(R x T) = ${interest} x 100/(${rate} x ${time}) = ${format(interest * 100 / (rate * time))}.`));

const compoundInterest = [
  [1000, 10, 2], [2000, 5, 2], [2500, 20, 2], [3000, 10, 3], [4000, 5, 3], [5000, 8, 2], [6000, 10, 2], [8000, 25, 2], [9000, 10, 3], [10000, 20, 2],
  [1200, 10, 2], [1500, 20, 2], [2400, 5, 2], [3200, 10, 3], [4500, 8, 2], [5200, 12, 2], [6400, 5, 3], [7200, 10, 2], [8400, 15, 2], [9600, 20, 2],
].map(([principal, rate, time]) => { const amount = principal * Math.pow(1 + rate / 100, time); return makeQuestion(`Find the compound interest on ${principal} at ${rate}% per annum for ${time} years, compounded annually.`, amount - principal, "Medium", `CI = P[(1 + R/100)^T - 1] = ${format(amount - principal)}.`); }).slice(0, 15);

const compoundAmount = [
  [500, 10, 2], [750, 20, 2], [1200, 5, 3], [1600, 10, 2], [2200, 15, 2], [2800, 25, 2], [3500, 8, 3], [4200, 12, 2], [4800, 5, 4], [5500, 10, 3],
  [6200, 20, 2], [7000, 15, 3], [8000, 25, 2], [9000, 8, 2], [11000, 10, 2], [12500, 12, 3], [14000, 5, 4], [15500, 20, 2], [17500, 10, 3], [20000, 15, 2],
].map(([principal, rate, time]) => { const amount = principal * Math.pow(1 + rate / 100, time); return makeQuestion(`What is the compound amount of ${principal} at ${rate}% per annum for ${time} years?`, amount, "Medium", `Amount = P(1 + R/100)^T = ${format(amount)}.`); }).slice(0, 15);

const halfYearly = [
  [1000, 10, 2], [1500, 8, 2], [2000, 12, 2], [2500, 10, 3], [3000, 16, 2], [3600, 6, 4], [4200, 20, 2], [4800, 14, 3], [5500, 8, 4], [6000, 12, 3],
].map(([principal, rate, time]) => { const amount = principal * Math.pow(1 + rate / 200, time * 2); return makeQuestion(`Find the compound amount of ${principal} at ${rate}% per annum for ${time} years, compounded half-yearly.`, amount, "Medium", `Half-yearly rate = ${rate}/2%; periods = ${time} x 2; amount = ${format(amount)}.`); });

const hardDifference = [
  [1000, 10], [1500, 20], [2000, 5], [2500, 10], [3000, 15], [4000, 8], [5000, 12], [6000, 20], [7500, 10], [8000, 5],
  [9000, 15], [10000, 8], [12000, 10], [14000, 12], [16000, 5], [18000, 20], [20000, 15], [24000, 10], [28000, 8], [30000, 12],
].map(([principal, rate]) => { const answer = principal * Math.pow(rate / 100, 2) / 100; return makeQuestion(`Find the difference between compound interest and simple interest on ${principal} at ${rate}% for 2 years.`, answer, "Hard", `For 2 years, CI - SI = P(R/100)^2 = ${principal} x (${rate}/100)^2 = ${format(answer)}.`); });

const hardQuarterly = [
  [1200, 8, 2], [1800, 12, 2], [2400, 16, 2], [3000, 20, 2], [3600, 10, 3], [4200, 8, 2], [4800, 12, 3], [5400, 16, 2], [6000, 20, 2], [7200, 10, 4],
].map(([principal, rate, time]) => { const amount = principal * Math.pow(1 + rate / 400, time * 4); return makeQuestion(`What amount will ${principal} become at ${rate}% per annum for ${time} years, compounded quarterly?`, amount, "Hard", `Quarterly rate = ${rate}/4%; periods = ${time} x 4; amount = ${format(amount)}.`); });

const hardMixed = [
  [1000, 10, 2], [1250, 20, 2], [1600, 25, 2], [2000, 15, 3], [2400, 10, 4], [3000, 12, 2], [3600, 20, 3], [4000, 8, 2], [4500, 16, 2], [5000, 25, 2],
].map(([principal, rate, time]) => { const si = principal * rate * time / 100; const ci = principal * (Math.pow(1 + rate / 100, time) - 1); return makeQuestion(`How much greater is the compound interest than simple interest on ${principal} at ${rate}% for ${time} years?`, ci - si, "Hard", `CI - SI = ${format(ci)} - ${format(si)} = ${format(ci - si)}.`); });

const easyGroups = [simpleInterest, simpleAmount, findPrincipal];
const mediumGroups = [compoundInterest, compoundAmount, halfYearly];
const hardGroups = [hardDifference, hardQuarterly, hardMixed];
const flatten = (groups: NumericQuestion[][], startId: number) => groups.flat().map((question, index) => ({ ...question, id: startId + index }));

export const simpleCompoundInterestQuestions: AptitudeQuestion[] = [
  ...flatten(easyGroups, 1),
  ...flatten(mediumGroups, 61),
  ...flatten(hardGroups, 111),
];
