import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Church, Heart, Music, PartyPopper, Sparkles } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Heart,
      title: 'Wedding Functions',
      description: 'Make your special day unforgettable with traditional beats',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Church,
      title: 'Temple Festivals',
      description: 'Authentic temple festival performances with divine energy',
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: PartyPopper,
      title: 'Receptions',
      description: 'Grand reception entries with powerful drumming',
      color: 'from-pink-600 to-rose-600',
    },
    {
      icon: Music,
      title: 'Cultural Programs',
      description: 'Traditional performances for cultural celebrations',
      color: 'from-rose-600 to-pink-700',
    },
    {
      icon: Sparkles,
      title: 'Special Events',
      description: 'Custom performances for any special occasion',
      color: 'from-pink-700 to-rose-700',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Professional Sendai Melam for Every Occasion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-rose-600"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
