import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import { infiniteScrollImages } from '@data/infiniteScroll';
import LazyImage from '@components/shared/LazyImage';

const InfiniteScrollPreview = () => {
  const row1 = infiniteScrollImages.slice(0, 13);
  const row2 = infiniteScrollImages.slice(13, 26);
  const row3 = infiniteScrollImages.slice(26, 40);

  return (
    <SectionWrapper id="infinite-scroll" background="light" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="Our Portfolio"
          title="Endless Memories"
          description="A glimpse into thousands of beautiful moments we've captured over the years."
        />

        <div className="space-y-6">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {row1.map((item) => (
              <MarqueeCard key={item.id} item={item} />
            ))}
          </Marquee>

          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            direction="right"
            className="overflow-hidden"
          >
            {row2.map((item) => (
              <MarqueeCard key={item.id} item={item} />
            ))}
          </Marquee>

          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {row3.map((item) => (
              <MarqueeCard key={item.id} item={item} />
            ))}
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 font-playfair">
            And many more beautiful moments waiting to be discovered...
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

const MarqueeCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative mx-3 group cursor-pointer"
    >
      <div className="w-80 h-64 rounded-2xl overflow-hidden shadow-lg">
        <LazyImage
          src={item.image}
          alt={item.title}
          className="w-full h-full"
          objectFit="object-cover"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
        >
          <div className="text-white">
            <h4 className="font-playfair text-xl font-bold">{item.title}</h4>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 border-4 border-rose-500 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-white text-xl font-bold">+</span>
      </motion.div>
    </motion.div>
  );
};

export default InfiniteScrollPreview;