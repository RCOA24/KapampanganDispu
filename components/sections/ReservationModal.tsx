import React from 'react';
import { X, Calendar, Clock, Users, User } from 'lucide-react';
import { Button, Input } from '@/components/ui/Elements';
import { motion, AnimatePresence } from 'framer-motion';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={onClose}
          />

          {/* Modal Body */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#22264b] border border-[#e6e2d3] p-8 md:p-10 shadow-2xl rounded-sm"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[#e6e2d3]/50 hover:text-[#e6e2d3] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-[#e6e2d3] mb-2">Reserve a Table</h2>
              <p className="text-[#e6e2d3]/60 text-sm font-light">Join us for an evening of heritage and flavor.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              
              <Input 
                label="Name" 
                placeholder="Juan Dela Cruz" 
                icon={<User className="w-4 h-4" />}
                required 
              />

              <div className="grid grid-cols-2 gap-6">
                <Input 
                  label="Date" 
                  type="date"
                  icon={<Calendar className="w-4 h-4" />}
                  className="[color-scheme:dark]"
                  required 
                />

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-[#e6e2d3]/50 ml-1 font-medium">Time</label>
                  <div className="flex items-center border-b border-[#e6e2d3]/30 focus-within:border-[#e6e2d3] transition-colors pb-2">
                    <Clock className="w-4 h-4 text-[#e6e2d3]/50 mr-3" />
                    <select className="w-full bg-transparent text-[#e6e2d3] focus:outline-none font-light appearance-none [&_option]:text-[#22264b]">
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <Input 
                label="Guests"
                type="number" 
                min={1} 
                max={20}
                defaultValue={2}
                icon={<Users className="w-4 h-4" />}
                required 
              />

              <Button type="submit" className="w-full mt-4 py-6" size="lg">
                Confirm Reservation
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
