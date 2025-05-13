import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { Home, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({});

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    loadTranslations(lang).then(setT);
  }, [lang]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-center animate-fade-in bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg w-full">
            <img
              src="/404-illustration.svg"
              alt={t.notFoundPage?.title || "Page Not Found Illustration"}
              className="w-64 h-64 mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-lyana-navy mb-4">
              {t.notFoundPage?.title || '404 - Page Not Found'}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              {t.notFoundPage?.subtitle || 'Oops! The page you\'re looking for doesn\'t seem to exist.'}
            </p>
            <p className="text-gray-600 mb-10">
              {t.notFoundPage?.message || 'It might have been moved, deleted, or perhaps the URL was mistyped. Let\'s get you back on track.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-lyana-blue hover:bg-lyana-blue/90 text-white group">
                <Link to="/" className="flex items-center">
                  <Home className={`w-5 h-5 ${lang === 'ar' ? 'ml-2' : 'mr-2'} rtl-flip-icon`} />
                  {t.notFoundPage?.goHome || 'Go Back to Homepage'}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-lyana-blue text-lyana-blue hover:bg-lyana-blue/5 group">
                <Link to="/contact" className="flex items-center">
                  <MessageSquare className={`w-5 h-5 ${lang === 'ar' ? 'ml-2' : 'mr-2'} rtl-flip-icon`} />
                  {t.notFoundPage?.contactSupport || 'Contact Support'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
