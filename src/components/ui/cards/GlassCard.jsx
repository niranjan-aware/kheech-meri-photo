import { motion } from 'framer-motion';
import { cn } from '@utils/helpers';

const GlassCard = ({ 
  children, 
  className,
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      {...(hover && {
        whileHover: { y: -8, scale: 1.02 },
        transition: { duration: 0.3 }
      })}
      className={cn(
        'glass-effect rounded-2xl p-6 md:p-8',
        hover && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;