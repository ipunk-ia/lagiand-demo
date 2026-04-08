import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Locations from '@/components/Locations';
import About from '@/components/About';
import MenuHighlights from '@/components/MenuHighlights';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';
import FloatingReserve from '@/components/FloatingReserve';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <Locations />
      <About />
      <MenuHighlights />
      <Gallery />
      <Testimonials />
      <Footer />
      <ReservationModal />
      <FloatingReserve />
    </main>
  );
}
