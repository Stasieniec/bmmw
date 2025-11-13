import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nas - BMMW Films',
  description: 'BMMW to warszawskie niezależne studio filmowe. Lubimy prawdziwe historie, w których prawda nas zaskakuje.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight animate-fadeIn">
            O nas
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Mission */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-6">Kim jesteśmy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              BMMW to warszawskie niezależne studio filmowe, które zajmuje się produkcją dokumentów i filmów fabularnych.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lubimy prawdziwe historie, w których prawda nas zaskakuje. Wierzymy, że najlepsze opowieści
              znajdziemy tam, gdzie życie pisze najciekawsze scenariusze.
            </p>
          </div>

          {/* Motto */}
          <div className="animate-fadeIn border-l-4 border-black pl-6 py-2" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl font-light italic text-gray-800">
              Believe, Make Movies, Win
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Nasze motto
            </p>
          </div>

          {/* Approach */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-6">Nasza filozofia</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Jako niezależne studio, cenimy sobie kreatywną wolność i autentyczność. Każdy projekt rozpoczynamy
              z przekonaniem, że warto opowiedzieć tę historię.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pracujemy z pasją nad projektami, które poruszają, inspirują i pozostają w pamięci.
            </p>
          </div>

          {/* Location */}
          <div className="animate-fadeIn bg-gray-50 p-8 rounded-lg" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-semibold mb-3">Lokalizacja</h3>
            <p className="text-gray-700">
              Działamy z Warszawy, ale nasze projekty zabierają nas w różne zakątki Polski i świata.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

