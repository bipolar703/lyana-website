import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  price: string;
  popular?: boolean;
  linkTo: string;
}

const ServiceCard = ({
  titleKey,
  descriptionKey,
  featuresKeys,
  price,
  popular = false,
  linkTo,
}: ServiceCardProps) => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({});

  useEffect(() => {
    loadTranslations(lang).then(setT);
  }, [lang]);

  const getTranslation = (key: string | undefined, fallback: string) => {
    if (!key) return fallback;
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return fallback;
    }
    return value || fallback;
  };

  return (
    <div className={`relative flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl ${popular ? 'border-lyana-gold border-2' : ''} ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-lyana-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          {t.serviceCard?.popular || 'Popular'}
        </div>
      )}
      <div className="p-6 flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-lyana-navy mb-3">
          {getTranslation(titleKey, 'Service Title')}
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          {getTranslation(descriptionKey, 'Service Description')}
        </p>
        <ul className="space-y-3 text-sm text-gray-700 mb-8">
          {featuresKeys.map((featureKey, index) => (
            <li key={index} className="flex items-center">
              <Check className={`w-4 h-4 mr-2 ${lang === 'ar' ? 'ml-2 mr-0' : ''} text-green-500 shrink-0 rtl-flip-icon`} />
              {getTranslation(featureKey, `Feature ${index + 1}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 mt-auto flex flex-col sm:flex-row justify-between items-center">
        <span className="text-2xl font-bold text-lyana-navy mb-4 sm:mb-0">{price}</span>
        <Button asChild className="w-full sm:w-auto bg-lyana-blue hover:bg-lyana-blue/90 group">
          <Link to={linkTo} className="flex items-center justify-center">
            {t.serviceCard?.getStarted || 'Get Started'}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
