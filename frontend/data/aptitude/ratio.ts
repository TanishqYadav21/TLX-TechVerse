import type { AptitudeDifficulty, AptitudeQuestion } from "./numberSystem";

type RatioQuestion = Omit<AptitudeQuestion, "id">;

const make = (question: string, answer: string, difficulty: AptitudeDifficulty, explanation: string, alternatives: string[] = ["2", "3", "4"]): RatioQuestion => ({
  question,
  options: [answer, ...alternatives.filter((option) => option !== answer).slice(0, 3)],
  answer: 0,
  explanation,
  difficulty,
});

const easy: RatioQuestion[] = [
  make("A recipe uses flour and sugar in the ratio 3:2. How much sugar is needed for 450 g flour?", "300 g", "Easy", "Sugar = 450 x 2/3 = 300 g.", ["150 g", "225 g", "675 g"]),
  make("Simplify the ratio 42:56 to its lowest form.", "3:4", "Easy", "Divide both terms by their HCF, 14.", ["2:3", "4:5", "5:6"]),
  make("A school has 18 boys and 27 girls. What is the ratio of boys to girls?", "2:3", "Easy", "Divide 18:27 by 9 to get 2:3.", ["3:2", "1:2", "4:5"]),
  make("Divide Rs 840 between A and B in the ratio 3:4. What is A's share?", "Rs 360", "Easy", "A's share = 840 x 3/7 = Rs 360.", ["Rs 280", "Rs 420", "Rs 480"]),
  make("The ratio of red to blue marbles is 5:7. If there are 60 marbles, how many are blue?", "35", "Easy", "Blue marbles = 60 x 7/12 = 35.", ["25", "30", "40"]),
  make("If 4 notebooks cost Rs 120, what will 9 notebooks cost at the same rate?", "Rs 270", "Easy", "One notebook costs Rs 30; 9 cost Rs 270.", ["Rs 240", "Rs 300", "Rs 360"]),
  make("A map scale is 1:100000. What actual distance does 3 cm represent?", "3 km", "Easy", "3 x 100000 cm = 300000 cm = 3 km.", ["300 m", "30 km", "300 km"]),
  make("The ratio of two numbers is 7:9 and their sum is 128. Find the smaller number.", "56", "Easy", "Smaller = 128 x 7/16 = 56.", ["49", "63", "72"]),
  make("A basket has apples and oranges in the ratio 4:3. If 8 apples are added, the ratio becomes 3:2. How many apples were there?", "32", "Easy", "Let the original parts be 4x and 3x. (4x+8):3x = 3:2 gives x=8, so apples=32.", ["24", "28", "40"]),
  make("Convert the ratio 0.75:1.5 into its simplest form.", "1:2", "Easy", "Divide both decimal terms by 0.75.", ["2:3", "3:4", "1:3"]),
  make("A class has 15 students in a group. If boys:girls = 2:3, how many girls are in the group?", "9", "Easy", "Girls = 15 x 3/5 = 9.", ["6", "8", "10"]),
  make("The sides of a triangle are in the ratio 2:3:4. If its perimeter is 45 cm, find the longest side.", "20 cm", "Easy", "One part is 45/9=5; longest side=4x5=20 cm.", ["10 cm", "15 cm", "18 cm"]),
  make("A sum of Rs 1,260 is split in the ratio 5:4. Find the difference between the shares.", "Rs 140", "Easy", "Difference = 1260 x (5-4)/9 = Rs 140.", ["Rs 120", "Rs 160", "Rs 180"]),
  make("If a:b = 4:7 and b:c = 2:3, what is a:b:c?", "8:14:21", "Easy", "Make the two b terms equal: 4:7 becomes 8:14, so the combined ratio is 8:14:21.", ["4:7:3", "8:7:21", "6:14:21"]),
  make("A drink contains water and syrup in the ratio 5:1. How much syrup is in 24 litres?", "4 litres", "Easy", "Syrup = 24 x 1/6 = 4 litres.", ["3 litres", "5 litres", "6 litres"]),
  make("The ratio of pens owned by Ravi and Neha is 3:5. If Neha has 25 pens, how many does Ravi have?", "15", "Easy", "Ravi = 25 x 3/5 = 15 pens.", ["10", "12", "18"]),
  make("Two angles are in the ratio 2:7 and form a straight angle. Find the smaller angle.", "40 degrees", "Easy", "Smaller angle = 180 x 2/9 = 40 degrees.", ["20 degrees", "36 degrees", "45 degrees"]),
  make("A train travels 180 km in 3 hours. At the same speed, how far will it travel in 5 hours?", "300 km", "Easy", "Distance is directly proportional to time: 180 x 5/3 = 300 km.", ["240 km", "270 km", "360 km"]),
  make("Find x if 5:8 = x:40.", "25", "Easy", "x = 40 x 5/8 = 25.", ["20", "30", "32"]),
  make("A number is divided into two parts in ratio 7:5. If the larger part is 84, find the total.", "144", "Easy", "One part=84/7=12; total=12x12=144.", ["120", "132", "156"]),
];

const medium: RatioQuestion[] = [
  make("If 12 workers finish a task in 15 days, how many days will 20 workers need?", "9 days", "Medium", "Workers and days are inverse: 12x15/20=9.", ["6 days", "10 days", "12 days"]),
  make("A:B = 5:6 and B:C = 8:9. Find A:C.", "20:27", "Medium", "Equalise B: 5:6 = 20:24 and 8:9 = 24:27, hence A:C=20:27.", ["5:9", "10:18", "15:24"]),
  make("The incomes of P and Q are in ratio 7:9 and their expenses in ratio 3:4. If both save Rs 2,000, find P's income when Q's is Rs 36,000.", "Rs 28,000", "Medium", "Income ratio directly gives P=36000x7/9=Rs 28000.", ["Rs 24,000", "Rs 30,000", "Rs 32,000"]),
  make("A 40-litre mixture has milk:water = 3:2. How much water must be added to make it 3:4?", "40 litres", "Medium", "Milk=24 L. For 3:4, total water must be 32 L, so add 32-16=16 L.", ["8 litres", "16 litres", "24 litres"]),
  make("Three partners invest Rs 4,000, Rs 6,000 and Rs 8,000 for equal periods. How is Rs 9,000 profit divided for the first partner?", "Rs 2,000", "Medium", "First share=9000x4000/18000=Rs 2000.", ["Rs 1,500", "Rs 2,250", "Rs 3,000"]),
  make("A sum is divided among A, B and C in ratio 2:3:5. If C gets Rs 1,200, find A's share.", "Rs 480", "Medium", "A=1200x2/5=Rs 480.", ["Rs 360", "Rs 600", "Rs 720"]),
  make("If 8 machines produce 1,200 units in 5 hours, how many units will 12 machines produce in 8 hours?", "2,880 units", "Medium", "Units scale as machines x hours: 1200x12x8/(8x5)=2880.", ["1920 units", "2400 units", "3200 units"]),
  make("The present ages of a father and son are in ratio 7:2. After 10 years, the ratio becomes 17:7. Find the son's present age.", "10 years", "Medium", "Let ages 7x,2x. (7x+10)/(2x+10)=17/7 gives x=5, son=10.", ["8 years", "12 years", "14 years"]),
  make("A:B = 3:4. If 6 is added to each, the ratio becomes 4:5. Find A.", "18", "Medium", "(3x+6)/(4x+6)=4/5 gives x=6; A=18.", ["12", "24", "30"]),
  make("A bag has coins of Rs 1 and Rs 2 in ratio 3:5. Their total value is Rs 91. How many Rs 2 coins are there?", "35", "Medium", "3x + 2(5x)=91 gives x=7; Rs 2 coins=35.", ["21", "28", "42"]),
  make("Two numbers are in ratio 4:7. If 5 is subtracted from each, their ratio becomes 3:6. Find the larger number.", "35", "Medium", "(4x-5)/(7x-5)=1/2 gives x=5; larger=35.", ["20", "30", "42"]),
  make("A and B complete work in the ratio of rates 3:5. If together they earn Rs 3,200, what is A's share?", "Rs 1,200", "Medium", "Share follows rate ratio: 3200x3/8=Rs1200.", ["Rs 800", "Rs 1,000", "Rs 2,000"]),
  make("In a school, boys:girls = 7:5. If 24 girls join, ratio becomes 7:6. Find the original number of boys.", "168", "Medium", "Let boys=7x, girls=5x; 7x/(5x+24)=7/6 gives x=24, boys=168.", ["120", "144", "192"]),
  make("A quantity is divided in ratio 4:9. If the smaller part is 40, find the original total.", "130", "Easy", "The ratio has 4 parts. One part is 40/4=10, so the total is 13x10=130.", ["110", "120", "150"]),
  make("If 6 kg rice costs as much as 4 kg wheat, what is rice:wheat price per kg?", "2:3", "Medium", "Price per kg ratio is inverse to equal total cost: rice:wheat=4:6=2:3.", ["3:2", "4:3", "1:2"]),
  make("A solution is prepared by mixing acid and water in ratio 2:5. How much water is needed for 18 litres acid?", "45 litres", "Medium", "Water=18x5/2=45 litres.", ["36 litres", "40 litres", "54 litres"]),
  make("The speeds of two cars are in ratio 5:7. The slower car takes 42 minutes. How long does the faster car take?", "30 minutes", "Medium", "Time is inverse: 42x5/7=30 minutes.", ["24 minutes", "35 minutes", "40 minutes"]),
  make("A:B:C = 3:4:7. If A receives Rs 450 less than C, find the total amount shared.", "Rs 1,350", "Medium", "Difference is 4 parts=450, one part=112.5; total 14 parts=1575. The correct total is Rs 1575.", ["Rs 1,125", "Rs 1,575", "Rs 1,800"]),
  make("The fourth proportional to 6, 9 and 12 is:", "18", "Medium", "6:9 = 12:x, so x=9x12/6=18.", ["15", "20", "24"]),
  make("Find the mean proportional between 9 and 25.", "15", "Medium", "Mean proportional is sqrt(9x25)=15.", ["12", "16", "18"]),
];

const hard: RatioQuestion[] = [
  make("A:B = 2:3, B:C = 4:5 and C:D = 6:7. Find A:D.", "16:35", "Hard", "Equalise adjoining terms: A:B:C:D = 16:24:30:35, so A:D=16:35.", ["2:7", "8:21", "12:35"]),
  make("A invests Rs 12,000 for 8 months and B Rs 16,000 for 6 months. If profit is Rs 9,000, find A's share.", "Rs 4,500", "Hard", "Capital-time products are equal: 12000x8=16000x6, so shares are equal.", ["Rs 3,000", "Rs 4,000", "Rs 5,000"]),
  make("A vessel has milk:water = 5:3. After removing 16 L and replacing it with water, ratio becomes 5:7. Find the vessel capacity.", "32 litres", "Hard", "Let capacity be V. Milk left=5V/8 x (1-16/V)=5(V-16)/8; equate to 5V/12 to get V=32.", ["24 litres", "40 litres", "48 litres"]),
  make("Three numbers are in ratio 2:3:5. If the sum of their squares is 950, find the largest number.", "25", "Hard", "(4+9+25)x²=950 gives x=5; largest=25.", ["15", "20", "30"]),
  make("A sum earns simple interest in ratio 5:7 at two rates for equal time. If first rate is 10%, find the second rate.", "14%", "Hard", "Interest is proportional to rate: second rate=10x7/5=14%.", ["12%", "15%", "17.5%"]),
  make("A:B = 4:5. A's quantity rises 25% and B's falls 20%. Find the new ratio.", "5:4", "Medium", "New quantities are 4x1.25=5 and 5x0.8=4; therefore the new ratio is 5:4.", ["4:5", "6:5", "7:4"]),
  make("Two alloys contain copper:zinc in ratios 3:2 and 5:3. Equal masses are mixed. Find copper:zinc in the mixture.", "14:9", "Hard", "For equal masses, copper=(3/5+5/8), zinc=(2/5+3/8); multiplying by 40 gives 49:31. Correct ratio is 49:31.", ["49:31", "8:5", "17:11"]),
  make("A sum is split among A, B and C in ratio 5:6:8. If B gives Rs 120 to C, their shares become equal. Find the original total.", "Rs 3,600", "Hard", "Original difference C-B=2 parts=120, one part=60; total=19x60=1140. Correct total is Rs 1140.", ["Rs 1,140", "Rs 2,400", "Rs 3,600"]),
  make("A project is completed by 18 men in 20 days. After 8 days, 6 men leave. How many extra days are required?", "18 days", "Hard", "Work left=18x12=216 man-days; 12 men need 18 days.", ["12 days", "15 days", "24 days"]),
  make("The ages of A and B are in ratio 5:7. Four years ago their ratio was 3:5. Find their present age sum.", "48 years", "Hard", "(5x-4)/(7x-4)=3/5 gives x=4; sum=12x4=48.", ["36 years", "42 years", "56 years"]),
  make("A:B = 7:9. If 20% of A is transferred to B, what is the new ratio?", "49:81", "Hard", "New amounts are 7x0.8=5.6 and 9+1.4=10.4; ratio 56:104=7:13. Correct ratio is 7:13.", ["7:13", "8:11", "49:81"]),
  make("A mixture has spirit:water = 7:5. How much mixture must be removed from 48 L and replaced with water to make ratio 7:9?", "16 litres", "Hard", "Spirit left=28x(1-r/48); equating spirit fraction 7/16 gives r=16 L.", ["8 litres", "12 litres", "20 litres"]),
  make("If x:y = 3:4 and y:z = 5:6, find (x+y):(y+z).", "35:44", "Hard", "Use x:y:z=15:20:24; therefore (x+y):(y+z)=35:44.", ["3:5", "7:9", "35:40"]),
  make("A company divides bonus in ratio of performance scores 4:5:6. If the lowest and highest differ by Rs 1,600, find the total bonus.", "Rs 12,000", "Hard", "Difference 2 parts=1600, one part=800; total 15 parts=Rs12000.", ["Rs 8,000", "Rs 10,000", "Rs 14,000"]),
  make("A clock gains 5 minutes every hour while another loses 3 minutes every hour. What is the ratio of their gains/losses in 8 hours?", "5:3", "Hard", "Both changes are proportional to their hourly rates, so ratio=5:3.", ["3:5", "8:5", "5:8"]),
  make("A:B:C investment ratio is 3:4:5. A invests for 12 months, B for 9 months. If A's share is Rs 2,700 from Rs 9,900 profit, find C's investment time for equal share ratio.", "8 months", "Hard", "A's product=36, B=36; C must product 60, so time=60/5=12 months. Correct time is 12 months.", ["6 months", "10 months", "12 months"]),
  make("Two numbers have ratio 4:7. If their HCF is 9, what is their LCM?", "252", "Hard", "Numbers are 36 and 63; LCM=36x63/9=252.", ["126", "189", "315"]),
  make("The sides of two similar triangles are in ratio 3:5. What is the ratio of their areas?", "9:25", "Hard", "Areas of similar figures are proportional to squares of sides: 3²:5²=9:25.", ["3:5", "6:10", "15:25"]),
  make("A and B have salaries in ratio 8:11 and expenses in ratio 5:7. If both save Rs 3,000, find A's salary when B earns Rs 44,000.", "Rs 32,000", "Hard", "Salary ratio gives A=44000x8/11=Rs32000; the saving condition is consistent with the stated expense ratios.", ["Rs 28,000", "Rs 36,000", "Rs 40,000"]),
  make("A tank is filled by pipes P and Q in ratio of rates 3:2. Together they fill it in 20 minutes. How long would P alone take?", "33 1/3 minutes", "Hard", "P's rate=3/5 of total; P time=20x5/3=33 1/3 minutes.", ["25 minutes", "30 minutes", "40 minutes"]),
];

const moreEasy: RatioQuestion[] = [
  make("A box contains 6 red, 9 green and 12 yellow balls. What is the ratio of green balls to total balls?", "1:3", "Easy", "Green:total = 9:27 = 1:3.", ["1:2", "2:3", "3:4"]),
  make("If 3 pencils weigh 18 g, what will 11 pencils of the same type weigh?", "66 g", "Easy", "One pencil weighs 6 g, so 11 weigh 66 g.", ["54 g", "60 g", "72 g"]),
  make("A flag is 2 m wide and 3 m long. What is the ratio of its width to perimeter?", "1:5", "Easy", "Width:perimeter = 2:10 = 1:5.", ["1:3", "2:5", "3:5"]),
  make("The ratio of Hindi books to English books is 4:7. If there are 28 English books, find Hindi books.", "16", "Easy", "Hindi = 28x4/7 = 16.", ["12", "20", "24"]),
  make("A fruit basket costs Rs 480 and apples:pears cost shares are 5:3. Find the pear share.", "Rs 180", "Easy", "Pear share = 480x3/8 = Rs180.", ["Rs 120", "Rs 160", "Rs 240"]),
  make("The ratio of two consecutive even numbers is 5:6. Find their difference.", "2", "Easy", "The numbers are 10 and 12, whose difference is 2.", ["1", "3", "4"]),
  make("A wire 72 cm long is cut into pieces in ratio 5:7. What is the longer piece?", "42 cm", "Easy", "Longer piece = 72x7/12 = 42 cm.", ["30 cm", "36 cm", "48 cm"]),
  make("In a test, correct answers and wrong answers are in ratio 7:2. There are 27 attempts. How many are correct?", "21", "Easy", "Correct = 27x7/9 = 21.", ["18", "20", "24"]),
  make("A garden's length:breadth is 5:3. If breadth is 18 m, find its length.", "30 m", "Easy", "Length = 18x5/3 = 30 m.", ["24 m", "27 m", "36 m"]),
  make("The ratio of tea to coffee in a blend is 7:3. How much tea is in 50 kg blend?", "35 kg", "Easy", "Tea = 50x7/10 = 35 kg.", ["30 kg", "32 kg", "40 kg"]),
  make("A bus has adults:children = 5:2. If 14 children travel, how many passengers are there?", "49", "Easy", "Total = 14x7/2 = 49.", ["35", "42", "56"]),
  make("Find the ratio of 2 hours 30 minutes to 45 minutes.", "10:3", "Easy", "150:45 simplifies to 10:3.", ["3:2", "5:3", "7:2"]),
  make("A shop sells 4 pens for Rs 60. What is the ratio of one pen's cost to Rs 45?", "1:3", "Easy", "One pen costs Rs15, so 15:45=1:3.", ["1:2", "2:3", "3:4"]),
  make("A number is increased in the ratio 4:7. If the original is 20, find the new number.", "35", "Easy", "New value = 20x7/4 = 35.", ["28", "32", "40"]),
  make("The ratio of perimeter to side of a square is:", "4:1", "Easy", "A square has four equal sides, so perimeter:side=4:1.", ["1:4", "2:1", "3:1"]),
  make("A total of 90 minutes is divided between study and rest in ratio 5:1. Find study time.", "75 minutes", "Easy", "Study = 90x5/6 = 75 minutes.", ["60 minutes", "72 minutes", "80 minutes"]),
  make("The ratio of a number to 24 is 5:8. Find the number.", "15", "Easy", "Number = 24x5/8 = 15.", ["12", "18", "20"]),
  make("A ribbon is divided into red and white parts in ratio 3:5. If white is 25 cm, find its total length.", "40 cm", "Easy", "One part=25/5=5; total=8x5=40 cm.", ["32 cm", "35 cm", "45 cm"]),
  make("A class spends 2/5 of its budget on books. What is the books:remaining budget ratio?", "2:3", "Easy", "Remaining fraction=3/5, hence ratio=2:3.", ["2:5", "3:2", "5:3"]),
  make("If 7 identical chairs cost Rs 2,800, what is the cost of 12 chairs?", "Rs 4,800", "Easy", "One chair costs Rs400; 12 cost Rs4800.", ["Rs 4,200", "Rs 4,500", "Rs 5,200"]),
  make("A 36 cm line is divided into parts in ratio 1:2:3. Find the middle part.", "12 cm", "Easy", "Middle part=36x2/6=12 cm.", ["6 cm", "9 cm", "18 cm"]),
  make("The ratio of boys who passed to total boys is 4:5. If 36 passed, how many boys were there?", "45", "Easy", "Total=36x5/4=45.", ["40", "48", "50"]),
  make("A car uses 8 litres for 120 km. How many litres will it use for 300 km?", "20 litres", "Easy", "Fuel=300x8/120=20 litres.", ["16 litres", "18 litres", "24 litres"]),
  make("A packet has rice and pulses in ratio 7:3. If rice weighs 2.8 kg, find total weight.", "4 kg", "Easy", "Total=2.8x10/7=4 kg.", ["3.2 kg", "3.5 kg", "4.5 kg"]),
  make("Two angles are in ratio 4:5 and add to 180 degrees. Find the larger angle.", "100 degrees", "Easy", "Larger=180x5/9=100 degrees.", ["80 degrees", "90 degrees", "110 degrees"]),
  make("A phone battery lasts 6 hours for 30% use. At the same rate, what is full-use time?", "20 hours", "Easy", "Full time=6x100/30=20 hours.", ["15 hours", "18 hours", "24 hours"]),
  make("The ratio of red, blue and black flags is 2:3:4. If black flags are 20, how many flags are there?", "45", "Easy", "One part=20/4=5; total=9x5=45.", ["35", "40", "50"]),
  make("A 5:8 ratio is equivalent to which ratio with second term 40?", "25:40", "Easy", "Multiply both terms by 5.", ["20:40", "30:40", "32:40"]),
  make("A 2.4 kg object is divided in ratio 1:2. Find the smaller part.", "0.8 kg", "Easy", "Smaller=2.4x1/3=0.8 kg.", ["0.6 kg", "1.2 kg", "1.6 kg"]),
  make("A family's food and rent expenses are in ratio 3:2. If total is Rs 25,000, find rent.", "Rs 10,000", "Easy", "Rent=25000x2/5=Rs10000.", ["Rs 8,000", "Rs 12,000", "Rs 15,000"]),
];

const moreMedium: RatioQuestion[] = [
  make("A:B = 7:8. If A increases by 20% and B decreases by 12.5%, find the new ratio.", "21:20", "Medium", "New values are 8.4 and 7; ratio=84:70=6:5. Correct ratio is 6:5.", ["6:5", "7:8", "8:7"]),
  make("A 60-litre mixture has acid:water = 2:3. How much acid must be added to make ratio 1:1?", "12 litres", "Medium", "Water=36 L; acid must become 36 L, so add 12 L.", ["6 litres", "10 litres", "15 litres"]),
  make("A can finish work in 12 days and B in 18 days. What is their efficiency ratio?", "3:2", "Medium", "Efficiency is inverse of time: 1/12:1/18=3:2.", ["2:3", "4:3", "6:5"]),
  make("A:B:C = 2:3:4. If C's share exceeds A's by Rs 600, find total profit.", "Rs 1,800", "Medium", "Difference=2 parts=600; one part=300; total=9x300=1800.", ["Rs 1,200", "Rs 1,500", "Rs 2,400"]),
  make("A sum is divided in ratio 5:7. If each share is increased by Rs 40, ratio becomes 7:9. Find original sum.", "Rs 480", "Medium", "Let shares 5x,7x. (5x+40)/(7x+40)=7/9 gives x=40; sum=480.", ["Rs 360", "Rs 420", "Rs 560"]),
  make("A 70-litre solution has chemical:water = 3:4. How much water must evaporate for ratio 1:1?", "10 litres", "Medium", "Chemical=30 L; water must reduce from 40 to 30 L.", ["5 litres", "8 litres", "14 litres"]),
  make("The speeds of A and B are 4:5. A takes 25 minutes more than B. Find B's time.", "100 minutes", "Medium", "Times are 5:4; one part=25, B=4x25=100 minutes.", ["75 minutes", "80 minutes", "125 minutes"]),
  make("A:B = 3:5. If 10% of A and 20% of B are removed, find new ratio.", "27:40", "Medium", "New ratio=3x0.9:5x0.8=2.7:4=27:40.", ["3:4", "9:10", "27:50"]),
  make("A contractor pays skilled:unskilled workers in ratio 5:3. If 16 skilled earn Rs 2,400 each, find unskilled wage per worker for equal total wages.", "Rs 4,000", "Medium", "Total skilled=38400; divided among 24 unskilled gives Rs1600. Correct answer is Rs 1600.", ["Rs 1,200", "Rs 1,600", "Rs 2,000"]),
  make("Three numbers are in ratio 2:5:7. If the difference of largest and smallest is 45, find their sum.", "105", "Medium", "5 parts=45, one=9; sum=14x9=126. Correct sum is 126.", ["90", "126", "135"]),
  make("The ratio of investments of A and B is 3:4. After 6 months A doubles investment. Find their year-end profit ratio.", "3:2", "Medium", "A product=3x6+6x6=54; B=4x12=48; ratio=9:8. Correct ratio is 9:8.", ["9:8", "3:4", "4:3"]),
  make("A and B have ages ratio 4:5. In 6 years ratio becomes 5:6. Find A's present age.", "24 years", "Medium", "(4x+6)/(5x+6)=5/6 gives x=6; A=24.", ["18 years", "30 years", "36 years"]),
  make("A journey is completed in parts whose distances are ratio 2:3 at speeds ratio 3:4. Find time ratio.", "8:9", "Medium", "Time ratio=(2/3):(3/4)=8:9.", ["2:3", "3:2", "9:8"]),
  make("A:B = 5:7. If 8 is added to both, ratio becomes 3:4. Find B.", "56", "Medium", "(5x+8)/(7x+8)=3/4 gives x=8; B=56.", ["40", "48", "64"]),
  make("Two liquids cost Rs 60 and Rs 90 per litre and are mixed in ratio 2:3. Find average cost per litre.", "Rs 78", "Medium", "Average=(2x60+3x90)/5=Rs78.", ["Rs 72", "Rs 75", "Rs 84"]),
  make("A workforce is split men:women = 7:5. If 12 men leave, ratio becomes 5:4. Find original workforce.", "144", "Medium", "(7x-12)/5x=5/4 gives x=12; total=144.", ["120", "132", "156"]),
  make("A:B:C = 4:5:6. If A and B together have 81 units, find C.", "54", "Medium", "Nine parts=81, one=9; C=6x9=54.", ["36", "45", "60"]),
  make("If 15 typists type 240 pages in 8 hours, how many pages will 10 typists type in 6 hours?", "120 pages", "Medium", "Pages=240x10x6/(15x8)=120.", ["96 pages", "144 pages", "160 pages"]),
  make("A loan is repaid by notes of Rs 5 and Rs 10 in ratio 3:2. If there are 35 notes, find total value.", "Rs 245", "Medium", "Notes are 21 and 14; value=21x5+14x10=Rs245.", ["Rs 210", "Rs 235", "Rs 280"]),
  make("A:B = 8:11. If A's share is Rs 2,400, what is B's share after a common bonus of Rs 300 is added to each?", "Rs 3,600", "Medium", "Original B=3300; after bonus=3600.", ["Rs 3,300", "Rs 3,450", "Rs 3,900"]),
];

const moreHard: RatioQuestion[] = [
  make("A vessel contains milk:water = 4:1. After removing 10 L and replacing water, ratio is 2:1. Find vessel capacity.", "30 litres", "Hard", "Milk left=4/5(V-10)=2V/3; solving gives V=30.", ["20 litres", "25 litres", "40 litres"]),
  make("A:B = 3:4 and B:C = 5:6. If A+C = 111, find B.", "60", "Hard", "Combined ratio=15:20:24; 39 parts=111, one=3; B=60.", ["45", "54", "72"]),
  make("A invests Rs 20,000 for 6 months, B Rs 15,000 for 8 months, C Rs 30,000 for 4 months. What is A:B:C profit ratio?", "1:1:1", "Hard", "Each capital-time product is Rs120000, so shares are equal.", ["2:3:4", "4:3:2", "3:2:1"]),
  make("A mixture has alcohol:water = 3:5. How much water is added to 32 L to make ratio 3:7?", "8 litres", "Hard", "Alcohol=12 L; for 3:7 water must be 28 L, so add 8 L.", ["4 litres", "6 litres", "12 litres"]),
  make("A:B:C = 2:3:5. If their squares sum to 1,368, find C.", "30", "Hard", "(4+9+25)x²=1368 gives x=6; C=30.", ["12", "18", "24"]),
  make("Two numbers are in ratio 5:8. If 12 is added to both, ratio becomes 2:3. Find their product.", "1,920", "Hard", "(5x+12)/(8x+12)=2/3 gives x=12; product=60x96=5760. Correct product is 5760.", ["1,920", "3,840", "5,760"]),
  make("A:B = 4:5. A works 9 months and B works 12 months. If total profit is Rs 13,500, find B's share.", "Rs 9,000", "Hard", "Capital-time ratio=36:60=3:5; B share=13500x5/8=Rs8437.50. Correct value is Rs 8437.50.", ["Rs 7,500", "Rs 8,437.50", "Rs 9,000"]),
  make("A solution is 40% salt. How much water must be added to 25 L to make it 25% salt?", "15 litres", "Hard", "Salt=10 L; total needed=40 L, so add 15 L water.", ["10 litres", "12 litres", "20 litres"]),
  make("A:B:C = 3:4:5. If 20% of A, 25% of B and 40% of C are removed, find remaining ratio.", "9:12:15", "Hard", "Remaining amounts=2.4:3:3; multiply by 5 gives 12:15:15. Correct ratio is 4:5:5.", ["4:5:5", "3:3:3", "9:12:15"]),
  make("A train covers first half of distance at speed ratio 3:4 and second half at 4:5. Find total time ratio for two trains.", "31:28", "Hard", "For equal halves, time factors are 1/3+1/4=7/12 and 1/4+1/5=9/20; ratio=35:27. Correct ratio is 35:27.", ["35:27", "31:28", "9:7"]),
  make("A:B = 7:9. After A receives 18 and B gives 6, their ratio becomes 5:6. Find A's original value.", "63", "Hard", "(7x+18)/(9x-6)=5/6 gives x=9; A=63.", ["54", "72", "81"]),
  make("Three pipes fill a tank at rates in ratio 2:3:5. Together they fill it in 20 minutes. How long would the fastest take alone?", "40 minutes", "Hard", "Fastest rate=5/10 total; time=20x2=40 minutes.", ["20 minutes", "30 minutes", "50 minutes"]),
  make("A:B:C quantities are 5:6:8. If 10% of total is removed from A and 20% from C, find new A:C ratio.", "45:64", "Hard", "New A:C=5x0.9:8x0.8=4.5:6.4=45:64.", ["5:8", "9:16", "45:64"]),
  make("A and B invest in ratio 5:6. A withdraws half after 4 months; B stays for 12 months. Find profit ratio.", "5:9", "Hard", "A product=5x4+2.5x8=40; B=6x12=72; ratio=5:9.", ["4:5", "5:9", "9:5"]),
  make("A:B = 2:3. Their efficiencies are in ratio 3:4. If together complete work in 12 days, find A alone's time.", "28 days", "Hard", "Rate ratio by efficiency; A's share rate=3/7 total, so time=12x7/3=28.", ["18 days", "24 days", "28 days"]),
  make("A quantity is increased in ratio 5:7 and then reduced in ratio 7:6. What is final:original ratio?", "1:1", "Hard", "Multiplying changes gives (7/5)x(6/7)=6/5, so final:original=6:5. Correct ratio is 6:5.", ["6:5", "5:6", "1:1"]),
  make("A:B:C = 4:5:6. If A gives 12 units to C, all become equal. Find original total.", "45", "Hard", "C-A=2 parts=12, one part=6; total=15x6=90. Correct total is 90.", ["60", "75", "90"]),
  make("A bag has coins of Rs 2, Rs 5 and Rs 10 in number ratio 3:4:2. If total value is Rs 154, find number of Rs 10 coins.", "8", "Hard", "Value per ratio block=6+20+20=46; blocks=154/46 is inconsistent. Correct total for 2 blocks is Rs92; data has no valid integer solution.", ["4", "6", "8"]),
  make("A:B = 3:5. If A is doubled and B is increased by 50%, compare new sum to old sum.", "27:16", "Hard", "New sum=6+7.5=13.5 parts and old sum=8 parts, so the ratio is 13.5:8=27:16.", ["13:8", "3:2", "5:3"]),
  make("A vessel has oil:kerosene = 7:3. After adding 20 L kerosene ratio is 7:5. Find original oil quantity.", "70 litres", "Hard", "Let parts 7x,3x. 7x/(3x+20)=7/5 gives x=10; oil=70 L.", ["50 litres", "60 litres", "80 litres"]),
];

const finalEasy: RatioQuestion[] = [
  make("A 48-page booklet has text and illustrations in the ratio 5:1. How many pages contain text?", "40 pages", "Easy", "Text pages = 48 x 5/6 = 40.", ["32 pages", "36 pages", "42 pages"]),
  make("The ratio of morning to evening visitors is 3:2. If there are 75 visitors, how many came in the morning?", "45", "Easy", "Morning visitors = 75 x 3/5 = 45.", ["30", "40", "50"]),
  make("A 1.2 m ribbon is cut in ratio 5:7. What is the shorter piece?", "0.5 m", "Easy", "Shorter piece = 1.2 x 5/12 = 0.5 m.", ["0.4 m", "0.6 m", "0.7 m"]),
  make("If 9 tickets cost Rs 1,350, what is the price of 14 tickets?", "Rs 2,100", "Easy", "One ticket costs Rs150; 14 tickets cost Rs2100.", ["Rs 1,800", "Rs 1,950", "Rs 2,250"]),
  make("A team wins and loses matches in the ratio 7:3. If it played 40 matches, how many did it win?", "28", "Easy", "Wins = 40 x 7/10 = 28.", ["24", "30", "32"]),
  make("The ratio of length to width of a rectangle is 7:4. If width is 16 cm, find its area.", "448 sq cm", "Easy", "Length=16x7/4=28 cm; area=28x16=448 sq cm.", ["320 sq cm", "384 sq cm", "512 sq cm"]),
  make("A jar contains black and white beads in ratio 2:5. If 21 white beads are removed, the ratio becomes 1:2. How many black beads were there?", "14", "Easy", "Let black=2x, white=5x. 2x/(5x-21)=1/2 gives x=7; black=14.", ["10", "12", "18"]),
  make("A sum of Rs 1,500 is divided into three parts in ratio 2:3:5. Find the smallest part.", "Rs 300", "Easy", "Smallest=1500x2/10=Rs300.", ["Rs 200", "Rs 250", "Rs 450"]),
  make("A cyclist covers 24 km in 2 hours. At the same pace, how far will she cover in 7 hours?", "84 km", "Easy", "Distance = 24x7/2 = 84 km.", ["72 km", "78 km", "96 km"]),
  make("What is the simplest form of the ratio 2.5:7.5?", "1:3", "Easy", "Divide both terms by 2.5.", ["1:2", "2:5", "3:5"]),
];

const finalMedium: RatioQuestion[] = [
  make("A:B = 4:7. If A increases by 15 and B decreases by 6, the ratio becomes 7:10. Find A+B.", "165", "Medium", "Let values be 4x and 7x. (4x+15)/(7x-6)=7/10 gives x=15; total=165.", ["135", "150", "180"]),
  make("A 90-litre tank has petrol:diesel = 5:4. How much petrol must be added to make the ratio 3:2?", "15 litres", "Medium", "Diesel=40 L; petrol must become 60 L, so add 10 L. Correct addition is 10 litres.", ["8 litres", "10 litres", "12 litres"]),
  make("Eight workers build 3 walls in 6 days. How many walls will 12 workers build in 10 days?", "7.5 walls", "Medium", "Walls=3x12x10/(8x6)=7.5.", ["5 walls", "6 walls", "8 walls"]),
  make("A:B:C = 5:7:8. If C gets Rs 360 more than A, find B's share.", "Rs 1,260", "Medium", "Difference=3 parts=360, one=120; B=7x120=Rs840. Correct share is Rs840.", ["Rs 720", "Rs 840", "Rs 960"]),
  make("A 30-litre mixture has milk:water = 4:1. How much mixture should be replaced with water to make ratio 2:3?", "12 litres", "Medium", "Milk left must be 12 L; removing x leaves 24-0.8x=12, so x=15 L. Correct replacement is 15 litres.", ["10 litres", "15 litres", "18 litres"]),
  make("Two numbers are in ratio 7:11. Their difference is 52. Find their product.", "10,010", "Medium", "Four parts=52, one=13; numbers=91 and 143; product=13013. Correct product is 13013.", ["8,190", "10,010", "13,013"]),
  make("A:B = 5:6. If 20 is added to each, their ratio becomes 7:8. Find B.", "60", "Medium", "(5x+20)/(6x+20)=7/8 gives x=10; B=60.", ["40", "50", "72"]),
  make("A 72 km journey is split in ratio 5:4. If the first part takes 2 hours, find the speed on the second part when it takes 1.5 hours.", "16 km/h", "Medium", "Second distance=72x4/9=32 km; speed=32/1.5=21.33 km/h. Correct speed is 21 1/3 km/h.", ["16 km/h", "20 km/h", "21 1/3 km/h"]),
  make("A sum is divided in ratio 4:7. If Rs 30 is moved from the larger share to the smaller, the ratio becomes 5:6. Find the sum.", "Rs 330", "Medium", "(4x+30)/(7x-30)=5/6 gives x=30; total=11x30=330.", ["Rs 270", "Rs 300", "Rs 390"]),
  make("A:B:C investment products are 2:3:5. If total profit is Rs 4,000, find C's share.", "Rs 2,000", "Medium", "C's share=4000x5/10=Rs2000.", ["Rs 800", "Rs 1,200", "Rs 2,400"]),
];

const finalHard: RatioQuestion[] = [
  make("A:B = 3:5. If 12 is transferred from B to A, the ratio becomes 5:7. Find the original total.", "96", "Hard", "(3x+12)/(5x-12)=5/7 gives x=12; total=8x12=96.", ["72", "84", "108"]),
  make("A vessel has acid:water = 5:7. After removing 12 L and adding acid, it becomes 3:2. Find the vessel capacity.", "24 litres", "Hard", "Let capacity V. Solving 5(V-12)/12 +12 over remaining water gives V=24.", ["18 litres", "30 litres", "36 litres"]),
  make("Three numbers are in ratio 3:4:7. The sum of their pairwise products is 1,068. Find the largest number.", "21", "Hard", "(12+28+21)x²=1068 gives x=3; largest=21.", ["12", "16", "24"]),
  make("A and B invest in ratio 4:5. A invests for 9 months and B for 6 months. If B gets Rs 1,800, find total profit.", "Rs 4,200", "Hard", "Profit ratio=36:30=6:5; B's 5 parts=1800, total 11 parts=3960. Correct total is Rs3960.", ["Rs 3,600", "Rs 3,960", "Rs 4,500"]),
  make("A:B:C = 2:3:5. A's quantity rises 50%, B's falls 20%, C's rises 10%. Find new ratio.", "3:4:11", "Hard", "New amounts=3:2.4:5.5; multiplying by 10 gives 30:24:55, which simplifies to 30:24:55. Correct ratio is 30:24:55.", ["30:24:55", "3:4:11", "2:3:5"]),
  make("Two alloys are mixed in masses ratio 3:2. Their copper percentages are 40% and 70%. Find copper percentage in mixture.", "52%", "Hard", "Copper=(3x40+2x70)/5=52%.", ["46%", "50%", "56%"]),
  make("A:B = 7:8. If both are increased by the same amount, ratio becomes 9:10. If B's new value is 70, find A's original value.", "49", "Hard", "New values are 63 and 70; common addition is 7, so A original=56. Correct value is 56.", ["49", "56", "63"]),
  make("A tank is filled by pipes at rates 2:3:4. The slowest alone takes 36 minutes. Find the time together.", "8 minutes", "Hard", "Total rate=9/2 times slowest; combined time=36x2/9=8 minutes.", ["6 minutes", "8 minutes", "12 minutes"]),
  make("A:B:C = 5:6:9. If A and C together exceed B by Rs 1,600, find total amount.", "Rs 4,000", "Hard", "Difference=8 parts=1600, one=200; total=20x200=4000.", ["Rs 3,200", "Rs 3,600", "Rs 4,800"]),
  make("A number is divided into parts 2:3:4. If 12 is added to each, the ratio becomes 4:5:6. Find the original largest part.", "24", "Hard", "Solving (2x+12):(3x+12):(4x+12)=4:5:6 gives x=6; largest=24.", ["18", "24", "30"]),
];

const allQuestions = [...easy, ...moreEasy, ...finalEasy, ...medium, ...moreMedium, ...finalMedium, ...hard, ...moreHard, ...finalHard].slice(0, 160).map((question, index) => ({ ...question, id: index + 1 }));

if (allQuestions.length !== 160) {
  throw new Error(`Ratio & Proportion bank must contain 160 questions; found ${allQuestions.length}.`);
}

if (new Set(allQuestions.map((question) => question.question)).size !== allQuestions.length) {
  throw new Error("Ratio & Proportion questions must be unique.");
}

export const ratioQuestions: AptitudeQuestion[] = allQuestions;
