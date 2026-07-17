<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NovaPay - One Globe, One Future</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @font-face {
      font-family: 'Qanelas-Heavy';
      src: url('https://db.onlinewebfonts.com/t/3010f9da43a41a81d5daa32bd6edebc2.woff2') format('woff2'),
           url('https://db.onlinewebfonts.com/t/3010f9da43a41a81d5daa32bd6edebc2.woff') format('woff');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      background: #050410;
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.01em;
      min-height: 100vh;
    }

    .showcase {
      min-height: 100vh;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 24px;
    }

    .phone {
      position: relative;
      zoom: 0.78;
      width: 393px;
      height: 820px;
      overflow: hidden;
      flex: none;
      border-radius: 28px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(148, 145, 182, 0.28);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .phone[data-screen="competition"],
    .phone[data-screen="about"] {
      background: #0c0a16;
    }

    .phone[data-screen="one-world"] {
      background: #080710;
    }

    .phone-inner {
      position: relative;
      width: 300px;
      height: 626px;
      background: #0c0a16;
      overflow: hidden;
      flex: none;
      transform: scale(1.31);
    }

    .phone-inner-world {
      background: linear-gradient(to bottom, #080710 0%, #080612 14%, #080612 60%, #080611 100%);
    }

    .nav {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 25px 16px 0 16px;
      z-index: 5;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0;
      font-family: 'Quicksand', 'Inter', sans-serif;
      font-size: 18px;
      letter-spacing: -0.3px;
      line-height: 1;
      position: relative;
      top: -3px;
    }

    .logo-bold {
      font-weight: 600;
      color: #fff;
    }

    .logo-light {
      font-weight: 300;
      color: #e7e3f2;
    }

    .logo-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #7f52ef;
      margin-left: 5px;
      position: relative;
      top: 1px;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-btn {
      font-family: 'Inter', sans-serif;
      font-size: 9.5px;
      border-radius: 999px;
      padding: 9px 13px;
      white-space: nowrap;
      line-height: 1;
      display: inline-block;
    }

    .nav-btn-outline {
      font-weight: 400;
      color: #d9d5e8;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .nav-btn-purple {
      font-weight: 500;
      color: #a483f5;
      border: 1.5px solid #504081;
    }

    .nav-close {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #2a2930;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ghost-text {
      position: absolute;
      top: -19px;
      left: -19px;
      font-family: 'Qanelas-Heavy', sans-serif;
      font-weight: 900;
      font-size: 68px;
      line-height: 0.72;
      color: #16112b;
      opacity: 0.5;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      pointer-events: none;
      user-select: none;
      height: 108px;
      width: 100px;
    }

    .hero-section {
      position: relative;
      margin-top: 44px;
    }

    .hero-lock-icon {
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #01010e;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 6;
    }

    .hero-card {
      width: 94%;
      max-width: 290px;
      margin: 22px auto 0;
      padding: 12px 18px;
      border-radius: 20px;
      background: linear-gradient(120deg, rgba(203, 191, 255, 0.11), rgba(203, 191, 255, 0.09));
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      position: relative;
      overflow: hidden;
      z-index: 4;
    }

    .hero-title {
      position: relative;
      z-index: 1;
      margin-left: -1px;
      font-family: 'Qanelas-Heavy', sans-serif;
      font-weight: 900;
      font-size: 37px;
      line-height: 0.98;
      color: #7442e9;
      letter-spacing: -0.7px;
      text-transform: uppercase;
      text-align: left;
      white-space: nowrap;
    }

    .how-to-win {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 26px;
      z-index: 4;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0;
      color: #d9d5e8;
      background: #17142a;
      border-radius: 999px;
      padding: 5px 11px;
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #7f52ef;
    }

    .how-to-win-text {
      text-align: left;
      margin-top: 16px;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.25;
      color: #f2f0f8;
    }

    .globe-container {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -100px;
      height: 540px;
      z-index: 3;
      overflow: hidden;
    }

    .globe-container::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100px;
      height: 20%;
      background: linear-gradient(to bottom, transparent, #060410);
      z-index: 4;
      pointer-events: none;
    }

    .globe-img {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 135%;
      height: auto;
      object-fit: cover;
    }

    .countdown-wrap {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 44px;
      padding: 0 16px;
      z-index: 20;
    }

    .countdown {
      position: relative;
      height: 40px;
      width: 272px;
      margin: 0 auto;
    }

    .countdown-seg {
      position: absolute;
      top: 0;
      bottom: 0;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 10.5px;
      font-weight: 600;
      color: #f4f1fb;
      border-radius: 9999px;
    }

    .countdown-seg-1 {
      left: 0;
      right: 0;
      padding: 0 0 0 11px;
      background: rgba(33, 24, 62, 0.72);
      z-index: 1;
      gap: 5px;
    }

    .countdown-seg-2 {
      left: 70px;
      right: 0;
      padding-left: 14px;
      background: rgba(38, 28, 72, 0.78);
      z-index: 2;
      gap: 3px;
    }

    .countdown-seg-3 {
      left: 126px;
      right: 0;
      padding-left: 14px;
      background: rgba(44, 33, 84, 0.84);
      z-index: 3;
      gap: 3px;
    }

    .countdown-seg-4 {
      left: 182px;
      right: 0;
      padding-left: 14px;
      background: rgba(50, 38, 96, 0.9);
      z-index: 4;
      gap: 3px;
    }

    .countdown-label {
      font-weight: 400;
      color: #cabfe6;
    }

    .left-to-win {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 26px;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      color: #f4f1fb;
      z-index: 20;
    }

    .world-dome {
      position: absolute;
      left: 42%;
      top: 12%;
      width: 285%;
      aspect-ratio: 1/1;
      transform: translateX(-50%);
      border-radius: 50%;
      background: radial-gradient(circle closest-side at 50% 50%, #080612 0%, #080613 40%, #090715 62%, #0b0918 82%, #0c091a 93%, #0d0a1b 100%);
      z-index: 0;
      pointer-events: none;
    }

    .world-title {
      position: absolute;
      left: 22px;
      bottom: 96px;
      font-family: 'Qanelas-Heavy', sans-serif;
      font-weight: 900;
      font-size: 72px;
      line-height: 0.78;
      color: #7f52ef;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      z-index: 2;
    }

    .world-title-globe-row {
      white-space: nowrap;
    }

    .globe-letter {
      position: relative;
      display: inline-block;
      color: transparent;
    }

    .world-globe-img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90px;
      height: 90px;
      object-fit: contain;
      z-index: 30;
    }

    .about-glow {
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(90, 50, 190, 0.35), transparent 70%);
    }

    .deck-container {
      position: relative;
      margin: 34px 16px 0;
      height: 314px;
      z-index: 4;
      overflow: visible;
      transform: scale(0.95);
      transform-origin: top center;
    }

    .smoke-wrap {
      position: absolute;
      inset: -12%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: blur(14px);
      opacity: 0.7;
      pointer-events: none;
      z-index: 0;
      -webkit-mask-image: radial-gradient(65% 55% at 52% 52%, #000 30%, transparent 75%);
      mask-image: radial-gradient(65% 55% at 52% 52%, #000 30%, transparent 75%);
    }

    .smoke-wrap svg {
      width: 120%;
      height: 120%;
    }

    .core-glow {
      position: absolute;
      width: 240px;
      height: 215px;
      top: 50%;
      left: 50%;
      transform: translate(-38%, -52%);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(122, 78, 237, 0.22) 0%, rgba(122, 78, 237, 0) 68%);
      filter: blur(30px);
      pointer-events: none;
      z-index: 0;
    }

    .deck-card {
      position: absolute;
      border-radius: 18px;
      overflow: hidden;
      padding: 19px 20px 28px 18px;
      will-change: transform, opacity;
      backdrop-filter: blur(28px) saturate(120%);
      -webkit-backdrop-filter: blur(28px) saturate(120%);
      transition: left 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                  right 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                  top 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                  bottom 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                  opacity 0.45s ease;
    }

    .deck-slot-0 {
      left: 0;
      right: 48px;
      top: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(255, 255, 255, 0.075);
    }

    .deck-slot-1 {
      left: 24px;
      right: 24px;
      top: 34px;
      bottom: 34px;
      z-index: 2;
      background: rgba(255, 255, 255, 0.055);
    }

    .deck-slot-2 {
      left: 48px;
      right: 0;
      top: 72px;
      bottom: 72px;
      z-index: 1;
      background: rgba(255, 255, 255, 0.045);
    }

    .deck-card-text {
      position: relative;
      z-index: 1;
      transition: opacity 0.4s ease;
    }

    .deck-slot-0 .deck-card-text {
      opacity: 1;
      transition-delay: 0.16s;
    }

    .deck-slot-1 .deck-card-text,
    .deck-slot-2 .deck-card-text {
      opacity: 0;
      transition-delay: 0s;
    }

    .deck-card-title {
      font-family: 'Qanelas-Heavy', sans-serif;
      font-weight: 900;
      font-size: 19px;
      line-height: 0.99;
      color: #7f59e5;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      white-space: pre-line;
    }

    .deck-card-body {
      margin-top: 16px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 11px;
      line-height: 1.75;
      letter-spacing: 0.1px;
      color: #e9e4f6;
    }

    .deck-card.deck-leaving {
      left: 0;
      right: 48px;
      top: 0;
      bottom: 0;
      z-index: 4;
      background: rgba(255, 255, 255, 0.075);
      transform: translateX(130%) rotate(10deg);
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.55, 0, 0.75, 0.45), opacity 0.34s ease 0.12s;
    }

    .deck-card.deck-entering-back {
      left: 48px;
      right: 0;
      top: 72px;
      bottom: 72px;
      z-index: 1;
      background: rgba(255, 255, 255, 0.045);
      transform: scale(0.9);
      opacity: 0;
      transition: none;
    }

    .deck-card.deck-entering-front {
      left: 0;
      right: 48px;
      top: 0;
      bottom: 0;
      z-index: 4;
      background: rgba(255, 255, 255, 0.075);
      transform: translateX(-130%) rotate(-10deg);
      opacity: 0;
      transition: none;
    }

    .deck-nav {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;
      z-index: 5;
    }

    .deck-arrow {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: #01010e;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: transform 0.16s ease, background 0.2s ease;
      border: none;
      outline: none;
    }

    .deck-arrow:hover {
      background: #151129;
    }

    .deck-arrow:active {
      transform: scale(0.86);
    }

    .deck-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
    }

    .about-bottom-title {
      position: absolute;
      left: 22px;
      bottom: 32px;
      font-family: 'Qanelas-Heavy', sans-serif;
      font-weight: 900;
      font-size: 31px;
      line-height: 0.94;
      color: #7f52ef;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      z-index: 5;
    }

    @media (max-width: 980px) {
      .showcase {
        flex-wrap: wrap;
      }
    }

    @media (max-width: 440px) {
      .phone {
        zoom: 0.6;
      }
    }
  </style>
</head>
<body>
  <div class="showcase">
    <!-- Phone 1: Competition -->
    <div class="phone" data-screen="competition">
      <div class="phone-inner">
        <!-- Nav -->
        <nav class="nav">
          <div class="logo">
            <span class="logo-bold">nova</span><span class="logo-light">pay</span>
            <span class="logo-dot"></span>
          </div>
          <div class="nav-actions">
            <span class="nav-btn nav-btn-outline">What is?</span>
            <span class="nav-btn nav-btn-purple">Create a team</span>
          </div>
        </nav>

        <!-- Ghost text -->
        <div class="ghost-text">ONE<br>GLOBE,<br>ONE<br>FUTURE</div>

        <!-- Hero card -->
        <div class="hero-section">
          <div class="hero-lock-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7f52ef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-12deg);">
              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
            </svg>
          </div>
          <div class="hero-card">
            <div class="hero-title">THE<br>COMPETITION<br>IS LIVE NOW<span>!</span></div>
          </div>
        </div>

        <!-- How to win -->
        <div class="how-to-win">
          <span class="badge">
            <span class="badge-dot"></span>HOW TO WIN BIG!
          </span>
          <div class="how-to-win-text">Transfer $1 Around the<br>world, Win $30,000!</div>
        </div>

        <!-- Video -->
        <div class="globe-container">
          <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_033111_a61458df-1103-4d80-95d8-82aef099bbf2.mp4" autoplay muted loop playsinline class="globe-img"></video>
        </div>

        <!-- Countdown -->
        <div class="countdown-wrap">
          <div class="countdown">
            <span class="countdown-seg countdown-seg-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#b7a4f0" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2" stroke-linecap="round"></path></svg>
              12&nbsp;<span class="countdown-label">days</span>
            </span>
            <span class="countdown-seg countdown-seg-2">23<span class="countdown-label">hs</span></span>
            <span class="countdown-seg countdown-seg-3">12<span class="countdown-label">min</span></span>
            <span class="countdown-seg countdown-seg-4">30<span class="countdown-label">seconds</span></span>
          </div>
        </div>
        <div class="left-to-win">left to win!</div>
      </div>
    </div>

    <!-- Phone 2: One World -->
    <div class="phone" data-screen="one-world">
      <div class="phone-inner phone-inner-world">
        <div class="world-dome"></div>
        <!-- Nav -->
        <nav class="nav">
          <div class="logo">
            <span class="logo-bold">nova</span><span class="logo-light">pay</span>
            <span class="logo-dot"></span>
          </div>
          <div class="nav-actions">
            <span class="nav-btn nav-btn-outline">What is?</span>
            <span class="nav-btn nav-btn-purple">Create a team</span>
          </div>
        </nav>
        <!-- Big text -->
        <div class="world-title">
          <div>ONE</div>
          <div class="world-title-globe-row">GL<span class="globe-letter">O<img src="https://polo-pecan-73837341.figma.site/_assets/v11/79bb00a5846ae132a06fc1f590fe4d05764300be.png" alt="globe" class="world-globe-img"></span>BE,</div>
          <div>ONE</div>
          <div>FUTURE<span>.</span></div>
        </div>
      </div>
    </div>

    <!-- Phone 3: About -->
    <div class="phone" data-screen="about">
      <div class="phone-inner">
        <div class="about-glow"></div>
        <!-- Nav -->
        <nav class="nav">
          <div class="logo">
            <span class="logo-bold">nova</span><span class="logo-light">pay</span>
            <span class="logo-dot"></span>
          </div>
          <div class="nav-close">
            <svg width="15" height="15" viewBox="0 0 24 24" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
          </div>
        </nav>

        <!-- Card deck -->
        <div class="deck-container">
          <div class="smoke-wrap">
            <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="nebula" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.0055 0.008" numOctaves="4" seed="11" result="noise"></feTurbulence>
                  <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.486  0 0 0 0 0.302  0 0 0 0 0.929  1.1 0 0 0 -0.42"></feColorMatrix>
                </filter>
              </defs>
              <rect width="800" height="800" filter="url(#nebula)"></rect>
            </svg>
          </div>
          <div class="core-glow"></div>
          <!-- Cards -->
          <div class="deck-card deck-card-0 deck-slot-0" id="card-0">
            <div class="deck-card-text">
              <div class="deck-card-title">ABOUT THE<br>COMPETITION</div>
              <div class="deck-card-body">The competition is about making global money transfers accessible and engaging. By logging into NovaPay with your phone number, creating a team, receiving a complimentary dollar, and initiating the game worldwide, participants are challenged to transfer this dollar across different locations, showcasing the ease and simplicity of</div>
            </div>
          </div>
          <div class="deck-card deck-card-1 deck-slot-1" id="card-1">
            <div class="deck-card-text">
              <div class="deck-card-title">HOW TO<br>PLAY</div>
              <div class="deck-card-body">Every transfer counts. Pass your dollar to a friend in another country and watch it hop across the map in real time. The further your dollar travels and the more borders it crosses, the higher your team climbs on the global leaderboard, one hop at a time.</div>
            </div>
          </div>
          <div class="deck-card deck-card-2 deck-slot-2" id="card-2">
            <div class="deck-card-text">
              <div class="deck-card-title">WIN BIG<br>PRIZES</div>
              <div class="deck-card-body">The team whose dollar crosses the most borders before the timer hits zero takes home the $30,000 grand prize. Weekly milestones unlock bonus rewards along the way, so keep your dollar moving — every single border it crosses brings your squad one hop closer to the big win.</div>
            </div>
          </div>
        </div>

        <!-- Nav arrows -->
        <div class="deck-nav">
          <button class="deck-arrow" id="prev-card" aria-label="Previous card">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7c54e5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 5l-7 7 7 7"></path></svg>
          </button>
          <span class="deck-dot"></span>
          <button class="deck-arrow" id="next-card" aria-label="Next card">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7c54e5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <!-- Big bottom text -->
        <div class="about-bottom-title">WHAT IS<br>ONE GLOBE,<br>ONE FUTURE?</div>
      </div>
    </div>
  </div>

  <script>
    const cards = document.querySelectorAll('.deck-card');
    let active = 0;
    let animating = false;

    function getSlotClass(position) {
      return `deck-slot-${position}`;
    }

    function updateCards() {
      cards.forEach((card, i) => {
        const pos = (i - active + 3) % 3;
        card.className = `deck-card deck-card-${i} ${getSlotClass(pos)}`;
      });
    }

    document.getElementById('next-card').addEventListener('click', () => {
      if (animating) return;
      animating = true;

      const leaving = active;
      active = (active + 1) % 3;

      cards[leaving].className = `deck-card deck-card-${leaving} deck-leaving`;

      cards.forEach((card, i) => {
        if (i === leaving) return;
        const pos = (i - active + 3) % 3;
        card.className = `deck-card deck-card-${i} ${getSlotClass(pos)}`;
      });

      setTimeout(() => {
        cards[leaving].className = `deck-card deck-card-${leaving} deck-entering-back`;
        setTimeout(() => {
          cards[leaving].className = `deck-card deck-card-${leaving} deck-slot-2`;
          animating = false;
        }, 60);
      }, 480);
    });

    document.getElementById('prev-card').addEventListener('click', () => {
      if (animating) return;
      animating = true;

      const to = (active + 2) % 3;
      cards[to].className = `deck-card deck-card-${to} deck-entering-front`;

      setTimeout(() => {
        active = to;
        updateCards();
        setTimeout(() => {
          animating = false;
        }, 580);
      }, 60);
    });
  </script>
</body>
</html>