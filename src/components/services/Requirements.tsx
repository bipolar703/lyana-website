import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { CheckSquare, FileText, Info } from "lucide-react";
import { useEffect, useState } from "react";

interface RequirementItem {
  titleKey: string;
  contentKey: string;
}

interface RequirementsProps {
  requirements: RequirementItem[];
  titleKey: string;
  subtitleKey: string;
}

const Requirements = ({ requirements, titleKey, subtitleKey }: RequirementsProps) => {
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

  const getIcon = (titleKey: string) => {
    if (titleKey.toLowerCase().includes('passport')) return <FileText className="w-6 h-6 text-lyana-blue" />;
    if (titleKey.toLowerCase().includes('form')) return <CheckSquare className="w-6 h-6 text-lyana-blue" />;
    return <Info className="w-6 h-6 text-lyana-blue" />;
  };

  return (
    <div className={`section-padding bg-gray-50 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
            {getTranslation(titleKey, 'Requirements Title')}
          </h2>
          <p className="text-gray-600">
            {getTranslation(subtitleKey, 'Requirements Subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {getIcon(req.titleKey)}
                <h3 className={`text-xl font-bold text-lyana-navy ${lang === 'ar' ? 'mr-3' : 'ml-3'}`}>
                  {getTranslation(req.titleKey, `Requirement ${index + 1} Title`)}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {getTranslation(req.contentKey, `Requirement ${index + 1} Content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requirements;
