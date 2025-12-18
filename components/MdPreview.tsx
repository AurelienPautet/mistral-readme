"use client";

import ReactMarkdown from "react-markdown";
interface MarkdownPreviewProps {
  content: string;
}

function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <article className="prose prose-slate  max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export { MarkdownPreview };
