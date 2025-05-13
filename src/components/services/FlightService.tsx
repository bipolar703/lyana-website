import { Button } from "@/components/ui/button";
import { loadTranslations } from '@/lib/utils';
import { ArrowRight, Plane } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * FlightService component
 * Displays information about flight booking services
 */
interface FlightServiceProps {
  currentLang: 'en' | 'ar';
}

const FlightService = ({ currentLang }: FlightServiceProps) => {
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(currentLang).then(setT); // Load translations
  }, [currentLang]);

  // Flight service data with keys
  const servicesData = [
    {
      key: "worldwide",
      icon: <Plane className="w-12 h-12 rotate-45" />,
    },
    {
      key: "premium",
      icon: <Plane className="w-12 h-12" />,
    },
    {
      key: "packages",
      icon: <Plane className="w-12 h-12 -rotate-45" />,
    }
  ];

  return (
    <div className={`bg-gray-50 py-16 md:py-24 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy relative inline-block">
            {t.flightService?.title || 'International Flight Services'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-lyana-gold"></span>
          </h2>
          <p className="text-gray-600 mt-8">
            {t.flightService?.desc || 'Book your international flights with confidence through our trusted flight reservation service.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center animate-fade-in">
              <div className="text-lyana-blue mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-lyana-navy">
                {t.flightService?.[service.key] || service.key}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.flightService?.[`${service.key}Desc`] || `${service.key} description`}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 group"
          >
            <Link to={`/${currentLang}/flights`} className="flex items-center">
              {t.flightService?.exploreOptions || 'Explore Flight Options'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightService;
