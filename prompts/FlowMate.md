Create a modern, production-ready landing page for "FlowMate" - an AI workflow automation platform. Use React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Design System

**Colors:**
- Background: `#fefffc` (off-white)
- Text Primary: `#2c2c2c` (dark gray)
- Text Secondary: `#444141`
- Text Tertiary: `#646464`
- Text Muted: `#b4b8b4`
- Borders: `#dde3dd`, `#dee2de`, `#e8e8e8`
- Hover Background: `#eef1ed`
- Button Black: `black` with hover `#2c2c2c`

**Typography:**
- Custom Font: PPMondwest (serif) from URL: `https://www.generalintelligencecompany.com/_next/static/media/17330fd087386262-s.p.woff2`
- Font settings: `fontKerning: 'none'`, `letterSpacing: '-0.04em'`
- System fonts as fallback

## Layout Structure

**Desktop (1024px+):**
- Fixed sidebar: 240px width, left side
- Content area: margin-left 240px
- Fixed navbar: positioned at top of content area (left: 240px)

**Mobile/Tablet:**
- No sidebar
- Full-width navbar at top
- Stacked content

## Components

### 1. Sidebar (Desktop Only)
- Fixed position, 240px wide, full height
- Border: 2px solid `#dde3dd`
- Logo image at top: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_072635_e0ca60b6-0b6c-49a3-825d-b2b6a53dd63d.png&w=1280&q=85`
- Navigation items: Home, Video, Features, Cards
- Active state: `bg-[#eef1ed]` with `text-[#2c2c2c]`
- Inactive: `text-[#b4b8b4]` with hover effects
- Smooth scroll with IntersectionObserver tracking

### 2. Navbar
- Fixed at top, semi-transparent background: `bg-[#fefffc]/90` with `backdrop-blur-sm`
- Desktop positioning: `left-0 lg:left-[240px]`
- Logo/Brand: "FlowMate" in PPMondwest, 28px mobile, 32px desktop
- Right side items:
  - "Pricing" link (hidden on mobile)
  - "Community" link (hidden on mobile)
  - "Log in" button: white background, 2px border `#dde3dd`, rounded-full
  - "Sign up" button: black background, white text, rounded-full

### 3. Hero Section
- Padding: responsive (pt-12 to pt-20, pb-12 to pb-20)
- Heading: "Transform your workflow using plain English"
  - Font: PPMondwest
  - Size: 32px mobile → 50px tablet → 70px desktop
  - Line height: 0.95
  - Max width: 900px (700px on lg)
- Subheading: "FlowMate connects to your current apps, builds smart workflows, and manages operations. Powering the platforms you already know and trust."
  - Color: `#444141`
  - Max width: 620px (520px on lg)
- CTA button: "View our intro video" with custom arrow SVG icon
- Use TextFade animation (direction: up, stagger: 0.15s)

### 4. Video Section (Liquid Glass Effect)
**Video URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_073438_071156e5-2a7a-45d8-a8d9-c628d2144e88.mp4`

**Glass morphism overlay card:**
- Centered over video
- Typewriter effect text: "Daily check rival companies and ping me on messenger"
- Speed: 50ms per character
- Styling:
  ```css
  backdrop-filter: blur(16px)
  background-image: linear-gradient(in oklab, rgba(255, 255, 255, 0.35) 0px, rgba(255, 255, 255, 0.12) 100%)
  border: 6px solid rgba(255, 255, 255, 0.2)
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)
  ```
- Icons: Paperclip (lucide) and circular send button with ArrowUp
- Framer Motion spring animation on scroll

### 5. Features Grid
**Title:** "Discover what FlowMate can accomplish for your team"

**6 Feature Cards (3 columns on desktop, 2 on tablet, 1 on mobile):**

1. **Research this company (FlowMate)**
   - Description: "Execute investor-grade business analysis: generate detailed spreadsheets, gather web intel, compare rivals, and build team dossiers."
   - Icon: Generic tool icon

2. **Check the dev team's progress**
   - Description: "View a quick overview of your developer squad's activity, goals, and blockers."
   - Icons: Linear + Slack logos

3. **Build my CV from available information**
   - Description: "Generate a shareable PDF curriculum using stored facts and web sources, excluding any private contact info."
   - Icon: Generic tool icon

4. **Turn this into retro pixels**
   - Description: "Transform any photo into vintage pixelated graphics with custom resolution."
   - No icons

5. **Track Industry Sites and Send Weekly Digest Each Monday**
   - Description: "Watch leading tech and development sources for fresh content then deliver Monday briefings with main insights and URLs."
   - Icon: Generic tool icon

6. **Morning schedule digest**
   - Description: "Every AM, outline your agenda with important background and recommended preparation."
   - Icons: Gmail + Google Calendar logos

**Card Styling:**
- Border: 2px solid `#dee2de`
- Rounded: 2xl
- Hover: border color changes to `#b8beb8`
- Icons in circular gray backgrounds at bottom

### 6. Cards Carousel
**Auto-rotating carousel (4 second intervals) with 5 cards:**

**Card 1:** For Everyone
- Text: "Unleash your creative vision"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081328_19f48c5b-ea4d-4f23-8f80-7374f31015d4.png&w=1280&q=85`

**Card 2:** For Teams
- Text: "Smart helper supporting each teammate daily"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081342_ad378347-1ebd-4b17-a716-ee895bf739c0.png&w=1280&q=85`

**Card 3:** For Enterprises
- Text: "Elevate your whole organization using business AI"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081415_a6e8a76c-224e-417b-bf99-6b86d6494644.png&w=1280&q=85`

**Card 4:** Platform
- Text: "Enhanced with FlowMate"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081513_cf1cd2c1-2122-4de6-90ed-acae8bfbdb00.png&w=1280&q=85`

**Card 5:** Security
- Text: "Creating trusted and helpful AI"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081541_9d2d28bf-d6a3-4b31-b0bb-cfc5202d4fcd.png&w=1280&q=85`

**Carousel Features:**
- Shows 3 cards at a time (1 on mobile)
- Manual navigation: Previous/Next buttons with ChevronLeft/Right icons
- Framer Motion AnimatePresence with slide animations
- Transition: `duration: 0.7, ease: [0.32, 0.72, 0, 1]`
- Cards: 500px height, gradient overlay, hover scale effect

## Animations

**TextFade Component:**
- Spring animation on scroll into view
- Stagger children with configurable delay
- Direction: up or down
- Default variants: `y: 18` offset, opacity fade

**Video Section:**
- Spring animation: `{ opacity: 1, y: 0 }` from `{ opacity: 0, y: 18 }`

**Carousel:**
- Entry: slide from right/left with scale 0.95
- Exit: slide opposite direction
- Smooth transitions with custom easing

## Technical Requirements

**Dependencies:**
- React 18.3+
- Framer Motion 12.38+
- Lucide React 0.344+
- Tailwind CSS 3.4+
- TypeScript 5.5+

**Build Setup:**
- Vite bundler
- ESLint configuration
- PostCSS with Autoprefixer

**Responsive Breakpoints:**
- Mobile: default
- Tablet: md (768px)
- Desktop: lg (1024px)

All sections have proper border separation (`border-t border-[#e8e8e8]`) and the entire page uses smooth scrolling behavior with section anchors.
