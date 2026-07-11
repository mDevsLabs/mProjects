export interface DocMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  content: string;
}

export function normalizeText(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
