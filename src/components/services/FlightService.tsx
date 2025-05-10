
import { Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * FlightService component
 * Displays information about flight booking services
 */
const FlightService = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy relative inline-block">
            International Flight Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-lyana-gold"></span>
          </h2>
          <p className="text-gray-600 mt-8">
            Book your international flights with confidence through our trusted flight reservation service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Plane className="w-12 h-12 rotate-45" />,
              title: "Worldwide Destinations",
              description: "Access flights to hundreds of destinations across the globe with competitive pricing and flexible options."
            },
            {
              icon: <Plane className="w-12 h-12" />,
              title: "Premium Airlines",
              description: "Book with leading international carriers offering the highest standards of comfort and service."
            },
            {
              icon: <Plane className="w-12 h-12 -rotate-45" />,
              title: "Complete Packages",
              description: "Combine flights with accommodation and visa services for a seamless end-to-end travel experience."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center animate-fade-in">
              <div className="text-lyana-blue mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-lyana-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-lyana-blue hover:bg-lyana-blue/90 group"
          >
            <Link to="/flights" className="flex items-center">
              Explore Flight Options
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightService;
