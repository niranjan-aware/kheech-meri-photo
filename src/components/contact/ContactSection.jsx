import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" background="default" className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="Get in Touch"
          title="Contact Us"
          description="Ready to capture your special moments? Get in touch with us and let's create something beautiful together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ContactSection;