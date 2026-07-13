# 🧠 Reasoning — Input-Output | Day 20

> Input-Output = ek line (words/numbers) di hoti hai. Har step me rule lagta hai.
> Last step / next step / intermediate step poocha jaata hai. Pattern pakdo → seconds me answer.

---

## 1. Common Pattern Types

| Type | Example rule |
|---|---|
| **Arrangement** | Words alphabetical / reverse alpha |
| **Number sort** | Ascending / descending |
| **Shift** | First letter +1, last letter −1 |
| **Mixed** | Words + numbers alag rules |
| **Position based** | Leftmost/rightmost swap |

---

## 2. Solve Karne Ka Tarika

1. **Input** aur **Step I** compare karo — kya change hua?
2. Step I aur Step II compare — same rule lag raha?
3. Rule confirm karo.
4. Question me jo step poocha hai, uspar rule apply karo.
5. Diagram/table me steps likho — confuse mat ho.

---

## 3. Solved Example 1 (Alphabetical sort)

**Input:** mango apple zebra banana orange

| Step | Arrangement |
|---|---|
| Input | mango apple zebra banana orange |
| Step I | apple mango zebra banana orange |
| Step II | apple banana mango zebra orange |
| Step III | apple banana mango orange zebra |

**Rule:** Har step me ek word alphabetical order me left pe arrange.

**Q:** Step III me 4th word? → **orange** ✅

---

## 4. Solved Example 2 (Numbers ascending)

**Input:** 45 12 78 23 56

| Step | Arrangement |
|---|---|
| Input | 45 12 78 23 56 |
| Step I | 12 45 78 23 56 |
| Step II | 12 23 45 78 56 |
| Step III | 12 23 45 56 78 |

**Rule:** Har step me smallest remaining number left pe.

**Q:** Kitne steps me fully sorted? → **3** (Step III) ✅

---

## 5. Solved Example 3 (Mixed — word + number)

**Input:** 32 cat 15 dog 28 bat

**Rule (common pattern):**
- Odd steps: smallest number left pe arrange
- Even steps: word alphabetical left pe arrange

| Step | Result |
|---|---|
| Input | 32 cat 15 dog 28 bat |
| Step I | 15 32 cat dog 28 bat |
| Step II | 15 bat 32 cat dog 28 |
| Step III | 15 bat 28 32 cat dog |
| Step IV | 15 bat 28 cat 32 dog |

**Q:** Step IV me 3rd element? → **28** ✅

---

## 6. ✍️ Practice Questions

**Machine Input:**
```
Input: 50 red 20 blue 35 green
```
**Rule:** Har step me: pehle smallest number left, fir next step me remaining words alphabetical left.

1. Step I kya hoga? (smallest number left pe)
2. Step II me leftmost word/number?
3. Fully arranged hone me kitne steps?

**Another Input:**
```
Input: mango kiwi apple grape
```
**Rule:** Alphabetical sort, ek word per step (left se).

4. Step I?
5. Step II me 3rd word?
6. Final step me last word?

**Quick:**
7. Numbers: 9 3 7 1 5 — ascending ek number per step. Step II?
8. Words: zebra apple mango — alpha sort. Step I?

---

## ✅ Answers

1. **20 50 red blue 35 green** (20 leftmost)
2. After Step I (20 leftmost), Step II: remaining words alpha — blue leftmost among words → **20 blue 50 red 35 green** — leftmost = **20**
3. Numbers 3 (20,35,50) + words 3 (blue,green,red) = **6 steps** typically (alternate). Simplified: if only numbers first then words: numbers 3 steps + words 3 = 6.
   - *Simpler answer for this practice:* Step I=20 left; then 35; then 50; then blue; green; red → **6 steps**
4. **apple mango kiwi grape**
5. Step II: apple grape mango kiwi → 3rd = **mango**
6. Final: apple grape kiwi mango → last = **mango**
7. Step I: 1 9 3 7 5; Step II: 1 3 9 7 5 → **1 3 9 7 5**
8. **apple zebra mango**

---

> **Aaj ka takeaway:** Input-Output me pehle Step I vs Input compare karo. Rule ek baar pakda toh poora set 1-2 min me. Mixed (word+number) me alternate rule common hai.
