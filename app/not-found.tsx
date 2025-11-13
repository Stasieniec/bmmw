import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Strona nie znaleziona</h2>
        <p className="text-gray-600 mb-8">
          Przepraszamy, strona której szukasz nie istnieje.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}

