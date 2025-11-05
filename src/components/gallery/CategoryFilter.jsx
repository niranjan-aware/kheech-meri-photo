import { motion } from 'framer-motion';
import Badge from '@components/shared/Badge';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
                : 'glass-effect text-gray-700 hover:bg-white/50'
            }`}
          >
            {category.label}
            <span className={`ml-2 text-sm ${
              selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
            }`}>
              ({category.count})
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-6"
      >
        <p className="text-gray-600">
          Showing{' '}
          <span className="font-bold text-rose-600">
            {categories.find(c => c.id === selectedCategory)?.count || 0}
          </span>{' '}
          images
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CategoryFilter;