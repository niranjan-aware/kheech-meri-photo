import { motion } from 'framer-motion';
import LampEffect from '@components/ui/effects/LampEffect';
import HeroContent from './HeroContent';
import FloatingSparkles from './FloatingSparkles';
import ScrollIndicator from './ScrollIndicator';
import { unsplashImages } from '@data/unsplashImages';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={unsplashImages.hero[0]}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
        </motion.div>
      </div>

      <LampEffect className="absolute inset-0 z-0" />
      
      <FloatingSparkles />

      <div className="relative z-10 w-full">
        <HeroContent />
      </div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default HeroSection;