---
title: Naturally
category: Templates
subCategory: Ecommerce
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781615010671-Naturally_Website.webp
---

# Naturally

```text
# Ultimate AI Prompt for Recreating "Naturally" Skincare Website

Act as an award-winning designer and expert web developer. Your objective is to recreate a high-end, modern, and highly-performant e-commerce landing page called "Naturally" with 100% pixel-perfect accuracy. The site focuses on natural, sustainable skincare and beauty products.

You must build this application using React, Vite, Tailwind CSS, and Framer Motion. Follow the comprehensive design system and technical specifications outlined below to ensure exact replication of the aesthetic, structure, and functionality.

---

## 1. Visual Design System

### 1.1 Color Palette
The color palette evokes nature, health, and premium organic quality. 
- **Naturally Green (Primary Action \u0026 Accents):** `#6A8F4A` 
- **Naturally Dark (Headings, Branding, Footers):** `#2E4018`
- **Naturally Light (Subtle Backgrounds):** `#F4F7F2`
- **White (Backgrounds \u0026 Cards):** `#FFFFFF`
- **Black (Overlays \u0026 Subtle Shadows):** `#000000`
- **Text Gray (Body Text):** `text-gray-600` (`#4B5563`), `text-gray-500` (`#6B7280`)

### 1.2 Typography
- **Serif Font (Headings \u0026 Logos):** `"Playfair Display", serif`
- **Sans-Serif Font (Body text, Buttons, Labels):** `'Inter', sans-serif`
- **Typographic Scale:**
  - Nav Logo: `2xl` (24px), font-serif, tracking-wide, text-naturally-dark
  - Hero Headline: `5xl` (48px) to `7xl` (72px) on md/lg, font-serif, leading-tight, text-naturally-dark
  - Section Headings: `3xl` (30px) to `5xl` (48px), font-serif, text-naturally-dark
  - Hero Subtitle: `xl` (20px), font-sans, text-gray-800
  - Body Text: `lg` (18px) to `base` (16px), font-sans, text-gray-600/700, leading-relaxed
  - Buttons/Nav Links: `sm` (14px) to `base` (16px), font-medium

---

## 2. Layout Structure \u0026 Grid System
- **Container Width:** Max width of `max-w-7xl` (80rem / 1280px) with horizontal padding `px-6` (mobile) to `px-12` (desktop).
- **Spacing Scale:** Standard Tailwind spacing. 
  - Section padding: `py-24` (96px).
  - Margin bottom for section headers: `mb-16` (64px).
  - Component gap in grids: `gap-8` (32px).
- **Responsive Grids:**
  - 1 column on mobile (`grid-cols-1`).
  - 2 columns on tablet (`sm:grid-cols-2` or `md:grid-cols-2`).
  - 3 or 4 columns on desktop depending on the section (`lg:grid-cols-4`, `md:grid-cols-3`).

---

## 3. Section-by-Section Hierarchy \u0026 Content

### 3.1 Navigation Bar (`Navbar.tsx`)
- **Fixed Position:** `fixed top-0 w-full z-50`.
- **Scroll Behavior:** 
  - Transparent background with `py-6` padding at top of page.
  - On scroll (>50px), transition to `bg-white/70 backdrop-blur-md shadow-sm py-4`.
- **Layout:** Flex container (`justify-between items-center`).
- **Left:** Logo containing a `Leaf` icon (rotating 12deg on hover) and "Naturally" in serif.
- **Center:** Desktop navigation links (`Shop`, `Categories`, `About Us`, `Sustainability`, `Blog`). Hover effect changes color to `#6A8F4A`. Links scroll smoothly to their respective anchors (`#shop`, `#categories`, etc.).
- **Right:** Icons for Search, User, ShoppingCart (with a green notification badge showing "2").
- **Mobile Menu:** Hamburger icon opening an animated `AnimatePresence` dropdown menu.

### 3.2 Hero Section (`Hero.tsx`)
- **Height:** Full viewport height (`min-h-screen relative`).
- **Background:** HTML5 Video playing automatically, muted, and looping in the background (`object-cover`). There is NO dark background overlay to keep the video bright and natural.
- **Content:** Centered text. 
  - Headline: "Pure, Natural Beauty." (text-naturally-dark).
  - Subheadline: "Discover our new collection of sustainable, organic skincare products designed to enhance your natural glow." (text-gray-800).
  - Buttons: 
    1. Primary: "Shop Collection" (solid background `#2E4018`, text white, hovers to `#1a250e`).
    2. Secondary: "Our Story" (transparent background, text-naturally-dark, border-none, custom expanding underline animation on hover).

### 3.3 Shop By Category (`Categories.tsx`) `id="categories"`
- **Background:** `#E8EFE5`.
- **Header:** "Shop by Category" centered above "Find exactly what your body needs with our specialized natural collections."
- **Grid:** 3 columns (Face Care, Body Care, Hair Care).
- **Cards:** Aspect ratio `4/5`. Image fills the container. 
  - Overlay: `bg-black/20` transitioning to `bg-black/40` on hover.
  - Text: Centered, white, serif, text-3xl.
  - Image Hover: Scale image to `1.05` duration 700ms.

### 3.4 Bestsellers / Shop (`Products.tsx`) `id="shop"`
- **Background:** White.
- **Header Structure:** Split layout. Title "Our Bestsellers" and subtitle on the left. "Shop All Products →" button on the right.
- **Grid:** 4 columns.
- **Cards:** 
  - Image Wrapper: Rounded-2xl, background `bg-naturally-light`, aspect ratio `4/5`.
  - Image Effect: Scale to `1.05` on hover.
  - "Add to Cart" Button: Appears from the bottom on hover (`translate-y-4` to `translate-y-0`), white backdrop blur, turns green on hover.
  - Details: Product Name (hover green) and Price underneath.

### 3.5 Sustainability / Features (`Features.tsx`) `id="sustainability"`
- **Background:** `bg-naturally-light` (`#F4F7F2`).
- **Header:** "Nature's Best, For You" centered.
- **Grid:** 3 columns.
- **Features:** 
  - 100% Organic (Leaf icon)
  - Sustainably Sourced (Recycle icon)
  - Clinically Proven (ShieldCheck icon)
- **Styling:** Icons are wrapped in a `w-16 h-16` white circle, centered, text centered underneath.

### 3.6 About Us (`About.tsx`) `id="about"`
- **Background:** White.
- **Layout:** Split `flex-col lg:flex-row`.
- **Left Side:** A single large image with aspect ratio `4/5` or `1/1`, rounded-2xl, with a subtle `bg-naturally-green/10` overlay.
- **Right Side:** 
  - Headline: "Rooted in Nature. Backed by Science." (serif).
  - Two paragraphs of text describing the brand's mission.
  - Button: "Read Our Full Story".

### 3.7 The Natural Journal / Blog (`Blog.tsx`) `id="blog"`
- **Background:** White.
- **Header Structure:** Split layout. Title "The Natural Journal" on left. "Read the Blog →" on right.
- **Grid:** 3 columns.
- **Cards:**
  - Image: Aspect ratio `3/2`, rounded-2xl, scales `1.05` on hover.
  - Badge: Absolute positioned badge on top left (e.g. "Education", "Lifestyle") `bg-white/90 backdrop-blur-sm`.
  - Date: text-sm, gray.
  - Title: Serif, text-xl, hovers to green.

### 3.8 Testimonials (`Testimonials.tsx`)
- **Background:** `bg-naturally-dark` (`#2E4018`), text white.
- **Header:** "Loved by our Community" (centered).
- **Grid:** 3 columns.
- **Cards:** 
  - Background: `bg-white/5` (glassmorphism feel), rounded-2xl, `backdrop-blur-sm`.
  - Content: 5-star rating (using Lucide React `Star` icons colored `#6A8F4A`), Quote text, Author Name, Author Title.

### 3.9 Footer (`Footer.tsx`)
- **Background:** White, border-top gray-200.
- **Layout:** 4 columns on desktop (`grid-cols-1 md:grid-cols-4`).
- **Column 1:** Brand Logo (Leaf icon + "Naturally"), short paragraph text, Social Media Icons (raw SVG icons for Instagram, Twitter, Facebook with hover transition to green).
- **Column 2, 3, 4:** Link lists (Shop, About, Legal). Links hover to `text-naturally-green`.
- **Bottom:** Copyright text centered, border-top gray-200.

---

## 4. Animations \u0026 Micro-Interactions (Framer Motion)
- **Smooth Scrolling:** The page uses native CSS smooth scrolling for all anchor links via `html { scroll-behavior: smooth; }`.
- **Scroll Reveal (Section Content Animations):** Every section header, paragraph, and grid item must fade in and slide up when scrolling into view using Framer Motion.
  - Wrapper: `<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>`
  - Staggering: Grid items should have an incremental delay `delay: index * 0.15` to cascade in.
- **Image Hovers:** Product, Category, and Blog images scale up `scale-105` over `duration-700 ease-out`.
- **Button Hover States:** Primary buttons transform colors (`bg-naturally-dark` to `#1a250e`). Secondary buttons use `after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-naturally-dark after:transition-all after:duration-300`.
- **Add to Cart Interaction:** Slides up from `translate-y-4` and fades in `opacity-0` to `opacity-100` on parent group hover.

---

## 5. Required Images / Assets
Use the following Unsplash URLs for 100% reliability (tested to return HTTP 200). Ensure `?q=80\u0026w=800\u0026auto=format\u0026fit=crop` is applied for optimization.
- **Categories:** `photo-1598440947619-2c35fc9aa908` (Face Care), `photo-1617897903246-719242758050` (Body Care), `photo-1527799820374-dcf8d9d4a388` (Hair Care).
- **Products:** `photo-1620916566398-39f1143ab7be` (Face Serum), `photo-1556228578-0d85b1a4d571` (Body Lotion), `photo-1608248543803-ba4f8c70ae0b` (Clay Mask), `photo-1599305090598-fe179d501227` (Scrub).
- **About:** `photo-1515377905703-c4788e51af15` (About Image).
- **Blog:** `photo-1556228453-efd6c1ff04f6` (Blog 1), `photo-1556228578-0d85b1a4d571` (Blog 2), `photo-1608248543803-ba4f8c70ae0b` (Blog 3).

---

## 6. Technical Implementation Details
- **Framework:** React 18 with Vite. Use functional components and hooks.
- **Styling:** Tailwind CSS 3.x. Add custom fonts to Google Fonts via `index.css` (`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600\u0026family=Playfair+Display:wght@400;500;600;700\u0026display=swap');`).
  - **Important CSS addition:** Add `html { scroll-behavior: smooth; }` in `index.css` under `@layer base` to enable smooth scrolling for anchor links across the site.
- **Icons:** Use `lucide-react`. *Note: Brand icons (Instagram, Facebook, Twitter) were removed from Lucide; implement them as raw inline SVGs in the Footer.*
- **File Architecture:**
  - `/src/App.tsx` (Main layout rendering all sections in order)
  - `/src/components/Navbar.tsx`
  - `/src/components/Hero.tsx`
  - `/src/components/Categories.tsx`
  - `/src/components/Products.tsx`
  - `/src/components/Features.tsx`
  - `/src/components/About.tsx`
  - `/src/components/Testimonials.tsx`
  - `/src/components/Blog.tsx`
  - `/src/components/Footer.tsx`
  - `/src/index.css` (Tailwind imports and custom fonts)
  - `/tailwind.config.js` (Custom color tokens and font families)

By following these instructions meticulously, you will yield an exact, award-winning replica of the "Naturally" Skincare landing page.

```
