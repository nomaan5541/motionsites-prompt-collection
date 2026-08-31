{
  "summary": "The 'Cinematic Style' is an immersive, dark-mode design system using 3D spatial depth and high-contrast typography to create a theatrical user experience. It blends brutalist layout structures (heavy borders, massive text) with fluid, high-tech motion.",
  "style": {
    "description": "The style utilizes a base of #050505 for depth. Typography is centered around 'Aspekta' (weights 300, 500, 700, 900), prioritizing font-weight: 900 for hero headings and font-weight: 700 with wide tracking (0.2em) for secondary labels. Color accents are minimal but punchy: a gradient from cyan (#06B6D4) to pink (#EC4899) for primary buttons, and a purple glow (#7C3AED) for functional sections. Interactive elements use backdrop-filter: blur(8px) and border: 1px solid rgba(255, 255, 255, 0.1).",
    "prompt": "Theme: Cinematic Dark Mode.\n- Colors: Background: #050505; Card Surface: #111111; Text Primary: #FFFFFF; Text Secondary: #999999; Accent Gradient: linear-gradient(to right, #06B6D4, #EC4899).\n- Typography: Primary font 'Aspekta'. Hero Headings: size 12vw, weight 900, tracking-tighter. Section Headers: size 10vw, weight 900. Body: size 1.125rem, weight 300.\n- Effects: Perspective: 2000px; Backdrop Blur: 8px; Glassmorphism borders: 1px solid rgba(255,255,255,0.1).\n- Interactions: Button scale 1.02 on hover; Link transition 0.2s duration; Image grayscale 100% to 0% on hover."
  },
  "layout_and_structure": {
    "description": "The layout follows a modular vertical stack with a fixed, blend-mode-enabled navigation. It transitions from a 3D immersive hero to a bento-style project grid, then into a high-contrast pricing section with deep glow effects, concluding with a massive-scale editorial footer.",
    "prompts": [
      {
        "part": "Sticky Navigation",
        "prompt": "Fixed header at top-0. padding: 1.5rem 2rem. Elements: Logo (left), Nav Links (center, hidden on mobile), CTA Button (right). Essential: Apply 'mix-blend-difference' to the entire nav container. Use a red-500 pulsing dot next to the logo for 'live' status feel."
      },
      {
        "part": "3D Rolodex Hero",
        "prompt": "Full viewport height (100vh). Background: Massive background text (#FFFFFF, opacity 0.3 on scroll) centered. Foreground: A 3D Cube wrapper using 'transform-style: preserve-3d'. Dimensions: 50vh x 50vh. Four faces (Front, Bottom, Back, Top) each rotated 90 degrees on X-axis and translated 30vh (Z-axis). Each face contains a high-quality object-fit image and centered uppercase title (tracking 0.2em). Smooth infinite rotation animation on X-axis."
      },
      {
        "part": "Case Studies Grid",
        "prompt": "Container max-width 90rem. Header: Large 10vw tracking-tighter text. Layout: Featured project spans full width (aspect-video) with macOS-style traffic light window controls (Red, Yellow, Green dots). Sub-projects follow in a 2-column grid (aspect-4/3). Styling: Images start at grayscale(1) and transition to color on hover. Borders: 1px solid rgba(255,255,255,0.1)."
      },
      {
        "part": "Pricing Section",
        "prompt": "Background: #0B0216 with a central purple glow (#7C3AED blur 100px). Feature: Three-tier card system. Growth card (center) should be scaled 1.05 with a white background and dark text (#111111). Side cards use glassmorphism (#FFFFFF/5 opacity, backdrop-blur). Footer: A calculator component with a dark purple container (#1A0B2E) and a white custom range slider."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "3D Transform Cube",
      "description": "A rotating 4-sided prism used for feature displays.",
      "prompt": "Create a container with perspective: 2000px. Inner 'cube-wrapper' must have transform-style: preserve-3d. Define four 'cube-face' elements. Front: rotateX(0deg) translateZ(30vh). Bottom: rotateX(-90deg) translateZ(30vh). Back: rotateX(-180deg) translateZ(30vh). Top: rotateX(90deg) translateZ(30vh). Apply a constant GSAP or CSS animation: to { transform: rotateX(360deg); }."
    },
    {
      "component": "Glass-morphism Price Calculator",
      "description": "A custom range input for interactive price estimation.",
      "prompt": "Container: #1A0B2E background, 32px border-radius. Slider: appearance-none, height 8px, background #374151. Thumb: 24px diameter, solid white, shadow 0 0 0 4px rgba(124, 58, 237, 0.5). Display: Large text ($ price) that updates dynamically via JavaScript based on slider value (e.g., value * 125)."
    }
  ],
  "special_notes": "MUST maintain the perspective: 2000px on the hero container for 3D depth. DO NOT use standard shadows; use border-white/10 and backdrop-blur for depth. MUST use 'mix-blend-difference' on the header to ensure visibility over shifting background colors. Typography must be uppercase for all headings to maintain the cinematic editorial feel."
}