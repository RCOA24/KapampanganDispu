'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container } from '@/components/ui/Elements';
import { MENU_ITEMS, type Category } from '@/lib/data';

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<Category>('Pampanga Classics');
  const categories: Category[] = ['Pampanga Classics', 'Modern Fusion', 'Beverages'];

  const displayedItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  // Get a featured image for the current category
  const featuredImage = displayedItems[0]?.image || '/images/menu/default-placeholder.jpg';

  return (
    <Section id="menu-preview" className="bg-[#e6e2d3] text-[#22264b]">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold">
            Curated Flavors
          </h2>
          <p className="text-[#22264b]/70 max-w-2xl mx-auto font-light">
            A selection of timeless heritage recipes and contemporary reimaginations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium tracking-wide
                ${
                  activeTab === category
                    ? 'bg-[#22264b] text-[#e6e2d3] border-[#22264b]'
                    : 'bg-transparent text-[#22264b] border-[#22264b]/30 hover:border-[#22264b]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Featured Image Placeholder */}
          <div className="lg:col-span-5 h-[400px] lg:h-[600px] relative rounded-t-full overflow-hidden border-2 border-[#22264b]/10 shadow-xl group">
             {/* Key added to force re-render and animation on tab change */}
             <div key={activeTab} className="relative w-full h-full animate-[fadeIn_0.5s_ease-out]">
                <Image
                    src={featuredImage}
                    alt={`${activeTab} Feature`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority // Prioritize loading this LCP candidate
                />
             </div>
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Right: Menu Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group/item flex flex-col justify-between border-b border-[#22264b]/10 pb-6 hover:border-[#22264b]/40 transition-colors duration-300"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold group-hover/item:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </h3>
                    <span className="font-medium text-lg opacity-90">{item.price}</span>
                  </div>
                  <p className="text-[#22264b]/70 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
             <Link 
                href="/menu" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#22264b] text-[#e6e2d3] rounded-full hover:bg-[#2a2f5a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
             >
                <span className="uppercase tracking-widest text-sm font-medium">View Full Menu</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
             </Link>
        </div>
      </Container>
    </Section>
  );
}
