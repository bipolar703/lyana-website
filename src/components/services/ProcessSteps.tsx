import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { useEffect, useState } from "react";

interface Step {
  number: number;
  titleKey: string;
  descriptionKey: string;
}

interface ProcessStepsProps {
  steps: Step[];
  titleKey: string;
  subtitleKey: string;
}

const ProcessSteps = ({ steps, titleKey, subtitleKey }: ProcessStepsProps) => {
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
    <div className={`section-padding ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
            {getTranslation(titleKey, 'Process Title')}
          </h2>
          <p className="text-gray-600">
            {getTranslation(subtitleKey, 'Process Subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full bg-lyana-blue text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0 ${lang === 'ar' ? 'md:ml-8' : 'md:mr-8'} shrink-0`}>
                  {step.number}
                </div>

                <div className={`flex-1 text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-xl font-bold text-lyana-navy mb-2">
                    {getTranslation(step.titleKey, `Step ${step.number} Title`)}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation(step.descriptionKey, `Step ${step.number} Description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
