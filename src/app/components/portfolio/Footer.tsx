interface FooterProps {
  lastUpdated: string;
  message: string;
}

export function Footer({ lastUpdated, message }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 mt-8">
      <div className="max-w-4xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
        <p>Last updated: {lastUpdated} • {message}</p>
      </div>
    </footer>
  );
}
