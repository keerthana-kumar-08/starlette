import React from "react";
import { ArrowRight } from "lucide-react";

interface ProcessItem {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  importance: string[];
  process: ProcessItem[];
  types: {
    title: string;
    description: string;
  }[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  importance,
  process,
  types,
}) => {
  return (
    <div className="pt-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-4xl leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm service-card">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Why is it Important?
            </h3>
            <div className="space-y-4">
              {importance.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <h4 className="font-semibold group-hover:text-blue-600 text-gray-800">
                      {item.split("-")[0].trim()}
                    </h4>
                  </div>
                  <p className="text-gray-600 pl-7">
                    {item.split("-")[1].trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm service-card border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Valuation Process
            </h3>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <h4 className="font-semibold group-hover:text-blue-600 text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 pl-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm service-card">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Types of Valuations
            </h3>
            <div className="space-y-6">
              {types.map((type, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </h4>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
