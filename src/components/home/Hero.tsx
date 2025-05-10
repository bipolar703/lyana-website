
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-lyana-navy/80 to-lyana-navy/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lyana-gold/30 text-white rounded-full mb-4 backdrop-blur-sm">
            Premier Visa Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Effortless Path to Dubai & Greece Visas
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Experience seamless visa processing with our expert guidance. 
            Specialized services for Dubai and Greece travel with reliability and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg group transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy px-8 py-6 text-lg"
            >
              <Link to="/about" className="flex items-center">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
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
          <span className="text-sm mb-2">Discover More</span>
          <ArrowRight className="h-5 w-5 transform rotate-90" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
