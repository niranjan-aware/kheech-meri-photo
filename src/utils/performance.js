export const measurePerformance = (metricName, callback) => {
  const startTime = performance.now();
  const result = callback();
  const endTime = performance.now();
  
  console.log(`${metricName}: ${(endTime - startTime).toFixed(2)}ms`);
  
  return result;
};

export const logWebVitals = (metric) => {
  console.log(metric);
};

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export const checkImageLoadTime = (src) => {
  const startTime = performance.now();
  const img = new Image();
  
  return new Promise((resolve) => {
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image loaded in ${loadTime.toFixed(2)}ms: ${src}`);
      resolve(loadTime);
    };
    img.src = src;
  });
};