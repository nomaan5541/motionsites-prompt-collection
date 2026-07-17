Build a single-page hero section titled "Learnly - Professional Learning Platform" using Vite + React + TypeScript + Tailwind. There is no Framer Motion, no inline SVG, and no icon library usage — all animation is done with pure CSS transitions/keyframes (none needed) and transforms. Use Supabase as the database if persistence is ever added.

Create the following files exactly:

---

**`package.json`**
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

---

**`tailwind.config.js`**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

**`postcss.config.js`**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

**`index.html`**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Learnly - Professional Learning Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

**`src/main.tsx`**
```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

**`src/index.css`** (full file with fonts loaded via HTML `<link>`, no `@keyframes` — all animation is CSS transitions)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-soft: #f4f4f2;
  --card-bg: #ffffff;
  --text-main: #1a1e2d;
  --text-muted: #666666;
  --accent: #fdb181;
  --accent-hover: #fa9d63;
  --dark: #1a1e2d;
  --radius-lg: 40px;
  --radius-md: 20px;
  --transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Outfit', sans-serif;
  background: radial-gradient(circle at top right, #fdfdfd 0%, #f4f4f2 100%);
  color: var(--text-main);
  min-height: 100vh;
  overflow-x: hidden;
}

.c6-hero {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 60px 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.c6-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 100;
}
.c6-logo {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  z-index: 101;
}
.c6-logo span { color: var(--accent); }

.c6-menu { display: flex; gap: 40px; }
.c6-menu a {
  text-decoration: none;
  font-size: 0.95rem;
  color: var(--text-muted);
  font-weight: 500;
  transition: var(--transition);
}
.c6-menu a:hover { color: var(--text-main); }

.c6-hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  z-index: 101;
}
.c6-hamburger span {
  display: block;
  width: 28px;
  height: 2.5px;
  background: var(--text-main);
  border-radius: 2px;
  transition: var(--transition);
}

.c6-mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  height: 100vh;
  background: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 120px 40px;
  gap: 30px;
  box-shadow: -10px 0 30px rgba(0,0,0,0.05);
  transition: right 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.c6-mobile-nav.open { right: 0; }
.c6-mobile-nav a {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--text-main);
}

.c6-actions { display: flex; align-items: center; gap: 25px; }
.c6-login {
  font-size: 0.95rem;
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
}
.c6-trial {
  background: var(--dark);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}
.c6-trial:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

.c6-main {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.c6-left { padding-top: 20px; }
.c6-title {
  font-size: 5.5rem;
  line-height: 1.05;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 40px;
  letter-spacing: -2px;
}

.c6-search-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  z-index: 5;
}
.c6-search {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: white;
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  padding: 0;
}
.c6-search input {
  flex: 1;
  border: none;
  padding: 18px 25px;
  outline: none;
  font-size: 1.1rem;
  font-family: inherit;
  color: var(--text-main);
  background: transparent;
  border-radius: 0;
  min-width: 0;
}
.c6-search input::placeholder { color: #bbb; }
.c6-search button {
  background: linear-gradient(to bottom, #8BBF77 50%, var(--accent) 50%);
  background-size: 100% 200%;
  background-position: 0 100%;
  border: none;
  padding: 16px 45px;
  border-radius: 0;
  color: var(--text-main);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  font-size: 1.1rem;
  overflow: hidden;
  position: relative;
}
.c6-search button:hover {
  background-position: 0 0%;
  color: white;
  transform: scale(1.02);
}

.c6-right {
  display: flex;
  gap: 15px;
  height: 550px;
}
.c6-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  flex: 1;
  min-width: 0;
  transition: flex 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s ease;
  cursor: pointer;
}

.c6-card:first-child { flex: 2.5; }

.c6-card:hover { flex: 2.5; transform: translateY(-5px); }

.c6-right:hover .c6-card:not(:hover) { flex: 0.8; }

.c6-card img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: auto;
  max-width: none;
  display: block;
}

.c6-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
}

.c6-card-content {
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: white;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.4s ease;
}

.c6-card-title { font-size: 2.2rem; font-weight: 600; line-height: 1.1; white-space: nowrap; }
.c6-card-topics { text-align: right; }
.c6-card-topics .num { font-size: 2rem; font-weight: 700; display: block; line-height: 1; }
.c6-card-topics .label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8; }

.c6-card-side-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 30px;
  z-index: 3;
  opacity: 1;
  transition: opacity 0.4s ease;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, transparent 50%);
}
.c6-card:hover .c6-card-side-content { opacity: 0; pointer-events: none; }

.c6-card:not(:hover) .c6-card-content { opacity: 0; transform: translateY(10px); }
.c6-card:first-child .c6-card-content { opacity: 1; transform: translateY(0); }
.c6-card:first-child .c6-card-side-content { opacity: 0; }

.c6-right:hover .c6-card:first-child:not(:hover) .c6-card-content { opacity: 0; transform: translateY(10px); }
.c6-right:hover .c6-card:first-child:not(:hover) .c6-card-side-content { opacity: 1; }

.c6-vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.8rem;
  font-weight: 600;
  white-space: nowrap;
  color: white;
  text-transform: capitalize;
  padding: 20px 10px;
  position: relative;
  background: linear-gradient(to top, transparent 50%, #1C1D2D 50%);
  border-radius: 0;
}

.c6-bottom-info {
  text-align: center;
  margin-top: auto;
  padding: 40px 0;
}
.c6-bottom-info h3 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -1px;
  margin: 0;
}

@media (max-width: 1200px) {
  .c6-hero { padding: 40px 60px; }
  .c6-title { font-size: 4.5rem; }
  .c6-main { grid-template-columns: 1fr; gap: 40px; }
  .c6-right { height: 450px; }
}

@media (max-width: 768px) {
  .c6-hero {
    padding: 30px 20px;
    overflow-x: hidden;
  }
  .c6-menu, .c6-actions { display: none; }

  .c6-hamburger { display: flex; }
  .c6-hamburger.active span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
  .c6-hamburger.active span:nth-child(2) { opacity: 0; }
  .c6-hamburger.active span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }

  .c6-title { font-size: 3.5rem; letter-spacing: -1px; margin-bottom: 30px; }

  .c6-right {
    height: 400px;
    width: calc(100% + 40px);
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px 0 20px 0;
    gap: 15px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin: 0 -20px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
  }
  .c6-right::-webkit-scrollbar { display: none; }

  .c6-card {
    flex: 0 0 300px;
    scroll-snap-align: center;
    height: 100%;
    transform: none !important;
  }
  .c6-card:first-child { flex: 0 0 300px; }
  .c6-right:hover .c6-card:not(:hover) { flex: 0 0 300px; }

  .c6-card-content {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .c6-card-side-content {
    opacity: 0 !important;
    display: none;
  }

  .c6-card:hover { flex: 0 0 300px !important; }
  .c6-right:hover .c6-card { flex: 0 0 300px !important; }
  .c6-card-title { font-size: 1.8rem; }
  .c6-card-topics .num { font-size: 1.5rem; }

  .c6-bottom-info h3 { font-size: 1.8rem; line-height: 1.2; }

  .c6-search button {
    padding: 16px 25px;
    font-size: 1rem;
  }
  .c6-search input {
    padding: 18px 15px;
    font-size: 1rem;
    min-width: 0;
  }
}
```

---

**`src/App.tsx`** (full file — no Tailwind classes, no Framer Motion, no inline SVG)
```tsx
import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const cards = [
    {
      img: 'https://images.pexels.com/photos/5212675/pexels-photo-5212675.jpeg',
      alt: 'Editing Specialist',
      label: 'Editing',
      titleTop: 'Editing',
      titleBottom: 'Module',
      num: 100,
    },
    {
      img: 'https://images.pexels.com/photos/8617763/pexels-photo-8617763.jpeg',
      alt: 'Editing Primer',
      label: 'Editing',
      titleTop: 'Editing',
      titleBottom: 'Module',
      num: 45,
    },
    {
      img: 'https://images.pexels.com/photos/6333648/pexels-photo-6333648.jpeg',
      alt: 'Commerce Journey',
      label: 'Commerce',
      titleTop: 'Commerce',
      titleBottom: 'Journey',
      num: 82,
    },
  ];

  return (
    <div className="c6-hero">
      <nav className="c6-nav">
        <div className="c6-logo">
          Learnly<span>.</span>
        </div>

        <div className="c6-menu">
          <a href="#">Chase dreams</a>
          <a href="#">Collection</a>
          <a href="#">Trades</a>
          <a href="#">Students</a>
        </div>

        <div className="c6-actions">
          <a href="#" className="c6-login">Enter</a>
          <a href="#" className="c6-trial">Try It Now</a>
        </div>

        <button
          className={`c6-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`c6-mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={closeMenu}>Chase dreams</a>
          <a href="#" onClick={closeMenu}>Collection</a>
          <a href="#" onClick={closeMenu}>Trades</a>
          <a href="#" onClick={closeMenu}>Students</a>
          <a
            href="#"
            onClick={closeMenu}
            style={{ marginTop: 20, color: 'var(--accent)' }}
          >
            Enter
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="c6-trial"
            style={{ textAlign: 'center', color: 'white' }}
          >
            Try It Now
          </a>
        </div>
      </nav>

      <main className="c6-main">
        <div className="c6-left">
          <h1 className="c6-title">
            Study.<br />Train.<br />Rise.
          </h1>
          <div className="c6-search-container">
            <div className="c6-search">
              <input type="text" placeholder="Chase your dreams" />
              <button>Up</button>
            </div>
          </div>
        </div>

        <div className="c6-right">
          {cards.map((card, i) => (
            <div className="c6-card" key={i}>
              <img src={card.img} alt={card.alt} />
              <div className="c6-card-side-content">
                <div className="c6-vertical-text">{card.label}</div>
              </div>
              <div className="c6-card-content">
                <div className="c6-card-title">
                  {card.titleTop}<br />{card.titleBottom}
                </div>
                <div className="c6-card-topics">
                  <span className="num">{card.num}</span>
                  <span className="label">Topics</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="c6-bottom-info">
        <h3>Boundless passes to 100+ mentorships.</h3>
      </footer>
    </div>
  );
}

export default App;
```

---

**Asset URLs (verbatim, remote — do not download):**
- `https://images.pexels.com/photos/5212675/pexels-photo-5212675.jpeg`
- `https://images.pexels.com/photos/8617763/pexels-photo-8617763.jpeg`
- `https://images.pexels.com/photos/6333648/pexels-photo-6333648.jpeg`
- Font: `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap`

**Animation values (all CSS, no Framer Motion):**
- Root transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1)`
- Mobile nav slide: `right 0.5s cubic-bezier(0.23, 1, 0.32, 1)`
- Card flex accordion: `flex 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s ease`
- Search button gradient slide: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1)` with hover `transform: scale(1.02)`
- Card content fade/translate: `all 0.4s ease`, inactive state `translateY(10px)` + `opacity 0`
- Card hover lift: `translateY(-5px)`
- Trial button hover: `translateY(-2px)` + `box-shadow: 0 10px 20px rgba(0,0,0,0.1)`
- Hamburger top/bottom bars rotate: `translateY(±8.5px) rotate(±45deg)`; middle bar `opacity: 0`

**Breakpoints:** `max-width: 1200px` and `max-width: 768px` (mobile switches cards to horizontal scroll-snap carousel with 300px card width).