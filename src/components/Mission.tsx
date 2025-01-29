import { motion } from 'framer-motion';
import { Compass, Target } from 'lucide-react';

const Mission = ({ fadeIn, stagger }: any) => {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto sm:px-6 px-3">
        <motion.div
          initial={stagger}
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="bg-gray-800 sm:p-12 p-6 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Compass className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At Starlette, our mission is to provide precise, honest, and
              comprehensive property valuations that help our clients navigate
              the complexities of the real estate market with confidence. We aim
              to offer tailored solutions that meet the unique needs of each
              client, ensuring every valuation is relevant, accurate, and
              actionable.
            </p>
          </motion.div>
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 sm:p-12 p-6 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Target className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be recognized as the most trusted and innovative property
              valuation company, offering unparalleled expertise and service,
              and becoming the preferred partner for real estate valuation
              services globally.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
