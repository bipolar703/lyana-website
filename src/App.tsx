
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dubai from "./pages/Dubai";
import Greece from "./pages/Greece";
import Flights from "./pages/Flights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

/**
 * Create a query client for React Query
 */
const queryClient = new QueryClient();

/**
 * Main App component
 * Sets up the application with providers and routes
 */
const App = () => {
  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload key images
    const imagesToPreload = [
      'https://images.unsplash.com/photo-1466442929976-97f336a657be', // Dubai
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb', // Greece
      'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e', // Greece
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098', // Paris
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716', // Switzerland
      'https://images.unsplash.com/photo-1469041797191-50ace28483c3', // Dubai
      'https://images.unsplash.com/photo-1496248013020-5dab89135e6e', // Flight
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dubai" element={<Dubai />} />
            <Route path="/greece" element={<Greece />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
