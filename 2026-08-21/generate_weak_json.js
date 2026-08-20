const fs = require("fs");
const path = require("path");

function buildOptions(correctText, distractors, answerLetter, seed = 1) {
  const letters = ["A", "B", "C", "D"];
  const others = distractors.filter((d) => d !== correctText).slice(0, 3);
  while (others.length < 3) others.push("None of these");
  // deterministic shuffle from seed
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
  for (const L of letters) {
    options[L] = L === answerLetter ? correctText : others[di++];
  }
  return options;
}

function q(id, section, question, correct, distractors, answerLetter, difficulty, topic, subtopic, explanation, extra = {}) {
  return {
    id,
    section,
    question,
    options: buildOptions(correct, distractors, answerLetter, id * 17),
    answer: answerLetter,
    difficulty,
    topic,
    subtopic,
    explanation,
    marks: section === "pk" ? 2 : 1,
    ...extra,
  };
}

// Deterministic answer-letter cycle so A/B/C/D roughly equal (not all B)
const cycle = ["A", "C", "D", "B", "C", "A", "D", "B", "A", "C", "B", "D"];
const letterAt = (i) => cycle[i % cycle.length];

const questions = [];
let i = 0;
const add = (...args) => {
  const L = letterAt(i++);
  // args: id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra?
  const [id, section, question, correct, distractors, difficulty, topic, subtopic, explanation, extra] = args;
  questions.push(q(id, section, question, correct, distractors, L, difficulty, topic, subtopic, explanation, extra || {}));
};

// ===== Reasoning (1-15) =====
add(1, "reasoning", "If CAT = DBU (+1 each letter), then PEN = ?", "QFO", ["QEP", "ODM", "PEO"], "Easy", "Coding-Decoding", "Letter Shift", "P→Q, E→F, N→O ⇒ QFO.");
add(2, "reasoning", "If BOOK = CPPL (+1), then DESK = ?", "EFTL", ["EFTK", "CFTL", "EFSL"], "Easy", "Coding-Decoding", "Letter Shift", "D→E, E→F, S→T, K→L ⇒ EFTL.");
add(3, "reasoning", "Using opposite letters (A↔Z), COLD is coded as:", "XLOW", ["XLOV", "DPME", "XMNW"], "Medium", "Coding-Decoding", "Opposite Letters", "C↔X, O↔L, L↔O, D↔W ⇒ XLOW.");
add(4, "reasoning", "Using opposite letters, FISH is coded as:", "URHS", ["GJTI", "EHRG", "UFIR"], "Medium", "Coding-Decoding", "Opposite Letters", "F↔U, I↔R, S↔H, H↔S ⇒ URHS.");
add(5, "reasoning", "Sum of positional values of DOG (A=1) is:", "26", ["24", "22", "28"], "Easy", "Coding-Decoding", "Position Values", "D+O+G = 4+15+7 = 26.");
add(6, "reasoning", "Codes: red is blue→ka la pa; blue and green→pa sa ta. Code for blue?", "pa", ["ka", "la", "sa"], "Medium", "Coding-Decoding", "Condition Coding", "Common word blue ↔ common code pa.");
add(7, "reasoning", "Also green is yellow→ta ka na. Code for is?", "ka", ["ta", "na", "pa"], "Medium", "Coding-Decoding", "Condition Coding", "Common word is ↔ ka.");
add(8, "reasoning", "Code for yellow?", "na", ["ta", "ka", "pa"], "Medium", "Coding-Decoding", "Condition Coding", "After assigning is=ka and green=ta, yellow=na.");
add(9, "reasoning", "Input: 64 15 42 9 30. Rule: smallest shifts left each step. Step I?", "9 64 15 42 30", ["15 64 42 9 30", "9 15 64 42 30", "64 9 15 42 30"], "Medium", "Input-Output", "Number Arrangement", "Smallest 9 moves left; rest keep order.");
add(10, "reasoning", "Same I/O. Step II?", "9 15 64 42 30", ["9 64 15 42 30", "9 15 42 64 30", "15 9 64 42 30"], "Medium", "Input-Output", "Number Arrangement", "Next smallest 15 moves after 9.");
add(11, "reasoning", "Same I/O. After Step III, the leftmost two numbers are:", "9 15", ["9 30", "15 42", "9 42"], "Medium", "Input-Output", "Number Arrangement", "Step III: 9 15 30 64 42 — leftmost two remain 9 and 15.");
add(12, "reasoning", "Same I/O. Fully sorted in how many steps?", "5", ["4", "6", "3"], "Easy", "Input-Output", "Number Arrangement", "5 numbers → 5 steps to fully arrange.");
add(13, "reasoning", "Floors: C on 2, B above C, E top, A not on 1, D below A (5 floors). Who on floor 1?", "D", ["A", "B", "C"], "Medium", "Puzzles", "Floor Puzzle", "Arrangement: D1-C2-B3-A4-E5.");
add(14, "reasoning", "Same floor puzzle. Floor of A?", "4", ["3", "5", "2"], "Medium", "Puzzles", "Floor Puzzle", "A lives on floor 4.");
add(15, "reasoning", "Same floor puzzle. Who lives immediately below E?", "A", ["B", "D", "C"], "Medium", "Puzzles", "Floor Puzzle", "E on 5 ⇒ immediately below is A on 4.");

// ===== English (16-29) =====
add(16, "english", "One of my friends ___ here.", "lives", ["live", "living", "have lived"], "Easy", "Grammar", "Subject-Verb Agreement", "'One of' takes singular verb → lives.");
add(17, "english", "Neither of the boys ___ ready.", "is", ["are", "were", "have"], "Easy", "Grammar", "Subject-Verb Agreement", "Neither is singular → is.");
add(18, "english", "The news ___ good.", "is", ["are", "were", "have"], "Easy", "Grammar", "Subject-Verb Agreement", "News is singular → is.");
add(19, "english", "He is senior ___ me.", "to", ["than", "from", "with"], "Easy", "Grammar", "Prepositions", "Senior/junior → to.");
add(20, "english", "I prefer tea ___ coffee.", "to", ["than", "from", "by"], "Easy", "Grammar", "Prepositions", "Prefer X to Y.");
add(21, "english", "She congratulated me ___ my success.", "on", ["for", "at", "with"], "Easy", "Grammar", "Prepositions", "Congratulate on.");
add(22, "english", "She is good ___ English.", "at", ["in", "on", "with"], "Easy", "Grammar", "Prepositions", "Good at a subject.");
add(23, "english", "Success depends ___ hard work.", "on", ["at", "for", "with"], "Easy", "Grammar", "Prepositions", "Depends on.");
add(24, "english", "Choose correct form instead of: discuss about", "discuss", ["discuss on", "discussing about", "No change"], "Easy", "Grammar", "Phrase Replacement", "Discuss does not take about.");
add(25, "english", "Choose correct form instead of: return back", "return", ["give back again", "returned back", "No change"], "Easy", "Grammar", "Phrase Replacement", "Return already means give back.");
add(26, "english", "Choose correct form instead of: more taller", "taller", ["most taller", "more tallest", "No change"], "Easy", "Grammar", "Phrase Replacement", "Avoid double comparative.");
add(27, "english", "Choose correct form instead of: capable to do", "capable of doing", ["capable for doing", "capable in doing", "No change"], "Easy", "Grammar", "Phrase Replacement", "Capable of + gerund.");
add(28, "english", "Fraud means:", "cheating/deception", ["honesty", "a gift", "a holiday"], "Easy", "Vocabulary", "Banking Vocab", "Fraud = wrongful deception for gain.");
add(29, "english", "Fix: He don't know.", "doesn't know", ["didn't knew", "not know", "No change"], "Easy", "Grammar", "SVA", "He/She/It → doesn't.");

// ===== Quant (30-41) =====
add(30, "quant", "25% of 480 = ?", "120", ["100", "140", "96"], "Easy", "Percentage", "Basic %", "0.25×480=120.");
add(31, "quant", "30% of 500 = ?", "150", ["120", "180", "100"], "Easy", "Percentage", "Basic %", "0.3×500=150.");
add(32, "quant", "15% of 400 = ?", "60", ["50", "70", "40"], "Easy", "Percentage", "Basic %", "0.15×400=60.");
add(33, "quant", "40% of 250 = ?", "100", ["80", "120", "90"], "Easy", "Percentage", "Basic %", "0.4×250=100.");
add(34, "quant", "20% of 350 + 30 = ?", "100", ["90", "110", "80"], "Easy", "Percentage", "Mixed", "70+30=100.");
add(35, "quant", "1000 decreased by 10% = ?", "900", ["990", "890", "910"], "Easy", "Percentage", "Decrease", "1000×0.9=900.");
add(36, "quant", "A is 25% more than B. B=400. A=?", "500", ["450", "425", "480"], "Easy", "Percentage", "Increase", "400×1.25=500.");
add(37, "quant", "A is 20% more than B. B=250. A=?", "300", ["270", "280", "320"], "Easy", "Percentage", "Increase", "250×1.2=300.");
add(38, "quant", "CP=500, SP=600. Profit %?", "20%", ["25%", "15%", "10%"], "Easy", "Profit & Loss", "Profit %", "100/500×100=20%.");
add(39, "quant", "CP=900, Loss=10%. SP=?", "810", ["890", "800", "820"], "Easy", "Profit & Loss", "Loss SP", "900×0.9=810.");
add(40, "quant", "SI on ₹4000 at 5% for 2 years?", "400", ["200", "500", "450"], "Easy", "Simple Interest", "Formula", "(4000×5×2)/100=400.");
add(41, "quant", "48 ÷ 8 + 7 × 3 − 5 = ?", "22", ["20", "24", "18"], "Easy", "Simplification", "BODMAS", "6+21−5=22.");

// ===== PK (42-49) =====
add(42, "pk", "A program in execution is called a:", "Process", ["File", "Folder", "Port"], "Easy", "Operating Systems", "Process Management", "Process = program currently running.");
add(43, "pk", "Round Robin scheduling uses:", "Time quantum", ["Priority only", "Random selection", "Longest job first"], "Easy", "Operating Systems", "CPU Scheduling", "RR uses fixed time slice/quantum.");
add(44, "pk", "UPI is mainly used for:", "Instant mobile payments", ["Yearly settlement only", "Printing passbooks only", "Cooling servers"], "Easy", "Banking IT", "Payments", "UPI = instant account transfers via mobile.");
add(45, "pk", "Which structure follows LIFO?", "Stack", ["Queue", "Tree only", "Graph only"], "Easy", "Data Structures", "Stack", "Stack = Last In First Out.");
add(46, "pk", "Default HTTPS port is:", "443", ["80", "21", "25"], "Easy", "Computer Networks", "Ports", "HTTPS → 443; HTTP → 80.");
add(47, "pk", "TCP is best described as:", "Reliable and connection-oriented", ["Connectionless", "Physical layer only", "Same as UDP always"], "Easy", "Computer Networks", "TCP/IP", "TCP provides reliable ordered delivery.");
add(48, "pk", "A page fault means:", "Required page must be loaded from disk", ["Page already in RAM", "Page is deleted", "Page is printed"], "Medium", "Operating Systems", "Memory Management", "Page not in RAM → fetch from disk.");
add(49, "pk", "KYC means:", "Know Your Customer", ["Keep Your Cash", "Kill Your Code", "None of these"], "Easy", "Banking IT", "Compliance", "KYC = customer identity verification.");

const exam = {
  exam: {
    id: "ibps-weak-drill-2026-08-21",
    title: "IBPS IT Officer — Weak Areas Drill (Post 95.25 Mock)",
    type: "Targeted Practice | Reasoning + English + Quant + PK",
    date: "2026-08-21",
    duration_minutes: 35,
    total_questions: 49,
    total_marks: 57,
    marking: {
      correct: 1,
      wrong: -0.25,
      unattempted: 0,
      note: "PK questions use marks:2. Answer letters are distributed across A/B/C/D (not fixed on B).",
    },
    sections: [
      { id: "reasoning", name: "Reasoning Ability (Weak Fix)", questions: 15 },
      { id: "english", name: "English Language (Fix List)", questions: 14 },
      { id: "quant", name: "Quantitative Aptitude (% Mix)", questions: 12 },
      { id: "pk", name: "Professional Knowledge (Quick Fix)", questions: 8 },
    ],
    questions,
  },
};

const dist = { A: 0, B: 0, C: 0, D: 0 };
exam.exam.questions.forEach((x) => dist[x.answer]++);
exam.exam.total_questions = exam.exam.questions.length;
exam.exam.answer_distribution = dist;

const out = path.join(__dirname, "exam_weak_drill_2026-08-21.json");
fs.writeFileSync(out, JSON.stringify(exam, null, 2), "utf8");
console.log("Wrote", out);
console.log("Questions:", exam.exam.questions.length);
console.log("Answer distribution:", dist);
