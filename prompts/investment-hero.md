Create a luxury real estate landing page called "VELORA" using React, TypeScript, Vite, and Tailwind CSS. The page has 3 main parts: a Splash Screen, a Hero Section with a morphing bottom navbar and popup menu, and a Scroll-Driven Gallery Overlay. Use `lucide-react` for icons. No other UI libraries.

---

### FONTS

Load these two fonts in `index.html` `<head>`:

1. **Haboro Norm Regular** (serif, used for brand name and headings):
   ```html
   <link href="https://db.onlinewebfonts.com/c/cc69fe194f7ed41628d4628f37a10a21?family=Haboro+Norm+Regular" rel="stylesheet">
   ```

2. **Geist** (sans-serif, weights 300/400/500/600, used for body text and UI elements):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap" rel="stylesheet">
   ```

Register them in `tailwind.config.js`:
```js
fontFamily: {
  haboro: ['"Haboro Norm Regular"', 'serif'],
  geist: ['Geist', 'sans-serif'],
}
```

---

### GLOBAL CSS (`index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Geist', sans-serif;
  overflow-x: hidden;
}

@keyframes menuSlideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes menuSlideDown {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(40px) scale(0.95);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes menuItemSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-open {
  animation: menuSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.menu-close {
  animation: menuSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.menu-overlay-open {
  animation: fadeIn 0.3s ease forwards;
}

.menu-overlay-close {
  animation: fadeOut 0.3s ease forwards;
}

.menu-item-enter {
  animation: menuItemSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

### SECTION 1: SPLASH SCREEN (`SplashScreen.tsx`)

A fixed full-screen black overlay (`z-[9999]`) that plays a video once. When the video ends, the screen fades out over 700ms and then unmounts.

- **Container**: `fixed inset-0 z-[9999] bg-black flex items-center`, with a `transition-opacity duration-700` that goes to `opacity-0` when fading.
- **Video**: Absolutely positioned at `top-[20%] left-[30%]` on mobile, `md:left-[55%] md:-translate-x-1/2` on desktop. Sizes: `w-[320px]` mobile, `sm:w-[390px]`, `md:w-[750px]`. `aspect-video object-contain`. Autoplay, muted, playsInline. No loop.
- **Video URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_205729_0e6fae4e-5fc0-42d0-b49a-b88d85ede0b2.mp4`
- **Behavior**: On `onEnded`, set fading state to true. After 800ms timeout, call `onComplete` to remove the splash.

---

### SECTION 2: HERO SECTION (in `App.tsx`)

The entire hero is a `<section>` with `fixed inset-0 h-screen w-full overflow-hidden z-0`.

#### 2A. Video Background
- Full-screen looping video: `absolute inset-0 w-full h-full object-cover`
- **Video URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_210218_173f8eba-17ff-4e27-972b-d128af25bf49.mp4`
- autoPlay, muted, loop, playsInline

#### 2B. Top Navbar
- `relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 md:pt-8`
- Left: empty spacer `w-8 sm:w-32 md:w-40`
- Center: Brand name "VELORA" in `font-haboro text-white text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase`
- Right: spacer same width containing a "GET IN TOUCH" button (`hidden sm:block bg-white text-black px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-geist font-medium tracking-wide hover:bg-white/90 transition-colors duration-200`)

#### 2C. Hero Heading (centered)
- Container: `flex-1 flex items-center justify-center px-4 sm:px-6`
- Text: `font-haboro text-white text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-wide uppercase max-w-5xl`
- Content:
  ```
  PREMIUM REAL ESTATE FOR
  INVESTORS BEYOND OWNERSHIP
  ```
  (line break between the two lines)

#### 2D. Bottom Morphing Navbar
- Centered at the bottom: `flex justify-center pb-4 sm:pb-6 md:pb-10`
- The bar is a black rectangle that morphs between two states:
  - **Expanded** (menu closed): width `280px`, max-width `85vw`. Contains:
    - Left: `Home` icon from lucide-react (`w-5 h-5 text-amber-500`)
    - Center: "HOME" text (`font-geist text-white text-sm tracking-[0.15em] uppercase font-medium`)
    - Right: Hamburger button (two horizontal white lines, `w-6 h-[1.5px] bg-white`, one at `top-[8px]` and one at `top-[15px]`)
  - **Collapsed** (menu open): morphs to `56px` square showing an X close button (two `w-5 h-[1.5px] bg-white` lines rotated 45deg and -45deg)
- Transition: `transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`

#### 2E. Menu Popup
- Triggered by hamburger click.
- **Overlay**: `fixed inset-0 z-20`, with `menu-overlay-open`/`menu-overlay-close` CSS animation classes.
- **Menu panel**: `fixed z-30 left-1/2 bottom-[80px] sm:bottom-[100px] md:bottom-[120px] w-[92vw] max-w-[480px] bg-black rounded-lg p-6 sm:p-8 md:p-10`
  - Uses `menu-open`/`menu-close` CSS classes (translateX(-50%) centered via those animations).
  - Header: "MENU" label (`font-geist text-neutral-400 text-xs tracking-[0.2em] uppercase mb-6`)
  - Menu items list (`space-y-1`): `['About', 'Properties', 'Work', 'Partnership', 'Contact']`
    - Each item: `font-haboro text-white text-2xl md:text-3xl lg:text-4xl hover:text-neutral-300 transition-colors duration-200 block py-1`
    - Each `<li>` has class `menu-item-enter` with staggered `animationDelay: ${i * 60 + 100}ms` and initial `opacity: 0`
  - Footer section: `mt-8 pt-6 border-t border-neutral-700/50 space-y-3`
    - "Private line" row: label `font-geist text-neutral-400 text-sm`, value `font-geist text-white text-sm` showing `+44 020 8156 7290`
    - "Email" row: same style, showing `hello@velora.com`
  - CTA button: `w-full mt-6 bg-white text-black py-3 font-geist text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-200` with text "GET IN TOUCH"
- **Close behavior**: Sets `isClosing` to true, waits 300ms, then unmounts menu.

---

### SECTION 3: SCROLL-DRIVEN GALLERY (`ScrollGallery.tsx`)

The entire app container has `bg-black h-[900vh]` to create scroll space. The gallery is a `fixed inset-0 z-10 pointer-events-none` overlay that animates based on scroll progress (0 to 1).

#### Scroll Phase Breakdown:

| Progress Range | What Happens |
|---|---|
| 0.00 - 0.06 | A thin black vertical line appears at center, grows from 0px to 50px wide, full height |
| 0.06 - 0.16 | The line expands width to fill the entire viewport (cubic ease-in-out) |
| 0.16 - 0.34 | Image 1 scales from center (scale 0.2 to 1.0, opacity fades in quickly) |
| 0.34 - 0.50 | Image 2 scales from center (same animation, stacked on top) |
| 0.50 - 0.64 | Image 3 scales from center (same animation, stacked on top) |
| 0.64 - 0.78 | Black text screen scales from center (same scale animation). Shows text: "Access exceptional real estate opportunities **worldwide.**" (worldwide in amber-500) |
| 0.78 - 0.90 | Background morphs from black to white (RGB interpolation). The black text fades out. |
| 0.90 - 1.00 | White screen with text: "Built on trust and **expertise.**" (expertise in amber-500) fades in |

#### Image Scale Animation Formula:
- `scale = 0.2 + progress * 0.8`
- `opacity = Math.min(1, progress * 4)` (quick fade-in)

#### Image Styling:
- Mobile: `w-[85vw] h-auto max-w-[900px] aspect-[16/10]` with `rounded-lg`
- Desktop (`sm:`): `w-full h-full max-w-none aspect-auto` with no rounding (`rounded-none`)
- All images: `object-cover`

#### Image URLs (in order):
1. `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_211418_dbb8d807-3cfb-4c26-b1df-02fb0c23cc7d.png&w=1280&q=85`
2. `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_211445_ba965dcd-97d6-4644-b390-d4744078ec6c.png&w=1280&q=85`
3. `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_212326_f5e78786-d7bb-40c5-abac-cd3c0be37d90.png&w=1280&q=85`

#### Text Screens Typography:
- Both text screens: `font-geist font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-[1.3] max-w-3xl px-6`
- Black screen text color: `text-white`
- White screen text color: `text-neutral-800`
- Accent word color: `text-amber-500`

#### Width Expansion Easing (Phase 2):
```js
const eased = expandProgress < 0.5
  ? 4 * expandProgress * expandProgress * expandProgress
  : 1 - Math.pow(-2 * expandProgress + 2, 3) / 2;
```

#### Morph (black to white) formula:
```js
backgroundColor: `rgb(${Math.round(morphProgress * 255)}, ${Math.round(morphProgress * 255)}, ${Math.round(morphProgress * 255)})`
```

---

### PAGE STRUCTURE

```
App.tsx
  - bg-black h-[900vh]
  - SplashScreen (conditional, unmounts after video ends)
  - Hero Section (fixed, z-0)
    - Video background (looping)
    - Navbar + Heading + Bottom bar
    - Menu popup (conditional)
  - ScrollGallery (fixed, z-10, pointer-events-none)
```

---

### TECH STACK
- Vite + React 18 + TypeScript
- Tailwind CSS 3.4
- lucide-react (only the `Home` icon)
- No other dependencies needed

---

### PAGE TITLE
`VELORA - Premium Real Estate`