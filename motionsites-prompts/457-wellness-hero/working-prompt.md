Build a full-screen hero section landing page for "Aurai" - an always-on AI wellness companion. The page is a single viewport-height section with a looping background video and overlaid content.

## Video Background

- Full-screen `<video>` element with `autoPlay`, `loop`, `muted`, `playsInline` attributes
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260618_174853_aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4`
- Video covers entire viewport with `object-cover`
- Focal point positioning:
  - Mobile (default): `object-position: 80% center`
  - Tablet (md breakpoint): `object-position: right center`
  - Desktop (lg breakpoint): `object-position: center center`

## Fonts

- **Askan Light** loaded from: `https://db.onlinewebfonts.com/c/304a6edcec9f8858eeaafc2ac18243f4?family=Askan+Light` - used for the brand name and heading
- **Inter** (weights 300, 400, 500, 600) from Google Fonts - used as the body/UI font
- Tailwind config extends fontFamily with `askan: ['"Askan Light"', 'serif']` and `inter: ['Inter', 'sans-serif']`

## Layout Structure

The content is layered on top of the video using `absolute inset-0 z-10` with a flex column layout. Padding: `px-4 sm:px-10 lg:px-12 py-4 sm:py-8`.

## Navigation (Top)

A `<nav>` with `flex items-center justify-between`:

**Left nav pill (glassmorphism):**
- `bg-black/20 backdrop-blur-md rounded-2xl border border-white/10`
- Padding: `px-4 py-2.5 sm:px-6 sm:py-4`
- Contains:
  - A custom SVG logo (4-petal pinwheel shape, `w-5 h-5 sm:w-7 sm:h-7`, white)
  - Brand text "Aurai" in `font-askan text-white text-base sm:text-xl tracking-wide`
  - Hamburger menu icon (lucide-react `Menu`/`X`) with left margin: `ml-4 sm:ml-32 md:ml-64 lg:ml-96`

**Right button (desktop only):**
- `hidden sm:block bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full`
- Text: "Join the list"

## Mobile Menu (shown on toggle)

- `sm:hidden`, positioned `absolute top-[4.5rem] left-4 right-4`
- `bg-black/30 backdrop-blur-xl rounded-2xl p-5 border border-white/10`
- Contains links: "Story", "Benefits", "Connect" (white text) and a full-width "Join the list" button

## Main Content (Bottom-aligned)

On mobile: a spacer `flex-1 sm:hidden` pushes content to the bottom.

The content container: `flex flex-col sm:flex-1 sm:flex-row sm:items-end pb-4 sm:pb-12 lg:pb-16 sm:mt-auto`

**Left column:**

1. **Heading:** `font-askan text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-[700px]`
   - Text: "Your calm is always within."

2. **Subtitle:** `text-white/70 text-xs sm:text-base md:text-lg max-w-[520px] leading-relaxed`
   - Text: "Aurai is your always-on wellness companion. Built by leading therapists, it brings you the care and clarity right when you need it."

3. **Email form:** A rounded pill input with inline submit button
   - Container: `bg-black/30 backdrop-blur-md rounded-full border border-white/10`
   - Input: transparent background, white text, placeholder "Your email address", `px-4 sm:px-6 py-3 sm:py-4 text-sm`
   - Submit button (absolute right-1.5): `bg-white text-gray-900 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-full`
   - Text: "Join the list"
   - On submit: shows alert with entered email

4. **Feature pills (mobile only):** `flex sm:hidden flex-wrap gap-2 mt-2`
   - Three pills with `bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10`
   - Labels: "Smart Therapy", "Real-time Healing", "Insights into outcomes"

**Right column (desktop only):**
- `hidden sm:flex flex-col items-end gap-2 self-end`
- Same three feature pills as mobile but with `text-xs sm:text-sm px-4 py-2`

## Custom SVG Logo

A pinwheel/4-quadrant shape with this path:
```
M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z
```
ViewBox: `0 0 256 256`, fill: `currentColor`

## Global CSS

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```

## Key Design Principles

- No dark overlay on the video - content relies on glassmorphism pills and text contrast
- All interactive glass elements use `bg-black/20` or `bg-black/30` with `backdrop-blur-md` or `backdrop-blur-xl`
- Borders are `border-white/10` throughout
- White text with `/70` opacity for secondary text
- Rounded-full for buttons and inputs, rounded-2xl for containers
- Page title: "Aurai - Always-On Wellness Companion"