import { motion } from 'framer-motion';
import { Code, Layout, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Code size={24} />,
    title: 'Clean Code',
    description:
      'Write beautiful, maintainable, and scalable code with modern best practices.',
  },
  {
    icon: <Layout size={24} />,
    title: 'Responsive Design',
    description:
      'Create stunning layouts that work perfectly across all devices and screen sizes.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Fast Performance',
    description:
      'Optimize your applications for lightning-fast load times and smooth interactions.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure & Reliable',
    description:
      'Build secure applications with industry-standard security practices.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Features
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to build amazing projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white cursor-pointer p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotate: 1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
