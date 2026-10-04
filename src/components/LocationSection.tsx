import React from 'react';
import { HOTEL_DATA } from '../hotelData';
import { MapPin, Phone, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const handleGetDirections = () => {
    window.open(HOTEL_DATA.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#D8D1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#34443A] font-semibold mb-3">
            ADDRESS & ACCESS
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight leading-tight">
            FIND HOTEL ASHOK VIHAR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#171717]/80">
            Conveniently situated in Rampur Colony, Bhabua, adjacent to local landmarks for effortless navigation.
          </p>
        </div>

        <div className="bg-white border border-[#D8D1C5] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xs">
          {/* Location Information Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#34443A] mb-2">
                  <MapPin className="w-4 h-4 text-[#B99A5A]" />
                  <span>HOTEL ADDRESS</span>
                </div>
                <p className="text-base sm:text-lg font-serif text-[#171717] leading-relaxed">
                  Ward No - 1,<br />
                  Near South Bihar Bijli Office,<br />
                  Rampur Colony,<br />
                  Bhabua, Bihar 821101
                </p>
              </div>

              {/* Plus Code */}
              <div className="pt-4 border-t border-[#D8D1C5]">
                <span className="text-xs uppercase tracking-[0.16em] text-[#171717]/60 block mb-1">
                  Google Plus Code
                </span>
                <span className="text-sm font-mono font-medium text-[#171717] bg-[#F5F1E8] px-2.5 py-1 inline-block border border-[#D8D1C5]/70">
                  {HOTEL_DATA.plusCode}
                </span>
              </div>

              {/* Phone */}
              <div className="pt-4 border-t border-[#D8D1C5]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#34443A] mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#B99A5A]" />
                  <span>TELEPHONE INQUIRIES</span>
                </div>
                <a
                  href={`tel:${HOTEL_DATA.phoneClean}`}
                  className="text-lg sm:text-xl font-serif font-semibold text-[#171717] hover:text-[#34443A] transition-colors tabular-nums"
                >
                  {HOTEL_DATA.phone}
                </a>
              </div>

              {/* Check-in / Check-out timing info */}
              <div className="pt-4 border-t border-[#D8D1C5] grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#171717]/60 block mb-1">
                    Check-in
                  </span>
                  <span className="text-sm font-semibold text-[#171717] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#34443A]" />
                    {HOTEL_DATA.checkIn}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#171717]/60 block mb-1">
                    Check-out
                  </span>
                  <span className="text-sm font-semibold text-[#171717] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#34443A]" />
                    {HOTEL_DATA.checkOut}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-8 border-t border-[#D8D1C5]">
              <button
                type="button"
                onClick={handleGetDirections}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors rounded-xs cursor-pointer shadow-xs active:scale-[0.99]"
              >
                <Navigation className="w-4 h-4 text-[#B99A5A]" />
                <span>GET DIRECTIONS</span>
              </button>

              <a
                href={`tel:${HOTEL_DATA.phoneClean}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#171717] border border-[#171717] hover:bg-[#171717] hover:text-white transition-colors rounded-xs text-center"
              >
                <Phone className="w-4 h-4 text-[#B99A5A]" />
                <span>CALL HOTEL</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Panel */}
          <div className="lg:col-span-6 bg-[#E8E2D7] relative min-h-[360px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#D8D1C5]">
            {/* Styled Map Graphic representation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: `radial-gradient(#171717 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs py-1.5 px-3 border border-[#D8D1C5] text-xs font-semibold uppercase tracking-wider text-[#171717]">
                <Building2 className="w-3.5 h-3.5 text-[#34443A]" />
                <span>BHABUA, BIHAR</span>
              </div>
              <span className="text-[11px] font-mono tracking-wider text-[#171717]/60">
                25.04° N, 83.61° E
              </span>
            </div>

            {/* Central Pin Card */}
            <div className="relative z-10 my-auto bg-white p-6 border border-[#D8D1C5] shadow-md max-w-sm mx-auto text-center">
              <div className="w-10 h-10 bg-[#171717] text-[#B99A5A] rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-semibold text-[#171717]">
                {HOTEL_DATA.name}
              </h4>
              <p className="text-xs text-[#171717]/70 mt-1 mb-4">
                Near South Bihar Bijli Office, Rampur Colony
              </p>
              <button
                type="button"
                onClick={handleGetDirections}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#34443A] hover:bg-[#171717] transition-colors rounded-xs cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Coordinate Indicator */}
            <div className="relative z-10 text-xs text-[#171717]/70 text-center">
              <span>Maa Mundeshwari Temple ~9.4 km • Mohania / NH-19 connectivity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
