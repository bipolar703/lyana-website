
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-lyana-navy">
            <span className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-lyana-navy' : 'text-white'}`}>
              LYANA
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/dubai" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}
          >
            Dubai Visas
          </Link>
          <Link 
            to="/greece" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}
          >
            Greece Visas
          </Link>
          <Link 
            to="/about" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}
          >
            Contact
          </Link>
          <Button
            className={`transition-colors ${isScrolled ? 'bg-lyana-blue text-white' : 'bg-white text-lyana-navy hover:bg-lyana-gold hover:text-white'}`}
          >
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-lyana-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-lyana-navy' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-lyana-navy py-2 hover:text-lyana-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dubai" 
              className="text-lyana-navy py-2 hover:text-lyana-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dubai Visas
            </Link>
            <Link 
              to="/greece" 
              className="text-lyana-navy py-2 hover:text-lyana-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Greece Visas
            </Link>
            <Link 
              to="/about" 
              className="text-lyana-navy py-2 hover:text-lyana-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-lyana-navy py-2 hover:text-lyana-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-lyana-blue text-white w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
