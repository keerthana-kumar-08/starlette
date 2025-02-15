import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquare, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      className='py-20 bg-white text-blue-800'
      ref={ref}>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-20'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent'>
              Let's Start a Conversation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Have questions about our valuation services? We're here to help
              you make informed decisions about your property investments.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
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
                className='group bg-white/50 shadow-lg p-8 rounded-3xl border border-gray-200/50 cursor-pointer transition-all duration-300'>
                <div className='relative mb-6'>
                  <motion.div
                    transition={{ duration: 0.6 }}
                    className='bg-yellow-200/10 w-16 h-16 rounded-2xl flex items-center justify-center'>
                    <item.Icon className='w-8 h-8 text-yellow-500' />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: item.delay + 0.3 }}
                    className='absolute -top-2 -right-2 bg-yellow-500 w-6 h-6 rounded-full'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-2 text-blue-800'>
                  {item.title}
                </h3>
                <p className='text-blue-700 mb-2'>{item.text}</p>
                <p className='text-sm text-gray-500 flex items-center gap-2'>
                  <Clock className='w-4 h-4' />
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
            className='grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white/90 shadow-lg p-8 lg:p-12 rounded-3xl border border-gray-200/50'>
            {/* Form Section */}
            <div className='lg:col-span-3'>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className='text-2xl font-bold mb-6 text-blue-800'>
                Send us a Message
              </motion.h3>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 }}>
                    <label className='block text-sm font-medium text-blue-700 mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-800 placeholder-gray-500 transition-all duration-200`}
                      placeholder='Your name'
                    />
                    {formErrors.name && (
                      <p className='mt-1 text-sm text-red-500'>
                        {formErrors.name}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 }}>
                    <label className='block text-sm font-medium text-blue-700 mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-800 placeholder-gray-500 transition-all duration-200`}
                      placeholder='Your email'
                    />
                    {formErrors.email && (
                      <p className='mt-1 text-sm text-red-500'>
                        {formErrors.email}
                      </p>
                    )}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.9 }}>
                  <label className='block text-sm font-medium text-blue-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-800 placeholder-gray-500 transition-all duration-200`}
                    placeholder='Your message'
                  />
                  {formErrors.message && (
                    <p className='mt-1 text-sm text-red-500'>
                      {formErrors.message}
                    </p>
                  )}
                </motion.div>
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, gap: '1rem' }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-blue-600 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed'>
                  {isSubmitting ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Information Section */}
            <div className='lg:col-span-2 flex flex-col justify-between'>
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className='text-2xl font-bold mb-6 text-blue-800'>
                  Additional Information
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className='prose prose-invert'>
                  <p className='text-blue-700'>
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
                className='mt-8 p-6 bg-yellow-200/10 rounded-2xl border border-yellow-200/20'>
                <h4 className='text-lg font-semibold mb-2 text-blue-800'>
                  Business Hours
                </h4>
                <ul className='space-y-2 text-blue-700'>
                  <li className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className='flex justify-between'>
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
