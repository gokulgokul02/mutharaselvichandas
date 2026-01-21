import { motion } from 'framer-motion';
import { Phone, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-pink-900 to-rose-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img
                src="/sendai_logo.png"
                alt="Sendai Logo"
                className="w-12 h-12 object-contain rounded-lg"
              />
              <h3 className="text-2xl font-bold">Mutharaselvi</h3>
            </div>
            <p className="text-pink-200">
              Traditional Sendai Melam for All Functions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-4 text-pink-300">Contact Us</h4>
            <div className="space-y-2">
              <a href="tel:+919360019581" className="flex items-center justify-center gap-2 hover:text-pink-300 transition-colors">
                <Phone size={18} />
                <span>9360019581</span>
              </a>
              <a href="tel:+919443757882" className="flex items-center justify-center gap-2 hover:text-pink-300 transition-colors">
                <Phone size={18} />
                <span>9443757882</span>
              </a>
              <a href="tel:+919025383124" className="flex items-center justify-center gap-2 hover:text-pink-300 transition-colors">
                <Phone size={18} />
                <span>9025383124</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-bold mb-4 text-pink-300">Follow Us</h4>
            <a
              href="https://www.instagram.com/muthara_selvi_chendas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-colors"
            >
              <Instagram size={20} />
              <span>@muthara_selvi_chendas</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-pink-800 pt-8 text-center"
        >
          <p className="text-pink-200 flex items-center justify-center gap-2">
            Made with <Heart className="text-pink-500" size={18} fill="currentColor" /> for Traditional Arts
          </p>
          <p className="text-pink-300 mt-2">
            &copy; {new Date().getFullYear()} Mutharaselvi Sandai Melam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
