import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Elements';

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e2d3]/10 bg-[#1a1d3a] py-8 text-[#e6e2d3]">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-80">
        <div className="font-light tracking-wide">
          301 Telebastagan, Pampanga
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="group hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com/Dispu301" className="group hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
