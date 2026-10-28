import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type NumericQuestion = Omit<AptitudeQuestion, "id">;

const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");

const optionsFor = (answer: number, suffix = "%") => {
  const offsets = answer === 0 ? [5, 10, 15] : [answer * 0.2, -answer * 0.2, answer * 0.5];
  const values = [answer, answer + offsets[0], answer + offsets[1], answer + offsets[2]].map(format);
  return values.map((value) => `${value}${suffix}`);
};

const makeQuestion = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string, suffix = "%", customOptions?: string[]): NumericQuestion => ({
  question,
  options: customOptions ?? optionsFor(answer, suffix),
  answer: customOptions ? 0 : 0,
  explanation,
  difficulty,
});

const percentageOf = [
  [25, 80], [15, 240], [12, 350], [40, 275], [35, 160], [18, 450], [22, 500], [75, 320], [5, 760], [30, 840],
  [45, 260], [8, 625], [16, 375], [28, 250], [65, 180], [24, 550], [32, 425], [70, 230], [6, 950], [55, 360],
].map(([percent, number]) => {
  const answer = percent * number / 100;
  return makeQuestion(`What is ${percent}% of ${number}?`, answer, "Easy", `${percent}% of ${number} = ${percent}/100 x ${number} = ${format(answer)}.`, "");
});

const fractionToPercent = [
  [1, 2], [1, 4], [3, 5], [7, 10], [5, 8], [7, 20], [9, 25], [11, 20], [13, 25], [17, 50],
  [3, 8], [7, 16], [9, 20], [11, 25], [13, 50], [19, 25], [21, 50], [23, 50], [27, 50], [31, 40],
].map(([numerator, denominator]) => {
  const answer = numerator * 100 / denominator;
  return makeQuestion(`Convert ${numerator}/${denominator} into a percentage.`, answer, "Easy", `${numerator}/${denominator} x 100 = ${format(answer)}%.`);
});

const percentAsFraction = [
  [10, "1/10"], [20, "1/5"], [25, "1/4"], [30, "3/10"], [40, "2/5"], [50, "1/2"], [60, "3/5"], [75, "3/4"], [80, "4/5"], [90, "9/10"],
  [12.5, "1/8"], [15, "3/20"], [22.5, "9/40"], [37.5, "3/8"], [62.5, "5/8"], [87.5, "7/8"], [6.25, "1/16"], [18.75, "3/16"], [31.25, "5/16"], [43.75, "7/16"],
].map(([percent, fraction]) => makeQuestion(
  `What is ${percent}% expressed as a fraction in lowest terms?`, 0, "Easy",
  `${percent}% = ${fraction}.`, "",
  Array.from(new Set([String(fraction), "1/3", "2/3", "3/4", "5/8"])).slice(0, 4),
));

const easyGroups = [percentageOf, fractionToPercent, percentAsFraction];

const increaseValues = [
  [400, 15], [750, 12], [1200, 8], [640, 25], [1800, 18], [2500, 16], [960, 35], [1500, 22], [2400, 30], [360, 45],
  [840, 20], [2750, 14], [1250, 28], [560, 32], [4200, 10], [680, 15], [3150, 24], [2250, 40], [875, 36], [5200, 5],
].map(([value, percent]) => {
  const answer = value * (1 + percent / 100);
  return makeQuestion(`A value of ${value} is increased by ${percent}%. What is the new value?`, answer, "Medium", `New value = ${value} x (1 + ${percent}/100) = ${format(answer)}.`, "");
});

const decreaseValues = [
  [500, 12], [900, 15], [1600, 20], [2400, 25], [3600, 18], [1250, 16], [2800, 35], [4500, 22], [720, 30], [6400, 10],
  [1500, 28], [2250, 32], [4800, 14], [875, 20], [3200, 45], [5400, 24], [1800, 40], [950, 36], [7600, 5], [2700, 8],
].map(([value, percent]) => {
  const answer = value * (1 - percent / 100);
  return makeQuestion(`A value of ${value} is decreased by ${percent}%. What is the new value?`, answer, "Medium", `New value = ${value} x (1 - ${percent}/100) = ${format(answer)}.`, "");
});

const percentageChange = [
  [80, 100], [120, 150], [250, 200], [360, 450], [500, 425], [640, 800], [900, 720], [1250, 1500], [1600, 1400], [2400, 3000],
  [75, 90], [180, 144], [320, 400], [450, 360], [700, 840], [840, 1050], [1100, 990], [1350, 1620], [2000, 1700], [2750, 3300],
].map(([oldValue, newValue]) => {
  const answer = Math.abs(newValue - oldValue) * 100 / oldValue;
  const direction = newValue >= oldValue ? "increase" : "decrease";
  return makeQuestion(`The value changes from ${oldValue} to ${newValue}. What is the percentage ${direction}?`, answer, "Medium", `Percentage change = |${newValue} - ${oldValue}|/${oldValue} x 100 = ${format(answer)}%.`);
});

const mediumGroups = [increaseValues, decreaseValues, percentageChange];

const successiveChanges = [
  [10, 20], [15, 10], [20, 25], [25, 10], [30, 15], [12, 18], [8, 25], [18, 22], [35, 20], [40, 15],
  [5, 30], [22, 12], [16, 24], [28, 14], [32, 18], [45, 10], [14, 35], [24, 16], [11, 27], [26, 19],
].map(([first, second]) => {
  const answer = first + second + first * second / 100;
  return makeQuestion(`A number is increased successively by ${first}% and ${second}%. What is the equivalent percentage increase?`, answer, "Hard", `Equivalent increase = ${first} + ${second} + (${first} x ${second})/100 = ${format(answer)}%.`);
});

const successiveDiscounts = [
  [10, 20], [15, 25], [20, 30], [25, 15], [12, 18], [8, 22], [30, 10], [18, 24], [35, 12], [40, 15],
  [5, 25], [22, 16], [16, 20], [28, 14], [32, 10], [45, 8], [14, 35], [24, 18], [11, 27], [26, 19],
].map(([first, second]) => {
  const answer = first + second - first * second / 100;
  return makeQuestion(`Two successive discounts of ${first}% and ${second}% are offered. What is the equivalent discount?`, answer, "Hard", `Equivalent discount = ${first} + ${second} - (${first} x ${second})/100 = ${format(answer)}%.`);
});

const originalValues = [
  [20, 240], [25, 360], [30, 420], [15, 510], [40, 680], [12, 300], [18, 450], [35, 910], [22, 770], [28, 560],
  [16, 640], [24, 840], [32, 960], [45, 540], [8, 280], [14, 350], [26, 780], [38, 1140], [42, 1260], [10, 250],
].map(([percent, part]) => {
  const answer = part * 100 / percent;
  return makeQuestion(`${percent}% of a number is ${part}. What is the number?`, answer, "Hard", `The whole number = ${part} x 100/${percent} = ${format(answer)}.`, "");
});

const hardGroups = [successiveChanges, successiveDiscounts, originalValues];

const flatten = (groups: NumericQuestion[][], startId: number) => groups.flat().map((question, index) => ({ ...question, id: startId + index }));

export const percentageQuestions: AptitudeQuestion[] = [
  ...flatten(easyGroups, 1),
  ...flatten(mediumGroups, 61),
  ...flatten(hardGroups, 121),
].map((question) => ({
  ...question,
  answer: 0,
}));
