import { ExternalLink } from "lucide-react";

interface PaperCardProps {
  title: string;
  authors: string;
  venue: string;
  link: string;
  notes: string;
  impact: string;
}

export function PaperCard({
  title,
  authors,
  venue,
  link,
  notes,
  impact,
}: PaperCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <a href={link} className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 mb-2">
        <span className="italic">{title}</span>
        <ExternalLink size={14} />
      </a>
      <p className="text-sm text-gray-600 mb-1">{authors}</p>
      <p className="text-xs text-gray-500 mb-3">{venue}</p>
      <p className="text-sm text-gray-700 mb-2">{notes}</p>
      <div className="pt-2 border-t border-gray-100">
        <p className="text-xs text-blue-600">💡 {impact}</p>
      </div>
    </div>
  );
}

