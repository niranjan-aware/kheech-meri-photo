import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxWrapper = ({ children, speed = 0.5, direction = 'up' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const directionMultiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed * directionMultiplier]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;