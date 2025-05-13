import { getCurrentLanguage, loadTranslations } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

const LoadingOverlay = () => {
  const { isLoading, loadingType } = useLoading();
  const [lang, setLang] = useState<'en' | 'ar'>(getCurrentLanguage());
  const [t, setT] = useState<any>({});
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load translations when language changes
  useEffect(() => {
    loadTranslations(lang).then(setT);
  }, [lang]);

  // Simulate progress for better UX during language change
  useEffect(() => {
    if (isLoading && loadingType === 'language') {
      // Reset progress when loading starts
      setProgress(0);

      // Create an interval to increment progress
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          // Slow down as we approach 90% to give time for the actual refresh
          if (prev < 90) {
            return prev + (prev < 50 ? 2 : 1);
          }

          // When we reach 100%, the page will be refreshed by LanguageHandler
          if (prev >= 99) {
            // This ensures we don't get stuck at 99% if something goes wrong with the refresh
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
              progressIntervalRef.current = null;
            }
          }

          return prev;
        });
      }, 50);

      // Clean up interval when component unmounts or loading stops
      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      };
    } else if (!isLoading) {
      // Reset progress when loading stops
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, [isLoading, loadingType]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] transition-all duration-500">
      <div className={cn(
        "bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-2xl",
        "border border-gray-100 flex flex-col items-center max-w-md w-full",
        "transform transition-all duration-500 animate-fade-in"
      )}>
        {/* Premium branded loader */}
        <div className="relative mb-6">
          {loadingType === 'language' ? (
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-lyana-gold animate-spin"></div>
              <div className="w-16 h-16 rounded-full border-r-4 border-l-4 border-lyana-blue animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-lyana-navy animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-lyana-gold animate-spin"></div>
              <div className="w-16 h-16 rounded-full border-r-4 border-l-4 border-lyana-blue animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lyana-navy font-bold text-xl">L</span>
              </div>
            </div>
          )}
        </div>

        <div className="text-xl font-bold text-lyana-navy mb-2">
          {loadingType === 'language'
            ? (t.loading?.language || (lang === 'ar' ? 'جاري تغيير اللغة...' : 'Changing language...'))
            : (t.loading?.page || (lang === 'ar' ? 'جاري تحميل الصفحة...' : 'Loading page...'))}
        </div>

        <div className="text-sm text-gray-600 mt-2 text-center max-w-xs">
          {loadingType === 'language'
            ? (t.loading?.languageDesc || (lang === 'ar' ? 'يرجى الانتظار بينما نقوم بتحديث المحتوى وإعادة تحميل الصفحة' : 'Please wait while we update the content and refresh the page'))
            : (t.loading?.pageDesc || (lang === 'ar' ? 'يرجى الانتظار بينما نقوم بتحميل الصفحة' : 'Please wait while we load the page'))}
        </div>

        {/* Animated progress bar */}
        <div className="w-full mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
          {loadingType === 'language' ? (
            <div
              className="h-full bg-gradient-to-r from-lyana-blue via-lyana-gold to-lyana-blue transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          ) : (
            <div className="h-full bg-gradient-to-r from-lyana-blue via-lyana-gold to-lyana-blue bg-size-200 animate-gradient-x"></div>
          )}
        </div>

        {loadingType === 'language' && (
          <div className="mt-2 text-xs text-gray-500">
            {progress < 90 ?
              (t.loading?.preparing || (lang === 'ar' ? 'جاري التحضير...' : 'Preparing...')) :
              (t.loading?.refreshing || (lang === 'ar' ? 'جاري إعادة التحميل...' : 'Refreshing...'))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
