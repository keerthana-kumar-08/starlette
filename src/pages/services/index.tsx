import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { valuationServices } from "../../data/ServicesData";
import { ServiceSection } from "../../components/ServiceSection";
import { MarketAnalysisSection } from "../../components/MarketAnalysisSection";
import { PrePurchaseSaleSection } from "../../components/PrePurchaseSaleSection";
import { serviceIcons } from "../../data/serviceIcons";
import background from "../../images/service6.avif";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    {children}
  </div>
);

const ContactButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
    {children}
  </button>
);

const Service = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-black/40 overflow-hidden">
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
              Expert Property
              <span className="block">Valuation Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed drop-shadow-md">
              Professional valuations for residential, commercial, and
              industrial properties.
              <span className="block mt-2">
                Trust our experts for accurate market assessments.
              </span>
            </p>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ContactButton>
                Contact Our Experts <ArrowRight className="w-5 h-5 ml-2" />
              </ContactButton>
            </Link>
          </div>
        </div>
      </header>

      {/* Service Icons */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {serviceIcons.map((item, index) => (
              <Link
                to={`/service/${item.type}`}
                key={index}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-center hover-scale"
              >
                <IconWrapper>{item.icon}</IconWrapper>
                <p className="mt-4 font-semibold text-gray-700">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <ServiceSection {...valuationServices.residential} />
      <ServiceSection {...valuationServices.commercial} />
      <ServiceSection {...valuationServices.industrial} />
      <MarketAnalysisSection {...valuationServices.marketAnalysis} />
      <PrePurchaseSaleSection {...valuationServices.prePurchaseAndSale} />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Get Your Property Valued?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Our team of expert valuers is ready to provide you with a
              professional assessment of your property
            </p>
            <ContactButton>
              <Phone className="w-5 h-5" /> Schedule a Consultation
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
