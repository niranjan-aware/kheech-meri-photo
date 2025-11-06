import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const SectionHeading = ({ 
  title, 
  subtitle, 
  description,
  align = 'center',
  className 
}) => {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('flex flex-col mb-8 md:mb-12', alignments[align], className)}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-6 py-2 mb-3 text-sm font-semibold text-rose-600 bg-rose-100 rounded-full"
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-3 md:mb-4"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-600 max-w-3xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;