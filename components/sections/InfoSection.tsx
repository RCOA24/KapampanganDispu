import React from 'react';
import { MapPin, Clock, Phone, Info } from 'lucide-react';
import { Section, Container, Button } from '@/components/ui/Elements';

export default function InfoSection() {
  return (
    <Section className="bg-[#1a1d3a] text-[#e6e2d3] border-t border-[#e6e2d3]/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-[#e6e2d3]/5 rounded-full">
                <MapPin className="w-6 h-6 text-[#e6e2d3]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold">Location</h3>
            </div>
            <div className="space-y-4 text-[#e6e2d3]/70 font-light leading-relaxed pl-2 border-l border-[#e6e2d3]/10">
              <p>
                MacArthur Highway, <br />
                San Fernando, Pampanga<br />
                Philippines, 2000
              </p>
              <Button variant="link" className="text-sm font-normal h-auto p-0">
                Get Directions &rarr;
              </Button>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-[#e6e2d3]/5 rounded-full">
                <Clock className="w-6 h-6 text-[#e6e2d3]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold">Hours</h3>
            </div>
            <div className="space-y-3 pl-2 border-l border-[#e6e2d3]/10">
              <div className="flex justify-between text-[#e6e2d3]/70 font-light">
                <span>Lunch</span>
                <span>11:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between text-[#e6e2d3]/70 font-light">
                <span>Dinner</span>
                <span>5:30 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between text-[#e6e2d3]/70 font-light pt-2 mt-2 border-t border-[#e6e2d3]/5">
                <span>Weekend Brunch</span>
                <span>10:00 AM – 3:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact/Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-[#e6e2d3]/5 rounded-full">
                <Info className="w-6 h-6 text-[#e6e2d3]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-playfair)] font-bold">Details</h3>
            </div>
            <div className="space-y-4 text-[#e6e2d3]/70 font-light leading-relaxed pl-2 border-l border-[#e6e2d3]/10">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-50" />
                <span>+63 (45) 888-1926</span>
              </p>
              <div className="text-sm space-y-2 pt-2">
                <p><span className="text-[#e6e2d3] font-medium">Dress Code:</span> Smart Casual</p>
                <p><span className="text-[#e6e2d3] font-medium">Parking:</span> Valet Available</p>
              </div>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Private Events
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
