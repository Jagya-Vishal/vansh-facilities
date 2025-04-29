
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vansh Facility Services</h3>
            <p className="text-gray-300 mb-4">
              Your Trusted Partner in Professional Facility Management since 2009.
            </p>
            <p className="text-gray-300">GST No: 07AMNPR8025M1ZC</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">Facility Management</li>
              <li className="text-gray-300 hover:text-white transition-colors">Housekeeping Services</li>
              <li className="text-gray-300 hover:text-white transition-colors">Industrial Cleaning</li>
              <li className="text-gray-300 hover:text-white transition-colors">Corporate Office Maintenance</li>
              <li className="text-gray-300 hover:text-white transition-colors">Hospital Cleaning Services</li>
              <li className="text-gray-300 hover:text-white transition-colors">Mall and Complex Cleaning</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 mb-4">
              P-83, Vijay Vihar, Uttam Nagar,<br /> 
              Delhi 110059
            </address>
            <p className="text-gray-300 mb-2">
              <a href="mailto:vanshfacility@gmail.com" className="hover:text-white">
                vanshfacility@gmail.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 Vansh Facility Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
