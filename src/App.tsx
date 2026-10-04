import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureInteraction } from './components/SignatureInteraction';
import { ExperienceStory } from './components/ExperienceStory';
import { RoomShowcase } from './components/RoomShowcase';
import { SmartBooking } from './components/SmartBooking';
import { TrustSection } from './components/TrustSection';
import { GuestImpression } from './components/GuestImpression';
import { DestinationSection } from './components/DestinationSection';
import { LocationSection } from './components/LocationSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { HOTEL_DATA } from './hotelData';

export default function App() {
  const handleCheckAvailability = () => {
    // Scroll to the booking card so guest can set dates/guests, or directly open hotel site
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(HOTEL_DATA.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleExploreHotel = () => {
    const stayElem = document.getElementById('stay');
    if (stayElem) {
      stayElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreLocation = () => {
    const locationElem = document.getElementById('location');
    if (locationElem) {
      locationElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#171717] selection:bg-[#B99A5A]/25 selection:text-[#171717] flex flex-col font-sans">
      {/* Minimal Sticky Navbar */}
      <Navbar onCheckAvailability={handleCheckAvailability} />

      <main className="grow">
        {/* Full-screen Hero Section */}
        <Hero
          onCheckAvailability={handleCheckAvailability}
          onExploreHotel={handleExploreHotel}
        />

        {/* Signature Interactive Choice: "WHAT BRINGS YOU TO BHABUA?" */}
        <SignatureInteraction
          onCheckAvailability={handleCheckAvailability}
          onExploreLocation={handleExploreLocation}
        />

        {/* Room Experience: "YOUR ROOM. YOUR RESET." */}
        <RoomShowcase onCheckAvailability={handleCheckAvailability} />

        {/* The Ashok Vihar Experience Storytelling */}
        <ExperienceStory />

        {/* Smart Booking Reservation Inquiry Section */}
        <SmartBooking />

        {/* Trust Section: 4.7★ Google, 4.9★ Justdial, 3 Years in Business */}
        <TrustSection />

        {/* Guest Impression: "Clean rooms" Highlight */}
        <GuestImpression />

        {/* Destination Section: Maa Mundeshwari Temple ~9.4 km */}
        <DestinationSection />

        {/* Location & Directions Section */}
        <LocationSection />

        {/* Ready to Check In CTA Section */}
        <ContactCta onCheckAvailability={handleCheckAvailability} />
      </main>

      {/* Footer with RoadsideDeveloper Credit */}
      <Footer />
    </div>
  );
}
