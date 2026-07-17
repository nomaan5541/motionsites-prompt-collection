<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Auren — Your car. Its mind.</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --font-sans: "Inter Tight", Arial, Helvetica, sans-serif;
  --font-orbitron: "Orbitron", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --hero-heading-size: clamp(40px, 8.16vw, 120px);
  --hero-pad-left: clamp(20px, 2.72vw, 40px);
  --hero-pad-bottom: clamp(28px, 7.7vh, 64px);
  --hero-block-width: clamp(300px, 54.6vw, 803px);
  --hero-gap: clamp(8px, 1.1vw, 16px);

  --hero-media-w: clamp(140px, 13.13vw, 193px);
  --hero-media-aspect: 193 / 108;
  --hero-logo-w: clamp(30px, 2.72vw, 40px);
  --hero-logo-aspect: 40 / 14;
  --hero-logo-left: calc(50% - var(--hero-media-w) / 2 - var(--hero-logo-w));
  --hero-logo-top: calc(
    50% - (var(--hero-media-w) / (var(--hero-media-aspect))) / 2 -
      (var(--hero-logo-w) / (var(--hero-logo-aspect))) +
      var(--hero-center-shift, 0px)
  );
  --hero-title-offset-x: clamp(40px, 6.6vw, 97px);
  --hero-title-offset-y: clamp(28px, 6.5vh, 54px);
  --hero-title-size: clamp(30px, 5.44vw, 80px);
  --hero-title-width: clamp(220px, 34.4vw, 506px);
  --hero-desc-width: clamp(220px, 25.65vw, 377px);
  --hero-title-left: calc(50% + var(--hero-title-offset-x));
  --hero-title-top: calc(50% + var(--hero-title-offset-y));
  --hero-title-align: left;

  --header-pad-x: clamp(20px, 2.72vw, 40px);
  --header-pad-y: clamp(16px, 2.18vw, 32px);

  --story-word-size: clamp(48px, 9vw, 168px);
  --story-block-width: clamp(300px, 42vw, 560px);
}

html, body {
  margin: 0;
  padding: 0;
  background: #0c0d0f;
  color: #f0f1f3;
  font-family: var(--font-sans);
}
body { overflow-x: hidden; }

/* --- Header --- */
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--header-pad-y) var(--header-pad-x) 0;
}
.glass-pill {
  border-radius: 8px;
  background: rgba(240,241,243,0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.header-logo { display: flex; align-items: center; padding: 4px 16px; }
.header-right { display: flex; align-items: center; gap: 16px; }
.header-nav { display: flex; align-items: center; gap: 12px; padding: 9px 16px; }
.header-nav span {
  font-size: 14px; font-weight: 400; line-height: 1;
  letter-spacing: -0.02em; color: #F0F1F3; text-align: center;
}
.header-menu { display: flex; align-items: center; padding: 4px 16px; cursor: pointer; border: none; background: none; }
.header-login {
  display: flex; align-items: center; border-radius: 8px;
  background: #F0F1F3; padding: 9px 16px; border: none; cursor: pointer;
}
.header-login span { font-size: 14px; line-height: 1; letter-spacing: -0.02em; color: #0C0D0F; }

@media (max-width: 640px) {
  .header-nav { display: none; }
}

/* --- Hero --- */
.hero {
  position: relative; width: 100%; overflow: hidden;
  height: 100dvh;
  background: linear-gradient(180deg, #03070A 0%, #AAC2CE 100%);
}

.hero-corner-logo {
  position: absolute; z-index: 10; pointer-events: none;
  width: var(--hero-logo-w);
  aspect-ratio: var(--hero-logo-aspect);
  left: var(--hero-logo-left);
  top: var(--hero-logo-top);
  transform-origin: center;
  will-change: transform, opacity, filter;
}
.hero-corner-logo svg { width: 100%; height: 100%; }

.hero-textblock { display: contents; }

.hero-title {
  position: absolute; z-index: 10; pointer-events: none; margin: 0;
  font-family: var(--font-orbitron); font-weight: 400;
  text-transform: uppercase; line-height: 100%; letter-spacing: -0.04em;
  color: #F0F1F3; font-size: var(--hero-title-size);
  left: var(--hero-title-left); top: var(--hero-title-top);
  width: var(--hero-title-width);
  text-align: var(--hero-title-align);
  transform-origin: center;
  will-change: transform, opacity, filter;
}

.hero-description {
  position: absolute; z-index: 10; pointer-events: none;
  font-size: 14px; font-weight: 500; line-height: 1.3;
  letter-spacing: -0.02em; color: #F0F1F3;
  left: var(--hero-pad-left); top: var(--hero-logo-top);
  width: var(--hero-desc-width);
  will-change: opacity;
}

.hero-email {
  position: absolute; z-index: 10;
  display: flex; flex-direction: column; gap: 13px;
  left: var(--hero-pad-left); bottom: var(--header-pad-y);
  will-change: opacity;
}
.hero-email form { display: flex; align-items: center; }
.hero-email input {
  height: 32px; width: 185px; border-radius: 8px;
  background: rgba(240,241,243,0.15); backdrop-filter: blur(10px);
  padding: 9px 16px; font-size: 14px; line-height: 1;
  letter-spacing: -0.02em; color: #F0F1F3; border: none; outline: none;
}
.hero-email input::placeholder { color: rgba(240,241,243,0.7); }
.hero-email button[type="submit"] {
  height: 32px; display: flex; align-items: center;
  border-radius: 8px; background: #F0F1F3; padding: 9px 16px;
  font-size: 14px; line-height: 1; letter-spacing: -0.02em;
  color: #0C0D0F; border: none; cursor: pointer;
  transition: transform 0.15s ease-out;
}
.hero-email button[type="submit"]:active { transform: scale(0.97); }
.hero-email .caption {
  max-width: 628px; font-size: 14px; line-height: 1.3;
  letter-spacing: -0.02em; color: rgba(240,241,243,0.8);
}

.hero-video-slot {
  position: absolute; pointer-events: none; visibility: hidden;
  width: var(--hero-media-w); aspect-ratio: var(--hero-media-aspect);
  left: calc(50% - var(--hero-media-w) / 2);
  top: calc(50% - (var(--hero-media-w) / (var(--hero-media-aspect))) / 2 + var(--hero-center-shift, 0px));
}

.hero-media-wrapper {
  position: absolute; z-index: 20; pointer-events: none;
  overflow: hidden; background: rgba(0,0,0,0.4);
  top: 0; left: 0;
  width: var(--hero-media-w); aspect-ratio: var(--hero-media-aspect);
  border-radius: 12px; opacity: 0;
  will-change: top, left, width, height, border-radius;
}
.hero-media-wrapper video { width: 100%; height: 100%; object-fit: cover; }

.story-scrim {
  position: absolute; inset: 0; z-index: 25;
  pointer-events: none; opacity: 0;
  background: linear-gradient(180deg, rgba(12,13,15,0.72) 0%, rgba(12,13,15,0.15) 32%, rgba(12,13,15,0.15) 62%, rgba(12,13,15,0.78) 100%);
}

.story-beat {
  position: absolute; inset: 0; z-index: 30;
  pointer-events: none; display: flex;
  align-items: center; justify-content: center;
  perspective: 1000px;
}
.story-word {
  font-family: var(--font-orbitron); font-weight: 400;
  text-align: center; text-transform: uppercase;
  line-height: 0.9; letter-spacing: -0.04em;
  color: #F0F1F3; font-size: var(--story-word-size);
  opacity: 0; will-change: transform, opacity, filter;
}

.feature-caption {
  position: absolute; z-index: 30; pointer-events: none;
  display: flex; flex-direction: column; align-items: flex-start;
  gap: 19px; opacity: 0;
  left: var(--hero-pad-left); bottom: 40px;
  width: min(377px, calc(100% - 2 * var(--hero-pad-left)));
  will-change: transform, opacity;
}
.feature-caption .dot {
  width: 16px; height: 16px; border-radius: 50%; background: #fff;
}
.feature-caption p {
  width: 100%; font-size: 14px; font-weight: 500;
  line-height: 1.3; letter-spacing: -0.02em; color: #fff;
}

.waveform-container, .route-container {
  position: absolute; inset: 0; z-index: 30;
  pointer-events: none; display: flex;
  align-items: center; justify-content: center;
  opacity: 0; will-change: transform, opacity;
}
.waveform-container svg, .route-container svg {
  height: auto; width: var(--story-block-width);
}

/* --- Mobile --- */
@media (max-width: 640px) {
  :root {
    --hero-pad-left: 16px;
    --header-pad-x: 16px;
    --hero-title-align: center;
    --hero-center-shift: -80px;
    --hero-title-width: 100%;
    --hero-desc-width: 100%;
    --story-word-size: clamp(30px, 11vw, 60px);
    --story-block-width: min(560px, calc(100vw - 32px));
  }
  .hero-textblock {
    position: absolute;
    top: calc(50% + (var(--hero-media-w) / (var(--hero-media-aspect))) / 2 + 32px + var(--hero-center-shift, 0px));
    left: 16px; right: 16px; z-index: 10;
    display: flex; flex-direction: column; gap: 20px;
  }
  .hero-textblock > * { position: static; inset: auto; }
  .hero-email { right: 16px; }
  .hero-email input { width: auto; flex: 1; }
}
</style>
</head>
<body>

<!-- ===== HEADER ===== -->
<header class="header">
  <div class="glass-pill header-logo">
    <svg width="98" height="24" viewBox="0 0 98 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27 5C34.5425 5 38.3141 4.99987 40.6572 5.81997C43.0004 6.64007 43 7.96014 43 10.6V13.4C43 16.0399 43.0004 17.3599 40.6572 18.18C38.3141 19.0001 34.5425 19 27 19H19C11.4575 19 7.68592 19.0001 5.34277 18.18C2.99963 17.3599 3 16.0399 3 13.4V10.6C3 7.96014 2.99963 6.64007 5.34277 5.81997C7.68592 4.99987 11.4575 5 19 5H27ZM23 9.9C19.6863 9.9 17 10.8402 17 12C17 13.1598 19.6863 14.1 23 14.1C26.3137 14.1 29 13.1598 29 12C29 10.8402 26.3137 9.9 23 9.9Z" fill="#F0F1F3"/>
      <path d="M50 17.04V8.85C50 8.50467 50.084 8.18733 50.252 7.898C50.42 7.60867 50.6487 7.38 50.938 7.212C51.2273 7.044 51.5447 6.96 51.89 6.96H58.19C58.5353 6.96 58.848 7.044 59.128 7.212C59.4173 7.38 59.646 7.60867 59.814 7.898C59.9913 8.18733 60.08 8.50467 60.08 8.85V17.04H58.386V13.582H51.68V17.04H50ZM51.68 11.902H58.386V8.906C58.386 8.83133 58.358 8.77067 58.302 8.724C58.2553 8.67733 58.1993 8.654 58.134 8.654H51.932C51.8667 8.654 51.806 8.67733 51.75 8.724C51.7033 8.77067 51.68 8.83133 51.68 8.906V11.902Z" fill="#F0F1F3"/>
      <path d="M62.9491 17.04C62.6038 17.04 62.2865 16.956 61.9971 16.788C61.7171 16.6107 61.4931 16.382 61.3251 16.102C61.1571 15.822 61.0731 15.5093 61.0731 15.164V8.92H62.7391V15.108C62.7391 15.1827 62.7625 15.248 62.8091 15.304C62.8651 15.3507 62.9305 15.374 63.0051 15.374H67.3871C67.4618 15.374 67.5225 15.3507 67.5691 15.304C67.6251 15.248 67.6531 15.1827 67.6531 15.108V8.92H69.3191V15.164C69.3191 15.5093 69.2351 15.822 69.0671 16.102C68.8991 16.382 68.6751 16.6107 68.3951 16.788C68.1151 16.956 67.7978 17.04 67.4431 17.04H62.9491Z" fill="#F0F1F3"/>
      <path d="M70.2335 17.04V10.796C70.2335 10.4507 70.3175 10.138 70.4855 9.858C70.6628 9.578 70.8915 9.354 71.1715 9.186C71.4608 9.00867 71.7735 8.92 72.1095 8.92H76.6315V10.586H72.1655C72.0908 10.586 72.0255 10.614 71.9695 10.67C71.9228 10.7167 71.8995 10.7773 71.8995 10.852V17.04H70.2335Z" fill="#F0F1F3"/>
      <path d="M78.8636 17.04C78.5183 17.04 78.2056 16.956 77.9256 16.788C77.6456 16.6107 77.417 16.382 77.2396 16.102C77.0716 15.822 76.9876 15.5093 76.9876 15.164V10.796C76.9876 10.4507 77.0716 10.138 77.2396 9.858C77.417 9.578 77.6456 9.354 77.9256 9.186C78.2056 9.00867 78.5183 8.92 78.8636 8.92H83.3576C83.7123 8.92 84.0296 9.00867 84.3096 9.186C84.5896 9.354 84.8136 9.578 84.9816 9.858C85.1496 10.138 85.2336 10.4507 85.2336 10.796V13.82H78.6536V15.108C78.6536 15.1827 78.677 15.248 78.7236 15.304C78.7796 15.3507 78.845 15.374 78.9196 15.374H85.2336V17.04H78.8636ZM78.6536 12.294H83.5676V10.852C83.5676 10.7773 83.5396 10.7167 83.4836 10.67C83.437 10.614 83.3763 10.586 83.3016 10.586H78.9196C78.845 10.586 78.7796 10.614 78.7236 10.67C78.677 10.7167 78.6536 10.7773 78.6536 10.852V12.294Z" fill="#F0F1F3"/>
      <path d="M86.163 17.04V8.92H92.547C92.883 8.92 93.191 9.00867 93.471 9.186C93.7603 9.354 93.989 9.578 94.157 9.858C94.325 10.138 94.409 10.4507 94.409 10.796V17.04H92.743V10.852C92.743 10.7773 92.715 10.7167 92.659 10.67C92.6123 10.614 92.5563 10.586 92.491 10.586H88.095C88.0296 10.586 87.969 10.614 87.913 10.67C87.857 10.7167 87.829 10.7773 87.829 10.852V17.04H86.163Z" fill="#F0F1F3"/>
    </svg>
  </div>
  <div class="header-right">
    <div style="display:flex;align-items:center">
      <div class="glass-pill header-nav">
        <span>Service</span><span>About</span><span>Contact</span>
      </div>
      <button class="glass-pill header-menu" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 9H21.75V10.5H7.5V9Z" fill="#F0F1F3"/>
          <path d="M2.25 13.5H21.75V15H2.25V13.5Z" fill="#F0F1F3"/>
        </svg>
      </button>
    </div>
    <button class="header-login"><span>Log In</span></button>
  </div>
</header>

<!-- ===== HERO ===== -->
<section class="hero" id="hero">
  <!-- Corner Logo -->
  <div class="hero-corner-logo" id="cornerLogo" aria-hidden="true">
    <svg viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C31.5425 0 35.3141 -0.000130236 37.6572 0.819971C40.0004 1.64007 40 2.96014 40 5.6V8.4C40 11.0399 40.0004 12.3599 37.6572 13.18C35.3141 14.0001 31.5425 14 24 14H16C8.45753 14 4.68592 14.0001 2.34277 13.18C-0.000371695 12.3599 0 11.0399 0 8.4V5.6C0 2.96014 -0.000371933 1.64007 2.34277 0.819971C4.68592 -0.000130117 8.45753 0 16 0H24ZM20 4.9C16.6863 4.9 14 5.8402 14 7C14 8.1598 16.6863 9.1 20 9.1C23.3137 9.1 26 8.1598 26 7C26 5.8402 23.3137 4.9 20 4.9Z" fill="#F0F1F3"/>
    </svg>
  </div>

  <!-- Text Block (title + description) -->
  <div class="hero-textblock">
    <h1 class="hero-title" id="heroTitle">Hands<br>Off.</h1>
    <p class="hero-description" id="heroDesc">A private AI driver that learns the way you move — your routes, your routine, your time of day. It settles into the car you already drive and quietly takes the wheel, so less of every trip depends on you.</p>
  </div>

  <!-- Email Capture -->
  <div class="hero-email" id="heroEmail">
    <form onsubmit="event.preventDefault()">
      <input type="email" placeholder="Email" aria-label="Email" />
      <button type="submit">Send</button>
    </form>
    <p class="caption">Join the waitlist and be first to let your car do the driving. No spam, just the road ahead.</p>
  </div>

  <!-- Feature Captions -->
  <div class="feature-caption" id="caption1">
    <span class="dot"></span>
    <p>Just speak. Ask for a warmer cabin, a quieter route, a stop for coffee — the car listens and takes care of the rest while you ride.</p>
  </div>
  <div class="feature-caption" id="caption2">
    <span class="dot"></span>
    <p>Drop a few points on the map and it strings them together — every turn, every stop, driven in order while you sit back and watch.</p>
  </div>

  <!-- Video Slot (invisible measurement) -->
  <div class="hero-video-slot" id="videoSlot" aria-hidden="true"></div>

  <!-- Video -->
  <div class="hero-media-wrapper" id="mediaWrapper">
    <video id="heroVideo" muted playsinline preload="auto" crossorigin="anonymous"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260709_102332_2d8c4e02-313c-4362-aaa7-4c907cfc4f79.mp4">
    </video>
  </div>

  <!-- Scroll Story -->
  <div class="story-scrim" data-story="scrim" aria-hidden="true"></div>
  <div class="story-beat"><span class="story-word" data-story="beat1-word">Effortless.</span></div>
  <div class="story-beat"><span class="story-word" data-story="beat2-word">Anywhere.</span></div>

  <!-- Voice Waveform -->
  <div class="waveform-container" id="waveform" aria-hidden="true"></div>

  <!-- Route Checkpoints -->
  <div class="route-container" id="routeViz" aria-hidden="true">
    <svg viewBox="0 0 620 240" fill="none">
      <path data-route-path d="M 40 170 C 160 170 210 84 310 84 C 410 84 460 170 580 170" stroke="#F0F1F3" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <g data-checkpoint style="opacity:0">
        <circle cx="40" cy="170" r="26" fill="#F0F1F3"/>
        <path d="M 30 171 L 37 178 L 51 163" stroke="#0C0D0F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <g data-checkpoint style="opacity:0">
        <circle cx="310" cy="84" r="26" fill="#F0F1F3"/>
        <path d="M 300 85 L 307 92 L 321 77" stroke="#0C0D0F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <g data-checkpoint style="opacity:0">
        <circle cx="580" cy="170" r="26" fill="#F0F1F3"/>
        <path d="M 570 171 L 577 178 L 591 163" stroke="#0C0D0F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
    </svg>
  </div>
</section>

<script>
(function() {
  // Generate waveform SVG
  var BAR_COUNT = 27, VIEW_W = 600, VIEW_H = 200, BAR_W = 8;
  var GAP = (VIEW_W - BAR_COUNT * BAR_W) / (BAR_COUNT - 1);
  var MAX_BAR_H = VIEW_H * 0.9;
  var ns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 " + VIEW_W + " " + VIEW_H);
  svg.setAttribute("fill", "none");
  for (var i = 0; i < BAR_COUNT; i++) {
    var t = i / (BAR_COUNT - 1);
    var bell = Math.sin(t * Math.PI);
    var h = (0.18 + 0.82 * bell) * MAX_BAR_H;
    var x = i * (BAR_W + GAP);
    var y = (VIEW_H - h) / 2;
    var rect = document.createElementNS(ns, "rect");
    rect.setAttribute("data-bar", "");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", BAR_W);
    rect.setAttribute("height", h);
    rect.setAttribute("rx", BAR_W / 2);
    rect.setAttribute("fill", "#F0F1F3");
    rect.style.transformBox = "fill-box";
    rect.style.transformOrigin = "center";
    rect.style.transform = "scaleY(0)";
    svg.appendChild(rect);
  }
  document.getElementById("waveform").appendChild(svg);

  // Refs
  var section = document.getElementById("hero");
  var media = document.getElementById("mediaWrapper");
  var title = document.getElementById("heroTitle");
  var cornerLogo = document.getElementById("cornerLogo");
  var description = document.getElementById("heroDesc");
  var emailBlock = document.getElementById("heroEmail");
  var caption1 = document.getElementById("caption1");
  var caption2 = document.getElementById("caption2");
  var waveform = document.getElementById("waveform");
  var route = document.getElementById("routeViz");
  var video = document.getElementById("heroVideo");
  var slot = document.getElementById("videoSlot");

  // Show first frame
  function showFirstFrame() {
    try { video.pause(); if (video.currentTime < 0.001) video.currentTime = 0.001; } catch(e) {}
  }
  video.addEventListener("loadedmetadata", showFirstFrame);
  if (video.readyState >= 1) showFirstFrame();

  // Constants
  var EXPAND_VH = 160, CONTENT_VH = 1040, MAX_BLUR = 24;
  var FULLSCREEN_INSET = 0, FULLSCREEN_RADIUS = 16;

  var expandFraction = EXPAND_VH / (EXPAND_VH + CONTENT_VH);
  var B = 1 - expandFraction;
  function at(local) { return expandFraction + local * B; }
  function dur(span) { return span * B; }

  function startRect() {
    var s = section.getBoundingClientRect();
    var r = slot.getBoundingClientRect();
    return { top: r.top - s.top, left: r.left - s.left, width: r.width, height: r.height };
  }
  function endRect() {
    var s = section.getBoundingClientRect();
    var i = FULLSCREEN_INSET;
    return { top: i, left: i, width: s.width - i * 2, height: s.height - i * 2 };
  }

  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia(section);
  mm.add(
    { motionOK: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" },
    function(context) {
      var reduced = !!context.conditions.reduced;
      var blurProxy = { v: 0 };

      var scrim = section.querySelector('[data-story="scrim"]');
      var word1El = section.querySelector('[data-story="beat1-word"]');
      var word2El = section.querySelector('[data-story="beat2-word"]');
      var bars = Array.from(section.querySelectorAll("[data-bar]"));
      var routePath = section.querySelector("[data-route-path]");
      var checkpoints = Array.from(section.querySelectorAll("[data-checkpoint]"));

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=" + (EXPAND_VH + CONTENT_VH) + "%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: function() {
            gsap.set([media, title, cornerLogo, description, emailBlock, word1El, word2El, caption1, caption2, waveform, route], { willChange: "auto" });
          },
          onLeaveBack: function() {
            gsap.set([media, title, cornerLogo, description, emailBlock, word1El, word2El, caption1, caption2, waveform, route], { willChange: "auto" });
          }
        }
      });

      // Phase A: expand
      tl.fromTo(media,
        { top: function(){return startRect().top}, left: function(){return startRect().left}, width: function(){return startRect().width}, height: function(){return startRect().height}, borderRadius: 12, opacity: 1 },
        { top: function(){return endRect().top}, left: function(){return endRect().left}, width: function(){return endRect().width}, height: function(){return endRect().height}, borderRadius: FULLSCREEN_RADIUS, opacity: 1, ease: "none", duration: expandFraction, immediateRender: true },
        0
      );

      gsap.set([title, cornerLogo], { transformOrigin: "center" });
      tl.to([title, cornerLogo], { opacity: 0, scale: reduced ? 1 : 0.82, ease: "none", duration: expandFraction }, 0);
      tl.to(blurProxy, {
        v: reduced ? 0 : MAX_BLUR, ease: "none", duration: expandFraction,
        onUpdate: function() {
          var b = "blur(" + blurProxy.v + "px)";
          title.style.filter = b;
          cornerLogo.style.filter = b;
        }
      }, 0);
      tl.to([description, emailBlock], { opacity: 0, ease: "none", duration: expandFraction }, 0);

      // Phase B: video scrub
      tl.to({}, {
        duration: B, ease: "none",
        onUpdate: function() {
          var p = this.progress();
          var d = video.duration;
          if (!d || isNaN(d)) return;
          if (video.readyState >= 2) {
            if (!video.paused) video.pause();
            var target = p * d;
            if (Math.abs(video.currentTime - target) > 0.03) video.currentTime = target;
          } else if (video.paused) {
            video.play().catch(function(){});
          }
        }
      }, expandFraction);

      // Scrim
      tl.to(scrim, { opacity: 1, ease: "power1.out", duration: dur(0.06) }, at(0));

      // Flyby helper
      function addFlyby(el, enterStart, enterDur, exitDur) {
        el.style.filter = "none";
        gsap.set(el, { opacity: 0, scale: reduced ? 1 : 0.9, z: reduced ? 0 : -120 });
        tl.to(el, { opacity: 1, scale: 1, z: 0, ease: "power1.out", duration: dur(enterDur) }, at(enterStart));
        tl.to(el, { opacity: 0, z: reduced ? 0 : 200, ease: "power1.in", duration: dur(exitDur) }, at(enterStart + enterDur));
      }

      // Caption helpers
      function captionIn(el, start, span) {
        gsap.set(el, { opacity: 0, y: reduced ? 0 : 20 });
        tl.to(el, { opacity: 1, y: 0, ease: "power1.out", duration: dur(span) }, at(start));
      }
      function captionOut(el, start, span) {
        tl.to(el, { opacity: 0, y: reduced ? 0 : 20, ease: "power1.in", duration: dur(span) }, at(start));
      }

      // Beat 1 - Voice
      addFlyby(word1El, 0.02, 0.1, 0.1);

      var waveProxy = { p: 0 };
      var EDGE = 0.22;
      function envelope(p) { return p < EDGE ? p / EDGE : p > 1 - EDGE ? (1 - p) / EDGE : 1; }
      gsap.set(waveform, { opacity: 0 });
      bars.forEach(function(b) { b.style.transform = "scaleY(0)"; });
      tl.to(waveProxy, {
        p: 1, ease: "none", duration: dur(0.28),
        onUpdate: function() {
          var e = envelope(waveProxy.p);
          waveform.style.opacity = String(Math.min(1, e * 1.6));
          for (var i = 0; i < bars.length; i++) {
            var dance = reduced ? 1 : 0.5 + 0.5 * Math.abs(Math.sin(waveProxy.p * Math.PI * 3 + i * 0.5));
            bars[i].style.transform = "scaleY(" + (e * dance).toFixed(4) + ")";
          }
        }
      }, at(0.16));

      captionIn(caption1, 0.2, 0.08);
      captionOut(caption1, 0.38, 0.08);

      // Beat 2 - Route
      addFlyby(word2El, 0.52, 0.1, 0.1);

      gsap.set(route, { opacity: 0 });
      tl.to(route, { opacity: 1, ease: "power1.out", duration: dur(0.08) }, at(0.68));

      if (routePath) {
        var len = routePath.getTotalLength();
        gsap.set(routePath, { strokeDasharray: len, strokeDashoffset: reduced ? 0 : len });
        if (!reduced) {
          tl.to(routePath, { strokeDashoffset: 0, ease: "none", duration: dur(0.28) }, at(0.7));
        }
      }

      gsap.set(checkpoints, { opacity: 0, scale: reduced ? 1 : 0, transformOrigin: "50% 50%" });
      tl.to(checkpoints, { opacity: 1, scale: 1, ease: reduced ? "none" : "back.out(1.7)", duration: dur(0.05), stagger: dur(0.1) }, at(0.75));

      captionIn(caption2, 0.72, 0.08);

      return function() {};
    }
  );

  // Refresh after fonts load
  document.fonts && document.fonts.ready.then(function() { ScrollTrigger.refresh(); });
})();
</script>
</body>
</html>