import { ExternalLink } from "lucide-react";

interface CourseCardProps {
  title: string;
  institution: string;
  note: string;
  link: string;
  status?: "completed" | "current";
}

export function CourseCard({
  title,
  institution,
  note,
  link,
  status,
}: CourseCardProps) {
  return (
    <div className="border-b border-gray-100 py-3 first:pt-0 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-gray-900">
              <a href={link} className="hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors" target="_blank" rel="noopener noreferrer">
                {title}
                <ExternalLink size={12} className="text-gray-400" />
              </a>
            </h3>
            {status === "current" && (
              <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">
                Current
              </span>
            )}
            {status === "completed" && (
              <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">
                Completed
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600">{institution} • {note}</p>
        </div>
      </div>
    </div>
  );
}
