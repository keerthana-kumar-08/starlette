import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              Starlette
            </h3>
            <p className="text-gray-400 mb-6">
              Creating amazing digital experiences with modern technologies and
              best practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <h5 className="text-md font-medium text-white">Trichy</h5>
                <p>
                  No.21, Ground Floor, Sri Sahaas Nivas, B Block, Senbagam
                  Apartment, Opposite National College, Trichy - 1
                </p>
              </div>
              <div>
                <h5 className="text-md font-medium text-white">Chennai</h5>
                <p>
                  Workenstein Collaborativespaces Pvt Ltd, Level 7, IIFL Towers,
                  143, MGR Main Rd, Kandancavadi, Perungudi, Chennai, Tamil Nadu
                  600096.
                </p>
              </div>
              <p>info@Starletteetiq.com</p>
              <p className="mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Starlette. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
