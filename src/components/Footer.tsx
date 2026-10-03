import React from 'react';
import { Phone, MapPin, Mail, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleLink = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F031B] text-purple-200 border-t border-purple-900/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/40">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-amber-600 flex items-center justify-center p-0.5 shadow-md">
                <div className="w-full h-full bg-[#1A092A] rounded-full flex items-center justify-center">
                  <span className="font-cinzel text-amber-400 font-bold text-lg">A</span>
                </div>
              </div>
              <span className="font-cinzel text-xl font-bold text-white tracking-wide">
                {HOTEL_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-purple-300 leading-relaxed">
              Experience grand Arabian elegance on King Saud Street, Dammam. Offering 5-star suites, executive dining, spa wellness, and world-class Saudi hospitality.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-md hover:from-amber-200 hover:to-amber-400 transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/10"
              >
                <span>Reserve Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Page Navigation */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2 text-purple-300"
                >
                  <span className="text-amber-500 font-bold">›</span> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2 text-purple-300"
                >
                  <span className="text-amber-500 font-bold">›</span> About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('rooms')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2 text-purple-300"
                >
                  <span className="text-amber-500 font-bold">›</span> Rooms & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2 text-purple-300"
                >
                  <span className="text-amber-500 font-bold">›</span> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-purple-300">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-start gap-3 hover:text-amber-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white group-hover:text-amber-300">
                    {HOTEL_INFO.phoneFormatted}
                  </div>
                  <div className="text-[11px] text-purple-400">Direct Reservation Desk</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Direct Inquiry</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-purple-300">
                  {HOTEL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reception & Concierge: {HOTEL_INFO.receptionHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Security */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
              Dammam Destination
            </h3>
            <p className="text-xs text-purple-300 leading-relaxed">
              Situated in the prestigious An Nur district on King Saud Street, minutes from Dammam Corniche, shopping centers, and King Fahd International Airport.
            </p>
            <div className="p-3 rounded-lg bg-purple-950/60 border border-purple-800/40 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Official KSA Hospitality License</span>
              </div>
              <p className="text-[11px] text-purple-300">
                Fully licensed by the Saudi Ministry of Tourism.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-purple-300">
            <button onClick={() => handleLink('contact')} className="hover:text-amber-300">
              Location Map
            </button>
            <span>·</span>
            <button onClick={() => handleLink('rooms')} className="hover:text-amber-300">
              Suite Tariffs
            </button>
            <span>·</span>
            <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-300">
              Reception Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
