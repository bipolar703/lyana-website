import { ReactNode } from 'react';

interface PageHeroProps {
  backgroundImage: string;
  tag?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  currentLang?: 'en' | 'ar';
  height?: 'default' | 'tall';
  overlay?: 'default' | 'light' | 'dark';
}

/**
 * PageHero component
 * A reusable hero component for all pages with consistent spacing and styling
 */
const PageHero = ({
  backgroundImage,
  tag,
  title,
  subtitle,
  children,
  currentLang = 'en',
  height = 'default',
  overlay = 'default'
}: PageHeroProps) => {
  // Determine height class based on prop
  const heightClass = height === 'tall' ? 'min-h-[80vh]' : 'min-h-[60vh]';
  
  // Determine overlay gradient based on prop
  let overlayGradient = "linear-gradient(to right, rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.5))";
  if (overlay === 'light') {
    overlayGradient = "linear-gradient(to right, rgba(26, 31, 44, 0.5), rgba(26, 31, 44, 0.3))";
  } else if (overlay === 'dark') {
    overlayGradient = "linear-gradient(to right, rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.6))";
  }

  return (
    <div 
      className={`relative ${heightClass} bg-cover bg-center flex items-center pt-20 md:pt-24`} 
      style={{
        backgroundImage: `${overlayGradient}, url('${backgroundImage}')`
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {tag && (
            <span className="inline-block px-4 py-2 bg-lyana-gold/30 text-white rounded-full mb-4 backdrop-blur-sm">
              {tag}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16"></div>
    </div>
  );
};

export default PageHero;
