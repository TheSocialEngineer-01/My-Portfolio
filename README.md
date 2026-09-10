# Anubhav Budek — Personal Portfolio & Engineering Showcase

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

**A modern, production-grade personal portfolio built with Next.js 14 App Router, TypeScript, Framer Motion, and a custom Neumorphic (Soft-UI) Design System.**

[Explore Live](#getting-started) • [Architecture](#architecture--project-structure) • [Key Features](#key-features--engineering-highlights) • [Contact](#contact--connect)

</div>

---

## 📌 Overview

This project is a high-performance, single-page portfolio engineered for **Anubhav Budek**, a Computer Science & Engineering undergraduate at **GIET University, Gunupur**.

Designed with **proof-of-ability** and **recruiter UX** as top priorities, the application highlights real-world technical skills, software projects (such as the *Offline Internship Management System* built for Munition India Limited), academic milestones, and dynamic web interfaces.

---

## 🚀 Key Features & Engineering Highlights

### 1. 🌟 Aceternity 3D Container Scroll Hero
- Features an immersive 3D card tilt & scroll-transform hero interaction powered by **Framer Motion**.
- Uses dynamic viewport scroll hooks (`useScroll`, `useTransform`) to scale and rotate the container realistically as the user navigates down the page.

### 2. 🎨 Custom Neumorphic (Soft-UI) Design System
- Built on a mathematically balanced, dual-shadow neumorphic model (light top-left reflection + dark bottom-right shadow) rather than generic flat borders.
- Strict design token enforcement using CSS custom properties (`--ext`, `--ext-hover`, `--inset`, `--inset-deep`).
- Fully customized in `tailwind.config.ts` and `app/globals.css`.

### 3. 🎯 Tactile 3D Tilt Physics
- Interactive skill, project, and achievement cards feature real-time perspective tracking responding to cursor velocity and direction.
- Automatically disables on touchscreens or when users request reduced motion.

### 4. 📊 Performance & Accessibility First
- **IntersectionObserver** utilized for staggered reveal-on-scroll animations and animated numeric counters without layout thrashing.
- Full compliance with `prefers-reduced-motion` media queries.
- Semantic HTML5 structure with ARIA labels, responsive drawer navigation, and zero accessibility blockers.

### 5. 📱 Dual Implementation (Next.js 14 + Static Prototype)
- Primary application: **Next.js 14 App Router** with full TypeScript typing and component-driven architecture.
- Standalone zero-dependency prototype (`index.html`, `style.css`, `script.js`) included for instant browser execution without Node.js tooling.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 18 |
| **Language** | TypeScript (Strict mode enabled) |
| **Styling** | Tailwind CSS 3.4, Custom CSS Neumorphic Variables |
| **Animation & 3D** | Framer Motion, CSS 3D Transforms, Aceternity UI Components |
| **Architecture** | shadcn/ui component pattern (`components/ui` + `lib/utils`) |
| **CI / CD** | GitHub Actions (`.github/workflows/ci.yml`) |
| **Typography** | Google Fonts (*Plus Jakarta Sans* for headers, *DM Sans* for body) |

---

## 📂 Architecture & Project Structure

The project follows the standard **shadcn UI** component-driven layout:

```
Portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml             # Automated CI pipeline for linting & building
├── app/
│   ├── layout.tsx             # Root layout with metadata and font definitions
│   ├── page.tsx               # Main interactive homepage & IntersectionObserver hooks
│   └── globals.css            # Neumorphic design tokens & Tailwind directives
├── components/
│   ├── ui/
│   │   └── container-scroll-animation.tsx  # Aceternity UI 3D container scroll primitive
│   ├── HeroScroll.tsx         # Hero section wrapping ContainerScroll
│   ├── NavBar.tsx             # Responsive header with mobile drawer
│   └── ScrollProgress.tsx     # Real-time scroll depth progress indicator
├── lib/
│   └── utils.ts               # Class merging utility (clsx + tailwind-merge)
├── docs/                      # Architectural & design specifications
│   ├── Architecture.md        # Technical architecture design
│   ├── PRD.md                 # Product Requirements Document
│   ├── Rules.md               # Strict styling & content guidelines
│   ├── Phases.md              # Project milestones and future roadmap
│   ├── DESIGN Dark.md.md      # Dark Neumorphism specifications
│   └── DESIGN Light.md.md     # Light Neumorphism specifications
├── public/                    # Static assets
├── index.html                 # Standalone static prototype
├── style.css                  # Standalone CSS design system
├── script.js                  # Standalone vanilla JS interactions
├── tailwind.config.ts         # Custom color tokens, shadows, and radii
├── tsconfig.json              # Path aliases (`@/*`) & TypeScript configuration
├── package.json               # Dependencies & scripts
└── .gitignore                 # Next.js and environment exclusions
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** 18.17.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheSocialEngineer-01/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👤 About the Author

- **Name**: Anubhav Budek
- **Education**: B.Tech in Computer Science & Engineering (2nd Year, 3rd Sem)
- **Institution**: GIET University, Gunupur (CGPA: 8.0)
- **Internship**: Munition India Limited (MIL) — Developed an *Offline Internship Management Application*
- **Interests**: Full-stack web development, Football, Content creation

---

## 📬 Contact & Connect

- **GitHub**: [@TheSocialEngineer-01](https://github.com/TheSocialEngineer-01)
- **Email**: [anubhavbudek10@gmail.com](mailto:anubhavbudek10@gmail.com)
- **Repository**: [https://github.com/TheSocialEngineer-01/My-Portfolio](https://github.com/TheSocialEngineer-01/My-Portfolio)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).
