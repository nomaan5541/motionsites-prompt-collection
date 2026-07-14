Build a "Why Us?" bento grid section as a React + TypeScript component using Tailwind CSS 3 and Framer Motion. Font is `'DM Sans', sans-serif` (Google Fonts: `https://fonts.googleapis.com/css?family=DM+Sans:500,400`). Dark background `#0f0f0f`. Here is the exact specification:

---

**Section Container:**

- `<section>` with `bg-[#0f0f0f] px-6 py-24 sm:px-10 lg:px-16 lg:py-32`, inline style `fontFamily: "'DM Sans', sans-serif"`

- Inner wrapper: `mx-auto max-w-7xl`

- All animations use easing `[0.22, 1, 0.36, 1]`, triggered once on scroll via Framer Motion `useInView` with `{ once: true, margin: "-60px" }`

- Each card uses a shared `CardMotion` wrapper that animates from `opacity: 0, scale: 0.95` to `opacity: 1, scale: 1`, duration `0.65s`, with staggered delays

---

**Layout:**

- On mobile (`md:hidden`): single column, cards stacked vertically with `gap-4`

- On desktop (`md:grid md:grid-cols-6 md:gap-4`): explicit 6-column grid with `gridTemplateRows: "repeat(10, minmax(46px, auto))"`. Card placements:

  - Header card: `gridColumn: "1 / 3"`, `gridRow: "1 / 5"`

  - Speed card (5x): `gridColumn: "3 / 5"`, `gridRow: "1 / 6"`

  - Text card (dark): `gridColumn: "5 / 7"`, `gridRow: "1 / 5"`

  - Income card (32M+): `gridColumn: "1 / 3"`, `gridRow: "5 / 11"`

  - Photo card (100+): `gridColumn: "3 / 5"`, `gridRow: "6 / 11"`

  - Projects card (200+): `gridColumn: "5 / 7"`, `gridRow: "5 / 11"`

---

**Shared "Plus Button" component:**

- A `<span>` with `inline-flex h-7 w-7 shrink-0 items-center justify-center border text-xs font-light`, containing the text "+". Has a `dark` variant: when `dark=true` uses `border-black/20 text-black`, otherwise `border-white/30 text-white`.

---

**Card 1 -- Header Card (no background):**

- Delay `0`. Classes: `flex h-full flex-col justify-end pb-4 pr-4`

- Label: "why us?" in `mb-4 inline-block text-sm tracking-[0.15em] text-white/70`

- Heading: `text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-[1.2] tracking-tight`

  - Line 1: "Seamless" in `text-white`

  - Line 2: "Brand, Identity," in `text-[#666]`

  - Line 3: "and Web" in `text-[#666]`

  - Each line separated by `<br />`

---

**Card 2 -- Income Card (32M+), white background:**

- Delay `0.08`. Classes: `flex h-full flex-col bg-white p-7`

- Top row: flex between the stat and a dark PlusBtn

  - Stat: "32M +" in `text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-none tracking-tight text-black`

  - Subtitle: "Income produced for our customers." in `mt-2 text-[13px] leading-snug text-[#777]`

- Bottom (pushed down with `mt-auto pt-8`): A staircase dot chart

  - 26 columns, each a `flex flex-col-reverse gap-[2px]` of 15 cells

  - Each cell is `h-[5px] w-[5px] sm:h-[7px] sm:w-[7px]`

  - Filled cells (`bg-black`) are computed: for column `c`, base = `floor(c * 0.55)`, active rows = `[base]`, add `base+1` if `c` is odd, add `base-1` if `c > 4` (filter negatives)

  - Columns separated by `gap-[2px]`

  - Below the chart: year labels `["2016", "2018", "2022", "2024", "2026"]` in `mt-3 flex justify-between pr-2 text-[10px] tracking-wide text-[#aaa]`

---

**Card 3 -- Speed Card (5x), white background:**

- Delay `0.12`. Classes: `flex h-full flex-col bg-white p-7`

- Top area (`flex flex-1 items-start justify-center pt-2`): An SVG diagram `viewBox="0 0 200 180"`, `h-auto w-full max-w-[240px]`:

  - 3 concentric circles centered at `(110, 80)` with radii `75`, `50`, `25`, `stroke="#222"`, `strokeWidth="0.8"`, opacities `0.2`, `0.3`, `0.4`

  - 4 small black squares with icons at specific positions:

    - `rect(68, 42, 16, 16)` with "+" text (white, fontSize 11, fontWeight 300)

    - `rect(102, 36, 20, 20)` with lightning bolt emoji (&#9889;, white, fontSize 13)

    - `rect(82, 128, 14, 14)` with minus sign (&minus;, white, fontSize 11, fontWeight 300)

    - `rect(138, 128, 14, 14)` with inner white square `rect(142, 132, 6, 6)`

- Bottom (`mt-2`):

  - "5x" centered, `text-[clamp(2rem,3.5vw,3rem)] font-light tracking-tight text-black`

  - "Quicker than competing firms." centered, `mt-1 text-[13px] text-[#777]`

---

**Card 4 -- Text Card, dark background:**

- Delay `0.18`. Classes: `flex h-full flex-col bg-[#1a1a1a] p-7`

- Top right: a light PlusBtn (white variant), wrapped in `flex justify-end`

- Bottom (pushed down with `mt-auto space-y-5 pb-1`): Two paragraphs:

  - "We partner with ambitious brands to craft unified digital identities that merge strategy, design, and code into one seamless experience."

  - "We accelerate the journey from concept to launch, eliminating the friction of scattered teams and misaligned visions."

  - Both: `text-[13px] leading-[1.7] text-white/60`

---

**Card 5 -- Projects Card (200+), white background:**

- Delay `0.22`. Classes: `relative flex h-full flex-col bg-white p-7`

- Top: A `relative h-24 w-full` container with 7 scattered black squares (`bg-black`), each positioned absolutely with percentage left/top and pixel sizes:

  ```

  (55%, 2%, 30px), (80%, 0%, 24px), (70%, 28%, 16px),

  (92%, 18%, 14px), (58%, 22%, 10px), (88%, 36%, 10px),

  (46%, 14%, 8px)

  ```

- Stat: "200 +" in `mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-none tracking-tight text-black`

- Description: "Delivering projects globally, assisting our clients in reaching their objectives." in `mt-3 max-w-[210px] text-[13px] leading-[1.7] text-[#777]`

---

**Card 6 -- Photo Card (100+), dark overlay on image:**

- Delay `0.28`. Classes: `relative h-full overflow-hidden bg-black`

- Background image: `https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800`, absolutely positioned, `object-cover opacity-55`

- Gradient overlay: `bg-gradient-to-t from-black/60 via-transparent to-black/30`

- Content container: `relative flex h-full min-h-[380px] flex-col justify-between p-6`

  - **Top left**: A logo-like mark -- bold "N" (`text-[1.6rem] font-bold leading-none text-white`) with 3 small white squares beside it: one `10x10`, and two stacked `7x7` (the bottom one at `opacity 50%`), arranged with `gap-[3px]`

  - **Top right**: "4.9 / 5" in `text-base font-light leading-none text-white`, with 5 white star SVGs below (`width="11" height="11"`, star path: `M6 0l1.8 3.6L12 4.2 8.9 7.1l.7 4.2L6 9.3 2.4 11.3l.7-4.2L0 4.2l4.2-.6z`)

  - **Middle left**: Two small white rectangles: `18x18 bg-white/70` and `18x26 bg-white/40`, with `gap-2`

  - **Bottom**: flex between stat and a white square

    - "100 +" in `text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-none text-white`

    - "Joyful clients and growing." in `mt-2 text-[13px] text-white/60`

    - A plain `h-12 w-12 bg-white` square on the right

---

**Dependencies:** React 18, Framer Motion (v12+), Tailwind CSS 3. Uses `useRef`, `useInView`, and `motion` from framer-motion. No other libraries.