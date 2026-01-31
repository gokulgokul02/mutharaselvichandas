import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Instagram, ShieldCheck, Award, Users } from 'lucide-react';

export default function Owner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <motion.h2
          style={{ y: y2 }}
          className="text-[15rem] md:text-[25rem] font-black text-gray-50 leading-none"
        >
          SUDAR
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" ref={ref}>

          {/* Left Side: Full Pose Image with Effects */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] aspect-[3/4]">
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-rose-100 rounded-full blur-3xl opacity-60" />

              {/* Image Container */}
              <motion.div
                style={{ y: y1 }}
                className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(236,72,153,0.2)] border-8 border-white group"
              >
                <img
                  src="/sudar.png"
                  alt="M. Sudar - Founder"
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-pink-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-lg font-bold text-gray-900">5+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content & Contact */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-8">
              <span className="text-pink-600 font-bold tracking-[0.2em] uppercase mb-4 block">Our Visionary</span>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                M. <span className="text-pink-600">Sudar</span>
              </h2>
              <p className="text-2xl text-gray-600 font-medium mb-8">Founder & Chief Organizer</p>

              <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mb-10" />

              <p className="text-xl text-gray-600 leading-relaxed mb-10 italic">
                "We don't just provide music; we bring the soul of tradition to your most precious moments. Every beat from our Chendas is a celebration of life."
              </p>
            </div>

            {/* Glassmorphic Contact Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Primary Contact', value: '9360019581', icon: Phone, href: 'tel:+919360019581' },
                { label: 'Contact', value: '9443757882', icon: Phone, href: 'tel:+919443757882' },
                { label: 'Contact', value: '9025383124', icon: Phone, href: 'tel:+919025383124' },
                { label: 'Instagram', value: '@muthara_selvi', icon: Instagram, href: 'https://www.instagram.com/muthara_selvi_chendas' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-5 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg hover:shadow-pink-100 hover:bg-white/80 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-gray-800">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-pink-600" />
                <span className="text-sm font-bold text-gray-900">Certified Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-pink-600" />
                <span className="text-sm font-bold text-gray-900">500+ Events Done</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
