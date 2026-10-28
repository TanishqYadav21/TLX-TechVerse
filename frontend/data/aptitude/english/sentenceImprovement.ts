import type { EnglishQuestion } from "./types";

export const sentenceImprovementQuestions: EnglishQuestion[] = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Choose the correct improvement: She do her homework every day.",
    options: ["does her homework", "do her homeworks", "doing her homework", "has do her homework"],
    answer: 0,
    explanation: "With the singular subject 'She', the verb should be 'does'."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "Choose the correct improvement: He is senior than me.",
    options: ["senior to me", "senior from me", "more senior than me", "senior over me"],
    answer: 0,
    explanation: "The adjective 'senior' is followed by 'to', not 'than'."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "Choose the correct improvement: I have seen him yesterday.",
    options: ["I saw him yesterday", "I had seen him yesterday", "I have saw him yesterday", "I see him yesterday"],
    answer: 0,
    explanation: "A definite past time such as 'yesterday' requires the simple past tense."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "Choose the correct improvement: She is good in mathematics.",
    options: ["good at mathematics", "good on mathematics", "good with mathematics only", "good for mathematics"],
    answer: 0,
    explanation: "The standard expression is 'good at' a subject or activity."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "Choose the correct improvement: He is an honest man.",
    options: ["He is an honest man.", "He is a honest man.", "He is the honest man.", "He is honest a man."],
    answer: 0,
    explanation: "'Honest' begins with a vowel sound, so 'an' is correct."
  },
  {
    id: 6,
    difficulty: "Easy",
    question: "Choose the correct improvement: Neither Ram nor Shyam are present.",
    options: ["is present", "were present", "have present", "be present"],
    answer: 0,
    explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Shyam' is singular, so 'is' is correct."
  },
  {
    id: 7,
    difficulty: "Easy",
    question: "Choose the correct improvement: He does not knows the answer.",
    options: ["does not know the answer", "does not knew the answer", "did not knows the answer", "does not knowing the answer"],
    answer: 0,
    explanation: "After 'does not', the main verb must be in its base form: 'know'."
  },
  {
    id: 8,
    difficulty: "Easy",
    question: "Choose the correct improvement: She is more taller than her sister.",
    options: ["taller than her sister", "more tall than her sister", "most taller than her sister", "tallest than her sister"],
    answer: 0,
    explanation: "'Taller' already contains the comparative form, so 'more' is unnecessary."
  },
  {
    id: 9,
    difficulty: "Easy",
    question: "Choose the correct improvement: I prefer tea than coffee.",
    options: ["prefer tea to coffee", "prefer tea over than coffee", "prefer tea from coffee", "prefer tea with coffee"],
    answer: 0,
    explanation: "The standard construction is 'prefer A to B'."
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "Choose the correct improvement: He has been living here since five years.",
    options: ["for five years", "from five years", "by five years", "during five years"],
    answer: 0,
    explanation: "'For' is used with a period of time; 'since' is used with a point in time."
  },
  {
    id: 11,
    difficulty: "Easy",
    question: "Choose the correct improvement: She is afraid from dogs.",
    options: ["afraid of dogs", "afraid with dogs", "afraid by dogs", "afraid at dogs"],
    answer: 0,
    explanation: "The correct preposition after 'afraid' is 'of'."
  },
  {
    id: 12,
    difficulty: "Easy",
    question: "Choose the correct improvement: He discussed about the problem.",
    options: ["discussed the problem", "discussed about on the problem", "discussed regarding about the problem", "discussed on the problem"],
    answer: 0,
    explanation: "'Discuss' is transitive and does not require 'about' before its object."
  },
  {
    id: 13,
    difficulty: "Easy",
    question: "Choose the correct improvement: The news are true.",
    options: ["The news is true.", "The news were true.", "The news have true.", "The news are being true."],
    answer: 0,
    explanation: "'News' is grammatically singular and takes 'is'."
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "Choose the correct improvement: One of my friend lives here.",
    options: ["One of my friends lives here.", "One of my friend live here.", "One of my friends live here.", "One of my friend's lives here."],
    answer: 0,
    explanation: "After 'one of', a plural noun is required, while the verb remains singular."
  },
  {
    id: 15,
    difficulty: "Easy",
    question: "Choose the correct improvement: He returned back home.",
    options: ["He returned home.", "He returned to back home.", "He returned back to home.", "He has returned back home."],
    answer: 0,
    explanation: "'Return' already conveys the meaning of going back, so 'back' is redundant."
  },
  {
    id: 16,
    difficulty: "Easy",
    question: "Choose the correct improvement: She is married with a doctor.",
    options: ["married to a doctor", "married by a doctor", "married from a doctor", "married with doctor"],
    answer: 0,
    explanation: "The standard expression is 'married to someone'."
  },
  {
    id: 17,
    difficulty: "Easy",
    question: "Choose the correct improvement: He entered into the room.",
    options: ["He entered the room.", "He entered into in the room.", "He entered inside the room.", "He entered to the room."],
    answer: 0,
    explanation: "When 'enter' is followed by a place, 'into' is generally unnecessary."
  },
  {
    id: 18,
    difficulty: "Easy",
    question: "Choose the correct improvement: She has a lot of furnitures.",
    options: ["a lot of furniture", "many furnitures", "a lot furniture", "many furniture"],
    answer: 0,
    explanation: "'Furniture' is an uncountable noun and does not normally take a plural form."
  },
  {
    id: 19,
    difficulty: "Easy",
    question: "Choose the correct improvement: He is suffering with fever.",
    options: ["suffering from fever", "suffering by fever", "suffering of fever", "suffering at fever"],
    answer: 0,
    explanation: "The correct expression is 'suffer from'."
  },
  {
    id: 20,
    difficulty: "Easy",
    question: "Choose the correct improvement: I am knowing the answer.",
    options: ["I know the answer.", "I am know the answer.", "I have knowing the answer.", "I knew the answer now."],
    answer: 0,
    explanation: "'Know' is generally a stative verb and is not normally used in the continuous form."
  },

  {
    id: 21,
    difficulty: "Medium",
    question: "Choose the correct improvement: If I was you, I would accept the offer.",
    options: ["If I were you, I would accept the offer.", "If I am you, I would accept the offer.", "If I had you, I will accept the offer.", "If I be you, I would accept the offer."],
    answer: 0,
    explanation: "In a hypothetical condition, 'were' is traditionally used with 'I'."
  },
  {
    id: 22,
    difficulty: "Medium",
    question: "Choose the correct improvement: No sooner did he arrive when it started raining.",
    options: ["No sooner did he arrive than it started raining.", "No sooner he arrived when it started raining.", "No sooner did he arrived than it started raining.", "No sooner had he arrive when it started raining."],
    answer: 0,
    explanation: "The correlative conjunction is 'no sooner...than'."
  },
  {
    id: 23,
    difficulty: "Medium",
    question: "Choose the correct improvement: Hardly had I reached the station than the train left.",
    options: ["Hardly had I reached the station when the train left.", "Hardly I reached the station than the train left.", "Hardly had I reach the station when the train left.", "Hardly did I reached the station when the train left."],
    answer: 0,
    explanation: "The correct pair is 'hardly...when'."
  },
  {
    id: 24,
    difficulty: "Medium",
    question: "Choose the correct improvement: He is one of those students who works hard.",
    options: ["who work hard", "who works hardly", "who is working hard", "who has worked hard"],
    answer: 0,
    explanation: "The relative pronoun 'who' refers to the plural noun 'students', so 'work' is appropriate."
  },
  {
    id: 25,
    difficulty: "Medium",
    question: "Choose the correct improvement: The teacher as well as the students were present.",
    options: ["was present", "were being present", "have been present", "are present"],
    answer: 0,
    explanation: "With 'as well as', the verb agrees with the main subject 'teacher', which is singular."
  },
  {
    id: 26,
    difficulty: "Medium",
    question: "Choose the correct improvement: Neither of the two answers are correct.",
    options: ["Neither of the two answers is correct.", "Neither of the two answers are correctly.", "Neither of two answer is correct.", "Neither the two answers is correct."],
    answer: 0,
    explanation: "'Neither' is singular in formal standard usage and takes 'is'."
  },
  {
    id: 27,
    difficulty: "Medium",
    question: "Choose the correct improvement: He has been working here from 2020.",
    options: ["since 2020", "for 2020", "from since 2020", "by 2020"],
    answer: 0,
    explanation: "'Since' is used with a specific point in time such as a year."
  },
  {
    id: 28,
    difficulty: "Medium",
    question: "Choose the correct improvement: The sceneries of Kashmir are beautiful.",
    options: ["The scenery of Kashmir is beautiful.", "The sceneries of Kashmir is beautiful.", "The scenery of Kashmir are beautiful.", "The sceneries of Kashmir were beautiful."],
    answer: 0,
    explanation: "'Scenery' is an uncountable noun and normally has no plural form."
  },
  {
    id: 29,
    difficulty: "Medium",
    question: "Choose the correct improvement: He insisted to go there.",
    options: ["He insisted on going there.", "He insisted for going there.", "He insisted to going there.", "He insisted at going there."],
    answer: 0,
    explanation: "'Insist on' is followed by a gerund."
  },
  {
    id: 30,
    difficulty: "Medium",
    question: "Choose the correct improvement: She prevented me to enter the room.",
    options: ["She prevented me from entering the room.", "She prevented me to entering the room.", "She prevented me for entering the room.", "She prevented me enter the room."],
    answer: 0,
    explanation: "The standard structure is 'prevent someone from doing something'."
  },
  {
    id: 31,
    difficulty: "Medium",
    question: "Choose the correct improvement: He is accustomed to wake up early.",
    options: ["accustomed to waking up early", "accustomed for waking up early", "accustomed to wake early", "accustomed with waking up early"],
    answer: 0,
    explanation: "'Accustomed to' is followed by a noun or gerund."
  },
  {
    id: 32,
    difficulty: "Medium",
    question: "Choose the correct improvement: I look forward to meet you.",
    options: ["I look forward to meeting you.", "I look forward for meeting you.", "I look forward to met you.", "I look forward meeting you."],
    answer: 0,
    explanation: "In 'look forward to', 'to' is a preposition and is followed by a gerund."
  },
  {
    id: 33,
    difficulty: "Medium",
    question: "Choose the correct improvement: The reason is because he was late.",
    options: ["The reason is that he was late.", "The reason is due because he was late.", "The reason because he was late.", "The reason was because of he was late."],
    answer: 0,
    explanation: "In formal usage, 'the reason is that' avoids the redundant construction 'reason is because'."
  },
  {
    id: 34,
    difficulty: "Medium",
    question: "Choose the correct improvement: He asked me where was I going.",
    options: ["He asked me where I was going.", "He asked me where was going I.", "He asked me where am I going.", "He asked me where I am going?"],
    answer: 0,
    explanation: "In an indirect question, normal statement word order is used."
  },
  {
    id: 35,
    difficulty: "Medium",
    question: "Choose the correct improvement: She said that she will come tomorrow.",
    options: ["She said that she would come the next day.", "She said that she will come the next day.", "She said that she would came tomorrow.", "She said that she comes tomorrow."],
    answer: 0,
    explanation: "After a past reporting verb, 'will' generally changes to 'would'; 'tomorrow' becomes 'the next day' in reported speech."
  },
  {
    id: 36,
    difficulty: "Medium",
    question: "Choose the correct improvement: The furniture in this room are expensive.",
    options: ["The furniture in this room is expensive.", "The furnitures in this room are expensive.", "The furniture in this room have expensive.", "The furniture of this room are expensive."],
    answer: 0,
    explanation: "'Furniture' is an uncountable singular noun and takes 'is'."
  },
  {
    id: 37,
    difficulty: "Medium",
    question: "Choose the correct improvement: He denied to have stolen the money.",
    options: ["He denied having stolen the money.", "He denied to stealing the money.", "He denied have stolen the money.", "He denied for stealing the money."],
    answer: 0,
    explanation: "'Deny' is followed by a gerund, not an infinitive."
  },
  {
    id: 38,
    difficulty: "Medium",
    question: "Choose the correct improvement: I wish I know the answer.",
    options: ["I wish I knew the answer.", "I wish I had know the answer.", "I wish I knowed the answer.", "I wish I am knowing the answer."],
    answer: 0,
    explanation: "For a present unreal situation, 'wish' is followed by the simple past."
  },
  {
    id: 39,
    difficulty: "Medium",
    question: "Choose the correct improvement: If he would have studied, he would have passed.",
    options: ["If he had studied, he would have passed.", "If he studied, he would have passed.", "If he would study, he would pass.", "If he has studied, he would pass."],
    answer: 0,
    explanation: "A third conditional uses 'if + past perfect' followed by 'would have + past participle'."
  },
  {
    id: 40,
    difficulty: "Medium",
    question: "Choose the correct improvement: She is too weak that she cannot walk.",
    options: ["She is so weak that she cannot walk.", "She is very weak that she cannot walk.", "She is too much weak to walk.", "She is so much weak that she cannot walk."],
    answer: 0,
    explanation: "The correct correlative structure is 'so + adjective + that'."

  },

  {
    id: 41,
    difficulty: "Hard",
    question: "Choose the correct improvement: Scarcely had the meeting begun than the chairman left.",
    options: ["Scarcely had the meeting begun when the chairman left.", "Scarcely the meeting had begun than the chairman left.", "Scarcely had the meeting begin when the chairman left.", "Scarcely did the meeting begun when the chairman left."],
    answer: 0,
    explanation: "The standard pair is 'scarcely...when'."
  },
  {
    id: 42,
    difficulty: "Hard",
    question: "Choose the correct improvement: It is high time we leave.",
    options: ["It is high time we left.", "It is high time we have left.", "It is high time we will leave.", "It is high time we had leave."],
    answer: 0,
    explanation: "After 'it is high time', the simple past is commonly used to express that something should already be done."
  },
  {
    id: 43,
    difficulty: "Hard",
    question: "Choose the correct improvement: He behaves as if he is the owner of the company.",
    options: ["He behaves as if he were the owner of the company.", "He behaves as if he be the owner of the company.", "He behaves as if he has been the owner of the company.", "He behaves as if he will be the owner of the company."],
    answer: 0,
    explanation: "For an unreal or hypothetical present situation, 'as if + were' is used."
  },
  {
    id: 44,
    difficulty: "Hard",
    question: "Choose the correct improvement: Not only he lost his job but also his house.",
    options: ["Not only did he lose his job but also his house.", "Not only he did lose his job but also his house.", "Not only he loses his job but also his house.", "Not only had he lose his job but also his house."],
    answer: 0,
    explanation: "When 'not only' begins a sentence, inversion is required: 'did he lose'."
  },
  {
    id: 45,
    difficulty: "Hard",
    question: "Choose the correct improvement: The more you practise, better you become.",
    options: ["The more you practise, the better you become.", "More you practise, better you become.", "The more you practise, better become you.", "More you practise, the better become you."],
    answer: 0,
    explanation: "The correct comparative correlative structure is 'the more..., the better...'."
  },
  {
    id: 46,
    difficulty: "Hard",
    question: "Choose the correct improvement: He is one of the best player in the team.",
    options: ["He is one of the best players in the team.", "He is one of the best player of the team.", "He is one of the better player in the team.", "He is one of best players in the team."],
    answer: 0,
    explanation: "After 'one of the best', the noun must be plural."
  },
  {
    id: 47,
    difficulty: "Hard",
    question: "Choose the correct improvement: Neither the manager nor the employees was willing to accept the proposal.",
    options: ["Neither the manager nor the employees were willing to accept the proposal.", "Neither the manager nor the employees was willing to accept the proposal.", "Neither the manager nor the employees is willing to accept the proposal.", "Neither the manager nor the employees has willing to accept the proposal."],
    answer: 0,
    explanation: "With 'neither...nor', the verb generally agrees with the nearer subject, 'employees', which is plural."
  },
  {
    id: 48,
    difficulty: "Hard",
    question: "Choose the correct improvement: The committee discussed about whether the proposal should be accepted.",
    options: [
      "The committee discussed whether the proposal should be accepted.",
      "The committee discussed about if the proposal should be accepted.",
      "The committee discussed on whether the proposal should be accepted.",
      "The committee discussed regarding whether the proposal should be accepted about."
    ],
    answer: 0,
    explanation: "'Discuss' takes its object directly and does not require 'about'."
  },
  {
    id: 49,
    difficulty: "Hard",
    question: "Choose the correct improvement: Had I knew about the problem, I would have helped you.",
    options: ["Had I known about the problem, I would have helped you.", "Had I know about the problem, I would have helped you.", "Had I knew about the problem, I would help you.", "Had I knowing about the problem, I would have helped you."],
    answer: 0,
    explanation: "In an inverted third conditional, 'had' is followed by the past participle 'known'."
  },
  {
    id: 50,
    difficulty: "Hard",
    question: "Choose the correct improvement: Were he to arrive earlier, he would catch the train.",
    options: [
      "Were he to arrive earlier, he would catch the train.",
      "Were he arrived earlier, he would catch the train.",
      "Were he arriving earlier, he will catch the train.",
      "Were he to arrived earlier, he would catch the train."
    ],
    answer: 0,
    explanation: "'Were + subject + to-infinitive' is a valid formal form of the second conditional."
  },
  {
    id: 51,
    difficulty: "Hard",
    question: "Choose the correct improvement: He would rather to stay at home than go outside.",
    options: ["He would rather stay at home than go outside.", "He would rather staying at home than go outside.", "He would rather stayed at home than go outside.", "He would rather to staying at home than going outside."],
    answer: 0,
    explanation: "'Would rather' is followed by the base form of the verb."
  },
  {
    id: 52,
    difficulty: "Hard",
    question: "Choose the correct improvement: I would rather you don't tell anyone about this.",
    options: ["I would rather you didn't tell anyone about this.", "I would rather you don't told anyone about this.", "I would rather you won't tell anyone about this.", "I would rather you hadn't tell anyone about this."],
    answer: 0,
    explanation: "After 'would rather + subject', the past simple is used for a present or future preference."
  },
  {
    id: 53,
    difficulty: "Hard",
    question: "Choose the correct improvement: The principal, along with the teachers, have attended the meeting.",
    options: ["The principal, along with the teachers, has attended the meeting.", "The principal, along with the teachers, have attend the meeting.", "The principal, along with the teachers, are attending the meeting.", "The principal, along with the teachers, were attended the meeting."],
    answer: 0,
    explanation: "The main subject is 'principal', which is singular; 'along with' does not change the subject's number."
  },
  {
    id: 54,
    difficulty: "Hard",
    question: "Choose the correct improvement: He is so intelligent boy that everyone admires him.",
    options: [
      "He is such an intelligent boy that everyone admires him.",
      "He is so an intelligent boy that everyone admires him.",
      "He is such intelligent boy that everyone admires him.",
      "He is very such intelligent boy that everyone admires him."
    ],
    answer: 0,
    explanation: "The correct structure is 'such + a/an + adjective + noun + that'."
  },
  {
    id: 55,
    difficulty: "Hard",
    question: "Choose the correct improvement: No other city in India is as large than Mumbai.",
    options: [
      "No other city in India is as large as Mumbai.",
      "No other city in India is so large than Mumbai.",
      "No other city in India is larger as Mumbai.",
      "No other city in India is as larger as Mumbai."
    ],
    answer: 0,
    explanation: "The positive degree comparison uses 'as...as'."
  },
  {
    id: 56,
    difficulty: "Hard",
    question: "Choose the correct improvement: The number of applicants have increased considerably.",
    options: [
      "The number of applicants has increased considerably.",
      "The number of applicants have increase considerably.",
      "The numbers of applicants has increased considerably.",
      "The number of applicants are increased considerably."
    ],
    answer: 0,
    explanation: "'The number of' is singular and therefore takes 'has'."
  },
  {
    id: 57,
    difficulty: "Hard",
    question: "Choose the correct improvement: A number of students is absent today.",
    options: [
      "A number of students are absent today.",
      "A number of students is being absent today.",
      "A number of students has absent today.",
      "A number of student are absent today."
    ],
    answer: 0,
    explanation: "'A number of' means several and takes a plural verb."
  },
  {
    id: 58,
    difficulty: "Hard",
    question: "Choose the correct improvement: He not only completed the project but also he submitted it before the deadline.",
    options: [
      "He not only completed the project but also submitted it before the deadline.",
      "He not only completed the project but also he has submitted it before the deadline.",
      "He not only completing the project but also submitted it before the deadline.",
      "He not only had completed the project but also he submit it before the deadline."
    ],
    answer: 0,
    explanation: "For parallel structure, 'completed' and 'submitted' should be coordinated directly."
  },
  {
    id: 59,
    difficulty: "Hard",
    question: "Choose the correct improvement: Having finished the work, the television was switched on by Ravi.",
    options: [
      "Having finished the work, Ravi switched on the television.",
      "Having finished the work, the television switched on Ravi.",
      "Having finished the work, the work was switched on by Ravi.",
      "Having finished the work, Ravi was switched on the television."
    ],
    answer: 0,
    explanation: "The introductory participial phrase must logically refer to the person who finished the work: Ravi."
  },
  {
    id: 60,
    difficulty: "Hard",
    question: "Choose the correct improvement: The report needs to be carefully examined before it is submitted.",
    options: [
      "The report needs to be carefully examined before it is submitted.",
      "The report needs carefully to be examined before it is submitted.",
      "The report needs to carefully be examined before it submitted.",
      "The report need to be carefully examined before it is submitted."
    ],
    answer: 0,
    explanation: "The original sentence is grammatically correct, so no improvement is required."
  }
];