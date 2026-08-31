This is a reference implementation of Midnight Editorial Style

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acme | AI Product Designer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        @font-face {
            font-family: 'Satoshi';
            src: url('https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/4aed2f49-a476-436f-bae8-f31aa18f46fa/1767920861040-60c1c779/Satoshi-Variable.woff2') format('woff2');
            font-weight: 300 900;
            font-display: swap;
            font-style: normal;
        }

        :root {
            --font-satoshi: 'Satoshi', 'Inter', sans-serif;
            --color-bg: #050505;
            --color-accent: #FF6B50;
        }

        body {
            font-family: var(--font-satoshi);
            background-color: var(--color-bg);
            color: #ebebeb;
            scroll-behavior: smooth;
        }

        .selection-coral::selection {
            background-color: var(--color-accent);
            color: white;
        }

        .glass-nav {
            background: rgba(17, 17, 17, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-text {
            font-size: 13vw;
            line-height: 0.9;
            letter-spacing: -0.05em;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .animate-float {
            animation: float 4s ease-in-out infinite;
        }

        /* Scroll reveal simulation via intersection observer is typical but here we use utility classes for layout */
    </style>
</head>
<body>
    <div class="min-h-screen bg-[#050505] selection-coral overflow-x-hidden">
        
        <!-- Top Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between text-sm font-medium tracking-tight">
            <div class="flex items-center gap-10">
                <a href="/" id="nav-logo" class="flex items-center group">
                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-extrabold text-xl transition-transform group-hover:rotate-12">S.</div>
                </a>
                
                <div class="hidden lg:flex items-center gap-8 text-[#888888]">
                    <a href="#" id="nav-home-link" class="hover:text-white transition-colors">Home</a>
                    <a href="#" id="nav-about-link" class="hover:text-white transition-colors">About</a>
                    <a href="#" id="nav-work-link" class="hover:text-white transition-colors">Our Work</a>
                    <a href="#" id="nav-contact-link" class="hover:text-white transition-colors">Contact</a>
                </div>
            </div>

            <div class="flex items-center gap-8">
                <a href="#" id="nav-journal-link" class="hidden md:block text-[#888888] hover:text-white transition-colors">Our journal</a>
                <a href="#" id="nav-cta-btn" class="px-5 py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#333333] rounded-lg transition-all duration-300">
                    Get started
                </a>
            </div>
        </nav>

        <!-- Floating Bottom Navigation -->
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] hidden md:flex items-center gap-2 p-2 glass-nav rounded-2xl shadow-2xl">
            <div class="flex items-center gap-1 pr-4 border-r border-[#333333]">
                <button class="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Dashboard">
                    <iconify-icon icon="lucide:layout-grid" class="text-xl text-white"></iconify-icon>
                </button>
                <button class="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Global">
                    <iconify-icon icon="lucide:globe" class="text-xl text-white"></iconify-icon>
                </button>
                <button class="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Mobile">
                    <iconify-icon icon="lucide:smartphone" class="text-xl text-white"></iconify-icon>
                </button>
                <button class="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Services">
                    <iconify-icon icon="lucide:package" class="text-xl text-white"></iconify-icon>
                </button>
                <button class="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Announcements">
                    <iconify-icon icon="lucide:megaphone" class="text-xl text-white"></iconify-icon>
                </button>
            </div>
            <a href="#contact" id="floating-contact-btn" class="px-6 py-3 bg-[#FF6B50] hover:bg-[#E55A40] text-black font-bold text-sm tracking-wide uppercase rounded-xl transition-all">
                Contact
            </a>
        </div>

        <!-- Hero Section -->
        <header class="relative h-screen w-full flex flex-col items-center justify-center">
            <div class="absolute inset-0 z-0 pointer-events-none">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_70%)] opacity-60"></div>
            </div>

            <div class="relative z-10">
                <h1 class="hero-text font-bold text-white text-center italic-none">
                    /design
                </h1>
            </div>

            <!-- Bottom UI Overlays -->
            <div class="absolute bottom-12 left-8 md:left-12 flex items-center gap-5 group">
                <div class="flex -space-x-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Team member" class="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="Team member" class="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all delay-75">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Team member" class="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all delay-150">
                </div>
                <p class="text-xs md:text-sm font-medium leading-tight text-[#888888] group-hover:text-white transition-colors">
                    Designing the<br/>future, today.
                </p>
            </div>

            <div class="absolute bottom-12 right-8 md:right-12 text-right">
                <a href="mailto:hello@example.com" id="hero-email-link" class="text-white font-medium hover:text-[#FF6B50] transition-colors border-b-2 border-white hover:border-[#FF6B50] pb-1">
                    hello@example.com
                </a>
            </div>
        </header>

        <!-- Benefits Section -->
        <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div class="flex items-center gap-3 mb-10">
                <div class="w-2 h-2 rounded-full bg-[#FF6B50] animate-pulse"></div>
                <span class="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">Why launch slow when you can move fast?</span>
            </div>

            <h2 class="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white max-w-5xl mb-24">
                Clean, scalable design that helps you <span class="text-[#666666]">ship faster</span> and grow your revenue.
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Benefit Card 1 -->
                <div class="bg-[#111111] rounded-[2.5rem] p-12 min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:bg-[#161616] transition-all duration-500">
                    <div class="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
                        Hyper-Growth
                    </div>
                    
                    <div class="mt-auto">
                        <h3 class="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-white">
                            Start faster.
                        </h3>
                        <h3 class="text-5xl md:text-7xl font-semibold tracking-tighter text-[#444444] group-hover:text-[#666666] transition-colors">
                            Earn sooner.
                        </h3>
                    </div>
                </div>

                <!-- Benefit Card 2 -->
                <div class="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-[2.5rem] p-8 md:p-12 min-h-[520px] flex items-center justify-center relative overflow-hidden group">
                    <!-- Browser Mockup Representation -->
                    <div class="w-full max-w-md bg-[#e5e5e5] rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <div class="bg-[#f5f5f5] px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div class="ml-4 h-3 w-32 bg-gray-200 rounded-full"></div>
                        </div>
                        <div class="aspect-video bg-gray-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard preview" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/20"></div>
                            <div class="absolute bottom-6 left-6 text-white">
                                <div class="text-[10px] font-bold uppercase tracking-widest mb-1">Enterprise Edition</div>
                                <div class="text-lg font-bold">Analytics v4.0</div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>

        <!-- Work Gallery -->
        <section id="work" class="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div class="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
                <h2 class="text-xs font-bold tracking-[0.4em] uppercase text-[#FF6B50]">Selected Work</h2>
                <span class="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">Volume 01 &mdash; 2024</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
                
                <!-- Project 1 -->
                <article class="group cursor-pointer">
                    <div class="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" alt="Nebula Project" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    </div>
                    <div class="mt-8 flex justify-between items-start">
                        <div>
                            <h3 class="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors">NEBULA</h3>
                            <p class="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">Brand Identity / AI</p>
                        </div>
                        <div class="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                            <iconify-icon icon="lucide:arrow-up-right" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                </article>

                <!-- Project 2 -->
                <article class="group cursor-pointer md:mt-24">
                    <div class="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" alt="Quantum Project" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    </div>
                    <div class="mt-8 flex justify-between items-start">
                        <div>
                            <h3 class="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors">QUANTUM</h3>
                            <p class="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">Web Design / Fintech</p>
                        </div>
                        <div class="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                            <iconify-icon icon="lucide:arrow-up-right" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                </article>

                <!-- Project 3 -->
                <article class="group cursor-pointer">
                    <div class="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" alt="Echo Project" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    </div>
                    <div class="mt-8 flex justify-between items-start">
                        <div>
                            <h3 class="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors">ECHO</h3>
                            <p class="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">Art Direction / Media</p>
                        </div>
                        <div class="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                            <iconify-icon icon="lucide:arrow-up-right" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                </article>

                <!-- Project 4 -->
                <article class="group cursor-pointer md:mt-24">
                    <div class="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm">
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" alt="Flux Project" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    </div>
                    <div class="mt-8 flex justify-between items-start">
                        <div>
                            <h3 class="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors">FLUX</h3>
                            <p class="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">Development / SaaS</p>
                        </div>
                        <div class="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                            <iconify-icon icon="lucide:arrow-up-right" class="text-2xl"></iconify-icon>
                        </div>
                    </div>
                </article>

            </div>
        </section>

        <!-- CTA / Footer Section -->
        <footer id="contact" class="relative pt-48 pb-32 px-6 md:px-12 border-t border-[#1a1a1a]">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
                
                <div class="flex-1">
                    <h2 class="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white mb-12 select-none">
                        LET'S<br />TALK.
                    </h2>
                    <div class="flex flex-col gap-6">
                        <a href="mailto:hello@example.com" id="footer-email-link" class="text-3xl md:text-4xl font-semibold hover:text-[#FF6B50] transition-all w-fit">
                            hello@example.com
                        </a>
                        <p class="text-[#666666] flex items-center gap-2">
                            <iconify-icon icon="lucide:map-pin"></iconify-icon>
                            Available for worldwide collaborations.
                        </p>
                    </div>
                </div>

                <div class="flex gap-4 md:mb-6">
                    <a href="#" id="social-ig" class="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
                        <iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon>
                    </a>
                    <a href="#" id="social-tw" class="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
                        <iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon>
                    </a>
                    <a href="#" id="social-li" class="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
                        <iconify-icon icon="lucide:linkedin" class="text-xl"></iconify-icon>
                    </a>
                    <a href="#" id="social-web" class="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
                        <iconify-icon icon="lucide:globe" class="text-xl"></iconify-icon>
                    </a>
                </div>
            </div>

            <div class="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#333333] text-[10px] font-bold uppercase tracking-widest">
                <p>&copy; 2024 Acme Agency. All rights reserved.</p>
                <div class="flex gap-10 mt-6 md:mt-0">
                    <a href="#" id="footer-privacy" class="hover:text-[#666666] transition-colors">Privacy Policy</a>
                    <a href="#" id="footer-terms" class="hover:text-[#666666] transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>

    </div>
</body>
</html>
~~~

Please use the above as reference and apply to our context