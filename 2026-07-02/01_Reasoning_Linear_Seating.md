# 🧠 Reasoning — Linear Seating Arrangement | Day 9

> Linear Seating = log **ek line** me baithe hain (left to right ya north-facing row).
> Clues diye hote hain — aapko kaun kahan baitha hai, ya order nikalna hota hai.
> **Week 3 ka sabse important topic** — puzzles me sabse zyada marks yahi se aate hain.

---

## 1. Types

| Type | Matlab |
|---|---|
| **Single row** | Sab ek hi line me, same direction face karte hain |
| **Two rows** | Do parallel rows, face each other (north-south) |
| **With conditions** | Age, profession, city — extra info ke saath |

Aaj sirf **single row** — baaki baad me.

---

## 2. Basic Rules

1. **Left / Right** = diagram ke hisaab se (tumhari taraf se left/right).
2. **"A sits 2nd from left"** = position 2 (left se count).
3. **"A sits between B and C"** = B — A — C (kisi order me).
4. **"A sits immediate left of B"** = A ke turant right me B (ya B ke left me A).
5. **"Not at any end"** = position 2, 3, 4... (last nahi).
6. **Fixed clue pehle** — ends, middle, "exactly 3rd" — yahan se shuru karo.

---

## 3. Solved Example 1 (5 persons, one row)

**Clues:**
- A, B, C, D, E — 5 chairs left to right.
- A sits at one of the ends.
- B sits 2nd from the left.
- C is not at any end.
- D sits immediate right of B.

**Step-by-step:**
```
Pos:  1    2    3    4    5
      ?    B    ?    ?    ?
```
- B = 2nd from left → position 2.
- D immediate right of B → D at position 3.
```
Pos:  1    2    3    4    5
      ?    B    D    ?    ?
```
- A at one end → A at 1 or 5. C not at end → C at 2,3,4. B and D already 2,3 → C at 4.
```
Pos:  1    2    3    4    5
      ?    B    D    C    ?
```
- A at end → A at 1 or 5. E bacha → E at 1, A at 5 (ya ulta). A at end ✅ → A=5, E=1.

**Final:** E — B — D — C — A (left to right) ✅

---

## 4. Solved Example 2 (4 persons)

**Clues:**
- P, Q, R, S — 4 chairs.
- P sits at the left end.
- Q sits 2nd from the right.
- R is not adjacent to P.

**Solution:**
```
Pos:  1    2    3    4
      P    ?    ?    ?
```
- P = left end → pos 1.
- Q = 2nd from right → pos 3 (right se 2nd = left se 3rd in 4 chairs).
```
Pos:  1    2    3    4
      P    ?    Q    ?
```
- R not adjacent to P → R not at pos 2. R at 4, S at 2.
```
Pos:  1    2    3    4
      P    S    Q    R
```

**Final:** P — S — Q — R ✅

---

## 5. Solve Karne Ka Tarika

1. Chairs/positions number karo (1, 2, 3...).
2. **Sabse fixed clue** pehle lagao (ends, exact position).
3. "Immediate left/right" clues lagao.
4. "Between", "not at end" baad me.
5. Jo bacha usse fill karo — agar do options hon toh next clue se decide.

---

## 6. ✍️ Practice Puzzle 1

**A, B, C, D, E** — 5 persons, one row left to right.

1. A sits at the left end.
2. C sits at the right end.
3. B sits 2nd from the left.
4. D sits immediate right of B.

**Questions:**
- (a) Who sits at position 3?
- (b) Who sits between B and C?
- (c) Who is at the right end?

---

## 7. ✍️ Practice Puzzle 2

**P, Q, R, S** — 4 chairs left to right.

1. P sits at the left end.
2. Q sits 2nd from the right.
3. R sits immediate left of Q.

**Questions:**
- (a) Who sits at the right end?
- (b) Who sits between P and Q?
- (c) Position of S?

---

## ✅ Answers

**Puzzle 1:**
- A left end → pos 1 = A. C right end → pos 5 = C.
- B 2nd from left → pos 2 = B. D immediate right of B → pos 3 = D. Pos 4 = E.
- **Final: A — B — D — E — C**
- (a) Position 3 = **D**
- (b) Between B (pos 2) and C (pos 5) = **D and E** (pos 3 and 4)
- (c) Right end = **C**

**Puzzle 2:**
- P at left end → pos 1 = P.
- Q 2nd from right (4 chairs) → pos 3 = Q.
- R immediate left of Q → pos 2 = R. Pos 4 = S.
- **Final: P — R — Q — S**
- (a) Right end = **S**
- (b) Between P and Q = **R**
- (c) S at position **4**

---

> **Aaj ka takeaway:** Linear seating me position number likhna mandatory hai. Fixed clues (ends, exact position) se shuru karo. Week 3 me roz 1-2 puzzles practice karo — speed aur accuracy dono badhenge.
