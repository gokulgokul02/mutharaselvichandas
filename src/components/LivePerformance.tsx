import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export default function LivePerformance() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const videos = [
        { id: 1, src: '/Video1.mp4', title: 'Grand Entry' },
        { id: 2, src: '/Video2.mp4', title: 'Temple Celebration' },
        { id: 3, src: '/Video3.mp4', title: 'Cultural Performance' },
    ];

    return (
        <section ref={ref} className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <span className="text-pink-600 font-semibold tracking-wider uppercase mb-2 block">Experience the Rhythm</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Watch Our <span className="text-pink-600">Live Performance</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Witness the energy and tradition of Mutharaselvi Sandai Melam in action.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-pink-200 transition-all duration-500 border border-gray-100"
                        >
                            <div className="aspect-video relative overflow-hidden bg-gray-900">
                                <video
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    controls
                                    preload="metadata"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Custom Overlay for better aesthetic when not playing */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                            </div>

                            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                                        {video.title}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                                        <Play className="w-5 h-5 fill-current" />
                                    </div>
                                </div>
                                <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-pink-500 transition-all duration-500" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold rounded-full shadow-sm border border-pink-100">
                                    LIVE
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-rose-50/50 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
