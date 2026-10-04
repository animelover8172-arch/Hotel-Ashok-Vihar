import React from 'react';
import { HOTEL_DATA } from '../hotelData';
import { MessageSquare, Phone, Globe, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-[#F5F1E8] border-t border-[#F5F1E8]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#F5F1E8]/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif tracking-[0.16em] uppercase text-[#F5F1E8]">
              {HOTEL_DATA.name}
            </h3>
            <p className="text-sm font-serif text-[#B99A5A] italic">
              {HOTEL_DATA.nameDevanagari}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D8D1C5]/80">
              {HOTEL_DATA.category} · Bhabua, Bihar
            </p>
            <p className="text-xs text-[#F5F1E8]/60 leading-relaxed max-w-sm pt-2">
              A peaceful and comfortable stay destination in Rampur Colony, offering calm hospitality and convenient access to Maa Mundeshwari Temple.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A5A] mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.14em] text-[#F5F1E8]/70">
              <li>
                <a href="#home" className="hover:text-[#F5F1E8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#stay" className="hover:text-[#F5F1E8] transition-colors">
                  Stay & Rooms
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F5F1E8] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F5F1E8] transition-colors">
                  Guest Impressions
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F5F1E8] transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A5A] mb-4">
              HOTEL DETAILS
            </h4>
            <div className="space-y-2 text-xs text-[#F5F1E8]/70 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B99A5A] shrink-0 mt-0.5" />
                <span>{HOTEL_DATA.address}</span>
              </p>
              <p className="text-[#D8D1C5] font-mono pl-5.5 text-[11px]">
                Plus Code: {HOTEL_DATA.plusCode}
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#B99A5A] shrink-0" />
                <a href={`tel:${HOTEL_DATA.phoneClean}`} className="hover:text-white tabular-nums">
                  {HOTEL_DATA.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#B99A5A] shrink-0" />
                <a
                  href={HOTEL_DATA.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {HOTEL_DATA.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ROADSIDEDEVELOPER CREDITS BAR */}
        <div className="pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm font-medium text-[#F5F1E8]/90 tracking-wide flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#B99A5A]">🌐</span>
              <span>Designed & Developed by <strong>{HOTEL_DATA.developer.name}</strong></span>
            </div>
            <div className="text-xs text-[#F5F1E8]/50 mt-1">
              Created by {HOTEL_DATA.developer.name} · Crafting high-performance digital hospitality experiences.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href={HOTEL_DATA.developer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#70E000] border border-[#25D366]/30 rounded-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>📱 WhatsApp: {HOTEL_DATA.developer.whatsapp}</span>
            </a>

            <a
              href={HOTEL_DATA.developer.callUrl}
              className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-white/10 hover:bg-white/15 text-[#F5F1E8] border border-white/20 rounded-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B99A5A]" />
              <span>📞 Call: {HOTEL_DATA.developer.call}</span>
            </a>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 border-t border-[#F5F1E8]/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F5F1E8]/40 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} {HOTEL_DATA.name} ({HOTEL_DATA.nameDevanagari}). All rights reserved.
          </div>
          <div>
            Standard Check-in: {HOTEL_DATA.checkIn} · Check-out: {HOTEL_DATA.checkOut}
          </div>
        </div>
      </div>
    </footer>
  );
};
