import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram as InstagramIcon, Play, X } from 'lucide-react';

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedVideo, setSelectedVideo] = useState<{ src: string, title: string } | null>(null);

  const videos = [
    { src: '/Video1.mp4', title: 'Grand Entry' },
    { src: '/Video2.mp4', title: 'Temple Celebration' },
    { src: '/Video3.mp4', title: 'Cultural Performance' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-pink-500/90 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 fill-current translate-x-1" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {video.title}
                  </h3>
                  <span className="text-gray-400 text-sm">Live Performance</span>
                </div>
              </div>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold rounded-full shadow-sm border border-pink-100">
                  LIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={40} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-black">
                <video
                  key={selectedVideo.src}
                  className="max-w-full max-h-[85vh] shadow-2xl"
                  controls
                  autoPlay
                  preload="auto"
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-400">Watch our live performance in full detail</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
