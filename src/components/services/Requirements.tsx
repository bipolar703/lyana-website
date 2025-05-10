
import { Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Requirement {
  title: string;
  content: string;
}

interface RequirementsProps {
  requirements: Requirement[];
  title?: string;
  subtitle?: string;
}

const Requirements = ({
  requirements,
  title = "Visa Requirements",
  subtitle = "Essential documents and information needed for your visa application",
}: RequirementsProps) => {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-lyana-navy">{title}</h2>
            <p className="text-gray-600 mb-6">{subtitle}</p>
            <div className="bg-lyana-softBlue p-6 rounded-lg border border-lyana-blue/20">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-lyana-blue mr-3" />
                <h3 className="text-lg font-bold text-lyana-navy">We're Here to Help</h3>
              </div>
              <p className="text-gray-700">
                Not sure if you meet all requirements? Our expert visa consultants can review your situation and advise on the best approach for your application.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              {requirements.map((req, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 font-semibold text-lyana-navy">
                    {req.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <div className="text-gray-600 prose max-w-none">
                      {req.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
