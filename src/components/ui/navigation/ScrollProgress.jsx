import { motion } from 'framer-motion';
import { useScrollProgress } from '@hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-champagne-500 to-rose-500 origin-left z-50"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollProgress;