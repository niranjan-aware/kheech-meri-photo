import { motion } from 'framer-motion';

const BackgroundRipple = ({ className, mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-rose-400 opacity-0"
            style={{
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0,
            }}
            animate={{
              scale: [1, 2],
              opacity: [opacity, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 0.2,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundRipple;