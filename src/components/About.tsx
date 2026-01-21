import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Drumstick, Heart, Music, Users } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    { icon: Music, text: 'Professional Performers' },
    { icon: Users, text: 'Experienced Team' },
    { icon: Heart, text: 'Traditional Excellence' },
    { icon: Drumstick, text: 'Authentic Sound' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-pink-600">Our Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 md:p-12 rounded-3xl shadow-xl mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We provide professional <span className="font-bold text-pink-600">Sendai Melam</span> performances
            for weddings, temple festivals, receptions, and cultural events. Our experienced team brings
            the authentic sound and energy of traditional Tamil percussion to make your celebrations
            truly memorable and vibrant.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
            >
              <feature.icon className="w-12 h-12 text-pink-600 mx-auto mb-3" />
              <p className="text-center font-semibold text-gray-800">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
