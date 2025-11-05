import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import BentoGrid from './BentoGrid';
import Button from '@components/shared/Button';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedShowcase = () => {
  return (
    <SectionWrapper id="featured" background="light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="Our Best Work"
          title="Featured Gallery"
          description="Discover our most captivating photographs that tell beautiful stories and capture unforgettable moments."
        />

        <BentoGrid />

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
            icon={FaArrowRight}
            iconPosition="right"
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
          >
            View Full Gallery
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturedShowcase;