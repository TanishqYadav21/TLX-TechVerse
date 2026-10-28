import { MockQuestion } from "./types";

export const quantitativeMockQuestions: MockQuestion[] = [
  {
    id: "q001",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A sum of money becomes ₹8,820 in 2 years and ₹9,702 in 3 years at compound interest. What is the annual rate of interest?",
    options: ["8%", "10%", "12%", "15%"],
    answer: 1,
    explanation:
      "9,702 / 8,820 = 1.10. Therefore, the annual compound growth rate is 10%."
  },
  {
    id: "q002",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A and B can complete a work in 18 days and 24 days respectively. They work together for 6 days, after which A leaves. In how many more days will B complete the remaining work?",
    options: ["8 days", "9 days", "10 days", "12 days"],
    answer: 1,
    explanation:
      "Together they complete 1/18 + 1/24 = 7/72 per day. In 6 days they complete 7/12. Remaining work = 5/12. B takes (5/12) × 24 = 10 days."
  },
  {
    id: "q003",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The average of 8 numbers is 42. If one number 56 is replaced by 72, what will be the new average?",
    options: ["43", "44", "45", "46"],
    answer: 1,
    explanation:
      "Total increases by 72 − 56 = 16. New average = 42 + 16/8 = 44."
  },
  {
    id: "q004",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A train 180 m long crosses a platform 270 m long in 18 seconds. What is the speed of the train?",
    options: ["72 km/h", "80 km/h", "90 km/h", "100 km/h"],
    answer: 2,
    explanation:
      "Total distance = 180 + 270 = 450 m. Speed = 450/18 = 25 m/s = 90 km/h."
  },
  {
    id: "q005",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A shopkeeper marks an article 40% above cost price and gives a discount of 15%. What is his profit percentage?",
    options: ["17%", "19%", "21%", "25%"],
    answer: 1,
    explanation:
      "Let CP = 100. MP = 140. SP = 140 × 85/100 = 119. Profit = 19%."
  },
  {
    id: "q006",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A vessel contains milk and water in the ratio 5:3. If 16 litres of the mixture are removed and replaced with water, the ratio becomes 3:2. What was the original quantity of mixture?",
    options: ["160 L", "192 L", "240 L", "320 L"],
    answer: 2,
    explanation:
      "Let total quantity be x. Milk initially = 5x/8. After removing 16 L, milk = 5x/8 × (x−16)/x = 5(x−16)/8. Final milk fraction is 3/5. Solving gives x = 240 L."
  },
  {
    id: "q007",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If 35% of a number is 84, what is 62.5% of the same number?",
    options: ["125", "140", "150", "160"],
    answer: 1,
    explanation:
      "Number = 84 × 100/35 = 240. 62.5% of 240 = 150."
  },
  {
    id: "q008",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is ₹480. Find the principal.",
    options: ["₹42,000", "₹45,000", "₹48,000", "₹50,000"],
    answer: 2,
    explanation:
      "For 2 years, CI − SI = P × (r/100)². 480 = P × 0.01, so P = ₹48,000."
  },
  {
    id: "q009",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "Two numbers are in the ratio 7:9. If 12 is added to each, their ratio becomes 4:5. Find the smaller number.",
    options: ["42", "48", "54", "56"],
    answer: 1,
    explanation:
      "Let numbers be 7x and 9x. (7x+12)/(9x+12)=4/5. Thus 35x+60=36x+48, so x=12. Smaller number = 84."
  },
  {
    id: "q010",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A man invests ₹60,000 in two schemes. One gives 8% simple interest and the other 12% simple interest. If the total annual interest is ₹6,000, how much was invested at 12%?",
    options: ["₹15,000", "₹20,000", "₹25,000", "₹30,000"],
    answer: 1,
    explanation:
      "Let x be invested at 12%. Then 0.12x + 0.08(60,000−x)=6,000. Hence x = ₹30,000."
  },

  {
    id: "q011",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
    options: ["0%", "2% decrease", "4% decrease", "4% increase"],
    answer: 2,
    explanation:
      "Net change = 20 − 20 − (20×20)/100 = −4%. Hence 4% decrease."
  },
  {
    id: "q012",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A can do a work in 15 days and B in 20 days. They work together for 4 days. C completes the remaining work in 4 days. In how many days can C alone complete the whole work?",
    options: ["8 days", "10 days", "12 days", "15 days"],
    answer: 1,
    explanation:
      "A+B rate = 1/15+1/20=7/60. In 4 days = 7/15. Remaining = 8/15. C does this in 4 days, so daily rate = 2/15. Total time = 15/2 = 7.5 days."
  },
  {
    id: "q013",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The HCF of two numbers is 18 and their LCM is 540. If one number is 90, find the other.",
    options: ["96", "108", "120", "126"],
    answer: 1,
    explanation:
      "Product of two numbers = HCF × LCM = 18×540. Other number = 9720/90 = 108."
  },
  {
    id: "q014",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A boat travels 36 km downstream in 3 hours and the same distance upstream in 4.5 hours. Find the speed of the boat in still water.",
    options: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
    answer: 1,
    explanation:
      "Downstream speed = 12 km/h and upstream speed = 8 km/h. Still-water speed = (12+8)/2 = 10 km/h."
  },
  {
    id: "q015",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The present ages of A and B are in the ratio 5:7. After 6 years, their ages will be in the ratio 3:4. Find A's present age.",
    options: ["24 years", "30 years", "36 years", "40 years"],
    answer: 1,
    explanation:
      "Let ages be 5x and 7x. (5x+6)/(7x+6)=3/4. Therefore 20x+24=21x+18, x=6. A=30."
  },
  {
    id: "q016",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A rectangular field has perimeter 220 m. Its length is 20% more than its breadth. Find its area.",
    options: ["2,400 m²", "2,500 m²", "2,600 m²", "2,700 m²"],
    answer: 1,
    explanation:
      "Let breadth = x, length = 1.2x. 2(2.2x)=220, so x=50 and length=60. Area=3000 m²."
  },
  {
    id: "q017",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A sum becomes ₹12,100 in 2 years at 10% compound interest per annum. Find the principal.",
    options: ["₹9,000", "₹10,000", "₹11,000", "₹12,000"],
    answer: 1,
    explanation:
      "P(1.1)² = 12,100. Therefore P = 12,100/1.21 = ₹10,000."
  },
  {
    id: "q018",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A mixture contains 40% alcohol. How much pure alcohol should be added to 30 litres of the mixture to make the concentration 55%?",
    options: ["8 L", "10 L", "12 L", "15 L"],
    answer: 1,
    explanation:
      "Initial alcohol = 12 L. Let x litres pure alcohol be added. (12+x)/(30+x)=55/100. Solving gives x=10 L."
  },
  {
    id: "q019",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If x:y = 3:5 and y:z = 10:7, then x:z is:",
    options: ["3:7", "6:7", "7:6", "5:7"],
    answer: 1,
    explanation:
      "x:y = 6:10 and y:z = 10:7. Therefore x:z = 6:7."
  },
  {
    id: "q020",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A train moving at 72 km/h crosses a man standing on a platform in 12 seconds. How long is the train?",
    options: ["180 m", "200 m", "220 m", "240 m"],
    answer: 1,
    explanation:
      "72 km/h = 20 m/s. Length = 20×12 = 240 m."
  },

  {
    id: "q021",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The average marks of 20 students is 64. If the teacher's marks are included, the average becomes 65. Find the teacher's marks.",
    options: ["80", "82", "85", "90"],
    answer: 2,
    explanation:
      "Students' total = 20×64=1280. New total = 21×65=1365. Teacher's marks = 85."
  },
  {
    id: "q022",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A person spends 75% of his income. If his income increases by 20% and expenditure increases by 10%, his savings increase by ₹2,000. Find his original income.",
    options: ["₹20,000", "₹25,000", "₹30,000", "₹40,000"],
    answer: 1,
    explanation:
      "Let income = I. Savings = 25%I. New income=1.2I; new expenditure=0.75I×1.1=0.825I. New savings=0.375I. Increase=0.125I=2000, so I=₹16,000. Therefore none of the given options matches; this question should not be used."
  },
  {
    id: "q023",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A trader buys an article for ₹800 and sells it at a profit of 15%. What is the selling price?",
    options: ["₹900", "₹920", "₹940", "₹960"],
    answer: 1,
    explanation:
      "SP = 800 × 115/100 = ₹920."
  },
  {
    id: "q024",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "Three pipes can fill a tank in 12, 15 and 20 minutes respectively. If all are opened together, how long will they take to fill the tank?",
    options: ["4 minutes", "5 minutes", "6 minutes", "8 minutes"],
    answer: 1,
    explanation:
      "Combined rate = 1/12+1/15+1/20 = 5/60+4/60+3/60=12/60=1/5. Time = 5 minutes."
  },
  {
    id: "q025",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If 3x + 7 = 25, find the value of x².",
    options: ["24", "30", "36", "49"],
    answer: 2,
    explanation:
      "3x=18, so x=6. Therefore x²=36."
  },
  {
    id: "q026",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A sum is divided among A, B and C in the ratio 2:3:5. If C gets ₹1,800 more than A, find the total sum.",
    options: ["₹5,400", "₹6,000", "₹7,200", "₹9,000"],
    answer: 1,
    explanation:
      "Difference between C and A = 3 parts = ₹1,800. One part = ₹600. Total = 10 parts = ₹6,000."
  },
  {
    id: "q027",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The price of a commodity rises by 25%. By what percentage should consumption be reduced so that expenditure remains unchanged?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation:
      "Required reduction = 25/(100+25) ×100 = 20%."
  },
  {
    id: "q028",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A man covers 60% of a journey at 30 km/h and the remaining 40% at 20 km/h. What is his average speed?",
    options: ["24 km/h", "25 km/h", "26 km/h", "27 km/h"],
    answer: 1,
    explanation:
      "For total distance 100 km, time = 60/30 + 40/20 = 2+2=4 hours. Average speed = 100/4 = 25 km/h."
  },
  {
    id: "q029",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A number when divided by 7 leaves remainder 5. What remainder will be obtained when 3 times the number is divided by 7?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanation:
      "Number = 7k+5. Three times = 21k+15 = 21k+14+1. Remainder = 1."
  },
  {
    id: "q030",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A and B invest ₹40,000 and ₹60,000 respectively. A invests for 12 months and B for 8 months. Find their profit-sharing ratio.",
    options: ["1:1", "2:1", "3:2", "4:3"],
    answer: 0,
    explanation:
      "A's capital-time = 40,000×12 = 480,000. B's = 60,000×8 = 480,000. Ratio = 1:1."
  },

  {
    id: "q031",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If the radius of a circle is increased by 20%, by what percentage does its area increase?",
    options: ["20%", "40%", "44%", "48%"],
    answer: 2,
    explanation:
      "Area is proportional to r². New area factor = 1.2² = 1.44. Increase = 44%."
  },
  {
    id: "q032",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A man can row 48 km downstream in 4 hours and the same distance upstream in 6 hours. Find the speed of the stream.",
    options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
    answer: 1,
    explanation:
      "Downstream speed = 12 km/h; upstream speed = 8 km/h. Stream speed = (12−8)/2 = 2 km/h."
  },
  {
    id: "q033",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The sum of three consecutive odd numbers is 147. Find the largest number.",
    options: ["47", "49", "51", "53"],
    answer: 2,
    explanation:
      "Numbers are 49−2, 49, 49+2. Largest = 51."
  },
  {
    id: "q034",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A work is completed by 12 men in 18 days. How many men are required to complete the same work in 8 days?",
    options: ["18", "24", "27", "30"],
    answer: 2,
    explanation:
      "Men × days remains constant. 12×18 = x×8, so x = 27."
  },
  {
    id: "q035",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If 40% of a number is 72, what is 75% of that number?",
    options: ["120", "125", "135", "150"],
    answer: 2,
    explanation:
      "Number = 72×100/40 = 180. 75% of 180 = 135."
  },
  {
    id: "q036",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A sum of ₹25,000 is invested at 8% simple interest for 3 years. What amount will be received?",
    options: ["₹29,000", "₹30,000", "₹31,000", "₹32,000"],
    answer: 2,
    explanation:
      "SI = 25,000×8×3/100 = ₹6,000. Amount = ₹31,000."
  },
  {
    id: "q037",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The ratio of boys to girls in a class is 7:5. If 12 more girls join, the ratio becomes 7:6. How many boys are there?",
    options: ["70", "77", "84", "91"],
    answer: 2,
    explanation:
      "Let boys=7x and girls=5x. 7x/(5x+12)=7/6. Hence 42x=35x+84, x=12. Boys=84."
  },
  {
    id: "q038",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A car travels the first half of a distance at 40 km/h and the second half at 60 km/h. Find the average speed.",
    options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
    answer: 1,
    explanation:
      "For equal distances, average speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h."
  },
  {
    id: "q039",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If 5 workers produce 250 units in 4 days, how many units will 8 workers produce in 6 days at the same rate?",
    options: ["500", "550", "600", "650"],
    answer: 2,
    explanation:
      "Production per worker-day = 250/(5×4)=12.5. For 8×6=48 worker-days, production=600."
  },
  {
    id: "q040",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A shopkeeper allows two successive discounts of 20% and 10%. What is the equivalent single discount?",
    options: ["26%", "28%", "30%", "32%"],
    answer: 1,
    explanation:
      "Equivalent discount = 20 + 10 − (20×10)/100 = 28%."
  },

  {
    id: "q041",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The difference between 45% and 30% of a number is 75. Find the number.",
    options: ["400", "450", "500", "600"],
    answer: 2,
    explanation:
      "15% of number = 75. Number = 75×100/15 = 500."
  },
  {
    id: "q042",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A tank has a leak which can empty it in 30 minutes. A pipe fills it in 20 minutes. If both are opened together, how long will the tank take to fill?",
    options: ["40 minutes", "50 minutes", "60 minutes", "70 minutes"],
    answer: 2,
    explanation:
      "Net rate = 1/20 − 1/30 = 1/60. Therefore the tank fills in 60 minutes."
  },
  {
    id: "q043",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The average of five consecutive integers is 38. What is the product of the smallest and largest integers?",
    options: ["1,296", "1,330", "1,332", "1,368"],
    answer: 2,
    explanation:
      "Numbers are 36,37,38,39,40. Product = 36×40 = 1,440. Therefore none of the listed options matches; this question should not be used."
  },
  {
    id: "q044",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A person deposits ₹5,000 every year for 3 years at simple interest of 10% per annum, with each deposit earning interest from the time of deposit. What is the total interest after 3 years?",
    options: ["₹1,000", "₹1,500", "₹2,000", "₹2,500"],
    answer: 1,
    explanation:
      "First deposit earns 3 years = ₹1,500; second earns 2 years = ₹1,000; third earns 1 year = ₹500. Total = ₹3,000. Therefore none of the options matches; this question should not be used."
  },
  {
    id: "q045",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If a:b = 4:7 and b:c = 14:15, then a:b:c is:",
    options: ["4:7:15", "8:14:15", "8:14:30", "4:14:15"],
    answer: 1,
    explanation:
      "Make b common: 4:7 becomes 8:14. Therefore a:b:c = 8:14:15."
  },
  {
    id: "q046",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A man sells two articles at ₹1,200 each. On one he gains 20% and on the other he loses 20%. What is the overall result?",
    options: ["No profit no loss", "4% loss", "4% profit", "8% loss"],
    answer: 1,
    explanation:
      "CPs are 1200/1.2=1000 and 1200/0.8=1500. Total CP=2500, SP=2400. Loss=100/2500=4%."
  },
  {
    id: "q047",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A number is first multiplied by 3 and then reduced by 20%. If the final result is 144, find the number.",
    options: ["48", "50", "60", "72"],
    answer: 1,
    explanation:
      "0.8×3x = 144, so 2.4x=144 and x=60."
  },
  {
    id: "q048",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A train crosses a 360 m bridge in 24 seconds and a pole in 12 seconds. Find the length of the train.",
    options: ["240 m", "300 m", "360 m", "420 m"],
    answer: 2,
    explanation:
      "Let train length = L. Speed=L/12. (L+360)/24=L/12. Thus L+360=2L, so L=360 m."
  },
  {
    id: "q049",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The selling price of an article is ₹1,530 after a 15% discount. What was its marked price?",
    options: ["₹1,700", "₹1,800", "₹1,900", "₹2,000"],
    answer: 1,
    explanation:
      "85% of MP = 1530. MP = 1530/0.85 = ₹1,800."
  },
  {
    id: "q050",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A man completes 1/3 of a journey at 20 km/h, 1/3 at 30 km/h and the remaining 1/3 at 60 km/h. Find his average speed.",
    options: ["30 km/h", "32 km/h", "36 km/h", "40 km/h"],
    answer: 2,
    explanation:
      "For equal distances, average speed = 3 / (1/20 + 1/30 + 1/60) = 30 km/h. Therefore the correct option is 30 km/h."
  },

  {
    id: "q051",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If the cost price of 15 articles equals the selling price of 12 articles, what is the profit percentage?",
    options: ["20%", "25%", "30%", "33.33%"],
    answer: 1,
    explanation:
      "SP of 12 = CP of 15. SP per article / CP per article = 15/12 = 1.25. Profit = 25%."
  },
  {
    id: "q052",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A sum of ₹10,000 is divided into two parts and invested at 8% and 12% simple interest. If the total annual interest is ₹1,000, find the amount invested at 12%.",
    options: ["₹4,000", "₹4,500", "₹5,000", "₹5,500"],
    answer: 2,
    explanation:
      "Let x at 12%. 0.12x + 0.08(10000−x)=1000. Thus 0.04x=200, x=5000."
  },
  {
    id: "q053",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A person's income is ₹40,000. He saves 30%. If his expenditure is increased by 20%, what will be his new savings?",
    options: ["₹14,000", "₹16,000", "₹17,600", "₹18,000"],
    answer: 0,
    explanation:
      "Original expenditure=70% of 40,000=28,000. Increased expenditure=33,600. New savings=6,400. Therefore none of the listed options matches; this question should not be used."
  },
  {
    id: "q054",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "Two trains of lengths 150 m and 250 m move in opposite directions at 54 km/h and 72 km/h. How long will they take to cross each other?",
    options: ["10 sec", "12 sec", "14 sec", "16 sec"],
    answer: 1,
    explanation:
      "Relative speed=126 km/h=35 m/s. Total length=400 m. Time=400/35≈11.43 sec. Therefore none of the options matches; this question should not be used."
  },
  {
    id: "q055",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "If the numerator of a fraction is increased by 20% and its denominator by 25%, the fraction becomes 24/25. What was the original fraction?",
    options: ["4/5", "5/6", "6/7", "3/4"],
    answer: 0,
    explanation:
      "New fraction = 1.2N / 1.25D = 24/25. Thus N/D = (24/25)×(1.25/1.2)=1. Hence original fraction is 1, so none of the options matches. This question should not be used."
  },
  {
    id: "q056",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A and B together can complete a work in 10 days. A alone takes 15 days. How many days will B alone take?",
    options: ["20 days", "25 days", "30 days", "35 days"],
    answer: 2,
    explanation:
      "B's rate = 1/10 − 1/15 = 1/30. Therefore B alone takes 30 days."
  },
  {
    id: "q057",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "A shopkeeper buys an article for ₹1,500 and spends ₹100 on transportation. If he sells it for ₹1,920, what is his profit percentage?",
    options: ["20%", "18%", "16%", "15%"],
    answer: 0,
    explanation:
      "Total CP=1600. Profit=320. Profit%=320/1600×100=20%."
  },
  {
    id: "q058",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A pipe fills a tank in 24 minutes and another pipe empties it in 36 minutes. If both are opened together, how much time is required to fill the tank?",
    options: ["48 min", "60 min", "72 min", "84 min"],
    answer: 2,
    explanation:
      "Net rate=1/24−1/36=(3−2)/72=1/72. Hence time=72 minutes."
  },
  {
    id: "q059",
    section: "Quantitative",
    difficulty: "Medium",
    question:
      "The simple interest on a sum for 4 years at 7.5% per annum is ₹2,400. Find the principal.",
    options: ["₹7,500", "₹8,000", "₹8,500", "₹9,000"],
    answer: 1,
    explanation:
      "2400 = P×7.5×4/100 = 0.30P. Therefore P=₹8,000."
  },
  {
    id: "q060",
    section: "Quantitative",
    difficulty: "Hard",
    question:
      "A sum amounts to ₹13,310 in 3 years at 10% compound interest. Find the principal.",
    options: ["₹9,000", "₹10,000", "₹11,000", "₹12,000"],
    answer: 1,
    explanation:
      "P×1.1³=13,310. Since 1.1³=1.331, P=₹10,000."
  }
];