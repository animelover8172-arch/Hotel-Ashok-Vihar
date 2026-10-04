import React from 'react';
import { HOTEL_DATA } from '../hotelData';
import { Quote, Star } from 'lucide-react';

export const GuestImpression: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#D8D1C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Section Label */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#34443A] font-semibold mb-6">
          <span>GUEST IMPRESSION</span>
          <span aria-hidden="true">·</span>
          <span>VERIFIED FEEDBACK</span>
        </div>

        {/* Large Visual Quotation */}
        <div className="relative py-6 sm:py-10">
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#B99A5A]/30 mx-auto mb-4" />
          
          <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#171717] tracking-tight leading-[1.15] max-w-3xl mx-auto">
            “{HOTEL_DATA.reviewHighlight}”
          </blockquote>

          <p className="mt-6 text-sm sm:text-base text-[#171717]/70 max-w-xl mx-auto font-normal leading-relaxed">
            Consistently highlighted by guests across verified public ratings for neatness, hygiene, and well-kept accommodations.
          </p>
        </div>

        {/* Rating Proof Attribution */}
        <div className="mt-8 pt-8 border-t border-[#D8D1C5] max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.16em] text-[#171717]/80">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-[#B99A5A] text-[#B99A5A]" />
            <span className="font-semibold text-[#171717] tabular-nums">{HOTEL_DATA.ratingGoogle}★</span>
            <span className="tabular-nums">({HOTEL_DATA.reviewsGoogle} Google Reviews)</span>
          </div>

          <span className="text-[#D8D1C5]" aria-hidden="true">/</span>

          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-[#B99A5A] text-[#B99A5A]" />
            <span className="font-semibold text-[#171717] tabular-nums">{HOTEL_DATA.ratingJustdial}★</span>
            <span className="tabular-nums">({HOTEL_DATA.ratingsJustdial} Justdial Ratings)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
