import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

const LoadingSpinner = ({ size = 'md', text }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`${sizes[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-rose-200"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-rose-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCamera className="w-6 h-6 text-rose-500" />
        </div>
      </motion.div>

      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;