---
title: "Cryptoniq Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781623543589-Cryptoniq _Hero.webp
---

# Cryptoniq Hero

```text
# Premium React + Tailwind CSS Website Generation Prompt

## Instruction
You are an award-winning elite designer and expert web developer. Your objective is to build a premium, highly responsive, and visually stunning React + Tailwind CSS landing page from scratch. The final result must be a polished, production-ready, single-page application with fluid animations, flawless responsiveness, and a state-of-the-art "liquid glass" (glassmorphism) design aesthetic.

## Website Overview
- **Name:** Cryptoniq
- **Type:** Digital Asset / Crypto Investment Platform
- **Theme:** Dark mode, highly futuristic, sleek, and premium.
- **Structure:** Single page with smooth scrolling navigation (Hero, Products, Markets, Portfolio, Insights, Company).

## Complete Visual Design System
### Color Palette
- **Background:** Deep solid black (`#000000` or Tailwind `bg-black`).
- **Primary Accents:** Indigo and Purple gradients (`from-indigo-500` to `to-purple-500`).
  - Indigo-400 (`#818cf8`), Indigo-500 (`#6366f1`), Indigo-600 (`#4f46e5`)
  - Purple-400 (`#c084fc`), Purple-500 (`#a855f7`), Purple-600 (`#9333ea`)
- **Text:** 
  - Primary: Pure White (`#ffffff`)
  - Secondary/Body: Gray-400 (`#9ca3af`)
  - Muted: Gray-500 (`#6b7280`)
- **Glassmorphism Base:** Semi-transparent white (`bg-white/5` to `bg-white/10`) with `backdrop-blur-md` and `border-white/10`.

### Typography
- **Font Family:** 'Inter', sans-serif (Google Fonts).
- **Headings:** Bold (`font-bold`), tight letter spacing (`tracking-tight`), and tight line height (`leading-[1.1]`).
- **Body Text:** Regular weight, relaxed line height (`leading-relaxed`) for maximum readability.
- **Micro-copy/Tags:** Uppercase, extra-wide letter spacing (`tracking-wider`), small sizes (`text-xs`, `text-sm`).

## Layout Structure and Grid System
- **Container Width:** `max-w-7xl` centered horizontally (`mx-auto`).
- **Global Padding:** `px-6 md:px-12` to maintain edge spacing on mobile and desktop.
- **Section Spacing:** Generous vertical padding (`py-24`) between major sections to let the design breathe.

## Section-by-Section Content and Hierarchy

### 1. Navigation (Navbar)
- **Behavior:** Fixed to top (`fixed z-50`). Starts completely transparent with a transparent border (`border-transparent`) and transitions to a glass panel (`bg-white/5 backdrop-blur-md border border-white/10`) immediately upon scroll down (scrollY > 20).
- **Content:** Logo (gradient icon + "CRYPTONIQ"), centered desktop navigation links (smooth scroll anchors), and "Sign In" / "Get Started" buttons aligned right.
- **Mobile:** Hamburger menu that opens a fullscreen or dropdown glass-panel menu with standard links.

### 2. Hero Section
- **Background:** Fullscreen HTML5 video, muted, looping, autoplay, `object-cover`.
  - Video URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/crypto_bg_hero_1.mp4`
  - Overlays: Multi-layered black gradients (`from-black via-black/80 to-transparent`) to ensure text readability over the video.
- **Content:** Left-aligned (or centered) massive headline "Invest in Digital Assets with Confidence". Use a text gradient for "Confidence" (`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400`).
- **Buttons:** Primary solid indigo button ("Start Investing") and secondary transparent button with an outlined Play icon ("Watch Demo").

### 3. Products Section (Features)
- **Header:** Include a "Professional Grade" pill badge with a sparkles icon. The "Products" title text should have a purple-to-indigo gradient.
- **Layout:** 3-column CSS Grid (`grid-cols-1 md:grid-cols-3`).
- **Cards:** 3 deep dark cards (`bg-[#0d0d12]`) with glowing left-edge borders matching their theme colors (indigo, purple, blue).
- **Card Content:** Large subtle numbering (01, 02, 03) in the top right. Features list with custom filled circular checkmarks. Bottom pill badge indicating security/performance type (Enterprise Security, High Performance, Smart Returns).
- **Visuals:** Add large, blurred, colored background orbs absolutely positioned behind the grid.

### 4. Live Markets Section
- **Layout:** Header area with a title and a "View All Markets" button. Below it, a full-width card containing a responsive table.
- **Background Detail:** Use the special `.card-bg` utility class for the table container.
  - Image URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/crypto_bg_img.png`
  - Styling: `background-size: cover`, `background-position: center`, `background-blend-mode: overlay`, combined with `bg-black/80` to make it dark and legible.
- **Table Data:** 5 columns (Asset with icon/logo, Price, 24h Change with up/down arrows colored red/green, and an Action button appearing on hover). Use `overflow-x-auto` to allow horizontal scrolling on mobile.

### 5. Portfolio Section
- **Layout:** 2-column split (`grid-cols-1 lg:grid-cols-2`). Left text area, right visual component.
- **Visual Component:** A simulated UI of a portfolio dashboard wrapped in a glass card. Include mock data ("Total Balance", "+12.5%"), and simulated chart bars (varying heights, indigo/purple gradients). Include floating glass notification widgets (e.g., "Received 2.4 ETH") absolutely positioned overlapping the main card edges.

### 6. Insights Section (Blog/News)
- **Header:** Include a "Stay Informed" pill badge. The "Insights" title text should have a purple-to-indigo gradient. Include a "Read All Articles" outlined button.
- **Layout:** 3-column CSS Grid (`grid-cols-1 md:grid-cols-3`).
- **Cards:** Deep dark background (`bg-[#0b0a10]`) with a subtle purple bottom edge glow on hover. Top half image with a floating bookmark icon. Category pill badge with a hollow circle.
- **Local Images:**
  1. `/images/ethereum.png`
  2. `/images/bitcoin.png`
  3. `/images/scales.png`
- **Pagination:** Centered chevron controls and glowing dot indicators below the grid.
- **Interactions:** Image zooms in on card hover (`group-hover:scale-105 duration-700`). Card elevates slightly and reveals bottom glow.

### 7. Company & Footer Section
- **Stats Banner:** A 4-column responsive grid (`grid-cols-2 lg:grid-cols-4`) displaying key metrics ($2.4B+, 150K+, 99.99%). This banner must also use the `.card-bg` image texture with 80% black opacity.
- **Footer:** 2-column split. Left side: About text. Right side: Links grid (Company, Legal). Bottom border separator with copyright and social links.

## UI Components and Styling Details (Glassmorphism)
Create a `.glass-panel` utility class in CSS:
```css
.glass-panel {
  @apply bg-white/5 backdrop-blur-md border border-white/10;
}
```

Create a `.card-bg` utility class for specific textured cards:
```css
.card-bg {
  background-image: url('https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/crypto_bg_img.png');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  @apply bg-black/80;
}
```

## Animations and Micro-interactions
- **Scroll Reveal (Framer Motion):** Wrap section elements in `<motion.div>`.
  - Properties: `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`.
  - Apply staggered delays (`transition={{ delay: index * 0.1 }}`) for grid items.
- **Hover States:** 
  - Buttons: Slight scale up or background color shift.
  - Links: Arrow icons translate slightly to the right (`group-hover:translate-x-1`).
  - Cards: `hover:bg-white/10 transition-colors`.

## Responsive Behavior
- **Mobile First:** All default classes must be for mobile (e.g., `flex-col`, `grid-cols-1`, `text-4xl`).
- **Tablet/Desktop:** Use `md:` and `lg:` to convert layouts (e.g., `md:flex-row`, `md:grid-cols-3`, `text-6xl`).
- **Critical Fix:** Ensure the "Company" stats banner uses a true CSS grid (`grid-cols-2`) on mobile instead of `flex-wrap` to prevent awkward alignment. Ensure the "Markets" table has a horizontal scroll wrapper.

## Technical Implementation Details
- **Framework:** React (functional components, hooks).
- **Build Tool:** Vite.
- **Styling:** Tailwind CSS (v4 compatible, using `@theme` block or standard config for extending colors/fonts).
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion`.
- **Structure:** Break the application down into modular components (`Navbar.jsx`, `Hero.jsx`, `Products.jsx`, etc.) and assemble them in `App.jsx`.
- **Smooth Scrolling:** Add `html { scroll-behavior: smooth; }` to global CSS.

## Performance Optimization & SEO
- Add proper `<title>` and `<meta name="description">` tags in `index.html`.
- Ensure structural semantic HTML (`<section>`, `<nav>`, `<header>`, `<footer>`).
- Videos should be `muted` and `playsInline` to ensure autoplay on iOS/mobile devices.

## Final Directive
Generate the complete code structure required to run this application locally using `npm run dev`. Ensure absolute fidelity to the visual specs, including all provided URLs, gradients, animation timings, and layout rules.

```
