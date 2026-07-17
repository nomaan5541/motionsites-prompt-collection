---
title: "Calm Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781572621702-Calm_Hero.webp
---

# Calm Hero

```text
# Master Specification: Recreating the Mindful Hero Banner

Act as an award-winning designer and elite web developer. Your objective is precisely and meticulously recreate the following single-page application section: a stunning, immersive hero banner for a mindfulness web application. The implementation must mirror this specification exactly, translating every design decision, layout structure, animation sequence, and technical requirement into production-ready code.

---

## 1. Complete Visual Design System

### A. Color Palette
The color system creates a calming, natural, yet premium aesthetic that contrasts elegantly over a dark, atmospheric video background.

**Brand Colors:**
- **Brand Gold:** `#e2b05c` (Used for eyebrow text, decorative highlights, and subtle accents)
- **Brand Teal:** `#3ba4ab` (Used for the primary call-to-action button, conveying a sense of serenity and growth)

**Base & Overlay Colors (Tailwind Variables):**
- **Base Background:** `slate-900` (`#0f172a`) - serves as the fallback before the video loads.
- **Overlay 1:** Pure Black (`#000000`) with 30% opacity (`bg-black/30`) for a base darkening layer.
- **Overlay 2:** Gradient fading from left to right: `slate-950/90` (`#020617` at 90% opacity) via `slate-900/50` to transparent.
- **Overlay 3:** Gradient fading from bottom to top: `slate-950/80` via transparent to transparent.

**Text Colors:**
- **Primary Text:** White (`#ffffff`) at 100% opacity for headings.
- **Secondary Text:** White at 80% opacity (`text-white/80`) for subheadings and body.
- **Navigation Text:** White at 90% opacity (`text-white/90`) transitioning to solid white on hover.

### B. Typography
The typography contrasts a highly legible, modern sans-serif for UI elements with a refined, elegant serif for display headings.

- **Primary UI Font (Sans-Serif):** `Inter` (Weights: 300, 400, 500, 600)
- **Display Font (Serif):** `Playfair Display` (Weights: 400, 500, 600, Normal/Italic styles)

**Implementation Details:**
- **Nav Links:** `Inter`, text-sm to text-base, font-medium, tracking-wide.
- **Eyebrow Text:** `Inter`, text-sm to text-base, font-medium, tracking-wide.
- **Headline:** `Playfair Display`, text-3xl, scaling up to text-5xl on desktop. Font-weight: normal, leading: tightly packed (`leading-[1.1]`).
- **Subheadline:** `Inter`, text-lg to text-xl, font-light, leading-relaxed.

---

## 2. Layout Structure & Grid System

- **Global Wrapper:** Minimal height of the screen (`min-h-screen`), full width (`w-full`), relative positioning, hidden overflow.
- **Main Content Container:** `max-w-screen-2xl`, centered (`mx-auto`), relative positioning (z-index: 10), flex-column layout.
- **Padding:**
  - Mobile: `px-6`
  - Tablet: `px-12`
  - Desktop: `px-24`

---

## 3. Section-by-Section Hierarchy & Components

### A. The Immersive Background (Video & Overlays)
- **Asset:** A looping mindfulness video.
  - **URL:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_video_mindfull.mp4`
- **Video Element:** Positioned absolutely, filling the parent (`w-full h-full`), `object-cover`. Scaled up slightly (`scale-105`) to create a smooth, bleeding edge. Must have `autoPlay`, `loop`, `muted`, and `playsInline` attributes.
- **Overlay Stack:**
  1. Base darkening: `absolute inset-0 bg-black/30 z-0`
  2. Horizontal gradient (left anchor): `absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent z-0`
  3. Vertical gradient (bottom anchor): `absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-0`

### B. Navigation Header
- **Layout:** Full width, padded nicely (`py-8`), flex container centered.
- **Structure:** 
  - Left Links: "Home", "Practices" 
  - Center Box: Circular logo container `w-14 h-14` with a thin white border (`border border-white`), rounded-full, containing a `Flower2` icon (from lucide-react with `strokeWidth={1.2}`).
  - Right Links: "Journal", "Community"
- **Visibility:** Text links are hidden on mobile (`hidden sm:block`) keeping only the logo visible on small devices. 
- **Spacing:** `gap-6` scaling to `gap-16` on medium+ screens. Logo has horizontal margins (`mx-2 md:mx-6`).

### C. Hero Content Section
- **Layout:** Flex column layout taking up the remaining space (`flex-1`), vertically centered (`justify-center`), padded heavily at the bottom (`pb-24`) and minimally at the top (`pt-10`).
- **Content Max-Width:** Confined to `max-w-2xl` on the left side (due to layout flow and left-aligned text).

**Element Cascade:**
1. **Eyebrow:** "Small Steps. Lasting Change." (Brand Gold color, margin-bottom: 24px)
2. **Main Headline:** "Calm Your Mind, [Line Break] Transform Your Life." (White, margin-bottom: 32px)
3. **Decorative Divider:** A horizontal flex container featuring a golden `Leaf` icon (stroke width 1.5) followed by a thin golden line (`h-px w-32 bg-brand-gold/30`).
4. **Subheadline:** "Daily practices to reduce stress, build mindfulness, and create a life of balance and purpose." (White 80% opacity, margin-bottom: 40px, max-width tailored to `max-w-lg`).
5. **Call-To-Action Group:**
   - **Primary Button (Start Your Journey):** `bg-brand-teal` with right arrow icon. `px-8 py-4` rounded-full, font-medium, flex, center-aligned, gap-3.
   - **Secondary Button (Learn More):** Outline style. Border a semi-transparent white (`border-white/40`), transparent background, right arrow icon. `px-8 py-4` rounded-full, font-medium, flex, center-aligned, gap-3.

---

## 4. Animations & Micro-Interactions

### A. Initial Load Animations (Framer Motion / Motion for React)
- **Navigation Drop-in:** 
  - Initial: `opacity: 0, y: -20`
  - Animate: `opacity: 1, y: 0`
  - Transition: Duration 1.0s, ease "easeOut".
- **Content Stagger (Staggered Fade/Slide Up):**
  - **Container:** `staggerChildren: 0.15` delay, `delayChildren: 0.3`.
  - **Children (Eyebrow, Headline, Divider, Subhead, Buttons):**
    - Initial: `opacity: 0, y: 30`
    - Animate: `opacity: 1, y: 0`
    - Transition: Duration 0.8s, custom bezier easing `[0.16, 1, 0.3, 1]` for an elegant, snappy yet smooth arrival.

### B. Hover & Focus States (Tailwind Pseudo-classes)
- **Nav Links:** Base text-white/90. On hover: `hover:text-white transition-colors`.
- **Logo Container:** Base transparent. On hover: softly lit `hover:bg-white/10 transition-colors`.
- **Primary Button:** Base `bg-brand-teal`. On hover: shifts slightly lighter `hover:bg-[#47c4c9]`. The contained Arrow icon transitions right (`group-hover:translate-x-1 transition-transform`).
- **Secondary Button:** Base `border-white/40`, background transparent. On hover: Border becomes solid `hover:border-white`, background gains a slight white tint `hover:bg-white/5`. The contained Arrow (base opacity 70%) becomes 100% opaque and translates right (`group-hover:opacity-100 group-hover:translate-x-1`).

---

## 5. Responsive Behavior

- **Mobile First (`< 640px`):** 
  - Text links in nav are hidden.
  - Headline font size is `text-3xl`.
  - Content padding and gaps are minimized (`px-6`, button `gap-4`).
- **Tablet/Medium (`>= 768px`):** 
  - Text links appear.
  - Headline font size scales to `text-4xl`.
  - Spacing increases (`px-12`).
  - Flex layouts space out more comfortably.
- **Desktop/Large (`>= 1024px`):**
  - Headline font size scales to `text-5xl`.
  - Lateral container padding increases to `px-24`.
  - Background overlay gradients effectively block out the video cleanly on the left hemisphere, preserving legibility.

---

## 6. Technical Implementation Details

### A. Frontend Architecture & Stack
- **Framework:** React 19+
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4+ (Mobile-first, utility classes)
- **Animation Engine:** `motion/react` (Framer Motion API equivalent)
- **Iconography:** `lucide-react` (Usage of `ArrowRight`, `Leaf`, `Flower2`)

### B. Required Project Setup
- **CSS Configuration:** The main CSS (`index.css`) must import the Google fonts (`Inter` and `Playfair Display`) and set up custom Tailwind theme variables under the `@theme` directive mapping `--font-sans` to Inter, `--font-serif` to Playfair Display, `--color-brand-gold` to `#e2b05c`, and `--color-brand-teal` to `#3ba4ab`.
- **File Structure:** Core visuals and layout reside inside `src/App.tsx`. 

### C. Performance & SEO Expectations
- **Performance:** Ensure no layout shift (CLS). The background color fallback (`bg-slate-900`) should match the darkest gradients of the video to provide continuity while the video asset loads. Use `playsInline` on video to prevent full-screen hijacking on iOS devices.
- **Accessibility:** Use proper semantic HTML where appropriate (`nav`, `h1`, `p`, `button`). The gradients over the video are completely intentional to ensure high contrast text legibility (WCAG AAA compliance for the left-aligned hero text). The video avoids rapid flashing to be mindful of vestibular disorders.
- **SEO Elements:** Though a single-page element, ensure the main `h1` encapsulates the core value proposition text exactly as written.

Reconstruct this UI identically, prioritizing fluid animation, perfect whitespace distribution, precise typography handling, and an overarching serene visual mood.

```
