---
name: Synthetic Protocol
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#fff3ea'
  on-tertiary: '#472a00'
  tertiary-container: '#ffd19c'
  on-tertiary-container: '#855300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
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
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.625rem
    fontWeight: '600'
    lineHeight: 2.125rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-md:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  mono-micro:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: 0.875rem
    letterSpacing: 0.02em
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
  density-xxs: 0.125rem
  density-xs: 0.25rem
  density-sm: 0.5rem
  density-md: 0.75rem
  density-base: 1rem
  density-lg: 1.5rem
  density-xl: 2rem
  density-xxl: 3rem
---

## Brand & Style

This design system delivers an engineered, terminal-adjacent aesthetic tailored for early-career portfolios spanning Artificial Intelligence, Cybersecurity, and Prompt Engineering. It discards consumer-tech float and soft marketing gloss in favor of the aesthetic authority found in developer consoles, lab documentation, and operational telemetry dashboards.

### Personality & Tone
- **Engineered & Precise:** Interfaces communicate competence through dense information architecture, strict lineation, and functional metadata rather than decorative illustrations.
- **Terminal-Adjacent:** Emulates modern production tooling, command-line interfaces, and IDE diagnostics without devolving into unreadable retro gimmicks.
- **Forensic & Transparent:** Exposes systems-level details—commit hashes, inference latencies, model weights, exploit classifications, and evaluation metrics—as foundational interface elements.

### Visual Dialect
- **Low-Contrast Structural Scaffolding:** Surfaces are anchored by deep charcoal foundations delineated by crisp, hairline structural boundaries.
- **High Information Utility:** Compact paddings, tight grid tracks, and dense typographic scaling favor screen efficiency, allowing projects, technical case studies, and live logs to be consumed rapidly.

## Colors

The system is calibrated strictly for dark mode. Light mode is intentionally omitted to preserve terminal contrast ratios, code syntax legibility, and cybersecurity workstation conventions.

### Foundation & Surfaces
- **Canvas Base (`#0B0F17`):** Deep slate-black vacuum backing that grounds the viewport.
- **Surface Level 1 (`#111827`):** Primary panel, drawer, and card background.
- **Surface Level 2 (`#1E293B`):** Nested panels, active code tabs, command inputs, and hover states.
- **Surface Inset (`#070A10`):** Recessed terminal viewports and code execution windows.

### Structural Lines & Borders
- **Border Subtle (`#1E293B`):** Division of continuous content, quiet card boundaries.
- **Border Default (`#334155`):** Standard structural hairline dividers, modular grid bounding boxes.
- **Border Strong (`#475569`):** Focused states, active pane framing.

### Accents & Telemetry Roles
- **Electric Terminal Cyan (`#00F0FF` / `#06B6D4` / `#22D3EE`):** Primary focal cue. Denotes focus rings, primary interactive execution triggers, terminal prompts, and highlighted tokens.
- **Signal Emerald (`#10B981`):** Operational status, live APIs, validated tests, secure benchmarks.
- **Warning Amber (`#F59E0B`):** In-progress experiments, model checkpoints, caution flags, heuristic bypasses.
- **Breach Crimson (`#EF4444`):** Vulnerability findings, red-team detections, breaking errors.

### Typography Contrast
- **Text High-Contrast (`#F8FAFC`):** Primary headings, critical data values, active code.
- **Text Standard (`#E2E8F0`):** Body narrative, documentation prose.
- **Text Muted (`#94A3B8`):** Subtext, standard metadata, structural tags.
- **Text Dim / Micro (`#64748B`):** Line numbers, commit hashes, inactive parameters.

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
- **Horizontal Rules & Compartmentalization:** Layout sections are delimited by strict 1px horizontal rules (`#1E293B`) rather than exaggerated vertical margins.
- **Density Over Spread:** Internal component padding never exceeds `1.5rem` (`density-lg`). Secondary modules, sidebar panes, and inspector columns use tight `0.75rem` (`density-md`) paddings to preserve data density.
- **Desktop (>= 1024px):** 12-column grid with `1rem` gutters; allows side-by-side terminal logs, code previews, and technical narratives.
- **Tablet (768px - 1023px):** 8-column layout. Metadata columns collapse into horizontal summary strips directly above project details.
- **Mobile (< 768px):** 4-column layout with `1rem` gutters and edge margins. Dense code blocks and terminal tables scroll horizontally along the x-axis with an indicator bar rather than truncating critical output.

## Elevation & Depth

This design system avoids soft, floating, drop-shadow elevations in favor of strict architectural borders and tonal stepping.

### Surface Stratification
1. **Base Tier (Ground):** Canvas background `#0B0F17`.
2. **Structural Tier (Plates):** `#111827` overlaid with a uniform 1px border of `#1E293B` or `#334155`.
3. **Elevated & Focused Tier (Overlays & Menus):** `#1E293B` bordered with `#475569`.

### Outline Discipline & Subtle Glows
- **Hairline Outlines:** All depth separation is mediated via 1px solid borders.
- **Targeted Phosphor Glows:** Shadows are deployed only to signal active electrical states or terminal focus. When active, elements receive an ambient cyan focus aura: `box-shadow: 0 0 0 1px #00F0FF, 0 0 12px rgba(0, 240, 255, 0.15)`.
- **Inner Vignettes:** Code panels and embedded shells feature a subtle inner shadow `inset 0 2px 4px rgba(0, 0, 0, 0.4)` to simulate an inset display bezel.

## Shapes

The design system employs a disciplined, micro-radius geometry (`roundedness: 1`). Rounding is kept strictly between 2px and 6px to reinforce structural rigidity and developer-tool aesthetics.

### Geometric Rules
- **Base Components (Badges, Buttons, Inputs, Chips):** `0.25rem` (4px). Clean, technical, and compact.
- **Containers & Code Cards:** `0.375rem` (6px) to `0.5rem` (8px). Matches the crisp border radius of developer workstations and terminal windows.
- **Pill Shapes & Circular Radiuses:** Strictly prohibited for functional UI (badges, filters, and buttons are never pill-shaped). Avatars and status pulse pings are the sole circular exceptions (`border-radius: 50%`).

## Components

### Buttons
- **Primary (Execute/Action):** Background `#00F0FF`, text `#0B0F17`, font `JetBrains Mono` 12px bold uppercase. Hover: `#22D3EE` with a tight cyan ambient bloom.
- **Secondary (Inspect/Source):** Background `#111827`, border 1px solid `#334155`, text `#E2E8F0`. Hover: border `#00F0FF`, text `#00F0FF`, background `#1E293B`.
- **Command / Ghost:** Flat background, text `#94A3B8`, mono label. Hover: text `#F8FAFC`.

### Chips & Metadata Tags
- **Structural Meta Tag:** Background `#111827`, border 1px solid `#1E293B`, font `mono-label`, text `#94A3B8`. Padding: `2px 8px`.
- **Status Indicator Badges:** Contains a live 6px indicator dot (e.g., `#10B981` pulse for verified/online models, `#F59E0B` for training checkpoint).

### Cards & Project Showcases
- **Lab Specimen Card:** Outer wrapper `#111827` with 1px border `#1E293B`.
- **Card Header:** Dedicated metadata banner (`#070A10` background) separated by a 1px border `#1E293B`. Houses system labels: breadcrumbs, file paths (`/src/evals/prompt_injection_test.py`), latency benchmarks, or Git commit hash.
- **Interactive States:** Hover shifts border to `#334155` with hairline cyan accent along the top edge (`border-top: 1px solid #00F0FF`).

### Terminal / Code Insets
- **Shell Panels:** Background `#070A10`, 1px border `#1E293B`, monospace text `#E2E8F0`. Includes line numbering in `#475569`.
- **Prompt Engineering Playground Preview:** Clear distinction between system prompt containers (bordered with a subtle amber hue), user inputs (dim slate), and generated assistant telemetry (electric cyan output highlighting).

### Form Inputs & Search Filters
- **Inputs:** Background `#0B0F17`, border 1px solid `#334155`, text `#F8FAFC`, placeholder `#64748B`. Focused state: border `#00F0FF`, outline none, faint cyan glow. Includes fixed monospace indicator prefix (e.g., `>` or `$`).
- **Checkboxes & Radios:** Sharp square micro-boxes (4px radius), unchecked border `#334155`, checked background `#00F0FF` with `#0B0F17` internal vector check.

### Key Metrics & Spec Tables
- **Data Strip / Key-Value Grids:** Dense row items bordered by horizontal dividers (`#1E293B`), key titles in `mono-micro` `#64748B` uppercase, values rendered in `mono-code` `#F8FAFC`.