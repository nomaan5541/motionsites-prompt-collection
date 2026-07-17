---
title: "Magnetic cursor"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780796678491-fluxo-hero.webp
---

# Magnetic cursor

```text
Create an award-winning, premium dark-mode SaaS hero section using vanilla HTML, CSS, and JavaScript. The page must be 100% responsive (Desktop, Tablet, Mobile) and feature a 3D animated background with a liquid glass navigation bar.

### Tech Stack
- HTML5
- Vanilla CSS3 (with CSS variables, flexbox, and CSS Grid)
- JavaScript (ES Modules)

### Visual Assets & Dependencies
- **Font**: Google Fonts `Inter` (Weights: 400, 500, 600, 700).
- **Icons/Logos**: Use high-quality inline SVGs for the logo, chevron dropdowns, checkmarks, company logos (Linear, loom, Remix, raycast, tailwindcss), and star review icons.
- **3D Background**: Import `TubesCursor` from `https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js`.

### Color Palette (CSS Variables)
- **Background**: `#030303` (deep dark)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa`
- **Text Muted**: `#71717a`
- **Brand Primary**: `#7c3aed`
- **Brand Secondary**: `#3b82f6`
- **Gradient Primary Button**: `linear-gradient(135deg, #8b5cf6, #3b82f6)`
- **Gradient Text Highlights**: `linear-gradient(135deg, #60a5fa, #c084fc, #f472b6)`
- **Glass Borders**: `rgba(255, 255, 255, 0.08)`
- **Glass Background**: `rgba(255, 255, 255, 0.02)`

### 3D Background Configuration (TubesCursor)
- Render the animation on a full-screen `<canvas id="canvas">` placed `position: fixed` with `z-index: -1` and `pointer-events: none`.
- Do NOT randomize colors on click. Use a static premium palette.
- **Colors & Lights**: Pink (`#ff008a`), Purple (`#8b5cf6`), Blue (`#3b82f6`), White (`#ffffff`).
- **Light Intensity**: `50`.

### Layout & Content Requirements

#### 1. Liquid Glass Navbar (Sticky Floating Pill)
- **Positioning**: `position: sticky; top: 24px; margin-top: 24px; z-index: 100;`
- **Dimensions**: `height: 80px; padding: 0 24px; border-radius: 100px; max-width: 1200px; margin: 24px auto 0;`
- **Glassmorphism Style**: `background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(16px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);`
- **Content**:
  - **Left**: "Fluxo" Logo (SVG icon of purple stacked squares + text).
  - **Center**: Links (Features, Solutions [with chevron], Pricing, Resources [with chevron], Changelog).
  - **Right**: "Log in" (text link) and "Start for free" (Primary gradient button, pill-shaped).
  - **Mobile**: Hide links/actions and show a hamburger icon (SVG).

#### 2. Mobile Menu Drawer
- Create an absolute positioned dropdown (`top: calc(80px + 24px); width: 100%;`).
- Apply the same liquid glass styling (`blur(16px) saturate(180%)`).
- Include JS to toggle an `.open` class on click of the hamburger icon.

#### 3. Hero Section
- **Spacing**: `padding: 80px 0 60px; display: flex; flex-direction: column; align-items: center; text-align: center;`
- **Badge**: A small pill badge `background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1)`. Inside, a primary purple tag "New", followed by text "AI Assistant is now live ->".
- **Headline (H1)**: "The all-in-one platform \
 to scale your SaaS". 
  - `font-size: 4.5rem; line-height: 1.1; font-weight: 700;`
  - The word "SaaS" must use the Gradient Text Highlights color.
- **Subheadline (P)**: "Build, launch, and grow your SaaS faster with powerful tools, \
 beautiful analytics, and AI that works for you." (`font-size: 1.25rem; max-width: 600px; color: #a1a1aa;`)
- **CTA Buttons**: 
  - "Start for free ->" (Primary gradient button).
  - "Book a demo" (Glass button: `background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1)`).

#### 4. Social Proof Section
- **Spacing**: `border-top: 1px solid rgba(255,255,255,0.05); padding: 40px 0 80px; margin-top: 40px;`
- **Text**: "Trusted by 10,000+ teams worldwide" (`color: #71717a;`).
- **Logos**: Flex row with 48px gap containing logos for Linear, loom, Remix, raycast, tailwindcss. Opacity should be `0.6`, transitioning to `1` on hover.
- **Reviews**: 5 yellow SVG stars (`fill: #EAB308`) alongside text "5.0/5 from 1,200+ reviews".

### Responsive Breakpoints
- **1024px**: Scale down hero title to `3.8rem` and logos gap to `32px`.
- **768px (Tablet)**: Hide desktop nav links, show hamburger menu. Adjust navbar side padding to `20px`. Stack CTA buttons vertically (100% width, max 320px). Title size `3rem`.
- **480px (Mobile)**: Page padding `16px`. Hide "Log in" text. Shrink badge text, buttons, and logos. Title size `2.2rem`. Stack review stars and text vertically.

```
