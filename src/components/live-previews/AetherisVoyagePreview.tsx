import { ArrowUpRight, Clock3, Globe2, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
const capabilitiesVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";

const navItems = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];
const partners = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];
const featureCards = [
  {
    title: "AI Scenery",
    tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"],
    iconPath: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z",
    body: "AI analyzes your product to create indistinguishable natural environments - from Icelandic cliffs to misty forests.",
  },
  {
    title: "Batch Production",
    tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"],
    iconPath: "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z",
    body: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
  },
  {
    title: "Smart Lighting",
    tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"],
    iconPath: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z",
    body: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
  },
];

const fadeIn = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

export function AetherisVoyagePreview() {
  return (
    <div className="aetheris-preview overflow-hidden rounded-[28px] border border-white/10 bg-black text-white shadow-2xl">
      <section className="relative flex min-h-[900px] flex-col overflow-hidden bg-black">
        <FadingVideo src={heroVideo} className="absolute left-1/2 top-0 z-0 h-[120%] w-[120%] -translate-x-1/2 object-cover object-top" />

        <header className="relative z-20 flex items-center justify-between px-5 pt-5 sm:px-8 lg:px-16">
          <div className="liquid-glass grid h-12 w-12 place-items-center rounded-full font-aetheris-heading text-3xl italic text-white">a</div>
          <nav className="liquid-glass hidden items-center gap-1 rounded-full px-1.5 py-1.5 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#aetheris-capabilities" className="rounded-full px-3 py-2 font-aetheris-body text-sm font-medium text-white/90">
                {item}
              </a>
            ))}
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-aetheris-body text-sm font-medium text-black">
              Claim a Spot
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </nav>
          <div className="hidden h-12 w-12 md:block" />
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="liquid-glass inline-flex max-w-[calc(100vw-48px)] items-center gap-2 rounded-full px-2 py-2"
          >
            <span className="rounded-full bg-white px-3 py-1 font-aetheris-body text-xs font-semibold text-black">New</span>
            <span className="pr-3 font-aetheris-body text-sm text-white/90">Maiden Crewed Voyage to Mars Arrives 2026</span>
          </motion.div>

          <BlurHeadline text="Venture Past Our Sky Across the Universe" />

          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="mt-4 max-w-2xl font-aetheris-body text-sm font-light leading-tight text-white md:text-base"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within
            reach-secure and extraordinary.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            className="mt-6 flex flex-wrap items-center justify-center gap-6"
          >
            <button className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-aetheris-body text-sm font-medium text-white">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button className="inline-flex items-center gap-2 font-aetheris-body text-sm font-medium text-white">
              View Liftoff
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row"
          >
            <StatCard icon={<Clock3 className="h-7 w-7" />} value="34.5 Min" label="Average Videos Watch Time" />
            <StatCard icon={<Globe2 className="h-7 w-7" />} value="2.8B+" label="Users Across the Globe" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-4 px-5 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 font-aetheris-body text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-aetheris-heading text-2xl italic tracking-tight text-white md:gap-x-16 md:text-3xl">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="aetheris-capabilities" className="relative flex min-h-screen flex-col overflow-hidden bg-black px-6 pb-10 pt-24 sm:px-8 md:px-16 lg:px-20">
        <FadingVideo src={capabilitiesVideo} className="absolute inset-0 z-0 h-full w-full object-cover" />
        <div className="relative z-10 mb-auto">
          <p className="mb-6 font-aetheris-body text-sm text-white/80">// Capabilities</p>
          <h2 className="font-aetheris-heading text-6xl italic leading-[0.9] tracking-[-3px] text-white md:text-7xl lg:text-[6rem]">
            Production
            <br />
            evolved
          </h2>
        </div>

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article key={card.title} className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass grid h-11 w-11 shrink-0 place-items-center rounded-[0.75rem] text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d={card.iconPath} />
                  </svg>
                </div>
                <div className="flex max-w-[70%] flex-wrap justify-end gap-1.5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 font-aetheris-body text-[11px] text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <h3 className="font-aetheris-heading text-3xl italic leading-none tracking-[-1px] text-white md:text-4xl">{card.title}</h3>
              <p className="mt-3 max-w-[32ch] font-aetheris-body text-sm font-light leading-snug text-white/90">{card.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function FadingVideo({ src, className }: { src: string; className: string }) {
  return <video className={className} src={src} autoPlay muted playsInline preload="auto" loop aria-hidden="true" />;
}

function BlurHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="mt-5 flex max-w-3xl flex-wrap justify-center gap-y-[0.1em] font-aetheris-heading text-6xl italic leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.28em] inline-block"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: ["blur(10px)", "blur(5px)", "blur(0px)"], opacity: [0, 0.5, 1], y: [50, -5, 0] }}
          transition={{ delay: index * 0.1, duration: 0.7, times: [0, 0.5, 1], ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function StatCard({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="liquid-glass w-full rounded-[1.25rem] p-5 text-left sm:w-[220px]">
      <div className="text-white">{icon}</div>
      <p className="mt-8 font-aetheris-heading text-4xl italic leading-none tracking-[-1px] text-white">{value}</p>
      <p className="mt-2 font-aetheris-body text-xs font-light text-white">{label}</p>
    </div>
  );
}
