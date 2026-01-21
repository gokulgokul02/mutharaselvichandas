import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <motion.a
      href="tel:+919360019581"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-40 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 text-white p-5 rounded-full shadow-2xl">
          <Phone size={28} className="animate-pulse" />
        </div>
      </motion.div>
    </motion.a>
  );
}
