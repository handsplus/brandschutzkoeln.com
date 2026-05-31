import Link from "next/link";
import { Fragment } from "react";

const linkClass =
  "text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

/** Markdown-Links [Label](/pfad) und **Fettdruck** in Ratgeber-Fließtext rendern. */
function renderInlineFormatting(text: string, keyPrefix: string) {
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.map((segment, j) => {
    const boldMatch = /^\*\*([^*]+)\*\*$/.exec(segment);
    if (boldMatch) {
      return (
        <strong key={`${keyPrefix}-b-${j}`} className="font-semibold text-stone-800">
          {boldMatch[1]}
        </strong>
      );
    }

    const linkParts = segment.split(/(\[[^\]]+\]\([^)]+\))/g);
    return linkParts.map((part, i) => {
      const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (!match) {
        return <Fragment key={`${keyPrefix}-${j}-${i}`}>{part}</Fragment>;
      }

      const [, label, href] = match;
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            key={`${keyPrefix}-${j}-${i}`}
            href={href}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }

      return (
        <Link key={`${keyPrefix}-${j}-${i}`} href={href} className={linkClass}>
          {label}
        </Link>
      );
    });
  });
}

export function renderRatgeberText(text: string) {
  return renderInlineFormatting(text, "rt");
}
