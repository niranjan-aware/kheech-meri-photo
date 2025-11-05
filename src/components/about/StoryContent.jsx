import { motion } from 'framer-motion';
import TextReveal from '@components/ui/text/TextReveal';
import { aboutData } from '@data/about';
import GlassCard from '@components/ui/cards/GlassCard';

const StoryContent = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
          {aboutData.story.title}
        </h3>
        <TextReveal text={aboutData.story.content} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard>
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center flex-shrink-0"
            >
              <span className="text-2xl">🎯</span>
            </motion.div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.story.mission}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <GlassCard>
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-champagne-400 to-champagne-500 flex items-center justify-center flex-shrink-0"
            >
              <span className="text-2xl">👁️</span>
            </motion.div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.story.vision}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pt-6"
      >
        <div className="flex flex-wrap gap-3">
          {['Professional', 'Creative', 'Reliable', 'Experienced'].map((tag, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-champagne-500 text-white rounded-full font-semibold text-sm shadow-lg"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StoryContent;