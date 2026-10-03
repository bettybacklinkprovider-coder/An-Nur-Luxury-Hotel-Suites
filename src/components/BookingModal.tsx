import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Building2, Shield, Printer } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  currency: 'SAR' | 'USD';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
  currency,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || ROOMS_DATA[0].id
  );
  
  // Dates default: tomorrow and day after tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const [checkIn, setCheckIn] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(dayAfter.toISOString().split('T')[0]);
  const [guests, setGuests] = useState<number>(2);

  // Add-ons
  const [addons, setAddons] = useState({
    breakfast: true,
    airportTransfer: false,
    executiveLounge: false,
    spaPass: false,
  });

  // Guest Details Form
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const dateIn = new Date(checkIn);
  const dateOut = new Date(checkOut);
  const diffTime = Math.max(dateOut.getTime() - dateIn.getTime(), 86400000);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const roomRate = currency === 'SAR' ? currentRoom.priceSAR : currentRoom.priceUSD;
  const roomTotal = roomRate * nights;

  // Addon prices
  const breakfastPrice = currency === 'SAR' ? 85 * nights * guests : 23 * nights * guests;
  const transferPrice = currency === 'SAR' ? 180 : 48;
  const loungePrice = currency === 'SAR' ? 250 * nights : 67 * nights;
  const spaPrice = currency === 'SAR' ? 150 * guests : 40 * guests;

  let addonsTotal = 0;
  if (addons.breakfast) addonsTotal += breakfastPrice;
  if (addons.airportTransfer) addonsTotal += transferPrice;
  if (addons.executiveLounge) addonsTotal += loungePrice;
  if (addons.spaPass) addonsTotal += spaPrice;

  const grandTotal = roomTotal + addonsTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `ANNUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsConfirmed(true);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1A092A] text-white border border-purple-700/50 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-[#2C1045] to-purple-950 p-6 border-b border-purple-800/50 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 5-Star Direct Reservation
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-0.5">
              {HOTEL_INFO.name}
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-800/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isConfirmed ? (
          /* Confirmation Receipt State */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs text-purple-300 uppercase tracking-widest font-semibold">
                Reservation Confirmed
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-amber-300 mt-1">
                Booking Reference: {bookingRef}
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>! Your reservation at {HOTEL_INFO.name} has been processed. A voucher copy has been dispatched to your email ({email || 'guest'}).
              </p>
            </div>

            {/* Summary Voucher Card */}
            <div className="bg-[#240C3B] border border-purple-700/50 rounded-xl p-5 text-left text-xs sm:text-sm space-y-3 font-sans">
              <div className="flex justify-between pb-2 border-b border-purple-800/50">
                <span className="text-purple-300">Selected Suite:</span>
                <span className="font-semibold text-white">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-purple-800/50">
                <span className="text-purple-300">Dates & Duration:</span>
                <span className="font-semibold text-amber-300">{checkIn} to {checkOut} ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-purple-800/50">
                <span className="text-purple-300">Guests:</span>
                <span className="font-semibold text-white">{guests} Guest(s)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-purple-800/50">
                <span className="text-purple-300">Contact Phone:</span>
                <span className="font-semibold text-white">{phone}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-purple-200">Total Amount Payable at Check-in:</span>
                <span className="font-bold text-lg text-amber-400">{currency} {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 text-left">
              <strong>Need Immediate Assistance?</strong> Call our 24/7 Front Desk at{' '}
              <a href={`tel:${HOTEL_INFO.phone}`} className="underline text-amber-300 font-bold">
                {HOTEL_INFO.phoneFormatted}
              </a>{' '}
              referencing voucher <strong>{bookingRef}</strong>.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 px-4 text-xs font-bold text-purple-200 bg-purple-900/60 hover:bg-purple-800 border border-purple-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print / Save Voucher
              </button>
              <button
                onClick={handleResetAndClose}
                className="flex-1 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Input State */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Room Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                1. Select Accommodation Suite
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-[#27103C] border border-purple-700/60 rounded-xl py-3 px-4 text-sm text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — {currency} {currency === 'SAR' ? room.priceSAR : room.priceUSD} / night
                  </option>
                ))}
              </select>
            </div>

            {/* Dates & Guests Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-purple-300 mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#27103C] border border-purple-700/60 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-purple-300 mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#27103C] border border-purple-700/60 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-purple-300 mb-1">
                  Guests Count
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#27103C] border border-purple-700/60 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                >
                  <option value={1}>1 Adult Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5 Guests (Family)</option>
                </select>
              </div>
            </div>

            {/* Enhancements / Addons */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                2. Suite Add-ons & Amenities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#27103C] border border-purple-800/40 hover:border-purple-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.breakfast}
                    onChange={(e) => setAddons({ ...addons, breakfast: e.target.checked })}
                    className="accent-amber-400 rounded"
                  />
                  <span>
                    Gourmet Breakfast Buffet ({currency} {breakfastPrice})
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#27103C] border border-purple-800/40 hover:border-purple-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.airportTransfer}
                    onChange={(e) => setAddons({ ...addons, airportTransfer: e.target.checked })}
                    className="accent-amber-400 rounded"
                  />
                  <span>
                    VIP Airport Sedan Transfer ({currency} {transferPrice})
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#27103C] border border-purple-800/40 hover:border-purple-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.executiveLounge}
                    onChange={(e) => setAddons({ ...addons, executiveLounge: e.target.checked })}
                    className="accent-amber-400 rounded"
                  />
                  <span>
                    Executive Lounge Pass ({currency} {loungePrice})
                  </span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-lg bg-[#27103C] border border-purple-800/40 hover:border-purple-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.spaPass}
                    onChange={(e) => setAddons({ ...addons, spaPass: e.target.checked })}
                    className="accent-amber-400 rounded"
                  />
                  <span>
                    Royal Spa & Hydro Pass ({currency} {spaPrice})
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Details */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300">
                3. Primary Guest Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Guest Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-[#27103C] border border-purple-700/60 rounded-lg p-3 text-xs text-white placeholder-purple-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#27103C] border border-purple-700/60 rounded-lg p-3 text-xs text-white placeholder-purple-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <input
                type="email"
                required
                placeholder="Email Address (for confirmation voucher) *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#27103C] border border-purple-700/60 rounded-lg p-3 text-xs text-white placeholder-purple-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />

              <textarea
                rows={2}
                placeholder="Special requests or arrival timing preferences (optional)..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-[#27103C] border border-purple-700/60 rounded-lg p-3 text-xs text-white placeholder-purple-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            {/* Total Price Bar & Submit */}
            <div className="pt-4 border-t border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-purple-300 block">
                  Total for {nights} Night(s) incl. taxes & fees:
                </span>
                <span className="font-cinzel text-2xl font-bold text-amber-300">
                  {currency} {grandTotal.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-xs font-bold tracking-wider text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                Confirm Booking Voucher
              </button>
            </div>

            <p className="text-[10px] text-center text-purple-400">
              🔒 No advance payment required. Free cancellation up to 24 hours prior to check-in.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
