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

const cycle = ["D", "B", "A", "C", "B", "D", "A", "C", "A", "D", "C", "B"];
const letterAt = (i) => cycle[i % cycle.length];

const questions = [];
let idx = 0;
function add(id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra = {}) {
  const answer = letterAt(idx++);
  questions.push({
    id,
    section,
    question,
    options: buildOptions(correct, distractors, answer, id * 41 + 3),
    answer,
    difficulty,
    topic,
    subtopic,
    explanation,
    marks: section === "pk" ? 2 : 1,
    ...extra,
  });
}

// ===== PK 1-25 =====
add(1, "pk", "Which command removes all rows from a table but usually keeps the table structure?", "TRUNCATE", ["DROP DATABASE", "ALTER", "GRANT"], "Easy", "DBMS", "SQL Commands", "TRUNCATE deletes all rows; table structure remains. DROP removes the table.");
add(2, "pk", "A super key that uniquely identifies a row and has no redundant attribute is called:", "Candidate key", ["Foreign key", "Secondary index", "View"], "Medium", "DBMS", "Keys", "Candidate keys are minimal super keys.");
add(3, "pk", "Which isolation level can allow dirty reads?", "Read Uncommitted", ["Serializable", "Repeatable Read", "Read Committed"], "Medium", "DBMS", "Transactions", "Read Uncommitted allows reading uncommitted data (dirty reads).");
add(4, "pk", "Referential integrity is enforced mainly using:", "Foreign keys", ["Triggers only", "Views only", "Synonyms"], "Easy", "DBMS", "Constraints", "FK maintains referential integrity between tables.");
add(5, "pk", "Which schedule avoids cascading rollback by ensuring a transaction commits only after all transactions it read from have committed?", "Strict / Cascadeless related — use Cascadeless", ["Dirty schedule", "Lost update schedule", "Unrecoverable schedule"], "Hard", "DBMS", "Transactions", "Cascadeless schedules avoid cascading rollbacks.");
// Fix Q5 to cleaner
questions[4].question = "A schedule where dirty reads are avoided (a transaction reads only committed values) is called:";
questions[4].options = buildOptions("Cascadeless schedule", ["Unrecoverable schedule", "Dirty-read schedule", "Lost-update schedule"], questions[4].answer, 5 * 41);
questions[4].explanation = "Cascadeless schedules allow reading only committed data, avoiding cascading rollbacks.";

add(6, "pk", "Which OS technique allows execution of a process even if its full address space is not in main memory?", "Demand paging / Virtual memory", ["Spooling only", "Compiling", "Defragmentation only"], "Medium", "Operating Systems", "Memory", "Virtual memory/demand paging loads pages when needed.");
add(7, "pk", "Context switching means:", "Saving/restoring CPU state to switch processes", ["Formatting HDD", "Changing IP address", "Compiling source code"], "Easy", "Operating Systems", "Processes", "Context switch saves PCB/state and loads another process.");
add(8, "pk", "Which is a non-preemptive scheduling algorithm?", "FCFS", ["Round Robin", "SRTF", "Preemptive priority"], "Easy", "Operating Systems", "CPU Scheduling", "FCFS is non-preemptive; RR and SRTF are preemptive.");
add(9, "pk", "A semaphore is primarily used for:", "Process synchronization", ["Disk formatting", "DNS resolution", "HTML rendering"], "Easy", "Operating Systems", "Synchronization", "Semaphores coordinate concurrent processes/threads.");
add(10, "pk", "Which layer of OSI is responsible for end-to-end reliable delivery?", "Transport", ["Network", "Data Link", "Physical"], "Easy", "Computer Networks", "OSI", "Transport layer (TCP) provides end-to-end reliability.");
add(11, "pk", "Which protocol resolves IP address to MAC address?", "ARP", ["DHCP", "DNS", "FTP"], "Easy", "Computer Networks", "Protocols", "ARP maps IP → MAC.");
add(12, "pk", "Default port for HTTPS is 443; default port for HTTP is:", "80", ["21", "25", "110"], "Easy", "Computer Networks", "Ports", "HTTP=80, HTTPS=443.");
add(13, "pk", "Which classful IPv4 range starts with 192–223 in the first octet?", "Class C", ["Class A", "Class B", "Class D"], "Medium", "Computer Networks", "IP Classes", "Class C first octet 192–223.");
add(14, "pk", "UDP is preferred over TCP mainly when:", "Speed matters more than reliability (e.g., live streaming)", ["File download needs guaranteed order always", "Email sending only", "SSH sessions"], "Easy", "Computer Networks", "TCP vs UDP", "UDP is connectionless and faster but unreliable.");
add(15, "pk", "Infix to postfix conversion commonly uses which DS?", "Stack", ["Queue", "Graph", "Hash only"], "Easy", "Data Structures", "Stack", "Operator stack is used in infix→postfix.");
add(16, "pk", "Worst-case time complexity of quicksort is:", "O(n²)", ["O(n)", "O(log n)", "O(n log n) always"], "Medium", "Data Structures", "Sorting", "Quicksort worst case O(n²); average O(n log n).");
add(17, "pk", "BFS traversal of a graph typically uses:", "Queue", ["Stack", "Only array sort", "Binary heap only"], "Easy", "Data Structures", "Graph Traversal", "BFS uses queue; DFS uses stack/recursion.");
add(18, "pk", "In Agile, work is commonly delivered in short cycles called:", "Sprints", ["Waterfalls", "Monoliths", "Cold backups"], "Easy", "Software Engineering", "Agile", "Sprints are time-boxed iterations in Agile/Scrum.");
add(19, "pk", "Regression testing is done to:", "Ensure old features still work after changes", ["Only design UI mockups", "Only buy servers", "Only write SRS"], "Easy", "Software Engineering", "Testing", "Regression re-tests after fixes/changes.");
add(20, "pk", "HTTP 403 status means:", "Forbidden", ["OK", "Not Found", "Gateway Timeout"], "Medium", "Web Technologies", "HTTP Status", "403=Forbidden; 401=Unauthorized; 404=Not Found.");
add(21, "pk", "JSON is primarily used as a:", "Lightweight data-interchange format", ["Relational DBMS engine", "CPU scheduling algo", "Physical cable standard"], "Easy", "Web Technologies", "JSON", "JSON exchanges structured data between systems.");
add(22, "pk", "In cloud, renting virtual machines and storage yourself (you manage OS) is:", "IaaS", ["SaaS", "PaaS", "Firmware"], "Easy", "Cloud Computing", "Service Models", "IaaS provides infrastructure; you manage OS/apps.");
add(23, "pk", "Hashing is mainly used to verify:", "Integrity (fingerprint of data)", ["Font size", "Monitor brightness", "Cable length"], "Easy", "Cyber Security", "Cryptography", "Hashes detect tampering; usually one-way.");
add(24, "pk", "NEFT is best described as:", "Deferred net electronic funds transfer system", ["Only cash deposit at ATM", "Only locker service", "Only cheque book printing"], "Medium", "Banking IT", "Payments", "NEFT settles in batches (deferred net).");
add(25, "pk", "Two-factor authentication (2FA) typically combines:", "Something you know + something you have/are", ["Two passwords of same type only always", ["Only CAPTCHA", "Only font color"].length ? "Only CAPTCHA" : "Only CAPTCHA", "Only font color"], "Easy", "Cyber Security", "Authentication", "2FA uses two different factors (password + OTP/device/biometric).");

// Fix Q25 distractors if broken
(() => {
  const q = questions.find((x) => x.id === 25);
  q.options = buildOptions(
    "Something you know + something you have/are",
    ["Two identical passwords only", "Only CAPTCHA", "Only font color"],
    q.answer,
    25 * 41
  );
  q.explanation = "2FA uses two different authentication factors.";
})();

// ===== ENGLISH 26-50 =====
add(26, "english", "Error: The number of applicants / are / increasing / No error", "are", ["The number of applicants", "increasing", "No error"], "Easy", "Grammar", "SVA", "'The number of' → singular → is.");
add(27, "english", "Error: He prevented me / to go / there / No error", "to go", ["He prevented me", "there", "No error"], "Medium", "Grammar", "Verb Patterns", "Prevent from going (not to go).");
add(28, "english", "Error: Unless you do not work hard / you will fail / in the exam / No error", "Unless you do not work hard", ["you will fail", "in the exam", "No error"], "Medium", "Grammar", "Conjunctions", "Unless already negative → Unless you work hard.");
add(29, "english", "Error: She is junior / than / her manager / No error", "than", ["She is junior", "her manager", "No error"], "Easy", "Grammar", "Prepositions", "Junior/senior to.");
add(30, "english", "Error: The sceneries / of Himachal / are beautiful / No error", "The sceneries", ["of Himachal", "are beautiful", "No error"], "Easy", "Grammar", "Nouns", "Scenery is uncountable → The scenery.");
add(31, "english", "Fill: He succeeded ___ hard work.", "by / through — use 'through' or 'by dint of' — prefer 'through'", ["through", "at", "on", "from"], "Easy", "Grammar", "Prepositions", "Succeeded through hard work / by hard work.");
// simplify Q31
questions[30].question = "Fill: He succeeded ___ hard work.";
questions[30].options = buildOptions("through", ["at", "on", "from"], questions[30].answer, 31 * 41);
questions[30].explanation = "Succeeded through hard work.";

add(32, "english", "Fill: She has lived in Surat ___ five years.", "for", ["since", "from", "by"], "Easy", "Grammar", "Tenses", "For + duration.");
add(33, "english", "Fill: ___ apple a day keeps the doctor away.", "An", ["A", "The", "No article"], "Easy", "Grammar", "Articles", "An + vowel sound.");
add(34, "english", "Fill: Hardly had he spoken ___ everyone clapped.", "when", ["than", "then", "but"], "Medium", "Grammar", "Conjunctions", "Hardly … when.");
add(35, "english", "Replace: He is capable to handle pressure.", "capable of handling", ["capable for handle", "capable in handling", "No change"], "Easy", "Grammar", "Phrase Replacement", "Capable of + gerund.");
add(36, "english", "Replace: She ordered for a coffee.", "ordered a coffee", ["ordered to a coffee", "ordered on coffee", "No change"], "Easy", "Grammar", "Phrase Replacement", "Order something (no for).");

const passage =
  "Directions (Q37–Q40): Read the passage.\n\nBanks are adopting AI models to detect unusual payment patterns and flag possible fraud in near real time. While this improves security, models can produce false positives that annoy genuine customers. Explainability is important so that banks can justify automated decisions to regulators and customers. Human review remains necessary for borderline cases. Continuous training on fresh fraud patterns helps models stay effective against new attack techniques.";

add(37, "english", "Main idea of the passage?", "AI helps fraud detection but needs explainability and human oversight", ["AI should replace all bankers immediately", "Fraud detection is unnecessary", "Regulators ban all AI"], "Easy", "Reading Comprehension", "Main Idea", "Balances AI benefits with false positives, explainability, human review.", { context_group: "passage_ai_fraud", context: passage });
add(38, "english", "What problem can AI models create for genuine customers?", "False positives", ["Free loans", "Higher salaries", "Longer holidays"], "Easy", "Reading Comprehension", "Detail", "False positives annoy genuine customers.", { context_group: "passage_ai_fraud" });
add(39, "english", "Why is explainability important?", "To justify automated decisions to regulators and customers", ["To slow networks only", "To delete logs", "To avoid training"], "Medium", "Reading Comprehension", "Inference", "Banks must justify decisions.", { context_group: "passage_ai_fraud" });
add(40, "english", "Borderline cases should involve:", "Human review", ["No review ever", "Only printers", "Only marketing ads"], "Easy", "Reading Comprehension", "Detail", "Human review remains necessary for borderline cases.", { context_group: "passage_ai_fraud" });

add(41, "english", "Synonym of 'flag' (as in flag a transaction):", "mark/highlight as suspicious", ["ignore completely", "delete permanently", "print always"], "Easy", "Vocabulary", "Banking Vocab", "Flag = mark for attention.");
add(42, "english", "Synonym of 'borderline':", "uncertain / marginal", ["definite", "impossible", "ancient"], "Easy", "Vocabulary", "Synonyms", "Borderline = not clear-cut.");
add(43, "english", "Antonym of 'genuine':", "fake / false", ["real", "true", "authentic"], "Easy", "Vocabulary", "Antonyms", "Genuine ↔ fake.");
add(44, "english", "One-word: Able to be explained:", "Explainable", ["Invisible", "Silent", "Frozen"], "Easy", "Vocabulary", "One Word", "Explainable = can be explained.");
add(45, "english", "Idiom meaning 'very rarely':", "Once in a blue moon", ["At the drop of a hat", "Spill the beans", "Break the ice"], "Easy", "Vocabulary", "Idioms", "Once in a blue moon = rarely.");
add(46, "english", "Correct: Neither Ramesh nor his friends ___ present.", "are", ["is", "was", "has"], "Medium", "Grammar", "SVA", "With nor, verb agrees with nearer subject (friends → are).");
add(47, "english", "Correct form: She suggested ___ early.", "leaving / that we leave — use 'leaving'", ["leaving", "to leaving", "leave to", "left for"], "Medium", "Grammar", "Gerunds", "Suggested leaving.");
questions[46].options = buildOptions("leaving", ["to leaving", "leave to", "left for"], questions[46].answer, 47 * 41);
questions[46].explanation = "Suggest + gerund: suggested leaving.";

add(48, "english", "Improve: He is good in cricket.", "good at cricket", ["good on cricket", "good with cricket only wrong", "No change"], "Easy", "Grammar", "Prepositions", "Good at.");
add(49, "english", "Improve: Return back the documents.", "Return the documents", ["Return back again the documents", "Returned back documents", "No change"], "Easy", "Grammar", "Phrase Replacement", "Return already includes back.");
add(50, "english", "Improve: She don't understand.", "doesn't understand", ["didn't understood", "not understand", "No change"], "Easy", "Grammar", "SVA", "She doesn't.");

// ===== REASONING 51-75 =====
add(51, "reasoning", "M ≥ N > O = P ≤ Q. Conclusions: I. M > P  II. Q ≥ O. Which follows?", "Both I and II", ["Only I", "Only II", "Neither"], "Medium", "Inequality", "Conclusions", "M ≥ N > O = P ⇒ M > P. O = P ≤ Q ⇒ Q ≥ O.");
add(52, "reasoning", "A < B = C ≥ D > E. Conclusion: A < D — Follows?", "Does not follow", ["Follows", "Either", "None"], "Medium", "Inequality", "Broken Chain", "A < B = C ≥ D → A vs D not definite.");
add(53, "reasoning", "Codes: @ > , # ≤ , $ = , % <.  Statement: R @ S # T $ U. Conclusion: R > U?", "Does not follow", ["Follows", "Either", "None"], "Medium", "Coded Inequality", "Chain", "R > S ≤ T = U → R ? U unclear.");
add(54, "reasoning", "If COMBAT is coded as DNNC BU (+1 each, space ignore style) — simpler: COMBAT→DPN CBU. How is PLANET coded with +1?", "QMBOFU", ["OKZMDS", "QMB OEU", "R NCOGV"], "Easy", "Coding-Decoding", "Letter Shift", "Each letter +1 ⇒ QMBOFU.");
add(55, "reasoning", "'red blue green' → 'ka la pa'; 'blue yellow red' → 'pa sa ka'. Code for blue?", "pa", ["ka", "la", "sa"], "Easy", "Coding-Decoding", "Condition Coding", "Common 'blue'+'red' wait: common blue → pa; red→ka.");
add(56, "reasoning", "Opposite letters: MAGIC → NZTRX. Then WORLD → ?", "DLIOW", ["DPIOW", "XPSME", "VPQKC"], "Medium", "Coding-Decoding", "Opposite Letters", "W↔D, O↔L, R↔I, L↔O, D↔W ⇒ DLIOW.");
add(57, "reasoning", "All apps are softwares. Some softwares are free. Conclusions: I. Some apps are free. II. All softwares are apps.", "Neither follows", ["Only I", "Only II", "Both"], "Medium", "Syllogism", "All+Some", "I not definite; II reverse all false.");
add(58, "reasoning", "No server is client. All clients are nodes. Conclusions: I. No server is node. II. Some nodes are not servers.", "Only II follows", ["Only I", "Both", "Neither"], "Hard", "Syllogism", "No+All", "I not definite; nodes that are clients are not servers ⇒ II.");
add(59, "reasoning", "All keys are locks. All locks are metals. Conclusion: All keys are metals.", "Follows", ["Does not follow", "Either", "None"], "Easy", "Syllogism", "All-All", "Keys ⊆ locks ⊆ metals.");
add(60, "reasoning", "A person walks 4 km North, 3 km East, 4 km South. Distance from start?", "3 km East", ["4 km North", "5 km", "0 km"], "Easy", "Direction Sense", "Displacement", "N and S cancel; 3 km East remains.");
add(61, "reasoning", "Pointing to a girl, Raj says, 'She is the daughter of my wife's only brother.' How is the girl related to Raj?", "Niece", ["Daughter", "Sister", "Wife"], "Medium", "Blood Relation", "Pointers", "Wife's only brother = brother-in-law; his daughter = niece.");
add(62, "reasoning", "In a class of 45, Aman is 12th from top. Rank from bottom?", "34", ["33", "35", "32"], "Easy", "Order & Ranking", "Formula", "From bottom = 45-12+1=34.");
add(63, "reasoning", "Input: 82 17 45 6 39 24. Rule: smallest to left each step. Step I?", "6 82 17 45 39 24", ["17 82 45 6 39 24", "6 17 82 45 39 24", "82 6 17 45 39 24"], "Medium", "Input-Output", "Arrangement", "Smallest 6 moves left.");
add(64, "reasoning", "Same I/O. Step II?", "6 17 82 45 39 24", ["6 82 17 45 39 24", "6 17 45 82 39 24", "17 6 82 45 39 24"], "Medium", "Input-Output", "Arrangement", "Next smallest 17.");
add(65, "reasoning", "Five friends P Q R S T in a row facing North. P at left end. T at right end. Q immediate right of P. S between Q and R. Who is middle?", "S", ["Q", "R", "T"], "Easy", "Puzzles", "Linear Seating", "P Q S R T → middle S.");
add(66, "reasoning", "Same arrangement. Who sits second to the left of T?", "R", ["S", "Q", "P"], "Easy", "Puzzles", "Linear Seating", "Second left of T is R.");
add(67, "reasoning", "Floors 1–5: M on 3. N immediately above M. O on top. L not on 1. K below L. Who on floor 1?", "K", ["L", "M", "N"], "Medium", "Puzzles", "Floor Puzzle", "N4 M3 O5; L2 K1.");
add(68, "reasoning", "Same floors. Who lives immediately below O?", "N", ["M", "L", "K"], "Easy", "Puzzles", "Floor Puzzle", "O5 → below is N4.");
add(69, "reasoning", "How many 7s are preceded by 4 but not followed by 9? Series: 4 7 9 4 7 2 4 7 9 4 7 5", "2", ["1", "3", "4"], "Medium", "Alphanumeric", "Counting", "Valid: 472, 475 (479 invalid) → 2.");
add(70, "reasoning", "If today is Wednesday, what day was it 45 days earlier?", "Friday", ["Thursday", "Saturday", "Monday"], "Medium", "Calendar", "Days", "45 mod 7 = 3; Wed−3 = Sunday... Fix: Wed minus 3 days = Sunday. Recalc.");
// 45/7 = 6*7=42 rem 3. Go back 3 from Wed: Tue, Mon, Sun. Answer Sunday.
(() => {
  const q = questions.find((x) => x.id === 70);
  q.options = buildOptions("Sunday", ["Friday", "Monday", "Tuesday"], q.answer, 70 * 41);
  q.explanation = "45 ≡ 3 (mod 7). Wednesday minus 3 days = Sunday.";
})();

add(71, "reasoning", "Age of X?\nI. X is 4 years older than Y.\nII. Y is 18 years old.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Ages", "X=22; both needed.");
add(72, "reasoning", "Who is shortest among A,B,C?\nI. A is taller than B.\nII. B is taller than C.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Comparison", "A>B>C ⇒ C shortest.");
add(73, "reasoning", "What is the code for 'loan'?\nI. 'home loan offer' → 'ti na ko'\nII. 'loan interest rate' → 'na fu me'", "Both I and II together", ["I alone", "II alone", "Data inadequate"], "Medium", "Data Sufficiency", "Coding", "Common 'loan' → na.");
add(74, "reasoning", "On which date is the meeting?\nI. Meeting is after 15th but before 18th of the month.\nII. Meeting is not on an even date.", "Both together (16th? 15< d <18 → 16 or 17; not even → 17)", ["I alone", "II alone", "Either alone"], "Medium", "Data Sufficiency", "Dates", "I: 16 or 17. II: odd → 17. Both needed.");
(() => {
  const q = questions.find((x) => x.id === 74);
  q.options = buildOptions("Both I and II together", ["I alone", "II alone", "Either alone"], q.answer, 74 * 41);
  q.explanation = "Between 15 and 18 → 16/17; not even → 17.";
})();

add(75, "reasoning", "A is mother of B. B is sister of C. C is father of D. How is A related to D?", "Grandmother", ["Mother", "Aunt", "Sister"], "Easy", "Blood Relation", "Family Tree", "A is mother of C ⇒ grandmother of D.");

// ===== QUANT 76-100 =====
add(76, "quant", "Simplify: 14 × 6 − 56 ÷ 7 + 11 = ?", "87", ["85", "89", "81"], "Easy", "Simplification", "BODMAS", "84 − 8 + 11 = 87.");
add(77, "quant", "(5/8) of 256 − 15% of 120 = ?", "142", ["150", "132", "160"], "Easy", "Simplification", "Fractions/%", "160 − 18 = 142.");
add(78, "quant", "√961 + 9² − 22 = ?", "90", ["86", "94", "80"], "Easy", "Simplification", "Squares", "31 + 81 − 22 = 90.");
add(79, "quant", "Approx: 62.1 × 4.98 ≈ ?", "310", ["280", "350", "250"], "Easy", "Approximation", "Rounding", "≈62×5=310.");
add(80, "quant", "Approx: 12.5% of 796 ≈ ?", "100", ["80", "120", "90"], "Easy", "Approximation", "Percentage", "≈12.5% of 800=100.");
add(81, "quant", "Series: 6, 13, 28, 59, 122, ?", "249", ["245", "253", "241"], "Medium", "Number Series", "×2+pattern", "×2+1,+2,+3,+4,+5 → 122×2+5=249.");
add(82, "quant", "Series: 3, 3, 4.5, 9, 22.5, ?", "67.5", ["45", "56.25", "72"], "Medium", "Number Series", "×n", "×1,×1.5,×2,×2.5,×3 → 22.5×3=67.5.");
add(83, "quant", "Series: 4, 11, 30, 67, 128, ?", "219", ["210", "225", "231"], "Medium", "Number Series", "n³+n", "1³+3=4? Better: +7,+19,+37,+61 = +12,+18,+24 → next +30 → 128+91? Alternative: n³+n: 1+3 no. Pattern: 1³+3=4, 2³+3=11, 3³+3=30, 4³+3=67, 5³+3=128, 6³+3=219.");
add(84, "quant", "x²−8x+15=0 ; y²−6y+8=0. Relation x ? y", "Cannot be determined", ["x>y", "x<y", "x=y"], "Medium", "Quadratic", "Compare", "x=3,5; y=2,4 → not unique.");
add(85, "quant", "x²−10x+25=0 ; y²−10y+25=0. Relation?", "x = y", ["x>y", "x<y", "Cannot say"], "Easy", "Quadratic", "Compare", "Both roots 5.");
add(86, "quant", "A:B=7:9. If A=56, B=?", "72", ["63", "81", "64"], "Easy", "Ratio", "Parts", "B=9/7×56=72.");
add(87, "quant", "Divide 960 in 3:4:5. Middle share?", "320", ["240", "400", "288"], "Easy", "Ratio", "Division", "4/12×960=320.");
add(88, "quant", "Ages A:B=5:6. After 5 years 6:7. Present age of B?", "30", ["25", "35", "36"], "Medium", "Age", "Ratio", "5x+5 / 6x+5 = 6/7 → 35x+35=36x+30 → x=5; B=30.");
add(89, "quant", "Mother is 3 times daughter. After 10 years, twice. Daughter now?", "10", ["12", "8", "15"], "Medium", "Age", "Mother-Daughter", "3x+10=2(x+10) → x=10.");
add(90, "quant", "SI on 9000 at 7% for 3 years?", "1890", ["1800", "2100", "1700"], "Easy", "Simple Interest", "Formula", "(9000×7×3)/100=1890.");
add(91, "quant", "Amount 8720 in 2 years at 9% SI. Principal?", "8000", ["7500", "8200", "7800"], "Medium", "Simple Interest", "Find P", "P×1.18=8720 → P=8000? 9%×2=18%; 8720/1.18≈7390 — fix numbers.");
(() => {
  const q = questions.find((x) => x.id === 91);
  // Use Amount 9200 at 8% for 2 years → RT=16%; P=9200/1.16=7931 ugly
  // Amount 8800 at 10% 2yr → P=8800/1.2 ≈ 7333
  // Amount 8400 at 10% 2yr → P=7000
  q.question = "A sum becomes ₹8400 in 2 years at 10% p.a. simple interest. Find the principal.";
  q.options = buildOptions("7000", ["7200", "7500", "6800"], q.answer, 91 * 41);
  q.explanation = "P + 0.2P = 8400 ⇒ 1.2P=8400 ⇒ P=7000.";
})();

add(92, "quant", "CP=720, SP=864. Profit %?", "20%", ["18%", "25%", "15%"], "Easy", "Profit & Loss", "Profit %", "Profit 144; 144/720×100=20%.");
add(93, "quant", "MP=2000, discount 15%. SP=?", "1700", ["1800", "1600", "1750"], "Easy", "Profit & Loss", "Discount", "2000×0.85=1700.");
add(94, "quant", "Average of 7 numbers is 28. One number 35 replaced by 21. New average?", "26", ["25", "27", "24"], "Medium", "Average", "Replacement", "Sum=196; new=182; avg=26.");
add(95, "quant", "28% of a number is 224. Number?", "800", ["700", "750", "850"], "Easy", "Percentage", "Find Number", "N×0.28=224 ⇒ N=800.");
add(96, "quant", "A number increased by 10% then decreased by 10%. Net change?", "1% decrease", ["No change", "1% increase", "2% decrease"], "Medium", "Percentage", "Successive", "×1.1×0.9=0.99 ⇒ 1% decrease.");
add(97, "quant", "Production: Sat 130, Sun 170, Mon 110, Tue 190, Wed 150. Total?", "750", ["700", "800", "720"], "Easy", "Data Interpretation", "Totals", "130+170+110+190+150=750.");
add(98, "quant", "Same data. Average daily production?", "150", ["140", "160", "145"], "Easy", "Data Interpretation", "Average", "750/5=150.");
add(99, "quant", "Same data. Lowest production day?", "Monday", ["Saturday", "Sunday", "Wednesday"], "Easy", "Data Interpretation", "Comparison", "Mon=110 lowest.");
add(100, "quant", "Same data. Sun as % of Tue?", "≈89.5%", ["80%", "75%", "95%"], "Medium", "Data Interpretation", "Percentage", "170/190×100≈89.47%.");

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
    id: "ibps-it-officer-fresh-mock-2026-08-24",
    title: "IBPS IT Officer Prelims — Fresh Mock 24 Aug (Post Weak Revision)",
    type: "Full Length Timed Mock | Sectional Timers",
    date: "2026-08-24",
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

fs.writeFileSync(path.join(__dirname, "exam_fresh_mock_2026-08-24.json"), JSON.stringify(exam, null, 2));
console.log("OK", questions.length, dist);
