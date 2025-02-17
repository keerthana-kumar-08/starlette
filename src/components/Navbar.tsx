import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from '../data/navLinks';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.3 } },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { type: 'tween', duration: 0.3 },
    },
  };

  const handleOnClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = "8508397737";
    const message = "Hello! I would like more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full">
      <nav className="xl:mx-[10%] mx-auto px-6 py-8 flex justify-between items-center">
        <Link to="/" className="h-8 w-8">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg text-gray-800 hover:${link.hoverBg} hover:${link.hoverText} transition-colors duration-200`}
                onClick={handleOnClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          className="md:hidden p-2 text-gray-800 focus:outline-none transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.8, rotate: 180 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg fixed top-16 left-0 w-full h-[calc(100vh-4rem)] p-6 rounded-b-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-lg font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      handleOnClick();
                    }}
                  >
                    <span className="text-blue-600">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Icon Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-800 p-3 rounded-full shadow-xl hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in-out"
        onClick={openWhatsApp}
      >
        <MessageCircle size={32} className="text-white" />
      </button>
    </header>
  );
};

export default Navbar;
