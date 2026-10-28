import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type AlgebraQuestion = Omit<AptitudeQuestion, "id">;
const format = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
const make = (question: string, answer: string, difficulty: AptitudeDifficulty, explanation: string, alternatives = ["2", "3", "4"]): AlgebraQuestion => ({ question, options: [answer, ...alternatives.filter((option) => option !== answer).slice(0, 3)], answer: 0, explanation, difficulty });

const easySimplify = [["3x+5x", "8x"], ["7a-2a", "5a"], ["4y+3-2y", "2y+3"], ["9m-4+2m", "11m-4"], ["5p+2p-6", "7p-6"], ["8z-3z+4", "5z+4"], ["6b+2-4b", "2b+2"], ["10q-3q-5", "7q-5"], ["2r+5r+1", "7r+1"], ["12t-7t+9", "5t+9"]].map(([expression, answer]) => make(`Simplify the algebraic expression ${expression}.`, answer, "Easy", `Combine like terms to obtain ${answer}.`));
const easySubstitution: AlgebraQuestion[] = ([[1, 7, 5, "x+7"], [2, -3, 6, "2a-3"], [3, 4, 2, "3y+4"], [5, -1, 7, "5m-1"], [4, 2, 3, "4p+2"], [6, -5, 4, "6z-5"], [2, 9, 8, "2b+9"], [7, -6, 5, "7q-6"], [3, 1, 9, "3r+1"], [8, -7, 6, "8t-7"]] as [number, number, number, string][]).map(([coefficient, constant, value, expression]) => { const answer = String(coefficient * value + constant); return make(`If the variable in ${expression} has value ${value}, find the expression's value.`, answer, "Easy", `Substitute ${value}: ${coefficient}x${value}${constant >= 0 ? "+" : ""}${constant} = ${answer}.`); });
const easyLinear = [[2, 8], [3, 12], [4, 20], [5, 25], [6, 30], [7, 42], [8, 56], [9, 63], [10, 80], [12, 96]].map(([coefficient, result]) => make(`Solve ${coefficient}x = ${result}.`, String(result / coefficient), "Easy", `Divide both sides by ${coefficient}: x=${result}/${coefficient}=${result / coefficient}.`));
const easyProducts = [["x+3", "x+5"], ["a+2", "a+7"], ["y+4", "y+6"], ["m+1", "m+9"], ["p+5", "p+8"], ["z+2", "z+10"], ["b+3", "b+11"], ["q+6", "q+9"], ["r+4", "r+12"], ["t+1", "t+13"]].map(([first, second]) => make(`What is the constant term in the product (${first})(${second})?`, String(Number(first.match(/\d+/)?.[0]) * Number(second.match(/\d+/)?.[0])), "Easy", `The constant term is the product of the two constants.`));
const easyIdentities = [["(x+3)^2", "x^2+6x+9"], ["(a+4)^2", "a^2+8a+16"], ["(y-2)^2", "y^2-4y+4"], ["(m+5)^2", "m^2+10m+25"], ["(p-3)^2", "p^2-6p+9"], ["(z+6)^2", "z^2+12z+36"], ["(b-4)^2", "b^2-8b+16"], ["(q+7)^2", "q^2+14q+49"], ["(r-5)^2", "r^2-10r+25"], ["(t+8)^2", "t^2+16t+64"]].map(([expression, answer]) => make(`Expand ${expression}.`, answer, "Easy", `Use (u+v)^2=u^2+2uv+v^2.`));
const easy = [...easySimplify, ...easySubstitution, ...easyLinear, ...easyProducts, ...easyIdentities];
const extraEasy: AlgebraQuestion[] = [
	make("If 2x+5=17, find x.", "6", "Easy", "Subtract 5 and divide by 2: x=6."),
	make("What is the coefficient of y in 9y-4?", "9", "Easy", "The coefficient is the number multiplying y."),
	make("Evaluate 3a+2b when a=4 and b=5.", "22", "Easy", "3x4+2x5=22."),
	make("Simplify 4m+7-2m+3.", "2m+10", "Easy", "Combine 4m-2m and 7+3."),
	make("What is the value of x in x/5=9?", "45", "Easy", "Multiply both sides by 5."),
	make("Expand (p+2)(p+3).", "p^2+5p+6", "Easy", "Multiply each term: p^2+3p+2p+6."),
	make("If n=7, find n^2-3n.", "28", "Easy", "49-21=28."),
	make("What is the constant term in 6x+11?", "11", "Easy", "The term without a variable is 11."),
	make("Simplify 8r-3r+2r.", "7r", "Easy", "Combine like terms: 8-3+2=7."),
	make("If 4z=52, find z.", "13", "Easy", "Divide 52 by 4."),
];

const mediumEquations = [[3, 5, 20], [4, 7, 31], [5, 9, 44], [6, 8, 50], [7, 11, 67], [8, 6, 54], [9, 4, 49], [10, 13, 83], [12, 5, 65], [15, 7, 97]].map(([a, b, c]) => make(`Solve ${a}x + ${b} = ${c}.`, String((c - b) / a), "Medium", `Subtract ${b}, then divide by ${a}: x=(${c}-${b})/${a}=${(c - b) / a}.`));
const mediumSimultaneous = [[2, 3, 13, 1, 1, 4], [3, 2, 16, 1, 1, 5], [4, 3, 25, 1, 1, 7], [5, 2, 24, 1, 1, 6], [2, 5, 19, 1, 1, 5], [3, 4, 22, 1, 1, 7], [4, 5, 33, 1, 1, 8], [5, 3, 29, 1, 1, 7], [6, 2, 26, 1, 1, 5], [7, 3, 38, 1, 1, 9]].map(([a, b, sum, c, d, diff]) => make(`If ${a}x + ${b}y = ${sum} and x+y = ${diff}, find x.`, String((sum - b * diff) / (a - b)), "Medium", `Substitute y=${diff}-x and solve the resulting linear equation.`));
const mediumFactor = [["x^2+7x+12", "(x+3)(x+4)"], ["x^2+9x+20", "(x+4)(x+5)"], ["x^2+8x+15", "(x+3)(x+5)"], ["x^2+11x+30", "(x+5)(x+6)"], ["x^2+13x+42", "(x+6)(x+7)"], ["x^2+10x+21", "(x+3)(x+7)"], ["x^2+14x+45", "(x+5)(x+9)"], ["x^2+12x+35", "(x+5)(x+7)"], ["x^2+15x+56", "(x+7)(x+8)"], ["x^2+16x+63", "(x+7)(x+9)"]].map(([expression, answer]) => make(`Factorise ${expression}.`, answer, "Medium", `Find two factors whose product is the constant and sum is the coefficient of x.`));
const mediumExponents = [["2^3 x 2^4", "128"], ["3^2 x 3^3", "243"], ["5^2 x 5^3", "3125"], ["7^2 x 7^1", "343"], ["10^2 x 10^1", "1000"], ["2^8 / 2^5", "8"], ["3^5 / 3^3", "9"], ["5^4 / 5^2", "25"], ["7^3 / 7^1", "49"], ["10^4 / 10^2", "100"]].map(([expression, answer]) => make(`Evaluate ${expression}.`, answer, "Medium", `Use a^m x a^n=a^(m+n) or a^m/a^n=a^(m-n).`));
const mediumSequences = [[3, 5, 7, 12], [4, 7, 10, 16], [8, 12, 16, 24], [11, 15, 19, 27], [20, 25, 30, 40], [5, 9, 13, 21], [7, 12, 17, 27], [13, 18, 23, 33], [2, 8, 14, 26], [10, 16, 22, 34]].map(([first, second, third, answer]) => make(`An arithmetic sequence begins ${first}, ${second}, ${third}. Find the sixth term.`, String(answer), "Medium", `Common difference is ${second - first}; sixth term = ${first}+5x${second - first}=${answer}.`));
const medium = [...mediumEquations, ...mediumSimultaneous, ...mediumFactor, ...mediumExponents, ...mediumSequences];
const extraMedium: AlgebraQuestion[] = [
	make("Solve 5x-9=31.", "8", "Medium", "Add 9 and divide by 5: x=8."),
	make("Find the next term: 4, 9, 14, 19, ...", "24", "Medium", "The common difference is 5."),
	make("If x+y=12 and x-y=4, find x.", "8", "Medium", "Adding equations gives 2x=16, so x=8."),
	make("Factorise x^2-25.", "(x-5)(x+5)", "Medium", "Use difference of squares a^2-b^2."),
	make("Evaluate 2^5+3^2.", "41", "Medium", "32+9=41."),
	make("Find the slope of y=4x+7.", "4", "Medium", "In y=mx+c, m is the slope."),
	make("If 3x+2y=18 and x=4, find y.", "3", "Medium", "12+2y=18, so y=3."),
	make("Find the 8th term of AP 5, 9, 13, ...", "33", "Medium", "a8=5+7x4=33."),
	make("Simplify (x^2-9)/(x-3), x!=3.", "x+3", "Medium", "Factor numerator as (x-3)(x+3)."),
	make("If a:b=2:3 and a+b=25, find b.", "15", "Medium", "Five parts equal 25, so b=3x5=15."),
];

const hardQuadratic = [[1, 5, 6, "-2,-3"], [1, 7, 12, "-3,-4"], [1, 9, 20, "-4,-5"], [1, 11, 30, "-5,-6"], [1, 13, 42, "-6,-7"], [1, 8, 15, "-3,-5"], [1, 10, 21, "-3,-7"], [1, 12, 35, "-5,-7"], [1, 15, 56, "-7,-8"], [1, 16, 63, "-7,-9"]].map(([a, b, c, answer]) => make(`Find the roots of x^2 + ${b}x + ${c} = 0.`, answer as string, "Hard", `Factor the quadratic and set each factor equal to zero.`));
const hardInequality = [[3, 12, 4], [4, 20, 5], [5, 30, 6], [6, 42, 7], [7, 56, 8], [8, 72, 9], [9, 90, 10], [10, 110, 11], [11, 132, 12], [12, 156, 13]].map(([coefficient, limit, answer]) => make(`If ${coefficient}x - ${limit} > 0, what is the least integer value of x?`, String(answer), "Hard", `Solve x>${limit}/${coefficient}; the least integer satisfying it is ${answer}.`));
const hardSurds = [["sqrt(49)+sqrt(81)", "16"], ["sqrt(64)-sqrt(25)", "3"], ["2sqrt(36)+sqrt(9)", "15"], ["sqrt(121)+sqrt(144)", "23"], ["3sqrt(16)-sqrt(4)", "10"], ["sqrt(225)-sqrt(100)", "5"], ["sqrt(196)+sqrt(36)", "20"], ["2sqrt(25)+sqrt(64)", "18"], ["sqrt(169)-sqrt(49)", "6"], ["sqrt(256)+sqrt(16)", "20"]].map(([expression, answer]) => make(`Simplify ${expression}.`, answer, "Hard", `Evaluate each perfect square root and combine the terms.`));
const hardLogs = [[2, 8, 3], [3, 27, 3], [5, 125, 3], [10, 1000, 3], [2, 32, 5], [4, 64, 3], [7, 49, 2], [8, 512, 3], [9, 81, 2], [10, 100000, 5]].map(([base, value, answer]) => make(`Find log base ${base} of ${value}.`, String(answer), "Hard", `Since ${base}^${answer}=${value}, the logarithm is ${answer}.`));
const hardFunctions = [[2, 3, 5], [3, 4, 7], [4, 5, 9], [5, 6, 11], [6, 7, 13], [7, 8, 15], [8, 9, 17], [9, 10, 19], [10, 11, 21], [12, 13, 25]].map(([a, b, x]) => make(`For f(x)=${a}x+${b}, find x when f(x)=${a * x + b}.`, String(x), "Hard", `Set ${a}x+${b}=${a * x + b}; therefore x=${x}.`));
const hardWord = [[12, 3, 4], [15, 5, 6], [20, 4, 9], [24, 6, 7], [30, 5, 8], [36, 4, 11], [42, 6, 9], [48, 8, 7], [54, 6, 12], [60, 10, 9]].map(([total, firstRate, secondRate]) => make(`Two numbers have sum ${total}. The larger is ${firstRate} times the smaller minus ${secondRate}. Find the smaller number.`, String((total + secondRate) / (firstRate + 1)), "Hard", `Let smaller be x; larger=${firstRate}x-${secondRate}; solve x+larger=${total}.`));
const hard = [...hardQuadratic, ...hardInequality, ...hardSurds, ...hardLogs, ...hardFunctions, ...hardWord];

const interleave = (groups: AlgebraQuestion[][]) => { const result: AlgebraQuestion[] = []; const longest = Math.max(...groups.map((group) => group.length)); for (let index = 0; index < longest; index += 1) for (const group of groups) if (group[index]) result.push(group[index]); return result; };
const allQuestions = [...interleave([easySimplify, easySubstitution, easyLinear, easyProducts, easyIdentities, extraEasy]), ...interleave([mediumEquations, mediumSimultaneous, mediumFactor, mediumExponents, mediumSequences, extraMedium]), ...interleave([hardQuadratic, hardInequality, hardSurds, hardLogs, hardFunctions, hardWord])].map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 180) throw new Error(`Algebra bank must contain 180 questions; found ${allQuestions.length}.`);
if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) throw new Error("Algebra questions must be unique.");
const counts = allQuestions.reduce<Record<AptitudeDifficulty, number>>((result, question) => { result[question.difficulty] += 1; return result; }, { Easy: 0, Medium: 0, Hard: 0 });
if (counts.Easy !== 60 || counts.Medium !== 60 || counts.Hard !== 60) throw new Error(`Algebra split must be 60/60/60; found ${counts.Easy}/${counts.Medium}/${counts.Hard}.`);

export const algebraQuestions: AptitudeQuestion[] = allQuestions;
