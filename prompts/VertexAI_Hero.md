Build a React + TypeScript + Vite hero section for a fictional brand "VertexAI". Render a full-viewport hero with a looping background video, a frosted-glass navbar, a centered headline using mixed sans + italic-serif typography, and a footer row with a description on the left and tag buttons on the right. Follow this spec verbatim — class names, values, copy, SVG paths, padding, opacity, and all CSS must match exactly.

Project setup
React 19 + TypeScript + Vite. Files: index.html, src/main.tsx, src/App.tsx, src/App.css, src/index.css, src/components/Navbar.tsx, src/components/Navbar.css, src/components/HeroContent.tsx, src/components/HeroContent.css, src/components/FooterElements.tsx, src/components/FooterElements.css.
main.tsx mounts <App /> inside <StrictMode> and imports ./index.css.
Body: overflow: hidden, min-height: 100vh, dark scheme.
Fonts (load in index.css)
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap');
Base font-family: 'Inter', system-ui, -apple-system, sans-serif. Background #0a0a0a, text rgba(255,255,255,0.87).

index.css (design tokens + globals)
:root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #0a0a0a;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(12px);
  --primary-white: #ffffff;
  --secondary-white: rgba(255, 255, 255, 0.7);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-color: #0a0a0a;
  overflow: hidden;
}

#root { width: 100%; }

.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.pill { border-radius: 16px; }

button { cursor: pointer; border: none; font-family: inherit; transition: all 0.3s ease; }
a { text-decoration: none; color: inherit; }
App.tsx
import './App.css'
import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import FooterElements from './components/FooterElements'

function App() {
  return (
    <main className="hero-section">
      <video
        className="hero-bg-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_162107_3cd240af-dff4-4396-b8b7-22e25c9adb1c.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Navbar />
      <HeroContent />
      <FooterElements />
    </main>
  )
}

export default App
App.css
.hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  background: #0a0a0a;
}

.hero-bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero-section { padding: 30px 20px; }
}
The video element must include autoPlay, loop, muted, playsInline (lowercase HTML attributes) so it autoplays inline on every browser. No overlay — the video shows through directly behind everything.

Navbar.tsx
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-placeholder">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="4" fill="white" fillOpacity="0.8" />
              <circle cx="16" cy="8" r="4" fill="white" fillOpacity="0.8" />
              <circle cx="8" cy="16" r="4" fill="white" fillOpacity="0.8" />
              <circle cx="16" cy="16" r="4" fill="white" fillOpacity="0.8" />
            </svg>
          </div>
          <span className="brand-name"><a href="">VertexAI</a></span>
        </div>
      </div>

      <div className="nav-main glass pill">
        <div className="nav-links">
          <a href="#product" className="nav-link">Product</a>
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#customers" className="nav-link">Customers</a>
          <a href="#company" className="nav-link">Company</a>
        </div>
        <button className="login-btn pill">Login</button>
      </div>
    </nav>
  )
}

export default Navbar
Navbar.css
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-placeholder { display: flex; align-items: center; gap: 12px; }

.brand-name { font-size: 19px; font-weight: 600; letter-spacing: -0.5px; margin-top: -5px; }

.nav-main {
  display: flex;
  align-items: center;
  padding: 6px 6px 6px 32px;
  gap: 28px;
  background: rgba(20, 18, 16, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 16px;
}

.nav-links { display: flex; gap: 25px; }

.nav-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-white);
  transition: color 0.3s ease;
}
.nav-link:hover { color: var(--primary-white); }

.login-btn {
  background: var(--primary-white);
  color: #000;
  padding: 10px 26px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
}
.login-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-main { padding: 6px; gap: 0; }
}
The navbar consists of two parts: a logo block on the left (4-circle SVG mark + brand wordmark "VertexAI") and a darkened glass pill on the right that combines the nav links and the white Login button. The pill uses warm dark fill rgba(20, 18, 16, 0.42) plus an 18px backdrop-blur and a 1px white-8% border, with a border-radius of 16px (rounded rectangle, not a true pill). The Login button uses a tighter 12px radius.

HeroContent.tsx
import './HeroContent.css'

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="sans-bold">Meet VertexAI.</span>
        <br />
        <span className="serif-italic">Redefine space</span>
        <span className="sans-light"> with</span>
        <br />
        <span className="sans-light">intelligent design</span>
      </h1>
      <div className="cta-container">
        <button className="cta-btn pill">Start free decoration</button>
      </div>
    </div>
  )
}

export default HeroContent
The headline must render across three visual lines with a leading space before "with":

Meet VertexAI. — Inter, regular weight
Redefine space with — "Redefine space" in italic Cormorant Garamond at 1.14em of the base headline size; "with" in regular Inter at 1em
intelligent design — Inter, regular weight
HeroContent.css
.hero-content {
  text-align: center;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.hero-title {
  font-size: clamp(36px, 4.4vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.022em;
  color: var(--primary-white);
  margin-bottom: 0;
  font-weight: 400;
}

.sans-bold  { font-weight: 400; font-size: 1em; }
.sans-light { font-weight: 400; font-size: 1em; }

.serif-italic {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.14em;
  letter-spacing: -0.01em;
}

.cta-btn {
  background: var(--primary-white);
  color: #000;
  padding: 15px 25px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  margin-top: 0;
}
.cta-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .hero-title { letter-spacing: -1px; }
}
FooterElements.tsx
import './FooterElements.css'

const FooterElements = () => {
  return (
    <div className="footer-elements">
      <div className="footer-left">
        <p className="description">
          It helps you imagine, plan, and refine spaces<br />
          through natural conversations.<br />
          From choosing colors and layouts to suggesting<br />
          furniture and décor, it adapts to your taste.
        </p>
      </div>
      <div className="footer-right">
        <button className="tag-btn glass pill">Solutions for complex spaces</button>
        <div className="action-row">
          <button className="icon-btn glass pill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="tag-btn glass pill">Conversational & Action</button>
        </div>
      </div>
    </div>
  )
}

export default FooterElements
FooterElements.css
.footer-elements {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px 36px;
}

.footer-left { max-width: 400px; }

.description {
  font-size: 15px;
  line-height: 1.18;
  color: white;
  font-weight: 400;
  opacity: 0.8;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.action-row { display: flex; gap: 12px; }

.tag-btn {
  background: transparent;
  color: var(--primary-white);
  padding: 10px 22px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--glass-border);
  border: 0.75px solid white;
  border-radius: 16px;
}
.tag-btn:hover {
  background: var(--glass-bg);
  border-color: var(--primary-white);
}

.icon-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.icon-btn:hover {
  background: var(--glass-bg);
  transform: rotate(45deg);
}

@media (max-width: 900px) {
  .footer-elements { flex-direction: column; align-items: center; gap: 40px; text-align: center; }
  .footer-right { align-items: center; }
}
Animations / interactions
All buttons inherit transition: all 0.3s ease from the global button selector.
Login button: hover lifts 1px (translateY(-1px)) and dims white to 90%.
CTA "Start free decoration": hover scales to 1.05 and intensifies the white glow shadow.
Tag buttons: hover gains the --glass-bg fill and the border brightens to full white.
Icon button (arrow): hover rotates 45° and gains the glass background — the arrow appears to flip toward bottom-right.
Nav links: hover transitions text color from --secondary-white (white 70%) to --primary-white.
Background video: loops continuously, muted, autoplays inline, object-fit: cover over the full viewport.
Acceptance checklist
Hero section is exactly 100vw × 100vh, with a 20px outer padding, content distributed top/middle/bottom via flexbox.
Looping CloudFront video plays behind everything at z-index -1 with no tint or overlay.
Top row: left-side logo (4 white-80% circles SVG + "VertexAI" wordmark) and right-side dark glass nav pill containing 4 nav links + white Login button (12px radius).
Middle: three-line headline as specified, with Cormorant Garamond italic only on "Redefine space"; centered; clamp(36px, 4.4vw, 72px); line-height 0.95. White CTA "Start free decoration" with padding: 15px 25px, border-radius: 12px, soft shadow.
Bottom: 4-line description on the left at 15px / 1.18 line-height, opacity 0.8; right column has "Solutions for complex spaces" stacked over a row of [arrow icon button] + "Conversational & Action". All three buttons use a 16px-radius outlined glass treatment with a 0.75px white border. The footer row sits 36px above the bottom edge.
Below 900px viewport, nav links hide and footer stacks vertically; below 768px the section padding becomes 30px 20px and headline letter-spacing tightens to -1px.
