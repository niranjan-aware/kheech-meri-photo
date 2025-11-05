import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const GlowingEffect = ({ children, className, glowColor = 'rose' }) => {
  const glowColors = {
    rose: 'shadow-rose-500/50',
    champagne: 'shadow-champagne-500/50',
    white: 'shadow-white/50',
  };

  return (
    <motion.div
      className={cn('relative', className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={cn(
          'absolute inset-0 rounded-2xl blur-xl',
          glowColors[glowColor]
        )}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export const PulsingGlow = ({ children, className }) => {
  return (
    <div className={cn('relative', className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-rose-500 to-champagne-500 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const AnimatedGradientBorder = ({ children, className }) => {
  return (
    <motion.div
      className={cn('relative p-[2px] rounded-2xl overflow-hidden', className)}
      style={{
        background: 'linear-gradient(90deg, #f43f5e, #da9b37, #f43f5e)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="bg-white rounded-2xl h-full w-full">{children}</div>
    </motion.div>
  );
};

export const ShimmerEffect = ({ children, className }) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {children}
    </div>
  );
};

export default GlowingEffect;