import { ExternalLink } from "lucide-react";

interface PaperCardProps {
  title: string;
  authors: string;
  venue: string;
  link: string;
}

export function PaperCard({
  title,
  authors,
  venue,
  link,
}: PaperCardProps) {
  return (
    <div className="border-b border-gray-100 py-3 first:pt-0 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 mb-1">
            <a href={link} className="hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="italic">{title}</span>
              <ExternalLink size={12} className="text-gray-400" />
            </a>
          </h3>
          <p className="text-xs text-gray-600">{authors}</p>
          <p className="text-xs text-gray-500 mt-0.5">{venue}</p>
        </div>
      </div>
    </div>
  );
}
