import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />{' '}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          className="lg:text-7xl md:text-6xl text-4xl font-bold text-yellow-400 mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
        >
          Starlette
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Property Valuations
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Discover Your Property’s True Value
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Get professional and accurate property valuations to make informed
          decisions. We provide trusted, expert assessments tailored to your
          needs.
        </motion.p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
