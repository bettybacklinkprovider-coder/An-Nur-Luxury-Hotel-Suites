import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { RoomsServicesPage } from './pages/RoomsServicesPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { BookingModal } from './components/BookingModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export default function App() {
  // Page Navigation State based on URL hash or default 'home'
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'about', 'rooms', 'contact'].includes(hash) ? hash : 'home';
  });

  // Modal & Lightbox state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string | undefined>(undefined);

  // Currency & Language
  const [currency, setCurrency] = useState<'SAR' | 'USD'>('SAR');
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  // Sync hash on navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'rooms', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (src: string, caption?: string) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7FC] text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* 3-Zone Header Contract Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'SAR' ? 'USD' : 'SAR')}
        lang={lang}
        onToggleLang={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
            currency={currency}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
            currency={currency}
          />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedRoomId={preselectedRoomId}
        currency={currency}
      />

      {/* Fullscreen Image Lightbox */}
      <ImageLightboxModal
        imageSrc={lightboxSrc}
        caption={lightboxCaption}
        onClose={() => setLightboxSrc(null)}
      />

    </div>
  );
}
