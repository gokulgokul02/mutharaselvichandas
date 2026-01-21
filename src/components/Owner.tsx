import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, User, Drumstick } from 'lucide-react';

export default function Owner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-pink-600">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-pink-200"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-6 -right-6 text-pink-300"
          >
            <Drumstick size={80} />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl">
                <User size={64} className="text-white" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 border-4 border-pink-400 rounded-full"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                M. Sudar
              </h3>
              <p className="text-xl text-pink-600 mb-6 font-semibold">
                Founder & Organizer
              </p>

              <div className="space-y-3">
                <motion.a
                  href="tel:+919360019581"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <Phone className="text-pink-600 group-hover:animate-pulse" />
                  <span className="font-semibold text-gray-800">9360019581</span>
                </motion.a>

                <motion.a
                  href="tel:+919443757882"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <Phone className="text-pink-600 group-hover:animate-pulse" />
                  <span className="font-semibold text-gray-800">9443757882</span>
                </motion.a>

                <motion.a
                  href="tel:+919025383124"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  <Phone className="text-pink-600 group-hover:animate-pulse" />
                  <span className="font-semibold text-gray-800">9025383124</span>
                </motion.a>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-gray-600 text-lg italic"
          >
            "Bringing the authentic rhythm of tradition to your celebrations"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
