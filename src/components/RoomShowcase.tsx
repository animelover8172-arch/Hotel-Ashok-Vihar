import React from 'react';
import { HOTEL_DATA, HOTEL_ASSETS } from '../hotelData';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';

interface RoomShowcaseProps {
  onCheckAvailability: () => void;
}

export const RoomShowcase: React.FC<RoomShowcaseProps> = ({ onCheckAvailability }) => {
  return (
    <section id="stay" className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#D8D1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#34443A] font-semibold mb-3">
            ACCOMMODATION
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight leading-[1.1] mb-4">
            YOUR ROOM.
            <br />
            <span className="italic font-light text-[#34443A]">YOUR RESET.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed">
            Thoughtfully prepared rooms offering quiet comfort and reliable cleanliness during your stay in Bhabua.
          </p>
        </div>

        {/* Room Showcase Box */}
        <div className="bg-white border border-[#D8D1C5] shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Large Room Image */}
          <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[460px] bg-[#171717] overflow-hidden group">
            <img
              src={HOTEL_ASSETS.room}
              alt="Clean and comfortable room at Hotel Ashok Vihar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            {/* Review Badge Overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs py-2 px-3.5 border border-[#D8D1C5] shadow-xs flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B99A5A]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]">
                Known Highlight: "{HOTEL_DATA.reviewHighlight}"
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-[#171717]/85 backdrop-blur-xs text-[#F5F1E8] py-1.5 px-3 text-xs tracking-wider uppercase">
              Actual Room Photography
            </div>
          </div>

          {/* Room Details & Booking CTA */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-baseline justify-between border-b border-[#D8D1C5] pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#34443A] font-semibold block mb-1">
                    ROOM STAY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#171717]">
                    Hotel Ashok Vihar Room
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#171717]/60 block uppercase tracking-wider">Starting</span>
                  <span className="text-xl sm:text-2xl font-semibold text-[#171717] tabular-nums">
                    {HOTEL_DATA.startingPrice}
                  </span>
                </div>
              </div>

              {/* Verified Information List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#34443A]/10 text-[#34443A] mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#171717] block">
                      "{HOTEL_DATA.reviewHighlight}"
                    </span>
                    <span className="text-xs text-[#171717]/70">
                      Consistently noted across guest ratings for tidy, maintained rooms.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#34443A]/10 text-[#34443A] mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#171717] block">
                      Check-in: {HOTEL_DATA.checkIn} · Check-out: {HOTEL_DATA.checkOut}
                    </span>
                    <span className="text-xs text-[#171717]/70">
                      Standard hotel check-in and check-out schedule.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#34443A]/10 text-[#34443A] mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#171717] block">
                      {HOTEL_DATA.category} Hospitality
                    </span>
                    <span className="text-xs text-[#171717]/70">
                      Rampur Colony, Bhabua, Bihar 821101
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Pricing Note */}
              <div className="p-3.5 bg-[#F5F1E8] border border-[#D8D1C5] mb-8">
                <p className="text-xs text-[#171717]/75 leading-relaxed">
                  {HOTEL_DATA.pricingDisclaimer}
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onCheckAvailability}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors rounded-xs cursor-pointer shadow-xs active:scale-[0.99]"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
