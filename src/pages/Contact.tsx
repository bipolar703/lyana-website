import ContactForm from "@/components/common/ContactForm";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({});

  useEffect(() => {
    loadTranslations(lang).then(setT);
  }, [lang]);

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-lyana-blue" />,
      title: t.contactPage?.contactInfo?.phone || "Phone",
      details: [
        t.contactPage?.contactInfo?.phoneDetails1 || "+971 4 123 4567",
        t.contactPage?.contactInfo?.phoneDetails2 || "+30 21 0123 4567"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-lyana-blue" />,
      title: t.contactPage?.contactInfo?.email || "Email",
      details: [
        t.contactPage?.contactInfo?.emailDetails1 || "info@lyana-travel.com",
        t.contactPage?.contactInfo?.emailDetails2 || "support@lyana-travel.com"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8 text-lyana-blue" />,
      title: t.contactPage?.contactInfo?.address || "Address",
      details: [
        t.contactPage?.contactInfo?.addressDetails1 || "Dubai Office: 123 Business Avenue, Suite 500, Dubai, UAE",
        t.contactPage?.contactInfo?.addressDetails2 || "Athens Office: 45 Visa Street, Suite 200, Athens, Greece"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-lyana-blue" />,
      title: t.contactPage?.contactInfo?.businessHours || "Business Hours",
      details: [
        t.contactPage?.contactInfo?.hoursDetails1 || "Monday - Friday: 9:00 AM - 6:00 PM",
        t.contactPage?.contactInfo?.hoursDetails2 || "Saturday: 10:00 AM - 2:00 PM",
        t.contactPage?.contactInfo?.hoursDetails3 || "Sunday: Closed"
      ]
    }
  ];

  const faqItems = t.contactPage?.faq || [];

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <PageHero
          backgroundImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1920&auto=format&fit=crop"
          title={t.contactPage?.heroTitle || "Contact Us"}
          subtitle={t.contactPage?.heroSubtitle || "Have questions about our visa services? Our team is ready to assist you. Reach out through any of the contact methods below or fill out our form for a prompt response."}
          currentLang={lang}
          height="default"
        />

        {/* Contact Information */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
                  <div className={`flex items-center mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    {item.icon}
                    <h3 className={`text-xl font-bold text-lyana-navy ${lang === 'ar' ? 'mr-3' : 'ml-3'}`}>{item.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600" dir="auto">
                        {/* Use dir="auto" to ensure numbers display correctly in both LTR and RTL */}
                        <bdi>{detail}</bdi>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-lyana-navy">
                  {t.contactPage?.sendMessageTitle || "Send Us a Message"}
                </h2>
                <ContactForm titleKey="" subtitleKey="" compact={true} currentLang={lang} />
              </div>

              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-lyana-navy">
                  {t.contactPage?.faqTitle || "Frequently Asked Questions"}
                </h2>
                <div className="space-y-6">
                  {faqItems.map((item: any, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <h3 className="text-lg font-bold mb-3 text-lyana-navy">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                {t.contactPage?.locationsTitle || "Our Locations"}
              </h2>
              <p className="text-gray-600">
                {t.contactPage?.locationsDesc || "With offices in Dubai and Athens, we're strategically positioned to provide specialized visa services for our focus destinations."}
              </p>
            </div>

            <div className="bg-gray-300 h-80 rounded-xl overflow-hidden animate-fade-in">
              {/* This would be replaced with an actual map integration */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">{t.contactPage?.mapPlaceholder || "Interactive Map Would Appear Here"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
