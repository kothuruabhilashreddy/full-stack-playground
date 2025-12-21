interface FooterProps {
  lastUpdated: string;
  message: string;
}

export function Footer({ lastUpdated, message }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
        <p>Last updated: {lastUpdated} • {message}</p>
      </div>
    </footer>
  );
}

