const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Starlette IT Solutions is established with a vision to impact and
          rapidly growing IT Services and Consulting company in India.
        </p>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            About Starlette Etiquette
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our IT solutions are built to benefit organizations of all sizes,
            from setting up online businesses to scaling up, optimizing costs,
            enhancing effectiveness, transforming processes, managing resources,
            increasing profitability, market penetration, branding, and
            marketing to expand market capitalization and visibility –
            ultimately resulting in improved growth and greater performance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In essence, we provide workable solutions suited to meet emerging IT
            requirements at competitive market prices.
          </p>
        </div>
      </section>

      {/* Mission, Vision, and Quality Policy */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most dependable preferred IT solutions provider and
              professional services for all corporate clientele globally.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To support and assist customers globally in achieving their core
              business models. Our mission is to connect people with
              opportunities in the business world. We are the new stepping stone
              for your organization, collaborating to design and implement
              solutions that make a difference.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quality Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              “Strive to provide cost-effective IT solutions to
              corporate/institutional clientele & achieve the highest degree of
              customer satisfaction through effective integration of people,
              process, technology & consulting services.”
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Quality',
                description:
                  'We work with the latest technological advancements to implement software solutions that work. Our systems and technology are designed to deliver the best quality services, no matter what.',
              },
              {
                title: 'Timeliness',
                description:
                  'There is nothing more important to us than keeping up with our commitments. This is why we deliver on our promises and meet deadlines for every project.',
              },
              {
                title: 'Communication',
                description:
                  'Complete transparency and scheduled communication are at the core of our business practices. We share weekly and monthly reports with detailed data to keep you up to speed with every detail.',
              },
              {
                title: 'Cost Effective',
                description:
                  'While amateur agencies would leave you hanging, our expert advice would help you remove redundancies in your business processes.',
              },
              {
                title: 'Revenue',
                description:
                  'With all bottlenecks removed, your business would grow faster than ever. An increase in leads, sales, and revenue is a natural by-product of these optimizations.',
              },
              {
                title: 'Professionalism',
                description:
                  'Starlette thrives on a professional approach that does not compromise with standards. Thanks to our professionalism, we have become one of the leading Zoho consulting partners in India.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cory Zamora',
                position: 'Marketing Specialist',
                image: 'path_to_image1.jpg',
              },
              {
                name: 'Coriss Ambady',
                position: 'Financial Analyst',
                image: 'path_to_image2.jpg',
              },
              {
                name: 'Nikolas Brooten',
                position: 'Sales Manager',
                image: 'path_to_image3.jpg',
              },
              {
                name: 'Jackie Sanders',
                position: 'Investment Planner',
                image: 'path_to_image4.jpg',
              },
              {
                name: 'Tina Geller',
                position: 'Assistant Buyer',
                image: 'path_to_image5.jpg',
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg mb-6">
          Be a part of our story and help us make a difference. Together, we can
          achieve greatness.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUsPage;
