import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bone, BookOpen, Dna, Gem, Leaf, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const heroVideo =
  "https://res.cloudinary.com/dsdxaxkiz/video/upload/v1779624998/magnific_use-img-2-as-the-exact-ba_Piu3X0W42C_wnrc8f.mp4";
const pterodactylImage =
  "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779625001/ChatGPT_Image_May_23_2026_12_24_44_PM_1_lv1dne.png";

const chaptersData = [
  { name: "Age of Dinosaurs", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624247/01_udnber.png" },
  { name: "Fossils of Ancient Life", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624374/02_pmvxxl.png" },
  { name: "Reptiles of the Mesozoic", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624236/03_hcp3jc.png" },
  { name: "Marine Fossil Gallery", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624256/04_get63z.png" },
  { name: "Prehistoric Giants", image: "https://res.cloudinary.com/dsdxaxkiz/image/upload/v1779624251/05_kz1tyu.png" },
];

const navLinks = ["Visit", "Exhibitions", "Discover", "Learn", "About"];
const actionPills = [
  { label: "Dinosaurs", Icon: Bone },
  { label: "Ancient Life", Icon: Dna },
  { label: "Minerals", Icon: Gem },
  { label: "Fossils", Icon: Leaf },
  { label: "Learn More", Icon: BookOpen },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const letterBlock = {
  initial: { y: 120, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
};

export function NeoMuseumPreview() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeChapter, setActiveChapter] = useState(2);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setShowVideo(true), 2800);
    const cycleTimer = window.setInterval(() => setActiveChapter((current) => (current + 1) % chaptersData.length), 3500);
    return () => {
      window.clearTimeout(showTimer);
      window.clearInterval(cycleTimer);
    };
  }, []);

  const active = chaptersData[activeChapter];
  const chapterNumber = useMemo(() => String(activeChapter + 1).padStart(2, "0"), [activeChapter]);

  return (
    <div className="neo-museum-preview overflow-hidden rounded-[28px] border border-white/10 bg-[#fcfcfc] font-nhm-sans text-[#111] shadow-2xl">
      <section className="relative flex min-h-[960px] w-full flex-col overflow-hidden bg-[#fcfcfc]">
        <motion.header
          className="relative z-20 px-6 pt-6 md:px-16"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          <motion.h1
            className="w-full"
            variants={{ initial: { scale: 1.03 }, animate: { scale: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            aria-label="NHM"
          >
            <NhmLogo />
          </motion.h1>

          <motion.div
            className="mt-8 flex items-start justify-between font-nhm-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-[28%] md:w-[15%]">
              <p>Natura</p>
              <p>History</p>
              <p>Museum</p>
            </div>
            <ArrowRight className="hidden h-3.5 w-[5%] text-gray-400 md:block" strokeWidth={1} aria-hidden="true" />
            <p className="max-w-[34ch] flex-1 leading-relaxed text-gray-800 md:w-[30%] md:flex-none">
              Exploring the story of life on earth through science, discovery and wonder.
            </p>
            <ArrowRight className="hidden h-3.5 w-[5%] text-gray-400 md:block" strokeWidth={1} aria-hidden="true" />
            <nav className="hidden w-[15%] flex-col text-gray-800 md:flex">
              {navLinks.map((link) => (
                <a key={link} href="#neo-collection" className="hover:text-black hover:underline">
                  {link}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="group relative z-[60] ml-4 flex w-10 flex-col items-end gap-[6px]"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
            >
              <span
                className={`h-[1.5px] bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "w-10 translate-y-[4px] rotate-45" : "w-8 group-hover:w-6"
                }`}
              />
              <span
                className={`h-[1.5px] bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "w-10 -translate-y-[4px] -rotate-45" : "w-8 group-hover:w-10"
                }`}
              />
            </button>
          </motion.div>
        </motion.header>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative z-30 border-b border-gray-200 bg-[#fcfcfc] px-6 py-8 shadow-xl md:hidden"
            >
              <nav className="space-y-6 font-nhm-mono text-sm uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <a key={link} href="#neo-collection" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showVideo ? (
            <motion.video
              key="neo-video"
              className="absolute left-0 top-0 z-0 h-full w-full object-cover"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              aria-hidden="true"
            />
          ) : null}
        </AnimatePresence>

        <div className="relative z-10 flex flex-1 justify-between">
          <motion.div
            className="mt-20 w-[320px] px-10 sm:mt-28 md:mt-32 md:px-16"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
          >
            <motion.div className="flex items-center gap-4 font-nhm-mono text-xs" variants={fadeUp}>
              <span>01</span>
              <span className="h-[1.5px] w-16 bg-black/20" />
            </motion.div>
            <motion.h2 className="mt-8 text-[3.5rem] font-normal leading-none tracking-tight md:text-[5rem]" variants={fadeUp}>
              TIMELESS
              <br />
              WONDERS
            </motion.h2>
            <motion.p className="mt-8 w-[240px] text-[13px] leading-[1.6] text-gray-700 md:text-[14px]" variants={fadeUp}>
              Step into the natural world and discover the stories written millions of years ago.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button className="group relative mt-8 overflow-hidden rounded-md border border-[#1a1a1a] bg-[#1a1a1a] px-6 py-3.5 text-[15px] font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(17,17,17,0.5)] active:translate-y-0 active:shadow-sm">
                <span className="absolute inset-0 -translate-x-[101%] bg-[#fcfcfc] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                <span className="relative z-10 inline-flex items-center gap-3 transition-colors group-hover:text-[#111]">
                  <Leaf className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:-rotate-12 group-hover:scale-110" aria-hidden="true" />
                  Explore Now
                </span>
              </button>
            </motion.div>
          </motion.div>

          <motion.aside
            className="mt-20 hidden w-[200px] flex-col gap-8 pr-16 md:flex"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
          >
            <motion.div variants={fadeUp}>
              <p className="font-nhm-mono text-[10px] font-bold uppercase tracking-widest">Tyrannosaurus Rex</p>
              <p className="mt-3 text-[12px] leading-[1.6] text-gray-600">Late Cretaceous period 68-66 million years ago</p>
            </motion.div>
            <motion.div className="grid gap-5" variants={fadeUp}>
              <Spec label="Length" value="12.3 m" />
              <Spec label="Height" value="4.0 m" />
            </motion.div>
            <motion.button className="group flex items-center gap-3 font-nhm-mono text-[10px] font-bold uppercase tracking-widest" variants={fadeUp}>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gray-400 transition group-hover:border-black group-hover:bg-[#111] group-hover:text-white">
                <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </span>
              View Details
            </motion.button>
          </motion.aside>
        </div>

        <motion.div
          className="absolute bottom-10 left-[2.5rem] z-10 hidden items-center gap-4 md:left-[4rem] md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="flex h-12 w-12 items-center justify-center gap-1 rounded-full border border-gray-300">
            <span className="h-3 w-px bg-gray-600" />
            <span className="h-3 w-px bg-gray-600" />
          </span>
          <span className="font-nhm-mono text-[10px] font-semibold uppercase tracking-widest text-gray-500">Scroll to explore</span>
        </motion.div>
      </section>

      <section className="relative z-20 flex min-h-[75vh] w-full flex-col items-center bg-[#fcfcfc] px-6 pb-0 pt-24 md:min-h-screen md:pt-32">
        <p className="mb-12 font-nhm-mono text-[10px] tracking-[0.2em] md:text-[11px]">
          <span className="text-gray-500">[ 02 ]</span> <span className="font-bold uppercase text-gray-900">Explore Our World</span>
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1000px] text-center text-[2.2rem] font-medium leading-[1.1] tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4.2rem]"
        >
          Unearth the stories of our planet&apos;s past through fossils, minerals, and ancient wonders.
        </motion.h2>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {actionPills.map(({ label, Icon }) => (
            <motion.button
              key={label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/50 px-5 py-3 text-[11px] font-medium uppercase tracking-wider text-gray-800 backdrop-blur-sm transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              {label}
            </motion.button>
          ))}
        </motion.div>
        <div className="min-h-[220px] md:min-h-[450px]" />
        <div className="pointer-events-none absolute bottom-0 hidden w-full justify-between px-8 pb-8 font-nhm-mono text-[10px] font-medium uppercase tracking-widest text-gray-500 md:flex md:px-16 md:pb-12">
          <span>WE DON&apos;T JUST TELL STORIES.</span>
          <span>PALEONTOLOGY (C) 2026</span>
        </div>
      </section>

      <section id="neo-collection" className="relative z-30 flex w-full flex-col bg-[#0a0a0a] text-white">
        <motion.img
          src={pterodactylImage}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-0 w-[160vw] -translate-x-1/2 object-contain md:w-[1100px]"
          initial={{ y: "-65%", opacity: 0 }}
          whileInView={{ y: "-78%", opacity: 1 }}
          viewport={{ margin: "100px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <div className="relative z-10 mb-16 flex flex-col justify-between gap-8 px-8 pt-32 md:px-16 md:pt-48 xl:flex-row">
          <h2 className="max-w-[900px] text-[1.8rem] font-medium leading-[1.15] tracking-tight text-white md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem]">
            Curated from millions of years of wonder
            <span className="mx-2 inline-flex translate-y-[-4px] gap-2 align-middle md:mx-4 md:gap-3">
              {[Bone, Dna, Leaf].map((Icon, index) => (
                <span key={index} className="grid h-10 w-10 place-items-center rounded-full border border-gray-600 bg-black text-gray-400 transition hover:border-white hover:bg-white hover:text-black md:h-14 md:w-14">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                </span>
              ))}
            </span>
            & discovery.
          </h2>
          <div className="max-w-[360px]">
            <p className="mb-6 font-nhm-mono text-[9px] uppercase leading-relaxed tracking-widest text-gray-400 md:text-[10px]">
              WE DON&apos;T JUST DISPLAY FOSSILS
              <br />
              WE SHARE EARTH&apos;S STORY
            </p>
            <div className="flex flex-wrap gap-2">
              {["Educational", "Authentic", "Inspiring"].map((pill) => (
                <span key={pill} className="rounded-full border border-gray-600 px-5 py-2 font-nhm-mono text-[9px] uppercase tracking-widest text-gray-300 transition hover:border-white hover:bg-white hover:text-black">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-800" />
        <div className="relative z-10 flex flex-col md:flex-row">
          <div className="relative flex min-h-[400px] border-b border-gray-800 md:min-h-[500px] md:w-[35%] md:border-b-0 md:border-r">
            <div className="absolute left-8 top-8 text-xl tracking-[0.3em] text-gray-500">***</div>
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.name}
                className="absolute inset-0 m-auto h-[80%] w-[80%] object-contain mix-blend-lighten"
                initial={{ opacity: 0, filter: "blur(16px)", y: -40, x: -20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, x: 0 }}
                exit={{ opacity: 0, filter: "blur(18px)", y: 70, x: 30 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
              />
            </AnimatePresence>
            <div className="absolute bottom-8 left-8 font-nhm-mono text-[10px] uppercase tracking-widest text-[#888]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={chapterNumber}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
                >
                  {chapterNumber}
                </motion.span>
              </AnimatePresence>{" "}
              <span className="text-[#333]">/ 05</span>
            </div>
          </div>

          <div className="md:w-[65%]">
            <div className="flex justify-between border-b border-gray-800 p-8 font-nhm-mono text-[10px] uppercase tracking-widest text-gray-400">
              <span>Explore the past. Understand the present.</span>
              <span>Chapter {chapterNumber}</span>
            </div>
            <div>
              {chaptersData.map((chapter, index) => {
                const isActive = index === activeChapter;
                return (
                  <button
                    key={chapter.name}
                    className={`group flex w-full items-center justify-between border-b border-gray-800/80 px-8 py-8 text-left transition ${
                      isActive ? "text-white" : "text-[#444] hover:text-[#999]"
                    }`}
                    onClick={() => setActiveChapter(index)}
                  >
                    <span className="text-2xl font-medium tracking-tight md:text-[2rem]">{chapter.name}</span>
                    <AnimatePresence>
                      {isActive ? (
                        <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }}>
                          <ArrowUpRight className="h-6 w-6 text-gray-400" strokeWidth={1} aria-hidden="true" />
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-800" />
        <p className="bg-[#0a0a0a] px-8 py-8 font-nhm-mono text-[10px] uppercase tracking-widest text-gray-500">
          DIGGING INTO OUR PLANET&apos;S PAST
        </p>
      </section>
    </div>
  );
}

function NhmLogo() {
  const letterGroups = [
    { translate: "0 0", polygons: ["0,0 14,0 14,100 0,100", "200,0 214,0 214,100 200,100", "0,0 33,0 214,100 181,100"] },
    { translate: "280 0", polygons: ["0,0 14,0 14,100 0,100", "200,0 214,0 214,100 200,100", "14,43 200,43 200,57 14,57"] },
    {
      translate: "560 0",
      polygons: ["0,0 14,0 14,100 0,100", "266,0 280,0 280,100 266,100", "0,0 26,0 153,100 127,100", "254,0 280,0 153,100 127,100"],
    },
  ];

  return (
    <motion.svg viewBox="0 0 840 100" className="w-full fill-[#111]" role="img" aria-label="NHM">
      {letterGroups.map((group, groupIndex) => (
        <g key={groupIndex} transform={`translate(${group.translate})`}>
          {group.polygons.map((points, index) => (
            <motion.polygon key={`${points}-${index}`} variants={letterBlock} points={points} />
          ))}
        </g>
      ))}
    </motion.svg>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-nhm-mono text-[10px] uppercase tracking-widest text-gray-500">{label}</p>
      <p className="mt-1 text-[13px] font-medium">{value}</p>
    </div>
  );
}
