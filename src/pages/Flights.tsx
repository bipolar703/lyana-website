
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessSteps from "@/components/services/ProcessSteps";
import { ArrowRight, Calendar, Plane, Globe, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/common/ContactForm";

/**
 * Flights page component
 * Displays information about flight booking services
 */
const Flights = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[60vh] bg-cover bg-center flex items-center" style={{ 
          backgroundImage: "linear-gradient(to right, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.5)), url('https://images.unsplash.com/photo-1496248013020-5dab89135e6e')"
        }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block px-4 py-2 bg-lyana-gold/30 text-white rounded-full mb-4 backdrop-blur-sm">
                Flight Booking Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                International Flight Reservations Made Easy
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From booking to boarding, our expert team handles every aspect of your flight reservations 
                with attention to detail and competitive pricing.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-lyana-blue hover:bg-lyana-blue/90 text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
              Why Book With Lyana
            </h2>
            <p className="text-gray-600">
              Discover the benefits of our professional flight booking services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="w-12 h-12" />,
                title: "Global Network",
                description: "Access to all major airlines and routes worldwide with competitive fares and flexible options."
              },
              {
                icon: <Ticket className="w-12 h-12" />,
                title: "Exclusive Deals",
                description: "Special rates and promotional offers not available through regular booking channels."
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Flexible Scheduling",
                description: "Options to modify your travel dates and itinerary with minimal change fees when possible."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Multi-City Bookings",
                description: "Complex itineraries and multi-destination flights arranged with optimal connections."
              },
              {
                icon: <ArrowRight className="w-12 h-12" />,
                title: "Fast Processing",
                description: "Quick confirmation and e-ticket delivery after booking is finalized."
              },
              {
                icon: <Plane className="w-12 h-12 rotate-45" />,
                title: "Premium Selections",
                description: "Options for business and first-class travel with exclusive airport lounge access."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center animate-fade-in hover:shadow-lg transition-all">
                <div className="text-lyana-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-lyana-navy">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Steps */}
        <ProcessSteps 
          title="Booking Process"
          subtitle="Simple steps to book your flight with Lyana"
          steps={[
            {
              number: 1,
              title: "Submit Request",
              description: "Share your travel details including destinations, dates, and preferences."
            },
            {
              number: 2,
              title: "Receive Options",
              description: "Our team will send you curated flight options based on your requirements."
            },
            {
              number: 3,
              title: "Confirm Booking",
              description: "Select your preferred option and complete the secure payment process."
            },
            {
              number: 4,
              title: "Get E-Tickets",
              description: "Receive your electronic tickets and travel documentation via email."
            }
          ]}
        />
        
        {/* Popular Routes */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
              Popular Flight Routes
            </h2>
            <p className="text-gray-600">
              Discover our most requested international destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                from: "Dubai",
                to: "London",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
                price: "from $450"
              },
              {
                from: "Dubai",
                to: "Paris",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                price: "from $480"
              },
              {
                from: "Athens",
                to: "Dubai",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                price: "from $350"
              },
              {
                from: "Dubai",
                to: "New York",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
                price: "from $750"
              },
              {
                from: "Dubai",
                to: "Tokyo",
                image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
                price: "from $680"
              },
              {
                from: "Athens",
                to: "Rome",
                image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b",
                price: "from $220"
              }
            ].map((route, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-64 animate-fade-in hover:shadow-xl transition-all">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lyana-navy/90 to-lyana-navy/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-white/80">From</p>
                      <h3 className="text-xl font-bold">{route.from}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                    <div>
                      <p className="text-sm text-white/80">To</p>
                      <h3 className="text-xl font-bold">{route.to}</h3>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-lyana-gold font-medium">{route.price}</span>
                    <Button 
                      asChild
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-lyana-navy"
                    >
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                  Let Us Handle Your Flight Bookings
                </h2>
                <p className="text-gray-600 mb-8">
                  Whether you're planning a business trip, family vacation, or solo adventure, our 
                  team is ready to find the perfect flight options tailored to your needs and preferences.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">What We Need From You</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Your travel dates (exact or approximate)</li>
                    <li>• Departure and arrival cities</li>
                    <li>• Number of travelers</li>
                    <li>• Class preference (economy, business, first)</li>
                    <li>• Any special requirements or preferences</li>
                  </ul>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <ContactForm 
                  title="Flight Booking Request" 
                  subtitle="Complete this form to request flight options and pricing"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Flights;
