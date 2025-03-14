import { motion } from "framer-motion";
import {
  Building2,
  Building,
  BarChart,
  LineChart,
  Scale,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Property Valuations",
    description:
      "Whether you're buying, selling, or refinancing a home, we offer detailed property appraisals to help you understand its market value.",
    icon: Building2,
    type: "residential",
  },
  {
    title: "Commercial Property Valuations",
    description:
      "We provide accurate valuations for offices, retail spaces, and other commercial properties, assisting investors, landlords, and developers in making informed decisions.",
    icon: Building,
    type: "commercial",
  },
  {
    title: "Industrial Property Valuations",
    description:
      "Our experts assess industrial properties, including factories, warehouses, and land, providing valuable insights into their market worth.",
    icon: BarChart,
    type: "industrial",
  },
  {
    title: "Market Analysis & Reporting",
    description:
      "We offer in-depth market research and reporting to help clients understand current property trends, prices, and investment opportunities.",
    icon: LineChart,
    type: "marketAnalysis",
  },
  {
    title: "Property Tax Assessment",
    description:
      "We assist property owners and investors in evaluating tax assessments and resolving disputes, ensuring fair and accurate valuation for tax purposes.",
    icon: Scale,
    type: "",
  },
  {
    title: "Pre-Purchase and Pre-Sale Valuations",
    description:
      "Whether you're buying or selling, our pre-purchase and pre-sale valuation services provide a clear understanding of a property's worth before making a commitment.",
    icon: FileText,
    type: "prePurchaseAndSale",
  },
];

const Services = ({ fadeIn }: any) => {
  return (
    <section className="py-20 px-16 bg-gray-50">
      <motion.div
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        transition={fadeIn.transition}
        viewport={{ once: true }}
      >
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="sm:text-5xl text-[#151B54] text-3xl font-bold mb-6">
            Our Service
          </h2>
          <p className="text-gray-600 text-lg">
            We combine expertise, technology, and dedication to deliver
            exceptional valuation services
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {service.type !== "" ? (
                <Link
                  to={`/service/${service.type}`}
                  key={index}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <service.icon className="w-12 h-12 hover:text-white bg-gray-200 hover:bg-yellow-500 rounded-md p-2 mb-6 cursor-pointer" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ) : (
                <>
                  <service.icon className="w-12 h-12 hover:text-white bg-gray-200 hover:bg-yellow-500 rounded-md p-2 mb-6 cursor-pointer" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
