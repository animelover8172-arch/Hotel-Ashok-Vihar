import React, { useState, useEffect } from 'react';
import { HOTEL_DATA } from '../hotelData';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCheckAvailability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckAvailability }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'STAY', href: '#stay' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#B99A5A] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-xs border-b border-[#D8D1C5]/60 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-lg sm:text-xl font-serif tracking-[0.18em] text-[#171717] uppercase hover:text-[#34443A] transition-colors whitespace-nowrap"
            >
              {HOTEL_DATA.name}
            </a>

            {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs uppercase tracking-[0.16em] font-medium text-[#171717]/80 hover:text-[#171717] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B99A5A] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${HOTEL_DATA.phoneClean}`}
                className="hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-[#171717]/90 hover:text-[#171717] transition-colors px-3 py-2"
                title={`Call ${HOTEL_DATA.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span className="tabular-nums">{HOTEL_DATA.phone}</span>
              </a>

              <button
                type="button"
                onClick={onCheckAvailability}
                className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors duration-200 rounded-xs cursor-pointer whitespace-nowrap shadow-xs active:scale-[0.99]"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#171717] hover:text-[#34443A] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B99A5A]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F5F1E8] border-b border-[#D8D1C5] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm uppercase tracking-[0.18em] font-medium text-[#171717] py-2 border-b border-[#D8D1C5]/50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B99A5A] text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:${HOTEL_DATA.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-[0.14em] font-medium text-[#171717] border border-[#D8D1C5] bg-white rounded-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span>Call {HOTEL_DATA.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCheckAvailability();
                }}
                className="flex items-center justify-center gap-2 py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#171717] rounded-xs cursor-pointer"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
