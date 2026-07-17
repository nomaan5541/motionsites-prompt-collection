Please build a React component that perfectly replicates a specific "Benefits" section. Use Tailwind CSS for styling, `motion/react` for animations, and `lucide-react` for icons.

### 1. Typography and Global Styles
- Use the `Inter` font everywhere (import via Google Fonts).
- The section background should be `#F4F6FA` and the base text color `#111`.
- Heavily utilize `tracking-tight` for headings and `tracking-wide` for small eyebrow tags.

### 2. Main Wrapper Layout
- Create a `<section>` with `py-20 lg:py-32 bg-[#F4F6FA] overflow-hidden`.
- Inside, create a container with `w-[90%] md:w-[85%] max-w-[1600px] mx-auto`.
- Use a 12-column grid layout on large screens: `grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start`.

### 3. Left Column (Takes up `lg:col-span-5`)
This column should contain staggered elements wrapped in `motion.div`. Use `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, amount: 0.3 }}` with a `duration: 0.6` and incrementing delays.

1. **Eyebrow Tag:** A flex container with a solid blue dot (`w-2 h-2 rounded-full bg-[#3b82f6]`) and the text "The benefit" (`text-[15px] font-medium tracking-wide`).
2. **Main Heading:** 
   - Text size: `text-[clamp(1.7rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight font-medium mb-8`.
   - The first line is "Explore [INLINE_IMAGE] our"
   - The inline image must use exactly this URL: `https://res.cloudinary.com/dsdhxhhqh/image/upload/v1777202844/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82_26-04-2026_134245-removebg-preview_jju5ww.png`. Style it as an inline block: `w-[1.2em] scale-[1.15] h-[0.8em] object-contain rounded-full align-middle mx-[-0.1em] -translate-y-[0.1em]`.
   - The second line is "flexible of activity."
3. **Pills Row (Flex wrap, gap 3, mb-12):** Two white `rounded-full` pills with slight shadows (`shadow-[0_2px_8px_rgba(0,0,0,0.04)]`), padding `px-5 py-2.5`, flex items centered.
   - First Pill: Contains a `<Soup className="w-[18px] h-[18px] text-gray-700"/>` and text "Eating After the Game".
   - Second Pill: Contains a `<Shirt className="w-[18px] h-[18px] text-gray-700"/>` and text "Game Jersey".
4. **Accordion/Tabs List:**
   - Manage state for `activeTab` (defaulting to 'connections'). 
   - Create two tabs: "Connections" and "Sport Pacakge" (keep exact spelling).
   - Wrapper styling for each tab: `rounded-[24px] overflow-hidden transition-all duration-300`. 
   - State styling: If active, apply `bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]`. If inactive, apply `hover:bg-black/5 cursor-pointer`.
   - In the tab header (padding `p-7 md:p-8`), map the title (`text-[22px] font-medium`). On the right, include an animated icon toggle. Use framer-motion to cross-fade and rotate between a `<Plus />` and `<Minus />` icon depending on whether the tab is active.
   - Add a smooth expand/collapse `AnimatePresence` revealing content below the header.
   - Connections content: "Built to connect — with people, purpose, and the momentum that moves you forward."
   - Sport Package content: "A comprehensive collection of sporting goods, tailored for maximum performance and everyday agility."

### 4. Right Column (Takes up `lg:col-span-7 h-full`)
Fade this entire side in from the right (`x: 20` to `0`).
- Container: `bg-white rounded-[2.5rem] p-6 md:p-8 xl:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]`. Use `flex flex-col xl:flex-row gap-8 h-full min-h-[560px]`.

**Left Side of Card (Text & Button):**
- Flex column, flex-1, `justify-between`.
- Top section: A flex label `<Target className="w-5 h-5 text-[#ea580c]"/>` with text `EST — 1997` (`font-bold text-[15px] tracking-wide`). Below it, paragraph text: "Smart features designed to move with you — fast, flexible, and built for everyday action." (`max-w-[280px] text-gray-500 text-[18px] leading-[1.6]`).
- Bottom section: A stacked heading: "Visionary" over "Precision Play" (`text-[clamp(1.7rem,5vw,46px)] leading-[1.1] font-medium tracking-tight mb-8`).
- Button: 100% width on mobile, `rounded-full bg-black text-white px-7 py-4 flex items-center justify-between text-[15px] font-medium hover:bg-gray-800`. Text "Join Now!" with an `<ArrowRight />` icon. 

**Right Side of Card (Media and Floating Badges):**
- Container: `w-full xl:w-[320px] 2xl:w-[410px] h-[360px] md:h-[450px] xl:h-auto rounded-[2.5rem] relative overflow-hidden flex-shrink-0`.
- **The Video Layer:** Use a `<video>` tag filling exactly the absolute shape (`absolute inset-0 w-full h-full object-cover z-0`). Props: `autoPlay loop muted playsInline`. 
  - SRC MUST BE EXACTLY: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260426_105815_d66e9c4c-a1f8-4011-9ee5-f0cace24e642.mp4`
- **Top-Right Pill (Absolute Z-10):** Positioned `top-6 right-6 lg:top-8 lg:right-8`. `bg-white text-[#111] px-5 py-2.5 rounded-full flex shadow-md gap-2.5 text-[15px] font-medium`. Contains a `<Gift className="w-5 h-5 text-gray-700" />` and the text "February Sale". Pop this in with framer motion `scale`.
- **Bottom-Left Card (Absolute Z-10):** Positioned `bottom-6 left-6 lg:bottom-8 lg:left-8`. `bg-white text-[#111] rounded-[28px] overflow-hidden w-[190px] shadow-lg`. Pop this in with `x: -20` to `0`.
  - **Counter interaction & logic:** Attach `onViewportEnter={handleStartCount}` to this motion div. State `countValue` should animate from 0 to 86 seamlessly over 2000 duration using `performance.now()` in `requestAnimationFrame` and an ease-out calculation.
  - Top half (white): Padding `pt-6 px-6 pb-4`. Contains text "Tenis Outdor" in `text-gray-600 text-[15px] font-medium mb-1.5`. Below it, map the counter: `{countValue}%` styled `text-[42px] font-medium tracking-tight leading-none`.
  - Bottom half (blue): `bg-[#3585A5] text-white px-6 py-4 flex items-center gap-2.5`. Contains `<Zap className="w-5 h-5 fill-white text-white"/>` and text "Boost" (`font-medium text-[16px]`).