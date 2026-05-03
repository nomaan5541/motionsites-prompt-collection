<div align="center">
  <h1>VALORANT — Official Site Clone</h1>
  <p><strong>A pixel-perfect, high-fidelity recreation of the official Valorant website using real data from the Valorant API.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
  </p>

  <br/>
  <a href="https://playvalorant.com" target="_blank">
    <img src="https://img.shields.io/badge/Official_Site-Play_VALORANT-FF4655?style=for-the-badge&logo=riotgames&logoColor=white" alt="Official Site" />
  </a>
</div>

---

## ✨ Features

- **Immersive Hero** — Autoplay cinematic video background with VALORANT branding  
- **Dynamic News Section** — Horizontal scroll with real community & update cards  
- **Latest Episode Highlight** — Full-screen cinematic with “DIMENSION” episode  
- **Agents Experience** — Browse all playable agents, view roles, biographies & abilities (fetched from Valorant API)  
- **Maps Gallery** — Interactive carousel with official map splash art  
- **Fully Responsive** — Mobile-first navbar with smooth hamburger menu  
- **Fast & Modern** — Built with Vite + React + Tailwind (lightning-fast dev & build)  
- **One-click Deploy** — Pre-configured for Netlify  

---

## 🛠 Tech Stack

| Layer          | Technology                          | Purpose                              |
|----------------|-------------------------------------|--------------------------------------|
| Framework      | React 18 + Vite                     | Lightning-fast SPA                   |
| Styling        | Tailwind CSS + custom CSS           | Utility-first design                 |
| Routing        | React Router v6                     | Client-side navigation               |
| Data           | Axios + Valorant API                | Real agents & maps                   |
| Deployment     | Netlify                             | Zero-config hosting                  |
| Icons          | Custom SVGs                         | Riot & Valorant branding             |

---

## 📁 Project Structure

```bash
valorant-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # icons, videos, images
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, CTA
│   │   └── pages/
│   │       ├── home/     # Hero, News, Agents, Maps...
│   │       ├── Agents.jsx, Agent.jsx, Maps.jsx
│   ├── constants/        # navLinks, news, socialMedia
│   ├── style.js          # Tailwind helper styles
│   ├── App.jsx
│   └── main.jsx
├── netlify.toml          # SPA redirect config
├── tailwind.config.cjs
├── vite.config.js
└── package.json
```
### Demo
https://user-images.githubusercontent.com/84263946/210807232-155ac77c-c83c-4f0d-996b-ebe9ee7e7393.mp4
### References
* [Build and Deploy a Fully Responsive Website: Javascript Mastery](https://www.youtube.com/watch?v=_oO4Qi5aVZs&t=521s)
* [Valorant Official Site](https://playvalorant.com/en-gb/)
* [Tailwind CSS Docs](https://tailwindcss.com/)
