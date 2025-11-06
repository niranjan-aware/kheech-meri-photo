import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@components/layout/LoadingScreen';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollToTop from '@components/layout/ScrollToTop';
import PageTransition from '@components/layout/PageTransition';
import ScrollProgress from '@components/ui/navigation/ScrollProgress';
import FloatingDock from '@components/ui/navigation/FloatingDock';
import HeroSection from '@components/hero/HeroSection';
import FeaturedShowcase from '@components/featured/FeaturedShowcase';
import ServicesSection from '@components/services/ServicesSection';
import InfiniteScrollPreview from '@components/infinite-preview/InfiniteScrollPreview';
import GallerySection from '@components/gallery/GallerySection';
import ProcessSection from '@components/process/ProcessSection';
import TestimonialsSection from '@components/testimonials/TestimonialsSection';
import AboutSection from '@components/about/AboutSection';
import ContactSection from '@components/contact/ContactSection';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Hanging Crystals - Capturing Moments, Creating Memories';
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <Navbar />
          
          <PageTransition>
            <main className="relative">
              <HeroSection />
              {/* <FeaturedShowcase /> */}
              <ServicesSection />
              <InfiniteScrollPreview />
              <GallerySection />
              {/* <ProcessSection /> */}
              <TestimonialsSection />
              <AboutSection />
              <ContactSection />
            </main>
          </PageTransition>

          <Footer />
          <ScrollToTop />
          {/* <FloatingDock /> */}
        </>
      )}
    </>
  );
}

export default App;