export const lazyLoadImage = (element, src) => {
  const loadImage = () => {
    element.src = src;
    element.classList.add('loaded');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  } else {
    loadImage();
  }
};

export const lazyLoadImages = (selector = '[data-src]') => {
  const images = document.querySelectorAll(selector);

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }

          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    images.forEach((img) => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
      }
    });
  }
};

export const createLazyLoader = (options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const src = element.getAttribute('data-src');
        const srcset = element.getAttribute('data-srcset');

        if (src) element.src = src;
        if (srcset) element.srcset = srcset;

        element.classList.add('loaded');
        element.removeAttribute('data-src');
        element.removeAttribute('data-srcset');
      }
    });
  }, defaultOptions);
};  