import React, { useState, useEffect } from 'react';
import { HOTEL_DATA, HOTEL_ASSETS } from '../hotelData';
import { Star, ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onCheckAvailability: () => void;
  onExploreHotel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability, onExploreHotel }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: HOTEL_ASSETS.hero,
      caption: 'Hotel Ashok Vihar · Exterior & Welcoming Entrance',
    },
    {
      image: HOTEL_ASSETS.room,
      caption: 'Quiet, Clean & Comfortable Accommodation',
    },
  ];

  // Subtle cinematic transition between verified hotel views
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#171717]">
      {/* Background Images with subtle cinematic crossfade */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-6000`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.78]"
            />
          </div>
        ))}
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-[#171717]/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 mb-4 text-[#F5F1E8]/90 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
            <span>{HOTEL_DATA.name}</span>
            <span className="text-[#B99A5A]" aria-hidden="true">•</span>
            <span>BHABUA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F5F1E8] tracking-tight leading-[1.08] mb-6 text-balance">
            STAY WELL.
            <br />
            <span className="italic font-light text-[#D8D1C5]">FEEL AT HOME.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#F5F1E8]/85 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
            A comfortable stay in the heart of Bhabua.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onCheckAvailability}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#171717] bg-[#F5F1E8] hover:bg-[#B99A5A] hover:text-[#171717] transition-all duration-200 rounded-xs shadow-md cursor-pointer active:scale-[0.99]"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onExploreHotel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-[#F5F1E8] border border-[#F5F1E8]/40 hover:border-[#F5F1E8] hover:bg-[#F5F1E8]/10 transition-colors duration-200 rounded-xs cursor-pointer active:scale-[0.99]"
            >
              <span>EXPLORE HOTEL</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Information Strip + Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="border-t border-[#F5F1E8]/20 pt-5 pb-3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Info Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#F5F1E8]/90 font-medium tracking-wider uppercase">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#B99A5A] text-[#B99A5A]" />
                <span className="font-semibold text-white tabular-nums">{HOTEL_DATA.ratingGoogle}★</span>
                <span className="text-[#F5F1E8]/70 tabular-nums">({HOTEL_DATA.reviewsGoogle} Google Reviews)</span>
              </div>
              <span className="hidden sm:inline text-[#F5F1E8]/30" aria-hidden="true">|</span>
              <div className="text-white font-medium">
                {HOTEL_DATA.category}
              </div>
              <span className="hidden sm:inline text-[#F5F1E8]/30" aria-hidden="true">|</span>
              <div className="text-[#F5F1E8]/80">
                RAMPUR COLONY, BHABUA
              </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <button
              type="button"
              onClick={onExploreHotel}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F5F1E8]/70 hover:text-[#F5F1E8] transition-colors cursor-pointer py-1"
            >
              <span>DISCOVER YOUR STAY</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B99A5A] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
