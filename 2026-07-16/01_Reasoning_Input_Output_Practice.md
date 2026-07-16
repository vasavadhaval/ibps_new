# 🧠 Reasoning — Input-Output Practice | Day 23

> Input-Output scoring topic hai. Aaj **2 full sets** practice — step-by-step likho.

---

## 1. Quick Rules (revision)

1. Input vs Step I compare → rule pakdo.
2. Har step me same rule lag raha?
3. Words alphabetical / numbers ascending-descending — common.
4. Mixed: odd steps number, even steps word (ya ulta).

---

## 2. ✍️ Set 1 — Numbers only (target: 6 min)

**Input:** 78 45 23 91 12 56

**Rule:** Har step me **smallest number left** shift hota hai (baaki order same).

| Step | Write here |
|---|---|
| Input | 78 45 23 91 12 56 |
| Step I | ? |
| Step II | ? |
| Step III | ? |
| Step IV | ? |
| Step V | ? |
| Step VI | ? |

**Questions:**
1. Step III kya hoga?
2. Fully sorted kitne steps me?
3. Step I me rightmost number?

---

## 3. ✍️ Set 2 — Words only (target: 6 min)

**Input:** tiger lion zebra apple monkey bear

**Rule:** Har step me **alphabetically first word left** shift (baaki same order).

**Questions:**
4. Step I?
5. Step III me 4th word?
6. Last step me first word?

---

## 4. ✍️ Set 3 — Mixed (target: 8 min)

**Input:** 35 red 12 blue 28 green 8 yellow

**Rule:**
- **Odd steps (I, III, V...):** smallest number left
- **Even steps (II, IV, VI...):** alphabetically first word left

**Questions:**
7. Step I?
8. Step II?
9. Step IV me 3rd element?
10. Step VI me leftmost element?

---

## ✅ Answers

**Set 1:**
- Step I: **12** 78 45 23 91 56
- Step II: **12 23** 78 45 91 56
- Step III: **12 23 45** 78 91 56
- Step IV: **12 23 45 56** 78 91
- Step V: **12 23 45 56 78** 91
- Step VI: **12 23 45 56 78 91** (sorted)

1. Step III = **12 23 45 78 91 56**
2. **6 steps** (Step VI fully sorted)
3. Step I rightmost = **56**

**Set 2:**
4. Step I: **apple** tiger lion zebra monkey bear
5. Step III: apple bear lion tiger zebra monkey → 4th = **tiger**
6. Last: apple bear lion monkey tiger **zebra** → first = **apple**

**Set 3:**
7. Step I (number): **8** 35 red 12 blue 28 green yellow
8. Step II (word): 8 **blue** 35 red 12 28 green yellow
9. Step IV (word): 8 blue 12 green 28 red 35 yellow → 3rd = **28**
10. Step VI (word): 8 blue 12 green 28 red 35 yellow → leftmost = **8**

---

> **Aaj ka takeaway:** Input-Output me table banao. Number sort + word sort = sabse common. Mixed me odd/even step rule dhyan se.
