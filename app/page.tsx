import Image from 'next/image';

export default function PortfolioPage() {
  // Placeholder projects - will be replaced with real data
  const projects = [
    {
      id: 1,
      title: 'Projekt 1',
      category: 'Dokument',
      description: 'Opis projektu pojawi się tutaj',
    },
    {
      id: 2,
      title: 'Projekt 2',
      category: 'Film fabularny',
      description: 'Opis projektu pojawi się tutaj',
    },
    {
      id: 3,
      title: 'Projekt 3',
      category: 'Dokument',
      description: 'Opis projektu pojawi się tutaj',
    },
    {
      id: 4,
      title: 'Projekt 4',
      category: 'Film fabularny',
      description: 'Opis projektu pojawi się tutaj',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fadeIn">
            BMMW Films
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Warszawskie niezależne studio filmowe
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Lubimy prawdziwe historie, w których prawda nas zaskakuje
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:bg-black/10 transition-colors">
                  <span className="text-sm">Zdjęcie projektu</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
