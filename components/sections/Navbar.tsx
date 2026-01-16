import React from 'react';
import { Button } from '@/components/ui/Elements';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#22264b]/30 border-b border-[#e6e2d3]/10">
      <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
        Dispû
      </div>
      <Button 
        variant="outline" 
        size="sm"
        onClick={onReserveClick}
        className="rounded-full px-6"
      >
        Reserve
      </Button>
    </nav>
  );
}
