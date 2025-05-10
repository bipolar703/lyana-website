
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessSteps from "@/components/services/ProcessSteps";
import Requirements from "@/components/services/Requirements";
import ContactForm from "@/components/common/ContactForm";

const Dubai = () => {
  const serviceOptions = [
    {
      title: "Tourist Visa",
      description: "Perfect for leisure travel to experience Dubai's attractions",
      features: [
        "30-day single entry visa",
        "Fast processing time",
        "Document review by experts",
        "Application assistance",
        "Status tracking"
      ],
      price: "$149",
      popular: true,
      linkTo: "/contact"
    },
    {
      title: "Business Visa",
      description: "Ideal for corporate meetings and business opportunities",
      features: [
        "90-day multiple entry visa",
        "Priority processing",
        "Document review by experts",
        "Application assistance",
        "Status tracking"
      ],
      price: "$249",
      linkTo: "/contact"
    },
    {
      title: "Transit Visa",
      description: "Short stay option for travelers passing through Dubai",
      features: [
        "96-hour validity",
        "Express processing",
        "Document review",
        "Application assistance",
        "Status tracking"
      ],
      price: "$99",
      linkTo: "/contact"
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Speak with our visa experts to determine the right visa type for your travel needs."
    },
    {
      number: 2,
      title: "Documentation",
      description: "Submit required documents which our team will carefully review for accuracy and completeness."
    },
    {
      number: 3,
      title: "Application",
      description: "We handle the submission process, ensuring all requirements are properly addressed."
    },
    {
      number: 4,
      title: "Approval",
      description: "Receive your visa approval and prepare for your journey to Dubai."
    }
  ];

  const requirements = [
    {
      title: "Valid Passport",
      content: "Your passport must be valid for at least six months beyond your planned stay in Dubai. It should have at least two blank visa pages for entry stamps."
    },
    {
      title: "Passport-Sized Photographs",
      content: "Recent color photographs (taken within the last 3 months) with white background, sized according to UAE visa photo specifications."
    },
    {
      title: "Flight Itinerary",
      content: "Confirmed round-trip flight reservation showing entry to and exit from Dubai, with dates that match your intended stay period."
    },
    {
      title: "Hotel Reservations",
      content: "Proof of accommodation for the duration of your stay, either hotel bookings or a letter of invitation if staying with residents."
    },
    {
      title: "Financial Proof",
      content: "Bank statements from the last 3-6 months showing sufficient funds to cover your stay in Dubai. A minimum balance may be required depending on the visa type."
    },
    {
      title: "Travel Insurance",
      content: "Comprehensive travel insurance that covers medical emergencies, hospitalization, and repatriation for the entire duration of your stay in Dubai."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[60vh] bg-dubai-pattern bg-cover bg-center flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-lyana-navy/80 to-lyana-navy/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Dubai Visa Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Seamless visa processing for your journey to the dazzling city of Dubai. 
                Our expertise ensures a smooth application experience with high approval rates.
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  Your Gateway to Dubai
                </h2>
                <p className="text-gray-600 mb-4">
                  Dubai, with its stunning architecture, luxurious shopping, and vibrant culture, 
                  awaits your exploration. Our specialized visa services remove the complexities 
                  of the application process, allowing you to focus on planning your perfect Dubai adventure.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you're visiting for tourism, business, or transit purposes, our team of 
                  experienced visa consultants provides personalized guidance to ensure your application 
                  meets all UAE requirements for a successful outcome.
                </p>
                <p className="text-gray-600">
                  With Lyana's Dubai visa services, you gain access to expertise that significantly 
                  streamlines the process, saving you time and reducing the risk of application rejection.
                </p>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be"
                  alt="Dubai skyline with iconic buildings" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Options */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                Our Dubai Visa Services
              </h2>
              <p className="text-gray-600">
                Select the visa option that best suits your travel needs. Each service includes 
                comprehensive support throughout the application process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {serviceOptions.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  popular={service.popular}
                  linkTo={service.linkTo}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <ProcessSteps
          steps={processSteps}
          title="Simple 4-Step Process"
          subtitle="Our streamlined approach makes obtaining your Dubai visa quick and hassle-free"
        />
        
        {/* Requirements */}
        <Requirements
          requirements={requirements}
          title="Dubai Visa Requirements"
          subtitle="Essential documents and information needed for your Dubai visa application"
        />
        
        {/* Contact Form */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  Ready to Apply for Your Dubai Visa?
                </h2>
                <p className="text-gray-600 mb-6">
                  Contact our Dubai visa specialists today to begin your application process. 
                  We're here to answer your questions and guide you every step of the way.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">Why Our Clients Choose Us</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Specialized expertise in UAE visa regulations</li>
                    <li>• High approval success rate</li>
                    <li>• Clear communication throughout the process</li>
                    <li>• Time-saving service with minimal effort required from you</li>
                    <li>• Dedicated support from application to approval</li>
                  </ul>
                </div>
              </div>
              <div className="animate-fade-in">
                <ContactForm 
                  title="Start Your Visa Application" 
                  subtitle="Fill out the form below to connect with our Dubai visa specialists."
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

export default Dubai;
