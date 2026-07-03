# 🧠 Reasoning — Box/Floor Puzzles | Day 10

> Box/Floor Puzzle = items ya log **stack** (boxes) ya **floors** (building) me arrange hote hain.
> Clues: "A is above B", "C is on 3rd floor", "D is immediately below E".
> Linear seating jaisa hi — bas **vertical** direction (up/down).

---

## 1. Floor vs Box — Same Logic

| Type | Direction |
|---|---|
| **Floor puzzle** | Ground floor = usually 1 (ya clue ke hisaab se). Up = higher floor number. |
| **Box puzzle** | Bottom box = 1 (ya top = 1 — clue padho). "Above" = upar wala. |

> **Important:** Exam me likha hota hai "floor 1 is ground" ya "box 1 is bottom". Pehle yeh fix karo.

---

## 2. Key Words

| Clue | Matlab |
|---|---|
| **Above / Higher** | Upar wala (higher number agar bottom=1) |
| **Below / Lower** | Neeche wala |
| **Immediately above** | Turant upar (ek hi gap nahi) |
| **Immediately below** | Turant neeche |
| **Top floor / Bottom floor** | Sabse upar / sabse neeche |
| **Not on top/bottom** | Beech ki floors |

---

## 3. Solved Example 1 — Floor (5 floors, bottom = 1)

**Persons:** A, B, C, D, E — 5 floors, floor 1 = ground (bottom).

**Clues:**
1. A lives on floor 2.
2. B lives immediately above A.
3. C lives on the top floor.
4. D is not on floor 1 or 5.
5. E lives below D.

**Solution:**
```
Floor 5 (top): C
Floor 4: ?
Floor 3: ?
Floor 2: A
Floor 1 (ground): ?
```
- A = floor 2. B immediately above A → B = floor 3.
- C = top = floor 5.
- D not on 1 or 5 → D at 2,3,4. A,B at 2,3 → D = floor 4.
- E below D → E = floor 1 (only below 4).

**Final:** E(1) — A(2) — B(3) — D(4) — C(5) ✅

---

## 4. Solved Example 2 — Box (4 boxes, bottom = 1)

**Items:** P, Q, R, S — 4 boxes stacked, box 1 = bottom.

**Clues:**
1. P is in box 2.
2. Q is immediately above P.
3. S is in the top box.
4. R is in the bottom box.

**Solution:**
```
Box 4 (top): S
Box 3: Q
Box 2: P
Box 1 (bottom): R
```
- P = box 2. Q immediately above P → Q = box 3.
- S = top = box 4. R = bottom = box 1.

**Final:** R(1) — P(2) — Q(3) — S(4) ✅

---

## 5. Solve Karne Ka Tarika

1. **Bottom/top numbering** clue se fix karo.
2. **Exact position** clues pehle (floor 2, top floor).
3. **Immediately above/below** lagao.
4. **Not on top/bottom** baad me.
5. Jo bacha fill karo.

---

## 6. ✍️ Practice Puzzle 1 — Floor

**A, B, C, D, E** — 5 floors. Floor 1 = ground (bottom).

1. C lives on floor 3.
2. A lives immediately above C.
3. E lives on the top floor.
4. B lives below D.
5. D is not on floor 1.

**Questions:**
- (a) Who lives on floor 1?
- (b) Who lives immediately below A?
- (c) Floor of B?

---

## 7. ✍️ Practice Puzzle 2 — Box

**P, Q, R, S** — 4 boxes. Box 1 = bottom.

1. Q is in box 3.
2. P is immediately below Q.
3. S is in the top box.
4. R is not in box 1.

**Questions:**
- (a) Which box has P?
- (b) Which box has R?
- (c) What is in box 2?

---

## ✅ Answers

**Puzzle 1:**
- C = floor 3. A immediately above C → A = floor 4.
- E = top = floor 5.
- Floors left: 1, 2 for B, D. D not floor 1 → D = floor 2, B = floor 1. B below D ✅.
- **Final:** B(1) — D(2) — C(3) — A(4) — E(5)
- (a) Floor 1 = **B**
- (b) Below A (floor 4) = **C** (floor 3)
- (c) B at floor **1**

**Puzzle 2:**
- Q = box 3. P immediately below Q → P = box 2.
- S = top = box 4. R not box 1 → R = box 1? Only box 1 left. Box 1 = R.
- **Final:** R(1) — P(2) — Q(3) — S(4)
- (a) P in box **2**
- (b) R in box **1**
- (c) Box 2 = **P**

---

> **Aaj ka takeaway:** Floor/Box = vertical linear seating. Bottom/top numbering pehle fix karo. "Immediately above" = ek hi step upar. Roz 1 puzzle practice karo.
