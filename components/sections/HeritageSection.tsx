import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Section, Container } from '@/components/ui/Elements';

export default function HeritageSection() {
  return (
    <Section className="bg-[#22264b] text-[#e6e2d3] overflow-hidden !py-20">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 px-4 md:pl-12 lg:pl-20 space-y-8">
          <div className="w-16 h-[1px] bg-[#e6e2d3]/30 mb-8"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-tight">
            The Dispû Legacy
          </h2>
          <div className="space-y-6 font-light text-[#e6e2d3]/80 leading-relaxed text-lg text-justify">
            <p>
              Dispû is more than a restaurant; it is a revival of the culinary golden age of Pampanga. Born from a desire to preserve the intricate, labor-intensive recipes of our ancestors, we marry the soul of 1920s San Fernando with the techniques of 2026.
            </p>
            <p>
              Our kitchen is a sanctuary where clay pots meet sous-vide machines, creating a dialogue between past and present. Each dish tells a story of harvest, festival, and family—reimagined for the modern palate without losing its essential Kapampangan character.
            </p>
          </div>
          
          <a href="#" className="inline-flex items-center gap-2 group text-[#e6e2d3] border-b border-transparent hover:border-[#e6e2d3] pb-1 transition-all mt-4">
            <span className="uppercase tracking-widest text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right: Image Placeholder */}
        <div className="order-1 md:order-2 h-full min-h-[400px] md:min-h-[600px] relative px-4 md:px-0">
          <div className="w-full h-full bg-[#333860] rounded-t-full relative overflow-hidden shadow-2xl border-x-2 border-t-2 border-[#e6e2d3]/10">
            <Image 
              src="/images/heritage/kitchen-interior.jpg"
              alt="Heritage Kitchen Interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay to ensure text readability if needed, though mostly visual here */}
            <div className="absolute inset-0 bg-[#22264b]/20 mix-blend-multiply"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#e6e2d3]/5 rounded-full blur-3xl rounded-t-full pointer-events-none"></div>
        </div>

      </Container>
    </Section>
  );
}
