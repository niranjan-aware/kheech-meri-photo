import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-effect p-6 rounded-2xl shadow-lg h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div>
          <h4 className="font-playfair text-lg font-bold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="text-yellow-400 text-lg"
          >
            ★
          </motion.span>
        ))}
      </div>

      <div className="relative flex-1">
        <FaQuoteLeft className="absolute -top-2 -left-2 text-4xl text-rose-200" />
        <p className="text-gray-700 leading-relaxed pl-8 relative z-10">
          {testimonial.text}
        </p>
      </div>

      <motion.div
        className="absolute top-4 right-4 text-6xl text-rose-100 opacity-50"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;