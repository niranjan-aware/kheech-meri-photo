import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import ServiceCard from './ServiceCard';
import Button from '@components/shared/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import { services } from '@data/services';

const ServicesSection = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          description="From weddings to corporate events, we provide comprehensive photography and event services tailored to your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-playfair text-gray-700 mb-8">
            Ready to book your session?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleContactClick}
            className="inline-flex items-center gap-3"
          >
            <FaPhoneAlt className="w-5 h-5" />
            Contact Us Today
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ServicesSection;