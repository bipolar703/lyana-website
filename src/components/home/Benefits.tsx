import { loadTranslations } from '@/lib/utils';
import { Award, Clock, Shield, UserCheck } from 'lucide-react';
import { useEffect, useState } from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
    <div className="text-lyana-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-lyana-navy">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface BenefitsProps {
  currentLang: 'en' | 'ar';
}

const Benefits = ({ currentLang }: BenefitsProps) => {
  const [t, setT] = useState<any>({});

  useEffect(() => {
    loadTranslations(currentLang).then(setT);
  }, [currentLang]);

  const benefitsData = [
    { key: 'expertGuidance', icon: <Award className="w-12 h-12" /> },
    { key: 'efficientProcessing', icon: <Clock className="w-12 h-12" /> },
    { key: 'secureReliable', icon: <Shield className="w-12 h-12" /> },
    { key: 'personalizedService', icon: <UserCheck className="w-12 h-12" /> },
  ];

  return (
    <div className={`bg-gray-50 section-padding ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
            {t.benefits?.whyChoose || 'Why Choose Lyana'}
          </h2>
          <p className="text-gray-600">
            {t.benefits?.desc || 'We provide exceptional visa services with a focus on simplicity, reliability, and customer satisfaction. Our expertise ensures a hassle-free experience from application to approval.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={t.benefits?.[benefit.key] || benefit.key}
              description={t.benefits?.[`${benefit.key}Desc`] || `${benefit.key} description`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
