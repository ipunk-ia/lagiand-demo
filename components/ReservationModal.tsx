'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    email: '',
    requests: '',
  });

  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
    };
    document.addEventListener('open-reservation', handleOpen);
    return () => document.removeEventListener('open-reservation', handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Simulate API call
      setTimeout(() => {
        setBookingId(`LAG-${Math.floor(Math.random() * 10000)}`);
        setStep(3);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-secondary rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-primary p-6 text-secondary flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-serif text-2xl">Reserve a Table</h3>
              <p className="text-secondary/70 text-sm">Experience tropical dining at Lagiand</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {step === 1 && (
              <form id="reservation-form-1" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <MapPin size={16} className="text-accent" /> Location
                    </label>
                    <select 
                      name="location" 
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="" disabled>Select a location</option>
                      <option value="Pringapus">Pringapus</option>
                      <option value="Tusam">Tusam</option>
                      <option value="Ambarawa">Ambarawa</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Users size={16} className="text-accent" /> Number of Guests
                    </label>
                    <select 
                      name="guests" 
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      {[...Array(19)].map((_, i) => (
                        <option key={i + 2} value={i + 2}>{i + 2} People</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <CalendarIcon size={16} className="text-accent" /> Date
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Clock size={16} className="text-accent" /> Time
                    </label>
                    <select 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="" disabled>Select time</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>
              </form>
            )}

            {step === 2 && (
              <form id="reservation-form-2" onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-xl mb-6 flex flex-wrap gap-4 text-sm text-primary">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-accent"/> {formData.location}</span>
                  <span className="flex items-center gap-1"><CalendarIcon size={14} className="text-accent"/> {formData.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} className="text-accent"/> {formData.time}</span>
                  <span className="flex items-center gap-1"><Users size={14} className="text-accent"/> {formData.guests} Guests</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Special Requests (Optional)</label>
                    <textarea 
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Allergies, special occasions, etc."
                      rows={3}
                      className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="font-serif text-3xl text-primary mb-2">Booking Confirmed!</h3>
                <p className="text-neutral/70 mb-8">
                  Thank you, {formData.name}. Your reservation at {formData.location} for {formData.guests} guests on {formData.date} at {formData.time} is confirmed.
                </p>
                <p className="text-sm text-neutral/50 mb-8">Booking ID: #{bookingId}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#25D366] text-white hover:bg-[#128C7E]">
                    Confirm via WhatsApp
                  </Button>
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {step < 3 && (
            <div className="p-6 border-t border-primary/10 bg-white flex justify-between shrink-0">
              {step === 2 ? (
                <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              ) : (
                <div></div>
              )}
              <Button 
                type="submit" 
                form={`reservation-form-${step}`}
              >
                {step === 1 ? 'Next Step' : 'Confirm Reservation'}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
