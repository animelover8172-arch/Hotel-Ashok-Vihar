import React from 'react';
import { HOTEL_DATA } from '../hotelData';
import { ArrowUpRight, Phone, Globe } from 'lucide-react';

interface ContactCtaProps {
  onCheckAvailability: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onCheckAvailability }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-[#F5F1E8] relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5F1E8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#B99A5A] font-semibold mb-4">
          YOUR STAY. YOUR SPACE.
        </p>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F5F1E8] tracking-tight mb-5">
          READY TO CHECK IN?
        </h2>

        <p className="text-base sm:text-lg text-[#F5F1E8]/80 max-w-xl mx-auto mb-10 font-normal">
          Plan your stay at Hotel Ashok Vihar, Bhabua.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onCheckAvailability}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#171717] bg-[#F5F1E8] hover:bg-[#B99A5A] hover:text-[#171717] transition-all rounded-xs cursor-pointer shadow-md active:scale-[0.99]"
          >
            <span>CHECK AVAILABILITY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${HOTEL_DATA.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#F5F1E8] border border-[#F5F1E8]/40 hover:border-[#F5F1E8] hover:bg-[#F5F1E8]/10 transition-colors rounded-xs"
          >
            <Phone className="w-4 h-4 text-[#B99A5A]" />
            <span>CALL HOTEL ({HOTEL_DATA.phone})</span>
          </a>
        </div>

        {/* Quick Reference Strip */}
        <div className="pt-8 border-t border-[#F5F1E8]/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#F5F1E8]/70 uppercase tracking-wider">
          <a
            href={HOTEL_DATA.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#F5F1E8] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#B99A5A]" />
            <span>{HOTEL_DATA.website}</span>
          </a>
          <span className="text-[#F5F1E8]/20" aria-hidden="true">•</span>
          <span className="tabular-nums">Phone: {HOTEL_DATA.phone}</span>
          <span className="text-[#F5F1E8]/20" aria-hidden="true">•</span>
          <span>Bhabua, Bihar 821101</span>
        </div>
      </div>
    </section>
  );
};
