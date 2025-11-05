import { motion } from 'framer-motion';
import { useState } from 'react';
import ParallaxImage from '@components/ui/interactive/ParallaxImage';
import { featuredImages } from '@data/featured';
import Badge from '@components/shared/Badge';

const BentoGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gridLayout = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {featuredImages.slice(0, 8).map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative group overflow-hidden rounded-2xl ${gridLayout[index]}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ParallaxImage
            src={item.image}
            alt={item.title}
            className="absolute inset-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: hoveredIndex === index ? 0 : 20,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
          >
            <Badge variant="primary" className="mb-3">
              {item.category}
            </Badge>
            <h3 className="font-playfair text-xl font-bold">
              {item.title}
            </h3>
          </motion.div>

          <motion.div
            className="absolute inset-0 border-4 border-rose-500 rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
              scale: hoveredIndex === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: hoveredIndex === index ? 1 : 0,
              rotate: hoveredIndex === index ? 0 : -180,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl">+</span>
          </motion.div>

          {index === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full text-sm font-bold shadow-lg"
            >
              Featured ⭐
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;