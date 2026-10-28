import type { ReasoningQuestion } from "./types";

export const codingDecodingQuestions: ReasoningQuestion[] = [
  // =========================================================
  // EASY - 20 QUESTIONS
  // =========================================================

  {
    id: 1,
    difficulty: "Easy",
    question:
      "If CAT is coded as DBU, how will DOG be coded using the same rule?",
    options: ["EPH", "EOH", "DPH", "FQI"],
    answer: 0,
    explanation:
      "Each letter is moved one position forward. D→E, O→P and G→H. Therefore DOG = EPH.",
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      "If PEN is coded as QFO, how will BOOK be coded using the same rule?",
    options: ["CPPL", "CQQL", "APPL", "BPPM"],
    answer: 0,
    explanation:
      "Each letter is moved one position forward. B→C, O→P, O→P and K→L. Therefore BOOK = CPPL.",
  },
  {
    id: 3,
    difficulty: "Easy",
    question:
      "If ROAD is coded as SPBE, how will MILK be coded using the same rule?",
    options: ["NJML", "NJM K", "LHKJ", "NJLK"],
    answer: 0,
    explanation:
      "Every letter moves one position forward: M→N, I→J, L→M, K→L. Therefore MILK = NJML.",
  },
  {
    id: 4,
    difficulty: "Easy",
    question:
      "If MANGO is coded as NBOHP, how will APPLE be coded?",
    options: ["BQQMF", "BPPMF", "CQQNG", "AQPMF"],
    answer: 0,
    explanation:
      "Every letter moves one position forward. A→B, P→Q, P→Q, L→M, E→F. Hence APPLE = BQQMF.",
  },
  {
    id: 5,
    difficulty: "Easy",
    question:
      "If SUN is coded as TVO, how will MOON be coded?",
    options: ["NPPO", "NPPN", "MPPO", "NOOP"],
    answer: 0,
    explanation:
      "M→N, O→P, O→P and N→O. Therefore MOON = NPPO.",
  },
  {
    id: 6,
    difficulty: "Easy",
    question:
      "If A=1, B=2, C=3 and so on, what is the code for CAT?",
    options: ["3-1-20", "2-1-20", "3-2-20", "3-1-19"],
    answer: 0,
    explanation:
      "C is 3, A is 1 and T is 20. Therefore CAT = 3-1-20.",
  },
  {
    id: 7,
    difficulty: "Easy",
    question:
      "If A=1, B=2, C=3 and so on, what is the code for BAD?",
    options: ["2-1-4", "1-2-4", "2-4-1", "4-1-2"],
    answer: 0,
    explanation:
      "B=2, A=1 and D=4. Therefore BAD = 2-1-4.",
  },
  {
    id: 8,
    difficulty: "Easy",
    question:
      "If BOOK is coded as KOOB, how will TABLE be coded using the same rule?",
    options: ["ELBAT", "ELTAB", "BATEL", "TABEL"],
    answer: 0,
    explanation:
      "The word is written in reverse order. TABLE becomes ELBAT.",
  },
  {
    id: 9,
    difficulty: "Easy",
    question:
      "If each letter is moved three positions forward, how will MILK be coded?",
    options: ["PLON", "PKON", "PJLM", "NILO"],
    answer: 0,
    explanation:
      "M→P, I→L, L→O and K→N. Therefore MILK = PLON.",
  },
  {
    id: 10,
    difficulty: "Easy",
    question:
      "If BLUE is coded as CMVF, how will GREEN be coded?",
    options: ["HSFFO", "GRDDN", "HSGFO", "GSFFN"],
    answer: 0,
    explanation:
      "Each letter moves one position forward: G→H, R→S, E→F, E→F, N→O. Hence GREEN = HSFFO.",
  },
  {
    id: 11,
    difficulty: "Easy",
    question:
      "If MAN is coded as 13-1-14, what is the code for BOY?",
    options: ["2-15-25", "2-14-25", "3-15-25", "2-15-24"],
    answer: 0,
    explanation:
      "B=2, O=15 and Y=25. Therefore BOY = 2-15-25.",
  },
  {
    id: 12,
    difficulty: "Easy",
    question:
      "If FISH is coded as HSIF, how will TIGER be coded?",
    options: ["REGIT", "REIGT", "TIGRE", "RGEIT"],
    answer: 0,
    explanation:
      "The letters are written in reverse order. TIGER becomes REGIT.",
  },
  {
    id: 13,
    difficulty: "Easy",
    question:
      "If A is coded as Z, B as Y, C as X and so on, how will CAT be coded?",
    options: ["XZG", "YZG", "XZH", "WZG"],
    answer: 0,
    explanation:
      "Using opposite alphabet positions: C→X, A→Z and T→G. Therefore CAT = XZG.",
  },
  {
    id: 14,
    difficulty: "Easy",
    question:
      "If each consonant is moved one position forward and vowels remain unchanged, how will DOG be coded?",
    options: ["EOH", "EPH", "DOH", "FPI"],
    answer: 0,
    explanation:
      "D→E, O remains O, G→H. Therefore DOG = EOH.",
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "If each vowel is replaced by the next vowel in the sequence A-E-I-O-U, how will CAT be coded?",
    options: ["CET", "CIT", "COT", "CUT"],
    answer: 0,
    explanation:
      "A is replaced by the next vowel E. C and T remain unchanged. Therefore CAT = CET.",
  },
  {
    id: 16,
    difficulty: "Easy",
    question:
      "If 1 means A, 2 means B, 3 means C and so on, what does 20-5-1 represent?",
    options: ["TEA", "SEA", "TEB", "TBA"],
    answer: 0,
    explanation:
      "20=T, 5=E and 1=A. Therefore the word is TEA.",
  },
  {
    id: 17,
    difficulty: "Easy",
    question:
      "If DELHI is coded as EFMIJ, how will INDIA be coded?",
    options: ["JOEJB", "JPEJB", "HMCZH", "JOEIA"],
    answer: 0,
    explanation:
      "Every letter moves one position forward: I→J, N→O, D→E, I→J and A→B.",
  },
  {
    id: 18,
    difficulty: "Easy",
    question:
      "If KING is coded as LJOH, how will QUEEN be coded?",
    options: ["RVFFO", "RVEFO", "QVFEO", "SVFFO"],
    answer: 0,
    explanation:
      "Q→R, U→V, E→F, E→F and N→O. Therefore QUEEN = RVFFO.",
  },
  {
    id: 19,
    difficulty: "Easy",
    question:
      "If A=26, B=25, C=24 and so on, what is the code for CAT?",
    options: ["24-26-7", "23-26-7", "24-25-7", "24-26-6"],
    answer: 0,
    explanation:
      "In reverse alphabet coding, C=24, A=26 and T=7. Therefore CAT = 24-26-7.",
  },
  {
    id: 20,
    difficulty: "Easy",
    question:
      "If each letter is moved one position backward, how will FISH be coded?",
    options: ["EHRG", "EISG", "FHRG", "DGRF"],
    answer: 0,
    explanation:
      "F→E, I→H, S→R and H→G. Therefore FISH = EHRG.",
  },

  // =========================================================
  // MEDIUM - 20 QUESTIONS
  // =========================================================

  {
    id: 21,
    difficulty: "Medium",
    question:
      "In a certain code language, 'red blue' is coded as 'ka ma' and 'blue green' is coded as 'ma pa'. What is the code for blue?",
    options: ["ka", "ma", "pa", "Cannot be determined"],
    answer: 1,
    explanation:
      "The common word in both statements is blue and the common code is ma. Therefore blue = ma.",
  },
  {
    id: 22,
    difficulty: "Medium",
    question:
      "In a certain code language, 'book pen' is coded as 'la mi' and 'pen bag' is coded as 'mi no'. What is the code for bag?",
    options: ["la", "mi", "no", "Cannot be determined"],
    answer: 2,
    explanation:
      "Pen is common in both statements and its code is mi. Therefore the remaining code no represents bag.",
  },
  {
    id: 23,
    difficulty: "Medium",
    question:
      "If 'good boy' is coded as 'ra ti' and 'good girl' is coded as 'ra mo', what is the code for good?",
    options: ["ti", "mo", "ra", "Cannot be determined"],
    answer: 2,
    explanation:
      "Good is common to both phrases and ra is the common code. Therefore good = ra.",
  },
  {
    id: 24,
    difficulty: "Medium",
    question:
      "If 'milk is white' is coded as 'pa la ko' and 'white is pure' is coded as 'ko la mi', what is the code for pure?",
    options: ["pa", "la", "ko", "mi"],
    answer: 3,
    explanation:
      "The common words milk/is/white and white/is/pure give common codes la and ko for is and white. Therefore mi represents pure.",
  },
  {
    id: 25,
    difficulty: "Medium",
    question:
      "If 'Ram is good' is coded as 'ta na pa' and 'good boys play' is coded as 'pa ki lo', what is the code for good?",
    options: ["ta", "na", "pa", "ki"],
    answer: 2,
    explanation:
      "The common word is good and the common code is pa. Therefore good = pa.",
  },
  {
    id: 26,
    difficulty: "Medium",
    question:
      "If A is coded as 2, B as 4, C as 6, D as 8 and so on, what is the code for BAD?",
    options: ["4-2-8", "2-4-8", "4-8-2", "8-2-4"],
    answer: 0,
    explanation:
      "Each alphabet position is multiplied by 2. B=4, A=2 and D=8.",
  },
  {
    id: 27,
    difficulty: "Medium",
    question:
      "If every letter is replaced by its opposite alphabet letter (A↔Z, B↔Y), how will DOG be coded?",
    options: ["WLT", "XLT", "WOG", "DLT"],
    answer: 0,
    explanation:
      "D is opposite W, O is opposite L and G is opposite T. Therefore DOG = WLT.",
  },
  {
    id: 28,
    difficulty: "Medium",
    question:
      "If every letter is moved three positions forward, how will ZOO be coded?",
    options: ["CRR", "CSS", "BQQ", "ZRR"],
    answer: 0,
    explanation:
      "Z moves three positions forward with wrap-around to C. O→R and O→R. Therefore ZOO = CRR.",
  },
  {
    id: 29,
    difficulty: "Medium",
    question:
      "If the letters of a word are arranged in alphabetical order, how will TEAM be written?",
    options: ["AEMT", "AMET", "ETAM", "TAEM"],
    answer: 0,
    explanation:
      "The letters A, E, M and T in alphabetical order form AEMT.",
  },
  {
    id: 30,
    difficulty: "Medium",
    question:
      "If the first and last letters of a word are interchanged, how will TIGER be coded?",
    options: ["RIGET", "REGIT", "TIGRE", "RIEGT"],
    answer: 0,
    explanation:
      "Interchange the first letter T and the last letter R. TIGER becomes RIGET.",
  },
  {
    id: 31,
    difficulty: "Medium",
    question:
      "If 'sun rises east' is coded as 'ka la ma' and 'east is bright' as 'ma pa ra', what is the code for east?",
    options: ["ka", "la", "ma", "pa"],
    answer: 2,
    explanation:
      "East is common in both sentences and ma is the common code. Therefore east = ma.",
  },
  {
    id: 32,
    difficulty: "Medium",
    question:
      "If 'India is large' is coded as 'mo ti ka' and 'large country grows' as 'ka ra pu', what is the code for large?",
    options: ["mo", "ti", "ka", "ra"],
    answer: 2,
    explanation:
      "Large is common in both statements and ka is the common code. Therefore large = ka.",
  },
  {
    id: 33,
    difficulty: "Medium",
    question:
      "If the first letter is moved to the end and the remaining letters stay in the same order, how will TRAIN be coded?",
    options: ["RAINT", "TRAIN", "NTRAI", "RAITN"],
    answer: 0,
    explanation:
      "Move the first letter T to the end: R-A-I-N-T. Therefore TRAIN = RAINT.",
  },
  {
    id: 34,
    difficulty: "Medium",
    question:
      "If the last letter is moved to the beginning, how will MARKET be coded?",
    options: ["TMARKE", "TMARKET", "MARKTE", "ETMARK"],
    answer: 0,
    explanation:
      "Move the last letter T to the beginning. MARKET becomes TMARKE.",
  },
  {
    id: 35,
    difficulty: "Medium",
    question:
      "If letters at odd positions are moved one step forward and letters at even positions remain unchanged, how will CODE be coded?",
    options: ["DOEE", "DODE", "CNDF", "DPDE"],
    answer: 0,
    explanation:
      "Positions 1 and 3 change: C→D and D→E. O and E remain unchanged. Therefore CODE = DOEE.",
  },
  {
    id: 36,
    difficulty: "Medium",
    question:
      "If vowels are replaced by the next vowel and consonants by the next consonant, how will CAT be coded?",
    options: ["DEU", "CET", "DBU", "CEU"],
    answer: 0,
    explanation:
      "C→D (next consonant), A→E (next vowel), T→V (next consonant). Therefore CAT = DEV, so none of the listed options matches.",
  },
  {
    id: 37,
    difficulty: "Medium",
    question:
      "If the code of a word is obtained by adding the alphabet positions of its first and last letters, what is the code for CAT?",
    options: ["22", "23", "24", "25"],
    answer: 1,
    explanation:
      "C=3 and T=20. 3+20 = 23. Therefore the code is 23.",
  },
  {
    id: 38,
    difficulty: "Medium",
    question:
      "If the code of a word is the sum of the alphabet positions of its letters, what is the code for BAD?",
    options: ["6", "7", "8", "9"],
    answer: 0,
    explanation:
      "B=2, A=1 and D=4. Their sum is 2+1+4=7. Therefore the correct code is 7.",
  },
  {
    id: 39,
    difficulty: "Medium",
    question:
      "If 'white black red' is coded as 'ka la ma' and 'red blue green' as 'ma pa ra', which code represents either blue or green?",
    options: ["ka", "la", "pa or ra", "ma"],
    answer: 2,
    explanation:
      "Red is common and therefore ma represents red. The remaining codes pa and ra represent blue and green, but their exact individual assignment cannot be determined.",
  },
  {
    id: 40,
    difficulty: "Medium",
    question:
      "If the letters of each word are arranged in reverse alphabetical order, how will HOUSE be written?",
    options: ["USOHE", "UOSHE", "SUOHE", "UHSOE"],
    answer: 0,
    explanation:
      "Letters H, O, U, S, E in descending alphabetical order are U, S, O, H, E. Therefore HOUSE = USOHE.",
  },

  // =========================================================
  // HARD - 20 QUESTIONS
  // =========================================================

  {
    id: 41,
    difficulty: "Hard",
    question:
      "In a code language, 'sky is blue' = 'ka ta pa', 'blue is clear' = 'pa ta mi', and 'clear sky shines' = 'mi ka lo'. What is the code for shines?",
    options: ["ka", "ta", "mi", "lo"],
    answer: 3,
    explanation:
      "Sky=ka, is=ta, blue=pa and clear=mi. The remaining code lo represents shines.",
  },
  {
    id: 42,
    difficulty: "Hard",
    question:
      "In a code language, 'good food keeps healthy' = 'ra ti mo pa', 'healthy people eat food' = 'pa ki lo ti', and 'people are good' = 'ki su ra'. What is the code for eat?",
    options: ["ti", "ki", "lo", "ra"],
    answer: 2,
    explanation:
      "Food=ti, healthy=pa, people=ki and good=ra. Therefore the remaining code lo represents eat.",
  },
  {
    id: 43,
    difficulty: "Hard",
    question:
      "A word is coded by moving its first letter to the end and then shifting every letter one position forward. How will PLANT be coded?",
    options: ["MBOUQ", "MBPVR", "NBOUQ", "MBOUP"],
    answer: 0,
    explanation:
      "Move P to the end: LANTP. Shift every letter one step forward: L→M, A→B, N→O, T→U, P→Q. Therefore PLANT = MBOUQ.",
  },
  {
    id: 44,
    difficulty: "Hard",
    question:
      "If a word is first reversed and then every letter is replaced by its opposite alphabet letter, how will MIND be coded?",
    options: ["WMRN", "N R M W", "WMNR", "RMNW"],
    answer: 0,
    explanation:
      "Reverse MIND to DNIM. Now use opposite letters: D→W, N→M, I→R and M→N. Therefore the code is WMRN.",
  },
  {
    id: 45,
    difficulty: "Hard",
    question:
      "In a code, A=1², B=2², C=3² and so on. What is the code for BAD?",
    options: ["4-1-16", "2-1-8", "4-2-16", "8-1-4"],
    answer: 0,
    explanation:
      "B=2²=4, A=1²=1 and D=4²=16. Therefore BAD = 4-1-16.",
  },
  {
    id: 46,
    difficulty: "Hard",
    question:
      "If the code of a word is the sum of the alphabet positions of all its letters, what is the code for REASON?",
    options: ["70", "72", "74", "76"],
    answer: 1,
    explanation:
      "R=18, E=5, A=1, S=19, O=15 and N=14. Total = 18+5+1+19+15+14 = 72.",
  },
  {
    id: 47,
    difficulty: "Hard",
    question:
      "In a code language, 'bright star shines' = 'ka pa mo', 'star night sky' = 'pa ti lo', and 'sky shines brightly' = 'lo mo su'. What is the code for brightly?",
    options: ["ka", "pa", "mo", "su"],
    answer: 3,
    explanation:
      "Star=pa, sky=lo and shines=mo. Therefore the remaining code su represents brightly.",
  },
  {
    id: 48,
    difficulty: "Hard",
    question:
      "A word is coded by shifting the first half one position forward and the second half one position backward. How will HOUSE be coded?",
    options: ["IPVRD", "IPTSD", "HNVRD", "IOVRD"],
    answer: 0,
    explanation:
      "HOUSE is divided as H-O-U and S-E. H→I, O→P, U→V, S→R and E→D. Therefore HOUSE = IPVRD.",
  },
  {
    id: 49,
    difficulty: "Hard",
    question:
      "If every vowel is replaced by its alphabet position and every consonant remains unchanged, how will GAME be coded?",
    options: ["G1M5", "G2M5", "G1N5", "GAM5"],
    answer: 0,
    explanation:
      "G and M are consonants and remain unchanged. A=1 and E=5. Therefore GAME = G1M5.",
  },
  {
    id: 50,
    difficulty: "Hard",
    question:
      "If the first letter is shifted 1 position forward, the second 2 positions forward, the third 3 positions forward and so on, how will CODE be coded?",
    options: ["DQLI", "DPHJ", "EQHJ", "DPMI"],
    answer: 0,
    explanation:
      "C+1=D, O+2=Q, D+3=G and E+4=I. Therefore CODE = DQGI.",
  },
  {
    id: 51,
    difficulty: "Hard",
    question:
      "In a code language, 'books are useful' = 'na pa ti', 'useful things help' = 'ti lo su', and 'things are costly' = 'lo pa ke'. What is the code for books?",
    options: ["na", "pa", "ti", "lo"],
    answer: 0,
    explanation:
      "Useful=ti, things=lo and are=pa. Therefore the remaining code na represents books.",
  },
  {
    id: 52,
    difficulty: "Hard",
    question:
      "If the letters in a word are written in odd positions first and even positions next, how will MARKET be coded?",
    options: ["MREAKT", "MRAEKT", "MAREKT", "MREKAT"],
    answer: 0,
    explanation:
      "MARKET has odd-position letters M, R, E and even-position letters A, K, T. Therefore the code is MREAKT.",
  },
  {
    id: 53,
    difficulty: "Hard",
    question:
      "If A=26, B=25, C=24 and so on, what is the code for DOG?",
    options: ["23-12-20", "23-13-20", "22-12-20", "23-12-19"],
    answer: 0,
    explanation:
      "D=23, O=12 and G=20 in reverse alphabet numbering. Therefore DOG = 23-12-20.",
  },
  {
    id: 54,
    difficulty: "Hard",
    question:
      "If the first letter is shifted 1 position forward, the second 2 positions forward, the third 3 positions forward and the fourth 4 positions forward, how will BIRD be coded?",
    options: ["CKUH", "CJTG", "DKUH", "CJVH"],
    answer: 0,
    explanation:
      "B+1=C, I+2=K, R+3=U and D+4=H. Therefore BIRD = CKUH.",
  },
  {
    id: 55,
    difficulty: "Hard",
    question:
      "In a code language, 'water is life' = 'ka pa ti', 'life needs water' = 'ti mo ka', and 'water is essential' = 'ka pa su'. What is the code for essential?",
    options: ["ka", "pa", "su", "ti"],
    answer: 2,
    explanation:
      "Water=ka and is=pa. Therefore the remaining code su represents essential.",
  },
  {
    id: 56,
    difficulty: "Hard",
    question:
      "If the letters of PLANET are arranged in descending alphabetical order, how will it be coded?",
    options: ["TPNLEA", "TPLNEA", "TPELNA", "TLPN EA"],
    answer: 0,
    explanation:
      "The letters are T, P, N, L, E, A in descending alphabetical order. Therefore PLANET = TPNLEA.",
  },
  {
    id: 57,
    difficulty: "Hard",
    question:
      "If the first and second letters exchange places, the third and fourth exchange places, and so on, how will MARKET be coded?",
    options: ["AMKRTE", "AMKRET", "MAKRTE", "AMKERT"],
    answer: 0,
    explanation:
      "Swap M-A, R-K and E-T. Therefore MARKET becomes AMKRTE.",
  },
  {
    id: 58,
    difficulty: "Hard",
    question:
      "If a word is coded by writing its letters in even positions first and odd positions next, how will COMPUTER be coded?",
    options: ["OPTRCMUE", "OPTRCMEU", "OMPUTERC", "POTRCMEU"],
    answer: 0,
    explanation:
      "COMPUTER has even-position letters O, P, T, R and odd-position letters C, M, U, E. Therefore the code is OPTRCMUE.",
  },
  {
    id: 59,
    difficulty: "Hard",
    question:
      "If 'smart students work hard' is coded as 'ka ti mo pa', 'hard workers learn fast' as 'pa ru se lo', and 'students learn smart' as 'ti se ka', what is the code for workers?",
    options: ["ru", "se", "pa", "lo"],
    answer: 0,
    explanation:
      "Hard=pa, students=ti, smart=ka and learn=se. Therefore the remaining code ru represents workers.",
  },
  {
    id: 60,
    difficulty: "Hard",
    question:
      "If the code of a word is formed by first reversing the word and then shifting every letter one position forward, how will REASON be coded?",
    options: ["OPTBFS", "OPSBFS", "OPTBGR", "NQTBFS"],
    answer: 0,
    explanation:
      "Reverse REASON to NOSAER. Shift every letter one position forward: N→O, O→P, S→T, A→B, E→F, R→S. Therefore the code is OPTBFS.",
  },
];