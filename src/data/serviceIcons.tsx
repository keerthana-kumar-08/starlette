import {
  Building2,
  Home,
  Factory,
  BarChart3,
  FileSearch
} from "lucide-react";

export const serviceIcons = [
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    label: "Residential",
    type: "residential",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    label: "Commercial",
    type: "commercial",
  },
  {
    icon: <Factory className="w-8 h-8 text-blue-600" />,
    label: "Industrial",
    type: "industrial",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    label: "Market Analysis",
    type: "marketAnalysis",
  },
  {
    icon: <FileSearch className="w-8 h-8 text-blue-600" />,
    label: "Pre-Purchase",
    type: "prePurchaseAndSale",
  },
];
