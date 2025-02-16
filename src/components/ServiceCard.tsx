import { motion } from 'framer-motion';
import { ServiceData } from '../data/ServiceData';

const ServiceCard = ({ fadeIn, stagger } : any) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive valuation solutions tailored to meet your specific
            needs
          </p>
        </motion.div>
        <motion.div
          initial={stagger}
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ServiceData.map((service, index) => (
            <motion.div
              key={index}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
