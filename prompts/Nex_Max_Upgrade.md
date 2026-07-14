Build a single full-viewport React + TypeScript section (Vite, Tailwind available but styles written via a <style> block) that renders a fixed background video with a pricing-style glass card overlay. The video must play back and forth in a boomerang loop via throttled manual seeking (no native .play()).

Video
Source URL (exact): 
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064209_0cb7d815-ff61-4caa-a6d5-bbff145ab272.mp4

<video> attributes: muted, playsInline, crossOrigin="anonymous", preload="auto", src={VIDEO_SRC}, attached ref.
The video is wrapped in a div.c4-video-wrap that is position: fixed; inset: 0; width:100%; height:100%; z-index:0; pointer-events:none; overflow:hidden.
The video itself is width:100%; height:100%; object-fit:cover; transform: scale(1.35).
Boomerang playback logic (useEffect on mount)
Refs: videoRef, directionRef (1 | -1, default 1), rafRef (number | null), lastTickRef (number, default 0).
Constants: SEEK_INTERVAL_MS = 33, STEP_SECONDS = 0.05.
On loadedmetadata (or immediately if readyState >= 1):
video.pause().
Start a requestAnimationFrame loop loop(now):
If !video.duration || isNaN(video.duration) → schedule next frame and return.
If now - lastTickRef.current >= SEEK_INTERVAL_MS && !video.seeking:
lastTickRef.current = now
next = video.currentTime + STEP_SECONDS * directionRef.current
If next >= video.duration: clamp to duration, flip direction to -1.
Else if next <= 0: clamp to 0, flip direction to 1.
Assign video.currentTime = next.
Schedule next frame.
Cleanup: cancelAnimationFrame(rafRef.current) if set.
The !video.seeking guard is critical — it tells the browser to only issue the next seek once the previous frame has finished decoding/rendering.

Layout / content (inside div.c4-content, max-width 700px, padding 20px, z-index 1)
h1.c4-title — "Power up with Nex Max"
p.c4-subtitle — "Access more tools with a single bundle."
div.c4-grid (two columns) containing two div.c4-card cards:
Card 1 (Base):
Header: span.c4-tier "Base"
div.c4-price "$0"
div.c4-list-title "Contains"
ul.c4-list with items: "Talk with your tabs", "Custom Macros", "An elite web-based tool"
Card 2 (Max):
Header: span.c4-badge "MAX" + span.c4-trial "14-day sample run"
div.c4-price "$25" + inner <span> "a month"
div.c4-list-title "Has all the tools from Base, plus"
ul.c4-list with one item: "Nex unlocked. Chat as much as you want, without meeting limits.*"
button.c4-btn containing an inline Apple-logo <svg> (14×14, viewBox 0 0 24 24, path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.65.72 3.4 1.8-3.02 1.93-2.48 5.68.3 6.84-.66 1.76-1.5 3.33-2.35 4.37zm-2.9-15.18c-.46 2.06-2.45 3.48-4.41 3.2.14-2.18 1.93-3.8 3.9-3.95.12 1.54-.36 2.39.51.75z") and text "Download Nex to start".
p.c4-footer — * if your usage aligns with our <a href="#">Usage Policy</a>, naturally.
Font
Import Google Fonts Inter (weights 300, 400, 500, 600) inside the <style> block:
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
Apply font-family: 'Inter', sans-serif to body.

CSS (exact)

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: #050505;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  text-align: center;
  padding: 40px 0;
}

#root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.c4-video-wrap {
  position: fixed; inset: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
  overflow: hidden;
}
.c4-video-wrap video {
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.35);
}

.c4-content { z-index: 1; width: 100%; max-width: 700px; padding: 20px; }

.c4-title {
  font-size: 2.5rem; font-weight: 300; margin-bottom: 10px;
  background: linear-gradient(to right, #737373, #ffffff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: inline-block;
}
.c4-subtitle { font-size: 1rem; color: #a3a3a3; margin-bottom: 40px; }

.c4-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  margin-bottom: 40px; text-align: left;
}
.c4-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 30px;
  backdrop-filter: blur(10px);
}
.c4-card-header {
  display: flex; justify-content: space-between;
  align-items: center; margin-bottom: 20px;
}
.c4-tier { font-size: 0.85rem; color: #a3a3a3; }
.c4-badge {
  background: white; color: black;
  font-size: 0.7rem; font-weight: 600;
  padding: 2px 6px; border-radius: 4px;
}
.c4-trial {
  border: 1px solid rgba(255,255,255,0.2);
  font-size: 0.75rem; padding: 4px 10px;
  border-radius: 20px; color: #d4d4d4;
}
.c4-price {
  font-size: 2.5rem; font-weight: 400; margin-bottom: 30px;
  display: flex; align-items: baseline;
}
.c4-price span { font-size: 0.9rem; color: #a3a3a3; margin-left: 5px; }
.c4-list-title { font-size: 0.85rem; font-weight: 500; margin-bottom: 15px; }
.c4-list { list-style: none; }
.c4-list li {
  font-size: 0.85rem; color: #d4d4d4;
  margin-bottom: 12px;
  display: flex; align-items: flex-start; gap: 8px;
}
.c4-list li::before { content: '\2713'; color: #fff; }

.c4-btn {
  background: white; color: black; border: none;
  padding: 12px 24px; border-radius: 24px;
  font-weight: 500; font-size: 0.9rem; cursor: pointer;
  display: inline-flex; align-items: center; gap: 8px;
  margin-bottom: 20px;
}
.c4-footer { font-size: 0.7rem; color: #737373; }
.c4-footer a { color: #a3a3a3; text-decoration: underline; }

@media (max-width: 768px) {
  .c4-title { font-size: 2rem; }
  .c4-subtitle { font-size: 0.9rem; margin-bottom: 30px; }
  .c4-grid { grid-template-columns: 1fr; gap: 15px; }
  .c4-card { padding: 25px; }
  .c4-price { font-size: 2rem; }
  .c4-content { padding: 15px; }
}
@media (max-width: 480px) {
  .c4-title { font-size: 1.75rem; }
  .c4-subtitle { font-size: 0.85rem; }
  .c4-card { padding: 20px; }
  .c4-price { font-size: 1.75rem; }
  .c4-list li { font-size: 0.8rem; }
  .c4-btn { padding: 10px 20px; font-size: 0.85rem; }
}
Animations
No CSS keyframe animations.
The sole "animation" is the boomerang video playback driven by the RAF loop described above (33 ms throttle, 0.05 s step, reverses at both ends, skips ticks while video.seeking is true).