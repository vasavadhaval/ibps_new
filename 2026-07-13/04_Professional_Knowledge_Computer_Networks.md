# 🖥️ Professional Knowledge — Computer Networks | Day 20 (PK)

> **PK:** 25 Q, 50 marks, 20 min. Aaj: **Computer Networks** — OSI, TCP/IP, devices, IP. IT Officer exam me bahut aata hai.

---

## 1. Network Types

| Type | Range | Example |
|---|---|---|
| **LAN** | Local (office/home) | Office Wi-Fi |
| **MAN** | City | Cable TV network |
| **WAN** | Country/world | Internet |
| **PAN** | Personal | Bluetooth |

---

## 2. OSI 7 Layers (MUST memorize)

| Layer | Name | Function (simple) | Example |
|---|---|---|---|
| 7 | **Application** | User services | HTTP, FTP, DNS |
| 6 | **Presentation** | Format, encrypt | JPEG, SSL |
| 5 | **Session** | Session manage | NetBIOS |
| 4 | **Transport** | End-to-end delivery | **TCP, UDP** |
| 3 | **Network** | Routing, IP | **IP, routers** |
| 2 | **Data Link** | Frame, MAC | Ethernet, switches |
| 1 | **Physical** | Bits, cables | Cable, hub |

> **Mnemonic:** **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing  
> (Application → Physical, top to bottom)

---

## 3. TCP/IP Model (4 layers)

| TCP/IP Layer | Maps to OSI |
|---|---|
| Application | App + Presentation + Session |
| Transport | Transport |
| Internet | Network |
| Network Access | Data Link + Physical |

---

## 4. TCP vs UDP

| Feature | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable (ACK) | Unreliable |
| Speed | Slower | Faster |
| Use | Web, email, file transfer | Video, DNS, gaming |

---

## 5. Network Devices

| Device | Layer | Kaam |
|---|---|---|
| **Hub** | Physical | Broadcast to all ports |
| **Switch** | Data Link | Smart — MAC based forwarding |
| **Router** | Network | Connects networks, routes IP |
| **Bridge** | Data Link | Connects LAN segments |
| **Gateway** | Multiple | Protocol conversion |
| **Firewall** | Multiple | Security filter |

---

## 6. Important Protocols / Ports

| Protocol | Port | Use |
|---|---|---|
| **HTTP** | 80 | Web |
| **HTTPS** | 443 | Secure web |
| **FTP** | 21 | File transfer |
| **SSH** | 22 | Secure remote |
| **DNS** | 53 | Domain → IP |
| **SMTP** | 25 | Email send |
| **POP3** | 110 | Email receive |

---

## 7. IP Basics

- **IPv4:** 32-bit (e.g. 192.168.1.1) — 4 octets
- **IPv6:** 128-bit — newer, more addresses
- **Private IP:** 192.168.x.x, 10.x.x.x (local)
- **Public IP:** Internet pe unique

---

## 8. ✍️ MCQ Practice (10 questions)

1. OSI has how many layers?
   - a) 4  b) 5  c) 7  d) 8

2. TCP works at which OSI layer?
   - a) Network  b) Transport  c) Application  d) Physical

3. Which device works at Network layer?
   - a) Hub  b) Switch  c) Router  d) Repeater

4. HTTP default port?
   - a) 21  b) 80  c) 443  d) 25

5. UDP is:
   - a) Connection-oriented  b) Connectionless  c) Reliable only  d) Slowest

6. DNS converts:
   - a) IP to MAC  b) Domain name to IP  c) File to packet  d) Port to IP

7. Switch works mainly at:
   - a) Physical  b) Data Link  c) Network  d) Transport

8. HTTPS port?
   - a) 80  b) 443  c) 22  d) 53

9. IPv4 address size?
   - a) 16-bit  b) 32-bit  c) 64-bit  d) 128-bit

10. LAN stands for:
    - a) Large Area Network  b) Local Area Network  c) Long Access Network  d) Low Area Network

---

## ✅ Answers

1. **c) 7**
2. **b) Transport**
3. **c) Router**
4. **b) 80**
5. **b) Connectionless**
6. **b) Domain name to IP**
7. **b) Data Link**
8. **b) 443**
9. **b) 32-bit**
10. **b) Local Area Network**

---

## 9. PK Error Notebook

- OSI 7 layers mnemonic: All People Seem To Need Data Processing
- TCP = reliable, UDP = fast/connectionless
- Router = Network | Switch = Data Link | Hub = Physical
- Ports: HTTP 80, HTTPS 443, FTP 21, DNS 53, SSH 22
- IPv4 = 32-bit | IPv6 = 128-bit

---

> **Aaj ka takeaway:** Networks me OSI layers + ports + TCP/UDP = high frequency. Roz layers dohrao. Kal: Networks deep (IP classes, topologies) ya Age problems + more RC.
