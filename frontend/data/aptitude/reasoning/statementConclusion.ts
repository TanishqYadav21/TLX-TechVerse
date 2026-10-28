import type { ReasoningQuestion } from "./types";

export const statementConclusionQuestions: ReasoningQuestion[] = [
  {
    id: 1,
    difficulty: "Easy",
    question:
      "Statement: Regular exercise keeps the body healthy. Conclusions: I. People who exercise regularly can maintain better physical fitness. II. Exercise is the only way to remain healthy.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement supports the benefit of regular exercise, but does not say it is the only way to remain healthy.",
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      "Statement: The road was closed because of heavy snowfall. Conclusions: I. Vehicles could not use that road during the closure. II. There was heavy snowfall in the area.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "Both conclusions directly follow from the statement.",
  },
  {
    id: 3,
    difficulty: "Easy",
    question:
      "Statement: All employees must carry their identity cards inside the office. Conclusions: I. Employees are required to carry identity cards inside the office. II. Visitors are also required to carry employee identity cards.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement applies specifically to employees and says nothing about visitors.",
  },
  {
    id: 4,
    difficulty: "Easy",
    question:
      "Statement: The library remains closed on Sundays. Conclusions: I. The library cannot be visited on Sundays. II. The library is open on every other day.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Closure on Sunday establishes that it cannot be visited then, but nothing is stated about every other day.",
  },
  {
    id: 5,
    difficulty: "Easy",
    question:
      "Statement: The company reduced the price of its laptops. Conclusions: I. The laptops are now available at a lower price than before. II. Every customer will buy a laptop.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "A price reduction directly means a lower price, but it does not guarantee that every customer will buy one.",
  },
  {
    id: 6,
    difficulty: "Easy",
    question:
      "Statement: No student is allowed to enter the examination hall without an admit card. Conclusions: I. An admit card is required for students to enter the examination hall. II. Students without admit cards cannot enter the hall.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "Both conclusions directly express the condition given in the statement.",
  },
  {
    id: 7,
    difficulty: "Easy",
    question:
      "Statement: The shop opens at 9 a.m. every day. Conclusions: I. The shop does not open before 9 a.m. II. The shop opens at 9 a.m. daily.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 1,
    explanation:
      "The statement directly says the shop opens at 9 a.m. every day. It does not explicitly state that it never opens before 9.",
  },
  {
    id: 8,
    difficulty: "Easy",
    question:
      "Statement: The school introduced a new computer laboratory for students. Conclusions: I. Students now have access to a new computer laboratory. II. Every student will become a computer expert.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The new laboratory gives students access to it, but it does not guarantee expertise.",
  },
  {
    id: 9,
    difficulty: "Easy",
    question:
      "Statement: The train was cancelled due to technical problems. Conclusions: I. The train did not operate as scheduled. II. Technical problems were reported as the reason for cancellation.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "Both conclusions directly follow from the statement.",
  },
  {
    id: 10,
    difficulty: "Easy",
    question:
      "Statement: The company provides free transport to employees working the night shift. Conclusions: I. Night-shift employees can use the company's free transport facility. II. Employees working during the day must also receive free transport.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The facility is specifically stated for night-shift employees. Nothing is said about day-shift employees.",
  },
  {
    id: 11,
    difficulty: "Easy",
    question:
      "Statement: The water tank is empty. Conclusions: I. There is no water in the tank. II. The tank has never contained water.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "An empty tank has no water currently, but the statement does not say it was always empty.",
  },
  {
    id: 12,
    difficulty: "Easy",
    question:
      "Statement: The hospital has increased the number of beds in its emergency department. Conclusions: I. The emergency department now has more beds than before. II. The hospital has completely solved all emergency problems.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Increasing the number of beds means there are more beds than before, but it does not solve every emergency problem.",
  },
  {
    id: 13,
    difficulty: "Easy",
    question:
      "Statement: Every applicant must submit a photograph with the application form. Conclusions: I. An applicant has to submit a photograph. II. An application without a photograph does not satisfy the stated requirement.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "Both conclusions follow from the mandatory photograph requirement.",
  },
  {
    id: 14,
    difficulty: "Easy",
    question:
      "Statement: The factory stopped production because of a power failure. Conclusions: I. Production stopped during the power failure. II. The factory will never resume production.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement establishes the stoppage, but says nothing about permanent closure.",
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "Statement: All tickets for the concert were sold out. Conclusions: I. No ticket was available for sale at that time. II. Nobody attended the concert.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Sold-out tickets mean no tickets remained for sale, but people could still attend using purchased tickets.",
  },
  {
    id: 16,
    difficulty: "Easy",
    question:
      "Statement: The office will remain closed tomorrow due to maintenance work. Conclusions: I. Regular office work will not take place in the office tomorrow. II. Maintenance work is planned for tomorrow.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "Both conclusions are directly supported by the statement.",
  },
  {
    id: 17,
    difficulty: "Easy",
    question:
      "Statement: The school bus arrived late because of traffic congestion. Conclusions: I. Traffic congestion affected the bus journey. II. The bus driver deliberately arrived late.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Traffic congestion is given as the reason for the delay. Deliberate delay is not stated.",
  },
  {
    id: 18,
    difficulty: "Easy",
    question:
      "Statement: The restaurant does not serve food after 11 p.m. Conclusions: I. Food cannot be ordered there after 11 p.m. II. The restaurant closes at 11 p.m.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Food service ends after 11 p.m., but the restaurant may remain open for other purposes.",
  },
  {
    id: 19,
    difficulty: "Easy",
    question:
      "Statement: The company hired five new software developers. Conclusions: I. The number of software developers in the company increased by five. II. The company will stop hiring employees.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Hiring five developers increases the number of developers by five, but nothing is stated about future hiring.",
  },
  {
    id: 20,
    difficulty: "Easy",
    question:
      "Statement: The examination was postponed by one week. Conclusions: I. The examination will not be held on its originally scheduled date. II. The examination has been cancelled permanently.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Postponement means it is moved from the original date, not permanently cancelled.",
  },

  {
    id: 21,
    difficulty: "Medium",
    question:
      "Statement: The city administration installed additional streetlights in accident-prone areas. Conclusions: I. The administration wants to improve visibility in those areas. II. All road accidents will now stop completely.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Additional lighting logically aims to improve visibility, but it cannot guarantee that all accidents will stop.",
  },
  {
    id: 22,
    difficulty: "Medium",
    question:
      "Statement: The bank has advised customers not to share their OTP with anyone. Conclusions: I. Sharing an OTP can create a security risk. II. Bank employees will never ask customers for any information.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The warning indicates that sharing OTPs is unsafe. It does not establish that employees will never ask for any information.",
  },
  {
    id: 23,
    difficulty: "Medium",
    question:
      "Statement: Several students complained that the library had insufficient study space. Conclusions: I. The available study space was considered insufficient by those students. II. Every student in the college was dissatisfied with the library.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The complaints establish the first conclusion, but not the opinion of every student.",
  },
  {
    id: 24,
    difficulty: "Medium",
    question:
      "Statement: The company introduced flexible working hours to reduce traffic during peak hours. Conclusions: I. The company expects flexible timings to help reduce peak-hour commuting. II. Every employee will choose different working hours.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The stated purpose supports the first conclusion. It does not mean every employee will choose different hours.",
  },
  {
    id: 25,
    difficulty: "Medium",
    question:
      "Statement: The government announced a subsidy for farmers purchasing approved irrigation equipment. Conclusions: I. Eligible farmers can receive financial support for approved irrigation equipment. II. Every farmer will receive the subsidy regardless of eligibility.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The subsidy is for eligible farmers and approved equipment. Universal eligibility is not stated.",
  },
  {
    id: 26,
    difficulty: "Medium",
    question:
      "Statement: The school increased the number of practice tests before the final examination. Conclusions: I. The school wants students to get more practice before the examination. II. Practice tests guarantee that every student will score high marks.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Increasing practice tests indicates an intention to provide more practice, but cannot guarantee marks.",
  },
  {
    id: 27,
    difficulty: "Medium",
    question:
      "Statement: The factory rejected raw material that failed its quality inspection. Conclusions: I. Quality inspection is used before accepting the raw material. II. All raw material supplied to the factory is of poor quality.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement shows that inspection affects acceptance. It does not say all supplied material is poor.",
  },
  {
    id: 28,
    difficulty: "Medium",
    question:
      "Statement: The university extended the application deadline because many students had not completed their forms. Conclusions: I. Some students had not completed their applications by the earlier deadline. II. Every student requested an extension.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The reason directly indicates that many students had incomplete forms. Nothing says every student requested an extension.",
  },
  {
    id: 29,
    difficulty: "Medium",
    question:
      "Statement: A company introduced a password policy requiring at least twelve characters. Conclusions: I. Passwords shorter than twelve characters do not meet the new requirement. II. Longer passwords can never be compromised.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The policy establishes a minimum length, but length alone cannot guarantee complete security.",
  },
  {
    id: 30,
    difficulty: "Medium",
    question:
      "Statement: The hospital opened a separate counter for elderly patients. Conclusions: I. Elderly patients can use the separate counter. II. Elderly patients no longer need medical treatment.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The separate counter provides a facility for elderly patients; it has no connection with the need for treatment.",
  },
  {
    id: 31,
    difficulty: "Medium",
    question:
      "Statement: The retailer offered discounts on selected products for three days. Conclusions: I. The selected products were available at discounted prices during that period. II. Every product in the store was sold at a discount.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Only selected products are mentioned as discounted, not every product.",
  },
  {
    id: 32,
    difficulty: "Medium",
    question:
      "Statement: The railway authority added extra coaches to a train during a festival period. Conclusions: I. The authority expected higher passenger demand during that period. II. The train had no passengers before the festival.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Adding coaches during a festival reasonably indicates an expectation of higher demand, but the statement does not say the train previously had no passengers.",
  },
  {
    id: 33,
    difficulty: "Medium",
    question:
      "Statement: The company stopped using plastic cups in its cafeteria and replaced them with reusable cups. Conclusions: I. The company has replaced plastic cups with reusable cups in the cafeteria. II. The company has eliminated all plastic products from its premises.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Only cafeteria cups are discussed. Nothing establishes elimination of every plastic product.",
  },
  {
    id: 34,
    difficulty: "Medium",
    question:
      "Statement: The school requires students to submit assignments online before the deadline. Conclusions: I. Students must submit assignments online to satisfy the stated requirement. II. Assignments submitted after the deadline automatically receive full marks.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The online submission requirement supports I. No information about marks after the deadline is provided.",
  },
  {
    id: 35,
    difficulty: "Medium",
    question:
      "Statement: The manager rejected the proposal because it exceeded the approved budget. Conclusions: I. The proposal was above the approved budget. II. The manager rejects every proposal that exceeds the budget.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The particular proposal exceeded the budget. The statement does not establish a general rule for every proposal.",
  },
  {
    id: 36,
    difficulty: "Medium",
    question:
      "Statement: The college introduced additional evening classes for students who work during the day. Conclusions: I. Some students have difficulty attending regular daytime classes because of work. II. All college students work during the day.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The special classes are specifically intended for students working during the day. It does not apply to all students.",
  },
  {
    id: 37,
    difficulty: "Medium",
    question:
      "Statement: The municipality prohibited parking on one side of the main road during peak hours. Conclusions: I. Parking on that side is not permitted during the specified peak hours. II. Parking is prohibited on every road in the city during peak hours.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The restriction applies only to one side of the main road and specified hours.",
  },
  {
    id: 38,
    difficulty: "Medium",
    question:
      "Statement: The company gave additional training to employees who failed the certification test. Conclusions: I. Some employees did not pass the certification test. II. Every employee failed the certification test.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement clearly refers to employees who failed, but does not say everyone failed.",
  },
  {
    id: 39,
    difficulty: "Medium",
    question:
      "Statement: The museum increased security after an expensive artifact was stolen. Conclusions: I. The museum had experienced a theft of an expensive artifact. II. Increased security guarantees that no future theft can occur.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The theft is explicitly stated. Increased security does not guarantee that theft can never happen again.",
  },
  {
    id: 40,
    difficulty: "Medium",
    question:
      "Statement: The school cancelled outdoor sports because severe weather was forecast. Conclusions: I. Outdoor sports were not planned to proceed under the stated weather conditions. II. Indoor sports were also cancelled.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The cancellation specifically concerns outdoor sports. Nothing is stated about indoor sports.",
  },

  {
    id: 41,
    difficulty: "Hard",
    question:
      "Statement: Only candidates who clear the written examination are called for the interview. Conclusions: I. Clearing the written examination is necessary for being called for the interview. II. Every candidate who clears the written examination will definitely be selected for the job.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The word 'only' makes clearing the written examination necessary for an interview. It does not guarantee final selection.",
  },
  {
    id: 42,
    difficulty: "Hard",
    question:
      "Statement: Unless the required documents are submitted, the application will not be processed. Conclusions: I. Submission of the required documents is necessary for processing the application. II. Every application with documents will certainly be approved.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "The statement makes document submission a necessary condition for processing, but approval depends on other possible conditions.",
  },
  {
    id: 43,
    difficulty: "Hard",
    question:
      "Statement: All products that pass quality control are eligible for dispatch. Product X was not eligible for dispatch. Conclusions: I. Product X did not pass quality control. II. Product X could have passed quality control but failed for another reason.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 3,
    explanation:
      "The statement gives only a sufficient condition, not a necessary one. Product X being ineligible does not prove whether it passed or failed quality control.",
  },
  {
    id: 44,
    difficulty: "Hard",
    question:
      "Statement: No employee can access the restricted server without administrator authorization. Conclusions: I. Administrator authorization is required for employee access to the restricted server. II. Anyone with administrator authorization can access the server without any other condition.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Authorization is stated as necessary, but the statement does not say it is the only required condition.",
  },
  {
    id: 45,
    difficulty: "Hard",
    question:
      "Statement: Whenever the temperature falls below the specified level, the heating system automatically starts. The heating system has not started. Conclusions: I. The temperature has not fallen below the specified level. II. The heating system is definitely functioning properly.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 3,
    explanation:
      "The first statement says low temperature is sufficient for starting, but failure to start could have another cause. Therefore neither conclusion is certain.",
  },
  {
    id: 46,
    difficulty: "Hard",
    question:
      "Statement: Only registered users can download the software. Riya downloaded the software. Conclusions: I. Riya is a registered user. II. Every registered user downloaded the software.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "If only registered users can download it and Riya downloaded it, she must be registered. Nothing implies every registered user downloaded it.",
  },
  {
    id: 47,
    difficulty: "Hard",
    question:
      "Statement: A project can be approved only if it satisfies the environmental requirements. Project A was approved. Conclusions: I. Project A satisfied the environmental requirements. II. Every project satisfying the requirements will be approved.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Satisfying the requirements is necessary for approval, so an approved project must satisfy them. It is not stated to be sufficient for approval.",
  },
  {
    id: 48,
    difficulty: "Hard",
    question:
      "Statement: If a machine is properly calibrated, it produces measurements within the required accuracy range. Machine M produced measurements outside the required range. Conclusions: I. Machine M was not properly calibrated. II. Machine M definitely had a mechanical defect.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Proper calibration guarantees measurements within the range. Since M was outside the range, it was not properly calibrated. A mechanical defect is not established.",
  },
  {
    id: 49,
    difficulty: "Hard",
    question:
      "Statement: No candidate who fails the eligibility criteria can appear in the final selection list. Candidate P appears in the final selection list. Conclusions: I. Candidate P did not fail the eligibility criteria. II. Candidate P was the highest-scoring candidate.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Being on the final list means P did not fail the eligibility criteria. Nothing establishes that P scored highest.",
  },
  {
    id: 50,
    difficulty: "Hard",
    question:
      "Statement: Whenever demand exceeds available stock, the store places an additional order. The store placed an additional order. Conclusions: I. Demand exceeded available stock. II. Demand may not have exceeded available stock because an additional order could have another reason.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 1,
    explanation:
      "The statement gives a sufficient condition, not a necessary one. An additional order may have been placed for another reason, so I does not necessarily follow while II is possible.",
  },
  {
    id: 51,
    difficulty: "Hard",
    question:
      "Statement: Every employee who completes the advanced training is eligible for the specialist role. Arun is not eligible for the specialist role. Conclusions: I. Arun did not complete the advanced training. II. Arun may have completed the training but failed to satisfy another eligibility condition.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 1,
    explanation:
      "Completion guarantees eligibility according to the statement, so Arun could not have completed it if that were the only relevant condition. However, the statement says nothing about other eligibility conditions, making II possible but not a necessary conclusion.",
  },
  {
    id: 52,
    difficulty: "Hard",
    question:
      "Statement: A scholarship is awarded to students who meet all the specified academic and financial criteria. Meena received the scholarship. Conclusions: I. Meena met all the specified criteria. II. Every student who met the criteria received the scholarship.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Meeting the criteria is stated as necessary for receiving the scholarship. It does not say that every eligible student necessarily receives one.",
  },
  {
    id: 53,
    difficulty: "Hard",
    question:
      "Statement: If a document is digitally signed by an authorized officer, it is accepted for online submission. Document Q was not accepted for online submission. Conclusions: I. Document Q was not digitally signed by an authorized officer. II. Document Q may have failed another acceptance requirement.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 1,
    explanation:
      "Digital signing is sufficient for acceptance, but non-acceptance does not prove the absence of a digital signature because another requirement could have failed.",
  },
  {
    id: 54,
    difficulty: "Hard",
    question:
      "Statement: Only vehicles with valid permits are allowed to enter the restricted zone. Vehicle A entered the restricted zone. Conclusions: I. Vehicle A had a valid permit. II. Every vehicle with a valid permit entered the restricted zone.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "A valid permit is necessary for entry, so A must have one. The statement does not say every permitted vehicle entered.",
  },
  {
    id: 55,
    difficulty: "Hard",
    question:
      "Statement: All shortlisted applicants satisfy the minimum qualification requirement. Some applicants who satisfy the minimum qualification are not shortlisted. Conclusions: I. Satisfying the minimum qualification is not sufficient by itself for shortlisting. II. Every shortlisted applicant satisfies the minimum qualification.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 2,
    explanation:
      "The first statement establishes II. The second statement shows that qualification alone does not guarantee shortlisting, establishing I.",
  },
  {
    id: 56,
    difficulty: "Hard",
    question:
      "Statement: No book borrowed from the reference section may be taken outside the library. Book R was taken outside the library. Conclusions: I. Book R was not borrowed from the reference section. II. Book R was stolen from the library.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "If R had been a reference-section book borrowed under the stated rule, it could not be taken outside. The statement does not establish theft.",
  },
  {
    id: 57,
    difficulty: "Hard",
    question:
      "Statement: Any candidate who scores above 80 marks qualifies for the next round. Ravi qualified for the next round. Conclusions: I. Ravi scored above 80 marks. II. Ravi could have qualified through another qualifying condition.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 1,
    explanation:
      "Scoring above 80 is sufficient for qualification, but the statement does not say it is the only route to qualification. Therefore I is not certain and II remains possible.",
  },
  {
    id: 58,
    difficulty: "Hard",
    question:
      "Statement: A company will issue a bonus only to employees who complete the annual performance review. Employee S received a bonus. Conclusions: I. Employee S completed the annual performance review. II. Every employee who completed the review received a bonus.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Completing the review is necessary for receiving the bonus, so S completed it. The statement does not say every such employee receives a bonus.",
  },
  {
    id: 59,
    difficulty: "Hard",
    question:
      "Statement: Unless the payment is verified, the order will not be shipped. Order Z has been shipped. Conclusions: I. The payment for Order Z was verified. II. Verification of payment guarantees that every order will be shipped.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 0,
    explanation:
      "Payment verification is necessary before shipment, so Z's payment was verified. It does not guarantee shipment of every order.",
  },
  {
    id: 60,
    difficulty: "Hard",
    question:
      "Statement: All applications that meet the mandatory conditions are considered for further evaluation. Application X was not considered for further evaluation. Conclusions: I. Application X failed at least one mandatory condition. II. Application X could have met all mandatory conditions but failed because of an additional condition.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows",
    ],
    answer: 3,
    explanation:
      "Meeting all mandatory conditions guarantees consideration. Since X was not considered, it cannot have met all mandatory conditions. Therefore I follows, while II contradicts that implication.",
  },
];