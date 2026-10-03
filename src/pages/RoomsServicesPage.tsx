import React, { useState } from 'react';
import { ROOMS_DATA, SERVICES_DATA, HOTEL_INFO } from '../data/hotelData';
import { Calendar, Eye, CheckCircle2, Sparkles, Wifi, Clock, UtensilsCrossed, Car, HeartPulse, ArrowRight } from 'lucide-react';

interface RoomsServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenLightbox: (src: string, caption?: string) => void;
  currency: 'SAR' | 'USD';
}

export const RoomsServicesPage: React.FC<RoomsServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLightbox,
  currency,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRooms =
    selectedCategory === 'all'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <div className="space-y-0 text-slate-900 bg-[#FAF7FC]">
      
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#12041F] text-white border-b border-purple-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ROOMS_DATA[0].image}
            alt="An Nur Room Suites"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#12041F]/80 via-[#12041F] to-[#12041F]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Regal Accommodations & Facilities
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Rooms & Services
          </h1>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our curated suite collection and 5-star hotel services tailored for your supreme comfort in Dammam.
          </p>
        </div>
      </section>

      {/* Rooms Catalogue Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-200 pb-6">
            <div>
              <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">
                Suites Catalogue
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-purple-950">
                Choose Your Suite
              </h2>
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Suites' },
                { id: 'deluxe', label: 'Deluxe' },
                { id: 'executive', label: 'Executive' },
                { id: 'suite', label: 'Family Suite' },
                { id: 'presidential', label: 'Presidential' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-purple-950 text-white shadow'
                      : 'bg-white text-purple-900 border border-purple-200 hover:bg-purple-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room) => {
              const price = currency === 'SAR' ? room.priceSAR : room.priceUSD;
              return (
                <div
                  key={room.id}
                  className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Room Image */}
                  <div
                    className="md:w-1/2 relative h-64 md:h-auto cursor-pointer group"
                    onClick={() => onOpenLightbox(room.image, room.name)}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-purple-950/80 text-amber-300 text-[10px] font-bold uppercase rounded-md backdrop-blur-md">
                      {room.category}
                    </div>
                    <div className="absolute top-3 right-3 p-2 bg-purple-950/70 text-white rounded-full">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Room Body */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-purple-950">
                        {room.name}
                      </h3>
                      
                      <div className="mt-2 flex items-center gap-3 text-xs text-purple-900 font-medium">
                        <span>📐 {room.sizeSqM} m²</span>
                        <span>·</span>
                        <span>🛏️ {room.bedType}</span>
                      </div>

                      <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Amenities */}
                      <div className="mt-4 space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Included Amenities:</span>
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                          {room.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price & Booking Button */}
                    <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Starting Rate</span>
                        <span className="font-cinzel text-xl font-bold text-purple-950">
                          {currency} {price} <span className="text-xs font-normal text-slate-500">/ night</span>
                        </span>
                      </div>

                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow"
                      >
                        Book Suite
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Hotel Services & Facilities Breakdown */}
      <section className="py-20 bg-[#12041F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Guest Care
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              Full Hotel Services & Facilities
            </h2>
            <p className="text-purple-300 text-sm mt-2">
              Every facility at An Nur is designed to deliver a seamless, pampered guest journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-[#1A092A] border border-purple-800/50 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col group"
              >
                {/* Service Image Banner */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => onOpenLightbox(srv.image, `${srv.title} — ${srv.highlight}`)}
                >
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A092A] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-3 left-3 px-3 py-1 bg-purple-950/80 text-amber-300 text-[10px] font-bold uppercase rounded-md border border-purple-700/50 backdrop-blur-md">
                    {srv.hours}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] bg-purple-900/90 text-purple-200 border border-purple-700 backdrop-blur-md">
                    {srv.highlight}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-purple-200 text-xs leading-relaxed mt-2">
                      {srv.fullDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-900/60 text-[11px] font-medium text-amber-400">
                    ✓ {srv.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-950 via-[#2C1045] to-purple-950 border border-purple-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-cinzel text-2xl font-bold text-amber-300">
                Have a Special Group or Corporate Request?
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm mt-1">
                Our executive guest relations officer will customize room blocks and private dining menus for your organization.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all whitespace-nowrap shadow-lg"
            >
              Contact Concierge Desk
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
