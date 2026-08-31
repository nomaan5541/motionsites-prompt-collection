You are given a task to integrate the below html page into the current page.

~~~html

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acme | The Design Agent</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #050505;
            --accent: #FF4500;
            --card: #111111;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg);
            color: white;
            margin: 0;
            overflow-x: hidden;
        }

        .font-serif {
            font-family: 'Playfair Display', serif;
        }

        /* Reveal Animation Styles */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Custom Floating Animations */
        @keyframes float-hand-left {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes float-hand-right {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(20px) rotate(-2deg); }
        }

        .animate-float-left {
            animation: float-hand-left 12s ease-in-out infinite;
        }

        .animate-float-right {
            animation: float-hand-right 14s ease-in-out infinite;
        }

        /* Noise Texture Overlay */
        .noise-overlay {
            position: fixed;
            inset: 0;
            z-index: 50;
            pointer-events: none;
            opacity: 0.05;
            mix-blend-mode: overlay;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
        }

        /* Parallax Container Effect */
        .parallax-card-up {
            transform: translateY(var(--scroll-offset-up, 0px));
        }

        .parallax-card-down {
            transform: translateY(var(--scroll-offset-down, 0px));
        }
    </style>
</head>
<body>
    <div class="min-h-screen bg-[#050505] selection:bg-[#FF4500] selection:text-white">
        <!-- Global Noise Overlay -->
        <div class="noise-overlay"></div>

        <!-- Navigation -->
        <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-8">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <a href="#" id="nav-logo-link" class="text-2xl font-bold tracking-tighter font-serif">
                    Acme.
                </a>
                
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#expertise" id="nav-expertise-link" class="text-sm text-gray-400 hover:text-white transition-colors duration-300">Expertise</a>
                    <a href="#works" id="nav-works-link" class="text-sm text-gray-400 hover:text-white transition-colors duration-300">Selected Works</a>
                    <a href="#perspectives" id="nav-perspectives-link" class="text-sm text-gray-400 hover:text-white transition-colors duration-300">Perspectives</a>
                </div>

                <a href="#contact" id="nav-cta-link" class="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-white text-black hover:scale-105 hover:bg-gray-100 transition-all duration-300">
                    Start Project
                </a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#050505]">
            <!-- Background Atmosphere -->
            <div class="absolute inset-0 z-0 pointer-events-none select-none">
                <div class="absolute top-0 left-0 w-full h-full opacity-60 mix-blend-screen">
                    <img src="https://placehold.co/1536x1024" alt="Atmosphere" class="w-full h-full object-cover object-center opacity-80">
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>
            </div>

            <!-- Floating Surrealist Elements -->
            <div class="absolute -left-[10%] top-[-10%] md:left-[-5%] md:top-[-15%] w-[50vw] md:w-[40vw] max-w-[800px] z-10 pointer-events-none mix-blend-hard-light opacity-80 animate-float-left">
                 <img src="https://placehold.co/1540x1320" alt="Hand Reaching" class="w-full h-auto object-contain">
            </div>

            <div class="absolute -right-[10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[45vw] md:w-[35vw] max-w-[700px] z-10 pointer-events-none mix-blend-hard-light opacity-80 animate-float-right">
                 <img src="https://placehold.co/1542x1002" alt="Hand Receiving" class="w-full h-auto object-contain">
            </div>

            <!-- Hero Content -->
            <div class="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full">
                <div id="hero-content-wrapper" class="max-w-4xl mx-auto">
                    <div class="reveal">
                        <h1 class="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-6 text-[#ffe0e0] mix-blend-overlay font-serif" 
                            style="text-shadow: 0 0 12px rgba(255,255,255,0.71);">
                            Acme. <br />
                            <span class="italic font-light text-[#ffe0e0]">The design agent.</span>
                        </h1>
                    </div>
                    
                    <div class="reveal" style="transition-delay: 200ms;">
                        <p class="text-base md:text-lg text-[#ffe0e0]/90 max-w-lg mx-auto mb-16 font-light tracking-wide leading-relaxed mix-blend-overlay"
                           style="text-shadow: 0 0 12px rgba(255,255,255,0.71);">
                            We turn the unseen into the unforgettable. A design agency for those who dare to disappear to be found.
                        </p>
                    </div>

                    <div class="reveal flex flex-col items-center gap-6" style="transition-delay: 400ms;">
                        <div class="relative group cursor-pointer">
                           <div class="absolute inset-0 bg-[#FF4500]/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                           <div class="relative border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-3 text-xs md:text-sm text-white/80 uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                             <span>Enter the Void</span>
                           </div>
                        </div>
                        
                        <div class="flex items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest mt-8 font-mono">
                           <span id="current-time">11:11 PM</span>
                           <span class="w-px h-3 bg-white/20"></span>
                           <span>NYC, USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section id="expertise" class="py-32 relative">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto text-center reveal">
                    <h2 class="text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90 mb-12 font-serif">
                        We design the negative space where your brand truly lives.
                    </h2>
                    <p class="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                        Elegance is refusal. We remove the noise so your message resonates with absolute clarity.
                    </p>
                </div>

                <!-- Logo Grid -->
                <div class="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <div class="reveal font-bold text-xl tracking-widest">VOGUE</div>
                    <div class="reveal font-bold text-xl tracking-widest" style="transition-delay: 100ms;">TESLA</div>
                    <div class="reveal font-bold text-xl tracking-widest" style="transition-delay: 200ms;">MOOMA</div>
                    <div class="reveal font-bold text-xl tracking-widest" style="transition-delay: 300ms;">AESOP</div>
                </div>
            </div>
        </section>

        <!-- Cards Section -->
        <section id="works" class="py-40 relative overflow-hidden">
            <div class="container mx-auto px-6 relative z-10">
                <div class="reveal mb-32">
                    <h2 class="text-5xl md:text-7xl text-center font-serif">
                        Define your <br />
                        <span class="italic">digital presence</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <!-- Card 1 - Red -->
                    <div class="parallax-card-down">
                        <div class="reveal bg-[#FF4500] rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)] transition-all duration-500 group cursor-pointer">
                            <div class="flex justify-between items-start">
                                <div class="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                    <iconify-icon icon="lucide:star" class="text-black text-2xl"></iconify-icon>
                                </div>
                                <span class="text-black font-medium text-sm border border-black/20 px-3 py-1 rounded-full">01</span>
                            </div>
                            
                            <div>
                                <h3 class="text-4xl md:text-5xl text-black mb-4 leading-none tracking-tight font-serif">
                                    Emerging <br />Talent
                                </h3>
                                <p class="text-black/70 text-lg leading-snug">
                                    You have the spark. We provide the atmosphere for it to ignite into a blazing reality.
                                </p>
                            </div>
                            
                            <div class="w-full h-px bg-black/10 mt-8"></div>
                        </div>
                    </div>

                    <!-- Card 2 - Black -->
                    <div class="parallax-card-up md:mt-24">
                        <div class="reveal bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl group cursor-pointer hover:border-[#FF4500]/50 transition-all duration-500" style="transition-delay: 150ms;">
                            <div class="flex justify-between items-start">
                                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                   <iconify-icon icon="lucide:arrow-right" class="text-white text-2xl -rotate-45"></iconify-icon>
                                </div>
                                <span class="text-white/50 font-medium text-sm border border-white/10 px-3 py-1 rounded-full">02</span>
                            </div>
                            
                            <div>
                                <h3 class="text-4xl md:text-5xl text-white mb-4 leading-none tracking-tight font-serif">
                                    Evolving <br />Legacy
                                </h3>
                                <p class="text-gray-400 text-lg leading-snug">
                                    You've arrived. Now let's make sure you never leave their minds. Permanence is our craft.
                                </p>
                            </div>
                            
                            <div class="w-full h-px bg-white/10 mt-8"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Background Pattern -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none"
                 style="background-image: radial-gradient(circle, #333 1px, transparent 1px); background-size: 40px 40px;">
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
            <div class="container mx-auto px-6 relative z-10">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div class="w-full md:w-auto">
                        <h2 class="text-[10vw] leading-[0.8] tracking-tighter text-white/10 font-bold select-none pointer-events-none">
                            ACME.
                        </h2>
                    </div>
                    
                    <div class="flex flex-col gap-8 text-right">
                        <div class="flex flex-col gap-4 text-gray-400">
                            <a href="#" id="footer-ig-link" class="hover:text-white transition-colors">Instagram</a>
                            <a href="#" id="footer-tw-link" class="hover:text-white transition-colors">Twitter</a>
                            <a href="#" id="footer-li-link" class="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                        <p class="text-sm text-gray-600">© 2024 Acme. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        // 1. Reveal Elements on Scroll using Intersection Observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // 2. Navbar Scroll Effect
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('py-4', 'bg-[#050505]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
                nav.classList.remove('py-8', 'bg-transparent');
            } else {
                nav.classList.remove('py-4', 'bg-[#050505]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
                nav.classList.add('py-8', 'bg-transparent');
            }
        });

        // 3. Simple Parallax Logic
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // Move cards in opposite directions slightly for depth
            document.querySelectorAll('.parallax-card-up').forEach(el => {
                el.style.setProperty('--scroll-offset-up', `${scrolled * -0.05}px`);
            });
            document.querySelectorAll('.parallax-card-down').forEach(el => {
                el.style.setProperty('--scroll-offset-down', `${scrolled * 0.05}px`);
            });
        });

        // 4. Update Time Clock
        function updateTime() {
            const clockEl = document.getElementById('current-time');
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            clockEl.textContent = `${hours}:${minutes} ${ampm}`;
        }
        setInterval(updateTime, 60000);
        updateTime();

        // 5. Hero Content Parallax
        const heroWrapper = document.getElementById('hero-content-wrapper');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 1000) {
                heroWrapper.style.transform = `translateY(${scrolled * 0.4}px)`;
                heroWrapper.style.opacity = Math.max(0, 1 - scrolled / 600);
            }
        });
    </script>
</body>
</html>
~~~