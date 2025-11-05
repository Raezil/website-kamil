import React from 'react';

// Custom hook for detecting when an element is in view for animations
export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only when intersecting and only once
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView] as const;
};
