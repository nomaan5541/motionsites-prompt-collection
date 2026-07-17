Create a mobile app showcase page that displays 3 phone-screen mockups side by side for an event called "Unfold" by MEWS. The page background is a muted purple (`#433B73`). Each screen is displayed inside a phone frame (393x873px with rounded corners). The screens should have entrance animations on page load.

---

### Screen 1: Home

A full-bleed looping background video with the event title centered.

- **Video background URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260704_080218_722465a5-cef1-4c6b-976a-948823474a8b.mp4`
- Video covers the entire frame, with a dark overlay on top (`rgba(0,0,0,.12)`), a bottom gradient fade (transparent to near-black over the bottom 34%), and a top gradient fade (semi-black fading to transparent over the top 16%)
- **Top bar:** "MEWS" in all caps (Michroma font, 16px, bold, letter-spacing .22em, white) on the left. On the right, a 46px circular button with purple-tinted border (`#78739f`) and two horizontal lines inside (hamburger menu)
- **Center content:**
  - Title "Unfold" in a large elegant serif/sans (General Sans semibold, 88px, white, slight negative letter-spacing)
  - Below by 48px: a metadata row centered with "Volume 05", a white pill shape (46x15px rounded), "Amsterdam", a small white dot (7px circle), "29.05.2024" -- all in Axiforma/Poppins medium 14px
- **Bottom (44px from bottom):** A white rounded pill button "Get a ticket" with right arrow, Inter bold 18px, padding 19px 34px, border-radius 40px, subtle box shadow. Include a one-time sheen/gloss animation sweeping across the button after the entrance animation

---

### Screen 2: Speakers

Dark screen (`#08080a`) with subtle border (`rgba(148,145,182,.28)`).

- **Top bar:** "Unfold" (General Sans semibold, 24px, white) on the left, white circular menu button (40px) on the right
- **Title:** "This Year's Speakers" on two lines (Axiforma regular, 48px, white, margin-top ~80px)
- **Description:** "Hospitality's best and brightest are invited to speak at Unfold. Here are some of the people who'll inspire attendees this year." (Inter 14px, line-height 1.6, white at 55% opacity)
- **Divider:** thin horizontal line (`rgba(255,255,255,.14)`)
- **Filter chips row** (flex wrap): "All" (active, filled purple `#9393f3` with dark text), "Keynote", "Hotelier", "Technology", "Consultant" (outlined, white at 55% opacity, rounded pill shape, 13.5px)
- **Speaker cards** (2-column grid, gap 14px):
  - Card 1: Image of Dimitris Manikis (URL: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_082140_91d42552-7cae-4b03-9a4d-f36a29ae93dc.png&w=1280&q=85`), aspect ratio ~150:172, border-radius 20px. Name: "Dimitris Manikis" (Inter 15px, white). Role: "President and MD for..." (Inter 12px, white 50%, ellipsis truncated)
  - Card 2: Image of Fiona McDonnell (URL: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260704_082107_663b204f-717a-49cf-9e97-7632b85a1cfd.png&w=1280&q=85`). Name: "Fiona McDonnell". Role: "VP Global Partner..."

---

### Screen 3: FAQs

Dark screen (`#0c0e12`) with subtle border.

- **Top bar:** Same as Speakers screen
- **Content scaled to 93%** (to fit more content elegantly)
- **Title:** "FAQs" (Axiforma regular, 52px, white, margin-top 74px)
- **Divider:** same style, wider vertical margins (72px top, 40px bottom)
- **Filter chips** (flex wrap with line breaks):
  - Row 1: "All" (active), "Where can I stay?", "In-person experience"
  - Row 2: "Tickets", "Venue", "Workshop sessions"
  - Row 3: "Networking & afterparty", "Other"
- **FAQ accordion items** (no expand behavior needed, just visual):
  - Each group has a small label tab above the first item (10px text on dark background `#1a1c22`, rounded top corners, text color `rgba(214,211,242,.9)`)
  - Each item: dark card (`#131519`), border `1.5px solid rgba(255,255,255,.14)`, border-radius 22px, padding ~22px. Question text on the left (Inter 17px, white), "+" toggle button on the right (36px circle with thin white border, white plus SVG icon)
  - Group 1 -- label "Where can I stay?": one question "Where can I stay?"
  - Group 2 -- label "In-person experience": two questions "What time does the event start?" and "What's included in my ticket?"

---

### Animations

All CSS-only, triggered on page load with staggered delays:

1. **Rise in** (translateY 26px to 0, fade in) - for headers, descriptions, CTA
2. **Blur in** (translateY + scale + blur + letter-spacing animate to normal) - for the "Unfold" title
3. **Clip up** (clip-path reveal from bottom) - for section titles
4. **Line grow** (scaleX 0 to 1 from left) - for dividers
5. **Stagger children** (each child delays by +70ms) - for chips and grid cards
6. **Sheen** (white gradient sweeps across CTA button once after 1.5s)

Use `cubic-bezier(.16, 1, .3, 1)` (expo out) for most animations. Respect `prefers-reduced-motion`.

Stagger timing: Home elements start at 0.45s-0.95s. Speakers elements at 0.6s-1.3s. FAQs elements at 0.8s-1.25s.

---

### Typography Stack

- **Michroma** - logo only
- **General Sans** (FontShare) - "Unfold" title and brand text
- **Satoshi** (FontShare) - fallback
- **Axiforma** - section headings (Speakers title, FAQ title)
- **Inter** - body text, chips, cards, questions, CTA button
- **Poppins** - fallback for meta text
- **Archivo** - base/fallback font

---

### Color System

| Token | Value |
|-------|-------|
| Page bg | `#433B73` |
| Frame dark | `#000`, `#08080a`, `#0c0e12` |
| Frame border | `rgba(148, 145, 182, .28)` |
| Active chip bg | `#9393f3` |
| Active chip text | `#181523` |
| Menu accent | `#78739f` |
| FAQ card bg | `#131519` |
| FAQ label bg | `#1a1c22` |
| FAQ label text | `rgba(214, 211, 242, .9)` |
| Border subtle | `rgba(255, 255, 255, .14)` |
| Text primary | `#fff` |
| Text secondary | `rgba(255, 255, 255, .55)` |
| Text tertiary | `rgba(255, 255, 255, .5)` |

---

### Responsive

- 3 screens side by side on desktop (flexbox, gap 40px)
- Wrap on screens below 900px
- Scale down phone frames on very small screens (below 440px)

---

### Key Design Details

- Phone frames should look like real device bezels (large border-radius 44px, dark background, overflow hidden)
- The home screen frame has no visible border; the other two have a subtle light purple/gray border
- Speaker card images have a dark fallback background (`#1a1a1e`) while loading
- The FAQ content uses a scale trick (93% transform) to fit more content while looking natural
- No JavaScript interactions needed - this is a static visual showcase with CSS entrance animations only