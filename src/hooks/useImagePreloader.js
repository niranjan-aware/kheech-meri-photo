import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImages++;
        setLoadedCount(loadedImages);
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages++;
        setLoadedCount(loadedImages);
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  const progress = imageUrls.length > 0 ? (loadedCount / imageUrls.length) * 100 : 0;

  return { imagesLoaded, loadedCount, progress };
};

export const useImageLoader = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError('Failed to load image');
      setIsLoaded(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};