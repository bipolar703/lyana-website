
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import { Award, Globe, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-lyana-blue mb-4" />,
      title: "Reliability",
      description: "We deliver consistent, dependable service that our clients can count on throughout the visa application process."
    },
    {
      icon: <Award className="w-12 h-12 text-lyana-blue mb-4" />,
      title: "Expertise",
      description: "Our specialized knowledge in Dubai and Greece visa requirements ensures informed guidance and high success rates."
    },
    {
      icon: <Users className="w-12 h-12 text-lyana-blue mb-4" />,
      title: "Client Focus",
      description: "We prioritize our clients' needs, providing personalized solutions and attentive service from start to finish."
    },
    {
      icon: <Globe className="w-12 h-12 text-lyana-blue mb-4" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our visa facilitation services."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <AboutHero />
        
        {/* Main Content */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">Who We Are</h2>
                <p className="text-gray-600 mb-4">
                  Lyana is a specialized visa service company focused exclusively on facilitating 
                  travel to Dubai and Greece. We combine in-depth knowledge of visa regulations 
                  with a commitment to exceptional customer service to provide a seamless 
                  experience for our clients.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team consists of experienced visa consultants with extensive expertise in 
                  navigating the specific requirements and procedures for UAE and Schengen visas. 
                  We understand the complexities involved and have developed streamlined processes 
                  to ensure high approval rates.
                </p>
                <p className="text-gray-600">
                  What distinguishes Lyana is our specialized approach. Rather than offering general 
                  visa services for numerous destinations, we focus exclusively on Dubai and Greece, 
                  allowing us to provide unmatched expertise and insider knowledge for these 
                  specific locations.
                </p>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                  alt="Dubai skyline" 
                  className="rounded-xl shadow-lg w-full h-auto mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Greece coastal view" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center animate-fade-in mb-16">
              <h2 className="text-3xl font-bold mb-4 text-lyana-navy">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To provide reliable, efficient, and personalized visa services that eliminate 
                complexities and uncertainties, enabling our clients to experience seamless 
                travel to Dubai and Greece.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-lyana-navy">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in">
                    <div className="flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-lyana-navy">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                  alt="Professional visa services" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-4 text-lyana-navy">Why Choose Lyana</h2>
                <p className="text-gray-600 mb-4">
                  When you choose Lyana for your visa needs, you're partnering with specialists 
                  who understand the nuances of Dubai and Greece visa applications. Our focused 
                  approach allows us to offer advantages that general visa services cannot match.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-lyana-blue font-bold text-lg mr-2">•</span>
                    <span className="text-gray-600">
                      <strong className="text-lyana-navy">Specialized Expertise:</strong> Our focused knowledge of Dubai and 
                      Greece visa processes ensures you receive accurate, up-to-date guidance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lyana-blue font-bold text-lg mr-2">•</span>
                    <span className="text-gray-600">
                      <strong className="text-lyana-navy">Higher Success Rates:</strong> Our understanding of common rejection 
                      factors allows us to prepare applications that maximize approval chances.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lyana-blue font-bold text-lg mr-2">•</span>
                    <span className="text-gray-600">
                      <strong className="text-lyana-navy">Time Efficiency:</strong> We streamline the process, saving you 
                      valuable time and reducing the stress associated with visa applications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lyana-blue font-bold text-lg mr-2">•</span>
                    <span className="text-gray-600">
                      <strong className="text-lyana-navy">Personalized Service:</strong> We tailor our approach to your specific 
                      situation, providing customized guidance rather than generic advice.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-lyana-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our visa experts today and take the first step toward your seamless travel experience.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="bg-white text-lyana-navy px-8 py-3 rounded-md font-semibold transition-colors hover:bg-lyana-gold hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
