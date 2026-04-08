'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-0 bg-secondary overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6 py-20 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">The Lagiand Experience</h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            
            <div className="space-y-6 text-neutral/80 text-lg">
              <p>
                Born from a passion for tropical living and exceptional dining, Lagiand brings the island breeze to your table. We believe that a beautiful setting shouldn&apos;t come with an unreasonable price tag.
              </p>
              <p>
                Our spaces are designed with organic shapes and natural textures, creating a warm, inviting atmosphere that perfectly complements our carefully crafted menu. Whether you&apos;re joining us for a sunset dinner or a casual afternoon coffee, every moment here is designed to be memorable.
              </p>
              <p className="font-serif text-xl text-primary italic pt-4">
                &quot;We don&apos;t just serve food; we serve an atmosphere where time slows down and conversations flow.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Collage */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen bg-primary-light/10">
          <Image
            src="https://picsum.photos/seed/lagiand-interior/1200/1600"
            alt="Lagiand Interior"
            fill
            className="object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-full max-w-md aspect-square">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden border-8 border-secondary shadow-2xl z-20"
              >
                <Image
                  src="https://picsum.photos/seed/lagiand-food/600/600"
                  alt="Lagiand Food"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden border-8 border-secondary shadow-2xl z-10"
              >
                <Image
                  src="https://picsum.photos/seed/lagiand-sunset/800/800"
                  alt="Lagiand Sunset View"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
