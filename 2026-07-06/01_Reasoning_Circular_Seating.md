# 🧠 Reasoning — Circular Seating Arrangement | Day 13

> Circular Seating = log **circle** me baithe hain. Linear jaisa hi — bas shape gol hai.
> **Facing direction** bahut important: centre ki taraf ya bahar ki taraf.

---

## 1. Two Main Types

| Type | Matlab |
|---|---|
| **Facing centre (inside)** | Sab andar dekh rahe hain — left = clockwise, right = anticlockwise |
| **Facing outside** | Sab bahar dekh rahe hain — left = anticlockwise, right = clockwise |

> **Trap:** "A sits 2nd to the right of B" — B ka facing direction se decide hoga left/right.

---

## 2. Basic Rules

1. Circle me **position number** likho (1, 2, 3... clockwise).
2. **Fixed clue pehle** — "A sits opposite B", "A at 3 o'clock position".
3. **Opposite** in even persons (4,6,8): half circle = opposite. 6 persons → 3 positions apart = opposite.
4. **Immediate left/right** = turant bagal wala (clockwise/anticlockwise).
5. Mixed facing (kuch andar, kuch bahar) — exam me advanced; aaj sab same direction assume karo.

---

## 3. Opposite Position (even number of persons)

| Persons | Opposite = kitne positions door |
|---|---|
| 4 | 2 positions (across) |
| 6 | 3 positions |
| 8 | 4 positions |

Formula: **n persons → opposite = n/2 positions apart** (clockwise ya anticlockwise same).

---

## 4. Solved Example (4 persons — facing centre)

**A, B, C, D** — circle, all face centre. Positions 1→2→3→4 clockwise.

1. A and C are opposite.
2. B sits immediate right of A.
3. D sits between A and C.

**Solution:**
- A at 1, C at 3 (opposite in 4-person circle).
- B immediate right of A (facing centre → right = anticlockwise) → B at 4.
- D between A and C (clockwise from A) → D at 2.

**Final (clockwise): A(1) — D(2) — C(3) — B(4)** ✅

---

## 5. Solve Karne Ka Tarika

1. Circle draw karo, positions number karo.
2. Facing direction likho (centre/outside).
3. Fixed clues lagao (opposite, exact position).
4. Left/right clues — facing ke hisaab se.
5. Remaining fill karo.

---

## 6. ✍️ Practice Puzzle 1

**A, B, C, D** — 4 persons, circle, all face **centre**. Clockwise positions 1-4.

1. A and C are opposite.
2. B sits immediate right of A.
3. D is not adjacent to B.

**Questions:**
- (a) Who sits opposite B?
- (b) Who is between A and C (clockwise from A)?
- (c) Position of D?

---

## 7. ✍️ Practice Puzzle 2

**P, Q, R, S, T, U** — 6 persons, circle, face centre.

1. P sits opposite R.
2. Q sits 2nd to the right of P.
3. S sits immediate left of R.
4. T is not adjacent to P.

**Questions:**
- (a) Who sits opposite Q?
- (b) Who is immediate right of R?
- (c) Position of U (if P=1 clockwise)?

---

## ✅ Answers

**Puzzle 1:**
- A at 1, C at 3. B immediate right of A → B at 4. D at 2 (between A and C). D not adjacent B: D(2) adj B(4)? pos 2 adj 4 — in 4-circle, 2 adj 1,3; 4 adj 1,3. D(2) not adj B(4) ✓.
- **Final clockwise: A(1) — D(2) — C(3) — B(4)**
- (a) Opposite B(4) = **D(2)**
- (b) Between A and C clockwise = **D**
- (c) D at position **2**

**Puzzle 2:**
- P at 1, R opposite = 4. Q 2nd right of P (anticlockwise: 1→6→5, so 2nd right = 5? Facing centre right=anticlockwise: 1st right=4, 2nd right=3? Clockwise from 1: 2,3. "2nd to the right" often means 2 steps right = pos 3 = Q.
- R at 4. S immediate left of R (clockwise) = 5 = S.
- T not adjacent P: P at 1, adjacent 2,6. T at 2 or 6. U bacha.
- P(1), Q(3), R(4), S(5), T(2), U(6) — check Q 2nd right of P: from 1 anticlockwise 4,3 — 2nd = 3 = Q ✓. S left of R: R(4) clockwise left = 5 = S ✓. T(2) adj P(1) ✓. U(6) adj P(1) ✓.
- (a) Q at 3, opposite = **6 = U**
- (b) Immediate right of R (anticlockwise) = **3 = Q**
- (c) U at position **6**

---

> **Aaj ka takeaway:** Circular = linear + circle. Opposite = n/2 apart. Facing centre → right = anticlockwise. Diagram mandatory hai.
