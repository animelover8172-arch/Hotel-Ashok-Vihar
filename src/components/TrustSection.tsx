import React, { useState, useEffect, useRef } from 'react';
import { HOTEL_DATA } from '../hotelData';
import { Star, Award, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-[#34443A] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#F5F1E8]/15">
          {/* 1. Google Reviews */}
          <div className="pt-6 md:pt-0 md:px-8 first:pl-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#B99A5A] mb-3">
                <Star className="w-5 h-5 fill-[#B99A5A]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8]/90">
                  Google Verified
                </span>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight tabular-nums font-semibold mb-2">
                {HOTEL_DATA.ratingGoogle}★
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-[#D8D1C5]">
                {HOTEL_DATA.reviewsGoogle} Google Reviews
              </p>
            </div>
            <p className="text-xs text-[#F5F1E8]/70 mt-6 leading-relaxed font-light">
              Demonstrated guest satisfaction based on verified traveler feedback in Bhabua.
            </p>
          </div>

          {/* 2. Justdial Ratings */}
          <div className="pt-6 md:pt-0 md:px-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#B99A5A] mb-3">
                <Award className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8]/90">
                  Justdial Verified
                </span>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight tabular-nums font-semibold mb-2">
                {HOTEL_DATA.ratingJustdial}★
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-[#D8D1C5]">
                {HOTEL_DATA.ratingsJustdial} Ratings
              </p>
            </div>
            <p className="text-xs text-[#F5F1E8]/70 mt-6 leading-relaxed font-light">
              Highly rated local lodging presence recognized by regional visitors and guests.
            </p>
          </div>

          {/* 3. Business Experience */}
          <div className="pt-6 md:pt-0 md:px-8 last:pr-0 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#B99A5A] mb-3">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8]/90">
                  Reliability
                </span>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight tabular-nums font-semibold mb-2">
                {HOTEL_DATA.experienceYears} Years
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-[#D8D1C5]">
                In Business
              </p>
            </div>
            <p className="text-xs text-[#F5F1E8]/70 mt-6 leading-relaxed font-light">
              Consistent {HOTEL_DATA.category} hospitality serving visitors across Kaimur and Bihar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
