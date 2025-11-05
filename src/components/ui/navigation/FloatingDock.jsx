import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHome, FaImages, FaBriefcase, FaAddressBook, FaInfoCircle } from 'react-icons/fa';

const FloatingDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: FaHome, label: 'Home', href: '#home' },
    { icon: FaBriefcase, label: 'Services', href: '#services' },
    { icon: FaImages, label: 'Gallery', href: '#gallery' },
    { icon: FaInfoCircle, label: 'About', href: '#about' },
    { icon: FaAddressBook, label: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <div className="glass-effect px-4 py-3 rounded-full shadow-2xl">
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <NavItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.2, y: -10 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors group"
    >
      <item.icon className="w-5 h-5" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -50, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute whitespace-nowrap px-3 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg shadow-lg pointer-events-none"
          >
            {item.label}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 rounded-full bg-rose-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1.5 : 0,
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default FloatingDock;