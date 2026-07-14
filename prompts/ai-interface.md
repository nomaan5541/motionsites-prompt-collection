<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cortex — Mind Amplified.</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;900&display=swap');
  </style>
  <script src="https://unpkg.com/react@19/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/framer-motion@12.42.2/dist/framer-motion.js" crossorigin></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter Tight', 'sans-serif'] },
          colors: { 'brand-bg': '#122e58' }
        }
      }
    }
  </script>
  <style>
    body {
      background: linear-gradient(180deg, #020715 0%, #051329 35%, #0b264b 65%, #007bb8 88%, #00b8e6 100%) no-repeat;
      background-attachment: fixed;
      color: #ffffff;
      font-family: 'Inter Tight', sans-serif;
      font-weight: 400;
      min-height: 100vh;
      line-height: 1.4;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      margin: 0;
    }
    ::selection { background: white; color: #122e58; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #020715; }
    ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.25); }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" data-type="module">
    const { useRef, useEffect, memo } = React;
    const { motion, AnimatePresence, useScroll, useTransform, useInView } = window["framer-motion"] || FramerMotion;

    // ─── TextEffect Component ───
    const defaultStaggerTimes = { char: 0.03, word: 0.05, line: 0.1 };

    const defaultContainerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
      exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const defaultItemVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    };

    const AnimationComponent = memo(({ segment, variants, per }) => {
      if (per === 'line') {
        return React.createElement(motion.span, { variants, className: 'block' }, segment);
      } else if (per === 'word') {
        return React.createElement(motion.span, { 'aria-hidden': 'true', variants, className: 'inline-block whitespace-pre' }, segment);
      } else {
        return React.createElement(motion.span, { className: 'inline-block whitespace-pre' },
          segment.split('').map((char, i) =>
            React.createElement(motion.span, { key: `char-${i}`, 'aria-hidden': 'true', variants, className: 'inline-block whitespace-pre' }, char)
          )
        );
      }
    });

    function TextEffect({ children, per = 'word', as = 'p', variants: customVariants, className, delay = 0, trigger = true }) {
      let segments;
      if (per === 'line') segments = children.split('\n');
      else if (per === 'word') segments = children.split(/(\s+)/);
      else segments = children.split('');

      const containerVariants = customVariants?.container || defaultContainerVariants;
      const itemVariants = customVariants?.item || defaultItemVariants;
      const stagger = defaultStaggerTimes[per];

      const delayedContainerVariants = {
        hidden: containerVariants.hidden,
        visible: {
          ...containerVariants.visible,
          transition: {
            ...(containerVariants.visible?.transition || {}),
            staggerChildren: containerVariants.visible?.transition?.staggerChildren || stagger,
            delayChildren: delay,
          },
        },
        exit: containerVariants.exit,
      };

      const MotionTag = motion[as] || motion.p;

      return React.createElement(AnimatePresence, null,
        trigger && React.createElement(MotionTag, {
          initial: 'hidden',
          animate: 'visible',
          exit: 'exit',
          variants: delayedContainerVariants,
          className: `whitespace-pre-wrap ${className || ''}`,
        },
          segments.map((segment, index) =>
            React.createElement(AnimationComponent, { key: `${per}-${index}-${segment}`, segment, variants: itemVariants, per })
          )
        )
      );
    }

    // ─── SVG Arrow Icon ───
    function ArrowUpRight({ className }) {
      return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24, height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className
      },
        React.createElement('path', { d: 'M7 7h10v10' }),
        React.createElement('path', { d: 'M7 17 17 7' })
      );
    }

    // ─── Animation Variants ───
    const blurSlideVariants = {
      container: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.015 } },
        exit: { opacity: 0, transition: { staggerChildren: 0.01, staggerDirection: -1 } },
      },
      item: {
        hidden: { opacity: 0, filter: 'blur(10px) brightness(0%)', y: 20 },
        visible: { opacity: 1, y: 0, filter: 'blur(0px) brightness(100%)', transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, y: -20, filter: 'blur(10px) brightness(0%)', transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
      },
    };

    const otherElementVariants = {
      hidden: { opacity: 0, y: 35 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      exit: { opacity: 0, y: -25, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    };

    // ─── Main App ───
    function App() {
      const scrollContainerRef = useRef(null);
      const videoRef = useRef(null);
      const heroRef = useRef(null);
      const aboutRef = useRef(null);
      const solutionsRef = useRef(null);

      const inViewHero = useInView(heroRef, { amount: 0.15, once: false });
      const inViewAbout = useInView(aboutRef, { amount: 0.15, once: false });
      const inViewSolutions = useInView(solutionsRef, { amount: 0.1, once: false });

      const { scrollYProgress: videoScrollProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end start"]
      });
      const videoOpacity = useTransform(videoScrollProgress, [0.9, 1.0], [1, 0]);

      useEffect(() => {
        const video = videoRef.current;
        const container = scrollContainerRef.current;
        if (!video || !container) return;

        let targetProgress = 0;
        let currentProgress = 0;
        let animationFrameId;

        const handleScroll = () => {
          const rect = container.getBoundingClientRect();
          const scrollHeight = container.scrollHeight;
          if (scrollHeight <= 0) return;
          const scrolled = -rect.top;
          targetProgress = Math.max(0, Math.min(1, scrolled / scrollHeight));
        };

        const updateVideoProgress = () => {
          currentProgress += (targetProgress - currentProgress) * 0.08;
          if (Math.abs(targetProgress - currentProgress) < 0.0001) currentProgress = targetProgress;
          const duration = video.duration;
          if (duration && !isNaN(duration)) {
            const targetTime = currentProgress * duration;
            if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.02) {
              video.currentTime = targetTime;
            }
          }
          animationFrameId = requestAnimationFrame(updateVideoProgress);
        };

        handleScroll();
        currentProgress = targetProgress;
        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateVideoProgress);

        const handleLoadedMetadata = () => { handleScroll(); currentProgress = targetProgress; };
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
          cancelAnimationFrame(animationFrameId);
          window.removeEventListener('scroll', handleScroll);
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }, []);

      const { scrollYProgress } = useScroll({ target: solutionsRef, offset: ["start start", "end end"] });
      const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

      const heroTitleOpacity = useTransform(heroScroll, [0, 0.45], [1, 0]);
      const heroTitleBlur = useTransform(heroScroll, [0, 0.45], ["blur(0px)", "blur(20px)"]);
      const heroTitleY = useTransform(heroScroll, [0, 0.45], [0, -60]);
      const heroOtherOpacity = useTransform(heroScroll, [0, 0.45], [1, 0]);
      const heroOtherY = useTransform(heroScroll, [0, 0.45], [0, -40]);

      const { scrollYProgress: aboutScroll } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
      const aboutTitleOpacity = useTransform(aboutScroll, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
      const aboutTitleBlur = useTransform(aboutScroll, [0.1, 0.35, 0.65, 0.9], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
      const aboutTitleY = useTransform(aboutScroll, [0.1, 0.35, 0.65, 0.9], [60, 0, 0, -60]);
      const aboutOtherOpacity = useTransform(aboutScroll, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);
      const aboutOtherY = useTransform(aboutScroll, [0.15, 0.35, 0.65, 0.85], [50, 0, 0, -50]);

      const opacitySet1 = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.29], [0, 1, 1, 0]);
      const blurSet1 = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.29], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);
      const yTopSet1 = useTransform(scrollYProgress, [0, 0.29], ["0px", "-120px"]);
      const yBottomSet1 = useTransform(scrollYProgress, [0, 0.29], ["0px", "120px"]);

      const opacitySet2 = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.65], [0, 1, 1, 0]);
      const blurSet2 = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.65], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);
      const yTopSet2 = useTransform(scrollYProgress, [0.33, 0.65], ["0px", "-120px"]);
      const yBottomSet2 = useTransform(scrollYProgress, [0.33, 0.65], ["0px", "120px"]);

      const opacitySet3 = useTransform(scrollYProgress, [0.69, 0.76, 0.92, 0.99], [0, 1, 1, 0]);
      const blurSet3 = useTransform(scrollYProgress, [0.69, 0.76, 0.92, 0.99], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);
      const yTopSet3 = useTransform(scrollYProgress, [0.69, 0.99], ["0px", "-120px"]);
      const yBottomSet3 = useTransform(scrollYProgress, [0.69, 0.99], ["0px", "120px"]);

      const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

      return React.createElement('div', { className: 'relative w-full min-h-screen' },

        // ─── Header ───
        React.createElement('header', { className: 'fixed top-4 lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] md:w-auto bg-slate-950/55 backdrop-blur-xl rounded-xl p-1 pl-1 pr-5 flex items-center justify-between md:gap-8 transition-all' },
          React.createElement('div', { className: 'flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/15 rounded-lg text-white text-xl select-none leading-none cursor-pointer transition-all duration-300 hover:rotate-45 active:scale-95 shrink-0' }, '\u2733'),
          React.createElement('nav', { className: 'flex items-center gap-4 lg:gap-5' },
            React.createElement('a', { href: '#cortex', className: 'text-white/75 hover:text-white text-xs lg:text-[13.5px] font-medium tracking-tight whitespace-nowrap transition-colors' }, 'Cortex'),
            React.createElement('a', { href: '#solutions', className: 'text-white/75 hover:text-white text-xs lg:text-[13.5px] font-medium tracking-tight whitespace-nowrap transition-colors' }, 'Interface'),
            React.createElement('a', { href: '#developer', className: 'text-white/75 hover:text-white text-xs lg:text-[13.5px] font-medium tracking-tight whitespace-nowrap transition-colors' }, 'Developer'),
            React.createElement('a', { href: '#support', className: 'text-white/75 hover:text-white text-xs lg:text-[13.5px] font-medium tracking-tight whitespace-nowrap transition-colors' }, 'Support'),
          )
        ),

        // ─── Background Video ───
        React.createElement(motion.div, { style: { opacity: videoOpacity }, className: 'fixed inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden' },
          React.createElement('video', {
            ref: videoRef,
            src: 'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260704_111356_a61893e1-7df9-45d6-a986-a651b6cb7392.mp4',
            className: 'w-full h-full object-cover',
            muted: true,
            playsInline: true,
            preload: 'auto'
          })
        ),

        // ─── Scroll Container (Hero + About) ───
        React.createElement('div', { ref: scrollContainerRef, className: 'relative z-10 w-full bg-transparent' },

          // ─── Hero Section ───
          React.createElement('section', { ref: heroRef, className: 'relative w-full h-screen flex items-center overflow-hidden bg-transparent' },
            React.createElement('main', { className: 'relative z-10 w-full max-w-none mx-auto h-screen px-4 lg:px-[56px] pt-28 lg:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center' },
              // Left Column
              React.createElement('div', { className: 'lg:col-span-7 flex flex-col justify-center h-full lg:-translate-y-[112px] transform' },
                React.createElement(motion.div, { style: { opacity: heroTitleOpacity, filter: heroTitleBlur, y: heroTitleY } },
                  React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight mb-10 text-white flex flex-col' },
                    React.createElement('span', { className: 'block' },
                      React.createElement(TextEffect, { per: 'char', variants: blurSlideVariants, trigger: inViewHero }, 'Mind')
                    ),
                    React.createElement('span', { className: 'block' },
                      React.createElement(TextEffect, { per: 'char', variants: blurSlideVariants, trigger: inViewHero, delay: 0.15 }, 'Amplified.')
                    )
                  )
                ),
                React.createElement(motion.div, { style: { opacity: heroOtherOpacity, y: heroOtherY } },
                  React.createElement(motion.div, { variants: otherElementVariants, initial: 'hidden', animate: inViewHero ? 'visible' : 'exit' },
                    React.createElement('a', { href: '#discover', className: 'group inline-flex items-center justify-center bg-white hover:bg-white/90 text-brand-bg rounded-full px-7 py-3.5 text-sm font-normal w-fit gap-3 shadow-none transition-all' },
                      React.createElement('span', { className: 'flex items-center justify-center w-5 h-5 rounded-full bg-brand-bg text-white transition-transform group-hover:scale-105' },
                        React.createElement(ArrowUpRight, { className: 'w-3.5 h-3.5 stroke-[2.5]' })
                      ),
                      React.createElement('span', { className: 'tracking-tight' }, 'Discover Cortex')
                    )
                  )
                )
              ),
              // Right Column
              React.createElement(motion.div, { style: { opacity: heroOtherOpacity, y: heroOtherY }, className: 'lg:col-span-4 lg:col-start-9 flex flex-col justify-center lg:self-end lg:mb-[56px] lg:justify-self-end w-full max-w-[328px]' },
                React.createElement(motion.div, { variants: otherElementVariants, initial: 'hidden', animate: inViewHero ? 'visible' : 'exit' },
                  React.createElement('div', { className: 'text-[11.5px] font-normal uppercase text-white/50 tracking-[0.15em] mb-3' }, '001 \u2014 Concept'),
                  React.createElement('p', { className: 'text-[14.5px] font-normal leading-relaxed text-white tracking-tight' }, 'A screen is a bottleneck. Cortex is a premium neural interface that streams your intention directly to AI, amplifying your natural mind.')
                )
              )
            )
          ),

          // ─── About Section ───
          React.createElement('section', { ref: aboutRef, className: 'w-full max-w-none mx-auto px-4 lg:px-[56px] h-screen min-h-[600px] py-[56px] flex flex-col justify-between items-start bg-transparent' },
            // Top
            React.createElement('div', { className: 'w-full flex flex-col gap-6' },
              React.createElement(motion.div, { style: { opacity: aboutOtherOpacity, y: aboutOtherY } },
                React.createElement(motion.div, { variants: otherElementVariants, initial: 'hidden', animate: inViewAbout ? 'visible' : 'exit' },
                  React.createElement('span', { className: 'text-[11.5px] font-medium uppercase text-white/50 tracking-[0.15em]' }, '002 \u2014 Neural Extension')
                )
              ),
              React.createElement('div', { className: 'w-full' },
                React.createElement(motion.div, { style: { opacity: aboutTitleOpacity, filter: aboutTitleBlur, y: aboutTitleY } },
                  React.createElement(TextEffect, { per: 'word', as: 'p', variants: blurSlideVariants, trigger: inViewAbout, className: 'text-[clamp(24px,3.2vw,40px)] font-medium leading-[1.25] tracking-tight text-white max-w-[1200px]' },
                    '\u2460 Cortex is a premium, circular neural interface that rests seamlessly on your temple, establishing a real-time thought connection that augments your cognition with advanced AI models.'
                  )
                )
              )
            ),
            // Bottom
            React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 w-full gap-8' },
              React.createElement(motion.div, { style: { opacity: aboutOtherOpacity, y: aboutOtherY }, className: 'lg:col-start-9 lg:col-span-4 lg:justify-self-end flex flex-col w-full max-w-[328px]' },
                React.createElement(motion.div, { variants: otherElementVariants, initial: 'hidden', animate: inViewAbout ? 'visible' : 'exit', className: 'w-full' },
                  React.createElement('div', { className: 'text-[11.5px] font-medium uppercase text-white/50 tracking-[0.15em] mb-5' }, 'Capabilities:'),
                  React.createElement('div', { className: 'flex flex-col w-full border-b border-white/15' },
                    ['Instant Knowledge Retrieval', 'Seamless Thought Translation', 'Generative Reasoning Flow'].map((item) =>
                      React.createElement('a', { key: item, href: '#', className: 'group flex justify-between items-center py-4 border-t border-white/15 text-white transition-opacity' },
                        React.createElement('span', { className: 'text-[14.5px] font-medium tracking-tight' }, item),
                        React.createElement('span', { className: 'flex items-center justify-center w-5 h-5 rounded-full bg-white text-brand-bg transition-transform group-hover:scale-110 ml-3 shrink-0' },
                          React.createElement(ArrowUpRight, { className: 'w-3.5 h-3.5 stroke-[2.5]' })
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),

        // ─── Solutions Section ───
        React.createElement('section', { id: 'solutions', ref: solutionsRef, className: 'w-full min-h-[350vh] bg-transparent relative' },
          React.createElement('div', { className: 'w-full h-screen sticky top-0 overflow-hidden flex flex-col justify-between' },
            // BG Image
            React.createElement('div', { className: 'absolute inset-0 w-full h-full select-none pointer-events-none z-0' },
              React.createElement(motion.img, { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260706_102306_b64c5436-04bc-4cb4-83c1-8c83a83a285c.png&w=1920&q=85', alt: 'Cortex Tech Background', className: 'w-full h-full object-cover', style: { scale: bgScale } })
            ),
            // Content
            React.createElement('div', { className: 'relative z-10 w-full max-w-none mx-auto h-full px-4 lg:px-[56px] flex flex-col justify-center items-start' },
              React.createElement('div', { className: 'w-full max-w-[1000px] h-[320px] lg:h-[400px] relative flex items-center justify-start' },

                // Set 1
                React.createElement(motion.div, { style: { opacity: opacitySet1, filter: blurSet1 }, className: 'absolute inset-0 flex flex-col gap-[40px] justify-center pointer-events-none' },
                  React.createElement(motion.div, { style: { y: yTopSet1 }, className: 'w-full flex flex-col gap-6' },
                    React.createElement('span', { className: 'text-[11.5px] font-medium uppercase text-white/50 tracking-[0.15em]' }, '003 \u2014 Interface'),
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Silent thought.')
                  ),
                  React.createElement(motion.div, { style: { y: yBottomSet1 }, className: 'w-full' },
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Cortex.')
                  )
                ),

                // Set 2
                React.createElement(motion.div, { style: { opacity: opacitySet2, filter: blurSet2 }, className: 'absolute inset-0 flex flex-col gap-[40px] justify-center pointer-events-none' },
                  React.createElement(motion.div, { style: { y: yTopSet2 }, className: 'w-full flex flex-col gap-6' },
                    React.createElement('span', { className: 'text-[11.5px] font-medium uppercase text-white/50 tracking-[0.15em]' }, '004 \u2014 Performance'),
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Cognitive flow.')
                  ),
                  React.createElement(motion.div, { style: { y: yBottomSet2 }, className: 'w-full' },
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Intuition.')
                  )
                ),

                // Set 3
                React.createElement(motion.div, { style: { opacity: opacitySet3, filter: blurSet3 }, className: 'absolute inset-0 flex flex-col gap-[40px] justify-center pointer-events-none' },
                  React.createElement(motion.div, { style: { y: yTopSet3 }, className: 'w-full flex flex-col gap-6' },
                    React.createElement('span', { className: 'text-[11.5px] font-medium uppercase text-white/50 tracking-[0.15em]' }, '005 \u2014 Symbiosis'),
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Instant recall.')
                  ),
                  React.createElement(motion.div, { style: { y: yBottomSet3 }, className: 'w-full' },
                    React.createElement('h1', { className: 'text-[clamp(40px,6.5vw,105px)] font-normal leading-[0.95] tracking-tight text-white w-full' }, 'Insight.')
                  )
                )
              )
            )
          )
        )
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
  </script>
</body>
</html>