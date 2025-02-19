import { motion } from "framer-motion";
import aboutUs from "../images/aboutUs.avif";

const About = ({ fadeIn }: any) => {
  return (
    <section className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Section */}
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-blue-600">Us</span>
            </h2>
            <div className="mt-6 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At{" "}
                <span className="font-semibold text-gray-900">
                  Starlette Property Valuations
                </span>
                , we provide expert property valuation services tailored to meet
                the needs of homeowners, investors, businesses, and legal
                professionals.
              </p>
              <p>
                Whether you're buying, selling, refinancing, or need an
                independent valuation for legal or financial purposes, our
                experienced team ensures data-backed, market-driven property
                assessments that align with the latest industry standards.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutUs}
                alt="Modern office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
