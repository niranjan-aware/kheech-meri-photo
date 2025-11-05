import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => document.getElementById('featured').scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="text-sm font-medium text-gray-600 font-playfair">Scroll to explore</span>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col items-center"
      >
        <FaChevronDown className="w-5 h-5 text-rose-500" />
      </motion.div>

      <div className="w-6 h-10 rounded-full border-2 border-rose-500 flex items-start justify-center p-1">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-rose-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;