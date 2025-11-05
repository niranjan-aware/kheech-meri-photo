import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

const HeroContent = () => {
  return (
    <div className="container-custom px-4 md:px-8 py-20">
      <div className="max-w-5xl mx-auto text-center">
        

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-dancing text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-6"
          style={{
            textShadow: '0 0 40px rgba(244, 63, 94, 0.8), 0 0 80px rgba(244, 63, 94, 0.4)',
          }}
        >
          KheechMeriPhoto
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg mb-4">
            Capturing Moments, Creating Memories
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Professional photography services for weddings, events, and life's most precious moments. 
            Based in Mumbai, we bring your stories to life through stunning imagery.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;