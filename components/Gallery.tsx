'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Instagram, X } from 'lucide-react';
import { Button } from './ui/Button';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/gal1/600/800', category: 'Ambiance', span: 'col-span-1 row-span-2' },
  { id: 2, src: 'https://picsum.photos/seed/gal2/800/600', category: 'Food', span: 'col-span-2 row-span-1' },
  { id: 3, src: 'https://picsum.photos/seed/gal3/600/600', category: 'Sunset Views', span: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://picsum.photos/seed/gal4/600/600', category: 'Events', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://picsum.photos/seed/gal5/800/600', category: 'Food', span: 'col-span-2 row-span-1' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-neutral/80 max-w-xl">
              Moments captured at Lagiand. Share yours with #lagiand.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            <Instagram size={18} />
            Follow @lagiand.id (12.4k)
          </Button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${img.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-secondary font-medium tracking-wider uppercase text-sm border border-secondary/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
