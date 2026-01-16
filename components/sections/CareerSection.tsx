import React from 'react';
import { Mail, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Elements';
import { motion } from 'framer-motion';

interface Position {
  id: number;
  title: string;
  type: string;
}

const openPositions: Position[] = [
  { id: 1, title: 'Barista', type: 'Full-time' },
  { id: 2, title: 'Host', type: 'Part-time' },
  { id: 3, title: 'Waiter', type: 'Full-time' },
  { id: 4, title: 'Cashier', type: 'Part-time' },
];

export default function CareerSection() {
  return (
    <section className="relative z-10 -mt-24 mb-24 px-4 flex justify-center">
      {/* Subtle glow behind the card to separate it from the darkness */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#e6e2d3]/5 blur-[100px] rounded-full -z-10" />

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-lg bg-[#2a2f5a]/90 backdrop-blur-xl border border-[#e6e2d3]/20 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#e6e2d3]/40 transition-colors duration-500"
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6e2d3]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col items-center space-y-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3">
             <div className="inline-flex p-3 bg-[#e6e2d3]/10 rounded-full mb-2">
                <Briefcase className="w-6 h-6 text-[#e6e2d3]" />
             </div>
             <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-[#e6e2d3]">Join Our Family</h2>
             <p className="text-[#e6e2d3]/70 font-light text-sm max-w-xs mx-auto">
               Be part of a team that celebrates Kapampangan heritage and culinary excellence.
             </p>
          </div>
          
          {/* Positions Grid */}
          <div className="w-full grid grid-cols-2 gap-3">
            {openPositions.map((position) => (
              <div 
                key={position.id} 
                className="flex flex-col justify-center p-3 border border-[#e6e2d3]/20 rounded-lg hover:bg-[#e6e2d3]/5 hover:border-[#e6e2d3]/40 transition-all cursor-default text-center sm:text-left group/item"
              >
                <div className="font-medium text-[#e6e2d3] group-hover/item:text-white">{position.title}</div>
                <div className="text-xs text-[#e6e2d3]/50 uppercase tracking-wider mt-1">{position.type}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="w-full pt-2">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Dispu301@gmail.com&su=Job%20Application%20-%20Disp%C3%BB%20Dining" target="_blank" className="block w-full">
              <Button className="w-full gap-2 relative group/btn" size="lg">
                <Mail className="w-4 h-4" />
                <span>Apply via Email</span>
                <ArrowRight className="w-4 h-4 opacity-0 absolute right-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 -translate-x-2" />
              </Button>
            </a>
            <p className="text-center text-[#e6e2d3]/30 text-xs mt-4">
              Please include your CV and Portfolio
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
