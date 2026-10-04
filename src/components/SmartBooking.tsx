import React, { useState } from 'react';
import { HOTEL_DATA } from '../hotelData';
import { Calendar, Users, ArrowUpRight, Phone, Clock, AlertCircle } from 'lucide-react';

export const SmartBooking: React.FC = () => {
  // Today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [guestCount, setGuestCount] = useState('2 Guests');

  const handleCheckAvailability = () => {
    // Opens official hotel website as required
    window.open(HOTEL_DATA.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-20 sm:py-24 bg-[#F5F1E8] border-b border-[#D8D1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D8D1C5] shadow-sm p-6 sm:p-10 lg:p-12 max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D1C5] pb-8 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#34443A] font-semibold mb-2">
                RESERVATION INQUIRY
              </p>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#171717] tracking-tight">
                PLAN YOUR STAY
              </h2>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-[#171717]/60 uppercase tracking-widest block mb-0.5">
                Current Listed Room Pricing Example
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#171717] tabular-nums">
                Rooms from {HOTEL_DATA.startingPrice}
              </span>
            </div>
          </div>

          {/* Booking Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* CHECK-IN */}
            <div className="p-4 bg-[#F5F1E8]/60 border border-[#D8D1C5] rounded-xs">
              <label htmlFor="checkin-date" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span>CHECK-IN</span>
              </label>
              <input
                id="checkin-date"
                type="date"
                value={checkInDate}
                min={today}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-white border border-[#D8D1C5] px-3 py-2 text-sm text-[#171717] font-medium rounded-xs focus:outline-hidden focus:border-[#171717]"
              />
              <p className="flex items-center gap-1 mt-2 text-[11px] text-[#171717]/70 font-medium">
                <Clock className="w-3 h-3 text-[#34443A]" />
                <span>{HOTEL_DATA.checkIn} standard check-in</span>
              </p>
            </div>

            {/* CHECK-OUT */}
            <div className="p-4 bg-[#F5F1E8]/60 border border-[#D8D1C5] rounded-xs">
              <label htmlFor="checkout-date" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span>CHECK-OUT</span>
              </label>
              <input
                id="checkout-date"
                type="date"
                value={checkOutDate}
                min={checkInDate || today}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-white border border-[#D8D1C5] px-3 py-2 text-sm text-[#171717] font-medium rounded-xs focus:outline-hidden focus:border-[#171717]"
              />
              <p className="flex items-center gap-1 mt-2 text-[11px] text-[#171717]/70 font-medium">
                <Clock className="w-3 h-3 text-[#34443A]" />
                <span>{HOTEL_DATA.checkOut} standard check-out</span>
              </p>
            </div>

            {/* GUESTS */}
            <div className="p-4 bg-[#F5F1E8]/60 border border-[#D8D1C5] rounded-xs">
              <label htmlFor="guest-select" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] mb-2">
                <Users className="w-3.5 h-3.5 text-[#B99A5A]" />
                <span>GUESTS</span>
              </label>
              <select
                id="guest-select"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-white border border-[#D8D1C5] px-3 py-2 text-sm text-[#171717] font-medium rounded-xs focus:outline-hidden focus:border-[#171717]"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests (Default)</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4+ Guests">4+ Guests / Group</option>
              </select>
              <p className="mt-2 text-[11px] text-[#171717]/70 font-medium">
                Suitable for solo, couple, or family stays
              </p>
            </div>
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="flex items-start gap-2.5 p-3.5 bg-[#F5F1E8] border border-[#D8D1C5] mb-8">
            <AlertCircle className="w-4 h-4 text-[#B99A5A] shrink-0 mt-0.5" />
            <p className="text-xs text-[#171717]/80 leading-relaxed">
              <span className="font-semibold text-[#171717]">Pricing Note: </span>
              {HOTEL_DATA.pricingDisclaimer}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D8D1C5]">
            <a
              href={`tel:${HOTEL_DATA.phoneClean}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-[#171717] hover:text-[#34443A] py-2"
            >
              <Phone className="w-4 h-4 text-[#B99A5A]" />
              <span>Direct Front Desk: <strong className="tabular-nums">{HOTEL_DATA.phone}</strong></span>
            </a>

            <button
              type="button"
              onClick={handleCheckAvailability}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors rounded-xs cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
