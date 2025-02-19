import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { ServiceData } from "../../data/ServiceData";

const ServiceDetail = () => {
  const { title } = useParams();
  const service = ServiceData.find(
    (s) => s.title === decodeURIComponent(title || "")
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link
            to="/services"
            className="text-yellow-600 hover:text-yellow-700"
          >
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2 " />
              <span>Back to Services</span>
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="md:text-xl text-gray-200 max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              About This Service
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Key Features
            </h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
