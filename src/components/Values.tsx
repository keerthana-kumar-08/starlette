import { ValuesData } from '../data/ValuesData';
import { motion } from 'framer-motion';

const Values = ({ fadeIn, stagger }: any) => {
  return (
    <section className="md:py-32 py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our values define who we are and guide everything we do
          </p>
        </motion.div>
        <motion.div
          initial={stagger}
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ValuesData.map((value, index) => (
            <motion.div
              key={index}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-gray-100 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
