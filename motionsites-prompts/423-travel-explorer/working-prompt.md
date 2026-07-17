Build a React + Vite + TypeScript + Tailwind CSS mobile app mockup called "Roam Beyond Borders" -- a travel app displayed inside a realistic iPhone frame on a white background. It has TWO screens that switch via state: a Home screen and an Explore screen.

---

## SETUP REQUIREMENTS

**Tech stack:** React 18, Vite, TypeScript, Tailwind CSS, lucide-react for icons.

**Fonts (loaded in index.html):**
- Nomada Didone (serif heading font): `https://db.onlinewebfonts.com/c/5f01c59c653c8200fb4ec7f1a81d22ba?family=Nomada+Didone`
- Inter (body font): `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

**Page title:** "Roam Beyond Borders"

---

## PHONE FRAME

- Centered on screen (`h-screen w-screen bg-white flex items-center justify-center overflow-hidden`)
- Frame dimensions: `width: 340px`, `height: 740px`, `border-radius: 52px`, `overflow: hidden`
- Frame shadow (class `phone-frame`):
```css
box-shadow:
  inset 0 0 0 2px rgba(255, 255, 255, 0.08),
  0 0 0 1px rgba(0, 0, 0, 0.6),
  0 0 0 10px #1a1a1e,
  0 0 0 11px rgba(255, 255, 255, 0.06),
  0 0 60px rgba(0, 0, 0, 0.3);
```
- **Dynamic Island:** Absolute positioned, `top-[12px]`, centered horizontally, `w-[126px] h-[37px] bg-black rounded-full z-50`

---

## ANIMATIONS (index.css)

```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-stagger { opacity: 0; animation: fadeSlideUp 0.6s ease-out forwards; }
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
.stagger-7 { animation-delay: 0.7s; }
```

Also in CSS:
```css
* { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
.font-heading { font-family: 'Nomada Didone', Georgia, serif; font-weight: normal; }
.font-inter { font-family: 'Inter', sans-serif; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
```

---

## SCREEN 1: HOME SCREEN

Full-bleed background video with text overlay. Clicking the button transitions to Screen 2.

**Background video (absolute, covers frame):**
```
src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260705_060733_a39bb3eb-6b8a-4117-a7cc-0c6ceb74f1bb.mp4"
autoPlay muted loop playsInline
```

**Content overlay** (`relative flex-1 flex flex-col px-7 pt-20 pb-8 z-10`):

- **Heading** (stagger-1): Font: Nomada Didone, color `#01080A`, size `52px`, line-height `1.05`, tracking-tight, mb-5. Text:
  ```
  Roam
  Beyond
  Borders
  ```
  (Each word on its own line via `<br />`)

- **Subtext** (stagger-2): Color `#01080A/70`, size `15px`, leading-relaxed, max-w-[240px], font-inter. Text: "Uncover hidden gems and craft memories that last forever"

- **Spacer:** `flex-1`

- **CTA Button** (stagger-3, wrapped in `w-full px-2 pb-2`): `w-full bg-white text-gray-900 font-medium text-base py-4 rounded-full transition-transform active:scale-[0.98] hover:shadow-lg`. Text: "Begin Your Journey"

---

## SCREEN 2: EXPLORE SCREEN

Dark background (`bg-[#1C1C1C]`), scrollable content.

### Header (stagger-1, `px-6 pt-16 pb-8`)
- Left: Avatar (40x40 rounded-full) + text column
  - Avatar image: `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100`
  - Small text: "Welcome back," (`text-white/60 text-xs font-inter`)
  - Name: "Elena Castillo" (`text-white text-[22px] font-heading`)
- Right: Bell icon (lucide-react, size 20, white)

### Search Bar (stagger-2, `px-6 mb-3`)
- Container: `bg-[#333333] rounded-full pl-4 pr-0 py-0`, flex row
- Placeholder text: "Search dream destinations" (`text-white/40 text-sm font-inter`)
- Right icon circle: `w-9 h-9 bg-[#979797] rounded-full` with Search icon (size 16, color `#1C1C1C`)

### Filter Chips (stagger-3, `mb-7`, horizontally scrollable, no-scrollbar)
- Container: `flex gap-2 px-6`
- Chips: `px-4 py-2 bg-[#333333] text-white/80 text-xs font-inter rounded-full`
- Labels: "Top Picks Now", "Quick Escapes", "South America", "Europe"

### Section Header (stagger-4, `px-6 mb-4`)
- Left: "Destinations" (`font-heading text-white text-[22px]`)
- Right: "View all" (`text-white/50 text-xs font-inter`)

### Horizontal Cards (stagger-5, flex-1, overflow-x-auto, no-scrollbar)
- Container: `flex gap-4 px-6 h-full pb-4`
- Each card: `w-[240px] h-[310px] rounded-3xl overflow-hidden`, position relative

**Card 1 - Ireland:**
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_153452_6ac31a99-2fe2-46aa-8d3c-edcd3fc0ac9a.png&w=1280&q=85`
- Price: "From $3,200"
- Description: "Emerald meadows, rugged coastal cliffs, and folk tunes drifting from pubs"
- Has "Curated" badge: YES

**Card 2 - Norway:**
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_154229_5be57df0-6fc9-49ba-840e-62f1b686c7f5.png&w=1280&q=85`
- Price: "From $4,100"
- Description: "Majestic fjords, aurora skies, and peaceful seaside hamlets"
- Has "Curated" badge: NO

**Card 3 - Japan:**
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_154713_941acc2f-d44d-4473-87fd-13b46129423b.png&w=1280&q=85`
- Price: "From $3,800"
- Description: "Sacred shrines, blooming sakura, and neon-lit streets woven into tradition"
- Has "Curated" badge: YES

**Card 4 - Iceland:**
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_154824_77eb9d80-7654-47e2-baf1-89adb5c2f094.png&w=1280&q=85`
- Price: "From $4,500"
- Description: "Vast ice caps, erupting hot springs, and surreal terrain under endless sky"
- Has "Curated" badge: NO

**Card overlay styling:**
- Bottom gradient: `absolute bottom-0 left-0 right-0 h-[50%] rounded-b-3xl backdrop-blur-sm bg-gradient-to-t from-black/40 via-black/20 to-transparent` with mask: `linear-gradient(to top, black 60%, transparent 100%)`
- "Curated" badge (top-right): `bg-white/90 backdrop-blur-md rounded-lg px-2 py-1.5` with BadgeCheck icon (size 12) + text `text-gray-800 text-[10px] font-inter font-semibold`
- Bottom info (`absolute bottom-0 p-5`):
  - Country name: `text-white font-heading text-xl`
  - Price: `text-white text-[11px] font-inter font-medium`
  - Description: `text-white/70 text-[11px] leading-snug font-inter`

### Bottom Navigation (stagger-6, `flex justify-center pb-8 pt-3`)
- Pill container: `bg-[#333333] rounded-full p-2 flex items-center gap-6`
- Active tab (Home): `w-9 h-9 bg-white rounded-full` with Home icon (size 18, black)
- Inactive tabs: `w-9 h-9` with icons Compass, Heart, User (size 18, `text-white/40`)

---

## ICONS USED (all from lucide-react)
Search, Bell, Home, Compass, Heart, User, BadgeCheck