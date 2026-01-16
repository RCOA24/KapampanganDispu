'use client';

import React, { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import HeritageSection from '@/components/sections/HeritageSection';
import MenuPreview from '@/components/sections/MenuPreview';
import CareerSection from '@/components/sections/CareerSection';
import InfoSection from '@/components/sections/InfoSection';
import Footer from '@/components/sections/Footer';
import ReservationModal from '@/components/sections/ReservationModal';

export default function LandingPage() {
  const [isResModalOpen, setIsResModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onReserveClick={() => setIsResModalOpen(true)} />
      <Hero />
      <HeritageSection />
      <MenuPreview />
      <CareerSection />
      <InfoSection />
      <Footer />
      
      <ReservationModal 
        isOpen={isResModalOpen} 
        onClose={() => setIsResModalOpen(false)} 
      />
    </main>
  );
}
