import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { NAVIGATION_ITEMS } from '@utils/constants';
import { siteConfig } from '@data/config';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-12">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-dancing text-3xl gradient-text"
                >
                  Menu
                </motion.span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-gray-700 hover:text-rose-500 transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </motion.button>
              </div>

              <nav className="space-y-6 mb-12">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={onClose}
                    className="block text-xl font-medium text-gray-700 hover:text-rose-500 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <p className="text-sm text-gray-600 mb-2 font-semibold">Get in touch</p>
                <p className="text-lg font-bold text-rose-500 mb-1">{siteConfig.contact.phone}</p>
                <p className="text-sm text-gray-600">{siteConfig.contact.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6"
              >
                <p className="text-xs text-gray-500 text-center">
                  {siteConfig.businessHours.weekdays}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;