
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
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div
        className={`flex flex-col ${
          alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 animate-fade-in">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
            {title}
          </h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <Button asChild className="bg-lyana-blue hover:bg-lyana-blue/90">
            <Link to={linkTo} className="flex items-center">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFeature;
