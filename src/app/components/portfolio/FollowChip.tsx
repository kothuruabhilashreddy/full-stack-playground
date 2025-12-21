import { ExternalLink } from "lucide-react";

interface FollowChipProps {
  name: string;
  link: string;
}

export function FollowChip({ name, link }: FollowChipProps) {
  return (
    <a
      href={link}
      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
    >
      {name}
      <ExternalLink size={12} />
    </a>
  );
}

