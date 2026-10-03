import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Clock, MessageSquare, Calendar, CheckCircle2, Send, Sparkles, Navigation } from 'lucide-react';

interface ContactUsPageProps {
  onOpenBooking: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onOpenBooking }) => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0 text-slate-900 bg-[#FAF7FC]">
      
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#12041F] text-white border-b border-purple-900/50 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Direct Concierge Line
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Contact {HOTEL_INFO.name}
          </h1>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are at your disposal 24 hours a day. Get in touch with our guest relations team or visit us on King Saud Street.
          </p>
        </div>
      </section>

      {/* Main Contact Grid & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Information Card */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-2xl bg-[#12041F] text-white border border-purple-800/50 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    Concierge Information
                  </span>
                  <h2 className="font-cinzel text-2xl font-bold text-white mt-1">
                    Get in Touch
                  </h2>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-purple-200">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A092A] border border-purple-800/40">
                    <div className="p-2.5 bg-amber-400/20 text-amber-300 rounded-lg shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-purple-400 block uppercase font-semibold">
                        Direct Phone Reservation
                      </span>
                      <a
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="font-bold text-base text-white hover:text-amber-300 transition-colors"
                      >
                        {HOTEL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/40 text-emerald-300 hover:bg-emerald-900/50 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-bold text-sm block">Instant WhatsApp Inquiry</span>
                      <span className="text-[11px] text-emerald-400/80">Fastest response for availability</span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A092A] border border-purple-800/40">
                    <div className="p-2.5 bg-amber-400/20 text-amber-300 rounded-lg shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-purple-400 block uppercase font-semibold">
                        Hotel Location
                      </span>
                      <p className="font-medium text-purple-200 text-xs mt-0.5 leading-relaxed">
                        {HOTEL_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1A092A] border border-purple-800/40">
                    <div className="p-2.5 bg-amber-400/20 text-amber-300 rounded-lg shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-purple-400 block uppercase font-semibold">
                        Front Desk Hours
                      </span>
                      <p className="font-medium text-white text-xs mt-0.5">
                        24 Hours / 7 Days a Week
                      </p>
                      <p className="text-[11px] text-purple-400 mt-1">
                        Check-in: 15:00 · Check-out: 12:00
                      </p>
                    </div>
                  </div>

                </div>

                {/* Quick Call & Booking Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="flex-1 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3 px-4 text-xs font-bold text-white bg-purple-900 hover:bg-purple-800 border border-purple-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" /> Book Your Stay
                  </button>
                </div>

              </div>

            </div>

            {/* Right 7 Cols: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white border border-purple-100 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-widest block">
                    Online Message
                  </span>
                  <h2 className="font-cinzel text-2xl font-bold text-purple-950 mt-1">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-slate-600 text-xs mt-1">
                    Fill in your details below and our guest services manager will contact you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 rounded-xl bg-purple-50 border border-purple-200">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-purple-950">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you for contacting <strong>{HOTEL_INFO.name}</strong>. Our reception team will get back to you shortly via phone or email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 text-xs font-bold text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-purple-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-purple-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-purple-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Subject *
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-purple-900 focus:outline-none"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Room Reservation">Room Reservation</option>
                          <option value="Executive / Group Booking">Executive / Group Booking</option>
                          <option value="Event & Dining Inquiry">Event & Dining Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Message / Preferred Stay Dates *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we assist you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-purple-900 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-bold tracking-wider text-white bg-purple-950 hover:bg-purple-900 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="py-16 bg-[#12041F] text-white border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Interactive Map
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Hotel Location in Dammam
              </h2>
              <p className="text-xs text-purple-300 mt-1">
                {HOTEL_INFO.address}
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                HOTEL_INFO.address
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 w-fit shadow"
            >
              <Navigation className="w-4 h-4" /> Get Driving Directions
            </a>
          </div>

          {/* Map Embed Frame */}
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-purple-800/60 shadow-2xl relative bg-[#1A092A]">
            <iframe
              title="An Nur Hotel Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05)' }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                HOTEL_INFO.address
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};
