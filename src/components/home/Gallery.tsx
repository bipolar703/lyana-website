
const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Greece - Beautiful coastline with blue domed church",
      location: "Santorini, Greece"
    },
    {
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      alt: "Dubai - Desert landscape with camels",
      location: "Dubai Desert, UAE"
    },
    {
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      alt: "Greece - Ancient ruins and architecture",
      location: "Athens, Greece"
    },
    {
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      alt: "Dubai - Modern skyline with iconic buildings",
      location: "Downtown Dubai, UAE"
    },
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
            Discover Your Next Destination
          </h2>
          <p className="text-gray-600">
            Explore the beauty and wonder of Dubai and Greece. Let us help you get there with our seamless visa services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="block font-bold">{image.location}</span>
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
