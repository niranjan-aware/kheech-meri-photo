import { motion } from 'framer-motion';
import { useState } from 'react';
import { processSteps } from '@data/process';
import LazyImage from '@components/shared/LazyImage';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-champagne-500 to-rose-500 transform -translate-x-1/2" />

      <div className="space-y-12 lg:space-y-24">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={step.id}
            step={step}
            index={index}
            isActive={activeStep === index}
            onActivate={() => setActiveStep(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProcessStep = ({ step, index, isActive, onActivate }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={onActivate}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      <motion.div
        className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect p-8 rounded-2xl shadow-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="inline-block px-4 py-2 mb-4 text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-rose-600 rounded-full"
          >
            {step.step}
          </motion.div>

          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            {step.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            {step.description}
          </p>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="mt-6 text-6xl"
          >
            {step.icon}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-champagne-500 flex items-center justify-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text">{step.id}</span>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-full bg-rose-500"
          animate={{
            scale: isActive ? [1, 1.3, 1] : 1,
            opacity: isActive ? [0.5, 0, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
          }}
        />
      </motion.div>

      <motion.div
        className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative overflow-hidden rounded-2xl shadow-xl group"
        >
          <LazyImage
            src={step.image}
            alt={step.title}
            className="w-full h-80"
            objectFit="object-cover"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
          >
            <div className="text-white">
              <h4 className="font-playfair text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-200">{step.step}</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 border-4 border-rose-500 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;