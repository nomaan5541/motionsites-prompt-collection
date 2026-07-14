Create a full-screen dark hero section for a brand called "axentra" using React, TypeScript, Tailwind CSS, Lucide React icons, and the `shaders` package (`shaders/react`). The page should be a single viewport-height section with a WebGL shader background and centered text overlay.

---

**Font:** Inter (imported from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`). Apply `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` globally.

---

**Background:** Use the `shaders` npm package (`shaders/react`) to render a full-screen WebGL shader as an absolutely positioned element covering the entire viewport (`absolute inset-0 z-0 w-full h-full`). The shader composition is:

```jsx
<Shader>
  <StudioBackground
    ambientIntensity={32}
    ambientSpeed={0.3}
    backColor="#1a0f2e"
    backIntensity={34}
    backSoftness={61}
    brightness={5}
    center={{ x: 0.49, y: 0.95 }}
    color="#17171c"
    fillAngle={84}
    fillColor="#ffffff"
    fillIntensity={55}
    fillSoftness={100}
    keyColor="#ffffff"
    keyIntensity={15}
    keySoftness={70}
    lightTarget={64}
    seed={42}
    vignette={25}
    wallCurvature={42}
  />
  <Spherize
    depth={1.1}
    lightColor="#a9cbe8"
    lightIntensity={0.3}
    lightPosition={{ x: 0.62, y: 0.01 }}
    lightSoftness={0.2}
    radius={0.9}
  >
    <Swirl colorA="#0a0a0d" colorB="#0f0f1a" colorSpace="oklab" detail={1.2} speed={0.5} />
    <LensFlare
      ghostChroma={0}
      ghostIntensity={0.35}
      ghostSpread={0.78}
      glareIntensity={0.15}
      glareSize={0.15}
      haloChroma={2}
      haloIntensity={0.27}
      haloRadius={0.38}
      haloSoftness={1.1}
      lightPosition={{ x: 0.57, y: 0.25 }}
      speed={0.9}
      starburstIntensity={0.05}
      starburstPoints={4}
      streakIntensity={0}
      streakLength={0.21}
    />
    <FloatingParticles
      angle={188}
      angleVariance={77}
      opacity={0.49}
      particleColor="#c5b7ed"
      particleSize={0.6}
      randomness={0.3}
      speed={0.1}
      speedVariance={0.6}
      twinkle={1}
    />
    <CursorRipples chromaticSplit={3} decay={4} />
  </Spherize>
  <FilmGrain strength={0.05} visible={true} />
</Shader>
```

---

**Navbar (absolutely positioned, z-50):**
- Positioned `absolute top-0 left-0 right-0`, flex row, space-between, padding `px-5 py-4` on mobile, `lg:px-10 lg:py-6` on desktop.
- Left: Brand name "axentra" in white, text-xl, font-semibold, tracking-tight, Inter font.
- Center (desktop only, hidden on mobile): A pill-shaped nav container with a custom "liquid-glass" effect (described below), containing links: "Platform", "How it works", "AI Defense", "Connections", "Insights". Links are white/80 opacity, text-sm, Inter font, with rounded-full hover:bg-white/10 hover:text-white transitions.
- Right: A white "Join the wait" button (hidden on mobile), rounded-full, text-sm, font-medium, black text, px-5 py-2, hover:opacity-80 transition.
- Mobile: An animated hamburger button (Menu/X icons from lucide-react) that toggles a slide-down mobile menu panel with backdrop blur. The mobile menu animates with staggered item reveals using cubic-bezier(0.23, 1, 0.32, 1) easing, 50ms stagger per item. Mobile menu has semi-transparent dark background (rgba(8,8,8,0.97)), items are white/70 with hover states, and includes a full-width "Join the wait" button at the bottom. Escape key closes the menu.

---

**Liquid Glass CSS (custom Tailwind `@layer components`):**
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

---

**Hero Content (centered, z-20):**
- Container: `flex flex-col items-center justify-center text-center h-full px-5 sm:px-8 lg:px-10`
- Heading (h1): White, font-normal, leading-[1.12], tracking-tight, max-w-3xl, Inter font. Font size uses `clamp(1.75rem, 5vw, 2.6rem)`. Text reads: "When strategy meets its spark" with a line break (hidden on mobile) followed by "and thought reshapes what lies ahead".
- Subtext (p): Courier New monospace font, letter-spacing 0.01em, color rgba(255,255,255,0.6), mt-5 (md:mt-6), text-sm (md:text-base), leading-relaxed, max-w-xs (sm:max-w-sm, md:max-w-md). Text reads: "a fluid channel - where deep resolve" with a line break followed by "and neural insight dissolve as one".
- CTA button: mt-7 (md:mt-8), white background, black text, rounded-full, text-sm, font-medium, px-5 py-2.5, flex row with gap-2.5, Inter font. Label: "See it in motion" with an ArrowRight icon (size 15) that translates right 0.5 on hover. hover:opacity-80 transition.

---

**Outer wrapper:** `relative w-full h-screen overflow-hidden bg-black`, Inter font applied via inline style.

**No CloudFront video URL exists in this project** -- the background is entirely a real-time WebGL shader rendered by the `shaders` npm package, not a video.

**Dependencies:** `react`, `react-dom`, `lucide-react`, `shaders` (v2.5.124+), `tailwindcss`, `vite`, `typescript`.