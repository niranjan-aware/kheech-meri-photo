import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@utils/helpers';
import LazyImage from '@components/shared/LazyImage';

const ImageCard = ({ 
  image, 
  title, 
  description,
  category,
  onClick,
  className,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        'relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg',
        className
      )}
      {...props}
    >
      <LazyImage
        src={image}
        alt={title}
        className="w-full h-full"
        aspectRatio="aspect-[4/3]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {category && (
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-rose-500 rounded-full"
            >
              {category}
            </motion.span>
          )}

          {title && (
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl font-playfair font-bold mb-2"
            >
              {title}
            </motion.h3>
          )}

          {description && (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-200"
            >
              {description}
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : -180
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-rose-500 text-lg">+</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;