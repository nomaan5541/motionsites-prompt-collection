Build a full-screen sign-up page as a single-page React + TypeScript + Tailwind CSS + Vite app. Use `lucide-react` icons only. No additional UI libraries.

**Background:**
- Full-viewport autoplaying, muted, looping, `playsInline` HTML5 `<video>` element covering the entire screen (`absolute inset-0 w-full h-full object-cover`).
- Video source URL (exact): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_191911_e7dc783e-a580-4974-8971-9796ecffd3bd.mp4`
- Page root: `relative min-h-screen w-screen overflow-x-hidden flex items-center justify-center bg-black py-6 sm:py-0 sm:h-screen sm:overflow-hidden`.

**Layout:**
- Centered two-column card, `max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl`, fixed height `sm:h-[660px]`, stacked column on mobile, row `sm:flex-row` on desktop, z-index 10.

**Left column (form, 50% width on desktop, full width on mobile):**
- Background: `rgba(10, 10, 10, 0.92)` (dark opaque).
- Padding: `px-6 sm:px-10 py-8 sm:py-10`. Flex column.
- Top: Brand lockup — custom SVG logo (36px) next to the word "NovaDesk" in brand color `#DA3F23`, `font-semibold tracking-tight text-lg`, gap-2.
- Logo SVG (viewBox 0 0 256 256, fill `#DA3F23`), path:
  `M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z`
- Form group: `flex flex-col gap-5 mt-8 sm:mt-auto` (pushed to bottom on desktop).
- Heading: `h1` text "Sign up", `text-white text-2xl font-semibold tracking-tight`.
- Subtext: "Set up your profile and jump in right now.", `text-zinc-400 text-sm mt-1.5 leading-relaxed`.
- Email input: placeholder "Input Email", `w-full bg-zinc-800/70 text-white placeholder-zinc-500 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-colors`.
- Password input: placeholder "Choose Password", same styling plus `pr-11`; trailing eye/eye-off toggle button (`lucide-react` `Eye`/`EyeOff`, size 16, `text-zinc-500 hover:text-zinc-300 transition-colors`, absolute right-3, vertically centered).
- Custom checkbox + terms: hidden native input (`sr-only`), 16x16 rounded border square, unchecked `border-zinc-600 bg-transparent`, checked `bg-white border-white` with black SVG check mark. Label: "I Agree On The [Rules] & [Privacy Notice]" with underlined links `text-zinc-200 hover:text-white`. Text `text-zinc-400 text-xs leading-relaxed`.
- Submit button: "Launch Account", `w-full bg-white text-black text-sm font-semibold rounded-lg py-2.5 hover:bg-zinc-100 active:bg-zinc-200 transition-colors`.
- Divider: two `flex-1 h-px bg-zinc-700/60` lines with centered "or join us via" `text-zinc-500 text-xs`.
- Three social buttons in a row (equal flex): Google (`Chrome` icon), Apple (`Apple` icon), Twitter (`Twitter` icon), each `flex-1 bg-zinc-800/60 rounded-lg py-2 text-zinc-300 text-sm hover:bg-zinc-700/60 hover:text-white transition-colors`, icon size 15.
- Footer line: `text-zinc-500 text-xs text-center` — "Already Hold An Account? [Enter]" with `text-zinc-200 hover:text-white font-medium`.

**Right column (desktop only, 50% width):**
- `hidden sm:flex items-center justify-center`.
- Background: `rgba(255, 255, 255, 0.05)` with 1px `rgba(255,255,255,0.08)` border on all sides (glass panel over the video).
- Contains the logo SVG at size 34, offset upward with inline style `marginTop: -70px`.

**State (React `useState`):**
- `email`, `password` (strings), `agreed` (bool), `showPassword` (bool).

**Fonts:** default Tailwind system font stack (no custom font imports). Weights used: 500 (`font-medium`), 600 (`font-semibold`). Tracking `tracking-tight` on headings and brand.

**Animations:** all transitions via Tailwind `transition-colors` on hover/active states for inputs, buttons, links, and checkbox. No keyframe animations.

**Colors:**
- Brand: `#DA3F23`
- Surfaces: `bg-black`, `rgba(10,10,10,0.92)`, `bg-zinc-800/70`, `bg-zinc-800/60`, `bg-zinc-700/60`
- Text: white, `zinc-200`, `zinc-300`, `zinc-400`, `zinc-500`
- Borders: `zinc-600`, `rgba(255,255,255,0.08)`