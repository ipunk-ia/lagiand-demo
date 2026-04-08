'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function FloatingReserve() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.dispatchEvent(new CustomEvent('open-reservation'))}
          className="fixed bottom-8 right-8 z-40 bg-accent text-primary px-6 py-4 rounded-full shadow-2xl font-medium flex items-center gap-2 border-2 border-primary/10"
        >
          <Calendar size={20} />
          <span className="hidden md:inline">Reserve Now</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
