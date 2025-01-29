import Hero from '../../components/Hero';
import About from '../../components/About';
import Mission from '../../components/Mission';
import Services from '../../components/Services';
import Values from '../../components/Values';
import ChooseUs from '../../components/ChooseUs';
import Contact from '../../components/Contact';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      <About fadeIn={fadeIn} />
      <Mission fadeIn={fadeIn} stagger={stagger} />
      <Services fadeIn={fadeIn} stagger={stagger} />
      <Mission fadeIn={fadeIn} stagger={stagger} />
      <Values fadeIn={fadeIn} stagger={stagger} />
      <ChooseUs fadeIn={fadeIn} stagger={stagger} />
      <Contact fadeIn={fadeIn} stagger={stagger} />
    </div>
  );
};

export default Home;
