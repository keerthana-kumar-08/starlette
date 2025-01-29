import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ fadeIn }: any) => {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Have questions? We're here to help you make informed decisions about
            your property valuation needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-3xl"
            >
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </motion.div>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-3xl"
            >
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300">info@starlettevaluation.com</p>
            </motion.div>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-3xl"
            >
              <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300">
                No. D, 1st Floor,
                <br /> SVP Complex, <br /> VKK Memon Road, <br />
                Siddhupudur,
                <br />
                Coimbatore 640044
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
