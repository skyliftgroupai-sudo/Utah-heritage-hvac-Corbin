// Tiny inline formatter for copy stored in data files: [text](/href/) links and **bold** only.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function md(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text: string, href: string) => `<a href="${href}">${text}</a>`);
}

/** Plain text (for meta, schema, llms-full.txt). */
export function plain(s: string): string {
  return s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
}

export function wordCount(parts: (string | undefined)[]): number {
  return parts.filter(Boolean).join(' ').split(/\s+/).filter(Boolean).length;
}
