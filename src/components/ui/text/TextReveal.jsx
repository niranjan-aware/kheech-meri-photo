import { motion } from 'framer-motion';

const TextReveal = ({ text, className = '' }) => {
  const words = text.split(' ');

  return (
    <div className={`text-lg text-gray-700 leading-relaxed ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;