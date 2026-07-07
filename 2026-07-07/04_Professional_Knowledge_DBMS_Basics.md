# 🖥️ Professional Knowledge — DBMS Basics | Day 14 (PK START)

> **PK Section:** 25 Q, **50 marks**, 20 min. Har sahi answer = **2 marks**.
> Aaj: **DBMS fundamentals** — IT Officer Prelims me sabse zyada poocha jaata hai.

---

## 1. DBMS kya hai?

**DBMS (Database Management System)** = software jo data store, manage, retrieve karta hai.

**Examples:** MySQL, Oracle, PostgreSQL, MS SQL Server, MongoDB (NoSQL).

**DBMS ke fayde:**
- Data redundancy kam
- Data sharing easy
- Security (access control)
- Data integrity
- Backup & recovery

---

## 2. Important Terms

| Term | Matlab |
|---|---|
| **Database** | Organized data ka collection |
| **Table / Relation** | Rows aur columns ka structure |
| **Tuple / Row** | Ek record (horizontal) |
| **Attribute / Column** | Field (vertical) |
| **Primary Key (PK)** | Unique identifier — duplicate nahi, NULL nahi |
| **Foreign Key (FK)** | Dusri table ke PK ko refer karta hai |
| **Candidate Key** | Unique banane wale possible keys |
| **Super Key** | Unique identify karne wala attribute set |
| **Composite Key** | 2+ columns milke PK |
| **DDL** | Data Definition Language (CREATE, ALTER, DROP) |
| **DML** | Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE) |
| **DCL** | Data Control Language (GRANT, REVOKE) |
| **TCL** | Transaction Control (COMMIT, ROLLBACK) |

---

## 3. SQL Commands (yaad rakho)

| Command | Type | Kaam |
|---|---|---|
| CREATE | DDL | Table/database banata hai |
| ALTER | DDL | Structure change |
| DROP | DDL | Table delete |
| INSERT | DML | Data add |
| UPDATE | DML | Data change |
| DELETE | DML | Data remove (structure rehta hai) |
| SELECT | DML | Data read |
| GRANT | DCL | Permission dena |
| REVOKE | DCL | Permission hatana |
| COMMIT | TCL | Changes permanent |
| ROLLBACK | TCL | Changes undo |

---

## 4. ACID Properties (Transaction)

| Property | Matlab |
|---|---|
| **A — Atomicity** | Poora transaction ho ya kuch nahi (all or nothing) |
| **C — Consistency** | Data valid state me rahe |
| **I — Isolation** | Parallel transactions ek dusre ko disturb na karein |
| **D — Durability** | Commit ke baad data permanent |

---

## 5. Normalization (basic)

| Normal Form | Rule (simple) |
|---|---|
| **1NF** | Har cell me atomic (single) value |
| **2NF** | 1NF + partial dependency nahi |
| **3NF** | 2NF + transitive dependency nahi |

> Exam me definition puchte hain — detail design abhi skip karo.

---

## 6. ✍️ MCQ Practice (10 questions)

1. Which is a DDL command?
   - a) SELECT  b) INSERT  c) CREATE  d) UPDATE

2. Primary Key can have:
   - a) Duplicate values  b) NULL  c) Unique non-null values  d) Multiple per table

3. Which SQL command removes all rows but keeps table structure?
   - a) DROP  b) DELETE  c) TRUNCATE  d) REMOVE

4. ACID property "Atomicity" means:
   - a) Data permanent  b) All or nothing  c) No interference  d) Valid data

5. Foreign Key references:
   - a) Same table  b) Primary Key of another table  c) Any column  d) Index

6. Which is NOT a DBMS?
   - a) MySQL  b) Oracle  c) Compiler  d) PostgreSQL

7. DML command is:
   - a) GRANT  b) SELECT  c) CREATE  d) COMMIT

8. COMMIT is used to:
   - a) Undo changes  b) Save changes permanently  c) Create table  d) Delete database

9. A row in a table is also called:
   - a) Attribute  b) Tuple  c) Schema  d) Domain

10. 1NF ensures:
    - a) No duplicate rows  b) Atomic values in cells  c) No NULL  d) No foreign key

---

## ✅ Answers

1. **c) CREATE**
2. **c) Unique non-null values**
3. **b) DELETE** (TRUNCATE bhi hota hai but DELETE standard answer; TRUNCATE DDL-like — exam me DELETE zyada common)
   - Note: TRUNCATE removes all rows fast. Both DELETE & TRUNCATE remove rows. **DELETE** keeps structure. **DROP** removes table. Best answer: **b) DELETE** or **c) TRUNCATE** — IBPS often: DELETE removes rows, structure remains ✅

4. **b) All or nothing**
5. **b) Primary Key of another table**
6. **c) Compiler**
7. **b) SELECT**
8. **b) Save changes permanently**
9. **b) Tuple**
10. **b) Atomic values in cells**

---

## 7. Roz yaad karne layak (PK Error Notebook)

- DDL = CREATE, ALTER, DROP
- DML = SELECT, INSERT, UPDATE, DELETE
- PK = unique + NOT NULL
- FK = references PK of another table
- ACID = Atomicity, Consistency, Isolation, Durability

---

> **Aaj ka takeaway:** DBMS = IT Officer PK ka base. SQL command types aur PK/FK/ACID roz revise karo. Kal: SQL queries + more DBMS MCQ.
