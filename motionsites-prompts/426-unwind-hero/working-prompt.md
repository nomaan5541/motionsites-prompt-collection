Recreate the WoodNest hero section exactly as a React + Tailwind CSS + Framer Motion component.

Use font family "PP Mori" for the entire hero. Define @font-face for PP Mori normal weight 400 and semibold weight 600 using the existing embedded WOFF/WOFF2 data from src/styles/fonts.css. Set base html font size to 16px.

The page is a full viewport hero:
- Root wrapper: relative, min-height: 100vh, width: 100%, overflow hidden, font PP Mori, font weight 400.
- Background: absolute full-screen video, inset 0, width/height 100%, object-cover.
- Video attributes: autoPlay, muted, playsInline. Do not loop unless explicitly requested.
- Exact video URL:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260620_140846_aef8cb19-5ec8-4b45-974b-020aed20f297.mp4

Header:
- Position relative, z-index 20.
- Display flex, align center, justify-between.
- Desktop padding: top 60px, left/right 65px.
- Tablet/mobile padding: px 32px / 16px, top 45px / 30px.
- Left: exact WoodNest SVG logo, 142px wide, 50px tall, white wordmark with warm yellow/orange mark (#FFB33F) and 0.6 opacity gradient details.
- Center/right desktop nav hidden below md.
- Nav items: Locations, Rooms, Experiences, Contact.
- Nav gap desktop 44px, text white, PP Mori normal, 16px, line-height 24px.
- Nav hover animation: opacity to 0.6, tap scale 0.96, duration 0.15.
- Book Now button: white background, black text, PP Mori semibold 16px/24px, padding 12px 32px, border-radius 10px.
- Button hover: scale 1.04 and background #f0f0f0. Tap scale 0.97. Transition duration 0.18 easeOut.
- Mobile: show Menu/X icon button in white, 24px. Open menu is absolute below header, left/right 0, margin x 16px, margin-top 8px, background #2a3349, border-radius 16px, padding 24px, flex column gap 16px, shadow-xl, z-index 50.

Hero main:
- Position relative, z-index 10.
- Padding desktop: 64px 65px 60px.
- Padding tablet/mobile: top 40px/24px, x 32px/16px, bottom 56px/40px.
- min-height: calc(100vh - 110px).
- Display flex column.
- Inner layout: flex-1, flex column on mobile, flex row on lg, lg align-stretch, gap 40px mobile, 0 desktop.

Left content:
- Flex column, justify-between, flex-1.
- H1: PP Mori normal, white, tracking-tight.
- Font size: clamp(52px, 9vw, 128px).
- Line height: 0.82.
- Three block lines:
  1. "Nature's" in white
  2. "Perfect" in white at 50% opacity
  3. "Hideaways" in white
- Animate each line with fade-up:
  initial opacity 0, y 28
  animate opacity 1, y 0
  transition duration 0.7, ease [0.22, 1, 0.36, 1]
  delays: 0.2, 0.35, 0.5

Bottom left row:
- margin-top 40px on small screens, 0 on lg.
- Flex column on mobile, row on sm/lg.
- align-start, gap 32px; desktop lg gap 0.
- Description paragraph:
  text: "Discover handpicked luxury cabins in breathtaking locations. Unplug, unwind, and reconnect with what matters most."
  PP Mori normal, color white/80, line-height 24px.
  Width 300px on sm/lg, full width on mobile.
  Font size clamp(15px, 1.3vw, 18px).
  Fade-up delay 0.65.
- Rating block:
  flex column gap 8px.
  sm margin-left 32px, lg margin-left 140px.
  First row flex align-center gap 4px.
  Star icon: 28px square, fill #FFB33F, use the same star SVG path from the existing component.
  Rating text "4.7": white, PP Mori normal, 36px, line-height 34px.
  Caption text: " from 1,800+ stays", white, PP Mori normal, 20px, line-height 24px.
  Fade-up delay 0.75.

Right reserve card:
- Wrapper animates from right:
  initial opacity 0, x 40
  animate opacity 1, x 0
  transition duration 0.8, ease [0.22, 1, 0.36, 1], delay 0.4
- Layout wrapper: flex; on lg flex-col justify-end; lg padding-left 40px, xl padding-left 64px.
- Card: relative, width 100%, max-width 410px, border-radius 35px, padding 30px, flex column, gap 30px.
- Add two absolute inset layers inside card:
  1. backdrop blur layer: inset 0, backdrop-filter blur(12.5px), border-radius 35px, pointer-events none.
  2. tint layer: inset 0, background rgba(0,0,0,0.25), mix-blend-mode soft-light, border-radius 35px, pointer-events none.

Reserve card content:
- Title row: relative flex, align-start, justify-between, gap 16px.
- Cabin title: PP Mori normal, white, 32px, line-height 36px, width 280px, two lines:
  "Evergreen "
  "Pine Family Lodge"
- Edit icon circle: background rgba(0,0,0,0.35), size 40px, border-radius 9999px, centered. Icon is 20px, stroke #BDC6C7 at 40% opacity using the existing SVG paths.
- Date row:
  Two equal pills in a flex row gap 10px.
  Each pill button: width 100%, background rgba(0,0,0,0.35), display flex, gap 6px, align center, padding 16px, border-radius 10px.
  Text: white, PP Mori normal, 16px/24px, flex-1, text-left.
  Values: "Feb 11" and "Mar 25".
  Calendar icon 20px, stroke #515C62. Chevron icon 16px, stroke #515C62.
  Hover: background rgba(0,0,0,0.5), scale 1.02. Tap scale 0.97. Duration 0.18 easeOut.
  When open, add ring 1px white/20 and rotate chevron 180deg over 0.2s.
- Dropdown calendar:
  absolute top calc(100% + 8px), left/right 0, z-index 50, border-radius 16px, overflow hidden, padding 16px.
  Background rgba(30,38,60,0.97), backdrop-filter blur(16px).
  Month label centered, white/60, 13px/20px, margin-bottom 12px, tracking-wide.
  Grid 7 columns, vertical gap 4px. Weekday labels white/30, 11px/20px.
  Day buttons 13px/20px, height 28px, border-radius 8px. Selected day white background, text #34405c, semibold.
  Calendar months: February 2025, 28 days, starts after 6 blanks; March 2025, 31 days, starts after 6 blanks.
- Time info box:
  background rgba(0,0,0,0.35), height 73px, border-radius 10px, overflow hidden, position relative.
  Left label: "Check-in", x 16px, top 16px, PP Mori normal, 14px/16px, color #bdc6c7, opacity .4.
  Left value: "After 2:00 PM", x 16px, top 34px, white, 16px/24px.
  Right label: "Check-out", right 16px, top 16px, same label style.
  Right value: "Until 12:00 PM", right 16px, top 34px, white, 16px/24px.
  Center divider: vertical line, height 44px, width 1px, background #515C62, opacity .4, centered horizontally.
- Price row:
  flex column gap 24px.
  Price/guest line: flex align-end justify-between, no wrapping.
  Price: "$359" white, 32px, line-height 28px; "/night" color #515c62, 20px.
  Guest text: "2-5 guests", white, 14px/16px.
- Reserve button:
  width 100%, height 48px, background white, border-radius 10px, centered.
  Text "Reserve", PP Mori semibold, black, 16px/24px.
  Hover scale 1.03 and background #f0f0f0. Tap scale 0.97. Duration 0.18 easeOut.

Global animation helpers:
fadeUp(delay):
initial { opacity: 0, y: 28 }
animate { opacity: 1, y: 0 }
transition { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }

fadeDown(delay):
initial { opacity: 0, y: -20 }
animate { opacity: 1, y: 0 }
transition { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }

fadeRight(delay):
initial { opacity: 0, x: 40 }
animate { opacity: 1, x: 0 }
transition { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }

At a 1545x997 viewport, the rendered desktop geometry should approximately be:
- Header: x 0, y 0, w 1545, h 110, padding 60px 65px 0.
- Main: x 0, y 110, w 1545, h 887, padding 64px 65px 60px.
- H1: x 65, y 174, w about 955, h 315. Font 128px, line-height 104.96px.
- Description: x 65, y 841, w 300, h 96.
- Rating value row: x 505, y 841.
- Reserve card: x about 1084, y 502, w about 396 rendered at this viewport, h 436, padding 30px, radius 35px.

Do not add extra overlays, gradients, cards, marketing sections, or explanatory text. The hero should be the first screen and match this exact composition.