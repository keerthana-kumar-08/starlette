import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ArrowRight,
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      Icon: Phone,
      title: 'Call Us',
      text: '+1 (555) 123-4567',
      subtext: 'Mon-Fri from 8am to 5pm',
      delay: 0.2,
    },
    {
      Icon: Mail,
      title: 'Email Us',
      text: 'info@starlettevaluation.com',
      subtext: 'We reply within 24 hours',
      delay: 0.3,
    },
    {
      Icon: MapPin,
      title: 'Visit Us',
      text: 'New York, NY',
      subtext: 'Find us on Google Maps',
      delay: 0.4,
    },
  ];

  return (
    <section
      className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <MessageSquare className="w-16 h-16 text-yellow-400" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Have questions about our valuation services? We're here to help
              you make informed decisions about your property investments.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
                className="group bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/50 cursor-pointer transition-all duration-300"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-yellow-400/10 w-16 h-16 rounded-2xl flex items-center justify-center"
                  >
                    <item.Icon className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: item.delay + 0.3 }}
                    className="absolute -top-2 -right-2 bg-yellow-400 w-6 h-6 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-2">{item.text}</p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-gray-800/30 backdrop-blur-lg p-8 lg:p-12 rounded-3xl border border-gray-700/50"
          >
            {/* Form Section */}
            <div className="lg:col-span-3">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl font-bold mb-6"
              >
                Send us a Message
              </motion.h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                    placeholder="Your message"
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02, gap: '1rem' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>

            {/* Information Section */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="text-2xl font-bold mb-6"
                >
                  Additional Information
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="prose prose-invert"
                >
                  <p className="text-gray-300">
                    Our team of expert valuators is ready to assist you with any
                    inquiries about property valuation, market analysis, or
                    consultation services.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 p-6 bg-yellow-400/10 rounded-2xl border border-yellow-400/20"
              >
                <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
