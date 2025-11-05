import { motion } from 'framer-motion';
import SectionHeading from '@components/shared/SectionHeading';

const GalleryHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <SectionHeading
        subtitle="Browse Our Work"
        title="Complete Gallery"
        description="Explore our extensive collection of photography across weddings, events, portraits, and more. Each image tells a unique story."
      />
    </motion.div>
  );
};

export default GalleryHeader;