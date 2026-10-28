import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type ProbabilityQuestion = Omit<AptitudeQuestion, "id">;
const make = (question: string, answer: string, difficulty: AptitudeDifficulty, explanation: string, alternatives: string[] = ["1/3", "1/2", "2/3"]): ProbabilityQuestion => ({ question, options: [answer, ...alternatives.filter((option) => option !== answer).slice(0, 3)], answer: 0, explanation, difficulty });

const easyCoins = [
  [1, "1/2"], [2, "1/4"], [3, "3/8"], [4, "1/16"], [5, "5/16"], [6, "3/32"], [7, "7/128"], [8, "1/256"], [9, "9/512"], [10, "5/512"],
].map(([flips, answer]) => make(`What is the probability of getting exactly one head in ${flips} coin tosses?`, answer as string, "Easy", `Use favourable outcomes divided by total outcomes: C(${flips},1)/2^${flips}.`, ["1/4", "3/8", "1/2"]));
const easyDice = [
  [2, "1/6"], [3, "1/6"], [4, "1/6"], [5, "1/6"], [6, "1/6"], [7, "1/6"], [8, "5/6"], [9, "1/9"], [10, "1/6"], [11, "1/6"],
].map(([face, answer]) => make(`What is the probability of rolling a ${face} on a fair die?`, answer as string, "Easy", "A fair die has 6 equally likely outcomes, so one specified face has probability 1/6."));
const easyCards = [
  ["king", "1/13"], ["queen", "1/13"], ["ace", "1/13"], ["heart", "1/4"], ["diamond", "1/4"], ["club", "1/4"], ["spade", "1/4"], ["red card", "1/2"], ["black card", "1/2"], ["face card", "3/13"],
].map(([card, answer]) => make(`From a standard deck, what is the probability of drawing a ${card}?`, answer as string, "Easy", "Count favourable cards and divide by 52."));
const easyBalls = [
  ["red", 3, 10, "3/10"], ["blue", 4, 12, "1/3"], ["green", 5, 15, "1/3"], ["white", 2, 8, "1/4"], ["yellow", 6, 20, "3/10"], ["black", 7, 14, "1/2"], ["orange", 4, 16, "1/4"], ["purple", 8, 24, "1/3"], ["pink", 5, 25, "1/5"], ["brown", 9, 18, "1/2"],
].map(([colour, favourable, total, answer]) => make(`A bag has ${favourable} ${colour} balls among ${total} balls. What is the probability of drawing ${colour}?`, answer as string, "Easy", `Probability = favourable/total = ${favourable}/${total} = ${answer}.`));
const easyComplement = [
  ["rain", "3/10", "7/10"], ["delay", "1/5", "4/5"], ["defect", "2/25", "23/25"], ["failure", "1/8", "7/8"], ["late bus", "1/4", "3/4"], ["red", "2/9", "7/9"], ["odd", "1/2", "1/2"], ["prime", "1/3", "2/3"], ["six", "1/6", "5/6"], ["win", "3/10", "7/10"],
].map(([event, probability, answer]) => make(`The probability of ${event} is ${probability}. What is the probability that it does not occur?`, answer as string, "Easy", `Complement = 1 - ${probability} = ${answer}.`));
const easyGroups = [easyCoins, easyDice, easyCards, easyBalls, easyComplement];

const mediumTwoDice = [
  ["sum 7", "1/6"], ["sum 8", "5/36"], ["sum 9", "1/9"], ["sum 10", "1/12"], ["sum 11", "1/18"], ["sum 12", "1/36"], ["same numbers", "1/6"], ["at least one six", "11/36"], ["both even", "1/4"], ["one odd and one even", "1/2"],
].map(([event, answer]) => make(`Two fair dice are thrown. What is the probability of ${event}?`, answer as string, "Medium", `Count the outcomes satisfying the event among 36 ordered dice outcomes.`));
const mediumThreeCoins = [
  ["exactly two heads in 3 tosses", "3/8"], ["at least two heads", "1/2"], ["no tails", "1/8"], ["at least one tail", "7/8"], ["exactly one tail", "3/8"], ["alternating results", "1/4"], ["all results equal", "1/4"], ["two consecutive heads", "1/2"], ["first toss head", "1/2"], ["last toss tail", "1/2"],
].map(([event, answer]) => make(`Three coins are tossed. Find the probability of ${event}.`, answer as string, "Medium", `There are 8 equally likely sequences; count favourable sequences for the event.`));
const mediumWithoutReplacement = [
  [5, 3, "2/5"], [6, 2, "1/3"], [7, 3, "3/7"], [8, 4, "1/2"], [9, 2, "2/9"], [10, 5, "1/2"], [12, 3, "1/4"], [14, 7, "1/2"], [15, 5, "1/3"], [20, 4, "1/5"],
].map(([total, desired, answer]) => make(`A box has ${total} items, of which ${desired} are favourable. What is the probability of selecting one favourable item?`, answer as string, "Medium", `Favourable outcomes/total outcomes = ${desired}/${total} = ${answer}.`));
const mediumIndependent = [
  ["rain", "1/3", "traffic", "1/4", "1/12"], ["pass", "2/3", "attendance", "3/4", "1/2"], ["win", "1/5", "score", "2/5", "2/25"], ["defect", "1/10", "delay", "1/2", "1/20"], ["heads", "1/2", "six", "1/6", "1/12"], ["red", "1/3", "blue", "1/4", "1/12"], ["success", "3/5", "success", "2/3", "2/5"], ["late", "1/4", "absent", "1/5", "1/20"], ["ace", "1/13", "king", "1/13", "1/169"], ["odd", "1/2", "prime", "1/3", "1/6"],
].map(([eventA, probA, eventB, probB, answer]) => make(`If events ${eventA} and ${eventB} are independent with probabilities ${probA} and ${probB}, find the probability that both occur.`, answer as string, "Medium", `For independent events, P(A and B)=P(A)P(B)=${probA}x${probB}=${answer}.`));
const mediumConditional = [
  ["4 red and 6 blue; red given first red", "3/9"], ["5 boys and 4 girls; boy given first boy", "4/8"], ["6 aces and 46 others; ace given first ace", "3/51"], ["7 defective and 13 good; defective given first good", "7/19"], ["8 white and 12 black; white given first black", "8/19"], ["9 red and 11 green; red given first red", "8/19"], ["10 marked and 15 unmarked; marked given first marked", "9/24"], ["3 kings and 49 others; king given first king", "2/51"], ["5 odd and 7 even; odd given first even", "5/11"], ["4 winners and 8 losers; winner given first loser", "4/11"],
].map(([setup, answer]) => make(`A selection is made without replacement. For ${setup}, find the stated conditional probability.`, answer as string, "Medium", "After the first specified outcome, reduce both the favourable count and total count by one before calculating."));
const mediumGroups = [mediumTwoDice, mediumThreeCoins, mediumWithoutReplacement, mediumIndependent, mediumConditional];

const hardBayes = [
  ["machine A 60% output, 2% defects; machine B 40%, 5% defects", "7/46"], ["box A 70% items, 3% red; box B 30%, 8% red", "9/70"], ["route A 55% traffic, 4% late; route B 45%, 7% late", "23/110"], ["class A 40% students, 80% pass; class B 60%, 50% pass", "8/11"], ["supplier A 65% supply, 1% defect; supplier B 35%, 4% defect", "26/79"], ["factory A 75% output, 2% defect; factory B 25%, 6% defect", "3/10"], ["urn A 50% choice, 3 red; urn B 50%, 7 red", "3/5"], ["team A 45% players, 60% selected; team B 55%, 30% selected", "18/29"], ["shop A 80% sales, 5% return; shop B 20%, 10% return", "3/8"], ["exam A 30% candidates, 90% pass; exam B 70%, 40% pass", "27/55"],
].map(([setup, answer]) => make(`Use Bayes' theorem for this situation: ${setup}. Find the probability that a randomly observed case came from the first source given the observed event.`, answer as string, "Hard", "Apply P(source|event)=P(source)P(event|source)/total probability of the event."));
const hardBinomial = [
  ["exactly 3 successes in 5 trials with p=1/2", "5/16"], ["exactly 2 sixes in 4 die rolls", "25/324"], ["at least 1 head in 4 tosses", "15/16"], ["exactly 4 successes in 6 trials with p=1/2", "15/64"], ["no six in 3 die rolls", "125/216"], ["exactly 2 defective in 5 with defect rate 1/10", "81/2500"], ["at least 2 heads in 3 tosses", "1/2"], ["exactly 1 ace in 3 card draws approximately", "3/13"], ["all 4 tosses heads", "1/16"], ["exactly 5 successes in 7 fair trials", "21/128"],
].map(([event, answer]) => make(`Find the probability of ${event}.`, answer as string, "Hard", "Use the binomial model: C(n,r)p^r(1-p)^(n-r), or its complement when appropriate."));
const hardCards = [
  ["two aces in two draws", "1/221"], ["three hearts in three draws", "11/850"], ["one king and one queen in two draws", "8/663"], ["two red cards in succession", "25/102"], ["at least one ace in two draws", "33/221"], ["a pair in two draws", "3/17"], ["one card from each colour in two draws", "26/51"], ["two face cards", "11/221"], ["exactly one spade in two draws", "13/34"], ["two cards of same suit", "4/17"],
].map(([event, answer]) => make(`Two cards are drawn without replacement. Find the probability of ${event}.`, answer as string, "Hard", "Use sequential multiplication for ordered draws or combinations for unordered selections."));
const hardExpected = [
  ["fair die", "3.5"], ["fair coin head=1 tail=0", "1/2"], ["number on a fair die squared", "91/6"], ["fair die payout equal to face value", "3.5"], ["two dice sum", "7"], ["number of heads in 4 tosses", "2"], ["number of sixes in 12 rolls", "2"], ["red cards in 5 random cards approximately", "5/13"], ["successes in 10 trials with p=0.3", "3"], ["score from spinner 1,2,3,4 equally", "2.5"],
].map(([experiment, answer]) => make(`Find the expected value of the random variable: ${experiment}.`, answer as string, "Hard", "Expected value is the sum of value multiplied by its probability across all possible outcomes."));
const hardConditionalGames = [
  ["two dice, sum greater than 8 given sum is even", "1/3"], ["three tosses, at least two heads given first is head", "3/4"], ["card is a heart given it is red", "1/2"], ["bag has 4 red and 6 blue, red given colour is not blue", "1"], ["two dice, one die is 4 given sum is 9", "2/11"],
  ["two cards, second is an ace given first is not an ace", "4/51"], ["two coins, exactly one head given first is tail", "1/2"], ["die result is prime given it is odd", "2/3"], ["two dice, sum is 6 given both are even", "1/3"], ["three cards, all red given first is red", "25/101"],
].map(([event, answer]) => make(`Find the conditional probability that ${event}.`, answer as string, "Hard", "Restrict the sample space to the given condition, then divide the favourable conditional outcomes by all conditional outcomes."));
const hardGroups = [hardBayes, hardBinomial, hardCards, hardExpected, hardConditionalGames];

const interleave = (groups: ProbabilityQuestion[][]) => { const result: ProbabilityQuestion[] = []; const longest = Math.max(...groups.map((group) => group.length)); for (let index = 0; index < longest; index += 1) for (const group of groups) if (group[index]) result.push(group[index]); return result; };
const easy = interleave(easyGroups);
const medium = interleave(mediumGroups);
const hard = interleave(hardGroups);
const allQuestions = [...easy, ...medium, ...hard].map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 150) throw new Error(`Probability bank must contain 150 questions; found ${allQuestions.length}.`);
if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) throw new Error("Probability questions must be unique.");
const counts = allQuestions.reduce<Record<AptitudeDifficulty, number>>((result, question) => { result[question.difficulty] += 1; return result; }, { Easy: 0, Medium: 0, Hard: 0 });
if (counts.Easy !== 50 || counts.Medium !== 50 || counts.Hard !== 50) throw new Error(`Probability split must be 50/50/50; found ${counts.Easy}/${counts.Medium}/${counts.Hard}.`);

export const probabilityQuestions: AptitudeQuestion[] = allQuestions;
