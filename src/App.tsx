import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LanguageHandler from "@/components/common/LanguageHandler";
import LoadingOverlay from "@/components/common/LoadingOverlay";
import ScrollToTop from "@/components/common/ScrollToTop";
import { optimizeImageUrl, setupLazyImageLoading } from "@/lib/image-utils";
import { getCurrentLanguage, setCurrentLanguage } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { LoadingProvider } from "./contexts/LoadingContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dubai from "./pages/Dubai";
import Flights from "./pages/Flights";
import Greece from "./pages/Greece";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrapper component to handle language from URL
const LanguageWrapper = () => {
  const { lang } = useParams<{ lang: 'en' | 'ar' }>();
  const location = useLocation();

  // Handle language changes
  useEffect(() => {
    const validLang = lang === 'en' || lang === 'ar' ? lang : 'en'; // Default to 'en' if lang is invalid

    // Set language
    setCurrentLanguage(validLang);
    document.documentElement.lang = validLang;
    document.documentElement.dir = validLang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // If lang param is not 'en' or 'ar', redirect to default language retaining the path
  if (lang !== 'en' && lang !== 'ar') {
    const currentPath = location.pathname.replace(/^\/(en|ar)/, '') || "/";
    return <Navigate to={`/en${currentPath}`} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dubai" element={<Dubai />} />
      <Route path="/greece" element={<Greece />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    // Set smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Setup lazy loading for images
    setupLazyImageLoading();

    // Preload key images with correct URLs
    const imagesToPreload = [
      // Updated destination images
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf", // Tokyo
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", // Dubai
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff", // Santorini
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2", // Bali
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6", // Swiss Alps
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f", // Paris

      // Updated section images
      "https://images.pexels.com/photos/4491951/pexels-photo-4491951.jpeg", // Dubai Visa Services
      "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg" // Greece & Europe Visa Services
    ];

    // Preload images with lower resolution for faster loading
    imagesToPreload.forEach(src => {
      try {
        const img = new Image();
        // Use optimizeImageUrl function to get properly formatted URLs
        img.src = optimizeImageUrl(src, 400);

        // Add error handling for image loading
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
        };
      } catch (error) {
        console.warn(`Error preloading image: ${src}`, error);
      }
    });

    // Setup event listener to initialize lazy loading when DOM changes
    const observer = new MutationObserver(() => {
      setupLazyImageLoading();
    });

    // Start observing the document for DOM changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LoadingOverlay />
          <BrowserRouter>
            <ScrollToTop />
            <LanguageHandler />
            <Routes>
              {/* Route to handle paths without language prefix and redirect */}
              <Route path="/" element={<Navigate to={`/${getCurrentLanguage()}`} replace />} />
              <Route path="/:lang/*" element={<LanguageWrapper />} />
              {/* Fallback for completely invalid top-level paths if not caught by LanguageWrapper's internal Navigate */}
              {/* Or, LanguageWrapper can render NotFound for its internal '*' if lang is valid but sub-path is not */}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
};

export default App;
