export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/demos/Iron_Man_Stark/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Ignition",
    quote: "Yeah, I can fly.",
    speaker: "Tony Stark",
    film: "IRON MAN — 2008",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Sync",
    quote: "The suit and I are one.",
    speaker: "Tony Stark",
    film: "IRON MAN 3 — 2013",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Aftermath",
    quote: "It's not about how much we lost. It's about how much we have left.",
    speaker: "Tony Stark",
    film: "AVENGERS: ENDGAME — 2019",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
