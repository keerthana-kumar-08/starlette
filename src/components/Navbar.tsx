import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full">
      <nav className="xl:mx-[10%] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Starlette</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-800 hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
