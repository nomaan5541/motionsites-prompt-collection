---
title: Intelligence
category: Templates
subCategory: Agency
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782987911035-Intelligence_website.webp
---

# Intelligence

```text
# Website Reproduction Specification: Intelligence.ai Landing Page

Act as an award-winning UI/UX designer and elite frontend web developer. Your task is to precisely recreate the "Intelligence.ai" landing page based on the exhaustive specifications provided below. Maximum fidelity to the visual design, layout, typography, animations, and technical architecture is required.

## 1. Visual Design System

### 1.1 Color Palette
- **Background Base:** `#060606` (Deep Black)
- **Primary Accent:** `#FF9B2F` (Vibrant Orange)
- **Text Primary:** `rgba(255, 255, 255, 0.75)` (Soft White)
- **Headings (Light):** `#ffffff` (Pure White)
- **Headings (Accent):** `#FF9B2F`
- **Surface Level 1 (Cards/Inputs):** `#0a0a0a` to `rgba(255, 255, 255, 0.05)` (Subtle dark grays)
- **Borders/Dividers:** `rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.2)`

### 1.2 Typography
- **Primary Font (Body/UI):** `Space Grotesk`
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Secondary Font (Headings/Display):** `Orbitron`
  - Applied via `.font-orbitron` utility class.
  - Weights: 400 to 900.
- **Global Typography Rules:**
  - Base text smoothing enabled (`-webkit-font-smoothing: antialiased`).
  - Headings (h1-h6) use `letter-spacing: -0.02em` and `font-weight: 700`.

### 1.3 Decorative Background Patterns
Sections utilize consistent background patterns to break up solid black spaces:
- **Dotted Grid:** Created using CSS radial gradients.
  - Formula: `radial-gradient(circle at Xpx Ypx, [color] 1px, transparent 0)`
  - Size: Usually `32px 32px` or `24px 24px`.
- **Top-Right Orange Accent Graphic:** A composition of a solid orange circle (`w-10 h-10`, `#FF9B2F`) and an overlapping hollow circle (`w-10 h-10`, `border-2 border-[#FF9B2F]/50 -ml-4`).

---

## 2. Technical Architecture \u0026 Setup

### 2.1 Tech Stack
- **Framework:** React 19 + Vite (TypeScript)
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP (GreenSock Animation Platform) + ScrollTrigger
- **Smooth Scrolling:** Lenis (`lenis` package)
- **Icons:** Lucide React (`lucide-react`)

### 2.2 Global App Structure (`App.tsx`)
```tsx
<SmoothScroll>
  <div className="bg-[#060606] min-h-screen text-white selection:bg-[#FF9B2F] selection:text-black">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Solutions />
      <Technology />
      <CaseStudies />
      <Contact />
    </main>
  </div>
</SmoothScroll>
```
*Note: Include a `SmoothScroll.tsx` wrapper component utilizing the `lenis` library to enable smooth scrolling globally.*

---

## 3. Component \u0026 Section Specifications

### 3.1 Navigation (`Navigation.tsx`)
- **Behavior:** Fixed to top (`fixed top-0 left-0 w-full z-50`).
- **Scroll Effect (GSAP):** Initially transparent. When scrolling past the hero section, the background transitions to `rgba(6, 6, 6, 0.95)` with `backdropFilter: "blur(20px)"` and a subtle bottom border.
- **Logo:** CSS gradient circle (`bg-gradient-to-tr from-[#FF9B2F] to-white/50`) next to text "Intelligence.ai" (font: Orbitron).
- **Desktop Links:** Hidden on mobile. Hover states transition to solid white. Smooth scroll to `#ids`.
- **Mobile Menu:** Hamburger toggle (Lucide `Menu`/`X`). Opens a full-screen overlay (`fixed inset-0 top-[80px] bg-[#060606]/95 backdrop-blur-xl`) sliding in from the right.

### 3.2 Hero Section (`Hero.tsx` - id="home")
- **Core Concept:** Scroll-scrubbing background video.
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/v1782577091/robot_eye_tw9ail.mp4`
- **Implementation:**
  - Uses a `<canvas>` element to draw video frames based on scroll position (`ScrollTrigger`).
  - Container height: `400vh`.
  - Content Wrapper: `sticky top-0 h-screen`.
- **Overlay Content:**
  - Dark radial gradient overlay.
  - "Evolution" pill badge: Small text, orange borders, uppercase.
  - Main Heading: "AI THAT LEARNS." (Orbitron font, large size).
  - Call to Action button.

### 3.3 About Section (`About.tsx` - id="about")
- **Layout:** 2-column grid (`grid-cols-1 lg:grid-cols-2`).
- **Left Column (Images):**
  - Main image (Tall aspect ratio, custom rounded corners: `rounded-3xl rounded-tr-[120px] rounded-bl-[120px]`). Image: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80\u0026w=1000` (grayscale, 80% opacity).
  - Overlapping Circular Image (Bottom-left, `w-64 h-64`, thick black border). Image: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80\u0026w=500` (grayscale, 80% opacity).
  - Overlapping Badge (Top-right): Orange circle, "30+ Years of Experience".
- **Right Column (Content):**
  - Subheading: "ABOUT US" (Orange, tracked out).
  - Heading: "INNOVATE SOLUTION FOR SUCCESS" (Orbitron).
  - Paragraph text.
  - List items with Lucide `CheckCircle2` icons.
  - "Get Started" button (Orange background, black text, hover to white).
- **Animations (GSAP):** `y: 40, opacity: 0` stagger for content (`.about-anim`). Image scales up slightly from `0.95`.

### 3.4 Services / Solutions Section (`Solutions.tsx` - id="solutions")
- **Layout:** 2-column grid.
- **Left Column (Cards Grid):** 2x2 staggered grid of service cards.
  - Items: Digital Marketing (Active), Product Development, UI/UX Designing, Data Analysis.
  - **Active State Card:** Solid `#FF9B2F` background, black text.
  - **Inactive Cards:** `#0a0a0a` background, white text, orange icons. Hover effect translates card up (`hover:-translate-y-2`).
  - Icons: `MonitorPlay`, `Code2`, `PenTool`, `BarChart3`.
- **Right Column (Content):**
  - Subheading: "OUR SERVICES" (Orange).
  - Heading: "BEST IT SOLUTION FOR YOUR BUSINESS" (Orbitron).
  - List items with checkmarks.

### 3.5 Technology Section (`Technology.tsx` - id="technology")
- **Layout:** Standard section with text on left, grid of tech logos/cards on the right.
- Ensure proper use of the dark theme colors and smooth GSAP fade-in scroll triggers.

### 3.6 Projects / Case Studies Section (`CaseStudies.tsx` - id="projects")
- **Layout:** Large 2x2 grid filling the container, separated by 1px white/20 borders.
- **Cards Content:**
  - Feature large typography (Orbitron) mapping numbers ("01", "02") to project names.
  - **Images:** Hover effects on images (grayscale to color transition).
  - Required Image 1: `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80\u0026w=600`
  - Required Image 2 (Replacement for broken link): `https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80\u0026w=600`

### 3.7 Contact \u0026 Footer Section (`Contact.tsx` - id="contact")
- **Layout:** 2-column grid.
- **Left Column (Contact Info):**
  - Heading: "Get In Touch".
  - Three distinct cards for Location, Email, Phone.
  - Cards styling: `#0a0a0a` background, `rounded-3xl`, orange circular icon wrappers.
- **Right Column (Form):**
  - Container: `#FF9B2F` background, heavily rounded corners (`rounded-[40px]`), padding.
  - Form Fields: Name, Email, Message (Textarea). White background, black text.
  - Submit Button: Outlined button (border-white text-white), hover flips to solid white background and orange text.
- **Footer:** Separated by a top border. Includes Logo, links (Privacy, Terms, Twitter, LinkedIn), and copyright text.

---

## 4. Animation Guidelines (GSAP)
- **Plugin:** Always register `ScrollTrigger`.
- **Standard Entrance:**
  ```javascript
  gsap.from('.element-class', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 75%',
    }
  });
  ```
- All animations must be properly cleaned up in a `useEffect` return statement using `gsap.context().revert()`.

## 5. Execution Instructions
1. Initialize the Vite/React/TS environment.
2. Install dependencies: `tailwindcss@4`, `gsap`, `lucide-react`, `lenis`, `clsx`, `tailwind-merge`.
3. Configure `index.css` exactly as specified in the Visual Design System.
4. Implement the root `App.tsx` and `SmoothScroll` wrapper.
5. Build each component section-by-section ensuring pixel-perfect layout and responsive behavior (mobile-first tailwind classes).
6. Apply GSAP ScrollTriggers lastly to wire up the motion design.

```
