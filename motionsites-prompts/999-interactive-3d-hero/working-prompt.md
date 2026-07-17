---
title: "Interactive 3D Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780770873683-cripton-hero.webp
---

# Interactive 3D Hero

```text
# Cripton - Decentralized Finance Ecosystem

<!--A premium, interactive 3D Hero section for a next-generation decentralized finance platform.--> 

You are an expert AI frontend developer. Your task is to build a highly detailed, production-ready, interactive, and responsive web application based on the following comprehensive specifications.

## 1. Technology Stack
- **Framework:** React 18 with TypeScript, Vite
- **Styling:** Tailwind CSS (Vanilla)
- **Animations:** Framer Motion (`framer-motion`)
- **3D Rendering:** React Three Fiber (`@react-three/fiber`), Three.js (`three`), Drei (`@react-three/drei`)
- **Icons:** Lucide React (`lucide-react`)

## 2. Global Design System & Aesthetics
**Vibe:** Premium, modern, futuristic, dark mode, glassmorphism, dynamic.
- **Background Color:** Deep Space Dark `#030308`
- **Primary Accents:** Purple `#7c3aed`, Blue `#3b82f6`, Deep Indigo `#5b21b6`
- **Typography:** Modern Sans-Serif (Inter or system-ui)
- **Text Colors:** Primary White `#ffffff`, Secondary Gray `#9ca3af` (gray-400)
- **Lighting Effects:** Radial gradients, blurred blobs, drop shadows, and emissive 3D materials.

## 3. Layout & Responsiveness Strategy
- **Containerization:** UI overlays use a `max-w-7xl mx-auto` (1280px max width) approach to keep content neatly grouped on ultra-wide desktop monitors.
- **Mobile First:** The application must be 100% responsive. On mobile, components stack vertically and text is center-aligned. 3D elements dynamically resize and reposition based on the viewport width using `useThree()`.

## 4. UI Components

### 4.1 Navbar (`<Navbar />`)
- **Layout:** Fixed top, full width (`z-50`). Left: Logo, Center: Links (hidden on mobile), Right: CTA (hidden on mobile) & Hamburger menu.
- **Scroll Interaction (Liquid Glass):** 
  - **At Top (scrollY <= 20):** Transparent background, `py-8`, no border.
  - **Scrolled (scrollY > 20):** `py-4`, background `#030308` at 60% opacity, `backdrop-blur-xl`, `border-b` with white/10, subtle drop shadow. Transitions smoothly over 300ms.
- **Logo:** Hexagon icon (`lucide-react`) colored `#7c3aed` next to text "Cripton" (tracking `0.2em`, font bold). Adds a small floating blurred blue square decoration on the icon.
- **Desktop Links:** "Home, Markets, Features, About, Docs". Text `gray-400` size `sm`, hover `text-white`. Gap 12.
- **Desktop CTA:** "Get Started" button. Pill shape, `border border-white/10`, hover background `white/5`. Text `gray-200` to `white` on hover. Contains a tiny glowing indicator dot: `w-2 h-2 rounded-full bg-[#5b21b6] shadow-[0_0_8px_rgba(91,33,182,0.8)]`.
- **Mobile Menu:** Hamburger icon (`Menu`) toggles to `X`. When open, a full-width dropdown animates down (`y: -20` to `0`, opacity fade). Dropdown has `#030308/95` background, `backdrop-blur-md`, padding 6. Links are size `lg`, CTA is full width.

### 4.2 Hero Section (`<Hero />`)
- **Structure:** `<section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#030308]">`
- **Layers:** 
  1. `<ThreeScene />` (Background 3D Canvas)
  2. Overlay flex container (`absolute inset-0 flex justify-center pointer-events-none`) wrapping a `max-w-7xl` container.
  3. `<HeroContent />` taking 100% width on mobile, and 45% width on desktop.
  4. Bouncing scroll indicator centered at the bottom.
- **Scroll Indicator:** Absolute bottom center. Pill shaped border containing a small purple dot (`w-1.5 h-1.5 bg-[#7c3aed] shadow-glow`) that animates infinitely (`y: [0, 8, 0]`, duration 2s, easeInOut). Text below: "SCROLL TO DISCOVER" (`text-[0.65rem] tracking-[0.2em] text-gray-500 uppercase`).

### 4.3 Hero Content (`<HeroContent />`)
- **Layout:** On desktop, vertically centered, left aligned text. On mobile, vertically offset (`pt-32`), horizontally centered text. 
- **Framer Motion Animations:** Container variants stagger children by `0.15s`, delayed by `0.6s` to wait for navbar. Items slide up (`y: 20` to `0`, duration `0.8s`, easeOut).
- **Label:** "FUTURE OF FINANCE". Flex container, `Zap` icon (`#7c3aed`), text size `xs`, tracking `0.2em`, uppercase, purple.
- **Headline:** "The Next <br/> Generation of <br/> Crypto".
  - Font size: `text-5xl md:text-6xl lg:text-[5rem]`, bold, tight tracking, `leading-[1.1]`.
  - "Crypto" uses a gradient text clip: `bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-transparent`. It features an overlapping pseudo-element blur behind it to create an intense screen-blend glow.
- **Paragraph:** "Cripton is a decentralized finance ecosystem built for speed, security, and scalability..." Color `gray-400`, size `lg md:text-xl`, `font-light`, `leading-relaxed`.
- **Buttons (Flex Row, wraps on mobile):**
  - **Primary CTA ("Start Trading"):** Gradient background `from-[#6d28d9] to-[#3b82f6]`, pill rounded, text white. Glow shadow: `shadow-[0_0_20px_rgba(99,102,241,0.4)]`. On hover: `hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]`. Icon `ArrowRight` translates `x-1` on hover.
  - **Secondary CTA ("Explore Features"):** `bg-black/20`, border `white/10`, hover `bg-white/5`. Similar hover translation for ArrowRight.

## 5. 3D Elements (`<ThreeScene />`)

### 5.1 Canvas Settings
- Camera: `position={[0, 0, 10]}`, `fov={45}`
- GL: `antialias={false}`, `alpha={true}`, `powerPreference="high-performance"`
- Post-processing (CSS): The canvas is overlaid with a CSS radial gradient vignette (`rgba(124,58,237,0.1)`) and an inner shadow `shadow-[inset_0_0_150px_rgba(3,3,8,0.9)]` to blend edges into the dark background.
- Environment & Lighting:
  - `<color attach="background" args={['#030308']} />`
  - `<fog attach="fog" args={['#030308', 8, 30]} />`
  - `<ambientLight intensity={0.2} />`
  - `<pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />` (Purple rim light)
  - `<pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />` (Blue rim light)
  - `<directionalLight position={[0, 5, 5]} intensity={1.5} color="#ffffff" />` (White key light for metal reflections)
  - `<Environment preset="city" />` (Critical for metallic gloss reflections on the coin)

### 5.2 `<CryptoCoin />`
- **Asset:** A high-quality Bitcoin logo image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/bitcoin.png`
- **Structure:** A Three.js Group containing a central cylinder (the gold coin edge) and two planes (front and back faces of the coin).
- **Materials:**
  - Cylinder (Edge): `<cylinderGeometry args={[2.8, 2.8, 0.4, 64]} />`. `<meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.1} />`.
  - Planes (Faces): `<planeGeometry args={[5.6, 5.6]} />` mapped with the Bitcoin texture. Uses `<meshStandardMaterial transparent map={texture} metalness={0.7} roughness={0.2} envMapIntensity={1.5} />` for a highly polished, glossy metallic shine.
- **Responsiveness (Viewport check):**
  - Uses `useThree()` to check `viewport.width < 6` (Mobile).
  - Desktop: `scale = 0.765`, `x = 2.5`, `y = 0`.
  - Mobile: `scale = 0.54`, `x = 0` (Centered), `y = -2.5` (Shifted down below text).
- **Animations (useFrame):**
  - Bobs up and down smoothly: `Math.sin(time * 0.5) * 0.2 + baseY`.
  - Constantly rotates: `rotation.y = time * 0.2`.
  - Mouse Parallax: Adds subtle tilt on `x` and `z` axes based on `state.pointer.x` and `state.pointer.y`.

### 5.3 `<FloatingParticles />`
- 200 particles generated as an `instancedMesh`.
- Geometry: `<icosahedronGeometry args={[1, 0]} />`.
- Material: `<meshStandardMaterial color="#05051a" emissive="#5b21b6" emissiveIntensity={0.6} roughness={0.1} metalness={0.9} />`.
- Initialization: Particles are randomly scattered in a 3D volume (`x` and `y` range 35, `z` range 30 with -5 offset). Random scale and rotation speed. Data generated outside component to satisfy React Hook purity.
- Animation: Gentle drift using `Math.sin` and `Math.cos` over time + mouse parallax shifting the entire instanced mesh group slightly in opposition to pointer movement.

### 5.4 `<WireframeTerrain />`
- A grid moving towards the camera to simulate forward momentum.
- `<planeGeometry args={[100, 100, 50, 50]} />`
- Material: `<meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />`
- Animation: Rotated `-Math.PI / 2` to lay flat at `y = -4`. Inside `useFrame`, `position.z` increments by `time * 2 % 2` to create an infinite scrolling illusion.

## 6. Implementation Notes
- **Performance:** Use `Suspense` for all 3D assets. Ensure `useMemo` is used appropriately for ThreeJS geometries and matrices. 
- **SEO & Accessibility:** Include descriptive alt tags where appropriate, semantic HTML (`<nav>`, `<section>`, `<h1>`), and ensure high color contrast for text.
- **File Structure:**
  - `src/App.tsx` & `main.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Hero.tsx`
  - `src/components/HeroContent.tsx`
  - `src/components/3d/ThreeScene.tsx`
  - `src/components/3d/CryptoCoin.tsx`
  - `src/components/3d/WireframeTerrain.tsx`
  - `src/components/3d/FloatingParticles.tsx`

```
