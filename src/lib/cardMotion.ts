import type { CSSProperties, PointerEvent } from "react";

export const cardMotionStyle = {
  "--cursor-x": "50%",
  "--cursor-y": "45%",
  "--media-x": "0px",
  "--media-y": "0px",
} as CSSProperties;

export function updateCardPointer(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const mediaX = (50 - x) * 0.12;
  const mediaY = (50 - y) * 0.12;

  event.currentTarget.style.setProperty("--cursor-x", `${x.toFixed(2)}%`);
  event.currentTarget.style.setProperty("--cursor-y", `${y.toFixed(2)}%`);
  event.currentTarget.style.setProperty("--media-x", `${mediaX.toFixed(2)}px`);
  event.currentTarget.style.setProperty("--media-y", `${mediaY.toFixed(2)}px`);
}

export function resetCardPointer(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--cursor-x", "50%");
  event.currentTarget.style.setProperty("--cursor-y", "45%");
  event.currentTarget.style.setProperty("--media-x", "0px");
  event.currentTarget.style.setProperty("--media-y", "0px");
}
