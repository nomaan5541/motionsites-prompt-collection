System & Tech Stack Requirements:
Build a responsive landing page hero section and navigation bar using React, Tailwind CSS, Framer Motion (import { motion } from "motion/react"), and lucide-react for icons.
1. Global Layout & Styling Setup:
Fonts: Import Google Fonts: Inter (weights: 100-500) for the UI sans-serif, and Caveat (weights: 400-700) for handwriting elements. Apply Inter to the body. Custom Tailwind theme config: --font-sans: "Inter", ... and --font-handwriting: "Caveat", cursive.
Global Layout Settings: The main application background is a very light gray #FDFDFD. Body text colors are primarily black #141414 or gray text-gray-500/400.
Brand Icon SVG: Create an SVG logo consisting of three staggered building blocks stepping up from bottom-left to top-right. Use this exact code:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" className="w-8 h-8"><path d="M 64 256 L 0 256 L 0 192 L 64 192 Z M 160 256 L 96 256 L 96 160 L 0 160 L 0 96 L 160 96 Z M 256 256 L 192 256 L 192 64 L 0 64 L 0 0 L 256 0 Z" fill="#2563EB"></path></svg>
2. Component 1: Navbar (Navbar.tsx)
Layout: Fixed or relative top bar width 100%, bg-[#FDFDFD], flex justified between, padding x-6 y-6 (md:px-12), z-index 50.
Left Hand Side: The Brand SVG (above) paired with text "Prioritize" (text-xl, tracking-tight, #141414).
Center Links (Desktop only): "Features", "Solutions", "Resources", "Pricing". Text: text-sm, text-gray-500, hover:text-black.
Right Hand Side (Desktop only): Two buttons. "Sign in" (plain text, text-gray-500 hover text-black) and "Try for free" (bg-white border rounded-xl, text-sm text-[#141414] hover:bg-gray-50).
Mobile: A hamburger menu (Menu / X from lucide-react) toggling a dropdown overlay (bg-white absolute top-full left-0 full-width) that lists the nav items, a divider hr, and the two auth buttons stacked. The mobile "Try for free" button uses bg-[#2563EB] text-white with shadow-blue-500/20.
3. Component 2: Hero (Hero.tsx)
Hero Container: Wrap the entire hero in a bg-[#FDFDFD] section. Inside, place a massive "card": w-full min-h-[85vh] py-32 bg-white rounded-2xl md:rounded-[2.5rem] border border-black/10 overflow-hidden relative flex flex-col items-center justify-center text-center.
Background Noise: Inside the card, add an absolute pointer-events-none div filling the space. Use inline style for radial gradient noise: background: "#ffffff", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0)", backgroundSize: "20px 20px".
Central Content Layer (z-10):
Icon: The Brand SVG inside a rounded-2xl white box with dropshadow (drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]). Animate Fade/slide up (y: 20 -> 0).
H1: Draft, build, and ship <br/> <span className="text-gray-500">every single idea</span>. Text sizes: text-4xl md:text-6xl lg:text-7xl tracking-tight text-[#141414]. Animate Fade/slide up (duration: 0.8, delay: 0.2).
Subtitle: "Organize your workflow and realize your creative vision." text-gray-400 text-xl. Cascade animate up (delay: 0.4).
Button: "Start free trial". bg-[#2563EB] text-white rounded-xl shadow-blue-500/20. Animate pop-in (scale 0.95 -> 1, delay 0.6) with hover scale 1.05.
4. Floating Decorative UI Blocks (Positioned absolutely around the center)
Use Framer Motion to animate the entrance. Scale them down responsive-ly so they don't break mobile view (scale-[0.4] sm:scale-50 md:scale-75 lg:scale-90).
Group 1: Top-Left Overlay (absolute top-16 -left-12)
Element 1: A yellow sticky note. bg-[#FFF188] p-7 w-56 shadow. Include a red #D32F2F pin dot at top center. Text: "Capture fleeting thoughts, organize project details, and execute with precision." Font: font-handwriting text-[21px] text-[#424242]. Animation: Fade + rotate 2deg -> 3deg (delay 0.4).
Element 2: Transparent Folder & Check. A Folder lucide icon (w-72 fill-white/60 drop-shadow). Overlaid on it, a white card containing a blue box bg-[#2563EB] with a white Check lucide icon inside, tilted -2deg. Animation: Fade + rotate 6deg -> 12deg (delay 0.6).
Group 2: Bottom-Left 'Active Sprints' Folder (absolute -bottom-20 -left-8)
Folder icon (w-[450px] fill-[#F2F3F5] text-gray-200 drop-shadow).
Content inside: Title "Active Sprints".
Two floating task cards (bg-white/95, rounded-xl p-3). Each card contains:
Left: A colored numeric badge (Task 1: Orange #FF5722 "8" / Task 2: Green #00C853 "3") + Project Name ("Design Hub", "Prod Refresh").
Right: Overlapping avatars. Avatars URLs use referrerPolicy="no-referrer":
T1 Avatars: https://api.dicebear.com/7.x/avataaars/svg?seed=Felix, ...seed=Aneka
T2 Avatars: https://api.dicebear.com/7.x/avataaars/svg?seed=Sam, ...seed=Maya
Bottom: A progress track consisting of Date badge + Progress bar line (light blue #00BFFF, T2 has red overage #FF5252) + percentage indicator.
Animation: Fade + slide up y: 50 -> 0, turn rotate: -5 -> -4 (delay 0.8).
Group 3: Bottom-Right 'Seamless Sync' Folder (absolute -bottom-24 -right-8)
Folder icon (w-[450px] fill-[#F2F3F5] text-gray-200 drop-shadow).
Content inside: Title "Seamless Sync".
Below it: 3 x white integration squared boxes floating next to each other. Icons inside: Mail (lucide, color #EA4335), Slack (lucide, color #4A154B), Calendar (lucide, color #4285F4). Add hover transition: hover:scale-105.
Animation: Fade + slide up y: 50 -> 0, turn rotate: 5 -> 4 (delay 1.0).
Group 4: Top-Right 'Deadlines' Folder (absolute -top-10 -right-32)
Folder icon (w-[420px] fill-[#F2F3F5] text-gray-200 drop-shadow).
Content inside: Title "Deadlines".
"Project Launch" Box (bg-white/90 p-5 rounded-2xl). Includes an absolute "Meetings" pill at the top right bounding-box. A subtitle "Review with design leads", and a time badge at bottom: #E1F5FE light blue background with a Clock icon and text "13:00 - 13:45" colored #03A9F4.
Floating independently atop this group: A tilted -8deg white box block holding a Timer lucide icon with a custom red line pointer overlapping it.
Timer box animation: Slide from left x: -20 scale from 0.8 (delay 1.4)
Overlay finishing touch: Add an empty transparent Folder icon on top of everything here tilted rotate-[15deg] (fill-white/60).
Overall folder animation: Rotate 4 -> 6, Slide x: 50 (delay 1.2).