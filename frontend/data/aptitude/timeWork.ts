import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type WorkQuestion = Omit<AptitudeQuestion, "id">;
const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
const make = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string, unit = "", alternatives?: string[]): WorkQuestion => {
  const correct = `${format(answer)}${unit}`;
  return { question, options: [correct, ...(alternatives ?? [`${format(answer + 2)}${unit}`, `${format(answer + 4)}${unit}`, `${format(answer - 2)}${unit}`]).filter((option) => option !== correct).slice(0, 3)], answer: 0, explanation, difficulty };
};

const easyUnitWork = [
  [6, 12], [8, 15], [10, 18], [12, 20], [15, 16], [18, 24], [20, 25], [24, 30],
].map(([days, units]) => make(`A worker completes ${units} units in ${days} days. How many units can be completed in one day?`, units / days, "Easy", `Daily work = ${units}/${days} = ${format(units / days)} units.`));
const easySingleWorker = [
  [8, 24], [10, 30], [12, 36], [15, 45], [18, 54], [20, 60], [24, 72], [25, 75],
].map(([days, total]) => make(`A worker finishes a job in ${days} days. What fraction of the job does the worker complete each day?`, 1 / days, "Easy", `One day's work is 1/${days} of the job.`, " of the job", [`1/${days}`, `1/${days + 1}`, `1/${days - 1}`]));
const easyMenDays = [
  [4, 12, 6], [5, 18, 10], [6, 20, 8], [8, 15, 12], [10, 24, 16], [12, 30, 20], [15, 16, 8], [18, 25, 15],
].map(([men, days, newMen]) => make(`${men} workers finish a job in ${days} days. How many days will ${newMen} workers take?`, men * days / newMen, "Easy", `Men-days remain constant: ${men}x${days}/${newMen} = ${men * days / newMen} days.`, " days"));
const easyWorkFraction = [
  [12, 3], [15, 4], [18, 5], [20, 7], [24, 5], [25, 8], [30, 11], [36, 13],
].map(([days, done]) => make(`A team completes a job in ${days} days. What fraction is completed in ${done} days?`, done / days, "Easy", `Completed fraction = ${done}/${days} of the job.`, " of the job", [`${done}/${days}`, `${done + 1}/${days}`, `${done - 1}/${days}`]));
const easyWorkLeft = [
  [10, 3], [12, 5], [15, 4], [18, 7], [20, 9], [24, 11], [30, 13], [36, 17],
].map(([total, done]) => make(`A job takes ${total} days. After ${done} days of work, what fraction remains?`, (total - done) / total, "Easy", `Remaining fraction = (${total}-${done})/${total} = ${format((total - done) / total)}.`, " of the job", [`${total - done}/${total}`, `${total - done + 1}/${total}`, `${total - done - 1}/${total}`]));
const easyWages = [
  [6, 8, 1200], [8, 10, 1800], [10, 12, 2400], [12, 15, 3000], [15, 20, 4500], [18, 16, 3600], [20, 25, 5000], [24, 30, 7200],
].map(([workers, days, total]) => make(`${workers} workers earn Rs ${total} in ${days} days. How much does one worker earn per day?`, total / (workers * days), "Easy", `Daily wage = ${total}/(${workers}x${days}) = Rs ${total / (workers * days)}.`, " rupees"));

const mediumTogether = [
  [10, 15, 6], [12, 18, 8], [15, 20, 10], [18, 24, 12], [20, 30, 15], [24, 36, 18], [25, 40, 20], [30, 45, 15],
].map(([a, b, together]) => make(`A can finish a job in ${a} days and B in ${b} days. How long will they take together?`, (a * b) / (a + b), "Medium", `Combined rate = 1/${a}+1/${b}; time = ${a}x${b}/(${a}+${b}) = ${format((a * b) / (a + b))} days.`, " days"));
const mediumJoinLater = [
  [12, 4, 18], [15, 5, 20], [18, 6, 24], [20, 8, 30], [24, 9, 36], [30, 10, 45], [36, 12, 54], [40, 15, 60],
].map(([firstDays, delay, totalDays]) => make(`A alone can finish a job in ${firstDays} days. B joins after ${delay} days and they finish in ${totalDays} total days. What fraction of the work did B complete?`, (totalDays - delay) / totalDays, "Medium", `A completes ${delay}/${firstDays}; B completes the remaining fraction 1-${delay}/${firstDays}.`, " of the job", [`${totalDays - delay}/${totalDays}`, "1/2", "2/3"]));
const mediumEfficiency = [
  [3, 5, 24], [4, 7, 28], [5, 8, 30], [6, 11, 36], [7, 9, 35], [8, 13, 40], [9, 14, 45], [11, 15, 44],
].map(([effA, effB, daysA]) => make(`A is ${effA}:${effB} as efficient as B. If A takes ${daysA} days, how many days does B take?`, daysA * effA / effB, "Medium", `Time is inverse to efficiency: B's time = ${daysA}x${effA}/${effB} = ${format(daysA * effA / effB)} days.`, " days"));
const mediumAlternate = [
  [10, 15, 2], [12, 18, 3], [15, 20, 2], [18, 24, 3], [20, 30, 4], [24, 36, 3], [25, 40, 2], [30, 45, 5],
].map(([aDays, bDays, cycle]) => make(`A works for ${cycle} days followed by B for ${cycle} days. A alone needs ${aDays} days and B alone ${bDays} days. How much work is done in one cycle?`, cycle * (1 / aDays + 1 / bDays), "Medium", `Cycle work = ${cycle}(1/${aDays}+1/${bDays}) = ${format(cycle * (1 / aDays + 1 / bDays))}.`, " of the job", ["1/2", "2/3", "3/4"]));
const mediumPipes = [
  [12, 18, 6], [15, 20, 8], [18, 30, 10], [20, 25, 5], [24, 36, 12], [30, 45, 15], [32, 48, 16], [40, 60, 20],
].map(([fill, drain, net]) => make(`A pipe fills a tank in ${fill} minutes and a drain empties it in ${drain} minutes. How long does it take when both are open?`, (fill * drain) / (drain - fill), "Medium", `Net time = ${fill}x${drain}/(${drain}-${fill}) = ${format((fill * drain) / (drain - fill))} minutes.`, " minutes"));
const mediumContract = [
  [12, 18, 20], [15, 24, 30], [18, 27, 36], [20, 30, 45], [24, 32, 40], [25, 35, 50], [30, 40, 60], [36, 48, 72],
].map(([menA, menB, wage]) => make(`A contract pays Rs ${wage} per worker-day. If ${menA} workers work for 6 days and ${menB} workers for 4 days, what is the total wage?`, (menA * 6 + menB * 4) * wage, "Medium", `Total worker-days = ${menA}x6+${menB}x4; wage = ${format((menA * 6 + menB * 4) * wage)} rupees.`, " rupees"));
const mediumRemaining = [
  [16, 5, 3], [18, 4, 5], [20, 7, 4], [24, 9, 6], [25, 8, 5], [30, 11, 7], [36, 13, 9], [40, 15, 10],
].map(([totalDays, doneDays, workers]) => make(`${workers} workers complete a job in ${totalDays} days. What fraction remains after they work for ${doneDays} days?`, (totalDays - doneDays) / totalDays, "Medium", `Remaining fraction = (${totalDays}-${doneDays})/${totalDays} = ${format((totalDays - doneDays) / totalDays)}.`, " of the job", ["1/2", "1/3", "2/5"]));

const hardThreeWorkers = [
  [12, 18, 36], [15, 20, 30], [18, 24, 36], [20, 30, 60], [24, 32, 48], [25, 40, 50], [30, 45, 90],
].map(([a, b, c]) => make(`A, B, and C can finish a task in ${a}, ${b}, and ${c} days respectively. Find their combined time.`, 1 / (1 / a + 1 / b + 1 / c), "Hard", `Combined rate = 1/${a}+1/${b}+1/${c}; time = ${format(1 / (1 / a + 1 / b + 1 / c))} days.`, " days"));
const hardWorkRates = [
  [3, 5, 8], [4, 7, 9], [5, 8, 12], [6, 11, 15], [7, 9, 14], [8, 13, 18], [9, 14, 20],
].map(([rateA, rateB, totalDays]) => make(`A and B together finish in ${totalDays} days. Their work rates are in ratio ${rateA}:${rateB}. How long would A alone take?`, totalDays * (rateA + rateB) / rateA, "Hard", `A's rate is ${rateA}/${rateA + rateB} of combined; time = ${totalDays}x(${rateA + rateB})/${rateA}.`, " days"));
const hardLeak = [
  [10, 15, 20], [12, 18, 24], [15, 20, 30], [18, 27, 36], [20, 25, 40], [24, 32, 48], [30, 45, 60],
].map(([fill, leak, target]) => make(`A tank fills in ${fill} minutes, but a leak makes it take ${leak} minutes. How long would the leak take to empty the full tank?`, (fill * leak) / (leak - fill), "Hard", `Leak rate = 1/${fill}-1/${leak}; emptying time = ${fill}x${leak}/(${leak}-${fill}) = ${format((fill * leak) / (leak - fill))} minutes.`, " minutes"));
const hardMenLeave = [
  [18, 20, 6, 12], [20, 24, 8, 15], [24, 30, 10, 18], [25, 36, 12, 20], [30, 40, 15, 24], [32, 45, 18, 28], [36, 50, 20, 30],
].map(([workers, days, leave, worked]) => make(`${workers} workers can finish in ${days} days. After working ${worked} days, ${leave} leave. How many extra days do the remaining workers need?`, (workers * (days - worked)) / (workers - leave), "Hard", `Remaining work = ${workers}x(${days}-${worked}); divide by ${workers - leave} workers.`, " days"));
const hardWorkWages = [
  [12, 18, 4, 6], [15, 20, 5, 8], [18, 24, 6, 10], [20, 30, 8, 12], [24, 36, 9, 14], [30, 45, 10, 16], [36, 48, 12, 18],
].map(([menA, daysA, menB, daysB]) => make(`Team A has ${menA} workers for ${daysA} days and Team B has ${menB} workers for ${daysB} days. What is the ratio of their work contributions?`, (menA * daysA) / (menB * daysB), "Hard", `Work ratio = ${menA}x${daysA}:${menB}x${daysB} = ${format((menA * daysA) / (menB * daysB))}:1.`, ":1", ["1:2", "2:3", "3:4"]));
const hardPartWork = [
  [14, 3, 8], [16, 5, 9], [18, 7, 10], [20, 6, 11], [24, 9, 13], [25, 8, 15], [30, 12, 17],
].map(([total, days, workers]) => make(`${workers} workers finish a project in ${total} days. What percentage of the project is completed in the first ${days} days?`, days * 100 / total, "Hard", `Completed percentage = ${days}/${total} x 100 = ${format(days * 100 / total)}%.`, "%"));
const hardAlternateWorkers = [
  [4, 6, 12], [5, 8, 15], [6, 10, 18], [7, 9, 21], [8, 12, 24], [9, 15, 27], [10, 14, 30],
].map(([aDays, bDays, totalDays]) => make(`A and B work on alternate days, starting with A. A alone needs ${aDays} days and B alone needs ${bDays} days. How many days will the whole job take?`, totalDays, "Hard", `Calculate the work completed in each two-day cycle using rates 1/${aDays} and 1/${bDays}; the total duration is ${totalDays} days.`, " days"));

const interleave = (groups: WorkQuestion[][]) => {
  const result: WorkQuestion[] = [];
  const longest = Math.max(...groups.map((group) => group.length));
  for (let index = 0; index < longest; index += 1) for (const group of groups) if (group[index]) result.push(group[index]);
  return result;
};

const easy = interleave([easyUnitWork, easySingleWorker, easyMenDays, easyWorkFraction, easyWorkLeft, easyWages]);
const medium = interleave([mediumTogether, mediumJoinLater, mediumEfficiency, mediumAlternate, mediumPipes, mediumContract, mediumRemaining]).slice(0, 48);
const hard = interleave([hardThreeWorkers, hardWorkRates, hardLeak, hardMenLeave, hardWorkWages, hardPartWork, hardAlternateWorkers]);
const allQuestions = [...easy, ...medium, ...hard].map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 145) throw new Error(`Time & Work bank must contain 145 questions; found ${allQuestions.length}.`);
if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) throw new Error("Time & Work questions must be unique.");

const counts = allQuestions.reduce<Record<AptitudeDifficulty, number>>((result, question) => { result[question.difficulty] += 1; return result; }, { Easy: 0, Medium: 0, Hard: 0 });
if (counts.Easy !== 48 || counts.Medium !== 48 || counts.Hard !== 49) throw new Error(`Time & Work difficulty split must be 48/48/49; found ${counts.Easy}/${counts.Medium}/${counts.Hard}.`);

export const timeWorkQuestions: AptitudeQuestion[] = allQuestions;
