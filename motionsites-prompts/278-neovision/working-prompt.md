# NeoVision

> **Category:** Landing Page  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/NeoVision_0.mp4)

![Video Preview 1](../assets/videos/NeoVision_1.mp4)
## 📋 Prompt

```text
Build a modern, futuristic landing page using React + Vite + TypeScript + Tailwind CSS. Use lucide-react for icons. The page has 3 sections: a Hero, an About section, and an Insights section. The overall page background is black (bg-black). No custom fonts -- use the Tailwind default (system sans-serif).

SECTION 1: HERO (full viewport height, light background)

The hero wrapper is a relative container. On mobile it has min-height: 100vh. On desktop (md: breakpoint) it has height: 100vh and min-height: auto. It has overflow: hidden.

Background layers (stacked with z-index):

z-index 0: A solid background fill #FBFDFD covering the entire wrapper (absolute inset-0).
z-index 1: A background video positioned absolute right-0 top-0 bottom-0. On mobile it is full width with opacity-30. On desktop it is w-[55%] with full opacity. The video element has object-cover object-top. The video URL is: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131232_feeda0b7-d00d-4bfa-a9d5-5d38648a4214.mp4 (autoPlay, loop, muted, playsInline). The video container and video both have a CSS class video-plus-darker with mix-blend-mode: normal !important.
z-index 2: The content layer. This is a relative div with min-h-screen md:h-screen flex flex-col. It contains the Navbar and HeroSection.

Navbar (inside content layer):

relative z-10, flex row, justify-between, padding px-5 py-4 md:px-12 md:py-6
Left side: Logo image (/image.png, height h-7 md:h-8), followed by hidden-on-mobile nav links: Home, About, Services, Contact. Links are text-sm text-neutral-500 hover:text-neutral-900. Gap between logo and links: gap-12.
Right side: A search input (hidden on mobile, shown on desktop). Rounded-full, w-72, placeholder "I am looking for...", with a Search icon from lucide-react positioned absolute right inside. Border border-neutral-300, text text-neutral-600.
Mobile: A hamburger button (Menu icon from lucide-react) in a 40px circle with border-neutral-300. When toggled, a dropdown shows the nav links vertically and a full-width search input.

HeroSection (inside content layer, flex-1):

relative z-10 flex-1 flex flex-col justify-between with padding px-5 pt-8 pb-20 md:px-12 md:pt-16 md:pb-36
Top: Label "Futuristic" -- text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase
Main heading area: Flex row with a small "05" number on the left (text-sm text-neutral-400 mt-2 md:mt-4), then the heading: text-[2.75rem] md:text-[5.5rem] leading-[0.95] font-light tracking-tight text-neutral-900 reading "NEW DIGITAL" (line break) "UNIVERSE". Below the heading: a "Get Started" button (bg-neutral-900 text-white text-sm font-medium rounded, px-6 py-3 md:px-8 md:py-3.5) and a "Contact Us" text link.
Middle stat: "47.2%" with "Reality" label underneath. The stat group uses a custom CSS class hero-stat-group that on desktop has margin-right: 20% and justify-center. On mobile, margin-right: 0 and justify-start.
Bottom bar: Flex col on mobile, flex row on desktop with justify-between. Left side: "Trusted by Clients" label with 4 overlapping avatar circles (Pexels photos: 415829, 1222271, 1239291, 2379004 at w=100) using -space-x-2, each w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-neutral-100 object-cover, followed by "20+" text. Right side: A link icon (lucide Link) in a w-10 h-10 md:w-12 md:h-12 circle with border-neutral-300, next to a description paragraph "In this futuristic realm, users can explore hyper-realistic virtual environments, interact with AI-driven avatars." (text-xs md:text-sm text-neutral-500 max-w-[200px] md:max-w-sm). This group uses custom class hero-description-group which on desktop has margin-right: 50%.

Diagonal Section Divider (between Hero and About):

The SectionDivider is positioned absolute bottom-0 left-0 w-full with z-index: 3, inside the hero wrapper.
Contains an SVG with viewBox="0 0 1440 120", preserveAspectRatio="none", height h-[60px] md:h-[120px].
The SVG has a single polygon: points="0,0 0,120 1440,120 1440,80 920,80 680,0" filled with #0F0F0F. This creates a diagonal cut from the left side going down to the black About section.

SECTION 2: ABOUT (dark background #0F0F0F)

Full-width section, backgroundColor: '#0F0F0F'
Two-column layout on desktop (lg:flex-row), stacked on mobile. Min-height 600px (lg: 700px).
Left column: A video that fills the space (object-cover mix-blend-lighten). Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_132809_d6ea910f-d700-44f7-afea-27d517487177.mp4 (autoPlay, loop, muted, playsInline). On mobile the video area is h-[400px].
Right column: Padding px-8 py-16 md:px-16 lg:px-20 xl:px-28, vertically centered content with max-width max-w-lg:
Label: "About Us" (text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase, mb-8 md:mb-10)
Heading: "THE DIGITAL FRONTIER" (text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.05], mb-10 md:mb-12)
Three pill tags: "Digital", "Reality", "Next" -- px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:border-neutral-500
Paragraph: "Step into The Digital Frontier, where the boundaries between reality and virtual innovation disappear. This is the next era of immersive technology." (text-sm md:text-base text-neutral-400 leading-relaxed max-w-md)
Actions: "Learn More" button (bg-neutral-800 text-white text-sm font-medium rounded px-7 py-3.5 hover:bg-neutral-700) and a "Watch a Video" link with a Play icon (lucide Play) inside a w-10 h-10 bordered circle.

SECTION 3: INSIGHTS (dark background #0F0F0F, tabbed content)

Same backgroundColor: '#0F0F0F'. Padding px-8 md:px-16 lg:px-20 xl:px-28 pt-24 pb-32.
Large italic heading: "LIMITLESS POSSIBILITIES WITH NEOVISION" (text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-light italic tracking-tight text-white leading-[1.05] max-w-5xl, mb-20 md:mb-28).
Below: a flex layout (col on mobile, row on desktop).
Left: Tab buttons (vertical list) for 3 tabs: "Innovation", "Technology", "Experience". Active tab is text-white font-medium, inactive is text-neutral-500 hover:text-neutral-300. Width lg:w-[160px] xl:w-[200px].
Right: Content area with an image and text side by side on desktop.
Image: lg:w-[420px] xl:w-[480px] aspect-[4/3] rounded-2xl overflow-hidden. Images are local files /Mask_group.jpg, /Mask_group-1.jpg, /Mask_group-2.jpg for the 3 tabs respectively.
Text side: Title (text-2xl md:text-3xl font-light text-white leading-snug max-w-sm), description (text-sm md:text-base text-neutral-400 leading-relaxed max-w-sm), "Learn More" underlined link (text-sm text-white font-medium underline underline-offset-4). At the bottom: date and author separated by a border-t border-neutral-800.
Tab data:
Innovation: "How VR is Transforming Our Digital World" / "Virtual Reality (VR) is no longer a concept of the future..." / 08 February 2025 / Henry Leonardo
Technology: "The Rise of Spatial Computing in Everyday Life" / "Spatial computing is bridging the gap..." / 15 March 2025 / Sarah Mitchell
Experience: "Designing Immersive Worlds That Feel Real" / "From haptic feedback to photorealistic rendering..." / 22 April 2025 / James Park

CUSTOM CSS (index.css):

.video-plus-darker {
  mix-blend-mode: normal !important;
}

.app-hero-wrapper {
  min-height: 100vh;
  overflow: hidden;
}

@media (min-width: 768px) {
  .app-hero-wrapper {
    min-height: auto;
    height: 100vh;
  }
}

.hero-description-group {
  margin-right: 0;
}

.hero-stat-group {
  margin-right: 0;
}

@media (min-width: 768px) {
  .hero-description-group {
    margin-right: 50%;
  }

  .hero-stat-group {
    margin-right: 20%;
  }
}

KEY DETAILS:

Tech stack: React 18, Vite, TypeScript, Tailwind CSS 3, lucide-react for all icons
No custom fonts -- default Tailwind sans-serif stack
Color palette: White hero (#FBFDFD), dark sections (#0F0F0F), neutral grays from Tailwind for text
The diagonal divider SVG polygon creates an angled transition from the light hero to the dark about section. It is positioned absolutely at the bottom of the hero wrapper.
Both videos are autoPlay, loop, muted, playsInline
The hero section has pb-20 md:pb-36 bottom padding to prevent the diagonal divider from overlapping the "Trusted by Clients" content
The SectionDivider component is rendered inside the hero wrapper div (not between wrapper and AboutSection)
Logo image at /image.png in the public folder
Insight images at /Mask_group.jpg, /Mask_group-1.jpg, /Mask_group-2.jpg in the public folder
```

---

*Generated by MotionSites Export Tool*
