---
title: CodeYoung
category: Templates
subCategory: Courses
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781673039780-CodeYoung_Website.webp
---

# CodeYoung

```text
# Master Web Implementation Specification: CodeYoung Premium Landing Page

Act as an award-winning Senior UI/UX Designer and Lead Frontend Engineer. Your task is to develop a state-of-the-art, premium EdTech landing page named "CodeYoung" with absolutely no compromises on design, animation quality, or responsiveness. 

You must strictly adhere to the following comprehensive specification to recreate this exact website down to the final pixel.

---

## 1. Visual Design System

### 1.1 Color Palette
- **Global Background**: `#dfdfdf`
- **Primary Brand (Purple)**: `#8b5cf6` (Tailwind `violet-500`) to `#6d28d9` (Tailwind `violet-700`)
- **Ad Banner Base**: `#6145ed`
- **Ad Banner Action (Yellow)**: `#ffd233` (Hover: `#fac214`)
- **Text (Dark)**: `#1e293b` (Tailwind `slate-800`)
- **Text (Subtext)**: `#64748b` (Tailwind `slate-500`)
- **Card Gradients**:
  - Yellow: `from-yellow-300 via-yellow-200 to-amber-200`
  - Orange: `from-orange-400 via-orange-300 to-rose-300`
  - Purple: `from-indigo-500 via-purple-400 to-pink-300`

### 1.2 Typography
- **Font Family**: Inter (Google Fonts) for all elements.
- **Weights**: 
  - Headlines: ExtraBold (800)
  - Navigation/Buttons: SemiBold (600)
  - Body/Descriptions: Medium (500)
- **Tracking/Letter Spacing**: `tracking-tight` on all H1/H2 headlines for a premium, compact feel.

### 1.3 Layout Structure \u0026 Grid
- **Max Width**: The central content container is capped at `max-w-[1400px]` (`max-w-[1200px]` for the AdBanner).
- **Responsive Padding**: Sections use `py-16 px-6` on mobile, scaling up to `md:py-32 px-6` on tablet/desktop to maintain white space balance.

---

## 2. Technical Implementation Details

### 2.1 Stack \u0026 Architecture
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS (with arbitrary value support enabled)
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Utility**: `clsx` for conditional classes.

### 2.2 File Structure
```
src/
├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── VideoBackground.tsx
    ├── Features.tsx
    ├── Courses.tsx
    ├── HowItWorks.tsx
    ├── AdBanner.tsx
    ├── Testimonials.tsx
    └── Footer.tsx
```

---

## 3. Section-by-Section Component Specification

### 3.1 Navigation (`Navbar.tsx`)
- **Design**: Fixed at the top (`fixed top-0 inset-x-0 z-50`).
- **Interaction (Liquid Glass)**: 
  - On page load (scroll `0`): Transparent background on desktop, `py-6`.
  - On scroll (`> 20px`): Morphs into a liquid glassmorphism header (`bg-white/60 backdrop-blur-xl shadow-sm border-b border-white/20 py-4`).
- **Mobile**: Hamburger menu toggling a full-screen glassmorphism overlay (`bg-white/95 backdrop-blur-sm`).

### 3.2 Hero \u0026 Interactive Video Background (`Hero.tsx` \u0026 `VideoBackground.tsx`)
- **Video Implementation**: 
  - Placed absolutely behind the Hero text (`absolute inset-0 z-0`).
  - Anchor: `scale-[0.85] origin-bottom-right`.
  - Edge Blending: Uses CSS mask compositing to perfectly fade the top, left, and right edges into the white background using intersecting linear gradients.
  - Interactivity: Tracks the user's mouse X-coordinate. The video's `currentTime` scrubs back and forth dynamically as the user moves their mouse across the screen.
- **Hero Content**:
  - `w-full lg:w-[50%]` constraint to keep text on the left.
  - Headline: `text-5xl md:text-[64px] lg:text-[76px]` with a tight line-height `leading-[1.05]`.
  - Action buttons stack on mobile (`flex-col sm:flex-row`).

### 3.3 Features Section (`Features.tsx`)
- **Design**: Alternating staggered layout (Text Left/Image Right -> Image Left/Text Right).
- **3D Floating Elements**: High-quality transparent 3D illustrations.
- **Background Orbs**: Behind every 3D image, place an absolutely positioned `div` with a massive blur (`blur-[80px] rounded-full w-[120%] h-[120%] bg-purple-500/20`) to create a glowing volumetric lighting effect.
- **Animation**: The 3D images must infinitely float vertically using Framer Motion (`animate={{ y: [0, -15, 0] }}`).

### 3.4 Courses (Bento Box) (`Courses.tsx`)
- **Design**: A 3-card premium Bento Box grid.
  - Desktop: Grid `grid-cols-1 md:grid-cols-2`. Card 1 \u0026 2 span 1 column. Card 3 spans 2 columns.
- **Cards**: 
  - Heavy border-radius (`rounded-[2.5rem]`).
  - Deep shadows (`shadow-xl shadow-gray-200/50`).
  - Immersive glossy backgrounds using `bg-gradient-to-br`.
  - Hover Effect: A glassmorphism overlay (`bg-white/10 backdrop-blur-[2px]`) that fades out to `bg-white/0` on hover.
- **Avatars**: The transparent 3D images MUST break out of their bounds. Position them absolutely (`bottom-0 right-0`), sized at `w-[130%]` or `w-[80%]`, shifting negatively on the X/Y axis so they overlap the physical edges of the cards.

### 3.5 How It Works (`HowItWorks.tsx`)
- **Design**: Continuous flowing timeline replacing standard rigid columns.
- **Visuals**: 
  - A subtle gradient line connecting the steps horizontally on desktop.
  - Icons housed inside floating Glassmorphism Orbs: `bg-white/10 backdrop-blur-xl` inside a gradient container, floating up `-translate-y-2` on hover.
  - Number badges overlapping the orb borders.

### 3.6 Ad Banner (`AdBanner.tsx`)
- **Design**: A massive rounded rectangle (`bg-[#6145ed]`).
- **Layout Requirements**: 
  - Must use `items-stretch` and explicit minimum heights (`min-h-[450px]`) to prevent image clipping.
  - The text container is vertically centered (`self-center`).
- **Student Image**: Positioned `absolute bottom-0 -right-[5%] md:-right-[15%] w-[130%] md:w-[140%] object-contain z-20 origin-bottom`. The bottom of the student must perfectly lock to the absolute bottom right of the purple banner.
- **Speech Bubble**: Rotated 3 degrees (`rotate-3`), floating above the laptop.

### 3.7 Testimonials (`Testimonials.tsx`)
- **Design**: Clean white cards with `rounded-3xl p-8 border border-gray-100 shadow-sm`.
- **Features**: Yellow star arrays, giant faded quotation mark in the background (`text-primary/10 rotate-180`).

---

## 4. Asset Manifest (Cloudinary CDN)

You must use these exact URLs for the media assets:

**Hero Interactive Video**:
- `https://res.cloudinary.com/dprydfxok/video/upload/v1781466533/boy_laptop_1_qywp6u.mp4`

**Features 3D Art**:
1. Live Classes: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/feature_1_live_1781448955520_b76soe.png`
2. Real Projects: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/feature_2_projects_1781448980561_g5dniq.png`
3. Experts: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/feature_3_experts_1781448998009_tcoe2t.png`

**Courses 3D Avatars**:
1. Little Coders: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/course_1_little_coders_1781448894497_tyboh1.png`
2. Young Innovators: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465987/course_2_young_innovators_1781448911749_lgkmr6.png`
3. Tech Leaders: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/course_3_tech_leaders_1781448931917_vd2jlq.png`

**Ad Banner Avatar**:
- Student Laptop: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781465988/studient_with_laptop_nnprij.png`

---

## 5. Motion \u0026 Interaction Specs
- **Scroll Reveal**: Wrap every major text block and container in a Framer Motion component. Use `initial={{ opacity: 0, y: 40 }}` and `whileInView={{ opacity: 1, y: 0 }}`. Use `viewport={{ once: true, margin: "-100px" }}` so animations trigger just before they enter the screen.
- **Staggering**: Map over arrays using `delay: idx * 0.15` to create waterfall entrance animations.
- **Infinite Looping**: 3D floating assets must use `repeat: Infinity, duration: 4, ease: "easeInOut"`.

## 6. Optimization \u0026 SEO
- Output semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`).
- Optimize all images using Cloudinary's `q_auto,f_auto` parameters (already present in the URLs).
- Ensure highly readable contrast ratios.

---
**Execution Mandate**: Do not cut corners. Do not simplify the Bento Box overlaps. Do not skip the video masking or the scroll-linked mouse tracking. Implement the design exactly as detailed above.

```
