{
  "summary": "A high-fashion brutalist design system called 'Season 04', utilizing massive typography, raw noise textures, and a technical-utilitarian layout. It blends luxury editorial sensibilities with harsh, industrial design elements like high-contrast grayscale imagery and neon acid-green micro-interactions.",
  "style": {
    "description": "The style is defined by a 'Raw' aesthetic: a neutral beige background (#E3E2DE) paired with deep brownish-black (#1B0E0D) and burnt red (#C72A09) accents. A constant noise texture (0.08 opacity) is applied over the entire interface. Typography features heavy use of 'Clash Grotesk' for massive, tight-tracked headings and 'General Sans' or Mono fonts for technical metadata. Animations are swift and purposeful, including image scaling and neon-green hover states (#31EF07).",
    "prompt": "Create a design with a 'Modern Brutalist' aesthetic. Use a background color of #E3E2DE and primary text in #1B0E0D. Apply a persistent noise texture overlay (SVG fractalNoise at 0.08 opacity, mix-blend-mode: multiply). Typography: Use 'Clash Grotesk' for display headings with font-weight: 700, letter-spacing: -0.04em, and leading: 0.85. For body and technical info, use 'General Sans' or a monospace font for price/data points. Accent colors: #C72A09 (Primary accent/Action) and #31EF07 (Neon Green for micro-interactions/hovers). Links should feature a custom hover animation using a 2px neon green underline that scales from 0 to 1 with cubic-bezier(0.165, 0.84, 0.44, 1). Images must be high-contrast, often grayscale, with a hover scale effect of 1.05."
  },
  "layout_and_structure": {
    "description": "The layout uses a 12-column asymmetric grid. It features massive, screen-filling typography dividers and a mix of full-width blocks and offset product columns to create a sense of 'ordered chaos'.",
    "prompts": [
      {
        "part": "Navigation",
        "prompt": "Sticky top navigation using mix-blend-mode: difference to ensure legibility against any background. Left-aligned branding in uppercase bold (24px), centered text links (Shop, Editorial) with neon-green hover-underline animations, and right-aligned icons (Search, Cart) in 24px size. Text color should be #E3E2DE to work with the blend mode."
      },
      {
        "part": "Hero Section",
        "prompt": "Full-screen (100vh) hero section with a dark background (#1B0E0D). Background image should be grayscale and high-contrast at 60% opacity. Bottom-aligned content containing a thin #E3E2DE border, technical metadata in monospace tracking-widest, and a large burnt-orange (#C72A09) CTA button. The main headline must be massive (16vw on mobile, 13.5vw on desktop) using Clash Grotesk, with parts of the text indented (e.g., 20vw) to create negative space."
      },
      {
        "part": "Manifesto Section",
        "prompt": "A 12-column grid section. Columns 1-4 contain a small uppercase label (Manifesto) above a top border. Columns 5-12 contain large-scale editorial text (32px-48px) in uppercase font-medium with a significant paragraph indent (approx 3rem). Highlight key phrases in deep brown (#61220F)."
      },
      {
        "part": "Category Divider",
        "prompt": "A full-width section bounded by top and bottom borders (#D9D9D9). Contains a single, massive heading 'OUTERWEAR' at 12vw size in #61220F. The text should have tight tracking and minimal vertical padding to create a 'ribbon' effect."
      },
      {
        "part": "Product Grid",
        "prompt": "An asymmetrical 12-column grid. Items should vary in width and vertical offset. Example: Product A (7 columns, aspect 4:5), Product B (5 columns, aspect 3:4 with a 128px top margin offset). Product details below images include a bold uppercase title and a monospace price tag separated by a border-bottom that changes to burnt orange (#C72A09) on hover. Include a 'Quick View' badge in neon green (#31EF07) that appears on hover."
      },
      {
        "part": "Footer",
        "prompt": "Multi-column layout (4 columns) on beige background. Section headers in bold uppercase (20px). Newsletter signup uses a dark block (#1B0E0D) with an integrated underline-style input and neon-green 'Send' button. The very bottom features a massive 'ghost' title of the brand (8vw) in light gray (#D9D9D9) for brand reinforcement."
      }
    ]
  },
  "special_ui_components": [
    {
      "component": "Neon Interaction Badge",
      "description": "A sharp-edged, high-visibility utility badge for product status or quick actions.",
      "prompt": "Rectangle component with zero border-radius. Background color: #31EF07. Text: 10px bold uppercase #1B0E0D. Positioned absolutely in the top-right of containers, appearing only on hover with a 300ms ease-in-out transition."
    },
    {
      "component": "Texture Overlay",
      "description": "Full-screen SVG noise grain that unifies the brutalist aesthetic.",
      "prompt": "Fixed 100vw/100vh div with pointer-events: none. Apply an SVG filter: feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'. Set opacity to 0.08 and mix-blend-mode to multiply. Ensure it sits at z-index: 50."
    },
    {
      "component": "Split-Indented Headline",
      "description": "A typography style for hero headers that utilizes large-scale indentation for visual tension.",
      "prompt": "Font: Clash Grotesk, 13.5vw. Line 1: Left-aligned. Line 2: Indented by 20vw. Color: Mix of burnt-red (#C72A09) and beige (#E3E2DE). Line-height: 0.75. Tracking: -0.05em."
    }
  ]
}