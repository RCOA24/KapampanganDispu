'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ReservationModal from '@/components/sections/ReservationModal';
import { Section, Container } from '@/components/ui/Elements';
import { MENU_ITEMS, type Category } from '@/lib/data';

export default function MenuPreviewPage() {
  const [isResModalOpen, setIsResModalOpen] = useState(false);

  // Group items by category
  const categories: Category[] = ['Pampanga Classics', 'Modern Fusion', 'Beverages'];

  return (
    <main className="min-h-screen bg-[#e6e2d3] text-[#22264b]">
      <Navbar onReserveClick={() => setIsResModalOpen(true)} />
      
      {/* Header */}
      <div className="bg-[#22264b] text-[#e6e2d3] pt-24 md:pt-32 pb-16">
        <Container className="relative flex flex-col items-center">
           <div className="w-full mb-8 md:mb-0 md:absolute md:top-0 md:left-0 flex justify-start">
             <Link href="/" className="inline-flex items-center gap-2 text-[#e6e2d3]/60 hover:text-[#e6e2d3] transition-colors text-sm uppercase tracking-widest font-medium">
               <ArrowLeft className="w-4 h-4" />
               Back to Home
             </Link>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] mb-4 text-center">Our Menu</h1>
           <p className="text-[#e6e2d3]/70 text-lg max-w-xl mx-auto font-light text-center">
             A culinary journey through time, featuring heritage recipes and modern interpretations.
           </p>
        </Container>
      </div>

      {/* Menu Content */}
      <Section>
        <Container className="space-y-24">
          {categories.map((category) => {
            const items = MENU_ITEMS.filter(item => item.category === category);
            
            return (
              <div key={category} id={category.toLowerCase().replace(' ', '-')}>
                <div className="flex items-center gap-4 mb-12">
                   <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold shrink-0">
                     {category}
                   </h2>
                   <div className="h-[1px] w-full bg-[#22264b]/20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Image Container */}
                      <div className="relative h-64 w-full overflow-hidden bg-[#22264b]/5">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-[#22264b]/20 italic font-[family-name:var(--font-playfair)]">
                            No Image
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 right-4 bg-[#e6e2d3] text-[#22264b] px-3 py-1 text-sm font-bold rounded-sm shadow-lg">
                          {item.price}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold text-[#22264b]">
                          {item.name}
                        </h3>
                        <p className="text-[#22264b]/70 font-light text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </Section>

      <Footer />
      <ReservationModal 
        isOpen={isResModalOpen} 
        onClose={() => setIsResModalOpen(false)} 
      />
    </main>
  );
}
