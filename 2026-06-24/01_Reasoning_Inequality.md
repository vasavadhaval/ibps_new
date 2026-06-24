# 🔴 Reasoning — Inequality (असमानता) | Day 1

> Easy + guaranteed marks topic. Aaj ise poora samajh lo.

---

## 1. Symbols ka matlab

| Symbol | Matlab | Example |
|---|---|---|
| `A > B` | A, B se **bada** | 5 > 3 |
| `A < B` | A, B se **chhota** | 3 < 5 |
| `A ≥ B` | A, B se bada **ya barabar** | A kam se kam B jitna |
| `A ≤ B` | A, B se chhota **ya barabar** | A zyada se zyada B jitna |
| `A = B` | dono **barabar** | — |

---

## 2. Combine karne ka RULE (sabse important)

Do inequalities tabhi combine hoti hain jab **common element** ho aur **dono symbol same direction** me ho.

### ✅ Valid (relation nikal sakte hain):
- `A > B` aur `B > C` → **A > C** ✅
- `A > B` aur `B = C` → **A > C** ✅
- `A ≥ B` aur `B > C` → **A > C** ✅ (jab ek bhi `>` ho toh result `>`)

### ❌ Invalid (relation NAHI nikal sakte):
- `A > B` aur `B < C` → A aur C ka koi relation **nahi** ❌ (dono arrow B ki taraf aa rahe hain)
- `A < B` aur `B > C` → A aur C ka relation **nahi** ❌

> **Yaad rakho:** Arrow ek hi taraf "behte" hue hone chahiye. Beech me ulta hua toh relation toot jaata hai.

---

## 3. Result ka symbol kaise nikle (Priority Rule)

Jab combine karo, result ka sign yeh hota hai:
- Agar dono me `≥` / `=` hi ho → result `≥` (ya `=`).
- Agar beech me ek bhi **strict `>`** ho → result **strict `>`**.

Example:
- `A ≥ B ≥ C` → `A ≥ C` (dono soft, isliye result soft)
- `A ≥ B > C` → `A > C` (ek strict aa gaya, result strict)

---

## 4. Either-Or Case (thoda tricky, dhyaan se)

Yeh tab aata hai jab:
1. Dono conclusions **individually false** hon, **AUR**
2. Dono ka subject-predicate **same** ho, aur milke teeno possibility (>, <, =) cover karein.

**Example:**
- Statement: `A ≥ B` (yaani A bada ya barabar)
- Conclusions: (I) `A > B`   (II) `A = B`
- Akele me na (I) pakka, na (II) pakka — **lekin** dono milke poora `≥` cover karte hain.
- ✅ Answer: **Either I or II true**.

> Trick: Jab do conclusions me ek `>` aur doosra `=` (ya `<` aur `=`) ho **same do variables** par → Either-Or check karo.

---

## 5. Solved Examples (samjho)

**Example 1:**
Statement: `P > Q ≥ R > S`
Conclusions: (I) `P > S`   (II) `Q > S`
- `P > Q ≥ R > S` → P se S tak arrow ek hi taraf → **P > S** ✅
- `Q ≥ R > S` → **Q > S** ✅
- **Answer: Dono I aur II true.**

**Example 2:**
Statement: `A ≤ B = C > D`
Conclusion: (I) `A < D`   (II) `C > A`
- (I) `A ≤ B = C > D`: A aur D ke beech B=C par direction badal gaya (≤ fir >) → relation **nahi** → I false ❌
- (II) `A ≤ B = C` → `A ≤ C` yaani `C ≥ A`. "C > A" pakka nahi (barabar bhi ho sakta) → II false ❌
- **Answer: Na I, na II true (Neither).**

**Example 3 (Either-Or):**
Statement: `X ≤ Y`
Conclusion: (I) `X < Y`   (II) `X = Y`
- `≤` ka matlab ya toh chhota ya barabar → koi ek pakka nahi, par milke poora cover.
- **Answer: Either I or II.** ✅

---

## 6. ✍️ Practice Questions (khud solve karo)

Har question me batao kaun se conclusion **true** hain.

1. Statement: `M > N > O = P`
   (I) `M > P`   (II) `N > P`

2. Statement: `A < B ≤ C < D`
   (I) `A < D`   (II) `D > B`

3. Statement: `P ≥ Q = R > S`
   (I) `P > S`   (II) `P ≥ R`

4. Statement: `K > L < M = N`
   (I) `K > N`   (II) `M > K`

5. Statement: `E = F ≥ G > H`
   (I) `E > H`   (II) `F ≥ H`

6. Statement: `R ≤ S`
   (I) `R < S`   (II) `R = S`

7. Statement: `A > B = C ≥ D`
   (I) `A > D`   (II) `B ≥ D`

8. Statement: `P < Q < R < S`
   (I) `S > P`   (II) `P > R`

9. Statement: `X ≥ Y > Z = W`
   (I) `X > W`   (II) `Y > W`

10. Statement: `L = M ≤ N < O`
    (I) `L < O`   (II) `O > M`

---

## ✅ Answers (solve karne ke BAAD dekho)

1. **Dono true** — M>N>O=P, so M>P aur N>P dono ✅
2. **Dono true** — A<D (sab same direction); D>B ✅
3. **Dono true** — P>S ✅; P≥R (P≥Q=R) ✅
4. **Na koi true (Neither)** — K aur M/N ka relation nahi (L par direction badli)
5. **Dono true** — E>H (E=F≥G>H) ✅; F≥H (actually F>H bhi, isliye F≥H true) ✅
6. **Either I or II** — `≤` se ya chhota ya barabar
7. **Dono true** — A>D ✅; B≥D (B=C≥D) ✅
8. **Sirf I true** — S>P ✅; P>R false (P sabse chhota hai)
9. **Dono true** — X>W (X≥Y>Z=W) ✅; Y>W ✅
10. **Dono true** — L<O (L=M≤N<O) ✅; O>M ✅

---

> **Aaj ka takeaway:** Arrow ek hi direction = relation nikalta hai. Direction badli = relation nahi. `≤`/`≥` akele ho toh Either-Or socho.
