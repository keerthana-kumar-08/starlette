import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import background from "../images/background.avif";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:py-32 py-16 h-screen flex flex-col justify-center items-center text-center md:items-start md:text-left md:px-10">
        <motion.h1
          className="lg:text-7xl md:text-6xl text-4xl font-bold text-[#151B54] mb-6 leading-tight"
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
          className="text-xl text-white mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Discover Your Property's True Value
        </motion.p>

        <motion.p
          className="text-lg text-white mb-8 max-w-2xl"
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
            className="bg-[#151B54] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
