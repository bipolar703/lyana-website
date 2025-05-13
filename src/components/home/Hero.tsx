import { Button } from '@/components/ui/button';
import { loadTranslations } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

/**
 * Hero component for the homepage
 * Displays a full-screen hero section with a heading, subheading, and call-to-action buttons
 */
interface HeroProps {
  currentLang: 'en' | 'ar';
}

const Hero = ({ currentLang }: HeroProps) => {
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(currentLang).then(setT); // Load translations
  }, [currentLang]);

  return (
    <div className={`relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-lyana-navy/80 to-lyana-navy/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lyana-gold/30 text-white rounded-full mb-4 backdrop-blur-sm">
            {t.hero?.globalTravel || 'Global Travel Services'}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero?.mainHeading || 'Your Gateway to Worldwide Travel & Visa Services'}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {t.hero?.mainDesc || 'Experience seamless travel planning with our expert visa services and flight bookings. Specialized destinations include Dubai, Europe, and beyond - all with reliability and efficiency.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg group transition-all duration-300"
            >
              <Link to={`/${currentLang}/contact`} className="flex items-center">
                {t.hero?.planJourney || 'Plan Your Journey'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy px-8 py-6 text-lg group"
            >
              <Link to={`/${currentLang}/about`} className="flex items-center">
                {t.hero?.discoverServices || 'Discover Our Services'} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-lyana-navy to-transparent h-24" />

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <a
          href="#destinations"
          className="text-white flex flex-col items-center animate-bounce"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">{t.hero?.discoverMore || 'Discover More'}</span>
          <ArrowRight className="h-5 w-5 transform rotate-90 rtl-flip-icon" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
