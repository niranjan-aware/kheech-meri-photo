import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LazyImage from '@components/shared/LazyImage';

const ParallaxImage = ({ src, alt, className, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <LazyImage
          src={src}
          alt={alt}
          className="w-full h-full"
          objectFit="object-cover"
          blur={true}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;