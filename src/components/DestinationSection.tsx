import React from 'react';
import { HOTEL_DATA, HOTEL_ASSETS } from '../hotelData';
import { MapPin, Navigation, ArrowUpRight, Compass } from 'lucide-react';

export const DestinationSection: React.FC = () => {
  const handleExploreLocation = () => {
    window.open(HOTEL_DATA.templeMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#D8D1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#34443A] font-semibold mb-3">
                <Compass className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span>LOCAL DESTINATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight leading-[1.1] mb-6">
                STAY IN BHABUA.
                <br />
                <span className="italic font-light text-[#34443A]">DISCOVER MORE.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed mb-6 font-normal">
                Hotel Ashok Vihar in Rampur Colony serves as an ideal and comfortable base for guests visiting the renowned Maa Mundeshwari Temple in Kaimur district.
              </p>

              {/* Destination Fact Card */}
              <div className="p-5 bg-white border border-[#D8D1C5] mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B99A5A] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base font-serif font-semibold text-[#171717]">
                      {HOTEL_DATA.nearbyAttraction}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#34443A] font-medium mt-0.5">
                      {HOTEL_DATA.nearbyDistance}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#171717]/70 leading-relaxed border-t border-[#D8D1C5]/60 pt-3">
                  An iconic heritage site perched on Pavra hill, easily reached by car or taxi from the hotel.
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleExploreLocation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors rounded-xs cursor-pointer shadow-xs active:scale-[0.99]"
              >
                <Navigation className="w-4 h-4 text-[#B99A5A]" />
                <span>EXPLORE LOCATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] bg-[#171717] border border-[#D8D1C5] overflow-hidden group">
            <img
              src={HOTEL_ASSETS.temple}
              alt="Maa Mundeshwari Temple in Kaimur near Bhabua"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B99A5A] font-semibold block">
                  NEARBY SACRED HERITAGE
                </span>
                <span className="text-sm sm:text-base font-serif text-white font-medium">
                  Maa Mundeshwari Temple (~9.4 km)
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#F5F1E8]/70 bg-black/60 backdrop-blur-xs px-2.5 py-1">
                Kaimur, Bihar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
