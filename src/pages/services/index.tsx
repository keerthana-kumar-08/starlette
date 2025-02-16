import ServiceCard from '../../components/ServiceCard';

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

const Services = () => {
  return (
    <>
      <ServiceCard fadeIn={fadeIn} stagger={stagger} />
    </>
  );
};

export default Services;
