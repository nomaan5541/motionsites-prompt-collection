Build an "Insights" stats section for a fintech landing page using React + TypeScript + Vite + Tailwind CSS + Framer Motion. This is a standalone section component. It must be fully mobile responsive.

**Dependencies:** `framer-motion`

**Tailwind config -- extend `fontFamily`:**
```js
'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
```

**CSS (`index.css`) -- add globally:**
```css
@layer base {
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

---

**BlurIn utility component (`src/components/BlurIn.tsx`):**

A reusable wrapper. Uses Framer Motion's `useInView` hook with `{ once: true }`. Wraps children in a `motion.div` that animates from `filter: blur(20px), opacity: 0` to `filter: blur(0px), opacity: 1` over `duration: 1.2` seconds when it enters the viewport. Named export `BlurIn`.

---

**InsightsSection component (`src/components/InsightsSection.tsx`):**

**Outer container:** `<div>` with class `px-6 md:px-12 lg:px-[60px] flex flex-col gap-[90px] py-20 bg-white`.

---

**Top text block** (`max-w-[517px] flex flex-col gap-10`):

1. Heading wrapped in `<BlurIn>`: Text `"Instant payment clarity counts"`. Class: `text-[#00041F] text-4xl md:text-5xl lg:text-6xl font-helvetica-neue font-medium leading-[1] lg:leading-[60px] tracking-[-0.03em]`.

2. Paragraph (NOT wrapped in BlurIn): Text `"Real-time data powers smarter spending choices every day"`. Class: `text-[#49484F] text-base md:text-lg lg:text-xl font-helvetica-neue max-w-[361px]`.

---

**Cards row** -- a `motion.div` with class `flex flex-col lg:flex-row items-stretch lg:items-end gap-5`.

Framer Motion config on the row container:
- `variants`: `hidden: { opacity: 0 }`, `visible: { opacity: 1, transition: { staggerChildren: 0.2 } }`
- `initial="hidden"`
- `whileInView="visible"`
- `viewport={{ once: true, amount: 0.2 }}`

Each card is a `motion.div` with variants: `hidden: { opacity: 0, y: 30 }`, `visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }`.

Each card has base class: `flex-1 p-10 rounded-[40px] relative overflow-hidden flex flex-col justify-end`.

Each card contains (in order):
1. A `<video autoPlay loop muted playsInline>` with class `absolute inset-0 w-full h-full object-cover` and a `<source>` with the specific CloudFront URL and `type="video/mp4"`.
2. A color overlay `<div>` with class `absolute inset-0` and a specific background color.
3. A content block `<div>` with class `relative z-10 max-w-[388px] flex flex-col gap-5` containing the stat number and description.

Stat number style (all cards): `text-[#00041F] text-5xl md:text-[60px] font-helvetica-neue font-medium leading-[1] md:leading-[60px]`

Description style (all cards): `text-[#49484F] text-lg md:text-[22px] font-helvetica-neue opacity-80`

---

**Card 1:**
- Min height: `min-h-[450px]`
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_143605_bc7bd6c0-9c68-49ff-a9d3-073a10759fa4.mp4`
- Overlay color: `bg-[rgba(206,223,235,0.25)]`
- Stat: `1.6M`
- Description: `"Active members rely on us for effortless payment experiences"` with `max-w-[377px]`

**Card 2:**
- Min height: `min-h-[350px]` (shorter than the others -- this creates the staggered bottom alignment on desktop via `lg:items-end` on the parent)
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_145119_f4ec4d9f-3ecd-4116-baa3-26e8cf2df976.mp4`
- Overlay color: `bg-[rgba(247,236,233,0.6)]`
- Stat: `850K`
- Description: `"Transfers completed each day, quick and protected"` with `max-w-[351px]`

**Card 3:**
- Min height: `min-h-[450px]`
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_140728_ae719193-f10b-4105-82fc-c989610b3aa6.mp4`
- Overlay color: `bg-[rgba(218,218,218,0.2)]`
- Stat: `120+`
- Description: `"Nations enabled for instant checkouts and worldwide remittance"` with `max-w-[351px]`

---

**Responsive behavior:**
- On mobile/tablet (`< lg`): Cards stack vertically (`flex-col`), each stretching full width (`items-stretch`).
- On desktop (`lg:`): Cards display in a horizontal row (`flex-row`) aligned to the bottom (`items-end`), so the shorter middle card (350px) sits higher at the bottom while the taller outer cards (450px) extend above it.
- Horizontal padding scales: `px-6` on mobile, `md:px-12` on tablet, `lg:px-[60px]` on desktop.
- Heading scales: `text-4xl` on mobile, `md:text-5xl` on tablet, `lg:text-6xl` on desktop.

---