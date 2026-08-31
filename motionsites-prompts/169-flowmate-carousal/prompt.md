**PROMPT:**

Build a standalone React + TypeScript + Vite page with Tailwind CSS, Framer Motion, and Lucide React. The page contains ONLY a single Cards Carousel section. No sidebar, no navbar, no footer, no other sections.

Use the system font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` with `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`.

The section has a white background (`bg-white`), padding `py-20 px-6`, a top border of `1px solid #e8e8e8`, and a max-width container of `max-w-7xl` centered with `mx-auto`.

At the top of the section is a header row using flexbox with `justify-between` and `mb-12`. On the left is the text "FlowMate" in `text-xl` on mobile, `text-2xl` on `md:` breakpoint, `font-medium`, `text-black`. On the right are two circular navigation buttons side by side with `gap-3`. Each button is `w-10 h-10`, `rounded-full`, has a `border border-black/20` that changes to `border-black/40` on hover with `transition-colors`, and centers a Lucide `ChevronLeft` or `ChevronRight` icon at `w-5 h-5 text-black`.

Below the header is a card grid: `grid grid-cols-1 md:grid-cols-3 gap-6 relative`. It displays 3 cards at a time from a rotating pool of 5 cards. The carousel auto-advances every 4 seconds, cycling forward through the cards. The visible cards are calculated by taking 3 consecutive items starting from the current index, wrapping around using modulo.

The 5 cards have this exact data:

Card 1 -- label: "For Everyone", text: "Unleash your creative vision", image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081328_19f48c5b-ea4d-4f23-8f80-7374f31015d4.png&w=1280&q=85`

Card 2 -- label: "For Teams", text: "Smart helper supporting each teammate daily", image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081342_ad378347-1ebd-4b17-a716-ee895bf739c0.png&w=1280&q=85`

Card 3 -- label: "For Enterprises", text: "Elevate your whole organization using business AI", image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081415_a6e8a76c-224e-417b-bf99-6b86d6494644.png&w=1280&q=85`

Card 4 -- label: "Platform", text: "Enhanced with FlowMate", image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081513_cf1cd2c1-2122-4de6-90ed-acae8bfbdb00.png&w=1280&q=85`

Card 5 -- label: "Security", text: "Creating trusted and helpful AI", image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_081541_9d2d28bf-d6a3-4b31-b0bb-cfc5202d4fcd.png&w=1280&q=85`

Each card is `h-[500px]`, `rounded-2xl`, `overflow-hidden`, with `cursor-pointer` and a CSS group for hover. It has three layers stacked with absolute positioning:

Layer 1 (bottom): The background image set via inline `backgroundImage` style, with classes `absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105` so the image zooms slightly on hover.

Layer 2 (middle): A gradient overlay div with `absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`.

Layer 3 (top): A content div with `relative h-full flex flex-col justify-between p-6`. At the top of this flex column is the label as a `span` with `inline-block py-1 text-white text-sm font-medium`. At the bottom is the description text as a `p` with `text-white text-xl font-normal leading-snug`.

Card slide animations use Framer Motion's AnimatePresence with `mode="popLayout"` and `initial={false}`. Track a `direction` state variable (1 for forward, -1 for backward). Each card's motion.div key must be `${card.id}-${currentIndex}-${idx}` to force remount on every change. Animation values:

- initial: `{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }`
- animate: `{ opacity: 1, x: 0, scale: 1 }`
- exit: `{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }`
- transition: `{ duration: 0.7, ease: [0.32, 0.72, 0, 1], opacity: { duration: 0.5 } }`

The entire section content (header row and cards grid) is wrapped in a scroll-triggered reveal animation. When the section scrolls into view (detected once), each direct child staggers in with 0.1s delay between them. Each child animates from `{ opacity: 0, y: 18 }` to `{ opacity: 1, y: 0 }` using a spring transition. Use Framer Motion's `useInView` with `{ once: true }` for detection.

The left arrow button decreases the index by 1 (wrapping to end), setting direction to -1. The right arrow button increases the index by 1 (wrapping to start), setting direction to 1. The auto-advance timer always sets direction to 1 before incrementing.

Responsive: on mobile the grid is single column (`grid-cols-1`), on `md:` breakpoint and up it becomes 3 columns (`md:grid-cols-3`). Title scales from `text-xl` to `md:text-2xl`. Cards stay `h-[500px]` at all sizes.

---