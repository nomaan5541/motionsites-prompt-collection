# Radial Diagram

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `radial-diagram`
- Title: Radial Diagram
- Category: Testimonials
- Type: testimonials
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/W3vt73qPAu4nfaVYJy3q5ODChvlqhx01Y2GZW9U2dj5c.m3u8

## Full Prompt

````
Build an "Our Comprehensive Branding Approach" section as a React component using TypeScript, Tailwind CSS 3, and Framer Motion. The section sits on a dark background (`#0f0f0f`) with white text. Font is `'DM Sans', sans-serif` (loaded via Google Fonts: `https://fonts.googleapis.com/css?family=DM+Sans:500,400`). Here is the exact specification:

---

**Overall Section Container:**

- `<section>` with `overflow-x-hidden`, `bg-[#0f0f0f]`, `text-white`, inline style `fontFamily: "'DM Sans', sans-serif"`

- Inner wrapper: `mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32`

- All animations use the easing curve `[0.22, 1, 0.36, 1]` and trigger once when scrolled into view using Framer Motion's `useInView` with `{ once: true, margin: "-60px" }`

---

**Header (top of section):**

- Flex row (`flex items-start gap-4`) with `mb-20`

- Two lines of text stacked vertically:

  - Line 1: "Our Comprehensive" in `text-[#6e6e6e]` (gray), `font-light`, size `clamp(2rem, 3.4vw, 2.6rem)`, `leading-[1.18]`, `tracking-[-0.01em]`. Animates from `opacity:0, y:20` to visible, duration `0.7s`.

  - Line 2: "Branding Approach" in `text-white`, same font styling. Same animation but with `delay: 0.1s`.

- A small square button to the right: `h-7 w-7`, `border border-white/20`, contains a plus icon (SVG: two perpendicular lines forming a +, `stroke="currentColor"`, `strokeWidth="1.3"`, viewBox `0 0 12 12`). Text color `text-white/70`, hover: `bg-white/10 text-white`. Animates scale from 0.8 to 1, opacity 0 to 1, delay `0.25s`.

---

**Content Row (below header):**

- `flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10`

- Left side: `flex min-w-0 flex-1 flex-col gap-8 sm:flex-row sm:items-start sm:gap-10` containing the portrait and testimonial

- Right side: the circle diagram

---

**Left: Glitch Portrait**

- Container: `relative shrink-0`, fixed size `width: 250px`, `height: 310px`

- Contains an `<img>` filling the container with `object-cover`, using this Pexels image: `https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600`

- 10 small white glitch blocks (`bg-white`) absolutely positioned around the edges of the portrait (some overflow outside). Each block has a fixed pixel `width` and `height` and percentage-based `left`/`top`. They animate in with `scale: 0 -> 1`, `opacity: [0, 1, 0.9]`, staggered by `0.05s` starting at `delay: 0.5s`, duration `0.35s`.

- The exact glitch block positions (x%, y%, width px, height px):

  ```

  (2, -3, 22, 22), (12, -5, 14, 10), (28, -2, 10, 10),

  (82, 22, 8, 8), (-4, 75, 16, 12), (8, 82, 10, 10),

  (-2, 88, 18, 16), (56, 82, 12, 14), (70, 90, 10, 10),

  (42, 94, 8, 6)

  ```

- The entire portrait group animates from `opacity:0, y:24` to visible, duration `0.8s`, delay `0.2s`.

---

**Left: Testimonial Text (next to portrait)**

- Container: `min-w-0 max-w-[420px]`

- Opening curly quote character `\u201C` in `text-[#555]`, font `Georgia, 'Times New Roman', serif`, `fontSize: "3.2rem"`, `lineHeight: 0.7`. Animates in with `y:14`, delay `0.3s`.

- Quote paragraph: "We kept seeing the same pattern -- brands with potential lost between messy processes, scattered visuals, and forgettable websites. This studio exists to align it all into one clear, consistent story." Use `&mdash;` for the em-dash. Styled as `text-white/90`, size `clamp(1.05rem, 1.5vw, 1.28rem)`, `font-normal`, `leading-[1.58]`. Animates from `y:20`, delay `0.4s`.

- Attribution block `mt-10`:

  - Name: "Alex West" in `text-[1.15rem] font-medium tracking-[0.01em] text-white`

  - Title: "Founder & Creative Director" (`&amp;` in JSX) in `mt-1 text-[0.85rem] tracking-wide text-[#6e6e6e]`

  - Both animate together from `y:14`, delay `0.55s`.

---

**Right: Circle Diagram**

- Wrapper: `flex w-full max-w-[360px] shrink-0 items-center justify-center self-center sm:max-w-[400px] lg:max-w-[440px]`

- Inner container has `aspect-ratio: 1/1`, position relative, animates opacity 0->1, delay `0.4s`, duration `0.8s`.

- SVG with `viewBox="0 0 100 100"`, absolutely filling the container:

  - A circle centered at `(50, 50)` with radius `30`, `stroke="white"`, `strokeWidth="0.18"`, `opacity="0.45"`

  - 3 lines radiating from center `(50,50)` outward to radius `36` (30+6) at these angles:

    - "websites" at 215 degrees

    - "brands" at 335 degrees

    - "ui/ux design" at 110 degrees

  - Lines default: `strokeWidth: 0.18`, `opacity: 0.45`. On hover of corresponding label: `strokeWidth: 0.6`, `opacity: 1`. Transition duration `0.3s`.

- 3 text labels positioned at radius `46` (30+16) from center at the same angles, using `transform: translate(-50%, -50%)` for centering. Styled with `fontSize: clamp(1.25rem, 2.8vw, 2.4rem)`, `letterSpacing: -0.01em`, `text-white`, `whitespace-nowrap`.

  - Default `fontWeight: 300`, on hover of that label: `fontWeight: 700` (transition `0.25s`).

  - Each label animates in with `opacity:0, y:16` to visible, staggered by `0.15s` starting at delay `0.6s`, duration `0.7s`.

- Hover state is shared: hovering a label highlights both the label (bold) and its corresponding SVG line.

---

**Dependencies:** React 18, Framer Motion (v12+), Tailwind CSS 3. Uses `useState`, `useRef`, `useInView` from framer-motion, and `motion` components for all animations. No external animation libraries beyond Framer Motion.
````
