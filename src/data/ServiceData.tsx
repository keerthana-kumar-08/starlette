import {
  Building,
  Building2,
  BarChart,
  LineChart,
  Scale,
  FileText,
} from "lucide-react";
import serviceImg1 from "../images/service1.avif";
import serviceImg2 from "../images/service2.avif";
import serviceImg3 from "../images/service3.avif";
import serviceImg4 from "../images/service4.avif";
import serviceImg5 from "../images/service5.avif";
import serviceImg6 from "../images/service6.avif";

export const ServiceData = [
  {
    icon: Building2,
    title: "Residential Property Valuations",
    description:
      "Whether you're buying, selling, or refinancing a home, we offer detailed property appraisals to help you understand its market value.",
    image: serviceImg1,
  },
  {
    icon: Building,
    title: "Commercial Property Valuations",
    description:
      "We provide accurate valuations for offices, retail spaces, and other commercial properties, assisting investors, landlords, and developers in making informed decisions.",
    image: serviceImg2,
  },
  {
    icon: BarChart,
    title: "Industrial Property Valuations",
    description:
      "Our experts assess industrial properties, including factories, warehouses, and land, providing reliable insights into their market worth.",
    image: serviceImg3,
  },
  {
    icon: LineChart,
    title: "Market Analysis & Reporting",
    description:
      "We offer in-depth market research and reporting to help clients understand current property trends, pricing, and investment opportunities.",
    image: serviceImg4,
  },
  {
    icon: Scale,
    title: "Property Tax Assessment & Dispute Resolution",
    description:
      "We assist property owners and investors in evaluating tax assessments and resolving disputes, ensuring fair and accurate valuation for tax purposes.",
    image: serviceImg5,
  },
  {
    icon: FileText,
    title: "Pre-Purchase and Pre-Sale Valuations",
    description:
      "Whether you're buying or selling, our pre-purchase and pre-sale valuation services provide a clear understanding of a property's worth before making a commitment.",
    image: serviceImg6,
  },
];
