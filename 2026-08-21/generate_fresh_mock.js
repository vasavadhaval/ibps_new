const fs = require("fs");
const path = require("path");

function buildOptions(correctText, distractors, answerLetter, seed) {
  const letters = ["A", "B", "C", "D"];
  const others = distractors.filter((d) => d !== correctText).slice(0, 3);
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
  for (const L of letters) options[L] = L === answerLetter ? correctText : others[di++];
  return options;
}

const cycle = ["C", "A", "D", "B", "A", "D", "C", "B", "D", "A", "B", "C"];
const letterAt = (i) => cycle[i % cycle.length];

function makeQ(i, id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra = {}) {
  const answer = letterAt(i);
  return {
    id,
    section,
    question,
    options: buildOptions(correct, distractors, answer, id * 31 + 7),
    answer,
    difficulty,
    topic,
    subtopic,
    explanation,
    marks: section === "pk" ? 2 : 1,
    ...extra,
  };
}

const questions = [];
let idx = 0;
const add = (id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra) => {
  questions.push(makeQ(idx++, id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra || {}));
};

// ===================== PK 1-25 (IMPORTANT + FRESH) =====================
add(1, "pk", "Which SQL command is used to permanently remove a table structure along with its data?", "DROP TABLE", ["DELETE FROM", "TRUNCATE only for rows without removing table definition always", "ALTER TABLE", "UPDATE"], "Easy", "DBMS", "DDL", "DROP removes the table definition and data. DELETE removes rows; TRUNCATE clears rows but table remains.");
add(2, "pk", "In a relational database, a candidate key that is not chosen as the primary key is called:", "Alternate key", ["Foreign key", "Super key only", "Composite index"], "Medium", "DBMS", "Keys", "Non-selected candidate keys are alternate keys.");
add(3, "pk", "Which normal form removes partial dependency on a composite primary key?", "2NF", ["1NF", "3NF", "BCNF"], "Medium", "DBMS", "Normalization", "2NF eliminates partial dependency; 3NF eliminates transitive dependency.");
add(4, "pk", "Which JOIN returns only matching rows from both tables?", "INNER JOIN", ["LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"], "Easy", "DBMS", "SQL Joins", "INNER JOIN keeps intersecting/matching rows only.");
add(5, "pk", "COMMIT in a database transaction is mainly related to which ACID property?", "Durability", ["Atomicity", "Isolation", "Consistency only"], "Medium", "DBMS", "ACID", "After COMMIT, changes persist (durability). Atomicity is all-or-nothing.");
add(6, "pk", "Which scheduling algorithm may cause starvation of longer processes?", "Shortest Job First (SJF)", ["FCFS", "Round Robin", "Multilevel queue without priority"], "Medium", "Operating Systems", "CPU Scheduling", "SJF can starve long jobs if short jobs keep arriving.");
add(7, "pk", "Thrashing in an operating system refers to:", "Excessive paging with little useful work", ["CPU overheating", "Disk formatting", "Compiler optimization"], "Medium", "Operating Systems", "Memory Management", "Thrashing = too many page faults; system spends time swapping.");
add(8, "pk", "Which of the following is NOT typically a process state?", "Compiling", ["Ready", "Running", "Waiting/Blocked"], "Easy", "Operating Systems", "Process States", "Compiling is not a standard process state.");
add(9, "pk", "In memory management, a page table is used to map:", "Logical/virtual pages to physical frames", ["Files to folders", "Ports to protocols", "Users to passwords"], "Medium", "Operating Systems", "Paging", "Page tables translate virtual page numbers to frame numbers.");
add(10, "pk", "Which device works primarily using MAC addresses?", "Switch", ["Router", "Hub (broadcast only)", "Repeater"], "Easy", "Computer Networks", "Network Devices", "Switches forward using MAC; routers use IP.");
add(11, "pk", "Which protocol provides reliable end-to-end delivery at the transport layer?", "TCP", ["UDP", "IP", "ARP"], "Easy", "Computer Networks", "Transport Layer", "TCP is reliable and connection-oriented; UDP is not.");
add(12, "pk", "Default port number for SSH is:", "22", ["23", "21", "25"], "Easy", "Computer Networks", "Ports", "SSH uses port 22; Telnet 23; FTP 21; SMTP 25.");
add(13, "pk", "IPv6 address size is:", "128 bits", ["32 bits", "64 bits", "256 bits"], "Easy", "Computer Networks", "IP Addressing", "IPv4=32-bit; IPv6=128-bit.");
add(14, "pk", "Which topology has a single central hub/switch connecting all nodes?", "Star", ["Bus", "Ring", "Mesh"], "Easy", "Computer Networks", "Topologies", "Star uses a central connecting device.");
add(15, "pk", "Which data structure is best for implementing recursion (function call management)?", "Stack", ["Queue", "Linked list only", "Graph"], "Easy", "Data Structures", "Stack Applications", "Call stack uses LIFO behavior of stacks.");
add(16, "pk", "Time complexity of binary search on a sorted array of n elements is:", "O(log n)", ["O(n)", "O(n log n)", "O(1) always"], "Medium", "Data Structures", "Searching", "Binary search halves search space each step → O(log n).");
add(17, "pk", "In SDLC, creating SRS (Software Requirements Specification) belongs mainly to:", "Requirements analysis phase", ["Coding phase", "Deployment phase", "Maintenance only"], "Easy", "Software Engineering", "SDLC", "SRS is produced during requirements analysis.");
add(18, "pk", "White-box testing primarily focuses on:", "Internal code structure and logic", ["Only external UI look", "Only network cables", "Only documentation fonts"], "Medium", "Software Engineering", "Testing", "White-box tests internal paths/logic; black-box tests I/O behavior.");
add(19, "pk", "HTTP status code 401 means:", "Unauthorized", ["Not Found", "OK", "Internal Server Error"], "Medium", "Web Technologies", "HTTP Status", "401=Unauthorized; 403=Forbidden; 404=Not Found; 500=Server Error.");
add(20, "pk", "Cookies are mainly stored in the:", "Client browser", ["Router firmware only", "DNS root server", "CPU registers"], "Easy", "Web Technologies", "Web Basics", "Cookies are stored by the browser on the client side.");
add(21, "pk", "Which cloud model provides a ready development environment (runtime, middleware) without managing OS?", "PaaS", ["IaaS", "SaaS only", "LAN"], "Medium", "Cloud Computing", "Service Models", "PaaS = platform; IaaS = VMs/infra; SaaS = finished apps.");
add(22, "pk", "A digital signature primarily ensures:", "Authenticity and integrity of a message", ["Faster Wi-Fi only", "Cheaper RAM", "Better screen resolution"], "Medium", "Cyber Security", "Cryptography", "Digital signatures verify sender authenticity and content integrity.");
add(23, "pk", "Which attack floods a service with traffic to make it unavailable?", "DoS/DDoS", ["Phishing only", "SQL injection only", "XSS only"], "Easy", "Cyber Security", "Attacks", "Denial-of-Service aims at availability.");
add(24, "pk", "RTGS in banking is best described as:", "Real-time settlement of high-value transfers", ["Only cheque imaging", "Weekly batch payroll only", "ATM cash refill process"], "Easy", "Banking IT", "Payment Systems", "RTGS = Real Time Gross Settlement (typically high value).");
add(25, "pk", "IMPS enables:", "Immediate interbank electronic funds transfer", ["Only international SWIFT messages", "Only physical DD printing", "Only locker allotment"], "Easy", "Banking IT", "Payment Systems", "IMPS provides immediate payment service.");

// ===================== ENGLISH 26-50 =====================
add(26, "english", "Find the error part: Each of the players / have / arrived / No error", "have", ["Each of the players", "arrived", "No error"], "Easy", "Grammar", "Subject-Verb Agreement", "Each of → singular verb → has.");
add(27, "english", "Find the error part: He is married / with / a doctor / No error", "with", ["He is married", "a doctor", "No error"], "Easy", "Grammar", "Prepositions", "Married to (not with).");
add(28, "english", "Find the error part: Scarcely had he entered / then / the lights went out / No error", "then", ["Scarcely had he entered", "the lights went out", "No error"], "Medium", "Grammar", "Conjunctions", "Scarcely/Hardly … when (not then).");
add(29, "english", "Find the error part: The jury / were divided / in their opinion / No error", "No error", ["The jury", "were divided", "in their opinion"], "Medium", "Grammar", "Collective Nouns", "When members disagree, plural verb can be acceptable: were divided.");
add(30, "english", "Find the error part: He suggested / me to apply / for the post / No error", "me to apply", ["He suggested", "for the post", "No error"], "Medium", "Grammar", "Verb Patterns", "Suggest that I apply / suggested applying (not suggested me to).");
add(31, "english", "Choose the correct option: He is ___ university student.", "a", ["an", "the", "no article"], "Easy", "Grammar", "Articles", "University starts with consonant sound /ju/ → a.");
add(32, "english", "Fill: She has been working here ___ 2019.", "since", ["for", "from", "by"], "Easy", "Grammar", "Tenses", "Since + point of time.");
add(33, "english", "Fill: He is afraid ___ spiders.", "of", ["from", "with", "by"], "Easy", "Grammar", "Prepositions", "Afraid of.");
add(34, "english", "Fill: The manager insisted ___ an explanation.", "on", ["for", "to", "at"], "Easy", "Grammar", "Prepositions", "Insist on.");
add(35, "english", "Fill: No sooner had the train departed ___ it started raining.", "than", ["when", "then", "but"], "Medium", "Grammar", "Conjunctions", "No sooner … than.");
add(36, "english", "Replace the underlined: He is enough tall to touch the shelf.", "tall enough", ["enough taller", "too enough tall", "No improvement"], "Easy", "Grammar", "Phrase Replacement", "Adjective + enough.");
add(37, "english", "Replace: Despite of the rain, they continued.", "Despite the rain", ["In spite the rain", "Despite of raining", "No improvement"], "Easy", "Grammar", "Phrase Replacement", "Despite + noun (no of). In spite of is correct form.");

const passageBank =
  "Directions (Q38–Q41): Read the passage.\n\nOpen banking allows third-party providers to access customer banking data through secure APIs, with customer consent. This can improve product comparison and faster lending decisions. However, it also increases the attack surface for cybercriminals. Banks must enforce strong authentication, encryption in transit, and continuous API monitoring. Customers should grant access only to regulated apps and revoke permissions they no longer use. Regulators emphasize that convenience must not weaken data protection standards.";

add(38, "english", "What is the main idea of the passage?", "Open banking brings benefits but needs strong security and regulated access", ["Open banking should remove all authentication", "APIs are illegal in banking", "Customers must share passwords publicly"], "Easy", "Reading Comprehension", "Main Idea", "Passage balances benefits with security/consent/regulation.", { context_group: "passage_open_banking", context: passageBank });
add(39, "english", "According to the passage, open banking access happens mainly through:", "Secure APIs with customer consent", ["Unsecured email attachments", "Physical cheque books only", "Social media posts"], "Easy", "Reading Comprehension", "Detail", "Text states access via secure APIs with consent.", { context_group: "passage_open_banking" });
add(40, "english", "What risk does the passage associate with open banking?", "Increased cyber attack surface", ["Lower interest rates always", "No need for monitoring", "Permanent ban on apps"], "Medium", "Reading Comprehension", "Inference", "It increases attack surface for cybercriminals.", { context_group: "passage_open_banking" });
add(41, "english", "Customers are advised to:", "Grant access only to regulated apps and revoke unused permissions", ["Share OTPs with all fintech staff", "Never use any banking app", "Disable encryption"], "Easy", "Reading Comprehension", "Detail", "Grant access carefully and revoke unused permissions.", { context_group: "passage_open_banking" });

add(42, "english", "Synonym of 'consent' as used in banking data sharing:", "permission/agreement", ["refusal", "delay", "punishment"], "Easy", "Vocabulary", "Synonyms", "Consent = permission/agreement.");
add(43, "english", "Synonym of 'revoke':", "cancel/withdraw", ["approve", "increase", "publish"], "Easy", "Vocabulary", "Synonyms", "Revoke = cancel or withdraw.");
add(44, "english", "Antonym of 'weaken':", "strengthen", ["reduce", "damage", "ignore"], "Easy", "Vocabulary", "Antonyms", "Weaken ↔ strengthen.");
add(45, "english", "'Authentication' in IT/banking means:", "Verifying identity", ["Deleting logs", "Designing logos", "Printing statements"], "Easy", "Vocabulary", "IT Vocab", "Authentication confirms who you are.");
add(46, "english", "Choose the correct sentence:", "The data is protected by encryption.", ["The data are protect by encryption.", "The data have protecting by encryption.", "The data is protect with encryption."], "Easy", "Grammar", "SVA", "In many bank exams, 'data' is treated as singular → is.");
add(47, "english", "Phrase: He is cut out ___ teaching.", "for", ["to", "with", "on"], "Medium", "Grammar", "Idioms/Phrases", "Cut out for = suited for.");
add(48, "english", "One-word: A person who is new to a job:", "Novice", ["Veteran", "Expert", "Mentor"], "Easy", "Vocabulary", "One Word", "Novice = beginner.");
add(49, "english", "Improve: He did mistake in the form.", "He made a mistake in the form", ["He does mistake", "He had mistake", "No improvement"], "Easy", "Grammar", "Phrase Replacement", "Make a mistake (collocation).");
add(50, "english", "Improve: She is knowing the answer.", "She knows the answer", ["She know the answer", "She known the answer", "No improvement"], "Easy", "Grammar", "Stative Verbs", "Know is stative; avoid continuous.");

(() => {
  const q = questions.find((x) => x.id === 41);
  if (q) q.context_group = "passage_open_banking";
})();

// ===================== REASONING 51-75 =====================
add(51, "reasoning", "Statements: P ≥ Q = R > S ≤ T. Conclusions: I. P > S  II. T ≥ R. Which follows?", "Only I follows", ["Only II follows", "Both follow", "Neither follows"], "Medium", "Inequality", "Conclusions", "P ≥ Q = R > S ⇒ P > S (I). T ≥ R is not definite from S ≤ T.");
add(52, "reasoning", "Statements: A < B ≤ C = D ≥ E. Conclusion: A < D. Does it follow?", "Follows", ["Does not follow", "Either", "Data inadequate"], "Easy", "Inequality", "Direct Relation", "A < B ≤ C = D ⇒ A < D.");
add(53, "reasoning", "Codes: % means ≥ , # means < , @ means = , $ means >. Statement: M % N $ O # P. Conclusion: M > O?", "Follows", ["Does not follow", "Either", "None"], "Medium", "Coded Inequality", "Chain", "M ≥ N > O < P ⇒ M > O follows.");
add(54, "reasoning", "In a certain code, BRAIN is written as CSBJO (+1). How is FLAME written?", "GMBNF", ["GMBNE", "EKZLD", "GNB MF"], "Easy", "Coding-Decoding", "Letter Shift", "Each letter +1 ⇒ GMBNF.");
add(55, "reasoning", "If in a code, 'pen pencil eraser' is 'la mi tok' and 'pencil box scale' is 'mi zor neb', code for pencil is:", "mi", ["la", "tok", "zor"], "Easy", "Coding-Decoding", "Condition Coding", "Common word pencil ↔ common code mi.");
add(56, "reasoning", "Opposite letter code: If DANCE → WZMXV, then LIGHT → ?", "ORTSG", ["KHFGS", "MJHIU", "ORGTH"], "Medium", "Coding-Decoding", "Opposite Letters", "L↔O, I↔R, G↔T, H↔S, T↔G ⇒ ORTSG.");
add(57, "reasoning", "Statements: All servers are computers. Some computers are laptops. Conclusions: I. Some servers are laptops. II. All computers are servers.", "Neither I nor II follows", ["Only I", "Only II", "Both"], "Medium", "Syllogism", "All+Some", "Some servers are laptops not definite; II reverse all doesn't follow.");
add(58, "reasoning", "Statements: No API is database. All databases are systems. Conclusions: I. No API is system. II. Some systems are not APIs.", "Only II follows", ["Only I", "Both", "Neither"], "Hard", "Syllogism", "No+All", "I does not follow (API could still be system via other path). Systems that are databases are not APIs ⇒ some systems are not APIs (II).");
add(59, "reasoning", "Statements: All routers are devices. All devices need power. Conclusion: All routers need power.", "Follows", ["Does not follow", "Either", "None"], "Easy", "Syllogism", "All-All", "Routers ⊆ devices ⊆ need power.");
add(60, "reasoning", "A man walks 10 km East, then 10 km North, then 10 km West. How far is he from the start?", "10 km North", ["10 km East", "20 km North", "0 km"], "Easy", "Direction Sense", "Displacement", "East+West cancel; remains 10 km North.");
add(61, "reasoning", "Pointing to a man, Neha says, 'He is the only son of my mother's father.' How is the man related to Neha?", "Maternal uncle (or related as mother's brother)", ["Father", "Brother", "Cousin"], "Medium", "Blood Relation", "Pointers", "Mother's father = maternal grandfather; his only son = Neha's maternal uncle.");
add(62, "reasoning", "In a row, Rina is 12th from left and 18th from right. Total persons?", "29", ["30", "28", "31"], "Easy", "Order & Ranking", "Formula", "12+18−1=29.");
add(63, "reasoning", "Input: 47 9 33 15 61 28. Rule: In each step the smallest remaining number moves to the left end. Step I?", "9 47 33 15 61 28", ["15 47 33 9 61 28", "9 15 47 33 61 28", "47 9 15 33 61 28"], "Medium", "Input-Output", "Arrangement", "Smallest 9 shifts left.");
add(64, "reasoning", "Same I/O rule. Step II?", "9 15 47 33 61 28", ["9 47 15 33 61 28", "9 15 33 47 61 28", "15 9 47 33 61 28"], "Medium", "Input-Output", "Arrangement", "Next smallest 15 moves after 9.");
add(65, "reasoning", "Six friends A B C D E F sit in a line facing North. A is second to the left of C. F is at the right end. B is immediate right of A. D is not next to C. Who sits between B and D?", "Need arrangement: positions...", ["E", "C", "A", "Cannot determine"], "Medium", "Puzzles", "Linear Seating", "placeholder");

// Fix 61 and 65 carefully - blood relation answer text too long for options; linear puzzle needs unique answer

(() => {
  const q = questions.find((x) => x.id === 61);
  if (q) {
    const L = q.answer;
    q.options = buildOptions("Maternal uncle", ["Father", "Brother", "Cousin"], L, 61 * 31);
    q.explanation = "Mother's father = maternal grandfather; his only son = maternal uncle.";
  }
})();

(() => {
  // Rebuild linear puzzle with clean unique solution
  const q = questions.find((x) => x.id === 65);
  if (q) {
    const L = q.answer;
    q.question =
      "Five persons J, K, L, M, N sit in a row facing North. J is at the left end. N is at the right end. K is immediate right of J. M sits between K and L. Who is in the middle?";
    q.options = buildOptions("M", ["K", "L", "N"], L, 65 * 31);
    q.explanation = "Order: J K M L N → middle = M.";
    q.topic = "Puzzles";
    q.subtopic = "Linear Seating";
  }
})();

add(66, "reasoning", "In the same row (J K M L N), who sits second to the left of N?", "L", ["M", "K", "J"], "Easy", "Puzzles", "Linear Seating", "Second left of N is L.");
add(67, "reasoning", "Seven floors (1 bottom–7 top): R lives on 4. Only two live above S. T lives immediately below S. P lives on odd floor below R. Q lives above R. Who lives on floor 7?", "Need...", ["S", "Q", "T", "P"], "Medium", "Puzzles", "Floor Puzzle", "placeholder");

(() => {
  const q = questions.find((x) => x.id === 67);
  if (q) {
    const L = q.answer;
    // Only two above S ⇒ S on floor 5. T immediately below S ⇒ T on 4. But R on 4 conflict!
    // Recalculate: "only two live above S" ⇒ S on 5 if 7 floors. T below S ⇒ T=4. R also on 4 - conflict.
    // Change clues for unique clean puzzle:
    q.question =
      "Five floors (1 ground–5 top): X lives on floor 3. Y lives immediately above X. Z lives on top floor. W does not live on floor 1. V lives below W. Who lives on floor 1?";
    q.options = buildOptions("V", ["W", "X", "Y"], L, 67 * 31);
    q.explanation = "Y4-X3; Z5; W not 1 and V below W ⇒ W2 V1 (only fit). Wait W could be... floors left 1,2 for V,W with V below W ⇒ V1 W2.";
    // Actually Y immediately above X: X=3 ⇒ Y=4. Z=5. Left 1,2 for V,W; V below W ⇒ V1 W2.
    q.options = buildOptions("V", ["W", "X", "Y"], L, 67 * 31);
    q.explanation = "Arrangement: V1-W2-X3-Y4-Z5. Floor 1 = V.";
  }
})();

add(68, "reasoning", "Same five-floor puzzle (V1 W2 X3 Y4 Z5). Who lives immediately below Z?", "Y", ["X", "W", "V"], "Easy", "Puzzles", "Floor Puzzle", "Below Z(5) is Y(4).");
add(69, "reasoning", "How many 3s are there in the following series which are preceded by 5 but not followed by 2?  5 3 2 5 3 7 5 3 2 5 3 5 3 8", "2", ["1", "3", "4"], "Medium", "Alphanumeric", "Counting", "Check 5 3 ? where ? ≠ 2: positions give two valid (5 3 7 and 5 3 5 / 5 3 8). Count carefully: 532(no), 537(yes), 532(no), 535(yes), 538(yes) → actually 3. Fix.");

(() => {
  const q = questions.find((x) => x.id === 69);
  if (q) {
    const L = q.answer;
    // Series: 5 3 2 | 5 3 7 | 5 3 2 | 5 3 5 | 5 3 8
    // preceded by 5 not followed by 2: 537, 535, 538 → 3
    q.options = buildOptions("3", ["1", "2", "4"], L, 69 * 31);
    q.explanation = "Valid triples 5,3,x with x≠2: (5,3,7), (5,3,5), (5,3,8) → 3.";
  }
})();

add(70, "reasoning", "If the day before yesterday was Friday, what day will it be the day after tomorrow?", "Tuesday", ["Monday", "Wednesday", "Sunday"], "Easy", "Calendar", "Days", "Day before yesterday=Fri ⇒ today=Sunday ⇒ day after tomorrow=Tuesday.");
add(71, "reasoning", "What is Geeta's rank from the top in a class of 40? I: Geeta is 8 ranks below Seema who is 20th from top. II: Geeta is 16 ranks above Rohan who is 25th from bottom.", "Either I or II alone sufficient", ["I alone only", "II alone only", "Both needed"], "Medium", "Data Sufficiency", "Ranking", "I alone: Seema 20 ⇒ Geeta 28 from top. II alone: Rohan from top=40-25+1=16; Geeta=16-16=0 wait. Rohan 25th from bottom ⇒ from top = 40-25+1=16. Geeta 16 above Rohan ⇒ Geeta rank 16-16=0 impossible. Recheck: 16 ranks above means better rank number smaller: Geeta rank = 16-16? If Rohan is 16 from top, 16 above means Geeta is at 16-16=0. Wrong. '16 ranks above' from position 16 → Geeta at position 0? Actually if Rohan is 16th, person 16 ranks above is 1st? ranks above by 16 ⇒ 16-16=0 invalid. Use: Geeta rank = Rohan_rank - 16 = 16-16=0. Bad question. Fix II.");

(() => {
  const q = questions.find((x) => x.id === 71);
  if (q) {
    const L = q.answer;
    q.question =
      "What is Geeta's rank from the top in a class of 40?\nI. Geeta is 8 ranks below Seema who is 20th from the top.\nII. Geeta's rank from the bottom is 13.";
    q.options = buildOptions("Either I or II alone sufficient", ["I alone only", "II alone only", "Both needed"], L, 71 * 31);
    q.explanation = "I: Geeta=28th from top. II: from top=40-13+1=28. Either alone enough.";
  }
})();

add(72, "reasoning", "On which day did Ravi meet Anil?\nI. Ravi met Anil the day after Diwali.\nII. Diwali was on Wednesday.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Calendar", "Need both to conclude Thursday.");
add(73, "reasoning", "Who is tallest among A, B, C?\nI. A is taller than B.\nII. C is shorter than B.", "Both I and II together", ["I alone", "II alone", "Either alone"], "Easy", "Data Sufficiency", "Comparison", "A>B>C ⇒ A tallest; both needed.");
add(74, "reasoning", "What is the code for 'bank'?\nI. 'bank loan easy' → 'ni to ka'\nII. 'easy credit bank' → 'ka lo ni'", "Both needed but still may not unique — fix", ["I alone", "II alone", "Data inadequate even both"], "Medium", "Data Sufficiency", "Coding", "placeholder");

(() => {
  const q = questions.find((x) => x.id === 74);
  if (q) {
    const L = q.answer;
    q.question =
      "What is the code for 'bank'?\nI. 'bank loan easy' is coded as 'ni to ka'\nII. 'easy credit bank' is coded as 'ka lo ni'";
    q.options = buildOptions("Both I and II together (but 'bank' is either ka or ni — still two possibilities)", ["I alone", "II alone", "Data inadequate even after combining"], L, 74 * 31);
  }
})();

// Simplify Q74 to clean DS answer
(() => {
  const q = questions.find((x) => x.id === 74);
  if (q) {
    const L = q.answer;
    q.question =
      "What is the code for 'bank'?\nI. 'bank loan easy' → 'ni to ka'\nII. 'easy credit bank' → 'ka lo ni'\nIII not given. Using I and II only:";
    // common bank&easy → ka/ni; loan=to, credit=lo; bank is ka or ni - inadequate
    q.options = buildOptions("Data inadequate even after combining I and II", ["I alone sufficient", "II alone sufficient", "Either alone sufficient"], L, 74 * 31);
    q.explanation = "From I+II, 'easy' and 'bank' map to {ka,ni} but which is which is unknown. loan=to, credit=lo.";
  }
})();

add(75, "reasoning", "A is the brother of B. B is the daughter of C. D is the father of A. How is C related to D?", "Wife (or spouse of D) — if C is mother", ["Sister", "Daughter", "Mother-in-law"], "Medium", "Blood Relation", "Family Tree", "D father of A; C parent of B; A brother of B ⇒ C is mother and wife of D (assuming two parents).");

(() => {
  const q = questions.find((x) => x.id === 75);
  if (q) {
    const L = q.answer;
    q.options = buildOptions("Wife", ["Sister", "Daughter", "Aunt"], L, 75 * 31);
    q.explanation = "D is father of A; C is parent of A's sister B ⇒ C is mother ⇒ wife of D.";
  }
})();

// ===================== QUANT 76-100 =====================
add(76, "quant", "Simplify: 15 × 8 − 48 ÷ 6 + 9 = ?", "121", ["119", "111", "129"], "Easy", "Simplification", "BODMAS", "120 − 8 + 9 = 121.");
add(77, "quant", "Simplify: (3/5) of 250 + 40% of 80 = ?", "182", ["170", "190", "160"], "Easy", "Simplification", "Fractions/%", "150 + 32 = 182.");
add(78, "quant", "√784 + 12² − 15 = ?", "141", ["133", "145", "129"], "Easy", "Simplification", "Squares", "28 + 144 − 15 = 157... FIX");

(() => {
  const q = questions.find((x) => x.id === 78);
  if (q) {
    const L = q.answer;
    // 28+144-15=157
    q.options = buildOptions("157", ["151", "163", "147"], L, 78 * 31);
    q.explanation = "√784=28; 12²=144; 28+144−15=157.";
  }
})();

add(79, "quant", "Approximate: 48.97 × 9.02 ≈ ?", "441", ["400", "490", "420"], "Easy", "Approximation", "Rounding", "≈49×9=441.");
add(80, "quant", "Approximate: 18% of 498 ≈ ?", "90", ["80", "100", "70"], "Easy", "Approximation", "Percentage", "≈18% of 500=90.");
add(81, "quant", "Series: 5, 11, 24, 51, 106, ?", "217", ["211", "221", "203"], "Medium", "Number Series", "×2+pattern", "×2+1, ×2+2, ×2+3, ×2+4, ×2+5 ⇒ 106×2+5=217.");
add(82, "quant", "Series: 8, 8, 12, 24, 60, ?", "180", ["120", "150", "210"], "Medium", "Number Series", "×n pattern", "×1, ×1.5, ×2, ×2.5, ×3 ⇒ 60×3=180.");
add(83, "quant", "Series: 2, 10, 30, 68, 130, ?", "222", ["210", "230", "242"], "Medium", "Number Series", "n³+n", "1³+1=2, 2³+2=10, 3³+3=30, 4³+4=68, 5³+5=130, 6³+6=222.");
add(84, "quant", "x² − 9x + 18 = 0 and y² − 7y + 12 = 0. Relation between x and y?", "Cannot be determined", ["x > y", "x < y", "x = y"], "Medium", "Quadratic Equations", "Compare Roots", "x=3,6; y=3,4 → relation not unique.");
add(85, "quant", "x² − 6x + 9 = 0 and y² − 6y + 9 = 0. Relation?", "x = y", ["x > y", "x < y", "Cannot be determined"], "Easy", "Quadratic Equations", "Compare Roots", "Both roots 3 ⇒ x=y.");
add(86, "quant", "A:B = 5:8. If A = 45, B = ?", "72", ["64", "80", "60"], "Easy", "Ratio", "Parts", "B=8/5×45=72.");
add(87, "quant", "Divide ₹840 in ratio 2:3:7. Share of the largest part?", "490", ["420", "360", "280"], "Easy", "Ratio", "Division", "7/12×840=490.");
add(88, "quant", "Present ages of A and B are in ratio 4:5. After 8 years ratio becomes 5:6. Present age of A?", "32 years", ["28 years", "36 years", "40 years"], "Medium", "Age Problems", "Ratio Ages", "4x+8 / 5x+8 = 5/6 ⇒ 24x+48=25x+40 ⇒ x=8; A=32.");
add(89, "quant", "Father is thrice as old as son. After 12 years he will be twice as old. Son's present age?", "12 years", ["10 years", "14 years", "15 years"], "Medium", "Age Problems", "Father-Son", "3x+12=2(x+12) ⇒ x=12.");
add(90, "quant", "SI on ₹7200 at 8% p.a. for 3 years?", "1728", ["1600", "1800", "1920"], "Easy", "Simple Interest", "Formula", "(7200×8×3)/100=1728.");
add(91, "quant", "A sum becomes ₹9600 in 2 years at 10% p.a. simple interest. Principal?", "8000", ["7500", "8500", "9000"], "Medium", "Simple Interest", "Find Principal", "P+0.2P=9600 ⇒ 1.2P=9600 ⇒ P=8000.");
add(92, "quant", "CP = ₹640, SP = ₹768. Profit %?", "20%", ["18%", "25%", "15%"], "Easy", "Profit & Loss", "Profit %", "Profit 128; 128/640×100=20%.");
add(93, "quant", "Marked price ₹1500, discount 20%. Selling price?", "1200", ["1300", "1100", "1250"], "Easy", "Profit & Loss", "Discount", "1500×0.8=1200.");
add(94, "quant", "Average of 6 numbers is 42. If one number 48 is replaced by 30, new average?", "39", ["40", "38", "41"], "Medium", "Average", "Replacement", "Sum=252; new sum=234; avg=39.");
add(95, "quant", "35% of a number is 280. The number is?", "800", ["700", "750", "850"], "Easy", "Percentage", "Find Number", "N×0.35=280 ⇒ N=800.");
add(96, "quant", "A number is increased by 20% and then decreased by 20%. Net effect?", "4% decrease", ["No change", "4% increase", "2% decrease"], "Medium", "Percentage", "Successive", "×1.2×0.8=0.96 ⇒ 4% decrease.");
add(97, "quant", "Table: Production (units) — Mon 120, Tue 150, Wed 90, Thu 180, Fri 160. Total production?", "700", ["650", "720", "680"], "Easy", "Data Interpretation", "Totals", "120+150+90+180+160=700.");
add(98, "quant", "Using same production table, average daily production?", "140", ["150", "130", "120"], "Easy", "Data Interpretation", "Average", "700/5=140.");
add(99, "quant", "Using same production table, on which day was production lowest?", "Wednesday", ["Monday", "Tuesday", "Friday"], "Easy", "Data Interpretation", "Comparison", "Wed=90 lowest.");
add(100, "quant", "Using same production table, Tue production as % of Thu production?", "83.33%", ["75%", "80%", "90%"], "Medium", "Data Interpretation", "Percentage", "(150/180)×100 = 83.33%.");

// Validate unique ids 1-100
const ids = questions.map((q) => q.id).sort((a, b) => a - b);
const missing = [];
for (let n = 1; n <= 100; n++) if (!ids.includes(n)) missing.push(n);
const dupes = ids.filter((v, i, a) => a.indexOf(v) !== i);

const dist = { A: 0, B: 0, C: 0, D: 0 };
questions.forEach((q) => dist[q.answer]++);

// Verify a few critical calcs
function assert(cond, msg) {
  if (!cond) console.warn("WARN:", msg);
}
assert(15 * 8 - 48 / 6 + 9 === 121, "Q76");
assert((3 / 5) * 250 + 0.4 * 80 === 182, "Q77");
assert(28 + 144 - 15 === 157, "Q78");
assert(106 * 2 + 5 === 217, "Q81");
assert(60 * 3 === 180, "Q82");
assert(6 ** 3 + 6 === 222, "Q83");
assert((7200 * 8 * 3) / 100 === 1728, "Q90");
assert(9600 / 1.2 === 8000, "Q91");
assert(128 / 640 === 0.2, "Q92");
assert(252 - 48 + 30 === 234 && 234 / 6 === 39, "Q94");
assert(280 / 0.35 === 800, "Q95");
assert(120 + 150 + 90 + 180 + 160 === 700, "Q97");

const exam = {
  exam: {
    id: "ibps-it-officer-fresh-mock-2026-08-21",
    title: "IBPS IT Officer Prelims — Fresh Mock (Non-Repeat Baseline)",
    type: "Full Length Timed Mock | Sectional Timers",
    date: "2026-08-21",
    duration_minutes: 80,
    sectional_timing: true,
    sectional_lock_until_timer_ends: false,
    total_questions: 100,
    total_marks: 125,
    marking: {
      correct: 1,
      wrong: -0.25,
      unattempted: 0,
      note: "Use question.marks (PK=2, others=1). Total 125. Wrong −0.25 of allotted marks if your engine supports per-question marks; else apply site rules.",
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

if (missing.length || dupes.length) {
  console.error("ID issues missing", missing, "dupes", dupes);
  process.exit(1);
}

const out = path.join(__dirname, "exam_fresh_mock_2026-08-21.json");
fs.writeFileSync(out, JSON.stringify(exam, null, 2), "utf8");
console.log("Wrote", out);
console.log("Questions", questions.length, "dist", dist);
console.log("Sectional timing ON | lock_until_timer_ends false (so you can measure real time spent)");
