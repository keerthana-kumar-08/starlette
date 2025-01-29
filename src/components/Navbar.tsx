import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container xl:max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Starlette</div>
        <ul className="flex space-x-8">
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
      </nav>
    </header>
  );
};

export default Navbar;
