# 🖥️ Professional Knowledge — Operating Systems Basics | Day 17 (PK)

> **PK:** 25 Q, 50 marks, 20 min. Aaj: **Operating System (OS)** fundamentals — process, memory, scheduling. Week 5 PK shuru.

---

## 1. OS kya hai?

**Operating System** = software jo computer hardware aur user programs ke beech interface hai.

**Main functions:**
- Process management
- Memory management
- File management
- Device management
- Security & protection

**Examples:** Windows, Linux, macOS, Android, Unix

---

## 2. Process vs Program

| Term | Matlab |
|---|---|
| **Program** | Static code (file me stored) |
| **Process** | Program in execution (running) |
| **Thread** | Lightweight unit within process — shares memory |

> Ek process me **multiple threads** ho sakte hain.

---

## 3. Process States

```
New → Ready → Running → Waiting → Terminated
```

| State | Matlab |
|---|---|
| **New** | Process create ho raha |
| **Ready** | CPU ke liye wait |
| **Running** | CPU par execute ho raha |
| **Waiting/Blocked** | I/O ya event ka wait |
| **Terminated** | Khatam |

---

## 4. CPU Scheduling (basic)

| Algorithm | Idea |
|---|---|
| **FCFS** | First Come First Served — jo pehle aaya |
| **SJF** | Shortest Job First — chhota kaam pehle |
| **Round Robin** | Time slice — har process ko turn |
| **Priority** | High priority pehle |

---

## 5. Memory Management

| Term | Matlab |
|---|---|
| **RAM** | Main memory — volatile |
| **Virtual Memory** | Disk use karke RAM extend |
| **Paging** | Memory ko fixed-size pages me divide |
| **Segmentation** | Logical segments (code, data, stack) |
| **Cache** | Fast small memory — frequently used data |

---

## 6. Deadlock (important)

**Deadlock** = do ya zyada processes ek dusre ka wait karte hain — koi aage nahi badhta.

**4 Conditions (Coffman):**
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

> Sab 4 conditions ek saath → deadlock possible.

---

## 7. ✍️ MCQ Practice (10 questions)

1. OS acts as an interface between:
   - a) User and hardware  b) Two programs  c) CPU and RAM only  d) Keyboard and mouse

2. A program in execution is called:
   - a) Thread  b) Process  c) File  d) Kernel

3. Which is NOT a process state?
   - a) Ready  b) Running  c) Compiled  d) Waiting

4. FCFS scheduling means:
   - a) Shortest first  b) First come first served  c) Priority based  d) Random

5. Virtual memory uses:
   - a) RAM only  b) Disk to extend RAM  c) Cache only  d) ROM

6. Deadlock occurs when:
   - a) One process runs  b) Processes wait for each other  c) CPU is idle  d) Memory full

7. Kernel is:
   - a) User application  b) Core of OS  c) Hardware  d) File system only

8. Round Robin uses:
   - a) Priority  b) Time quantum/slice  c) Shortest job  d) Longest job

9. Thread shares ___ with other threads in same process:
   - a) Nothing  b) Memory space  c) Different process  d) CPU only

10. Paging is used for:
    - a) CPU scheduling  b) Memory management  c) File management  d) I/O only

---

## ✅ Answers

1. **a) User and hardware**
2. **b) Process**
3. **c) Compiled**
4. **b) First come first served**
5. **b) Disk to extend RAM**
6. **b) Processes wait for each other**
7. **b) Core of OS**
8. **b) Time quantum/slice**
9. **b) Memory space**
10. **b) Memory management**

---

## 8. PK Error Notebook

- Program = static | Process = running
- Process states: New → Ready → Running → Waiting → Terminated
- FCFS, SJF, Round Robin, Priority = scheduling algorithms
- Deadlock = circular wait for resources
- Kernel = OS core | Paging = memory management

---

> **Aaj ka takeaway:** OS = process + memory + scheduling. Process states aur deadlock conditions exam me common hain. Kal weekend — topic-wise test + PK revision.
