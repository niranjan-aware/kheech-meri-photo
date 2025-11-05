import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

const HeroContent = () => {
  return (
    <div className="container-custom px-4 md:px-8 pb-10">
      <div className="max-w-5xl mx-auto text-center">
        

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-dancing text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl mb-4 bg-gradient-to-r from-rose-500 via-rose-400 to-champagne-500 bg-clip-text text-transparent"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(244, 63, 94, 0.6)) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.8))',
          }}
        >
          KheechMeriPhoto
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-champagne-300 drop-shadow-lg mb-3"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            Capturing Moments, Creating Memories
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-champagne-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            Professional photography services for weddings, events, and life's most precious moments.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;