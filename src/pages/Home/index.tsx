import Hero from '../../components/Hero';
// import Services from '../../components/ServiceCard';
import ChooseUs from '../../components/ChooseUs';

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
      {/* <Services fadeIn={fadeIn} stagger={stagger} /> */}
      <ChooseUs fadeIn={fadeIn} stagger={stagger} />
    </div>
  );
};

export default Home;
