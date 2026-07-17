---
title: "Interactive Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780926743475-Quantum_hero.webp
---

# Interactive Hero

```text
# Comprehensive Website Recreation Specification: Quantum Neural Network Hero Template

## 1. Overview
This prompt provides a highly detailed, production-ready specification for recreating a premium, highly interactive Hero section website. The website is an AI/Tech-themed landing page featuring a stunning, interactive 3D particle network background, a glassmorphic navigation menu, and a meticulously crafted centered typography layout.

**Core Stack:**
- **Framework**: React (v19) via Vite
- **Styling**: Tailwind CSS (v4)
- **3D Rendering**: Three.js (@0.184.0) with custom GLSL shaders and post-processing (EffectComposer, UnrealBloomPass)

---

## 2. Visual Design System

### 2.1 Color Palette
- **Background Root**: `#050508` (Deep void black/blue)
- **Primary Accent Gradient**: `from-[#667eea] to-[#764ba2]`
- **Text Gradient Highlight**: `from-white via-white to-[#a5b4fc]`
- **Pill Accent Background**: `#667eea` at 10% opacity, bordered by `#667eea` at 30% opacity.
- **Glassmorphism Base**: White at 5% opacity (`bg-white/5`) with borders at 10% opacity (`border-white/10`).

### 2.2 Typography
- **Font Family**: 'Outfit' (Google Fonts)
- **Weights Used**: `200` (Extra Light), `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold).
- **Hierarchy**:
  - **H1 (Main Headline)**: 5xl (mobile), 6xl (tablet), 7xl (desktop). Bold (700), leading tight.
  - **Subtitle/Paragraph**: lg (mobile) to xl (desktop). Light (300) to Regular (400) weight, relaxed line height.
  - **Labels/Overheads**: text-xs, uppercase, tracking-wider, semibold.

---

## 3. Layout Structure & Grid System

The overall layout operates in a single, fullscreen, non-scrollable viewport (`w-full h-screen overflow-hidden`).
The layering utilizes absolute positioning (`inset-0`) and explicit z-indexes.

1. **Background Layer (`z-0`)**: The Three.js canvas. It has `opacity-85` to subtly blend into the dark background.
2. **Gradient Overlay (`z-0`)**: An absolute full-screen `div` over the canvas with `bg-gradient-to-r from-[#050508] via-[#050508]/60 to-transparent`. It ensures readability of the text on the left while revealing the 3D scene fully on the right.
3. **Content Layer (`z-10`)**: A flex container holding the navigation and the main centered text payload.

---

## 4. UI Components and Styling Details

### 4.1 Liquid Menu (Navigation)
- **Positioning**: Fixed top, full width, `z-50`.
- **Scroll Behavior**: Dynamic padding (`py-6` when at top, shrinking to `py-4` when scrolled).
- **Glass Container**: A wrapper inside the nav `max-w-7xl mx-auto px-6`. It uses an absolute inset background: `bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`.
- **Logo**: 
  - Visual: A 32x32px circle with a gradient (`from-indigo-500 to-purple-500`), containing a 12x12px white dot pulsing (`animate-pulse`).
  - Text: "Quantum" (text-lg, font-semibold, tracking-wide).
- **Links (Desktop only)**: "Platform", "Solutions", "Resources", "Pricing" styled as `text-white/70 hover:text-white transition-colors text-sm font-medium`.
- **CTA Button**: "Sign In" with `bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-xl backdrop-blur-sm text-sm font-medium transition-all duration-300`.

### 4.2 Hero Content
- **Positioning**: Centered in the screen using `flex flex-col items-center justify-center text-center`.
- **Version Pill**: "Version 3.0" styled with `inline-block px-4 py-1.5 mb-6 rounded-full bg-[#667eea]/10 border border-[#667eea]/30 text-[#a5b4fc] text-xs font-semibold tracking-wider uppercase`.
- **Headline**: "Worldwide Experts" mapped with `bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-[#a5b4fc] drop-shadow-lg mb-6`.
- **Subheadline**: "Simplify and automate your IT environment by working with Quantum’s worldwide experts and service offerings." constrained by `max-w-2xl`, styled `text-white/60 mb-10 leading-relaxed font-light`.
- **Action Buttons Container**: `flex flex-col sm:flex-row justify-center gap-4`.
  - **Primary Button**: "Get Started" - `px-8 py-4 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] font-medium shadow-[0_10px_20px_rgba(102,126,234,0.3)]`. Hover state: `hover:shadow-[0_15px_30px_rgba(102,126,234,0.4)] hover:-translate-y-0.5`.
  - **Secondary Button**: "Our Products" - `px-8 py-4 rounded-full bg-white/5 border border-white/10 font-medium backdrop-blur-md`. Hover state: `hover:bg-white/10 hover:border-white/30`.

---

## 5. 3D Elements, Effects & Animations (Three.js)

The interactive background is a heavily customized node-and-connection visualizer built with Three.js.

### 5.1 Scene & Camera Setup
- **Scene Fog**: `FogExp2(0x000000, 0.002)`.
- **Camera Zoom**: Positioned at `(0, 2.66, 9.33)` to provide a deeply zoomed-in (300% scale) perspective. 
- **Camera Offset**: Using `camera.setViewOffset(w, h, w * -0.5, 0, w, h)` on viewports wider than 768px. This forces the 3D scene to center itself on the absolute right edge of the screen, creating an asymmetrical "half-hidden" layout.
- **Post-Processing**: `EffectComposer` utilizing a `RenderPass` and an `UnrealBloomPass` (threshold: 0, strength: 1.2, radius: 0.6) for a glowing, neon aesthetic.
- **Controls**: `OrbitControls` with `enableDamping = true`, `autoRotate = true` (speed: 0.2), `minDistance = 8`, `maxDistance = 80`.

### 5.2 Geometry Generation
- **Nodes & Paths**: Dynamically calculated geometry creating crystalline spheres, helix lattices, or fractal webs (custom algorithms to map arrays of Vector3 points with interconnected strengths and depths).
- **Points/Lines**: Rendered via `THREE.Points` (Nodes) and `THREE.LineSegments` (Connections).

### 5.3 Custom GLSL Shaders
- **Vertex Shaders**: Includes Perlin/Simplex noise to organically displace node coordinates based on `uTime` and depth from the root node. 
- **Fragment Shaders**: Renders spherical soft glowing points, discarding fragments outside radius 1.0. Applies distance fading to points far from the camera. Calculates alpha blending for connection lines.
- **Pulse Uniforms**: The shaders accept `uPulsePositions`, `uPulseTimes`, and `uPulseColors` arrays to generate ripple/wave effects through the 3D geometry.

### 5.4 Interactions
- **Click/Touch Ripples**: Attaching `click` and `touchstart` events to the renderer's DOM element. Uses a `Raycaster` against a virtual geometric plane to find the intersection point in 3D space. It assigns this point to the `uPulsePositions` uniform, which sends a visual shockwave (color shift and scale pop) through the nodes and lines originating from the click location.

---

## 6. Technical Implementation Details

### 6.1 Frontend Architecture & Dependencies
- `package.json` configurations:
  - `react`, `react-dom` (v19)
  - `three` (v0.184.0)
  - `vite` (v5.4), `@vitejs/plugin-react`
  - `tailwindcss` (v4), `@tailwindcss/postcss`, `postcss`
- `postcss.config.js`:
  ```javascript
  module.exports = {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  }
  ```

### 6.2 CSS Architecture
- Standard Tailwind v4 import: `@import "tailwindcss";` inside `src/index.css`.
- Global styles appended to HTML/Body via `@layer base { body { @apply bg-[#050508] text-white; font-family: 'Outfit', sans-serif; } }`.

### 6.3 Code Splitting
- `src/App.jsx`: Root component importing `LiquidMenu` and `Hero`.
- `src/components/LiquidMenu.jsx`: Contains the navigation bar state and layout.
- `src/components/Hero.jsx`: Contains the DOM overlay and the entire `useEffect` hook handling the mounting and rendering loop of the Three.js scene.

### 6.4 Responsiveness
- Employs Tailwind breakpoints (`md`, `lg`, `sm`).
- Font sizing dynamically scales from `text-5xl` up to `text-7xl`.
- The Three.js view offset only triggers dynamically if `window.innerWidth > 768`, meaning the 3D element sits naturally in the center behind the text on mobile, and shifts right on desktop.
- Linear gradient overlay guarantees contrast for text on all viewport sizes.

---

## 7. Performance & Optimization
- Three.js WebGLRenderer explicitly requests `powerPreference: "high-performance"` and `antialias: true`.
- `pixelRatio` is clamped to `Math.min(window.devicePixelRatio, 2)` to save processing on ultra-high-density mobile displays.
- The `requestAnimationFrame` loop correctly disposes of `nodesMesh`, `connectionsMesh`, `geometry`, and `material` upon the React component's unmount to prevent memory leaks in Single Page Applications.

## 8. SEO Requirements
- Include descriptive `<title>Quantum Neural Network</title>` in `index.html`.
- Incorporate meta description tags detailing "Quantum IT worldwide experts and network automation".
- Maintain strict heading hierarchy (single `<h1>` for the Hero headline).

```
