
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/common/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-lyana-blue" />,
      title: "Phone",
      details: [
        "+971 4 123 4567",
        "+30 21 0123 4567"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-lyana-blue" />,
      title: "Email",
      details: [
        "info@lyana-travel.com",
        "support@lyana-travel.com"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8 text-lyana-blue" />,
      title: "Address",
      details: [
        "Dubai Office: 123 Business Avenue, Suite 500, Dubai, UAE",
        "Athens Office: 45 Visa Street, Suite 200, Athens, Greece"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-lyana-blue" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary depending on the type of visa and destination. Dubai visas typically take 3-5 business days, while Greece (Schengen) visas may take 10-15 business days. We recommend applying at least 3-4 weeks before your planned travel date."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "In case of rejection, we'll analyze the reasons provided by the embassy/consulate and advise on the best course of action. This may include addressing the specific concerns and reapplying, or exploring alternative visa options. Our services include one reapplication free of charge if needed."
    },
    {
      question: "Do I need to visit your office in person?",
      answer: "No, our services are designed to be fully remote. We can handle the entire process via email, phone, and video consultations. We'll guide you on providing necessary documents electronically, and physical documents can be sent via secure courier if required."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, bank transfers, and PayPal. All payments are secured with industry-standard encryption. Payment is typically required in two phases: an initial consultation fee and the remaining balance when your application is ready for submission."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-lyana-navy text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/80">
                Have questions about our visa services? Our team is ready to assist you. 
                Reach out through any of the contact methods below or fill out our form 
                for a prompt response.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-bold text-lyana-navy ml-3">{item.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-lyana-navy">
                  Send Us a Message
                </h2>
                <ContactForm 
                  title="" 
                  subtitle=""
                  compact={true}
                />
              </div>
              
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-lyana-navy">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <h3 className="text-lg font-bold mb-3 text-lyana-navy">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-lyana-navy">
                Our Locations
              </h2>
              <p className="text-gray-600">
                With offices in Dubai and Athens, we're strategically positioned to provide 
                specialized visa services for our focus destinations.
              </p>
            </div>
            
            <div className="bg-gray-300 h-80 rounded-xl overflow-hidden animate-fade-in">
              {/* This would be replaced with an actual map integration */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Would Appear Here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
