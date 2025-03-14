import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import background from "../../images/service6.avif";
import Services from "../../components/Services";

const ContactButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#151B54] text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
    {children}
  </button>
);

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

      <Services fadeIn={fadeIn} stagger={stagger} />
    </div>
  );
};

export default Service;
