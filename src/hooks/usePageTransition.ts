import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';

/**
 * Custom hook to handle page transitions with loading state
 * @param minLoadingTime Minimum loading time in milliseconds (default: 500ms)
 */
export const usePageTransition = (minLoadingTime: number = 500) => {
  const location = useLocation();
  const { setIsLoading, setLoadingType } = useLoading();

  useEffect(() => {
    // Start loading
    setIsLoading(true);
    setLoadingType('page');

    // Set a minimum loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoadingType(null);
    }, minLoadingTime);

    // Clean up
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, setLoadingType, minLoadingTime]);
};
