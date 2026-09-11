# Architecture — Anubhav Budek Portfolio

## Stack
Modern Next.js Web App with React, TypeScript, Tailwind CSS, shadcn component architecture, and Framer Motion:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (`tsconfig.json`)
- **Styling**: Tailwind CSS (`tailwind.config.ts`) with custom Neumorphic Design Tokens + `app/globals.css`
- **Components**: Component-driven architecture supporting shadcn standard (`/components/ui`)
- **Animation**: Framer Motion (`framer-motion`) + custom CSS keyframe animations
- **Fonts**: Loaded via Google Fonts (`Plus Jakarta Sans`, `DM Sans`)

---

## Project Structure (shadcn Standard)
```
Portfolio/
  ├── app/
  │   ├── layout.tsx         → Root layout (metadata, fonts, global styles)
  │   ├── page.tsx           → Main home page (all sections, hooks, interactions)
  │   └── globals.css        → Neumorphic design token classes & Tailwind directives
  ├── components/
  │   ├── ui/
  │   │   └── container-scroll-animation.tsx  → Aceternity UI 3D container scroll component
  │   ├── NavBar.tsx         → Responsive navigation bar with mobile drawer
  │   ├── ScrollProgress.tsx → Scroll depth progress bar
  │   └── HeroScroll.tsx     → Hero section with ContainerScroll wrapper
  ├── lib/
  │   └── utils.ts           → shadcn utility functions (e.g. cn)
  ├── public/                → Static assets
  ├── components.json        → shadcn UI configuration
  ├── tailwind.config.ts     → Extended with neumorphic color palette, shadows, animations
  ├── tsconfig.json          → TypeScript config with `@/*` path alias
  ├── next.config.js         → Next.js configuration
  └── package.json           → Dependencies & scripts
```

---

## Why `/components/ui` Folder Structure?
In the **shadcn UI** and modern React/Next.js ecosystem:
1. **`/components/ui/`** is the convention-based default directory for shared, atomic, reusable primitive UI components (like buttons, dialogs, scroll containers, cards).
2. Feature-level and page-specific components reside in `/components/` (e.g., `NavBar.tsx`, `HeroScroll.tsx`).
3. This separation keeps third-party or atomic primitives isolated from application-specific business logic and content.

---

## Getting Started / Setup Instructions

### Prerequisites
- Install **Node.js** (v18.17 or higher) from [nodejs.org](https://nodejs.org).

### Running Locally
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

### Initializing shadcn CLI (if setting up from scratch)
```bash
npx shadcn@latest init
```
When prompted:
- Style: `Default`
- Base color: `Slate`
- CSS variables: `yes`
- Import alias for components: `@/components`
- Import alias for utils: `@/lib/utils`
