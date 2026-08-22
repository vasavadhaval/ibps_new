# 🖥️ PK Weak Revision — Batch A | 22 Aug

> Topics: CPU Scheduling · Memory · Ports · Stack · Searching · Testing  
> Target: **12+ / 15**

---

## 1. CPU Scheduling (5 min notes)

| Algorithm | Key point |
|---|---|
| **FCFS** | First come first served; convoy effect possible |
| **SJF** | Shortest job first; **may starve** long jobs |
| **Round Robin** | **Time quantum**; fair; no starvation usually |
| **Priority** | Higher priority first; starvation possible |

---

## 2. Memory Management (5 min)

- **Page fault** = page not in RAM → load from disk  
- **Thrashing** = too many page faults, little useful work  
- **Page table** = virtual page → physical frame  

---

## 3. Ports (yaad)

| Port | Service |
|---|---|
| 22 | **SSH** |
| 23 | Telnet |
| 21 | FTP |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |

---

## 4. Stack & Searching

- Stack apps: **function calls / recursion**, undo, expression eval  
- Binary search (sorted array): **O(log n)**

---

## 5. Testing

- **White-box** = internal code/logic  
- **Black-box** = input → output (no code)  
- Unit / Integration / System / UAT  

---

## ✍️ MCQ (15)

1. SJF may cause? a) Fairness always b) Starvation of long jobs c) No scheduling d) Only RR
2. Round Robin uses? a) Quantum b) Only priority c) Random d) Longest first
3. Thrashing means? a) Cool CPU b) Excessive paging c) Format disk d) Compile
4. Page table maps? a) Page→frame b) File→port c) User→password d) MAC→DNS
5. SSH port? a) 21 b) 22 c) 23 d) 80
6. HTTPS port? a) 80 b) 443 c) 25 d) 53
7. FTP port? a) 21 b) 22 c) 443 d) 53
8. Stack best for? a) Recursion/call management b) Printer queue only c) Sorting always d) DNS
9. Binary search complexity? a) O(n) b) O(log n) c) O(n²) d) O(1) always
10. White-box tests? a) Internal logic b) Only UI color c) Only cables d) Only ads
11. Black-box tests? a) Code paths b) I/O behaviour without code c) Only kernel d) Only RAM
12. FCFS issue? a) Convoy effect possible b) Always best c) No waiting d) Quantum
13. Priority scheduling risk? a) Starvation b) No processes c) No CPU d) Only UDP
14. DNS port? a) 53 b) 22 c) 443 d) 21
15. UAT means? a) User Acceptance Testing b) Unit Auto Test c) Unique API d) None

---

## ✅ Answers
1.b 2.a 3.b 4.a 5.b 6.b 7.a 8.a 9.b 10.a 11.b 12.a 13.a 14.a 15.a

---

> **Takeaway:** SJF→starvation | RR→quantum | Thrashing→paging storm | SSH=22 HTTPS=443 | Stack→recursion | Binary search→O(log n)
