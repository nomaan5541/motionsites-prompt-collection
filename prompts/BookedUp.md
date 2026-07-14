Create a modern Hero Section web application using React (TypeScript), Tailwind CSS v4, motion/react, and lucide-react for icons. Implement the exact layout, CSS variables, mock data, and components as described below.
1. Global CSS & Typography (index.css)
Configure Tailwind CSS and import two specific fonts:
Inter: https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap
SK Reykjavik Rounded Regular: https://db.onlinewebfonts.com/c/16e715573b2b3072037cf4ab26fc8bb8?family=SK+Reykjavik+Rounded+Regular
Define standard CSS configurations:
Make a @theme block defining --font-heading (SK Reykjavik) and --font-sans (Inter).
Add a body block in @layer base that applies: font-sans antialiased text-[#202020] bg-[#F7F7F7].
2. Mock Data & Types
Define the following TypeScript interfaces and constants at the top of your App.tsx:
An array of 4 Unsplash avatar URLs (AVATARS):
https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100
https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100
https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100
Types: CallItem (name, avatar, time, duration) and ClientCall (id, day, date, items: CallItem[]).
CLIENT_CALLS Array: Create an array of 5 call agenda items (e.g., MON 18 JUL, TUE 19 JUL, THU 25 JUL, MON 25 JUL, WED 20 JUL). Assign 1 or 2 consultation items per day using the avatar array and mock times (e.g., "9:30 AM - 10:30 AM", "1hr").
3. Custom Deep UI Components
Create the following custom React components exactly:
DeepShadowIcon: An inline div containing a background blur glowing layer (absolute opacity-60 bg-[#F25C40] blur-[18px] scale-90 translate-y-1.5) sitting underneath an inner bg-[#F25C40] box. Add exact shadows onto the top box: shadow-[0px_0px_5px_rgba(255,255,255,0.5)_inset,0px_8px_20px_rgba(242,92,64,0.35)]. Add p-2 rounded-2xl.
DeepShadowButton: A button wrapped in a group div containing an outer glowing shadow (absolute opacity-40 bg-[#212121] blur-[25px]) that animates scaling up slightly to scale-110 and translate-y-1 on hover. The button itself uses bg-[#202020] and inner shadows: shadow-[0px_0px_4px_rgba(255,255,255,0.25)_inset,0px_6px_19px_rgba(0,0,0,0.25)]. Text inside is white.
DeepShadowAvatar: Avatar image stacked on a blur shadow (bg-black blur-[12px] opacity-20). Provide a hasGlow prop; if true, the background glow is orange (bg-[#F25C40] opacity-60 blur-[18px]). Accept size props for sm, md, lg.
AvatarWithShadow: Small functional image component wrapped in a div with an absolute bottom backdrop of bg-black opacity-25 blur-[10px].
ClientCard: Accepts index and a single ClientCall. Wraps content in a motion.div that fades & scales up in on load. Rotates the card alternately rotate-3 or -rotate-3 depending on if the index is even/odd. Background applies bg-white and an outer shadow shadow-[0_4px_20px_rgba(0,0,0,0.03)]. Card header displays Day on left, Date on right. Iterates over call.items dividing the avatar, names, and limits with dotted bottom borders.
4. The Hero Layout (App.tsx > App)
Construct the main app structure over a bg-[#F7F7F7] global page:
Use a main grid container: max-w-[1440px] lg:grid-cols-[1.2fr_0.8fr] gap-12.
Left Side (Value Prop):
Pulse Badge: A small pill with rounded borders border-[#D1F2D1]. Inside is a green pulsing dot bg-[#52D352] animate-pulse shadow-[0_0_8px_rgba(82,211,82,0.6)] and uppercase text "BOOKING FOR SUMMER" in tracking wide #52D352.
Main Headline: h1 using the font-heading style. Text #202020, negative letter spacing (tracking-tight / tracking-[-0.02em]). Text says: "Expanding" [insert inline DeepShadowIcon here wrapping a white lucide TrendingUp icon rotated -rotate-6] "reach <br/> with every lead".
Subheadline: Paragraph using text-neutral-500. Text: "Automating lead systems and funnels, we design scalable growth engines for your next venture."
CTA Row: A layout using gap-4 sm:gap-6. Uses your DeepShadowButton with "Scale revenue now", sitting next to a standard white button (with border, grey text, and a Lucide Play icon) saying "Start Here".
Social Proof Section: Side-by-side layout separated by a .w-px dividing line on desktop.
Left half: "VERIFIED CLIENTS" over a row of 4 DeepShadowAvatar elements. Make the 2nd one uniquely use hasGlow={true}. Make sizes alternate between md and lg.
Right half: "TOP TIER QUALITY 5/5" over a row of 5 Lucide Star icons styled with text-[#FFB648] fill-[#FFB648].
Right Side (The Infinite Client Marquee):
Wrap the column in a container with relative overflow-hidden lg:h-full (height 600px on mobile).
Add top and bottom fade masks: absolute divs with bg-gradient-to-b and bg-gradient-to-t (from-[#F7F7F7] to-transparent) spanning h-20 sm:h-40 for scroll falloff.
Use a dual-column vertical scrolling tracks configuration (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1).
Framer Motion Tracks: Apply motion.div scrolling tracks wrapped in an infinite repeating frame moving its Y axis: animate={{ y: [0, -1200] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}.
Provide continuous looping visual depth by iterating through [...CLIENT_CALLS, ...CLIENT_CALLS, ...CLIENT_CALLS] printing out copies of the ClientCard components onto the tracks. Create a hidden second track for tablets using animate={{ y: [-600, -1800] }}.