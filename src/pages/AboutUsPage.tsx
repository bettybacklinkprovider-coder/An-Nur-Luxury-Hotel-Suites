import React from 'react';
import { HOTEL_INFO, GALLERY_DATA, TESTIMONIALS, HOTEL_HIGHLIGHTS } from '../data/hotelData';
import { Sparkles, Award, ShieldCheck, HeartPulse, UtensilsCrossed, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, caption?: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-0 text-slate-900 bg-[#FAF7FC]">
      
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#12041F] text-white border-b border-purple-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={GALLERY_DATA[3].image}
            alt="An Nur Hotel Lobby"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#12041F]/80 via-[#12041F] to-[#12041F]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Philosophy
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            About {HOTEL_INFO.name}
          </h1>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Where authentic Saudi generosity meets 5-star regal luxury on King Saud Street, Dammam.
          </p>
        </div>
      </section>

      {/* Story & Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">
                The An Nur Story
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-purple-950 leading-tight">
                Embodying Arabian Warmth & Executive Elegance in Dammam
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a vision to redefine luxury hospitality in the Eastern Province of Saudi Arabia, <strong>An Nur Luxury Hotel & Suites</strong> stands as an architectural sanctuary of royal comfort and serene purple aesthetics.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Situated prominently on King Saud Street in the An Nur district, our hotel offers seamless proximity to Dammam Corniche, corporate headquarters, and major transport hubs. Every corridor, room, and dining lounge is designed to envelop guests in quiet sophistication.
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {HOTEL_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-purple-100/60 border border-purple-200 text-center">
                    <span className="font-cinzel text-xl font-bold text-purple-950 block">
                      {h.value}
                    </span>
                    <span className="text-[11px] font-medium text-slate-600 mt-0.5 block">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => onOpenLightbox(GALLERY_DATA[1].image, 'Royal Suite Bedroom')}
                className="rounded-2xl overflow-hidden shadow-lg h-64 border border-purple-200 cursor-pointer group"
              >
                <img
                  src={GALLERY_DATA[1].image}
                  alt="Royal Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div
                onClick={() => onOpenLightbox(GALLERY_DATA[4].image, 'Al Thuraya Restaurant')}
                className="rounded-2xl overflow-hidden shadow-lg h-64 border border-purple-200 cursor-pointer group mt-6"
              >
                <img
                  src={GALLERY_DATA[4].image}
                  alt="Dining Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Stay With Us & Hotel Features */}
      <section className="py-20 bg-[#12041F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Guest Pillars
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              Why Discerning Guests Choose An Nur
            </h2>
            <p className="text-purple-300 text-sm mt-2">
              Uncompromising standards designed for ultimate peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-[#1A092A] border border-purple-800/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">1. Prime Dammam Address</h3>
              <p className="text-purple-300 text-xs leading-relaxed">
                Located on King Saud St in An Nur, minutes from Dammam Corniche, King Fahd Park, and corporate headquarters with effortless highway connectivity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1A092A] border border-purple-800/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">2. Genuine Saudi Karam</h3>
              <p className="text-purple-300 text-xs leading-relaxed">
                Authentic Arabic coffee welcome, dates, multilingual reception staff, and personalized butler services tailored to your exact preferences.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1A092A] border border-purple-800/50 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">3. Pristine Hygiene & Spa</h3>
              <p className="text-purple-300 text-xs leading-relaxed">
                Twice-daily room care, lavender aromatherapy turndown, thermal hydrotherapy spa, and 24-hour round-the-clock room dining service.
              </p>
            </div>

          </div>

          {/* Guest Testimonial Showcase */}
          <div className="pt-12 border-t border-purple-900/50">
            <h3 className="font-cinzel text-center text-2xl font-bold text-amber-300 mb-8">
              Words From Our Distinguished Guests
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#240C3B] border border-purple-800/40 text-xs space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-purple-200 italic leading-relaxed">"{t.comment}"</p>
                  <div className="pt-2 border-t border-purple-900/60">
                    <span className="font-bold text-white block">{t.name}</span>
                    <span className="text-[10px] text-purple-400">{t.role} · {t.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              Experience An Nur Hospitality
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
