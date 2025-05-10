
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessSteps from "@/components/services/ProcessSteps";
import Requirements from "@/components/services/Requirements";
import ContactForm from "@/components/common/ContactForm";

const Greece = () => {
  const serviceOptions = [
    {
      title: "Tourist Visa",
      description: "For leisure travelers visiting Greece's beautiful destinations",
      features: [
        "90-day Schengen visa",
        "Expert document preparation",
        "Application submission",
        "Consulate appointment assistance",
        "Status tracking"
      ],
      price: "$179",
      popular: true,
      linkTo: "/contact"
    },
    {
      title: "Business Visa",
      description: "Designed for professionals attending meetings or conferences",
      features: [
        "Multiple entry options",
        "Expedited processing",
        "Document preparation",
        "Application submission",
        "Status tracking"
      ],
      price: "$249",
      linkTo: "/contact"
    },
    {
      title: "Long-Stay Visa",
      description: "For those planning extended stays or special purposes",
      features: [
        "Up to 1 year validity",
        "Comprehensive documentation support",
        "Application strategy",
        "Interview preparation",
        "Status tracking"
      ],
      price: "$329",
      linkTo: "/contact"
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Initial Assessment",
      description: "Consultation to determine your eligibility and the appropriate visa category for your travel needs."
    },
    {
      number: 2,
      title: "Document Preparation",
      description: "Guidance on collecting and preparing all required documentation according to Greek consulate standards."
    },
    {
      number: 3,
      title: "Application Submission",
      description: "Professional submission of your application, including assistance with appointments and forms."
    },
    {
      number: 4,
      title: "Visa Issuance",
      description: "Collection of your approved visa and final preparation for your journey to Greece."
    }
  ];

  const requirements = [
    {
      title: "Valid Passport",
      content: "Your passport must be valid for at least three months beyond your planned departure date from the Schengen Area. It should have at least two blank pages and be issued within the last 10 years."
    },
    {
      title: "Visa Application Form",
      content: "A completed and signed Schengen visa application form. Our team will assist you in filling this out correctly to avoid common mistakes."
    },
    {
      title: "Passport Photos",
      content: "Two recent color photographs meeting the specific Schengen visa photo requirements (35mm x 45mm, light background)."
    },
    {
      title: "Travel Insurance",
      content: "Proof of travel medical insurance covering at least €30,000 for medical emergencies and repatriation, valid throughout the Schengen area for your entire stay."
    },
    {
      title: "Proof of Accommodation",
      content: "Hotel reservations or proof of accommodation for your entire stay in Greece and any other Schengen countries you plan to visit."
    },
    {
      title: "Flight Itinerary",
      content: "Round-trip flight reservation showing dates of entry and exit from the Schengen Area."
    },
    {
      title: "Proof of Financial Means",
      content: "Bank statements from the last 3-6 months showing sufficient funds to support yourself during your stay (approximately €50-100 per day of your visit)."
    },
    {
      title: "Travel Itinerary",
      content: "A detailed day-by-day itinerary of your planned activities and places to visit in Greece and any other Schengen countries."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[60vh] bg-greece-pattern bg-cover bg-center flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-lyana-navy/80 to-lyana-navy/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Greece Visa Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Expert guidance through the Greece visa application process. 
                We simplify Schengen visa requirements to make your journey to Greece smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                  alt="Beautiful coastline of Santorini, Greece" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="animate-fade-in order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  Experience the Beauty of Greece
                </h2>
                <p className="text-gray-600 mb-4">
                  Greece, with its stunning islands, rich history, and Mediterranean charm, 
                  offers an unforgettable travel experience. Our specialized Greece visa services 
                  navigate the complexities of Schengen visa applications, ensuring a smooth path 
                  to approval.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of visa experts understands the specific requirements and nuances of 
                  Greek consulate procedures. We provide personalized guidance through every step 
                  of the process, from document preparation to application submission.
                </p>
                <p className="text-gray-600">
                  With Lyana's Greece visa services, you gain the confidence of working with 
                  specialists who maximize your chances of approval while minimizing delays and complications.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Options */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                Our Greece Visa Services
              </h2>
              <p className="text-gray-600">
                Choose the visa service that aligns with your travel purpose. Each option includes 
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
          title="Our Visa Application Process"
          subtitle="A straightforward approach to obtaining your Greece visa with expert guidance at every step"
        />
        
        {/* Requirements */}
        <Requirements
          requirements={requirements}
          title="Greece Visa Requirements"
          subtitle="Essential documentation needed for a successful Schengen visa application to Greece"
        />
        
        {/* Contact Form */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                  Start Your Greece Visa Application
                </h2>
                <p className="text-gray-600 mb-6">
                  Contact our Greece visa specialists today to begin your journey to the Mediterranean. 
                  We're ready to provide the expertise and support you need for a successful application.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">How We Enhance Your Application</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• In-depth knowledge of Greek consulate requirements</li>
                    <li>• Strategic presentation of your documentation</li>
                    <li>• Preparation for potential interview questions</li>
                    <li>• Regular updates throughout the application process</li>
                    <li>• Mitigation of common rejection factors</li>
                  </ul>
                </div>
              </div>
              <div className="animate-fade-in">
                <ContactForm 
                  title="Contact Our Greece Visa Experts" 
                  subtitle="Complete the form below to connect with our specialists and begin your visa application journey."
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

export default Greece;
