'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Elements';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image 
          src="/images/backgrounds/hero-bg.jpg"
          alt="Vintage Pampanga Texture"
          fill
          className="object-cover opacity-100"
          priority
          quality={65} // Reduced quality for background pattern
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#22264b]/70 via-[#22264b]/70 to-[#22264b]" />
      </div>

      <div className="z-10 max-w-4xl space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          {/* Replace src with your actual logo file path */}
          <div className="w-48 h-48 md:w-72 md:h-72 relative flex items-center justify-center">
             <Image
              src="/Dispu.png" 
              alt="Dispû Logo"
              width={400}
              height={400}
              className="object-contain opacity-90"
              priority
            />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-6xl font-[family-name:var(--font-playfair)] leading-tight"
        >
          Authentic Kapampangan Dining in San Fernando
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto"
        >
          Savor soulful Kapampangan food, warm hospitality, and moments that feel like home.

        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <Link href="#menu-preview">
            <Button size="lg" className="text-lg px-10">
              View Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
