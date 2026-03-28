import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="border-b border-gray-100 py-3 first:pt-0 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-gray-900 mb-1">
            <a href={link} className="hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors" target="_blank" rel="noopener noreferrer">
              {title}
              <ExternalLink size={14} className="text-gray-400" />
            </a>
          </h3>
          <p className="text-sm text-gray-600 mb-1.5">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <span key={idx} className="text-xs text-gray-500 px-2 py-0.5 bg-gray-50 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
