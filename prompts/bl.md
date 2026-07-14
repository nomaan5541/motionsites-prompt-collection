<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bloom</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:#000}
::-webkit-scrollbar-thumb{background:#1f2937;border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:#374151}
body{background:#000;color:#fff;overflow-x:hidden;margin:0;padding:0;font-family:"Space Grotesk",ui-sans-serif,system-ui,sans-serif}

/* --- CONTAINER --- */
.scroll-container{position:relative;width:100%;height:500vh;background:#000}
.fixed-viewport{position:fixed;inset:0;width:100%;height:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#000}

/* --- BRAND HEADER --- */
.premium-brand-header{position:absolute;top:clamp(24px,3vw,48px);left:clamp(24px,3vw,48px);z-index:45;display:flex;align-items:center;gap:clamp(8px,0.8vw,14px);user-select:none;pointer-events:auto;will-change:transform,opacity,filter}
@media(max-width:768px){.premium-brand-header{top:24px;left:24px}}
.premium-brand-text{font-family:"Instrument Serif",serif;font-size:clamp(22px,2.2vw,32px);font-weight:500;color:#fff;letter-spacing:-0.03em}
.premium-brand-logo-svg{width:clamp(28px,2.6vw,44px);height:auto;opacity:0.95}

/* --- NAV HEADER --- */
.premium-header-nav{position:absolute;top:clamp(24px,3vw,48px);right:clamp(24px,3vw,48px);z-index:50;pointer-events:auto;will-change:transform,opacity,filter}
@media(max-width:768px){.premium-header-nav{top:24px;right:24px}}
.premium-nav-desktop{display:block}
.premium-nav-list{display:flex;gap:0;margin:0;padding:0;list-style:none;align-items:center}
.premium-nav-item{margin:0;padding:0}
.premium-nav-link{display:block;background:#fff;color:#111;font-family:"Manrope",sans-serif;font-size:clamp(12px,0.9vw,15px);font-weight:500;text-decoration:none;padding:clamp(8px,0.7vw,12px) clamp(16px,1.3vw,24px);border-radius:8px;transition:opacity .2s ease,transform .2s ease;white-space:nowrap}
.premium-nav-link:hover{opacity:0.9;transform:scale(1.03)}
.premium-nav-link:active{transform:scale(0.97)}

/* --- HAMBURGER --- */
.premium-hamburger{display:none}
@media(max-width:768px){
  .premium-nav-desktop{display:none}
  .premium-hamburger{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:44px;height:44px;background:rgba(255,255,255,.12);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.15);border-radius:10px;cursor:pointer;padding:0;z-index:60;position:relative}
  .premium-hamburger:active{transform:scale(0.92)}
}
.premium-hamburger-line{display:block;width:20px;height:1.5px;background:#fff;border-radius:2px;transition:transform .3s cubic-bezier(.16,1,.3,1),opacity .2s ease;transform-origin:center}
.premium-hamburger-line.top-open{transform:translateY(6.5px) rotate(45deg)}
.premium-hamburger-line.mid-open{opacity:0}
.premium-hamburger-line.bot-open{transform:translateY(-6.5px) rotate(-45deg)}

/* --- MOBILE MENU --- */
.premium-mobile-menu{position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.88);backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);display:flex;align-items:center;justify-content:center;pointer-events:auto;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease}
.premium-mobile-menu.open{opacity:1;visibility:visible}
.premium-mobile-menu-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;gap:8px}
.premium-mobile-menu-link{font-family:"Instrument Serif",Georgia,serif;font-size:40px;font-weight:400;color:#fff;text-decoration:none;letter-spacing:-0.02em;line-height:1.3;padding:8px 24px;transition:opacity .2s ease}
.premium-mobile-menu-link:hover,.premium-mobile-menu-link:active{opacity:0.6}

/* --- BOTANICAL CARD --- */
.premium-botanical-card{position:absolute;bottom:clamp(24px,3vw,48px);left:clamp(24px,3vw,48px);width:clamp(380px,30vw,540px);max-width:90vw;background:rgba(255,255,255,.16);backdrop-filter:blur(80px);-webkit-backdrop-filter:blur(80px);border-radius:0;padding:clamp(32px,3.2vw,56px);z-index:45;pointer-events:auto;border:1px solid rgba(255,255,255,.15);box-shadow:0 30px 60px rgba(0,0,0,.3);will-change:transform,opacity,filter}
@media(max-width:768px){.premium-botanical-card{bottom:32px;left:24px;padding:32px 24px;width:calc(100vw - 48px)}}
.premium-card-title{font-family:"Instrument Serif",serif;font-size:72px;line-height:1.05;font-weight:400;color:#fff;margin:0 0 clamp(10px,1.2vw,20px) 0;letter-spacing:-0.01em;width:324px;max-width:100%}
.premium-card-title .italic{font-style:italic}
@media(max-width:768px){.premium-card-title{font-size:38px;margin-bottom:10px}}
.premium-card-subtext{font-family:"Manrope",sans-serif;font-size:clamp(12px,1vw,15px);line-height:1.6;font-weight:400;color:rgba(255,255,255,.64);letter-spacing:0.01em;margin:0;width:clamp(260px,22vw,380px);max-width:100%}
@media(max-width:768px){.premium-card-subtext{font-size:13px}}

/* --- CTA CIRCLE --- */
.premium-action-circle{position:absolute;right:calc(-1*(clamp(80px,7vw,112px)/2));bottom:clamp(20px,2.5vw,40px);width:clamp(80px,7vw,112px);height:clamp(80px,7vw,112px);border-radius:50%;background:#CB8DFF;color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .25s cubic-bezier(.16,1,.3,1),background-color .2s ease;z-index:55;box-shadow:none}
.premium-action-circle:hover{transform:scale(1.08);background:#d9a8ff}
.premium-action-circle:active{transform:scale(0.94)}
.premium-action-circle svg{width:clamp(30px,2.8vw,44px);height:clamp(18px,1.8vw,28px);stroke:#fff;stroke-width:1.75;fill:none;transition:transform .25s ease}
.premium-action-circle:hover svg{transform:translateX(4px)}
@media(max-width:768px){.premium-action-circle{width:64px;height:64px;right:-16px;bottom:-32px}.premium-action-circle svg{width:38px;height:22px}}

/* --- FEATURE CARDS --- */
.premium-features-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:max-content;max-width:95%;display:grid;grid-template-columns:repeat(3,280px);justify-content:center;gap:16px;z-index:46;pointer-events:none;align-items:stretch}
.premium-feature-card{background:rgba(255,255,255,.16);backdrop-filter:blur(80px);-webkit-backdrop-filter:blur(80px);border:1px solid rgba(255,255,255,.15);border-radius:0;padding:24px;width:280px;height:440px;box-shadow:0 30px 60px rgba(0,0,0,.3);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;transition:border-color .3s ease;will-change:transform,opacity,filter}
.premium-feature-card:hover{border-color:rgba(255,255,255,.45)}
.premium-feature-icon-wrapper{margin-bottom:32px;color:#CB8DFF;display:flex;align-items:center;justify-content:center}
.premium-feature-icon-wrapper svg{width:clamp(36px,3.5vw,48px);height:clamp(36px,3.5vw,48px);opacity:0.95}
.premium-feature-title{font-family:"Instrument Serif",Georgia,serif;font-size:24px;font-weight:400;line-height:1.15;color:#fff;margin:auto 0 8px 0;letter-spacing:-0.01em}
.premium-feature-desc{font-family:"Manrope",sans-serif;font-size:clamp(12px,1vw,14px);line-height:20px;font-weight:400;color:rgba(255,255,255,.64);margin:0;letter-spacing:0.015em}
@media(max-width:768px){
  .premium-features-container{grid-template-columns:1fr;width:calc(100% - 48px);left:24px;transform:translate(0,-50%);top:50%;gap:16px;height:auto;overflow-y:auto;max-height:80vh}
  .premium-feature-card{padding:24px;width:100%;height:auto;min-height:240px}
  .premium-feature-icon-wrapper{margin-bottom:24px}
}

/* --- MISSION TEXT --- */
.mission-container{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:40;padding:0 24px}
@media(min-width:768px){.mission-container{padding:0 48px}}
.mission-inner{position:relative;width:100%;max-width:64rem;height:100%;display:flex;align-items:center;justify-content:center}
.mission-para{position:absolute;text-align:center;user-select:none;pointer-events:none;font-family:"Instrument Serif",Georgia,serif;font-size:1.875rem;color:rgba(255,255,255,.95);line-height:1.375;letter-spacing:-0.025em;will-change:transform,opacity,filter}
@media(min-width:768px){.mission-para{font-size:3rem}}
@media(min-width:1024px){.mission-para{font-size:3.75rem}}
.mission-pill{display:inline-block;padding:2px 16px;margin:0 6px;background:#CB8DFF;color:#fff;border-radius:9999px;vertical-align:middle;font-family:"Instrument Serif",Georgia,serif}
@media(min-width:768px){.mission-pill{padding:4px 24px;margin:0 10px}}

/* --- FEEDBACK FORM --- */
.feedback-container{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:50;padding:0 24px}
@media(min-width:768px){.feedback-container{padding:0 48px}}
.feedback-form-card{position:relative;width:100%;max-width:28rem;background:rgba(0,0,0,.45);backdrop-filter:blur(48px);-webkit-backdrop-filter:blur(48px);border:1px solid rgba(255,255,255,.1);padding:32px;text-align:center;pointer-events:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;user-select:none;will-change:transform,opacity,filter}
@media(min-width:768px){.feedback-form-card{padding:48px}}
.fb-logo{width:40px;height:40px;margin-bottom:20px}
.fb-title{font-family:"Instrument Serif",Georgia,serif;font-size:1.5rem;color:#fff;font-weight:400;letter-spacing:-0.025em;margin:0 0 8px 0;line-height:1.2;white-space:nowrap}
@media(min-width:768px){.fb-title{font-size:1.875rem}}
.fb-sub{font-family:"Space Grotesk",sans-serif;font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:0.05em;margin:0 0 28px 0;line-height:1.625;max-width:20rem}
@media(min-width:768px){.fb-sub{font-size:12px}}
.fb-form{width:100%;display:flex;flex-direction:column;gap:14px}
.fb-input{width:100%;padding:12px 20px;background:rgba(255,255,255,.05);color:#fff;border:1px solid rgba(255,255,255,.1);font-family:"Space Grotesk",sans-serif;font-size:14px;letter-spacing:0.025em;text-align:center;outline:none;transition:all .3s ease}
.fb-input::placeholder{color:rgba(255,255,255,.3)}
.fb-input:hover,.fb-input:focus{background:rgba(255,255,255,.1)}
.fb-input:focus{border-color:#CB8DFF}
@media(min-width:768px){.fb-input{padding:16px 20px;font-size:16px}}
.fb-btn{width:100%;padding:14px 24px;background:#CB8DFF;color:#fff;border:none;cursor:pointer;font-family:"Space Grotesk",sans-serif;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;transition:all .3s ease}
.fb-btn:hover{background:#d9a8ff}
.fb-btn:active{transform:scale(0.98)}
.fb-btn.submitted{background:#059669;cursor:default}
@media(min-width:768px){.fb-btn{padding:16px 24px}}
.fb-success{margin-top:16px;font-family:"Space Grotesk",sans-serif;font-size:12px;color:#34d399;font-weight:500;letter-spacing:0.025em;line-height:1.625;display:none}
.fb-success.show{display:block;animation:fadeIn .5s ease}

/* --- VIDEO BG --- */
.bg-wrapper{position:absolute;top:-5%;left:-5%;right:-5%;bottom:-5%;width:110%;height:110%;pointer-events:none;user-select:none;transform:translate3d(0,0,0);transition:transform .4s cubic-bezier(.15,.85,.35,1)}
.bg-wrapper video{position:absolute;width:0;height:0;opacity:0}
.bg-wrapper canvas{width:100%;height:100%;display:block}

/* --- LOADING --- */
.loading-screen{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#000;z-index:60;transition:opacity 1s ease;padding:24px;text-align:center}
.loading-screen.hidden{opacity:0;pointer-events:none}
.loading-spinner{width:64px;height:64px;margin-bottom:16px;animation:spin 2s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-text{font-family:"JetBrains Mono",monospace;font-size:14px;letter-spacing:0.1em;color:#6b7280;text-transform:uppercase;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* --- ERROR --- */
.error-screen{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#000;z-index:55;padding:24px;text-align:center;display:none}
.error-screen.show{display:flex}
.error-card{padding:16px;border:1px solid #1f2937;border-radius:4px;background:#09090b;max-width:28rem}
.error-title{color:#ef4444;font-family:"JetBrains Mono",monospace;font-size:14px;margin:0 0 8px 0}
.error-msg{color:#9ca3af;font-family:"JetBrains Mono",monospace;font-size:12px;line-height:1.625;margin:0}
</style>
</head>
<body>

<div class="scroll-container" id="scrollContainer">
  <div class="fixed-viewport">

    <!-- Brand header -->
    <div class="premium-brand-header" id="brandHeader">
      <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="premium-brand-logo-svg">
        <g clip-path="url(#cb)">
          <path d="M48.4404 17.6588C47.7017 15.3617 46.2569 13.3584 44.3131 11.9362C42.3693 10.5141 40.0265 9.74617 37.6207 9.74268H37.0462C37.1235 10.2805 37.164 10.8231 37.1676 11.3665C37.1628 14.3622 36.0924 17.2579 34.1489 19.5323C32.2054 21.8066 29.5166 23.3102 26.5664 23.7724C26.6392 24.0729 26.7121 24.3733 26.8092 24.6655C26.9904 25.2224 27.2122 25.7651 27.4728 26.2894L27.4728 26.3543C27.5942 26.5898 27.7236 26.8252 27.8612 27.0526L27.9178 27.15C28.3242 27.8128 28.796 28.433 29.3259 29.0011L29.5687 29.2609L29.9652 29.6263C30.0866 29.74 30.2161 29.8536 30.3537 29.9592L30.7098 30.2515C30.8797 30.3814 31.0577 30.5032 31.2358 30.625L31.5595 30.8523C31.8508 31.0309 32.1502 31.2095 32.4577 31.3638C33.787 32.0468 35.2378 32.4594 36.7266 32.5778C38.2154 32.6963 39.7129 32.5182 41.1329 32.0539C41.4083 31.9667 41.6785 31.8637 41.9421 31.7454C44.6033 30.6611 46.7546 28.6033 47.961 25.9882C49.1674 23.3731 49.3387 20.3958 48.4404 17.6588Z" fill="white"/>
          <path d="M41.4966 33.1341C40.2425 33.5456 38.9316 33.7566 37.6122 33.7593C35.2977 33.7531 33.0303 33.1034 31.0617 31.8822C29.0931 30.6611 27.5005 28.9163 26.4607 26.8418C26.1937 27.0042 25.9428 27.1747 25.6515 27.3614C25.1901 27.702 24.7546 28.0765 24.3486 28.4819L24.3 28.5306C24.1058 28.7173 23.9278 28.9122 23.7497 29.1151L23.685 29.1963C23.1783 29.7906 22.7336 30.4354 22.3578 31.1206C22.3012 31.2261 22.2445 31.3235 22.196 31.4291C22.1474 31.5346 22.0341 31.7538 21.9613 31.9162C21.8885 32.0786 21.8237 32.2329 21.7671 32.3952C21.7104 32.5576 21.6538 32.6794 21.6052 32.8256C21.5567 32.9717 21.4677 33.2315 21.411 33.4345C21.3544 33.6375 21.3382 33.6699 21.3139 33.7917C21.2236 34.1255 21.1534 34.4644 21.1035 34.8066C20.8672 36.2866 20.9251 37.7989 21.2737 39.2564C21.6223 40.7139 22.2548 42.0879 23.1347 43.2992C23.2966 43.5184 23.4746 43.7376 23.6526 43.9406C25.3534 46.0837 27.7685 47.5385 30.4534 48.0372C33.1384 48.045 35.9125 48.045 38.2653 46.6547C40.6181 45.2645 42.3913 43.0685 43.2586 40.4708C44.1259 37.8732 44.029 35.0487 42.9856 32.517C42.5042 32.7574 42.0067 32.9636 41.4966 33.1341Z" fill="white"/>
          <path d="M20.0045 34.6197C20.4175 31.9862 21.6629 29.5556 23.5571 27.686C23.3224 27.4912 23.0796 27.2882 22.8287 27.1096C21.2988 25.9892 19.5119 25.2743 17.6334 25.0311H17.3987C16.9941 24.9905 16.5894 24.958 16.1686 24.958C14.3714 24.962 12.6002 25.3895 10.9978 26.206C9.39542 27.0226 8.00658 28.2053 6.9432 29.659C6.78135 29.8863 6.63568 30.1217 6.49002 30.3572C5.03583 32.6434 4.4443 35.3759 4.82225 38.0613C5.2002 40.7467 6.52271 43.208 8.55098 45.0008C10.5793 46.7937 13.1796 47.7998 15.8825 47.8376C18.5854 47.8754 21.2127 46.9424 23.29 45.207C22.9121 44.8221 22.5632 44.4096 22.2461 43.9729C21.2738 42.6404 20.575 41.1275 20.1902 39.5219C19.8054 37.9163 19.7423 36.25 20.0045 34.6197Z" fill="white"/>
          <path d="M6.01393 28.9525C7.76739 26.527 10.3287 24.8119 13.234 24.1178C16.1392 23.4238 19.1961 23.7967 21.8509 25.169C21.9723 24.8848 22.0856 24.6006 22.1827 24.3002C22.7183 22.6659 22.8815 20.9318 22.6602 19.2258V18.9903C22.6602 18.7955 22.5873 18.6006 22.5469 18.4139C22.5064 18.2271 22.4821 18.1054 22.4417 17.9592C22.4012 17.8131 22.3608 17.6426 22.3122 17.4802C22.2636 17.3178 22.1827 17.0905 22.118 16.8956C22.0532 16.7008 22.029 16.652 21.9804 16.5384C21.8586 16.2165 21.7181 15.902 21.5596 15.5966C20.8885 14.2565 19.9583 13.0639 18.8232 12.0881C17.6881 11.1124 16.3708 10.3731 14.948 9.91321C14.6972 9.83202 14.4544 9.76706 14.2035 9.71023C13.2994 9.47628 12.3696 9.35628 11.4359 9.35299C8.9636 9.30745 6.54433 10.0747 4.54726 11.5375C2.55019 13.0004 1.08498 15.0786 0.375205 17.4551C-0.334567 19.8315 -0.249922 22.3757 0.616224 24.6993C1.48237 27.023 3.08245 28.9986 5.17231 30.3246C5.42183 29.8488 5.70301 29.3904 6.01393 28.9525Z" fill="white"/>
          <path d="M22.5278 15.0688C23.735 17.4435 24.1546 20.143 23.7255 22.7738C24.025 22.7738 24.3325 22.8225 24.6481 22.8225C25.2227 22.8148 25.796 22.766 26.3637 22.6764C28.9618 22.273 31.3392 20.9756 33.0885 19.0065L33.2585 18.8198C33.4041 18.6493 33.5417 18.4707 33.6793 18.2839C33.8169 18.0972 33.833 18.0891 33.9059 17.9835C33.9787 17.878 34.1406 17.6425 34.2458 17.472C34.351 17.3015 34.4076 17.2122 34.4804 17.0823C34.5533 16.9524 34.6666 16.7575 34.7475 16.587C34.8284 16.4165 34.9013 16.2785 34.9741 16.1243C35.0469 15.97 35.1117 15.8076 35.1845 15.6452C35.2573 15.4829 35.314 15.2961 35.3706 15.1175C35.4273 14.9389 35.4839 14.8008 35.5325 14.6466C35.581 14.4923 35.6377 14.2488 35.6862 14.0458C35.7348 13.8428 35.7591 13.7535 35.7833 13.6073C35.8076 13.4612 35.8643 13.1364 35.8966 12.8929C35.929 12.6493 35.8966 12.6493 35.9452 12.5194C35.9452 12.154 36.0018 11.7887 36.0018 11.4071V10.5952C35.8453 7.88465 34.727 5.31985 32.8491 3.36487C30.9712 1.40989 28.4579 0.193859 25.7639 -0.0631835C23.0699 -0.320226 20.3731 0.398699 18.1616 1.96351C15.9501 3.52831 14.37 5.83563 13.707 8.46797C14.2332 8.56239 14.7523 8.69259 15.2608 8.85768C16.8205 9.36099 18.2656 10.1689 19.5128 11.2349C20.76 12.3008 21.7847 13.6038 22.5278 15.0688Z" fill="white"/>
        </g>
        <defs><clipPath id="cb"><rect width="49" height="48" fill="white"/></clipPath></defs>
      </svg>
      <span class="premium-brand-text">Bloom</span>
    </div>

    <!-- Navigation -->
    <header class="premium-header-nav" id="navHeader">
      <nav class="premium-nav-desktop">
        <ul class="premium-nav-list">
          <li class="premium-nav-item"><a href="#atelier" class="premium-nav-link">Atelier</a></li>
          <li class="premium-nav-item"><a href="#collections" class="premium-nav-link">Collections</a></li>
          <li class="premium-nav-item"><a href="#rituals" class="premium-nav-link">Rituals</a></li>
          <li class="premium-nav-item"><a href="#about" class="premium-nav-link">About</a></li>
          <li class="premium-nav-item"><a href="#contact" class="premium-nav-link">Contact</a></li>
        </ul>
      </nav>
      <button class="premium-hamburger" id="hamburgerBtn" aria-label="Open menu">
        <span class="premium-hamburger-line" id="hLine1"></span>
        <span class="premium-hamburger-line" id="hLine2"></span>
        <span class="premium-hamburger-line" id="hLine3"></span>
      </button>
    </header>

    <!-- Mobile menu -->
    <div class="premium-mobile-menu" id="mobileMenu">
      <nav>
        <ul class="premium-mobile-menu-list">
          <li><a href="#atelier" class="premium-mobile-menu-link mobile-link">Atelier</a></li>
          <li><a href="#collections" class="premium-mobile-menu-link mobile-link">Collections</a></li>
          <li><a href="#rituals" class="premium-mobile-menu-link mobile-link">Rituals</a></li>
          <li><a href="#about" class="premium-mobile-menu-link mobile-link">About</a></li>
          <li><a href="#contact" class="premium-mobile-menu-link mobile-link">Contact</a></li>
        </ul>
      </nav>
    </div>

    <!-- Botanical card -->
    <div class="premium-botanical-card" id="botanicalCard">
      <h2 class="premium-card-title">Merging <span class="italic">Silicon</span> With Organic <span class="italic">Life.</span></h2>
      <p class="premium-card-subtext">Developing Next-Generation Cyber-Botanical Systems Designed To Heal Ecosystems And Advance Human Tech.</p>
      <button class="premium-action-circle" id="ctaBtn" aria-label="Explore systems">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M29.5 4.5L37 12m0 0l-7.5 7.5M37 12H3"/>
        </svg>
      </button>
    </div>

    <!-- Feature cards -->
    <div class="premium-features-container" id="featuresContainer" style="visibility:hidden">
      <div class="premium-feature-card" id="fCard1" style="opacity:0">
        <div class="premium-feature-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/></svg>
        </div>
        <h3 class="premium-feature-title">Neural Synthesis</h3>
        <p class="premium-feature-desc">Hybrid bio-computing linking mycelium networks with logical silicon cores.</p>
      </div>
      <div class="premium-feature-card" id="fCard2" style="opacity:0">
        <div class="premium-feature-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3m14.5-4.5l-11 11m11 0l-11-11"/></svg>
        </div>
        <h3 class="premium-feature-title">Ecosystem Remediation</h3>
        <p class="premium-feature-desc">Self-replicating biomechanical flora actively restoring and cleansing heavily toxic soil bases.</p>
      </div>
      <div class="premium-feature-card" id="fCard3" style="opacity:0">
        <div class="premium-feature-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 3L7 12h12l-6 9"/></svg>
        </div>
        <h3 class="premium-feature-title">Kinetic Transduction</h3>
        <p class="premium-feature-desc">Converting natural photosynthesis cycles into electrical energy for local grids.</p>
      </div>
    </div>

    <!-- Mission text -->
    <div class="mission-container" id="missionContainer" style="visibility:hidden">
      <div class="mission-inner">
        <div class="mission-para" id="mPara1" style="opacity:0">To gracefully cultivate a newly balanced <span class="mission-pill">ecosystem</span> we dissolve all boundaries between technology and nature.</div>
        <div class="mission-para" id="mPara2" style="opacity:0">By rewriting the biological code of our <span class="mission-pill">planet</span> we employ specialized photosynthesis to heal broken landscapes.</div>
        <div class="mission-para" id="mPara3" style="opacity:0">We believe that growing through botanical <span class="mission-pill">symbiosis</span> is the ultimate pathway to power the future of humanity.</div>
      </div>
    </div>

    <!-- Feedback form -->
    <div class="feedback-container" id="feedbackContainer" style="visibility:hidden">
      <div class="feedback-form-card" id="feedbackForm" style="opacity:0">
        <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="fb-logo">
          <g clip-path="url(#cf)">
            <path d="M48.4404 17.6588C47.7017 15.3617 46.2569 13.3584 44.3131 11.9362C42.3693 10.5141 40.0265 9.74617 37.6207 9.74268H37.0462C37.1235 10.2805 37.164 10.8231 37.1676 11.3665C37.1628 14.3622 36.0924 17.2579 34.1489 19.5323C32.2054 21.8066 29.5166 23.3102 26.5664 23.7724C26.6392 24.0729 26.7121 24.3733 26.8092 24.6655C26.9904 25.2224 27.2122 25.7651 27.4728 26.2894L27.4728 26.3543C27.5942 26.5898 27.7236 26.8252 27.8612 27.0526L27.9178 27.15C28.3242 27.8128 28.796 28.433 29.3259 29.0011L29.5687 29.2609L29.9652 29.6263C30.0866 29.74 30.2161 29.8536 30.3537 29.9592L30.7098 30.2515C30.8797 30.3814 31.0577 30.5032 31.2358 30.625L31.5595 30.8523C31.8508 31.0309 32.1502 31.2095 32.4577 31.3638C33.787 32.0468 35.2378 32.4594 36.7266 32.5778C38.2154 32.6963 39.7129 32.5182 41.1329 32.0539C41.4083 31.9667 41.6785 31.8637 41.9421 31.7454C44.6033 30.6611 46.7546 28.6033 47.961 25.9882C49.1674 23.3731 49.3387 20.3958 48.4404 17.6588Z" fill="white"/>
            <path d="M41.4966 33.1341C40.2425 33.5456 38.9316 33.7566 37.6122 33.7593C35.2977 33.7531 33.0303 33.1034 31.0617 31.8822C29.0931 30.6611 27.5005 28.9163 26.4607 26.8418C26.1937 27.0042 25.9428 27.1747 25.6515 27.3614C25.1901 27.702 24.7546 28.0765 24.3486 28.4819L24.3 28.5306C24.1058 28.7173 23.9278 28.9122 23.7497 29.1151L23.685 29.1963C23.1783 29.7906 22.7336 30.4354 22.3578 31.1206C22.3012 31.2261 22.2445 31.3235 22.196 31.4291C22.1474 31.5346 22.0341 31.7538 21.9613 31.9162C21.8885 32.0786 21.8237 32.2329 21.7671 32.3952C21.7104 32.5576 21.6538 32.6794 21.6052 32.8256C21.5567 32.9717 21.4677 33.2315 21.411 33.4345C21.3544 33.6375 21.3382 33.6699 21.3139 33.7917C21.2236 34.1255 21.1534 34.4644 21.1035 34.8066C20.8672 36.2866 20.9251 37.7989 21.2737 39.2564C21.6223 40.7139 22.2548 42.0879 23.1347 43.2992C23.2966 43.5184 23.4746 43.7376 23.6526 43.9406C25.3534 46.0837 27.7685 47.5385 30.4534 48.0372C33.1384 48.045 35.9125 48.045 38.2653 46.6547C40.6181 45.2645 42.3913 43.0685 43.2586 40.4708C44.1259 37.8732 44.029 35.0487 42.9856 32.517C42.5042 32.7574 42.0067 32.9636 41.4966 33.1341Z" fill="white"/>
            <path d="M20.0045 34.6197C20.4175 31.9862 21.6629 29.5556 23.5571 27.686C23.3224 27.4912 23.0796 27.2882 22.8287 27.1096C21.2988 25.9892 19.5119 25.2743 17.6334 25.0311H17.3987C16.9941 24.9905 16.5894 24.958 16.1686 24.958C14.3714 24.962 12.6002 25.3895 10.9978 26.206C9.39542 27.0226 8.00658 28.2053 6.9432 29.659C6.78135 29.8863 6.63568 30.1217 6.49002 30.3572C5.03583 32.6434 4.4443 35.3759 4.82225 38.0613C5.2002 40.7467 6.52271 43.208 8.55098 45.0008C10.5793 46.7937 13.1796 47.7998 15.8825 47.8376C18.5854 47.8754 21.2127 46.9424 23.29 45.207C22.9121 44.8221 22.5632 44.4096 22.2461 43.9729C21.2738 42.6404 20.575 41.1275 20.1902 39.5219C19.8054 37.9163 19.7423 36.25 20.0045 34.6197Z" fill="white"/>
            <path d="M6.01393 28.9525C7.76739 26.527 10.3287 24.8119 13.234 24.1178C16.1392 23.4238 19.1961 23.7967 21.8509 25.169C21.9723 24.8848 22.0856 24.6006 22.1827 24.3002C22.7183 22.6659 22.8815 20.9318 22.6602 19.2258V18.9903C22.6602 18.7955 22.5873 18.6006 22.5469 18.4139C22.5064 18.2271 22.4821 18.1054 22.4417 17.9592C22.4012 17.8131 22.3608 17.6426 22.3122 17.4802C22.2636 17.3178 22.1827 17.0905 22.118 16.8956C22.0532 16.7008 22.029 16.652 21.9804 16.5384C21.8586 16.2165 21.7181 15.902 21.5596 15.5966C20.8885 14.2565 19.9583 13.0639 18.8232 12.0881C17.6881 11.1124 16.3708 10.3731 14.948 9.91321C14.6972 9.83202 14.4544 9.76706 14.2035 9.71023C13.2994 9.47628 12.3696 9.35628 11.4359 9.35299C8.9636 9.30745 6.54433 10.0747 4.54726 11.5375C2.55019 13.0004 1.08498 15.0786 0.375205 17.4551C-0.334567 19.8315 -0.249922 22.3757 0.616224 24.6993C1.48237 27.023 3.08245 28.9986 5.17231 30.3246C5.42183 29.8488 5.70301 29.3904 6.01393 28.9525Z" fill="white"/>
            <path d="M22.5278 15.0688C23.735 17.4435 24.1546 20.143 23.7255 22.7738C24.025 22.7738 24.3325 22.8225 24.6481 22.8225C25.2227 22.8148 25.796 22.766 26.3637 22.6764C28.9618 22.273 31.3392 20.9756 33.0885 19.0065L33.2585 18.8198C33.4041 18.6493 33.5417 18.4707 33.6793 18.2839C33.8169 18.0972 33.833 18.0891 33.9059 17.9835C33.9787 17.878 34.1406 17.6425 34.2458 17.472C34.351 17.3015 34.4076 17.2122 34.4804 17.0823C34.5533 16.9524 34.6666 16.7575 34.7475 16.587C34.8284 16.4165 34.9013 16.2785 34.9741 16.1243C35.0469 15.97 35.1117 15.8076 35.1845 15.6452C35.2573 15.4829 35.314 15.2961 35.3706 15.1175C35.4273 14.9389 35.4839 14.8008 35.5325 14.6466C35.581 14.4923 35.6377 14.2488 35.6862 14.0458C35.7348 13.8428 35.7591 13.7535 35.7833 13.6073C35.8076 13.4612 35.8643 13.1364 35.8966 12.8929C35.929 12.6493 35.8966 12.6493 35.9452 12.5194C35.9452 12.154 36.0018 11.7887 36.0018 11.4071V10.5952C35.8453 7.88465 34.727 5.31985 32.8491 3.36487C30.9712 1.40989 28.4579 0.193859 25.7639 -0.0631835C23.0699 -0.320226 20.3731 0.398699 18.1616 1.96351C15.9501 3.52831 14.37 5.83563 13.707 8.46797C14.2332 8.56239 14.7523 8.69259 15.2608 8.85768C16.8205 9.36099 18.2656 10.1689 19.5128 11.2349C20.76 12.3008 21.7847 13.6038 22.5278 15.0688Z" fill="white"/>
          </g>
          <defs><clipPath id="cf"><rect width="49" height="48" fill="white"/></clipPath></defs>
        </svg>
        <h3 class="fb-title">Cultivate alignment</h3>
        <p class="fb-sub">Subscribe to biological updates &amp; cybernetic releases.</p>
        <form class="fb-form" id="fbForm">
          <input type="email" required placeholder="name@ecosystem.com" class="fb-input" id="fbEmail">
          <button type="submit" class="fb-btn" id="fbBtn">CONNECT</button>
        </form>
        <p class="fb-success" id="fbSuccess">Welcome to the digital flora. Check your inbox soon.</p>
      </div>
    </div>

    <!-- Video background -->
    <div class="bg-wrapper" id="bgWrapper">
      <video id="v1" src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606101700_hglz7q.mp4" preload="auto" muted playsinline></video>
      <video id="v2" src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606101702_sd50y0.mp4" preload="auto" muted playsinline></video>
      <video id="v3" src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606101703_jmidj2.mp4" preload="auto" muted playsinline></video>
      <canvas id="mainCanvas"></canvas>
    </div>

    <!-- Loading -->
    <div class="loading-screen" id="loadingScreen">
      <svg class="loading-spinner" viewBox="0 0 64 64" style="transform:rotate(-90deg)">
        <circle cx="32" cy="32" r="28" stroke="#1f2937" stroke-width="2" fill="transparent"/>
        <circle cx="32" cy="32" r="28" stroke="#fff" stroke-width="3" fill="transparent" stroke-dasharray="176" stroke-dashoffset="132" stroke-linecap="round"/>
      </svg>
      <p class="loading-text">Loading experience</p>
    </div>

    <!-- Error -->
    <div class="error-screen" id="errorScreen">
      <div class="error-card">
        <p class="error-title">Video Load Error</p>
        <p class="error-msg">Unable to load video resources. Please check your connection and try reloading.</p>
      </div>
    </div>

  </div>
</div>

<script>
(function(){
  var container = document.getElementById('scrollContainer');
  var videos = { v1: document.getElementById('v1'), v2: document.getElementById('v2'), v3: document.getElementById('v3') };
  var canvas = document.getElementById('mainCanvas');
  var bgWrapper = document.getElementById('bgWrapper');
  var brandHeader = document.getElementById('brandHeader');
  var navHeader = document.getElementById('navHeader');
  var botanicalCard = document.getElementById('botanicalCard');
  var featuresContainer = document.getElementById('featuresContainer');
  var fCard1 = document.getElementById('fCard1');
  var fCard2 = document.getElementById('fCard2');
  var fCard3 = document.getElementById('fCard3');
  var missionContainer = document.getElementById('missionContainer');
  var mPara1 = document.getElementById('mPara1');
  var mPara2 = document.getElementById('mPara2');
  var mPara3 = document.getElementById('mPara3');
  var feedbackContainer = document.getElementById('feedbackContainer');
  var feedbackForm = document.getElementById('feedbackForm');
  var loadingScreen = document.getElementById('loadingScreen');
  var errorScreen = document.getElementById('errorScreen');

  var targetProgress = 0, currentProgress = 0;
  var durations = { v1: 0, v2: 0, v3: 0 };
  var metaLoaded = { v1: false, v2: false, v3: false };
  var seeking = { v1: false, v2: false, v3: false };
  var pendingSeek = { v1: -1, v2: -1, v3: -1 };
  var offscreen = null;

  function getActiveKey(p) { return p <= 0.333 ? 'v1' : p <= 0.666 ? 'v2' : 'v3'; }

  // Canvas draw with double-buffer
  function drawFrame() {
    var p = currentProgress;
    var key = getActiveKey(p);
    var video = videos[key];
    if (!video || video.readyState < 2) return;
    var dpr = window.devicePixelRatio || 1;
    var cW = canvas.width / dpr, cH = canvas.height / dpr;
    if (cW === 0 || cH === 0) return;
    var vW = video.videoWidth || 1920, vH = video.videoHeight || 1080;
    var vA = vW / vH, cA = cW / cH;
    var dW = cW, dH = cH, oX = 0, oY = 0;
    if (vA > cA) { dW = cH * vA; oX = (cW - dW) / 2; }
    else { dH = cW / vA; oY = (cH - dH) / 2; }
    if (!offscreen) offscreen = document.createElement('canvas');
    if (offscreen.width !== canvas.width || offscreen.height !== canvas.height) {
      offscreen.width = canvas.width; offscreen.height = canvas.height;
    }
    var oc = offscreen.getContext('2d');
    if (!oc) return;
    try {
      oc.setTransform(dpr, 0, 0, dpr, 0, 0);
      oc.clearRect(0, 0, cW, cH);
      oc.drawImage(video, oX, oY, dW, dH);
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(offscreen, 0, 0);
    } catch(e) {}
  }

  function handleResize() {
    var parent = canvas.parentElement;
    if (!parent) return;
    var dpr = window.devicePixelRatio || 1;
    var w = parent.clientWidth, h = parent.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    if (offscreen) { offscreen.width = canvas.width; offscreen.height = canvas.height; }
    drawFrame();
  }

  function safeSeek(key, targetTime) {
    var video = videos[key];
    if (!video) return;
    var dur = durations[key] || video.duration || 10;
    var clamped = Math.max(0, Math.min(targetTime, dur - 0.05));
    if (Math.abs(video.currentTime - clamped) < 0.01) return;
    if (seeking[key]) { pendingSeek[key] = clamped; return; }
    seeking[key] = true; pendingSeek[key] = -1;
    video.currentTime = clamped;
  }

  ['v1','v2','v3'].forEach(function(key) {
    videos[key].addEventListener('seeked', function() {
      seeking[key] = false;
      if (key === getActiveKey(currentProgress)) drawFrame();
      if (pendingSeek[key] >= 0) { var t = pendingSeek[key]; pendingSeek[key] = -1; safeSeek(key, t); }
    });
  });

  // Loading
  function checkAllReady() {
    if (metaLoaded.v1 && metaLoaded.v2 && metaLoaded.v3) {
      setTimeout(function() { loadingScreen.classList.add('hidden'); handleResize(); }, 100);
    }
  }
  ['v1','v2','v3'].forEach(function(key) {
    var el = videos[key];
    function onMeta() {
      var d = el.duration;
      if (d && !isNaN(d) && d > 0 && d !== Infinity) { durations[key] = d; metaLoaded[key] = true; checkAllReady(); }
    }
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('durationchange', onMeta);
    el.addEventListener('canplay', onMeta);
    el.addEventListener('error', function() { errorScreen.classList.add('show'); });
    if (el.readyState >= 1) onMeta();
  });
  setTimeout(function() {
    ['v1','v2','v3'].forEach(function(key) {
      if (!metaLoaded[key]) { durations[key] = videos[key].duration || 10; metaLoaded[key] = true; }
    });
    checkAllReady();
  }, 8000);

  window.addEventListener('resize', handleResize);

  // Cursor parallax
  window.addEventListener('mousemove', function(e) {
    var x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    var y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    bgWrapper.style.transform = 'translate3d(' + (x * -24) + 'px,' + (y * -24) + 'px,0)';
  });

  // Scroll progress
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = container.scrollHeight - window.innerHeight;
    targetProgress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollTop / maxScroll)) : 0;
  }, { passive: true });

  // Helpers
  function setVisible(el, v) { if (!el) return; el.style.visibility = v ? 'visible' : 'hidden'; el.style.pointerEvents = v ? 'auto' : 'none'; }
  function applyStyle(el, op, tx, ty, bl) {
    if (!el) return;
    el.style.opacity = op;
    el.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)';
    el.style.filter = 'blur(' + bl + 'px)';
  }

  // Main rAF loop
  function tick() {
    currentProgress += (targetProgress - currentProgress) * 0.08;
    var p = currentProgress;

    var activeKey = getActiveKey(p);
    var pLocal = activeKey === 'v1' ? Math.max(0, Math.min(1, p * 3))
      : activeKey === 'v2' ? Math.max(0, Math.min(1, (p - 0.333) * 3))
      : Math.max(0, Math.min(1, (p - 0.666) * 3));
    safeSeek(activeKey, pLocal * (durations[activeKey] || 10));

    // Botanical Card
    var f = Math.min(1, Math.max(0, p / 0.15));
    applyStyle(botanicalCard, 1 - f, f * -35, f * 35, f * 16);
    botanicalCard.style.pointerEvents = f > 0.95 ? 'none' : 'auto';

    // Nav header
    f = Math.min(1, Math.max(0, (p - 0.03) / 0.15));
    applyStyle(navHeader, 1 - f, 0, f * -35, f * 14);
    navHeader.style.pointerEvents = f > 0.95 ? 'none' : 'auto';

    // Brand header
    f = Math.min(1, Math.max(0, (p - 0.06) / 0.15));
    applyStyle(brandHeader, 1 - f, f * -25, f * -35, f * 12);
    brandHeader.style.pointerEvents = f > 0.95 ? 'none' : 'auto';

    // Feature cards
    var show = p > 0.13 && p < 0.55;
    setVisible(featuresContainer, show);
    function animCard(el, enterStart, enterDur, exitStart, exitDur, tx, ty) {
      if (!el) return;
      var op = 0, bl = 16, x = tx, y = ty;
      if (p >= enterStart && p <= 0.333) {
        var r = Math.min(1, Math.max(0, (p - enterStart) / enterDur));
        op = r; bl = (1 - r) * 16; x = (1 - r) * tx; y = (1 - r) * ty;
      } else if (p > 0.333 && p <= exitStart + exitDur) {
        var r = Math.min(1, Math.max(0, (p - exitStart) / exitDur));
        op = 1 - r; bl = r * 16; x = r * tx; y = r * ty;
      }
      applyStyle(el, op, x, y, bl);
    }
    animCard(fCard1, 0.15, 0.15, 0.333, 0.12, -35, 35);
    animCard(fCard2, 0.18, 0.13, 0.333, 0.15, 0, 35);
    animCard(fCard3, 0.21, 0.11, 0.333, 0.18, 35, 35);

    // Mission paragraphs
    setVisible(missionContainer, p > 0.44);
    function animPara(el, inS, inE, holdE, outE) {
      if (!el) return;
      var op = 0, bl = 20, y = 120;
      if (p >= inS && p < inE) { var r = (p - inS) / (inE - inS); op = r; bl = (1 - r) * 20; y = (1 - r) * 120; }
      else if (p >= inE && p <= holdE) { op = 1; bl = 0; y = 0; }
      else if (p > holdE && p <= outE) { var r = (p - holdE) / (outE - holdE); op = 1 - r; bl = r * 20; y = r * -120; }
      else if (p > outE) { op = 0; bl = 20; y = -120; }
      applyStyle(el, op, 0, y, bl);
    }
    animPara(mPara1, 0.44, 0.47, 0.59, 0.62);
    animPara(mPara2, 0.62, 0.65, 0.77, 0.80);
    animPara(mPara3, 0.80, 0.83, 0.95, 0.98);

    // Feedback form
    setVisible(feedbackContainer, p > 0.93);
    if (p > 0.93) {
      var opF = 0, blF = 20, yF = 120;
      if (p >= 0.94 && p < 0.97) { var r = (p - 0.94) / 0.03; opF = r; blF = (1 - r) * 20; yF = (1 - r) * 120; }
      else if (p >= 0.97) { opF = 1; blF = 0; yF = 0; }
      applyStyle(feedbackForm, opF, 0, yF, blF);
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Hamburger menu
  var menuOpen = false;
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var hLine1 = document.getElementById('hLine1');
  var hLine2 = document.getElementById('hLine2');
  var hLine3 = document.getElementById('hLine3');
  hamburgerBtn.addEventListener('click', function() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    hLine1.classList.toggle('top-open', menuOpen);
    hLine2.classList.toggle('mid-open', menuOpen);
    hLine3.classList.toggle('bot-open', menuOpen);
    hamburgerBtn.setAttribute('aria-label', menuOpen ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.mobile-link').forEach(function(a) {
    a.addEventListener('click', function() {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      hLine1.classList.remove('top-open');
      hLine2.classList.remove('mid-open');
      hLine3.classList.remove('bot-open');
    });
  });

  // CTA button
  document.getElementById('ctaBtn').addEventListener('click', function() {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  });

  // Feedback form
  var fbForm = document.getElementById('fbForm');
  var fbBtn = document.getElementById('fbBtn');
  var fbSuccess = document.getElementById('fbSuccess');
  fbForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('fbEmail').value.trim();
    if (email) {
      fbBtn.textContent = 'SUBMITTED';
      fbBtn.classList.add('submitted');
      fbBtn.disabled = true;
      fbSuccess.classList.add('show');
    }
  });
})();
</script>
</body>
</html>
