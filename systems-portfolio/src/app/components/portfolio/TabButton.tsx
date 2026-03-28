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
      className={`flex items-center gap-2 pb-3 border-b-2 transition-colors text-sm ${
        active
          ? "border-gray-900 text-gray-900 font-medium"
          : "border-transparent text-gray-500 hover:text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
