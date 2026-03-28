import { ExternalLink } from "lucide-react";

interface FollowChipProps {
  name: string;
  link: string;
}

export function FollowChip({ name, link }: FollowChipProps) {
  return (
    <a
      href={link}
      className="text-xs text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
      <ExternalLink size={10} className="text-gray-400" />
    </a>
  );
}
