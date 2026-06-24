import { stamps } from "@/data/stamps";
import { decades } from "@/data/decades";
import type { Stamp, Decade } from "@/types";

export function getAllStamps(): Stamp[] {
  return stamps;
}

export function getStampById(id: string): Stamp | undefined {
  return stamps.find((s) => s.id === id);
}

export function getStampsByDecade(decadeId: string): Stamp[] {
  return stamps.filter((s) => s.decade === decadeId);
}

export function getAllDecades(): Decade[] {
  return decades;
}

export function getDecadeById(id: string): Decade | undefined {
  return decades.find((d) => d.id === id);
}

export function getFeaturedStamps(): Stamp[] {
  return stamps.filter((s) => s.featured);
}

export function getRelatedStamps(stamp: Stamp, limit = 4): Stamp[] {
  const sameDecade = stamps.filter(
    (s) => s.decade === stamp.decade && s.id !== stamp.id
  );
  const sameTheme = stamps.filter(
    (s) => s.theme === stamp.theme && s.id !== stamp.id && s.decade !== stamp.decade
  );
  return [...sameDecade, ...sameTheme].slice(0, limit);
}

export function getAllThemes(): string[] {
  const themes = new Set(stamps.map((s) => s.theme));
  return Array.from(themes);
}

export function getRarityLabel(rarity: string): string {
  const labels: Record<string, string> = {
    common: "常品",
    rare: "珍品",
    legendary: "传奇",
  };
  return labels[rarity] || rarity;
}
