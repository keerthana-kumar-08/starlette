import { motion } from 'framer-motion';

const About = ({ fadeIn }: any) => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={fadeIn.transition}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-5xl font-bold mb-8 text-gray-900">About Us</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                At Starlette, we specialize in delivering comprehensive,
                accurate, and timely property assessments. Our commitment to
                quality, transparency, and customer satisfaction has earned us
                the trust of homeowners, real estate investors, developers,
                financial institutions, and businesses alike. Founded in 2023,
                Starlette has built a reputation for excellence, leveraging deep
                industry knowledge and cutting-edge technology to deliverAt
                Starlette, we specialize in delivering comprehensive, accurate,
                and timely property assessments. Our commitment to quality,
                transparency, and customer satisfaction has earned us the trust
                of homeowners, real estate investors, developers, financial
                institutions, and businesses alike.
              </p>
              <p className="text-lg">
                Founded in 2023, Starlette has built a reputation for
                excellence, leveraging deep industry knowledge and cutting-edge
                technology to deliver valuations that are reliable and
                insightful. Our experienced team of certified appraisers and
                valuation experts works diligently to ensure that each
                assessment reflects the true market value of a property. We are
                dedicated to providing our clients with the information they
                need to make informed choices. valuations that are reliable and
                insightful. Our experienced team of certified appraisers and
                valuation experts works diligently to ensure that each
                assessment reflects the true market value of a property. We are
                dedicated to providing our clients with the information they
                need to make informed choices.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Modern office"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-yellow-400 rounded-2xl p-4 sm:p-8 shadow-xl">
              <p className="text-4xl font-bold">2+</p>
              <p className="text-gray-800">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
