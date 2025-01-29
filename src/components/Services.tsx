import { motion } from 'framer-motion';
import { Laptop, Smartphone, PenTool, Globe } from 'lucide-react';

const services = [
  {
    icon: <Laptop size={24} />,
    title: 'Web Development',
    description:
      'Create modern and responsive websites using the latest technologies.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications.',
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Design',
    description:
      'Design beautiful and intuitive user interfaces and experiences.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Digital Marketing',
    description:
      'Grow your online presence with effective digital marketing strategies.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Services
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive solutions for your digital needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white cursor-pointer p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4 transition-transform transform hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
