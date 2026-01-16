import React from 'react';
import { Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Elements';

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e2d3]/10 bg-[#1a1d3a] pt-16 pb-8 text-[#e6e2d3]">
      <Container>
        {/* Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 border-b border-[#e6e2d3]/10 pb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-[family-name:var(--font-playfair)]">The Inner Circle</h3>
            <p className="text-[#e6e2d3]/70 font-light max-w-md">
              Be the first to know about seasonal menus, chef's table events, and private gatherings.
            </p>
          </div>
          
          <form className="flex w-full max-w-md md:ml-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#e6e2d3]/5 border-b border-[#e6e2d3]/30 px-4 py-3 outline-none text-[#e6e2d3] placeholder:text-[#e6e2d3]/30 focus:border-[#e6e2d3] transition-colors"
                required
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-3 border-b border-[#e6e2d3]/30 hover:border-[#e6e2d3] text-[#e6e2d3] hover:text-white transition-colors group"
            >
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
          <div className="font-light tracking-wide flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
            <span>© 2026 Dispû Dining</span>
            <span className="hidden md:inline">•</span>
            <span>301 Telebastagan, Pampanga</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="group hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/Dispu301" className="group hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
