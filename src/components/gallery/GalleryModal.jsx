import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GalleryModal = ({ image, onClose, onNext, onPrev }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <FaTimes className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] w-full"
      >
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-full object-contain rounded-2xl"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
          <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full mb-2">
            {image.category}
          </span>
          <h3 className="font-playfair text-2xl font-bold text-white">
            {image.title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;