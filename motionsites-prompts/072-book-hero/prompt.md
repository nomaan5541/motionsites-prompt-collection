<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Foliom — Book Marquee</title>
<link href="https://db.onlinewebfonts.com/c/d34add1e23bb969e5eb43cc5a4fab3d0?family=Lawrence+W00+Regular" rel="stylesheet">
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; overflow: hidden; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #000; }

body::before {
content: "";
position: fixed;
inset: 0;
background-image:
radial-gradient(rgba(255, 240, 200, 0.025) 1px, transparent 1px),
radial-gradient(rgba(255, 240, 200, 0.015) 1px, transparent 1px);
background-size: 3px 3px, 7px 7px;
pointer-events: none;
z-index: 0;
}

:root {
--book-overlap: 115px;
--hover-push: 60px;
}

/* ---- Hero ---- */
.hero {
position: relative;
width: 100vw;
height: 100vh;
overflow: hidden;
background: #000;
}

.hero-title {
position: absolute;
top: 130px;
left: 50%;
transform: translateX(-50%);
font-family: 'Lawrence W00 Regular', Georgia, 'Times New Roman', serif;
font-weight: 400;
color: #f5f1ea;
font-size: clamp(120px, 26vw, 420px);
line-height: 0.9;
letter-spacing: -0.02em;
white-space: nowrap;
z-index: 1;
user-select: none;
pointer-events: none;
}

/* ---- Categories ---- */
.hero-categories {
position: absolute;
bottom: 40px;
left: 0;
right: 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
z-index: 20;
padding: 0 20px;
}

.hero-category-pill {
padding: 8px 22px;
border: 1px solid rgba(245, 241, 234, 0.2);
border-radius: 999px;
color: rgba(245, 241, 234, 0.75);
font-size: 14px;
letter-spacing: 0.03em;
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(8px);
transition: all 300ms ease;
text-decoration: none;
cursor: pointer;
}

.hero-category-pill:hover {
color: #f5f1ea;
border-color: rgba(245, 241, 234, 0.5);
background: rgba(255, 255, 255, 0.1);
}

/* ---- Navbar ---- */
.navbar {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 200;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 48px;
color: #f5f1ea;
}

.nav-brand {
display: flex;
align-items: center;
gap: 12px;
}

.nav-mark {
width: 28px;
height: 32px;
border: 1.5px solid #f5f1ea;
border-radius: 4px;
position: relative;
flex-shrink: 0;
}
.nav-mark::after {
content: "";
position: absolute;
inset: 4px;
background: #f5f1ea;
border-radius: 2px;
clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
}

.nav-brand-text {
font-family: 'Lawrence W00 Regular', Georgia, serif;
font-size: 1.875rem;
letter-spacing: -0.025em;
color: #f5f1ea;
}

.nav-links {
display: flex;
align-items: center;
gap: 32px;
font-size: 14px;
color: rgba(255, 255, 255, 0.85);
}
.nav-links a {
color: inherit;
text-decoration: none;
transition: color 200ms;
}
.nav-links a:hover { color: #fff; }

.nav-right {
display: flex;
align-items: center;
gap: 24px;
font-size: 14px;
}
.nav-right a {
color: rgba(255, 255, 255, 0.85);
text-decoration: none;
transition: color 200ms;
}
.nav-right a:hover { color: #fff; }

.nav-cta {
background: #f5f1ea !important;
color: #0a0a0a !important;
padding: 10px 20px;
border-radius: 999px;
font-weight: 500;
transition: background 200ms;
}
.nav-cta:hover { background: #fff !important; }

.nav-mobile-toggle {
display: none;
background: none;
border: none;
color: #f5f1ea;
cursor: pointer;
padding: 8px;
}

/* ---- Marquee ---- */
.marquee-mask {
position: absolute;
top: 62%;
left: 50%;
transform: translate(-50%, -50%) rotate(var(--marquee-tilt, -7deg));
width: 140vw;
height: calc(286px + 40vw);
overflow: visible;
z-index: 10;
}

.marquee-fade {
position: absolute;
inset: 0;
overflow: hidden;
mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
-webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);
display: flex;
align-items: center;
width: max-content;
padding: 60px 0;
animation: marquee-scroll 60s linear infinite;
will-change: transform;
}

.marquee-mask:has(.book:hover) .marquee-track {
animation-play-state: paused;
}

@keyframes marquee-scroll {
from { transform: translate(0, -50%); }
to { transform: translate(-50%, -50%); }
}

/* ---- Book wrapper ---- */
.book-wrap {
position: relative;
width: 200px;
height: 286px;
flex-shrink: 0;
margin-right: calc(-1 * var(--book-overlap));
transition:
margin 500ms cubic-bezier(0.2, 0.7, 0.2, 1),
transform 500ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.book-wrap:last-child { margin-right: 0; }

.book-wrap:has(+ .book-wrap .book:hover) {
margin-right: calc(-1 * var(--book-overlap) + var(--hover-push));
}
.book-wrap:has(.book:hover) {
margin-left: var(--hover-push);
z-index: 9999 !important;
}

/* ---- Book ---- */
.book {
position: relative;
height: 286px;
cursor: pointer;
transform: rotate(7deg);
transition: transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
will-change: transform;
}
.book:hover {
transform: rotate(7deg) translateY(-28px) scale(1.06);
z-index: 100;
}

.book-layer {
position: absolute;
top: 0;
left: 0;
width: 200px;
height: 286px;
border-radius: 2px;
transform-origin: 0 0;
}

.book-back-cover {
box-shadow:
inset 0 0 0 1px rgba(0, 0, 0, 0.6),
inset 2px 0 6px rgba(0, 0, 0, 0.5),
inset -2px 0 6px rgba(0, 0, 0, 0.5);
z-index: 1;
filter: brightness(0.7);
}

.book-page {
background: linear-gradient(90deg,
#8a7649 0%, #c9b88a 6%, #f3e7c9 22%, #fbf3dc 50%,
#f3e7c9 78%, #c9b88a 94%, #8a7649 100%);
box-shadow:
inset 0 1px 0 rgba(255, 255, 255, 0.4),
inset 0 -1px 0 rgba(120, 90, 40, 0.25);
}

.book-front-cover {
z-index: 1000;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
box-shadow:
0 0 0 1px rgba(0, 0, 0, 0.3),
inset 0 0 0 1px rgba(255, 255, 255, 0.06),
inset 8px 0 18px -8px rgba(0, 0, 0, 0.5),
inset -3px 0 8px -4px rgba(255, 255, 255, 0.08),
8px 16px 30px rgba(0, 0, 0, 0.6);
}
.book-front-cover::before {
content: "";
position: absolute;
inset: 0;
pointer-events: none;
background: linear-gradient(90deg,
rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 6%,
rgba(0, 0, 0, 0) 94%, rgba(255, 255, 255, 0.10) 100%);
border-radius: inherit;
}

.book-hinge {
position: absolute;
top: 0;
left: 0;
height: 5px;
box-shadow:
inset 0 1px 0 rgba(255, 255, 255, 0.08),
inset 0 -1px 0 rgba(0, 0, 0, 0.6),
0 1px 2px rgba(0, 0, 0, 0.4);
border-radius: 1px;
z-index: 0;
filter: brightness(0.6);
}

/* ---- Responsive ---- */
@media (max-width: 768px) {
:root {
--book-overlap: 90px;
--hover-push: 30px;
}
.navbar { padding: 20px 24px; }
.nav-links, .nav-right { display: none; }
.nav-mobile-toggle { display: block; }
.hero-title {
top: 100px;
font-size: clamp(60px, 18vw, 180px);
}
.hero-categories { bottom: 30px; gap: 8px; padding: 0 16px; }
.hero-category-pill { padding: 6px 16px; font-size: 12px; }
.marquee-mask { top: 58%; height: calc(200px + 30vw); }
.book-wrap { width: 140px; height: 200px; }
.book { height: 200px; }
.book-layer { width: 140px; height: 200px; }
}

@media (max-width: 480px) {
:root {
--book-overlap: 70px;
--hover-push: 20px;
}
.hero-title {
top: 80px;
font-size: clamp(48px, 16vw, 140px);
}
.hero-categories { bottom: 20px; gap: 6px; padding: 0 12px; }
.hero-category-pill { padding: 5px 12px; font-size: 11px; }
.marquee-mask { top: 55%; }
.book-wrap { width: 110px; height: 157px; }
.book { height: 157px; }
.book-layer { width: 110px; height: 157px; }
}

@media (max-width: 360px) {
.hero-title {
top: 72px;
font-size: clamp(40px, 14vw, 100px);
}
.hero-categories { bottom: 16px; gap: 5px; padding: 0 10px; }
.hero-category-pill { padding: 4px 10px; font-size: 10px; }
.book-wrap { width: 90px; height: 128px; }
.book { height: 128px; }
.book-layer { width: 90px; height: 128px; }
}
</style>
</head>
<body>
<section class="hero">
<!-- Navbar -->
<nav class="navbar">
<div class="nav-brand">
<div class="nav-mark"></div>
<div class="nav-brand-text">Foliom</div>
</div>
<div class="nav-links">
<a href="#">Catalogs</a>
<a href="#">Editions</a>
<a href="#">Hub</a>
<a href="#">Info</a>
</div>
<div class="nav-right">
<a href="#">Join us</a>
<a href="#" class="nav-cta">Build Your List</a>
</div>
<button class="nav-mobile-toggle" aria-label="Toggle menu">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
</button>
</nav>

<!-- Title -->
<h1 class="hero-title">Foliom</h1>

<!-- Categories -->
<div class="hero-categories">
<a href="#" class="hero-category-pill">Romance</a>
<a href="#" class="hero-category-pill">Short Story</a>
<a href="#" class="hero-category-pill">Memoir</a>
<a href="#" class="hero-category-pill">Classic</a>
<a href="#" class="hero-category-pill">Fantasy</a>
</div>

<!-- Marquee -->
<div class="marquee-mask" style="--marquee-tilt: -7deg;" id="marquee"></div>
</section>

<script>
const PAGE_STEP = 1.1;
const PAGE_INSET = 8;
const SKEW = '30deg';

const BOOKS = [
{ title: 'Shadows of\nthe Archive', cover: 'linear-gradient(150deg, #2a1a0e 0%, #3d2517 100%)', coverImage: 'book-1.png', pageCount: 22 },
{ title: 'The Temple\nof Lost Suns', cover: 'linear-gradient(150deg, #c46828 0%, #8a4520 100%)', coverImage: 'book-2.png', pageCount: 18 },
{ title: 'Serpent\n& Thorn', cover: 'linear-gradient(150deg, #1a0a10 0%, #2e1018 100%)', coverImage: 'book-3.png', pageCount: 26 },
{ title: 'The Last\nMessage', cover: 'linear-gradient(150deg, #161618 0%, #2a2a2e 100%)', coverImage: 'book-4.png', pageCount: 14 },
{ title: 'All the Light\nWe Cannot See', cover: 'linear-gradient(150deg, #6a7a50 0%, #4a5a38 100%)', coverImage: 'book-5.png', pageCount: 20 },
{ title: 'The Roommate\nRisk', cover: 'linear-gradient(150deg, #e8645a 0%, #c44a40 100%)', coverImage: 'book-6.png', pageCount: 28 },
{ title: 'Ashes of\nAeloria', cover: 'linear-gradient(150deg, #1a1a22 0%, #2a2a30 100%)', coverImage: 'book-7.png', pageCount: 16 },
{ title: 'Own Your\nTime', cover: 'linear-gradient(150deg, #e85a10 0%, #c84a08 100%)', coverImage: 'book-8.png', pageCount: 24 },
{ title: 'The Quiet\nWitness', cover: 'linear-gradient(150deg, #1a1e24 0%, #2a3038 100%)', coverImage: 'book-9.png', pageCount: 30 },
{ title: 'The Light\nWe Carry', cover: 'linear-gradient(150deg, #0e1a30 0%, #1a2a48 100%)', coverImage: 'book-10.png', pageCount: 19 },
{ title: 'The Bright\nBeyond', cover: 'linear-gradient(150deg, #0c1428 0%, #1a2040 100%)', coverImage: 'book-11.png', pageCount: 22 },
{ title: 'The Spaces\nBetween', cover: 'linear-gradient(150deg, #c8b8a0 0%, #a89878 100%)', coverImage: 'book-12.png', pageCount: 15 },
{ title: 'Sunshine and\nSecond Chances', cover: 'linear-gradient(150deg, #f5e6b8 0%, #e8c870 100%)', coverImage: 'book-13.png', pageCount: 20 },
{ title: 'The Stories\nWe Keep', cover: 'linear-gradient(150deg, #b8a0d0 0%, #9480b8 100%)', coverImage: 'book-14.png', pageCount: 18 },
{ title: 'The Right Swing\nWrong Timing', cover: 'linear-gradient(150deg, #f0b8c8 0%, #e8a0b0 100%)', coverImage: 'book-15.png', pageCount: 16 },
{ title: 'Cover 16', cover: 'linear-gradient(150deg, #2a3040 0%, #1a2030 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_045156_4a79ba3c-ba56-4cd4-834b-d9728f56d1a4.png&w=1920&q=85', pageCount: 20 },
{ title: 'Cover 17', cover: 'linear-gradient(150deg, #3a2a18 0%, #2a1a10 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_044451_68c948df-6c4c-45eb-974e-923486a41e41.png&w=1920&q=85', pageCount: 24 },
{ title: 'Cover 18', cover: 'linear-gradient(150deg, #1a2838 0%, #0e1828 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043853_b2f3c7c8-5d47-43bc-9ce4-2fa8d717e42b.png&w=1920&q=85', pageCount: 18 },
{ title: 'Cover 19', cover: 'linear-gradient(150deg, #28201a 0%, #1a1410 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043838_240c7443-18d6-4d61-be4a-2d01e2dd65a6.png&w=1920&q=85', pageCount: 26 },
{ title: 'Cover 20', cover: 'linear-gradient(150deg, #2a3828 0%, #1a2818 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043832_62031210-1de3-47a6-ac3f-78eb84e99858.png&w=1920&q=85', pageCount: 22 },
{ title: 'Cover 21', cover: 'linear-gradient(150deg, #382a20 0%, #281a12 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043220_eb34b2f8-8a78-4b29-bbbc-d61e137aedad.png&w=1920&q=85', pageCount: 14 },
{ title: 'Cover 22', cover: 'linear-gradient(150deg, #1a2028 0%, #101820 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043212_ce1559e3-e0a6-48c8-887f-1331a8e989c5.png&w=1920&q=85', pageCount: 28 },
{ title: 'Cover 23', cover: 'linear-gradient(150deg, #302818 0%, #201810 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_032638_9520b937-d7e8-4f6a-88ba-8bbd1e8ecbfe.png&w=1920&q=85', pageCount: 16 },
{ title: 'Cover 24', cover: 'linear-gradient(150deg, #20282e 0%, #141c22 100%)', coverImage: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043201_f749ce8e-72f6-46eb-8440-0f6bdbf2a782.png&w=1920&q=85', pageCount: 19 },
];

function createBook(book) {
const depth = PAGE_STEP * (book.pageCount + 1);
const bookEl = document.createElement('div');
bookEl.className = 'book';
bookEl.style.width = `${200 + depth + 1.1}px`;

// Hinge
const hinge = document.createElement('div');
hinge.className = 'book-hinge';
hinge.style.width = `${depth + 1}px`;
hinge.style.background = book.cover;
bookEl.appendChild(hinge);

// Back cover
const back = document.createElement('div');
back.className = 'book-layer book-back-cover';
back.style.background = book.cover;
back.style.transform = `translateX(${depth}px) skewY(${SKEW})`;
bookEl.appendChild(back);

// Pages
for (let i = 1; i <= book.pageCount; i++) {
const t = i / book.pageCount;
const page = document.createElement('div');
page.className = 'book-layer book-page';
page.style.transform = `translateX(${PAGE_STEP * i}px) skewY(${SKEW})`;
page.style.zIndex = 2 + (book.pageCount - i);
page.style.filter = `brightness(${(1 - t * 0.06).toFixed(3)})`;
page.style.top = `${PAGE_INSET / 2}px`;
page.style.height = `calc(100% - ${PAGE_INSET}px)`;
bookEl.appendChild(page);
}

// Front cover
const front = document.createElement('div');
front.className = 'book-layer book-front-cover';
front.style.transform = `skewY(${SKEW})`;
if (book.coverImage) {
front.style.backgroundImage = `url(${book.coverImage})`;
front.style.backgroundSize = 'cover';
front.style.backgroundPosition = 'center';
} else {
front.style.background = book.cover;
}
bookEl.appendChild(front);

return bookEl;
}

function buildMarquee() {
const marquee = document.getElementById('marquee');
const fade = document.createElement('div');
fade.className = 'marquee-fade';

const track = document.createElement('div');
track.className = 'marquee-track';

const allBooks = [...BOOKS, ...BOOKS];
const total = allBooks.length;

allBooks.forEach((book, i) => {
const wrap = document.createElement('div');
wrap.className = 'book-wrap';
wrap.style.zIndex = total - i;
wrap.appendChild(createBook(book));
track.appendChild(wrap);
});

fade.appendChild(track);
marquee.appendChild(fade);
}

buildMarquee();
</script>
</body>
</html>