import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@utils/helpers';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon: Icon,
  iconPosition = 'left',
  ariaLabel,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-rose-500/50',
    secondary: 'bg-gradient-to-r from-champagne-400 to-champagne-500 text-white hover:from-champagne-500 hover:to-champagne-600 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-champagne-500/50',
    outline: 'border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-rose-500/50',
    ghost: 'text-rose-500 hover:bg-rose-50 focus:ring-4 focus:ring-rose-500/50',
    glass: 'glass-effect text-gray-900 hover:bg-white/50 focus:ring-4 focus:ring-rose-500/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={cn(
        'rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" aria-hidden="true" />}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;