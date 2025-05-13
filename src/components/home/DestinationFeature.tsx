import { Button } from "@/components/ui/button";
import { optimizeImageUrl } from "@/lib/image-utils";
import { loadTranslations } from '@/lib/utils';
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Props for the DestinationFeature component
 * @interface DestinationFeatureProps
 * @property {string} title - The title of the destination
 * @property {string} description - The description of the destination
 * @property {string} imageUrl - The URL of the destination image
 * @property {string} linkTo - The URL to navigate to when clicking the button
 * @property {("left"|"right")} [alignment="left"] - The alignment of the image (left or right)
 * @property {('en'|'ar')} currentLang - The current language
 */
interface DestinationFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  alignment?: "left" | "right";
  currentLang: 'en' | 'ar';
}

/**
 * DestinationFeature component
 * Displays a destination with an image, title, description, and a call-to-action button
 * Enhanced with improved responsiveness and touch-friendly interactions
 */
const DestinationFeature = ({
  title,
  description,
  imageUrl,
  linkTo,
  alignment = "left",
  currentLang,
}: DestinationFeatureProps) => {
  const [t, setT] = useState<any>({});
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    loadTranslations(currentLang).then(setT);
  }, [currentLang]);

  // Check if device is mobile for touch-friendly interactions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine translation keys based on props (this is an example, adjust as needed)
  // You might pass explicit keys instead, e.g., titleKey="index.dubaiVisaTitle"
  const titleText = title; // Use prop directly as fallback/default
  const descriptionText = description; // Use prop directly as fallback/default

  return (
    <div className={`container mx-auto px-4 py-12 md:py-20 lg:py-24 ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      <div
        className={`flex flex-col ${
          alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-6 md:gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 animate-fade-in">
          <div
            className="relative overflow-hidden rounded-xl shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Make touch interactions work better on mobile
            onClick={() => isMobile && setIsHovered(!isHovered)}
          >
            <img
              src={optimizeImageUrl(imageUrl, 1200)}
              alt={title}
              loading="lazy"
              className={`w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
              onError={(e) => {
                // Fallback to original URL if optimized URL fails
                const target = e.target as HTMLImageElement;
                if (target.src !== imageUrl) {
                  console.warn(`Optimized image failed to load, falling back to original: ${imageUrl}`);
                  target.src = imageUrl;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/80 via-lyana-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-shadow">{titleText}</h3>
              <div className={`w-16 h-1 bg-lyana-gold transition-all duration-300 ${isHovered ? 'w-24' : 'w-16'}`}></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 animate-fade-in mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-lyana-navy">
            {titleText}
          </h2>
          <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">{descriptionText}</p>
          <Button
            asChild
            className="bg-lyana-blue hover:bg-lyana-blue/90 group w-full sm:w-auto"
          >
            <Link to={`/${currentLang}${linkTo}`} className="flex items-center justify-center">
              {t.destinationFeature?.exploreServices || 'Explore Services'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rtl-translate-x-1 transition-transform rtl-flip-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFeature;
