import ContactForm from "@/components/common/ContactForm";
import Benefits from "@/components/home/Benefits";
import DestinationFeature from "@/components/home/DestinationFeature";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FlightService from "@/components/services/FlightService";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Index page component
 * Main landing page of the website
 */
const Index = () => {
  const { lang: urlLang } = useParams<{ lang?: 'en' | 'ar' }>();
  const [lang, setLang] = useState<'en' | 'ar'>(urlLang || getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  // Update language when URL changes
  useEffect(() => {
    if (urlLang && (urlLang === 'en' || urlLang === 'ar')) {
      setLang(urlLang);
    }
  }, [urlLang]);

  // Load translations when language changes
  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        <Hero currentLang={lang} />

        <DestinationFeature
          currentLang={lang}
          title={t.index?.dubaiVisaTitle || "Dubai Visa Services"}
          description={t.index?.dubaiVisaDesc || "Experience hassle-free visa processing for Dubai with our specialized services. We handle all the paperwork and requirements, ensuring a smooth and efficient application process. Our team of experts will guide you every step of the way, from documentation to approval."}
          imageUrl="https://images.pexels.com/photos/4491951/pexels-photo-4491951.jpeg"
          linkTo="/dubai"
        />

        <DestinationFeature
          currentLang={lang}
          title={t.index?.greeceVisaTitle || "Greece & Europe Visa Services"}
          description={t.index?.greeceVisaDesc || "Navigate the complexities of Greece and European visa applications with ease. Our dedicated team specializes in Schengen visa requirements and procedures, offering personalized guidance to ensure your application meets all necessary criteria for approval."}
          imageUrl="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg"
          linkTo="/greece"
          alignment="right"
        />

        <FlightService currentLang={lang} />

        <Benefits currentLang={lang} />

        <Gallery currentLang={lang} />

        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                  {t.index?.readyToBegin || 'Ready to Begin Your Journey?'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.index?.contactExperts || 'Contact our travel experts today and take the first step toward your seamless travel experience.'}
                  <br/>
                  {t.index?.contactSubtitle || 'We\'re here to answer your questions and guide you through the planning process for your next adventure.'}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">{t.index?.ourGuarantees || 'Our Guarantees'}</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{t.index?.guarantee1 || '• Dedicated travel consultants for personalized service'}</li>
                    <li>{t.index?.guarantee2 || '• Regular updates on your visa application status'}</li>
                    <li>{t.index?.guarantee3 || '• Thorough document review to minimize rejection risk'}</li>
                    <li>{t.index?.guarantee4 || '• Competitive flight pricing with no hidden fees'}</li>
                    <li>{t.index?.guarantee5 || '• Comprehensive travel planning assistance'}</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in">
                <ContactForm
                  currentLang={lang}
                  titleKey="index.contactForm.title"
                  subtitleKey="index.contactForm.subtitle"
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

export default Index;
