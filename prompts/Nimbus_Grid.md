Build a single-page marketing site called **Nimbus Grid** — a fictional secure cloud storage capacity platform. Use plain HTML, CSS, and vanilla JS (Vite project). Match every detail below exactly.

---

## Global Setup

**Fonts (Google Fonts, preconnect both gstatic + googleapis):**
- `IBM Plex Sans` weights 400, 500 — body/headings
- `IBM Plex Mono` weights 400, 500 — labels, code, nav, CTAs

**CSS variables (`:root`):**
```
--bg: #17130d
--ink: #fff4d5
--muted: #dacaa1
--line: rgba(255,240,199,0.28)
--glass: rgba(255,239,199,0.16)
--glass-strong: rgba(255,239,199,0.24)
--accent: #ead09a
--accent-2: #ffd879
--deep: #4d3f24
--radius: 8px
color-scheme: dark
```

**Body:** dark warm background `radial-gradient(circle at top left, rgba(255,216,121,0.18), transparent 28rem) + var(--bg)`, ink color `#fff4d5`, IBM Plex Sans, font-size 1rem, line-height 1.375, letter-spacing 0.0175rem, antialiased. `<meta name="theme-color" content="#17130d">`.

**Smooth scroll** on `html`. Universal `box-sizing: border-box`. Anchor links inherit color, no underline.

---

## Section 1 — Hero

Full-viewport (`min-height: 100svh`) section with:

- **Animated shader background** as an `<iframe class="shader-bg" src="https://fragcoord.xyz/embed/c6zisyc6?viewport=1422x800" allow="autoplay; fullscreen" referrerpolicy="no-referrer">` absolutely positioned, centered with `transform: translate(-50%,-50%) scale(var(--shader-scale,5))`, `z-index:-3`, pointer-events none.
- **Fallback layer** `.shader-fallback` behind it (`z-index:-4`) — radial+linear warm-gold gradient (`#846f43 → #f0d27c → #fff2be`) so the page still looks intentional if the shader fails.
- JS: on load + debounced resize (180ms), recompute viewport so shader iframe matches window aspect, capped at 1422×800, scale = max(window.innerWidth/width, (window.innerHeight+110)/height).

**Site header (`.site-header`)** — flex row, `min-height: 42px`:
- Brand `NIMBUS GRID` in a glass pill (`padding: 9px 12px`, 1px ink-translucent border, `backdrop-filter: blur(18px) saturate(1.35)`, IBM Plex Mono 12px uppercase, inset highlight + soft shadow).
- Right side: nav (`Technology`, `Security`, `Capacity`, `Operations`) — Plex Mono 12px uppercase, 0.04rem letter-spacing, ink-translucent color, hover brightens.
- `.header-cta` button "Get Started" — same glass pill style, hover lifts 1px and brightens.

**Hero layout (grid, two rows):**
- **Top-left console card (`.console-card`)** width `min(396px, 42vw)`, dark `rgba(13,16,19,0.88)` panel, 5px radius, blurred backdrop:
  - Tabs row (`grid-template-columns: repeat(3,minmax(0,77px)) 1fr auto`): `CLI`, `API`, `Console`, plus two fake window controls (small square + a wide bar). Active tab gets accent color and a 2px accent underline.
  - Three panes (only one shown):
    - **CLI:** `<pre>` showing `$ nimbus storage create \ --workspace prod-web \ --tier encrypted-fast \ --region eu-central` with `$` in accent color, then a typing-output line `storage pool web-db-test queued` in accent.
    - **API:** `POST /v1/storage/pools` JSON body `{name:"web-db-test", tier:"encrypted-fast", quota:"8 TiB"}`, output `202 accepted: provisioning policy attached`.
    - **Console:** mock form fields — `Instance name = web-db-test` (typed), `Image = ubuntu-24.04-noble`, two-column row `Memory = 8 GiB` / `CPUs = 2`. Each `console-input` is a 33px high outlined dark slot, the two select-style ones get a `▾` glyph appended.
  - Pane size `min-height:153px`, Plex Mono 11px text.
  - JS typewriter: per active pane, find `[data-typed]`, type one char every 42ms, blinking `::after` cursor (1px wide bar, `cursor-blink` 1s steps animation).

- **Hero copy** at bottom-left:
  - H1: "Cloud space that scales with your business systems." — Plex Sans 400, `clamp(29px,3.5vw,56px)`, line-height 1, max-width 18ch.
  - Paragraph: "Nimbus Grid sells secure cloud storage capacity for companies that need fast onboarding, predictable throughput, encrypted collaboration, and modern data residency controls." — `clamp(12px,1.125vw,16.5px)`, ink color, max-width 720px.
  - Add a soft dark radial blur behind the text (`::before` with blurred ellipse, filter blur 26px) so copy stays readable over the shader.

---

## Section 2 — Platform accordion (scroll-driven)

`#platform`, `min-height: 420svh`, near-black `#050604` background with subtle gold radial top-right.

- `position: sticky` inner panel (`.accordion-inner`) at `top:0`, full viewport height, two-column grid `0.22fr | 0.78fr`.
- **Left nav** (`.accordion-nav`): four pill labels in Plex Mono 11px uppercase, each prefixed by a 7px square dot:
  1. `Programmable infra`
  2. `Data residency`
  3. `Elastic scaling`
  4. `Unified visibility`
  Active tab uses accent color and shifts right 2px.
- **Right stack** (`.accordion-stack`, height `min(80svh, 820px)`): four `.accordion-card` panels stacked with `position:absolute; inset:0`. Each card is a two-column grid (copy + visual) on a black background with a 1px ink top border.
  - **Card 1 — Programmable infra:** copy + a code window:
    `01 storage_pool = { 02 name = "client-vault" 03 region = "eu-central" 04 quota = "24 TiB" 05 policy = encrypted_fast 06 }`
  - **Card 2 — Data residency:** code window with `Region policy / EU Central locked / US East allowed / AP Southeast review / Retention 7 years`.
  - **Card 3 — Elastic scaling:** `Capacity forecast / Used 18.4 TiB / Reserved 24 TiB / Burst ready / Next tier approved`.
  - **Card 4 — Unified visibility:** `Operations view / Sync health stable / Cold data 14% / Policy drift 0 / Audit export live`.
  - Each visual: warm gold gradient backdrop (`linear-gradient(135deg, rgba(234,208,154,0.92), rgba(106,91,52,0.68))` + radial highlight), centered dark code window with 3 dot-spans, 8px radius, deep shadow.

**Scroll behavior (JS):**
- Track section's `getBoundingClientRect()` → progress 0..1 over `(height - viewport)`.
- Map to active card index (rounded). Card N's translateY animates from `stackHeight + collapsedHeight` (off-bottom) up to `index * collapsedHeight` (collapsed=84px desktop / 96px mobile), clamped per segment.
- Each card sets `--card-y` (transform) and `--card-clip-bottom` (clip-path inset) so the active card fully reveals while previous cards stay as visible header strips.
- Clicking a tab smooth-scrolls window to that card's segment.

---

## Section 3 — Pricing

`#pricing`, dark olive `#11120f` with light top wash and a soft cyan radial blur (`rgba(151,211,235,0.14)`) bleeding from the top-left.

**Top grid** (max-width 1320px, two columns ~`0.38 | 0.62`):
- **Left copy:**
  - Eyebrow `Pricing` (accent, Plex Mono 16px uppercase).
  - H2: "Only pay for cloud storage your teams actually use." `clamp(34px,4vw,68px)`, line-height 1.
  - Paragraph: "Scale capacity up for active projects and cool it down when workspaces go quiet. Nimbus Grid keeps storage, transfer, and policy costs visible before they become invoices."
- **Right pricing table** (`.pricing-table`): header row "Storage costs" + a billing toggle pill (`Per month` muted, `Per GiB` active = accent pill with `#241d0f` text). Then 5 rows separated by 1px ink lines, each `1fr | auto`:
  - Encrypted active storage — `$0.021 / GiB / month`
  - Warm collaboration tier — `$0.012 / GiB / month`
  - Cold retained archive — `$0.004 / GiB / month`
  - Regional accelerated transfer — `$0.018 / GiB moved`
  - Customer-managed key vault — `included`
  Right values use Plex Mono.

**Pricing bars** — full-bleed (`width: 100vw; margin-left: calc(50% - 50vw)`), 12-column grid, `height: 480px`, bars aligned to bottom. Each bar height = `var(--bar-height) + var(--bar-morph,0px)`, min-height 120px, gold gradient (alternating "muted" variant). Heights start at 12 fixed values (66/58/50/62/45/54/48/64/72/70/78/82%). Top edge fades into the section via gradient overlay.

**JS** ties bar height to scroll position: `progress = (viewport - rect.top) / (viewport + rect.height)`, then per-bar `morph = sin(progress*2π + i*0.72)*34 + cos(progress*π + i*0.34)*14` px, written to `--bar-morph`. Transitions `height 80ms linear`.

**Plan row** below — 3 columns (Starter / Team / Enterprise), each card max 300px:
- Starter: "For small teams consolidating shared project files." CTA `Start small`.
- Team: "For departments scaling collaboration and regional transfer." CTA `Build team plan`.
- Enterprise: "For organizations prioritizing governance, residency, and support." CTA `Talk to sales`.
CTAs: 42px tall pill, Plex Mono 12px uppercase, 1px ink translucent border, glass background, hover brightens.

---

## Section 4 — Security

`#security`, `#120f0a` background with two soft radial highlights (gold top-right, warm orange bottom-left), 1320px max-width.

**Heading row** (two columns `0.58 | 0.42`):
- Left: eyebrow `Security` + H2 "Modern encryption and compliance controls without slowing the team down."
- Right paragraph: "Role-based access, customer-managed keys, immutable retention, and regional storage policies give business clients a cloud layer that can satisfy procurement, IT, and legal from the first deployment."

**Three security cards** (`grid-template-columns: repeat(3, 1fr)`, gap `clamp(16px,2vw,22px)`, each `min-height: 464px`, square corners, 1px ink border, `#0f0c08` with subtle top wash):

1. **API card — "Full policy control"** + copy "First-class API access for storage pools, keys, regions, and retention rules. No vendor lock-in to proprietary workflows."
   - Visual: a black `.api-window` (bottom-left, ~58% width, 184px tall) with three dots and pre-text:
     ```
     -> nimbus auth login
     Enter code
     VAULT-9AMP

     -> policy attach
     workspace/client-vault
     ```
   - An overlapping `.api-spec` (top-right, gold-tinted dark `rgba(64,52,30,0.86)`, accent border) showing:
     ```
     openapi: 3.0.0
     info:
       title: Nimbus API
     paths:
       /storage/pools:
       /keys:
       /regions:
       /retention:
     ```

2. **Compliance card — "Full compliance"** + copy "SOC 2, ISO 27001, and GDPR-ready controls help teams satisfy audits, procurement reviews, and data residency requirements." Below: three rows, each a 24px circular accent badge with a checkmark drawn via `::before` (rotated bottom+left borders), small label, accent strong line:
   - SOC 2 — Type II controls
   - ISO 27001 — Security management
   - GDPR — Regional data policy
   Rows are `rgba(48,39,23,0.84)` with accent-translucent borders.

3. **Economics card — "Ownership and predictable economics"** + copy "Reserved capacity, clear transfer lanes, and audit-ready billing make storage spend easy to forecast across business units."
   - Visual: `<pre class="binary-map">` of 1s and 0s drawing a small graphic (10 rows, 28 columns, see the exact pattern in the original — a small icon shape carved out of 1s).
   - Below: 3-row asset table — `Reserved tier | 24 TiB`, `Transfer lane | EU Central`, `Revision | Q603`. Mono 11px uppercase labels, mixed-case values.

---

## Section 5 — Console showcase

`#plans`, dark teal-leaning `#070a0b` with cyan radial accent. Includes a faint repeating-stripe block (decorative `::after`, top-right).

**Heading row:** H2 "The biggest forward leap in business cloud storage operations." (`clamp(25px,4vw,52px)`, color `#dff5ff`) + right paragraph "A single control plane for provisioning storage pools, reviewing policy, watching growth, and shipping audit-ready reports without asking teams to change how they work."

**Figure label:** small Plex Mono pill `Fig. 2  Nimbus Grid web console`.

**Dashboard shell** (`.dashboard-shell`):
- Full-width, 8px radius, cyan-translucent border, `rgba(5,8,10,0.9)` background, deep shadow, perspective transform.
- Topbar: 3 dots + a placeholder title bar.
- Body grid `240px | 1fr`:
  - **Sidebar** "Client Vault" + nav items: Workspaces, **Storage Pools** (active, cyan tint), Retention, Access, Transfers, Reports.
  - **Main:** title row "Storage Pools" (cyan `#97d3eb`) + `New pool` cyan-outlined button. Then a 5-column table:
    | Name | Region | Used | Policy | State |
    | finance-vault | EU Central | 18.4 TiB | 7 years | Healthy |
    | design-assets | US East | 9.8 TiB | Versioned | Syncing |
    | legal-archive | EU Central | 42.1 TiB | Immutable | Healthy |
    | migration-lane | AP South | 6.2 TiB | Temporary | Queued |
    Headers in Plex Mono uppercase, States in cyan Plex Mono uppercase.
- **Toast** absolutely positioned bottom-right: "Pool created / finance-vault ready" (cyan, dark background).
- Hover effect: shell tilts subtly (`rotateX(1deg) rotateY(-1.2deg) translateY(-8px)`), border brightens, a sheen pseudo-element sweeps left→right (`transform: translateX(-34%) → 34%`, opacity 0→1).

---

## Section 6 — Operations cube

`#operations`, `#0c0d0a` with cyan + gold radial accents; left-to-right dark gradient overlay so the copy reads cleanly.

**Two columns** `0.44 | 0.56`:

- **Left copy:** eyebrow `Operations`, H2 "A control layer for every storage move your business makes." (`clamp(34px,4.4vw,72px)`, line-height 0.98), paragraph "Route migrations, active workspaces, archives, and compliance exports through one operational grid. Nimbus Grid keeps capacity, policy, and transfer status visible before teams hit a limit." CTA button `Plan operations` — solid accent gold pill, dark `#1b160d` text, hover swaps to `--accent-2` and lifts 2px.

- **Right visual:** a 3D cube with explode-on-click animation.
  - `.modal-cube-shell` button, perspective 1000px, `transform-style: preserve-3d`.
  - `.operations-core-cube` size `clamp(142px,18vw,250px)` with 6 `.cube-face` divs (front/back/right/left/top/bottom). Each face: 18px radius, gold-blue radial gradient (`radial-gradient(circle at 48% 44%, rgba(255,216,121,0.98)…) + linear 135deg cyan→gold→dark`), inset highlights and shadows.
  - Idle: floats with `core-cube-float` 6s ease-in-out infinite (small Y bob and rotation drift).
  - On click (toggle `is-exploded`): core cube scales to 0.72; ~14 `.cube-particle` shards (10 cube fragments + 4 small `.dot` spheres) translate to randomized `--tx/--ty/--tz` offsets with `--s`, `--r`, staggered `--d` delays. Particles use `cubic-bezier(0.17,0.78,0.18,1)` 760ms transform + 420ms opacity; start blurred + dim, end sharp. Use the exact 14 particle definitions from the original (see hero-section markup pattern, ranges roughly tx: -310..330, ty: -250..225, tz: 30..210, s: 0.09..0.58).
  - JS: on `click` (also Enter/Space when focused), toggle the `is-exploded` class. Focus outline 1px ink-translucent, offset 10px.

---

## Responsive Behavior

**`@media (max-width: 820px)`:**
- Header collapses to single column, nav wraps full-width, CTA full-width.
- Hero layout stacks; console card becomes full width; the diagonal `.console-line` decoration hides.
- Console tabs become 3 equal columns (48px tall). Window controls hide. Pane min-height 200px.
- Pricing top + plan row + security grid stack to single column.
- Accordion: nav 2-column grid above the stack, stack height 78svh, cards become 1-column.
- Console showcase: heading stacks; dashboard body single column; sidebar nav 2-cols; table drops Policy + State columns; toast becomes inline at bottom.
- Operations: stacks; cube `--spread: 0.72`.

**`@media (max-width: 520px)`:**
- Hero padding 22px 18px 0; H1 `clamp(28px,10vw,48px)`; copy 15px.
- Accordion nav 1-column.
- Operations cube `--spread: 0.48`; visual min-height 360px.
- Dashboard title row stacks vertically.

---

## Animations Summary

- `cursor-blink` — 1s infinite blinking caret in console (steps(2,start)).
- `core-cube-float` — 6s infinite gentle Y bob + tiny rotation drift on idle cube.
- Bar heights — JS-driven `--bar-morph` updates on scroll, eased to height with `transition: height 80ms linear`.
- Accordion cards — JS-driven `--card-y` translate + `--card-clip-bottom` clip-path follow scroll progress.
- Dashboard shell hover — 220ms ease 3D tilt + sheen sweep (520ms ease).
- Operations CTA hover — 160ms color/transform.
- Operations cube — click toggles `.is-exploded`: core 620ms cubic-bezier transform; shards 760ms cubic-bezier transform + 420ms opacity, staggered delays.
- Header CTA / accordion-tab / nav links — 160–200ms hover transitions.
- Smooth scroll on tab → section navigation.

---

## Project structure

```
index.html         (full markup)
styles.css         (all styles + media queries)
script.js          (shader resize, console tabs typing, accordion scroll, bars, cube)
package.json       (vite ^5.4.2, type:module, scripts: dev/build/preview)
vite.config.js     (default)
```

Build with `npm run build`. The site uses no frameworks, no images — every visual is CSS/SVG/text.