'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Coffee, Utensils, Wine, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'mains', name: 'Mains', icon: Utensils },
  { id: 'drinks', name: 'Drinks', icon: Coffee },
  { id: 'desserts', name: 'Desserts', icon: Wine }, // Using wine icon as a placeholder for desserts/sweets
];

const highlights = [
  {
    name: 'Tropical Grilled Snapper',
    description: 'Fresh local catch with sambal matah and coconut rice.',
    price: 'Rp 85.000',
    image: 'https://picsum.photos/seed/snapper/400/300',
    category: 'mains',
  },
  {
    name: 'Sunset Sunset Bowl',
    description: 'Smoothie bowl with dragon fruit, mango, and house granola.',
    price: 'Rp 55.000',
    image: 'https://picsum.photos/seed/smoothie/400/300',
    category: 'mains',
  },
  {
    name: 'Lagiand Signature Iced Coffee',
    description: 'Cold brew with palm sugar and coconut cream foam.',
    price: 'Rp 35.000',
    image: 'https://picsum.photos/seed/coffee/400/300',
    category: 'drinks',
  },
  {
    name: 'Pandan Chiffon Cake',
    description: 'Light and fluffy with a hint of coconut.',
    price: 'Rp 40.000',
    image: 'https://picsum.photos/seed/cake/400/300',
    category: 'desserts',
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Trial Opening Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-secondary p-4 rounded-2xl mb-16 text-center shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/pattern/100/100')] opacity-10 mix-blend-overlay" />
          <p className="relative z-10 font-serif text-xl md:text-2xl">
            <span className="text-accent font-bold">🎉 Trial Opening Special:</span> Get 20% off all main courses this month!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Menu Highlights</h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-neutral/80 max-w-xl">
              A taste of the tropics. Our menu features locally sourced ingredients prepared with modern techniques.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            <ExternalLink size={18} />
            View Full Menu
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors text-primary font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <Icon size={16} />
                </div>
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="font-serif text-xl text-primary font-bold leading-tight">{item.name}</h3>
                  <span className="text-accent font-medium whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-neutral/70 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
