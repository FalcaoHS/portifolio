import type { ReactNode } from "react";

/** Supports **bold** and Markdown links `[label](url)`. */
export function renderRichText(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold) {
      return (
        <strong key={j} className="text-text-primary font-semibold">
          {bold[1]}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={j}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium underline-offset-2 hover:underline"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={j}>{part}</span>;
  });
}
