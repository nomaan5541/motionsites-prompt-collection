Build a mobile app showcase with 3 iPhone mockups displayed side-by-side (stacking vertically on mobile) on a dark background. Use React + Vite + TypeScript + Tailwind CSS + lucide-react for icons. Use the **Space Grotesk** font from Google Fonts (weights 300-700) as the default sans-serif font via Tailwind config.

---

## Global Setup

- **Font**: Space Grotesk (Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap`)
- **Tailwind config**: Override `fontFamily.sans` with `['"Space Grotesk"', 'sans-serif']`
- **Page background**: `#0a0a0f`
- **Body CSS**: `font-family: 'Inter', sans-serif` (overridden by Tailwind's Space Grotesk)
- **Root**: `width: 100%; height: 100vh`
- **Hide scrollbars** with `.no-scrollbar` utility (webkit + ms + firefox)

---

## PhoneFrame Component

A reusable wrapper for each phone screen:
- Outer container: `w-[320px] h-[650px]` (sm: `340x700`, md: `370x760`), `shrink-0`
- Inner frame: `rounded-[50px]`, `border-[6px] border-zinc-700/80`, `bg-black`, `overflow-hidden`
- Shadow: `box-shadow: 0 0 60px rgba(0,0,0,0.8), 0 0 120px rgba(80,50,120,0.3)`
- **Dynamic Island**: Absolute positioned pill at top center - `w-[100px] h-[28px] bg-black rounded-full`, `top-[12px]`, `z-30`
- **Home Indicator**: Absolute at bottom center - `w-[120px] h-[4px] bg-white/30 rounded-full`, `bottom-2`, `z-20`

---

## Layout Container

```
div: relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0f] py-10 gap-6 md:gap-10 flex-col md:flex-row px-4
```

---

## Screen 1 - Onboarding

Full-screen background video with text overlay at the bottom.

- **Background video** (autoPlay, muted, playsInline, absolute inset-0 object-cover):
  ```
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_072800_64c47fd8-8c4a-431c-ab02-d8c84e461474.mp4
  ```

- **Bottom overlay** (absolute bottom-0 left-0 right-0, px-8 pb-10, z-10):
  - Heading: `text-white text-[42px] leading-[1.15] font-light tracking-tight mb-8`
    - Text: "Learn more &" (line break) "improve **your**" (line break) "**skills.**" (bold words use `font-medium`)
  - Centered circular button: `w-14 h-14 rounded-full bg-white` with ArrowRight icon (w-6 h-6, text-black, strokeWidth 2.5)
    - Hover: `scale-110`, active: `scale-95`, transition 300ms
    - Shadow: `0 0 20px rgba(255,255,255,0.2)`

---

## Screen 2 - Dashboard (Explore)

Scrollable screen with background image, header, heading, filter tabs, and a 2-column card grid.

- **Background image** (absolute inset-0 object-cover):
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_013750_18427eb2-0d19-44fd-a5ab-8ee7c40fa18f.png&w=1280&q=85
  ```

- **Header** (z-10, flex between, px-5 pt-14 pb-4):
  - Left: Avatar (w-11 h-11 rounded-full, gradient border `from-amber-400 to-orange-500`, border-2 border-amber-400/50)
    - Avatar image: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100`
    - Below avatar: "Welcome back" (text-zinc-400 text-xs) + "Adam William" (text-white text-sm font-medium)
  - Right: Search icon button (w-11 h-11 rounded-full bg-white/10, Search icon w-5 h-5 text-white)

- **Heading** (px-5 pt-12 pb-5):
  - "Let's explore" (font-light) + line break + "**new fields**" (font-medium)
  - `text-white text-[42px] leading-[1.2]`

- **Filter Tabs** (horizontal scroll, gap-2, px-5 pb-2, no-scrollbar):
  - "All": `px-5 py-3 rounded-full bg-white text-black text-xs font-medium`
  - Others ("Programming", "Design", "Marketing", "Business", "Finance"): `bg-[#524755] text-white text-xs font-medium`

- **Cards Grid** (grid-cols-2 gap-3 px-6 pb-24 pt-2):
  - 4 cards, each with `rounded-[28px] overflow-hidden`, aspect ratio 1:1 via `paddingBottom: '100%'`
  - Each card has a **video background** (autoPlay, muted, playsInline, crossOrigin="anonymous", absolute inset-0 object-cover):
    - Card 0: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_092940_b96cc608-4646-48fa-b73d-19be2b96f9c9.mp4`
    - Card 1: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_091634_79fb6336-cd01-4002-b9e5-c20c548c6646.mp4`
    - Card 2: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_110013_a8872d8b-6678-48e1-a6ab-db071ac6e5ec.mp4`
    - Card 3: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_100911_5fcfc40c-a4be-4900-aca4-82f09b746d51.mp4`
  - Card overlay (absolute inset-0 flex-col justify-end p-3):
    - Tag pill: colored bg, `text-[9px] text-white px-2 py-0.5 rounded-full font-medium w-fit mb-1`
      - Card 0: "Design" `bg-[#6875CA]`
      - Card 1: "Programming" `bg-[#C6A64F]`
      - Card 2: "Design" `bg-[#65C4C8]`
      - Card 3: "Information" `bg-[#D282AC]`
    - Title: `text-[#1F111D] text-sm font-semibold drop-shadow-lg`
      - Card 0: "UI/UX Design"
      - Card 1: "Advanced .Net"
      - Card 2: "Digital art"
      - Card 3: "Copywriting"
  - Arrow button (absolute top-3 right-3): `w-10 h-10 rounded-full bg-white`, ArrowRight icon `w-4 h-4 text-black -rotate-45 strokeWidth-2.5`

- **Bottom Nav** (absolute bottom-4, centered with -translate-x-1/2, z-20):
  - White pill: `bg-white rounded-full px-2 py-2 flex items-center gap-1`
  - Home button: `w-12 h-12 rounded-full text-zinc-400 hover:text-zinc-600`
  - Settings button: `w-14 h-14 rounded-full bg-black text-white`

---

## Screen 3 - Lesson Schedule

Scrollable screen with background image, back/share buttons, title, interactive calendar, and a bottom card.

- **Background image**: Same as Screen 2 (the higgs.ai URL above)

- **Header** (flex between, px-5 pt-14 pb-4):
  - Left: Back button (ArrowLeft icon, w-11 h-11 rounded-full bg-white/10)
  - Right: Share button (Share2 icon, same style)

- **Title** (px-6 pt-4 pb-6):
  - "**Lesson**" + line break + "**schedule**" (both font-medium)
  - `text-white text-[42px] leading-[1.15] font-light`

- **Calendar Component** (interactive, useState for month/year/selectedDay):
  - Default state: August 2024, day 16 selected
  - Month header: month name + year (text-white text-xl font-semibold) with chevron nav buttons (hover:bg-white/10)
  - Day labels row: `['MON', 'THU', 'WED', 'TUE', 'FRI', 'SAT', 'SUN']` - text-zinc-500 text-[10px] font-medium
  - Days grid (7 columns, gap-y-2):
    - Current month days: text-white, hover:bg-white/10
    - Other month days: text-zinc-600
    - Selected day: `backgroundColor: '#B8C1FF', color: '#1F111D'`, font-bold, scale-110
    - Highlighted days (day 12 current month, day 3 next month): `border: 2px dotted rgba(161,161,170,0.6)`, border-radius 50%
  - Full 6-row grid (42 cells total with prev/next month fill)

- **Bottom Card** (mx-4 mb-6 mt-4, rounded-[28px], overflow-hidden):
  - Background video (absolute inset-0 object-cover, autoPlay muted playsInline):
    ```
    https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_110653_41933aaf-9ec1-423f-851a-043b3407ef44.mp4
    ```
  - Content (relative p-5 pr-16):
    - Time badge: `backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full mb-2`, background `#6276CA`
      - Text: "05:00 - 06:00 PM"
    - Title: `text-[#1F111D] text-lg font-bold leading-tight` - "Components &" + line break + "Variants"
    - Subtitle: `text-[#1F111D]/70 text-xs mt-1` - "Adrian Smith"
  - Arrow button (absolute top-4 right-4): `w-12 h-12 rounded-full bg-white`, ArrowRight icon `w-5 h-5 text-black -rotate-45`

---

## Dependencies

- react, react-dom (^18.3.1)
- lucide-react (^0.344.0)
- tailwindcss (^3.4.1)
- vite + @vitejs/plugin-react
- TypeScript