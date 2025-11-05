import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const Badge = ({ children, variant = 'default', className, animate = true }) => {
  const variants = {
    default: 'bg-rose-100 text-rose-700',
    primary: 'bg-rose-500 text-white',
    secondary: 'bg-champagne-100 text-champagne-700',
    success: 'bg-green-100 text-green-700',
    glass: 'glass-effect text-gray-900',
  };

  const Component = animate ? motion.span : 'span';

  return (
    <Component
      {...(animate && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      })}
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Badge;