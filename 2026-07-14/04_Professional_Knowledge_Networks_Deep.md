# 🖥️ Professional Knowledge — Networks Deep (IP + Topology) | Day 21

> Kal OSI/TCP/ports kiye. Aaj: **IP addressing, Classes, Topology, Transmission**.

---

## 1. Network Topologies

| Topology | Shape | Point |
|---|---|---|
| **Bus** | Single cable | Cheap; cable fail = network fail |
| **Star** | Hub/switch centre | Most common LAN; hub fail = fail |
| **Ring** | Circle | Token passing; break affects |
| **Mesh** | Every node connected | Highly reliable; costly |
| **Tree** | Hierarchical | Scalable |
| **Hybrid** | Mix of above | Flexible |

---

## 2. IPv4 Classes (yaad rakho)

| Class | First octet range | Default mask | Use |
|---|---|---|---|
| **A** | 1–126 | 255.0.0.0 | Large networks |
| **B** | 128–191 | 255.255.0.0 | Medium |
| **C** | 192–223 | 255.255.255.0 | Small (common) |
| **D** | 224–239 | — | Multicast |
| **E** | 240–255 | — | Experimental |

> **127.x.x.x** = loopback (localhost), Class A se alag treat.

**Private IPs (not on public internet):**
- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

---

## 3. Transmission Modes

| Mode | Direction |
|---|---|
| **Simplex** | One way only (TV broadcast) |
| **Half Duplex** | Both ways, but one at a time (walkie-talkie) |
| **Full Duplex** | Both ways same time (phone) |

---

## 4. Transmission Media

| Type | Examples |
|---|---|
| Guided (wired) | Twisted pair, Coaxial, Fiber optic |
| Unguided (wireless) | Radio, Microwave, Infrared, Satellite |

**Fiber optic** = fastest, longest distance, immune to EMI.

---

## 5. Quick Terms

| Term | Meaning |
|---|---|
| **MAC address** | Hardware (NIC) address — Data Link |
| **IP address** | Logical address — Network layer |
| **Subnet mask** | Network vs host part alag karta |
| **DNS** | Domain → IP |
| **DHCP** | Auto IP assign |
| **NAT** | Private IP → Public IP |

---

## 6. ✍️ MCQ (10)

1. Most common LAN topology today?
   - a) Bus  b) Star  c) Ring  d) Mesh

2. Class C first octet range?
   - a) 1–126  b) 128–191  c) 192–223  d) 224–239

3. 192.168.1.1 is?
   - a) Public  b) Private  c) Loopback  d) Multicast

4. Full duplex means?
   - a) One way  b) Both ways same time  c) One at a time  d) No transfer

5. Fiber optic is?
   - a) Slowest  b) Guided + high speed  c) Wireless only  d) Class D

6. MAC address works at?
   - a) Physical  b) Data Link  c) Network  d) Transport

7. DHCP used for?
   - a) Domain name  b) Auto IP assignment  c) Email  d) Encryption

8. Loopback address?
   - a) 192.168.0.1  b) 127.0.0.1  c) 8.8.8.8  d) 10.0.0.1

9. Mesh topology main advantage?
   - a) Cheap  b) High reliability  c) Simple wiring  d) Slow

10. Class A default mask?
    - a) 255.255.255.0  b) 255.255.0.0  c) 255.0.0.0  d) 255.255.255.255

---

## ✅ Answers

1. **b) Star**
2. **c) 192–223**
3. **b) Private**
4. **b) Both ways same time**
5. **b) Guided + high speed**
6. **b) Data Link**
7. **b) Auto IP assignment**
8. **b) 127.0.0.1**
9. **b) High reliability**
10. **c) 255.0.0.0**

---

## PK Notebook
- Topologies: Star (common), Mesh (reliable), Bus, Ring
- Class A/B/C ranges + private IP ranges
- Simplex / Half / Full duplex
- MAC = Data Link | IP = Network
- Fiber = best for speed + distance

---

> **Aaj ka takeaway:** IP classes + private IPs + topologies = high-frequency MCQ. Class C = 192–223, mask 255.255.255.0 — ratta.
