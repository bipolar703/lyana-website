import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component
 * Displays site footer with navigation, contact information, and social links
 */
const Footer = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({});

  useEffect(() => {
    loadTranslations(lang).then(setT);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <footer className={`bg-lyana-navy text-white pt-16 pb-8${lang === 'ar' ? ' font-arabic' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">LYANA</h3>
            <p className="text-gray-300 mb-6">
              {t.footer?.footerDesc || 'Your global travel partner...'}
            </p>
            <div className={`flex ${lang === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
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
              {t.footer?.services || 'Services'}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-lyana-gold`}></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to={`/${lang}/dubai`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.dubaiLink || 'Dubai Visas'}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/greece`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.greeceLink || 'Greece & Europe Visas'}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/flights`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.flightsLink || 'Flight Bookings'}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/dubai`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.uaeBusinessLink || 'UAE Business Visas'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              {t.footer?.popularDestinations || 'Popular Destinations'}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-lyana-gold`}></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to={`/${lang}/dubai`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.destDubai || 'Dubai, UAE'}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/greece`} className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.destGreece || 'Greece'}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.destFrance || 'France'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lyana-gold transition-colors flex items-center">
                  <span className={lang === 'ar' ? 'ml-2' : 'mr-2'}>{lang === 'ar' ? '←' : '→'}</span>
                  {t.footer?.destSwitzerland || 'Switzerland'}
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              {t.footer?.contactUs || 'Contact Us'}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-lyana-gold`}></span>
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                <MapPin className={`w-5 h-5 ${lang === 'ar' ? 'ml-3' : 'mr-3'} text-lyana-gold shrink-0 mt-1`} />
                <span className="text-gray-300" dir="auto" dangerouslySetInnerHTML={{ __html: t.footer?.addressDubai || '123 Business Avenue...' }}></span>
              </li>
              <li className={`flex items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone className={`w-5 h-5 ${lang === 'ar' ? 'ml-3' : 'mr-3'} text-lyana-gold shrink-0`} />
                <span className="text-gray-300" dir="auto"><bdi>{t.footer?.phone || '+971 4 123 4567'}</bdi></span>
              </li>
              <li className={`flex items-center ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail className={`w-5 h-5 ${lang === 'ar' ? 'ml-3' : 'mr-3'} text-lyana-gold shrink-0`} />
                <span className="text-gray-300" dir="auto"><bdi>{t.footer?.email || 'info@lyana-travel.com'}</bdi></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lyana Travel Agency. {t.footer?.allRights || 'All rights reserved.'}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-lyana-gold transition-colors">
                {t.footer?.terms || 'Terms & Conditions'}
              </a>
              <span className="hidden md:inline" aria-hidden="true">|</span>
              <a href="#" className="hover:text-lyana-gold transition-colors">
                {t.footer?.privacy || 'Privacy Policy'}
              </a>
              <span className="hidden md:inline" aria-hidden="true">|</span>
              <a href="#" className="hover:text-lyana-gold transition-colors">
                {t.footer?.cookie || 'Cookie Policy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
