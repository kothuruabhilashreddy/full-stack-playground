import { ReactNode } from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
        active
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-600 hover:text-gray-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

