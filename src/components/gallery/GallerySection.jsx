import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import GalleryGrid from './GalleryGrid';
import Button from '@components/shared/Button';
import { FaExpand } from 'react-icons/fa';
import { galleryCategories } from '@data/gallery';

const GalleryFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
          }`}
        >
          {category.label}
          {category.count && (
            <span className={`ml-2 text-sm ${
              selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
            }`}>
              ({category.count})
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [maxImages, setMaxImages] = useState(30);

  useEffect(() => {
    const updateMaxImages = () => {
      if (window.innerWidth < 768) {
        setMaxImages(10);
      } else {
        setMaxImages(30);
      }
    };

    updateMaxImages();
    window.addEventListener('resize', updateMaxImages);
    return () => window.removeEventListener('resize', updateMaxImages);
  }, []);

  return (
    <SectionWrapper id="gallery" background="light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="Our Portfolio"
          title="Gallery"
          description="Explore our collection of captured moments and creative masterpieces."
        />

        <GalleryFilters
          categories={galleryCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <GalleryGrid 
          selectedCategory={selectedCategory} 
          maxImages={showFullGallery ? null : maxImages}
        />

        {!showFullGallery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="primary"
              size="lg"
              icon={FaExpand}
              iconPosition="right"
              onClick={() => setShowFullGallery(true)}
            >
              View Full Gallery
            </Button>
          </motion.div>
        )}

        {showFullGallery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowFullGallery(false)}
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </motion.div>
    </SectionWrapper>
  );
};

export default GallerySection;