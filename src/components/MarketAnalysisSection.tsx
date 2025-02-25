import React from "react";
import { Check, BarChart } from "lucide-react";

interface ComponentItem {
  title: string;
  items: string[];
}

interface MarketAnalysisSectionProps {
  title: string;
  description: string;
  components: ComponentItem[];
  reportIncludes: string[];
  importance: string[];
}

export const MarketAnalysisSection: React.FC<MarketAnalysisSectionProps> = ({
  title,
  description,
  components,
  reportIncludes,
  importance,
}) => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-4xl leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Key Components
            </h3>
            <div className="space-y-8">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm service-card"
                >
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">
                    {component.title}
                  </h4>
                  <ul className="space-y-4">
                    {component.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm service-card">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                What's Included in the Report
              </h3>
              <div className="space-y-4">
                {reportIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <BarChart className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm service-card">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                Why is Market Analysis Important?
              </h3>
              <div className="space-y-4">
                {importance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
