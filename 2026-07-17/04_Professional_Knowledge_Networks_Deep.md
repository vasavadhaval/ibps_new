# 🖥️ Professional Knowledge — Networks Deep (TCP/IP) | Day 24 (PK)

> Week 5 PK continue. TCP/IP, devices, IP addressing — **15 MCQ timed (15 min)**.

---

## 1. Notes (padho · 15 min)

### TCP/IP Model (4 layers)
| Layer | Examples |
|---|---|
| Application | HTTP, HTTPS, FTP, DNS, SMTP |
| Transport | **TCP** (reliable), **UDP** (fast, no guarantee) |
| Internet (Network) | **IP**, ICMP, routing |
| Network Access (Link) | Ethernet, MAC, switches |

### Key Differences
| | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented | Connectionless |
| Reliability | Yes (ack, retransmit) | No guarantee |
| Speed | Slower | Faster |
| Use | Web, email, file transfer | Video, DNS queries, gaming |

### Devices
| Device | Layer | Kaam |
|---|---|---|
| Hub | Physical | Broadcast to all (dumb) |
| Switch | Data Link | MAC address based forwarding |
| Router | Network | IP routing between networks |
| Modem | Physical/Link | Analog ↔ digital signal |
| Firewall | Network/App | Block/allow traffic by rules |

### IP Addressing
- **IPv4** = 32-bit (4 octets) e.g. 192.168.1.1
- **IPv6** = 128-bit (longer address space)
- **Private IP:** 10.x.x.x | 172.16–31.x.x | 192.168.x.x
- **Loopback:** 127.0.0.1 (localhost)
- **Subnet mask:** 255.255.255.0 = /24 (256 addresses in block)

### Common Ports (yaad rakho)
| Port | Service |
|---|---|
| 20/21 | FTP |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 3306 | MySQL |

---

## 2. ✍️ MCQ (15 Q · 15 min)

1. TCP/IP has how many layers? a) 3 b) 4 c) 7 d) 5
2. Which is connectionless? a) TCP b) UDP c) HTTP d) SSH
3. Router works at? a) Physical b) Data Link c) Network d) Application
4. Switch forwards using? a) IP b) MAC c) Port name d) Domain
5. 127.0.0.1 is? a) Broadcast b) Loopback c) Public d) Gateway always
6. Private IP class? a) 8.8.8.8 b) 192.168.1.5 c) 142.250.1.1 d) 203.0.113.1
7. DNS port? a) 80 b) 443 c) 53 d) 22
8. HTTPS port? a) 80 b) 8080 c) 443 d) 21
9. IPv4 size? a) 16-bit b) 32-bit c) 64-bit d) 128-bit
10. Hub vs Switch — hub? a) Smart MAC filter b) Broadcasts to all ports c) Routes IP d) Encrypts
11. TCP guarantees? a) No order b) Reliable delivery c) No connection d) Fastest always
12. SMTP used for? a) Web b) Email sending c) File download d) DNS
13. Firewall mainly? a) Increase RAM b) Filter network traffic c) Store files d) Compile code
14. ICMP used for? a) Ping/traceroute b) Email c) Video stream d) SQL
15. Default gateway? a) Router to other networks b) Switch MAC c) CPU d) Keyboard

---

## ✅ Answers

1. **b) 4**
2. **b) UDP**
3. **c) Network**
4. **b) MAC address**
5. **b) Loopback**
6. **b) 192.168.1.5**
7. **c) 53**
8. **c) 443**
9. **b) 32-bit**
10. **b) Broadcasts to all ports**
11. **b) Reliable delivery**
12. **b) Email sending**
13. **b) Filter network traffic**
14. **a) Ping/traceroute**
15. **a) Router to other networks**

---

## 3. Self-Check

| Score | Action |
|---|---|
| 12+ / 15 | Networks base strong — weekend mock me PK confident |
| 9–11 | Ports + devices dubara yaad karo |
| <9 | `04_Professional_Knowledge_Networks_Deep.md` + Day 21 file revise |

---

> **Aaj ka takeaway:** IT Officer PK me TCP vs UDP, Router vs Switch, ports (53, 80, 443), private IP — bar-bar aate hain. Port list roz 2 min revise karo.
