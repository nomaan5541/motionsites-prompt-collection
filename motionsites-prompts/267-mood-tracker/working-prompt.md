Create a wellness/mental health app mockup showing 3 iPhone screens side-by-side in realistic phone frames. The app is called "Soul Canvas". Use React with Tailwind CSS and lucide-react icons. Use Vite + TypeScript.

---

## TECHNICAL SETUP

- **Font**: "Helvetica Neue ME" loaded from `https://db.onlinewebfonts.com/c/95cecf452d3208890088a5b4c19c7ecf?family=Helvetica+Neue+ME` (add in index.html `<head>`). Set as `font-inter` in Tailwind config mapped to `'Helvetica Neue ME', sans-serif`.
- **Icons**: lucide-react (Search, Home, Clock, LayoutGrid, Plus, ArrowRight, Info, ChevronLeft, Sun, Activity, Users, Moon, Minus)
- **Dependencies**: react, react-dom, lucide-react, tailwindcss

---

## GLOBAL CSS (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Helvetica Neue ME', sans-serif;
  margin: 0;
  padding: 0;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-item {
  opacity: 0;
  animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.stagger-delay-1 { animation-delay: 0.1s; }
.stagger-delay-2 { animation-delay: 0.2s; }
.stagger-delay-3 { animation-delay: 0.35s; }
.stagger-delay-4 { animation-delay: 0.5s; }
.stagger-delay-5 { animation-delay: 0.65s; }
.stagger-delay-6 { animation-delay: 0.8s; }
.stagger-delay-7 { animation-delay: 0.95s; }
.stagger-delay-8 { animation-delay: 1.1s; }
```

---

## PAGE LAYOUT

- White background (`bg-white`), `min-h-screen`, flexbox centered.
- Direction: `flex-col` on mobile, `flex-row` on md+.
- Gap: `gap-6 md:gap-8`.
- `overflow-x-auto md:overflow-x-visible` for horizontal scroll on mobile.
- `p-4 py-8 md:p-4`.

---

## PHONE FRAME (shared for all 3)

Each phone is:
- `w-[290px] h-[700px] md:w-[390px] md:h-[800px]`
- `rounded-[45px] md:rounded-[60px]`
- `bg-black shadow-2xl border-[9px] md:border-[12px] border-neutral-900 overflow-hidden flex-shrink-0`
- Contains a **Dynamic Island**: `absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-full z-50`
- Contains an **iOS Status Bar** (absolute top, z-50): time "9:41" on left, signal bars + WiFi SVG + battery on right.
- Each has a looping **background video** (`absolute inset-0 w-full h-full object-cover`, autoPlay, muted, loop, playsInline).
- Each has a **color overlay** div (`absolute inset-0`) with a specific color at 40% opacity.
- Content container: `relative h-full flex flex-col px-6 pt-16 pb-2` (NO overflow-hidden on this div -- important for backdrop-filter to work).

---

## IMPORTANT: BACKDROP-FILTER RULE

When using the `stagger-item` animation class (which uses `transform`), NEVER put it on a parent wrapper of elements that have `backdrop-blur-xl`. The transform creates a new stacking context that breaks backdrop-filter on children. Instead, put `stagger-item` directly on the element that also has `backdrop-blur-xl`.

---

## SCREEN 1: HOME / DAILY CHECK-IN

**Video**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260705_143518_88285de9-3f05-4256-9e49-025f75cb6bcb.mp4`
**Overlay**: `bg-[#4C5930]/40`
**Status bar**: White text/icons.

**Elements top-to-bottom:**

1. **User Profile Pill + Search Button** (`stagger-item stagger-delay-1`, `mb-5`)
   - Left: Pill with avatar + "Lena Voss". Pill: `bg-white/20 backdrop-blur-xl rounded-full pl-0.5 py-0.5 pr-4`. Avatar: `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`, `w-9 h-9 rounded-full object-cover`. Name: `text-white text-sm font-medium`.
   - Right: Search button `w-10 h-10 rounded-full bg-white/20 backdrop-blur-md`, Search icon size 18.

2. **Header Text** (`stagger-item stagger-delay-2`, `mb-1`)
   - Subtitle: `text-white/70 text-sm font-medium mb-1` -- "Morning ritual"
   - Title: `text-white text-[38px] leading-[1.1] font-normal tracking-[-0.03em]` -- "What is\nyour inner\nworld?"

3. **Section Header + Toggle** (`stagger-item stagger-delay-3`, `mt-4 mb-4`)
   - Left: `text-white text-lg font-semibold` -- "Your calm\nsnapshot"
   - Right: Toggle pill `bg-white/20 backdrop-blur-md rounded-full p-1`. Active tab: `px-4 py-1.5 bg-white rounded-full text-sm font-medium text-neutral-800` ("Today"). Inactive: `px-4 py-1.5 text-sm font-medium text-white/80` ("Week").

4. **"Set your vibe" Card** (`stagger-item stagger-delay-4`)
   - Container: `bg-white/20 backdrop-blur-xl rounded-3xl p-5 mb-3 border border-white/20`
   - Top row: "Set your vibe" (`text-white font-medium text-base`) + Info button (`w-7 h-7 rounded-full bg-white/30`, Info icon size 14).
   - Bottom row: Italic text `text-white/60 text-sm italic leading-snug max-w-[200px]` -- "Share here what's in\nyour heart right now" + White circle button `w-12 h-12 rounded-full bg-white shadow-lg` with Plus icon (size 20, `text-neutral-700`).

5. **Bottom Cards Grid** (`grid grid-cols-2 gap-3` -- NO stagger-item on the grid wrapper)
   - Each card: `bg-white/20 backdrop-blur-xl rounded-3xl p-5 border border-white/20 flex flex-col justify-between aspect-square stagger-item stagger-delay-5`
   - Card 1: "Reflect on\nyour day" (`text-white font-medium text-base leading-snug`) + Plus button bottom-right.
   - Card 2: "See your\npatterns" + ArrowRight button bottom-right.
   - Buttons: Same white circle style as above.

6. **Spacer** (`flex-1`)

7. **Bottom Navigation** (`stagger-item stagger-delay-6`, `py-3`, `justify-around`)
   - Home icon (white, size 24) with dot below (`w-1 h-1 rounded-full bg-white`).
   - Clock icon (`text-white/50`, size 24).
   - LayoutGrid icon (`text-white/50`, size 24).

8. **Home Indicator**: `w-32 h-1 bg-white rounded-full`, centered, `pb-2`.

---

## SCREEN 2: INSIGHTS / PATTERNS

**Video**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260705_141850_7f43c95b-a2cd-4586-ae77-86a10221b9e1.mp4`
**Overlay**: `bg-[#4A3968]/40`
**Status bar**: White text/icons.

**Elements top-to-bottom:**

1. **Top Bar** (`stagger-item stagger-delay-1`, `mb-6`)
   - Left: Back button `w-10 h-10 rounded-full bg-[#4A3968]/25 backdrop-blur-xl`, ChevronLeft icon size 20.
   - Right: Name pill `bg-[#4A3968]/25 backdrop-blur-xl rounded-full pl-4 py-0.5 pr-0.5`. Text "Lena Voss" + avatar (same Pexels URL).

2. **Header** (`stagger-item stagger-delay-2`, `mb-2`)
   - Title: `text-white text-[38px] leading-[1.1] font-normal tracking-[-0.03em] mb-2` -- "Your patterns"
   - Subtitle: `text-white/70 text-lg leading-snug` -- "Factors shaping\nyour state"

3. **Insight Cards** (`flex flex-col gap-3 mt-6`) -- each card gets its own stagger class:
   - Each card: `bg-[#4A3968]/25 backdrop-blur-xl rounded-3xl px-5 py-5 border border-white/20 flex items-center justify-between`
   - Left side: Icon (size 20, white) + label (`text-white font-medium text-[15px]`)
   - Right side: Percentage (`font-semibold text-lg`) + description (`text-white/60 text-xs`)

   Card data:
   - Sun icon, "Early sun exposure", `+28%` (color `#CBD89E`), "Boosts wellness" -- `stagger-delay-3`
   - Activity icon, "Regular movement", `+22%` (color `#CBD89E`), "Boosts wellness" -- `stagger-delay-4`
   - Users icon, "Social gathering", `+18%` (color `#CBD89E`), "Boosts wellness" -- `stagger-delay-5`
   - Moon icon, "Low rest", `+18%` (color `#F5B5B6`), "Drains wellness" -- `stagger-delay-6`

4. **Spacer** (`flex-1`)

5. **CTA Button** (`stagger-item stagger-delay-7`, `mb-4`)
   - `w-full bg-white rounded-2xl py-4 px-6 flex items-center justify-between shadow-lg`
   - Text: "Explore suggestions" (`text-neutral-800 font-medium text-base`)
   - ArrowRight icon (size 20, `text-neutral-700`)

6. **Home Indicator**: Same as screen 1.

---

## SCREEN 3: MOOD LOG / CHECK-IN FORM

**Video**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260705_142807_689d92ab-24f9-419b-a340-76863735ff03.mp4`
**Overlay**: `bg-[#7f7160]/40`
**Status bar**: Dark text/icons (`text-neutral-700`, `bg-neutral-700` for bars/battery).

**State**: `selectedMood` (default 'well'), `notes` (string), `energyLevel` (default 4).

**Elements top-to-bottom:**

1. **Top Bar** (`stagger-item stagger-delay-1`, `mb-6`)
   - Left: Back button `w-10 h-10 rounded-full bg-[#7f7160]/25 backdrop-blur-xl`, ChevronLeft.
   - Right: Name pill `bg-[#7f7160]/25 backdrop-blur-xl rounded-full pl-4 py-0.5 pr-0.5` + avatar.

2. **Title** (`stagger-item stagger-delay-2`, `mb-5`)
   - `text-white text-[28px] leading-[1.2] font-normal tracking-[-0.02em]` -- "What describes you?"

3. **Mood Selection Row** (`stagger-item stagger-delay-3`, `mb-6 px-1`, `justify-between`)
   - 4 mood buttons (Low, Worried, Settled, Well), each with a custom SVG face (64x64 viewBox):
   - Unselected: Circle stroke white, eyes white filled, mouth white stroke.
   - Selected: Circle filled white (no stroke), eyes `#6B6B6B`, mouth `#6B6B6B`.
   - Face expressions:
     - **Low**: Eyes at (22,26) and (42,26) r=3. Mouth: deep frown path `M20 44c3-5 8-8 12-8s9 3 12 8`.
     - **Worried**: Same eyes. Mouth: slight frown `M22 42c2.5-3 6-5 10-5s7.5 2 10 5`.
     - **Settled**: Same eyes. Mouth: straight line `M22 40h20`.
     - **Well**: Same eyes. Mouth: smile `M20 38c3 5 8 8 12 8s9-3 12-8`.
   - Labels below: `text-white text-xs`, `font-semibold` when selected, `font-medium` when not.

4. **"Jot your thoughts"** heading (`stagger-item stagger-delay-4`, `text-white text-[22px] leading-[1.2] font-normal tracking-[-0.02em] mb-3`)

5. **Notes Textarea** (`stagger-item stagger-delay-5`)
   - Container: `bg-[#7f7160]/20 backdrop-blur-xl rounded-2xl p-5 border border-white/30 mb-6`
   - Textarea: `w-full bg-transparent text-white text-[15px] leading-relaxed placeholder-white/50 resize-none outline-none min-h-[80px]`, rows=3.
   - Placeholder: "Tell us your day?\nWhat was the thing\nthat shifted your mood?"

6. **"Vitality Meter"** heading (`stagger-item stagger-delay-6`, `text-white text-[22px] leading-[1.2] font-normal tracking-[-0.02em] mb-4`)

7. **Energy Level Bars** (`stagger-item stagger-delay-7`, `flex items-stretch gap-2 mb-4`)
   - Minus button: `w-10 h-20 rounded-full bg-[#C5B9AA]`, Minus icon size 16.
   - 5 bars (`flex-1 flex items-end gap-1.5`): Each bar `flex-1 h-20 rounded-xl`. Filled (level <= energyLevel): `bg-white shadow-sm`. Empty: `border-2 border-white/40 bg-white/20`.
   - Plus button: `w-10 h-20 rounded-full bg-[#C5B9AA]`, Plus icon size 16.

8. **Spacer** (`flex-1`)

9. **Done Button** (`stagger-item stagger-delay-8`, `mb-4`)
   - Same style as "Explore suggestions" button but text says "Done".

10. **Home Indicator**: Same white bar.

---

## PROFILE IMAGE (used across all 3 screens)

`https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`