import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

import residential from "../../images/service1.avif";
import commercial from "../../images/service2.avif";
import industrial from "../../images/service3.avif";
import marketAnalysis from "../../images/service4.avif";
import prePurchaseAndSale from "../../images/service5.avif";
import { valuationServices } from "../../data/ServicesData";

const serviceImages: Record<string, string> = {
  residential,
  commercial,
  industrial,
  marketAnalysis,
  prePurchaseAndSale,
};

const ContactButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1">
    {children}
  </button>
);

const ServiceDetail = () => {
  const { type } = useParams<{ type: string }>();
  const isValidType = type && type in valuationServices;
  const service = isValidType
    ? valuationServices[type as keyof typeof valuationServices]
    : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImages[type as keyof typeof serviceImages]}
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
            className="max-w-4xl"
          >
            <Link
              to="/"
              className="inline-flex items-center text-white mb-8 hover:text-blue-200 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="md:text-xl text-sm text-white max-w-2xl leading-relaxed">
              {service.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link to="/contact">
                <ContactButton>
                  Get Started <ArrowRight className="w-5 h-5" />
                </ContactButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Importance Section */}
          {"importance" in service && service.importance && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why It Matters
              </h2>
              <ul className="space-y-4">
                {service.importance.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <Check className="text-green-500 w-5 h-5 mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Process Section */}
          {"process" in service && service.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-600"
                  >
                    <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
