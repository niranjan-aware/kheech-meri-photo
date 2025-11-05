
import { motion } from 'framer-motion';
import { useState } from 'react';
import CanvasReveal from '@components/ui/effects/CanvasReveal';
import GlassCard from '@components/ui/cards/GlassCard';
import { FaCheck } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = service.icon;

  const colorClasses = {
    rose: {
      bg: 'from-rose-500 to-rose-600',
      text: 'text-rose-500',
      border: 'border-rose-500',
      canvas: [[244, 63, 94]],
    },
    champagne: {
      bg: 'from-champagne-400 to-champagne-500',
      text: 'text-champagne-600',
      border: 'border-champagne-500',
      canvas: [[218, 155, 55]],
    },
  };

  const colors = colorClasses[service.color];

  return (
    <CanvasReveal
      animationSpeed={0.4}
      colors={colors.canvas}
      containerClassName="relative"
    >
      <GlassCard
        className="h-full relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hover={false}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`border-t-2 ${colors.border} pt-6 mb-6`} />
            
            <div className="space-y-3">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 px-6 py-3 rounded-full bg-gradient-to-r ${colors.bg} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute top-4 right-4 text-6xl opacity-10"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={colors.text} />
        </motion.div>
      </GlassCard>
    </CanvasReveal>
  );
};

export default ServiceCard;