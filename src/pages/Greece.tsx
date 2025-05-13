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

const Greece = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  // Service options with translation keys
  const serviceOptions = [
    {
      titleKey: "greecePage.touristVisaTitle",
      descriptionKey: "greecePage.touristVisaDesc",
      featuresKeys: [
        "greecePage.touristVisaFeat1",
        "greecePage.touristVisaFeat2",
        "greecePage.touristVisaFeat3",
        "greecePage.touristVisaFeat4",
        "greecePage.touristVisaFeat5"
      ],
      price: "$179",
      popular: true,
      linkTo: "/contact"
    },
    {
      titleKey: "greecePage.businessVisaTitle",
      descriptionKey: "greecePage.businessVisaDesc",
      featuresKeys: [
        "greecePage.businessVisaFeat1",
        "greecePage.businessVisaFeat2",
        "greecePage.businessVisaFeat3",
        "greecePage.businessVisaFeat4",
        "greecePage.businessVisaFeat5"
      ],
      price: "$249",
      linkTo: "/contact"
    },
    {
      titleKey: "greecePage.longStayVisaTitle",
      descriptionKey: "greecePage.longStayVisaDesc",
      featuresKeys: [
        "greecePage.longStayVisaFeat1",
        "greecePage.longStayVisaFeat2",
        "greecePage.longStayVisaFeat3",
        "greecePage.longStayVisaFeat4",
        "greecePage.longStayVisaFeat5"
      ],
      price: "$329",
      linkTo: "/contact"
    }
  ];

  // Process steps with translation keys
  const processSteps = [
    { number: 1, titleKey: "greecePage.step1Title", descriptionKey: "greecePage.step1Desc" },
    { number: 2, titleKey: "greecePage.step2Title", descriptionKey: "greecePage.step2Desc" },
    { number: 3, titleKey: "greecePage.step3Title", descriptionKey: "greecePage.step3Desc" },
    { number: 4, titleKey: "greecePage.step4Title", descriptionKey: "greecePage.step4Desc" }
  ];

  // Requirements with translation keys
  const requirements = [
    { titleKey: "greecePage.req1Title", contentKey: "greecePage.req1Content" },
    { titleKey: "greecePage.req2Title", contentKey: "greecePage.req2Content" },
    { titleKey: "greecePage.req3Title", contentKey: "greecePage.req3Content" },
    { titleKey: "greecePage.req4Title", contentKey: "greecePage.req4Content" },
    { titleKey: "greecePage.req5Title", contentKey: "greecePage.req5Content" },
    { titleKey: "greecePage.req6Title", contentKey: "greecePage.req6Content" },
    { titleKey: "greecePage.req7Title", contentKey: "greecePage.req7Content" },
    { titleKey: "greecePage.req8Title", contentKey: "greecePage.req8Content" }
  ];

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <PageHero
          backgroundImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1920&auto=format&fit=crop"
          title={t.greecePage?.heroTitle || 'Greece Visa Services'}
          subtitle={t.greecePage?.heroSubtitle || 'Expert guidance through the Greece visa application process. We simplify Schengen visa requirements to make your journey to Greece smooth and stress-free.'}
          currentLang={lang}
          height="default"
        >
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg"
          >
            <Link to={`/${lang}/contact`}>
              {t.greecePage?.requestQuote || 'Request a Quote'}
            </Link>
          </Button>
        </PageHero>

        {/* Introduction */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  {t.greecePage?.introTitle || 'Explore Ancient Wonders & Island Beauty'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t.greecePage?.introDesc1 || 'From the historic Acropolis...'}
                </p>
                <p className="text-gray-600 mb-4">
                  {t.greecePage?.introDesc2 || 'We assist with tourist visas...'}
                </p>
                <p className="text-gray-600 mb-6">
                  {t.greecePage?.introDesc3 || 'Trust Lyana to guide you...'}
                </p>

                {/* Added new photo */}
                <div className="relative overflow-hidden rounded-lg shadow-md mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
                    alt="Santorini, Greece"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm">
                      {t.greecePage?.santoriniCaption || 'Santorini - One of Greece\'s most iconic destinations'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1509984666906-903c7020410b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Z3JlZWNlJTIwdmlzYXxlbnwwfHx8fDE2MTY4NzUyNDU&ixlib=rb-1.2.1&q=80&w=1080"
                  alt={t.greecePage?.introTitle || 'Scenic view of Greece'}
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
                {t.greecePage?.servicesTitle || 'Our Greece & Schengen Visa Services'}
              </h2>
              <p className="text-gray-600">
                {t.greecePage?.servicesSubtitle || 'Choose the visa option that fits...'}
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
          titleKey="greecePage.processTitle"
          subtitleKey="greecePage.processSubtitle"
        />

        {/* Requirements */}
        <Requirements
          requirements={requirements}
          titleKey="greecePage.reqTitle"
          subtitleKey="greecePage.reqSubtitle"
        />

        {/* Contact Form */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  {t.greecePage?.contactTitle || 'Apply for Your Greece Visa Today'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t.greecePage?.contactSubtitle || "Connect with our Schengen visa experts today to begin your journey to the Mediterranean. We're ready to provide the expertise and support you need for a successful application."}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">
                    {t.greecePage?.whyChooseUs || 'Benefits of Our Greece Visa Service'}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>{t.greecePage?.choose1 || '• Default benefit 1'}</li>
                    <li>{t.greecePage?.choose2 || '• Default benefit 2'}</li>
                    <li>{t.greecePage?.choose3 || '• Default benefit 3'}</li>
                    <li>{t.greecePage?.choose4 || '• Default benefit 4'}</li>
                    <li>{t.greecePage?.choose5 || '• Default benefit 5'}</li>
                  </ul>
                </div>
              </div>
              <div className="animate-fade-in">
                <ContactForm
                  titleKey="greecePage.startApplicationTitle"
                  subtitleKey="greecePage.startApplicationSubtitle"
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

export default Greece;
