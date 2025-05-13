import { Button } from "@/components/ui/button";
import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * AboutHero component
 * Displays the hero section for the About page with a heading, description, and call-to-action buttons
 */
const AboutHero = () => {
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(lang).then(setT); // Load translations
  }, [lang]);

  return (
    <div className={`relative min-h-[60vh] bg-cover bg-center flex items-center ${lang === 'ar' ? 'font-arabic' : ''}`} style={{
      backgroundImage: "linear-gradient(to right, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.5)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
    }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lyana-gold/30 text-white rounded-full mb-4 backdrop-blur-sm">
            {t.aboutPage?.title || 'About Lyana Travel Agency'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.aboutPage?.subtitle || 'Your trusted partner for specialized visa services...'}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            {t.aboutPage?.whoWeAreDesc1
              ? t.aboutPage.whoWeAreDesc1.substring(0, t.aboutPage.whoWeAreDesc1.indexOf('.') + 1)
              : 'Lyana is a specialized visa service company focused exclusively on facilitating travel to Dubai and Greece.'}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg group"
          >
            <Link to="/contact" className="flex items-center">
              {t.navbar?.contact || 'Contact Us'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
