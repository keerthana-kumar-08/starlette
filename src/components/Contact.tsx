import { ArrowRight, Loader2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface ContactUsProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number; ease: number[] };
  };
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = ({ fadeIn }: ContactUsProps) => {
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true });
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
      errors.email = 'Email is invalid';
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
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="md:py-32 py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-6">
              We're here to help! Whether you have questions, need assistance,
              or want to learn more about our products and services, feel free
              to reach out.
            </p>
            <p className="text-xl text-gray-300">
              We aim to respond to all emails within 24 hours.
            </p>
          </div>

          <div
            ref={formRef}
            className="bg-gray-800/30 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      formErrors.name ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500 transition-colors duration-200`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500 transition-colors duration-200`}
                    placeholder="Your email"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
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
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    formErrors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500 transition-colors duration-200`}
                  placeholder="Your message"
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
