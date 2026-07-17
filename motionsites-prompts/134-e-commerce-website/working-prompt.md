# E-commerce Website

> **Category:** Landing Page  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

_No video preview available for this prompt._

---

## 📋 Prompt

```text
Prompt to recreate this landing page:

Build a health/wellness e-commerce landing page using React, Vite, Tailwind CSS, TypeScript, and shadcn/ui. The design is clean, minimal, and modern with a near-white background (hsl(0 0% 98%)), near-black foreground (hsl(11 6% 11%)), and fully rounded borders (border-radius: 9999px). No custom fonts — use system defaults. The page has the following sections in order:

1. Sticky Navbar — bg-gray-50, sticky top, z-50. Left: text logo ("Logo", text-xl font-semibold). Center: horizontal nav links (Weight Loss, Strength, Anti-Aging, Hair Growth, Mood, More) hidden on mobile, styled with text-sm font-medium and hover opacity transition. Right: a solid dark "Get started" button (hidden on mobile) + a gradient-border button with a User icon and "Login" text. The gradient button has a 2px border using bg-gradient-to-r from-[#84a9fa] via-[#fb6fec] via-[#fba69e] via-[#fdd4a3] via-[#fb6fec] to-[#84a9fa] with bg-[length:200%] and a hover animation that shifts the gradient (backgroundPosition 0%→200% over 0.8s). The inner button has a white/background fill and rounded-full.

2. Hero Section — Two-column grid (lg:grid-cols-2). Left column: a rating badge (green circle with star icon, "4.5 Average Rating • 453 Reviews" in a pill with subtle shadow), a large heading ("Compounded Semaglutide for Weight Loss", text-4xl md:text-5xl lg:text-6xl font-semibold), three feature items with icons (Syringe, DollarSign, Truck from lucide-react) and text, a divider line, a pricing row ("$296/mo" bold + "*No matter the dose" subtext + "Get Started" button), and an info card (image thumbnail + "Is This Right for You?" + arrow link). Right column (hidden on mobile): two vertical auto-scrolling image marquees side by side. Each column has 4 product images duplicated for seamless looping. Uses CSS @keyframes marquee (translateY 0→-50%) and marquee-reverse (translateY -50%→0) at 30s linear infinite. Top and bottom have fade gradients (bg-gradient-to-b/t from-background to-transparent, h-32) overlaying the marquee.

3. Products Grid Section — Centered header with uppercase small text "OUR MEDS" + large heading "Medication Made Affordable Without The Insurance". Below: 3-column grid (md:grid-cols-2 lg:grid-cols-3) of product cards. Each card: square image with rounded-2xl shadow-lg hover:shadow-xl, title (text-2xl font-semibold), price with "per month" suffix, and a full-width gradient-border "Get Started" button that links to /product/{handle}.

4. Weight Loss Section — bg-gray-50, two-column grid. Left: heading "Lose weight with a plan made just for you." (text-4xl md:text-5xl lg:text-6xl font-semibold), three bullet features with Calendar, Pill, CheckCircle icons, two buttons ("Get started" solid + gradient "See if you're eligible"), and a small disclaimer. Right: a single product image with rounded-2xl.

5. Product Carousel Section — bg-gray-100, two-column grid. Left: a static full-height card (h-[32rem] sm:h-[40rem] md:h-[48rem] rounded-3xl) with background image, overlay text (price label, price, title), and gradient "Get Started" button. Right: a horizontal carousel of similar cards with left/right chevron buttons (bg-neutral-100/80 rounded-full) and pagination dots at bottom. Cards have group-hover:scale-105 on the background image.

6. Science & Nature Section — bg-gray-50 py-28, centered heading "Discover the harmony of science and nature." + two buttons. Below: 6-column grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-6) of feature badges — each is a white card (rounded-2xl p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]) with a large icon (Rabbit, TreePine, Leaf, FlaskConical, Atom, Wheat — all w-20 h-20 strokeWidth-1.5) and label text with line breaks.

7. FAQ Section — bg-gray-50, uses Radix accordion. Each item is a white card (rounded-3xl px-14 py-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] border-none) with text-2xl font-semibold trigger and text-lg content. Items are spaced with space-y-4. 5 FAQ items about GLP-1 programs, insurance, medications, pricing guarantee, and plan inclusions.

8. Health Guide Section — bg-gray-50 py-28, centered heading "Your guide to health and wellness starts here." + two buttons. Below: 4-column grid of guide cards. Each card: white with rounded-3xl, image at top (h-48 object-cover rounded-3xl), description text, and a pill-shaped link button with category name + chevron icon, styled with border-2 border-zinc-900/[0.13] rounded-full.

9. Footer — bg-zinc-900 text-white. Two-column layout: left has logo + email signup (input with rounded-full + submit button) + privacy text. Right has 3-column link grid (Popular, Company, Legal). Below divider: social media SVG icons (Facebook, Instagram, X, TikTok, LinkedIn, YouTube) + LegitScript badge + compounded pharmacy badge. Bottom disclaimer text.

Design system: All colors via CSS custom properties in HSL. Semantic tokens: --background, --foreground, --primary, --card, --muted, --border, etc. Shadows use shadow-[2px_4px_12px_rgba(0,0,0,0.08)]. Border radius globally set to 9999px via --radius. The gradient button is a reusable component used throughout.
```

---

*Generated by MotionSites Export Tool*
