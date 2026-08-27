# 🖥️ PK Topic Notes — Network + DS + Rest | 27 Aug

---

## 1. Computer Networks — OSI (7 layers)

| # | Layer | Exam job |
|---|---|---|
| 7 | Application | HTTP, FTP, DNS, SMTP |
| 6 | Presentation | Encrypt/format (high level) |
| 5 | Session | Sessions |
| 4 | **Transport** | **End-to-end reliable** (TCP); ports |
| 3 | **Network** | **Routing**, IP |
| 2 | Data Link | MAC, framing, switches |
| 1 | Physical | Cables, bits |

**TCP/IP map tip:** Transport≈TCP/UDP · Network≈IP · App≈HTTP/DNS…

---

## 2. Protocols (confusion killers)

| Protocol | Kaam |
|---|---|
| **ARP** | **IP → MAC** |
| **DNS** | **Name → IP** |
| **DHCP** | Auto **IP assign** |
| **HTTP / HTTPS** | Web; ports **80 / 443** |
| **FTP** | File transfer; **21** |
| **SSH** | Secure remote; **22** |
| **SMTP** | Mail send; **25** |
| **TCP** | Reliable, ordered, connection-oriented |
| **UDP** | Fast, no guarantee — streaming/gaming |

---

## 3. IPv4 classes (classful)

| Class | First octet | Hint |
|---|---|---|
| A | 1–126 | Huge networks |
| B | **128–191** | |
| C | **192–223** | Common LAN feel |
| D | 224–239 | Multicast |
| E | 240–255 | Experimental |

---

## 4. Data Structures

| DS / Algo | Exam line |
|---|---|
| **Stack** LIFO | Undo, recursion, **infix→postfix** |
| **Queue** FIFO | **BFS**, printer queue |
| **Tree** | Hierarchy; BST search |
| Sorting average | Merge/Heap ~ **O(n log n)** |
| **Quicksort worst** | **O(n²)** |
| Quicksort average | O(n log n) |
| Binary search | Sorted array **O(log n)** |
| Linear search | O(n) |

---

## 5. Software Engineering

| Topic | Line |
|---|---|
| **Waterfall** | Sequential phases |
| **Agile** | Short cycles = **Sprints** |
| Unit test | Individual module |
| Integration | Modules together |
| System / UAT | Full system / user accept |
| **Regression** | Old features still work after change |
| White-box | Internal logic |
| Black-box | I/O without code |

---

## 6. Web / Cloud / Security / Banking IT

| Topic | Line |
|---|---|
| HTML | Page **structure** |
| CSS | Style |
| JS | Behaviour |
| JSON | Lightweight **data interchange** |
| HTTP 200 | OK |
| HTTP 401 | Unauthorized |
| HTTP 403 | **Forbidden** |
| HTTP 404 | Not Found |
| **IaaS** | VMs/storage; **you manage OS** |
| **PaaS** | Platform (you deploy app) |
| **SaaS** | Ready software (Gmail-like) |
| Hashing | **Integrity** fingerprint |
| Encryption | **Confidentiality** |
| 2FA | Know + Have/Are |
| Firewall | Filter traffic by rules |
| **NEFT** | Deferred net (batch feel) |
| **RTGS** | Real-time gross (high value) |
| UPI | Instant retail payments (awareness) |

---

## 🔥 60-second PK flash

```
RU=dirty | ARP=IP→MAC | DNS=name→IP | DHCP=assign IP
C=192–223 | B=128–191 | Transport=reliable e2e | Network=routing
QS worst=n² | Stack=postfix | Queue=BFS | Sem=sync | FCFS=non-preempt
TRUNCATE=empty keep | DROP=gone | FK=ref integrity | Sprint=Agile
IaaS=you OS | Hash=integrity | 403=Forbidden | SSH=22 HTTPS=443
```

---

## ✍️ Mini MCQ (10)

1. IP→MAC? **ARP**  
2. Name→IP? **DNS**  
3. 192–223? **Class C**  
4. Quicksort worst? **O(n²)**  
5. Infix→postfix? **Stack**  
6. BFS? **Queue**  
7. SaaS example vibe? Gmail-like app  
8. Hashing? **Integrity**  
9. RTGS? Real-time gross  
10. SSH port? **22**

---

> Next: `03_English_Topic_Notes.md`
