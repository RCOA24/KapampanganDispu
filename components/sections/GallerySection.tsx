'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Elements';

const GALLERY_IMAGES = [
  { src: '/images/ambiance/ambiance1.jpg', alt: 'Ambiance 01' },
  { src: '/images/ambiance/ambiance2.jpg', alt: 'Ambiance 02' },
  { src: '/images/ambiance/ambiance3.jpg', alt: 'Ambiance 03' },
  { src: '/images/ambiance/ambiance4.jpg', alt: 'Ambiance 04' },
];

export default function GallerySection() {
  return (
    <Section className="bg-[#22264b] overflow-hidden !py-0">
      <div className="grid grid-cols-2 md:grid-cols-4 h-96 md:h-[500px]">
         {GALLERY_IMAGES.map((image, index) => (
             <motion.div 
                key={index}
                className={`relative h-full w-full overflow-hidden group cursor-pointer border border-[#e6e2d3]/5`}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
             >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                
                {/* Text on Hover */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-[#e6e2d3] font-[family-name:var(--font-playfair)] text-xl">
                        Ambience 0{index + 1}
                    </span>
                </div>
             </motion.div>
         ))}
      </div>
    </Section>
  );
}
