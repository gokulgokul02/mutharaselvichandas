import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    { src: '/sendai.jpeg', alt: 'Mutharaselvi Sandai Melam Performance' },
    { src: '/sendai.jpeg', alt: 'Team Performance' },
    { src: '/sendai.jpeg', alt: 'Festival Performance' },
    { src: '/sendai.jpeg', alt: 'Wedding Performance' },
    { src: '/sendai.jpeg', alt: 'Cultural Event' },
    { src: '/sendai.jpeg', alt: 'Temple Festival' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Capturing the Energy of Our Performances</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-square cursor-pointer"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-600/50 to-transparent flex items-end p-6"
              >
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute inset-0 border-4 border-pink-500 rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
