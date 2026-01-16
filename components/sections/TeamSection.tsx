import React from 'react';
import Image from 'next/image';
import { Section, Container } from '@/components/ui/Elements';

export default function TeamSection() {
  return (
    <Section className="bg-[#e6e2d3] text-[#22264b]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto md:max-w-none">
             <div className="absolute inset-0 bg-[#22264b] translate-x-4 translate-y-4 rounded-lg z-0"></div>
             <div className="absolute inset-0 z-10 rounded-lg overflow-hidden border border-[#22264b]/10 shadow-2xl bg-gray-100">
                <Image
                  src="/images/chef/chef.png"
                  alt="Chef Mateo Del Rosario"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain" // Changed to contain to show full image
                />
             </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[#22264b]/60 uppercase tracking-[0.2em] text-sm font-medium">The Artisan</span>
              <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] leading-tight">
                Chef Mateo <br/> Del Rosario
              </h2>
            </div>
            
            <div className="space-y-6 text-[#22264b]/80 text-lg font-light leading-relaxed">
              <p>
                Raised in the bustling kitchens of San Fernando, Chef Mateo learned the art of <i>pagluluto</i> from his grandmother, the town's most sought-after cook for fiestas.
              </p>
              <p>
                After a decade honing his craft in modern European kitchens, he returned home with a singular mission: to protect the integrity of Kapampangan flavors while elevating them for the global stage.
              </p>
              <p>
                "We don't reinvent," he says. "We remember."
              </p>
            </div>

            <div className="pt-4">
              <div className="signature font-[family-name:var(--font-playfair)] text-3xl opacity-60">
                Mateo D.R.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
