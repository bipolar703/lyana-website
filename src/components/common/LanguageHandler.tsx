import { useLoading } from '@/contexts/LoadingContext';
import { getCurrentLanguage } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

/**
 * Component to handle language changes and show loading indicator
 * This component doesn't render anything, it just handles the loading state
 */
const LanguageHandler = () => {
  const { lang } = useParams<{ lang?: 'en' | 'ar' }>();
  const location = useLocation();
  const { setIsLoading, setLoadingType } = useLoading();
  const currentLang = getCurrentLanguage();
  const previousLangRef = useRef<string | null>(null);
  const needsRefreshRef = useRef<boolean>(false);

  // Handle language changes and show loading indicator
  useEffect(() => {
    if (lang && lang !== currentLang) {
      // Start loading
      setIsLoading(true);
      setLoadingType('language');

      // Set flag to indicate we need a refresh
      needsRefreshRef.current = true;
      previousLangRef.current = currentLang;

      // Simulate a minimum loading time for better UX, then refresh the page
      const timer = setTimeout(() => {
        if (needsRefreshRef.current) {
          // Refresh the page to ensure all components properly update
          // Force a hard refresh to ensure all components are properly updated
          window.location.reload();
          // Reset the flag
          needsRefreshRef.current = false;
        } else {
          setIsLoading(false);
          setLoadingType(null);
        }
      }, 800); // Slightly longer than page transitions for language changes

      return () => clearTimeout(timer);
    }
  }, [lang, currentLang, setIsLoading, setLoadingType]);

  // Handle page transitions
  useEffect(() => {
    // Don't show loading for page transitions if we're already handling a language change
    if (needsRefreshRef.current) return;

    // Start loading
    setIsLoading(true);
    setLoadingType('page');

    // Set a minimum loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoadingType(null);
    }, 500);

    // Clean up
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, setLoadingType]);

  return null;
};

export default LanguageHandler;
