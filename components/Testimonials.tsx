'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The sunset view at the Ambarawa location is absolutely breathtaking. Combined with the amazing food and reasonable prices, it\'s our new favorite spot.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 2,
    name: 'Budi S.',
    text: 'Great atmosphere and friendly staff. The Tropical Grilled Snapper is a must-try! Perfect place for a weekend dinner with family.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 3,
    name: 'Elena K.',
    text: 'I love the organic, relaxed vibe here. It really feels like a mini vacation in the middle of the city. The coffee is excellent too.',
    rating: 4,
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary text-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary text-neutral p-8 md:p-12 rounded-[40px] shadow-2xl relative"
            >
              {/* Quote mark */}
              <div className="absolute top-8 left-8 text-accent/20 font-serif text-8xl leading-none select-none">
                &quot;
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} />
                  ))}
                </div>
                
                <p className="font-serif text-xl md:text-3xl leading-relaxed mb-8 text-primary">
                  {testimonials[currentIndex].text}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-primary">{testimonials[currentIndex].name}</h4>
                    <span className="text-sm text-neutral/60">Verified Guest</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
