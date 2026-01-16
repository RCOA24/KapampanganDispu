import React from 'react';
import { Quote } from 'lucide-react';
import { Section, Container } from '@/components/ui/Elements';

const TESTIMONIALS = [
  {
    id: 1,
    text: "Dispû doesn't just serve food; it serves memories. The Sisig Matua took me back to my grandmother's kitchen, yet the presentation was world-class.",
    author: "Maria C.",
    role: "Food Critic, Manila Digest"
  },
  {
    id: 2,
    text: "A masterclass in balancing tradition and innovation. The ambiance perfectly captures the soul of old Pampanga.",
    author: "James L.",
    role: "Patron"
  },
  {
    id: 3,
    text: "The best dining experience in San Fernando. Every detail, from the clay pots to the playlist, is curated with love.",
    author: "Sofia R.",
    role: "Lifestyle Blogger"
  }
];

export default function Testimonials() {
  return (
    <Section className="bg-[#22264b] text-[#e6e2d3] border-t border-[#e6e2d3]/5">
      <Container>
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <Quote className="w-12 h-12 text-[#e6e2d3]/20" />
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)]">Stories from Our Table</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center space-y-6">
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-[#e6e2d3]/80">
                "{item.text}"
              </p>
              <div className="space-y-1">
                <div className="font-[family-name:var(--font-playfair)] text-xl font-bold">{item.author}</div>
                <div className="text-sm text-[#e6e2d3]/50 uppercase tracking-widest">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
