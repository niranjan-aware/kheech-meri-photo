import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = 'aspect-square',
  objectFit = 'object-cover',
  blur = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', aspectRatio, className)}>
      {!isLoaded && blur && (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-champagne-100 animate-pulse" />
      )}
      
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setIsLoaded(true)}
          className={cn('w-full h-full', objectFit)}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;