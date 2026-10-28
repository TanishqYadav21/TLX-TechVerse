import { MockQuestion } from "./types";

export const englishMockQuestions: MockQuestion[] = [
  {
    id: "e001",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "Neither of the boys have completed their work.",
      "Neither of the boys has completed his work.",
      "Neither of the boys have completed his work.",
      "Neither of the boys has complete their work."
    ],
    answer: 1,
    explanation:
      "'Neither' is singular, so it takes 'has'. In formal usage, 'his' agrees with the singular antecedent."
  },
  {
    id: "e002",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the part of the sentence containing an error: 'Hardly had the train left than the accident was reported.'",
    options: [
      "Hardly had",
      "the train left",
      "than the accident",
      "was reported"
    ],
    answer: 2,
    explanation:
      "With 'hardly/scarcely/barely', the correct conjunction is 'when', not 'than'."
  },
  {
    id: "e003",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the most appropriate word: 'The manager's explanation was so ______ that everyone understood the issue.'",
    options: ["ambiguous", "lucid", "erratic", "obsolete"],
    answer: 1,
    explanation:
      "'Lucid' means clear and easy to understand."
  },
  {
    id: "e004",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct replacement: 'No sooner did he reach the station when the train departed.'",
    options: [
      "No sooner did he reach the station than the train departed.",
      "No sooner had he reached the station when the train departed.",
      "No sooner he reached the station than the train departed.",
      "No sooner did he reached the station than the train departed."
    ],
    answer: 0,
    explanation:
      "The standard structure is 'No sooner ... than'."
  },
  {
    id: "e005",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Meticulous'.",
    options: ["Careless", "Precise", "Hasty", "Casual"],
    answer: 1,
    explanation:
      "'Meticulous' means very careful and precise."
  },
  {
    id: "e006",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the antonym of 'Obsolete'.",
    options: ["Ancient", "Outdated", "Current", "Defunct"],
    answer: 2,
    explanation:
      "'Obsolete' means no longer useful or current; its opposite is 'current'."
  },
  {
    id: "e007",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'If I ______ about the meeting, I would have attended it.'",
    options: ["knew", "had known", "have known", "would know"],
    answer: 1,
    explanation:
      "This is a third conditional sentence: 'If + past perfect, would have + past participle'."
  },
  {
    id: "e008",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "The committee discussed about the proposal.",
      "The committee discussed the proposal.",
      "The committee discussed on the proposal.",
      "The committee had discussed about the proposal."
    ],
    answer: 1,
    explanation:
      "'Discuss' is transitive and does not normally take 'about' before its direct object."
  },
  {
    id: "e009",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the meaning of the idiom 'to leave no stone unturned'.",
    options: [
      "To avoid responsibility",
      "To make every possible effort",
      "To create unnecessary problems",
      "To postpone a decision"
    ],
    answer: 1,
    explanation:
      "The idiom means to make every possible effort to achieve or find something."
  },
  {
    id: "e010",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct passive voice: 'People believe that the company will announce the results tomorrow.'",
    options: [
      "The company is believed to announce the results tomorrow.",
      "The company is believed to have announced the results tomorrow.",
      "The company is believed to be announcing the results tomorrow.",
      "The company was believed to announce the results tomorrow."
    ],
    answer: 0,
    explanation:
      "The reporting structure can be changed to 'The company is believed to announce...'."
  },

  {
    id: "e011",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the correctly spelt word.",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
    answer: 1,
    explanation:
      "The correct spelling is 'Accommodation'."
  },
  {
    id: "e012",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the error: 'Each of the employees were asked to submit their identity proof.'",
    options: [
      "Each of the employees",
      "were asked",
      "to submit",
      "their identity proof"
    ],
    answer: 1,
    explanation:
      "'Each' is singular, so the verb should be 'was asked'."
  },
  {
    id: "e013",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Pragmatic'.",
    options: ["Idealistic", "Practical", "Emotional", "Theoretical"],
    answer: 1,
    explanation:
      "'Pragmatic' means dealing with problems in a practical way."
  },
  {
    id: "e014",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct indirect speech: He said, 'I have been waiting here for two hours.'",
    options: [
      "He said that he had been waiting there for two hours.",
      "He said that he has been waiting here for two hours.",
      "He said that he was waiting here for two hours.",
      "He said that he had waited here for two hours."
    ],
    answer: 0,
    explanation:
      "Present perfect continuous changes to past perfect continuous and 'here' changes to 'there' in reported speech."
  },
  {
    id: "e015",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'The officer insisted ______ seeing the original documents.'",
    options: ["to", "for", "on", "at"],
    answer: 2,
    explanation:
      "The correct preposition after 'insist' in this construction is 'on'."
  },
  {
    id: "e016",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "Scarcely had I entered the room than the lights went out.",
      "Scarcely I had entered the room when the lights went out.",
      "Scarcely had I entered the room when the lights went out.",
      "Scarcely did I entered the room when the lights went out."
    ],
    answer: 2,
    explanation:
      "The correct structure is 'Scarcely had ... when ...'."
  },
  {
    id: "e017",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the antonym of 'Benevolent'.",
    options: ["Kind", "Generous", "Malevolent", "Helpful"],
    answer: 2,
    explanation:
      "'Benevolent' means well-meaning or kind; 'malevolent' means wishing harm."
  },
  {
    id: "e018",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct form: 'The quality of these products ______ improved considerably.'",
    options: ["have", "has", "are", "were"],
    answer: 1,
    explanation:
      "The subject is 'quality', which is singular, so the correct verb is 'has'."
  },
  {
    id: "e019",
    section: "English",
    difficulty: "Medium",
    question:
      "One who can use both hands equally well is called:",
    options: ["Ambiguous", "Ambidextrous", "Amphibious", "Anonymous"],
    answer: 1,
    explanation:
      "'Ambidextrous' describes someone capable of using both hands equally well."
  },
  {
    id: "e020",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the best improvement: 'He is senior than me in this organisation.'",
    options: [
      "He is senior to me in this organisation.",
      "He is senior from me in this organisation.",
      "He is more senior than me in this organisation.",
      "No improvement"
    ],
    answer: 0,
    explanation:
      "The adjective 'senior' normally takes 'to', not 'than'."
  },

  {
    id: "e021",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Adept'.",
    options: ["Skilled", "Inexperienced", "Weak", "Reluctant"],
    answer: 0,
    explanation:
      "'Adept' means highly skilled or proficient."
  },
  {
    id: "e022",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the error: 'Neither the manager nor his assistants was willing to take responsibility.'",
    options: [
      "Neither the manager",
      "nor his assistants",
      "was willing",
      "to take responsibility"
    ],
    answer: 2,
    explanation:
      "With 'neither...nor', the verb generally agrees with the nearer subject. 'Assistants' is plural, so 'were willing' is required."
  },
  {
    id: "e023",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'The new policy will come ______ effect from Monday.'",
    options: ["on", "into", "in", "at"],
    answer: 1,
    explanation:
      "The fixed expression is 'come into effect'."
  },
  {
    id: "e024",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct indirect speech: She said, 'Do you know the answer?'",
    options: [
      "She asked me if I knew the answer.",
      "She told me if I knew the answer.",
      "She asked that I know the answer.",
      "She said whether I know the answer."
    ],
    answer: 0,
    explanation:
      "A yes/no question in reported speech uses 'asked + if/whether' and the tense shifts appropriately."
  },
  {
    id: "e025",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the antonym of 'Concise'.",
    options: ["Brief", "Precise", "Verbose", "Clear"],
    answer: 2,
    explanation:
      "'Concise' means brief; 'verbose' means using more words than necessary."
  },
  {
    id: "e026",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "The data is insufficient to draw a conclusion.",
      "The data are insufficient to draw a conclusion.",
      "The datas are insufficient to draw a conclusion.",
      "The data were insufficient to draws a conclusion."
    ],
    answer: 1,
    explanation:
      "In formal academic usage, 'data' is treated as a plural noun, so 'are' is appropriate."
  },
  {
    id: "e027",
    section: "English",
    difficulty: "Medium",
    question:
      "The phrase 'a blessing in disguise' means:",
    options: [
      "A hidden problem",
      "Something that seems bad but turns out beneficial",
      "An obvious advantage",
      "A false promise"
    ],
    answer: 1,
    explanation:
      "A blessing in disguise is something that initially appears bad but eventually proves beneficial."
  },
  {
    id: "e028",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct passive form: 'They should have completed the project by now.'",
    options: [
      "The project should have been completed by now.",
      "The project should be completed by now.",
      "The project should have completed by now.",
      "The project should had been completed by now."
    ],
    answer: 0,
    explanation:
      "Modal perfect passive structure is 'should have been + past participle'."
  },
  {
    id: "e029",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the correctly spelt word.",
    options: ["Entrepreneur", "Enterpreneur", "Entreprenuer", "Entreprener"],
    answer: 0,
    explanation:
      "The correct spelling is 'Entrepreneur'."
  },
  {
    id: "e030",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct improvement: 'Despite of being tired, he continued working.'",
    options: [
      "Despite being tired, he continued working.",
      "Despite he was tired, he continued working.",
      "Despite from being tired, he continued working.",
      "No improvement"
    ],
    answer: 0,
    explanation:
      "'Despite' is not followed by 'of'. The correct form is 'despite being tired'."
  },

  {
    id: "e031",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Eloquent'.",
    options: ["Articulate", "Silent", "Confused", "Reluctant"],
    answer: 0,
    explanation:
      "'Eloquent' means fluent or persuasive in speaking or writing."
  },
  {
    id: "e032",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the error: 'The number of applicants have increased significantly this year.'",
    options: [
      "The number",
      "of applicants",
      "have increased",
      "significantly this year"
    ],
    answer: 2,
    explanation:
      "The subject is 'number', which is singular. Therefore, 'has increased' is correct."
  },
  {
    id: "e033",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'He has been working here ______ 2019.'",
    options: ["for", "since", "from", "by"],
    answer: 1,
    explanation:
      "'Since' is used with a specific starting point in time."
  },
  {
    id: "e034",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "Had I known about the problem, I would help you.",
      "Had I known about the problem, I would have helped you.",
      "Had I knew about the problem, I would have helped you.",
      "Had I known about the problem, I will have helped you."
    ],
    answer: 1,
    explanation:
      "This is a third conditional inversion: 'Had + subject + past participle, subject + would have + past participle'."
  },
  {
    id: "e035",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the antonym of 'Explicit'.",
    options: ["Clear", "Definite", "Implicit", "Specific"],
    answer: 2,
    explanation:
      "'Explicit' means clearly stated; 'implicit' means suggested rather than directly stated."
  },
  {
    id: "e036",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct indirect speech: The teacher said to the students, 'Do not waste your time.'",
    options: [
      "The teacher advised the students not to waste their time.",
      "The teacher said the students do not waste their time.",
      "The teacher told that the students did not waste their time.",
      "The teacher advised that do not waste their time."
    ],
    answer: 0,
    explanation:
      "Negative imperative is generally reported using 'advised/told + object + not to + verb'."
  },
  {
    id: "e037",
    section: "English",
    difficulty: "Medium",
    question:
      "One who speaks many languages is called:",
    options: ["Monolingual", "Polyglot", "Monarch", "Linguist"],
    answer: 1,
    explanation:
      "'Polyglot' refers to a person who knows or uses several languages."
  },
  {
    id: "e038",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "He is one of those students who works hard.",
      "He is one of those students who work hard.",
      "He is one of those student who works hard.",
      "He is one of those students which work hard."
    ],
    answer: 1,
    explanation:
      "The relative pronoun 'who' refers to the plural noun 'students', so 'work' is used."
  },
  {
    id: "e039",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the meaning of 'hit the nail on the head'.",
    options: [
      "To make a serious mistake",
      "To describe something exactly",
      "To avoid an issue",
      "To work very slowly"
    ],
    answer: 1,
    explanation:
      "The idiom means to identify or describe something exactly."
  },
  {
    id: "e040",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct passive form: 'Someone has stolen my wallet.'",
    options: [
      "My wallet has been stolen.",
      "My wallet had been stolen.",
      "My wallet is stolen.",
      "My wallet was being stolen."
    ],
    answer: 0,
    explanation:
      "Present perfect active changes to present perfect passive: 'has been + past participle'."
  },

  {
    id: "e041",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Candid'.",
    options: ["Frank", "Secretive", "Dishonest", "Uncertain"],
    answer: 0,
    explanation:
      "'Candid' means truthful, straightforward or frank."
  },
  {
    id: "e042",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the error: 'She is accustomed to wake up early in the morning.'",
    options: [
      "She is accustomed",
      "to wake up",
      "early in the morning",
      "No error"
    ],
    answer: 1,
    explanation:
      "'Accustomed to' is followed by a noun or gerund. The correct form is 'accustomed to waking up'."
  },
  {
    id: "e043",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'The evidence was ______ to prove his innocence.'",
    options: ["sufficient", "scarce", "fragile", "vague"],
    answer: 0,
    explanation:
      "'Sufficient' means enough for a particular purpose."
  },
  {
    id: "e044",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "Not only he completed the project but also won the award.",
      "Not only did he complete the project, but he also won the award.",
      "Not only he did complete the project but also won the award.",
      "Not only had he complete the project but also won the award."
    ],
    answer: 1,
    explanation:
      "After 'not only' at the beginning, subject-auxiliary inversion is required."
  },
  {
    id: "e045",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the antonym of 'Hostile'.",
    options: ["Aggressive", "Friendly", "Unfriendly", "Violent"],
    answer: 1,
    explanation:
      "'Hostile' means unfriendly or antagonistic; its opposite is 'friendly'."
  },
  {
    id: "e046",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct indirect speech: He said, 'I will finish the work tomorrow.'",
    options: [
      "He said that he would finish the work the next day.",
      "He said that he will finish the work tomorrow.",
      "He said that he would finish the work tomorrow.",
      "He said that he will have finished the work the next day."
    ],
    answer: 0,
    explanation:
      "In reported speech, 'will' changes to 'would' and 'tomorrow' changes to 'the next day'."
  },
  {
    id: "e047",
    section: "English",
    difficulty: "Medium",
    question:
      "One who hates mankind is called:",
    options: ["Philanthropist", "Misanthrope", "Optimist", "Pacifist"],
    answer: 1,
    explanation:
      "'Misanthrope' means a person who dislikes or distrusts humankind."
  },
  {
    id: "e048",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct improvement: 'The reason is because he was absent.'",
    options: [
      "The reason is that he was absent.",
      "The reason is due to he was absent.",
      "The reason was because he was absent.",
      "No improvement"
    ],
    answer: 0,
    explanation:
      "In formal usage, 'the reason is that...' is preferred."
  },
  {
    id: "e049",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the correctly spelt word.",
    options: ["Questionnaire", "Questionaire", "Questionnair", "Questionnere"],
    answer: 0,
    explanation:
      "The correct spelling is 'Questionnaire'."
  },
  {
    id: "e050",
    section: "English",
    difficulty: "Hard",
    question:
      "Identify the error: 'Each boy and each girl were given a certificate.'",
    options: [
      "Each boy",
      "and each girl",
      "were given",
      "a certificate"
    ],
    answer: 2,
    explanation:
      "When 'each' modifies individual subjects, the verb is singular: 'was given'."
  },

  {
    id: "e051",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the synonym of 'Abundant'.",
    options: ["Scarce", "Plentiful", "Limited", "Insufficient"],
    answer: 1,
    explanation:
      "'Abundant' means available in large quantities; 'plentiful' is its synonym."
  },
  {
    id: "e052",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct sentence.",
    options: [
      "The furniture in this room are expensive.",
      "The furniture in this room is expensive.",
      "The furnitures in this room are expensive.",
      "The furniture in this room have been expensive."
    ],
    answer: 1,
    explanation:
      "'Furniture' is an uncountable noun and takes a singular verb."
  },
  {
    id: "e053",
    section: "English",
    difficulty: "Medium",
    question:
      "Fill in the blank: 'She succeeded ______ solving the problem.'",
    options: ["at", "in", "on", "for"],
    answer: 1,
    explanation:
      "The standard construction is 'succeed in + gerund'."
  },
  {
    id: "e054",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct passive form: 'The police are investigating the matter.'",
    options: [
      "The matter is being investigated by the police.",
      "The matter has been investigated by the police.",
      "The matter was investigated by the police.",
      "The matter is investigated by the police."
    ],
    answer: 0,
    explanation:
      "Present continuous active becomes present continuous passive: 'is being investigated'."
  },
  {
    id: "e055",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the antonym of 'Diligent'.",
    options: ["Hardworking", "Industrious", "Negligent", "Careful"],
    answer: 2,
    explanation:
      "'Diligent' means hardworking and careful; 'negligent' is its opposite."
  },
  {
    id: "e056",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct form: 'Neither the students nor the teacher ______ aware of the change.'",
    options: ["were", "are", "was", "have been"],
    answer: 2,
    explanation:
      "The verb agrees with the nearer subject 'teacher', which is singular."
  },
  {
    id: "e057",
    section: "English",
    difficulty: "Medium",
    question:
      "The idiom 'burn the midnight oil' means:",
    options: [
      "To waste electricity",
      "To work late at night",
      "To become angry",
      "To finish work early"
    ],
    answer: 1,
    explanation:
      "It means working or studying late into the night."
  },
  {
    id: "e058",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct indirect speech: The officer said to me, 'Where are you going?'",
    options: [
      "The officer asked me where I was going.",
      "The officer asked me where was I going.",
      "The officer said where I am going.",
      "The officer told me where I was going?"
    ],
    answer: 0,
    explanation:
      "In reported questions, normal statement word order is used: 'where I was going'."
  },
  {
    id: "e059",
    section: "English",
    difficulty: "Medium",
    question:
      "Choose the one-word substitution for 'A person who looks at the bright side of things'.",
    options: ["Pessimist", "Optimist", "Realist", "Cynic"],
    answer: 1,
    explanation:
      "An optimist tends to look at the positive side of situations."
  },
  {
    id: "e060",
    section: "English",
    difficulty: "Hard",
    question:
      "Choose the correct improvement: 'He prevented me to enter the room.'",
    options: [
      "He prevented me from entering the room.",
      "He prevented me for entering the room.",
      "He prevented me to entering the room.",
      "No improvement"
    ],
    answer: 0,
    explanation:
      "The correct construction is 'prevent someone from doing something'."
  }
];