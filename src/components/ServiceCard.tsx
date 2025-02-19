import { motion } from "framer-motion";
import { ServiceData } from "../data/ServiceData";
import { Link } from "react-router-dom";

const ServiceCard = ({ fadeIn, stagger }: any) => {
  return (
    <section className="md:py-20 py-10">
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
            <Link
              key={index}
              to={`/service/${encodeURIComponent(service.title)}`}
              className="group block"
            >
              <motion.div
                initial={fadeIn.initial}
                whileInView={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gray-100 group-hover:bg-yellow-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
