const fs = require("fs");
const path = require("path");

function buildOptions(correct, distractors, answerLetter, seed) {
  const letters = ["A", "B", "C", "D"];
  const others = distractors.filter((d) => d !== correct).slice(0, 3);
  while (others.length < 3) others.push("None of these");
  let s = seed || 1;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  const options = {};
  let di = 0;
  for (const L of letters) options[L] = L === answerLetter ? correct : others[di++];
  return options;
}

const cycle = ["A", "C", "B", "D", "C", "A", "D", "B", "B", "D", "A", "C"];
const letterAt = (i) => cycle[i % cycle.length];

const questions = [];
let idx = 0;
function add(id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra = {}) {
  const answer = letterAt(idx++);
  questions.push({
    id,
    section,
    question,
    options: buildOptions(correct, distractors, answer, id * 97 + 11),
    answer,
    difficulty,
    topic,
    subtopic,
    explanation,
    marks: section === "pk" ? 2 : 1,
    ...extra,
  });
}

// ===== PK 1-25 (fresh; weak spots + high weight) =====
add(1, "pk", "Which SQL command permanently removes a table and its data from the database?", "DROP", ["TRUNCATE", "DELETE", "UPDATE"], "Easy", "DBMS", "SQL", "DROP removes table object; TRUNCATE/DELETE remove rows.");
add(2, "pk", "Primary key is selected from:", "Candidate keys", ["Foreign keys only", "Views only", "Indexes only"], "Easy", "DBMS", "Keys", "PK is one chosen candidate key.");
add(3, "pk", "At which isolation level are dirty reads possible?", "Read Uncommitted", ["Serializable", "Repeatable Read", "Read Committed"], "Medium", "DBMS", "Isolation", "Only Read Uncommitted allows dirty reads.");
add(4, "pk", "A foreign key in a child table must match:", "A candidate/primary key value in parent (or be NULL if allowed)", ["Any random string", "Only MAC address", "Only file path"], "Easy", "DBMS", "Constraints", "FK references parent key for referential integrity.");
add(5, "pk", "ACID property that ensures either all operations succeed or none do:", "Atomicity", ["Durability only", "Isolation only", "Indexing"], "Easy", "DBMS", "ACID", "Atomicity = all-or-nothing.");
add(6, "pk", "Which memory technique loads pages into RAM only when needed?", "Demand paging", ["Spooling only", "RAID only", "Defragmentation"], "Easy", "Operating Systems", "Memory", "Demand paging loads on page fault.");
add(7, "pk", "Round Robin scheduling mainly uses:", "Time quantum / time slice", ["Only FCFS without quantum", "Only priority forever", "Only shortest job without interrupt"], "Easy", "Operating Systems", "CPU Scheduling", "RR is preemptive with quantum.");
add(8, "pk", "Deadlock: four necessary conditions include mutual exclusion, hold and wait, no preemption, and:", "Circular wait", ["Paging", "Thrashing", "Spooling"], "Medium", "Operating Systems", "Deadlock", "Coffman conditions include circular wait.");
add(9, "pk", "Binary semaphore typically takes values:", "0 and 1", ["Only 5 and 10", "Any float only", "Only IP addresses"], "Easy", "Operating Systems", "Sync", "Binary semaphore has two states: 0 and 1.");
add(10, "pk", "Which OSI layer is concerned with routing between networks?", "Network", ["Transport", "Session", "Presentation"], "Easy", "Computer Networks", "OSI", "Network layer handles routing/IP.");
add(11, "pk", "Which protocol maps a hostname to an IP address?", "DNS", ["ARP", "DHCP", "SMTP"], "Easy", "Computer Networks", "Protocols", "DNS: name→IP; ARP: IP→MAC; DHCP: IP assignment.");
add(12, "pk", "Default port number for SSH is:", "22", ["80", "443", "25"], "Easy", "Computer Networks", "Ports", "SSH=22.");
add(13, "pk", "Class B IPv4 addresses have first octet in range:", "128–191", ["1–126", "192–223", "224–239"], "Medium", "Computer Networks", "IP Classes", "A:1–126, B:128–191, C:192–223.");
add(14, "pk", "TCP provides which main feature that UDP does not?", "Reliable ordered delivery (connection-oriented)", ["Faster always with no headers", "No ports", "Only broadcast radio"], "Easy", "Computer Networks", "TCP vs UDP", "TCP is reliable/connection-oriented; UDP is not.");
add(15, "pk", "DFS of a graph is commonly implemented using:", "Stack (or recursion)", ["Only Queue always", "Only Hash only", "Only Bubble sort"], "Easy", "Data Structures", "Graph", "DFS uses stack/recursion; BFS uses queue.");
add(16, "pk", "Average-case time complexity of Merge Sort is:", "O(n log n)", ["O(n)", "O(n²)", "O(1)"], "Medium", "Data Structures", "Sorting", "Merge sort is O(n log n) average and worst.");
add(17, "pk", "Which DS is natural for undo operations in an editor?", "Stack", ["Queue only", "Graph only", "Tree only"], "Easy", "Data Structures", "Stack", "LIFO matches undo.");
add(18, "pk", "In Waterfall model, phases are generally:", "Sequential / linear", ["Only random daily", "Only sprints without plan", "Only cloud billing"], "Easy", "Software Engineering", "SDLC", "Waterfall is sequential.");
add(19, "pk", "Unit testing mainly tests:", "Individual modules/functions", ["Only entire production bank", "Only network cables", "Only HR policy"], "Easy", "Software Engineering", "Testing", "Unit = smallest testable parts.");
add(20, "pk", "HTTP status 404 means:", "Not Found", ["OK", "Forbidden", "Unauthorized"], "Easy", "Web Technologies", "HTTP", "404=Not Found; 403=Forbidden; 401=Unauthorized.");
add(21, "pk", "HTML is primarily used to:", "Structure web page content", ["Compile C++ only", "Schedule CPU", "Encrypt hard disks only"], "Easy", "Web Technologies", "HTML", "HTML marks up structure.");
add(22, "pk", "Gmail-like ready application over internet (vendor manages all) is mainly:", "SaaS", ["IaaS", "Firmware", "BIOS"], "Easy", "Cloud Computing", "Models", "SaaS = software as a service.");
add(23, "pk", "Encryption mainly protects:", "Confidentiality", ["Only font color", "Only screen size", "Only cable length"], "Easy", "Cyber Security", "CIA", "Encryption → confidentiality.");
add(24, "pk", "RTGS is best described as:", "Real-time gross settlement of high-value funds", ["Only deferred net retail batches like classic NEFT feel", "Only ATM cash refill", "Only cheque printing"], "Medium", "Banking IT", "Payments", "RTGS = real-time gross.");
add(25, "pk", "A firewall primarily helps to:", "Filter network traffic based on rules", ["Increase CPU clock only", "Write SQL joins", "Draw ER diagrams"], "Easy", "Cyber Security", "Network Security", "Firewall filters packets/connections.");

// ===== ENGLISH 26-50 =====
add(26, "english", "Error: One of my friends / are / coming / No error", "are", ["One of my friends", "coming", "No error"], "Easy", "Grammar", "SVA", "'One of' → singular verb → is.");
add(27, "english", "Error: She congratulated me / for / my success / No error", "for", ["She congratulated me", "my success", "No error"], "Medium", "Grammar", "Prepositions", "Congratulate on (not for).");
add(28, "english", "Error: Despite of / the rain / we went / No error", "Despite of", ["the rain", "we went", "No error"], "Easy", "Grammar", "Prepositions", "Despite (no of) / In spite of.");
add(29, "english", "Error: The furnitures / in this room / are costly / No error", "The furnitures", ["in this room", "are costly", "No error"], "Easy", "Grammar", "Nouns", "Furniture uncountable → The furniture is.");
add(30, "english", "Error: He is / more taller / than Ram / No error", "more taller", ["He is", "than Ram", "No error"], "Easy", "Grammar", "Comparison", "Taller (not more taller).");
add(31, "english", "Fill: I have been working here ___ 2019.", "since", ["for", "by", "at"], "Easy", "Grammar", "Tenses", "Since + point of time.");
add(32, "english", "Fill: Scarcely had I reached home ___ it started raining.", "when", ["than", "then", "but"], "Medium", "Grammar", "Conjunctions", "Scarcely/Hardly … when.");
add(33, "english", "Fill: She is interested ___ learning French.", "in", ["on", "at", "for"], "Easy", "Grammar", "Prepositions", "Interested in.");
add(34, "english", "Fill: ___ honest man is trusted by all.", "An", ["A", "The", "No article"], "Easy", "Grammar", "Articles", "An + vowel sound (honest).");
add(35, "english", "Replace: He insisted to pay the bill.", "insisted on paying", ["insisted for pay", "insisted at paying", "No change"], "Medium", "Grammar", "Phrase", "Insist on + gerund.");
add(36, "english", "Replace: She discussed about the plan.", "discussed the plan", ["discussed on the plan", "discussed for plan", "No change"], "Easy", "Grammar", "Phrase", "Discuss something (no about).");

const passage =
  "Directions (Q37–Q40): Read the passage.\n\nDigital payments have grown rapidly in India, supported by UPI and stronger authentication methods. While convenience has increased, customers must stay alert against phishing and fake apps. Banks run awareness campaigns and use transaction alerts to reduce fraud. Still, shared OTPs and weak passwords remain common risks. A balanced approach combines technology controls with customer vigilance.";

add(37, "english", "Main idea of the passage?", "Digital payments grew but need security awareness and vigilance", ["UPI should be banned", "OTPs are unnecessary", "Banks should stop alerts"], "Easy", "Reading Comprehension", "Main Idea", "Growth + fraud risks + awareness.", { context_group: "passage_upi", context: passage });
add(38, "english", "What risk is highlighted for customers?", "Phishing and fake apps", ["Only slow trains", "Only printer ink", "Only holidays"], "Easy", "Reading Comprehension", "Detail", "Phishing and fake apps mentioned.", { context_group: "passage_upi" });
add(39, "english", "Shared OTPs are described as:", "A common risk", ["A best practice always", "A hardware upgrade", "A network cable"], "Medium", "Reading Comprehension", "Detail", "Shared OTPs remain common risks.", { context_group: "passage_upi" });
add(40, "english", "Best approach according to passage?", "Technology controls + customer vigilance", ["Only ignore alerts", "Only ban UPI", "Only remove passwords"], "Easy", "Reading Comprehension", "Inference", "Balanced approach stated.", { context_group: "passage_upi" });

add(41, "english", "Synonym of 'vigilance':", "watchfulness / alertness", ["sleepiness", "laziness", "silence only"], "Easy", "Vocabulary", "Synonyms", "Vigilance = alert watch.");
add(42, "english", "Antonym of 'rapidly':", "slowly", ["quickly", "swiftly", "fast"], "Easy", "Vocabulary", "Antonyms", "Rapidly ↔ slowly.");
add(43, "english", "Idiom: 'spill the beans' means:", "reveal a secret", ["cook food", "plant seeds", "run fast"], "Easy", "Vocabulary", "Idioms", "Spill the beans = disclose secret.");
add(44, "english", "One-word: Happening once a year:", "Annual", ["Daily", "Weekly", "Hourly"], "Easy", "Vocabulary", "One Word", "Annual = yearly.");
add(45, "english", "Idiom meaning 'immediately':", "At the drop of a hat", ["Once in a blue moon", "Beat around the bush", "Hit the sack"], "Easy", "Vocabulary", "Idioms", "Drop of a hat = immediately.");
add(46, "english", "Correct: Either the manager or the clerks ___ late today.", "are", ["is", "was", "has"], "Medium", "Grammar", "SVA", "Nearer subject clerks → are.");
add(47, "english", "Correct form: He avoided ___ the truth.", "telling", ["to telling", "tell", "told"], "Medium", "Grammar", "Gerunds", "Avoid + gerund.");
add(48, "english", "Improve: She is good in mathematics.", "good at mathematics", ["good on mathematics", "good by mathematics", "No change"], "Easy", "Grammar", "Prepositions", "Good at.");
add(49, "english", "Improve: Please repeat again the sentence.", "Please repeat the sentence", ["Please repeat again once", "Please again repeat again", "No change"], "Easy", "Grammar", "Redundancy", "Repeat already means again.");
add(50, "english", "Improve: He don't know the answer.", "doesn't know", ["didn't knew", "not know", "No change"], "Easy", "Grammar", "SVA", "He doesn't.");

// ===== REASONING 51-75 =====
add(51, "reasoning", "P ≥ Q = R > S ≤ T. Conclusions: I. P > S  II. T ≥ S. Which follows?", "Both I and II", ["Only I", "Only II", "Neither"], "Medium", "Inequality", "Conclusions", "P ≥ Q = R > S ⇒ P > S; S ≤ T ⇒ T ≥ S.");
add(52, "reasoning", "W < X ≤ Y = Z > V. Conclusion: W < Z — Follows?", "Follows", ["Does not follow", "Either", "None"], "Easy", "Inequality", "Chain", "W < X ≤ Y = Z ⇒ W < Z.");
add(53, "reasoning", "Codes: @ ≥ , # < , $ = , % >. Statement: A % B @ C $ D. Conclusion: A > D?", "Follows", ["Does not follow", "Either", "None"], "Medium", "Coded Inequality", "Chain", "A > B ≥ C = D ⇒ A > D.");
add(54, "reasoning", "If FRUIT is coded as GSVJU (+1 each), how is MANGO coded?", "NBOHP", ["LZMFN", "NBNHP", "OBPIQ"], "Easy", "Coding-Decoding", "Letter Shift", "Each +1 ⇒ NBOHP.");
add(55, "reasoning", "'cat dog rat' → 'ti la mu'; 'dog bat hen' → 'la zo pi'. Code for dog?", "la", ["ti", "mu", "zo"], "Easy", "Coding-Decoding", "Condition", "Only common word dog → only common code la.");
add(56, "reasoning", "Opposite letters: INDIA → RMWRZ. Then CHINA → ?", "XSRMZ", ["XGIRM", "DSRMB", "XSRNY"], "Medium", "Coding-Decoding", "Opposite", "C↔X H↔S I↔R N↔M A↔Z ⇒ XSRMZ.");
add(57, "reasoning", "All phones are gadgets. Some gadgets are costly. Conclusions: I. Some phones are costly. II. All gadgets are phones.", "Neither follows", ["Only I", "Only II", "Both"], "Medium", "Syllogism", "All+Some", "I not definite; II false.");
add(58, "reasoning", "No bird is mammal. All mammals are animals. Conclusions: I. No bird is animal. II. Some animals are not birds.", "Only II follows", ["Only I", "Both", "Neither"], "Hard", "Syllogism", "No+All", "I not definite; mammal-animals are not birds ⇒ II.");
add(59, "reasoning", "All roses are flowers. All flowers are plants. Conclusion: All roses are plants.", "Follows", ["Does not follow", "Either", "None"], "Easy", "Syllogism", "All-All", "Roses ⊆ flowers ⊆ plants.");
add(60, "reasoning", "Walk 5 km West, 3 km South, 5 km East. Distance from start?", "3 km South", ["5 km West", "0 km", "8 km"], "Easy", "Direction Sense", "Displacement", "W/E cancel; 3 km South.");
add(61, "reasoning", "Pointing to a boy, Meena says, 'He is the son of my father's only daughter.' How is the boy related to Meena?", "Son", ["Brother", "Uncle", "Nephew"], "Medium", "Blood Relation", "Pointers", "Father's only daughter = Meena; boy = her son.");
add(62, "reasoning", "In a row of 40, Riya is 9th from left. Rank from right?", "32", ["31", "33", "30"], "Easy", "Order & Ranking", "Formula", "40−9+1=32.");
add(63, "reasoning", "Input: 45 12 67 3 29 18. Rule: smallest to left each step. Step I?", "3 45 12 67 29 18", ["12 45 67 3 29 18", "3 12 45 67 29 18", "45 3 12 67 29 18"], "Medium", "Input-Output", "Arrangement", "Smallest 3 to left.");
add(64, "reasoning", "Same I/O. Step II?", "3 12 45 67 29 18", ["3 45 12 67 29 18", "3 12 29 45 67 18", "12 3 45 67 29 18"], "Medium", "Input-Output", "Arrangement", "Next smallest 12.");
add(65, "reasoning", "Five A B C D E in a row facing North. A left end. E right end. B immediate right of A. D between B and C. Who is middle?", "D", ["B", "C", "E"], "Easy", "Puzzles", "Linear", "A B D C E → middle D.");
add(66, "reasoning", "Same arrangement. Who sits second to the left of E?", "C", ["D", "B", "A"], "Easy", "Puzzles", "Linear", "Second left of E is C.");
add(67, "reasoning", "Floors 1–5: R on 2. S immediately above R. T on top. P not on 1. Q below P. Who on floor 1?", "Q", ["P", "R", "S"], "Medium", "Puzzles", "Floor", "S3 R2 T5; P4 Q1.");
add(68, "reasoning", "Same floors. Who lives immediately below T?", "P", ["S", "R", "Q"], "Easy", "Puzzles", "Floor", "T5 → below P4.");
add(69, "reasoning", "How many 5s are preceded by 2 but not followed by 8? Series: 2 5 8 2 5 3 2 5 8 2 5 7", "2", ["1", "3", "4"], "Medium", "Alphanumeric", "Counting", "Valid: 253, 257 (258 invalid) → 2.");
add(70, "reasoning", "If today is Friday, what day will it be after 61 days?", "Sunday", ["Saturday", "Monday", "Tuesday"], "Medium", "Calendar", "Days", "61≡5 mod7; Fri+5=Wednesday... Fix.");
(() => {
  const q = questions.find((x) => x.id === 70);
  // 61/7=8*7=56 rem 5. Fri+5 = Sat,Sun,Mon,Tue,Wed → Wednesday
  q.options = buildOptions("Wednesday", ["Sunday", "Monday", "Tuesday"], q.answer, 70 * 97);
  q.explanation = "61 ≡ 5 (mod 7). Friday + 5 days = Wednesday.";
})();
add(71, "reasoning", "What is age of P?\nI. P is 5 years younger than Q.\nII. Q is 20 years old.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Ages", "P=15; both needed.");
add(72, "reasoning", "Who is tallest among X,Y,Z?\nI. X is taller than Y.\nII. Y is taller than Z.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Comparison", "X>Y>Z ⇒ X tallest.");
add(73, "reasoning", "Code for 'bank'?\nI. 'bank loan offer' → 'pa ti ko'\nII. 'loan bank rate' → 'ti na pa'", "Both I and II together", ["I alone", "II alone", "Data inadequate"], "Medium", "Data Sufficiency", "Coding", "Common bank+loan → need both; bank is pa (loan=ti).");
add(74, "reasoning", "On which date is the event?\nI. Event is after 10th but before 13th.\nII. Event is not on an odd date.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Medium", "Data Sufficiency", "Dates", "11 or 12; not odd → 12.");
add(75, "reasoning", "F is father of G. G is sister of H. H is mother of I. How is F related to I?", "Grandfather", ["Father", "Uncle", "Brother"], "Easy", "Blood Relation", "Family Tree", "F father of H ⇒ grandfather of I.");

// ===== QUANT 76-100 =====
add(76, "quant", "Simplify: 18 × 5 − 72 ÷ 8 + 9 = ?", "90", ["88", "92", "86"], "Easy", "Simplification", "BODMAS", "90 − 9 + 9 = 90.");
add(77, "quant", "(3/5) of 250 − 12% of 150 = ?", "132", ["140", "120", "128"], "Easy", "Simplification", "Fractions/%", "150 − 18 = 132.");
add(78, "quant", "√784 + 8² − 15 = ?", "77", ["73", "81", "69"], "Easy", "Simplification", "Squares", "28 + 64 − 15 = 77.");
add(79, "quant", "Approx: 49.8 × 6.02 ≈ ?", "300", ["250", "350", "280"], "Easy", "Approximation", "Rounding", "≈50×6=300.");
add(80, "quant", "Approx: 20% of 498 ≈ ?", "100", ["80", "120", "90"], "Easy", "Approximation", "Percentage", "≈20% of 500=100.");
add(81, "quant", "Series: 5, 11, 24, 51, 106, ?", "217", ["210", "221", "205"], "Medium", "Number Series", "×2+pattern", "×2+1,+2,+3,+4,+5 → 106×2+5=217.");
add(82, "quant", "Series: 2, 2, 3, 6, 15, ?", "45", ["30", "40", "48"], "Medium", "Number Series", "×n", "×1,×1.5,×2,×2.5,×3 → 15×3=45.");
add(83, "quant", "Series: 7, 15, 32, 67, 138, ?", "281", ["275", "290", "265"], "Medium", "Number Series", "×2+1,+2,+3", "×2+1=15, ×2+2=32, ×2+3=67, ×2+4=138, ×2+5=281.");
add(84, "quant", "x²−7x+12=0 ; y²−5y+6=0. Relation x ? y", "Cannot be determined", ["x>y", "x<y", "x=y"], "Medium", "Quadratic", "Compare", "x=3,4; y=2,3 → not unique.");
add(85, "quant", "x²−6x+9=0 ; y²−6y+9=0. Relation?", "x = y", ["x>y", "x<y", "Cannot say"], "Easy", "Quadratic", "Compare", "Both roots 3.");
add(86, "quant", "A:B=5:8. If A=40, B=?", "64", ["56", "72", "60"], "Easy", "Ratio", "Parts", "B=8/5×40=64.");
add(87, "quant", "Divide 840 in 2:3:7. Largest share?", "490", ["420", "560", "360"], "Easy", "Ratio", "Division", "7/12×840=490.");
add(88, "quant", "Ages M:N=4:5. After 4 years 5:6. Present age of N?", "20", ["16", "24", "25"], "Medium", "Age", "Ratio", "4x+4 / 5x+4 = 5/6 → 24x+24=25x+20 → x=4; N=20.");
add(89, "quant", "Father is 4 times son. After 8 years, thrice. Son now?", "16", ["12", "14", "18"], "Medium", "Age", "Father-Son", "4x+8=3(x+8) → x=16.");
add(90, "quant", "SI on 5000 at 8% for 4 years?", "1600", ["1500", "1800", "1400"], "Easy", "Simple Interest", "Formula", "(5000×8×4)/100=1600.");
add(91, "quant", "A sum becomes ₹6600 in 3 years at 10% p.a. SI. Principal?", "5000", ["5200", "4800", "5500"], "Medium", "Simple Interest", "Find P", "P×1.3=6600 ⇒ P=5000.");
add(92, "quant", "CP=450, SP=540. Profit %?", "20%", ["18%", "25%", "15%"], "Easy", "Profit & Loss", "Profit %", "90/450×100=20%.");
add(93, "quant", "MP=1500, discount 20%. SP=?", "1200", ["1300", "1100", "1250"], "Easy", "Profit & Loss", "Discount", "1500×0.8=1200.");
add(94, "quant", "Average of 5 numbers is 36. One number 40 replaced by 25. New average?", "33", ["32", "34", "30"], "Medium", "Average", "Replacement", "Sum=180; new=165; avg=33.");
add(95, "quant", "35% of a number is 280. Number?", "800", ["700", "750", "850"], "Easy", "Percentage", "Find Number", "N×0.35=280 ⇒ N=800.");
add(96, "quant", "A number increased by 20% then decreased by 20%. Net change?", "4% decrease", ["No change", "4% increase", "2% decrease"], "Medium", "Percentage", "Successive", "×1.2×0.8=0.96 ⇒ 4% decrease.");
add(97, "quant", "Sales: Thu 140, Fri 180, Sat 120, Sun 200, Mon 160. Total?", "800", ["750", "850", "780"], "Easy", "Data Interpretation", "Totals", "140+180+120+200+160=800.");
add(98, "quant", "Same data. Average daily sales?", "160", ["150", "170", "155"], "Easy", "Data Interpretation", "Average", "800/5=160.");
add(99, "quant", "Same data. Lowest sales day?", "Saturday", ["Thursday", "Friday", "Monday"], "Easy", "Data Interpretation", "Comparison", "Sat=120 lowest.");
add(100, "quant", "Same data. Fri as % of Sun?", "90%", ["80%", "85%", "95%"], "Medium", "Data Interpretation", "Percentage", "180/200×100=90%.");

const dist = { A: 0, B: 0, C: 0, D: 0 };
questions.forEach((q) => dist[q.answer]++);
const ids = questions.map((q) => q.id).sort((a, b) => a - b);
const missing = [];
for (let n = 1; n <= 100; n++) if (!ids.includes(n)) missing.push(n);
if (missing.length || questions.length !== 100) {
  console.error("Bad ids", missing, "count", questions.length);
  process.exit(1);
}

const exam = {
  exam: {
    id: "ibps-it-officer-fresh-mock-2026-08-26",
    title: "IBPS IT Officer Prelims — Fresh Mock 26 Aug (Post Weak Fix)",
    type: "Full Length Timed Mock | Sectional Timers",
    date: "2026-08-26",
    duration_minutes: 80,
    sectional_timing: true,
    sectional_lock_until_timer_ends: false,
    total_questions: 100,
    total_marks: 125,
    marking: {
      correct: 1,
      wrong: -0.25,
      unattempted: 0,
      note: "PK question.marks=2; others=1. Total 125.",
    },
    sections: [
      { id: "pk", name: "Professional Knowledge", questions: 25, marks: 50, duration_minutes: 20 },
      { id: "english", name: "English Language", questions: 25, marks: 25, duration_minutes: 20 },
      { id: "reasoning", name: "Reasoning Ability", questions: 25, marks: 25, duration_minutes: 20 },
      { id: "quant", name: "Quantitative Aptitude", questions: 25, marks: 25, duration_minutes: 20 },
    ],
    suggested_order: ["pk", "english", "reasoning", "quant"],
    answer_distribution: dist,
    questions,
  },
};

fs.writeFileSync(path.join(__dirname, "exam_fresh_mock_2026-08-26.json"), JSON.stringify(exam, null, 2));
console.log("OK", questions.length, dist);
