import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import residential from "../../images/service1.avif";
import commercial from "../../images/service2.avif";
import industrial from "../../images/service3.avif";
import marketAnalysis from "../../images/service4.avif";
import prePurchaseAndSale from "../../images/service5.avif";
import { valuationServices } from "../../data/ServicesData";
import { MarketAnalysisSection } from "../../components/MarketAnalysisSection";
import { PrePurchaseSaleSection } from "../../components/PrePurchaseSaleSection";
import { ServiceSection } from "../../components/ServiceSection";

const serviceImages: Record<string, string> = {
  residential,
  commercial,
  industrial,
  marketAnalysis,
  prePurchaseAndSale,
};

const ContactButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#151B54] text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1">
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

  const renderContent = () => {
    if (type === "marketAnalysis")
      return <MarketAnalysisSection {...valuationServices.marketAnalysis} />;

    if (type === "prePurchaseAndSale")
      return (
        <PrePurchaseSaleSection {...valuationServices.prePurchaseAndSale} />
      );

    if (type === "residential")
      return <ServiceSection {...valuationServices.residential} />;

    if (type === "industrial")
      return <ServiceSection {...valuationServices.industrial} />;

    return <ServiceSection {...valuationServices.commercial} />;
  };

  const renderCallToAction = () => {
    if (type === "marketAnalysis")
      return (
        <p className="mb-14 text-center text-xl text-gray-600">
          If you need a detailed
          <span className="font-bold text-[#151B54] ms-1">
            market report and professional property valuation,
          </span>
          <Link
            className="font-bold text-[#151B54] mx-1"
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            contact us
          </Link>
          for expert insights and accurate assessments.
        </p>
      );

    if (type === "prePurchaseAndSale")
      return (
        <p className="mb-14 text-center text-xl text-gray-600">
          Whether you're{" "}
          <span className="font-bold text-[#151B54] ms-1">
            buying or selling
          </span>
          , a professional valuation ensures you get the{" "}
          <span className="font-bold text-[#151B54] ms-1">
            best deal possible.
          </span>
          <Link
            className="font-bold text-[#151B54] mx-1"
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contact us
          </Link>
          today for an expert property assessment.
        </p>
      );

    return (
      <p className="mb-14 text-center text-xl text-gray-600">
        If you need a trusted, professional valuation for your{" "}
        <span className="font-bold text-[#151B54] ms-1">
          <span className="mx-1">{type}</span>
          property
        </span>
        ,
        <Link
          className="font-bold text-[#151B54] mx-1"
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          contact us
        </Link>
        today to get started!
      </p>
    );
  };

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
            {/* <p className="md:text-xl text-sm text-white max-w-2xl leading-relaxed">
              {service.description}
            </p> */}
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
      {renderContent()}
      {renderCallToAction()}
    </div>
  );
};

export default ServiceDetail;
