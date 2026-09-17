import type { SyntheticEvent } from "react";

// Builds an Unsplash image URL with sensible defaults.
export function img(id: string, w = 500): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
}

// Inline SVG placeholder used when a remote image fails to load.
export const FALLBACK_IMG =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f1ece6'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%23c9782f' text-anchor='middle' dominant-baseline='middle'%3EFoodRush%3C/text%3E%3C/svg%3E";

export function handleImgError(e: SyntheticEvent<HTMLImageElement>) {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_IMG) {
    target.src = FALLBACK_IMG;
  }
}
