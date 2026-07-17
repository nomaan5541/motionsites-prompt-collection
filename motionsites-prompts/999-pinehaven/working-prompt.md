---
title: Pinehaven
category: Templates
subCategory: Resort
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781621414423-pinehaven_resort.webp
---

# Pinehaven

```text
Act like an award-winning designer and elite frontend web developer. Your task is to build a premium, highly responsive, and visually stunning luxury eco-retreat landing page from scratch. The website must feel like a $50k+ custom-designed experience, balancing modern aesthetics, high-end visual storytelling, and flawless technical execution.

## 1. Visual Design System

### Color Palette
- **Cream (Primary Background)**: `#F7F3EA`
- **Warm White (Secondary Background/Cards)**: `#FCFAF5`
- **Forest Deep (Primary Text/Dark Sections)**: `#182019`
- **Forest (Buttons/Secondary Dark)**: `#2C3A2D`
- **Sage (Accents/Soft Backgrounds)**: `#8B9B88`
- **Olive (Highlights/Tags)**: `#7B8266`
- **Text Muted (Paragraphs)**: `#4A544C`

### Typography
- **Headings (Serif)**: `Playfair Display`, serif.
  - Weights: Medium (500), Bold (700).
  - Line Heights: Tight (`leading-[1.05]` to `leading-[1.1]`).
- **Body \u0026 UI (Sans-Serif)**: `Inter`, sans-serif.
  - Weights: Regular (400), Medium (500).
  - Line Heights: Relaxed (`leading-relaxed`).

### Layout Structure \u0026 Grid System
- **Max Width**: 7xl (`max-w-7xl` / 1280px) for inner containers.
- **Grid**: 12-column foundation translated into 1, 2, or 3-column Tailwind CSS grids depending on the section (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Spacing**: Generous paddings (`py-24`, `py-32`) to let content breathe.

---

## 2. Section-by-Section Content \u0026 Hierarchy

### A. Navbar
- **Layout**: Fixed top, transparent background that blurs on scroll (`backdrop-blur-md bg-cream/80`).
- **Logo**: "PINEHAVEN ECO RETREATS" with an organic leaf icon (lucide-react).
- **Links**: Stays, Experiences, About Us, Sustainability, Blog, Contact.
- **CTA**: "Book Your Stay" button (Forest green, rounded-full, pill shape).

### B. Hero Section
- **Layout**: Two-column split on desktop.
- **Left Column**: Main typographic lockup. "Escape. Recharge. Reconnect." with staggered italic and color treatments. Includes primary "Explore Retreats" CTA and a secondary outlined "View Experiences" button. Trust badge (4.9/5 stars) below.
- **Right Column**: A large autoplaying background video blended into the layout.
  - **Video Source URL**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/forest_hero_bg_video.mp4`
  - **Video Styling**: The video has no hard edges. It uses a CSS mask image (`mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%)`) to seamlessly fade into the cream background. Scaled to 150% to fill the grid.
- **Decorative**: Soft, slow-floating blurred blobs (Sage and Olive colors) in the background.

### C. Features (Amenities)
- **Grid**: 4 columns on desktop, 2 on tablet, 1 on mobile.
- **Items**: "Sustainable Design", "Farm to Table", "Forest Spa", "Guided Nature Walks".
- **Styling**: Minimalist icons (lucide-react) inside circular soft-colored wrappers.

### D. Retreat Cards (Accommodations)
- **Layout**: 3-column masonry/staggered feel.
- **Cards**: Large images, rounded corners (`rounded-[2rem]`), image zoom on hover.
- **Content**: Cabin names, prices ($350-$650/night), beds/baths tags.

### E. Experiences
- **Layout**: Image on left (tall portrait), text content and list on right.
- **Interactions**: List items stagger-fade in on scroll.

### F. Story / Sustainability
- **Layout**: Large, highly padded text block mixed with an overlapping image. Deep Forest background color, cream text.

### G. Newsletter
- **Layout**: Wide rounded card (`rounded-[3rem]`) with Forest Deep background.
- **Background**: Subtle texture and a dark blend of a forest cabin image to add depth.
- **Content**: "Get travel inspiration \u0026 exclusive offers." Input field with a pill-shaped submit button.

### H. Footer
- **Layout**: 5-column grid. Branding left, links middle, social right.
- **Socials**: Circular minimalist icons (Camera, MessageCircle, MapPin, Share2).

---

## 3. UI Components \u0026 Styling Details

### Precise Spacing, Margins, and Padding
- **Buttons**: `px-8 py-4 rounded-full`.
- **Sections**: Minimum top/bottom padding of `py-24` or `py-32`.
- **Cards**: Inner padding of `p-6` or `p-8`. Gap between grid items `gap-8` to `gap-12`.

### Hover, Focus, and Active States
- **Buttons**: Primary buttons scale up slightly (`hover:scale-[1.02]`), gain a shadow (`hover:shadow-xl`), and transition colors over 300ms.
- **Cards**: Image scales up on parent group hover (`group-hover:scale-105 transition-transform duration-700`).

---

## 4. Animations \u0026 Motion Design

**Library**: Framer Motion
- **Scroll Triggers**: All sections use `whileInView={{ opacity: 1, y: 0 }}` and `viewport={{ once: true }}` to trigger animations only once when scrolled into view.
- **Staggering**: Lists and grids use incremental delays (e.g., `delay: index * 0.1`) for cascading entrance effects.
- **Micro-interactions**: 
  - Floating background blobs in Hero use keyframes: `animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}` looping infinitely with `ease: "easeInOut"`.
- **Easing**: Default `duration: 0.8` with smooth natural spring or ease-out curves.

---

## 5. Image \u0026 Video Assets (Cloud URLs)

All images are served via Cloudinary CDN with automatic quality and format optimization.

- **Hero Background Video**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/forest_hero_bg_video.mp4`
- **Forest Cabin** (Retreat Card + Newsletter BG): `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620858/forest_cabin_wugege.jpg`
- **Lakeside Lodge** (Retreat Card): `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620858/lakeside_lodge_qr6syd.jpg`
- **Treehouse** (Retreat Card): `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620859/treehouse_o2o1nk.jpg`
- **Story Interior** (Our Story Section): `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620859/story_interior_xccfu0.jpg`

---

## 6. Technical Implementation Details

### Architecture \u0026 File Structure
- **Framework**: React.js with Vite (`npm create vite@latest`).
- **Styling**: Tailwind CSS (v3 or v4), utilizing the `@apply` directive for global typography in `index.css`.
- **Icons**: `lucide-react` (generic semantic icons; avoid brand logos).

### Performance Optimization \u0026 SEO
- **Images/Videos**: Videos must use `playsInline muted autoPlay loop`. Images should use `loading="lazy"` (except Hero).
- **Semantics**: Use proper HTML5 tags (`<section>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
- **Accessibility**: ARIA labels on all icon buttons, high contrast ratios (Cream vs Forest Deep), focus states on inputs, `alt` text on all images.

### Responsive Behavior
- **Mobile First**: Default classes for mobile (stacking columns, `p-6`, `text-4xl`).
- **Tablet**: `md:` prefix triggers 2-column layouts and adjusts paddings (`md:p-12`).
- **Desktop**: `lg:` prefix triggers full grids (3 or 4 columns), massive typography (`lg:text-7xl`), and exact positioning.

### Dependencies to Install
```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
```

*Follow this specification to the letter to perfectly recreate the Pinehaven Eco Retreats landing page.*

```
