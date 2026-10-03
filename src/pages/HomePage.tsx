import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  Wifi,
  Clock,
  UtensilsCrossed,
  Car,
  Sparkles,
  HeartPulse,
  MapPin,
  CheckCircle2,
  Star,
  Eye,
} from 'lucide-react';
import {
  HOTEL_INFO,
  ROOMS_DATA,
  SERVICES_DATA,
  GALLERY_DATA,
  TESTIMONIALS,
} from '../data/hotelData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenLightbox: (src: string, caption?: string) => void;
  currency: 'SAR' | 'USD';
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLightbox,
  currency,
}) => {
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'lobby' | 'dining' | 'wellness'>('all');

  const filteredGallery =
    galleryFilter === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === galleryFilter);

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F031B]">
        {/* Hero Facade Image background with measured scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={GALLERY_DATA[0].image}
            alt="An Nur Luxury Hotel Facade"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F031B] via-[#0F031B]/75 to-[#0F031B]/40" />
          <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/40 backdrop-blur-md mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase">
              5-Star Sanctuary in Dammam
            </span>
          </div>

          {/* Hotel Name */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {HOTEL_INFO.name}
          </h1>

          {/* Professional Headline */}
          <h2 className="font-serif-luxury text-xl sm:text-3xl text-amber-200/95 italic mt-3 font-normal max-w-3xl mx-auto">
            Regal Luxury & Unrivaled Arabian Hospitality in King Saud Street
          </h2>

          {/* Short Description */}
          <p className="mt-5 text-sm sm:text-base text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Welcome to Dammam’s premier address for corporate executives and discerning families. Experience tranquil purple suites, fine dining, hydrotherapy wellness, and personalized 24/7 concierge service.
          </p>

          {/* Action Buttons: Book Now & Contact Us */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wide text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-950" />
              <span>Book Now</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-purple-950/70 hover:bg-purple-900/90 border border-purple-600/50 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Quick Info Bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-purple-950/80 border border-purple-800/50 backdrop-blur-md text-xs text-purple-200">
            <div className="flex flex-col items-center">
              <span className="text-amber-400 font-bold">📍 District</span>
              <span className="mt-0.5 text-white font-medium">An Nur, Dammam</span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-800/40">
              <span className="text-amber-400 font-bold">📞 Direct Line</span>
              <span className="mt-0.5 text-white font-medium">{HOTEL_INFO.phoneFormatted}</span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-800/40">
              <span className="text-amber-400 font-bold">⭐ Guest Rating</span>
              <span className="mt-0.5 text-white font-medium">4.9 / 5.0 (1,280 Reviews)</span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-800/40">
              <span className="text-amber-400 font-bold">⏱️ Check-in</span>
              <span className="mt-0.5 text-white font-medium">15:00 / 24h Desk</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT THE HOTEL
          ========================================================================= */}
      <section className="py-20 bg-[#FAF7FC] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Box */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-200 group">
                <img
                  src={GALLERY_DATA[3].image}
                  alt="An Nur Hotel Lobby Lounge"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-purple-950/90 text-white border border-amber-400/30 backdrop-blur-md">
                  <p className="font-cinzel text-sm font-bold text-amber-300">
                    Grand Crystal Lobby & Lounge
                  </p>
                  <p className="text-xs text-purple-200 mt-1">
                    A timeless welcome designed for tranquility and executive privacy.
                  </p>
                </div>
              </div>
              {/* Decorative Accent */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 bg-purple-900/10 rounded-2xl -z-10 border border-purple-300/30" />
            </div>

            {/* Content Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-amber-500"></span>
                <span>Welcome to An Nur Luxury</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-purple-950 leading-tight">
                A Welcoming Sanctuary of Comfort & Saudi Heritage
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>An Nur Luxury Hotel & Suites</strong>, we synthesize genuine Saudi warmth (<em>Karam</em>) with 5-star executive refinement. Nestled on King Saud Street in Dammam’s vibrant An Nur district, our sanctuary offers a tranquil refuge for leisure visitors and business travelers alike.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Opulent Purple Suites:</strong> Handcrafted furniture, plush velvet linens, and peaceful acoustic insulation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>Prime Dammam Location:</strong> 8 minutes to Dammam Corniche and quick access to King Fahd Airport.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong>24/7 Personalized Hospitality:</strong> Multilingual front desk and bespoke concierge team.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 text-xs font-bold tracking-wider text-white bg-purple-950 hover:bg-purple-900 rounded-lg shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION
          ========================================================================= */}
      <section className="py-20 bg-[#12041F] text-white border-y border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Accommodation
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                Luxury Suites & Rooms
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('rooms')}
              className="px-5 py-2.5 text-xs font-bold text-purple-200 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/50 rounded-lg transition-colors flex items-center gap-2 w-fit"
            >
              <span>View All Suites</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => {
              const price = currency === 'SAR' ? room.priceSAR : room.priceUSD;
              return (
                <div
                  key={room.id}
                  className="bg-[#1A092A] rounded-2xl border border-purple-800/50 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Frame */}
                  <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(room.image, room.name)}>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A092A] via-transparent to-transparent opacity-80" />
                    
                    {room.popular && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-purple-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow">
                        Guest Favorite
                      </span>
                    )}

                    <div className="absolute top-3 right-3 p-2 bg-purple-950/80 text-white rounded-full hover:bg-purple-900 transition-colors">
                      <Eye className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-purple-200">
                      <span>📐 {room.sizeSqM} m²</span>
                      <span>🛏️ {room.capacity}</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-purple-300 mt-2 line-clamp-2 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Amenities unboxed list */}
                      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-purple-300">
                        {room.features.slice(0, 3).map((feat, idx) => (
                          <React.Fragment key={idx}>
                            <span>{feat}</span>
                            {idx < 2 && <span className="text-amber-500">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Footer Price & Action */}
                    <div className="pt-4 border-t border-purple-900/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-purple-400 block uppercase">Rate per Night</span>
                        <span className="font-cinzel text-xl font-bold text-amber-300">
                          {currency} {price}
                        </span>
                      </div>

                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg transition-all"
                      >
                        Book Room
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('rooms')}
              className="px-8 py-3.5 text-xs font-bold tracking-wider text-amber-300 border border-amber-400/40 bg-purple-900/30 hover:bg-purple-900/60 rounded-xl transition-all"
            >
              Explore All Suites & Special Offers
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOTEL SERVICES & FACILITIES
          ========================================================================= */}
      <section className="py-20 bg-[#FAF7FC] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block mb-1">
              5-Star Guest Services
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-purple-950">
              Facilities & Experiences
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Crafted to satisfy every requirement of modern business executives and vacationing families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => {
              const renderIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Wifi': return <Wifi className="w-5 h-5 text-purple-900" />;
                  case 'Clock': return <Clock className="w-5 h-5 text-purple-900" />;
                  case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-purple-900" />;
                  case 'Car': return <Car className="w-5 h-5 text-purple-900" />;
                  case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-900" />;
                  case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-purple-900" />;
                  default: return <Sparkles className="w-5 h-5 text-purple-900" />;
                }
              };

              return (
                <div
                  key={srv.id}
                  className="rounded-2xl bg-white border border-purple-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Card Header Image with Scrim */}
                  <div
                    className="relative h-44 overflow-hidden cursor-pointer"
                    onClick={() => onOpenLightbox(srv.image, `${srv.title} — ${srv.highlight}`)}
                  >
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 text-purple-950 backdrop-blur-md shadow-md border border-purple-100 flex items-center justify-center">
                      {renderIcon(srv.iconName)}
                    </div>

                    {/* Bottom Right Tag */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-purple-950/85 border border-amber-400/40 backdrop-blur-md text-amber-300 text-[10px] font-bold">
                      {srv.hours}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-purple-950 group-hover:text-purple-700 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mt-1.5">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-purple-50 text-[11px] font-semibold text-amber-700">
                      ✓ {srv.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GALLERY
          ========================================================================= */}
      <section className="py-20 bg-[#12041F] text-white border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Visual Journey
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              Hotel Gallery
            </h2>
            <p className="text-purple-300 text-sm mt-2">
              Preview the grand architecture, serene purple suites, and dining venues of An Nur Hotel.
            </p>
          </div>

          {/* Interactive Filter Control Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'rooms', label: 'Suites & Rooms' },
              { id: 'lobby', label: 'Lobby & Architecture' },
              { id: 'dining', label: 'Gourmet Dining' },
              { id: 'wellness', label: 'Spa & Hydro Pool' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  galleryFilter === tab.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'bg-purple-900/40 text-purple-200 hover:bg-purple-800/60 border border-purple-700/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item.image, item.title + ' — ' + item.caption)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-purple-800/50 bg-[#1A092A]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F031B] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-300 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-2 bg-purple-950/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-amber-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT / BOOKING CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-[#1F0833] via-[#2A0E45] to-[#140524] text-white relative overflow-hidden border-t border-purple-800/60">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Direct Hotel Inquiry Desk
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Reserve Your Regal Stay at An Nur Luxury
          </h2>

          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether for a weekend retreat or an extended executive stay in Dammam, our front desk team is ready to welcome you.
          </p>

          {/* Key Contact Info Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto p-6 rounded-2xl bg-purple-950/80 border border-purple-700/50 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-400/20 text-amber-300 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-purple-300 uppercase font-semibold">Direct Phone</span>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="block font-bold text-lg text-white hover:text-amber-300 transition-colors"
                >
                  {HOTEL_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-400/20 text-amber-300 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-purple-300 uppercase font-semibold">Full Address</span>
                <p className="font-medium text-xs text-purple-200 mt-0.5">
                  {HOTEL_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-9 py-4 text-sm font-bold tracking-wide text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-2xl shadow-amber-500/20 active:scale-95 transition-all"
            >
              Book Your Stay Now
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-9 py-4 text-sm font-semibold text-white bg-purple-900/60 hover:bg-purple-800 border border-purple-600/60 rounded-xl backdrop-blur-md transition-all"
            >
              Contact Us & View Map
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
