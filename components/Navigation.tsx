'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { href: '/', label: 'Portfolio' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
              BMMW
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 ${
                    pathname === link.href
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-bold tracking-tight transition-all duration-300 ${
                pathname === link.href ? 'text-white' : 'text-gray-400'
              } hover:text-white`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

