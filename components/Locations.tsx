'use client';

import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

const locations = [
  {
    name: 'Pinggaus',
    hours: '11:00 - 23:00',
    image: 'https://picsum.photos/seed/pinggaus/600/600',
    mapUrl: '#',
  },
  {
    name: 'Tusam',
    hours: '11:00 - 23:00',
    image: 'https://picsum.photos/seed/tusam/600/600',
    mapUrl: '#',
  },
  {
    name: 'Ambarawa',
    hours: '11:00 - 23:00',
    image: 'https://picsum.photos/seed/ambarawa/600/600',
    mapUrl: '#',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Our Locations</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-neutral/80 max-w-2xl mx-auto">
            Experience the tropical ambiance at any of our three beautiful locations. 
            Each spot offers a unique view with the same great taste and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative border-8 border-white shadow-xl transition-transform duration-500 group-hover:-translate-y-4">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-accent text-primary px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="font-serif text-2xl text-primary mb-2">{loc.name}</h3>
                <div className="flex items-center justify-center gap-2 text-neutral/70 mb-2">
                  <Clock size={16} className="text-accent" />
                  <span>{loc.hours}</span>
                </div>
                <a href={loc.mapUrl} className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors text-sm font-medium">
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
