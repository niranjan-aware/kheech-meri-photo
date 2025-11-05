import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const MarqueeCards = ({ items, speed = 50, direction = 'left', pauseOnHover = true }) => {
  return (
    <Marquee
      gradient={false}
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      className="overflow-hidden"
    >
      {items.map((item, index) => (
        <MarqueeCard key={index} item={item} />
      ))}
    </Marquee>
  );
};

const MarqueeCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="mx-4 glass-effect p-6 rounded-2xl min-w-[300px]"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      
      {item.title && (
        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
      )}
      
      {item.description && (
        <p className="text-gray-600 text-sm">
          {item.description}
        </p>
      )}
    </motion.div>
  );
};

export default MarqueeCards;