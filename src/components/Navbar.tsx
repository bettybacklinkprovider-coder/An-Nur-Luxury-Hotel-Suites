import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  currency: 'SAR' | 'USD';
  onToggleCurrency: () => void;
  lang: 'EN' | 'AR';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  currency,
  onToggleCurrency,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: lang === 'EN' ? 'Home' : 'الرئيسية' },
    { id: 'about', label: lang === 'EN' ? 'About Us' : 'من نحن' },
    { id: 'rooms', label: lang === 'EN' ? 'Rooms & Services' : 'الغرف والخدمات' },
    { id: 'contact', label: lang === 'EN' ? 'Contact Us' : 'اتصل بنا' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#12041F]/95 backdrop-blur-md border-b border-purple-900/40 text-white transition-all duration-200">
      {/* Top Notification / Contact Strip */}
      <div className="hidden sm:block bg-gradient-to-r from-purple-950 via-[#1F0833] to-purple-950 border-b border-purple-800/30 text-xs py-1.5 px-4 text-purple-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{HOTEL_INFO.phoneFormatted}</span>
            </a>
            <span className="text-purple-700">|</span>
            <span className="truncate max-w-md text-purple-300">
              📍 {HOTEL_INFO.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-300 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> 5-Star Luxury Rating
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3-Zone Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single Text Element Brand Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-amber-600 flex items-center justify-center p-0.5 shadow-md shadow-purple-900/50">
            <div className="w-full h-full bg-[#1A092A] rounded-full flex items-center justify-center">
              <span className="font-cinzel text-amber-400 font-bold text-lg">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
              {HOTEL_INFO.name}
            </span>
            <span className="text-[10px] tracking-widest text-purple-300 uppercase font-medium">
              Dammam · Saudi Arabia
            </span>
          </div>
        </button>

        {/* Zone 2: 4 Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-amber-300 bg-purple-900/60 border border-amber-500/30 shadow-sm'
                    : 'text-purple-200 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Currency/Lang + Book Now CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-800/50 border border-purple-700/40 rounded-md transition-colors"
            title="Toggle Currency (SAR / USD)"
          >
            <span className="text-amber-400 font-bold">{currency}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-800/50 border border-purple-700/40 rounded-md transition-colors"
            title="Toggle Language (English / Arabic)"
          >
            <Globe className="w-3.5 h-3.5 text-purple-300" />
            <span>{lang}</span>
          </button>

          {/* Book Now Primary Action Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-purple-950" />
            <span>{lang === 'EN' ? 'Book Now' : 'احجز الآن'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-purple-200 hover:text-white hover:bg-purple-900/50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A092A] border-t border-purple-800/50 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-purple-900/60 text-xs text-purple-300">
            <span>Currency:</span>
            <div className="flex gap-2">
              <button
                onClick={onToggleCurrency}
                className="px-3 py-1 bg-purple-900 rounded font-bold text-amber-300"
              >
                {currency}
              </button>
              <button
                onClick={onToggleLang}
                className="px-3 py-1 bg-purple-900 rounded font-bold text-purple-200"
              >
                {lang}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-400/20 text-amber-300 border-l-4 border-amber-400 font-bold'
                      : 'text-purple-200 hover:bg-purple-900/40 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-purple-900/60">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-purple-200 bg-purple-900/40 rounded-lg border border-purple-700/50"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {HOTEL_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
