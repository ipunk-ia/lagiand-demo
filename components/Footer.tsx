'use client';

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral text-secondary pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center border-2 border-accent">
                <span className="text-accent font-serif font-bold text-xl">L</span>
              </div>
              <span className="font-serif text-2xl font-bold text-secondary">
                Lagiand
              </span>
            </div>
            <p className="text-secondary/70 mb-6">
              Better place better price. Experience tropical dining at its finest across our beautiful locations in Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-accent">Locations</h4>
            <ul className="space-y-4">
              <li>
                <h5 className="font-bold mb-1">Pinggaus</h5>
                <p className="text-secondary/70 text-sm flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  Jl. Pantai Indah No. 12, Bali
                </p>
              </li>
              <li>
                <h5 className="font-bold mb-1">Tusam</h5>
                <p className="text-secondary/70 text-sm flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  Jl. Sunset Road No. 45, Bali
                </p>
              </li>
              <li>
                <h5 className="font-bold mb-1">Ambarawa</h5>
                <p className="text-secondary/70 text-sm flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  Jl. Danau Rawa No. 8, Central Java
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-secondary/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-secondary/70 hover:text-accent transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="text-secondary/70 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-reservation')); }}>Reservations</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors">Private Events</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-secondary/70">
                <Phone size={18} className="text-accent" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-3 text-secondary/70">
                <Mail size={18} className="text-accent" />
                hello@lagiand.id
              </li>
            </ul>
            
            <h5 className="font-bold mb-3">Newsletter</h5>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-secondary/10 border border-secondary/20 rounded-l-full px-4 py-2 w-full focus:outline-none focus:border-accent text-sm"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded-r-full font-medium text-sm hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/50">
          <p>&copy; {new Date().getFullYear()} Lagiand Restaurant & Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
