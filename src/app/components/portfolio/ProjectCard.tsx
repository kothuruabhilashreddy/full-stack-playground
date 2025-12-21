import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  highlights,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="flex-1">
          <a href={link} className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
            {title}
            <ExternalLink size={18} />
          </a>
        </h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Key Highlights:</p>
        <ul className="space-y-1">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

