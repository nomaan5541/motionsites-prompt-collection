{
  "summary": "Acme is a high-energy, unconventional design system that blends neobrutalist hard-shadow aesthetics with modern glassmorphism. It utilizes a striking contrast between deep purple and vibrant neon accents, anchored by dramatic geometric display typography. The layout is structured around interactive 'Identity Calibration' modules and 'Card Stacking' mechanics, perfect for apps that prioritize personality and creative engagement.",
  "style": {
    "description": "The style is characterized by its 'Hard-Shadow' neobrutalism and maximalist color palette. Typography pairings use Clash Display for bold, experimental headlines and Satoshi for clean, readable body text. Visual depth is achieved through animated background blobs, a constant 7% opacity noise grain, and 4px-8px solid-color offset shadows rather than blurs.",
    "prompt": "### Visual Language\n- **Color Palette**: Primary Purple (#2D1B4E), Accent Orange (#FF7D2E), Accent Cyan (#00D4FF), Accent Gold (#FFD166), Background Offwhite (#F9F7F4).\n- **Typography**: Display headlines in 'Clash Display' (Bold/Black weight, tracking-tighter). Body text in 'Satoshi' (Regular/Medium/Bold). Mono labels for technical metadata.\n- **Shadows**: Use 'Hard Shadows' instead of blurs. Default: 4px 4px 0px 0px #2D1B4E. Large: 8px 8px 0px 0px #2D1B4E.\n- **Effects**: Apply a fixed noise texture overlay (SVG fractalNoise at 0.07 opacity). Use glassmorphism (rgba(255,255,255,0.7) + 12px blur) for side panels.\n- **Animations**: Entrance animations using cubic-bezier(0.16, 1, 0.3, 1). Floating elements use a 6s ease-in-out loop. Background blobs use 10s 'metaball' translation/scaling."
  },
  "layout_and_structure": {
    "description": "A dual-pane layout featuring a centered, wide content area for onboarding/input and a fixed 'Live Echo' preview sidebar for real-time visualization.",
    "prompts": [
      {
        "part": "Navigation Header",
        "prompt": "Minimalist top bar with a 40x40px square logo icon (#2D1B4E) with a hard shadow. On the right, include status badges using pill-shaped white containers with thin 1px borders (#2D1B4E/10) and tracking-widest uppercase text."
      },
      {
        "part": "Hero Entrance Section",
        "prompt": "Giant display typography (text-8xl to 9xl) with a line-height of 0.9. One keyword should feature a horizontal gradient (Orange to Gold to Cyan). Include a primary CTA button with a hard shadow that disappears on hover/active states as the button translates 1px."
      },
      {
        "part": "Identity Selection Grid",
        "prompt": "A grid of interactive cards. Each card features a 2px border (#2D1B4E/10) and 24px rounded corners. Upon selection (checked state), the card flips to a solid #2D1B4E background with white text and applies a hard shadow. Icons are placed in high-contrast circular backgrounds."
      },
      {
        "part": "Interactive Card Stack",
        "prompt": "A cluster of 'Goal' cards (aspect ratio 3:4) positioned absolutely with varying rotation values (-4deg to 5deg). Cards use vibrant background fills (Cyan, Gold, Purple). On hover, cards must rotate to 0deg, scale by 1.05, and elevate their z-index."
      },
      {
        "part": "DNA Toggle Grid",
        "prompt": "Two-column grid of workspace settings. Each row features a bold display label and a segmented control toggle. Active toggle states use high-contrast fills (Orange or Purple) with white text, while inactive states are light gray."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Orbital Intelligence Dial",
      "description": "A complex circular interaction module representing AI involvement levels.",
      "prompt": "Create a central 128px white circle 'knob' with a 2px purple border and hard shadow. Surround it with two concentric dashed border rings rotating in opposite directions. Place 4 satellite buttons (pill-shaped) at 0, 90, 180, and 270 degrees. Buttons should highlight with brand colors (Orange, Cyan, Gold) and scale on hover."
    },
    {
      "component": "Live Echo Panel",
      "description": "A sticky glassmorphism sidebar that acts as a terminal and preview area.",
      "prompt": "A 400px wide sidebar with backdrop-filter: blur(12px). Top section contains a 20px dot grid background with floating 3D shapes. Bottom section is a terminal-style console with #2D1B4E background, white monospace text, and 'System Status' logs featuring color-coded keys (Cyan for status, Orange for identity)."
    }
  ]
}