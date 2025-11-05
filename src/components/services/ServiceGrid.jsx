import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '@data/services';

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServiceCard service={service} index={index} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;