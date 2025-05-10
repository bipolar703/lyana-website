
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <div className="relative min-h-[60vh] bg-cover bg-center" style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')` 
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-lyana-navy/90 to-lyana-navy/70"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The Premier Visa Service for Dubai & Greece
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Lyana provides specialized visa services with a focus on excellence, 
            reliability and customer satisfaction. Our expertise ensures your 
            travel documentation is handled with the utmost care and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Our Experts
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy px-8 py-6 text-lg"
            >
              <Link to="/dubai" className="flex items-center">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
