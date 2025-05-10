
import { Award, Clock, Shield, UserCheck } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
    <div className="text-lyana-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-lyana-navy">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Guidance",
      description: "Specialized visa consultants with in-depth knowledge of Dubai and Greece visa requirements.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Efficient Processing",
      description: "Streamlined procedures to ensure your visa application is processed quickly and accurately.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Reliable",
      description: "Your information is handled with the utmost confidentiality and security throughout the process.",
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Personalized Service",
      description: "Tailored approach to meet your specific travel needs and requirements for a smooth experience.",
    },
  ];

  return (
    <div className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">Why Choose Lyana</h2>
          <p className="text-gray-600">
            We provide exceptional visa services with a focus on simplicity, reliability, and customer satisfaction. 
            Our expertise ensures a hassle-free experience from application to approval.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
