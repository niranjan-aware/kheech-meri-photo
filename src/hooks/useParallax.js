import { useEffect, useState } from 'react';
import { useScrollPosition } from './useScrollAnimation';

export const useParallax = (speed = 0.5) => {
  const scrollPosition = useScrollPosition();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(scrollPosition * speed);
  }, [scrollPosition, speed]);

  return offset;
};

export const useParallaxTransform = (speed = 0.5, elementRef) => {
  const scrollPosition = useScrollPosition();
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    if (elementRef?.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top + window.pageYOffset;
      const distance = scrollPosition - elementTop;
      const offset = distance * speed;
      setTransform(`translateY(${offset}px)`);
    }
  }, [scrollPosition, speed, elementRef]);

  return transform;
};