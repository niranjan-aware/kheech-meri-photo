import { motion } from 'framer-motion';

const GalleryFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
          }`}
        >
          {category.label}
          {category.count && (
            <span className={`ml-2 text-sm ${
              selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
            }`}>
              ({category.count})
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default GalleryFilters;