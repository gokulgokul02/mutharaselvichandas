import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram as InstagramIcon, Play } from 'lucide-react';

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const instagramPosts = [
    'https://www.instagram.com/p/sample1/',
    'https://www.instagram.com/p/sample2/',
    'https://www.instagram.com/p/sample3/',
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Watch Our <span className="text-pink-600">Live Performances</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Experience the Energy and Tradition</p>
        </motion.div>

        <motion.a
          href="https://www.instagram.com/muthara_selvi_chendas"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="block max-w-2xl mx-auto mb-12"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.3)',
                '0 0 40px rgba(236, 72, 153, 0.6)',
                '0 0 20px rgba(236, 72, 153, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-8 md:p-12 rounded-3xl text-white text-center shadow-2xl"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-block mb-6"
            >
              <InstagramIcon size={80} />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-xl mb-4 text-white/90">@muthara_selvi_chendas</p>
            <p className="text-lg text-white/80">
              Watch exclusive videos and behind-the-scenes content
            </p>
          </motion.div>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/muthara_selvi_chendas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-10 h-10 text-pink-600" fill="currentColor" />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Live Performance {index + 1}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
