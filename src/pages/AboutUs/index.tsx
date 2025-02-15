import About from '../../components/About';
import Mission from '../../components/Mission';
import Values from '../../components/Values';

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

const AboutUsPage = () => {
  return (
    <>
      <About fadeIn={fadeIn} />
      <Mission fadeIn={fadeIn} stagger={stagger} />
      <Values fadeIn={fadeIn} stagger={stagger} />
    </>
  );
};

export default AboutUsPage;
