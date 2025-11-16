import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'O nas',
  description: 'BMMW to warszawskie niezależne studio filmowe. Believe, Make Movies, Win. Poznaj nasz zespół: Małgorzata Kowalczyk, Jacek Wasilewski, Maciej Moszoro.',
  openGraph: {
    title: 'O nas - BMMW Films',
    description: 'Warszawskie niezależne studio filmowe. Believe, Make Movies, Win. Wierzymy w dobre pomysły, robimy filmy i realizujemy nasze cele.',
    images: ['/BMMW_logo_white_transparent.png'],
  },
};

export default function AboutPage() {
  const team = [
    {
      name: 'Małgorzata Kowalczyk',
      role: 'CEO & Executive Producer',
      bio: 'Reżyserka filmów dokumentalnych. Debiutowała na DIFF filmem Warm for Winter. Pracowała w Paryżu ze Scottem Hilierem, potem znów w Warszawie. Autorka filmów dokumentalnych Fenomen o Jurku Owsiaku i Liroy o Piotrze Marcu, które trafiły na kinowe ekrany. Pracowała jako dziennikarka śledcza i autorka filmów promujących międzynarodowe koncerny.',
      image: '/team/malgorzata_kowalczyk.JPG',
    },
    {
      name: 'Jacek Wasilewski',
      role: 'Creative Director',
      bio: 'Szef specjalności Dokumentalistyka na UW. Pisał scenariusze filmów i seriali dokumentalnych dla TVP i HBO, a także telewizyjne seriale obyczajowe i komediowe, reality, jak Rolnik szuka żony, teleturnieje i skecze. Scenarzysta filmu Drużyna AA.',
      image: '/team/jacek_wasilewski.jpeg',
    },
    {
      name: 'Maciej Moszoro',
      role: 'Producer',
      bio: 'Producent filmów animowanych i supervisor postprodukcji. Pracował m.in przy znanej serii animowanej Solar Opposites, odpowiedzialny za produkcję liniową oraz post-produkcję przy dokumencie Liroy. Tworzył dla wielkich brandów jak Nestle, Orange czy TVN.',
      image: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fadeIn">
            O nas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Believe, Make Movies, Win
          </p>
        </div>
      </section>

      {/* About Section - Detailed */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            W <strong>Believe, Make Movies, Win</strong> właśnie to robimy:{' '}
            <strong>wierzymy w dobre pomysły, robimy filmy i realizujemy nasze cele.</strong> Łączymy różne
            kompetencje: od scenariuszy i scriptdoctoringu, przez reżyserię i produkcję po postprodukcję.
            Można z nami współpracować na każdym etapie; a najlepiej od początku do końca.{' '}
            <strong>W reklamie, dokumencie, serialu, filmie.</strong>
          </p>

          <p className="text-lg">
            <strong>Mocno wierzymy w to, w co się angażujemy.</strong> Jesteśmy zdolni do kompromisów, ale
            ich nie lubimy. Lubimy za to robić coś na maksa.
          </p>

          <p className="text-lg">
            <strong>Naszą najsilniejszą stroną jest autentyzm i podejście dokumentalne.</strong> Chcemy
            opowiadać świat <em>prawdziwie</em>, trochę <em>szorstko</em>, z <em>autentyzmem</em>,{' '}
            <em>bez</em> <em>lukru</em>. Tak, żeby nikt nie przeszedł obojętnie – czy to jest reklama, film
            dokumentalny czy serial, czy fabuła. W tych wszystkich gatunkach nasza ekipa ma doświadczenie.
          </p>

          <p className="text-lg">
            <strong>W rozmowie nie ściemniamy ani nie gramy.</strong> Wystawiamy od razu kawę na ławę. Kiedy
            jest chemia, działamy. Możesz do nas pisać – byle krótko i konkretnie, możesz dzwonić, możesz
            przyjść – z czymś, w co warto uwierzyć.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Zespół</h2>
        <div className="space-y-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 mx-auto md:mx-0 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Zdjęcie</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

