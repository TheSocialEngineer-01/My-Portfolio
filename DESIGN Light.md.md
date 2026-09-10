---
name: Portfolio
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae5'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#ebedfa'
  surface-container-high: '#e5e8f4'
  surface-container-highest: '#dfe2ee'
  on-surface: '#181c24'
  on-surface-variant: '#3b494b'
  inverse-surface: '#2c3039'
  inverse-on-surface: '#eef0fc'
  outline: '#6a7a7b'
  outline-variant: '#b9cacb'
  surface-tint: '#006970'
  primary: '#006970'
  on-primary: '#ffffff'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#00dbe9'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffd19c'
  on-tertiary-container: '#855300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#181c24'
  surface-variant: '#dfe2ee'
typography:
  display:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-gutter: 1rem
  grid-margin-desktop: 2rem
  grid-margin-mobile: 1rem
  density-base: 1rem
---

## Brand & Style

This design system delivers an engineered, terminal-adjacent aesthetic tailored for early-career portfolios spanning Artificial Intelligence, Cybersecurity, and Prompt Engineering. It discards consumer-tech float and soft marketing gloss in favor of the aesthetic authority found in developer consoles, lab documentation, and operational telemetry dashboards.

### Personality & Tone
- **Engineered & Precise:** Interfaces communicate competence through dense information architecture, strict lineation, and functional metadata rather than decorative illustrations.
- **Terminal-Adjacent:** Emulates modern production tooling, command-line interfaces, and IDE diagnostics without devolving into unreadable retro gimmicks.
- **Forensic & Transparent:** Exposes systems-level details—commit hashes, inference latencies, model weights, exploit classifications, and evaluation metrics—as foundational interface elements.

### Visual Dialect
- **Low-Contrast Structural Scaffolding:** Surfaces are anchored by clean light foundations delineated by crisp, hairline structural boundaries.
- **High Information Utility:** Compact paddings, tight grid tracks, and dense typographic scaling favor screen efficiency, allowing projects, technical case studies, and live logs to be consumed rapidly.

## Colors

The system is calibrated strictly for light mode, emphasizing clean light surfaces while preserving terminal contrast ratios, code syntax legibility, and cybersecurity workstation conventions.

### Foundation & Surfaces
- **Canvas Base (`#0B0F17`):** Deep slate-black vacuum backing that grounds the viewport.
- **Surface Level 1 (`#F8FAFC`):** Primary panel, drawer, and card background.
- **Surface Level 2 (`#F1F5F9`):** Nested panels, active code tabs, command inputs, and hover states.
- **Surface Inset (`#E2E8F0`):** Recessed terminal viewports and code execution windows.

### Structural Lines & Borders
- **Border Subtle (`#E2E8F0`):** Division of continuous content, quiet card boundaries.
- **Border Default (`#CBD5E1`):** Standard structural hairline dividers, modular grid bounding boxes.
- **Border Strong (`#94A3B8`):** Focused states, active pane framing.

### Accents & Telemetry Roles
- **Electric Terminal Cyan (`#00F0FF` / `#06B6D4` / `#22D3EE`):** Primary focal cue. Denotes focus rings, primary interactive execution triggers, terminal prompts, and highlighted tokens.
- **Signal Emerald (`#10B981`):** Operational status, live APIs, validated tests, secure benchmarks.
- **Warning Amber (`#F59E0B`):** In-progress experiments, model checkpoints, caution flags, heuristic bypasses.
- **Breach Crimson (`#EF4444`):** Vulnerability findings, red-team detections, breaking errors.

### Typography Contrast
- **Text High-Contrast (`#0F172A`):** Primary headings, critical data values, active code.
- **Text Standard (`#334155`):** Body narrative, documentation prose.
- **Text Muted (`#64748B`):** Subtext, standard metadata, structural tags.
- **Text Dim / Micro (`#94A3B8`):** Line numbers, commit hashes, inactive parameters.

## Typography

The typography strategy leverages **Geist** for crisp structural reading and **JetBrains Mono** for technical anchoring.

### Roles & Execution
- **System Pre-headers & Kicker Labels:** Rendered in `mono-label` uppercase with tracking (`letterSpacing: 0.04em`), frequently paired with terminal glyphs (e.g., `// 01_MODEL_ARCHITECTURE` or `STATUS::ACTIVE`).
- **Headings & Structural Hierarchy:** Set in `Geist` with negative tracking. Weights are restrained to `500` and `600`; heavy `700` and `800` weights are prohibited to avoid marketing hyperbole.
- **Body & Documentation:** `Geist` body text preserves high x-height clarity even when compressed into dense horizontal splits.
- **Code, Telemetry, and Metadata Badges:** All hash identifiers, parameters, token usages, benchmarks, and CLI arguments must be rendered using `JetBrains Mono`.

## Layout & Spacing

The layout is engineered around a 12-column modular fluid grid anchored to maximum content boundaries (1280px desktop cap). White space is treated as functional buffer rather than visual luxury.

### Spatial Logic
- **Horizontal Rules & Compartmentalization:** Layout sections are delimited by strict 1px horizontal rules (`#E2E8F0`) rather than exaggerated vertical margins.
- **Density Over Spread:** Internal component padding never exceeds `1.5rem` (`density-lg`). Secondary modules, sidebar panes, and inspector columns use tight `0.75rem` (`density-md`) paddings to preserve data density.
- **Desktop (>= 1024px):** 12-column grid with `1rem` gutters; allows side-by-side terminal logs, code previews, and technical narratives.
- **Tablet (768px - 1023px):** 8-column layout. Metadata columns collapse into horizontal summary strips directly above project details.
- **Mobile (< 768px):** 4-column layout with `1rem` gutters and edge margins. Dense code blocks and terminal tables scroll horizontally along the x-axis with an indicator bar rather than truncating critical output.

## Elevation & Depth

This design system avoids soft, floating, drop-shadow elevations in favor of strict architectural borders and tonal stepping.

### Surface Stratification
1. **Base Tier (Ground):** Canvas background `#0B0F17`.
2. **Structural Tier (Plates):** `#F8FAFC` overlaid with a uniform 1px border of `#E2E8F0` or `#CBD5E1`.
3. **Elevated & Focused Tier (Overlays & Menus):** `#F1F5F9` bordered with `#94A3B8`.

### Outline Discipline & Subtle Glows
- **Hairline Outlines:** All depth separation is mediated via 1px solid borders.
- **Targeted Phosphor Glows:** Shadows are deployed only to signal active electrical states or terminal focus. When active, elements receive an ambient cyan focus aura: `box-shadow: 0 0 0 1px #00F0FF, 0 0 12px rgba(0, 240, 255, 0.15)`.
- **Inner Vignettes:** Code panels and embedded shells feature a subtle inner shadow `inset 0 2px 4px rgba(0, 0, 0, 0.05)` to simulate an inset display bezel.

## Shapes

The design system employs a disciplined, micro-radius geometry (`roundedness: 1`). Rounding is kept strictly between 2px and 6px to reinforce structural rigidity and developer-tool aesthetics.

### Geometric Rules
- **Base Components (Badges, Buttons, Inputs, Chips):** `0.25rem` (4px). Clean, technical, and compact.
- **Containers & Code Cards:** `0.375rem` (6px) to `0.5rem` (8px). Matches the crisp border radius of developer workstations and terminal windows.
- **Pill Shapes & Circular Radiuses:** Strictly prohibited for functional UI (badges, filters, and buttons are never pill-shaped). Avatars and status pulse pings are the sole circular exceptions (`border-radius: 50%`).

## Components

### Buttons
- **Primary (Execute/Action):** Background `#00F0FF`, text `#0B0F17`, font `JetBrains Mono` 12px bold uppercase. Hover: `#22D3EE` with a tight cyan ambient bloom.
- **Secondary (Inspect/Source):** Background `#F8FAFC`, border 1px solid `#CBD5E1`, text `#334155`. Hover: border `#00F0FF`, text `#00F0FF`, background `#F1F5F9`.
- **Command / Ghost:** Flat background, text `#64748B`, mono label. Hover: text `#0F172A`.

### Chips & Metadata Tags
- **Structural Meta Tag:** Background `#F8FAFC`, border 1px solid `#E2E8F0`, font `mono-label`, text `#64748B`. Padding: `2px 8px`.
- **Status Indicator Badges:** Contains a live 6px indicator dot (e.g., `#10B981` pulse for verified/online models, `#F59E0B` for training checkpoint).

### Cards & Project Showcases
- **Lab Specimen Card:** Outer wrapper `#F8FAFC` with 1px border `#E2E8F0`.
- **Card Header:** Dedicated metadata banner (`#E2E8F0` background) separated by a 1px border `#E2E8F0`. Houses system labels: breadcrumbs, file paths (`/src/evals/prompt_injection_test.py`), latency benchmarks, or Git commit hash.
- **Interactive States:** Hover shifts border to `#CBD5E1` with hairline cyan accent along the top edge (`border-top: 1px solid #00F0FF`).

### Terminal / Code Insets
- **Shell Panels:** Background `#E2E8F0`, 1px border `#E2E8F0`, monospace text `#334155`. Includes line numbering in `#94A3B8`.
- **Prompt Engineering Playground Preview:** Clear distinction between system prompt containers (bordered with a subtle amber hue), user inputs (dim slate), and generated assistant telemetry (electric cyan output highlighting).

### Form Inputs & Search Filters
- **Inputs:** Background `#F8FAFC`, border 1px solid `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`. Focused state: border `#00F0FF`, outline none, faint cyan glow. Includes fixed monospace indicator prefix (e.g., `>` or `$`).
- **Checkboxes & Radios:** Sharp square micro-boxes (4px radius), unchecked border `#CBD5E1`, checked background `#00F0FF` with `#0B0F17` internal vector check.

### Key Metrics & Spec Tables
- **Data Strip / Key-Value Grids:** Dense row items bordered by horizontal dividers (`#E2E8F0`), key titles in `mono-micro` `#94A3B8` uppercase, values rendered in `mono-code` `#0F172A`.