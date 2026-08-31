Create a mobile app showcase page displaying 3 iPhone mockups for "Christ Family Church" -- a church website mobile design. Use React Native with Expo Router, react-native-reanimated, and Manrope font (weights: Light, Regular, Medium).

**General layout:**
- Background color: `#5A4C41`
- 3 iPhone frames shown side by side on desktop (horizontal scroll), stacked vertically on mobile (<900px) with scale-to-fit
- Desktop: 40px padding, 48px gap between phones
- Mobile: 20px padding, 32px gap, phones scale down to fit screen width
- Each phone frame: 375x812 artboard inside a black rounded frame (borderRadius 50, borderWidth 2, borderColor `#2a2a2a`), with dynamic island notch (126x36, black, borderRadius 18) and home indicator bar (134x5, white 30% opacity)
- Soft shadow on frames: `shadowColor: #000, offset: {0, 12}, opacity: 0.3, radius: 24`

**Assets (all from framerusercontent.com):**
- Portrait photo: `https://framerusercontent.com/images/7nIpqB1Y0QYgLe70j5NmdtK5Rk.png`
- Logo (cross icon): `https://framerusercontent.com/images/Fr3jIzrNgNkSo8ZgFFTkpS308.png`
- Quote mark icon: `https://framerusercontent.com/images/DmIPflrtvNHr7mnr6k3K5Ayn8w.png`
- Star/compass decorative icon: `https://framerusercontent.com/images/yi0dRg7NDCZUtTbPxCa115nMU5M.png`
- Hero image (hands raised worship): `https://framerusercontent.com/images/G9ZdWZubRnpc37d5d7uUzqaBqiw.png`
- Avatars row: `https://framerusercontent.com/images/l3LBaTwnoXLWZd6axR7m3Q9iWeU.png`
- Arrow icon: `https://framerusercontent.com/images/zBmfi9e2hdwkTHpcMqbS61FIc3c.png`
- Screen 3 hero (preacher): `https://framerusercontent.com/images/Q7jLZsObox26xQCiWPAVYWzTsYs.png`
- Play button icon: `https://framerusercontent.com/images/3M0CPgfOsuyRxuRs37KkTOTrUM.png`

**Color palette:**
- Dark background: `rgb(29, 25, 26)`
- Cream/gold accent: `rgb(241, 229, 198)` / `#F1E5C6`
- White: `#FFFFFF`
- Light text on dark: `rgba(255, 255, 255, 0.77)`, `rgba(255, 255, 255, 0.6)`, `rgba(255, 255, 255, 0.5)`, `rgba(255, 255, 255, 0.3)`
- Off-white: `#F5F0E8`

**Typography (all Manrope):**
- Brand name in header: 17px Regular, white, lineHeight 20
- Rotated sidebar text: 14px, Medium (name) and Regular (role), letterSpacing 1.2, half-transparent white
- Quote text: 20px Regular, lineHeight 27, `rgba(255,255,255,0.77)`
- Event card title: 36px Medium, letterSpacing -0.5, color `#1a1a1a`
- Event card date: 17px Regular, `#888888`
- Hero headline (Screen 2): 52px Light, lineHeight 52, letterSpacing -2.5, cream color `#F1E5C6`
- Hero subtext: 21px Regular, lineHeight 27, white 60% opacity
- CTA button text: 21px Medium, dark color
- Section title "Upcoming" (Screen 3): 38px Regular, letterSpacing -0.8, white
- Event list titles: 21px Regular, lineHeight 26
- Event times: 17px Regular, `#999999`
- Date card day: 34px Medium
- Date card month: 18px Regular
- Menu links: 36px Light, letterSpacing -0.8, white

**Animations:**
- Each iPhone frame fades in with `FadeIn.duration(600)` using react-native-reanimated
- All text uses a typewriter effect (characters appear one by one) with configurable delay and speed
- Menu overlay fades in with `FadeIn.duration(200)`

**Screen 1 - Testimonial:**
- Dark background (`rgb(29, 25, 26)`)
- Header: logo (46x46) + "Christ Family Church" text on left, hamburger menu (3 lines, 2 long + 1 short) on right, paddingTop 48, paddingHorizontal 19
- Rotated text on left side: "Anna Miller" / "Community Member" rotated -90deg, positioned at left: -44, top: 115, translateX: -60
- Portrait photo: positioned at top: 120, left: 125, size 240x300
- Quote icon (28x24) at left: 19, top: 395
- Quote text at left: 19, top: 440, width: 336: "We want to be a family where people can connect and benefit from friendships in Christ."
- White card at bottom (height 245): contains "Sunday Worship Service" (36px), "Dec 7th, 10-11:30am", "Learn more" with arrow, star icon (48x48) bottom-right

**Screen 2 - Hero/Landing:**
- Full hero image covering top 472px with dark overlay (15% black)
- Same header as Screen 1
- Avatars image (149x53) at left: 19, top: 442
- Headline at top: 520: "Take a step toward the light"
- Subtext: "Discover faith, hope, and a home for your soul"
- Cream CTA button at bottom (height 52, bottom: 32): "Join us" with arrow icon

**Screen 3 - Sermons/Events:**
- Hero image at top: covers 345px height (width: 415, offset left: -20), with 30% black overlay
- Play button (65x65 circle, cream background) centered at top: 175
- White body section starting at top: 343
- Dark band inside body (height 220, `rgb(29, 25, 26)`) behind "Upcoming" title
- Events list with date cards (68x90):
  - 14 Dec: "Luke 1 | A Story From Zechariah" - 6:30 - 8:00 pm (white date card)
  - 21 Dec: "Romans 15 | Living For Christ Alone" - 8:30 - 10:00 am (cream date card)
  - 28 Dec: "Romans 9 | The Sovereignty Of God" - 5:30 - 7:00 pm (cream date card)
  - 4 Jan: "John 3 | Born Again" (partial/faded at 50% opacity, cream date card)
- Gap between event rows: 22px

**Menu overlay (shared across all screens):**
- Full-screen dark overlay (`rgb(29, 25, 26)`), z-index 100
- Header with logo + brand name and X close button (two rotated lines)
- Navigation links: Home, About, Events, Sermons, Contact (36px Light)
- Gap between links: 22px
- Cream CTA "Join us" button at bottom (bottom: 36)
- Hamburger button on each screen opens the menu; close button dismisses it