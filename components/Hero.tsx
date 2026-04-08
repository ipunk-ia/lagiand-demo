'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

const backgroundImage = 'hhttps://ibb.co.com/hGFGXQ8';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Static Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary flex flex-col items-center justify-center border-4 border-accent shadow-[0_0_30px_rgba(212,165,116,0.3)] mx-auto px-4 text-center">
            <span className="text-accent font-serif font-bold text-4xl md:text-5xl tracking-wide">Lagiand</span>
            <span className="text-secondary text-xs tracking-[0.15em] mt-2 uppercase">Restaurant & Cafe</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-secondary mb-6 max-w-3xl leading-tight"
        >
          Better place better price
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => document.dispatchEvent(new CustomEvent('open-reservation'))}>
            Reserve a Table
          </Button>
          <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-primary" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-secondary/80 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-accent" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
