# 🖥️ PK Exam Notes + IMP Questions | 25 Aug

> Prelims PK = **25 Q × 2 marks = 50**. Short facts win.  
> Focus: mock galtiyan + high-frequency (DBMS / Network / OS / DS).

---

## A. DBMS (high weight)

| Concept | Exam line |
|---|---|
| **TRUNCATE** | Saari rows hataata hai; structure usually rehta (DDL-like; faster than DELETE) |
| **DELETE** | Rows hataata; WHERE possible; structure rehta; rollback possible (DML) |
| **DROP** | Table hi delete |
| **Super key** | Uniquely identify row (may have extra attrs) |
| **Candidate key** | Super key with **no redundant** attribute |
| **Primary key** | Chosen candidate key |
| **Foreign key** | Referential integrity enforce |
| **Cascadeless schedule** | Transaction reads **only committed** values (dirty read avoid) |
| **ACID** | Atomicity, Consistency, Isolation, Durability |

### Isolation levels (yaad order — weakest → strongest)

| Level | Dirty read? |
|---|---|
| **Read Uncommitted** | **YES** (allowed) |
| Read Committed | No |
| Repeatable Read | No |
| **Serializable** | No (strictest) |

> Mock tip: *dirty reads allow?* → **Read Uncommitted** (Serializable nahi).

---

## B. Networks

| Q style | Answer |
|---|---|
| IP → MAC | **ARP** |
| Name → IP | **DNS** |
| IP assign (auto) | **DHCP** |
| End-to-end reliable delivery (OSI) | **Transport** |
| HTTP / HTTPS | **80 / 443** |
| Speed > reliability (streaming) | **UDP** |
| Reliability needed | **TCP** |

### IPv4 classful (first octet)

| Class | First octet | Hint |
|---|---|---|
| A | 1–126 | |
| B | 128–191 | |
| **C** | **192–223** | Mock: 192–223 = **C** (not B) |

---

## C. Operating Systems

| Topic | Line |
|---|---|
| Demand paging / Virtual memory | Process chal sakta hai bina full address space RAM me |
| Context switch | CPU state save/restore → process switch |
| Non-preemptive example | **FCFS** |
| Semaphore | **Process synchronization** |
| RR | Time quantum |
| SJF risk | Starvation (long jobs) |
| Thrashing | Too many page faults |

---

## D. Data Structures

| Topic | Line |
|---|---|
| Infix → postfix | **Stack** |
| BFS | **Queue** |
| DFS | Stack / recursion |
| Quicksort **average** | O(n log n) |
| Quicksort **worst** | **O(n²)** |
| Binary search | O(log n) sorted |

---

## E. SE / Web / Cloud / Security / Banking IT

| Topic | Line |
|---|---|
| Agile short cycles | **Sprints** |
| Regression testing | Old features still work after change |
| HTTP 403 | **Forbidden** |
| JSON | Lightweight data-interchange |
| Manage OS yourself (VMs) | **IaaS** |
| Hashing | **Integrity** (fingerprint) |
| 2FA | Know + Have/Are |
| NEFT | Deferred net electronic funds transfer |

---

## ✍️ IMP Practice (20) — exam vibe

1. Dirty reads allowed at? → **Read Uncommitted**  
2. Referential integrity mainly by? → **Foreign keys**  
3. Read only committed values schedule? → **Cascadeless**  
4. IP to MAC? → **ARP**  
5. 192–223 first octet? → **Class C**  
6. Quicksort worst case? → **O(n²)**  
7. Infix to postfix DS? → **Stack**  
8. Semaphore for? → **Synchronization**  
9. TRUNCATE does? → Remove all rows, keep structure (usual)  
10. Candidate key = ? → Minimal unique super key  
11. HTTPS port? → **443**  
12. Transport layer job? → End-to-end reliable delivery  
13. Non-preemptive? → **FCFS**  
14. Demand paging allows? → Run without full image in RAM  
15. BFS uses? → **Queue**  
16. UDP preferred when? → Speed over reliability  
17. 403 means? → Forbidden  
18. IaaS means? → You manage OS on rented infra  
19. Hashing verifies? → Integrity  
20. Agile cycles? → Sprints  

*(Self-check: sab 1 line me bol pao bina options.)*

---

## 🔥 60-second flash (exam se pehle)

```
RU = dirty | ARP = IP→MAC | C = 192–223 | QS worst n²
FK = ref integrity | Cascadeless = no dirty | Sem = sync | Stack = postfix
TRUNCATE = empty table | Transport = reliable e2e | FCFS = non-preempt
```

---

> Next: `03_English_Fix_Notes.md`
