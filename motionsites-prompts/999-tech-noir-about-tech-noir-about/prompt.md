# Tech-Noir About

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `tech-noir-about`
- Title: Tech-Noir About
- Category: About
- Type: about
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/BeixYhSog1aOUtAnUpyQM839BIkat36dO5Qsbov44rM.m3u8

## Full Prompt

````
---

## Prompt

Create a single full-page section with a solid `#FF0000` red background using React 19, TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`), and `motion` (from `motion/react`).

### Fonts (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Manrope:wght@400;600&family=Marck+Script&display=swap');
@import "tailwindcss";

@theme {
  --font-manrope: "Manrope", sans-serif;
  --font-italiana: "Italiana", serif;
  --font-marck: "Marck Script", cursive;
}
```

### Section Container

```
<section className="relative min-h-screen w-full bg-[#FF0000] flex flex-col z-10">
```

---

### 1. Centered Content

**Outer wrapper:**
```
<div className="flex-1 flex flex-col items-center w-full pt-[100px] md:pt-[400px]">
```

**Inner container:**
```
<div className="flex flex-col items-center w-full px-8 text-center z-20 relative max-w-[900px] h-auto md:h-[620px] mx-auto">
```

**a) Logo SVG** -- white fill, 80x80, `mb-12`:
```tsx
<svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z" fill="white"/>
</svg>
```

**b) Mission statement:**
```tsx
<p className="text-white text-[16px] h-[100px] w-full max-w-[400px] leading-[1.6] mb-[40px] uppercase tracking-wider mx-auto">
  We built this platform with a single purpose to eliminate operational chaos and restore balance to your daily business routine
</p>
```

**c) Cursive signature:**
```tsx
<div className="font-marck text-white text-[120px] leading-none mb-[32px]">
  S.P.D
</div>
```

**d) Two paragraphs** (Title Case, font-light):
```tsx
<div className="text-white leading-[1.6] mb-[100px] md:mb-24 w-full flex flex-col items-center font-light">
  <p className="mb-[24px] text-[16px] w-[400px] max-w-full text-center">
    I Was Exhausted By Software That Demanded More Effort Than It Actually Saved. That Is Why We Engineered An Autonomous Architecture That Operates Silently In The Background.
  </p>
  <p className="text-[16px] w-[400px] max-w-full text-center">
    Your Business Should Serve Your Life, Not Consume It. Let Our Algorithms Handle The Heavy Lifting, So You Can Focus On The Vision.
  </p>
</div>
```

---

### 2. Bottom Video with Red Gradient Blend

```tsx
<div className="relative w-full shrink-0">
  <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#FF0000] to-transparent z-10 pointer-events-none" />
  <video autoPlay loop muted playsInline className="w-full h-auto block object-contain">
    <source
      src="https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4"
      type="video/mp4"
    />
  </video>
</div>
```

A 100px gradient overlay at the top of the video fades from `#FF0000` to transparent, seamlessly blending the red background into the video. The video uses `object-contain` -- native aspect ratio, full width, no cropping. `shrink-0` prevents flexbox from compressing it.

---

### Asset URL

| Asset | URL |
|---|---|
| Bottom video | `https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4` |

Hosted on **Cloudinary**.
````
