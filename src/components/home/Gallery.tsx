import { optimizeImageUrl } from "@/lib/image-utils";
import { loadTranslations } from '@/lib/utils';
import { useEffect, useState } from "react";

/**
 * Gallery component
 * Displays a responsive grid of destination images with enhanced mobile experience
 */
interface GalleryProps {
  currentLang: 'en' | 'ar';
}

const Gallery = ({ currentLang }: GalleryProps) => {
  const [t, setT] = useState<any>({}); // Translation state

  useEffect(() => {
    loadTranslations(currentLang).then(setT); // Load translations
  }, [currentLang]);

  // Updated destination images with the correct image URLs
  const destinations = [
    {
      key: "tokyo",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      alt: "Tokyo - Man riding a bike down a street next to tall buildings",
      location: "Tokyo, Japan",
      description: "Experience the vibrant urban culture and modern cityscape of Tokyo."
    },
    {
      key: "dubai",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      alt: "Dubai - Modern skyline with iconic buildings",
      location: "Dubai, UAE",
      description: "Experience the luxury and iconic architecture of Dubai."
    },
    {
      key: "santorini",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      alt: "Santorini - White buildings on cliff overlooking the sea",
      location: "Santorini, Greece",
      description: "Discover the breathtaking beauty of Santorini's iconic white buildings and blue domes."
    },
    {
      key: "bali",
      url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
      alt: "Bali - Elephant with woman in traditional attire",
      location: "Bali, Indonesia",
      description: "Experience the unique culture and nature of Bali, Indonesia."
    },
    {
      key: "swiss",
      url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6",
      alt: "Switzerland - Majestic mountain snow view",
      location: "Swiss Alps, Switzerland",
      description: "Explore the breathtaking snowy peaks of the Swiss Alps."
    },
    {
      key: "paris",
      url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
      alt: "Paris - The Eiffel Tower",
      location: "Paris, France",
      description: "Behold the iconic Eiffel Tower in the heart of Paris."
    },
  ];

  return (
    <div className={`section-padding ${currentLang === 'ar' ? 'font-arabic' : ''}`} id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy relative inline-block">
            {t.gallery?.exploreGlobal || 'Explore Global Destinations'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-lyana-gold"></span>
          </h2>
          <p className="text-gray-600 mt-6 md:mt-8 px-2">
            {t.gallery?.desc || 'Discover incredible destinations worldwide. Let us help you get there with our seamless visa and flight booking services.'}
          </p>
        </div>

        {/* Responsive grid layout with improved spacing for different device sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64 sm:h-72 md:h-80 shadow-md"
            >
              {/* Image with optimized loading and URL */}
              <img
                src={optimizeImageUrl(destination.url, 800)}
                alt={destination.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to original URL if optimized URL fails
                  const target = e.target as HTMLImageElement;
                  if (target.src !== destination.url) {
                    console.warn(`Optimized image failed to load, falling back to original: ${destination.url}`);
                    target.src = destination.url;
                  }
                }}
              />

              {/* Enhanced overlay that's always visible on mobile but toggles on hover for desktop */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-lyana-navy/90 via-lyana-navy/50 to-transparent opacity-90"
              >
                {/* Content container with improved positioning and spacing */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  {/* Destination name with enhanced visibility */}
                  <span className="block font-bold text-lg md:text-xl mb-1 md:mb-2 text-shadow">
                    {t.gallery?.[destination.key] || destination.key}
                  </span>

                  {/* Description with improved readability */}
                  <p className="text-white/95 text-sm md:text-base leading-snug md:leading-relaxed text-shadow-sm">
                    {t.gallery?.[`${destination.key}Desc`] || `${destination.key} description`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
