import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z BMMW Films. Email: kontakt@bmmw.pl. Jesteśmy otwarci na współpracę przy projektach filmowych, dokumentalnych i fabularnych.',
  openGraph: {
    title: 'Kontakt - BMMW Films',
    description: 'Skontaktuj się z nami. Jesteśmy otwarci na współpracę przy projektach filmowych.',
    images: ['/BMMW_logo_white_transparent.png'],
  },
};

export default function ContactPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight animate-fadeIn">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Skontaktuj się z nami
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Informacje kontaktowe</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:kontakt@bmmw.pl" className="text-gray-600 hover:text-black transition-colors">
                    kontakt@bmmw.pl
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a href="tel:+48123456789" className="text-gray-600 hover:text-black transition-colors">
                    +48 123 456 789
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lokalizacja</h3>
                  <p className="text-gray-600">
                    Warszawa, Polska
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-semibold mb-3">Współpraca</h3>
              <p className="text-gray-600 leading-relaxed">
                Jesteśmy otwarci na współpracę przy projektach filmowych, dokumentalnych
                i fabularnych. Skontaktuj się z nami, aby omówić szczegóły.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

