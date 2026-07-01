# 🧠 Reasoning — Blood Relation | Day 8

> Blood Relation = family members ke beech ka rishta poocha jaata hai.
> "A is the father of B. B is the mother of C. How is A related to C?" — aise questions.
> **Diagram/family tree** banao — bina iske galat ho jaata hai.

---

## 1. Basic Terms (yaad rakho)

| Term | Matlab |
|---|---|
| Father / Mother | Parent |
| Son / Daughter | Child |
| Brother / Sister | Siblings (same parents) |
| Uncle | Father/Mother ka brother |
| Aunt | Father/Mother ki sister |
| Nephew | Brother/Sister ka son |
| Niece | Brother/Sister ki daughter |
| Cousin | Uncle/Aunt ka child |
| Grandfather / Grandmother | Parent ka parent |
| Grandson / Granddaughter | Child ka child |
| Father-in-law / Mother-in-law | Spouse ka parent |
| Brother-in-law / Sister-in-law | Spouse ka sibling ya sibling ka spouse |

---

## 2. Gender Clues (important)

- "He / His / Him" → male
- "She / Her" → female
- Agar gender clear nahi → answer me "brother or sister" likh sakte ho (exam me usually clear hota hai)

> **Trap:** "A is the only son of B" → A = male, aur B ke aur koi son nahi. "A is the son of B" → sirf A male hai, B ke aur bachche ho sakte hain.

---

## 3. Solved Examples

**Example 1:**
- A is the father of B. B is the sister of C. How is A related to C?
- Diagram: A (father) → B, C (siblings).
- A is **father** of C ✅

**Example 2:**
- P is the mother of Q. Q is the father of R. How is P related to R?
- P (mother) → Q (father) → R.
- P is **grandmother** of R ✅

**Example 3:**
- X is the brother of Y. Y is the mother of Z. How is X related to Z?
- X and Y siblings. Y = mother of Z.
- X is **uncle** (maternal uncle) of Z ✅

**Example 4:**
- M is the only daughter of N. N is the father of O. How is M related to O?
- N has daughter M and (implied) son/daughter O. "Only daughter" → O male hoga (son).
- M is **sister** of O ✅

**Example 5 (coded):**
- "A + B" means A is father of B. "A − B" means A is sister of B.
- P + Q − R. P ka R se relation?
- P father of Q, Q sister of R → P father of R → **father** ✅

---

## 4. Solve Karne Ka Tarika

1. Statement ko **generation-wise** likho (grandparents → parents → children).
2. Male/female symbol lagao (♂ / ♀ ya M/F).
3. "Only son / only daughter" — extra info hai, dhyan se padho.
4. Reverse question: "How is X related to Y?" — tree me X se Y tak jao.
5. Coded relation me pehle symbol decode karo, fir tree banao.

---

## 5. ✍️ Practice Questions

1. A is the father of B. B is the mother of C. How is A related to C?
2. P is the sister of Q. Q is the father of R. How is P related to R?
3. X is the only son of Y. Y is the mother of Z. How is X related to Z?
4. M is the brother of N. N is the daughter of O. How is M related to O?
5. A is the wife of B. B is the father of C. How is A related to C?
6. P is the father of Q. Q is the sister of R. R is the mother of S. How is P related to S?
7. X is the mother of Y. Y is the brother of Z. How is X related to Z?
8. A is the son of B. C is the daughter of B. How is A related to C?
9. P is the grandfather of Q. Q is the son of R. How is P related to R?
10. M is the only daughter of N. N is the father of O. O is the son of N. How is M related to O?

---

## ✅ Answers (solve karne ke BAAD)

1. A → B → C. A is **grandfather** of C.
2. P sister of Q, Q father of R → P is **aunt** of R.
3. X only son of Y, Y mother of Z → X and Z siblings → X is **brother** of Z.
4. M brother of N, N daughter of O → M is **son** of O.
5. A wife of B, B father of C → A is **mother** of C.
6. P → Q, R (siblings). R mother of S → P is **grandfather** of S.
7. X mother of Y, Y brother of Z → X is **mother** of Z.
8. A and C both children of B → A is **brother** of C.
9. P grandfather of Q, Q son of R → P is **father** of R.
10. M only daughter, O son → M is **sister** of O.

---

> **Aaj ka takeaway:** Blood Relation me diagram mandatory hai. "Only son/daughter" aur gender clues dhyan se padho. Generation-wise likho — upar se neeche family tree banao.
