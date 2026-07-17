<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blue Nile</title>
  <link href="https://db.onlinewebfonts.com/c/7973d1644865c7217230fea96daae6fe?family=Test+Founders+Grotesk+Light" rel="stylesheet">
  <link href="https://db.onlinewebfonts.com/c/12487acadbf8efa35235fe8d339411ec?family=NimbusSanExt" rel="stylesheet">
  <style>
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Test Founders Grotesk Light', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
    }

    /* ===== ANIMATIONS ===== */
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fade-in-down {
      from { opacity: 0; transform: translateY(-24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fade-in-scale {
      from { opacity: 0; transform: translate(-50%, 0) scale(0.95); }
      to { opacity: 1; transform: translate(-50%, 0) scale(1); }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes line-grow {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .animate-fade-in-down {
      animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .animate-fade-in-scale {
      animation: fade-in-scale 1s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .animate-fade-in {
      animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .animate-line-grow {
      transform-origin: top;
      animation: line-grow 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    /* ===== LAYOUT ===== */
    .page-wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .hero-section {
      position: relative;
      flex: 1;
      width: 100%;
      background-color: #E96B00;
      overflow: hidden;
    }

    /* ===== GRADIENT GLOW ===== */
    .gradient-glow {
      position: absolute;
      left: -96px;
      top: 33%;
      width: 1360px;
      height: 1360px;
      border-radius: 50%;
      background: rgba(246, 187, 126, 0.4);
      filter: blur(450px);
    }

    /* ===== GRID LINES ===== */
    .grid-lines {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
    }

    .grid-line {
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      background: rgba(255, 255, 255, 0.16);
    }

    /* ===== NAVIGATION ===== */
    .nav {
      position: relative;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28px 24px 0;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      line-height: 1.25;
      transition: opacity 0.2s;
    }

    .nav-links a:hover {
      opacity: 0.8;
    }

    .cart-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background: black;
      border-radius: 50%;
      color: white;
      font-size: 13px;
      line-height: 1;
    }

    .cart-link {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* ===== LARGE HEADING ===== */
    .hero-heading-wrapper {
      position: absolute;
      top: 5%;
      left: 0;
      right: 0;
      z-index: 10;
      text-align: center;
    }

    .hero-heading {
      font-family: 'NimbusSanExt', sans-serif;
      font-weight: bold;
      color: white;
      font-size: clamp(12rem, 24vw, 30rem);
      line-height: 0.85;
      letter-spacing: -0.10em;
      white-space: nowrap;
    }

    /* ===== CENTER HERO IMAGE ===== */
    .hero-image-wrapper {
      position: absolute;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      width: 54%;
      max-width: 760px;
    }

    .hero-image-wrapper img {
      width: 100%;
      height: auto;
      object-fit: cover;
      position: relative;
      z-index: 10;
    }

    /* ===== LEFT COLUMN ===== */
    .left-column {
      position: absolute;
      left: 0;
      top: 42%;
      bottom: 0;
      z-index: 30;
      width: calc(25.4% + 86px);
      max-width: 451px;
      display: flex;
      flex-direction: column;
    }

    .exclusive-card {
      position: relative;
      background: white;
      aspect-ratio: 280 / 160;
      overflow: hidden;
      flex-shrink: 0;
      width: calc(100% - 86px);
    }

    .exclusive-card .label {
      position: absolute;
      top: 12px;
      left: 12px;
      color: black;
      font-size: 18px;
      font-weight: 500;
      z-index: 10;
    }

    .exclusive-card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .left-middle-row {
      display: flex;
      flex: 1;
    }

    .left-middle-text {
      flex: 1;
      padding: 16px 12px;
    }

    .left-middle-text p {
      color: white;
      font-size: 20px;
      line-height: 1.625;
    }

    .arrow-button {
      width: 86px;
      height: 84px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: flex-start;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .arrow-button:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .arrow-button svg {
      width: 20px;
      height: 20px;
      color: white;
    }

    .explore-button {
      width: calc(100% - 86px);
      height: 88px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: background-color 0.2s;
    }

    .explore-button:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .explore-button span {
      color: white;
      font-size: 20px;
      font-weight: 500;
    }

    /* ===== AWARDS SECTION ===== */
    .awards-section {
      display: flex;
      position: absolute;
      right: 24px;
      top: 42%;
      z-index: 30;
      width: calc(25.4% - 24px);
      max-width: 341px;
      align-items: center;
      justify-content: space-between;
    }

    .awards-number {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .awards-bracket {
      color: white;
      font-size: 48px;
      font-weight: 300;
    }

    .awards-value-wrapper {
      display: flex;
      align-items: flex-start;
    }

    .awards-value {
      color: white;
      font-size: 48px;
      font-weight: 700;
    }

    .awards-plus {
      color: white;
      font-size: 20px;
      font-weight: 700;
      position: relative;
      top: -4px;
    }

    .awards-text {
      text-align: right;
    }

    .awards-text p {
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      line-height: 1.375;
      letter-spacing: 0.025em;
    }

    /* ===== SINCE 2017 ===== */
    .since-2017 {
      position: absolute;
      right: 24px;
      top: 60%;
      z-index: 30;
    }

    .since-2017 span {
      color: white;
      font-size: 20px;
    }

    /* ===== PRODUCT CARD (DESKTOP) ===== */
    .product-card-desktop {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 30;
      width: 25.4%;
      max-width: 365px;
    }

    .product-card {
      background: white;
      padding: 12px;
      height: 276px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .product-card h3 {
      color: black;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.25;
    }

    .product-card .subtitle {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      margin-top: 4px;
    }

    .product-card .center-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75%;
      height: auto;
      object-fit: contain;
    }

    .product-card .price-label {
      color: rgba(11, 33, 34, 0.64);
      font-size: 14px;
    }

    .product-card .price {
      color: #0B2122;
      font-size: 20px;
      font-weight: 500;
    }

    .product-arrow {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 92px;
      height: 84px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .product-arrow:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .product-arrow svg {
      width: 20px;
      height: 20px;
      color: white;
    }

    /* ===== MOBILE STYLES ===== */
    .mobile-only { display: none; }
    .mobile-logo { display: none; }
    .hamburger { display: none; }
    .mobile-menu { display: none; }
    .mobile-product-card { display: none; }
    .mobile-grid-line { display: none; }
    .desktop-grid-line { display: block; }

    @media (max-width: 1023px) {
      .page-wrapper {
        height: 100vh;
      }

      .mobile-only { display: block; }
      .desktop-only { display: none; }
      .mobile-grid-line { display: block; }
      .desktop-grid-line { display: none; }

      .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 20px 16px 0;
      }

      .nav-links { display: none; }

      .mobile-logo {
        display: block;
        font-family: 'NimbusSanExt', sans-serif;
        color: white;
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
      }

      .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        position: relative;
        z-index: 50;
      }

      .hamburger svg {
        width: 24px;
        height: 24px;
      }

      .hero-heading-wrapper { display: none; }

      .hero-image-wrapper {
        top: auto;
        bottom: -40px;
        width: 132%;
        max-width: none;
      }

      .left-column { display: none; }

      .awards-section {
        left: 16px;
        right: 16px;
        top: auto;
        bottom: 16px;
        width: auto;
        max-width: none;
      }

      .awards-bracket { font-size: 72px; }
      .awards-value { font-size: 72px; }
      .awards-plus { font-size: 24px; }

      .since-2017 { display: none; }
      .product-card-desktop { display: none; }

      .mobile-product-card {
        display: block;
        position: relative;
        width: 100%;
        flex-shrink: 0;
      }

      .mobile-product-card .product-card {
        height: 260px;
      }
    }

    /* ===== SVG ICON ===== */
    .icon-arrow-up-right {
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  </style>
</head>
<body>
  <div class="page-wrapper">
    <!-- MAIN HERO SECTION -->
    <section class="hero-section">

      <!-- Gradient Glow -->
      <div class="gradient-glow"></div>

      <!-- Grid Lines -->
      <div class="grid-lines">
        <!-- Mobile lines -->
        <div class="grid-line mobile-grid-line animate-line-grow" style="left: 33.333%; animation-delay: 0.2s;"></div>
        <div class="grid-line mobile-grid-line animate-line-grow" style="left: 66.666%; animation-delay: 0.35s;"></div>
        <!-- Desktop lines -->
        <div class="grid-line desktop-grid-line animate-line-grow" style="left: 25%; animation-delay: 0.2s;"></div>
        <div class="grid-line desktop-grid-line animate-line-grow" style="left: 50%; animation-delay: 0.35s;"></div>
        <div class="grid-line desktop-grid-line animate-line-grow" style="left: 75%; animation-delay: 0.5s;"></div>
      </div>

      <!-- Navigation -->
      <nav class="nav animate-fade-in-down" style="animation-delay: 0.1s;">
        <!-- Desktop left links -->
        <div class="nav-links desktop-only">
          <a href="#">Search</a>
          <a href="#">Catalog</a>
          <a href="#">About</a>
        </div>

        <!-- Desktop right links -->
        <div class="nav-links desktop-only">
          <a href="#">Profile</a>
          <a href="#">Favorites</a>
          <a href="#" class="cart-link">
            Cart
            <span class="cart-badge">2</span>
          </a>
        </div>

        <!-- Mobile logo -->
        <div class="mobile-logo">Blue<br>Nile</div>

        <!-- Mobile hamburger -->
        <button class="hamburger" aria-label="Toggle menu" onclick="toggleMenu()">
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none; position:absolute;">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu" class="mobile-menu" style="position:fixed; inset:0; z-index:40; visibility:hidden; transition: all 0.5s cubic-bezier(0.77,0,0.18,1);">
        <div id="menu-backdrop" style="position:absolute; inset:0; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px); opacity:0; transition: opacity 0.5s cubic-bezier(0.77,0,0.18,1);" onclick="toggleMenu()"></div>
        <div id="menu-panel" style="position:absolute; top:0; left:0; height:100%; width:80%; max-width:320px; background:#E96B00; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); transform:translateX(-100%); transition: transform 0.5s cubic-bezier(0.77,0,0.18,1);">
          <div style="display:flex; flex-direction:column; gap:4px; padding:96px 24px 0;">
            <a href="#" class="menu-item" style="color:white; text-decoration:none; font-size:30px; font-weight:500; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1); transition: all 0.3s; opacity:0; transform:translateX(-20px);">Search</a>
            <a href="#" class="menu-item" style="color:white; text-decoration:none; font-size:30px; font-weight:500; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1); transition: all 0.3s; opacity:0; transform:translateX(-20px);">Catalog</a>
            <a href="#" class="menu-item" style="color:white; text-decoration:none; font-size:30px; font-weight:500; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1); transition: all 0.3s; opacity:0; transform:translateX(-20px);">About</a>
            <a href="#" class="menu-item" style="color:white; text-decoration:none; font-size:30px; font-weight:500; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1); transition: all 0.3s; opacity:0; transform:translateX(-20px);">Profile</a>
            <a href="#" class="menu-item" style="color:white; text-decoration:none; font-size:30px; font-weight:500; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1); transition: all 0.3s; opacity:0; transform:translateX(-20px);">Favorites</a>
          </div>
        </div>
      </div>

      <!-- Large "Blue Nile" Heading (desktop) -->
      <div class="hero-heading-wrapper desktop-only animate-fade-in" style="animation-delay: 0.3s;">
        <h1 class="hero-heading">Blue Nile</h1>
      </div>

      <!-- Center Hero Image -->
      <div class="hero-image-wrapper animate-fade-in-scale" style="animation-delay: 0.5s;">
        <img src="https://soft-zoom-63098134.figma.site/_assets/v11/9028130a3e77802079d3a2e663b85ee12d365b61.png" alt="Model showcasing jewelry" />
      </div>

      <!-- Left Column (desktop) -->
      <div class="left-column desktop-only animate-fade-in-up" style="animation-delay: 0.7s;">
        <!-- Exclusive Card -->
        <div class="exclusive-card">
          <span class="label">Exclusive</span>
          <img src="https://soft-zoom-63098134.figma.site/_assets/v11/d499425c000b01d01831365b4b9df4feb1bead8a.png" alt="Exclusive jewelry piece" />
        </div>
        <!-- Middle Row -->
        <div class="left-middle-row">
          <div class="left-middle-text">
            <p>Each design reflects the dialogue between craftsmanship and feeling</p>
          </div>
          <div class="arrow-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>
        <!-- Explore Button -->
        <div class="explore-button">
          <span>Explore Collection</span>
        </div>
      </div>

      <!-- Awards Section -->
      <div class="awards-section animate-fade-in-up" style="animation-delay: 0.9s;">
        <div class="awards-number">
          <span class="awards-bracket">[</span>
          <div class="awards-value-wrapper">
            <span class="awards-value">12</span>
            <span class="awards-plus">+</span>
          </div>
          <span class="awards-bracket">]</span>
        </div>
        <div class="awards-text">
          <p>Awards<br>Celebrate<br>Innovation</p>
        </div>
      </div>

      <!-- Since 2017 (desktop) -->
      <div class="since-2017 desktop-only animate-fade-in" style="animation-delay: 1.1s;">
        <span>[ Since 2017 ]</span>
      </div>

      <!-- Product Card Desktop -->
      <div class="product-card-desktop desktop-only animate-fade-in-up" style="animation-delay: 1.0s;">
        <div class="product-card">
          <div>
            <h3>Coco Crush ring</h3>
            <p class="subtitle">18K yellow</p>
          </div>
          <img class="center-image" src="https://soft-zoom-63098134.figma.site/_assets/v11/6297b1b8b8a1c0720cbd098274da6619ad35b486.png" alt="Coco Crush ring" />
          <div>
            <p class="price-label">From</p>
            <p class="price">$25,550</p>
          </div>
        </div>
        <div class="product-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </div>
      </div>

    </section>

    <!-- Mobile Product Card (below hero section) -->
    <div class="mobile-product-card animate-fade-in-up" style="animation-delay: 0.8s;">
      <div class="product-card">
        <div>
          <h3>Coco Crush ring</h3>
          <p class="subtitle">18K yellow</p>
        </div>
        <img class="center-image" src="https://soft-zoom-63098134.figma.site/_assets/v11/6297b1b8b8a1c0720cbd098274da6619ad35b486.png" alt="Coco Crush ring" />
        <div>
          <p class="price-label">From</p>
          <p class="price">$25,550</p>
        </div>
      </div>
      <div class="product-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </div>
    </div>
  </div>

  <script>
    let menuOpen = false;

    function toggleMenu() {
      menuOpen = !menuOpen;
      const overlay = document.getElementById('mobile-menu');
      const backdrop = document.getElementById('menu-backdrop');
      const panel = document.getElementById('menu-panel');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      const items = document.querySelectorAll('.menu-item');

      if (menuOpen) {
        overlay.style.visibility = 'visible';
        backdrop.style.opacity = '1';
        panel.style.transform = 'translateX(0)';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, 80 + i * 50);
        });
      } else {
        backdrop.style.opacity = '0';
        panel.style.transform = 'translateX(-100%)';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        items.forEach((item) => {
          item.style.opacity = '0';
          item.style.transform = 'translateX(-20px)';
        });
        setTimeout(() => {
          overlay.style.visibility = 'hidden';
        }, 500);
      }
    }
  </script>
</body>
</html>