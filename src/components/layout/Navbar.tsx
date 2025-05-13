import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLoading } from '@/contexts/LoadingContext';
import { getCurrentLanguage, loadTranslations, setCurrentLanguage } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * Navbar component
 * Provides navigation for the website, including dropdown menus for services
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const params = useParams<{ lang?: 'en' | 'ar', '*': string }>();
  const locationHook = useLocation();

  const currentLang = params.lang || getCurrentLanguage();
  const currentPathWithoutLang = params['*'] ? `/${params['*']}` : '/';
  const { setIsLoading, setLoadingType } = useLoading();

  const [t, setT] = useState<any>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [locationHook.pathname]);

  useEffect(() => {
    loadTranslations(currentLang).then(trans => {
      setT(trans);
    });
  }, [currentLang]);

  const handleLangChange = (newLang: 'en' | 'ar') => {
    if (newLang !== currentLang) {
      // Set loading state
      setIsLoading(true);
      setLoadingType('language');

      // Update language in localStorage and document
      setCurrentLanguage(newLang);

      // Navigate to the new URL with the new language
      // Use replace: true to ensure the history stack doesn't grow unnecessarily
      navigate(`/${newLang}${currentPathWithoutLang}`, { replace: true });

      // The actual page refresh will be handled by LanguageHandler component
      // This ensures all components properly re-render with the new language

      // Scroll to top immediately to improve user experience
      window.scrollTo(0, 0);
    }
  };

  const isActiveRoute = (path: string) => {
    return currentPathWithoutLang === path || (currentPathWithoutLang === '' && path === '/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to={`/${currentLang}/`} className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-lyana-navy">
            <span className={`transition-colors duration-300 ${isScrolled || isOpen ? 'text-lyana-navy' : 'text-white'}`}>
              LYANA
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${currentLang === 'ar' ? 'space-x-reverse' : ''} space-x-6`}>
          <Link
            to={`/${currentLang}/`}
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/') ? 'after:scale-x-100' : ''}`}
          >
            {t.navbar?.home || 'Home'}
          </Link>

          {/* Services Navigation Menu */}
          <div className="relative inline-flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`hover-underline bg-transparent ${isScrolled ? 'text-lyana-navy' : 'text-white'} px-0 h-auto font-normal text-base`}>
                    {t.navbar?.services || 'Services'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] grid-cols-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to={`/${currentLang}/dubai`} className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                            <h3 className="font-medium text-lyana-navy">{t.navbar?.dubaiVisas || 'Dubai Visas'}</h3>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to={`/${currentLang}/greece`} className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                            <h3 className="font-medium text-lyana-navy">{t.navbar?.greeceVisas || 'Greece & Europe Visas'}</h3>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to={`/${currentLang}/flights`} className="block p-3 space-y-1 rounded-md hover:bg-gray-50">
                            <h3 className="font-medium text-lyana-navy">{t.navbar?.flightBookings || 'Flight Bookings'}</h3>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Link
            to={`/${currentLang}/about`}
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/about') ? 'after:scale-x-100' : ''}`}
          >
            {t.navbar?.about || 'About'}
          </Link>
          <Link
            to={`/${currentLang}/contact`}
            className={`hover-underline ${isScrolled ? 'text-lyana-navy' : 'text-white'} ${isActiveRoute('/contact') ? 'after:scale-x-100' : ''}`}
          >
            {t.navbar?.contact || 'Contact'}
          </Link>
          <Button
            asChild
            className={`transition-all duration-300 ${isScrolled ? 'bg-lyana-blue text-white' : 'bg-white text-lyana-navy hover:bg-lyana-gold hover:text-white'}`}
          >
            <Link to={`/${currentLang}/contact`}>
              {t.navbar?.planTrip || 'Plan Your Trip'}
            </Link>
          </Button>
          <Select value={currentLang} onValueChange={(value) => handleLangChange(value as 'en' | 'ar')}>
            <SelectTrigger className="w-28 ml-2">
              <SelectValue>{currentLang === 'ar' ? 'العربية' : 'English'}</SelectValue>
            </SelectTrigger>
            <SelectContent align="end" className="min-w-[8rem]">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
            </SelectContent>
          </Select>
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
          <div className={`container mx-auto px-4 py-4 flex flex-col space-y-4 ${currentLang === 'ar' ? 'font-arabic text-right' : ''}`}>
            <Link
              to={`/${currentLang}/`}
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {t.navbar?.home || 'Home'}
            </Link>

            {/* Mobile Services Submenu */}
            <div className={`${currentLang === 'ar' ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} border-gray-100`}>
              <p className="text-lyana-navy font-bold py-2">{t.navbar?.services || 'Services'}</p>
              <Link
                to={`/${currentLang}/dubai`}
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/dubai') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t.navbar?.dubaiVisas || 'Dubai Visas'}
              </Link>
              <Link
                to={`/${currentLang}/greece`}
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/greece') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t.navbar?.greeceVisas || 'Greece & Europe Visas'}
              </Link>
              <Link
                to={`/${currentLang}/flights`}
                className={`text-lyana-navy py-2 block hover:text-lyana-blue transition-colors ${isActiveRoute('/flights') ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t.navbar?.flightBookings || 'Flight Bookings'}
              </Link>
            </div>

            <Link
              to={`/${currentLang}/about`}
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/about') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {t.navbar?.about || 'About'}
            </Link>
            <Link
              to={`/${currentLang}/contact`}
              className={`text-lyana-navy py-2 hover:text-lyana-blue transition-colors ${isActiveRoute('/contact') ? 'font-bold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {t.navbar?.contact || 'Contact'}
            </Link>
            <Button asChild className="bg-lyana-blue text-white w-full">
              <Link to={`/${currentLang}/contact`}>
                {t.navbar?.planTrip || 'Plan Your Trip'}
              </Link>
            </Button>
          </div>
          <div className={`flex ${currentLang === 'ar' ? 'justify-start' : 'justify-end'} mt-4 px-4 pb-4`}>
            <Select value={currentLang} onValueChange={(value) => handleLangChange(value as 'en' | 'ar')}>
              <SelectTrigger className="w-28">
                <SelectValue>{currentLang === 'ar' ? 'العربية' : 'English'}</SelectValue>
              </SelectTrigger>
              <SelectContent align={currentLang === 'ar' ? 'start' : 'end'} className="min-w-[8rem]">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      {/* Loading is now handled by the LoadingOverlay component */}
    </header>
  );
};

export default Navbar;
