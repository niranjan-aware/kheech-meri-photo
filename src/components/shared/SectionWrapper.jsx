import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const SectionWrapper = ({ 
  children, 
  id, 
  className,
  containerClassName,
  background = 'default',
  ...props 
}) => {
  const backgrounds = {
    default: 'bg-transparent',
    light: 'bg-gradient-to-br from-rose-50/50 to-white',
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800',
    glass: 'glass-effect',
  };

  return (
    <section
      id={id}
      className={cn('section-padding relative overflow-hidden', backgrounds[background], className)}
      {...props}
    >
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;