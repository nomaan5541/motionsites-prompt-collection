<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CozyPaws - Everything Your Pets Love</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: linear-gradient(to bottom right, #e2e8f0, #f8fafc, #e2e8f0); min-height: 100vh; }

    .page { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; overflow-x: hidden; }
    .phones { display: flex; flex-direction: column; align-items: center; gap: 32px; zoom: 0.85; }
    @media (min-width: 640px) { .phones { zoom: 0.95; } }
    @media (min-width: 1024px) { .phones { flex-direction: row; gap: 50px; zoom: 1; } }

    /* Phone shell */
    .phone { position: relative; width: 390px; flex-shrink: 0; }
    .phone-frame { position: relative; border-radius: 60px; border: 14px solid #1a1a1a; background: #1a1a1a; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.4), 0 30px 60px -15px rgba(0,0,0,0.3), inset 0 -2px 6px rgba(255,255,255,0.05); }
    .notch { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 110px; height: 32px; background: #000; border-radius: 9999px; z-index: 60; }
    .screen { position: relative; border-radius: 46px; overflow: hidden; background: #f0f9f1; aspect-ratio: 9 / 19.5; }
    .screen-inner { position: absolute; inset: 0; display: flex; flex-direction: column; }
    .phone-shadow { position: absolute; bottom: -16px; left: 10%; right: 10%; height: 32px; background: rgba(0,0,0,0.1); border-radius: 50%; filter: blur(12px); }

    /* Header */
    .header { position: relative; z-index: 30; padding: 48px 20px 8px; animation: fadeIn 0.6s ease-out both; animation-delay: 300ms; }
    .header-inner { display: flex; align-items: center; justify-content: space-between; }
    .menu-btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: none; border: none; cursor: pointer; animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 400ms; }
    .header-right { display: flex; align-items: center; gap: 10px; animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 400ms; }
    .star-btn { position: relative; width: 32px; height: 32px; border-radius: 50%; background: #E86A10; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; }
    .badge { position: absolute; top: -4px; right: -4px; width: 16px; height: 16px; border-radius: 50%; background: #E86A10; border: 2px solid #f0f9f1; color: white; font-size: 8px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
    .cart-btn { position: relative; display: flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer; }
    .cart-circle { position: relative; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #d1d5db; display: flex; align-items: center; justify-content: center; background: white; }
    .cart-price { font-size: 11px; font-weight: 600; color: #1a3d1a; }
    .avatar { width: 32px; height: 32px; border-radius: 50%; overflow: hidden; border: 2px solid #4CAF50; }
    .avatar img { width: 100%; height: 100%; object-fit: cover; }

    /* Left phone */
    .left-content { flex: 1; display: flex; flex-direction: column; animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 500ms; }
    .dog-section { position: relative; flex: 1.2; overflow: hidden; }
    .dog-section img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .stats-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center; animation: fadeIn 0.6s ease-out both; animation-delay: 800ms; }
    .stats-number { font-size: 40px; font-weight: 700; color: #1a3d1a; }
    .stats-avatars { display: flex; align-items: center; margin-left: -8px; }
    .stats-avatar { width: 40px; height: 40px; border-radius: 50%; border: 2px solid white; overflow: hidden; margin-left: -8px; }
    .stats-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .stats-avatar-plus { width: 40px; height: 40px; border-radius: 50%; background: #1a3d1a; border: 2px solid white; display: flex; align-items: center; justify-content: center; margin-left: -8px; }
    .stats-text { font-size: 14px; color: #1a3d1a; line-height: 1.4; font-weight: 500; }
    .video-section { position: relative; flex: 1.3; overflow: hidden; }
    .video-section video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .play-btn { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
    .play-btn button { width: 40px; height: 40px; border-radius: 50%; background: #1a3d1a; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); cursor: pointer; }

    /* Center phone */
    .center-content { flex: 1; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    .hero-heading { position: absolute; top: calc(10% + 45px); left: 0; right: 0; z-index: 10; color: #1a3d1a; font-size: 46px; line-height: 1.1; letter-spacing: -0.025em; text-align: center; font-family: 'Poppins', sans-serif; font-weight: 400; animation: textReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 500ms; }
    .hero-dog { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); min-width: 132%; width: 132%; height: auto; max-width: none; z-index: 20; animation: photoReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 700ms; }
    .hero-cta { position: absolute; bottom: 0; left: 0; right: 0; z-index: 20; padding: 0 20px 25px; text-align: center; animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 900ms; }
    .hero-cta h2 { color: white; font-size: 22px; font-weight: 700; line-height: 1.2; margin-bottom: 12px; text-shadow: 0 2px 6px rgba(0,0,0,0.5); }
    .explore-btn { display: inline-flex; align-items: center; gap: 8px; background: #E86A10; color: white; font-weight: 600; padding: 10px 20px; border-radius: 9999px; font-size: 12px; border: none; cursor: pointer; }
    .explore-btn span { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; }

    /* Right phone */
    .right-content { flex: 1; display: flex; flex-direction: column; animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 500ms; }
    .cat-section { position: relative; flex: 1.2; overflow: hidden; }
    .cat-section img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; }
    .cat-stats { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center; animation: fadeIn 0.6s ease-out both; animation-delay: 800ms; }
    .cat-rating { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
    .cat-rating span { font-size: 40px; font-weight: 700; color: #1a3d1a; }
    .arrivals-section { flex: 1.3; padding: 12px 20px; background: #A8E7B0; overflow: hidden; }
    .arrivals-title { font-size: 30px; font-weight: 500; color: #1a3d1a; text-align: center; margin-bottom: 12px; }
    .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    .product-card { position: relative; background: white; border-radius: 16px; padding: 20px; display: flex; flex-direction: column; align-items: center; }
    .product-card:nth-child(1) { animation: cardPopIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 900ms; }
    .product-card:nth-child(2) { animation: cardPopIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 1000ms; }
    .product-card:nth-child(3) { animation: cardPopIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 1100ms; }
    .product-card:nth-child(4) { animation: cardPopIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 1200ms; }
    .product-plus { position: absolute; top: 8px; right: 8px; background: none; border: none; cursor: pointer; }
    .product-img { width: 100%; aspect-ratio: 6/4; border-radius: 12px; overflow: hidden; margin-bottom: 8px; }
    .product-img img { width: 100%; height: 100%; object-fit: cover; }
    .product-name { font-size: 14px; color: #6b7280; font-weight: 500; }
    .product-price { font-size: 26px; font-weight: 700; color: #1a3d1a; }

    /* Keyframes */
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes textReveal { from { opacity: 0; transform: translateY(40px) skewY(3deg); filter: blur(4px); } to { opacity: 1; transform: translateY(0) skewY(0deg); filter: blur(0px); } }
    @keyframes photoReveal { from { opacity: 0; transform: translateX(-50%) translateY(80px) scale(1.02); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
    @keyframes cardPopIn { from { opacity: 0; transform: translateY(20px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }

    /* SVG icons inline */
    .icon { display: inline-block; vertical-align: middle; }
  </style>
</head>
<body>
  <div class="page">
    <div class="phones">

      <!-- LEFT PHONE -->
      <div class="phone">
        <div class="phone-frame">
          <div class="notch"></div>
          <div class="screen">
            <div class="screen-inner">
              <div class="header">
                <div class="header-inner">
                  <button class="menu-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </button>
                  <div class="header-right">
                    <button class="star-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span class="badge">4</span>
                    </button>
                    <button class="cart-btn">
                      <div class="cart-circle">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        <span class="badge">1</span>
                      </div>
                      <span class="cart-price">$21</span>
                    </button>
                    <div class="avatar">
                      <img src="https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128" alt="Avatar" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="left-content">
                <div class="dog-section">
                  <img src="https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png" alt="Dachshund" />
                  <div class="stats-overlay">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
                      <span class="stats-number">98K+</span>
                      <div class="stats-avatars">
                        <div class="stats-avatar"><img src="https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128" alt="" /></div>
                        <div class="stats-avatar-plus">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
                        </div>
                      </div>
                    </div>
                    <p class="stats-text">Happy Clients and Their Pets<br>Who Love Our Products</p>
                  </div>
                </div>
                <div class="video-section">
                  <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_160640_dc6d2a50-121e-45b0-a84f-331faa58d804.mp4" autoplay muted loop playsinline></video>
                  <div class="play-btn">
                    <button>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="phone-shadow"></div>
      </div>

      <!-- CENTER PHONE -->
      <div class="phone">
        <div class="phone-frame">
          <div class="notch"></div>
          <div class="screen">
            <div class="screen-inner">
              <div class="header" style="animation-delay:200ms;">
                <div class="header-inner">
                  <button class="menu-btn" style="animation-delay:300ms;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </button>
                  <div class="header-right" style="animation-delay:300ms;">
                    <button class="star-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </button>
                    <button class="cart-btn">
                      <div class="cart-circle">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        <span class="badge">1</span>
                      </div>
                      <span class="cart-price">$21</span>
                    </button>
                    <div class="avatar">
                      <img src="https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128" alt="Avatar" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="center-content">
                <h1 class="hero-heading">Everything<br>Your Pets Love</h1>
                <img class="hero-dog" src="https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024" alt="Golden Retriever" />
                <div class="hero-cta">
                  <h2>Best Products<br>for Your Pet</h2>
                  <button class="explore-btn">
                    Explore Products
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="phone-shadow"></div>
      </div>

      <!-- RIGHT PHONE -->
      <div class="phone">
        <div class="phone-frame">
          <div class="notch"></div>
          <div class="screen">
            <div class="screen-inner">
              <div class="header">
                <div class="header-inner">
                  <button class="menu-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </button>
                  <div class="header-right">
                    <button class="star-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </button>
                    <button class="cart-btn">
                      <div class="cart-circle">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        <span class="badge">1</span>
                      </div>
                      <span class="cart-price">$21</span>
                    </button>
                    <div class="avatar">
                      <img src="https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128" alt="Avatar" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="right-content">
                <div class="cat-section">
                  <img src="https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png" alt="Cat" />
                  <div class="cat-stats">
                    <div class="cat-rating">
                      <span>4.6</span>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#E86A10" stroke="#E86A10" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <p class="stats-text">Based on Reviews from Happy<br>Pet Owners Worldwide</p>
                  </div>
                </div>
                <div class="arrivals-section">
                  <h3 class="arrivals-title">New Arrivals</h3>
                  <div class="products-grid">
                    <div class="product-card">
                      <button class="product-plus"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></button>
                      <div class="product-img"><img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_172706_08d34c84-fa47-4744-835d-aeb8574e894b.png&w=1280&q=85" alt="Sunset Cat Bowl" /></div>
                      <span class="product-name">Sunset Cat Bowl</span>
                      <span class="product-price">$19.99</span>
                    </div>
                    <div class="product-card">
                      <button class="product-plus"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></button>
                      <div class="product-img"><img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_171722_0831d998-50be-461c-89e1-1164db805d12.png&w=1280&q=85" alt="Mint Cat Bowl" /></div>
                      <span class="product-name">Mint Cat Bowl</span>
                      <span class="product-price">$29.99</span>
                    </div>
                    <div class="product-card">
                      <button class="product-plus"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></button>
                      <div class="product-img"><img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_171713_10dca337-a1bd-44c8-be9f-44ef5b5efb5c.png&w=1280&q=85" alt="Cat Toy" /></div>
                      <span class="product-name">Cat Toy</span>
                      <span class="product-price">$12.99</span>
                    </div>
                    <div class="product-card">
                      <button class="product-plus"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#1a3d1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></button>
                      <div class="product-img"><img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_175012_ec38ea5f-e56d-4158-9970-df6ea6f4641b.png&w=1280&q=85" alt="Cat Bed" /></div>
                      <span class="product-name">Cat Bed</span>
                      <span class="product-price">$34.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="phone-shadow"></div>
      </div>

    </div>
  </div>
</body>
</html>