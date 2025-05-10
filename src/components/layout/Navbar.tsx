
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/**
 * Navbar component
 * Provides navigation for the website, including dropdown menus for services
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

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
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/') ? 'after:scale-x-100' : ''}`}
          >
            Home
          </Link>

          {/* Services Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`hover-underline bg-transparent ${isScrolled ? 'text-lyana-navy' : 'text-white'}`}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/dubai" className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                          <h3 className="font-medium text-lyana-navy">Dubai Visas</h3>
                          <p className="text-sm text-gray-600">Tourist and business visa services for Dubai</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/greece" className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                          <h3 className="font-medium text-lyana-navy">Greece & Europe Visas</h3>
                          <p className="text-sm text-gray-600">Schengen and European travel documentation</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/flights" className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                          <h3 className="font-medium text-lyana-navy">Flight Bookings</h3>
                          <p className="text-sm text-gray-600">International flight tickets and packages</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link 
            to="/about" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/about') ? 'after:scale-x-100' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/contact') ? 'after:scale-x-100' : ''}`}
          >
            Contact
          </Link>
          <Button
            asChild
            className={`transition-all duration-300 ${isScrolled ? 'bg-lyana-blue text-white' : 'bg-white text-lyana-navy hover:bg-lyana-gold hover:text-white'}`}
          >
            <Link to="/contact">
              Plan Your Trip
            </Link>
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
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Submenu */}
            <div className="pl-4 border-l-2 border-gray-100">
              <p className="text-lyana-navy font-bold py-2">Services</p>
              <Link 
                to="/dubai" 
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/dubai') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Dubai Visas
              </Link>
              <Link 
                to="/greece" 
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/greece') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Greece & Europe Visas
              </Link>
              <Link 
                to="/flights" 
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/flights') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Flight Bookings
              </Link>
            </div>
            
            <Link 
              to="/about" 
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/about') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/contact') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-lyana-blue text-white w-full">
              <Link to="/contact">
                Plan Your Trip
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
