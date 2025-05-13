import PageHero from "@/components/common/PageHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { ArrowRight, Award, Globe, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  // Values data with keys for translation
  const values = [
    {
      key: "reliability",
      icon: <Shield className="w-12 h-12 text-lyana-blue mb-4" />,
    },
    {
      key: "expertise",
      icon: <Award className="w-12 h-12 text-lyana-blue mb-4" />,
    },
    {
      key: "clientFocus",
      icon: <Users className="w-12 h-12 text-lyana-blue mb-4" />,
    },
    {
      key: "integrity",
      icon: <Globe className="w-12 h-12 text-lyana-blue mb-4" />,
    }
  ];

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />

      <main>
        <PageHero
          backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          tag={t.aboutPage?.title || 'About Lyana Travel Agency'}
          title={t.aboutPage?.subtitle || 'Your trusted partner for specialized visa services'}
          subtitle={t.aboutPage?.whoWeAreDesc1
            ? t.aboutPage.whoWeAreDesc1.substring(0, t.aboutPage.whoWeAreDesc1.indexOf('.') + 1)
            : 'Lyana is a specialized visa service company focused exclusively on facilitating travel to Dubai and Greece.'}
          currentLang={lang}
          height="default"
        >
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg group"
          >
            <Link to={`/${lang}/contact`} className="flex items-center">
              {t.navbar?.contact || 'Contact Us'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
            </Link>
          </Button>
        </PageHero>

        {/* Main Content */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  {t.aboutPage?.whoWeAre || 'Who We Are'} {/* Use translation */}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t.aboutPage?.whoWeAreDesc1 || 'Lyana is a specialized visa service company...'} {/* Use translation */}
                </p>
                <p className="text-gray-600 mb-4">
                  {t.aboutPage?.whoWeAreDesc2 || 'Our team consists of experienced visa consultants...'} {/* Use translation */}
                </p>
                <p className="text-gray-600">
                  {t.aboutPage?.whoWeAreDesc3 || 'What distinguishes Lyana is our specialized approach...'} {/* Use translation */}
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1560250056-07ba64664864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dHJhdmVsJTIwYWdlbnR8ZW58MHx8fHwxNjE2NzY0NjY3&ixlib=rb-1.2.1&q=80&w=1080"
                  alt={t.aboutPage?.whoWeAre || 'Team of travel agents discussing plans'}
                  className="rounded-xl shadow-lg w-full h-auto object-cover md:max-h-[400px]"
                />
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                {t.aboutPage?.ourMission || 'Our Mission'} {/* Use translation */}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.aboutPage?.ourMissionDesc || 'To simplify the visa application process...'} {/* Use translation */}
              </p>
            </div>

            {/* Our Values Section */}
            <div className="animate-fade-in">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                  {t.aboutPage?.ourValues || 'Our Core Values'} {/* Use translation */}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center transition-all hover:shadow-lg"
                  >
                    {value.icon}
                    <h3 className="text-xl font-bold text-lyana-navy my-3">
                      {t.aboutPage?.[value.key] || value.key} {/* Use translation for title */}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t.aboutPage?.[`${value.key}Desc`] || `${value.key} description`} {/* Use translation for description */}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action / Contact Link */}
        <div className="section-padding bg-lyana-blue text-white">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.index?.readyToBegin || 'Ready to Start Your Journey?'} {/* Use translation from index or new key */}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t.index?.contactExperts || 'Our expert team is ready to assist you...'} {/* Use translation from index or new key */}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy px-8 py-3 text-lg group"
            >
              <Link to="/contact" className="flex items-center justify-center">
                {t.navbar?.contact || 'Contact Us Now'} {/* Use translation */}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" /> {/* Added rtl-flip-icon */}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
