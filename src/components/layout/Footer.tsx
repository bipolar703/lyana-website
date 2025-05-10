
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

/**
 * Footer component
 * Displays site footer with navigation, contact information, and social links
 */
const Footer = () => {
  return (
    <footer className="bg-lyana-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">LYANA</h3>
            <p className="text-gray-300 mb-6">
              Your global travel partner for visa services and flight bookings. We specialize in streamlined travel solutions with expert guidance every step of the way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-lyana-gold transition-colors p-2 bg-lyana-navy/40 rounded-full" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-lyana-gold transition-colors p-2 bg-lyana-navy/40 rounded-full" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-lyana-gold transition-colors p-2 bg-lyana-navy/40 rounded-full" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lyana-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/dubai" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Dubai Visas
                </Link>
              </li>
              <li>
                <Link to="/greece" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Greece & Europe Visas
                </Link>
              </li>
              <li>
                <Link to="/flights" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Flight Bookings
                </Link>
              </li>
              <li>
                <Link to="/dubai" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  UAE Business Visas
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Popular Destinations
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lyana-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/dubai" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link to="/greece" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Greece
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  France
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Switzerland
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lyana-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-lyana-gold shrink-0 mt-1" />
                <span className="text-gray-300">123 Business Avenue, Suite 500<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-lyana-gold shrink-0" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-lyana-gold shrink-0" />
                <span className="text-gray-300">info@lyana-travel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lyana Travel Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-lyana-gold transition-colors">
                Terms & Conditions
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-lyana-gold transition-colors">
                Privacy Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-lyana-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
