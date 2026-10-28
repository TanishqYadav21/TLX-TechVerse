import { questions as codingQuestions } from "./aptitude/questions";

type CodingDifficulty = "Easy" | "Medium" | "Hard";

export const questions = codingQuestions.map((question) => ({
	...question,
	difficulty: question.difficulty as CodingDifficulty,
}));
