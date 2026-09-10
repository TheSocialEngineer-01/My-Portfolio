# Rules — Anubhav Budek Portfolio

Rules for any future work (human or AI agent) on this codebase. Read this before adding sections, components, or content.

## Content rules
1. **No invented content.** Never add a project, certification, award, metric, or quote that wasn't explicitly provided by Anubhav. If a section (e.g. Achievements) doesn't have enough real content yet, keep it short rather than padding it with filler.
2. **Every claim must be traceable.** If you can't point to where the fact came from (a message, a file, a document he uploaded), don't add it.
3. **Known tension to respect:** audience is recruiters/HR, stated purpose is personal brand. Don't let personality content (football, content creation) crowd out proof-of-ability content (skills, projects) — About should connect interests back to capability, not read as a personal blog.
4. Keep copy in plain, active, first-person voice. No corporate/marketing tone, no filler adjectives.

## Design system rules (Neumorphism / Soft UI — do not deviate without reason)
- **Background is always `#E0E5EC`.** Never use `bg-white` or any flat/opaque card background. Cards match the page background; shadows do all the work.
- **No borders, anywhere.** Edges are defined only by the dual shadow (light top-left, dark bottom-right).
- **Shadows must use `rgba`, never solid hex.** Use the existing CSS variables (`--ext`, `--ext-hover`, `--ext-sm`, `--inset`, `--inset-deep`, `--inset-sm`) — don't hand-roll a new shadow value inline.
- **Corners are soft:** 32px for containers/cards, 16px for buttons/base elements, 12px or full-round for inner elements. Nothing sharper than 16px.
- **Color is used sparingly.** The palette is monochromatic grey by design; `--accent` (violet) and `--accent-secondary` (teal) are for interactive/positive states only, not decoration.
- **Typography:** display text in "Plus Jakarta Sans" (500–800 weight), body text in "DM Sans" (400–700). Don't introduce a third typeface.
- **Motion:** 250–350ms `ease-out` for interactive transitions, longer (500ms+) only for ambient/decorative motion. Always respect `prefers-reduced-motion`. Don't add scattered fade-slide-up entrances on every section — motion should feel like a physical response (press, tilt, fill), not a generic reveal animation.

## Anti-patterns — do not introduce these
- Flat cards / `box-shadow: 0 1px 3px rgba(0,0,0,.1)` "SaaS card kit" look
- ALL-CAPS eyebrow labels above headings
- Numbered markers (01 / 02 / 03) on content that isn't actually sequential
- Gradient hero backgrounds behind the page (gradients are fine *inside* small elements like buttons/text, never on the root background)
- Any resume/cert/project link that doesn't go to a real, working URL

## Code conventions
- Vanilla HTML/CSS/JS only. No build tooling, no framework, no CSS preprocessor — keep it something that runs by opening the file.
- All colors, shadows, and radii come from the `:root` custom properties in `style.css`. Don't hardcode a new color or shadow — extend the token list if a genuinely new one is needed, and document it in Architecture.md.
- One `.btn-primary` action per section at most — don't let calls-to-action compete.
- Keep section `id`s stable (`about`, `skills`, `projects`, `education`, `achievements`, `contact`) since nav anchors depend on them.
- New interactive components should follow the existing card/icon-well/pill patterns in Architecture.md rather than introducing new container styles.

## Process rule
Before adding a new section, check it against PRD.md's stated audience and purpose, and check Phases.md to see if this work belongs in the current phase or a later one.
