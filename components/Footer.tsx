export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} BMMW Films. Wszystkie prawa zastrzeżone.
          </div>
          <div className="text-sm text-gray-400 italic">
            Believe, Make Movies, Win
          </div>
        </div>
      </div>
    </footer>
  );
}

