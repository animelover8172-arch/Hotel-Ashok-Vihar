import React, { useState } from 'react';
import { HOTEL_DATA, HOTEL_ASSETS } from '../hotelData';
import { ArrowRight, CheckCircle2, Clock, MapPin, Compass, Moon } from 'lucide-react';

export const ExperienceStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'ARRIVE',
      headline: 'Reach Bhabua. Settle in.',
      description:
        'Located in Rampur Colony near South Bihar Bijli Office, Hotel Ashok Vihar provides a straightforward arrival in Bhabua with direct access from major routes.',
      detail: 'Ward No - 1, Rampur Colony · Plus Code: 2HRW+F8',
      icon: Compass,
      image: HOTEL_ASSETS.hero,
    },
    {
      num: '02',
      title: 'CHECK IN',
      headline: 'Check-in from 12:00 PM.',
      description:
        'Smooth check-in procedures managed by our front staff. Standard check-in begins at 12:00 PM noon, giving you plenty of time to unpack and organize your day.',
      detail: 'Standard Check-in: 12:00 PM · Verified 3-Star Hospitality',
      icon: Clock,
      image: HOTEL_ASSETS.room,
    },
    {
      num: '03',
      title: 'UNWIND',
      headline: 'Take a moment to slow down.',
      description:
        'Step away from travel fatigue. Enjoy clean, peaceful spaces and fresh bedding that allow you to catch your breath and relax in quiet comfort.',
      detail: 'Quiet Atmosphere · Guest Highlight: "Clean rooms"',
      icon: CheckCircle2,
      image: HOTEL_ASSETS.lounge,
    },
    {
      num: '04',
      title: 'EXPLORE',
      headline: 'Maa Mundeshwari Temple is approximately 9.4 km away.',
      description:
        'Take a scenic drive to the oldest functional temple in the world. Being just 9.4 km away, guests can conveniently plan sunrise or morning visits.',
      detail: 'Historic Kaimur Landmark · ~9.4 km driving route',
      icon: MapPin,
      image: HOTEL_ASSETS.temple,
    },
    {
      num: '05',
      title: 'REST',
      headline: 'Wake up ready for the next journey.',
      description:
        'Conclude your night with calm sleep and take your time in the morning with standard check-out at 11:00 AM before continuing your itinerary.',
      detail: 'Standard Check-out: 11:00 AM · Rested and Recharged',
      icon: Moon,
      image: HOTEL_ASSETS.room,
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#171717] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#F5F1E8]/15 pb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B99A5A] font-semibold mb-3">
              GUEST JOURNEY
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] tracking-tight">
              THE ASHOK VIHAR EXPERIENCE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#F5F1E8]/70 max-w-sm tracking-wide uppercase">
            ARRIVE <span className="text-[#B99A5A]">→</span> CHECK IN <span className="text-[#B99A5A]">→</span> UNWIND <span className="text-[#B99A5A]">→</span> EXPLORE <span className="text-[#B99A5A]">→</span> REST
          </p>
        </div>

        {/* Step Navigation Pill/Tabs (Interactive Story Sequence) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? 'border-[#B99A5A] bg-[#F5F1E8]/10'
                  : 'border-[#F5F1E8]/15 hover:border-[#F5F1E8]/40 bg-transparent'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono tabular-nums ${activeStep === idx ? 'text-[#B99A5A]' : 'text-[#F5F1E8]/50'}`}>
                  {step.num}
                </span>
                <step.icon className={`w-3.5 h-3.5 ${activeStep === idx ? 'text-[#B99A5A]' : 'text-[#F5F1E8]/40'}`} />
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F1E8]">
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-[#1f1f1f] border border-[#F5F1E8]/15 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl">
          <div className="lg:col-span-6 p-6 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B99A5A] font-semibold mb-4">
                <span>STAGE {steps[activeStep].num}</span>
                <span aria-hidden="true">·</span>
                <span>{steps[activeStep].title}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-[#F5F1E8] mb-6 leading-tight">
                "{steps[activeStep].headline}"
              </h3>

              <p className="text-sm sm:text-base text-[#F5F1E8]/80 leading-relaxed mb-6 font-normal">
                {steps[activeStep].description}
              </p>

              <div className="inline-block py-2.5 px-3.5 bg-[#171717] border border-[#F5F1E8]/10 text-xs sm:text-sm text-[#D8D1C5]">
                {steps[activeStep].detail}
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[#F5F1E8]/10 mt-8">
              <span className="text-xs uppercase tracking-[0.16em] text-[#F5F1E8]/60">
                Step {activeStep + 1} of {steps.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3.5 py-1.5 text-xs uppercase tracking-wider border border-[#F5F1E8]/20 hover:border-[#F5F1E8] text-[#F5F1E8] cursor-pointer"
                  aria-label="Previous story step"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-3.5 py-1.5 text-xs uppercase tracking-wider bg-[#B99A5A] text-[#171717] font-semibold hover:bg-[#D8D1C5] cursor-pointer flex items-center gap-1"
                  aria-label="Next story step"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-black">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].headline}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[11px] font-mono tracking-widest text-[#F5F1E8]/70 bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                HOTEL ASHOK VIHAR ARCHIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
