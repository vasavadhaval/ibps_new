# 🖥️ Professional Knowledge — Data Structures Basics | Day 27 (PK)

> Week 6 PK start. Stack, Queue, Array, Linked List, Tree — basics + MCQ.

---

## 1. Notes (padho · 20 min)

### Array
- Same type elements, **index** se access (0,1,2…).
- Fixed size (static array). Fast random access.
- Insert/delete middle me slow (shift).

### Linked List
- Nodes: **data + pointer** to next.
- Size dynamic. Insert/delete easy.
- Random access slow (traverse karna padta hai).

### Stack (LIFO — Last In First Out)
- Operations: **PUSH** (add), **POP** (remove top), **PEEK/TOP**.
- Use: undo, function calls, expression evaluation.
- Example: push 1,2,3 → pop = **3** pehle.

### Queue (FIFO — First In First Out)
- Operations: **ENQUEUE** (rear), **DEQUEUE** (front).
- Use: printer queue, CPU scheduling, tickets.
- Example: enqueue A,B,C → dequeue = **A** pehle.

### Tree (basics)
- Hierarchical: **root**, children, leaves.
- **Binary Tree:** max 2 children per node.
- **BST (Binary Search Tree):** left < root < right.
- Traversal: Inorder, Preorder, Postorder (names yaad).

### Quick Compare

| Structure | Order | Access |
|---|---|---|
| Array | Index | Fast random |
| Stack | LIFO | Top only |
| Queue | FIFO | Front/Rear |
| Linked List | Sequential | Traverse |
| Tree | Hierarchy | Root→leaf |

---

## 2. ✍️ MCQ (12 Q · 12 min)

1. Stack follows? a) FIFO b) LIFO c) Random d) Sorted always
2. Queue follows? a) LIFO b) FIFO c) LILO d) None
3. Push 10,20,30 then Pop → ? a) 10 b) 20 c) 30 d) 0
4. Enqueue A,B then Dequeue → ? a) B b) A c) Both d) None
5. Array index usually starts at? a) 1 b) 0 c) −1 d) 2
6. Linked list node has? a) Only data b) Data + pointer c) Only pointer d) File
7. Binary tree max children? a) 1 b) 2 c) 3 d) Unlimited always
8. BST left child is? a) Greater b) Smaller c) Equal only d) Random
9. Which for Undo feature? a) Queue b) Stack c) Tree only d) Graph only
10. Printer jobs best model? a) Stack b) Queue c) Array only d) Tree
11. Fastest random access? a) Linked list b) Array c) Queue d) Stack
12. Root node is? a) Leaf always b) Top/parent of tree c) Last node d) NULL always

---

## ✅ Answers

1. **b**  2. **b**  3. **c**  4. **b**  5. **b**
6. **b**  7. **b**  8. **b**  9. **b**  10. **b**
11. **b**  12. **b**

---

## 3. Self-Check

| Score | Action |
|---|---|
| 10+ / 12 | DS base OK — kal Tree/Graph light + SDLC |
| 7–9 | Stack vs Queue dubara diagram banao |
| <7 | Notes + examples 1 baar aur |

---

> **Aaj ka takeaway:** Stack = LIFO (undo). Queue = FIFO (line). Yeh 2 lines exam me almost sure.
