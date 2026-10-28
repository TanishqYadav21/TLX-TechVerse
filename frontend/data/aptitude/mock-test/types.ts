export type MockDifficulty = "Medium" | "Hard";

export type MockSection =
  | "Quantitative"
  | "Reasoning"
  | "English";

export type MockQuestion = {
  id: string;
  section: MockSection;
  difficulty: MockDifficulty;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};