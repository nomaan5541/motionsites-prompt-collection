{
  "summary": "A minimalist, editorial-inspired landing page designed to convey 'quiet confidence' and exclusivity. It uses a dark matte palette with warm earth-toned accents, oversized uppercase typography, and a distinct lack of traditional SaaS elements like icons or soft shadows. The focus is on typographic impact and a structured grid alignment.",
  "style": {
    "description": "The style is defined by a 'Cinematic Editorial' aesthetic. It uses 'Clash Grotesk' for bold, oversized headlines and 'General Sans' for legible, high-end body copy. Colors are earthy and dark: matte charcoal (#181818), warm beige (#EBDCC4), and coral-rust accents (#DC9F85). A subtle 3% opacity fractal noise overlay provides texture. No pill shapes or gradients; strictly 4px rounded corners and 1px solid borders.",
    "prompt": "### Visual Language & Aesthetic\n- **Base Theme**: Dark matte editorial. Use `#181818` for the main background.\n- **Typography**: \n  - **Display**: Use 'Clash Grotesk' or a similar geometric sans. Headers must be Bold, Uppercase, with `tracking-tight` and `leading-[0.85]`. Desktop size: `11.5vw`. Mobile size: `16vw`.\n  - **Body**: Use 'General Sans' or a high-end neo-grotesk. Weight: 300-400 for copy, 500-700 for labels. Text color: `#EBDCC4`.\n- **Color Palette**:\n  - Primary Background: `#181818` (Matte Black)\n  - Primary Text: `#EBDCC4` (Warm Beige)\n  - Secondary Text/Labels: `#B6A596` (Muted Sage)\n  - Primary Accent/Button: `#DC9F85` (Coral Rust)\n  - Borders: `#66473B` (Deep Earth)\n  - Dark Details/Dividers: `#35211A` (Burnt Umber)\n- **Effects**:\n  - **Noise**: Apply a global overlay using a fractal noise SVG at 0.03 opacity.\n  - **Borders**: 1px solid borders using `#66473B` or `#35211A`.\n  - **Corners**: Subtle rounding only (max 4px radius). No pill shapes.\n  - **Depth**: Use a layered text effect with a 1px stroke outline (`#66473B`) offset behind solid text."
  },
  "layout_and_structure": {
    "description": "A vertically structured page with a fixed minimal navigation, an oversized hero section, and a grid-based bottom container for the statement of exclusivity and the email capture form.",
    "prompts": [
      {
        "part": "Minimal Navigation",
        "prompt": "Create a high-positioned nav bar with absolute positioning. Left side: Small brand ID in `#B6A596`, uppercase, wide tracking (e.g., 'SD—PROTOCOL 01'). Center: A 1px horizontal line in `#35211A` acting as a spacer. Right side: A status label 'INVITE ONLY' in text size 10px-12px, color `#35211A`."
      },
      {
        "part": "Hero Headline Section",
        "prompt": "Central hero area with edge-to-edge typography. Start with an 'Early Access' label featuring a 24px horizontal line in `#DC9F85` followed by uppercase text in `#B6A596`. The main headline 'ACME' (or generic title) should be oversized (`11.5vw`). Layer a 1px outlined version of the text (`#66473B`) behind the solid beige text, offset by 4px for a depth effect. On mobile, the headline must stack vertically."
      },
      {
        "part": "Bottom Content Grid",
        "prompt": "Below the hero, place a horizontal divider line in `#35211A`. Below the line, create a 12-column grid. Columns 1-5: Exclusivity statement in `text-xl`, light weight, leading-relaxed. Include a status indicator below it: a 8px circle in `#DC9F85` next to label text 'Batch 003 Filling'. Columns 7-12: Email capture form."
      },
      {
        "part": "Email Capture & Footer",
        "prompt": "The form should be a unified block. Input field: Transparent background, 1px border `#66473B`, placeholder text `#66473B`, 4px top-left/bottom-left corners. Button: Solid `#DC9F85` background, `#181818` text, bold, uppercase, 4px top-right/bottom-right corners. Add a tiny caption below: 'Zero spam. Pure utility.' in `#35211A`."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Rotating Waitlist Badge",
      "description": "An animated circular badge indicating current status.",
      "prompt": "Place a 64x64px circular component in the bottom-right corner. It consists of a 1px border `#35211A` circle. Inside, animate a text path 'WAITING LIST • WAITING LIST •' rotating infinitely (12s duration). Use font size 11px, bold, uppercase, in `#35211A`."
    },
    {
      "component": "Cinematic Text Layering",
      "description": "A depth-effect headline style using outlines.",
      "prompt": "Implementation: The headline is doubled. Layer 1 (Back): `-webkit-text-stroke: 1px #66473B`, color: transparent, offset by `4px 4px`. Layer 2 (Front): `color: #EBDCC4`. Both layers must share the same font-family, weight, and tracking to align perfectly."
    }
  ],
  "special_notes": "MUST DO: Ensure the background noise overlay is fixed and covers the entire viewport. MAINTAIN strictly tight line-height (0.85) for headlines. MUST NOT: Use gradients, box shadows, or rounded 'pill' buttons. Keep the color palette limited to the specified earthy tones to avoid a generic 'tech' look."
}