<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>SynapseX</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
  font-family: "Space Mono", monospace;
  background: #000;
  color: #fff;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html.lenis, html.lenis-under-construction { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
.lenis.lenis-scrolling iframe { pointer-events: none; }

a { text-decoration: none; color: inherit; }
button { border: none; outline: none; background: none; font-family: inherit; cursor: pointer; }
button:focus { outline: none; }

/* ── Video Layer ── */
#video-layer {
  position: fixed; inset: 0;
  width: 100%; height: 100%;
  overflow: hidden; z-index: 1;
  background: #000;
  user-select: none;
}
#video-layer video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: 0;
  will-change: transform, filter, opacity;
}

/* ── Progressive Bottom Blur ── */
#bottom-blur {
  position: fixed; bottom: 0; left: 0;
  width: 100%; height: 150px;
  z-index: 30;
  pointer-events: none; user-select: none;
  background: linear-gradient(to bottom, transparent, #000);
  -webkit-mask-image: linear-gradient(to top, #000 50%, transparent);
  mask-image: linear-gradient(to top, #000 50%, transparent);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

/* ── Header ── */
#main-header {
  position: fixed; top: 0; left: 0; right: 0;
  height: 80px; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem;
  opacity: 0;
  transition: opacity 0.8s ease-out;
  pointer-events: auto;
}
#main-header.visible { opacity: 1; }

.header-left { display: flex; align-items: center; gap: 8px; }

/* Logo Pill */
.logo-pill {
  height: 48px; padding: 0 20px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
  user-select: none;
}
.logo-pill:hover { background: rgba(255,255,255,0.22); transform: scale(1.02); }
.logo-pill:active { transform: scale(0.98); }
.logo-pill svg { width: 18px; height: 18px; color: #fff; flex-shrink: 0; }
.logo-pill span {
  font-size: 16px; font-weight: 500;
  letter-spacing: -0.02em; color: #fff; line-height: 1;
  white-space: nowrap;
}

/* Hamburger Menu Pill */
.menu-pill {
  height: 48px; width: 48px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  display: flex; align-items: center;
  overflow: hidden;
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
}
.menu-pill.open { width: 290px; }

.hamburger-btn {
  width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; position: relative; z-index: 2;
  transition: all 0.2s;
}
.menu-pill.open .hamburger-btn {
  width: 36px; height: 36px;
  border-radius: 11px;
  background: rgba(255,255,255,0.1);
  margin-left: 6px;
}
.menu-pill.open .hamburger-btn:hover { background: rgba(255,255,255,0.2); }

.hamburger-icon {
  width: 18px; height: 12px; position: relative;
}
.hamburger-icon span {
  position: absolute; left: 0;
  width: 18px; height: 1.5px;
  background: #fff; border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s;
  transform-origin: center;
}
.hamburger-icon span:nth-child(1) { top: 0; }
.hamburger-icon span:nth-child(2) { top: 5px; }
.hamburger-icon span:nth-child(3) { top: 10px; }
.menu-pill.open .hamburger-icon span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
.menu-pill.open .hamburger-icon span:nth-child(2) { opacity: 0; transform: scale(0); }
.menu-pill.open .hamburger-icon span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }

.menu-links {
  display: flex; align-items: center; gap: 24px;
  margin-left: auto; padding-right: 24px;
  opacity: 0; transform: translateX(15px);
  transition: opacity 0.15s, transform 0.15s;
  pointer-events: none; flex-shrink: 0;
  white-space: nowrap;
}
.menu-pill.open .menu-links {
  opacity: 1; transform: translateX(0);
  pointer-events: auto;
}
.menu-links span {
  font-size: 16px; font-weight: 400;
  color: rgba(255,255,255,0.85);
  cursor: pointer; transition: color 0.15s; line-height: 1;
}
.menu-links span:hover { color: #fff; }

/* Download Button */
.download-btn {
  height: 48px; padding: 0 24px;
  background: #fff; border-radius: 9999px;
  display: flex; align-items: center; gap: 10px;
  color: #000; transition: background 0.15s, transform 0.15s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.download-btn:hover { background: #e2e2e6; transform: scale(1.03); }
.download-btn:active { transform: scale(0.97); }
.download-btn i { font-size: 16px; color: #000; transform: translateY(-1px); }
.download-btn span { font-size: 16px; font-weight: 500; color: #000; line-height: 1; }

/* ── Main Content ── */
#main-content {
  position: relative; width: 100%;
  display: flex; flex-direction: column;
  padding: 80px 2rem 144px;
  z-index: 10; pointer-events: auto;
  opacity: 0;
  transition: opacity 1s ease-out;
}
#main-content.visible { opacity: 1; }

.dot-grid {
  position: absolute; inset: 0;
  background-image: radial-gradient(#fff 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.05; pointer-events: none;
}

/* ── Hero Section ── */
#hero-section {
  position: relative; width: 100%; max-width: 1280px; margin: 0 auto;
  display: flex; flex-direction: column;
  min-height: 80vh;
  justify-content: space-between;
  padding-top: 32px; padding-bottom: 64px;
  transition: opacity 0.1s linear, transform 0.1s linear;
}

.hero-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; width: 100%;
}
.hero-grid-bottom {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; width: 100%; margin-top: auto; padding-top: 48px;
  align-items: end;
}

.hero-title {
  font-weight: 300;
  font-size: clamp(50px, 8vw, 100px);
  color: #fff; line-height: 0.95;
  letter-spacing: -0.03em;
  display: flex; flex-direction: column;
  user-select: none;
}
.hero-title.right { align-items: flex-end; text-align: right; }

.hero-desc {
  max-width: 380px;
  font-size: 15px; color: rgba(255,255,255,0.6);
  line-height: 1.625;
  transition: opacity 0.1s linear, transform 0.1s linear;
}

/* ── Cinematic Paragraph ── */
#cinematic-section {
  position: relative; width: 100%; max-width: 1024px; margin: 0 auto;
  padding: 96px 24px 128px;
  perspective: 400px;
  pointer-events: none;
}
#cinematic-inner {
  transform-style: preserve-3d;
  text-align: center;
  transition: opacity 0.05s linear;
}
#cinematic-inner h2 {
  font-weight: 400;
  font-size: clamp(22px, 3.5vw, 42px);
  color: #fff; line-height: 1.35;
  letter-spacing: -0.02em;
  user-select: none;
  padding: 0 24px;
}

/* ── Stats Section ── */
#stats-section {
  width: 100vw; position: relative;
  margin-left: calc(-50vw + 50%);
  margin-top: 64px;
  overflow: hidden;
  opacity: 0; transform: translateY(40px) scale(0.98);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
#stats-section.revealed { opacity: 1; transform: translateY(0) scale(1); }

.swiper { width: 100%; height: 520px; padding-bottom: 20px !important; overflow: visible !important; }
.swiper-slide { width: 380px; max-width: 85%; height: 480px; background-position: center; background-size: cover; }

.stat-card-outer {
  padding: 6px; border-radius: 28px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  display: flex; flex-direction: column;
  justify-content: space-between; height: 480px;
}
.stat-card-inner {
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(255,255,255,0.05);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-radius: 23px; padding: 32px;
  display: flex; flex-direction: column;
  justify-content: space-between; flex: 1;
}
.stat-title {
  font-family: "Space Mono", monospace;
  font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: #fff; opacity: 0.8;
}
.stat-value {
  font-size: clamp(60px, 6vw, 76px);
  font-weight: 400; letter-spacing: -0.04em;
  color: #fff; line-height: 1;
  margin-top: 24px;
}
.stat-details { display: flex; flex-direction: column; gap: 8px; padding-top: 16px; }
.stat-detail {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 500;
}
.stat-detail .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,0.3);
  margin-top: 4px; flex-shrink: 0;
}
.stat-footer {
  padding: 12px 24px 10px;
  font-family: "Space Mono", monospace;
  font-size: 10px; font-weight: 500;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase; letter-spacing: 0.1em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* ── Mobile ── */
@media (max-width: 639px) {
  #main-header { padding: 0 16px; }
  .desktop-header { display: none !important; }
  .mobile-header { display: flex !important; }
  #main-content { padding: 80px 16px 144px; }
  .hero-grid, .hero-grid-bottom { grid-template-columns: 1fr; }
  .hero-title.right { align-items: flex-start; text-align: left; }
  .hero-desc { font-size: 14px; }
  #cinematic-section { padding: 64px 16px 96px; }
}
@media (min-width: 640px) {
  .mobile-header { display: none !important; }
  .desktop-header { display: flex !important; }
}

/* Mobile header */
.mobile-header {
  align-items: center; justify-content: space-between;
  width: 100%; height: 100%; gap: 8px;
}
.mobile-left {
  display: flex; align-items: center; height: 36px;
  flex-grow: 1; min-width: 0; margin-right: 16px; position: relative;
}

.logo-pill-m {
  height: 36px; padding: 0 12px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  display: flex; align-items: center; gap: 6px;
  cursor: pointer; flex-shrink: 0;
  overflow: hidden; white-space: nowrap;
  transition: width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s, margin-right 0.35s, padding 0.35s;
  width: 108px; margin-right: 6px;
}
.logo-pill-m.collapsed {
  width: 0; opacity: 0; margin-right: 0;
  padding: 0; pointer-events: none;
}
.logo-pill-m svg { width: 14px; height: 14px; color: #fff; flex-shrink: 0; }
.logo-pill-m span { font-size: 13px; font-weight: 500; letter-spacing: -0.02em; color: #fff; line-height: 1; flex-shrink: 0; }

.menu-pill-m {
  height: 36px; width: 36px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  display: flex; align-items: center;
  overflow: hidden; flex-shrink: 0;
  transition: width 0.35s cubic-bezier(0.22,1,0.36,1);
}
.menu-pill-m.open { width: 100%; }

.hamburger-btn-m {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; z-index: 2; transition: all 0.2s;
}
.menu-pill-m.open .hamburger-btn-m {
  width: 28px; height: 28px;
  border-radius: 8px; background: rgba(255,255,255,0.1);
  margin-left: 4px;
}

.hamburger-icon-m { width: 15px; height: 10px; position: relative; }
.hamburger-icon-m span {
  position: absolute; left: 0; width: 15px; height: 1.2px;
  background: #fff; border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
  transform-origin: center;
}
.hamburger-icon-m span:nth-child(1) { top: 0; }
.hamburger-icon-m span:nth-child(2) { top: 4px; }
.hamburger-icon-m span:nth-child(3) { top: 8px; }
.menu-pill-m.open .hamburger-icon-m span:nth-child(1) { transform: translateY(4px) rotate(45deg); }
.menu-pill-m.open .hamburger-icon-m span:nth-child(2) { opacity: 0; transform: scale(0); }
.menu-pill-m.open .hamburger-icon-m span:nth-child(3) { transform: translateY(-4px) rotate(-45deg); }

.menu-links-m {
  display: flex; align-items: center; gap: 14px;
  margin-left: auto; padding-right: 14px;
  opacity: 0; transform: translateX(10px);
  transition: opacity 0.15s, transform 0.15s;
  pointer-events: none; flex-shrink: 0; white-space: nowrap;
}
.menu-pill-m.open .menu-links-m { opacity: 1; transform: translateX(0); pointer-events: auto; }
.menu-links-m span { font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.85); cursor: pointer; transition: color 0.15s; line-height: 1; }
.menu-links-m span:hover { color: #fff; }

.download-btn-m {
  height: 36px; padding: 0 14px;
  background: #fff; border-radius: 9999px;
  display: flex; align-items: center; gap: 6px;
  color: #000; flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;
}
.download-btn-m:hover { background: #e2e2e6; transform: scale(1.03); }
.download-btn-m:active { transform: scale(0.97); }
.download-btn-m i { font-size: 13px; color: #000; transform: translateY(-0.5px); }
.download-btn-m span { font-size: 13px; font-weight: 500; color: #000; line-height: 1; }

/* Scramble text helper */
.scramble-line { display: inline-block; }
</style>
</head>
<body>

<!-- LAYER 0: Background Video -->
<div id="video-layer">
  <video id="bg-video" loop muted playsinline preload="auto"
    src="https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260613_120544_a609e0c2-e52d-4bd5-b10f-b66ac51f1965.mp4">
  </video>
</div>

<!-- LAYER 1: Bottom Blur -->
<div id="bottom-blur"></div>

<!-- HEADER -->
<header id="main-header">
  <!-- Desktop -->
  <div class="desktop-header" style="display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;">
    <div class="header-left">
      <div class="logo-pill" id="logo-pill" onclick="window.scrollTo({top:0,behavior:'smooth'})">
        <svg viewBox="-50 -50 100 100"><g fill="currentColor"><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(90)"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(180)"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(270)"/></g></svg>
        <span>SynapseX</span>
      </div>
      <div class="menu-pill" id="menu-pill">
        <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle Menu">
          <div class="hamburger-icon"><span></span><span></span><span></span></div>
        </button>
        <div class="menu-links">
          <span onclick="window.scrollTo({top:window.innerHeight,behavior:'smooth'});document.getElementById('menu-pill').classList.remove('open')">About</span>
          <span onclick="window.scrollTo({top:window.innerHeight*2,behavior:'smooth'});document.getElementById('menu-pill').classList.remove('open')">Metrics</span>
        </div>
      </div>
    </div>
    <a class="download-btn" href="https://www.instagram.com/dmitriyinin" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-apple"></i>
      <span>Download</span>
    </a>
  </div>

  <!-- Mobile -->
  <div class="mobile-header">
    <div class="mobile-left">
      <div class="logo-pill-m" id="logo-pill-m" onclick="window.scrollTo({top:0,behavior:'smooth'})">
        <svg viewBox="-50 -50 100 100"><g fill="currentColor"><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(90)"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(180)"/><path d="M 1.5,23 L 1.5,33 C 1.5,38.5 6,43 11.5,43 L 16.5,43 C 22,43 26.5,38.5 26.5,33 Q 28,28 33,26.5 C 38.5,26.5 43,22 43,16.5 L 43,11.5 C 43,6 38.5,1.5 33,1.5 L 23,1.5 Q 12,12 1.5,23 Z" transform="rotate(270)"/></g></svg>
        <span>SynapseX</span>
      </div>
      <div class="menu-pill-m" id="menu-pill-m">
        <button class="hamburger-btn-m" id="hamburger-btn-m" aria-label="Toggle Menu Mobile">
          <div class="hamburger-icon-m"><span></span><span></span><span></span></div>
        </button>
        <div class="menu-links-m">
          <span onclick="window.scrollTo({top:window.innerHeight,behavior:'smooth'});closeMobileMenu()">About</span>
          <span onclick="window.scrollTo({top:window.innerHeight*2,behavior:'smooth'});closeMobileMenu()">Metrics</span>
        </div>
      </div>
    </div>
    <a class="download-btn-m" href="https://www.instagram.com/dmitriyinin" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-apple"></i>
      <span>Download</span>
    </a>
  </div>
</header>

<!-- MAIN CONTENT -->
<main id="main-content">
  <div class="dot-grid"></div>

  <!-- SECTION 1: Hero -->
  <div id="hero-section">
    <div style="width:100%;flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:48px;">
      <div class="hero-grid">
        <div style="text-align:left;">
          <div class="hero-title">
            <span class="scramble-line" data-scramble-in data-text="Brain" data-delay="100">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="scramble-line" data-scramble-in data-text="And Body" data-delay="300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <div></div>
      </div>

      <div class="hero-grid-bottom">
        <div class="hero-desc" id="hero-desc">
          <p>Built at the intersection of neuroscience and artificial intelligence. SynapseX continuously maps neural pathways, cognitive load, and physiological states into a single adaptive intelligence layer.</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;text-align:right;">
          <div class="hero-title right">
            <span class="scramble-line" data-scramble-in data-text="One" data-delay="200">&nbsp;&nbsp;&nbsp;</span>
            <span class="scramble-line" data-scramble-in data-text="Network" data-delay="400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 1.5: Cinematic Parallax Paragraph -->
  <div id="cinematic-section">
    <div id="cinematic-inner">
      <h2>A neural-AI interface built on the architecture of the human nervous system. SynapseX translates synaptic activity into computational intelligence. Every signal becomes measurable, structured, and visible. It continuously reconstructs internal state as a dynamic neural map. Biological noise is filtered into actionable cognitive patterns.</h2>
    </div>
  </div>

  <!-- SECTION 2: Stats Carousel -->
  <div id="stats-section">
    <div class="swiper" id="stats-swiper">
      <div class="swiper-wrapper" id="swiper-wrapper"></div>
    </div>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
(function() {
  "use strict";

  // ── Constants ──
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><";
  const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260613_120544_a609e0c2-e52d-4bd5-b10f-b66ac51f1965.mp4";

  const statsData = [
    { title: "NEURAL ACTIVITY", value: "7.2M", footer: "LIVE SIGNALS INTERPRETED", details: ["Continuous temporal synapsing","1024 parallel telemetry streams","Dynamic feed classification active"] },
    { title: "PREDICTIVE MODEL", value: "93%", footer: "FORECAST ACCURACY RATE", details: ["Reinforced gradient mapping","Low latency neural resolution","Adaptive signal feedback system"] },
    { title: "EPOCH LATENCY", value: "0.4ms", footer: "CYCLE RESPONSE SPEED", details: ["Hardware accelerated pipeline","Direct metal shader execution","Temporal synchronization loop"] },
    { title: "COGNITIVE STREAMS", value: "14.8M", footer: "REAL-TIME MODEL COHERENCE", details: ["Distributed synapse projection","High-fidelity entropy filtering","Sub-millisecond state coherence"] },
    { title: "SYNAPSE DEPTH", value: "128L", footer: "MODEL RESOLUTION DEPTH", details: ["Deep feed-forward mapping","Transformer-based neural routing","Multi-dimensional pattern projection"] },
    { title: "SIGNAL INTEGRITY", value: "99.9%", footer: "NOISE REDUCTION RATIO", details: ["Advanced wave-let filtering","Dynamic heuristic balancing","Contextual signal amplification"] }
  ];

  // ── State ──
  let scrollProgress = 0;
  let smoothScrollProgress = 0;
  let entrancePhase = "loading"; // loading | animating | complete
  let entranceStart = 0;
  let videoReady = false;

  // ── Elements ──
  const video = document.getElementById("bg-video");
  const header = document.getElementById("main-header");
  const mainContent = document.getElementById("main-content");
  const heroSection = document.getElementById("hero-section");
  const heroDesc = document.getElementById("hero-desc");
  const cinematicInner = document.getElementById("cinematic-inner");
  const statsSection = document.getElementById("stats-section");

  // ── Build Stats Cards ──
  const wrapper = document.getElementById("swiper-wrapper");
  statsData.forEach(card => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="stat-card-outer">
        <div class="stat-card-inner">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <span class="stat-title">${card.title}</span>
            </div>
            <div class="stat-value">${card.value}</div>
          </div>
          <div class="stat-details">
            ${card.details.map(d => `<div class="stat-detail"><span class="dot"></span><span>${d}</span></div>`).join("")}
          </div>
        </div>
        <div class="stat-footer">${card.footer}</div>
      </div>`;
    wrapper.appendChild(slide);
  });

  // ── Swiper Init ──
  new Swiper("#stats-swiper", {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 32,
    coverflowEffect: { rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false },
    observer: true,
    observeParents: true
  });

  // ── Hamburger Menus ──
  document.getElementById("hamburger-btn").addEventListener("click", () => {
    document.getElementById("menu-pill").classList.toggle("open");
  });
  document.getElementById("hamburger-btn-m").addEventListener("click", () => {
    const pill = document.getElementById("menu-pill-m");
    const logo = document.getElementById("logo-pill-m");
    pill.classList.toggle("open");
    logo.classList.toggle("collapsed", pill.classList.contains("open"));
  });
  window.closeMobileMenu = function() {
    document.getElementById("menu-pill-m").classList.remove("open");
    document.getElementById("logo-pill-m").classList.remove("collapsed");
  };

  // ── Scroll Tracking ──
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight <= 0) return;
    scrollProgress = scrollTop / scrollHeight;
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // ── Lenis (Desktop only) ──
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

  if (!isMobile) {
    const lenisScript = document.createElement("script");
    lenisScript.src = "https://unpkg.com/lenis@1.1.18/dist/lenis.min.js";
    lenisScript.onload = function() {
      const lenis = new Lenis({
        duration: 1.2,
        easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5
      });
      lenis.on("scroll", updateScrollProgress);
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    };
    document.head.appendChild(lenisScript);
  }

  // ── ScrambleIn System ──
  const scrambleEls = document.querySelectorAll("[data-scramble-in]");
  const scrambleStates = [];

  scrambleEls.forEach(el => {
    const text = el.getAttribute("data-text");
    const delay = parseInt(el.getAttribute("data-delay") || "0", 10);
    scrambleStates.push({
      el, text, delay,
      phase: "idle", // idle | scrambling-in | revealed | scrambling-out | hidden
      progress: 0, lastTime: 0, started: false
    });
  });

  function updateScrambles(now) {
    const scrollActive = scrollProgress > 0.015;

    scrambleStates.forEach(s => {
      if (!videoReady && s.phase === "idle") return;

      if (videoReady && s.phase === "idle" && !scrollActive && !s.started) {
        s.started = true;
        setTimeout(() => {
          s.phase = "scrambling-in";
          s.progress = 0;
          s.lastTime = now;
        }, s.delay);
        return;
      }

      if (scrollActive && (s.phase === "revealed" || s.phase === "scrambling-in")) {
        s.phase = "scrambling-out";
        s.progress = 0;
        s.lastTime = now;
      } else if (!scrollActive && (s.phase === "hidden" || s.phase === "scrambling-out")) {
        s.phase = "scrambling-in";
        s.progress = 0;
        s.lastTime = now;
      }

      if (s.phase === "scrambling-in") {
        const duration = 900;
        s.progress = Math.min(1, s.progress + (now - s.lastTime) / duration);
        s.lastTime = now;
        const t = s.progress;

        let result = "";
        for (let i = 0; i < s.text.length; i++) {
          if (s.text[i] === " ") { result += " "; continue; }
          const threshold = i / s.text.length;
          if (t >= threshold + 0.15) result += s.text[i];
          else if (t >= threshold - 0.1) result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          else result += "\u00A0";
        }
        s.el.textContent = result;
        s.el.style.opacity = "1";

        if (t >= 1) { s.phase = "revealed"; s.el.textContent = s.text; }
      } else if (s.phase === "scrambling-out") {
        const duration = 700;
        s.progress = Math.min(1, s.progress + (now - s.lastTime) / duration);
        s.lastTime = now;
        const t = s.progress;

        let result = "";
        for (let i = 0; i < s.text.length; i++) {
          if (s.text[i] === " ") { result += " "; continue; }
          const threshold = i / s.text.length;
          if (t >= threshold + 0.2) result += "\u00A0";
          else if (t >= threshold - 0.05) result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          else result += s.text[i];
        }
        s.el.textContent = result;
        s.el.style.opacity = String(Math.max(0, 1 - t * 1.5));

        if (t >= 1) {
          s.phase = "hidden";
          s.el.textContent = s.text.replace(/\S/g, "\u00A0");
          s.el.style.opacity = "0";
        }
      }
    });
  }

  // ── Stats Reveal on Scroll ──
  let statsRevealed = false;
  function checkStatsReveal() {
    if (statsRevealed) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      statsRevealed = true;
      statsSection.classList.add("revealed");
    }
  }
  window.addEventListener("scroll", checkStatsReveal, { passive: true });

  // ── Main Animation Loop ──
  let isSeeking = false;
  let nextSeekTime = null;

  video.addEventListener("seeking", () => { isSeeking = true; });
  video.addEventListener("seeked", () => {
    isSeeking = false;
    if (nextSeekTime !== null) {
      const t = nextSeekTime; nextSeekTime = null;
      if (video.readyState >= 1 && video.duration > 0) { isSeeking = true; video.currentTime = t; }
    }
  });
  video.addEventListener("loadedmetadata", () => { video.autoplay = false; video.pause(); });
  video.autoplay = false;
  video.pause();

  // Safety timeout
  setTimeout(() => {
    if (entrancePhase === "loading") {
      entrancePhase = "animating";
      entranceStart = performance.now();
    }
  }, 3500);

  function tick(now) {
    // ── Smooth scroll interpolation ──
    smoothScrollProgress += (scrollProgress - smoothScrollProgress) * 0.12;
    if (Math.abs(scrollProgress - smoothScrollProgress) < 0.0001) smoothScrollProgress = scrollProgress;

    // ── Video blur + scale ──
    const subtleBase = Math.max(0, Math.min(1, (smoothScrollProgress - 0.1) / 0.45));
    const progressive = Math.max(0, Math.min(1, (smoothScrollProgress - 0.55) / 0.4));
    const blurVal = subtleBase * 5 + progressive * 50;
    const scaleVal = 1.03 + Math.max(0, Math.min(1, (smoothScrollProgress - 0.1) / 0.9)) * 0.08;

    // ── Video entrance ──
    let entranceZoom = 1.0;
    let entranceOpacity = 1.0;

    if (entrancePhase === "loading") {
      entranceZoom = 1.12;
      entranceOpacity = 0;
      if (video.readyState >= 3) {
        entrancePhase = "animating";
        entranceStart = performance.now();
      }
    }

    if (entrancePhase === "animating") {
      const elapsed = now - entranceStart;
      const progress = Math.min(1, elapsed / 1400);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      entranceZoom = 1.12 - 0.12 * easeOut;
      entranceOpacity = Math.min(1.0, elapsed / 500);

      if (progress >= 1) {
        entrancePhase = "complete";
        videoReady = true;
        header.classList.add("visible");
        mainContent.classList.add("visible");
      }
    }

    if (entrancePhase === "complete" && !videoReady) {
      videoReady = true;
      header.classList.add("visible");
      mainContent.classList.add("visible");
    }

    // Apply video styles
    video.style.filter = `blur(${blurVal}px)`;
    video.style.transform = `scale(${scaleVal * entranceZoom})`;
    video.style.opacity = String(entranceOpacity);

    // ── Video seek ──
    if (video.readyState >= 1 && video.duration > 0) {
      const targetTime = Math.max(0, Math.min(video.duration, smoothScrollProgress * video.duration));
      if (Math.abs(video.currentTime - targetTime) > 0.008) {
        if (!isSeeking && !video.seeking) { isSeeking = true; video.currentTime = targetTime; }
        else { nextSeekTime = targetTime; }
      }
    }

    // ── Hero section parallax ──
    const scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollYNorm = scrollH > 0 ? (window.scrollY / scrollH) : 0;

    // Hero fade
    const heroOp = Math.max(0, Math.min(1, 1 - scrollYNorm / 0.26));
    const heroSc = 1 - (1 - 0.96) * Math.min(1, scrollYNorm / 0.26);
    heroSection.style.opacity = String(heroOp);
    heroSection.style.transform = `scale(${heroSc})`;

    // Desc fade
    const descOp = Math.max(0, Math.min(1, 1 - scrollYNorm / 0.12));
    const descYval = -30 * Math.min(1, scrollYNorm / 0.12);
    heroDesc.style.opacity = String(descOp);
    heroDesc.style.transform = `translateY(${descYval}px)`;

    // ── Cinematic paragraph ──
    const scrollPx = window.scrollY;
    const yVal = -120 * Math.min(1, scrollPx / 1000);

    // Opacity keyframes: [0.08, 0.22, 0.42, 0.65] -> [0, 1, 1, 0]
    let cinOp = 0;
    if (scrollYNorm <= 0.08) cinOp = 0;
    else if (scrollYNorm <= 0.22) cinOp = (scrollYNorm - 0.08) / (0.22 - 0.08);
    else if (scrollYNorm <= 0.42) cinOp = 1;
    else if (scrollYNorm <= 0.65) cinOp = 1 - (scrollYNorm - 0.42) / (0.65 - 0.42);
    else cinOp = 0;

    cinematicInner.style.transform = `rotateX(24deg) translateY(${yVal}px) translateZ(15px)`;
    cinematicInner.style.opacity = String(Math.max(0, Math.min(1, cinOp)));

    // ── ScrambleIn updates ──
    updateScrambles(now);

    // ── Hero desc entrance ──
    if (videoReady && !heroDesc._entered) {
      heroDesc._entered = true;
      heroDesc.style.transition = "opacity 0.9s cubic-bezier(0.215,0.61,0.355,1) 0.2s, transform 0.9s cubic-bezier(0.215,0.61,0.355,1) 0.2s";
      heroDesc.style.opacity = "1";
      heroDesc.style.transform = "translateY(0)";
    }

    requestAnimationFrame(tick);
  }

  // Set initial desc state
  heroDesc.style.opacity = "0";
  heroDesc.style.transform = "translateY(25px)";

  requestAnimationFrame(tick);
  checkStatsReveal();
})();
</script>
</body>
</html>
