# Acreage Farming

**ID:** acreage-farming-hero  
**Category:** Landing Page  
**Type:** landing-page  

---


## 📋 Full Prompt

```
Build a full-page premium agricultural website called "Acreage Farming
" using React + Tailwind CSS v4.
Use Playfair Display (serif) for headings and DM Sans for body text. Import both from Google Fonts.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Background:   #f5f0e8  (warm cream)
- Primary Dark: #0d1f0e  (deep forest green)
- Mid Green:    #2d5a30
- Accent:       #7dc47f  (light green)
- Gold:         #c9a84c
- Text Muted:   #5a6b5c

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — FIXED NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transparent navbar with backdrop-blur. Left: logo "Acreage Farming
" in serif font.
Center: nav links (About, Services, Portfolio, Events, Blog).
Right: green CTA button "Get Started".
On scroll, add dark background with smooth transition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — HERO (100vh) WITH BACKGROUND VIDEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT: Use a looping MP4 video as the full-screen hero background (NOT a static image).

Video URL:
  https://cdn.pixabay.com/video/2025/01/22/254016_large.mp4

HTML structure:
  <section style="position:relative; height:100vh; overflow:hidden;">
    <video autoplay muted loop playsinline
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;">
      <source src="https://cdn.pixabay.com/video/2025/01/22/254016_large.mp4" type="video/mp4" />
    </video>
    <div class="overlay" style="position:absolute;inset:0;z-index:1;
      background:linear-gradient(to top,rgba(13,31,14,0.95) 0%,rgba(13,31,14,0.35) 60%,transparent 100%);" />
    <div class="content" style="position:relative;z-index:2; ... ">
      <!-- hero text here -->
    </div>
  </section>

Content layout:
Left side:
  - Eyebrow: "// Roots in Sustainability" (small, letter-spacing, accent green #7dc47f)
  - Giant serif heading: "Acreage Farming
"
    (font-size: clamp(5rem,10vw,9rem), font-weight:900, color:white)

Right side:
  - Description text about sustainable agriculture (white, 0.75 opacity)
  - Two floating badge pills:
      "$14 Billion"  → gold pill (#c9a84c background)
      "126,000+"     → glass pill (rgba white 0.1, backdrop-blur:10px)

Animations (staggered fadeUp on page load):
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(30px) }
    to   { opacity:1; transform:translateY(0) }
  }
  - Eyebrow:     animation: fadeUp 0.8s ease 0.2s forwards
  - Heading:     animation: fadeUp 0.8s ease 0.4s forwards
  - Description: animation: fadeUp 0.8s ease 0.6s forwards
  - Badges:      animation: fadeUp 0.8s ease 0.8s forwards
  (All start with opacity:0)

Bottom center: a thin vertical line (1px, 40px tall, green-to-transparent gradient)
with slow pulse animation as scroll indicator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — STATS BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dark green background (#0d1f0e). 4-column grid:
  - "40+"         | "Harvesting Legacy"
  - "190+"        | "Topographies"
  - "126,000+"    | "Farmer Partners"
  - "$14 Billion" | "Agricultural Output"

Each stat: large serif number in accent green, small uppercase label in muted white.
Dividers between columns.
Animate numbers counting up when scrolled into view using IntersectionObserver.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — ABOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cream background. Two-column layout.
Left: stacked images —
  Main: https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80
  Overlay (bottom-right, 6px cream border):
        https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80

Right:
  - Eyebrow: "// Harvesting Legacy"
  - Heading: "Rooted in Tradition, Growing for the Future"
  - Body paragraph about sustainable agriculture
  - Dark rounded CTA button "Explore Our Story →"

Fade-in-from-left / fade-in-from-right on scroll.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — SERVICES "What We Do"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White background. Header row: left heading, right "All Services →" link.
3-column grid of tall image cards (aspect-ratio 3/4):

  1. "Crop Consulting"
     https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80

  2. "Field Management"
     https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80

  3. "Yield Analysis"
     https://images.unsplash.com/photo-1472141521881-95d0e87e2e76?w=600&q=80

Each card: image fills card, dark gradient overlay at bottom, category tag + title in white serif.
On hover: image scale(1.05), reveal short description with smooth opacity transition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — CINEMATIC VIDEO BREAK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full-width 60vh ambient section using the SAME hero video as a second cinematic moment:
https://cdn.pixabay.com/video/2025/01/22/254016_large.mp4

This is a parallax-style video strip between Portfolio and Event sections.
Video plays silently in the background (no controls).
Darker overlay: rgba(13,31,14,0.65)

Center content (white, serif):
  - Large italic quote: "Farming is not just work — it is a way of life."
  - Small label below: "// Acreage Farming
 Philosophy"

On scroll into viewport: fade in the quote text with a slow 1.2s ease transition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — PORTFOLIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background: #e8e0d0. Header: eyebrow + "Portfolio" heading + faded "//2023" serif watermark right.

CSS Grid (3 cols, 2 rows):
  Large card (col 1, spans 2 rows):
    https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80
  Top-right:
    https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80
  Bottom-right:
    https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80

Each item: rounded corners, overflow hidden.
Hover: scale(1.03) + caption overlay (location + project name in white).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — EVENT CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
White background. Single large 2-column card:

Left:  https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80
Right: Dark green (#0d1f0e) panel:
  - Eyebrow: "// Event"
  - Date badge: "Jan 2024"
  - Title: "The Sustainable Agriculture Innovation and Practices Symposium"
  - Location + capacity in muted text
  - Green CTA button: "Register Now →"

border-radius: 12px, overflow hidden, subtle box-shadow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — BLOG GRID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cream background. Header: "Our Blog" + "View All →".
2x2 grid of white blog cards (rounded, hover lift shadow):

  1. https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80
     "Nurturing the Land for Future Generations"

  2. https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80
     "The Journey to Organic: A Farmer's Perspective"

  3. https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80
     "AgroTech Innovations Revolutionizing Modern Farming"

  4. https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80
     "Breaking Stereotypes, Cultivating Success"

Each card: image top, category tag, serif title, excerpt, date + "Learn More →" footer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — WHY CHOOSE US
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dark green (#0d1f0e) background.
Centered heading: "Why Choose Acreage Farming
 for Your Agricultural Journey?"

3-column glassmorphism cards (rgba white 0.05 bg, rgba green border):
  🌿 "Quality Assurance"    — ISO certified, rigorous quality checks
  ♻️ "Sustainability Focus" — Carbon neutral by 2030, eco-friendly methods
  👤 "Expert Guidance"      — 40+ years of agricultural expertise

Hover: card lifts, border brightens, subtle green glow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11 — CTA SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full-width with background image at 20% opacity on dark green:
https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80

Center:
  - Large serif heading: "Join the Agricultural Revolution"
    (italic "Revolution" in accent green #7dc47f)
  - Subtext paragraph
  - Two buttons: filled "Get Started" + outline "Learn More"
  - Floating animated leaf/particle effect using CSS keyframes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 12 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dark green (#0d1f0e). Top accent border line.
4-column grid:
  Col 1 (2x wide): Logo "Acreage Farming
" + tagline + social icons
  Col 2: Company (About, Services, Portfolio, Careers)
  Col 3: Resources (Blog, Events, Case Studies, FAQ)
  Col 4: Contact info

Bottom row: copyright + large decorative serif watermark "Acreage Farming
"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL ANIMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Apply to ALL sections using IntersectionObserver (threshold: 0.15):

CSS:
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

- Stagger children: animation-delay increments of 0.1s
- About section: fade-in-from-left + fade-in-from-right
- Cards: scale-in from 0.95 to 1

RESPONSIVE: Fully mobile-responsive. Hamburger menu on mobile.
Single-column stacking for all grids below 768px.
Smooth scroll behavior on html element.
No placeholder lorem ipsum — use real agricultural copy throughout.
```

---

## 🗂️ Sections Overview

| # | Section | Animation | Images |
|---|---------|-----------|--------|
| 1 | Navigation | Scroll-triggered bg | — |
| 2 | Hero | Staggered fadeUp | Unsplash farm aerial |
| 3 | Stats Bar | Count-up numbers | — |
| 4 | About | Slide left/right | 2 overlapping images |
| 5 | Services | Hover reveal | 3 farm cards |
| 6 | Video | Ripple play button | YouTube embed |
| 7 | Portfolio | Scale on hover | Asymmetric 3-col grid |
| 8 | Event | — | Split card layout |
| 9 | Blog | Lift shadow | 2×2 card grid |
| 10 | Why Us | Glow on hover | Glass cards |
| 11 | CTA | Particle leaves | Full-width overlay |
| 12 | Footer | — | 4-col + watermark |

---

## 🎨 Design References

- **Typography:** Playfair Display (headings) + DM Sans (body)
- **Style:** Editorial luxury meets organic farming
- **Motion:** Intersection Observer scroll reveals + CSS keyframes
- **Images:** All from [Unsplash](https://unsplash.com) — free to use

---

## ✏️ Customize

Change these values to make it your own:

```
Brand Name   → "Acreage Farming"    (replace with your name)
Accent Color → #7dc47f            (swap for your brand color)
Font         → Playfair Display   (try Cormorant / Lora / Fraunces)
Niche        → Agriculture        (swap copy for your industry)
```

---

