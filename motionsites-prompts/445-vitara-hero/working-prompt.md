# Vitara

**ID:** vitara-hero  
**Category:** Landing Page  
**Type:** hero  

---

Create a modern healthcare AI landing page with a full-screen video background hero section with the following exact specifications:

VIDEO BACKGROUND:

Use this exact CloudFront video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_134434_5de46cb4-38e7-42a6-a8bc-6e62b2fd6c7b.mp4
Video should autoplay, loop, be muted, and play inline
Position: absolute, full width/height, object-fit: cover with object-position: bottom
Add a 32px high gradient overlay at the bottom that fades from transparent to #2B3534
FONTS:

Import Inria Serif (weights: 300, 400, 700) from Google Fonts in the HTML head
Body text: 'Helvetica Neue', Helvetica, Arial, sans-serif
All headings: 'Inria Serif' serif with letter-spacing: -0.07em
NAVIGATION BAR:

White background with padding
Logo: "Vitara" in 2xl font, semibold, gray-900
Menu items (desktop only, hidden on mobile): Home, Services, Team, Membership, Resources in gray-600 with hover:gray-900
Right side: "Login" text button and "Sign up" button (gray-800 bg, white text, rounded-lg)
HERO CONTENT:

Main heading (4xl on mobile, 6xl on tablet, 7xl on desktop): "Smart Care Begins with Data + Insight"
Subheading (lg to xl): "Turn medical insights into personalized wellness plans."
Both text elements use a custom AnimatedText component that:
Splits text into words
Each word animates with fadeUp animation (opacity 0 to 1, translateY 20px to 0, 0.6s ease-out)
Staggered delay of 0.1s per word
Animation fill mode: forwards
INTERACTIVE INPUT BOX:

Max width 36rem, centered
Background color: #2B3534
Rounded 2xl corners with 2xl shadow
Contains:
Textarea with placeholder: "Welcome to Vitara — your care intelligence hub!"
Transparent background, white text, gray-400 placeholder, min-height: 60px
Three action buttons with Lucide React icons:
"Start Wellness Check" (Zap icon)
"Chat with MedAI" (Stethoscope icon)
"View Insights" (BarChart3 icon)
Buttons: white border (15% opacity), rounded-full, hover effect (white bg 10% opacity)
Horizontal scroll with hidden scrollbar and right-side fade gradient
Send button: white background, gray-800 text, rounded-lg, with Send icon from Lucide React
SECOND SECTION:

Full-width background: #2B3534
Two-column grid (single column on mobile)
Left: Large heading "Your proactive shield against disease" (3xl to 6xl, white, Inria Serif font)
Right: Body text "We blend smart technology & clinical wisdom to provide tailored, preventive, & insight-rich medicine for tomorrow." (gray-300, max-width sm, right-aligned)
Both use the same AnimatedText component with word-by-word fade-up animation
CSS UTILITIES NEEDED:


.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeUp { animation: fadeUp 0.6s ease-out; }
TECH STACK:

React with TypeScript
Tailwind CSS
Lucide React for icons (Send, Zap, Stethoscope, BarChart3)
Vite build tool
RESPONSIVE DESIGN:

Mobile-first approach
Navigation menu hidden on mobile (md:flex)
Font sizes scale from mobile (text-4xl) to desktop (text-7xl)
Padding adjusts: px-6 on mobile, px-12 on tablet, px-20 on desktop
Grid becomes single column on mobile
KEY COLORS:

Primary dark: #2B3534
Text dark: gray-900
Text medium: gray-600
Text light on dark: white and gray-300
Button primary: gray-800
This creates a premium, sophisticated healthcare AI landing page with smooth animations, a cinematic video background, and clean typography using Inria Serif for headlines.


