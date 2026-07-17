---
title: "FAQ - Insights"
category: Sections
subCategory: Faq
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783665330293-FAQ-Insights.webp
---

# FAQ - Insights

```text
You are an award-winning elite designer and expert web developer. Your objective is to build a premium, highly responsive, and visually stunning React + Tailwind CSS landing page from scratch. Follow this comprehensive specification exactly to recreate the required architecture, design system, layouts, and micro-interactions.

## 1. Visual Design System

### 1.1 Color Palette
- **Primary Background**: True Black (`#000000`) - The entire `body` must be set to true black.
- **Secondary Background (Cards & Containers)**: Dark Gray (`#0A0A0A`) and Deep Charcoal (`#141414`).
- **Borders**: Slate/Dark Gray (`#1F2937` or Tailwind `gray-800`).
- **Accent Color**: Metallic Gold (`#DBA85A`). Hover state for gold is slightly darker (`#C99849`).
- **Text Primary**: White (`#FFFFFF`).
- **Text Secondary**: Soft Gray (`#9CA3AF` or Tailwind `gray-400`).
- **Selection**: `selection:bg-[#DBA85A] selection:text-black`.

### 1.2 Typography
- **Font Family**: 'Inter', `system-ui`, `sans-serif` (set via Tailwind config).
- **Hierarchy & Scaling**:
  - **Eyebrow Headers**: `text-sm font-semibold tracking-[0.2em] uppercase text-[#DBA85A]`.
  - **Main Hero Header (H1)**: `text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white`.
  - **Section Headers (H2/H3)**: `text-4xl lg:text-5xl font-bold text-white mb-6`.
  - **Card Headers (H4)**: `text-xl font-bold text-white mb-4`.
  - **Body Text**: `text-gray-400 text-lg leading-relaxed` (for hero/large text) or `text-sm` (for cards).
  - **Nav/Links**: `text-sm font-medium`.

## 2. Layout Structure & Grid System

- **Global Container**: Use `max-w-7xl mx-auto px-6` for horizontal constraining of all content.
- **Section Spacing**: Standard vertical padding for sections is `py-24`. Hero has `pt-32 pb-20 lg:pt-48 lg:pb-32`.
- **Responsive Grids**:
  - Mobile: `grid-cols-1`
  - Tablet: `grid-cols-2`
  - Desktop: `grid-cols-3` or `grid-cols-4` depending on the section.

## 3. Section-By-Section Implementation

### 3.1 Navbar
- **Placement**: `absolute top-0 left-0 right-0 z-50`.
- **Brand**: Logo icon (three vertical gold bars scaling in height: `h-4`, `h-6`, `h-8` with `bg-[#DBA85A]`) next to `text-xl font-bold text-white tracking-tight` text saying "ARAISE".
- **Links**: Home, About, Services, Pricing, Contact in center. "Home" is active (has an absolute positioned `h-0.5 w-full bg-[#DBA85A] -bottom-2`). Other links are `text-gray-400 hover:text-white transition-colors`.
- **CTA**: "Get Started" button (`bg-[#DBA85A] text-black px-6 py-2.5 rounded-md font-semibold text-sm`). Hidden on mobile.

### 3.2 Hero Section
- **Background Effects**: Absolute positioned glow `bg-[#DBA85A]/10` with `blur-[120px] rounded-full` behind the content.
- **Left Column (Content)**: Eyebrow text, H1 ("Grow Your Wealth With Confidence"), Paragraph. Buttons: "Get Started" (solid gold with arrow icon) and "Learn More" (transparent with gold border).
- **Right Column (Video Element)**: 
  - **Critical Video Styling**: The container must be `relative w-full max-w-[440px] aspect-square lg:aspect-[4/3] mix-blend-screen`.
  - **Video Tag**: `<video autoPlay loop muted playsInline className="w-full h-full object-contain" src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/finance_coin_animation.mp4" />`.
  - *Note: `mix-blend-screen` over the true black body background will make the video's black background fully transparent, syncing it perfectly.*

### 3.3 Features Row
- **Placement**: Sits below the Hero, overlapping the fold. Contains a `bg-[#141414] border-gray-800 rounded-3xl p-8` container.
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`.
- **Content**: 4 items (Strategic Planning, Risk Management, Investment Insights, Personalized Support) using `lucide-react` icons (BarChart3, ShieldCheck, PieChart, User).
- **Hover**: Group hover scales the icon `scale-110` and turns the title text gold.

### 3.4 About Section
- **Layout**: 2 columns (`lg:grid-cols-2 gap-16`).
- **Left Column**: A `bg-[#0A0A0A]` card detailing trusted results, containing an inner list of 3 items (Precision Strategies, Consistent Growth, Secure Assets) with rounded `bg-[#141414]` icon wrappers. A background gradient `bg-gradient-to-tr from-[#DBA85A]/20 to-transparent blur-lg` rotated behind the card.
- **Right Column**: Eyebrow "About Us", Header "Empowering Your Financial Journey", text blocks, and a transparent gold-bordered CTA.

### 3.5 Services Section
- **Layout**: 3-column grid (`md:grid-cols-2 lg:grid-cols-3 gap-8`). Background is `#050505`.
- **Cards**: `bg-[#0A0A0A] border-gray-800 rounded-3xl p-8`. 
- **Hover Effects**: `hover:border-[#DBA85A]/50`. Each card has an absolute top-right glow `bg-[#DBA85A]/5 blur-3xl rounded-full` that increases to `opacity-10` on hover. The gold icon scales up and translates Y on hover. "Learn more" arrow translates X on hover.

### 3.6 Pricing Section
- **Layout**: 3 columns.
- **Tier 1 (Starter)**: `$49/month`, standard dark card.
- **Tier 2 (Professional)**: Highlighted middle card. `bg-[#141414] border-2 border-[#DBA85A] -translate-y-4 shadow-2xl shadow-[#DBA85A]/10`. Includes an absolute "Most Popular" top badge. Button is solid gold.
- **Tier 3 (Enterprise)**: "Custom", standard dark card.
- **Details**: Bullet lists using the `Check` icon.

### 3.7 Contact Section
- **Layout**: 2 columns.
- **Left (Info)**: `bg-[#0A0A0A]` card with email, phone, location. Icons inside `bg-[#141414]` circles.
- **Right (Form)**: Inputs/textarea use `bg-[#141414] border border-gray-800 rounded-xl px-4 py-3 text-white`. Focus states: `focus:border-[#DBA85A] focus:ring-1 focus:ring-[#DBA85A] outline-none`.

### 3.8 Footer
- **Layout**: 4-column top grid, border-t bottom strip.
- **Columns**: Brand/Mission, Company Links, Resources Links, Newsletter.
- **Icons**: Use generic icons for social links (`Globe`, `MessageCircle`, `Camera`) inside circular hover-able wrappers.
- **Newsletter**: Input + solid gold Subscribe button.

## 4. Animations & Micro-Interactions

- **Hover States**: Apply `transition-all duration-300` to interactable elements.
- **Buttons**: Primary buttons scale `hover:scale-105`.
- **Service Cards**: Use `group` classes to orchestrate icon bouncing (`group-hover:-translate-y-1 group-hover:scale-110`) and text sliding (`group-hover:translate-x-2` on arrows) inside cards.
- **Video Blending**: Rely entirely on CSS `mix-blend-screen` combined with a `bg-black` app root.

## 5. Technical Implementation Details

### 5.1 Architecture & Dependencies
- **Framework**: React 18+ (Vite).
- **Styling**: Tailwind CSS.
- **Icons**: `lucide-react` (Latest version. Do NOT use brand icons like Twitter/LinkedIn; use generic equivalents to prevent import crashes).
- **Component Structure**:
  - `src/App.tsx` (Main layout rendering standard components)
  - `src/components/Navbar.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Features.tsx`
  - `src/components/About.tsx`
  - `src/components/Services.tsx`
  - `src/components/Pricing.tsx`
  - `src/components/Contact.tsx`
  - `src/components/Footer.tsx`

### 5.2 Performance & SEO
- **Semantic HTML**: Use proper `<nav>`, `<main>`, `<section>`, and `<footer>` tags.
- **Video Performance**: Ensure the video tag uses `muted`, `playsInline`, and `autoPlay`.
- **Accessibility**: Ensure all buttons and links have distinct focus states. Maintain high contrast between gray text and black backgrounds.

Deliver the final code strictly implementing the above components, ensuring 100% responsiveness and pixel-perfect adherence to the dark and gold premium visual system.

```
