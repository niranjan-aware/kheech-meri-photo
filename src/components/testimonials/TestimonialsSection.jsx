import { motion } from 'framer-motion';
import SectionWrapper from '@components/shared/SectionWrapper';
import SectionHeading from '@components/shared/SectionHeading';
import TestimonialMarquee from './TestimonialMarquee';
import { testimonials } from '@data/testimonials';

const TestimonialsSection = () => {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);
  const row3 = testimonials.slice(10, 15);

  return (
    <SectionWrapper id="testimonials" background="default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          subtitle="Client Love"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our happy clients have to say about their experience with us."
        />

        <div className="space-y-6">
          <TestimonialMarquee testimonials={row1} speed={30} />
          <TestimonialMarquee testimonials={row2} speed={30} direction="right" />
          <TestimonialMarquee testimonials={row3} speed={30} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-effect inline-block px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="text-yellow-400 text-2xl"
                >
                  ★
                </motion.span>
              ))}
            </div>
            <p className="text-gray-600 font-semibold">
              Rated <span className="text-rose-600 font-bold">5.0/5.0</span> by{' '}
              <span className="text-rose-600 font-bold">100+</span> clients
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;