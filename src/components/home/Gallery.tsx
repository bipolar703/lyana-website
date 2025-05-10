
import { useState } from "react";

/**
 * Gallery component
 * Displays a grid of destination images with hover effects
 */
const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Greece - Beautiful coastline with blue domed church",
      location: "Santorini, Greece",
      description: "Experience the breathtaking vistas of Greece's iconic white and blue architecture."
    },
    {
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      alt: "Dubai - Desert landscape with camels",
      location: "Dubai Desert, UAE",
      description: "Explore the majestic desert landscapes surrounding the modern metropolis of Dubai."
    },
    {
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      alt: "Greece - Ancient ruins and architecture",
      location: "Athens, Greece",
      description: "Discover the rich historical heritage of ancient Greece in its magnificent ruins."
    },
    {
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      alt: "Dubai - Modern skyline with iconic buildings",
      location: "Downtown Dubai, UAE",
      description: "Marvel at Dubai's futuristic skyline, a testament to architectural innovation."
    },
    {
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      alt: "Paris - Iconic Eiffel Tower",
      location: "Paris, France",
      description: "Visit the romantic city of Paris and its world-famous landmarks and cuisine."
    },
    {
      url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      alt: "Switzerland - Mountain landscape with waterfall",
      location: "Swiss Alps, Switzerland",
      description: "Experience the stunning natural beauty of the Swiss Alps and its pristine landscapes."
    },
    {
      url: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
      alt: "Bali - Tropical beach paradise",
      location: "Bali, Indonesia",
      description: "Unwind in the tropical paradise of Bali with its pristine beaches and vibrant culture."
    },
    {
      url: "https://images.unsplash.com/photo-1601304382871-8b6214d99043",
      alt: "Tokyo - Modern cityscape with traditional elements",
      location: "Tokyo, Japan",
      description: "Experience the perfect blend of tradition and innovation in Japan's vibrant capital."
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="section-padding" id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy relative inline-block">
            Explore Global Destinations
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-lyana-gold"></span>
          </h2>
          <p className="text-gray-600 mt-8">
            Discover incredible destinations worldwide. Let us help you get there with our seamless visa and flight booking services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg group cursor-pointer h-80"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-lyana-navy/90 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-0">
                  <span className="block font-bold text-xl mb-2">{image.location}</span>
                  <p className={`text-white/90 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {image.description}
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
