# Axion About

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `axion-about`
- Title: Axion About
- Category: About
- Type: about
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/q02exmtWPHSgKTMFhl01pmW3jMYwMaB02q0247BKe27D6aI.m3u8

## Full Prompt

```
Build a single React component for an "About" section using Tailwind CSS. Use `lucide-react` for the ArrowRight icon. System font stack only (no custom fonts). Match every detail exactly:

---

### Outer wrapper

`<section>` with `bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden`. Inner container: `max-w-[1440px] mx-auto`.

---

### Badge row

`px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8`.

- **Numbered circle:** `w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold`. Displays "1".
- **Pill label:** Text "Introducing Axion". `text-[12px] sm:text-[13px] font-medium rounded-full px-3 sm:px-4 py-1 sm:py-1.5`. No border, no background.

---

### Heading

`<h2>` with `px-5 sm:px-8 lg:px-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28`.

Text: "Strategy-led creatives, delivering / results in digital and beyond." - the `/` represents a line break that is `<br className="hidden sm:block" />` with a `<span className="sm:hidden"> </span>` fallback space before it (so on mobile it reads as one flowing line, on sm+ it breaks into two lines).

---

### Content area - MOBILE / TABLET layout (lg:hidden)

Wrapper: `lg:hidden px-5 sm:px-8`.

1. **Paragraph:** "Through research, creative thinking and iteration we help growing brands realize their digital full potential." - `text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6`.

2. **CTA button** (inside a `mb-8` wrapper): Orange button (`bg-[#F26522] hover:bg-[#e05a1a]`) with text "About our studio", `text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3`. Contains:
   - **Text-roll hover animation:** The button text is inside `overflow-hidden h-[20px]` > `flex flex-col` container. The text is duplicated (two identical `h-[20px] flex items-center` spans). On `group-hover`, the flex-col translates `-translate-y-1/2` with `transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`.
   - **Arrow circle:** White circle `bg-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center`. Contains `ArrowRight` from lucide-react (size 14), `text-[#F26522]`, starts at `-rotate-45`, on `group-hover` rotates to `rotate-0` (same duration-500 easing). The entire button has `className="group"`.

3. **Images:** `flex flex-col sm:flex-row gap-4 sm:gap-5`.
   - First: `sm:w-[45%]`, `<img>` with `w-full aspect-[438/346] rounded-xl sm:rounded-2xl object-cover`.
   - Second: `sm:w-[55%]`, `<img>` with `w-full aspect-[900/600] rounded-xl sm:rounded-2xl object-cover`.

---

### Content area - DESKTOP layout (hidden lg:grid)

Wrapper: `hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12`.

- **Left column** (`self-end`): Small image, `w-full aspect-[438/346] rounded-2xl object-cover`.
- **Center column** (`self-start flex flex-col justify-end`):
  - Paragraph: `text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap mb-6`. Text with explicit `<br/>` tags: "Through research, creative thinking`<br/>`and iteration we help growing brands`<br/>`realize their digital full potential."
  - Same orange CTA button as mobile (identical text-roll animation).
- **Right column** (`self-end`): Large image, `w-full aspect-[3/2] rounded-2xl object-cover`.

---

### Image URLs

- **Small image:** `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85`
- **Large image:** `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85`

---

### Technical details

- **Framework:** React 18 + TypeScript + Tailwind CSS 3.4 (default config, no custom theme extensions)
- **Icons:** `ArrowRight` from `lucide-react`
- **Font:** System default (no custom font loaded)
- **All hover animations:** `duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`
- **Max content width:** 1440px, centered with `mx-auto`
- **Responsive breakpoints:** Default Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

---
```
