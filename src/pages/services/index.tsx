import React from "react";
import {
  Building2,
  Home,
  Factory,
  BarChart3,
  FileSearch,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import { ServiceSection } from "../../components/ServiceSection";
import { MarketAnalysisSection } from "../../components/MarketAnalysisSection";
import { PrePurchaseSaleSection } from "../../components/PrePurchaseSaleSection";
import { valuationServices } from "../../data/ServicesData";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    {children}
  </div>
);

const ContactButton = ({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) => (
  <button
    className={`${
      primary
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-white text-blue-600 hover:bg-blue-50"
    } px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg`}
  >
    {children}
  </button>
);

function Service() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')] opacity-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Expert Property
              <span className="block">Valuation Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Professional valuations for residential, commercial, and
              industrial properties.
              <span className="block mt-2">
                Trust our experts for accurate market assessments.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton primary>
                Contact Our Experts <ArrowRight className="w-5 h-5" />
              </ContactButton>
              <ContactButton>
                Learn More <ArrowRight className="w-5 h-5" />
              </ContactButton>
            </div>
          </div>
        </div>
      </header>

      {/* Service Icons */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8 text-blue-600" />,
                label: "Residential",
              },
              {
                icon: <Building2 className="w-8 h-8 text-blue-600" />,
                label: "Commercial",
              },
              {
                icon: <Factory className="w-8 h-8 text-blue-600" />,
                label: "Industrial",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                label: "Market Analysis",
              },
              {
                icon: <FileSearch className="w-8 h-8 text-blue-600" />,
                label: "Pre-Purchase",
              },
            ].map((item, index) => (
              <div key={index} className="text-center hover-scale">
                <IconWrapper>{item.icon}</IconWrapper>
                <p className="mt-4 font-semibold text-gray-700">{item.label}</p>
              </div>
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    123 Valuation Street
                    <br />
                    Business District
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    contact@propertyvaluation.com
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-blue-400 transition-colors">
                  Residential Valuations
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  Commercial Valuations
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  Industrial Valuations
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  Market Analysis
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  Pre-Purchase/Sale Valuations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest property valuation insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © 2025 Professional Property Valuation Services. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Service;
