{
  "summary": "A sophisticated, structural design system inspired by technical blueprints and high-end UI wireframes. It utilizes a large-scale mosaic background of interlocking rectangular panels, razor-thin hairlines, and a prestige-green primary color. The aesthetic is flat, 2D, and emphasizes high negative space and structural precision.",
  "style": {
    "description": "The style is 'Technical Minimalist'. It pairs a sans-serif header (Space Grotesk) with a monospaced functional font (JetBrains Mono). The color scheme revolves around 'Paper' (#F7F7F5), 'Forest' (#1A3C2B), and 'Grid' (#3A3A38). It avoids all depth effects (shadows, gradients) in favor of 1px border-lines and flat color blocks. Micro-interactions are snappy with linear or standard ease-out curves.",
    "prompt": "Create a design system using a 'Paper' background (#F7F7F5) and 'Forest Green' (#1A3C2B) as the primary brand color. Typography: Use 'Space Grotesk' for bold, tight-tracking headers (font-size: 64px-96px, line-height: 0.9); 'General Sans' for body text; and 'JetBrains Mono' for all labels, tags, and small technical metadata (font-size: 10px-12px, tracking: 0.1em). Borders: Use 1px hairlines in #3A3A38 at 20% opacity for all dividers. Palette: Primary Forest (#1A3C2B), Coral (#FF8C69), Mint (#9EFFBF), and Gold (#F4D35E). Styling: No box shadows. All components must have 0px or 2px (sm) border-radius. Images should use 'mix-blend-luminosity' with a 90% opacity and shift to full color on hover."
  },
  "layout_and_structure": {
    "description": "A vertical-scroll structure characterized by section-wide dividers and a background mosaic grid. Sections are divided by explicit 1px horizontal lines. Components often sit in a 'Bento Grid' format where blocks are separated by 1px gaps.",
    "prompts": [
      {
        "part": "Mosaic Background",
        "prompt": "Implement a full-page background pattern using an SVG mosaic of interlocking rectangular panels. Panels should have varying sizes (large squares, horizontal strips, vertical blocks) divided by 0.5px hairlines (#3A3A38 at 0.3 opacity). Fill all panels with #F7F7F5. The pattern should repeat seamlessly."
      },
      {
        "part": "Technical Navigation",
        "prompt": "Fixed top header with a 1px border-bottom (#3A3A38/20). Left side: square logo box (32x32px) in #1A3C2B with a white icon. Center: Nav links in JetBrains Mono, 10px, uppercase, prefixed with numerical indices (e.g., '01. Pricing'). Right side: Ghost button (1px border) and a solid Forest green button."
      },
      {
        "part": "Hero Section",
        "prompt": "Large typography layout. Header text 'Space Grotesk' 8xl, tracking-tight, forest green. Subtext in JetBrains Mono, 14px, all-caps, with a vertical 1px line on the left. Include an abstract wireframe graphic on the right: a square container with a dashed circular orbit and a luminosity-blended image."
      },
      {
        "part": "Bento Feature Grid",
        "prompt": "A 2x2 grid layout with a 1px 'Grid' color gap separating the cells. Each cell has a 'Paper' (#F7F7F5) background, 32px padding, and a monospaced header label with a colored left-border accent (Coral, Mint, Gold). Include internal 'mockup' boxes that simulate code snippets or UI errors using monospaced text and flat color chips."
      },
      {
        "part": "Technical Form CTA",
        "prompt": "A centered 640px wide form box. Background: #F7F7F5, Border: 1px hairline. Add four L-shaped 'corner markers' (10px x 10px) in #1A3C2B at each corner of the container. Form fields use solid white backgrounds with 1px borders and monospaced labels positioned directly above inputs."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Status Badge",
      "description": "A minimalist indicator for system status.",
      "prompt": "Create an inline-flex container with 1px border (#1A3C2B/20). Inside, place a 8px x 8px square dot of solid #1A3C2B followed by JetBrains Mono text at 10px, uppercase, tracking-widest. Padding: 4px 12px."
    },
    {
      "component": "Network Topology Graph",
      "description": "An abstract SVG visualization of a design system network.",
      "prompt": "A circular container (max-width: 450px) with 1px border. Central 16px solid forest green node. Three orbiting nodes on dashed paths (140px radius). Connect nodes to center using 1px solid lines at 0.2 opacity. Animate orbiting nodes with a linear 20s infinite rotation."
    },
    {
      "component": "Monospaced Testimonial Card",
      "description": "Flat testimonial card with technical metadata.",
      "prompt": "1px bordered square card. Top: Quote icon and star ratings (5 icons, 10px each). Body: Monospaced text at 12px, line-height 1.6. Bottom: 1px top border with user avatar (square, no radius) and name/title in JetBrains Mono."
    }
  ]
}