Build a single interactive product card that swaps between a still photo (light mode) and a looping video (dark mode), with a slow crossfade between them.

**Font**

- Use `Neue Montreal` (custom `@font-face`, weights 400/500/700, `.woff2`), falling back to `sans-serif`. Load Material Icons from `https://fonts.googleapis.com/icon?family=Material+Icons`.

**Container / card chrome**

- The card lives in a grid `.cards` (`display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(12px,1.2vw,20px); align-items:stretch;`).
- Each card is wrapped in `.card-frame`:
  - `aspect-ratio:319 / 404;`
  - `border-radius:clamp(18px,1.7vw,28px);`
  - `overflow:hidden; background:#0e0d0c;`
  - `box-shadow:0 36px 70px -34px rgba(28,18,8,.42), 0 4px 14px -8px rgba(0,0,0,.18);`

**Card internals**

- `.direct-card`: `position:relative; width:100%; height:100%; overflow:hidden; background:#1a1714; isolation:isolate;`
- A fixed-size artboard `.direct-card__artboard` (`#directCardTwoArtboard`) that is scaled to fit:
  - `position:absolute; top:50%; left:50%; width:660px; height:836px; border-radius:30px; overflow:hidden; background:#1a1714; isolation:isolate; container-type:inline-size; transform:translate(-50%,-50%) scale(var(--direct-scale,1)); transform-origin:center center;`
  - Compute `--direct-scale` in JS as `Math.min(card.clientWidth/660, card.clientHeight/836)` and recompute on load and `resize`.

**Media layers (inside the artboard, in this order)**

1. Image `.direct-card__photo`:
   - `src="https://res.cloudinary.com/dgupuutfn/image/upload/v1780913983/room2_pihyox.png"`
   - `data-night-src="https://res.cloudinary.com/dgupuutfn/image/upload/v1780913982/room2_night_qc4qeq.png"`
   - `alt="Living room interior"`
   - CSS: `position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 42%; z-index:0;`
2. Video `.direct2-video`:
   - `src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260609_072414_1e4448ec-537f-4f94-b56b-19e00c1550e8.mp4"`
   - attributes: `muted loop playsinline preload="auto"`
   - CSS: same box as photo (`position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 42%; z-index:0;`) plus `opacity:0; pointer-events:none; transition:opacity 4.5s cubic-bezier(0.22, 1, 0.36, 1);`
3. Gradient scrim `.direct2-grade`:
   - `position:absolute; inset:0; z-index:1; pointer-events:none;`
   - `background:linear-gradient(to top, rgba(8,6,4,.92) 0%, rgba(8,6,4,.6) 13%, rgba(8,6,4,.1) 28%, rgba(8,6,4,0) 42%), linear-gradient(to bottom, rgba(20,14,8,.34) 0%, rgba(20,14,8,0) 20%);`

**Footer block `.direct-footer`** (`position:absolute; z-index:4; left:6.2%; right:6.2%; bottom:5.4%; color:#fff;`):
- `.direct-footer__head` (`display:flex; align-items:center; gap:3%; margin-bottom:3.2%;`) containing:
  - `.direct-footer__icon` round badge: `flex:none; width:9.6%; aspect-ratio:1; border-radius:50%; display:flex; align-items:center; justify-content:center;` with inline style `background:#3fae6b; color:#fff; box-shadow:0 10px 24px -10px rgba(63,174,107,.6);`, holding `<span class="material-icons">construction</span>` (icon sized `font-size:clamp(15px,5.6cqw,34px); line-height:1;`).
  - `.direct-footer__title` text "Build the room in real time": `font-weight:700; line-height:1.05; letter-spacing:-.6px; white-space:nowrap; font-size:clamp(18px,5.6cqw,36px);`
- `.direct-footer__desc` text "Move pieces, explore finishes, and align with your studio on one shared canvas.": `color:#d7d2c9; font-weight:500; line-height:1.28; max-width:100%; font-size:clamp(13px,4.2cqw,27px);`

(All footer text uses container query units `cqw`, so the artboard must set `container-type:inline-size`.)

**Dark-mode behavior**

- A `body.is-night` class toggles dark mode (driven by a theme switch elsewhere on the page).
- When `body.is-night` is set: `.direct2-video { opacity:1; }` (fades in over 4.5s; the photo stays beneath). In light mode the video is `opacity:0`.
- In the toggle handler, also `video.play()` (catch/ignore promise rejection) when entering night and `video.pause()` when leaving.
- The still photo additionally swaps its `src` to `data-night-src` on entering night and back on day, with a matching `opacity 4.5s cubic-bezier(0.22, 1, 0.36, 1)` crossfade (fade to 0, swap on `load`, fade back to 1).

**Responsiveness**

- `@media (max-width:920px)`: page scrolls normally (`html,body{height:auto;overflow-y:auto;}`), `.cards` becomes `grid-template-columns:repeat(2,1fr); gap:clamp(16px,3vw,24px);`.
- `@media (max-width:540px)`: `.cards` becomes a single column, `max-width:380px; margin:0 auto;`.
- The artboard scale (`--direct-scale`) keeps the 660×836 internal layout perfectly proportioned at any card size.