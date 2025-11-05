import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import GalleryHeader from './GalleryHeader';
import CategoryFilter from './CategoryFilter';
import GalleryGrid from './GalleryGrid';
import Lightbox from './Lightbox';
import { galleryImages, galleryCategories } from '@data/gallery';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <SectionWrapper id="gallery" background="default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GalleryHeader />

        <CategoryFilter
          categories={galleryCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <AnimatePresence mode="wait">
          <GalleryGrid
            key={selectedCategory}
            images={filteredImages}
            onImageClick={handleImageClick}
          />
        </AnimatePresence>

        <Lightbox
          isOpen={isLightboxOpen}
          image={selectedImage}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </motion.div>
    </SectionWrapper>
  );
};

export default GallerySection;