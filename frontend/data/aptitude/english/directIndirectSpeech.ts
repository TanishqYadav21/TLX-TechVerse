import type { EnglishQuestion } from "./types";

export const directIndirectSpeechQuestions: EnglishQuestion[] = [
  // ==================== EASY ====================
  {
    id: 1,
    difficulty: "Easy",
    question: `He said, "I am tired."`,
    options: [
      "He said that he was tired.",
      "He said that I am tired.",
      "He says that he was tired.",
      "He said that he is tired."
    ],
    answer: 0,
    explanation: "In reported speech, 'am' changes to 'was' and 'I' changes to 'he'."
  },
  {
    id: 2,
    difficulty: "Easy",
    question: `She said, "I am happy."`,
    options: [
      "She said that she was happy.",
      "She said that I was happy.",
      "She says that she was happy.",
      "She said that she is happy."
    ],
    answer: 0,
    explanation: "'Am' changes to 'was' and the pronoun 'I' changes to 'she'."
  },
  {
    id: 3,
    difficulty: "Easy",
    question: `Ram said, "I have finished my work."`,
    options: [
      "Ram said that he had finished his work.",
      "Ram said that he has finished my work.",
      "Ram says that he finished his work.",
      "Ram said that I had finished his work."
    ],
    answer: 0,
    explanation: "Present perfect changes to past perfect and pronouns change accordingly."
  },
  {
    id: 4,
    difficulty: "Easy",
    question: `He said, "I will help you."`,
    options: [
      "He said that he would help me.",
      "He said that I would help him.",
      "He says that he will help me.",
      "He said that he will help you."
    ],
    answer: 0,
    explanation: "'Will' changes to 'would' in reported speech."
  },
  {
    id: 5,
    difficulty: "Easy",
    question: `She said, "I can swim."`,
    options: [
      "She said that she could swim.",
      "She said that she can swim.",
      "She said that I could swim.",
      "She says that she could swim."
    ],
    answer: 0,
    explanation: "'Can' changes to 'could' in reported speech."
  },
  {
    id: 6,
    difficulty: "Easy",
    question: `Ravi said, "I am reading a book."`,
    options: [
      "Ravi said that he was reading a book.",
      "Ravi said that he is reading a book.",
      "Ravi said that I was reading a book.",
      "Ravi says that he was reading a book."
    ],
    answer: 0,
    explanation: "Present continuous changes to past continuous."
  },
  {
    id: 7,
    difficulty: "Easy",
    question: `They said, "We are ready."`,
    options: [
      "They said that they were ready.",
      "They said that we were ready.",
      "They said that they are ready.",
      "They say that they were ready."
    ],
    answer: 0,
    explanation: "'Are' changes to 'were' and 'we' changes to 'they'."
  },
  {
    id: 8,
    difficulty: "Easy",
    question: `He said, "I bought a car."`,
    options: [
      "He said that he had bought a car.",
      "He said that he bought a car.",
      "He said that I had bought a car.",
      "He says that he had bought a car."
    ],
    answer: 0,
    explanation: "Simple past generally changes to past perfect in reported speech."
  },
  {
    id: 9,
    difficulty: "Easy",
    question: `She said, "I like coffee."`,
    options: [
      "She said that she liked coffee.",
      "She said that she likes coffee.",
      "She said that I liked coffee.",
      "She says that she liked coffee."
    ],
    answer: 0,
    explanation: "Simple present changes to simple past when the reporting verb is in the past."
  },
  {
    id: 10,
    difficulty: "Easy",
    question: `He said to me, "You are late."`,
    options: [
      "He told me that I was late.",
      "He told me that you were late.",
      "He said me that I was late.",
      "He told that I am late."
    ],
    answer: 0,
    explanation: "'Said to' changes to 'told' and 'you' changes according to the object."
  },
  {
    id: 11,
    difficulty: "Easy",
    question: `She said, "I have a pen."`,
    options: [
      "She said that she had a pen.",
      "She said that she has a pen.",
      "She said that I had a pen.",
      "She says that she had a pen."
    ],
    answer: 0,
    explanation: "Simple present 'have' changes to 'had'."
  },
  {
    id: 12,
    difficulty: "Easy",
    question: `He said, "I must go."`,
    options: [
      "He said that he had to go.",
      "He said that he must go.",
      "He said that I had to go.",
      "He says that he had to go."
    ],
    answer: 0,
    explanation: "'Must' expressing obligation commonly changes to 'had to'."
  },
  {
    id: 13,
    difficulty: "Easy",
    question: `Rita said, "I was busy."`,
    options: [
      "Rita said that she had been busy.",
      "Rita said that she was busy.",
      "Rita says that she had been busy.",
      "Rita said that I had been busy."
    ],
    answer: 0,
    explanation: "Past continuous/simple past context can shift back according to the reporting structure."
  },
  {
    id: 14,
    difficulty: "Easy",
    question: `He said, "I will come tomorrow."`,
    options: [
      "He said that he would come the next day.",
      "He said that he will come tomorrow.",
      "He said that I would come the next day.",
      "He says that he would come tomorrow."
    ],
    answer: 0,
    explanation: "'Will' becomes 'would' and 'tomorrow' becomes 'the next day'."
  },
  {
    id: 15,
    difficulty: "Easy",
    question: `She said, "I saw him yesterday."`,
    options: [
      "She said that she had seen him the previous day.",
      "She said that she saw him yesterday.",
      "She said that I had seen him the previous day.",
      "She says that she had seen him yesterday."
    ],
    answer: 0,
    explanation: "'Saw' changes to 'had seen' and 'yesterday' becomes 'the previous day'."
  },
  {
    id: 16,
    difficulty: "Easy",
    question: `He said to me, "Open the door."`,
    options: [
      "He told me to open the door.",
      "He said me to open the door.",
      "He told me that open the door.",
      "He asked that I open the door."
    ],
    answer: 0,
    explanation: "An imperative sentence changes to 'told + object + to + verb'."
  },
  {
    id: 17,
    difficulty: "Easy",
    question: `She said to me, "Please help me."`,
    options: [
      "She requested me to help her.",
      "She said me to help her.",
      "She told that I help her.",
      "She requested that help me."
    ],
    answer: 0,
    explanation: "A polite request can be reported using 'requested + object + to + verb'."
  },
  {
    id: 18,
    difficulty: "Easy",
    question: `He said to me, "Do you know him?"`,
    options: [
      "He asked me if I knew him.",
      "He told me if I knew him.",
      "He asked me that do I know him.",
      "He said me whether I know him."
    ],
    answer: 0,
    explanation: "Yes/no questions are reported using 'if' or 'whether' and statement word order."
  },
  {
    id: 19,
    difficulty: "Easy",
    question: `She said to him, "Where do you live?"`,
    options: [
      "She asked him where he lived.",
      "She asked him where did he live.",
      "She told him where he lived.",
      "She said him where he lived."
    ],
    answer: 0,
    explanation: "The question word remains, but the sentence changes to statement order."
  },
  {
    id: 20,
    difficulty: "Easy",
    question: `He said, "Hurrah! We have won the match."`,
    options: [
      "He exclaimed with joy that they had won the match.",
      "He said with joy that we have won the match.",
      "He exclaimed sadly that they won the match.",
      "He told that they had won the match."
    ],
    answer: 0,
    explanation: "'Hurrah' indicates joy, so the sentence is reported using 'exclaimed with joy'."
  },

  // ==================== MEDIUM ====================
  {
    id: 21,
    difficulty: "Medium",
    question: `The teacher said to the students, "You should work hard."`,
    options: [
      "The teacher advised the students that they should work hard.",
      "The teacher said the students to work hard.",
      "The teacher advised that you should work hard.",
      "The teacher told the students should work hard."
    ],
    answer: 0,
    explanation: "Advice is commonly reported using 'advised + object + that + clause'."
  },
  {
    id: 22,
    difficulty: "Medium",
    question: `He said to me, "Why are you crying?"`,
    options: [
      "He asked me why I was crying.",
      "He asked me why was I crying.",
      "He told me why I was crying.",
      "He asked that why I was crying."
    ],
    answer: 0,
    explanation: "The wh-word remains, while question word order changes to statement order."
  },
  {
    id: 23,
    difficulty: "Medium",
    question: `She said to me, "Have you completed your homework?"`,
    options: [
      "She asked me if I had completed my homework.",
      "She asked me had I completed my homework.",
      "She told me if I completed my homework.",
      "She asked that I had completed my homework."
    ],
    answer: 0,
    explanation: "The present perfect changes to past perfect and a yes/no question uses 'if'."
  },
  {
    id: 24,
    difficulty: "Medium",
    question: `He said to me, "Don't waste your time."`,
    options: [
      "He advised me not to waste my time.",
      "He told me do not waste my time.",
      "He advised me to not wasting my time.",
      "He said me not waste my time."
    ],
    answer: 0,
    explanation: "A negative command/advice is reported as 'advised + object + not to + verb'."
  },
  {
    id: 25,
    difficulty: "Medium",
    question: `The officer said to the soldier, "Stand straight."`,
    options: [
      "The officer ordered the soldier to stand straight.",
      "The officer said the soldier to stand straight.",
      "The officer ordered that the soldier stood straight.",
      "The officer told that the soldier stand straight."
    ],
    answer: 0,
    explanation: "An order is reported with 'ordered + object + to + verb'."
  },
  {
    id: 26,
    difficulty: "Medium",
    question: `Mother said to me, "Do not touch the stove."`,
    options: [
      "Mother warned me not to touch the stove.",
      "Mother said me not touch the stove.",
      "Mother warned that I did not touch the stove.",
      "Mother told me do not touch the stove."
    ],
    answer: 0,
    explanation: "A warning can be reported using 'warned + object + not to + verb'."
  },
  {
    id: 27,
    difficulty: "Medium",
    question: `He said, "I have been waiting for two hours."`,
    options: [
      "He said that he had been waiting for two hours.",
      "He said that he has been waiting for two hours.",
      "He said that I had been waiting for two hours.",
      "He says that he had been waiting for two hours."
    ],
    answer: 0,
    explanation: "Present perfect continuous changes to past perfect continuous."
  },
  {
    id: 28,
    difficulty: "Medium",
    question: `She said, "I was cooking dinner."`,
    options: [
      "She said that she had been cooking dinner.",
      "She said that she was cooking dinner.",
      "She said that I had been cooking dinner.",
      "She says that she had cooked dinner."
    ],
    answer: 0,
    explanation: "Past continuous commonly changes to past perfect continuous in reported speech."
  },
  {
    id: 29,
    difficulty: "Medium",
    question: `He said, "I had finished the work before sunset."`,
    options: [
      "He said that he had finished the work before sunset.",
      "He said that he has finished the work before sunset.",
      "He said that he finished the work before sunset.",
      "He says that he had finished the work before sunset."
    ],
    answer: 0,
    explanation: "Past perfect generally remains unchanged in reported speech."
  },
  {
    id: 30,
    difficulty: "Medium",
    question: `She said, "I may visit Delhi next week."`,
    options: [
      "She said that she might visit Delhi the following week.",
      "She said that she may visit Delhi next week.",
      "She said that I might visit Delhi the following week.",
      "She says that she might visit Delhi next week."
    ],
    answer: 0,
    explanation: "'May' changes to 'might' and 'next week' changes to 'the following week'."
  },
  {
    id: 31,
    difficulty: "Medium",
    question: `Rahul said to me, "Can you solve this problem?"`,
    options: [
      "Rahul asked me if I could solve that problem.",
      "Rahul asked me can I solve that problem.",
      "Rahul told me if I could solve this problem.",
      "Rahul asked that I can solve that problem."
    ],
    answer: 0,
    explanation: "'Can' changes to 'could' and 'this' changes to 'that'."
  },
  {
    id: 32,
    difficulty: "Medium",
    question: `The boy said, "I cannot understand this question."`,
    options: [
      "The boy said that he could not understand that question.",
      "The boy said that he cannot understand this question.",
      "The boy said that I could not understand that question.",
      "The boy says that he could not understand that question."
    ],
    answer: 0,
    explanation: "'Cannot' changes to 'could not' and 'this' changes to 'that'."
  },
  {
    id: 33,
    difficulty: "Medium",
    question: `She said to me, "When will you return?"`,
    options: [
      "She asked me when I would return.",
      "She asked me when would I return.",
      "She told me when I would return.",
      "She asked that when I would return."
    ],
    answer: 0,
    explanation: "The future form changes to 'would' and question order becomes statement order."
  },
  {
    id: 34,
    difficulty: "Medium",
    question: `He said to his friend, "Please lend me your book."`,
    options: [
      "He requested his friend to lend him his book.",
      "He told his friend lend him his book.",
      "He requested that his friend lent me his book.",
      "He said his friend to lend him the book."
    ],
    answer: 0,
    explanation: "A polite request is changed to 'requested + object + to + verb'."
  },
  {
    id: 35,
    difficulty: "Medium",
    question: `The captain said to the players, "Let us practice harder."`,
    options: [
      "The captain suggested that they should practice harder.",
      "The captain ordered the players to practice harder.",
      "The captain told the players let us practice harder.",
      "The captain requested the players that they practiced harder."
    ],
    answer: 0,
    explanation: "'Let us' expressing a suggestion is commonly reported using 'suggested that'."
  },
  {
    id: 36,
    difficulty: "Medium",
    question: `He said, "Alas! I have lost my wallet."`,
    options: [
      "He exclaimed with sorrow that he had lost his wallet.",
      "He exclaimed with joy that he had lost his wallet.",
      "He said sadly that I have lost my wallet.",
      "He told that he lost his wallet."
    ],
    answer: 0,
    explanation: "'Alas' expresses sorrow, so 'exclaimed with sorrow' is appropriate."
  },
  {
    id: 37,
    difficulty: "Medium",
    question: `She said, "What a beautiful painting it is!"`,
    options: [
      "She exclaimed that it was a very beautiful painting.",
      "She asked what a beautiful painting it was.",
      "She said that it is a beautiful painting.",
      "She exclaimed that it is not beautiful."
    ],
    answer: 0,
    explanation: "An exclamatory sentence expressing admiration is changed into an appropriate assertive form."
  },
  {
    id: 38,
    difficulty: "Medium",
    question: `The teacher said, "The earth moves around the sun."`,
    options: [
      "The teacher said that the earth moves around the sun.",
      "The teacher said that the earth moved around the sun.",
      "The teacher said that the earth had moved around the sun.",
      "The teacher told that the earth moved around the sun."
    ],
    answer: 0,
    explanation: "A universal truth remains in the present tense."
  },
  {
    id: 39,
    difficulty: "Medium",
    question: `He said to me, "I met your brother here yesterday."`,
    options: [
      "He told me that he had met my brother there the previous day.",
      "He told me that he met your brother here yesterday.",
      "He said me that he had met my brother there yesterday.",
      "He told that he met my brother here the next day."
    ],
    answer: 0,
    explanation: "'Met' changes to 'had met', 'your' to 'my', 'here' to 'there', and 'yesterday' to 'the previous day'."
  },
  {
    id: 40,
    difficulty: "Medium",
    question: `She said to him, "You must finish the work today."`,
    options: [
      "She told him that he had to finish the work that day.",
      "She told him that he must finish the work today.",
      "She said him that he had to finish the work that day.",
      "She told him that I had to finish the work that day."
    ],
    answer: 0,
    explanation: "'Must' changes to 'had to' and 'today' changes to 'that day'."
  },

  // ==================== HARD ====================
  {
    id: 41,
    difficulty: "Hard",
    question: `The manager said to the employee, "Why have you not completed the report yet?"`,
    options: [
      "The manager asked the employee why he had not completed the report yet.",
      "The manager asked the employee why had he not completed the report yet.",
      "The manager told the employee why he had not completed the report yet.",
      "The manager asked that why he did not complete the report yet."
    ],
    answer: 0,
    explanation: "Present perfect changes to past perfect and the wh-question takes statement word order."
  },
  {
    id: 42,
    difficulty: "Hard",
    question: `He said to me, "If I were you, I would accept the offer."`,
    options: [
      "He advised me that if he were me, he would accept the offer.",
      "He advised me that if I were him, I would accept the offer.",
      "He told me that if I was you, I will accept the offer.",
      "He said me that if he were me, he will accept the offer."
    ],
    answer: 0,
    explanation: "The conditional structure is retained while pronouns change according to the reporting context."
  },
  {
    id: 43,
    difficulty: "Hard",
    question: `She said, "I had been working here for five years before I moved."`,
    options: [
      "She said that she had been working there for five years before she moved.",
      "She said that she has been working here for five years before she moved.",
      "She said that I had been working there for five years before I moved.",
      "She says that she had been working here for five years before she moved."
    ],
    answer: 0,
    explanation: "Past perfect continuous remains unchanged; 'here' changes to 'there' and pronouns change."
  },
  {
    id: 44,
    difficulty: "Hard",
    question: `The doctor said to the patient, "You should avoid oily food."`,
    options: [
      "The doctor advised the patient to avoid oily food.",
      "The doctor told the patient that you should avoid oily food.",
      "The doctor said the patient avoid oily food.",
      "The doctor advised that the patient avoided oily food."
    ],
    answer: 0,
    explanation: "Advice is naturally reported with 'advised + object + to + verb'."
  },
  {
    id: 45,
    difficulty: "Hard",
    question: `The teacher said to the student, "Do you know why the earth revolves around the sun?"`,
    options: [
      "The teacher asked the student if he knew why the earth revolves around the sun.",
      "The teacher asked the student did he know why the earth revolved around the sun.",
      "The teacher told the student if he knew why the earth revolves around the sun.",
      "The teacher asked that did he know why the earth revolves around the sun."
    ],
    answer: 0,
    explanation: "The yes/no question takes 'if', while the embedded universal truth remains in the present tense."
  },
  {
    id: 46,
    difficulty: "Hard",
    question: `He said, "I will have completed the project by next Monday."`,
    options: [
      "He said that he would have completed the project by the following Monday.",
      "He said that he will have completed the project by next Monday.",
      "He said that he would complete the project by the following Monday.",
      "He says that he would have completed the project by next Monday."
    ],
    answer: 0,
    explanation: "Future perfect changes to conditional perfect and 'next Monday' changes to 'the following Monday'."
  },
  {
    id: 47,
    difficulty: "Hard",
    question: `She said to me, "How long have you been living here?"`,
    options: [
      "She asked me how long I had been living there.",
      "She asked me how long had I been living there.",
      "She told me how long I had been living here.",
      "She asked me how long I have been living there."
    ],
    answer: 0,
    explanation: "Present perfect continuous changes to past perfect continuous and 'here' changes to 'there'."
  },
  {
    id: 48,
    difficulty: "Hard",
    question: `The judge said to the accused, "Tell me the truth."`,
    options: [
      "The judge ordered the accused to tell him the truth.",
      "The judge said the accused to tell me the truth.",
      "The judge asked that the accused told him the truth.",
      "The judge told the accused that tell me the truth."
    ],
    answer: 0,
    explanation: "A command is reported with 'ordered + object + to + verb'."
  },
  {
    id: 49,
    difficulty: "Hard",
    question: `He said, "I would rather stay at home than go to the party."`,
    options: [
      "He said that he would rather stay at home than go to the party.",
      "He said that he will rather stay at home than go to the party.",
      "He said that he had rather stayed at home than gone to the party.",
      "He says that he would rather stayed at home than go to the party."
    ],
    answer: 0,
    explanation: "The modal 'would' in this expression generally remains unchanged."
  },
  {
    id: 50,
    difficulty: "Hard",
    question: `She said, "I wish I knew the answer."`,
    options: [
      "She said that she wished she knew the answer.",
      "She said that she wishes she knew the answer.",
      "She said that I wished I knew the answer.",
      "She says that she wished she had known the answer."
    ],
    answer: 0,
    explanation: "The reporting verb causes 'wish' to shift to 'wished', while the unreal past form remains."
  },
  {
    id: 51,
    difficulty: "Hard",
    question: `He said to his brother, "Let's not discuss this matter now."`,
    options: [
      "He suggested to his brother that they should not discuss that matter then.",
      "He ordered his brother not to discuss this matter now.",
      "He told his brother that let's not discuss that matter then.",
      "He requested his brother that they did not discuss this matter."
    ],
    answer: 0,
    explanation: "'Let's not' expressing a suggestion is reported using 'suggested that they should not'."
  },
  {
    id: 52,
    difficulty: "Hard",
    question: `The scientist said, "Water boils at 100°C."`,
    options: [
      "The scientist said that water boils at 100°C.",
      "The scientist said that water boiled at 100°C.",
      "The scientist said that water had boiled at 100°C.",
      "The scientist told that water boiled at 100°C."
    ],
    answer: 0,
    explanation: "A scientific fact or universal truth normally remains in the present tense."
  },
  {
    id: 53,
    difficulty: "Hard",
    question: `She said to me, "Would you mind opening the window?"`,
    options: [
      "She asked me if I would mind opening the window.",
      "She told me would I mind opening the window.",
      "She asked me that would I mind opening the window.",
      "She said me to open the window."
    ],
    answer: 0,
    explanation: "The polite yes/no question is reported using 'asked + if' with statement word order."
  },
  {
    id: 54,
    difficulty: "Hard",
    question: `The principal said to the students, "You must not use mobile phones during the examination."`,
    options: [
      "The principal warned the students that they must not use mobile phones during the examination.",
      "The principal told the students that they had not to use mobile phones.",
      "The principal said the students not use mobile phones.",
      "The principal warned that the students did not use mobile phones."
    ],
    answer: 0,
    explanation: "A prohibition is naturally reported using 'warned' and the negative modal remains appropriate."
  },
  {
    id: 55,
    difficulty: "Hard",
    question: `He said to me, "Where did you put the documents that I gave you?"`,
    options: [
      "He asked me where I had put the documents that he had given me.",
      "He asked me where had I put the documents that he gave me.",
      "He told me where I had put the documents that I gave him.",
      "He asked me where I put the documents that he had given me."
    ],
    answer: 0,
    explanation: "Both past-tense verbs shift to past perfect and pronouns change according to the reporting context."
  },
  {
    id: 56,
    difficulty: "Hard",
    question: `She said, "By this time next year, I will have completed my degree."`,
    options: [
      "She said that by that time the following year, she would have completed her degree.",
      "She said that by this time next year, I will have completed my degree.",
      "She said that by that time next year, she would complete her degree.",
      "She says that by that time the following year, she will have completed her degree."
    ],
    answer: 0,
    explanation: "'Will have completed' changes to 'would have completed' and the time expressions are adjusted."
  },
  {
    id: 57,
    difficulty: "Hard",
    question: `The interviewer said to the candidate, "What would you do if you were selected?"`,
    options: [
      "The interviewer asked the candidate what he would do if he were selected.",
      "The interviewer asked the candidate what would he do if he was selected.",
      "The interviewer told the candidate what he would do if he were selected.",
      "The interviewer asked the candidate what he will do if he is selected."
    ],
    answer: 0,
    explanation: "The wh-question changes to statement order while the conditional structure remains."
  },
  {
    id: 58,
    difficulty: "Hard",
    question: `He said, "I cannot believe that she has already left."`,
    options: [
      "He said that he could not believe that she had already left.",
      "He said that he cannot believe that she has already left.",
      "He said that I could not believe that she had already left.",
      "He says that he could not believe that she had already left."
    ],
    answer: 0,
    explanation: "'Cannot' changes to 'could not' and 'has left' changes to 'had left'."
  },
  {
    id: 59,
    difficulty: "Hard",
    question: `She said to him, "Please don't forget to call me when you reach home."`,
    options: [
      "She requested him not to forget to call her when he reached home.",
      "She told him don't forget to call me when you reach home.",
      "She requested that he did not forget calling her when he reached home.",
      "She said him not forget to call her when he reached home."
    ],
    answer: 0,
    explanation: "A negative request uses 'requested + object + not to + verb', with pronouns adjusted."
  },
  {
    id: 60,
    difficulty: "Hard",
    question: `The old man said, "Alas! I wish I had listened to my father's advice."`,
    options: [
      "The old man exclaimed with regret that he wished he had listened to his father's advice.",
      "The old man exclaimed with joy that he wished he listened to his father's advice.",
      "The old man said that I wished I had listened to my father's advice.",
      "The old man exclaimed with sorrow that he wishes he had listened to his father's advice."
    ],
    answer: 0,
    explanation: "'Alas' expresses regret/sorrow, and the pronouns change according to the speaker."
  }
];