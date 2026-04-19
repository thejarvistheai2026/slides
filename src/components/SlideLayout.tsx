import React from "react";

/**
 * Three-zone slide layout:
 *   Zone 1 (header)  — fixed top, eyebrow + title
 *   Zone 2 (content) — flex-1, all available space between header and footer
 *   Zone 3 (footer)  — fixed bottom reserve, same visual weight as top padding
 */
export default function SlideLayout({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col h-full px-6 md:px-10 lg:px-20 py-6 md:py-10 lg:py-12">
      {/* Zone 1 — Header */}
      <div className="flex-shrink-0 mb-2 md:mb-4">{header}</div>

      {/* Zone 2 — Content */}
      <div className="flex-1 min-h-0">{children}</div>

      {/* Zone 3 — Footer reserve (mirrors top padding weight) */}
      <div className="flex-shrink-0 h-8 mt-2 flex items-center">
        {footer ?? null}
      </div>
    </div>
  );
}
