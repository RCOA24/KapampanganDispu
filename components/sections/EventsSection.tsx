import React from 'react';
import Image from 'next/image';
import { Button, Section, Container } from '@/components/ui/Elements';
import { ArrowRight } from 'lucide-react';

export default function EventsSection() {
  return (
    <Section className="relative py-32 overflow-hidden text-[#e6e2d3]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/events/event.jpg"
          alt="Private Events at Dispû"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
        <span className="uppercase tracking-[0.3em] text-sm text-[#e6e2d3]/70">Private Dining & Events</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)]">
            Gather at Dispû
        </h2>
        <p className="text-lg md:text-xl font-light text-[#e6e2d3]/80 max-w-2xl leading-relaxed">
            From intimate family reunions to grand celebrations, our heritage spaces provide the perfect backdrop for your most cherished moments. Experience personalized menus curated by Chef Mateo.
        </p>
        
        <div className="pt-8">
            <Button size="lg" className="bg-[#e6e2d3] text-[#22264b] hover:bg-white border-transparent gap-3 group">
              <span>Inquire for Events</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </div>
      </Container>
    </Section>
  );
}
