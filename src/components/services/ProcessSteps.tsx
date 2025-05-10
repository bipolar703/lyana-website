
interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

const ProcessSteps = ({
  steps,
  title = "Our Simple Process",
  subtitle = "Getting your visa is straightforward with our streamlined process",
}: ProcessStepsProps) => {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lyana-navy">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-lyana-blue/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-lyana-blue flex items-center justify-center text-white text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-lyana-navy">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
