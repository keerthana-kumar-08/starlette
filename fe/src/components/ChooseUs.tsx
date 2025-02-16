import { motion } from 'framer-motion';
import { ChooseUsData } from '../data/ChooseUsData';

const ChooseUs = ({ fadeIn, stagger }: any) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="sm:text-5xl text-3xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            We combine expertise, technology, and dedication to deliver
            exceptional valuation services
          </p>
        </motion.div>
        <motion.div
          initial={stagger}
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {ChooseUsData.map((reason, index) => (
            <motion.div
              key={index}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
