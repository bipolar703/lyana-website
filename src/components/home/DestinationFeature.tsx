
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DestinationFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  alignment?: "left" | "right";
}

const DestinationFeature = ({
  title,
  description,
  imageUrl,
  linkTo,
  alignment = "left",
}: DestinationFeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div
        className={`flex flex-col ${
          alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 animate-fade-in">
          <div 
            className="relative overflow-hidden rounded-xl shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-[500px] object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
              <div className={`w-16 h-1 bg-lyana-gold transition-all duration-300 ${isHovered ? 'w-24' : 'w-16'}`}></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lyana-navy">
            {title}
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>
          <Button 
            asChild 
            className="bg-lyana-blue hover:bg-lyana-blue/90 group"
          >
            <Link to={linkTo} className="flex items-center">
              Explore Services 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFeature;
