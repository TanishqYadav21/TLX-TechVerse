import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type PcQuestion = Omit<AptitudeQuestion, "id">;
const factorial = (n: number) => { let result = 1; for (let i = 2; i <= n; i += 1) result *= i; return result; };
const nPr = (n: number, r: number) => factorial(n) / factorial(n - r);
const nCr = (n: number, r: number) => factorial(n) / (factorial(r) * factorial(n - r));
const make = (question: string, answer: number, difficulty: AptitudeDifficulty, explanation: string): PcQuestion => ({ question, options: [String(answer), String(answer + 2), String(Math.max(0, answer - 2)), String(answer + 4)], answer: 0, explanation, difficulty });

const easyPermutations = [[4, 2], [5, 2], [6, 3], [7, 2], [8, 3], [9, 2], [5, 3], [6, 2], [7, 3], [8, 2]].map(([n, r]) => make(`How many arrangements can be made by selecting and arranging ${r} items from ${n} distinct items?`, nPr(n, r), "Easy", `Use nPr = ${n}!/(${n}-${r})! = ${nPr(n, r)}.`));
const easyCombinations = [[5, 2], [6, 2], [7, 3], [8, 2], [9, 3], [10, 2], [6, 3], [8, 3], [10, 3], [7, 2]].map(([n, r]) => make(`In how many ways can ${r} people be selected from ${n} people?`, nCr(n, r), "Easy", `Use nCr = ${n}!/(${r}!(${n}-${r})!) = ${nCr(n, r)}.`));
const easyWords = [["CAT", 6], ["DOG", 6], ["BOOK", 12], ["MOON", 12], ["STAR", 24], ["LAMP", 24], ["TREE", 24], ["FISH", 24], ["BIRD", 24], ["GATE", 24]].map(([word, answer]) => make(`How many arrangements of the letters in ${word} are possible when all letters are distinct?`, answer as number, "Easy", `There are ${String(word).length} distinct letters, so arrangements = ${String(word).length}!.`));
const easyDigits = [[4, 2], [5, 3], [6, 2], [7, 3], [8, 2], [9, 3], [5, 2], [6, 3], [7, 2], [8, 3]].map(([digits, length]) => make(`How many ${length}-digit numbers can be formed from ${digits} distinct non-zero digits without repetition?`, nPr(digits, length), "Easy", `Arrange ${length} positions from ${digits} digits: ${digits}P${length} = ${nPr(digits, length)}.`));
const easyGroups = [easyPermutations, easyCombinations, easyWords, easyDigits];

const mediumRepeatedWords = [["LEVEL", 30], ["APPLE", 60], ["MOM", 3], ["KAYAK", 30], ["BANANA", 60], ["PEPPER", 180], ["SUCCESS", 420], ["TATTOO", 180], ["COFFEE", 180], ["BALLOON", 420]].map(([word, answer]) => make(`How many distinct arrangements can be made from the letters of ${word}?`, answer as number, "Medium", `Divide the factorial of the length by factorials of repeated letters; result = ${answer}.`));
const mediumCommittee = [[8, 3, 2], [10, 4, 1], [12, 5, 2], [9, 4, 1], [14, 6, 2], [15, 5, 1], [11, 3, 1], [16, 4, 2], [13, 5, 1], [18, 6, 2]].map(([people, size, chair]) => make(`A committee of ${size} is selected from ${people} people, then one chairperson is chosen. How many outcomes are possible?`, nCr(people, size) * size, "Medium", `Choose the committee and then its chair: ${people}C${size} x ${size} = ${nCr(people, size) * size}.`));
const mediumCircular = [[4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1]].map(([people]) => make(`In how many ways can ${people} people sit around a circular table, considering rotations identical?`, factorial(people - 1), "Medium", `Circular arrangements = (${people}-1)! = ${factorial(people - 1)}.`));
const mediumTogether = [[5, 2], [6, 2], [7, 3], [8, 2], [9, 3], [10, 2], [11, 3], [12, 2], [13, 3], [14, 2]].map(([people, together]) => make(`How many arrangements of ${people} people in a row are possible if ${together} specified people must sit together?`, factorial(people - together + 1) * factorial(together), "Medium", `Treat the specified group as one block: (${people - together + 1})! x ${together}! = ${factorial(people - together + 1) * factorial(together)}.`));
const mediumGroups = [mediumRepeatedWords, mediumCommittee, mediumCircular, mediumTogether];

const hardRestrictions = [[6, 2], [7, 2], [8, 3], [9, 2], [10, 3], [11, 2], [12, 3], [13, 2], [14, 3], [15, 2]].map(([people, together]) => make(`How many row arrangements of ${people} people are possible if ${together} specified people must not sit together?`, factorial(people) - factorial(people - together + 1) * factorial(together), "Hard", `Subtract arrangements where the specified group is together from all ${people}! arrangements.`));
const hardAlternating = [[3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12]].map(([men, women]) => make(`In how many ways can ${men} men and ${women} women sit in a row if they must alternate?`, 2 * factorial(men) * factorial(women), "Hard", `Two possible gender patterns; arrangements = 2 x ${men}! x ${women}! = ${2 * factorial(men) * factorial(women)}.`));
const hardDistribution = [[6, 3], [7, 3], [8, 4], [9, 3], [10, 4], [11, 3], [12, 4], [13, 3], [14, 4], [15, 3]].map(([objects, boxes]) => make(`In how many ways can ${objects} identical objects be distributed among ${boxes} distinct boxes when empty boxes are allowed?`, nCr(objects + boxes - 1, boxes - 1), "Hard", `Stars and bars gives C(${objects + boxes - 1},${boxes - 1}) = ${nCr(objects + boxes - 1, boxes - 1)}.`));
const hardSelection = [[8, 3], [9, 4], [10, 3], [11, 4], [12, 5], [13, 3], [14, 4], [15, 5], [16, 3], [17, 4]].map(([n, r]) => make(`From ${n} candidates, how many ${r}-person teams can be formed if one particular candidate must be included?`, nCr(n - 1, r - 1), "Hard", `Fix the required candidate and choose remaining ${r - 1}: C(${n - 1},${r - 1}) = ${nCr(n - 1, r - 1)}.`));
const hardNecklace = [[4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1]].map(([beads]) => make(`How many necklaces can be made using ${beads} distinct beads when rotations and reflections are considered identical?`, factorial(beads - 1) / 2, "Hard", `For distinct beads, necklace count = (${beads}-1)!/2 = ${factorial(beads - 1) / 2}.`));
const hardGroups = [hardRestrictions, hardAlternating, hardDistribution, hardSelection, hardNecklace];

const extraEasy = [
	make("How many ways can 3 different books be arranged on a shelf?", factorial(3), "Easy", "Arrange all 3 books: 3! = 6."),
	make("How many ways can 4 different flags be displayed in a row?", factorial(4), "Easy", "Arrange all 4 flags: 4! = 24."),
	make("How many pairs can be selected from 8 players?", nCr(8, 2), "Easy", "Choose 2 from 8: 8C2 = 28."),
	make("How many committees of 3 can be formed from 9 volunteers?", nCr(9, 3), "Easy", "Choose 3 volunteers: 9C3 = 84."),
	make("How many 2-letter codes can be made from 6 different letters without repetition?", nPr(6, 2), "Easy", "Fill 2 ordered positions: 6P2 = 30."),
	make("How many 3-digit codes can be made from 7 digits without repetition?", nPr(7, 3), "Easy", "Fill 3 ordered positions: 7P3 = 210."),
	make("How many ways can a captain and vice-captain be chosen from 7 players?", nPr(7, 2), "Easy", "The roles are different: 7P2 = 42."),
	make("How many ways can 2 toppings be selected from 6 choices?", nCr(6, 2), "Easy", "Order does not matter: 6C2 = 15."),
	make("How many arrangements are possible for the letters of SUN?", factorial(3), "Easy", "Three distinct letters give 3! = 6 arrangements."),
	make("How many arrangements are possible for the letters of LION?", factorial(4), "Easy", "Four distinct letters give 4! = 24 arrangements."),
	make("How many 4-person groups can be chosen from 10 students?", nCr(10, 4), "Easy", "Choose 4 students: 10C4 = 210."),
	make("How many ways can 3 runners be selected from 8 runners?", nCr(8, 3), "Easy", "Choose 3 runners: 8C3 = 56."),
	make("How many 2-digit numbers can be formed from 5 distinct non-zero digits?", nPr(5, 2), "Easy", "Arrange 2 digits: 5P2 = 20."),
	make("How many 3-seat orders can be assigned from 6 guests?", nPr(6, 3), "Easy", "Assign ordered seats: 6P3 = 120."),
	make("How many ways can 5 different paintings be placed in a row?", factorial(5), "Easy", "Arrange all paintings: 5! = 120."),
	make("How many ways can 2 electives be chosen from 7 subjects?", nCr(7, 2), "Easy", "Choose without order: 7C2 = 21."),
	make("How many ways can a 4-letter password be made from 8 distinct letters without repetition?", nPr(8, 4), "Easy", "Ordered selection: 8P4 = 1680."),
	make("How many ways can 3 prizes be assigned to 5 finalists?", nPr(5, 3), "Easy", "Prize positions are distinct: 5P3 = 60."),
	make("How many ways can 4 friends be selected from 11 people?", nCr(11, 4), "Easy", "Choose 4: 11C4 = 330."),
	make("How many arrangements can be made with 6 different postcards?", factorial(6), "Easy", "Arrange all 6 postcards: 6! = 720."),
];

const extraMedium = [
	make("How many distinct arrangements can be made from the letters of MISSISSIPPI?", 34650, "Medium", "There are 11 letters with I repeated 4, S repeated 4, P repeated 2: 11!/(4!4!2!) = 34650."),
	make("How many ways can 5 people sit in a circle if two particular people must sit together?", 12, "Medium", "Treat the pair as one block: (5-2)! x 2 = 12 circular arrangements."),
	make("How many ways can 6 people sit in a circle if two particular people cannot sit together?", 72, "Medium", "Total circular arrangements 5! minus together cases 2x4! = 72."),
	make("How many 5-digit numbers can be formed from digits 1 to 7 without repetition?", nPr(7, 5), "Medium", "Arrange 5 of 7 digits: 7P5 = 2520."),
	make("How many 4-digit even numbers can be formed from 1,2,3,4,5,6 without repetition?", 180, "Medium", "Choose an even final digit and arrange the remaining positions: 3x5x4x3 = 180."),
	make("How many ways can 4 men and 3 women be selected from 7 men and 6 women?", nCr(7, 4) * nCr(6, 3), "Medium", "Choose men and women independently: 7C4 x 6C3 = 525."),
	make("How many arrangements of 7 books are possible if 3 particular books must remain together?", factorial(5) * factorial(3), "Medium", "Treat the 3 books as one block: 5! x 3! = 720."),
	make("How many ways can 5 identical balls be placed into 3 distinct boxes if each box gets at least one?", nCr(4, 2), "Medium", "Positive solutions of x+y+z=5: C(4,2)=6."),
	make("How many solutions does x+y+z=8 have for non-negative integers?", nCr(10, 2), "Medium", "Stars and bars: C(8+3-1,3-1)=C(10,2)=45."),
	make("How many ways can 3 letters be chosen from the word COMPUTER?", nCr(8, 3), "Medium", "All letters are distinct: 8C3 = 56."),
	make("How many ways can 4 people be arranged in a row if A must be first?", factorial(3), "Medium", "Fix A first and arrange the other 3: 3! = 6."),
	make("How many ways can 5 people be arranged if A must be last and B first?", factorial(3), "Medium", "Fix two positions and arrange remaining 3: 3! = 6."),
	make("How many ways can 3 men and 3 women sit alternately in a row starting with a man?", factorial(3) * factorial(3), "Medium", "Arrange men in 3 slots and women in 3 slots: 3!x3!=36."),
	make("How many ways can 6 different gifts be distributed one each to 4 children?", nPr(6, 4), "Medium", "Choose and assign gifts: 6P4 = 360."),
	make("How many ways can a 4-member panel be chosen from 12 people if a specific person is excluded?", nCr(11, 4), "Medium", "Choose all 4 from the remaining 11: 11C4=330."),
	make("How many ways can 2 identical prizes be given to 5 students, at most one per student?", nCr(5, 2), "Medium", "Select the two recipients: 5C2=10."),
	make("How many arrangements of the word ARRANGE are possible?", 1260, "Medium", "7 letters with A repeated 2 and R repeated 2: 7!/(2!2!)=1260."),
	make("How many ways can 3 projects be assigned to 5 different interns?", nPr(5, 3), "Medium", "Assign distinct projects: 5P3=60."),
	make("How many ways can 5 committee members choose a chair and secretary?", nPr(5, 2), "Medium", "Two distinct offices: 5P2=20."),
	make("How many routes are possible from one corner to the opposite corner using 4 right and 3 up moves?", nCr(7, 3), "Medium", "Arrange 3 up moves among 7 moves: 7C3=35."),
];

const extraHard = [
	make("How many 6-digit numbers greater than 400000 can be formed from 0,1,2,3,4,5 without repetition?", 300, "Hard", "First digit can be 4 or 5; count valid arrangements with zero handled separately = 300."),
	make("How many ways can 8 people sit around a table if two particular people must not sit together?", 3600, "Hard", "Total 7! minus together cases 2x6! = 3600."),
	make("How many ways can 6 married couples sit in a row if each couple must sit together?", factorial(6) * Math.pow(2, 6), "Hard", "Treat couples as blocks and arrange partners: 6!x2^6=46080."),
	make("How many ways can 5 men and 5 women sit around a circle with alternating genders?", 2 * factorial(4) * factorial(5), "Hard", "Arrange one gender circularly and place the other in gaps: 2x4!x5!=5760."),
	make("How many ways can 10 identical candies be distributed among 4 children with each receiving at least one?", nCr(9, 3), "Hard", "Positive solutions: C(10-1,4-1)=C(9,3)=84."),
	make("How many derangements are possible for 5 letters placed in 5 addressed envelopes?", 44, "Hard", "The derangement number !5 = 44."),
	make("How many ways can 4 non-adjacent seats be selected from 10 seats in a row?", nCr(7, 4), "Hard", "Non-adjacent selection formula C(10-4+1,4)=C(7,4)=35."),
	make("How many ways can 6 questions be selected from 10 if at least 2 must be from a set of 4?", nCr(4, 2) * nCr(6, 4) + nCr(4, 3) * nCr(6, 3) + nCr(4, 4) * nCr(6, 2), "Hard", "Add cases selecting 2, 3, or 4 from the special set: 90+80+15=185."),
	make("How many arrangements of 7 letters are possible if two identical letters are never adjacent?", 3600, "Hard", "Use total arrangements minus arrangements with the identical pair together; result is 3600 for the stated multiset."),
	make("How many ways can 8 people be divided into two unlabeled groups of 4?", nCr(8, 4) / 2, "Hard", "Choose one group and divide by 2 because groups are unlabeled: 8C4/2=35."),
];

const interleave = (groups: PcQuestion[][]) => { const result: PcQuestion[] = []; const longest = Math.max(...groups.map((group) => group.length)); for (let index = 0; index < longest; index += 1) for (const group of groups) if (group[index]) result.push(group[index]); return result; };
const easy = interleave([...easyGroups, extraEasy]);
const medium = interleave([...mediumGroups, extraMedium]);
const hard = interleave([...hardGroups, extraHard]);
const allQuestions = [...easy, ...medium, ...hard].map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 180) throw new Error(`Permutation & Combination bank must contain 180 questions; found ${allQuestions.length}.`);
if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) throw new Error("Permutation & Combination questions must be unique.");
const counts = allQuestions.reduce<Record<AptitudeDifficulty, number>>((result, question) => { result[question.difficulty] += 1; return result; }, { Easy: 0, Medium: 0, Hard: 0 });
if (counts.Easy !== 60 || counts.Medium !== 60 || counts.Hard !== 60) throw new Error(`Permutation & Combination split must be 60/60/60; found ${counts.Easy}/${counts.Medium}/${counts.Hard}.`);

export const permutationCombinationQuestions: AptitudeQuestion[] = allQuestions;
