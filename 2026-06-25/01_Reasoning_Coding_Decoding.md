# 🧠 Reasoning — Coding-Decoding | Day 2

> Coding-Decoding = ek word/number ko kisi rule ke hisaab se "code" me badalna ya wapas "decode" karna.
> Prelims me yeh **scoring** topic hai — rule pakad liya toh seconds me answer.

---

## 0. Pehle yeh yaad karo — Letter Positions (BAHUT zaroori)

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |13 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|14 |15 |16 |17 |18 |19 |20 |21 |22 |23 |24 |25 |26 |

> **Reverse (peeche se):** A=26, B=25 ... Z=1. (Trick: forward + reverse = 27. Jaise C=3, reverse=24, 3+24=27.)
> **EJOTY trick:** 5, 10, 15, 20, 25 — beech ke positions jaldi nikalne ke liye.

---

## 1. Coding-Decoding ke Main Types

| Type | Idea |
|---|---|
| **Letter Shifting** | Har letter ko +1/+2/−1 aage-peeche shift karna |
| **Letter-to-Number** | Letter ko uski position (A=1...) se badalna |
| **Reverse Coding** | Word ko ulta likhna |
| **Substitution** | Pura word kisi dusre word/symbol se replace |
| **New-pattern (Conditional)** | Symbol + number rules (advanced — abhi basic karo) |

---

## 2. Solved Examples

**Example 1 (Letter Shifting +1):** Agar `CAT` ka code `DBU` hai, toh `DOG` ka code?
- C→D, A→B, T→U (har letter +1).
- D→E, O→P, G→H = **EPH** ✅

**Example 2 (Letter Shifting −1):** Agar `MANGO` = `LZMFN`, toh pattern?
- M→L, A→Z, N→M ... (har letter −1) ✅

**Example 3 (Letter-to-Number):** `BAD` ko number coding me?
- B=2, A=1, D=4 → **2 1 4** ✅

**Example 4 (Reverse):** `INDIA` ka reverse code?
- Ulta likho → **AIDNI** ✅

**Example 5 (Sum of positions):** `CAB` = C+A+B = 3+1+2 = **6** ✅

---

## 3. Solve karne ka Tarika (steps)

1. Code aur original ko **upar-niche** likho, letter ke saamne letter.
2. Position ka **difference** nikalo (+1? −2? reverse?).
3. Ek hi rule pure word par check karo.
4. Rule pakad ke naye word par apply karo.

> **Tip:** Pehle hamesha **shift (+/−)** check karo, fir **reverse**, fir **position-sum**.

---

## 4. ✍️ Practice Questions

1. Agar `SUN = TVO`, toh `MOON = ?`
2. Agar `RED = IVW` (reverse coding), toh `BLUE = ?`
3. `DOG` ka number code (A=1...) = ?
4. Agar `PEN = 35` (positions ka sum), check: P+E+N = ?
5. Agar `CAT = DBU` (+1), toh `BAT = ?`
6. `LION` ko reverse likho.
7. Agar `BOOK = APPL`? (har letter −1 check karo, sahi/galat)
8. `FAN` me letters ke positions = ?
9. Agar `GO = HP` (+1), toh `NO = ?`
10. `ACE` ke positions ka sum = ?

---

## ✅ Answers (solve karne ke BAAD dekho)

1. M→N, O→P, O→P, N→O = **NPPO** (har letter +1)
2. Reverse of BLUE = **EULB**
3. D=4, O=15, G=7 → **4 15 7**
4. P=16, E=5, N=14 → 16+5+14 = **35** ✅
5. B→C, A→B, T→U = **CBU**
6. Reverse of LION = **NOIL**
7. B→A, O→N, O→N, K→J = APNJ (diya gaya APPL **galat** hai)
8. F=6, A=1, N=14 → **6 1 14**
9. N→O, O→P = **OP**
10. A=1, C=3, E=5 → 1+3+5 = **9**

---

> **Aaj ka takeaway:** Letter positions (A=1...Z=26) zubani yaad rakho — Coding-Decoding ka 80% kaam isi se ho jaata hai. Pehle shift, fir reverse, fir sum check karo.
