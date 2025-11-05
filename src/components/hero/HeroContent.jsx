import { motion } from 'framer-motion';
import { FaCamera, FaArrowRight, FaPlay } from 'react-icons/fa';
import Button from '@components/shared/Button';

const HeroContent = () => {
  return (
    <div className="container-custom px-4 md:px-8 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 shadow-2xl"
        >
          <FaCamera className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-dancing text-6xl md:text-7xl lg:text-8xl gradient-text mb-6"
        >
          KheechMeriPhoto
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
            Capturing Moments, Creating Memories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional photography services for weddings, events, and life's most precious moments. 
            Based in Mumbai, we bring your stories to life through stunning imagery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            icon={FaArrowRight}
            iconPosition="right"
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            icon={FaPlay}
            iconPosition="left"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '1000+', label: 'Happy Couples' },
            { number: '5000+', label: 'Events' },
            { number: '50K+', label: 'Photos' },
            { number: '10+', label: 'Years' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          {[
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden"
              style={{ marginLeft: index > 0 ? '-12px' : '0' }}
            >
              <img src={image} alt={`Client ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-left"
          >
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Loved by <span className="font-bold text-rose-600">1000+</span> couples
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;