Build a two-section scroll-based landing page using React 19, TypeScript, Vite, Tailwind CSS v4, and `motion/react` (Framer Motion). The page uses Manrope, Italiana, and Marck Script fonts, with a video hero and a red second section featuring a cloud transition.

## Setup

**package.json dependencies:**
- `react` ^19, `react-dom` ^19
- `motion` ^12 (for `motion/react`)
- `tailwindcss` ^4.1, `@tailwindcss/vite` ^4.1
- `vite` ^6, `@vitejs/plugin-react` ^5
- `lucide-react`, `typescript` ~5.8

**vite.config.ts:** include `@vitejs/plugin-react` and `@tailwindcss/vite` plugins.

## src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Manrope:wght@400;600&family=Marck+Script&display=swap');
@import "tailwindcss";

@theme {
  --font-manrope: "Manrope", sans-serif;
  --font-italiana: "Italiana", serif;
  --font-marck: "Marck Script", cursive;
}
```

## src/App.tsx — Structure

**Root:** `<main>` with ref `containerRef`, classes `h-screen overflow-y-auto overflow-x-hidden font-manrope bg-black relative`.

**Scroll setup:**
```tsx
const containerRef = useRef<HTMLDivElement>(null);
const { scrollY } = useScroll({ container: containerRef });
const cloudYDesktop = useTransform(scrollY, [0, 300], [0, -100]);
const cloudYMobile  = useTransform(scrollY, [0, 300], [0, -24]);
```

### Section 1 — Video Hero

`<section className="relative h-screen w-full flex-shrink-0 overflow-hidden">`

- **Background video** (absolute inset-0, z-10, `w-full h-full object-cover`, autoPlay loop muted playsInline):
  - src: `https://res.cloudinary.com/daklr2whx/video/upload/v1778592404/baby-track-video_e968wn.mp4`
- **Overlay** `absolute inset-0 z-30 pointer-events-none`.

**Top-left logo block** (`absolute top-[24px] left-[20px] md:top-[64px] md:left-[64px] pointer-events-auto max-w-[calc(100vw-140px)] md:max-w-none`):
- Flex row, gap-[16px] md:gap-[24px], items-center.
- SVG logo, white fill, 48x48 mobile / 64x64 desktop, viewBox `0 0 120 120`, path:
  `M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z`
- Tagline: white, `text-[11px] md:text-[16px] w-[112px] md:w-auto leading-[1.2] font-semibold tracking-[0.02em]`.
  - Desktop (`hidden md:block`): "Effortless Growth / Operations. We Handle All Tasks. / Stay Calm." with `<br />` after each.
  - Mobile (`block md:hidden`): "Complete Business / Automation. We Handle All / Tasks. You Relax."

**Left description** (desktop only, below logo): `hidden md:flex mt-[400px] flex-col gap-[24px] w-full max-w-[320px] text-white text-[14px] font-normal leading-relaxed`. Two paragraphs about SaaS automation.

**Top-right CTA button** (`absolute top-[24px] right-[20px] md:top-[64px] md:right-[64px]`):
`px-5 py-3 md:px-10 md:py-7 border border-white rounded-[100%] text-white text-[12px] md:text-[18px] font-italiana uppercase tracking-widest hover:bg-white/10 hover:backdrop-blur-[48px] transition-all duration-300 cursor-pointer bg-black/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none`
Label: "Get started".

**Bottom heading container** (`absolute bottom-[32px] left-[20px] right-[20px] md:left-auto md:bottom-[64px] md:right-[64px] md:max-w-[1200px] text-left md:text-right`):
- Mobile paragraphs (`md:hidden flex flex-col gap-[16px] max-w-[280px] text-white text-[12px] font-normal mb-[32px]`).
- `<h1 className="text-white text-[36px] leading-[1.1] md:text-[96px] font-italiana md:leading-[88px]">`:
  - Desktop: "Intelligent Daily / Routine Automation / For Your Business. / You Relax".
  - Mobile (`text-[32px]`): "Intelligent Daily Routine / Automation For Your / Business. You Relax".

### Section 2 — Red Background

`<section className="relative min-h-screen w-full bg-[#FF0000] flex flex-col z-10">`

**Cloud overlays** (two `motion.div`, one desktop, one mobile, both absolute top-0 left-0 w-full z-[100] pointer-events-none `-translate-y-1/2`):
- style `y: cloudYDesktop` / `y: cloudYMobile`.
- `<img src="https://res.cloudinary.com/daklr2whx/image/upload/v1778597725/cloude_ws7l3z.png" className="w-full h-auto block" referrerPolicy="no-referrer" />`

**Content wrapper:** `flex-1 flex flex-col items-center w-full pt-[100px] md:pt-[400px]`.

Inner content block (`flex flex-col items-center w-full px-8 text-center z-20 relative max-w-[900px] h-auto md:h-[620px] mx-auto`):
- Same SVG logo, 80x80, white.
- Paragraph: `text-white text-[16px] h-[100px] max-w-[400px] leading-[1.6] mb-[40px] uppercase tracking-wider mx-auto`. Text: "We built this platform with a single purpose to eliminate operational chaos and restore balance to your daily business routine".
- Signature: `font-marck text-white text-[120px] leading-none mb-[32px]` reading `S.P.D`.
- Two centered paragraphs: white, `text-[16px] w-[400px] max-w-full`, font-light, first with `mb-[24px]`, container `mb-[100px] md:mb-24`.

**Bottom video block** (`relative w-full shrink-0`):
- Top fade: `absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#FF0000] to-transparent z-10 pointer-events-none`.
- Video (autoPlay loop muted playsInline, `w-full h-auto block object-contain`):
  - src: `https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4`

## Animations
- Cloud parallax: maps scroll 0→300px to translateY 0→-100px (desktop) and 0→-24px (mobile), via `useTransform` with the section's container scroll.
- Button hover: background fades to `white/10` with `backdrop-blur-[48px]` over 300ms.

## Notes
- Videos are Cloudinary, not CloudFront. There are no CloudFront URLs in this project.
- All assets above are the only external URLs used.