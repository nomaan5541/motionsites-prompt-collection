{
  "summary": "A full-bleed dark 'aurora glass' sign-in screen: a split hero where a left product pitch sits beside a frosted-glass auth card floating over a deep ink background scattered with soft blurred aqua/magenta/indigo aurora blobs, a faint masked grid veil and film grain. Sticky translucent nav on top, a trust logo strip and minimal footer below. The signature move is the glassmorphic card with a gradient (aqua->magenta) primary CTA and a glowing aqua focus ring on the active field.",
  "style": {
    "description": "Dark glassmorphism with a vivid aurora gradient system. Near-black ink canvas (#0b0f14), frosted translucent surfaces with heavy backdrop-blur and a 1px white hairline border, neon aqua (#2dd4bf) and magenta (#e879f9) as the only accent hues, applied as soft radial blobs, gradient text, and a multi-stop CTA. Type pairs Space Grotesk (display) with Inter (body). High contrast, calm spacing, subtle inset highlights and deep drop shadows give the glass a real lift.",
    "prompt": "Design a premium dark glassmorphism aesthetic. Background: solid ink #0b0f14 (color-scheme: dark). Scatter 4-5 large soft blurred radial 'aurora' blobs (border-radius:9999px, filter blur ~4px) in three palettes: aqua [radial #ccfbf1->#5eead4->#2dd4bf->#0f766e], magenta [#fbe9ff->#f0abfc->#e879f9->#a21caf], deep [#38bdf8->#6366f1->#312e81], at varied opacities .32-.78. Over them add a masked grid veil (64px lines in rgba(45,212,191,.05) and rgba(232,121,249,.05), radial-ellipse mask fading to transparent) and a fine film grain (3px radial dots, opacity .5), then two darkening overlays so the center stays legible and edges sink to ink. Surfaces are glass: linear-gradient(155deg, rgba(255,255,255,.085), rgba(255,255,255,.025)), backdrop-filter blur(34px) saturate(140%), 1px rgba(255,255,255,.12) border, box-shadow with an inset top highlight (0 1px 0 rgba(255,255,255,.18) inset) plus a 0 30px 80px -20px rgba(0,0,0,.75) drop shadow. Accents only aqua #2dd4bf and magenta #e879f9 (lighter aqua #5eead4 for links/highlights). Gradient text and primary button use linear-gradient(100deg, #2dd4bf 0%, #5eead4 38%, #e879f9 100%). Fonts: 'Space Grotesk' for display/headings (weights 600/700, tight tracking), 'Inter' for body/UI (400-700); body text slate-200/slate-400, muted labels slate-500. Generous radii (cards ~26px, inputs/buttons ~12-14px). Smooth .18-.22s transitions on hover/focus."
  },
  "layout_and_structure": {
    "description": "Single full-height page, max-width 7xl (1280px) centered with px-6/px-8 gutters. A fixed translucent header nav. The hero is a 2-column grid on lg (left pitch / right card), stacking to one column on mobile with the card ordered first. Below the fold: a full-bleed trust logo strip, then a minimal footer. Everything sits over the shared aurora background layer.",
    "prompts": [
      {
        "part": "Sticky nav",
        "prompt": "Fixed top nav (z-50), full width, glass-nav style: background rgba(11,15,20,.62), backdrop-blur(18px) saturate(140%), 1px bottom border rgba(255,255,255,.07). Inner row h-16, max-w-7xl, space-between: left = logo (8x8 rounded-lg gradient aqua->magenta tile with a ph:diamonds-four-bold ink glyph) + 'Lumina' wordmark in Space Grotesk 600; center = nav links Product / Library / Pricing / Docs (Inter 500, slate-300, hover white, hidden on mobile); right = a text 'Sign in' link + a solid white pill 'Start free' button with ink text."
      },
      {
        "part": "Hero / sign-in grid",
        "prompt": "main is min-h-screen, overflow-hidden, with the aurora background as a -z-10 absolute layer. Inside, max-w-7xl flex column, pt-16. A grid that is lg:grid-cols-2, items-center, gap-14 (lg gap-10). On mobile the card section is order-1 (top), the pitch is order-2; on lg the pitch is order-1 (left) and card order-2 right-aligned (lg:justify-self-end)."
      },
      {
        "part": "Left pitch column",
        "prompt": "Top: a small pill badge (rounded-full, glass pill bg rgba(255,255,255,.04) + 1px border, tiny aqua status dot) reading a version/status line. Then a large display headline in Space Grotesk 700, ~3.4rem on lg, leading 1.05, tight tracking, white, with one phrase wrapped in gradient-text (aqua->magenta). A slate-400 subparagraph (max-w-md). A 3-item feature list, each row = a 6x6 rounded-md tinted icon chip (alternating bg-aqua/15 text-aqua and bg-magenta/15 text-magenta, phosphor icons) + slate-300 label. A social-proof row: overlapping avatar stack (h-8 w-8 rounded-full, border-2 border-ink, gradient fills, last chip = '9k+' count) beside a small slate-400 caption."
      },
      {
        "part": "Glass sign-in card",
        "prompt": "A glass card, max-w-md, rounded-[26px], p-8/p-9, with two tiny blurred aurora 'kiss' orbs bleeding off its corners (magenta top-right, aqua bottom-left, -z-10). Header: 'Welcome back' (Space Grotesk 600, 2xl, white) + slate-400 subtitle. Two-up social buttons (grid-cols-2, social-btn glass style: bg rgba(255,255,255,.045), 1px border, hover lifts) for Google (logos:google-icon) and GitHub. An 'or with email' divider = two gradient hairlines flanking uppercase tracked slate-500 label. Form: Email and Password fields built as .field rows (rounded-xl, bg rgba(255,255,255,.04), 1px rgba(255,255,255,.1) border, leading phosphor icon, h-12 input). The PASSWORD field is shown in its focused state to demo the glow: border-color rgba(45,212,191,.7), bg rgba(45,212,191,.06), box-shadow 0 0 0 4px rgba(45,212,191,.14) + 0 0 26px -4px rgba(45,212,191,.55), with a trailing eye toggle. A 'Forgot?' aqua link above the password label. A 'Remember me' row with a custom rounded checkbox (aqua-tinted, ph:check-bold). Primary submit = full-width .cta gradient button (aqua->magenta), ink text, Space Grotesk 700, trailing arrow, glowing colored shadow + hover lift. Footer line: 'New to Lumina? Create an account' (aqua link)."
      },
      {
        "part": "Trust strip",
        "prompt": "Full-bleed band with thin top/bottom white/5 borders and a barely-there bg-white/[.015]. Centered uppercase tracked slate-500 eyebrow ('Powering design teams everywhere'), then a wrapped row of 5 muted (slate-500) faux company logos, each = a phosphor glyph + Space Grotesk 600 name."
      },
      {
        "part": "Footer",
        "prompt": "Minimal footer on solid ink. max-w-7xl row, space-between on sm: left = small logo tile + 'Lumina' + '(c) 2026' in slate-600; right = Privacy / Terms / Status text links (slate-400, hover white) plus two social icon links (X + GitHub, hover aqua)."
      }
    ]
  },
  "special_ui_components": [
    "Aurora background system: layered blurred radial blobs (aqua/magenta/deep-indigo) + masked grid veil + film grain + dual darkening overlays, composited as one -z-10 layer behind all content.",
    "Glassmorphic card: 155deg white translucent gradient fill, backdrop-blur(34px) saturate(140%), hairline border, inset top highlight + deep drop shadow, ~26px radius, with corner aurora 'kiss' orbs.",
    "Glowing focus field: input row whose focus-within state paints an aqua border, aqua-tinted fill, a 4px aqua focus ring and a 26px aqua glow (shown pre-focused on the password field to advertise the interaction).",
    "Gradient CTA: full-width button with an aqua->teal->magenta gradient, ink-colored label, colored double drop shadow and a translateY(-1px)+brightness hover lift.",
    "Glass social buttons (Google + GitHub) in a 2-up grid with subtle hover border/lift.",
    "Gradient divider: 'or with email' separator built from two transparent->white->transparent hairlines around an uppercase tracked label.",
    "Custom checkbox: 18px rounded square, aqua-tinted fill, white hairline border, phosphor check glyph.",
    "Overlapping avatar stack with a '9k+' count chip for social proof.",
    "Translucent glass sticky nav with backdrop blur and a solid white 'Start free' pill CTA."
  ],
  "special_notes": "Color tokens (exact): ink #0b0f14, aqua #2dd4bf (light #5eead4), magenta #e879f9; blob deep stops #38bdf8/#6366f1/#312e81. Fonts: Space Grotesk (display, 400-700) + Inter (body, 400-700), loaded from Google Fonts; phosphor + logos icon sets via Iconify. Built on Tailwind (CDN) with custom utility classes (.aurora/.glass/.glass-nav/.field/.cta/.social-btn/.pill/.gradient-text/.check/.divider-line). Keep accents strictly aqua + magenta. The password field is intentionally rendered focused to showcase the glow ring. Fully responsive: 2-col on lg collapsing to a single stacked column on mobile with the auth card moved to the top. color-scheme: dark, antialiased, smooth scroll."
}