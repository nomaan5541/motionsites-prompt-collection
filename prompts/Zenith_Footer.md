Please create a React/Vite application utilizing Tailwind CSS, Lucide React, and Framer Motion. I want to build a landing page layout with a specific full-screen background video and a highly styled footer component.

### 1. Global Setup & Fonts
- In your global CSS file, import the "Geist" font from Google Fonts (weights 100..900).
- Set up a Tailwind custom theme variable for `--font-geist` using `"Geist", sans-serif`.
- Apply `@apply font-geist antialiased;` to the `body`.

### 2. Main App Layout & Background Video
Create a main layout that takes up the full screen (`min-h-[100dvh] h-full lg:h-[100dvh]`) styled with a black background (`bg-black`), flexbox column, relative positioning, and hidden overflow.

Inside this main layout, add a background `<video>`:
- **URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_111347_9cf2a2b0-2c10-475b-a132-147a046b4927.mp4`
- **Attributes**: `autoPlay`, `muted`, `loop`, `playsInline`
- **Classes**: `absolute inset-0 w-full h-full object-cover pointer-events-none`

Overlay a scrollable foreground container (`z-10`, `flex-1`, `px-4`, `overflow-y-auto`). Inside this, add a max-width container (`max-w-5xl mx-auto w-full flex-1 flex flex-col min-h-full`). The page content should go at the top, and the Footer component should be pushed to the bottom using `mt-auto pb-8`.

### 3. The Reusable `FitnessButton` Component
Create a `FitnessButton` component that uses `motion.button` from `motion/react`. 
- **Props**: `children`, `icon`, `variant` ('primary' or 'secondary'), `className`, `onClick`.
- **Animations**: `whileHover={{ scale: 1.02, translateY: -1 }}` and `whileTap={{ scale: 0.98 }}`.
- **Base Classes**: `px-[18px] py-[12px] rounded-lg flex items-center justify-center gap-[10px] text-base font-geist font-normal cursor-pointer transition-all duration-200`.
- **Primary Variant**: `bg-[#060606] text-white shadow-[inset_0px_4px_8px_rgba(255,255,255,0.25),0px_4px_12px_rgba(255,255,255,0.25)] hover:shadow-[inset_0px_4px_8px_rgba(255,255,255,0.35),0px_8px_24px_rgba(255,255,255,0.35)]`. If it's the primary variant, it should render a `Rocket` icon from `lucide-react` (`w-5 h-5 text-white`) next to the text.
- **Secondary Variant**: `bg-[#F5F5F5] text-[#060606] border border-transparent hover:bg-white hover:border-black/10 shadow-sm`.
- Allow the `className` prop to override these defaults.

### 4. The `Footer` Component
Create the `Footer` component containing a `motion.div` container with the following properties:
- **Animations**: Reval inside view over 0.5s from `{ opacity: 0, y: 20 }` to `{ opacity: 1, y: 0 }` once.
- **Container Styling**: `bg-[#FFFFF0]/95 backdrop-blur-md rounded-[32px] p-6 sm:py-8 md:px-12 md:py-8 shadow-xl border border-white/20 flex flex-col`.

Inside the container, create a responsive CSS grid (`grid-cols-2 lg:grid-cols-[auto_1fr_auto_auto] gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-6`).

Populate the grid with the following elements:
- **Top Left (Icon)**: A `Dumbbell` icon from `lucide-react` (`text-black w-8 h-8`, `strokeWidth={2.5}`).
- **Top Center (Heading)**: An `h2` with the text "Move, Heal, Bloom" (`text-2xl md:text-3xl font-medium tracking-tight text-black`).
- **Middle Left (Buttons)**: A flex wrap container (`gap-3`) holding two of our `FitnessButton`s: "Join Today" (primary) and "View Clubs" (secondary). Both need their padding, gap, and text size overridden with `!py-2 !px-5 !gap-2 !text-xs`. 
- **Right Menus**: Two columns of text links aligned to the bottom (`sm:self-end flex flex-col gap-3`).
  - **Column 1 ("Insights")**: Links for 'Vitality Lab', 'Active Armor', 'Social Circles', and 'Get In Touch'.
  - **Column 2 ("Connect")**: Links for 'Meta Space', 'Pro Network', 'Vlog Stream', and 'Visual Feed'.
  - **Menu Heading styling**: `font-medium text-black uppercase tracking-[0.05em] text-[11px]`.
  - **Menu Link styling**: `text-black/70 hover:text-black transition-colors text-sm font-medium whitespace-nowrap`.
- **Bottom (Copyright)**: Below the grid, add a copyright footer section (`mt-6 sm:mt-8 flex flex-wrap gap-x-4 gap-y-1 text-[#060606]/40 text-[10px] font-medium tracking-tight uppercase`). Inside, render two span elements that both say "© Zenith Media Group 2025".