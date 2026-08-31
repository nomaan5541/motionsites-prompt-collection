Build a single full-screen (`h-screen w-full overflow-hidden`) hero page for **nexum** — a dark cinematic AI-ops landing hero with a full-bleed background video, glassmorphism nav/cards, and bottom-anchored content. Stack: React + Tailwind + `lucide-react` (`ChevronDown`, `Menu`, `X`). No routing. One section only.

### Fonts (exact)
Load from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Silkscreen:wght@400;700&display=swap
```
- Global body: `'Geist', -apple-system, BlinkMacSystemFont, sans-serif` with antialiased smoothing
- Stats number `"42,500+"` only: `fontFamily: "'Silkscreen', cursive"`, weight normal, tracking-tight
- Everything else is Geist

### Background video (exact URL + behavior)
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4
```
- Absolutely positioned `inset-0`, `h-full w-full object-cover`
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
- No overlay gradient; content sits directly over the video at `z-10`

### Page title
`Nexum Hero`

### Layout architecture
```
<section> full viewport
  <video> absolute full-bleed
  <div z-10 flex-col h-full>
    <nav> top bar
    [mobile overlay + slide-in panel]
    <main content> mt-auto bottom-anchored
      left: headline + email CTA
      right: two glass cards
```

Content is pinned to the bottom with `mt-auto`. On large screens: `lg:flex-row lg:items-end lg:justify-between`. On mobile/tablet: stacked column.

### Color / responsive text system (critical)
Many elements flip from near-black on small screens to white on `lg+` (because the video reads lighter/darker differently):
- Logo icon + “nexum” wordmark: `text/fill-[#010101]` → `lg:text/fill-white`
- H1: `text-[#010101]` → `lg:text-white`
- Stats number: `text-[#010101]` → `lg:text-white`
- Stats body: `text-[#010101]/70` → `lg:text-white/70`
- Testimonial text: `text-[#010101]/80` → `lg:text-white/80`
- Stratify name / Sara name: `#010101` → `lg:text-white`
- Role “Dir of Operations”: `#010101]/60` → `lg:text-white/60`
- Desktop nav links are always white/80 (desktop only shows at `md+`)

Primary CTA gradient (used on every “Get started” button):
```css
background: linear-gradient(to bottom, #2B2B2B, #101010)
```
Hover: `opacity-90`

### Logo (exact SVG)
24×24, viewBox `0 0 256 256`, path:
```
M 128 128 C 128 198.692 70.692 256 0 256 C 0 185.308 57.308 128 128 128 Z M 128 128 C 198.692 128 256 185.308 256 256 C 185.308 256 128 198.692 128 128 Z M 0 0 C 70.692 0 128 57.308 128 128 C 57.308 128 0 70.692 0 0 Z M 256 0 C 256 70.692 198.692 128 128 128 C 128 57.308 185.308 0 256 0 Z
```
Beside it: lowercase **nexum**, `text-lg font-semibold`, gap-2.

### Desktop navigation (`hidden md:flex`)
Padding: `px-5 py-5` → `sm:px-8 sm:py-6` → `lg:px-12`

**Glass pill nav cluster:**
- `rounded-full bg-white/10 px-1.5 py-1.5 backdrop-blur-lg`
- Links inside: Modules, Clientele, Solutions (with `ChevronDown` 3.5×3.5), Billing
- Each link: `rounded-full px-4 py-1.5 text-sm font-medium text-white/80`
- Hover: `bg-white/10 text-white`, `transition-colors`
- Gap between links: `gap-1`

**Separate “Get started” pill** to the right of the glass cluster (`gap-3`):
- `rounded-full px-5 text-sm font-medium text-white`
- `self-stretch` so height matches the glass pill
- Same dark vertical gradient as above

### Mobile hamburger (`md:hidden`)
- Circular button `h-10 w-10 rounded-full bg-white/10 backdrop-blur-lg`, `z-50`
- Icons swap with animation:
  - Menu icon: when open → `rotate-90 scale-0 opacity-0`; when closed → visible. `transition-all duration-300`
  - X icon: when open → visible; when closed → `-rotate-90 scale-0 opacity-0`
- Icon color: `#010101` → `lg:text-white`
- Opening menu locks `document.body.style.overflow = 'hidden'`

### Mobile menu glass overlay + drawer
1. **Backdrop:** `fixed inset-0 z-40 bg-black/80 backdrop-blur-md`, opacity 0→100 over 300ms; when closed also `pointer-events-none`
2. **Panel:** `fixed right-0 top-0 z-40 h-full w-72 bg-black/90 backdrop-blur-xl`
   - Closed: `translate-x-full`; open: `translate-x-0`
   - Transition: `duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`
3. **Links** (Modules, Clientele, Solutions, Billing) in `px-6 pt-24`, `gap-2`
   - Each: `rounded-xl px-4 py-3.5 text-base font-medium text-white/80`
   - Hover: `bg-white/10 text-white`
   - Staggered entrance when open: opacity 0→1, `translateX(24px)`→0, delay `(index+1)*60ms`
   - Solutions gets a ChevronDown on the right
4. **Bottom CTA** (`mt-auto px-6 pb-10`): full-width gradient “Get started” pill; fades/slides up with delay 300ms when open (`opacity` + `translateY(16px)`→0, 400ms)

### Hero headline (exact copy)
> Ship AI workers that grind while you rest

Typography:
- `text-3xl` → `sm:text-4xl` → `lg:text-[3.5rem]`
- `font-semibold leading-[1.1] tracking-tight`
- Container: `max-w-xl`

### Email CTA (exact)
Below headline with `mt-6 sm:mt-8`:
- Wrapper: on `sm+` becomes `inline-flex flex-row items-center rounded-full bg-white p-1.5`; on mobile stacks as column `gap-3`
- Email input:
  - placeholder: **Type your email**
  - Mobile: white pill `rounded-full bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400`
  - `sm+`: `sm:w-64 sm:rounded-none sm:bg-transparent sm:px-4 sm:py-2` (sits inside the white capsule)
  - `outline-none`
- Button “Get started”: gradient pill, `rounded-full px-6 py-3 sm:py-2.5 text-sm font-medium text-white`

### Glass cards (right side)
Container: `flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5`, full width on small, auto on large.

**Shared glass style:**
`rounded-2xl bg-white/10 backdrop-blur-lg p-5 sm:p-6`

#### Stats card (`sm:w-64`, flex-col justify-between)
- Big number: **42,500+** in Silkscreen, `text-3xl sm:text-4xl font-normal tracking-tight`
- Body: **Teams run Nexum to handle recurring ops daily.** — `text-sm leading-relaxed`, `mt-3 sm:mt-4`, opacity 70%

#### Testimonial card (`sm:w-64`)
- Header row: 6×6 black rounded square with bold white **S** + **Stratify** (`text-sm font-semibold`), gap-2, `mb-3 sm:mb-4`
- Quote (exact):
  > "With Nexum we went from managing tedious operational work to having AI agents that handle everything."
  — `text-sm leading-relaxed`, opacity 80%
- Footer: avatar + name
  - Avatar: `https://i.pravatar.cc/72?img=12`, 9×9 rounded-full, `object-cover`, fallback bg `bg-white/20`, alt “Sara Klein”
  - **Sara Klein** — `text-sm font-semibold`
  - **Dir of Operations** — `text-xs`, opacity 60%
  - `mt-4 sm:mt-5`, gap-3

### Bottom padding of main content block
`px-5 pb-8` → `sm:px-8 sm:pb-12` → `lg:px-12 lg:pb-16`
Inner vertical gap: `gap-6 sm:gap-8`

### Glass / blur tokens to preserve
| Element | Fill | Blur |
|--------|------|------|
| Desktop nav pill | `bg-white/10` | `backdrop-blur-lg` |
| Mobile hamburger | `bg-white/10` | `backdrop-blur-lg` |
| Mobile overlay | `bg-black/80` | `backdrop-blur-md` |
| Mobile drawer | `bg-black/90` | `backdrop-blur-xl` |
| Both cards | `bg-white/10` | `backdrop-blur-lg` |

### Animations / interactions checklist
1. Nav link hover color/bg transitions
2. CTA opacity hover
3. Menu ↔ X morph (rotate + scale + opacity, 300ms)
4. Overlay fade 300ms
5. Drawer slide with cubic-bezier(0.16, 1, 0.3, 1) over 500ms
6. Staggered mobile link slide-in (60ms steps)
7. Mobile bottom CTA delayed fade/slide (300ms delay)
8. Body scroll lock while menu open
9. Video continuous muted loop

### What NOT to add
No dark purple gradients, no extra sections, no stats strips in the nav, no cards in the hero beyond the two glass cards, no overlay labels on the video, no second scroll section. First viewport = brand + one headline + one CTA + two glass cards over the full-bleed CloudFront video.

Recreate pixel-faithfully: same copy, same URLs, same SVG path, same breakpoints, same glass opacities/blurs, same gradient, same Silkscreen on the stat number, same Geist everywhere else.