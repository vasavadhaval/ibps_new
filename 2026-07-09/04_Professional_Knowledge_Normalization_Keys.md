# 🖥️ Professional Knowledge — Normalization + Keys | Day 16 (PK)

> **PK:** 25 Q, 50 marks, 20 min. Aaj: **Normalization (1NF/2NF/3NF)** + **Keys (PK/FK/Candidate/Super)** — DBMS ka exam core.

---

## 1. Keys (yaad rakho)

| Key | Matlab |
|---|---|
| **Primary Key (PK)** | Unique identifier — no duplicate, no NULL. Ek table me **ek** PK. |
| **Foreign Key (FK)** | Dusri table ke PK ko refer karta hai — relationship banata hai. |
| **Candidate Key** | Unique banane wale **possible** keys (PK inme se ek hota hai). |
| **Super Key** | Unique identify karne wala koi bhi attribute set (PK ⊂ Super Key). |
| **Composite Key** | 2+ columns milke PK banate hain. |
| **Alternate Key** | Candidate keys jo PK nahi bane. |

**Example:**
```
Student (Roll_No, Name, Email, Dept_ID)
- Roll_No → PK (unique, not null)
- Email → Candidate Key (bhi unique)
- Dept_ID → FK (references Department table)
```

---

## 2. Normalization — Kyun?

- **Data redundancy** kam karna (repeat data hatana)
- **Data integrity** improve karna
- **Update anomalies** avoid karna (ek jagah update, sab jagah reflect)

---

## 3. Normal Forms

| NF | Rule (simple) | Example violation |
|---|---|---|
| **1NF** | Har cell me **atomic** (single) value — no repeating groups | "Skills: Java, C++" in one cell ❌ |
| **2NF** | 1NF + **no partial dependency** (non-key column poori PK par depend, PK ke part par nahi) | Composite PK (A,B) — column C sirf A par depend ❌ |
| **3NF** | 2NF + **no transitive dependency** (non-key → non-key dependency nahi) | Emp_ID → Dept_ID → Dept_Name (Dept_Name transitively depends on Emp_ID) ❌ |
| **BCNF** | 3NF ka strict version (advanced — basic samajh kaafi) | — |

### Solved Example (3NF violation):
```
Employee(Emp_ID, Name, Dept_ID, Dept_Name)
```
- Dept_Name depends on Dept_ID, not directly on Emp_ID → **transitive dependency**
- **Fix:** Alag table `Department(Dept_ID, Dept_Name)` banao.

---

## 4. ACID (quick revision)

| Property | One line |
|---|---|
| **Atomicity** | All or nothing |
| **Consistency** | Valid state always |
| **Isolation** | Parallel transactions don't interfere |
| **Durability** | Committed = permanent |

---

## 5. ✍️ MCQ Practice (10 questions)

1. Primary Key can have:
   - a) Duplicate values  b) NULL  c) Unique non-null values  d) Multiple per table

2. Foreign Key references:
   - a) Same table  b) Primary Key of another table  c) Any column  d) Index only

3. 1NF ensures:
   - a) No duplicate rows  b) Atomic values in each cell  c) No NULL  d) No FK

4. 2NF eliminates:
   - a) Transitive dependency  b) Partial dependency  c) Redundancy only  d) NULL values

5. 3NF eliminates:
   - a) Partial dependency  b) Transitive dependency  c) Duplicate rows  d) Composite keys

6. A key that can uniquely identify a row but is not chosen as PK is:
   - a) Foreign Key  b) Alternate Key  c) Super Key  d) Composite Key

7. Which is NOT a normal form?
   - a) 1NF  b) 2NF  c) 4NF  d) 0NF

8. ACID property "Atomicity" means:
   - a) Data permanent  b) All or nothing  c) No interference  d) Valid data

9. Composite Primary Key means:
   - a) One column  b) Two or more columns together  c) Foreign key  d) Alternate key

10. If Dept_Name depends on Dept_ID (not Emp_ID directly) in Employee table, it violates:
    - a) 1NF  b) 2NF  c) 3NF  d) BCNF

---

## ✅ Answers

1. **c) Unique non-null values**
2. **b) Primary Key of another table**
3. **b) Atomic values in each cell**
4. **b) Partial dependency**
5. **b) Transitive dependency**
6. **b) Alternate Key**
7. **d) 0NF** (0NF is not standard — 1NF, 2NF, 3NF, BCNF are)
8. **b) All or nothing**
9. **b) Two or more columns together**
10. **c) 3NF** (transitive dependency)

---

## 6. PK Error Notebook

- PK = unique + NOT NULL (one per table)
- FK = references PK of another table
- 1NF = atomic | 2NF = no partial dep | 3NF = no transitive dep
- Candidate Key → PK (chosen) + Alternate Keys (rest)
- ACID = Atomicity, Consistency, Isolation, Durability

---

> **Aaj ka takeaway:** Normalization + Keys = DBMS ke sabse zyada pooche jaane wale topics. 1NF/2NF/3NF definitions ek line me yaad rakho. Kal: Operating Systems basics shuru.
