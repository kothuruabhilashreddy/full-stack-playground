import { ExternalLink } from "lucide-react";

interface CourseCardProps {
  title: string;
  institution: string;
  instructor: string;
  link: string;
  description: string;
  topics: string[];
  labWork: string;
}

export function CourseCard({
  title,
  institution,
  instructor,
  link,
  description,
  topics,
  labWork,
}: CourseCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3>
            <a href={link} className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
              {title}
              <ExternalLink size={18} />
            </a>
          </h3>
          <p className="text-sm text-gray-600">{institution} • {instructor}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Core Topics Covered:</p>
        <div className="grid grid-cols-2 gap-2">
          {topics.map((topic, idx) => (
            <div key={idx} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-700"><span className="text-gray-500">Lab Work:</span> {labWork}</p>
      </div>
    </div>
  );
}

