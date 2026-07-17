Create a mobile supplement e-commerce product screen displayed inside a realistic iPhone mockup frame. Use React with Tailwind CSS and lucide-react icons. Load Google Fonts: **DM Sans** (400, 500) and **Inter** (400, 500, 600).

## Phone Frame
- Centered on page with `bg-neutral-100` background
- Frame: `w-[375px] h-[812px]`, white bg, `border-[8px] border-neutral-900 rounded-[50px]`, box-shadow `0 25px 50px -12px rgba(0,0,0,0.25)`
- Dynamic Island: `w-[120px] h-[32px]` black pill centered at top
- Home indicator at bottom: `w-[134px] h-[5px]` black rounded-full bar

## Status Bar
- Left: "9:41" (Inter 600)
- Right: SVG signal bars, WiFi icon, battery icon (all black)

## Header
- Left: hamburger Menu icon (lucide, size 22, strokeWidth 1.5)
- Center: "TerraElix" (DM Sans 500, letter-spacing -0.03em)
- Right: ShoppingBag icon with "10" badge (18x18 black circle, white 9px text)

## Slide-out Menu
- Overlay: `bg-black/40`, slides from left, `w-[260px]` white panel
- Logo + X close button at top
- Nav items: "About", "Products", "Promotions", "Contact" (Inter 400, hover:bg-neutral-100 rounded-lg)

## Title Section
- "Supplements" in DM Sans 400, `text-[42px] leading-[1]`

## Category Tabs
- Items: "All", "Capsules", "Tablets", "Functional Powders"
- Active tab (index 1 "Capsules"): black text, font-semibold, border-b-2 border-black
- Inactive: text-neutral-400, no border
- Font: Inter, letter-spacing -0.01em, text-sm

## Product Carousel (auto-plays every 3s, loops infinitely)
- 5 visible slots: farLeft, left, **center**, right, farRight
- Constants: `ITEM_WIDTH = 105`, `CENTER_WIDTH = 160`, `GAP = 12`
- Center item: 160x260px, opacity 1, z-10
- Adjacent items: 105x200px, opacity 0.7, z-0, clickable (go left/right)
- Far items: 105x200px, opacity 0.3
- Animation: All properties (width, height, transform, opacity) transition simultaneously with `0.45s cubic-bezier(0.25, 0.1, 0.25, 1)` -- items smoothly scale up/down as they move to/from center
- On transition end: update active product, reset quantity to 1

### Products data:
```
[
  { id: 1, name: 'Herbix 60', subtitle: 'Vitamin Complex', dosage: '250 mg', price: 30.0, image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_182445_93ebd4ab-c1d7-447d-a033-c817f33efcd0.png&w=1280&q=85' },
  { id: 2, name: 'Herbix 30', subtitle: 'Immunity Boost', dosage: '500 mg', price: 25.0, image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_184200_daae953b-540b-48d5-8a1f-70323e53af56.png&w=1280&q=85' },
  { id: 3, name: 'Herbix 90', subtitle: 'Joint Support', dosage: '300 mg', price: 35.0, image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_184122_8a7d693e-37da-417d-804a-807ea67916af.png&w=1280&q=85' },
]
```

## Product Info (below carousel, centered)
- Name: DM Sans 400, text-2xl, fades out during animation (opacity 0)
- Subtitle: Inter 400, text-sm, text-neutral-500
- Dosage: Inter 400, text-xs, text-neutral-400

## Price + Quantity + Buy
- Price: DM Sans 500, text-2xl, letter-spacing -0.02em, shows `price * quantity`, fades during animation
- Quantity selector: two round bordered buttons (w-9 h-9, rounded-full, border-neutral-300) with Minus/Plus icons, number in center (Inter 500, text-lg)
- "Buy Now" button: full-width, `h-14 bg-black text-white rounded-xl`, Inter 500, hover:bg-neutral-800, active:scale-[0.97]

## Mount Animation (staggered on page load)
- Each section fades/slides in with `duration-700` and increasing delays (0ms, 100ms, 200ms, 300ms, 400ms, 500ms, 600ms)
- Carousel section uses `scale-95 -> scale-100` entrance

## CSS Requirements
- Tailwind CSS
- Custom `.scrollbar-hide` utility class to hide scrollbars
- Body: margin 0, font-smoothing antialiased