import { useEffect } from 'react';

/**
 * useReveal
 * Custom hook to animate elements when they scroll into view.
 * Elements must have the class `reveal-section`.
 */
export const useReveal = () => {
  useEffect(() => {

    // 1. Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          // 2. Check if element is visible
          if (entry.isIntersecting) {

            // 3. Add animation class
            entry.target.classList.add('is-visible');

            // 4. Stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,              
        rootMargin: "0px 0px -50px 0px", 
      }
    );

    // 5. Select elements to observe
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => observer.observe(section));

    // 6. Cleanup on unmount
    return () => observer.disconnect();

  }, []); // run only once when the component mounts
};
