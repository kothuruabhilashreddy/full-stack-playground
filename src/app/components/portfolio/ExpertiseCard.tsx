import { ReactNode } from "react";

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

export function ExpertiseCard({ icon, title, items }: ExpertiseCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-center gap-2 mb-3 text-blue-600">
        {icon}
        <h3 className="text-sm">{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-gray-700">• {item}</li>
        ))}
      </ul>
    </div>
  );
}

