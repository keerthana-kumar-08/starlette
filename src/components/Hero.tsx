import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empower Your <span className="text-blue-600">Business</span> with
          Innovation
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Leverage cutting-edge technology to create seamless digital
          experiences that elevate your brand.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:scale-105">
            Get Started
            <ChevronRight className="ml-2" size={20} />
          </button>
          <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
