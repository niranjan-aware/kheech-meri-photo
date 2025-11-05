import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import ServiceGrid from './ServiceGrid';
import Button from '@components/shared/Button';
import { FaPhone } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" background="default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="From weddings to corporate events, we offer comprehensive photography and event services tailored to your needs."
        />

        <ServiceGrid />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6 font-playfair">
            Ready to book your session?
          </p>
          <Button
            variant="secondary"
            size="lg"
            icon={FaPhone}
            iconPosition="left"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us Today
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesSection;