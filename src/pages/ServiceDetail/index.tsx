import { useParams, Link } from "react-router-dom";
import { ServiceData } from "../../data/ServiceData";

const ServiceDetail = () => {
  const { title } = useParams();
  const service = ServiceData.find(
    (s) => s.title === decodeURIComponent(title || "")
  );

  if (!service)
    return (
      <div className="text-center py-32 text-gray-700 text-xl">
        Service not found
      </div>
    );

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-3xl w-full object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            <Link to="/contact">
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
