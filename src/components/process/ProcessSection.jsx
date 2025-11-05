import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import ProcessTimeline from './ProcessTimeline';
import Button from '@components/shared/Button';
import { FaArrowRight } from 'react-icons/fa';

const ProcessSection = () => {
  return (
    <SectionWrapper id="process" background="light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="How We Work"
          title="Our Process"
          description="From the first consultation to final delivery, we ensure a smooth and enjoyable experience at every step of your journey with us."
        />

        <ProcessTimeline />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6 font-playfair">
            Ready to start your journey with us?
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={FaArrowRight}
            iconPosition="right"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Consultation
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProcessSection;