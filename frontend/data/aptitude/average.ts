import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type AverageQuestion = Omit<AptitudeQuestion, "id">;

const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
const make = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string, unit = "", alternatives?: string[]): AverageQuestion => {
  const correct = `${format(answer)}${unit}`;
  const options = alternatives ?? [`${format(answer + 2)}${unit}`, `${format(answer + 4)}${unit}`, `${format(answer - 2)}${unit}`];
  return { question, options: [correct, ...options.filter((option) => option !== correct).slice(0, 3)], answer: 0, explanation, difficulty };
};

const easyMean = [
  [12, 18, 24], [15, 21, 30], [22, 28, 34], [35, 40, 45], [48, 52, 60],
  [9, 16, 23], [27, 33, 39], [42, 49, 56], [64, 70, 76], [81, 87, 93],
].map(([a, b, c]) => make(`Find the average of ${a}, ${b}, and ${c}.`, (a + b + c) / 3, "Easy", `Average = (${a} + ${b} + ${c})/3 = ${(a + b + c) / 3}.`));

const easyMeanSets = [
  [8, 14, 20, 26], [11, 17, 23, 29], [16, 22, 28, 34], [25, 31, 37, 43], [40, 46, 52, 58],
  [7, 13, 19, 25], [18, 24, 30, 36], [32, 38, 44, 50], [55, 61, 67, 73], [72, 78, 84, 90],
].map((values, index) => make(`The ${["Monday to Thursday temperatures", "four weekly sales figures", "four delivery times", "four quiz scores", "four daily step counts", "four fuel readings", "four rainfall readings", "four production totals", "four attendance counts", "four measured lengths"][index]} are ${values.join(", ")}. Find the average.`, values.reduce((sum, value) => sum + value, 0) / values.length, "Easy", `Add the four values and divide by 4: total ${values.reduce((sum, value) => sum + value, 0)}/4.`));

const easyTotal = [
  [5, 18], [6, 24], [7, 31], [8, 16], [9, 27], [10, 42], [12, 35], [15, 28], [20, 46], [25, 19],
].map(([count, average]) => make(`The average of ${count} numbers is ${average}. What is their total?`, count * average, "Easy", `Total = count x average = ${count} x ${average} = ${count * average}.`));

const easyMissing = [
  [12, 18, 24, 20], [15, 21, 30, 25], [8, 14, 20, 16], [25, 35, 45, 40], [42, 48, 54, 50],
  [11, 17, 23, 20], [30, 36, 42, 39], [52, 58, 64, 60], [70, 76, 82, 78], [90, 96, 102, 99],
].map(([a, b, c, average]) => make(`The average of ${a}, ${b}, ${c}, and x is ${average}. Find x.`, 4 * average - a - b - c, "Easy", `x = 4 x ${average} - (${a}+${b}+${c}) = ${4 * average - a - b - c}.`));

const easyAge = [
  [18, 22, 26], [24, 28, 32], [30, 34, 38], [16, 20, 24], [21, 25, 29],
  [27, 31, 35], [33, 37, 41], [40, 44, 48], [19, 23, 27], [26, 30, 34],
].map(([first, second, third]) => make(`The average age of three siblings aged ${first}, ${second}, and ${third} is:`, (first + second + third) / 3, "Easy", `Average age = (${first}+${second}+${third})/3 = ${(first + second + third) / 3} years.`, " years"));

const easyScores = [
  [42, 56, 68], [35, 49, 77], [61, 73, 86], [28, 44, 60], [55, 65, 75],
  [39, 51, 69], [72, 78, 84], [46, 58, 70], [63, 67, 89], [31, 59, 80],
].map(([a, b, c]) => make(`A student scores ${a}, ${b}, and ${c} in three tests. Find the average score.`, (a + b + c) / 3, "Easy", `Average score = (${a}+${b}+${c})/3 = ${(a + b + c) / 3}.`, " marks"));

const mediumNewMember = [
  [5, 24, 34], [6, 18, 28], [7, 31, 41], [8, 22, 35], [9, 27, 39],
  [10, 36, 48], [12, 25, 37], [15, 19, 29], [20, 42, 56], [25, 30, 44],
].map(([count, oldAverage, newAverage]) => make(`The average age of ${count} people is ${oldAverage}. When one person joins, the average becomes ${newAverage}. Find the new person's age.`, (count + 1) * newAverage - count * oldAverage, "Medium", `New age = (${count + 1})x${newAverage} - ${count}x${oldAverage} = ${(count + 1) * newAverage - count * oldAverage} years.`, " years"));

const mediumReplacement = [
  [6, 25, 19, 31], [8, 32, 24, 40], [10, 28, 22, 35], [12, 36, 30, 44], [15, 24, 18, 33],
  [7, 45, 39, 52], [9, 31, 26, 40], [11, 42, 35, 49], [14, 27, 20, 36], [18, 34, 29, 45],
].map(([count, oldAverage, removed, added]) => make(`The average of ${count} values is ${oldAverage}. A value ${removed} is replaced and the average becomes ${added}. Find the new value.`, removed + count * (added - oldAverage), "Medium", `New value = old value + count x average increase = ${removed} + ${count}x(${added}-${oldAverage}) = ${removed + count * (added - oldAverage)}.`));

const mediumCombined = [
  [20, 32, 15, 24], [18, 45, 12, 30], [25, 28, 15, 36], [30, 42, 20, 33], [16, 25, 24, 35],
  [22, 38, 18, 29], [12, 54, 28, 31], [35, 26, 15, 40], [24, 48, 16, 30], [40, 33, 20, 45],
].map(([countA, averageA, countB, averageB]) => make(`Group A has ${countA} people with average ${averageA}; Group B has ${countB} people with average ${averageB}. Find the combined average.`, (countA * averageA + countB * averageB) / (countA + countB), "Medium", `Combined average = (${countA}x${averageA}+${countB}x${averageB})/${countA + countB} = ${(countA * averageA + countB * averageB) / (countA + countB)}.`));

const mediumWeighted = [
  [2, 70, 3, 80], [3, 62, 2, 77], [4, 75, 1, 90], [5, 68, 3, 82], [6, 72, 4, 84],
  [2, 55, 5, 65], [7, 74, 3, 88], [4, 81, 6, 76], [8, 69, 2, 95], [3, 85, 7, 73],
].map(([weightA, valueA, weightB, valueB]) => make(`A product is made from ${weightA} kg at Rs ${valueA}/kg and ${weightB} kg at Rs ${valueB}/kg. Find the average cost per kg.`, (weightA * valueA + weightB * valueB) / (weightA + weightB), "Medium", `Weighted average = (${weightA}x${valueA}+${weightB}x${valueB})/${weightA + weightB}.`, " per kg"));

const mediumRuns = [
  [4, 42, 5, 58], [5, 36, 4, 61], [6, 48, 3, 72], [3, 55, 7, 64], [8, 39, 2, 75],
  [7, 46, 5, 63], [9, 52, 4, 68], [10, 44, 6, 71], [5, 67, 8, 59], [12, 41, 3, 83],
].map(([oldInnings, oldAverage, newInnings, newAverage]) => make(`A player has an average of ${oldAverage} runs in ${oldInnings} innings. In the next ${newInnings} innings, the average is ${newAverage}. Find the overall average.`, (oldInnings * oldAverage + newInnings * newAverage) / (oldInnings + newInnings), "Medium", `Overall average = (${oldInnings}x${oldAverage}+${newInnings}x${newAverage})/${oldInnings + newInnings}.`, " runs"));

const mediumSalary = [
  [5, 28000, 6, 32000], [4, 35000, 8, 42000], [7, 24000, 3, 36000], [9, 30000, 6, 38000], [12, 26000, 8, 34000],
  [6, 45000, 4, 52000], [10, 29000, 5, 41000], [8, 37000, 7, 44000], [3, 60000, 9, 48000], [15, 22000, 5, 30000],
].map(([countA, salaryA, countB, salaryB], index) => make(`Two ${["office teams", "factory shifts", "consulting groups", "store branches", "support units", "research teams", "sales squads", "warehouse crews", "design cells", "field teams"][index]} have ${countA} members averaging Rs ${salaryA} and ${countB} members averaging Rs ${salaryB}. Find their combined average pay.`, (countA * salaryA + countB * salaryB) / (countA + countB), "Medium", `Combined average = (${countA}x${salaryA}+${countB}x${salaryB})/${countA + countB}.`, " rupees"));

const hardConsecutive = [
  [5, 22], [7, 31], [9, 44], [11, 58], [13, 75], [15, 92], [17, 108], [19, 125], [21, 143], [25, 170],
].map(([count, average]) => make(`The average of ${count} consecutive integers is ${average}. Find the smallest integer.`, average - Math.floor(count / 2), "Hard", `For an odd consecutive set, the average is the middle value; subtract ${Math.floor(count / 2)} to get the first value.`, ""));

const hardCorrection = [
  [20, 46, 64, 48], [15, 52, 71, 54], [25, 38, 55, 40], [18, 61, 83, 63], [30, 44, 68, 46],
  [22, 57, 79, 59], [16, 72, 91, 74], [28, 49, 77, 51], [24, 66, 88, 68], [32, 53, 75, 55],
].map(([count, wrongAverage, wrongValue, correctValue]) => make(`The average of ${count} numbers was calculated as ${wrongAverage} because ${wrongValue} was written instead of ${correctValue}. Find the correct average.`, (count * wrongAverage - wrongValue + correctValue) / count, "Hard", `Correct average = (${count}x${wrongAverage} - ${wrongValue} + ${correctValue})/${count}.`));

const hardAgeChange = [
  [4, 26, 6, 34], [5, 31, 7, 40], [6, 24, 8, 36], [7, 29, 5, 38], [8, 35, 6, 43],
  [9, 27, 4, 39], [10, 32, 5, 45], [12, 30, 8, 41], [15, 28, 6, 37], [18, 33, 7, 46],
].map(([count, oldAverage, years, newAverage]) => make(`The average age of ${count} people is ${oldAverage}. After ${years} years, ${count - 1} people remain. If their new average is ${newAverage}, find the age of the person who left.`, count * oldAverage + (count - 1) * years - (count - 1) * newAverage, "Hard", `Age left = old total + future ageing - remaining future total = ${count * oldAverage + (count - 1) * years - (count - 1) * newAverage}.`, " years"));

const hardAverageSpeed = [
  [60, 40, 60, 60], [80, 50, 80, 70], [100, 45, 100, 75], [120, 60, 120, 90], [150, 50, 150, 100],
  [90, 36, 90, 54], [200, 80, 200, 120], [240, 60, 240, 80], [300, 75, 300, 100], [360, 90, 360, 120],
].map(([distanceA, speedA, distanceB, speedB]) => make(`A vehicle travels ${distanceA} km at ${speedA} km/h and ${distanceB} km at ${speedB} km/h. Find its average speed.`, (distanceA + distanceB) / (distanceA / speedA + distanceB / speedB), "Hard", `Average speed = total distance/total time = ${distanceA + distanceB} / (${distanceA}/${speedA}+${distanceB}/${speedB}).`, " km/h"));

const hardWeightedGroups = [
  [3, 42, 5, 56, 2, 71], [4, 65, 6, 72, 3, 81], [5, 38, 7, 49, 4, 62], [6, 54, 3, 68, 5, 77], [8, 61, 4, 75, 2, 88],
  [7, 46, 5, 58, 6, 69], [9, 52, 2, 64, 4, 73], [10, 44, 3, 59, 5, 82], [12, 57, 6, 66, 3, 79], [15, 49, 5, 71, 4, 86],
].map(([countA, avgA, countB, avgB, countC, avgC], index) => make(`A ${["three-stage exam", "multi-round tournament", "three-part survey", "three-batch audit", "three-day campaign", "three-campus study", "three-product review", "three-region report", "three-round interview", "three-quarter forecast"][index]} has groups of ${countA}, ${countB}, and ${countC} observations with averages ${avgA}, ${avgB}, and ${avgC}. Find the combined average.`, (countA * avgA + countB * avgB + countC * avgC) / (countA + countB + countC), "Hard", `Overall average = (${countA}x${avgA}+${countB}x${avgB}+${countC}x${avgC})/${countA + countB + countC}.`));

const finalHard = [
  [4, 32, 6, 45], [5, 41, 7, 53], [6, 28, 8, 39], [7, 36, 5, 48], [8, 44, 4, 61],
  [9, 39, 6, 57], [10, 47, 5, 64], [12, 35, 8, 52], [14, 42, 6, 68], [16, 38, 9, 55],
].map(([firstCount, firstAverage, secondCount, secondAverage]) => make(`A training batch has ${firstCount} learners averaging ${firstAverage} points and another has ${secondCount} learners averaging ${secondAverage}. What is their combined average?`, (firstCount * firstAverage + secondCount * secondAverage) / (firstCount + secondCount), "Hard", `Combined average = (${firstCount}x${firstAverage}+${secondCount}x${secondAverage})/${firstCount + secondCount}.`));

const interleave = (groups: AverageQuestion[][]) => {
  const result: AverageQuestion[] = [];
  const longestGroup = Math.max(...groups.map((group) => group.length));
  for (let index = 0; index < longestGroup; index += 1) {
    for (const group of groups) {
      if (group[index]) result.push(group[index]);
    }
  }
  return result;
};

const easy = interleave([easyMean, easyMeanSets, easyTotal, easyMissing, easyAge, easyScores]);
const medium = interleave([mediumNewMember, mediumReplacement, mediumCombined, mediumWeighted, mediumRuns, mediumSalary]);
const hard = interleave([hardConsecutive, hardCorrection, hardAgeChange, hardAverageSpeed, hardWeightedGroups, finalHard]);
const allQuestions = [...easy, ...medium, ...hard].map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 180) throw new Error(`Average bank must contain 180 questions; found ${allQuestions.length}.`);
if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) throw new Error("Average questions must be unique.");

const normalizedPrompts = allQuestions.map((question) => question.question.toLowerCase().replace(/\d+/g, "#").replace(/[^a-z#]+/g, " ").trim());
if (normalizedPrompts.some((prompt, index) => prompt === normalizedPrompts[index - 1])) {
  throw new Error("Average questions must not repeat the same adjacent pattern.");
}

const difficultyCounts = allQuestions.reduce<Record<AptitudeDifficulty, number>>((counts, question) => {
  counts[question.difficulty] += 1;
  return counts;
}, { Easy: 0, Medium: 0, Hard: 0 });

if (Object.values(difficultyCounts).some((count) => count !== 60)) {
  throw new Error(`Average difficulty split must be 60/60/60; found ${difficultyCounts.Easy}/${difficultyCounts.Medium}/${difficultyCounts.Hard}.`);
}

export const averageQuestions: AptitudeQuestion[] = allQuestions;
