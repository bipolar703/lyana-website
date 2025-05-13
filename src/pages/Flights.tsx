import ContactForm from "@/components/common/ContactForm";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProcessSteps from "@/components/services/ProcessSteps";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { ArrowRight, Calendar, Globe, Plane, Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * Flights page component
 * Displays information about flight booking services
 */
const Flights = () => {
  const { lang: urlLang } = useParams<{ lang?: 'en' | 'ar' }>();
  const [lang, setLang] = useState<'en' | 'ar'>(urlLang || getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  // Update language when URL changes
  useEffect(() => {
    if (urlLang && (urlLang === 'en' || urlLang === 'ar')) {
      setLang(urlLang);
    }
  }, [urlLang]);

  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  // Features data with keys
  const features = [
    { key: "feat1", icon: <Plane className="w-12 h-12 rtl-flip-icon" /> },
    { key: "feat2", icon: <Ticket className="w-12 h-12 rtl-flip-icon" /> },
    { key: "feat3", icon: <Calendar className="w-12 h-12 rtl-flip-icon" /> },
    { key: "feat4", icon: <Globe className="w-12 h-12 rtl-flip-icon" /> },
    { key: "feat5", icon: <ArrowRight className="w-12 h-12 rtl-flip-icon" /> }, // ArrowRight will be flipped by global CSS
    { key: "feat6", icon: <Plane className="w-12 h-12 rtl-flip-icon" /> } // Placeholder, consider a support icon
  ];

  // Process steps data with keys
  const bookingProcessSteps = [
    { number: 1, titleKey: "flightsPage.step1Title", descriptionKey: "flightsPage.step1Desc" },
    { number: 2, titleKey: "flightsPage.step2Title", descriptionKey: "flightsPage.step2Desc" },
    { number: 3, titleKey: "flightsPage.step3Title", descriptionKey: "flightsPage.step3Desc" },
    { number: 4, titleKey: "flightsPage.step4Title", descriptionKey: "flightsPage.step4Desc" }
  ];

  // Popular routes data with keys
  const popularRoutes = [
    { fromKey: "flightsPage.dubaiToLondon", toKey: "", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad", priceKey: "from", priceVal: "$450", routeKey: "dubaiToLondon" },
    { fromKey: "flightsPage.dubaiToParis", toKey: "", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", priceKey: "from", priceVal: "$480", routeKey: "dubaiToParis" },
    { fromKey: "flightsPage.athensToDubai", toKey: "", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", priceKey: "from", priceVal: "$350", routeKey: "athensToDubai" },
    { fromKey: "flightsPage.dubaiToNewYork", toKey: "", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9", priceKey: "from", priceVal: "$750", routeKey: "dubaiToNewYork" },
    { fromKey: "flightsPage.dubaiToTokyo", toKey: "", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc", priceKey: "from", priceVal: "$680", routeKey: "dubaiToTokyo" },
    { fromKey: "flightsPage.athensToRome", toKey: "", image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b", priceKey: "from", priceVal: "$220", routeKey: "athensToRome" }
  ];

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <PageHero
          backgroundImage="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1920&auto=format&fit=crop"
          tag={t.flightsPage?.heroTag || 'Flight Booking Services'}
          title={t.flightsPage?.heroTitle || 'International Flight Reservations Made Easy'}
          subtitle={t.flightsPage?.heroSubtitle || 'From booking to boarding, our expert team handles every aspect of your flight reservations with attention to detail and competitive pricing.'}
          currentLang={lang}
          height="tall"
        >
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg"
          >
            <Link to={`/${lang}/contact`}>
              {t.flightsPage?.requestQuote || 'Request a Quote'}
            </Link>
          </Button>
        </PageHero>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
              {t.flightsPage?.featuresTitle || 'Why Book With Lyana'}
            </h2>
            <p className="text-gray-600">
              {t.flightsPage?.featuresSubtitle || 'Discover the benefits of our professional flight booking services'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center animate-fade-in hover:shadow-lg transition-all">
                <div className="text-lyana-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-lyana-navy">
                  {t.flightsPage?.[`${feature.key}Title`] || `Feature Title`}
                </h3>
                <p className="text-gray-600">
                  {t.flightsPage?.[`${feature.key}Desc`] || `Feature Description`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <ProcessSteps
          steps={bookingProcessSteps}
          titleKey="flightsPage.processTitle"
          subtitleKey="flightsPage.processSubtitle"
        />

        {/* Popular Routes */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
              {t.flightsPage?.popularRoutesTitle || 'Popular Flight Routes'}
            </h2>
            <p className="text-gray-600">
              {t.flightsPage?.popularRoutesSubtitle || 'Discover our most requested international destinations'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoutes.map((route, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-64 animate-fade-in hover:shadow-xl transition-all">
                <img
                  src={route.image}
                  alt={`${route.fromKey} to ${route.toKey}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/90 to-lyana-navy/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-white/80">{t.flightsPage?.from || 'From'}</p>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {t.flightsPage?.[route.fromKey] || 'Route Name'}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 rtl-flip-icon" />
                    <div>
                      <p className="text-sm text-white/80">{t.flightsPage?.to || 'To'}</p>
                      <h3 className="text-xl font-bold text-white">{t.flightsPage?.[route.routeKey + 'Destination'] || ''}</h3>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-lyana-gold font-semibold">
                      {t.flightsPage?.[route.priceKey] || 'Price'} {route.priceVal}
                    </span>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy"
                    >
                      <Link to={`/${lang}/contact`}>
                        {t.flightsPage?.bookNow || 'Book Now'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                  {t.flightsPage?.contactTitle || 'Let Us Handle Your Flight Bookings'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.flightsPage?.contactSubtitle || 'Whether you\'re planning a business trip, family vacation, or solo adventure, our team is ready to find the perfect flight options tailored to your needs and preferences.'}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">{t.flightsPage?.whatWeNeed || 'What We Need From You'}</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{t.flightsPage?.requirement1 || '• Your travel dates (exact or approximate)'}</li>
                    <li>{t.flightsPage?.requirement2 || '• Departure and arrival cities'}</li>
                    <li>{t.flightsPage?.requirement3 || '• Number of travelers'}</li>
                    <li>{t.flightsPage?.requirement4 || '• Class preference (economy, business, first)'}</li>
                    <li>{t.flightsPage?.requirement5 || '• Any special requirements or preferences'}</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in">
                <ContactForm
                  currentLang={lang}
                  compact={true}
                  titleKey="flightsPage.contactFormTitle"
                  subtitleKey="flightsPage.contactFormSubtitle"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Flights;
