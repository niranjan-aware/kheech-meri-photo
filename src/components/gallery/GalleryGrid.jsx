import { motion } from 'framer-motion';
import { useState } from 'react';
import LazyImage from '@components/shared/LazyImage';

const GalleryGrid = ({ images, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {images.map((image, index) => (
        <GalleryItem
          key={image.id}
          image={image}
          index={index}
          onClick={() => onImageClick(image)}
        />
      ))}
    </motion.div>
  );
};

const GalleryItem = ({ image, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.02 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-square"
    >
      <LazyImage
        src={image.image}
        alt={image.title}
        className="w-full h-full"
        objectFit="object-cover"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-rose-500 rounded-full">
              {image.category}
            </div>
            <h3 className="font-playfair text-lg font-bold">{image.title}</h3>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 border-4 border-rose-500 rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : -180 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-champagne-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default GalleryGrid;