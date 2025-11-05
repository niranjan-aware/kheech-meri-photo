export const optimizeImageUrl = (url, width = 800, quality = 80) => {
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  return url;
};

export const generateSrcSet = (url, widths = [400, 800, 1200, 1600]) => {
  if (url.includes('unsplash.com')) {
    return widths
      .map(width => `${url}?w=${width}&q=80&auto=format&fit=crop ${width}w`)
      .join(', ');
  }
  return url;
};

export const getBlurDataURL = (url) => {
  if (url.includes('unsplash.com')) {
    return `${url}?w=10&q=10&blur=10&auto=format&fit=crop`;
  }
  return url;
};

export const calculateAspectRatio = (width, height) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
};

export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = reject;
    img.src = url;
  });
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (sources) => {
  const promises = sources.map(src => preloadImage(src));
  return Promise.all(promises);
};

export const isImageCached = (src) => {
  const img = new Image();
  img.src = src;
  return img.complete;
};

export const generateWebPUrl = (url) => {
  if (url.includes('unsplash.com')) {
    return `${url}?fm=webp&auto=format`;
  }
  return url;
};

export const getOptimalImageSize = () => {
  const width = window.innerWidth;
  if (width < 640) return 640;
  if (width < 768) return 768;
  if (width < 1024) return 1024;
  if (width < 1280) return 1280;
  return 1920;
};