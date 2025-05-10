
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  linkTo: string;
}

const ServiceCard = ({
  title,
  description,
  features,
  price,
  popular = false,
  linkTo,
}: ServiceCardProps) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-lg border transition-all ${
        popular 
          ? 'border-lyana-blue scale-105 relative shadow-xl' 
          : 'border-gray-200 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-lyana-blue text-white py-1 px-4 text-sm font-semibold">
          Popular
        </div>
      )}
      
      <div 
        className={`px-6 py-8 ${popular ? 'bg-gradient-to-br from-lyana-softBlue to-white' : 'bg-white'}`}
      >
        <h3 className="text-xl font-bold mb-2 text-lyana-navy">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="text-2xl font-bold text-lyana-navy mb-6">
          {price} <span className="text-sm font-normal text-gray-500">/ person</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-lyana-blue shrink-0 mt-0.5 mr-3" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild
          className={`w-full ${popular ? 'bg-lyana-blue hover:bg-lyana-blue/90' : 'bg-lyana-navy hover:bg-lyana-navy/90'}`}
        >
          <Link to={linkTo}>Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
