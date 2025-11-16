import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Nasze filmy dokumentalne: Don\'t F**k with Liroy, Fenomen, Pisklak, Aleksandra jedzie do Polski, Warm for Winter. Poznaj nasze produkcje filmowe.',
  openGraph: {
    title: 'Portfolio - BMMW Films',
    description: 'Nasze filmy dokumentalne: Don\'t F**k with Liroy, Fenomen, Pisklak i więcej.',
    images: ['/images/liroy.jpg'],
  },
};

export default function PortfolioPage() {
  const films = [
    {
      id: 1,
      title: "Don't F**k with Liroy",
      poster: '/images/liroy.jpg',
      link: 'https://www.filmweb.pl/film/Don%27t+F**k+with+Liroy-2025-10069468',
      gridClass: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2', // Mobile: 2x2, Desktop: 2x2
    },
    {
      id: 2,
      title: 'Fenomen',
      poster: '/images/fenomen.jpg',
      link: 'https://www.filmweb.pl/film/Fenomen-2023-10026330',
      gridClass: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', // Mobile: 1x2, Desktop: 1x2
    },
    {
      id: 3,
      title: 'Pisklak',
      poster: '/images/pisklak.jpg',
      link: 'https://polishdocs.pl/pl/filmy/670/pisklak',
      gridClass: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', // Mobile: 1x2, Desktop: 1x2
    },
    {
      id: 4,
      title: 'Aleksandra jedzie do Polski',
      poster: '/images/aleksandra_jedzie.jpg',
      link: 'https://polishdocs.pl/pl/filmy/ukonczone/820/aleksandra_jedzie_do_polski',
      gridClass: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1', // Mobile: 2x1, Desktop: 2x1
    },
    {
      id: 5,
      title: 'Warm for Winter',
      poster: '/images/warm_for_winter.jpg',
      link: 'https://www.imdb.com/title/tt13877444/',
      gridClass: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1', // Mobile: 2x1, Desktop: 2x1
    },
  ];

  return (
    <div className="w-screen overflow-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-72px)]">
      {/* Full Screen Collage Grid */}
      <div 
        className="h-full w-full grid gap-1 md:gap-2 grid-cols-2 auto-rows-fr md:grid-cols-4"
        style={{
          gridTemplateRows: 'repeat(5, 1fr)',
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 768px) {
            .grid.grid-cols-2 {
              grid-template-rows: repeat(3, 1fr) !important;
            }
          }
        `}} />
        {films.map((film, index) => (
          <Link
            key={film.id}
            href={film.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden animate-fadeIn hover:opacity-90 transition-opacity duration-300 ${film.gridClass}`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Movie Poster - filling completely */}
            <Image
              src={film.poster}
              alt={film.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
              priority={index === 0}
            />
            
            {/* Title on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 md:p-6 w-full">
                <h3 className="text-white font-bold text-base md:text-xl leading-tight">
                  {film.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
