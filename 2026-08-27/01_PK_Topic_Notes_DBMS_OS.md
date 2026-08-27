# 🖥️ PK Topic Notes — DBMS + OS | 27 Aug

> Exam style: **1–2 line facts**. Prelims = MCQ, depth nahi.

---

## 1. DBMS — SQL commands

| Command | Kya karta hai |
|---|---|
| **SELECT** | Data padho |
| **INSERT / UPDATE / DELETE** | DML — rows change; rollback possible |
| **TRUNCATE** | Saari rows hatao; structure usually rehta; tez |
| **DROP** | Table / object hi delete |
| **ALTER** | Structure change |
| **GRANT / REVOKE** | Rights (DCL) |
| **COMMIT / ROLLBACK** | TCL — save / undo transaction |

**Trick:** DELETE = rows (WHERE OK) · TRUNCATE = all rows, keep table · DROP = table gone.

---

## 2. DBMS — Keys

| Key | Meaning |
|---|---|
| **Super key** | Uniquely identify row (extra attrs allowed) |
| **Candidate key** | Minimal super key (no redundant attr) |
| **Primary key** | Chosen candidate key (1 per table usually) |
| **Foreign key** | Child column → parent PK/candidate; **referential integrity** |
| **Alternate key** | Candidate keys not chosen as PK |
| **Composite key** | Key made of 2+ columns |

---

## 3. DBMS — ACID + Isolation

| Letter | Meaning |
|---|---|
| **A** Atomicity | All or nothing |
| **C** Consistency | Valid state → valid state |
| **I** Isolation | Concurrent txns don't mess each other wrongly |
| **D** Durability | After commit, data survives crash |

### Isolation (weak → strong)

| Level | Dirty read? | Exam line |
|---|---|---|
| **Read Uncommitted** | **YES** | Weakest |
| Read Committed | No | |
| Repeatable Read | No | |
| **Serializable** | No | Strictest |

- **Dirty read** = uncommitted data padhna  
- **Cascadeless schedule** = sirf **committed** values padho (dirty avoid)

---

## 4. DBMS — Normalization (definition level)

| Form | Idea |
|---|---|
| **1NF** | Atomic values; no repeating groups |
| **2NF** | 1NF + no partial dependency (full depend on whole PK) |
| **3NF** | 2NF + no transitive dependency |
| **BCNF** | Stronger 3NF (every determinant is candidate key) |

Joins (names yaad): INNER, LEFT, RIGHT, FULL, CROSS, SELF.

---

## 5. OS — Process & CPU Scheduling

| Algo | Type | Key point |
|---|---|---|
| **FCFS** | Non-preemptive | Convoy effect possible |
| **SJF** | Usually non-preempt | Short job first; **starvation** long jobs |
| **SRTF** | Preemptive SJF | |
| **Round Robin** | Preemptive | **Time quantum** |
| **Priority** | Both | Starvation possible |

- **Context switch** = CPU state save/restore, process change  
- **PCB** = process control block (state info)

---

## 6. OS — Sync & Deadlock

| Topic | Line |
|---|---|
| **Semaphore** | Process/thread **synchronization** |
| Binary semaphore | Values **0 / 1** |
| Mutex | Mutual exclusion lock |
| Deadlock 4 conditions | Mutual exclusion, Hold & wait, No preemption, **Circular wait** |

---

## 7. OS — Memory

| Topic | Line |
|---|---|
| **Virtual memory** | Process chal sake bina full space RAM me |
| **Demand paging** | Page tab load jab chahiye (page fault) |
| **Page fault** | Page RAM me nahi → disk se lao |
| **Thrashing** | Bahut zyada page faults, kam useful work |
| Page table | Virtual page → physical frame |

---

## ✍️ Self-check (bolke)

1. Dirty reads? → **Read Uncommitted**  
2. FK for? → **Referential integrity**  
3. Cascadeless? → Read only committed  
4. Non-preemptive example? → **FCFS**  
5. RR needs? → **Quantum**  
6. Semaphore? → **Sync**  
7. Thrashing? → Excessive paging  

---

> Next: `02_PK_Topic_Notes_Network_Rest.md`
