import { motion } from 'framer-motion';
import { Drumstick, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600">
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-100, -800],
            x: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute bottom-0 w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Drumstick size={100} className="text-white drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Mutharaselvi<br />
          <span className="text-yellow-300">Sandai Melam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-3xl text-white/90 mb-12 font-medium"
        >
          Traditional Sendai Melam for All Functions
        </motion.p>

        <motion.a
          href="tel:+919360019581"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-pink-500/50 transition-all"
        >
          <Phone size={24} />
          Call Now
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-white/80 text-lg"
        >
          <p>📞 9360019581 | 9443757882 | 9025383124</p>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
