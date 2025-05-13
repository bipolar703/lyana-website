import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { loadTranslations } from '@/lib/utils';
import { useEffect, useState } from "react";

interface ContactFormProps {
  titleKey?: string;
  subtitleKey?: string;
  compact?: boolean;
  currentLang: 'en' | 'ar';
}

const ContactForm = ({
  titleKey = "contactForm.getInTouch",
  subtitleKey = "contactForm.getInTouchSubtitle",
  compact = false,
  currentLang,
}: ContactFormProps) => {
  const [t, setT] = useState<any>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadTranslations(currentLang).then(setT);
  }, [currentLang]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t.contactForm?.sentTitle || "Message Sent",
        description: t.contactForm?.sentDesc || "Thank you for contacting us...",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const getTranslation = (key: string, fallback: string) => {
    // Direct mapping for specific keys that need special handling
    if (key === "contactForm.getInTouch" && currentLang === 'ar') {
      return t.contactForm?.getInTouch || "تواصل معنا";
    }

    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return fallback;
    }
    return value || fallback;
  };

  return (
    <div className={`${compact ? "" : "bg-white rounded-xl shadow-lg p-6 md:p-8"} ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      {!compact && (
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-lyana-navy mb-3">{getTranslation(titleKey, 'Get In Touch')}</h3>
          <p className="text-gray-600">{getTranslation(subtitleKey, 'Have questions...')}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={currentLang === 'ar' ? 'text-right' : ''}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t.contactForm?.fullName || 'Full Name'}
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contactForm?.fullNamePlaceholder || 'Your full name'}
              required
              className="w-full"
              dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t.contactForm?.email || 'Email Address'}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contactForm?.emailPlaceholder || 'Your email address'}
              required
              className="w-full"
              dir="ltr" // Email addresses are always LTR
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t.contactForm?.phone || 'Phone Number'}
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contactForm?.phonePlaceholder || 'Your phone number'}
              className="w-full"
              dir="auto" // Auto-detect direction for phone numbers
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              {t.contactForm?.subject || 'Subject'}
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t.contactForm?.subjectPlaceholder || 'How can we help you?'}
              required
              className="w-full"
              dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t.contactForm?.message || 'Message'}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contactForm?.messagePlaceholder || 'Tell us more...'}
            required
            rows={5}
            className="w-full"
            dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
          />
        </div>

        <div className={currentLang === 'ar' ? 'text-right' : ''}>
          <Button
            type="submit"
            className="w-full md:w-auto bg-lyana-blue hover:bg-lyana-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (t.contactForm?.sending || 'Sending...') : (t.contactForm?.send || 'Send Message')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
