# 🖥️ Professional Knowledge — OS Memory & Scheduling | Day 22 (PK)

> OS basics Day 17 pe kiye. Aaj **memory management + scheduling** deep — exam me common.

---

## 1. Memory Types

| Memory | Volatile? | Speed | Size |
|---|---|---|---|
| **RAM** | Yes (power off = data gone) | Fast | Medium |
| **ROM** | No | Slow | Small (BIOS) |
| **Cache** | Yes | Fastest | Smallest |
| **Virtual Memory** | Uses disk | Slower than RAM | Extends RAM |
| **Register** | Yes | Fastest (CPU inside) | Tiny |

---

## 2. Memory Management Techniques

| Technique | Idea |
|---|---|
| **Paging** | RAM ko fixed-size **pages** me divide. Disk = same size frames. |
| **Segmentation** | Logical segments (code, data, stack) — variable size |
| **Swapping** | Process ko RAM se disk pe move (and back) |
| **Fragmentation** | Internal = wasted space inside block; External = free holes |

**Page Fault:** Page RAM me nahi → disk se load (slow).

---

## 3. CPU Scheduling (revision + deep)

| Algorithm | Idea | Problem |
|---|---|---|
| **FCFS** | First come first served | Convoy effect (slow process blocks) |
| **SJF** | Shortest job first | Starvation possible |
| **Round Robin** | Time quantum — har process ko turn | Good for time-sharing |
| **Priority** | High priority first | Low priority starvation |
| **Multilevel Queue** | Processes in queues by type | Complex |

**Context Switch:** CPU ek process se dusre pe switch — overhead hota hai.

---

## 4. Process vs Thread (revision)

| | Process | Thread |
|---|---|---|
| Memory | Own address space | Shares process memory |
| Creation | Heavy | Light |
| Communication | IPC needed | Easier (shared memory) |

---

## 5. Deadlock (revision)

4 Coffman conditions — sab true → deadlock possible:
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

**Prevention / Avoidance:** Banker's algorithm (avoidance), resource ordering (prevention).

---

## 6. ✍️ MCQ (10)

1. RAM is:
   - a) Non-volatile  b) Volatile  c) Permanent  d) Read-only only

2. Virtual memory uses:
   - a) CPU cache  b) Hard disk  c) ROM  d) Register

3. Page fault means:
   - a) Page in RAM  b) Page not in RAM, load from disk  c) Delete page  d) Print page

4. Round Robin uses:
   - a) Priority  b) Time quantum  c) Shortest job  d) Random

5. FCFS disadvantage:
   - a) Too fair  b) Convoy effect  c) No queue  d) Too fast

6. Thread shares with other threads:
   - a) Nothing  b) Memory of same process  c) Different process always  d) Only CPU

7. Context switch happens when:
   - a) CPU changes process  b) Power off  c) Print  d) Boot only

8. Internal fragmentation occurs in:
   - a) Paging (fixed size blocks)  b) Only cache  c) ROM  d) Never

9. Which prevents deadlock by ordering resources?
   - a) Swapping  b) Resource ordering  c) Paging  d) FCFS

10. Cache memory is:
    - a) Slowest  b) Between CPU and RAM — fast  c) On disk  d) Same as ROM

---

## ✅ Answers

1. **b) Volatile**
2. **b) Hard disk**
3. **b) Page not in RAM, load from disk**
4. **b) Time quantum**
5. **b) Convoy effect**
6. **b) Memory of same process**
7. **a) CPU changes process**
8. **a) Paging (fixed size blocks)**
9. **b) Resource ordering**
10. **b) Between CPU and RAM — fast**

---

## PK Notebook
- RAM = volatile | ROM = non-volatile (BIOS)
- Virtual memory = disk extends RAM
- Page fault = page disk se load
- FCFS convoy | RR = time quantum | SJF = shortest job
- Thread shares process memory
- Deadlock = 4 conditions (Coffman)

---

> **Aaj ka takeaway:** OS memory + scheduling = PK me DBMS/Networks ke baad third pillar. Page fault, RR, virtual memory — ratta.
