/**
 * Utility functions for handling images
 */

/**
 * Sets up lazy loading for images with the 'loading="lazy"' attribute
 * This function adds the 'loaded' class to images once they are loaded
 * to enable smooth fade-in transitions
 */
export function setupLazyImageLoading(): void {
  // Polyfill for IntersectionObserver in older browsers
  if (!('IntersectionObserver' in window) &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined') {
    // Simple fallback for older browsers - just mark all images as loaded
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((image) => {
      const img = image as HTMLImageElement;
      img.classList.add('loaded');
    });
    return;
  }

  // Use Intersection Observer to detect when images enter the viewport
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;

          // When image loads, add the 'loaded' class for fade-in effect
          lazyImage.onload = () => {
            lazyImage.classList.add('loaded');
          };

          // If image is already loaded (from cache), add the class immediately
          if (lazyImage.complete) {
            lazyImage.classList.add('loaded');
          }

          // Stop observing this image
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // Observe all images with loading="lazy" attribute
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((image) => {
      const img = image as HTMLImageElement;
      img.classList.add('loaded');
    });
  }
}

/**
 * Optimizes image URLs for better performance
 * @param url The original image URL
 * @param width The desired width of the image
 * @returns The optimized image URL
 */
export function optimizeImageUrl(url: string, width: number): string {
  // Safety check for empty or invalid URLs
  if (!url || typeof url !== 'string') {
    console.warn('Invalid URL passed to optimizeImageUrl:', url);
    return '';
  }

  try {
    // Remove any existing query parameters
    const baseUrl = url.split('?')[0];

    // For Unsplash images, use their image API to get optimized versions
    if (baseUrl.includes('images.unsplash.com')) {
      // Add width and quality parameters
      return `${baseUrl}?w=${width}&q=80&auto=format&fit=crop`;
    }

    // For Pexels images
    if (baseUrl.includes('images.pexels.com')) {
      // Add width parameter
      return `${baseUrl}?w=${width}&auto=compress&cs=tinysrgb`;
    }

    // Return original URL for other sources
    return url;
  } catch (error) {
    console.warn('Error optimizing image URL:', error);
    return url;
  }
}
