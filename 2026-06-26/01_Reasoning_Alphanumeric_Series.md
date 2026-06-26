# 🧠 Reasoning — Alphanumeric Series | Day 3

> Alphanumeric Series = letters, numbers, aur symbols ki ek mili-juli line di hoti hai.
> Aapse poocha jaata hai: kitne number/letter aise hain jinke aage-peeche koi condition ho, ya "left/right se nth element".
> Prelims me **easy + fast** — bas dhyaan se ginna hota hai.

---

## 1. Question ke Common Types

| Type | Kya poochte hain |
|---|---|
| **Counting** | "Kitne numbers aise hain jinke turant baad ek letter ho?" |
| **Nth from left/right** | "Left se 5th element kaun?" |
| **Pair from left/right** | "Right se 4th ke left me 2nd kya hai?" |
| **Immediately preceded/followed** | "Kitne symbols aise jinke pehle number aur baad letter ho?" |

---

## 2. Sabse Important Rules

1. **"Left se nth" = seedha gino** (1, 2, 3... left se).
2. **"Right se nth" = ulta gino** (1, 2, 3... right se).
3. **Total elements = n.** "Right se rth" = left se **(n − r + 1)th**.
4. **"Preceded by" = pehle (left side)**, **"Followed by" = baad me (right side)**.
5. "**X ke left me Yth**" → X se Y kadam **left** chalo. "**X ke right me Yth**" → X se Y kadam **right**.

> **Trick (combined):** "Right se 5th ke left me 2nd" = right se (5+2) = **right se 7th**. (left me jao toh number jodo)

---

## 3. Solved Example

**Series:**
```
P  3  R  @  7  K  $  9  M  2  #  T  5  W  &  Q
1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16   (left se position)
```

**Q1. Left se 6th element?** → gino: P(1) 3(2) R(3) @(4) 7(5) **K(6)** → **K** ✅

**Q2. Right se 4th element?** → Total 16. Right se 4th = left se (16−4+1)=13th = **5** ✅

**Q3. Kitne numbers aise jinke turant baad ek letter ho?**
- 3→R ✅, 7→K ✅, 9→M ✅, 2→#(symbol ❌), 5→W ✅ → total **4** ✅

**Q4. "Right se 5th ke left me 2nd"?**
- Right se 5th = right se (5)... left me 2 = right se 7th = left se (16−7+1)=10th = **2** ✅

---

## 4. Solve karne ka Tarika (steps)

1. Pehle pure series ke **upar position number** likho (left se 1,2,3...).
2. "Right se" aaye toh **(n − r + 1)** formula use karo.
3. "Preceded = pehle", "Followed = baad" — confuse mat ho.
4. Counting wale me **ek-ek karke ✓/✗** lagao, jaldbaazi me galti hoti hai.

---

## 5. ✍️ Practice Questions

**Series:**
```
B  5  #  K  8  @  M  2  R  $  9  T  W  4  &  L  7  P
```

1. Left se 7th element?
2. Right se 3rd element?
3. Total kitne symbols hain (#, @, $, &)?
4. Kitne numbers aise jinke turant baad ek letter ho?
5. Right se 5th element?
6. Left se 10th aur right se 6th — kaun bada position (left se) hai?
7. "K" ke right me 3rd element?
8. Kitne letters aise jinke turant pehle ek number ho?
9. Right se 4th ke left me 2nd?
10. Left se 12th element?

---

## ✅ Answers (solve karne ke BAAD)

Positions (left se):
```
B(1) 5(2) #(3) K(4) 8(5) @(6) M(7) 2(8) R(9) $(10) 9(11) T(12) W(13) 4(14) &(15) L(16) 7(17) P(18)
```
Total = 18.

1. Left se 7th = **M**
2. Right se 3rd = left se (18−3+1)=16th = **L**
3. Symbols: #, @, $, & = **4**
4. Number→letter: 8→@(❌), 2→R(✅), 9→T(✅), 4→&(❌), 7→P(✅) → **3**
5. Right se 5th = left se (18−5+1)=14th = **4**
6. Right se 6th = left se 13th. Left se 10th vs 13th → **13th (right se 6th) bada** position number hai
7. K(pos4) ke right me 3rd = pos 7 = **M**
8. Number ke turant baad letter waale already 3; "turant pehle number" waale letters: K(pehle #❌), M(pehle @❌), R(pehle 2✅), T(pehle 9✅), P(pehle 7✅) → **3**
9. Right se 4th = left se 15th(&); left me 2nd = pos 13 = **W**
10. Left se 12th = **T**

---

> **Aaj ka takeaway:** Pehle position number likho, "right se" pe **(n−r+1)** lagao, aur counting me ek-ek tick karo. Yeh topic seconds me 2-3 marks deta hai — bas dhyaan se gino.
