export type Difficulty = "Easy" | "Medium" | "Hard";

export type EnglishQuestion = {
  id: number;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};