Create a mobile-first logistics company landing page for "CARGOX GROUP" displayed inside an iPhone 15 Pro mockup frame. Use React, TypeScript, Tailwind CSS, and the `motion` library (motion/react) for animations. Use Vite as the build tool.

## Structure

The page is wrapped in a realistic iPhone 15 Pro mockup (aspect ratio 393:852) with:
- Dark frame (#1a1a1a) with 54px border-radius, 8px border (#2a2a2a), inset highlight (#3a3a3a)
- Dynamic Island (126x36px, centered at top, black, 20px border-radius, z-200)
- Home indicator at bottom (134x5px, white 30% opacity)
- Scrollable content area inside with hidden scrollbar and `container-type: size`

The body background is #111111. The scrollable container uses `container-type: size; container-name: phone;` for container queries.

## Fonts

- Import **Barlow Condensed 800** from Google Fonts
- Body font: Helvetica, Arial, sans-serif

## SECTION 1: Hero (full viewport height of the container using `100cqb`)

**Background:** Autoplaying, muted, looping video:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260620_185230_f7f71ef4-6655-469f-b9c6-efbdc1f7684a.mp4
```

**Navbar (absolute, top):**
- Left: "CARGOX" (white) / "GROUP" (yellow #ffda00) in Barlow Condensed 800, uppercase, clamp(22px, 6vw, 32px)
- Right: Hamburger menu icon (lucide-react Menu/X, 28px, white)
- Both slide in from left/right with 0.6s expo-out ease

**Mobile menu overlay:** Fixed, z-99, background #6682c2, centered nav items (Services, Industries, Company) in white 24px. AnimatePresence with scale + opacity transitions. Items stagger in from bottom.

**Hero content (bottom of section, z-10, padding 0 20px 24px):**
- Large headline in Barlow Condensed 800, uppercase, clamp(48px, 14vw, 72px), line-height 0.82:
  - "BEYOND" (white) - slides from x:-400
  - "BORDERS" (yellow #ffda00, text-align right) - slides from x:+400
  - "AND LIMITS" (white) - slides from x:-400
  - Staggered delays: 0s, 0.13s, 0.26s. Duration 0.85s, expo-out [0.16, 1, 0.3, 1]
- CTA Button: Custom SVG pill shape (fill #ffda00) with a circular end section containing a rotating arrow (white stroke, rotates from -135deg to -90deg on hover). Text "Get in touch" centered in the non-circle area. Font: Helvetica 20px, color #002a35. Hover: scale 1.08, y:-2. Tap: scale 0.97.

**Show hero content only after video `onCanPlay` fires** (fade in with AnimatePresence).

## SECTION 2: Info Card

**Background:** `linear-gradient(180deg, #C8C7B3 0%, #F0B172 50%, #EA7C58 100%)`
**Padding:** clamp(60px, 12vh, 120px) 20px

**Tagline** (scroll-triggered, slides from left):
- "LOGISTICS" in Barlow Condensed 800, white, clamp(44px, 13vw, 64px)
- "shaped by scale" / "powered by precision" in Helvetica, clamp(18px, 5vw, 26px), color #1a1a1a

**World Map:**
- Background map image: `https://polo-pecan-73837341.figma.site/_assets/v11/b6d561167283e799453232309bd13dd78b2d1afa.png`
- Aspect ratio 435/340, extends 20px beyond container edges
- SVG overlay (viewBox 0 0 299.037 142.509) at left:10%, top:18%, width:80% with 4 curved route paths in yellow (#FFDA00, 2.5 stroke):
  ```
  M128.161 74.6764C79.9989 130.001 71.9994 46.0005 20.9815 111.737
  M216.999 9.99985C260.499 12.4998 222.499 71.9998 291.999 58.9998
  M130.102 70.9998C144.499 -32.0002 183.852 70.2739 219.999 3.99985
  M14.4999 16.9998C111 20.9998 -53.0003 73.4998 21.4999 107
  ```
- Route lines animate with `pathLength` from 0 to 1, staggered
- Animated yellow arrow polygons (points="0,-4 8,0 0,4") using SVG `<animateMotion>` along each path, rotating automatically
- 5 stop dots at coordinates: [9.519,15.519], [289.519,59.518], [220.519,9.519], [125.518,78.519], [19.519,104.519] - each is a yellow circle r=9.519 with dark center r=3.389 (#002A35). They pop in with scale animation.
- 3 floating transport icons (white circle bg, 16% width, rounded-full, box-shadow):
  - Ship: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/08d6a37375d428e07c59e24a8529de89bfee157e.08d6a373.png` at left:26%, top:28.9%
  - Car: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/7d6f50a87e1427d9b4d1a9c9f1c064ff04b2b3f9.7d6f50a8.png` at left:70.8%, top:15.6%, rotate(9.73deg)
  - Plane: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/0e0282ab1c70db03d437b0d01875ce45557d49f6.0e0282ab.png` at left:55.2%, top:52.1%, rotate(180deg) scaleY(-1)
  - Icons pop in (scale 0.5 -> 1), then continuously float up/down with infinite y animation

**Stats** (scroll-triggered, slide in from opposite sides):
- "3M+" white Barlow Condensed 800, clamp(50px, 14vw, 72px) + "tons of cargo / delivered / without delays" in #1a1a1a, clamp(14px, 3.8vw, 18px)
- "13+" same styling, indented left clamp(40px, 12vw, 90px) + "years of trusted / and reliable / operations"

## SECTION 3: Contact Us

**Background:** #0a1f2b
**Padding:** clamp(48px, 10vh, 96px) 20px clamp(32px, 6vh, 64px)

**Heading** (scroll-triggered fade+slide from bottom):
- "CONTACT " (white) + "US" (yellow #ffda00), Barlow Condensed 800, clamp(44px, 13vw, 64px)
- Subtitle: "Complete the form and our team will contact you soon." in #b0b8bc, clamp(14px, 3.8vw, 18px)

**Form fields** (scroll-triggered, stagger from bottom):
- 3 inputs (First Name, Last Name, E-mail): pill-shaped (40px radius), bg rgba(255,255,255,0.08), white text, clamp(14px, 3.5vw, 16px). On focus: bg brightens to 0.14, slight scale 1.01.
- "Send" button: pill, bg #FFDA00, color #0a1f2b, font-weight 700, clamp(16px, 4vw, 20px). Hover: scale 1.03, y:-2, bg #ffe84d. Tap: scale 0.97.

**Footer info:**
- Email: info@cargox-group.com
- Phone: +380 44 234-7890
- Color #b0b8bc, hover slides right 4px and turns white

**Social icons** (3 white circles 44x44, hover: scale 1.15, y:-3):
- Instagram, LinkedIn, Facebook (inline SVG icons, fill #0a1f2b)

**Scroll-to-top button** (right side): white 44x44 circle with up-arrow SVG, same hover animation.

**Copyright:** "(c) 2025. All rights reserved." in #6b7a80, clamp(12px, 3.2vw, 14px)

## Animation System

- Use `motion/react` (NOT framer-motion)
- Easing curves: EXPO_OUT = [0.16, 1, 0.3, 1], EASE_OUT = [0.25, 0.46, 0.45, 0.94]
- Scroll-triggered reveals using `useInView` from motion/react with `once: true` and margin: '0px 0px -40px 0px' or '0px 0px -60px 0px'
- All scroll animations fire only once
- Transport icons have infinite floating y-axis animation with varying durations (2.5-3.3s)
- Mobile menu uses AnimatePresence for enter/exit

## Dependencies

```json
{
  "motion": "^12.40.0",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```