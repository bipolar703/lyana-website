import ContactForm from "@/components/common/ContactForm";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProcessSteps from "@/components/services/ProcessSteps";
import Requirements from "@/components/services/Requirements";
import ServiceCard from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dubai = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  const serviceOptions = [
    {
      titleKey: "dubaiPage.touristVisaTitle",
      descriptionKey: "dubaiPage.touristVisaDesc",
      featuresKeys: [
        "dubaiPage.touristVisaFeat1",
        "dubaiPage.touristVisaFeat2",
        "dubaiPage.touristVisaFeat3",
        "dubaiPage.touristVisaFeat4",
        "dubaiPage.touristVisaFeat5"
      ],
      price: "$149",
      popular: true,
      linkTo: "/contact"
    },
    {
      titleKey: "dubaiPage.businessVisaTitle",
      descriptionKey: "dubaiPage.businessVisaDesc",
      featuresKeys: [
        "dubaiPage.businessVisaFeat1",
        "dubaiPage.businessVisaFeat2",
        "dubaiPage.businessVisaFeat3",
        "dubaiPage.businessVisaFeat4",
        "dubaiPage.businessVisaFeat5"
      ],
      price: "$249",
      linkTo: "/contact"
    },
    {
      titleKey: "dubaiPage.transitVisaTitle",
      descriptionKey: "dubaiPage.transitVisaDesc",
      featuresKeys: [
        "dubaiPage.transitVisaFeat1",
        "dubaiPage.transitVisaFeat2",
        "dubaiPage.transitVisaFeat3",
        "dubaiPage.transitVisaFeat4",
        "dubaiPage.transitVisaFeat5"
      ],
      price: "$99",
      linkTo: "/contact"
    }
  ];

  const processSteps = [
    { number: 1, titleKey: "dubaiPage.step1Title", descriptionKey: "dubaiPage.step1Desc" },
    { number: 2, titleKey: "dubaiPage.step2Title", descriptionKey: "dubaiPage.step2Desc" },
    { number: 3, titleKey: "dubaiPage.step3Title", descriptionKey: "dubaiPage.step3Desc" },
    { number: 4, titleKey: "dubaiPage.step4Title", descriptionKey: "dubaiPage.step4Desc" }
  ];

  const requirements = [
    { titleKey: "dubaiPage.req1Title", contentKey: "dubaiPage.req1Content" },
    { titleKey: "dubaiPage.req2Title", contentKey: "dubaiPage.req2Content" },
    { titleKey: "dubaiPage.req3Title", contentKey: "dubaiPage.req3Content" },
    { titleKey: "dubaiPage.req4Title", contentKey: "dubaiPage.req4Content" },
    { titleKey: "dubaiPage.req5Title", contentKey: "dubaiPage.req5Content" },
    { titleKey: "dubaiPage.req6Title", contentKey: "dubaiPage.req6Content" }
  ];

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <PageHero
          backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
          title={t.dubaiPage?.heroTitle || 'Dubai Visa Services'}
          subtitle={t.dubaiPage?.heroSubtitle || 'Seamless visa processing for your journey to the dazzling city of Dubai. Our expertise ensures a smooth application experience with high approval rates.'}
          currentLang={lang}
          height="default"
        >
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg"
          >
            <Link to={`/${lang}/contact`}>
              {t.dubaiPage?.requestQuote || 'Request a Quote'}
            </Link>
          </Button>
        </PageHero>

        {/* Introduction */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  {t.dubaiPage?.introTitle || 'Your Gateway to Dubai'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t.dubaiPage?.introDesc1 || 'Dubai, with its stunning architecture, luxurious shopping, and vibrant culture, awaits your exploration. Our specialized visa services remove the complexities of the application process, allowing you to focus on planning your perfect Dubai adventure.'}
                </p>
                <p className="text-gray-600 mb-4">
                  {t.dubaiPage?.introDesc2 || 'Whether you\'re visiting for tourism, business, or transit purposes, our team of experienced visa consultants provides personalized guidance to ensure your application meets all UAE requirements for a successful outcome.'}
                </p>
                <p className="text-gray-600">
                  {t.dubaiPage?.introDesc3 || 'With Lyana\'s Dubai visa services, you gain access to expertise that significantly streamlines the process, saving you time and reducing the risk of application rejection.'}
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be"
                  alt={t.dubaiPage?.introTitle || 'Dubai skyline with iconic buildings'}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                {t.dubaiPage?.servicesTitle || 'Our Dubai Visa Services'}
              </h2>
              <p className="text-gray-600">
                {t.dubaiPage?.servicesSubtitle || 'Select the visa option that best suits your travel needs. Each service includes comprehensive support throughout the application process.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {serviceOptions.map((service, index) => (
                <ServiceCard
                  key={index}
                  titleKey={service.titleKey}
                  descriptionKey={service.descriptionKey}
                  featuresKeys={service.featuresKeys}
                  price={service.price}
                  popular={service.popular}
                  linkTo={service.linkTo}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <ProcessSteps
          steps={processSteps}
          titleKey="dubaiPage.processTitle"
          subtitleKey="dubaiPage.processSubtitle"
        />

        {/* Requirements */}
        <Requirements
          requirements={requirements}
          titleKey="dubaiPage.reqTitle"
          subtitleKey="dubaiPage.reqSubtitle"
        />

        {/* Contact Form */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  {t.dubaiPage?.contactTitle || 'Ready to Apply for Your Dubai Visa?'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t.dubaiPage?.contactSubtitle || 'Contact our Dubai visa specialists today to begin your application process. We\'re here to answer your questions and guide you every step of the way.'}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">
                    {t.dubaiPage?.whyChooseUs || 'Why Our Clients Choose Us'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{t.dubaiPage?.choose1 || '• Specialized expertise in UAE visa regulations'}</li>
                    <li>{t.dubaiPage?.choose2 || '• High approval success rate'}</li>
                    <li>{t.dubaiPage?.choose3 || '• Clear communication throughout the process'}</li>
                    <li>{t.dubaiPage?.choose4 || '• Time-saving service with minimal effort required from you'}</li>
                    <li>{t.dubaiPage?.choose5 || '• Dedicated support from application to approval'}</li>
                  </ul>
                </div>
              </div>
              <div className="animate-fade-in">
                <ContactForm
                  titleKey="dubaiPage.startApplicationTitle"
                  subtitleKey="dubaiPage.startApplicationSubtitle"
                  currentLang={lang}
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

export default Dubai;
