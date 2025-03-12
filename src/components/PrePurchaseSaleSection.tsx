import React from "react";
import { TrendingUp, Scale, ArrowRight } from "lucide-react";

interface ProcessItem {
  title: string;
  description: string;
}

interface PrePurchaseSaleProps {
  title: string;
  description: string;
  prePurchase: {
    title: string;
    description: string;
    benefits: string[];
  };
  preSale: {
    title: string;
    description: string;
    benefits: string[];
  };
  process: ProcessItem[];
  benefits: string[];
}

export const PrePurchaseSaleSection: React.FC<PrePurchaseSaleProps> = ({
  title,
  description,
  prePurchase,
  preSale,
  process,
  benefits,
}) => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-4xl leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm service-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {prePurchase.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {prePurchase.description}
            </p>
            <div className="space-y-4">
              {prePurchase.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm service-card border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {preSale.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {preSale.description}
            </p>
            <div className="space-y-4">
              {preSale.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm service-card border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Valuation Process
            </h3>
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 rounded group-hover:bg-blue-200 transition-colors"></div>
                  <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[2px]"></div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm service-card">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Why Choose Professional Valuation?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
