import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type NumericQuestion = Omit<AptitudeQuestion, "id">;

const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
const optionsFor = (answer: number, suffix = "") => [answer, answer * 1.12, Math.max(0, answer * 0.88), answer + 25].map((value) => `${format(value)}${suffix}`);
const makeQuestion = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string, suffix = ""): NumericQuestion => ({
  question,
  options: optionsFor(answer, suffix),
  answer: 0,
  explanation,
  difficulty,
});

const easyProfitPercent = [
  [100, 20], [250, 16], [400, 25], [600, 15], [750, 12], [900, 18], [1200, 10], [1500, 24], [1800, 20], [2400, 15],
].map(([cost, percent]) => makeQuestion(`An article costs ${cost} and is sold at a profit of ${percent}%. What is the profit?`, cost * percent / 100, "Easy", `Profit = ${cost} x ${percent}/100 = ${format(cost * percent / 100)}.`));

const easyLossPercent = [
  [200, 10], [350, 12], [500, 15], [800, 20], [950, 8], [1250, 16], [1600, 25], [2200, 18], [2750, 14], [3200, 22],
].map(([cost, percent]) => makeQuestion(`An article costs ${cost} and is sold at a loss of ${percent}%. What is the loss?`, cost * percent / 100, "Easy", `Loss = ${cost} x ${percent}/100 = ${format(cost * percent / 100)}.`));

const easySellingPrice = [
  [100, 10], [240, 25], [360, 20], [480, 15], [650, 12], [800, 18], [1100, 10], [1350, 20], [1750, 16], [2500, 24],
].map(([cost, percent]) => makeQuestion(`An article bought for ${cost} is sold at a profit of ${percent}%. Find its selling price.`, cost * (1 + percent / 100), "Easy", `Selling price = ${cost} x (1 + ${percent}/100) = ${format(cost * (1 + percent / 100))}.`));

const easyLossPrice = [
  [150, 10], [280, 15], [450, 20], [700, 12], [900, 25], [1150, 8], [1400, 18], [1850, 16], [2600, 22], [3600, 30],
].map(([cost, percent]) => makeQuestion(`An article bought for ${cost} is sold at a loss of ${percent}%. Find its selling price.`, cost * (1 - percent / 100), "Easy", `Selling price = ${cost} x (1 - ${percent}/100) = ${format(cost * (1 - percent / 100))}.`));

const easyPercentFromPrices = [
  [100, 120], [200, 250], [300, 270], [400, 460], [500, 425], [600, 720], [800, 680], [900, 990], [1200, 1080], [1500, 1800],
].map(([cost, selling]) => {
  const percent = Math.abs(selling - cost) * 100 / cost;
  const type = selling >= cost ? "profit" : "loss";
  return makeQuestion(`An article is bought for ${cost} and sold for ${selling}. What is the percentage of ${type}?`, percent, "Easy", `${type === "profit" ? "Profit" : "Loss"} percentage = |${selling} - ${cost}|/${cost} x 100 = ${format(percent)}%.`, "%");
});

const mediumProfitSelling = [
  [320, 25], [450, 18], [560, 30], [720, 15], [840, 20], [950, 24], [1250, 16], [1440, 35], [1800, 22], [2250, 28],
].map(([cost, percent]) => makeQuestion(`An article costs ${cost}. At what price should it be sold to gain ${percent}%?`, cost * (1 + percent / 100), "Medium", `Required selling price = ${cost} x (100 + ${percent})/100 = ${format(cost * (1 + percent / 100))}.`));

const mediumLossSelling = [
  [360, 15], [520, 20], [680, 12], [900, 18], [1050, 25], [1320, 10], [1600, 22], [2100, 16], [2750, 24], [3400, 30],
].map(([cost, percent]) => makeQuestion(`An article costs ${cost}. At what price should it be sold to incur a loss of ${percent}%?`, cost * (1 - percent / 100), "Medium", `Required selling price = ${cost} x (100 - ${percent})/100 = ${format(cost * (1 - percent / 100))}.`));

const mediumFindCostProfit = [
  [480, 20], [600, 25], [750, 15], [920, 15], [1080, 20], [1260, 40], [1440, 25], [1680, 20], [1980, 10], [2400, 32],
].map(([selling, percent]) => makeQuestion(`An article is sold for ${selling} at a profit of ${percent}%. Find its cost price.`, selling * 100 / (100 + percent), "Medium", `Cost price = ${selling} x 100/(100 + ${percent}) = ${format(selling * 100 / (100 + percent))}.`));

const mediumFindCostLoss = [
  [425, 15], [560, 20], [680, 15], [765, 10], [900, 25], [1020, 15], [1260, 30], [1530, 15], [1870, 15], [2240, 20],
].map(([selling, percent]) => makeQuestion(`An article is sold for ${selling} at a loss of ${percent}%. Find its cost price.`, selling * 100 / (100 - percent), "Medium", `Cost price = ${selling} x 100/(100 - ${percent}) = ${format(selling * 100 / (100 - percent))}.`));

const mediumDiscountPrice = [
  [500, 10], [800, 15], [1200, 20], [1500, 12], [1800, 25], [2400, 18], [2750, 16], [3200, 22], [4500, 30], [6000, 15],
].map(([marked, discount]) => makeQuestion(`An item marked ${marked} is sold after a discount of ${discount}%. Find its selling price.`, marked * (1 - discount / 100), "Medium", `Selling price = ${marked} x (1 - ${discount}/100) = ${format(marked * (1 - discount / 100))}.`));

const hardOverallProfit = [
  [200, 300, 20], [350, 450, 15], [480, 720, 25], [600, 900, 20], [750, 1250, 30], [900, 1350, 18], [1200, 1800, 25], [1500, 2100, 20], [1800, 2700, 15], [2400, 3600, 25],
].map(([firstCost, secondCost, percent]) => {
  const totalCost = firstCost + secondCost;
  const answer = totalCost * (1 + percent / 100);
  return makeQuestion(`Two articles together cost ${totalCost}. If they are sold at an overall profit of ${percent}%, find the total selling price.`, answer, "Hard", `Total selling price = ${totalCost} x (1 + ${percent}/100) = ${format(answer)}.`);
});

const hardEqualSelling = [
  [10, 20], [15, 25], [20, 30], [12, 18], [25, 40], [8, 12], [18, 24], [30, 20], [16, 36], [22, 28],
].map(([profit, loss]) => {
  const answer = profit * loss / 100;
  return makeQuestion(`Two articles are sold at the same price. One gives ${profit}% profit and the other ${loss}% loss. What is the overall percentage loss?`, answer, "Hard", `Overall loss = (${profit} x ${loss})/100 = ${format(answer)}%.` , "%");
});

const hardDiscountProfit = [
  [1000, 20, 25], [1400, 15, 20], [1800, 25, 30], [2400, 10, 20], [2750, 20, 15], [3200, 30, 25], [4000, 15, 35], [4500, 25, 20], [5200, 18, 30], [6000, 20, 40],
].map(([cost, discount, profit]) => {
  const marked = cost * (1 + profit / 100) / (1 - discount / 100);
  return makeQuestion(`An article costing ${cost} is sold at ${discount}% discount for a ${profit}% profit. Find its marked price.`, marked, "Hard", `Marked price = cost x (100 + profit)/(100 - discount) = ${format(marked)}.`);
});

const hardDishonestDealer = [
  [1000, 900, 10], [1200, 1080, 5], [1500, 1350, 10], [1800, 1620, 8], [2200, 1980, 12], [2500, 2250, 5], [3200, 2880, 10], [4000, 3600, 8], [4500, 4050, 12], [6000, 5400, 10],
].map(([claimed, actual, profit]) => {
  const answer = (claimed / actual) * (1 + profit / 100) * 100 - 100;
  return makeQuestion(`A dealer gives ${claimed} g while charging for 1 kg and also makes ${profit}% profit on the cost price. What is his effective profit percentage?`, answer, "Hard", `Effective factor = ${claimed}/${actual} x ${format(1 + profit / 100)}; effective profit is ${format(answer)}%.`, "%");
});

const hardSuccessiveChanges = [
  [10, 20], [15, 25], [20, 30], [12, 18], [25, 15], [8, 22], [18, 24], [30, 12], [16, 28], [22, 14],
].map(([first, second]) => {
  const answer = first + second + first * second / 100;
  return makeQuestion(`The cost price of an article rises by ${first}% and then by ${second}%. What is the total percentage rise?`, answer, "Hard", `Successive rise = ${first} + ${second} + (${first} x ${second})/100 = ${format(answer)}%.`, "%");
});

const hardGroups = [hardOverallProfit, hardEqualSelling, hardDiscountProfit, hardDishonestDealer, hardSuccessiveChanges];
const easyGroups = [easyProfitPercent, easyLossPercent, easySellingPrice, easyLossPrice, easyPercentFromPrices];
const mediumGroups = [mediumProfitSelling, mediumLossSelling, mediumFindCostProfit, mediumFindCostLoss, mediumDiscountPrice];
const flatten = (groups: NumericQuestion[][], startId: number) => groups.flat().map((question, index) => ({ ...question, id: startId + index }));

export const profitLossQuestions: AptitudeQuestion[] = [
  ...flatten(easyGroups, 1),
  ...flatten(mediumGroups, 51),
  ...flatten(hardGroups, 101),
];
