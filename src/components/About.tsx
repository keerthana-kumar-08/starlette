import { motion } from "framer-motion";
import aboutUs from "../images/aboutUs.avif";

const About = ({ fadeIn }: any) => {
  return (
    <section className="md:py-20 py-10 relative bg-gray-50">
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
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              About Us
            </h2>
            <div className="mt-6 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At{" "}
                <span className="font-semibold text-gray-900">Starlette</span>,
                we specialize in delivering comprehensive, accurate, and timely
                property assessments. Our commitment to quality, transparency,
                and customer satisfaction has earned us the trust of homeowners,
                real estate investors, developers, financial institutions, and
                businesses alike.
              </p>
              <p>
                Founded in 2023, Starlette has built a reputation for
                excellence, leveraging deep industry knowledge and cutting-edge
                technology to deliver valuations that are reliable and
                insightful. Our experienced team of certified appraisers and
                valuation experts works diligently to ensure that each
                assessment reflects the true market value of a property. We are
                dedicated to providing our clients with the information they
                need to make informed choices.
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
