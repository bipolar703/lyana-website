
import Hero from "@/components/home/Hero";
import DestinationFeature from "@/components/home/DestinationFeature";
import Benefits from "@/components/home/Benefits";
import Gallery from "@/components/home/Gallery";
import ContactForm from "@/components/common/ContactForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FlightService from "@/components/services/FlightService";

/**
 * Index page component
 * Main landing page of the website
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <DestinationFeature 
          title="Dubai Visa Services" 
          description="Experience hassle-free visa processing for Dubai with our specialized services. We handle all the paperwork and requirements, ensuring a smooth and efficient application process. Our team of experts will guide you every step of the way, from documentation to approval."
          imageUrl="https://images.unsplash.com/photo-1466442929976-97f336a657be"
          linkTo="/dubai"
        />
        
        <DestinationFeature 
          title="Greece & Europe Visa Services" 
          description="Navigate the complexities of Greece and European visa applications with ease. Our dedicated team specializes in Schengen visa requirements and procedures, offering personalized guidance to ensure your application meets all necessary criteria for approval."
          imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          linkTo="/greece"
          alignment="right"
        />
        
        <FlightService />
        
        <Benefits />
        
        <Gallery />
        
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-gray-600 mb-8">
                  Contact our travel experts today and take the first step toward your seamless travel experience. 
                  We're here to answer your questions and guide you through the planning process for your next adventure.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-lyana-navy">Our Guarantees</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Dedicated travel consultants for personalized service</li>
                    <li>• Regular updates on your visa application status</li>
                    <li>• Thorough document review to minimize rejection risk</li>
                    <li>• Competitive flight pricing with no hidden fees</li>
                    <li>• Comprehensive travel planning assistance</li>
                  </ul>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <ContactForm 
                  title="Contact Us" 
                  subtitle="Have questions about our services? Fill out the form below and we'll get back to you shortly."
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

export default Index;
