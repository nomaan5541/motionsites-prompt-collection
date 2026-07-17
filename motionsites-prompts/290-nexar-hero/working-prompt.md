# Nexar

**ID:** nexar-hero  
**Category:** Hero Section  
**Type:** hero  

---

PROMPT:

Build a project management dashboard called "Nexar" using React, TypeScript, Tailwind CSS, Vite, and Lucide React icons. The design should have a fullscreen looping background video, a white pill-shaped header, a 3-column responsive grid layout, and task cards with staggered fade-up animations. Use Google Fonts "Instrument Serif" for display/serif text.

BACKGROUND:

A fullscreen looping .mp4 video plays behind all content. The video is fixed position, covers the entire viewport via object-cover, and sits at z-index: -10.

Video URL:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_054410_6b17f7f9-d11e-44f1-90b0-75ee563d1971.mp4
Attributes: autoPlay, loop, muted, playsInline.

FONTS:

Load "Instrument Serif" (regular + italic) from Google Fonts in index.html:


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
Define a utility class .font-serif-display in index.css with font-family: 'Instrument Serif', serif;. Use this class for the brand name "nexar", the greeting "Hey, Alex!", and the "Speak now to Nexar!" heading.

ANIMATIONS:

Custom fadeUp keyframe animation defined in index.css:

From: opacity: 0; transform: translateY(24px)
To: opacity: 1; transform: translateY(0)
Timing: 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards
Class: .animate-fade-up (starts with opacity: 0)
Each element has a staggered animationDelay via inline style prop, starting at 0s for the header and incrementing by ~0.05-0.1s per element (0s, 0.1s, 0.15s, 0.2s, 0.25s, 0.3s, 0.35s, 0.4s, 0.45s, 0.5s, 0.55s, 0.6s).
LAYOUT:

Root container: min-h-screen relative p-4 sm:p-6 lg:p-8 overflow-x-hidden
Max width wrapper: max-w-[1800px] mx-auto
Main grid: flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7
Left column: lg:col-span-3
Center column: lg:col-span-6 with inner width constrained to lg:w-[85%] xl:w-[85%] 2xl:w-[60%] centered
Right column: lg:col-span-3
HEADER (white pill bar):

Full-width white rounded-full bar (bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm) containing:

Left: A 5x5/6x6 black rounded-md square with a 2x2 grid of tiny white rounded dots inside, followed by the word "nexar" in text-2xl sm:text-3xl font-serif-display
Center nav (hidden on mobile, hidden lg:flex): Links "Workspace" (active, black, font-medium), "Actions", "Performance", "AI Insights" (gray-500, hover gray-900)
Right: A toggle pill (bg-gray-100 rounded-full) with "Solo" (inactive, gray) and "Crew" (active, bg-black text-white rounded-full) buttons, plus a black circle notification bell icon (filled white)
SECTION HEADER ROW (below header):

A row with border-b border-black/10 pb-4 sm:pb-6 mb-4 sm:mb-6 containing:

Left (col-span-3): Orange-red gradient circle avatar (bg-gradient-to-br from-red-400 to-orange-500) with white User icon inside, plus "Hey, Alex!" in text-[28px] sm:text-[36px] lg:text-[42px] font-serif-display
Center (col-span-6): "Active Items" text in text-[20px] sm:text-[24px] lg:text-[26px] tracking-[-0.04em]
Right (col-span-3): "Crew:" label, 3 overlapping circular team member avatar images (-space-x-2), and "+9" counter
Team member avatar image URLs:


https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260403_075317_744395c6-7168-48c6-a1f6-5b9b7bd58f87.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260403_075333_2caea84e-742e-4846-9284-ed8532c44c99.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260403_075354_70a33cfd-3c9c-45ef-a7bb-d371cb8aa0af.png&w=1280&q=85
LEFT COLUMN:

Project Selector Pill: Light blue (bg-[#DBECFC]) rounded-full pill with a white circle containing a yellow X icon (two crossing lines, stroke #EAB308, strokeWidth 3.5), title "Zenith Launch", subtitle "Product & Strategy", and a ChevronDown icon.

Productivity Score: Giant number "85%" in text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[140px] tracking-[-0.04em] with "Current efficiency" subtitle below.

Sprint Metrics Card: Rounded card (rounded-[20px] sm:rounded-[28px]) with a background image:


https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260403_055416_630ff6c1-4b72-4cb6-a563-0c7e41124fe1.png&w=1280&q=85
(cover, top center). Contains "Sprint Metrics" header with an "Analytics" pill badge, three stat columns: "26h / Sessions", "11h / Standups", "6h / Audits". Has an absolutely positioned white floating circle button at bottom center (-bottom-4 left-1/2 -translate-x-1/2) containing a pencil/edit SVG icon.

CENTER COLUMN (3 TaskCards stacked vertically):

Create a reusable TaskCard component in src/components/TaskCard.tsx. It accepts props: icon (Lucide icon component), title, tagText, tagColor ('green'|'yellow'|'red'), details (array of {label, value}), bottomLeftContent (ReactNode), buttonText, buttonVariant ('dark'|'light'|'black'), buttonIcon (optional ReactNode).

TaskCard layout: White rounded card (bg-white rounded-[20px] sm:rounded-[28px] px-4 sm:px-6 py-4 sm:py-5 shadow-sm) with 3 rows separated by border-b border-black/10:

Row 1: Icon + title (left) and colored pill tag (right)
Row 2: 3-column detail grid (label in gray-500, value in gray-900 font-medium). Third detail column is narrower (flex-[0.5] max-w-[120px]).
Row 3: Custom bottom-left content + action button
Tag colors: green = bg-green-500 text-white, yellow = bg-yellow-400 text-gray-900, red = bg-red-500 text-white.

Button variants: dark = bg-[#ECECEC] text-gray-900, black = bg-black text-white, light = bg-gray-100 text-gray-900.

Card 1 - "Sprint Planning Call":

Icon: Phone, Tag: "Session" (green)
Details: Time: "Today: 10:00 AM", With: "Product & Growth", Alert: "15 min"
Bottom: 3 overlapping avatar images + "+7" + "Set to begin?" text
Button: "Enter session" (dark variant)
No rotation
Card 2 - "Layout Critique":

Icon: BarChart2, Tag: "Action" (yellow)
Details: Focus: "Zenith Platform", Details: "Verify the layout of landing screen", Due By: "Mar 22"
Bottom: "Assignees:" label + 2 overlapping avatar images
Button: "Let AI begin" (black variant) with Sparkles icon
Rotated 2 degrees clockwise (rotate-[2deg])
Card 3 - "Zenith Crew Check":

Icon: Phone, Tag: "Session" (green)
Details: Time: "Fri: 5:30 PM", With: "Sales Lead & Team", Alert: "10 min"
Bottom: 3 overlapping avatar images + "+5" + "Scheduled" text
Button: "Show details" (light variant)
No rotation
RIGHT COLUMN:

Fast Commands List: Title row with star emoji in white circle + "Fast commands" heading (text-[20px] sm:text-[24px] lg:text-[26px] xl:text-[30px] tracking-[-0.04em]) + "+ Add Item" button. Three list items separated by border-t border-black/10, each with description text and a filled Play icon (Lucide Play with fill-gray-700):

"Review session notes and extract key discussion insights"
"Generate PDF report with finished items from this week"
"Update timeline view based on revised action items in sprint"
Voice Input Card: Light blue (bg-[#DBECFC]) rounded card with "Audio Input" blue pill badge (bg-blue-500 text-white), "Speak now to Nexar!" heading in font-serif-display, and a waveform visualization made of 35 thin vertical bars (w-0.5 bg-blue-400 rounded-full) with varying heights: [8, 16, 12, 28, 20, 36, 42, 24, 40, 16, 44, 32, 48, 28, 20, 36, 14, 32, 22, 40, 18, 30, 12, 26, 16, 34, 20, 38, 24, 28, 16, 22, 12, 20, 8] each multiplied by 0.8 for pixel height. Has a floating white circle microphone button at bottom center (same positioning as Sprint Metrics card).

DEPENDENCIES:

react, react-dom (^18.3.1)
lucide-react (^0.344.0) -- icons used: ChevronDown, User, ChevronRight, Mic, Phone, Bell, Play, BarChart2, Sparkles
@supabase/Bolt Database-js (^2.57.4)
tailwindcss (^3.4.1), postcss, autoprefixer
Vite (^5.4.2), @vitejs/plugin-react
TypeScript
Vite config: Exclude lucide-react from optimizeDeps.

Tailwind config: Default with content scanning ./index.html and ./src/**/*.{js,ts,jsx,tsx}.