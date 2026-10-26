# Computer Fundamentals Academy (ਕੰਪਿਊਟਰ ਫੰਡਾਮੈਂਟਲਜ਼ ਅਕੈਡਮੀ)

A production-grade, bilingual (**Punjabi Gurmukhi + English**) full-stack computer science and discrete mathematics learning platform built with **React 19**, **TypeScript**, **Tailwind CSS**, **Express**, **Cloud SQL for PostgreSQL**, **Drizzle ORM**, **Firebase Authentication**, and **Gemini AI (`@google/genai`)**.

---

## Architecture & Core Capabilities

1. **9-Level Bilingual Curriculum (18 Comprehensive Lessons, 120 Blueprint Topics Covered)**:
   - **Level 1**: Introduction to Computers (IPOS Model, Hardware vs Software, Computer Types & Generational History)
   - **Level 2**: Computer Hardware & Architecture (CPU ALU/CU/Registers, Fetch-Decode-Execute-Writeback, Memory Hierarchy, Peripherals & Ports)
   - **Level 3**: Number Systems & Digital Logic (Binary/Octal/Decimal/Hexadecimal, Logic Gates, Boolean Algebra & De Morgan's Laws, Two's Complement, ASCII/Unicode)
   - **Level 4**: Operating Systems (Process Scheduling, Threads, Virtual Memory & Paging, File Systems, Deadlocks & CLI)
   - **Level 5**: Programming Fundamentals (Assembly Language, Variables, Control Flow, Recursion, Big-O Complexity, Binary Search, Sorting, Data Structures)
   - **Level 6**: Computer Networks & Internet (OSI & TCP/IP Layers, DNS-First Resolution, Switching & Routing, HTTP/HTTPS & TLS)
   - **Level 7**: Cybersecurity Fundamentals (CIA Triad, Malware/Phishing Defense, AES/RSA/SHA-256 Cryptography, Firewalls/VPN/2FA)
   - **Level 8**: Advanced Computer Concepts (Instruction Pipelining, Cache Coherency, Multiprocessing, Virtualization/Containers, Cloud & Databases)
   - **Level 9**: Mathematics for Computer Science (Propositional Logic, Set Theory, Combinatorics, Graph Theory, Probability, Mean vs Median Statistics)
2. **7 Interactive Educational Laboratories (`src/components/ComputerLaboratory.tsx`)**:
   - Explicitly labeled simplified educational simulation models:
     - **Lab A**: Interactive Motherboard & Bus Explorer
     - **Lab B**: 4-Stage CPU Instruction Cycle (`FETCH -> DECODE -> EXECUTE -> WRITEBACK`) with accurate stage-by-stage register/ALU transitions
     - **Lab C**: Volatile DRAM vs Non-Volatile NVMe SSD Power & Latency Lab
     - **Lab D**: 8-Bit Binary Torch Switchboard & Multi-Base Converter
     - **Lab E**: Logic Gate & Truth Table Laboratory
     - **Lab F**: DNS-First Resolution & TCP/IP Packet Routing Simulator
     - **Lab G**: Step-by-Step Binary Search $O(\log n)$ & Discrete Math / Statistics Visualizer
3. **Security & Role-Based Access Control (RBAC)**:
   - Firebase ID token verification via `firebase-admin` (`requireAuth`).
   - Strict administrator verification (`requireAdmin` / `isTrustedAdminUser`) using verified Firebase custom claims (`admin: true` or `role: 'admin'`) or a verified server-side email allowlist (`ADMIN_ALLOWLIST_EMAILS`). Email-substring matching is never used.
   - Public `/api/curriculum` payloads strip `correctAnswer`, `explanationEn`, and `explanationPa` so quiz answers are never leaked to the browser before submission.
   - Authenticated AI Tutor (`/api/ai/tutor`) derives learner identity strictly from the verified Firebase token (`req.user.uid`), enforces per-IP and per-user rate limits, enforces a daily per-user quota, and validates all inputs via strict Zod schemas.

---

## Environment Variables

Configure the following variables in `.env` (see `.env.example`):

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
APP_URL="http://localhost:3000"
DATABASE_URL="postgres://user:password@localhost:5432/postgres"
ADMIN_ALLOWLIST_EMAILS="babbshergill73@gmail.com"
PORT="3000"
```

---

## Setup, Database Migration, Seeding & Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Apply Version-Controlled PostgreSQL Migrations
Applies `/drizzle/0000_initial_schema.sql` transactionally and verifies database readiness:
```bash
npm run db:migrate
```

### 3. Seed the 9-Level Bilingual Curriculum (Idempotent & Transactional)
Seeds or updates all 9 courses, 18 bilingual lessons, 18 quizzes, 36+ assessment questions, and 6 achievement badges inside a single database transaction:
```bash
npm run db:seed
```

### 4. Run Automated Security, Integration & Curriculum Tests
Runs the Vitest + Supertest suite (`src/__tests__/academy.test.ts`):
```bash
npm test
```

### 5. Typecheck & Production Build
```bash
npm run lint
npm run build
```

### 6. Start the Server
```bash
# Development (Express + Vite middleware on PORT || 3000)
npm run dev

# Production
npm start
```
