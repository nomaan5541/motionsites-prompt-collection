export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/demos/Iron_Man_Stark/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Sometimes you gotta run before you can walk.",
    speaker: "Tony Stark",
    film: "IRON MAN — 2008",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Genius. Billionaire. Playboy. Philanthropist.",
    speaker: "Tony Stark",
    film: "THE AVENGERS — 2012",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Part of the journey is the end.",
    speaker: "Tony Stark",
    film: "AVENGERS: ENDGAME — 2019",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
