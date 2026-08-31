{
  "summary": "The 'Kinetic Orange' style is a digital-first brutalist aesthetic that uses heavy typography and motion to create a sense of urgency and technical sophistication. It relies on a three-color system (Orange, Black, White) and sharp geometric layouts.",
  "style": {
    "description": "High-impact brutalist theme. It pairs the heavy weight of 'Archivo Black' for display text with the technical precision of 'Space Mono' for metadata and labels. The primary color is a vibrant electric orange (#FF4D00). Visuals are defined by thick borders (2px+), skewed sections, and continuous marquee animations.",
    "prompt": "Create a design with a primary background color of #FF4D00 and deep black #000000 text. \n- **Typography**: Headers in 'Archivo Black', uppercase, tracking -0.04em, line-height 0.85-0.9. Metadata and UI labels in 'Space Mono', tracking -0.02em. Body text in 'Inter'. \n- **Color Palette**: Brand Orange (#FF4D00), Solid Black (#000000), and Pure White (#FFFFFF) for high-contrast accents on black backgrounds. \n- **Borders**: 2px solid #000000 for section dividers and buttons. \n- **Motion**: Use linear marquees for text-heavy sections. Implement a 'spin' animation for circular indicators (12s duration). \n- **Interactions**: Hover states should include horizontal translations (translate-x-4) and scale transforms (scale-110). Selection color should be background: black; color: #FF4D00;"
  },
  "layout_and_structure": {
    "description": "A vertically stacked layout with full-width sections. It uses a floating 'pill' navigation bar and incorporates skewed transitions between sections to break the grid.",
    "prompts": [
      {
        "part": "Floating Navigation",
        "prompt": "A fixed top navigation with a logo on the left and social icons on the right. In the center, a floating black 'pill' container (background #000000, rounded-full) housing links in white 'Space Mono' (size 12px). Links should transition to black text on white background on hover."
      },
      {
        "part": "Typographic Hero Section",
        "prompt": "A fullscreen header with the main headline centered in 'Archivo Black' at 16vw size. Below the headline, a 2px black horizontal border separates the hero from a metadata row containing a 'Based in...' label (left), a rotating circular 'Scroll Down' text indicator (center), and a multi-line title/role (right)."
      },
      {
        "part": "Skewed Marquee Section",
        "prompt": "A full-width section with background #000000, skewed at -2deg. Contains two rows of infinite scrolling text. Row 1: Orange text (#FF4D00) in Archivo Black, 10vw size. Row 2: White text with 80% opacity, scrolling in reverse."
      },
      {
        "part": "Vertical Service List",
        "prompt": "A dark section (background #000000, text #FFFFFF). Items are separated by 1px white/20% borders. Each item features a leading number in #FF4D00 (Space Mono), a large uppercase title (Archivo Black, 7vw), and a row of pill-shaped tags. On hover, the title moves right and a large #FF4D00 arrow icon reveals at 45 degrees."
      },
      {
        "part": "Giant CTA and Footer",
        "prompt": "A centered CTA with 14vw heading. A large rounded-full button (#000000 background, white text) that scales up on hover. Footer is separated by a 2px black top border, containing copyright info and horizontal social links in Space Mono (12px)."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Rotating Scroll Indicator",
      "description": "A circular SVG path with text that rotates infinitely.",
      "prompt": "Create a 144px diameter circle. Inside, use an SVG <textPath> on a circular path to repeat the string 'Scroll Down • ' 3-4 times. Use font 'Space Mono', size 9px, weight bold, uppercase. Place a static arrow-down icon (Lucide) in the center. Animate the SVG text container with a linear rotation (360deg over 12s)."
    },
    {
      "component": "Brutalist Service Card",
      "description": "Interactive list item with reveal effects.",
      "prompt": "A list item spanning 100% width with a top border. Layout: [Index (Orange, Mono)] [Title + Tags (White, Archivo)] [Arrow Icon (Hidden, Orange)]. On hover: Background shifts to white/5% opacity, Title translates +16px horizontally, Arrow opacity becomes 1 and rotates 45deg."
    }
  ],
  "special_notes": "MUST: Maintain extremely high contrast. MUST: Use only uppercase for Archivo Black headers. MUST: Ensure all borders are sharp (no rounded corners except for pill-shaped buttons and navigation). DO NOT: Use gradients, drop shadows (except for navigation depth), or soft pastels. DO NOT: Use standard sans-serifs for headlines."
}