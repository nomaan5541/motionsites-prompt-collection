---
title: WorldView SaaS
category: Templates
subCategory: SaaS
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781535135765-WorldView_website.webp
---

# WorldView SaaS

```text
You are an expert Frontend Developer and 3D WebGL Specialist. Build an ultra-premium, highly responsive single-page landing page for "WorldView AI". The website must exactly match the provided specifications, utilizing Three.js for a glowing 3D Earth and GSAP ScrollTrigger for precise scroll animations.

**Tech Stack:** HTML5, Vanilla CSS, Vanilla JavaScript (ES Modules via Vite), Three.js, GSAP.

---

### 1. Root Setup \u0026 Typography
**Exact Fonts (HTML `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700\u0026family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500\u0026display=swap" rel="stylesheet">
```

**Exact CSS Variables (`:root`):**
```css
:root {
  --bg-color: #050510;
  --ink: #ffffff;
  --ink-muted: #b0b0c0;
  --ink-faint: #777788;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --primary: #007bff;
  --primary-glow: #00d2ff;
}
```

### 2. Three.js Engine (`main.js`)
**Exact Lighting:**
- Ambient Light: `0x1a2642`, Intensity: `4.0`
- Edge Light (Top Left): `0x00e5ff`, Intensity: `4.0`, Position: `(-6, 4, -2)`
- Fill Light (Top Right): `0x6a8ab0`, Intensity: `4.0`, Position: `(5, 3, 4)`

**Exact Earth Textures (Use `THREE.TextureLoader`):**
- Map: `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg`
- Specular: `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg`
- Normal: `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg`
- Emissive: `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png`
- Clouds: `https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png`

**Earth Materials:**
- **Earth Sphere (radius 2.0):** `MeshPhongMaterial` with `emissive: 0xffffee`, `emissiveIntensity: 2.5`, `specular: 0x333333`, `shininess: 15`. (Set `colorSpace = THREE.SRGBColorSpace` on color maps).
- **Clouds (radius 2.03):** `MeshPhongMaterial` with `transparent: true`, `opacity: 0.8`, `blending: THREE.AdditiveBlending`, `depthWrite: false`, `side: THREE.DoubleSide`.
- **Soft Dissolving Edge Glow Sprite:**
Generate a radial canvas gradient (`512x512`):
- Stop `0`: `'rgba(202, 245, 255, 0.49)'`
- Stop `1`: `'rgba(0, 210, 255, 0.0)'`
- Radius gradient from 190 out to 256.
Apply to a `SpriteMaterial` (`blending: AdditiveBlending`, `opacity: 0.45`). Set `sprite.scale.set(4.8, 4.8, 1)` and `sprite.position.set(0, 0, -0.1)`. Place it as a child of the main ball group.

**Exact Drag Physics:**
```javascript
const BASE_SPEED = 0.003;
const DAMPING = 0.94;
// When user releases drag, mathematically dampen velocity and then seamlessly reset:
autoVel = { x: 0, y: BASE_SPEED };
```

### 3. GSAP ScrollTrigger Configurations
**Base Scale calculation:** `baseScale = 2.4 / (2.15 * 2)`
**Waypoints:**
```javascript
const BALL_SCALE = 2.8; 
const SECTIONS = {
  hero:      { x: 0,     y: -4.2,  z: -1,    scale: BALL_SCALE },
  product:   { x: 2.8,   y: -0.2,  z: -3,    scale: BALL_SCALE * 0.65 },
  solutions: { x: -2.8,  y: -0.2,  z: -3,    scale: BALL_SCALE * 0.65 },
  pricing:   { x: 0,     y: 0,     z: -4,    scale: BALL_SCALE * 1.5 },
  usecases:  { x: 2.8,   y: -0.2,  z: -3,    scale: BALL_SCALE * 0.65 },
  contact:   { x: 0,     y: -4.0,  z: -2,    scale: BALL_SCALE * 0.9 },
};
```
**Scroll logic:** Add `scroll-snap-type: y mandatory` to `html` and `scroll-snap-align: start` with `scroll-snap-stop: always` to `.section`. Use `ScrollTrigger` `onEnter` and `onEnterBack` to update a `targetPos` and `targetScale`. In `requestAnimationFrame`, use `ball.position.lerp(targetPos, 0.05)` and `ball.scale.lerp(targetScale, 0.05)`. For mobile (`window.innerWidth < 768`), multiply the target `X` by `0.4`.

### 4. HTML Sections \u0026 Exact CSS Layouts
All sections must have `min-height: 100vh`, `display: flex`, `flex-direction: column`, `justify-content: center`, `padding: 6rem 4rem`, `z-index: 10`. Use modern SVG icons (Lucide/Feather style) with `width="24" height="24"` or `32x32` depending on the context.

**Navbar (`.navbar`):**
Floating "liquid glass" pill layout: `position: fixed`, `top: 1.5rem`, `left: 50%`, `transform: translateX(-50%)`, `width: max-content`, `max-width: 95vw`, `padding: 0.6rem 0.8rem 0.6rem 2rem`, `gap: 12rem`, `border-radius: 999px`, `background: rgba(255, 255, 255, 0.04)`, `backdrop-filter: blur(24px)`. No borders or box-shadows.

**Hero Section Stars (`.stars-bg`):**
```css
background-image: 
  radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.8), transparent),
  radial-gradient(1px 1px at 140px 70px, rgba(255,255,255,0.9), transparent),
  radial-gradient(1.5px 1.5px at 90px 140px, rgba(255,255,255,0.7), transparent),
  radial-gradient(2px 2px at 160px 220px, rgba(255,255,255,0.6), transparent),
  radial-gradient(1px 1px at 320px 40px, rgba(255,255,255,0.8), transparent);
background-size: 400px 400px;
```

**Glassmorphism Cards (Used in Features, Solutions, Use Cases):**
`background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`, `backdrop-filter: blur(10px)`, `border-radius: 12px` to `16px`. Hover state applies `transform: translateY(-5px)` (where applicable like solutions grid).

**Card Specific Layouts:**
- **Feature Cards**: Horizontal flex layout. `.feature-icon-wrapper` has `background: rgba(0, 210, 255, 0.1)`, `padding: 0.8rem`, `border-radius: 12px`, `color: var(--primary-glow)`. Wraps the SVG. `<strong>` tags for title, `<p>` for description.
- **Solution Cards**: `.card-icon` (`color: var(--primary-glow)`) with `margin-bottom: 1.2rem`.
- **Use Case Cards**: `.usecase-item` is a horizontal flex container. `.usecase-icon-wrapper` has `background: rgba(0, 210, 255, 0.1)`, `padding: 0.8rem`, `border-radius: 12px`, `color: var(--primary-glow)`.
- **Pricing Grid**:
  - Base Card: `background: rgba(10, 15, 30, 0.6)`. `.pricing-header` with `display: flex`, `align-items: center`, `gap: 0.8rem` containing a `.pricing-icon` and `<h3>`.
  - Featured Card (Enterprise): `background: rgba(0, 119, 255, 0.1)`, `border: 1px solid rgba(0, 210, 255, 0.4)`, `box-shadow: 0 0 30px rgba(0, 210, 255, 0.1)`.

**Exact Layouts per Section:**
- **Product** (`id="product"`): Align text to the Left (Earth is on the right). Uses `.feature-list` and `.feature-icon`.
- **Solutions** (`id="solutions"`): Align text to the Right (Earth is on the left). `display: grid` with `minmax(240px, 1fr)`. Uses `.solution-card` and `.card-icon`.
- **Pricing** (`id="pricing"`): Center-aligned flex layout.
- **Use Cases** (`id="use-cases"`): Align text to the Left. Uses `.usecase-list`, `.usecase-item`, `.usecase-icon-wrapper`.
- **Contact** (`id="contact"`): Centered text, input forms use `background: rgba(255,255,255,0.03)`, focus states trigger `border-color: var(--primary-glow)`.

**Mobile Responsiveness (`< 768px`):**
- Hide desktop nav links (`.nav-btn-outline`), show Hamburger SVG.
- Build an expanding pill dropdown menu: `.navbar` uses `flex-wrap: wrap`, `max-height: 56px`, `overflow: hidden`, and `transition: max-height 0.5s`. When `.nav-active` is toggled via Javascript on `.navbar`, the `max-height` expands to `400px` to reveal the `.nav-links` (which are stacked in a column below the logo/hamburger).
- Override side-alignments to center-align all text blocks.
- Collapse grids to `grid-template-columns: 1fr`.

```
