import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Load translation JSON for a given language code
 * @param lang 'en' or 'ar'
 * @returns Promise with translation object
 */
export async function loadTranslations(lang: 'en' | 'ar') {
  switch (lang) {
    case 'ar':
      return import('../locales/ar.json').then(m => m.default);
    case 'en':
    default:
      return import('../locales/en.json').then(m => m.default);
  }
}

/**
 * Get the current language from URL or localStorage, defaulting to 'en'
 */
export function getCurrentLanguage(): 'en' | 'ar' {
  if (typeof window !== 'undefined') {
    const pathLang = window.location.pathname.split('/')[1];
    if (pathLang === 'ar' || pathLang === 'en') {
      return pathLang;
    }
    const localLang = localStorage.getItem('lang');
    if (localLang === 'ar' || localLang === 'en') return localLang;
  }
  return 'en';
}

/**
 * Set the current language in localStorage and update html lang/dir attributes
 */
export function setCurrentLanguage(lang: 'en' | 'ar') {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
