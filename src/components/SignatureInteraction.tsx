import React, { useState } from 'react';
import { HOTEL_DATA, HOTEL_ASSETS } from '../hotelData';
import { ArrowUpRight, Bed, Compass, Coffee, MapPin } from 'lucide-react';

interface SignatureInteractionProps {
  onCheckAvailability: () => void;
  onExploreLocation: () => void;
}

type TabType = 'STAY' | 'EXPLORE' | 'REST';

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({
  onCheckAvailability,
  onExploreLocation,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('STAY');

  const contentMap = {
    STAY: {
      tag: 'CALM HOSPITALITY',
      title: 'A Restful Stay in Bhabua',
      description:
        'Settle into neat, comfortable rooms designed for effortless downtime. Whether visiting for personal travel, family trips, or local commitments, Hotel Ashok Vihar welcomes you with clean hospitality.',
      highlight: 'Check-in from 12:00 PM · Clean Rooms Guarantee',
      image: HOTEL_ASSETS.room,
      actionText: 'CHECK AVAILABILITY',
      actionHandler: onCheckAvailability,
      actionIcon: ArrowUpRight,
    },
    EXPLORE: {
      tag: 'LOCAL DESTINATION',
      title: 'Proximity to Maa Mundeshwari Temple',
      description:
        'Situated approximately 9.4 km away, the ancient Maa Mundeshwari Temple is an iconic pilgrimage site atop Pavra hill. Stay conveniently in Bhabua and embark on your morning darshan or cultural exploration with ease.',
      highlight: 'Approximately 9.4 km drive · Direct route from Rampur Colony',
      image: HOTEL_ASSETS.temple,
      actionText: 'EXPLORE LOCATION',
      actionHandler: onExploreLocation,
      actionIcon: MapPin,
    },
    REST: {
      tag: 'PEACEFUL SPACES',
      title: 'Your Quiet Corner to Unwind',
      description:
        'Enjoy a quiet, uncluttered hotel atmosphere in Rampur Colony, Bhabua. A peaceful ambience where you can decompress after transit and recharge for tomorrow.',
      highlight: 'Standard Check-out: 11:00 AM · Peaceful Ambience',
      image: HOTEL_ASSETS.lounge,
      actionText: 'PLAN YOUR STAY',
      actionHandler: onCheckAvailability,
      actionIcon: ArrowUpRight,
    },
  };

  const current = contentMap[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E8] border-b border-[#D8D1C5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#34443A] font-semibold mb-3">
            YOUR STAY. YOUR SPACE.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight text-balance">
            WHAT BRINGS YOU TO BHABUA?
          </h2>
          <p className="mt-4 text-[#171717]/70 text-sm sm:text-base leading-relaxed">
            Select your journey focus to see how Hotel Ashok Vihar shapes your experience.
          </p>
        </div>

        {/* Interactive Segmented Selector */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#D8D1C5]/40 rounded-xs max-w-lg mb-8" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'STAY'}
            onClick={() => setActiveTab('STAY')}
            className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'STAY'
                ? 'bg-[#171717] text-[#F5F1E8] shadow-xs'
                : 'text-[#171717]/80 hover:text-[#171717] hover:bg-white/40'
            }`}
          >
            <Bed className="w-3.5 h-3.5" />
            <span>STAY</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'EXPLORE'}
            onClick={() => setActiveTab('EXPLORE')}
            className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'EXPLORE'
                ? 'bg-[#171717] text-[#F5F1E8] shadow-xs'
                : 'text-[#171717]/80 hover:text-[#171717] hover:bg-white/40'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>EXPLORE</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'REST'}
            onClick={() => setActiveTab('REST')}
            className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-all duration-200 cursor-pointer ${
              activeTab === 'REST'
                ? 'bg-[#171717] text-[#F5F1E8] shadow-xs'
                : 'text-[#171717]/80 hover:text-[#171717] hover:bg-white/40'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>REST</span>
          </button>
        </div>

        {/* Display Card / Showcase Panel */}
        <div className="bg-white border border-[#D8D1C5] rounded-xs overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Left Text Detail */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#B99A5A] mb-4">
                <span>{current.tag}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#171717]/60">HOTEL ASHOK VIHAR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#171717] mb-5 tracking-tight leading-snug">
                {current.title}
              </h3>

              <p className="text-[#171717]/80 text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="py-3 px-4 bg-[#F5F1E8] border-l-2 border-[#B99A5A] text-xs sm:text-sm font-medium text-[#34443A] mb-8">
                {current.highlight}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={current.actionHandler}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white bg-[#171717] hover:bg-[#34443A] transition-colors rounded-xs cursor-pointer active:scale-[0.99]"
              >
                <span>{current.actionText}</span>
                <current.actionIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] bg-[#171717] overflow-hidden">
            <img
              key={activeTab}
              src={current.image}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-right">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#F5F1E8]/90 bg-[#171717]/70 backdrop-blur-xs px-3 py-1 rounded-xs inline-block">
                {activeTab} VIEW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
