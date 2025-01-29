import { Contact } from "lucide-react";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home
